import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrollToTop';
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
import ShareThree from './pages/share/ShareThree';

// Home
import Home from './pages/home/Index';
import LatestNews from './pages/home/LatestNews';
import NewsDetails from './pages/home/NewsDetails';
import EvntsDetails from './pages/home/EvntsDetails';
import EvntsSignUp from './pages/home/EvntsSignUp';
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
  // localStorage.setItem('LoginStatus', false);
  // const loginStatus = localStorage.getItem('loginStatus');
  //判斷使用者是否登入
  // const [isLogin, setIsLogin] = useState(loginStatus);

  // 判斷使用者是否點擊漢堡
  const [navIsOpen, setNavIsOpen] = useState(false);

  // Entry蓋版只跑一次
  const [entryOpen, setEntryOpen] = useState(true);

  return (
    //如有toke, 將token傳下去
    // <AuthContext.Provider value={{ user, setUser }}>

    <Router>
      <>
        {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
        <ScrollToTop>
          <Switch>
            <Route path="/classic" exact>
              <ClassicIndex navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            {/* 為了在詳細頁轉到詳細頁時強制re-render  */}
            <Route
              path="/classic/detail/:id?"
              render={() => (
                <ClassicDetail
                  key={Date.now()}
                  navIsOpen={navIsOpen}
                  setNavIsOpen={setNavIsOpen}
                />
              )}
            />
            <Route path="/member" exact>
              <MemIndex navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/member/login">
              <Login navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/member/register">
              <Register navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/member/active">
              <IndexActive navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/member/analyze">
              <IndexAnalyze navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/member/historyorder">
              <IndexHistoryOrder
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
              />
            </Route>
            <Route path="/member/revise">
              <IndexRevise navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/share" exact>
              <Share navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route
              path="/share/items/:id?"
              render={() => (
                <ShareItems
                  key={Date.now()}
                  navIsOpen={navIsOpen}
                  setNavIsOpen={setNavIsOpen}
                />
              )}
            ></Route>
            <Route path="/share/saves">
              <ShareSaves navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/share/upload">
              <ShareUpload navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/share/edit">
              <ShareEdit navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/share/post">
              <SharePost navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/share/three">
              <ShareThree />
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
              <StepStart navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/setorder/stepone" exact>
              <StepOne navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/setorder/steptwo" exact>
              <StepTwo navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/setorder/stepthree" exact>
              <StepThree navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/setorder/stepfour" exact>
              <StepFour navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/setorder/setorderfinal">
              <SetOrderFinal
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
              />
            </Route>
            <Route path="/setorder/setorderlist">
              <SetOrderList navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/cusmidetail">
              <CusMiDetail navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/customize">
              <Customize navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/cart/stepone" exact>
              <CartStepOne navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/cart/steptwo" exact>
              <CartStepTwo navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/cart/stepthree" exact>
              <CartStepThree
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
              />
            </Route>
            <Route path="/cart/stepfour/:cid" exact>
              <CartStepFour navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
            <Route path="/cart/cartlist">
              <CartList navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    </Router>

    // </AuthContext.Provider>
  );
}

export default App;
