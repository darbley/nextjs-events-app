
import EventItem from './EventItem';
import cssClass from './event-list.module.scss';

const EventsList = (props) => {

    return (
        <div className='blockwrap'>
            <ul className={cssClass['events-list']}>
                {props.list.map((event, index) => {
                    return (
                            <EventItem 
                                key={index}
                                title={event.title}
                                id={event.id}
                                date={event.date}
                                location={event.location}
                                image={event.image}
                            />
                    )
                })}
            </ul>
        </div>
    )
}
export default EventsList;