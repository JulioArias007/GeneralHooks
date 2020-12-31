import React, { useState } from 'react';
import '../06-memos/memorize.css';
import {useCouter} from '../../hooks/useCouter';
import {Small} from './Small';


export const Memorize = () => {
    const { counter, increment } = useCouter(1);
    const [ show, setShow ] = useState(true);


    return (
        <div>
            <h1>Counter: <Small value ={counter}/></h1>
            <hr/>

            <button
                className= "btn btn-primary"
                onClick={() => increment(1)}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick = {() => { setShow(!show) }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
