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
        </Switch>
      </>
    </Router>
  );
}

export default App;
