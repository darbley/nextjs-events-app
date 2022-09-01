import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import {Fragment} from 'react';
import EventsSearch from '../../components/EventsSearch/EventsSearch';
import EventList from '../../components/EventsList/EventsList';
const AllEvents = (props) => {

    const router = useRouter();
    const allEvents = getAllEvents();

    if(!allEvents){
        return <p>There are no events found</p>
    }
    
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    
    return (
        <Fragment>
            <h1>All Events Component</h1>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList list={allEvents} />
        </Fragment>
    )
}
export default AllEvents;