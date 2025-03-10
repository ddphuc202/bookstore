import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getCustomerById, updateCustomerByID } from '../../services/CustomerServices';


function ModalEditCustomers() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCustomerByID(id, data, navigate);
    }

    useEffect(() => {
        getCustomerById(id, setData)
    }, [])
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog >
                    <Modal.Header >
                        <Modal.Title>Chỉnh Sửa Khách Hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label></Form.Label>
                                <Form.Control type="text" value={data.id} hidden />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tên </Form.Label>
                                <Form.Control type="text" value={data.name} onChange={event => setData({ ...data, name: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={data.email} onChange={event => setData({ ...data, email: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control type="text" value={data.password} onChange={event => setData({ ...data, password: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control type="text" value={data.address} onChange={event => setData({ ...data, address: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="text" value={data.phone} onChange={event => setData({ ...data, phone: event.target.value })} />
                            </Form.Group>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={(event) => handleSubmit(event)}>Lưu thông tin</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
    )
}
export default ModalEditCustomers;