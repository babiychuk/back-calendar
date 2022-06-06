import React from 'react';
import Activity from '../Activity/Activity';

import './ActivityList.scss';

const ActivityList = ({ activities, handleRemoveActivity, handleEditActivity }) => {
    return (
        <div>
            <div className='header-list'>
                Your activities
            </div>
            {activities.map((item, num)=>(
                <div key={num} className='pb-2'>
                    <Activity item={item} activityNumber={num} handleRemoveActivity={handleRemoveActivity} handleEditActivity={handleEditActivity} />
                </div>
            ))}

        </div>

    )
};

export default ActivityList;
