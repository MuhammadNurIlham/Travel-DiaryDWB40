import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import NavbarAfterLogin from './NavbarAfterLogin';

function Editor() {
    const [preview, setPreview] = useState(null); // set for image preview

    return (
        <div>
            <NavbarAfterLogin />
            <div className='container py-5'>
                <div>
                    <h3 className='title py-3 text-dark'>Add Journey</h3>
                </div>
                <Form>
                    {preview && (
                        <div>
                            <img
                                src={preview}
                                style={{
                                    maxWidth: "150px",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                    marginBottom: "10px",
                                }}
                                alt={preview}
                            />
                        </div>
                    )}

                    <div className='row'>
                        <div className='col mb-3'>
                            <input type="text" className="form-control px-2 py-3" id="exampleFormControlInput1" placeholder="Title" name='name'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="input-group mb-3">
                                <input type="file" className="form-control" id="inputGroupFile02" />
                                <label className="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col mb-3'>
                            <textarea
                                type="textarea"
                                className="form-control px-2 py-3"
                                id="exampleFormControlInput1"
                                placeholder="Description"
                                name='desc'
                                style={{
                                    height: "200px"
                                }}></textarea>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                        <button className="btn btn-primary btn-edit py-3 fs-5" type="submit">
                            Add Journey
                        </button>
                        {/* <Link to="/UserMenus" className="link">
                    </Link> */}
                    </div>
                </Form>
            </div >
        </div>
    )
}

export default Editor