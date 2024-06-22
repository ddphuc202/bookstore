import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const TableProductCart = () => {
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
                    <tr>
                        <td>Book 1</td>
                        <td className="price">100000</td>
                        <td>
                            <div className="custom custom-btn-numbers clearfix input_number_product">
                                <button
                                    onClick=""
                                    className="btn-minus btn-cts" type="button">
                                    <FontAwesomeIcon icon={faMinus} style={{ color: "#000000", marginTop: "5px" }} />
                                </button>
                                <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                                    name="quantity" value={'1'}
                                    onChange="" />
                                <button
                                    onClick=""
                                    className="btn-plus btn-cts" type="button">
                                    <FontAwesomeIcon icon={faPlus} style={{ color: "#000000", marginTop: "5px" }} />
                                </button>
                            </div>
                        </td>
                        <td className="price">200000</td>
                    </tr>
                    <tr>
                        <td>Book 2</td>
                        <td className="price">200000</td>
                        <td>
                            <div className="custom custom-btn-numbers clearfix input_number_product">
                                <button
                                    onClick=""
                                    className="btn-minus btn-cts" type="button">
                                    <FontAwesomeIcon icon={faMinus} style={{ color: "#000000", marginTop: "5px" }} />
                                </button>
                                <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                                    name="quantity" value={'1'}
                                    onChange="" />
                                <button
                                    onClick=""
                                    className="btn-plus btn-cts" type="button">
                                    <FontAwesomeIcon icon={faPlus} style={{ color: "#000000", marginTop: "5px" }} />
                                </button>
                            </div>
                        </td>
                        <td className="price">200000</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><span style={{ fontWeight: 'bold', fontSize: '22px', color: 'black' }} >Tổng tiền:</span></td>
                        <td><span style={{ fontWeight: 'bold', fontSize: '22px', color: '#009900' }}>400000</span></td>
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