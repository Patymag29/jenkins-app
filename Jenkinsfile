pipeline { // define CI/CD flow
    agent any // run at any available machine

    stages {
        stage('Build') { //'build' stage (phase)
            agent { // define agent for this stage - agent is a machine where the code will be built and tested
                docker { // use Docker to run the build and test steps in a container
                    image 'node:22.14.0-alpine' //docker will run my code in a Docker container with Node.js 22.14.0 on Alpine Linux
                    reuseNode true //reuseNode true - to reuse the same container for all stages, so we can share files between stages (like build artifacts)
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

        stage('Test') { // 'test' stage (phase)
            agent {
                docker {
                    image 'node:22.14.0-alpine' //docker will run my code in a Docker container
                    reuseNode true
                }
            }
            steps { 
                sh '''
                    test -f build/index.html 
                    npm test
                '''
            }
        }
    }
}