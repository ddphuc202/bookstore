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
  const [page, setPage] = useState(1);

  const [refresh, setRefresh] = useState(1);


  const handleDelete = (id) => {
    deleteCustomers(id, refresh, setRefresh);
  }

  const pageForward = () => {
    setPage(page + 1);
  }

  const pageBack = () => {
    setPage(page - 1);
  }

  useEffect(() => {
    getCustomers(page, setRecords);
  }, [refresh, page])


  return (
    <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên khách hàng</th>
            <th>Email</th>

            <th>Địa chỉ</th>
            <th>Số điện thoại</th>

          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(records.customers) && records.customers.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>

                <td>{d.address}</td>
                <td>{d.phone}</td>

              </tr>
            ))
          }
        </tbody>

      </Table>
      <div className="custom customs-btns-numbers clearfix input_number_index">
        <button
          onClick={() => pageBack()}
          disabled={page === 1}
          className="btn-minus btn-cts" type="button">
          <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#000000", marginTop: "2px" }} />
        </button>
        <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
          name="quantity"
          value={page}
          disabled
        />
        <button
          onClick={() => pageForward()}
          disabled={page === records.totalPages}
          className="btn-plus btn-cts" type="button">
          <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#000000", marginTop: "5px" }} />
        </button>
      </div>
    </div>
  )
}
export default TableCustomers;