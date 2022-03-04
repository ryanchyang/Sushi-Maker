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
import Evts from './pages/home/Evts';
import EvtsDetails from './pages/home/EvtsDetails';
import EvtsSignUp from './pages/home/EvtsSignUp';
//setorder
import StepOne from './pages/setorder/StepOne';
import StepTwo from './pages/setorder/StepOne';
import StepThree from './pages/setorder/StepOne';
import StepFour from './pages/setorder/StepOne';
import SetOrderFinal from './pages/setorder/SetOrderFinal';
import SetOrderList from './pages/setorder/SetOrderList';
// customize
import CusMiDetail from './pages/customize/CusMiDetail';
import Customize from './pages/customize/Customize';

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
          <Route path="/evts/details/signup">
            <EvtsSignUp />
          </Route>
          <Route path="/evts/details">
            <EvtsDetails />
          </Route>
          <Route path="/evts">
            <Evts />
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
        </Switch>
      </>
    </Router>
  );
}

export default App;
