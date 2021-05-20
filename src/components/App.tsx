import { Route, Switch, Link } from 'react-router-dom';
import Counter from './Counter';

const App = () => (
    <>
        <h1>React with TypeScript </h1>

        <ul>
            <li>
                <Link to="/counter-cls">Счётчик-класс</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/counter-cls">
                <Counter />
            </Route>
        </Switch>
    </>
);

export default App;
