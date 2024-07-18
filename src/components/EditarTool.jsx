import React, { useState } from "react";
import './style.css';

function EditTool({ tool, saveEdit, cancelEdit }) {
    const [newName, setNewName] = useState(tool.nome);

    const handleSave = () => {
        saveEdit(tool.id, newName);
    };

    return (
        <div className="edit-tool">
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="edit-input"
            />
            <button onClick={handleSave} className="save-button">Salvar</button>
            <button onClick={cancelEdit} className="cancel-button">Cancelar</button>
        </div>
    );
}

export default EditTool;
