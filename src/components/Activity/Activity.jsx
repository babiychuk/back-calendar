import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Icon from '../commons/Icon';

const Activity = ({ item, handleRemoveActivity, handleEditActivity, activityNumber }) => (
    <InputGroup>
        <FormControl
            placeholder="your activity"
            value={item.name}
            disabled
        />
        <InputGroup.Text onClick={() => { handleEditActivity(activityNumber) }}>
            <Icon iconName='pencil' />
        </InputGroup.Text>
        <InputGroup.Text onClick={() => handleRemoveActivity(activityNumber)}>
            <Icon iconName='trash' />
        </InputGroup.Text>
    </InputGroup>
);

export default Activity;
