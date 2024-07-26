import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createNewPost } from '../../services/ArticlesServices';
import { toast } from 'react-toastify';

function ModalAddNewArticles() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !content) {
            toast.error("Vui lòng nhập đầy đủ thông tin!")
            return
        }
        createNewPost(title, content, imageFile, navigate);
    }

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]))
            setImageFile(event.target.files[0]);
        }
    }

    return (
        <>

            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header  >
                        <Modal.Title>Thêm bài viết</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tiêu đề</Form.Label>
                                <Form.Control type="text" placeholder="Tiêu đề bài viết" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nội dung</Form.Label>
                                <Form.Control as="textarea" style={{ height: "100px" }} placeholder="Nội dung" value={content} onChange={(event) => setContent(event.target.value)} />
                            </Form.Group>
                        </Form>

                        <Form.Group controlId="formFile" className="mb-3" >
                            <Form.Label>Ảnh chính </Form.Label>
                            <Form.Control type="file" onChange={(event) => handleUploadImage(event)} name='image_name' />
                            {image && <img width={'200px'} style={{ padding: "10px" }}
                                src={image}
                                alt="New Image" />}
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={(event) => handleSubmit(event)}>Lưu thông tin</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>


        </>
    );
}

export default ModalAddNewArticles;