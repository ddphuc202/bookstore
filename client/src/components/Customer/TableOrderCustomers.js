
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrderCustomers } from '../../services/OrderServices';
const TableOrderCustomers = () => {

    const [data, setData] = useState([]);

    const status = {
        'pending': 'Chờ xử lý',
        'processing': 'Đang xử lý',
        'completed': ' Thành công',
        'cancelled': 'Đã hủy',
        'delivering': 'Đang giao hàng'
    }

    useEffect(() => {
        getOrderCustomers(localStorage.getItem('userId'), setData)
    }, [])

    return (
        <>
            <Table className='table table-hover' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên người nhận</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ nhận hàng</th>
                        <th>Trạng thái</th>
                        <th>Tổng tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(data) && data.map((item, index) => (

                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>
                                    {item.address}
                                </td>
                                <td className={`status1 status-${item.status}`}>{status[item.status]}</td>
                                <td className="price">{item.total}đ</td>
                                <td><Link to={`/order-detail/${item.id}`}>Chi tiết</Link></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>


        </>
    )
}
export default TableOrderCustomers;