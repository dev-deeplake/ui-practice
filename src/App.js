import './App.css';
import GlobalStyles from './globalStyle';
import Main from './components/pages/Main';


/* 모달, 버튼을 포함한 웹페이지 연습하기
- Modal
---- Modal 2개 구현
---- 1) 취소 & 확인이 있고 overlay를 클릭했을 때 모달이 닫히지 않는 형태
---- 2) 닫기 버튼만 있고 overlay를 클릭했을 때 모달이 닫히는 형태
---- 3) 웹페이지상에 모달으로 연결되는 2개 버튼 형태가 각각 달라야 함
*/

function App() {

  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  );
}







export default App;
