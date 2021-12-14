import React from "react";
import Componente from "./Componente";

export class EventosES6 extends Componente{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(){
        console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(){
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES6</h2>

                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}


//Properties initializer
export class EventosES7 extends Componente{
    state = {
        contador:0,
    }

    //Arrow functions
    sumar = (e) => {
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1
        })
    }

    //Arrow functions
    restar = (e) => {
        console.log("Restando");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES7</h2>

                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

/* function Boton(props){
    return(
        <button onClick={props.MyOnClick}>Boton hecho con componente</button>
    )
} */

const Boton = (props) =>{
    return(
        <button onClick={props.MyOnClick}>Boton hecho con componente</button>

    )
};

export class MasSobreEventos extends Componente{
    handleClick = (e, message) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(e.target);
        console.log(message);
    };


    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e,"Hola pasando parametro desde el evento")}>Saludar</button>
                <hr />
                {/* <Boton onClick={(e) => this.handleClick(e,"Hola pasando parametro desde el evento")}>Saludar evento</Boton> */}
                <Boton 
                MyOnClick={(e) => this.handleClick(e,"Hola pasando parametro desde el componente")}>
                    Saludar evento
                </Boton>
            </div>
        )
    }
}