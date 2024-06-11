import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModalAddNewArticles() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            title: title,
            content: content
        }
        axios.post('http://localhost:3030/articles', data).then(res => {
            alert('Data add successfully!');
            navigate('/manage-articles');
        }).catch(err => console.log(err));
    }

    return (
        <>

            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header  >
                        <Modal.Title>Add New Article</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Content</Form.Label>
                                <Form.Control type="text" placeholder="Content" value={content} onChange={(event) => setContent(event.target.value)} />
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

export default ModalAddNewArticles;