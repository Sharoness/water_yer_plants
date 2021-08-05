import React from 'react';
import ItemList from './ItemList';


function List(props) {    

    return (
        <div>
            List of yer plants: <br/>
            <ul>
                {props.plantlist.map((plant) => <li><ItemList plant={plant} /></li>)}
            </ul>
            EINDE
        </div>
    )
}

export default List;
