import '../../styles/Manage.css'
import TableBooks from '../../components/Admin/TableBooks';
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ManageBooks = (props) => {
    return (
        <>
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content'>
                    <div className='button-add'>
                        <h1><b>Quản lý sách</b></h1>
                        <Link to={'/manage/add-books'} className='btn btn-primary'>Thêm mới sách</Link>
                    </div>
                    <br></br>
                    <TableBooks />
                </div>
            </div>
        </>
    )
}
export default ManageBooks;