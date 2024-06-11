import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModalAddNewGenres() {
    const [name, setName] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            name: name
        }
        axios.post('http://localhost:3030/genres', data).then(res => {
            alert('Data add successfully!');
            navigate('/manage-genres');
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
                        <Modal.Title>Add New Genres</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Genres Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Genres" value={name} onChange={(event) => setName(event.target.value)} />
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

export default ModalAddNewGenres;