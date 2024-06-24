import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../image/Khai_Tam.png';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <div className="container child-container">
                <div className="nav-mobile d-xl-none d-inline-block"> </div>
                <div className="row">
                    <div className="col-lg-2 col-md-3">

                        <a href="/" className="logo">
                            <img width="74" height="75" src={Logo} alt="Khai Tâm" />
                        </a>


                    </div>
                    <div className="col-9 col-md-3 col-xl-7 col-lg-6">
                        <div className="child-header header_nav_main">
                            <div className="d-block d-md-none bl-acc">
                                <div className="block-account">
                                    <FontAwesomeIcon icon={faUser} />
                                    <div className="d-flex">

                                        <a href="/account/login">Đăng nhập</a>
                                        <a href="/account/register">Đăng ký</a>

                                    </div>
                                </div>
                            </div>
                            <div className="navigation-head">

                                <nav className="nav-horizontal">
                                    <ul className="item_big">
                                        <li className="nav-item active ">
                                            <a className="a-img" href="/" title="Trang chủ">
                                                Trang chủ
                                            </a>
                                        </li>
                                        <li className="nav-item has-child  ">
                                            <a className="a-img caret-down" href="/tin-sach" title="Tin Sách">
                                                Tin Sách
                                            </a>


                                        </li>
                                        <li className="nav-item has-child   has-mega">
                                            <a className="a-img caret-down" href="/books" title="Sách Nhã Nam">
                                                Sách Khai Tâm
                                            </a>

                                        </li>

                                        <li className="nav-item ">
                                            <a className="a-img" href="/about-page" title="Về Nhã Nam">
                                                Về Khai Tâm
                                            </a>
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
                        <form action="/search" className="input-group search-bar" role="search">
                            <input type="text" aria-label="Tìm sản phẩm" name="query" placeholder="Tìm kiếm..." className="search-auto input-group-field auto-search" required="" />
                            <input type="hidden" name="type" value="product" />
                            <button className="btn search-button" aria-label="Justify">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
                            </button>
                        </form>
                        <div className="user-header">
                            <Link to={'/orders'} ><FontAwesomeIcon icon={faUser} /></Link>

                            <div className="account-header">

                                <a href="/login">Đăng nhập</a>
                                <a href="/register">Đăng ký</a>

                            </div>
                        </div>
                        <Link className="cart-head" to={'/cart'} title="Giỏ hàng">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="count_item count_item_pr">2</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )

}
export default Header;