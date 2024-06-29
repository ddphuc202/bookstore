import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import image1 from '../../image/thanh-xuan-sao-ma-dau-don.png';
import { getBooks } from '../../services/BooksServices';
import { Link } from 'react-router-dom';
import { addBookToCart } from '../../services/CartServices';
const NewBooks = () => {

	const [records, setRecords] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState([]);
	const [sortBy, setSortBy] = useState([]);
	const [order, setOrder] = useState([]);
	const [categoryId, setCategoryId] = useState();

	const handleSubmit = (id) => {
		addBookToCart(id);
	}

	useEffect(() => {
		getBooks(page, search, sortBy, order, categoryId, setRecords)
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
							<Carousel responsive={responsive}>
								{Array.isArray(records.books) && records.books.map((book, index) => (
									<div className="swiper-slide" key={index}>
										<div className="item_product_main">
											<div className="thumb">
												<Link className="image_thumb" to={`/info-book/${book.id}`}
													title="THANH XUÂN, SAO MÀ ĐAU ĐỚN!">
													<img width="199" height="199"
														src={image1}
														alt="THANH XUÂN, SAO MÀ ĐAU ĐỚN!"
														className="lazyload img-responsive center-block" />
												</Link>

											</div>
											<div className="info-product">
												<div className='title-box'>
													<h3 className="product-name"><Link to={`/info-book/${book.id}`}
														title="THANH XUÂN, SAO MÀ ĐAU ĐỚN!"><b>{book.title}</b></Link>
													</h3>
												</div>
												<div className="price-box">
													<span className="price"><b>{(book.price - book.price * book.discount / 100).toLocaleString('vi-VN')}đ</b></span>
													<span className="compare-price"><b>{book.price.toLocaleString('vi-VN')}đ</b></span>

												</div>

												<button onClick={() => handleSubmit(book.id)} className='btn-buy btn-left btn-views  btn-buy-now-grid' >
													Thêm vào giỏ
												</button>
											</div>
										</div>
									</div>
								))
								}
							</Carousel>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default NewBooks;