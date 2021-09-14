import React from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';

function Info() {
    return (
        <div>
            prop *Name of plant* <br />
            (Needs water in x days/Needs water tomorrow/Needs water today/You forgot to give yer *Name of plant* water. Do it now, save 'em!)
            <ButtonEdit />
            <ButtonDelete />
        </div>
    )
}

export default Info;
