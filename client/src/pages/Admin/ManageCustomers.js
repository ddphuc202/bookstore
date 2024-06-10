import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableCustomers from '../../components/Admin/TableCustomers';
import ModalAddNewCustomers from '../../components/Admin/ModalAddNewCustomers';
import Header from '../../components/Admin/Header';
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';

const ManageCustomers = (props) => {
    return (
        <>
            {/* <SideBar /> */}
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content'>
                    <div className='button-add'>
                        <h1><b>Manage Customers</b></h1>
                        <ModalAddNewCustomers />
                    </div>
                    <br></br>
                    <TableCustomers />
                </div>
            </div>
            {/* <Container> */}


            {/* </Container> */}
        </>
    )
}
export default ManageCustomers;