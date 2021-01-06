import React from 'react'
import Menu from './Menu'

const Base = ({ title = "My Title", descr = "description", className = "bg-dark text-white p-4", children }) => {
    return (
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{descr}</p>
                </div>
                <div className={className}>{children}</div>
            </div>

            <footer className="footer bg-dark m-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4>Got any questions? Reach me out on Instagram</h4>
                    <button className="btn btn-lg btn-warning">Contact us</button>
                    <div className="container">
                        <span className="text-light">
                            An amazing django react fullstack course
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Base
