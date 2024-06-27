import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
import image from '../../image/thanh-xuan-sao-ma-dau-don.png'
import '../../styles/Books.css';
import { getBooks } from '../../services/BooksServices';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListBooks from "../../components/Customer/ListBooks";
import SearchBooks from "../../components/Customer/SearchBooks";
const Books = () => {

    const [searchBooks, setSearchBooks] = useState([])
    const [sortBy, setSortBy] = useState([]);
    const [order, setOrder] = useState([]);
    const [page, setPage] = useState(1);


    const handleSearch = (searchValue) => {
        setSearchBooks(searchValue);
        setPage(1);
        setSortBy('');
        setOrder('');
    }

    const handleDefault = () => {
        setSortBy('');
        setOrder('');
        setPage(1);
    }

    const handleSortBy = () => {
        setSortBy('created_at')
    }

    const handleAsc = () => {
        setOrder('asc')
    }

    const handleDesc = () => {
        setOrder('desc')
    }

    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <div className="container " style={{ marginTop: "10px" }}>
                <div className="banner-col">
                    <figure className="d-block a-center">
                        <a href="#" title="">
                            <img src="//bizweb.dktcdn.net/100/363/455/themes/918830/assets/banner-col.jpg?1704690471681" alt="" />
                        </a>
                    </figure>
                </div>
                <div className="bg_collection section">
                    <div className="row-book">
                        <aside className="filter-sidebar side-bar left-content col-lg-3 col-md-4 col-sm-4">
                            <div className="wrap_background_aside asidecollection">
                                <div className="row">
                                    <div className="col-12 col-lg-12 order-1 order-lg-2">
                                        <div className="filter-content aside-filter">
                                            <div className="filter-container">

                                                <aside className="aside-item filter-vendor f-left">
                                                    <div className="aside-title">
                                                        <h2 className="title-filter title-head margin-top-0"><span
                                                            className="leaf">Thể Loại</span></h2>
                                                    </div>
                                                    <div className="aside-content margin-top-0 filter-group">
                                                        <ul>
                                                            <li
                                                                className="filter-item filter-item--check-box filter-item--green vendorxxx">
                                                                <span>
                                                                    <label >
                                                                        <input type="checkbox" />
                                                                        <i className="fa"></i>
                                                                        <span>Trinh thám</span>
                                                                    </label>
                                                                </span>
                                                            </li>


                                                        </ul>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </aside>
                        <div className="main_container collection col-lg-9 col-md-12 col-sm-12">
                            <div className="wrap-srt-title">
                                <div className="sortby">

                                    < SearchBooks onSearch={handleSearch} />

                                    <span className="lazyload sort-icon">Sắp xếp theo </span>
                                    <ul>
                                        <li className="btn-quick-sort default active">
                                            <a onClick={() => handleDefault()} >Mặc định</a>
                                        </li>
                                        <li className="btn-quick-sort created-desc">
                                            <a onClick={() => handleSortBy()} >Sách mới</a>
                                        </li>
                                        <li className="btn-quick-sort price-desc">
                                            <a onClick={() => handleAsc()} >Giá thấp - cao</a>
                                        </li>
                                        <li className="btn-quick-sort price-asc">
                                            <a onClick={() => handleDesc()} >Giá cao - thấp</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ListBooks
                                searchBook={searchBooks}
                                sortByBook={sortBy}
                                orderBook={order}
                                page={page}
                                setPage={setPage}
                            />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Books;