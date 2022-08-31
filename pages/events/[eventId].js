import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/EventDetail/EventSummary/Event-Summary';
import EventLogistics from '../../components/EventDetail/EventLogistics/EventLogistics';
import EventContent from '../../components/EventDetail/EventContent/EventContent';

const SingleEvent = (props) => {
    const router = useRouter();
    const eventId = router.query.eventId;

    const event = getEventById(eventId);
    if(!event){
        return (
            <p>No event found.</p>
        )
    }
    return (
        <div className='blockwrap'>
            <EventSummary title={event.title} />
            <EventLogistics 
                date={event.date} 
                address={event.location} 
                image={event.image} 
                imageAlt={event.title} 
            />
            <EventContent >
                <p>{event.description}</p>
            </EventContent>
        </div>
    )
}
export default SingleEvent;