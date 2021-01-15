import { observe } from 'mobx';
import React from 'react';
import './Counter.css';
import counter from './store/counter';
import {observer} from 'mobx-react-lite'

const Counter = observer(() => {
    return (
        <div className="counter">
            {counter.total}
            <div className="counter__btns">
                <button className="btns__plus" onClick={() => counter.increment()}>+</button>
                <button className="btns__minus"onClick={() => counter.dincrement()}>-</button>
            </div>
        </div>
    )
})

export default Counter;