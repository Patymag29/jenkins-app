pipeline { // define CI/CD flow
    agent any // run at any available machine

    stages {
        stage('Build') { //'build' stage (phase)
            agent {
                docker {
                    image 'node:22.14.0-alpine' //docker will run my code in a Docker container
                    reuseNode true
                }
            }

            steps { // execute Linux commands below
                sh '''
                ls -la
                node --version
                npm --version
                npm install
                npm run build
                ls -la
                '''
            }
        }

        stage('Test') { 'test' stage (phase)
            // testes aqui
        }
    }
}