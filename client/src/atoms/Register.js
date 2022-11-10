import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Register({ show, setShow, setShowLogin }) {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                name='name'
                                type='text'
                                placeholder='FullName'
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type='email'
                                placeholder='Email'
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                required
                            />
                        </Form.Group>
                        <div className='d-grid gap-2'>
                            <Button variant="primary" onClick={() => {
                                setShow(false);
                                setShowLogin(true);
                            }}>
                                Register
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <p>Don't have an account ? Klik <span className='fw-bold pointer log-reg'
                        onClick={() => {
                            setShow(false);
                            setShowLogin(true);
                        }}
                    >Here</span></p>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<Example />);
export default Register;