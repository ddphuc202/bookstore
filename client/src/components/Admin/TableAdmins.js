import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faAnglesLeft, faAnglesRight, faRotateRight, faKey } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { baseURL } from '../../utils/AxiosCustomize';
import { Link } from 'react-router-dom';
import { getAdmins, deleteAdmins, restoreAdmins } from '../../services/AdminsServices';
const TableAdmins = (props) => {

    const [records, setRecords] = useState([]);
    const [refresh, setRefresh] = useState(1);

    const handleDelete = (id) => {
        deleteAdmins(id, refresh, setRefresh);
    }

    const handleRestore = (id) => {
        restoreAdmins(id, refresh, setRefresh);
    }

    useEffect(() => {
        getAdmins(setRecords);
    }, [refresh])

    return (
        <div style={{ border: "solid 1px #CFCFCF", padding: "30px", borderRadius: "15px", backgroundColor: "#E0EEEE" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(records.admins) && records.admins.map((d, i) => (
                            <tr key={i} >
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.deletedAt ? 'Ngừng hoạt động' : 'Hoạt động'}</td>
                                <td>
                                    {d.deletedAt ? (
                                        <button style={{ border: 'none' }} onClick={event => handleRestore(d.id)} ><FontAwesomeIcon icon={faRotateRight} style={{ color: "#fa2500" }} /></button>
                                    ) : (
                                        <>
                                            <Link to={`/manage/edit-admins/${d.id}`} ><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                                            <button style={{ border: 'none' }} onClick={event => handleDelete(d.id)} ><FontAwesomeIcon icon={faTrash} style={{ color: "#fa2500" }} /></button>
                                            <Link to={`/manage/edit-password/${d.id}`} ><FontAwesomeIcon icon={faKey} size="lg" /></Link>
                                        </>
                                    )}
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