
import './App.css';
import Cart from './Components/Cart/Cart';
import Classes from './Components/ClassesComponents/Classes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div>      
      <h1>Начни тренировки уже сегодня</h1>

      <div className='container'>
        <AllCategories/>
        <Cart/>
      </div>     
      <Classes/>
    </div>
  );
}

export default App;
