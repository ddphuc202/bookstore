import '../../styles/Cart.css';
import TableProductCart from "../../components/Customer/TableProductCart"
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
const Cart = () => {
    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <section className="main-cart-page main-container col1-layout">
                <div className="main container cartpcstyle">
                    <div className="wrap_background_aside cartbg margin-bottom-40">
                        <div className="header-cart">
                            <div className="title-block-page">
                                <h1 className="title-module">
                                    <span>Giỏ hàng của bạn</span>
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-12 order-lg-1 order-2 colcartleft">
                                <div className="cart-page d-xl-block d-none">
                                    <div className="drawer__inner">
                                        <div className="CartPageContainer">
                                            <TableProductCart />
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
export default Cart;