import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableCustomers from '../../components/Admin/TableCustomers';
import ModalAddNewCustomers from '../../components/Admin/ModalAddNewCustomers';
import Header from '../../components/Admin/Header';
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageCustomers = (props) => {
    return (
        <>
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content' style={{ width: "100%" }}>
                    <div className='button-add'>
                        <h1><b>Quản lý khách hàng</b></h1>
                        <Link to={'/manage-add-customers'} className='btn btn-primary'>Thêm mới khách hàng</Link>
                    </div>
                    <br></br>
                    <TableCustomers />
                </div>
            </div>
        </>
    )
}
export default ManageCustomers;