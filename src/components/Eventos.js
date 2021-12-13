import React from "react";
import Componente from "./Componente";

export default class Eventos extends Componente{
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
                <h2>Eventos en componentes de clase</h2>

                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}