import axios from '../utils/AxiosCustomize';

const createNewBook = (title, author, description, price, sale, stock, navigate) => {

    let data = {
        title: title,
        author: author,
        description: description,
        price: price,
        discount: sale,
        stock: stock
    }
    return axios.post('/books', data).then(res => {
        alert('Data add successfully!');
        navigate('/manage-books');
    }).catch(err => console.log(err));
}

const getBooks = () => {
    return axios.get('/books')
}

const getBookById = (id) => {
    return axios.get('/books/' + id)
}

const updateBookByID = (id, data, navigate) => {
    axios.put('/books/' + id, data)
        .then(res => {
            alert("Data update successfully!");
            navigate('/manage-books');
        })
}

const deleteBooks = (id, navigate) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        axios.delete('/books/' + id)
            .then(res => {
                alert('Item has deleted!');
                navigate('/manage-books')
            }).catch(err => console.log(err))
    }
}
export { createNewBook, getBooks, getBookById, updateBookByID, deleteBooks } 