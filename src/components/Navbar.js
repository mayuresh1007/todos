import React from 'react'
import PropTypes from 'prop-types'// validate datatype for the props for debug 

const Navbar = (props) => {
    // console.log(props) // {getting key value pair}
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Features</a> */}
                        </li>
                    </ul>
                </div>
                {props.searchBar ? <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> : ""}
            </div>
        </nav>
    )
}
// if parent component not passed the prop that case this will get and rendered
Navbar.defaultProps = {
    title: "Set the default",
    searchBar: true,
    mode: 'dark'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    searchBar:PropTypes.bool,
}

// proptype is used to validate the prop and object in the props
// MyComponent.propTypes = {
    //     user: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    //     age: PropTypes.number,
    //     address: PropTypes.shape({
    //        street: PropTypes.string.isRequired,
    //        city: PropTypes.string.isRequired,
    //        state: PropTypes.string
    //    })
//   }).isRequired,
// };
export default Navbar