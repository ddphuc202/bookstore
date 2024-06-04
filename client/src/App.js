import logo from './logo.svg';
import axios from 'axios';

const getAllBook = ()=>{
  axios.get('http://localhost:3030/books').then((data) => {
    console.log(data);
  })
}

function App() {
  return (
    <>
    <button onClick={() => getAllBook()}>
      Click me
    </button>
    </>
  );
}

export default App;
