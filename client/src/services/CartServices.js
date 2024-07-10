import { toast } from 'react-toastify'
import { instance } from "../utils/AxiosCustomize";
const addBookToCart = (id, quantity) => {
    let data = {
        bookId: id,
        quantity: quantity,
        customerId: localStorage.getItem('userId')
    };
    instance.post('/carts/item', data).then(res => {
        toast.success('Thêm vào giỏ hàng thành công!');
    }).catch(err => {
        console.log(err);
        if (err.response.status === 401) {
            toast.info('Vui lòng đăng nhập!')
        }
        if (err.response.status === 403) {
            toast.info('Vui lòng đăng nhập!')
        }
    });
};

const getCartByCustomerId = (id, setData) => {
    instance.get('/carts/customer/' + id)
        .then(res => {
            if (res.data.length > 0) {
                setData(res.data);
            } else {
                setData([]);
            }
        })
        .catch(err => console.log(err));
};

const updateIncreaseAmountOfCart = (index, id, data, setData) => {
    const newData = [...data];
    newData[index].quantity += 1;
    let dataUpdate = {
        quantity: newData[index].quantity
    };
    instance.put('carts/item/' + id, dataUpdate).then(res => {
        setData(newData);
    });

};

const updateDecreaseAmountOfCart = (index, id, data, setData) => {
    const newData = [...data];
    if (newData[index].quantity > 0) {
        newData[index].quantity -= 1;
    }

    if (newData[index].quantity == 0) {
        deleteItemInCart(id, data, setData);
    }

    let dataUpdate = {
        quantity: newData[index].quantity
    };

    instance.put('carts/item/' + id, dataUpdate).then(res => {
        setData(newData);
    }).catch(err => { console.log(err); });
};

const updateInputAmountOfCart = (index, id, newQuantity, data, setData) => {
    const newData = [...data];
    if (newData[index].quantity > 0) {
        newData[index].quantity = Number(newQuantity);
    }
    if (newData[index].quantity < 0) {
        newData[index].quantity = 1
    }
    let dataUpdate = {
        quantity: newData[index].quantity
    };
    instance.put('carts/item/' + id, dataUpdate).then(res => {
        if (newData[index].quantity == 0) {
            deleteItemInCart(id, data, setData);
        } else {
            setData(newData);
        }
    }).catch(err => { console.log(err); });

    if (newData[index].quantity == 0) {
        deleteItemInCart(id, data, setData);
    }
};

const deleteItemInCart = (id, data, setData) => {
    instance.delete('carts/item/' + id).then(res => {
        setData(data.filter(item => item.id !== id));
        toast.success('Xóa thành công!')
    })
        .catch(err => {
            console.log(err);
        });
};



export { addBookToCart, getCartByCustomerId, updateIncreaseAmountOfCart, updateDecreaseAmountOfCart, updateInputAmountOfCart, deleteItemInCart }


