import '../../styles/Manage.css'
import TableBooks from '../../components/Admin/TableBooks';
import ModalAddNewBooks from '../../components/Admin/ModalAddNewBooks';
import SideBar from '../../components/Admin/SideBar';
import Header from '../../components/Admin/Header';
import { Container } from 'react-bootstrap';
const ManageBooks = (props) => {
    return (
        <>
             {/* <SideBar /> */}
             <div className='admin-container'>
                <div className='admin_sidebar'>
                    <SideBar />
                </div>
                <div className='admin-content'>
                    <div className='button-add'>
                        <h1><b>Manage Articles</b></h1>
                        <ModalAddNewBooks />
                    </div>
                    <br></br>
                    <TableBooks />
                </div>
            </div>
            {/* <Container> */}


            {/* </Container> */}
        </>
    )
}
export default ManageBooks;