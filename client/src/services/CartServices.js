import { instance } from "../utils/AxiosCustomize";
const addBookToCart = (id, quantity) => {
    let data = {
        bookId: id,
        quantity: quantity,
        customerId: localStorage.getItem('userId')
    };
    instance.post('/carts/item', data).then(res => {
        alert('Data add successfully!');
    }).catch(err => {
        console.log(err);
        alert('Vui lòng đăng nhập!')

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
    })
        .catch(err => {
            console.log(err);
        });
};



export { addBookToCart, getCartByCustomerId, updateIncreaseAmountOfCart, updateDecreaseAmountOfCart, updateInputAmountOfCart, deleteItemInCart }


