import { Meteor } from 'meteor/meteor';
import React, { useState } from "react";

export const TaskForm = () => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault()

        if (!text) {
            const taskInput = e.target.insertTask
            taskInput.classList.add('form-empty')
            taskInput.focus()
            return
        }

        e.target.insertTask.classList.remove('form-empty')
        Meteor.call('tasks.insert', text)

        setText("")
    }
    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name='insertTask'
                placeholder="Digite uma nova tarefa"
                value={text}

                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">Adicionar tarefa</button>
        </form>
    );
};
