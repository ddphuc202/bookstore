import { toast } from 'react-toastify';
import { instance } from '../utils/AxiosCustomize';

const createNewCategories = (name, navigate) => {

    let data = {
        name: name
    }

    return instance.post('/categories', data).then(res => {
        toast.success('Thêm thể loại thành công!');
        navigate('/manage/categories');
    }).catch(err => {
        console.log(err)
        toast.error('Thêm thể loại thất bại!')
    });
}

const getCategories = (setRecords) => {
    return instance.get('/categories').then(res => {
        setRecords(res.data)
    }).catch(err => console.log(err))
}


const getCategoriesById = (id, setData) => {
    return instance.get('/categories/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const updateCategoriesByID = (id, data, navigate) => {
    instance.put('/categories/' + id, data)
        .then(res => {
            toast.success("Cập nhật thể loại thành công!");
            navigate('/manage/categories');
        }).catch(err => {
            console.log(err)
            toast.error("Cập nhật thể loại thất bại!")
        })
}

const deleteCategories = (id, refresh, setRefresh) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/categories/' + id)
            .then(res => {
                toast.success('Xóa thể loại thành công!');
                refresh++;
                setRefresh(refresh);
            }).catch(err => {
                console.log(err)
                toast.error('Xóa thể loại thất bại!')
            })
    }
}
export { createNewCategories, getCategories, getCategoriesById, updateCategoriesByID, deleteCategories } 