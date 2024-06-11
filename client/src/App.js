import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ManageBooks from './pages/Admin/ManageBooks';
import ModalAddNewBooks from './components/Admin/ModalAddNewBooks';
import ModalEditBooks from './components/Admin/ModalEditBooks';
import ModalDeleteBooks from './components/Admin/ModalDeleteBooks';
import ManageGenres from './pages/Admin/ManageGenres';
import ModalAddNewGenres from './components/Admin/ModalAddNewGenres';
import ModalEditGenres from './components/Admin/ModalEditGenres';
import ManageArticles from './pages/Admin/ManageArticles';
import ModalAddNewArticles from './components/Admin/ModalAddNewArticles';
import ModalEditArticles from './components/Admin/ModalEditArticles';
import ManageCustomers from './pages/Admin/ManageCustomers';
import ModalAddNewCustomers from './components/Admin/ModalAddNewCustomers';
import ModalEditCustomers from './components/Admin/ModalEditCustomers';
import Login from './pages/Customer/Login';
import Register from './pages/Customer/Register';
import InfoPage from './pages/Customer/InfoPage';
import Books from './pages/Customer/Books';
import Articles from './pages/Customer/Articles';


import HomePage from './pages/Customer/HomePage';


const getAllBook = ()=>{
  axios.get('http://localhost:3030/books').then((data) => {
    console.log(data);
  })
}

function App() {
  return (
    <>
    <Routes>
      {/* Admin side */}
      <Route path='/manage-books' element={<ManageBooks />} />
      <Route path='/manage-add-books' element={<ModalAddNewBooks />} />
      <Route path='/manage-edit-books/:id' element={<ModalEditBooks />} />

      <Route path='/manage-genres' element={<ManageGenres />} />
      <Route path='/manage-add-genres' element={<ModalAddNewGenres />} />
      <Route path='/manage-edit-genres/:id' element={<ModalEditGenres />} />


      <Route path='/manage-articles' element={<ManageArticles />} />
      <Route path='/manage-add-articles' element={<ModalAddNewArticles />} />
      <Route path='/manage-edit-articles/:id' element={<ModalEditArticles />} />


      <Route path='/manage-customers' element={<ManageCustomers />} />
      <Route path='/manage-add-customers' element={<ModalAddNewCustomers />} />
      <Route path='/manage-edit-customers/:id' element={<ModalEditCustomers />} />
  


      {/* Customer side */}
      <Route path='/' element={<HomePage />} />
      <Route path='/customer' element={<HomePage />} />
      <Route path='/about-page' element={<InfoPage />} />
      <Route path='/books' element={<Books />} />
      <Route path='/articles' element={<Articles />} />
      
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
