import React from 'react';
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import image1 from '../../image/thanh-xuan-sao-ma-dau-don.png';
const NewBooks = () => {

	const [columns, setColmns] = useState([]);
	const [records, setRecords] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3030/books').then(res => {
			setColmns(Object.keys(res.data[0]))
			setRecords(res.data)
		})
	}, [])

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5
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


	return (
		<>
			<section className="book_new">
				<div className="container">
					<div className="title-border">
						<h2 className="title-module">
							<a href="sach-moi-xuat-ban" title="Sách mới"><b>Sách mới</b></a>
						</h2>
						<a className="link-more" title="xem thêm" href="sach-moi-xuat-ban"><b>Xem thêm</b></a>
					</div>
					<div className="slide-book-new-wrap relative swiper-button-main">
						<div className="swiper-container slide-book-new">
							<div className="swiper-wrapper">
								<Carousel responsive={responsive}>
									{records.map((book, index) => (
									<div className="swiper-slide" key={index}>
										<div className="item_product_main">

											<form action="/cart/add" method="post" className="variants product-action wishItem"
												data-cart-form="" data-id="product-actions-35700297"
												encType="multipart/form-data">
												<div className="thumb">
													<a className="image_thumb" href="/thanh-xuan-sao-ma-dau-don-nha-nam"
														title="THANH XUÂN, SAO MÀ ĐAU ĐỚN!">
														<img width="199" height="199"
															src={image1}
															alt="THANH XUÂN, SAO MÀ ĐAU ĐỚN!"
															className="lazyload img-responsive center-block" />
													</a>
													
												</div>
												<div className="info-product">
													<div className='title-box'>
													<h3 className="product-name"><a href="/thanh-xuan-sao-ma-dau-don-nha-nam"
														title="THANH XUÂN, SAO MÀ ĐAU ĐỚN!"><b>{book.title}</b></a>
													</h3>
													</div>
													<div className="price-box">
														<span className="price"><b>{book.sale_percent}</b></span>
														<span className="compare-price"><b>{book.price}</b></span>

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
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default NewBooks;