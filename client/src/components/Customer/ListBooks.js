import image from '../../image/thanh-xuan-sao-ma-dau-don.png'
import { getBooks } from '../../services/BooksServices';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addBookToCart } from '../../services/CartServices';
const ListBooks = () => {

    const [records, setRecords] = useState([]);

    const handleSubmit = (id) => {
        addBookToCart(id);
    }

    useEffect(() => {
        getBooks(setRecords);
    }, [])


    // const sortBooksByPrice = () => {
    //     const sortedBooks = [...records].sort((a, b) => a.price - b.price);
    //     setRecords(sortedBooks);
    // }
    return (
        <>
            <div className="category-products products">
                <section className="products-view products-view-grid collection_reponsive">
                    <div className="row">
                        {records.map((book, index) => (
                            <div key={index} className="col-6 col-md-3 col-lg-3 product-col">
                                <div className="item_product_main">
                                    <div className="thumb">
                                        <Link to={`/info-book/${book.id}`} className="image_thumb" href="/hon-don-va-khu-vuon-nha-nam"
                                            title="HỖN ĐỘN VÀ KHU VƯỜN">
                                            <img width="199" height="199"
                                                src={image}
                                                data-src="https://bizweb.dktcdn.net/100/363/455/products/hondonvakhuvuon01e171766606841.jpg?v=1717666223843"
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
                                            <span className="price">{book.price}$</span>
                                            <span className="compare-price">168.000$</span>

                                        </div>

                                        <button onClick={() => handleSubmit(book.id)} className='btn-buy btn-left btn-views  btn-buy-now-grid' >
                                            Thêm vào giỏ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>

                </section>
            </div>
        </>
    )
}
export default ListBooks;