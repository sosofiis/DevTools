import React, { useState } from "react";
import Input from './Input';
import './style.css'

const toolsDev = [
        {id: 1, nome: "gitHub"},
        {id: 2, nome: "Slack"},
        {id: 3, nome: "VSCode"},
    ];

function Tools() {
    const [arrayValues, setArrayValues] = useState(toolsDev);

    const addTool = (tool) => {
        setArrayValues((arr) => [...arr, tool])
    }

    // const remove = (id) => {
    //     console.log(id);

    // }

    return (
        <>
            <Input action={addTool} data={arrayValues} />
            <ul>
                {arrayValues.map(tool => (
                    <li key={tool.id}> {tool.nome}
                    {/* <span onClick={remove(tool.id)}>X</span> */}
                    </li>     
                ))}
            </ul>
        </>
    );
}

export default Tools;