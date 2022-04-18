pipeline {
  agent any
  tools {
     nodejs 'recent node'
  }

  options {
    timeout(time: 4, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }
    stage('Run start and shutdown after 2 minutes') {
      steps {
        sh 'npm start'
      }
    }
  }
}