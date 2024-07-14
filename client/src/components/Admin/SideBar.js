import { Link } from 'react-router-dom';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/SideBar.css';


const SideBar = () => {
    return (
        <>


            <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">


                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Tiệm Sách Khai Tâm </div>
                </a>


                <hr className="sidebar-divider my-0" />


                <li className="nav-item">
                    <a className="nav-link" href="">
                        <span>Dashboard</span></a>
                </li>


                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Quản Lý
                </div>

                {localStorage.getItem('userRole') === 'super' ? (
                    <li className="nav-item">
                        <Link className="nav-link" to={'/manage/admins'} style={{ textDecoration: "none" }}> <b>Quản Trị Viên</b></Link>
                    </li>
                ) : null}

                <li className="nav-item">
                    <Link className="nav-link" to={'/manage/books'} style={{ textDecoration: "none" }}> <b>Sách</b></Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to={'/manage/posts'} style={{ textDecoration: "none" }}> <b>Bài Viết</b></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={'/manage/categories'} style={{ textDecoration: "none" }}> <b>Thể Loại</b></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={'/manage/customers'} style={{ textDecoration: "none" }}> <b>Khách Hàng</b></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={'/manage'} style={{ textDecoration: "none" }}> <b>Đơn Hàng</b></Link>
                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">
                    Addons
                </div>


                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </li>


                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>


                <li className="nav-item active">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li> */}


                <hr className="sidebar-divider d-none d-md-block" />


                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" >
                        <Link to={'/logout'}>
                            <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" style={{ color: "#8a9dbc", marginTop: "3px" }} />
                        </Link>
                    </button>
                </div>

            </ul>
        </>

    )
}
export default SideBar;
