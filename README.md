
# KiCanDiary
KiCanDiary는 사용자가 일상을 기록할 수 있는 웹 기반 일기장 애플리케이션입니다. 이 프로젝트는 클라이언트 사이드에서 React.js를, 서버 사이드에서는 Node.js를 사용하여 구현되었습니다. 데이터 저장소로는 MongoDB와 NoSQL을 활용하여, 기본적인 일기 작성, 조회, 수정, 삭제 기능을 제공합니다. 사용자 인증은 Firebase를 통해 구현되었으며, 전역 상태 관리는 Redux를 사용하여 효율적으로 관리합니다. 

# 프로젝트의 주요 특징 및 기술 스택

- 클라이언트 사이드: React.js를 사용하여 사용자 인터페이스를 구성하고, Sass와 React Bootstrap을 활용하여 스타일링을 적용했습니다. 반응형 웹 디자인을 위해 다양한 미디어 쿼리를 적용하여, 모든 디바이스에서 일관된 사용자 경험을 제공합니다.
- 서버 사이드: Node.js와 Express를 기반으로 RESTful API를 구축하여, 클라이언트와 서버 간의 통신을 관리합니다. MongoDB를 사용하여 데이터를 저장하고, Mongoose를 통해 데이터 모델링을 수행합니다.
- 인증: Firebase Authentication을 사용하여 사용자 인증 기능을 구현하였습니다. 이를 통해 사용자는 안전하게 로그인하고 자신의 일기를 관리할 수 있습니다.
- 상태 관리: Redux와 @reduxjs/toolkit을 사용하여 애플리케이션의 상태를 관리합니다. 이를 통해 애플리케이션의 다양한 컴포넌트 간 상태 공유와 관리가 용이해집니다.
- 텍스트 에디터: React Quill, 오픈소스 위지윅(WYSIWYG) 텍스트 에디터를 React 애플리케이션에 통합하여, 사용자가 텍스트를 쉽게 편집하고 스타일링할 수 있게 합니다.

반응형
@media (max-width: 1280px) {}
@media (max-width: 768px) {}
@media (max-width: 480px) {}

# 설치 라이브러리
# client

npx create-react-app .  
npm install sass  
npm install react-bootstrap bootstrap  
npm install react-router-dom

npm install quill@1.3.6

npm i swiper
npm i react-calendar

npm i @studio-freight/lenis
npm install axios  
npm install http-proxy-middleware  
npm i @emotion/css  
npm i @emotion/react  
npm i @emotion/styled @emotion/react
npm install firebase
npm install react-redux  
npm install @reduxjs/toolkit

(npm install react-quill --save -> 대체 함)

-   ✍️React-quill
    React Quill은 React 기반의 위지윅 에디터 라이브러리 중 하나로, Quill.js 라이브러리를 React에서 사용할 수 있도록 wrapping한 것이다.
    React Quill은 커스터마이징 가능한 옵션과 이벤트 핸들러를 제공하여, 더욱 다양한 위지윅 에디터를 구현할 수 있다.
    Quill.js ? 오픈소스로 제공되며, 최신 웹 기술을 활용하여 구축된 위지윅 에디터이다.

‼️설치 : 1. `npm install react-quill --save `
[React Quill Editor 적용 참고](https://velog.io/@mingle_1017/React-Quill-Editor%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90)

# server

(npm init;)  
npm init -y;  
npm install express --save;  
npm install mongodb;  
npm install nodemon --save;

npm install path --save;  
npm install mongoose --save;

npm install multer --save;
npm install request

npm install --save aws-sdk@2.348.0
npm install multer-s3@2.10.0

npm install axios

