import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getPost, deletePost } from '../../services/ArticlesServices';
const TableArticles = (props) => {

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (id) => {
    deletePost(id, navigate);
  }

  useEffect(() => {
    getPost(setRecords);
  }, [])


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
          Array.isArray(records) && records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.content}</td>
              <td>{d.image_url}</td>
              <td>
                <Link to={`/manage-edit-posts/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                <button style={{ border: 'none' }} onClick={event => handleSubmit(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </Table>
  )
}
export default TableArticles;