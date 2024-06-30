import { instance } from '../utils/AxiosCustomize';

const createNewPost = (title, content, imageFile, navigate) => {

    const data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('image', imageFile);
    data.append('adminId', localStorage.getItem('userId'));

    return instance.post('/posts', data).then(res => {
        alert('Data add successfully!');
        navigate('/manage/posts');
    }).catch(err => console.log(err));
}

const getPost = (setRecords) => {
    return instance.get('/posts').then(res => {
        setRecords(res.data)
    }).catch(err => console.log(err))
}


const getPostBanner = (limit, setRecords) => {
    return instance.get('/posts', {
        params: {
            limit: limit
        }
    }).then(res => {
        setRecords(res.data)
    }).catch(err => console.log(err))
}

const getPostById = (id, setData) => {
    return instance.get('/posts/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const updatePostByID = (id, data, imageFile, navigate) => {
    const formData = new FormData();
    for (const key in data) {
        if (data[key] !== null) {
            formData.append(key, data[key]);
        }
    }
    if (imageFile) {
        formData.append('image', imageFile);
    }
    instance.put('/posts/' + id, formData)
        .then(res => {
            alert("Data update successfully!");
            navigate('/manage/posts');
        }).catch(err => console.log(err))
}

const deletePost = (id, count, setCount) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/posts/' + id)
            .then(res => {
                alert('Item has deleted!');
                count++;
                setCount(count);
            }).catch(err => console.log(err))
    }
}
export { createNewPost, getPost, getPostBanner, getPostById, updatePostByID, deletePost } 