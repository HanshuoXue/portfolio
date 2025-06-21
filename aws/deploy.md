# AWS Deployment Guide

This guide explains how to deploy the Hudson Xue Portfolio to AWS using S3, CloudFront, and Route 53 for a production-ready setup.

## 🏗️ Architecture Overview

```
Internet → Route 53 → CloudFront → S3 Bucket
                   ↓
              SSL Certificate (ACM)
```

## 📋 Prerequisites

- AWS CLI installed and configured
- AWS account with billing enabled
- Domain name (for custom domain setup)
- Basic understanding of AWS services

## 🚀 Step-by-Step Deployment

### 1. Prepare the Build

```bash
# Install dependencies
npm install

# Build and export the static site
npm run build
npm run export

# This creates an 'out' directory with static files
```

### 2. Create and Configure S3 Bucket

#### Create the bucket:
```bash
# Replace 'your-portfolio-bucket' with your desired bucket name
aws s3 mb s3://hudson-portfolio-website
```

#### Upload files:
```bash
# Upload all files from the out directory
aws s3 sync out/ s3://hudson-portfolio-website --delete

# Set public read permissions
aws s3api put-bucket-policy --bucket hudson-portfolio-website --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::hudson-portfolio-website/*"
  }]
}'
```

#### Enable static website hosting:
```bash
aws s3 website s3://hudson-portfolio-website \
  --index-document index.html \
  --error-document 404.html
```

### 3. Set up CloudFront Distribution

#### Why CloudFront?
- Global CDN for faster loading
- HTTPS support
- Custom domain support
- Better performance and caching

#### Create distribution via AWS Console:
1. Go to CloudFront in AWS Console
2. Create Distribution
3. Configure:
   - **Origin Domain**: Select your S3 bucket
   - **Origin Path**: Leave empty
   - **Viewer Protocol Policy**: Redirect HTTP to HTTPS
   - **Allowed HTTP Methods**: GET, HEAD
   - **Cache Policy**: Managed-CachingOptimized
   - **Price Class**: Use Only U.S., Canada and Europe (or All depending on needs)

### 4. SSL Certificate (Optional but Recommended)

#### Request certificate in ACM:
```bash
# Request SSL certificate (must be in us-east-1 for CloudFront)
aws acm request-certificate \
  --domain-name www.hudsonxue.site \
  --subject-alternative-names hudsonxue.site \
  --validation-method DNS \
  --region us-east-1
```

#### Validate the certificate:
1. Check email or DNS records for validation
2. Complete validation process
3. Wait for certificate to be issued

### 5. Route 53 Domain Setup (Optional)

#### Create hosted zone:
```bash
aws route53 create-hosted-zone \
  --name hudsonxue.site \
  --caller-reference "portfolio-$(date +%s)"
```

#### Create DNS records:
1. Get CloudFront distribution domain name
2. Create ALIAS records pointing to CloudFront:
   - `A` record for root domain (hudsonxue.site)
   - `A` record for www subdomain (www.hudsonxue.site)

### 6. Update CloudFront with Custom Domain

After SSL certificate is validated:
1. Edit CloudFront distribution
2. Add Alternate Domain Names (CNAMEs):
   - `www.hudsonxue.site`
   - `hudsonxue.site` (optional)
3. Select your SSL certificate
4. Save changes and wait for deployment

## 🔧 Configuration Files

### CloudFormation Template (Optional)

Create `aws/cloudformation-template.yaml`:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Hudson Xue Portfolio Infrastructure'

Parameters:
  DomainName:
    Type: String
    Default: hudsonxue.site
    Description: Domain name for the portfolio

Resources:
  S3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub '${DomainName}-portfolio'
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: 404.html
      PublicAccessBlockConfiguration:
        BlockPublicAcls: false
        BlockPublicPolicy: false
        IgnorePublicAcls: false
        RestrictPublicBuckets: false

  S3BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref S3Bucket
      PolicyDocument:
        Statement:
          - Sid: PublicReadGetObject
            Effect: Allow
            Principal: '*'
            Action: 's3:GetObject'
            Resource: !Sub '${S3Bucket}/*'

  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Origins:
          - DomainName: !GetAtt S3Bucket.RegionalDomainName
            Id: S3Origin
            CustomOriginConfig:
              HTTPPort: 80
              HTTPSPort: 443
              OriginProtocolPolicy: http-only
        Enabled: true
        DefaultRootObject: index.html
        DefaultCacheBehavior:
          TargetOriginId: S3Origin
          ViewerProtocolPolicy: redirect-to-https
          AllowedMethods:
            - GET
            - HEAD
          CachedMethods:
            - GET
            - HEAD
          ForwardedValues:
            QueryString: false
            Cookies:
              Forward: none
        PriceClass: PriceClass_100
        ViewerCertificate:
          CloudFrontDefaultCertificate: true

