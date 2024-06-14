import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/SideBar.css';


const SideBar = () => {
    return (
        <>

            {/* <Sidebar style={{ marginTop: "20px", border: "1px, solid, green" }}>
                <Menu iconShape="square">
                    <MenuItem><b>Admin Site</b></MenuItem>
                    <MenuItem><Link to={'/manage-books'} style={{ textDecoration: "none", color: "green" }}> <b>Books</b></Link></MenuItem>
                    <MenuItem><Link to={'/manage-articles'} style={{ textDecoration: "none", color: "green" }}> <b>Articles</b></Link></MenuItem>
                    <MenuItem><Link to={'/manage-genres'} style={{ textDecoration: "none", color: "green" }}> <b>Genres</b></Link></MenuItem>
                    <MenuItem><Link to={'/manage-customers'} style={{ textDecoration: "none", color: "green" }}> <b>Customers</b></Link></MenuItem>
                </Menu>
            </Sidebar> */}

            <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">


                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Khai Tâm BookStore </div>
                </a>


                <hr class="sidebar-divider my-0" />


                <li class="nav-item">
                    <a class="nav-link" href="">
                        <span>Dashboard</span></a>
                </li>


                <hr class="sidebar-divider" />

                <div class="sidebar-heading">
                    Manage
                </div>



                <li class="nav-item">
                    <Link class="nav-link" to={'/manage-books'} style={{ textDecoration: "none" }}> <b>Books</b></Link>
                </li>


                <li class="nav-item">
                    <Link class="nav-link" to={'/manage-articles'} style={{ textDecoration: "none" }}> <b>Articles</b></Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to={'/manage-genres'} style={{ textDecoration: "none" }}> <b>Genres</b></Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to={'/manage-customers'} style={{ textDecoration: "none" }}> <b>Customer</b></Link>
                </li>


                <hr class="sidebar-divider" />


                <div class="sidebar-heading">
                    Addons
                </div>


                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Login Screens:</h6>
                            <a class="collapse-item" href="login.html">Login</a>
                            <a class="collapse-item" href="register.html">Register</a>
                            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Other Pages:</h6>
                            <a class="collapse-item" href="404.html">404 Page</a>
                            <a class="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="charts.html">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>


                <li class="nav-item active">
                    <a class="nav-link" href="tables.html">
                        <i class="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>


                <hr class="sidebar-divider d-none d-md-block" />


                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
        </>

    )
}
export default SideBar;
