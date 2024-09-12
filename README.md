MERN Stack 3-Tier Application Deployment with Docker-Compose and GitHub Actions
Project Overview
This project demonstrates the deployment of a MERN (MongoDB, Express, React, Node.js) application using Docker-Compose for containerization and GitHub Actions for automated deployment to an AWS EC2 instance.

Prerequisites
EC2 Instance Setup:

An Ubuntu EC2 instance on AWS.
Docker and Docker-Compose installed on the EC2 instance:


bash
sudo apt update
sudo apt install docker.io -y
sudo apt install docker-compose -y
SSH access enabled.


GitHub Secrets:

Add the following secrets in your GitHub repository:
SSH_PRIVATE_KEY: Your EC2 instance's private SSH key.
EC2_HOST: The public IP or DNS of the EC2 instance.
EC2_USER: Your EC2 instance username (default is usually ubuntu).
Project Structure
The project consists of three services:

Frontend: React app served on port 80.
Backend: Node.js API running on port 5000.
Database: MongoDB running on port 27017.
Docker-Compose Setup
You can find the full Docker-Compose configuration in the repository:

docker-compose.yml
GitHub Actions Workflow
The project uses GitHub Actions to automate deployment to an EC2 instance. The workflow triggers on a push to the main branch and deploys the application using Docker-Compose.

Check out the GitHub Actions workflow in the repository:

deploy.yml
How to Run the Project
Clone the Repository:

bash
git clone https://github.com/nkdkd/Containerized-mern-app.git
Build and Start the Containers: Run the following commands on your EC2 instance:
make sure you have docker and docker-compose installed on your machine 
bash
docker-compose up -d --build

Access the Application:

Frontend: Access the app at http://<EC2_PUBLIC_IP>.
Backend: API at http://<EC2_PUBLIC_IP>:5000.
MongoDB: Available on port 27017.
Screenshots
- **Successful EC2 Deployment**:
  ![Deployment Success](./assets/Update deploy.yml · nkdkd_Containerized-mern-app@cc621ed - Google Chrome 9_12_2024 11_36_00 AM.png)

- **Frontend Interface**:
  ![Frontend Interface](.assets/STTISS _ Attendance - Google Chrome 9_12_2024 12_04_26 PM.png)



License
Licensed under the MIT License.
