import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
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
                    <div className="sidebar-brand-text mx-3">Khai Tâm BookStore </div>
                </a>


                <hr className="sidebar-divider my-0" />


                <li className="nav-item">
                    <a className="nav-link" href="">
                        <span>Dashboard</span></a>
                </li>


                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Manage
                </div>



                <li className="nav-item">
                    <Link className="nav-link" to={'/manage-books'} style={{ textDecoration: "none" }}> <b>Books</b></Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to={'/manage-posts'} style={{ textDecoration: "none" }}> <b>Posts</b></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={'/manage-categories'} style={{ textDecoration: "none" }}> <b>Categories</b></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={'/manage-customers'} style={{ textDecoration: "none" }}> <b>Customer</b></Link>
                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">
                    Addons
                </div>


                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" href="login.html">Login</a>
                            <a className="collapse-item" href="register.html">Register</a>
                            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" href="404.html">404 Page</a>
                            <a className="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
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
                </li>


                <hr className="sidebar-divider d-none d-md-block" />


                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
        </>

    )
}
export default SideBar;
