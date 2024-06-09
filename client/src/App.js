import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ManageBooks from './pages/Admin/ManageBooks';
import ModalEditBooks from './components/Admin/ModalEditBooks';
import ModalDeleteBooks from './components/Admin/ModalDeleteBooks';
import InfoPage from './pages/Customer/InfoPage';


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
      <Route path='/admin' element={<ManageBooks />} />
      <Route path='/manage-edit-books/:id' element={<ModalEditBooks />} />
      <Route path='/manage-delete-books' element={<ModalDeleteBooks />} />

      {/* Customer side */}
      <Route path='/' element={<HomePage />} />
      <Route path='/customer' element={<HomePage />} />
      <Route path='/about-page' element={<InfoPage />} />


    </Routes>
    </>
  );
}

export default App;
