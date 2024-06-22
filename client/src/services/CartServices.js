import { instance } from "../utils/AxiosCustomize";
const addBookToCart = (id) => {
    let data = {
        bookId: id,
        quantity: 1,
        customerId: 1
    }
    instance.post('/cart_items', data).then(res => {
        alert('Data add successfully!');
    })
}

const getCartByCustomerId = (id, setData) => {
    instance.get('/cart_items/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}
export { addBookToCart, getCartByCustomerId } 