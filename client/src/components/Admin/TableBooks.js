import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import App from '../App';
import ModalEditUser from './ModalEditUser';
import { useState } from 'react';
const TableBooks = (props) =>{

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const handleClose = () =>{
        setIsShowModalEdit(false);
    }
    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>2</td>
          <td><Button onClick={() => setIsShowModalEdit(true)} variant="warning">Edit</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>1</td>
          <td><Button variant="warning">Edit</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jayce</td>
          <td>@twitter</td>
          <td>Larry the Bird</td>
          <td>2</td>
          <td><Button variant="warning">Edit</Button></td>
        </tr>
      </tbody>
        <ModalEditUser
            show={isShowModalEdit}
            handleClose={handleClose} />
    </Table>
    )
}
export default TableBooks;