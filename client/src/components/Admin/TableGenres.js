import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getCategories, deleteCategories } from "../../services/GenresServices";
const TableGenres = (props) => {

  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(1);


  const handleDelete = (id) => {
    deleteCategories(id, refresh, setRefresh)
  }


  // const pageForward = () => {
  //   setPage(page + 1);
  // }

  // const pageBack = () => {
  //   setPage(page - 1);
  // }

  useEffect(() => {
    getCategories(setRecords)
  }, [refresh])


  return (
    <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên thể loại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(records.categories) && records.categories.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>
                  <Link to={`/manage/edit-categories/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                  {/* <button style={{ border: 'none' }} onClick={event => handleDelete(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button> */}
                </td>
              </tr>
            ))
          }
        </tbody>

      </Table>
      {/* <div className="custom customs-btns-numbers clearfix input_number_index">
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
      </div> */}
    </div>
  )
}
export default TableGenres;