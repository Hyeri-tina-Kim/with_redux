import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MyPage from './components/MyPage';
import PageRoute from './PageRoute';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/"/>
        <Switch>
          <PageRoute path="/mypage" component={MyPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
