import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../auth/helper'
import Base from '../core/Base'

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values


    {/* Higher order function */ }
    const handleChange = val => event => {
        setValues({ ...values, error: false, [val]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValues({
            ...values,
            error: false
        })
        signup({ name, email, password })
            .then(data => {
                console.log("DATA", data)
                if (data.email === email) {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                } else {
                    setValues({
                        ...values,
                        error: true,
                        success: false
                    })
                }
            })
            .catch(err => console.log(err))
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

    return (
        <Base title="Sign Up Page" descr="Create an account">
            {successMessage()}
            {errorMessage()}
            <div className="row">
                <div className="col-md-6 offset-md-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" type="text" value={name} onChange={handleChange("name")} />
                        </div>
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
        </Base>
    )
}

export default Signup
