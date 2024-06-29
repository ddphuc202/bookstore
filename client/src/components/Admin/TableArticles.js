import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getPost, deletePost } from '../../services/ArticlesServices';
const TableArticles = (props) => {

  const [records, setRecords] = useState([]);
  const [count, setCount] = useState(1);

  const handleDelete = (id) => {
    deletePost(id, count, setCount);
  }

  useEffect(() => {
    getPost(setRecords);
  }, [count])


  return (
    <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
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
            Array.isArray(records.posts) && records.posts.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.content}</td>
                <td>{d.image_url}</td>
                <td>
                  <Link to={`/manage/edit-posts/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
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
export default TableArticles;