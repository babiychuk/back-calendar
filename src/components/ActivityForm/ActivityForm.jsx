import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ActivityForm.scss';

const ActivityForm = ({handleAddActivity, handleChangeActivity, handleAddNewActivity, handleReplaseActivity, newActivity, editActivity}) => (
    <Form className="activity-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Activity name</Form.Label>
            <Form.Control name="name" value={newActivity.name}  placeholder="Enter activity name" onChange={handleChangeActivity}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Activity description (optional)</Form.Label>
            <Form.Control name="description" value={newActivity.description} placeholder="Enter activity description" onChange={handleChangeActivity}/>
        </Form.Group>

        <Form>
            <Form.Check
                inline
                label="Plan now"
                name="radioBtn"
                type='radio'
                id={`radio-1`}
                value="option1"
                checked={newActivity.radioBtn === 'option1'}
                onChange={handleChangeActivity}
            />
            <Form.Check
                inline
                label="Leave unplanned"
                name="radioBtn"
                type='radio'
                id={`radio-2`}
                value="option2"
                checked={newActivity.radioBtn === 'option2'}
                onChange={handleChangeActivity}
            />
        </Form>

        <Form.Group className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control name="duration" value={newActivity.duration} placeholder="Enter Duration" onChange={handleChangeActivity}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Reccuring (optional)</Form.Label>
            <Form.Select placeholder="Select" value={newActivity.reccuring} name="reccuring" onChange={handleChangeActivity}>
                <option>Select</option>
                <option value="1">Select 1</option>
                <option value="2">Select 2</option>
                <option value="3">Select 3</option>
            </Form.Select>
        </Form.Group>
        <div className="mb-2">
            <Button className= {!editActivity ? 'add-btn': 'edit-btn'} onClick={()=> {!editActivity ? handleAddNewActivity() : handleReplaseActivity(newActivity)}}>
                {!editActivity ? 'Add': 'Edit'}
            </Button>
            <Button className='cansel-btn bg-transparent' onClick={handleAddActivity}>
                Cansel
            </Button>
        </div>
    </Form>
);

export default ActivityForm;
