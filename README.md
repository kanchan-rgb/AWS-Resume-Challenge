# AWS Resume Challenge – CI/CD Focus 🚀

This project is part of the **AWS Resume Challenge** and demonstrates real-world **CI/CD automation**, serverless backend integration, and cloud deployment using AWS and GitHub Actions.

The project automates the deployment of a resume website to AWS and tracks visitor counts using a serverless architecture.

---

## 🎯 Project Objective

The primary objective of this project is to showcase:

- Continuous Integration & Continuous Deployment (CI/CD)
- Automated cloud deployments using GitHub Actions
- Serverless backend integration using AWS
- Secure and scalable cloud architecture

---

## 🔁 CI/CD Pipeline Overview (Core Feature)

A **GitHub Actions CI/CD workflow** is implemented to automate deployment.

### 🔧 When Enabled, the Workflow:

1. Triggers on every push to the `main` branch
2. Checks out the latest code
3. Authenticates with AWS using GitHub Secrets
4. Deploys static files to **Amazon S3**
5. Invalidates **Amazon CloudFront** cache
6. Updates the live website automatically

This pipeline eliminates manual deployment and reflects **production-grade CI/CD practices**.

---

## ⚙️ CI/CD Workflow Details

- **CI/CD Tool**: GitHub Actions  
- **Trigger**: `push` to `main`  
- **Deployment Target**: Amazon S3  
- **CDN**: Amazon CloudFront  
- **Security**: AWS IAM + GitHub Secrets  


---

## 🚦 Workflow Status

- ✅ CI/CD pipeline is fully implemented  
- ⛔ Workflow is **currently disabled intentionally**

### Reason:
- To avoid unintended AWS updates
- To prevent unnecessary cloud costs
- To keep the repository safe for review

> The workflow can be enabled at any time to restore automatic deployment.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend (Serverless)
- AWS Lambda (Python)
- Amazon DynamoDB (Visitor Count)

### Cloud & DevOps
- Amazon S3 (Static Website Hosting)
- Amazon CloudFront (CDN)
- AWS IAM (Security)
- GitHub Actions (CI/CD)

---

## 🔢 Visitor Counter (DynamoDB Integration)

- Visitor count is stored in **Amazon DynamoDB**
- A **Lambda function** is triggered via API Gateway
- Each page load increments the visitor count
- The frontend fetches and displays the updated count

This demonstrates backend serverless integration with a static frontend.

---

## 🏗️ Architecture Summary

- Resume website hosted on **Amazon S3**
- Content delivered globally via **CloudFront**
- Visitor count managed by **Lambda + DynamoDB**
- CI/CD handled by **GitHub Actions**
- Secure access via **IAM roles and policies**

---

## 🧠 Key Learnings

- Implementing CI/CD pipelines using GitHub Actions
- Automating AWS deployments
- Integrating DynamoDB with Lambda
- Managing serverless APIs
- Secure cloud authentication practices

---

## 🚀 Future Enhancements

- Enable CI/CD with production secrets
- Add Infrastructure as Code (Terraform / CloudFormation)
- Add CloudWatch monitoring
- Improve UI and performance
- Add tests to CI pipeline
