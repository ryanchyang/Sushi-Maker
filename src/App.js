import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrollToTop';
// import { AuthContext } from './contexts';

// customize
// import CusMiDetail from './pages/customize/CusMiDetail';
import Customize from './pages/customize/Customize';

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
            {/* <Route path="/" exact>
              <Home
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
                entryOpen={entryOpen}
                setEntryOpen={setEntryOpen}
              />
            </Route> */}
            <Route path="/">
              <Customize />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    </Router>

    // </AuthContext.Provider>
  );
}

export default App;
