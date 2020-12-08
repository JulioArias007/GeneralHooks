import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';
import './useLayoutEffect.css';

export const Layout = () => {
    const { counter, increment } = useCouter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //console.log(state);
    const { quote } = !!data && data[0];
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
        
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p 
                ref = {pTag}
                className="mb-0"
                >
                    {quote}
                </p>                
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3)}
            </pre>



            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >
                Siguiente quote
            </button>




        </div>
    )
}
