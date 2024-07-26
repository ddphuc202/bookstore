import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { baseURL } from '../../utils/AxiosCustomize';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { updatePostByID, getPostById } from '../../services/ArticlesServices';


function ModalEditArticles() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePostByID(id, data, imageFile, navigate)
    }

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImageFile(event.target.files[0]);
        }

    }

    useEffect(() => {
        getPostById(id, setData)
    }, [])

    useEffect(() => {
        if (data) {
            setImage(data.imagePath);
        }
    }, [data])

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Chỉnh Sửa Bài Viết</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label></Form.Label>
                                <Form.Control type="text" value={data.id} hidden />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Tên tiêu đề</Form.Label>
                                <Form.Control type="text" value={data.title} onChange={event => setData({ ...data, title: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nội dung</Form.Label>
                                <Form.Control as="textarea" style={{ height: "100px" }} value={data.content} onChange={event => setData({ ...data, content: event.target.value })} />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3" >
                                <Form.Label>Ảnh chính </Form.Label>
                                <Form.Control type="file"
                                    onChange={(event) => handleUploadImage(event)}
                                    name='thumbnail' />
                                <br />
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: "center" }} >Ảnh sẵn</th>
                                            <th style={{ textAlign: "center" }} >Ảnh mới</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                {image && <img width={'200px'} style={{ padding: "10px" }}
                                                    src={baseURL + image}
                                                    alt="Ảnh sẵn" />}
                                            </td>

                                            <td>
                                                {previewImage && <img width={'200px'} style={{ padding: "10px" }}
                                                    src={previewImage}
                                                    alt="Ảnh mới" />}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
export default ModalEditArticles;