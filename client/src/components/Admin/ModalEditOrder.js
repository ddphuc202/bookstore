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
                                <Form.Label>Mã vận đơn</Form.Label>
                                <Form.Control type="text" value={data.trackingNumber} onChange={event => setData({ ...data, trackingNumber: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tình trạng</Form.Label>
                                <Form.Select aria-label="Default select example" value={data.status} onChange={event => setData({ ...data, status: event.target.value })}>

                                    {data.status === 'pending' && (
                                        <>
                                            <option value={'pending'}>Chờ xử lý</option>
                                            <option value={'processing'} >Đang xử lý</option>
                                            <option value={'delivering'} >Đang vận chuyển</option>
                                            <option value={'completed'} >Hoàn thành</option>
                                            <option value={'cancelled'} >Đã hủy</option>
                                        </>
                                    )}
                                    {data.status === 'processing' && (
                                        <>
                                            <option value={'processing'}>Đang xử lý</option>
                                            <option value={'delivering'} >Đang vận chuyển</option>
                                            <option value={'completed'} >Hoàn thành</option>
                                            <option value={'cancelled'} >Đã hủy</option>
                                        </>
                                    )}
                                    {data.status === 'delivering' && (
                                        <>
                                            <option value={'delivering'}>Đang vận chuyển</option>
                                            <option value={'completed'} >Hoàn thành</option>
                                            <option value={'cancelled'} >Đã hủy</option>
                                        </>
                                    )}
                                    {data.status === 'completed' && (
                                        <>
                                            <option value={'delivering'}>Đang vận chuyển</option>
                                            <option value={'completed'}>Hoàn thành</option>
                                            <option value={'cancelled'}>Đã hủy</option>
                                        </>
                                    )}
                                    {data.status === 'cancelled' && (
                                        <>
                                            <option value={'delivering'}>Đang vận chuyển</option>
                                            <option value={'cancelled'}>Đã hủy</option>
                                            <option value={'completed'}>Hoàn thành</option>
                                        </>
                                    )}

                                </Form.Select>
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
export default ModalEditOrder;