import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Counter from './Counter';
import CounterFn from './CounterFn';
import ColorPicker from './ColorPicker';

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];

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
            <li>
                <Link to="/colorpicker">Колорпикер</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/counter-cls">
                <Counter />
            </Route>
            <Route path="/counter-fn">
                <CounterFn />
            </Route>
            <Route path="/colorpicker">
                <ColorPicker options={colorPickerOptions} />
            </Route>
        </Switch>
    </>
);

export default App;
