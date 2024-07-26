import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { updatePassword } from '../../services/AdminsServices';
import { toast } from 'react-toastify';


function ModalEditPasswordAdmin() {

    const { id } = useParams();
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!password) {
            toast.error("Vui lòng nhập đầy đủ thông tin!")
            return
        }
        updatePassword(id, password, navigate);
    }

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog >
                    <Modal.Header >
                        <Modal.Title>Chỉnh Sửa Mật Khẩu Quản Trị Viên</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label></Form.Label>
                                <Form.Control type="text" value={id} hidden />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Đổi mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder='Nhập mật khẩu mới...' value={password} onChange={event => setPassword(event.target.value)} />
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
export default ModalEditPasswordAdmin;