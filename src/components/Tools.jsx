import React, { useState } from "react";
import Input from './Input';
import RemoveTool from './RemoveTool';
import EditTool from "./EditarTool";
import './style.css'

const toolsDev = [
    { id: 1, nome: "GitHub" },
    { id: 2, nome: "Slack" },
    { id: 3, nome: "VSCode" },
];

function Tools() {
    const [arrayValues, setArrayValues] = useState(toolsDev);
    const [editingId, setEditingId] = useState(null);

    const addTool = (tool) => {
        setArrayValues((arr) => [...arr, tool])
    }

    const remove = (id) => {
        setArrayValues((arr) => arr.filter(tool => tool.id !== id));
    }

    const startEdit = (id) => {
        setEditingId(id);
    };

    const cancelEdit = () => {
        setEditingId(null);
    };

    const saveEdit = (id, newName) => {
        setArrayValues((arr) => arr.map(tool => (tool.id === id ? { ...tool, nome: newName } : tool)));
        setEditingId(null);
    };

    return (
        <>
            <Input action={addTool} data={arrayValues} />
            <ul className="tools-lista">
                {arrayValues.map(tool => (
                    <div className="div-lista">
                        <li key={tool.id} className="tool-item">
                            {editingId === tool.id ? (
                                <EditTool tool={tool} saveEdit={saveEdit} cancelEdit={cancelEdit} />
                            ) : (
                                <>
                                    {tool.nome}
                                    <div className="tool-buttons">
                                        <button onClick={() => startEdit(tool.id)} className="edit-button">Editar</button>
                                        <RemoveTool remove={remove} id={tool.id} />
                                    </div>
                                </>
                            )}
                        </li>
                    </div>

                ))}
            </ul>
        </>
    );
}

export default Tools;