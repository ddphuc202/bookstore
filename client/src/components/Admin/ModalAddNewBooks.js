import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createNewBook } from '../../services/BooksServices';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../services/GenresServices';
import { toast } from 'react-toastify';


function ModalAddNewBooks() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categories, setCategories] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    const [otherImages, setOtherImages] = useState([]);
    const [records, setRecords] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !author || !publisher || !description || !price || !quantity || !discount) {
            toast.error("Vui lòng nhập đầy đủ thông tin sách!")
            return;
        }
        if (!categories) {
            toast.error('Vui lòng chọn thể loại sách!');
            return;
        }
        createNewBook(title, author, publisher, description, price, discount, quantity, categories, thumbnailFile, otherImages, navigate);
    }

    const handleQuantity = (event) => {
        let value = event.target.value;
        if (value < 1) {
            toast.info("Số lượng tồn kho phải lớn hơn 0!")
            value = 1
            return
        }
        setQuantity(value)
    }


    const handleUploadThumbnail = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setThumbnail(URL.createObjectURL(event.target.files[0]))
            setThumbnailFile(event.target.files[0]);
        }
    }

    const handleUploadOtherImages = (event) => {
        if (event.target && event.target.files && event.target.files) {
            const filesArray = Array.from(event.target.files);
            setOtherImages(filesArray);

        }
    }

    useEffect(() => {
        getCategories(setRecords)
    }, [])

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog style={{ maxWidth: '60%' }}>
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
                                <Form.Label>Nhà xuất bản</Form.Label>
                                <Form.Control type="text" placeholder="Nhà xuất bản" value={publisher} onChange={(event) => setPublisher(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control as="textarea" style={{ height: "100px" }} placeholder="Mô tả" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Giá tiền</Form.Label>
                                <Form.Control type="number" placeholder="Giá tiền" onChange={(event) => setPrice(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Khuyến mãi (%)</Form.Label>
                                <Form.Control type="number" placeholder="Khuyến mãi" value={discount} onChange={(event) => setDiscount(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Thể loại</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(event) => setCategories(event.target.value)}>
                                    <option>Chọn thể loại</option>
                                    {Array.isArray(records.categories) && records.categories.map((category, index) => (
                                        <option key={index} value={category.id} > {category.name} </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="number" placeholder="Tồn kho" value={quantity} onChange={(event) => handleQuantity(event)} />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3" >
                                <Form.Label>Ảnh chính </Form.Label>
                                <Form.Control type="file" onChange={(event) => handleUploadThumbnail(event)} name='thumbnail' />
                                {thumbnail && <img width={'200px'} style={{ padding: "10px" }}
                                    src={thumbnail}
                                    alt="New Image" />}
                            </Form.Group>

                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Ảnh phụ</Form.Label>
                                <Form.Control type="file" multiple onChange={(event) => handleUploadOtherImages(event)} name='otherImages' />
                                {[...otherImages].map((otherImage, index) => (
                                    <img key={index} src={URL.createObjectURL(otherImage)} width={'200px'} style={{ padding: "10px" }} />
                                ))}
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>

                        <Button variant="primary" onClick={(event) => handleSubmit(event)}>Lưu thông tin</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        </>
    );
}

export default ModalAddNewBooks;