import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/homepage/homepage';
import ArtistInfo from '../components/artistpage/artistpage';
import SearchTrack from '../components/searchTrack/seachtrack';
import Header from '../components/header/header';
import { GlobalStyle } from './styled';

function App() {
  return (
    <Header>
      <GlobalStyle />
      <Switch>
        <Route exact path="/search">
          <SearchTrack />
        </Route>
        <Route path="/:name">
          <ArtistInfo />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Header>
  );
}

export default App;
