import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function ModalEditArticles() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3030/articles/'+ id, data)
            .then(res => {
                alert("Data update successfully!");
                navigate('/manage-articles');
            })
    }

    useEffect(() => {
        axios.get('http://localhost:3030/articles/'+ id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Edit Articles</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label></Form.Label>
                                <Form.Control type="text" value={data.id} hidden />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={data.title} onChange={event => setData({ ...data, title: event.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Content</Form.Label>
                                <Form.Control type="text" value={data.content} onChange={event => setData({ ...data, content: event.target.value })} />
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
export default ModalEditArticles;