import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableGenres from '../../components/Admin/TableGenres';
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageGenres = (props) => {
    return (
        <>
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content' style={{ width: "100%" }}>
                    <div className='button-add'>
                        <h1><b>Quản lý thể loại sách</b></h1>
                        <Link to={'/manage-add-categories'} className='btn btn-primary'>Thêm mới thể loại</Link>
                    </div>
                    <br></br>
                    <TableGenres />
                </div>
            </div>
        </>
    )
}
export default ManageGenres;