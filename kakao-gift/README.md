# 🍪react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## ⚒️실행 가이드

```
cd kakao-gift
npm install
npm run start
```

## ✏️STEP1 프로젝트 세팅

### 🧾요구사항

-   [x] Create React App을 기반의 프로젝트 생성
-   [x] Typescript 및 절대경로 alias 세팅
-   [x] airbnb eslint & prettier 추가
-   [x] emotion 라이브러리 추가 및 reset css 적용
-   [x] 불필요한 파일, 코드 제거
-   [x] 폴더구조 반영

### 🗂️폴더 구조

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

-   assets: 폰트, 이미지 등 프로젝트에 이용되는 다양한 자산들을 저장하는 폴더
-   components: 공통적으로 사용될 수 있는 컴포넌트를 저장하는 폴더
    -   common: 범용적으로 사용되는 컴포넌트를 저장
-   pages: 페이지 단위의 컴포넌트를 저장하는 폴더
-   store: zustand, recoil, redux와 같은 상태 관리 라이브러리 사용 시 관련 파일을 저장하는 폴더
-   utils: 공통적으로 사용하는 함수를 저장하는 폴더

## 💡STEP2 Storybook을 사용한 컴포넌트 구현

### ⚒️스토리북 실행 가이드

```
cd kakao-gift
npm install
npm run storybook
```

### 🧾요구사항

-   [x] **Button** 컴포넌트 구현
    -   Theme Props에 따라 버튼의 컬러와 디자인이 다르도록 구현
    -   Size Props에 따라 버튼의 Size가 다르게 보여지도록 구현 (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지도록 구현)
    -   Button Element의 기본 속성들을 모두 사용할 수 있도록 구현
-   [x] **Input** 컴포넌트 구현
    -   disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있도록 구현
    -   invalid Props 에 따라 Input의 값이 잘못되었음을 UI에서 인지할 수 있도록 구현
    -   Size Props에 따라 버튼의 Size가 다르게 보여지도록 구현. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지도록 함.)
    -   Input Element의 기본 속성들을 모두 사용할 수 있도록 구현
-   [x] **Image** 컴포넌트 구현
    -   ratio Props에 따라 이미지 비율을 설정할 수 있도록 함 (value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
    -   radius Props에 따라 모서리가 둥글게 되도록 구현 (value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
    -   Img Element의 기본 속성들을 모두 사용할 수 있도록 구현
-   [x] **GoodsItem** 컴포넌트 구현
    -   Default 형태와 Ranking 형태의 컴포넌트를 각각 구현
    -   공통으로 imageSrc, subtitle, title, amount Props를 넘겨받도록 함.
    -   Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받음. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여짐.
-   [x] **Grid, Container** 컴포넌트 구현

## 📍STEP 3

### Q1. webpack은 무엇이고 어떤 역할을 할까?

웹팩은 오픈소스 **자바스크립트 모듈 번들러**로서 여러 개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리이다.

✔️**모듈 번들러란?**

웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미한다.

✔️**웹팩이 왜 필요할까?**

여러 파일의 JS 코드를 압축하여 최적화할 수 있어 로딩에 대한 네트워크 비용을 줄일 수 있다.
모듈 단위로 개발이 가능하여, 가독성과 유지보수하기 좋다.

### Q2. 브라우저는 어떻게 JSX 파일을 읽을 수 있을까?

`React`는 뷰를 만들기 위한 라이브러리이고, `React DOM`은 UI를 실제로 브라우저에 렌더링할 때 사용하는 라이브러리이다.

`React DOM`에는 리액트 element를 브라우저에 렌더링하는 데 필요한 모든 도구가 들어있는데, 대표적인 예시로 리액트 element와 모든 자식 element를 함께 렌더링하는 `ReactDOM.render`가 있다.
이때, 리액트에서는 JS와 XML의 X를 합친 JSX를 사용하여 자바스크립트 코드 안에서 바로 리액트 element를 생성하고, 정의할 수 있게 해준다. 이러한 방법으로 브라우저는 JSX 파일을 읽을 수 있다.

✔️**엘리먼트와 컴포넌트의 차이점은?**

`엘리먼트`는 자바스크립트의 객체이고 리액트로 뷰를 그리는 가장 기본적인 요소이다. 한번 생성 후 변형되지 않는다. 반면 `컴포넌트`는 엘리먼트를 반환하는 함수 혹은 클래스를 의미한다. 재사용성이 가능하며 엘리먼트를 자유롭게 다룰 수 있는 장점이 있다.

### Q3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있을까?

리액트에서 컴포넌트의 상태를 다루는 법은 크게 두가지이다.

하나는 변경할 수 있는 상태를 다루는 것이고, 하나는 변경할 수 없는 상태를 다루는 것이다. 즉 컴포넌트 내에서 변경 가능한 데이터인 상태와 컴포넌트가 변경할 수 없고 읽기 전용으로 전달받는 데이터인 속성을 구분한다.

리액트는 상태를 `immutabl`e하게 관리한다. 상태가 변경되면 상태의 주솟값이 변경되고 이를 통하여 변화를 감지한다. 이것이 바로 상태(state)가 배열의 형태로 존재할 때 배열에 원소를 `push()` 메소드를 사용해 추가하더라도, 상태 변화를 알아채지 못하는 이유이다.

상태를 직접 수정한다면 리액트가 상태 변화를 감지하지 못할 수 있다. 따라서 `setState` 메소드를 사용하여 상태를 변경한다. 또한 상태를 업데이트할 때 새로운 객체나 배열을 생성하여 업데이트한다. 또 다른 예시로 객체나 배열의 깊이가 1인 경우에는 Spread 연산자 `…` 를 사용하거나 중첩된 경우에는 `immer` 라이브러리를 사용하여 불변성을 유지한다.
