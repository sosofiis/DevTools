import React, { useState } from "react";
import Input from './Input';
import RemoveTool from './RemoveTool';
import './style.css'

const toolsDev = [
    { id: 1, nome: "gitHub" },
    { id: 2, nome: "Slack" },
    { id: 3, nome: "VSCode" },
];

function Tools() {
    const [arrayValues, setArrayValues] = useState(toolsDev);

    const addTool = (tool) => {
        setArrayValues((arr) => [...arr, tool])
    }

    const remove = (id) => {
        setArrayValues((arr) => arr.filter(tool => tool.id !== id));
    }

    return (
        <>
            <Input action={addTool} data={arrayValues} />
            <ul className="tools-lista">
                {arrayValues.map(tool => (
                    <div className="div-lista">
                        <li key={tool.id} className="tool-item">
                            {tool.nome}
                            <RemoveTool remove={remove} id={tool.id} />
                        </li>
                    </div>

                ))}
            </ul>
        </>
    );
}

export default Tools;