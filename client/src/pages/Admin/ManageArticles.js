import '../../styles/Manage.css'
import '../../styles/Admin.css'
import TableArticles from '../../components/Admin/TableArticles';
import ModalAddNewArticles from '../../components/Admin/ModalAddNewArticles';
import Header from '../../components/Admin/Header';
import SideBar from '../../components/Admin/SideBar';
import { Container } from 'react-bootstrap';

const ManageArticles = (props) => {
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
                        <ModalAddNewArticles />
                    </div>
                    <br></br>
                    <TableArticles />
                </div>
            </div>
            {/* <Container> */}


            {/* </Container> */}
        </>
    )
}
export default ManageArticles;