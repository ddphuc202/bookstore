import { toast } from 'react-toastify';
import { instance } from '../utils/AxiosCustomize';

const createNewPost = (title, content, imageFile, navigate) => {

    const data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('image', imageFile);
    data.append('adminId', localStorage.getItem('userId'));

    return instance.post('/posts', data).then(res => {
        toast.success('Thêm bài viết thành công!');
        navigate('/manage/posts');
    }).catch(err => {
        console.log(err)
        toast.error('Thêm bài viết thất bại!')
    });
}

const getPost = (page, setRecords) => {
    return instance.get('/posts', {
        params: {
            page: page
        }
    }).then(res => {
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
            toast.success("Cập nhật bài viết thành công!");
            navigate('/manage/posts');
        }).catch(err => {
            console.log(err)
            toast.error("Cập nhật bài viết thất bại!")
        })
}

const deletePost = (id, refresh, setRefresh) => {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
        instance.delete('/posts/' + id)
            .then(res => {
                toast.success('Xóa bài viết thành công!');
                refresh++;
                setRefresh(refresh);
            }).catch(err => {
                console.log(err)
                toast.error('Xóa bài viết thất bại!')
            })
    }
}
export { createNewPost, getPost, getPostBanner, getPostById, updatePostByID, deletePost } 