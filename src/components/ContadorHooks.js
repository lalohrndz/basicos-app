import React, {useState} from 'react';

export default function ContadorHooks (){
    const [contador, setContador] = useState(0);
    /* console.log(useState()) */

    const Sumar = () => setContador(contador + 1)
    const Restar = () => setContador(contador - 1)

    return(
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={Sumar}>sumar</button>
                <button onClick={Restar}>restar</button>
            </nav>
            <h3>{contador}</h3>
        </>
    )
}