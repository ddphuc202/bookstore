import image from '../../image/thanh-xuan-sao-ma-dau-don.png';
const SideBarCheckOut = () => {
    return (
        <>
            <aside className="sideBar">
                <div className="sidebar__header">
                    <h2 className="sidebar__title">
                        Đơn hàng (2 sản phẩm)
                    </h2>
                </div>
                <div className="sidebar__content">
                    <div id="order-summary" className="order-summary order-summary--is-collapsed">
                        <div className="order-summary__sections">
                            <div className="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                                <table className="product-table" id="product-table" >
                                    <thead className="product-table__header">
                                        <tr>
                                            <th>
                                                <span className="visually-hidden">Ảnh sản phẩm</span>
                                            </th>
                                            <th>
                                                <span className="visually-hidden">Mô tả</span>
                                            </th>
                                            <th>
                                                <span className="visually-hidden">Sổ lượng</span>
                                            </th>
                                            <th>
                                                <span className="visually-hidden">Đơn giá</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <br />

                                    <tbody>

                                        <tr className="product">
                                            <td className="product__image">
                                                <div className="product-thumbnail">
                                                    <div className="product-thumbnail__wrapper" >
                                                        <img src={image}
                                                            alt="" className="product-thumbnail__image" />
                                                    </div>
                                                    <span className="product-thumbnail__quantity">1</span>
                                                </div>
                                            </td>
                                            <th className="product__description">
                                                <span className="product__description__name">
                                                    KHI BẠN TRAI TRỔ MÃ
                                                </span>



                                                <span className="product__description__property">
                                                    <span className="discount-tag">
                                                        <span className="discount-icon"><i className="fa fa-tag"></i></span>
                                                        <span className="discount-tag--name">Giảm 15% so với giá bìa
                                                            (-22.500₫)</span>
                                                    </span>
                                                </span>

                                            </th>
                                            <td className="product__quantity visually-hidden"><em>Số lượng:</em> 1</td>
                                            <td className="product__price">

                                                127.500₫

                                            </td>
                                        </tr>

                                        <br />


                                        <tr className="product">
                                            <td className="product__image">
                                                <div className="product-thumbnail">
                                                    <div className="product-thumbnail__wrapper" >
                                                        <img src={image} alt=""
                                                            className="product-thumbnail__image" />
                                                    </div>
                                                    <span className="product-thumbnail__quantity">1</span>
                                                </div>
                                            </td>
                                            <th className="product__description">
                                                <span className="product__description__name">
                                                    HỖN ĐỘN VÀ KHU VƯỜN
                                                </span>



                                                <span className="product__description__property">
                                                    <span className="discount-tag">
                                                        <span className="discount-icon"><i className="fa fa-tag"></i></span>
                                                        <span className="discount-tag--name">Giảm 15% so với giá bìa
                                                            (-25.200₫)</span>
                                                    </span>
                                                </span>

                                            </th>
                                            <td className="product__quantity visually-hidden"><em>Số lượng:</em> 1</td>
                                            <td className="product__price">

                                                142.800₫

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <br></br>

                            <div className="order-summary__section order-summary__section--total-lines order-summary--collapse-element"
                                id="orderSummary">
                                <table className="total-line-table">

                                    <thead>
                                        <tr>
                                            <td><span className="visually-hidden">Mô tả</span></td>
                                            <td><span className="visually-hidden">Giá tiền</span></td>

                                        </tr>
                                    </thead>
                                    <tbody className="total-line-table__tbody">
                                        <tr className="total-line total-line--subtotal">
                                            <th className="total-line__name">
                                                Tạm tính
                                            </th>
                                            <td></td>

                                            <td className="total-line__price">270.300₫</td>
                                        </tr>



                                    </tbody>
                                    <tfoot className="total-line-table__footer">
                                        <tr className="total-line payment-due">
                                            <th className="total-line__name">
                                                <span className="payment-due__label-total">
                                                    Tổng cộng
                                                </span>
                                            </th>
                                            <td></td>
                                            <td className="total-line__price">
                                                <span className="payment-due__price"
                                                >270.300₫</span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                                <br></br>
                                <button type="submit" className="btn btn-checkout spinner"  >
                                    <span className="spinner-label btn btn-primary">ĐẶT HÀNG</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default SideBarCheckOut;