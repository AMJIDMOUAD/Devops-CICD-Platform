pipeline {
    agent any


    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
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
