pipeline {
  agent any
  tools {
     nodejs 'recent node'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }
    stage('Run test') {
      steps {
        sh 'npm test'
      }
    }
  }
}