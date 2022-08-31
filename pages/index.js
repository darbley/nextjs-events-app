import { getFeaturedEvents } from "../dummy-data";
import EventsList from '../components/EventsList/EventsList';

const HomePage = (props) => {
    const featuredEvents = getFeaturedEvents();
    return (
        <div className='blockwrap'>
            <h1>Home page Component</h1>
            <EventsList list={featuredEvents} />
        </div>
    )
}
export default HomePage;