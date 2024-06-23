
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../utils/AxiosCustomize";
import { getOrderCustomers } from '../../services/OrderServices';
const TableOrderCustomers = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState();



    // useEffect(() => {
    //     if (Array.isArray(data)) {
    //         let totalPrice = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
    //         setTotal(totalPrice);
    //     }
    // }, [data])

    useEffect(() => {
        getOrderCustomers(3, setData)
    }, [data])

    return (
        <>
            <Table className='table table-hover' >
                <thead>
                    <tr>
                        <th>Đơn hàng</th>
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
                                <td><span>{item.name}</span></td>
                                <td>{item.phone}</td>
                                <td>
                                    {item.address}
                                </td>
                                <td className="price">{item.status}</td>
                                <td className="price">{item.total}đ</td>
                                <td><Link>Chi tiết</Link></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>


        </>
    )
}
export default TableOrderCustomers;