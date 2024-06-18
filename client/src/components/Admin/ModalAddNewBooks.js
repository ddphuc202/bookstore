import { useEffect, useState } from 'react';
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
    const [genres, setGenres] = useState('');
    const [primaryImage, setPrimaryImage] = useState(null);
    const [otherImages, setOtherImages] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        createNewBook(title, author, description, price, sale, stock, genres, primaryImage, otherImages, navigate);
    }

    const handleSelect = (event) => {
        setGenres(event.target.value);
    }

    const handleUploadPrimaryImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            console.log(event.target.files[0])
            setPrimaryImage(event.target.files[0])
        }
    }

    const handleUploadOtherImages = (event) => {
        if (event.target && event.target.files && event.target.files) {
            console.log(event.target.files)
            const filesArray = Array.from(event.target.files);
            setOtherImages(filesArray);

        }
    }


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
                        <Form encType='multipart/form-data'>
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
                                <Form.Control type="number" placeholder="Khuyến mãi" value={sale} onChange={(event) => setSale(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Thể loại</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={handleSelect}>
                                    <option>Thể loại </option>
                                    <option value='1'>Khoa Học Viễn Tưởng</option>
                                    <option value="2">Trinh Thám</option>
                                    <option value="3">Bí ẩn</option>
                                    <option value="4">Kinh Doanh</option>
                                    <option value="5">Lãng mạn</option>
                                    <option value="6">Lịch Sử</option>
                                    <option value="7">Tâm Lý Học</option>
                                    <option value="8">Tâm Linh - Tôn Giáo</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="number" placeholder="Tồn kho" value={stock} onChange={(event) => setStock(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3" >
                                <Form.Label>Ảnh chính </Form.Label>
                                <Form.Control type="file" onChange={(event) => handleUploadPrimaryImage(event)} name='primaryImage' />
                            </Form.Group>

                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Ảnh phụ</Form.Label>
                                <Form.Control type="file" multiple onChange={(event) => handleUploadOtherImages(event)} name='otherImages' />
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