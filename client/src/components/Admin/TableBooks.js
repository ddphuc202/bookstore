import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import ModalEditBooks from './ModalEditBooks';
import ModalDeleteBooks from './ModalDeleteBooks';
import { getBooks, deleteBooks } from '../../services/BooksServices'
const TableBooks = (props) => {


  const [records, setRecords] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (id) => {
    deleteBooks(id, navigate);
  }

  useEffect(() => {
    getBooks().then(res => {
      setRecords(res.data)
    })
  },)

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const handleClose = () => {
    setIsShowModalEdit(false);
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Tiêu đề</th>
          <th>Tác giả</th>
          <th>Mô tả</th>
          <th>Giá thành</th>
          <th>Khuyến mãi (%)</th>
          <th>Thể loại</th>
          <th>Tồn kho</th>
          <th>Hành động</th>
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
              <td>{d.genre_id}</td>
              <td>{d.stock}</td>
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