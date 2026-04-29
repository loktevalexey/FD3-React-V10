import combinedReducer from './redux/reducers.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Buttons } from './components/Buttons';
import { ShowInfo } from './components/ShowInfo';
import { ProfileChange } from './components/ProfileChange';

const store=createStore(combinedReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux example #2</h1>
      <Buttons />
      <br/><hr/><br/>
      <ProfileChange/>
      <br/><br/><hr/><br/>
      <ShowInfo/>
      <br/><br/>
    </div>
  </Provider>
);

export default App;
