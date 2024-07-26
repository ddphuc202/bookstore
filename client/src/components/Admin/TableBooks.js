import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight, faRotateLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getBooksAdmin, deleteBooks, restoreBook } from '../../services/BooksServices'
import { baseURL } from '../../utils/AxiosCustomize';
const TableBooks = (props) => {

  const [records, setRecords] = useState([]);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const [order, setOrder] = useState([]);
  const [categoryId, setCategoryId] = useState();

  const [refresh, setRefresh] = useState(1);


  const handleDelete = (id) => {
    deleteBooks(id, refresh, setRefresh);
  }

  const handleRestore = (id) => {
    restoreBook(id, refresh, setRefresh)
  }

  const pageForward = () => {
    setPage(page + 1)
  }

  const pageBack = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    getBooksAdmin(page, search, sortBy, order, categoryId, setRecords);
  }, [page, search, refresh])



  return (
    <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>

      <form className="input-group search-bar" style={{ margin: '0px 10px 20px 20px' }}>
        <input type="text" value={search}
          onChange={(event) => setSearch(event.target.value)}
          name="query" placeholder="Tìm kiếm..."
          className="search-auto input-group-field auto-search" required="" />
        <button className="btn search-button" aria-label="Justify">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
        </button>
      </form>

      <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th>#</th>
            <th>Tiêu đề</th>
            <th>Ảnh</th>
            <th>Tác giả</th>
            <th>Nhà xuất bản</th>
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
            Array.isArray(records.books) && records.books.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>
                  <img width={'200px'} src={baseURL + d.thumbnailPath} />
                </td>
                <td>{d.author}</td>
                <td>{d.publisher}</td>
                <td>{d.description}</td>
                <td>{d.price}</td>
                <td>{d.discount}</td>
                <td>{d.category.name}</td>
                <td>{d.quantity}</td>
                <td>
                  {
                    d.deletedAt ? (
                      <button style={{ border: 'none' }} onClick={event => handleRestore(d.id)} ><FontAwesomeIcon icon={faRotateLeft} style={{ color: "green" }} /></button>
                    ) : (
                      <>
                        <Link to={`/manage/edit-books/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                        <button style={{ border: 'none' }} onClick={event => handleDelete(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
                      </>
                    )}
                </td>
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
          value={page} disabled
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
export default TableBooks;