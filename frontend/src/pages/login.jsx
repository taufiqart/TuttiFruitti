import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FormLogin from '../components/formLogin'
export default function Login() {

    return (
        <div className="flex h-screen w-full justify-center items-center p-20">
            <div className="inner-form w-[30rem]">
                <div className="header-2 section-title">Sign in to TuttiFruitti</div>
                <div className="login-form">
                    <FormLogin />
                </div>
                <div className="text-center"><a className="forgot-password-link" href="forgot_password.html">Forgot
                    your password?</a></div>
            </div>
            <div className="w-[70%]  md:!block hidden h-full p-20">
                <div className="w-full h-full">

                    <img src="/assets/images/ilustrasi.png" className='w-full h-full object-contain' alt="" />
                </div>
            </div>
        </div >
    )
}

