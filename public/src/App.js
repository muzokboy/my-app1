
import './App.css';
import Catigories from './menu/Catigories';
import Menu from './menu/Menu';
import React,{ useState} from 'react'
import items from './menu/data';  


const allCategories = ['all', ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([allCategories]);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
    }
  }


  return (
    <div className="App">
      <main>
        <section>
          <div>
            <h2>All categories</h2>
            <div></div>
          </div>
          <Catigories categories={categories} filterItems={filterItems}/>
          <Menu items={menuItems}/>
        </section>
      </main>
    </div>
  );
}

export default App;
 














// import React,{ useState} from 'react'
// import Menu from './menu/Menu';
// import Catigories from './menu/Catigories';


// function App(){
//   return(
//     <div className='App'>
//       {/* <Menu/> */}
//       <Catigories/>
//     </div>
//   )
// }
// export default App;



