import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Footer from "../../components/Customer/Footer"
import Header from "../../components/Customer/Header"
import '../../styles/InfoBooks.css';
import { getBookById } from '../../services/BooksServices';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { baseURL } from '../../utils/AxiosCustomize';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Container } from "react-bootstrap";
import { addBookToCart } from '../../services/CartServices';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InfoBooks = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const [thumbnail, setThumbnail] = useState(null);
    const [otherImages, setOtherImages] = useState([]);

    const handleSubmit = (id) => {
        addBookToCart(id, quantity);
    }

    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePlusClick = () => {
        if (quantity < data.quantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleQuantityChange = (event) => {
        let value = parseInt(event.target.value);

        if (isNaN(value) || value < 1) {
            value = 1;
        } else if (value > data.quantity) {
            value = data.quantity;
        }
        setQuantity(value);
    };

    useEffect(() => {
        getBookById(id, setData)
    }, [])


    useEffect(() => {
        if (data) {
            setThumbnail(data.thumbnail_path)
            if (data.bookImages) {
                const OtherImages = Array.from(data.bookImages);
                setOtherImages(OtherImages);
            }
        }
    }, [data])

    return (
        <>
            <ToastContainer />
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <br />
            <br />
            <Container>
                <div className="row-book ">
                    <div className="product-detail-left product-images col-12 col-md-12 col-lg-5">
                        <div className="product-image-detail">
                            <br />
                            <br />
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide >
                                    <img style={{ marginLeft: '50px', marginTop: "50px", alignItems: 'center' }} width={'315px'} src={baseURL + data.thumbnailPath} alt="Ảnh" />
                                </SwiperSlide>
                                {otherImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img style={{ marginLeft: '50px', marginTop: "50px", alignItems: 'center' }} width={'315px'} key={index} src={baseURL + image.imagePath} alt="Ảnh" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                    <div className="col-12 col-md-12 col-lg-5 details-pro">


                        <h1 className="title-head">{data.title}</h1>

                        <div className="author">
                            Tác giả: <span  >{data.author}</span>
                        </div>

                        <div className="author" style={{ marginTop: '10px' }}>
                            Nhà xuất bản: <span  >{data.publisher}</span>
                        </div>

                        <div className="group-action-button">
                            <div className="group-power">

                                <div className="inventory_quantity d-none">

                                </div>
                                <div className="price-box clearfix">

                                    <span className="special-price">
                                        <span className="price product-price">{Number(data.price - data.price * data.discount / 100).toLocaleString('vi-VN')}đ</span>
                                    </span>
                                    <span className="old-price">
                                        {data.discount > 0 &&
                                            <del className="price product-price-old">
                                                {Number(data.price).toLocaleString('vi-VN')}đ
                                            </del>}


                                        {data.discount > 0 &&
                                            <span className="discount">-
                                                {data.discount} %
                                            </span>}

                                    </span>
                                    <span className="save-price d-none">
                                        <span className="price product-price-save"></span> so với thị trường

                                    </span>

                                </div>

                            </div>


                            <div className="form-product">

                                <div className="box-variant clearfix  d-none ">

                                    <input type="hidden" id="one_variant" name="variantId" value="117868438" />

                                </div>
                                <div className="clearfix from-action-addcart ">
                                    <div className="qty-ant clearfix custom-btn-number ">
                                        <div className="custom custom-btn-numbers clearfix input_number_product">
                                            <button
                                                onClick={handleMinusClick}
                                                className="btn-minus btn-cts" type="button">
                                                <FontAwesomeIcon icon={faMinus} style={{ color: "#000000", marginTop: "5px" }} />
                                            </button>
                                            <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                                                name="quantity" value={quantity} onChange={event => handleQuantityChange(event)} />
                                            <button
                                                onClick={handlePlusClick}
                                                className="btn-plus btn-cts" type="button">
                                                <FontAwesomeIcon icon={faPlus} style={{ color: "#000000", marginTop: "5px" }} />
                                            </button>
                                        </div>

                                        <span className="counter-qty">Còn lại {data.quantity} trong kho</span>

                                    </div>
                                    <div className="btn-mua">
                                        <button onClick={() => handleSubmit(data.id)} type="button" className="btn btn-lg btn-gray btn_buy btn-buy-now">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <br></br>
                <div class="col-lg-8 col-12">
                    <h4 class="title-tab" style={{ color: "green" }}>
                        <b>Giới thiệu sách</b>
                    </h4>
                    <div class="content_extab tab-data">
                        <div class="rte product_getcontent">

                            <div class="ba-text-fpt">
                                <p>
                                    {data.description}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <br />
                <br />
            </Container>
            <Footer />
        </>
    )
}
export default InfoBooks