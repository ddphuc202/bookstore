import { toast } from 'react-toastify';
import { instance } from '../utils/AxiosCustomize';


const createNewOrder = (data, navigate) => {
    let dataForm = {
        customerId: localStorage.getItem('userId'),
        name: data.name,
        phone: data.phone,
        address: data.address
    };
    instance.post('/orders', dataForm).then(res => {
        const idOrder = res.data.id;
        alert('Đặt hàng thành công!');
        navigate(`/order-detail/${idOrder}`);
    }).catch(err => console.log(err));
};

const getAllOrders = (page, setData) => {
    instance.get('/orders', {
        params: {
            page: page
        }
    })
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err));
};

const getOrderCustomers = (id, setData) => {
    instance.get('/orders/customer/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err));
};

const getOrderDetail = (id, setData) => {
    instance.get('/orders/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err));

};

const updateStatusOrder = (id, data, navigate) => {
    instance.put('/orders/' + id, data)
        .then(res => {
            toast.success("Cập nhật tình trạng đơn hàng thành công!");
            navigate('/manage');
        }).catch(err => console.log(err));

};

const cancelStatusOrder = (id, refresh, setRefresh) => {
    window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này không?')
    let data = {
        status: 'cancelled'
    };
    instance.put('/orders/' + id, data)
        .then(res => {
            toast.success("Hủy đơn hàng thành công!");
            refresh++;
            setRefresh(refresh)
        }).catch(err => console.log(err));
};

export { createNewOrder, getOrderCustomers, getAllOrders, getOrderDetail, updateStatusOrder, cancelStatusOrder }; 