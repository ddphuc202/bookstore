import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
import image from '../../image/thanh-xuan-sao-ma-dau-don.png'
import '../../styles/Books.css';
import { useState, useEffect } from "react";
import axios from "axios";
const Books = () => {

    const [columns, setColmns] = useState([]);
	const [records, setRecords] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3030/books').then(res => {
			setColmns(Object.keys(res.data[0]))
			setRecords(res.data)
		})
	}, [])


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
                    <div className="row">
                        <aside className="filter-sidebar sidebar left-content col-lg-3 col-md-4 col-sm-4">
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
                                                                    <label for="filter-viet-nam">
                                                                        <input type="checkbox" id="filter-viet-nam"
                                                                            data-group="Quốc gia" data-field="tags"
                                                                            data-text="Việt Nam" data-operator="OR" />
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
                                    <span className="lazyload sort-icon"
                                        data-src="//bizweb.dktcdn.net/100/363/455/themes/918830/assets/sort.png?1704690471681">Sắp
                                        xếp theo <span>Mặc định</span></span>
                                    <ul>
                                        <li className="btn-quick-sort default active">
                                            <a href="javascript:;" onClick="sortby('default')"
                                                title="Mặc định"><i></i>Mặc định</a>
                                        </li>
                                        <li className="btn-quick-sort created-desc">
                                            <a href="javascript:;" onClick="sortby('created-desc')"
                                                title="Sách mới"><i></i>Sách mới</a>
                                        </li>
                                        <li className="btn-quick-sort price-desc">
                                            <a href="javascript:;" onClick="sortby('price-asc')"
                                                title="Giá thấp - cao"><i></i>Giá thấp - cao</a>
                                        </li>
                                        <li className="btn-quick-sort price-asc">
                                            <a href="javascript:;" onClick="sortby('price-desc')"
                                                title="Giá cao - thấp"><i></i>Giá cao - thấp</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="category-products products">


                                <section className="products-view products-view-grid collection_reponsive">
                                    <div className="row">
                                        {records.map((book, index ) =>(
                                        <div key={index} className="col-6 col-md-3 col-lg-3 product-col">
                                            <div className="item_product_main">

                                                <form action="/cart/add" method="post"
                                                    className="variants product-action wishItem" data-cart-form=""
                                                    data-id="product-actions-36086469" encType="multipart/form-data">
                                                    <div className="thumb">
                                                        <a className="image_thumb" href="/hon-don-va-khu-vuon-nha-nam"
                                                            title="HỖN ĐỘN VÀ KHU VƯỜN">
                                                            <img width="199" height="199"
                                                                src={image}
                                                                data-src="https://bizweb.dktcdn.net/100/363/455/products/hondonvakhuvuon01e171766606841.jpg?v=1717666223843"
                                                                alt="HỖN ĐỘN VÀ KHU VƯỜN"
                                                                className="lazyload img-responsive center-block" />
                                                        </a>
                                                        
                                                    </div>
                                                    <div className="info-product">
                                                        <h3 className="product-name"><a href="/hon-don-va-khu-vuon-nha-nam"
                                                            title="HỖN ĐỘN VÀ KHU VƯỜN"><b>{book.title}</b></a></h3>

                                                        <div className="price-box">
                                                            <span className="price">{book.price}$</span>
                                                            <span className="compare-price">168.000$</span>

                                                        </div>

                                                        <button className='btn-buy btn-left btn-views  btn-buy-now-grid' >
														Thêm vào giỏ
													</button>

                                                    </div>
                                                    
                                                </form>

                                            </div>
                                        </div>
                                        ))
                                        }
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Books;