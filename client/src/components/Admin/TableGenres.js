import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import ModalEditBooks from './ModalEditBooks';
import ModalDeleteBooks from './ModalDeleteBooks';
const TableGenres = (props) => {

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (id) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
      axios.delete('http://localhost:3030/genres/' + id)
        .then(res => {
          alert('Item has deleted!');
          navigate('/manage-genres')
        }).catch(err => console.log(err))
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3030/genres').then(res => {
      setRecords(res.data)
    })
  },)


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Tên thể loại</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {
          records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>
                <Link to={`/manage-edit-genres/${d.id}`} className='btn btn-warning'>Update</Link>
                <button onClick={event => handleSubmit(d.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </Table>
  )
}
export default TableGenres;