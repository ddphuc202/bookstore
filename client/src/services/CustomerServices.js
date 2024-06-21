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
        alert('Data add successfully!');
        navigate('/manage-customers');
    }).catch(err => console.log(err));
}

const getCustomers = (setRecords) => {
    return instance.get('/customers').then(res => {
        setRecords(res.data)
    })
}


const getCustomerById = (id, setData) => {
    return instance.get('/customers/' + id)
        .then(res => {
            setData(res.data[0]);
        })
        .catch(err => console.log(err))
}

const updateCustomerByID = (id, data, navigate) => {
    instance.put('/customers/' + id, data)
        .then(res => {
            alert("Data update successfully!");
            navigate('/manage-customers');
        })
}

const deleteCustomers = (id, navigate) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/customers/' + id)
            .then(res => {
                alert('Item has deleted!');
                navigate('/manage-customers')
            }).catch(err => console.log(err))
    }
}
export { createNewCustomer, getCustomers, getCustomerById, updateCustomerByID, deleteCustomers } 