Outputs:
  WebsiteURL:
    Value: !GetAtt S3Bucket.WebsiteURL
    Description: URL for website hosted on S3
  
  CloudFrontURL:
    Value: !GetAtt CloudFrontDistribution.DomainName
    Description: CloudFront distribution domain name
```

Deploy with:
```bash
aws cloudformation create-stack \
  --stack-name hudson-portfolio \
  --template-body file://aws/cloudformation-template.yaml \
  --parameters ParameterKey=DomainName,ParameterValue=hudsonxue.site
```

## 🔄 Automated Deployment Script

Create `aws/deploy.sh`:

```bash
#!/bin/bash

# Configuration
BUCKET_NAME="hudson-portfolio-website"
DISTRIBUTION_ID="E1234567890123"  # Replace with your CloudFront distribution ID

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment...${NC}"

# Build the project
echo -e "${YELLOW}Building project...${NC}"
npm run build
npm run export

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed!${NC}"
    exit 1
fi

# Upload to S3
echo -e "${YELLOW}Uploading to S3...${NC}"
aws s3 sync out/ s3://$BUCKET_NAME --delete --cache-control "max-age=86400"

if [ $? -ne 0 ]; then
    echo -e "${RED}S3 upload failed!${NC}"
    exit 1
fi

# Invalidate CloudFront cache
echo -e "${YELLOW}Invalidating CloudFront cache...${NC}"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

if [ $? -ne 0 ]; then
    echo -e "${RED}CloudFront invalidation failed!${NC}"
    exit 1
fi

echo -e "${GREEN}Deployment successful!${NC}"
echo -e "${GREEN}Your site should be live in a few minutes.${NC}"
```

Make it executable:
```bash
chmod +x aws/deploy.sh
```

## 📊 Monitoring and Analytics

### CloudWatch Metrics
Monitor your deployment with CloudWatch:
- S3 bucket requests
- CloudFront cache hit ratio
- Origin response times

### Google Analytics (Optional)
Add Google Analytics to track visitors:

1. Create GA4 property
2. Add tracking code to `pages/_document.tsx`
3. Configure enhanced ecommerce events

## 🛡️ Security Best Practices

### S3 Security
- Enable versioning for backup
- Configure lifecycle policies
- Use least privilege access

### CloudFront Security
- Enable AWS WAF if needed
- Configure security headers
- Use signed URLs for sensitive content (if applicable)

### SSL/TLS
- Use strong SSL policies
- Enable HSTS headers
- Regular certificate renewal

## 💰 Cost Optimization

### Estimated Monthly Costs
- **S3**: ~$1-2 (for static files)
- **CloudFront**: ~$1-5 (depending on traffic)
- **Route 53**: ~$0.50 (hosted zone)
- **ACM Certificate**: Free

### Cost Reduction Tips
- Use S3 Intelligent Tiering
- Configure CloudFront price class
- Monitor usage with AWS Cost Explorer
- Set up billing alerts

## 🔧 Troubleshooting

### Common Issues

**Build fails:**
```bash
# Check Node.js version
node --version  # Should be 18+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**S3 upload permission denied:**
```bash
# Check AWS credentials
aws sts get-caller-identity

# Verify bucket permissions
aws s3api get-bucket-policy --bucket hudson-portfolio-website
```

**CloudFront not updating:**
- Invalidate cache: `/*`
- Wait 5-15 minutes for propagation
- Check distribution status

**SSL certificate issues:**
- Ensure certificate is in us-east-1
- Verify domain ownership
- Check DNS validation records

## 📞 Support

For deployment issues:
1. Check AWS CloudFormation events
2. Review CloudWatch logs
3. Verify IAM permissions
4. Contact AWS Support if needed

---

**Remember to replace placeholder values (bucket names, domain names, etc.) with your actual values!** 