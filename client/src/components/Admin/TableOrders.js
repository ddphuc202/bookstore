import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getAllOrders } from "../../services/OrderServices";
const TableOrders = (props) => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getAllOrders(setData);
    }, [])


    return (
        <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Tình trạng</th>
                        <th>Tổng tiền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(data.orders) && data.orders.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.phone}</td>
                                <td>{d.address}</td>
                                <td>{d.status}</td>
                                <td>{d.total}</td>
                                <td>
                                    <Link to={`/manage/update-orders/${d.id}`}><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
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
export default TableOrders;