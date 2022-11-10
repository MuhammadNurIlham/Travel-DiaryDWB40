import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function Editor() {
    const [preview, setPreview] = useState(null); // set for image preview

    return (
        <div className='container py-5'>
            <div>
                <h3 className='title py-3'>Add Product</h3>
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
                    <div className='col-10 mb-3'>
                        <input type="text" className="form-control px-2 py-3" id="exampleFormControlInput1" placeholder="Product Name" name='name'></input>
                    </div>
                    <div className='col-2 mb-3'>
                        {/* <input type='file' id='upload' name='image' hidden></input>
                        <label for='upload' className='pointer'>Attach File
                            <img src={addFile} alt='maps' className='px-2 py-1 addFile'></img>
                        </label> */}
                        <form className="d-flex pb-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Find Journey" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                        {/* <button className="btn btn-outline-secondary py-3" type="file" id="button-addon2">
                        </button> */}
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <textarea
                            type="textarea"
                            className="form-control px-2 py-3"
                            id="exampleFormControlInput1"
                            placeholder="Product Description"
                            name='desc'
                            style={{
                                height: "200px"
                            }}></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input type="tel" className="form-control px-2 py-3" id="exampleFormControlInput1" placeholder="price (Rp.)" name='price' ></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input type="tel" className="form-control px-2 py-3" id="exampleFormControlInput1" placeholder="Qty Product" name='qty' ></input>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                    <button class="btn btn-primary btn-edit py-3 fs-5" type="submit">
                        Add Product
                    </button>
                    {/* <Link to="/UserMenus" className="link">
                    </Link> */}
                </div>
            </Form>
        </div >
    )
}

export default Editor