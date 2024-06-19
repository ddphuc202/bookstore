import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Footer from "../../components/Customer/Footer"
import Header from "../../components/Customer/Header"
import '../../styles/InfoBooks.css';
import { getBookById } from '../../services/BooksServices';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { baseURL } from '../../utils/AxiosCustomize';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Container } from "react-bootstrap";


const InfoBooks = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    const [thumbnail, setThumbnail] = useState(null);
    const [otherImages, setOtherImages] = useState([]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
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
                <div className="row ">
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
                            <span  >{data.description}</span>
                        </div>

                        <div className="group-action-button">
                            <div className="group-power">

                                <div className="inventory_quantity d-none">

                                </div>
                                <div className="price-box clearfix">

                                    <span className="special-price">
                                        <span className="price product-price">{data.price - data.price * data.discount / 100}</span>
                                    </span>
                                    <span className="old-price">
                                        <del className="price product-price-old">
                                            {data.price}
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

                            <form encType="multipart/form-data" id="add-to-cart-form" data-cart-form=""
                                action="/cart/add" method="post" className="wishItem">
                                <div className="form-product">

                                    <div className="box-variant clearfix  d-none ">

                                        <input type="hidden" id="one_variant" name="variantId" value="117868438" />

                                    </div>
                                    <div className="clearfix from-action-addcart ">
                                        <div className="qty-ant clearfix custom-btn-number ">
                                            <div className="custom custom-btn-numbers clearfix input_number_product">
                                                <button
                                                    onClick=""
                                                    className="btn-minus btn-cts" type="button">
                                                    <FontAwesomeIcon icon={faMinus} style={{ color: "#000000", marginTop: "5px" }} />
                                                </button>
                                                <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                                                    name="quantity" value={'1'}
                                                    onChange="" />
                                                <button
                                                    onClick=""
                                                    className="btn-plus btn-cts" type="button">
                                                    <FontAwesomeIcon icon={faPlus} style={{ color: "#000000", marginTop: "5px" }} />
                                                </button>
                                            </div>

                                            <span className="counter-qty">Còn lại {data.stock} trong kho</span>

                                        </div>
                                        <div className="btn-mua">
                                            <button type="button" className="btn btn-lg btn-gray btn_buy btn-buy-now">Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>

                                </div>
                            </form>

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