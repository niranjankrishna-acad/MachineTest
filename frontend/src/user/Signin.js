import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signin, isAuthenticated, authenticate } from '../auth/helper'
import Base from '../core/Base'


const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    })

    const { name, email, password, error, success, loading, didRedirect } = values

    {/* Higher order function */ }
    const handleChange = val => event => {
        setValues({ ...values, error: false, [val]: event.target.value })
    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="alert alert-success" style={{ display: (success ? "" : "none") }}>
                        New Account created successfully. Please <Link to="/signin">login now</Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="alert alert-danger" style={{ display: (error ? "" : "none") }}>
                        Check all fields again
                    </div>
                </div>
            </div>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false, loading: true })
        const user = { email, password }
        signin(user)
            .then(data => {
                console.log(data);
                if (data.token) {
                    let session_token = data.token
                    authenticate(session_token, () => {
                        console.log("Token added");
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                } else {
                    setValues({
                        ...values,
                        loading: false
                    })
                }
            })
            .catch(err => console.log(err))
    }

    const performRedirect = () => {
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    return (
        <Base title="Sign In page" descr="Login to enjoy our facilities">
            {loadingMessage()}
            <div className="row">
                <div className="col-md-6 offset-md-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="text" value={email} onChange={handleChange("email")} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password" value={password} onChange={handleChange("password")} />
                        </div>
                        <button onClick={handleSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
            <p className="text-center">{JSON.stringify(values)}</p>
            {performRedirect()}
        </Base>
    )
}

export default Signin
