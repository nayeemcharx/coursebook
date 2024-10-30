pipeline {
    agent any

    stages {
        stage('Scan') {
            steps {
                withSonarQubeEnv('sq1') {
                    sh 'npm install'
                    sh 'npx sonar-scanner \
                        -Dsonar.projectKey=coursebook \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.login=$SONAR_AUTH_TOKEN'
                }
            }
        }
    }
}
