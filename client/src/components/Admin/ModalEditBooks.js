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

    const [thumbnail, setThumbnail] = useState(null);
    const [previewThumbnail, setPreviewThumbnail] = useState(null);

    const [otherImages, setOtherImages] = useState([]);
    const [previewOtherImages, setPreviewOtherImages] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBookByID(id, data, navigate)
    }

    const handleUploadThumbnail = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {

            setPreviewThumbnail(URL.createObjectURL(event.target.files[0]))
        }
    }

    const handleUploadOtherImages = (event) => {
        if (event.target && event.target.files && event.target.files) {
            const filesArray = Array.from(event.target.files);
            setPreviewOtherImages(filesArray);

        }
    }



    useEffect(() => {
        getBookById(id, setData)
        setThumbnail(data.thumbnail_path)
        if (data && data.images) {
            const OtherImages = Array.from(data.images);
            setOtherImages(OtherImages);
        }
    }, [data])
    return (
        <>

            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog style={{ maxWidth: '60%' }}>
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
                                <Form.Control type="number" value={data.discount} onChange={event => setData({ ...data, discount: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Thể loại</Form.Label>
                                <Form.Select aria-label="Default select example" value={data.genre_id} onChange={event => setData({ ...data, genre_id: event.target.value })}>
                                    <option>Thể loại </option>
                                    <option value='3'>Khoa Học Viễn Tưởng</option>
                                    <option value="4">Trinh Thám</option>
                                    <option value="7">Bí ẩn</option>
                                    <option value="6">Kinh Doanh</option>
                                    <option value="1">Lãng mạn</option>
                                    <option value="2">Lịch Sử</option>
                                    <option value="5">Tâm Lý Học</option>
                                    <option value="8">Tâm Linh - Tôn Giáo</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="number" value={data.stock} onChange={event => setData({ ...data, stock: event.target.value })} />
                            </Form.Group>
                        </Form>

                        <Form.Group controlId="formFile" className="mb-3" >
                            <Form.Label>Ảnh chính </Form.Label>
                            <Form.Control type="file"
                                onChange={(event) => handleUploadThumbnail(event)}
                                name='thumbnail' />
                            <br />
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center" }}>Ảnh sẵn</th>
                                    <th style={{ textAlign: "center" }}>Ảnh mới</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {thumbnail && <img width={'200px'} style={{ padding: "10px" }}
                                            src={`http://localhost:3030${thumbnail}`}
                                            alt="Ảnh sẵn" />}
                                    </td>
                                    <td>
                                        {previewThumbnail && <img width={'200px'} style={{ padding: "10px" }}
                                            src={previewThumbnail}
                                            alt="Ảnh mới" />}
                                    </td>
                                </tr>
                            </tbody>

                        </Form.Group>

                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Ảnh phụ</Form.Label>
                            <Form.Control type="file" multiple
                                onChange={(event) => handleUploadOtherImages(event)}
                                name='otherImages' />
                            <br />
                            <div>
                                <span style={{ fontWeight: "bold", marginLeft: "20px" }}>Ảnh sẵn</span>
                                <div>
                                    {otherImages.map((image, index) => (
                                        <img width={'200px'} style={{ padding: "10px" }} key={index} src={`http://localhost:3030${image.image_path}`} alt={`Ảnh sẵn ${index + 1}`} />
                                    ))}
                                </div>
                                <br />
                                <span style={{ fontWeight: "bold", marginLeft: "20px" }}>Ảnh mới</span>
                                <div>
                                    {
                                        [...previewOtherImages].map((previewOtherImage) => (
                                            <img src={URL.createObjectURL(previewOtherImage)} width={'200px'} style={{ padding: "10px" }} />
                                        ))
                                    }
                                </div>


                            </div>

                        </Form.Group>


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