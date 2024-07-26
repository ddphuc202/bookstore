import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { getOrderDetail } from "../../services/OrderServices";
import { baseURL } from "../../utils/AxiosCustomize";

const TableOrderDetail = () => {

    const { id } = useParams();
    const [data, setData] = useState([])

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
                                    <br></br>
                                    <span>{detail.book.title} </span>

                                </td>

                                <td className='price' style={{ verticalAlign: "middle" }}>{Number(detail.price).toLocaleString('vi-VN')}đ</td>
                                <td style={{ verticalAlign: "middle" }} >{detail.quantity}</td>
                                <td className='price' style={{ verticalAlign: "middle" }} ><b>{Number(detail.price * detail.quantity).toLocaleString('vi-VN')}đ</b></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </>
    )
}
export default TableOrderDetail;