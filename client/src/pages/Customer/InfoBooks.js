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


    useEffect(() => {
        getBookById(id, setData)
        setThumbnail(data.thumbnail_path)
        if (data && data.images) {
            const OtherImages = Array.from(data.images);
            setOtherImages(OtherImages);
        }
    }, [data])

    return (
        <>
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
                                    <img style={{ marginLeft: '0px', alignItems: 'center' }} width={'515px'} height={'390px'} src={baseURL + thumbnail} alt="Ảnh" />
                                </SwiperSlide>
                                {otherImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img style={{ marginLeft: '0px', alignItems: 'center' }} width={'515px'} height={'390px'} key={index} src={baseURL + image.image_path} alt="Ảnh" />
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
                            {data.description}
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
                                        <del className="price product-price-old">
                                            {Number(data.price).toLocaleString('vi-VN')}đ
                                        </del>
                                        <span className="discount">-
                                            {data.discount} %
                                        </span>
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
                                                name="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
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
                <br />
                <br />
            </Container>
            <Footer />
        </>
    )
}
export default InfoBooks