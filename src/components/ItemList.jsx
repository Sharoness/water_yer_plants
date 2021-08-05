import React from 'react';

function ItemList(props) {
    return (
        <div>
            {props.plant} <br />
            <p>hallo</p>
            {/* Needs water in x days/Needs water tomorrow/Needs water today/You forgot to give yer *Name of plant* water. Do it now, save 'em! <br />
            Basically the same as Info, but this one is smaller because it's in a list. */}
        </div>
    )
}

export default ItemList;
