import React from 'react'

export default function EditorCard() {
    return (
        <div className="editor-label-card-container">
            <h2>PLIERS</h2>
            <div className="editor-label-container">
                <div className="editor-label"></div>
                <div className="editor-label-input-container">
                    <input type="text" />
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}
