pipeline {
    agent any

    stages {

       
        environment {
            SONAR_TOKEN = credentials('sonar-token')
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

         stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Dependency Check') {
            steps {
                dependencyCheck additionalArguments: '--scan ./',
                                odcInstallation: 'DependencyCheck'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
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