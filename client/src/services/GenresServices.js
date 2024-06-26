import { instance } from '../utils/AxiosCustomize';

const createNewCategories = (name, navigate) => {

    let data = {
        name: name
    }

    return instance.post('/categories', data).then(res => {
        alert('Data add successfully!');
        navigate('/manage-categories');
    }).catch(err => console.log(err));
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
            alert("Data update successfully!");
            navigate('/manage-categories');
        }).catch(err => console.log(err))
}

const deleteCategories = (id, navigate) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/categories/' + id)
            .then(res => {
                alert('Item has deleted!');
                navigate('/manage-categories')
            }).catch(err => console.log(err))
    }
}
export { createNewCategories, getCategories, getCategoriesById, updateCategoriesByID, deleteCategories } 