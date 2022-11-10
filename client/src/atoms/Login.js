import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Login({ show, setShow, setShowRegister }) {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                        <div className='d-grid gap-2'>
                            <Button variant="primary" onClick={handleClose}>
                                Login
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <p>Don't have an account ? Klik <span className='fw-bold pointer log-reg'
                        onClick={() => {
                            setShow(false);
                            setShowRegister(true);
                        }}
                    >Here</span></p>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<Example />);
export default Login;