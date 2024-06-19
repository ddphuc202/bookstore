import { instance } from '../utils/AxiosCustomize';

const createNewBook = (title, author, description, price, discount, stock, genres, thumbnail, otherImages, navigate) => {

    const otherImagesArray = Array.from(otherImages);

    const data = new FormData();
    data.append('title', title);
    data.append('author', author);
    data.append('description', description);
    data.append('price', price);
    data.append('discount', discount);
    data.append('stock', stock);
    data.append('genre_id', genres);
    data.append('thumbnail', thumbnail);
    otherImagesArray.forEach((file) => {
        data.append(`otherImages`, file);
    });

    return instance.post('/books', data).then(res => {
        alert('Data add successfully!');
        navigate('/manage-books');
    }).catch(err => console.log(err));
}

const getBooks = (setRecords) => {
    return instance.get('/books').then(res => {
        setRecords(res.data)
    })
}


const getBookById = (id, setData) => {
    return instance.get('/books/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const updateBookByID = (id, data, navigate) => {
    instance.put('/books/' + id, data)
        .then(res => {
            alert("Data update successfully!");
            navigate('/manage-books');
        })
}

const deleteBooks = (id, navigate) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/books/' + id)
            .then(res => {
                alert('Item has deleted!');
                navigate('/manage-books')
            }).catch(err => console.log(err))
    }
}
export { createNewBook, getBooks, getBookById, updateBookByID, deleteBooks } 