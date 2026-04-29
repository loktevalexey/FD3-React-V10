import { HungryGuy } from './components/HungryGuy';
import { PlateApplesView } from './components/PlateApplesView';
import { PlatePearsView } from './components/PlatePearsView';
import { plateModel } from './models/PlateModel';

const App = () => (
  <div>
    <h1>MobX example</h1>
    <HungryGuy/>
    <br/><br/><hr/><br/>
    <PlateApplesView plateModel={plateModel} />
    <br/><hr/><br/>
    <PlatePearsView plateModel={plateModel} />
    <br/><br/>
  </div>
);

export default App;
