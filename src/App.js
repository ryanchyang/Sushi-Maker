import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ClassicIndex from './pages/classic/Index';
import ClassicDetail from './pages/classic/Detail';
import Member_login from './pages/member/Member_login';

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
            <Member_login />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
