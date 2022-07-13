import React from 'react'
import Timeline from './Timeline';

function Education() {
    return (
        <div>
            <div className="TimelineCon">
                <Timeline name={'2021, Sept'} text={'University of Birmingham'} qualification={'PhD of Science in computer Science'} />
                <Timeline name={'1994, June'} text={'London Metropolitan University'} qualification={'Bachelors Science in computer Science'} />
                <Timeline name={'1990, Aug'} text={'Hull City School'} qualification={'High School Diploma'} />
                <Timeline name={'2006, Jan'} text={'University of Manchester'} qualification={'Masters in Mathematics'} />
            </div>
        </div>
    )
}

export default Education;
