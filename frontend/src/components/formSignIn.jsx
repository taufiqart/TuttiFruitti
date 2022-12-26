import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import axios from 'axios'
import Alert from './alert'
import { useNavigate } from 'react-router-dom'

export default function FormSignIn() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const button = e.target.querySelector('button')
        const text = button.textContent
        button.disabled = true
        button.textContent = button.dataset.disableWith
        axios.post(`${domain}/api/register`, {
            name: name,
            email: email,
            password: pass,
        }).then(({ data }) => {
            data.errors ? setErrors(data.errors) : navigate('/dashboard')
            button.disabled = false
            button.textContent = text
        }).catch(({ data }) => {
            data.errors ? setErrors(data.errors) : navigate('/dashboard')
            button.disabled = false
            button.textContent = text
        })
    }

    return (
        <form className="hsds-form auth_form" onSubmit={handleSubmit} action=""
            acceptCharset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden"
                value="&#x2713;" />
            <div className="hsds-form__input-group hsds-form__input-group--small form-group">
                <div className="hsds-form__input-wrapper"><input placeholder="Name" className={"hsds-form__input !mb-0 " + (errors.name ? "border-2 ring-1 border-pink-500 ring-pink-500 !text-pink-500" : "")}
                    required="required" autoComplete="off" aria-label="Name" type="text" name="name"
                    id="user_name" onChange={(e) => setName(e.target.value)} value={name} />
                    {
                        errors.name && errors.name.map((msg, index) => {
                            return (<p key={index} className='text-left !text-pink-500'>{msg}</p>)
                        })
                    }
                </div>
            </div>
            <div className="hsds-form__input-group hsds-form__input-group--small form-group">
                <div className="hsds-form__input-wrapper"><input placeholder="Email" className={"hsds-form__input !mb-0 " + (errors.email ? "border-2 ring-1 border-pink-500 ring-pink-500 !text-pink-500" : "")}
                    required="required" autoComplete="off" aria-label="Email" type="email" name="email"
                    id="user_email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    {
                        errors.email && errors.email.map((msg, index) => {
                            return (<p key={index} className='text-left !text-pink-500'>{msg}</p>)
                        })
                    }
                </div>
            </div>
            <div className="hsds-form__input-group hsds-form__input-group--small form-group">
                <div className="hsds-form__input-wrapper"><input placeholder="Password" className={"hsds-form__input !mb-0 " + (errors.pass ? "border-2 ring-1 border-pink-500 ring-pink-500 !text-pink-500" : "")}
                    autoComplete="off" required="required" aria-label="Password"
                    title="At least six characters containing at least one number, one lower, and one uppercase letter"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" type="password" name="password"
                    id="user_password" onChange={(e) => setPass(e.target.value)} value={pass} />
                    {
                        errors.pass && errors.pass.map((msg, index) => {
                            return (<p key={index} className='text-left !text-pink-500'>{msg}</p>)
                        })
                    }
                </div>
            </div>

            <div className="hsds-form__input-group"><button name="button" type="submit"
                className="hsds-button hsds-button--medium hsds-button--primary hsds-button--block-level"
                data-disable-with="Processing..."  >Create account</button></div>
            <div className="hsds-form__footnote hsds-form__footnote--centered">No credit card required</div>
        </form>
    )
}
