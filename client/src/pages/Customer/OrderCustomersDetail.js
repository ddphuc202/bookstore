import '../../styles/Cart.css';
import TableOrderCustomersDetail from '../../components/Customer/TableOrderCustomersDetail';
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
const OrderCustomersDetail = () => {
    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <section className="main-cart-page main-container col1-layout">
                <div className="main1 container cartpcstyle">
                    <div className="wrap_background_aside cartbg margin-bottom-40">
                        <div className="header-cart">
                            <div className="title-block-page">
                                <h1 className="title-module">
                                    <span>Đơn hàng của bạn</span>
                                </h1>
                            </div>
                        </div>
                        <div className="row-1">
                            <div className="col-lg-9 col-12 order-lg-1 order-2 colcartleft">
                                <div className="cart-page d-xl-block d-none">
                                    <div className="drawer__inner">
                                        <div className="CartPageContainer">
                                            <TableOrderCustomersDetail />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>
            <Footer />
        </>
    )
}
export default OrderCustomersDetail;