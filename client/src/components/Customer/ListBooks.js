import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../image/thanh-xuan-sao-ma-dau-don.png'
import { getBooks } from '../../services/BooksServices';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addBookToCart } from '../../services/CartServices';
const ListBooks = (props) => {

    const [records, setRecords] = useState([]);
    const [page, setPage] = useState(1);

    const handleSubmit = (id) => {
        addBookToCart(id);
    }

    const pageForward = () => {
        props.setPage(props.page + 1);
    }

    const pageBack = () => {
        props.setPage(props.page - 1);
    }

    useEffect(() => {
        getBooks(props.page, props.searchBook, props.sortByBook, props.orderBook, setRecords);
    }, [props])


    return (
        <>
            <div className="category-products products">
                <section className="products-view products-view-grid collection_reponsive">
                    <div className="row">
                        {Array.isArray(records) && records.map((book, index) => (
                            <div key={index} className="col-6 col-md-3 col-lg-3 product-col">
                                <div className="item_product_main">
                                    <div className="thumb">
                                        <Link to={`/info-book/${book.id}`} className="image_thumb"
                                            title="HỖN ĐỘN VÀ KHU VƯỜN">
                                            <img width="199" height="199"
                                                src={image}
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
                                            <span className="price">{(book.price - book.price * book.discount / 100).toLocaleString('vi-VN')}đ</span>
                                            <span className="compare-price">{book.price.toLocaleString('vi-VN')}đ</span>

                                        </div>

                                        <button onClick={() => handleSubmit(book.id)} className='btn-buy btn-left btn-views  btn-buy-now-grid' >
                                            Thêm vào giỏ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }

                        <div className="custom custom-btn-numbers clearfix input_number_index">
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
                                className="btn-plus btn-cts" type="button">
                                <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#000000", marginTop: "5px" }} />
                            </button>
                        </div>
                    </div>
                    <br />

                </section>
            </div>
        </>
    )
}
export default ListBooks;