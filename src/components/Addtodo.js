import React, { useState, useRef } from "react";

const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const titleInputRef = useRef(null);
    const detailsInputRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        if (!title || !details) {
            alert(`"Please enter a title and details."`);
        } else {
            props.addTodo(title, details);
            setTitle("");
            setDetails("");
            titleInputRef.current.focus();
        }
    };

    return (
        <div className="container mt-4 w-75">
            <h3 className='text-center mt-2'>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        New Todo Item
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        className="form-control bg-light"
                        id="title"
                        aria-describedby="emailHelp"
                        placeholder="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">
                        Details
                    </label>
                    <input
                        type="text"
                        value={details}
                        onChange={(e) => {
                            setDetails(e.target.value);
                        }}
                        className="form-control bg-light"
                        id="details"
                        placeholder="details"
                        ref={detailsInputRef}
                    />
                </div>

                <button type="submit" className="btn btn-dark">
                    Add item
                </button>
            </form>

            <hr />
        </div>
    );
};

export default Addtodo;
