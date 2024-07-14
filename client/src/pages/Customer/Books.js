import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
import image from '../../image/thanh-xuan-sao-ma-dau-don.png'
import '../../styles/Books.css';
import { getBooks } from '../../services/BooksServices';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListBooks from "../../components/Customer/ListBooks";
import SearchBooks from "../../components/Customer/SearchBooks";
import SideBarCategories from "../../components/Customer/SideBarCategories";
const Books = () => {

    const [searchBooks, setSearchBooks] = useState([])
    const [sortBy, setSortBy] = useState([]);
    const [order, setOrder] = useState([]);
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState([]);


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
        setSearchBooks([]);
    }

    const handleSortBy = () => {
        setSortBy('created_at')
        setOrder('DESC')
        setPage(1);
    }

    const handleAsc = () => {
        setSortBy('price')
        setOrder('ASC')
        setPage(1);
    }

    const handleDesc = () => {
        setSortBy('price')
        setOrder('DESC')
        setPage(1);
    }

    const handleCategoryId = (id) => {
        setCategoryId(id);
        setPage(1);
        setSearchBooks([]);
    }

    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <div className="container " style={{ marginTop: "10px" }}>
                <div className="banner-col">
                    <figure className="d-block a-center">
                        <img src="//bizweb.dktcdn.net/100/363/455/themes/918830/assets/banner-col.jpg?1704690471681" alt="" />
                    </figure>
                </div>
                <div className="bg_collection section">
                    <div className="row-book">
                        <SideBarCategories category={handleCategoryId} />
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
                                categoryId={categoryId}
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