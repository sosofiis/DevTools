import React, { useState } from "react";
import './style.css'

function Input({ action, data }) {
    const [valor, setValor] = useState('');

    function cadastrar() {
        let newTool = { id: data.length + 1, nome: valor };
        action(newTool);
    }

    return (
        <div className="div-input">
            <input
                type="text"
                className="input"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <button className="botao" onClick={cadastrar}>Adicionar</button>
        </div>


    );
}

export default Input;