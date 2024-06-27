import { instance } from '../utils/AxiosCustomize';

const createNewOrder = (name, phone, address, navigate) => {
    let data = {
        customerId: localStorage.getItem('userId'),
        name: name,
        phone: phone,
        address: address
    }
    instance.post('/orders', data).then(res => {
        alert('Đặt hàng thành công!');
        navigate('/');
    }).catch(err => console.log(err))
}

const getAllOrders = (setData) => {
    instance.get('/orders')
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const getOrderCustomers = (id, setData) => {
    instance.get('/orders/customer/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const getOrderDetail = (id, setData) => {
    instance.get('/orders/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))

}

const updateStatusOrder = (id, data, navigate) => {
    instance.put('/orders/' + id, data)
        .then(res => {
            alert("Data update successfully!");
            navigate('/manage-orders');
        }).catch(err => console.log(err))

}

const cancelStatusOrder = (id, navigate) => {
    let data = {
        status: 4
    }
    instance.put('/orders/' + id, data)
        .then(res => {
            alert("Order cancel successfully!");
            navigate('/orders');
        }).catch(err => console.log(err))
}

export { createNewOrder, getOrderCustomers, getAllOrders, getOrderDetail, updateStatusOrder, cancelStatusOrder } 