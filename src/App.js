import { useReducer } from 'react';
import './App.css';
import { reducers } from './resucer/reduc';
import { ADD_TYPE, DELETE_TYPE } from './resucer/types';

function App() {
    const initState = { count: 0 };
    const [state, dispatch] = useReducer(reducers, initState);

    function onAdd() {
        dispatch({ type: ADD_TYPE, count: 1 });
    }
    function onDelete() {
        dispatch({ type: DELETE_TYPE, count: 1 });
    }

    return (
        <div className='app'>
            <h1>COUNT: {state.count}</h1>
            <button onClick={onAdd}>ADD</button>
            <button onClick={onDelete}>DELETE</button>
        </div>
    );
}

export default App;
