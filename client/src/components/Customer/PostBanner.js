import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../image/khai-tam-about.png'
import '../../styles/PostBanner.css'
import { getPostBanner } from "../../services/ArticlesServices";
import { baseURL } from "../../utils/AxiosCustomize";
import { Link } from "react-router-dom";
const PostBanner = () => {

	const [records, setRecords] = useState([])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	useEffect(() => {
		getPostBanner(4, setRecords)
	}, [])

	return (
		<div>


			<section className="section_blog_first lazyload" >
				<div className="container">
					<div className="row">

						<div className="col-md-12 col-lg-12 col-xl-8 col-12">
							<div className="swiper-container slide-blog-large swiper-button-main">
								<Slider {...settings}>
									{
										Array.isArray(records.posts) && records.posts.map((item, index) => (
											<div key={index} className="swiper-slide">

												<article className="item_blog_base first">
													<Link className="thumb "
														to={`/info-post/${item.id}`}
													>
														<img width="840" height="533"
															src={baseURL + item.imagePath}
															alt={item.title}
															className="lazyload img-responsive" />
													</Link>
													<div className="content_blog">
														<h3><Link to={`/info-post/${item.id}`}
															title={item.title}
															className="a-title">{item.title}</Link>
														</h3>
														<span className="date12">
															{new Date(item.createdAt).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
														</span>
													</div>

												</article>
											</div>
										))
									}
								</Slider>
							</div>
						</div>





						<div className="d-list col-md-12 col-lg-12 col-xl-4 col-12">
							{
								Array.isArray(records.posts) && records.posts.map((item, index) => (
									<div key={index} className="item">
										<article className="item_blog_base first">
											<Link className="thumb " to={`/info-post/${item.id}`}
												title={item.title}>
												<img width="196" height="125"
													src={baseURL + item.imagePath}
													alt="KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX"
													className="lazyload img-responsive" />
											</Link>
											<div className="content_blog">
												<h3><Link to={`/info-post/${item.id}`}
													title={item.title}
													className="a-title">{item.title}</Link>
												</h3>
												<span className="dates">
													{new Date(item.createdAt).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
												</span>
											</div>

										</article>

									</div>
								))
							}
						</div>
					</div>
				</div>
			</section>
		</div>

	)
}
export default PostBanner;