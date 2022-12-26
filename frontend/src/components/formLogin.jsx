import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { domain } from "../env";
import Alert from "./alert";

export default function FormLogin() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const button = e.target.querySelector('button')
        const text = button.textContent
        button.disabled = true
        button.textContent = button.dataset.disableWith
        axios.post(`${domain}/api/login`, {
            email: email,
            password: pass,

        }).then(({ data }) => {
            // console.log(data);
            button.disabled = false
            button.textContent = text
            data.user ? navigate("/dashboard") : setError(true);
        });
    };
    return (
        <form
            className="new_user"
            id="new_user"
            action=""
            onSubmit={handleSubmit}
            acceptCharset="UTF-8"
            method="post"
        >
            {
                error &&
                <div className="alert alert-warning shadow-lg">
                    <div className="flex w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>Invalid Email or Password</span>
                    </div>
                </div>
            }
            <div className="form-group text-left">
                <label htmlFor="user_email">Email</label>
                <input required
                    placeholder="name@company.com"
                    className={"form-control login-field " + (error && "!text-pink-500 !ring-1 !border-pink-500 !ring-pink-500")}
                    autoComplete="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="user_email"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="user_password">Password</label>
                <input required
                    className={"form-control login-field " + (error && "!text-pink-500 !ring-1 !border-pink-500 !ring-pink-500")}
                    autoComplete="current-password"
                    type="password"
                    name="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    id="user_password"
                />
            </div>
            <div className="text-center">
                <button
                    name="button"
                    type="submit"
                    className="btn hs-rebranded-btn hs-btn-success h-auto"
                    data-disable-with="Logging in…"
                >Log in</button>
            </div>
        </form>
    );
}
