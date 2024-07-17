import React from "react";
import './style.css';

function RemoveTool({ remove, id }) {
    return (
        <button onClick={() => remove(id)} className="remove-botao">
            Remover
        </button>
    );
}

export default RemoveTool;