import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createNewBook } from '../../services/BooksServices';
import { useNavigate } from 'react-router-dom';


function ModalAddNewBooks() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [stock, setStock] = useState('');
    const [imagePrimary, setImagePrimary] = useState('');
    const [imageOthers, setImageOthers] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        createNewBook(title, author, description, price, sale, stock, navigate);
    }

    // const handleUploadImage = (event) => {
    //     if (event.target && event.target.files && event.target.files[0]) {
    //         setImagePrimary(event.target.files[0])
    //     }
    // }

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Thêm sách</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tiêu đề</Form.Label>
                                <Form.Control type="text" placeholder="Tiêu đề sách" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tác giả</Form.Label>
                                <Form.Control type="text" placeholder="Tác giả" value={author} onChange={(event) => setAuthor(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control as="textarea" placeholder="Mô tả" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Giá tiền</Form.Label>
                                <Form.Control type="number" placeholder="Giá tiền" onChange={(event) => setPrice(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Khuyến mãi (%)</Form.Label>
                                <Form.Control type="number" placeholder="" value={sale} onChange={(event) => setSale(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="number" placeholder="Tồn kho" value={stock} onChange={(event) => setStock(event.target.value)} />
                            </Form.Group>

                            {/* <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Ảnh chính </Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Ảnh phụ</Form.Label>
                                <Form.Control type="file" multiple onChange={(event) => handleUploadImage(event)} />
                            </Form.Group> */}
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