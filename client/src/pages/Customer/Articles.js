import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
import image from '../../image/khai-tam-about.png'
import '../../styles/Articles.css';
import { useState, useEffect } from "react";
import axios from "axios";
const Articles = () => {

    const [columns, setColmns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/articles').then(res => {
            setColmns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    }, [])


    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <section className="blogpage clearfix">
                <div className="container" itemscope="" itemtype="https://schema.org/Blog">
                        <div className="row">
                            <div className=" col-lg-9 col-md-12 col-12 ">
                                <h1 className="title-module">Tin Khai Tâm</h1>

                                <div className="row">
                                    {records.map((article, index) =>(
                                        <div key={index} className="col-md-4 col-12 col-lg-4 col-xl-4">
                                            <div className="d-none">
                                            </div>
                                            <article className="item_blog_base">
                                                <a className="thumb radius-5"
                                                    href="/su-kien-ra-mat-cuon-sach-chip-war-cuoc-chien-vi-mach-ve-lai-ban-do-ban-dan-toan-cau-viet-nam-o-dau"
                                                    title="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?">
                                                    <img src={image}
                                                        alt="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?"
                                                        className="lazyload img-responsive" />
                                                </a>
                                                <div className="content_blog">
                                                    <h3><a href="/su-kien-ra-mat-cuon-sach-chip-war-cuoc-chien-vi-mach-ve-lai-ban-do-ban-dan-toan-cau-viet-nam-o-dau"
                                                        title="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?"
                                                        className="a-title">{article.title}</a></h3>
                                                    
                                                </div>
                                            </article>
                                        </div>
                                    ))              
                                    }
                                </div>
                            </div>



                            <div className=" col-lg-3 col-md-12 col-12 ">
                                <aside className="aside-item sidebar-menu">
                                    <h2 className="title-module">Danh mục tin</h2>
                                    <div className="blog-list">

                                        <div className="item">
                                            <div className="d-none">

                                            </div>
                                            <article className="item_blog_base first">
                                                <a className="thumb "
                                                    href="/su-kien-ra-mat-cuon-sach-chip-war-cuoc-chien-vi-mach-ve-lai-ban-do-ban-dan-toan-cau-viet-nam-o-dau"
                                                    title="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?">
                                                    <img width="196" height="125"
                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                        data-src="https://bizweb.dktcdn.net/100/363/455/articles/pha-n-2-ca-y-cam-ngo-t-cu-a-to-i.png?v=1716798043730"
                                                        alt="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?"
                                                        className="lazyload img-responsive" />
                                                </a>
                                                <div className="content_blog">
                                                    <h3><a href="/su-kien-ra-mat-cuon-sach-chip-war-cuoc-chien-vi-mach-ve-lai-ban-do-ban-dan-toan-cau-viet-nam-o-dau"
                                                        title="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?"
                                                        className="a-title">Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi
                                                        mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?</a>
                                                    </h3>
                                                    <span>
                                                        Thứ Hai,
                                                        27/05/2024</span>
                                                </div>
                                            </article>
                                        </div>
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
export default Articles;