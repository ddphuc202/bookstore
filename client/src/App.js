import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ManageBooks from './pages/Admin/ManageBooks';
import ModalAddNewBooks from './components/Admin/ModalAddNewBooks';
import ModalEditBooks from './components/Admin/ModalEditBooks';
import ManageGenres from './pages/Admin/ManageGenres';
import ModalAddNewGenres from './components/Admin/ModalAddNewGenres';
import ModalEditGenres from './components/Admin/ModalEditGenres';
import ManageArticles from './pages/Admin/ManageArticles';
import ModalAddNewArticles from './components/Admin/ModalAddNewArticles';
import ModalEditArticles from './components/Admin/ModalEditArticles';
import ManageCustomers from './pages/Admin/ManageCustomers';
import ModalAddNewCustomers from './components/Admin/ModalAddNewCustomers';
import ModalEditCustomers from './components/Admin/ModalEditCustomers';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import InfoPage from './pages/Customer/InfoPage';
import Books from './pages/Customer/Books';
import Posts from './pages/Customer/Posts';
import InfoBook from './pages/Customer/InfoBooks';
import Test from './components/Admin/Test';


import HomePage from './pages/Customer/HomePage';
import Cart from './pages/Customer/Cart';
import CheckOut from './pages/Customer/CheckOut';
import OrderCustomers from './pages/Customer/OrderCustomers';
import ManageOrders from './pages/Admin/ManageOrders';
import ModalEditOrder from './components/Admin/ModalEditOrder';
import Logout from './components/Auth/Logout';
import OrderCustomersDetail from './pages/Customer/OrderCustomersDetail';
import ProtectedRoutes from './utils/ProtectedRoutes';
import InfoPost from './pages/Customer/InfoPosts';


function App() {
  return (

    // {/* Admin side */}
    <Routes >

      <Route element={<ProtectedRoutes />}>
        <Route path='/manage' element={<ManageOrders />} />
        <Route path='/manage/update-orders/:id' element={<ModalEditOrder />} />

        <Route path='/manage/books' element={<ManageBooks />} />
        <Route path='/manage/add-books' element={<ModalAddNewBooks />} />
        <Route path='/manage/edit-books/:id' element={<ModalEditBooks />} />

        <Route path='/manage/categories' element={<ManageGenres />} />
        <Route path='/manage/add-categories' element={<ModalAddNewGenres />} />
        <Route path='/manage/edit-categories/:id' element={<ModalEditGenres />} />


        <Route path='/manage/posts' element={<ManageArticles />} />
        <Route path='/manage/add-posts' element={<ModalAddNewArticles />} />
        <Route path='/manage/edit-posts/:id' element={<ModalEditArticles />} />


        <Route path='/manage/customers' element={<ManageCustomers />} />
        <Route path='/manage/add-customers' element={<ModalAddNewCustomers />} />
        <Route path='/manage/edit-customers/:id' element={<ModalEditCustomers />} />


        <Route path='/test' element={<Test />} />

      </Route>



      // {/* Admin side */}
      <Route path='/' element={<HomePage />} />
      <Route path='/about-page' element={<InfoPage />} />
      <Route path='/books' element={<Books />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/info-post/:id' element={<InfoPost />} />
      <Route path='/info-book/:id' element={<InfoBook />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<CheckOut />} />
      <Route path='/orders' element={<OrderCustomers />} />
      <Route path='/order-detail/:id' element={<OrderCustomersDetail />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>

  );
}

export default App;
