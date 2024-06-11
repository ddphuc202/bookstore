import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModalAddNewCustomers() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhone] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            name: name,
            email: email,
            password: password,
            address: address,
            phone_number: phone_number
        }
        axios.post('http://localhost:3030/customers', data).then(res => {
            alert('Data add successfully!');
            navigate('/manage-customers');
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Add New Customer</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password" value={password} onChange={(event) => setPass(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Phone number" value={phone_number} onChange={(event) => setPhone(event.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={(event) => handleSubmit(event)}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        </>
    );
}

export default ModalAddNewCustomers;