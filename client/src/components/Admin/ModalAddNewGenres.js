import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { createNewCategories } from '../../services/GenresServices';

function ModalAddNewGenres() {
    const [name, setName] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        createNewCategories(name, navigate);
    }

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Thêm Thể Loại</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tên thể loại</Form.Label>
                                <Form.Control type="text" placeholder="Nhập tên thể loại" value={name} onChange={(event) => setName(event.target.value)} />
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