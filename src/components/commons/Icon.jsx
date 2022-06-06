import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencil,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

const Icon = ({ iconName }) => {
    let icon;
    if (iconName === 'pencil') {
        icon = faPencil;
    }
    if (iconName === 'trash') {
        icon = faTrash;
    }
    return (
        <span style={{ maxWidth: '30px', maxHeight: '30px' }}>
            <FontAwesomeIcon
                icon={icon}
            />
        </span>
    );
};

export default Icon;
