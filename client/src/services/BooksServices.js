import { instance } from '../utils/AxiosCustomize';

const createNewBook = (title, author, description, price, discount, stock, categories, thumbnailFile, otherImages, navigate) => {

    const otherImagesArray = Array.from(otherImages);

    const data = new FormData();
    data.append('title', title);
    data.append('author', author);
    data.append('description', description);
    data.append('price', price);
    data.append('discount', discount);
    data.append('stock', stock);
    data.append('category_id', categories);
    data.append('thumbnail', thumbnailFile);
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

const updateBookByID = (id, data, thumbnailFile, previewOtherImages, navigate) => {
    const previewOtherImagesArray = Array.from(previewOtherImages);
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    formData.append('thumbnail', thumbnailFile);
    previewOtherImagesArray.forEach((file) => {
        formData.append('otherImages', file);
    });

    instance.put('/books/' + id, formData)
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