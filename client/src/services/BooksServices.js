import { toast } from "react-toastify";
import { instance } from "../utils/AxiosCustomize";



const createNewBook = (title, author, publisher, description, price, discount, quantity, categories, thumbnailFile, otherImages, navigate) => {

    const otherImagesArray = Array.from(otherImages);

    const data = new FormData();
    data.append('adminId', localStorage.getItem('userId'))
    data.append('title', title);
    data.append('author', author);
    data.append('publisher', publisher);
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
        toast.success('Thêm sách thành công!');
        navigate('/manage/books');
    }).catch(err => {
        console.log(err)
        toast.error('Thêm sách thất bại!')
    });
}

const getBooks = (page, search, sortBy, order, categoryId, setRecords) => {
    instance.get('/books/customer', {
        params: {
            page: page,
            search: search,
            sortBy: sortBy,
            order: order,
            categoryId: categoryId,
        }

    }).then(res => {
        setRecords(res.data)
    }).catch(err => console.log(err))
}

const getBooksAdmin = (page, search, sortBy, order, categoryId, setRecords) => {
    instance.get('/books/admin', {
        params: {
            page: page,
            search: search,
            sortBy: sortBy,
            order: order,
            categoryId: categoryId,
        }

    }).then(res => {
        setRecords(res.data)
    }).catch(err => console.log(err))
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
            toast.success("Chỉnh sửa sách thành công!");
            navigate('/manage/books');
        }).catch(err => {
            console.log(err)
            toast.error("Chỉnh sửa sách thất bại!")

        });
}

const deleteBooks = (id, refresh, setRefresh) => {
    const conf = window.confirm('Bạn có muốn xóa?');
    if (conf) {
        instance.delete('/books/' + id)
            .then(res => {
                toast.success('Sách xóa thành công!');
                refresh++;
                setRefresh(refresh);
            }).catch(err => {
                console.log(err)
                toast.error('Xóa sách thất bại!')
            })
    }
}

const restoreBook = (id, refresh, setRefresh) => {
    const conf = window.confirm('Bạn có muốn khôi phục không?');
    if (conf) {
        instance.patch('/books/restore/' + id)
            .then(res => {
                toast.success('Khôi phục sách thành công!');
                refresh++;
                setRefresh(refresh);

            }).catch(err => {
                console.log(err);
                toast.error('Khôi phục sách thất bại!')
            })
    }
}

export { createNewBook, getBooks, getBookById, updateBookByID, deleteBooks, restoreBook, getBooksAdmin } 