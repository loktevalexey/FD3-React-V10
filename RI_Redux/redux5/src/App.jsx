import { Provider } from 'react-redux';
import { store } from './redux/store'

import { WeatherDisplay } from './components/WeatherDisplay';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux example #5</h1>
      <WeatherDisplay />
    </div>
  </Provider>
);

export default App;
