import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModalAddNewBooks() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [stock, setStock] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            title: title,
            author: author,
            description: description,
            price: price,
            discount: sale,
            stock: stock
        }
        axios.post('http://localhost:3030/books', data).then(res => {
            alert('Data add successfully!');
            navigate('/manage-books');
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
                        <Modal.Title>Add New Book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(event) => setTitle(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Author" value={author} onChange={(event) => setAuthor(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Price" onChange={(event) => setPrice(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Sale %</Form.Label>
                            <Form.Control type="number" placeholder="" value={sale} onChange={(event) => setSale(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" placeholder="" value={stock} onChange={(event) => setStock(event.target.value)} />
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

export default ModalAddNewBooks;