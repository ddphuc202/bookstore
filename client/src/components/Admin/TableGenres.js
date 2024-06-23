import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getCategories, deleteCategories } from "../../services/GenresServices";
const TableGenres = (props) => {

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (id) => {
    deleteCategories(id, navigate)
  }

  useEffect(() => {
    getCategories(setRecords)
  },)


  return (
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
          records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>
                <Link to={`/manage-edit-categories/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                <button style={{ border: 'none' }} onClick={event => handleSubmit(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </Table>
  )
}
export default TableGenres;