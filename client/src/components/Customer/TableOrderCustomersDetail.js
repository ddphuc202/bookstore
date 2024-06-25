
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrderDetail } from '../../services/OrderServices';
import { baseURL } from '../../utils/AxiosCustomize';
const TableOrderCustomersDetail = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [status, setStatus] = useState();


    useEffect(() => {
        getOrderDetail(id, setData)
    }, [data])

    return (
        <>
            <Table className='table table-hover' >
                <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(data) && data.map((item, index) => (

                            Array.isArray(item.orderDetails) && item.orderDetails.map((detail, i) => (
                                <tr key={index}>
                                    <td>
                                        <img width={"200px"} src={baseURL + detail.book.thumbnailPath}></img>
                                        <span>{detail.book.title} </span>
                                    </td>

                                    <td>{detail.price.toLocalString('vi-VN')}</td>
                                    <td>{detail.quantity}</td>
                                    <td>{Number(detail.price * detail.quantity).toLocaleString('vi-VN')}</td>
                                </tr>
                            ))
                        ))
                    }

                </tbody>
            </Table>

            <button> Hủy đơn hàng </button>


        </>
    )
}
export default TableOrderCustomersDetail;