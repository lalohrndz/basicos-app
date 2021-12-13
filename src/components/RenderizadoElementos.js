import React,{Component}  from "react";
import data from "../helpers/data.json"

function ElementoDeLista(props){
    return(
        <ul>
            <a href={props.el.web}>
                {props.el.name}
            </a>
        </ul>
    );
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            season: ["Primavera","Verano","Otono","Invierno"],
        };
    }
    
    render(){
        console.log(data);
        return(
            <div>
                <h2>Renderizado elementos</h2>\

                <h4>Estaciones del año</h4>
                <ol>
                    {this.state.season.map(el=> <li key={el}>{el}</li> )}
                </ol>
                <h3>Frameworks front-end</h3>
                <ul>
                    {data.frameworks.map((el) => (
                        <ElementoDeLista key={el.id} el={el}/>)
                    )}
                </ul>
            </div>
        ) 
    }
}