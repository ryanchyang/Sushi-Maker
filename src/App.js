import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMe } from './WebApi';
// import { AuthContext } from './contexts';

// Classic
import ClassicIndex from './pages/classic/Index';
import ClassicDetail from './pages/classic/Detail';
// Member
import Login from './pages/member/Login';
import MemIndex from './pages/member/Index';
import Register from './pages/member/Register';
import IndexActive from './pages/member/IndexActive';
import IndexAnalyze from './pages/member/IndexAnalyze';
import IndexHistoryOrder from './pages/member/IndexHistoryOrder';
import IndexRevise from './pages/member/IndexRevise';
// Share
import Share from './pages/share/Share';
import ShareItems from './pages/share/ShareItems';
import ShareSaves from './pages/share/ShareSaves';
import ShareEdit from './pages/share/ShareEdit';
import ShareUpload from './pages/share/ShareUpload';
import SharePost from './pages/share/SharePost';

// Home
import Home from './pages/home/Index';
import LatestNews from './pages/home/LatestNews';
import NewsDetails from './pages/home/NewsDetails';
import EvntsDetails from './pages/home/EvntsDetails';
import EvntsSignUp from './pages/home/EvntsSignUp';
import Entry from './pages/home/components/Entry';
// import NavPage from './pages/home/components/NavPage';
//setorder
import StepStart from './pages/setorder/StepStart';
import StepOne from './pages/setorder/StepOne';
import StepTwo from './pages/setorder/StepTwo';
import StepThree from './pages/setorder/StepThree';
import StepFour from './pages/setorder/StepFour';
import SetOrderFinal from './pages/setorder/SetOrderFinal';
import SetOrderList from './pages/setorder/SetOrderList';
// customize
import CusMiDetail from './pages/customize/CusMiDetail';
import Customize from './pages/customize/Customize';

// Cart
import CartStepOne from './pages/cart/StepOne';
import CartStepTwo from './pages/cart/StepTwo';
import CartStepThree from './pages/cart/StepThree';
import CartStepFour from './pages/cart/StepFour';
import CartList from './pages/cart/CartList';

function App() {
  //判斷使用者是否登入
  const [user, setUser] = useState('');

  // 判斷使用者是否點擊漢堡
  const [navIsOpen, setNavIsOpen] = useState(false);

  // Entry蓋版只跑一次
  const [entryOpen, setEntryOpen] = useState(true);

  //renden時再做一次getMe , 避免換頁登出
  // useEffect(() => {
  //   getMe().then(response => {
  //     console.log(response);
  //     if (response.ok) {
  //       setUser(response.data);
  //     }
  //   });
  //   setEntryOpen(true);
  // }, []);

  return (
    //如有toke, 將token傳下去
    // <AuthContext.Provider value={{ user, setUser }}>
    <Router>
      <>
        <Switch>
          <Route path="/classic" exact>
            <ClassicIndex />
          </Route>
          {/* 為了在詳細頁轉到詳細頁時強制re-render  */}
          <Route
            path="/classic/detail/:id?"
            render={() => <ClassicDetail key={Date.now()} />}
          />
          <Route path="/member" exact>
            <MemIndex />
          </Route>
          <Route path="/member/login">
            <Login />
          </Route>
          <Route path="/member/register">
            <Register />
          </Route>
          <Route path="/member/active">
            <IndexActive />
          </Route>
          <Route path="/member/analyze">
            <IndexAnalyze />
          </Route>
          <Route path="/member/historyorder">
            <IndexHistoryOrder />
          </Route>
          <Route path="/member/revise">
            <IndexRevise />
          </Route>
          <Route path="/share" exact>
            <Share />
          </Route>
          <Route
            path="/share/items/:id?"
            render={() => <ShareItems key={Date.now()} />}
          ></Route>
          <Route path="/share/saves">
            <ShareSaves />
          </Route>
          <Route path="/share/upload">
            <ShareUpload />
          </Route>
          <Route path="/share/edit">
            <ShareEdit />
          </Route>
          <Route path="/share/post">
            <SharePost />
          </Route>
          <Route path="/" exact>
            <Home
              navIsOpen={navIsOpen}
              setNavIsOpen={setNavIsOpen}
              entryOpen={entryOpen}
              setEntryOpen={setEntryOpen}
            />
          </Route>
          <Route path="/latest-news/eventsdetail/signup/:id" exact>
            <EvntsSignUp navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
          </Route>
          <Route path="/latest-news/eventsdetail/:id" exact>
            <EvntsDetails navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
          </Route>
          <Route path="/latest-news/newsdetail/:id" exact>
            <NewsDetails navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
          </Route>
          <Route path="/latest-news/:cate?" exact>
            <LatestNews navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
          </Route>
          <Route path="/setorder/stepstart" exact>
            <StepStart />
          </Route>
          <Route path="/setorder/stepone" exact>
            <StepOne />
          </Route>
          <Route path="/setorder/steptwo" exact>
            <StepTwo />
          </Route>
          <Route path="/setorder/stepthree" exact>
            <StepThree />
          </Route>
          <Route path="/setorder/stepfour" exact>
            <StepFour />
          </Route>
          <Route path="/setorder/setorderfinal">
            <SetOrderFinal />
          </Route>
          <Route path="/setorder/setorderlist">
            <SetOrderList />
          </Route>
          <Route path="/customize/:id" exact>
            <CusMiDetail />
          </Route>
          <Route path="/customize">
            <Customize />
          </Route>
          <Route path="/cart/stepone" exact>
            <CartStepOne />
          </Route>
          <Route path="/cart/steptwo" exact>
            <CartStepTwo />
          </Route>
          <Route path="/cart/stepthree" exact>
            <CartStepThree />
          </Route>
          <Route path="/cart/stepfour/:cid" exact>
            <CartStepFour />
          </Route>
          <Route path="/cart/cartlist">
            <CartList />
          </Route>
        </Switch>
      </>
    </Router>
    // </AuthContext.Provider>
  );
}

export default App;
