import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { getCartByCustomerId, updateIncreaseAmountOfCart, updateDecreaseAmountOfCart, updateInputAmountOfCart, deleteItemInCart } from "../../services/CartServices";
import { Link } from "react-router-dom";
import { baseURL } from "../../utils/AxiosCustomize";
const TableProductCart = () => {

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);


    const increaseQuantity = (index, id) => {
        updateIncreaseAmountOfCart(index, id, data, setData);
    };

    const decreaseQuantity = (index, id) => {
        updateDecreaseAmountOfCart(index, id, data, setData, handleDelete);
    };

    const updateQuantity = (index, id, newQuantity) => {
        updateInputAmountOfCart(index, id, newQuantity, data, setData);
    };

    const handleDelete = (id) => {
        deleteItemInCart(id);
    }

    useEffect(() => {
        if (Array.isArray(data)) {
            let totalPrice = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotal(totalPrice);
        }
    }, [data])

    useEffect(() => {
        getCartByCustomerId(3, setData)
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
                        Array.isArray(data) && data.map((item, index) => (

                            <tr key={index}>
                                <td>
                                    <img src={baseURL + item.book.thumbnailPath}></img>
                                    <span>{item.book.title}</span>
                                    <p onClick={() => handleDelete(item.id)} >Xóa</p>
                                </td>
                                <td className="price">{item.price}đ</td>
                                <td>
                                    <div className="custom custom-btn-numbers clearfix input_number_index">
                                        <button
                                            onClick={() => decreaseQuantity(index, item.id)}
                                            className="btn-minus btn-cts" type="button">
                                            <FontAwesomeIcon icon={faMinus} style={{ color: "#000000", marginTop: "5px" }} />
                                        </button>
                                        <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                                            name="quantity" value={item.quantity}
                                            onChange={event => updateQuantity(index, item.id, event.target.value)} />
                                        <button
                                            onClick={() => increaseQuantity(index, item.id)}
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
                <Link style={{ textDecoration: 'none' }} to={'/checkout'}><button type="button" className="btn btn-lg btn-gray btn_buy btn-buy-now">  Thanh toán </button></Link>
            </div>

        </>
    )
}
export default TableProductCart;