import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
import { Link } from "react-router-dom";
import '../../styles/Articles.css';
import { useState, useEffect } from "react";
import { baseURL } from "../../utils/AxiosCustomize";
import { getPost, getPostBanner } from "../../services/ArticlesServices";
const Posts = () => {
    const [records, setRecords] = useState([]);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const pageForward = () => {
        setPage(page + 1);
    }

    const pageBack = () => {
        setPage(page - 1);
    }

    useEffect(() => {
        getPostBanner(2, setData)
    }, [])

    useEffect(() => {
        getPost(page, setRecords)
    }, [page])

    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <section className="blogpage clearfix">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-9 col-md-12 col-12 ">
                            <br />
                            <h1 className="title-module">Tin Khai Tâm</h1>
                            <div className="row">
                                {Array.isArray(records.posts) && records.posts.map((item, index) => (
                                    <div key={index} className="col-md-4 col-12 col-lg-4 col-xl-4">
                                        <div className="d-none">
                                        </div>
                                        <article className="item_blog_base">
                                            <Link className="thumb radius-5"
                                                to={`/info-post/${item.id}`}
                                                title={item.title}>
                                                <img width="260" height="185" src={baseURL + item.imagePath}
                                                    alt="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?"
                                                    className="lazyload img-responsive" />
                                            </Link>
                                            <div className="content_blogs">
                                                <div className="titles">
                                                    <h3><Link to={`/info-post/${item.id}`}
                                                        className="a-title">{item.title}</Link></h3>
                                                    <span className="dates">
                                                        {new Date(item.createdAt).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                                    </span>
                                                </div>

                                            </div>
                                        </article>
                                    </div>
                                ))
                                }
                            </div>
                            <div className="customs custom-btns-numbers clearfix input_number_index">
                                <button
                                    onClick={() => pageBack()}
                                    disabled={page === 1}
                                    className="btn-minus btn-cts" type="button">
                                    <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#000000", marginTop: "2px" }} />
                                </button>
                                <input aria-label="Số lượng" type="text" className="qty input-text" id="qty"
                                    name="quantity"
                                    value={page}
                                    disabled
                                />
                                <button
                                    onClick={() => pageForward()}
                                    disabled={page === records.totalPages}
                                    className="btn-plus btn-cts" type="button">
                                    <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#000000", marginTop: "5px" }} />
                                </button>
                            </div>
                        </div>



                        <div className=" col-lg-3 col-md-12 col-12 ">
                            <aside className="aside-item sidebar-menu">
                                <br />
                                <h2 className="title-modules">Danh mục tin</h2>
                                <div className="blog-list">
                                    {Array.isArray(data.posts) && data.posts.map((item, index) => (
                                        <div className="item">
                                            <article className="item_blog_base first">
                                                <Link className="thumb "
                                                    to={`/info-post/${item.id}`}>
                                                    <img width="196" height="125"
                                                        src={baseURL + item.imagePath}
                                                        alt={item.title}
                                                        className="lazyload img-responsive" />
                                                </Link>
                                                <div className="content_blogs">
                                                    <h3><Link to={`/info-post/${item.id}`}
                                                        className="a-title">{item.title}</Link>
                                                    </h3>
                                                    <span>
                                                        {new Date(item.createdAt).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Posts;