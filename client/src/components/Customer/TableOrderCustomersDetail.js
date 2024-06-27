
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrderDetail, cancelStatusOrder } from '../../services/OrderServices';
import { baseURL } from '../../utils/AxiosCustomize';
import { useNavigate } from 'react-router-dom';
const TableOrderCustomersDetail = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    const navigate = useNavigate()

    const handleCancel = () => {
        cancelStatusOrder(id, navigate);
    }

    useEffect(() => {
        getOrderDetail(id, setData)
    }, [])


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
                        Array.isArray(data.orderDetails) && data.orderDetails.map((detail, i) => (
                            <tr key={i}>
                                <td>
                                    <img width={"200px"} src={baseURL + detail.book.thumbnailPath}></img>
                                    <span>{detail.book.title} </span>
                                </td>

                                <td className='price' style={{ verticalAlign: "middle" }}>{Number(detail.price).toLocaleString('vi-VN')}đ</td>
                                <td style={{ verticalAlign: "middle" }} >{detail.quantity}</td>
                                <td className='price' style={{ verticalAlign: "middle" }} >{Number(detail.price * detail.quantity).toLocaleString('vi-VN')}đ</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>

            <button disabled={data.status === "processing" || data.status === 'completed' || data.status === 'cancelled'} onClick={() => handleCancel()} className='btn btn-danger'> Hủy đơn hàng </button>


        </>
    )
}
export default TableOrderCustomersDetail;