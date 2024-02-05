# Deploy a Static Website to S3 using GitHub Actions

## Overview

This repository contains a GitHub Actions workflow to automate the deployment of a static website to Amazon S3. The workflow is triggered on every push to the `main` branch.

## Usage

-  Set up your AWS credentials and store them as secrets in your GitHub repository:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - Optionally, `AWS_ROLE_TO_ASSUME` if you are assuming a role.
- Customise the **s3bucket.yml** workflow to suit your project's structure and requirements.
- Push changes to the `main` branch, and the GitHub Actions workflow will automatically deploy the static website to S3.

    ![deploy](/assets/deploy.png)

## Workflow Configuration

The workflow is defined in `.github/workflows/s3bucket.yml`. It consists of the following steps:

- **Checkout Repository:** Checks out the repository for the workflow run.
- **Configure AWS Credentials:** Configures AWS credentials for the workflow using the provided secrets.
- **Create S3 Bucket with Website Configuration:** Uses AWS CLI commands to create an S3 bucket, configure it for static website hosting, and set public access policies.
- **Display Website URL:** Outputs the URL where your website is hosted.
- **Deploy static site to S3 bucket:** Uses `aws s3 sync` to upload your static site to the S3 bucket.

## Checking the Deployed Static Website

- Login to AWS Management Console and navigate to the Amazon S3 service.

- Locate the S3 bucket you created for hosting the static website.

    ![bucket](/assets/bucket.png)

    - Note: Another way to check that the S3 bucket has been created is to configure AWS CLI with the necessary credentials and then verify the creation:

    ```
    aws configure 
    aws s3 ls
    ```

- Verify that the static files are present:

    ![files](/assets/objects.png)

- Static website hosting:

    ![static](/assets/static.png)

- Visit the website URL:

    ![index](/assets/site1.png)

- I can make further modifications and run the commands:

```
git add .
git commit -m "[commit-message]"
git push origin main
```
  ![commands](/assets/commands.png)

- Updates are deployed immediately:

  ![index](/assets/site2.png)
