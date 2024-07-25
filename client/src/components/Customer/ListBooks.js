import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../image/thanh-xuan-sao-ma-dau-don.png'
import { getBooks } from '../../services/BooksServices';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addBookToCart } from '../../services/CartServices';
import { baseURL } from "../../utils/AxiosCustomize";
import { ToastContainer } from "react-toastify";
const ListBooks = (props) => {

    const [records, setRecords] = useState([]);


    const handleSubmit = (id) => {
        addBookToCart(id);
    }

    const pageForward = () => {
        if (props.page < records.totalPages) {
            props.setPage(props.page + 1);
        }
    }

    const pageBack = () => {
        props.setPage(props.page - 1);
    }

    useEffect(() => {
        getBooks(props.page, props.searchBook, props.sortByBook, props.orderBook, props.categoryId, setRecords);
    }, [props])

    console.log(records)

    return (
        <>
            <ToastContainer />
            <div className="category-products products">
                <section className="products-view products-view-grid collection_reponsive">
                    <div className="row">
                        {Array.isArray(records.books) && records.books.length > 0 ? (
                            records.books.map((book, index) => (
                                <div key={index} className="col-6 col-md-3 col-lg-3 product-col">
                                    <div className="item_product_main">
                                        <div className="thumb">
                                            <Link to={`/info-book/${book.id}`} className="image_thumb"
                                                title="HỖN ĐỘN VÀ KHU VƯỜN">
                                                <img width="199" height="199"
                                                    src={baseURL + book.thumbnailPath}
                                                    alt="HỖN ĐỘN VÀ KHU VƯỜN"
                                                    className="lazyload img-responsive center-block" />
                                            </Link>

                                        </div>
                                        <div className="info-product">
                                            <h3 className="product-name">
                                                <Link to={`/info-book/${book.id}`}
                                                    title="HỖN ĐỘN VÀ KHU VƯỜN">
                                                    <b>{book.title}</b>
                                                </Link>
                                            </h3>

                                            <div className="price-box">
                                                <span className="price"><b>{(book.price - book.price * book.discount / 100).toLocaleString('vi-VN')}đ</b></span>
                                                {book.discount > 0 &&
                                                    <span className="compare-price">{book.price.toLocaleString('vi-VN')}đ</span>
                                                }


                                            </div>

                                            <button onClick={() => handleSubmit(book.id)} className='btn-buy btn-left btn-views  btn-buy-now-grid' >
                                                Thêm vào giỏ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ border: "solid, green, 1px", height: "80px", padding: "20px", marginBottom: "20px" }}>
                                <h2 style={{ textAlign: "center", color: "black" }}>Không tìm thấy sản phẩm nào!</h2>
                            </div>
                        )
                        }
                    </div>



                    <div className="custom customs-btn-numbers clearfix input_number_index">
                        <button
                            onClick={() => pageBack()}
                            disabled={props.page === 1}
                            className="btn-minus btn-cts" type="button">
                            <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#000000", marginTop: "2px" }} />
                        </button>
                        <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                            name="quantity" value={props.page} disabled
                        />
                        <button
                            onClick={() => pageForward()}
                            disabled={props.page === records.totalPages}
                            className="btn-plus btn-cts" type="button">
                            <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#000000", marginTop: "5px" }} />
                        </button>
                    </div>
                    <br />

                </section>
            </div>
        </>
    )
}
export default ListBooks;