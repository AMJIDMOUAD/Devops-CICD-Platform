pipeline {
    agent any

  environment {
            SONAR_TOKEN = credentials('sonar-token')
        }

    stages {
      
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

      

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                    npx sonar-scanner \
                    -Dsonar.projectKey=myapp \
                    -Dsonar.sources=. \
                    -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t amjidcloud/myapp:latest .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push yourdockerhub/myapp:latest'
            }
        }
    }
}