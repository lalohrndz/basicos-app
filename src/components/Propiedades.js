import React from "react";
import PropTypes from "prop-types";

export default function Propiedades (props){
    return(
        <div>
            <p>{props.porDefecto}</p>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boleano? "boleano: true" : "boleano: false" }</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
                <li>{props.arreglo.map(props.function).join(", ")}</li>
            </ul>
        </div>

    );
}

Propiedades.defaultProps = {
    porDefecto: "Las props",
};

Propiedades.propTypes = {
    numero : PropTypes.number.isRequired,
}