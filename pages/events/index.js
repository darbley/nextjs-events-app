import EventList from '../../components/EventsList/EventsList';
import { getAllEvents } from '../../dummy-data';
import {Fragment} from 'react';
const AllEvents = (props) => {
    const allEvents = getAllEvents();
    if(!allEvents){
        return <p>There are no events found</p>
    }
    
    return (
        <Fragment>
            <h1>All Events Component</h1>
            <EventList list={allEvents} />
        </Fragment>
    )
}
export default AllEvents;