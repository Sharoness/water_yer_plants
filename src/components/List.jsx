import React from 'react';
import ButtonAddIcon from './ButtonAddIcon';
import ItemList from './ItemList';


function List(props) {    
// event listener buttonaddicon -> AddPlant
    return (
        <div>
            List of yer plants: <br/>
            <ul>
                {props.plantlist.map((plant) => <li><ItemList plant={plant} /></li>)}
            </ul>
            <ButtonAddIcon />
            EINDE
        </div>
    )
}

export default List;
