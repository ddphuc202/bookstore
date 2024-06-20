import '../../styles/Cart.css';
import TableProductCart from "../../components/Customer/TableProductCart"
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
const Cart = () => {
    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <section class="main-cart-page main-container col1-layout">
                <div class="main container cartpcstyle">
                    <div class="wrap_background_aside cartbg margin-bottom-40">
                        <div class="header-cart">
                            <div class="title-block-page">
                                <h1 class="title-module">
                                    <span>Giỏ hàng của bạn</span>
                                </h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-9 col-12 order-lg-1 order-2 colcartleft">
                                <div class="cart-page d-xl-block d-none">
                                    <div class="drawer__inner">
                                        <div class="CartPageContainer">
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