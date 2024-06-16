import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
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
    <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
      <Table striped bordered hover responsive >
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
                <td>
                  {d.genre_id === 1 ? "Lịch sử" :
                    d.genre_id === 2 ? "Bí ẩn" :
                      d.genre_id === 3 ? "Kinh doanh" :
                        d.genre_id === 4 ? "Trinh thám" :
                          d.genre_id === 5 ? "Lãng mạn" :
                            d.genre_id === 6 ? "Khoa học viễn tưởng" :
                              d.genre_id === 7 ? "Tâm lý học" :
                                d.genre_id === 8 ? "Tâm linh - Tôn giáo" :
                                  d.genre_id === 9 ? "Kinh dị" : null}
                </td>
                <td>{d.stock}</td>
                <td>
                  <Link to={`/manage-edit-books/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                  <button style={{ border: 'none' }} onClick={event => handleSubmit(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </Table>
    </div>
  )
}
export default TableBooks;