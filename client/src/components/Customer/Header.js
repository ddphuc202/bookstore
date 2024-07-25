import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../image/Khai_Tam.png';
import { Link } from "react-router-dom";
import SearchBooks from "./SearchBooks";
const Header = () => {
    return (
        <header className="header">
            <div className="container child-container">
                <div className="nav-mobile d-xl-none d-inline-block"> </div>
                <div className="row">
                    <div className="col-lg-2 col-md-3">

                        <Link to="/" className="logo">
                            <img width="74" height="75" src={Logo} alt="Khai Tâm" />
                        </Link>


                    </div>
                    <div className="col-9 col-md-3 col-xl-7 col-lg-6">
                        <div className="child-header header_nav_main">
                            <div className="navigation-head">

                                <nav className="nav-horizontal">
                                    <ul className="item_big">
                                        <li className="nav-item active ">
                                            <Link className="a-img" to="/" title="Trang chủ">
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li className="nav-item has-child  ">
                                            <Link className="a-img caret-down" to="/posts" title="Tin Sách">
                                                Tin Sách
                                            </Link>


                                        </li>
                                        <li className="nav-item has-child   has-mega">
                                            <Link className="a-img caret-down" to="/books" title="Sách Nhã Nam">
                                                Sách Khai Tâm
                                            </Link>

                                        </li>

                                        <li className="nav-item ">
                                            <Link className="a-img" to="/about-page" title="Về Nhã Nam">
                                                Về Khai Tâm
                                            </Link>
                                        </li>


                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 col-lg-4 col-12 mb-block">
                        <div className="search-icon-mb d-md-none d-inline-block">
                            <svg className="icon">  </svg>
                        </div>

                        <div className="user-header">
                            <Link to={'/info-customer'} ><FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} /></Link>
                            {!localStorage.getItem('token') ? (
                                <div className="account-header">
                                    <Link to="/login">Đăng nhập</Link>
                                    <Link to="/register">Đăng ký</Link>
                                </div>
                            ) : (<div className="account-header">
                                <Link to="/logout">Đăng xuất</Link>
                            </div>
                            )
                            }
                        </div>
                        <Link className="cart-head" to={'/cart'} title="Giỏ hàng">
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} />
                        </Link>
                        <Link className="order-head" to={'/orders'} title="Đơn hàng">
                            <FontAwesomeIcon icon={faRectangleList} style={{ color: "#000000", }} />
                        </Link>
                        <div className="user-name">
                            {
                                localStorage.getItem('token') ? (
                                    <b>Xin chào {localStorage.getItem('userName')}</b>
                                ) : (null)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}
export default Header;