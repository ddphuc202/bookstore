import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { getAllOrders } from "../../services/OrderServices";
const TableOrders = (props) => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getAllOrders(setData);
    },)


    return (
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
                    data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.phone}</td>
                            <td>{d.address}</td>
                            <td>{d.status}</td>
                            <td>{d.total}</td>
                            <td>
                                <Link to={`/manage-update-orders/${d.id}`}><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </Table>
    )
}
export default TableOrders;