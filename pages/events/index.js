import EventList from '../../components/EventsList/EventsList';
import { getAllEvents } from '../../dummy-data';
import {Fragment} from 'react';
import EventsSearch from '../../components/EventsSearch/EventsSearch';
const AllEvents = (props) => {
    const allEvents = getAllEvents();
    if(!allEvents){
        return <p>There are no events found</p>
    }
    
    return (
        <Fragment>
            <h1>All Events Component</h1>
            <EventsSearch />
            <EventList list={allEvents} />
        </Fragment>
    )
}
export default AllEvents;