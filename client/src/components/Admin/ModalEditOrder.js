import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getOrderDetail, updateStatusOrder } from '../../services/OrderServices';


function ModalEditOrder() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateStatusOrder(id, data, navigate);
    }

    useEffect(() => {
        getOrderDetail(id, setData)
    }, [])
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Cập Nhật Tình Trạng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label></Form.Label>
                                <Form.Control type="text" value={data.id} hidden />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tên thể loại</Form.Label>
                                <Form.Select aria-label="Default select example" value={data.status} onChange={event => setData({ ...data, status: event.target.value })}>
                                    <option value={1} >Chờ xử lý</option>
                                    <option value={2} >Đang xử lý</option>
                                    <option value={3} >Đang vận chuyển</option>
                                    <option value={4} >Hoàn thành</option>
                                    <option value={5} >Đã hủy</option>
                                </Form.Select>
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
export default ModalEditOrder;