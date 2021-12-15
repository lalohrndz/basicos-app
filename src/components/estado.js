import React, {Component} from "react";

/* function estadoHijo(porps){
    return(
        <div>
            <h5>{this.props.contadorHijo}</h5>
        </div>
    );
} */

export default class Estado extends Component{
constructor(props){
    super(props);
    this.state={
        contador:0,
    };

    setInterval(() => {
        this.setState({
            contador: this.state.contador + 1
        })
    }, 1000);
}
render(){
    return(
        <div>
            <h2>El Estado</h2>
            <p>{this.state.contador}</p>
            {/* <estadoHijo contadorHijo={this.state.contador}/> */}
        </div>
    );
}

}