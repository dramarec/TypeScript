import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Counter from './Counter';
import CounterFn from './CounterFn';

const App = () => (
    <>
        <h1>React with TypeScript </h1>

        <ul>
            <li>
                <Link to="/counter-cls">Счётчик-класс</Link>
            </li>
            <li>
                <Link to="/counter-fn">Счётчик-функция</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/counter-cls">
                <Counter />
            </Route>
            <Route path="/counter-fn">
                <CounterFn />
            </Route>
        </Switch>
    </>
);

export default App;
