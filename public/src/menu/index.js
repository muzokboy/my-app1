import React,{ useState } from 'react';
import Menu from './Menu';
import Categiries from './Catigories';
import items from './data';


const Menyu = () => {
    const [menuItems, setMenuItems ]=useState(items);
    const [categiries, setCategories]=useState([]);
    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(items)
            return; 
        }
        const newItems = items.filter((item)  => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <div>
        <main>
            <section>
                 <div>
                    <h2>New Arrivals</h2>
                    <div className='underline'></div>
                 </div>
                 <Categiries filterItems={filterItems}/>
                 <Menu items={menuItems}/>
            </section>
            
            <section>

            </section>
        </main>

            
        </div>
    )
}

export default Menyu
