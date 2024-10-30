pipeline {
    agent any

    stages {
        stage('Scan') {
            steps {
                withSonarQubeEnv('sq1') {
                    sh 'npm install'
                    sh 'npx sonar-scanner -Dsonar.projectKey=coursebook -Dsonar.sources=.'
                }
            }
        }
    }
}
