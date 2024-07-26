import { toast } from 'react-toastify';
import { instance } from '../utils/AxiosCustomize';

const createNewCustomer = (name, email, password, phone, address, navigate) => {

    let data = {
        name: name,
        email: email,
        password: password,
        address: address,
        phone: phone
    }

    instance.post('/customers', data).then(res => {
        toast.success('Tạo người dùng thành công!');
        navigate('/manage/customers');
    }).catch(err => console.log(err));
}

const getCustomers = (page, setRecords) => {
    return instance.get('/customers', {
        params: {
            page: page
        }
    }).then(res => {
        setRecords(res.data)
    }).catch(err => console.log(err))
}


const getCustomerById = (id, setData) => {
    return instance.get('/customers/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const updateCustomerByID = (id, data) => {
    instance.put('/customers/' + id, data)
        .then(res => {
            toast.success("Cập nhật thông tin thành công!");
        }).catch(err => {
            console.log(err)
            toast.error("Cập nhật thông tin thất bại!")
        })
}

const changePassword = (id, password, navigate) => {

    let data = {
        password: password
    }
    instance.put("/customers/" + id, data)
        .then(res => {
            toast.success("Cập nhật mật khẩu thành công!")
            navigate("/info-customer")
        })
        .catch(err => {
            console.log(err)
            toast.error("Cập nhật mật khẩu thất bại!")
        })
}

const deleteCustomers = (id, count, setCount) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/customers/' + id)
            .then(res => {
                alert('Item has deleted!');
                count++;
                setCount(count);
            }).catch(err => console.log(err))
    }
}
export { createNewCustomer, getCustomers, getCustomerById, updateCustomerByID, changePassword, deleteCustomers } 