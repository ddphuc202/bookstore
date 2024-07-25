import { toast } from 'react-toastify';
import { instance } from '../utils/AxiosCustomize';

const createNewAdmin = (name, email, password, phone, navigate) => {

    let data = {
        name: name,
        email: email,
        password: password,
        phone: phone
    }

    instance.post('/admins', data).then(res => {
        toast.success('Thêm quản trị viên thành công!');
        navigate('/manage/admins');
    }).catch(err => {
        console.log(err)
        toast.error('Thêm quản trị viên thất bại!')
    });
}

const getAdmins = (setRecords) => {
    return instance.get('/admins').then(res => {
        setRecords(res.data)
    }).catch(err => console.log(err))
}


const getAdminById = (id, setData) => {
    return instance.get('/admins/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const updateAdminByID = (id, data, navigate) => {

    instance.put('/admins/' + id, data)
        .then(res => {
            toast.success("Chỉnh sửa quản trị viên thành công!");
            navigate('/manage/admins');
        }).catch(err => {
            console.log(err)
            toast.error('Chỉnh sửa quản trị viên thất bại!')
        })
}

const updatePassword = (id, password, navigate) => {
    let data = {
        password: password
    }
    instance.put('/admins/' + id, data)
        .then(res => {
            toast.success("Chỉnh sửa mật khẩu quản trị viên thành công!");
            navigate('/manage/admins');
        })
        .catch(err => {
            console.log(err)
            toast.error('Chỉnh sửa mật khẩu quản trị viên thất bại!')
        })
}

const deleteAdmins = (id, refresh, setRefresh) => {
    const conf = window.confirm('Bạn có muốn xóa không?');
    if (conf) {
        instance.delete('/admins/' + id)
            .then(res => {
                toast.success('Xóa quản trị viên thành công!');
                refresh++;
                setRefresh(refresh);
            }).catch(err => {
                console.log(err)
                toast.error('Xóa quản trị viên thất bại!')

            })
    }
}

const restoreAdmins = (id, refresh, setRefresh) => {
    const conf = window.confirm('Bạn có muốn khôi phục không?');
    if (conf) {
        instance.patch('/admins/restore/' + id)
            .then(res => {
                toast.success('Khôi phục quản trị viên thành công!');
                refresh++;
                setRefresh(refresh);

            }).catch(err => {
                console.log(err);
                toast.error('Khôi phục quản trị viên thất bại!')
            })
    }
}

const statisticSales = (month, year, setData) => {
    instance.get('/admins/statistic', {
        params: {
            month: month,
            year: year
        }
    }).then(res => {
        setData(res.data)

    }).catch(err => {
        console.log(err)
    })
}
export { createNewAdmin, getAdmins, getAdminById, updateAdminByID, updatePassword, deleteAdmins, restoreAdmins, statisticSales } 