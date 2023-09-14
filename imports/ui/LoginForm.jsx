import { Meteor } from 'meteor/meteor'
import React, { useState } from 'react'

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = e => {
        e.preventDefault()

        Meteor.loginWithPassword(username, password);
        console.log('login')
    }

    return (
        <form onSubmit={submit} className='login-form'>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div>
                <button type="submit">Log In</button>
            </div>
        </form>
    )
}