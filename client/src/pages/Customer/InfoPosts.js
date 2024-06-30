import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
import { useParams } from "react-router-dom";
import { getPostById } from "../../services/ArticlesServices";
import { useState, useEffect } from "react";
import { baseURL } from "../../utils/AxiosCustomize";
const InfoPost = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getPostById(id, setData);
    }, [])

    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <br />
            <br />
            <section className="blogpages clearfix">
                <div className="container article-wraper">
                    <article className="article-main offset-lg-1 offset-xl-2 col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                        <div className="article-details clearfix">
                            <h1 style={{ fontSize: "30px", color: "black" }}>{data.title}</h1>
                            <div className="time-post">
                                <span>
                                    {new Date(data.createdAt).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>

                            </div>
                            <br />
                            <div className="article-content clearfix">
                                <div >
                                    <img width={"700px"} src={baseURL + data.imagePath} />
                                </div>
                                <br />
                                <div style={{ color: "black", fontSize: "18px" }} >
                                    {data.content}
                                </div>
                            </div>
                        </div>
                    </article>
                    <br />
                </div>
            </section>
            <Footer />
        </>
    )
}
export default InfoPost;