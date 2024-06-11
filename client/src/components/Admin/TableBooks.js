import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import ModalEditBooks from './ModalEditBooks';
import ModalDeleteBooks from './ModalDeleteBooks';
const TableBooks = (props) => {

  const [columns, setColmns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (id) =>{
    const conf = window.confirm('Do you want to delete?');
    if(conf) {
      axios.delete('http://localhost:3030/books/'+id)
      .then(res => {
        alert('Item has deleted!');
        navigate('/manage-books')
      }).catch(err => console.log(err))
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3030/books').then(res => {
      setColmns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, )

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const handleClose = () => {
    setIsShowModalEdit(false);
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i}> {c} </th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.author}</td>
              <td>{d.description}</td>
              <td>{d.price}</td>
              <td>{d.discount}</td>
              <td>{d.is_active}</td>
              <td>{d.genre_id}</td>
              <td>{d.stock}</td>
              <td>{d.created_at}</td>
              <td>{d.updated_at}</td>
              <td>
                <Link to={`/manage-edit-books/${d.id}`} className='btn btn-warning'>Update</Link>
                <button onClick={event => handleSubmit(d.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </Table>
  )
}
export default TableBooks;