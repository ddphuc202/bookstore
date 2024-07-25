import '../../styles/Manage.css'
import '../../styles/Admin.css'
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TableOrderDetail from '../../components/Admin/TableOrderDetail';

const ManageOrderDetail = (props) => {
    return (
        <>
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content' style={{ width: "100%" }}>
                    <div className='button-add'>
                        <h1><b>Chi tiết đơn hàng</b></h1>
                    </div>
                    <br></br>
                    <TableOrderDetail />
                </div>
            </div>
        </>
    )
}
export default ManageOrderDetail;