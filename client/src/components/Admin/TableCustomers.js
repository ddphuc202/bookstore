import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
const TableCustomers = (props) => {

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (id) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
      axios.delete('http://localhost:3030/customers/' + id)
        .then(res => {
          alert('Item has deleted!');
          navigate('/manage-customers')
        }).catch(err => console.log(err))
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3030/customers').then(res => {
      setRecords(res.data)
    })
  },)


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Tên khách hàng</th>
          <th>Email</th>
          <th>Mật khẩu</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {
          records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
              <td>{d.address}</td>
              <td>{d.phone_number}</td>
              <td>
                <Link to={`/manage-edit-customers/${d.id}`}><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                <button style={{ border: 'none' }} onClick={event => handleSubmit(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </Table>
  )
}
export default TableCustomers;