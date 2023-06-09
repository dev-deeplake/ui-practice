# ui-practice
react를 통해 ui를 제작하는 연습을 해보았습니다.

(demo link: [https://ui-practice-ten.vercel.app/](https://ui-practice-ten.vercel.app/))

작업물의 기능과 기타 설명은 다음과 같습니다.

## Button
- 기본 버튼 컴포넌트 : "Button.jsx"
  - configStyle 속성으로 스타일을 넘겨주어 스타일을 원하는 대로 자유롭게 커스텀할 수 있도록 설계
  - Icon Component와 아이콘의 사이즈를 속성으로 넘겨주어 버튼 내에 선택적으로 아이콘을 탑재할 수 있도록 설계
    - 아이콘의 사이즈는 "min" - "sm" - "md" - "lg"의 4단계로 조절 지원
    - repo상에 제작된 아이콘은 2개이며, 그 중 알림 용도의 아이콘은 컴포넌트화 하며 붉은 원이 함께 들어가도록 작업

## Input
- 기본 input 컴포넌트 : "Input.jsx"
  - 라벨과 input이 한 쌍으로 만들어짐
- '가격' input의 경우 기본 컴포넌트를 사용하면서 Handler를 조작하여 숫자만 입력 + 천의 자리마다 콤마 입력 구현
- '이름'과 '가격' input 중 하나라도 기본 값이 변경되지 않았을 경우 '저장' 버튼 클릭시 alert

## Modal
- 모달 2개 구현
  - '취소', '확인'이 있고 배경을 클릭했을 때 모달이 닫히지 않음
  - '닫기' 버튼만 있고 배경을 클릭했을 때 모달이 닫힘
- react portal을 사용하지 않고 구현했습니다.
- 모달 내 버튼의 경우 기존 정의한 Button 컴포넌트를 활용했습니다.

## Selects
- div를 이용한 select 구현
  - 기본 문구: "옵션을 선택해 주세요!" 에서 하위 option 선택시 상단 div의 문구 변화 구현
  - select가 열리고 닫힐 때 아이콘 변경
  - 좌측 select의 경우 부모가 overflow: hidden 속성을 가지고 있더라도 영향을 받지 않도록 구현 (react portal 사용)
    - 상단 select 위치를 계산하여 상단 select의 위치가 변경되어도 하단 option select 위치가 서로 떨어지지 않도록 구현



