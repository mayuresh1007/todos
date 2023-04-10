import React from 'react'

const Footer = (props) => {
    return (
        <>
            <footer className="p-5 mb-4 bg-light rounded-3">
                <hr />
                {/* <hr/> */}
                <h4>Footer of {props.title}</h4>
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted text-center">{props.title} © 2022–2023</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <p> Add tasks and comments to tasks for additional information or context. </p>
                        {/* <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Cool stuff</a></li>
                            <li><a className="link-secondary" href="/">Random feature</a></li>
                            <li><a className="link-secondary" href="/">Team feature</a></li>
                        </ul> */}
                    </div>
                    {/* <div className="col-6 col-md">
                        <h5>Resources</h5>
                        
                        <ul className="list-unstyled text-small">
                        <li className="link-secondary">https://react.dev/learn/start-a-new-react-project</li>
                        <li className="link-secondary">https://getbootstrap.com/docs/5.0/getting-started/introduction/</li>
                            <li><a className="link-secondary" href="/">Resource name</a></li>
                            <li><a className="link-secondary" href="/">Resource</a></li>
                        </ul>
                    </div> */}
                    {/* <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Business</a></li>
                            <li><a className="link-secondary" href="/j ">Education</a></li>
                        </ul>
                    </div> */}
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <p>This is basic app to practice react concepts and implementation</p>
                        {/* <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Team</a></li>
                            <li><a className="link-secondary" href="/">Locations</a></li>
                        </ul> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer