import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableAdmins from '../../components/Admin/TableAdmins'
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAdmins = (props) => {
    return (
        <>
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content'>
                    <div className='button-add'>
                        <h1><b>Quản lý quản trị viên</b></h1>
                        <Link to={'/manage/add-admins'} className='btn btn-primary'>Thêm mới quản trị viên</Link>
                    </div>
                    <br></br>
                    <TableAdmins />
                </div>
            </div>
        </>
    )
}
export default ManageAdmins;