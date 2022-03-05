import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Classic
import ClassicIndex from './pages/classic/Index';
import ClassicDetail from './pages/classic/Detail';
// Member
import Login from './pages/member/Login';
import MemIndex from './pages/member/Index';
import Register from './pages/member/Register';
// Share
import Share from './pages/share/Share';
import ShareFilter from './pages/share/ShareFilter';
import ShareItems from './pages/share/ShareItems';
import ShareSaves from './pages/share/ShareSaves';
import ShareEdit from './pages/share/ShareEdit';
import ShareUpload from './pages/share/ShareUpload';
import ShareMyShare from './pages/share/ShareMyShare';
// Home
import Home from './pages/home/Index';
import News from './pages/home/News';
import NewsDetails from './pages/home/NewsDetails';
import Evnts from './pages/home/Evtns';
import EvntsDetails from './pages/home/EvntsDetails';
import EvntsSignUp from './pages/home/EvntsSignUp';
//setorder
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
  return (
    <Router>
      <>
        <Switch>
          <Route path="/classic" exact>
            <ClassicIndex />
          </Route>
          <Route path="/classic/detail">
            <ClassicDetail />
          </Route>
          <Route path="/member" exact>
            <MemIndex />
          </Route>
          <Route path="/member/login">
            <Login />
          </Route>
          <Route path="/member/register">
            <Register />
          </Route>
          <Route path="/share" exact>
            <Share />
          </Route>
          <Route path="/share/filter">
            <ShareFilter />
          </Route>
          <Route path="/share/items/:id?">
            <ShareItems />
          </Route>
          <Route path="/share/saves">
            <ShareSaves />
          </Route>
          <Route path="/share/upload">
            <ShareUpload />
          </Route>
          <Route path="/share/edit">
            <ShareEdit />
          </Route>
          <Route path="/share/my-share">
            <ShareMyShare />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/evnts/details/signup">
            <EvntsSignUp />
          </Route>
          <Route path="/evnts/details">
            <EvntsDetails />
          </Route>
          <Route path="/evnts">
            <Evnts />
          </Route>
          <Route path="/news/details">
            <NewsDetails />
          </Route>
          <Route path="/news">
            <News />
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
          <Route path="/cart/stepfour" exact>
            <CartStepFour />
          </Route>
          <Route path="/cart/cartlist">
            <CartList />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
