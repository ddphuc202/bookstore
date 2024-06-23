import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { getCartByCustomerId } from "../../services/CartServices";
const TableProductCart = () => {

    const [data, setData] = useState([]);
    const [amount, setAmount] = useState();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getCartByCustomerId(1, setData)
        let totalPrice = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(totalPrice);
    }, [data])

    return (
        <>
            <Table className='table table-hover' >
                <thead>
                    <tr>
                        <th>Thông tin sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>Book ID: {item.bookId}</td>
                                <td className="price">{item.price}đ</td>
                                <td>
                                    <div className="custom custom-btn-numbers clearfix input_number_product">
                                        <button
                                            onClick=''
                                            className="btn-minus btn-cts" type="button">
                                            <FontAwesomeIcon icon={faMinus} style={{ color: "#000000", marginTop: "5px" }} />
                                        </button>
                                        <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                                            name="quantity" value={item.quantity}
                                            onChange='' />
                                        <button
                                            onClick=""
                                            className="btn-plus btn-cts" type="button">
                                            <FontAwesomeIcon icon={faPlus} style={{ color: "#000000", marginTop: "5px" }} />
                                        </button>
                                    </div>
                                </td>
                                <td className="price">{item.price * item.quantity}đ</td>


                            </tr>

                        ))
                    }


                    <tr>
                        <td></td>
                        <td></td>
                        <td><span style={{ fontWeight: 'bold', fontSize: '22px', color: 'black' }} >Tổng tiền:</span></td>
                        <td><span style={{ fontWeight: 'bold', fontSize: '22px', color: '#009900' }}>{total}đ</span></td>
                    </tr>
                </tbody>
            </Table>
            <div className="btn-mua">
                <button type="button" className="btn btn-lg btn-gray btn_buy btn-buy-now">Thanh toán</button>
            </div>

        </>
    )
}
export default TableProductCart;