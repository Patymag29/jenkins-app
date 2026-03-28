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
        } // end of 'build' stage



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
        } // end of 'test' stage



        // stage('Deploy') {
        //     agent {
        //         docker {
        //             image 'node:22.14.0-alpine'
        //             reuseNode true
        //         }
        //     }
        //     steps {
        //         sh '''
        //             echo "Installing Netlify CLI..."
        //             npm install -g netlify-cli

        //             echo "Checking Netlify version..."
        //             netlify --version

        //             echo "Checking build folder..."
        //             ls -la build

        //             echo "Deploying to Netlify..."
        //             netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
        //         '''
        //     } // end of 'sh' block
        // }// end of 'deploy' stage
        // stage('Deploy') {
        //     agent {
        //         docker {
        //             image 'amazon/aws-cli'
        //             reuseNode true
        //             args '--entrypoint= ""' // Override the default entrypoint to allow running custom commands
        //         }
        //     }
       
        stage('Deploy') {
            agent {
                docker {
                    image 'amazon/aws-cli'
                    reuseNode true
                    args '--entrypoint ""'  // Override the default entrypoint to allow running custom commands
                }
            }
            // steps {
            //     withCredentials([usernamePassword(
            //         credentialsId: 'my-aws',
            //         usernameVariable: 'AWS_ACCESS_KEY_ID',
            //         passwordVariable: 'AWS_SECRET_ACCESS_KEY'
            //     )]) {
            //         sh '''             
            //          echo "Checking AWS CLI version..."
            //          aws --version
                
            //         echo "Testing credentials with sts get-caller-identity..."
            //         aws sts get-caller-identity
                    
            //         echo "Listing S3 buckets..."
            //         aws s3 ls 

            //         echo "Deploying build folder to S3..."
            //         # aws s3 sync build/ s3://seu-bucket-name/ --delete 
            //         '''
            //     } // end of 'withCredentials' block
            // } // end of 'steps' block - ✅ ADICIONADO
            steps {
                    withCredentials([usernamePassword(
                        credentialsId: 'my-aws',
                        usernameVariable: 'AWS_ACCESS_KEY_ID',
                        passwordVariable: 'AWS_SECRET_ACCESS_KEY'
                    )]) {
                        sh '''
                            export AWS_DEFAULT_REGION=us-east-1
                            
                            echo "🚀 Deploying to bucket: amzn-s3-bucket-patymag29"
                            
                            # deploy from build to S3
                            aws s3 sync build/ s3://amzn-s3-bucket-patymag29/ --delete
                            
                            echo "✅ Deploy concluded!"
                            echo "🌐 Available site em: http://amzn-s3-bucket-patymag29.s3-website-us-east-1.amazonaws.com"
                        '''
                    }
            }// end of 'steps' block
        } // end of 'deploy' stage
    } // end of 'main' stage   
} // end of 'pipeline' block
// netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
//sh '''
         //   npm install -g netlify-cli
         //   netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
      //  '''