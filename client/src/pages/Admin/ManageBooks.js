import '../../styles/Manage.css'
import TableBooks from '../../components/Admin/TableBooks';
import ModalAddNewBooks from '../../components/Admin/ModalAddNewBooks';
import Header from '../../components/Admin/Header';
import { Container } from 'react-bootstrap';
const ManageBooks = (props) => {
    return (
        <>
            <Container>
                <Header />
            <div className='button-add'>
                <h1><b>Manage Books</b></h1>
                <ModalAddNewBooks />
                </div>
                <TableBooks />
            </Container>
        </>
    )
}
export default ManageBooks;