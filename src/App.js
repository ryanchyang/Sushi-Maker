import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ClassicIndex from './pages/classic/Index';
import ClassicDetail from './pages/classic/Detail';
import Login from './pages/member/Login';
import MemIndex from './pages/member/Index';
import Register from './pages/member/Register';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/classic">
            <ClassicIndex />
          </Route>
          <Route path="/classic/detail">
            <ClassicDetail />
          </Route>
          <Route path="/member_login">
            <Login />
          </Route>
          <Route path="/member_index">
            <MemIndex />
          </Route>
          <Route path="/member_register">
            <Register />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
