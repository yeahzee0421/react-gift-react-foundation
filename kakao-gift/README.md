# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## ✏️요구 사항

- [x] Create React App을 기반의 프로젝트 생성
- [x] Typescript 및 절대경로 alias 세팅
- [x] airbnb eslint & prettier 추가
- [x] emotion 라이브러리 추가 및 reset css 적용
- [x] 불필요한 파일, 코드 제거
- [x] 폴더구조 반영

## 🗂️폴더 구조

```
📦public
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┗ 📂common
 ┣ 📂pages
 ┣ 📂store
 ┣ 📂utils
 ┣ 📜App.css
 ┣ ...
 ┗ 📜reportWebVitals.ts
```

- assets: 폰트, 이미지 등 프로젝트에 이용되는 다양한 자산들을 저장하는 폴더
- components: 공통적으로 사용될 수 있는 컴포넌트를 저장하는 폴더
  - common: 범용적으로 사용되는 컴포넌트를 저장
- pages: 페이지 단위의 컴포넌트를 저장하는 폴더
- store: zustand, recoil, redux와 같은 상태 관리 라이브러리 사용 시 관련 파일을 저장하는 폴더
- utils: 공통적으로 사용하는 함수를 저장하는 폴더

