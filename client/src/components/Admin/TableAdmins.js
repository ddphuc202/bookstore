import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { baseURL } from '../../utils/AxiosCustomize';
import { Link } from 'react-router-dom';
import { getAdmins, deleteAdmins } from '../../services/AdminsServices';
const TableAdmins = (props) => {

    const [records, setRecords] = useState([]);
    const [count, setCount] = useState(1);

    const handleDelete = (id) => {
        deleteAdmins(id, count, setCount);
    }

    useEffect(() => {
        getAdmins(setRecords);
    }, [count])

    console.log(records)
    return (
        <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(records.admins) && records.admins.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/manage/edit-admins/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                                    <button style={{ border: 'none' }} onClick={event => handleDelete(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </div>
    )
}
export default TableAdmins;