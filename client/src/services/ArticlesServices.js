import { instance } from '../utils/AxiosCustomize';

const createNewPost = (title, content, imageFile, navigate) => {

    const data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('imageFile', imageFile);

    return instance.post('/posts', data).then(res => {
        alert('Data add successfully!');
        navigate('/manage-posts');
    }).catch(err => console.log(err));
}

const getPost = (setRecords) => {
    return instance.get('/posts').then(res => {
        setRecords(res.data)
    })
}


const getPostById = (id, setData) => {
    return instance.get('/posts/' + id)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err))
}

const updatePostByID = (id, data, navigate) => {
    instance.put('/posts/' + id, data)
        .then(res => {
            alert("Data update successfully!");
            navigate('/manage-posts');
        })
}

const deletePost = (id, navigate) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/posts/' + id)
            .then(res => {
                alert('Item has deleted!');
                navigate('/manage-posts')
            }).catch(err => console.log(err))
    }
}
export { createNewPost, getPost, getPostById, updatePostByID, deletePost } 