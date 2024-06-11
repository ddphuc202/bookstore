import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <Sidebar style={{ marginTop: "20px", border: "1px, solid, green" }}>
            <Menu iconShape="square">
                <MenuItem><b>Admin Site</b></MenuItem>
                <MenuItem><Link to={'/manage-books'} style={{ textDecoration: "none", color: "green" }}> <b>Books</b></Link></MenuItem>
                <MenuItem><Link to={'/manage-articles'} style={{ textDecoration: "none", color: "green" }}> <b>Articles</b></Link></MenuItem>
                <MenuItem><Link to={'/manage-genres'} style={{ textDecoration: "none", color: "green" }}> <b>Genres</b></Link></MenuItem>
                <MenuItem><Link to={'/manage-customers'} style={{ textDecoration: "none", color: "green" }}> <b>Customers</b></Link></MenuItem>
            </Menu>
        </Sidebar>
    )
}
export default SideBar;
