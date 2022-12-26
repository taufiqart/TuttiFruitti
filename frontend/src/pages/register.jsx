import React, { useState } from 'react'
import axios from 'axios'
import { domain } from '../env'
import { Navigate } from 'react-router-dom'

export default function Register() {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [success, setSuccess] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${domain}/api/register`, {
            name: name,
            email: email,
            password: pass
        }).then(({ data }) => data.token && alert("Success Please check Your email to verify"))

    }

    return (
        <main className="hsds-layout__main">
            <div className="hsds-signup__page">
                <div className="hsds-signup__container">
                    <div className="signup__container-inner">
                        <div className="richtext-container">
                            <h1 className="hsds-row__heading">Your most productive work starts right here</h1>
                        </div>
                        <div className="richtext-container">
                            <p className="hsds-row__p hsds-row__p--m">Streamline how you manage teams and your business with Hubstaff.</p>
                        </div>
                        <form action="" onSubmit={handleSubmit} data-remote="true" method="post" className="hsds-form auth_form">

                            <div className="hsds-form__input-group"><label for="hubstaff_user_name"
                                className="hsds-form__label hsds-form__label--validate">Full name</label><input onChange={(e) => setName(e.target.value)} value={name} id="hubstaff_user_name"
                                    type="text" name="name" placeholder="Enter your full name" required="required" minlength="2"
                                    className="hsds-form__input hsds-form__input--validate hsds-form__input hsds-form__input--secondary" />
                            </div>
                            <div className="hsds-form__input-group"><label for="hubstaff_email"
                                className="hsds-form__label hsds-form__label--validate">Email</label><input onChange={(e) => setEmail(e.target.value)} value={email} id="hubstaff_email"
                                    type="email" name="email" placeholder="Enter your email" required="required"
                                    className="hsds-form__input hsds-form__input--validate hsds-form__input hsds-form__input--secondary" />
                            </div>
                            <div className="hsds-form__input-group"><label for="hubstaff_password"
                                className="hsds-form__label hsds-form__label--validate">Password</label>
                                <div className="hsds-form__input--with-suffix"><input onChange={(e) => setPass(e.target.value)} value={pass} id="hubstaff_password" type="password"
                                    name="password" placeholder="Enter 6 or more characters" required="required" minlength="6"
                                    className="hsds-form__input hsds-form__input--validate hsds-form__input hsds-form__input--secondary" />
                                    {/* <a href="signup.html#" tabindex="-1" className="btn btn-default hsds-form__input-suffix"><span
                                            className="label-on"><svg aria-hidden="true" className="hsds-icon">
                                                <use xlink:href="/images/icons/icons.svg#eye"></use>
                                            </svg></span><span className="label-off hide"><svg aria-hidden="true" className="hsds-icon">
                                                <use xlink:href="/images/icons/icons.svg#eye-off"></use>
                                            </svg></span></a> */}
                                </div>
                            </div>
                            {/* <div className="hsds-form__input-group"><label for="hubstaff_terms"
                                className="hsds-form__checkbox hsds-form__checkbox--center-mobile"><input id="hubstaff_terms"
                                    type="checkbox" name="user[terms]" required="required" value="1"
                                    className="hsds-form__input hsds-form__input--validate hsds-form__checkbox-input" />
                                <div className="hsds-form__checkbox-icon"></div>
                                <div className="hsds-form__checkbox-label hsds-form__label--validate">I agree to the <a
                                    href="https://hubstaff.com/terms" target="_blank">Terms</a>, <a
                                        href="https://hubstaff.com/privacy" target="_blank">Privacy Policy</a> and <a
                                            href="https://hubstaff.com/dpa" target="_blank">DPA</a></div>
                            </label></div> */}
                            <div className="hsds-form__input-group"><button type="submit" data-disable-with="Processing..."
                                className="hsds-button hsds-button--medium hsds-button--block-level hsds-button--primary">Create my
                                account</button></div>
                            {/* <div className="hsds-form__footnote"><svg aria-hidden="true" className="hsds-icon hsds-icon--inline">
                                <use xlink:href="/images/icons/icons.svg#lock"></use>
                            </svg>Subject to HIPAA? Sign our <a href="hipaa.html" target="_blank">BAA</a></div> */}
                        </form>
                    </div>
                </div>
                <div className="hsds-signup__illustration"></div>
            </div>
        </main >
    )
}
