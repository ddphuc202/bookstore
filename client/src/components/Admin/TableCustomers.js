import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getCustomers, deleteCustomers } from '../../services/CustomerServices';
const TableCustomers = (props) => {

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  const [count, setCount] = useState(1);


  const handleDelete = (id) => {
    deleteCustomers(id, count, setCount);
  }

  useEffect(() => {
    getCustomers(setRecords);
  }, [count])


  return (
    <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
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
            Array.isArray(records.customers) && records.customers.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.password}</td>
                <td>{d.address}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/manage/edit-customers/${d.id}`}><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                  <button style={{ border: 'none' }} onClick={event => handleDelete(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </Table>
      <div className="custom customs-btns-numbers clearfix input_number_index">
        <button
          // onClick={() => pageBack()}
          // disabled={props.page === 1}
          className="btn-minus btn-cts" type="button">
          <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#000000", marginTop: "2px" }} />
        </button>
        <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
          name="quantity"
          // value={page}
          disabled
        />
        <button
          // onClick={() => pageForward()}
          // disabled={props.page === records.totalPages}
          className="btn-plus btn-cts" type="button">
          <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#000000", marginTop: "5px" }} />
        </button>
      </div>
    </div>
  )
}
export default TableCustomers;