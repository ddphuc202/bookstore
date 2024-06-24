import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableOrders from '../../components/Admin/TableOrders';
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrders = (props) => {
    return (
        <>
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content' style={{ width: "100%" }}>
                    <div className='button-add'>
                        <h1><b>Quản lý đơn hàng</b></h1>
                    </div>
                    <br></br>
                    <TableOrders />
                </div>
            </div>
        </>
    )
}
export default ManageOrders;