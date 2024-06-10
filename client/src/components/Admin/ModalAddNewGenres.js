import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModalAddNewGenres() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
            <Button variant="primary" onClick={handleShow}>
                Add New Books
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Genres</Modal.Title>
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(event) => handleSubmit(event)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNewGenres;