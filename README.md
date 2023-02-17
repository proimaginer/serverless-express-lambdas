# serverless-express-lambdas

## npm_modules 설치 방법

```
npm run update
```

## 로컬 실행 방법

```
npm run offline
```

## 배포 방법

```
npm run deploy:dev
```

## 파일 구조

- /lib/\*\*  
  공용 functions

- /src/\*\*  
  실제 동작하는 apis 코드

  - /controllers/\*\*  
    controllers를 모아둔 폴더

  - /routes/\*\*  
    routes를 모아둔 폴더
    
  - /services/\*\*  
    services를 모아둔 폴더

- .eslintrc  
  eslint 설정 파일

- .gitignore  
  git에 저장하지 않을 파일 및 폴더 구조 설정 파일

- .prettierrc.js  
  prettier 설정 파일

- package.json  
  package 파일

- serverless.yml  
  serverless 환경 세팅 파일
