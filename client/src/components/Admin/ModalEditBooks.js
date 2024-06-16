import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBookById, updateBookByID } from '../../services/BooksServices';

function ModalEditBooks() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBookByID(id, data, navigate)
    }

    useEffect(() => {
        getBookById(id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Chỉnh Sửa Sách</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label></Form.Label>
                                <Form.Control type="text" value={data.id} hidden />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tiêu đề</Form.Label>
                                <Form.Control type="text" value={data.title} onChange={event => setData({ ...data, title: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tác giả</Form.Label>
                                <Form.Control type="text" value={data.author} onChange={event => setData({ ...data, author: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control as="textarea" value={data.description} onChange={event => setData({ ...data, description: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Giá thành</Form.Label>
                                <Form.Control type="number" value={data.price} onChange={event => setData({ ...data, price: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Khuyến mãi %</Form.Label>
                                <Form.Control type="number" value={data.sale_percent} onChange={event => setData({ ...data, sale_percent: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="number" value={data.stock} onChange={event => setData({ ...data, stock: event.target.value })} />
                            </Form.Group>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={(event) => handleSubmit(event)}>Save update</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
    )
}
export default ModalEditBooks;