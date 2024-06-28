import { instance } from '../utils/AxiosCustomize';

const createNewBook = (title, author, description, price, discount, quantity, categories, thumbnailFile, otherImages, navigate) => {

    const otherImagesArray = Array.from(otherImages);

    const data = new FormData();
    data.append('title', title);
    data.append('author', author);
    data.append('description', description);
    data.append('price', price);
    data.append('discount', discount);
    data.append('quantity', quantity);
    data.append('categoryId', categories);
    data.append('thumbnail', thumbnailFile);
    otherImagesArray.forEach((file) => {
        data.append(`otherImages`, file);
    });


    return instance.post('/books', data).then(res => {
        alert('Data add successfully!');
        navigate('/manage/books');
    }).catch(err => console.log(err));
}

const getBooks = (page, search, sortBy, order, categoryId, setRecords) => {
    instance.get('/books', {
        params: {
            page: page,
            search: search,
            sortBy: sortBy,
            order: order,
            categoryId: categoryId,
        }

    }).then(res => {
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
        if (data[key] !== null) {
            formData.append(key, data[key]);
        }
    }
    if (thumbnailFile) {
        formData.append('thumbnail', thumbnailFile);
    }
    if (previewOtherImagesArray) {
        previewOtherImagesArray.forEach((file) => {
            formData.append('otherImages', file);
        });
    }

    instance.put('/books/' + id, formData)
        .then(res => {
            alert("Data update successfully!");
            navigate('/manage/books');
        })
}

const deleteBooks = (id, count, setCount) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/books/' + id)
            .then(res => {
                alert('Item has deleted!');
                count++;
                setCount(count);
            }).catch(err => console.log(err))
    }
}
export { createNewBook, getBooks, getBookById, updateBookByID, deleteBooks } 