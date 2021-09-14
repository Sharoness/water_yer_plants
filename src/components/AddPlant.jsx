import React from 'react';
import ButtonAdd from './ButtonAdd';

function AddPlant() {
    return (
        <div>
            Name of plant: <input /><br />
            (Needs water every input days)
            <ButtonAdd />
        </div>
    )
}

export default AddPlant;
