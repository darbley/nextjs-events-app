
import LinkButton from '../UI/LinkButton/LinkButton';
import cssClass from './events-search.module.scss';

const EventsSearch = (props) => {

    return (
        <form className={cssClass.form}>
            <div className={cssClass.controls}>
                <div className={cssClass.control}>
                    <label htmlFor='year'>Year</label>
                    <select id='year'>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
                <div className={cssClass.control}>
                    <label htmlFor='month'>Month</label>
                    <select id='month'>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>Sept</option>
                        <option value='10'>Oct</option>
                        <option value='11'>Nov</option>
                        <opiton value='12'>Dec</opiton>
                    </select>
                </div>
            </div>
            <LinkButton>Find Events</LinkButton>
        </form>
    )
}
export default EventsSearch;