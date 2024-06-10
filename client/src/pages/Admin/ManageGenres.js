import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableGenres from '../../components/Admin/TableGenres';
import ModalAddNewGenres from '../../components/Admin/ModalAddNewGenres';
import Header from '../../components/Admin/Header';
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';

const ManageGenres = (props) => {
    return (
        <>
            {/* <SideBar /> */}
            <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content'>
                    <div className='button-add'>
                        <h1><b>Manage Genres</b></h1>
                        <ModalAddNewGenres />
                    </div>
                    <br></br>
                    <TableGenres />
                </div>
            </div>
            {/* <Container> */}


            {/* </Container> */}
        </>
    )
}
export default ManageGenres;