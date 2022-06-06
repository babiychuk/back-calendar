import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from './components/Layout/Header';
import ActivityForm from './components/ActivityForm/ActivityForm';
import ActivityList from './components/ActivityList/ActivityList';
import Frame from './Frame.svg';

const App = () => { 
  
  const [addActivity, setAddActivity] = useState(false);
  const [editActivity, setEditActivity] = useState(false);
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: '',
    description: '',
    radioBtn: 'option1',
    duration: '',
    reccuring: '',
  });
  const handleShowActivityForm = () => {
    setAddActivity(!addActivity)
    setEditActivity(false)
    setNewActivity({
    name: '',
    description: '',
    radioBtn: 'option1',
    duration: '',
    reccuring: ''})
  }

  const handleChangeActivity = (e) => { 
    const {name, value} = e.target;
    setNewActivity({ ...newActivity, [name]: value, })
  }

  const handleAddNewActivity = () => { 
    const activityId = activities.length;
    const allActivitues = [...activities, {id:activityId, ...newActivity}];
    setActivities(allActivitues);
    handleShowActivityForm();
  }

  const handleRemoveActivity = (el) => {
    const allActivitues = activities.filter((item, num) => num !== el);
    setActivities(allActivitues);
  }

  const handleEditActivity = (el) => {
    setEditActivity(!editActivity);
    setNewActivity(activities[el]);
    setAddActivity(!addActivity)
  }

  const handleReplaseActivity = (el) => {
    let allActivities = activities;
    activities.map((item, num)=>{ 
      
      if (item.id === el.id) {
        allActivities[num] = el;
      }
    });
    setActivities(allActivities);
    setEditActivity(false);
    setAddActivity(false)
  }

  return (
  <> 
  <Header />
  <Container className="p-3">
    <Container className="p0-20">
      <img src={Frame}/>
      <div className='title'>Set your activities</div>
      <div className='sub-title'>Link activities with your goal</div>
      {activities.length > 0 && <ActivityList activities={activities} handleRemoveActivity={handleRemoveActivity} handleEditActivity={handleEditActivity}/>}
      {addActivity && <ActivityForm 
        handleAddActivity={handleShowActivityForm} 
        handleChangeActivity={handleChangeActivity}
        handleAddNewActivity={handleAddNewActivity}
        handleReplaseActivity={handleReplaseActivity} 
        newActivity={newActivity}
        editActivity={editActivity}
      />}
      <Button className='btn-add-activity bg-transparent' onClick={handleShowActivityForm} disabled={addActivity}>
          + Add an activity
      </Button>
      <div className='pt-40'>
        <Button className='add-btn'>
            Continue
        </Button>
      </div>
    </Container>
  </Container>
  </>
)};

export default App;
