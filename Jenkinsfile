pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                script {
                    git branch: 'main',
                        url: 'https://github.com/Rey2406/saucedemo-automation-challenge'
                }
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                    bat 'npx cypress install'
                }
            }
        }
        stage('Run tests') {
            steps {
                script {
                    bat 'npm run cy:run-ci'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**'
        }
    }
}