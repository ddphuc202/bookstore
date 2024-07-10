import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableArticles from '../../components/Admin/TableArticles';
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
                        <h1><b>Quản lý bài viết</b></h1>
                        <Link to={'/manage/add-admins'} className='btn btn-primary'>Thêm mới bài viết</Link>
                    </div>
                    <br></br>
                    <TableArticles />
                </div>
            </div>
        </>
    )
}
export default ManageAdmins;