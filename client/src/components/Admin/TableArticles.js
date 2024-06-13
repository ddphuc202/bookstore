import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import ModalEditBooks from './ModalEditBooks';
import ModalDeleteBooks from './ModalDeleteBooks';
const TableArticles = (props) => {

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (id) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
      axios.delete('http://localhost:3030/articles/' + id)
        .then(res => {
          alert('Item has deleted!');
          navigate('/manage-articles')
        }).catch(err => console.log(err))
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3030/articles').then(res => {
      setRecords(res.data)
    })
  },)


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Tiêu đề</th>
          <th>Nội dung</th>
          <th>Ảnh</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {
          records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.content}</td>
              <td>{d.image_url}</td>
              <td>
                <Link to={`/manage-edit-articles/${d.id}`} className='btn btn-warning'>Update</Link>
                <button onClick={event => handleSubmit(d.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </Table>
  )
}
export default TableArticles;