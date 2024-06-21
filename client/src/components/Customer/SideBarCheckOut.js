const SideBarCheckOut = () => {
    return (
        <>
            <aside class="sidebar">
                <div class="sidebar__header">
                    <h2 class="sidebar__title">
                        Đơn hàng (2 sản phẩm)
                    </h2>
                </div>
                <div class="sidebar__content">
                    <div id="order-summary" class="order-summary order-summary--is-collapsed">
                        <div class="order-summary__sections">
                            <div class="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                                <table class="product-table" id="product-table" >
                                    <caption class="visually-hidden">Chi tiết đơn h�&nbsp;ng</caption>
                                    <thead class="product-table__header">
                                        <tr>
                                            <th>
                                                <span class="visually-hidden">Ảnh sản phẩm</span>
                                            </th>
                                            <th>
                                                <span class="visually-hidden">Mô tả</span>
                                            </th>
                                            <th>
                                                <span class="visually-hidden">Sổ lượng</span>
                                            </th>
                                            <th>
                                                <span class="visually-hidden">Đơn giá</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="product">
                                            <td class="product__image">
                                                <div class="product-thumbnail">
                                                    <div class="product-thumbnail__wrapper" data-tg-static="">
                                                        <img src="images/khi-ban-trai-tro-ma-01-e1718178537602.jpg"
                                                            alt="" class="product-thumbnail__image" />
                                                    </div>
                                                    <span class="product-thumbnail__quantity">1</span>
                                                </div>
                                            </td>
                                            <th class="product__description">
                                                <span class="product__description__name">
                                                    KHI B�&nbsp;N TRAI TRỔ MÃ
                                                </span>



                                                <span class="product__description__property">
                                                    <span class="discount-tag">
                                                        <span class="discount-icon"><i class="fa fa-tag"></i></span>
                                                        <span class="discount-tag--name">Giảm 15% so với giá bìa
                                                            (-22.500₫)</span>
                                                    </span>
                                                </span>

                                            </th>
                                            <td class="product__quantity visually-hidden"><em>Số lượng:</em> 1</td>
                                            <td class="product__price">

                                                127.500₫

                                            </td>
                                        </tr>

                                        <tr class="product">
                                            <td class="product__image">
                                                <div class="product-thumbnail">
                                                    <div class="product-thumbnail__wrapper" data-tg-static="">
                                                        <img src="images/hondonvakhuvuon01e171766606841.jpg" alt=""
                                                            class="product-thumbnail__image" />
                                                    </div>
                                                    <span class="product-thumbnail__quantity">1</span>
                                                </div>
                                            </td>
                                            <th class="product__description">
                                                <span class="product__description__name">
                                                    HỖN ĐỘN VÀ KHU VƯỜN
                                                </span>



                                                <span class="product__description__property">
                                                    <span class="discount-tag">
                                                        <span class="discount-icon"><i class="fa fa-tag"></i></span>
                                                        <span class="discount-tag--name">Giảm 15% so với giá bìa
                                                            (-25.200₫)</span>
                                                    </span>
                                                </span>

                                            </th>
                                            <td class="product__quantity visually-hidden"><em>Số lượng:</em> 1</td>
                                            <td class="product__price">

                                                142.800₫

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                            <div class="order-summary__section order-summary__section--total-lines order-summary--collapse-element"
                                id="orderSummary">
                                <table class="total-line-table">
                                    <caption class="visually-hidden">Tổng giá trị</caption>
                                    <thead>
                                        <tr>
                                            <td><span class="visually-hidden">Mô tả</span></td>
                                            <td><span class="visually-hidden">Giá tiền</span></td>
                                        </tr>
                                    </thead>
                                    <tbody class="total-line-table__tbody">
                                        <tr class="total-line total-line--subtotal">
                                            <th class="total-line__name">
                                                Tạm tính
                                            </th>
                                            <td class="total-line__price">270.300₫</td>
                                        </tr>



                                        <tr class="total-line total-line--shipping-fee">
                                            <th class="total-line__name">
                                                Phí vận chuyển
                                            </th>
                                            <td class="total-line__price">
                                                <span class="origin-price"></span>
                                                <span ></span>
                                            </td>
                                        </tr>



                                    </tbody>
                                    <tfoot class="total-line-table__footer">
                                        <tr class="total-line payment-due">
                                            <th class="total-line__name">
                                                <span class="payment-due__label-total">
                                                    Tổng cộng
                                                </span>
                                            </th>
                                            <td class="total-line__price">
                                                <span class="payment-due__price"
                                                    data-bind="getTextTotalPrice()"></span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div class="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                                <button type="submit" class="btn btn-checkout spinner"  >
                                    <span class="spinner-label">ĐẶT HÀNG</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="spinner-loader">
                                        <use href="#spinner"></use>
                                    </svg>
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