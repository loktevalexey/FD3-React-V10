import { BrowserRouter } from 'react-router-dom';

import { PagesLinks } from './components/PagesLinks';
import { PagesRouter } from './routes/PagesRouter';

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Router example</h1>
                <PagesLinks />
                <PagesRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
