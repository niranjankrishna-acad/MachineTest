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

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="alert alert-success" style={{ display: (values.success ? "" : "none") }}>
                        New Account created successfully. Please login
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="alert alert-danger" style={{ display: (values.error ? "" : "none") }}>
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
                            <input className="form-control" type="text" value={values.name} onChange={handleChange("name")} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="text" value={values.email} onChange={handleChange("email")} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password" value={values.password} onChange={handleChange("password")} />
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </Base>
    )
}

export default Signup
