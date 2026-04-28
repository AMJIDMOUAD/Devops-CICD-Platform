pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/AMJIDMOUAD/Devops-CICD-Platform.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f myapp-container || true'
                sh 'docker run -d -p 3000:3000 --name myapp-container myapp'
            }
        }
    }
}
