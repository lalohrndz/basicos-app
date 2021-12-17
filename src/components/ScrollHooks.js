import React,{useState,useEffect} from 'react';

export default function ScrollHooks(){
    const[scrollY,setScrollY] = useState(0);

    useEffect(()=>{
        console.log("Moviendo el scroll");

        const detectarScroll = () => {
            setScrollY(window.pageYOffset)
        }

        window.addEventListener("scroll",detectarScroll);

        return () => {
            window.removeEventListener("scroll",detectarScroll)
        }
    }, [scrollY]);
    

    useEffect(()=>{
        console.log("Fase de Montaje");
    }, []);

    useEffect(()=>{
        console.log("Fase de Actualizacion");
    })

    useEffect(()=>{
        console.log("Fase de Desmontaje");

        
    })    

    return(
        <>
            <h2>Hooks - useEffect y Life Cycle</h2>
            <p>Scroll Y del navegador {scrollY}px</p>     
        </>
    )
}
