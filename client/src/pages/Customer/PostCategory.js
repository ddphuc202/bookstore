import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
const PostCategory = () => {
    return (
        <>
        <Header />
            <section style={{borderTop: "solid 2px green"}} className="page">
            <div style={{height:"60px", backgroundImage:"url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)"}}></div>
                <div className="container">
                    <div className="wrap_background_aside padding-top-15 margin-bottom-40">
                        <div className="row">
                            <div className="content-page rte offset-lg-1 offset-xl-2 col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                                <h1 className="title-block-page" style={{color: "green", marginTop:"10px"}}><b>Tin Sách</b></h1>
                                <p ><span ><span ><span >Chào mừng các bạn đến với Trang Tin Sách Khai Tâm, mời bạn click vào các đường link bên dưới để vào các chuyên mục&nbsp;</span></span></span></p>
                                <p ><span ><a style={{textDecoration:"none", color:"green", fontWeight:"bold"}} href="https://nhanam.vn/tin-nha-nam">Tin Nhã Nam</a>&nbsp;</span></p>
                                <p ><span ><span ><span >Các thông tin về bản quyền, sự kiện ra mắt sách, chương trình khuyến mại, hội sách, tác giả, tác phẩm của Nhã Nam…</span></span></span></p>
                                <p ><span ><a style={{textDecoration:"none", color:"green", fontWeight:"bold"}} href="https://nhanam.vn/review-sach-cua-doc-gia">Review Sách Của Đọc giả </a>&nbsp;</span></p>
                                <p ><span ><span ><span >Các bài điểm sách, bình sách, giới thiệu sách Nhã Nam của độc giả mà chúng tôi xin phép đăng lại trên website này.</span></span></span></p>
                                <p ><span ><a style={{textDecoration:"none", color:"green", fontWeight:"bold"}} href="https://nhanam.vn/review-sach-tren-bao-chi">Review Sách Trên Báo Chí </a>&nbsp;</span></p>
                                <p ><span ><span ><span >Các bài giới thiệu sách Nhã Nam trên các báo, đài</span></span></span></p>
                                <p ><span ><a style={{textDecoration:"none", color:"green", fontWeight:"bold"}} href="https://nhanam.vn/bien-tap-vien-gioi-thieu">Biên Tập Viên Giới Thiệu </a>&nbsp;</span></p>
                                <p ><span ><span ><span >Các danh sách đề cử, giới thiệu sách… của BTV Nhã Nam.</span></span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default PostCategory;