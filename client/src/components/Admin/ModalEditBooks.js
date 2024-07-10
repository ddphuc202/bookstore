import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBookById, updateBookByID } from '../../services/BooksServices';
import { getCategories } from '../../services/GenresServices';
import { baseURL } from '../../utils/AxiosCustomize';


function ModalEditBooks() {

    const { id } = useParams();
    const [data, setData] = useState([]);

    const [previewThumbnail, setPreviewThumbnail] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [thumbnail, setThumbnail] = useState([null]);

    const [previewOtherImages, setPreviewOtherImages] = useState([]);
    const [otherImages, setOtherImages] = useState([]);

    const [records, setRecords] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBookByID(id, data, thumbnailFile, previewOtherImages, navigate)
    }


    const handleUploadThumbnail = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewThumbnail(URL.createObjectURL(event.target.files[0]))
            setThumbnailFile(event.target.files[0]);
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
        getCategories(setRecords)
    }, [])

    useEffect(() => {
        if (data) {
            setThumbnail(data.thumbnailPath);
            if (data.bookImages) {
                setOtherImages(data.bookImages.map(image => image.imagePath));
            }
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
                            <Form.Group className="mb-3"  >
                                <Form.Label></Form.Label>
                                <Form.Control type="text" value={data.id} hidden />
                            </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Tiêu đề</Form.Label>
                                <Form.Control type="text" value={data.title} onChange={event => setData({ ...data, title: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tác giả</Form.Label>
                                <Form.Control type="text" value={data.author} onChange={event => setData({ ...data, author: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nhà xuất bản</Form.Label>
                                <Form.Control type="text" value={data.publisher} onChange={event => setData({ ...data, publisher: event.target.value })} />
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
                                <Form.Select aria-label="Default select example" value={data.categoryId} onChange={event => setData({ ...data, categoryId: event.target.value })}>
                                    {
                                        Array.isArray(records.categories) && records.categories.map((category, index) => (
                                            <option value={category.id} key={index} > {category.name} </option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="number" value={data.quantity} onChange={event => setData({ ...data, quantity: event.target.value })} />
                            </Form.Group>
                        </Form>

                        <Form.Group controlId="formFile" className="mb-3" >
                            <Form.Label>Ảnh chính </Form.Label>
                            <Form.Control type="file"
                                onChange={(event) => handleUploadThumbnail(event)}
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
                                            {thumbnail && <img width={'200px'} style={{ padding: "10px" }}
                                                src={baseURL + thumbnail}
                                                alt="Ảnh sẵn" />}
                                        </td>

                                        <td>
                                            {previewThumbnail && <img width={'200px'} style={{ padding: "10px" }}
                                                src={previewThumbnail}
                                                alt="Ảnh mới" />}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Form.Group>

                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Ảnh phụ</Form.Label>
                            <Form.Control type="file" multiple
                                onChange={(event) => handleUploadOtherImages(event)}
                                name='otherImages' />
                            <br />
                            <div>
                                <span>Ảnh sẵn</span>
                                {
                                    [...otherImages].map((otherImage, index) => (
                                        <img key={index} src={baseURL + otherImage} width={'200px'} style={{ padding: "10px" }} />
                                    ))
                                }
                            </div>
                            <br />
                            <div>
                                <span>Ảnh mới</span>
                                {
                                    [...previewOtherImages].map((previewOtherImage, index) => (
                                        <img key={index} src={URL.createObjectURL(previewOtherImage)} width={'200px'} style={{ padding: "10px" }} />
                                    ))
                                }
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