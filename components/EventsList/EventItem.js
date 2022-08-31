import Link from 'next/link';
import cssClass from './event-item.module.scss';
import LinkButton from '../UI/LinkButton/LinkButton';
import DateIcon from '../Icons/DateIcon/DateIcon';
import AddressIcon from '../Icons/AddressIcon/AddressIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon/ArrowRightIcon';

const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ','\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={cssClass.item}>
            <img src={'/' + image} alt="" />
            <div className={cssClass.content}>
                <div className={cssClass.summary}>
                    <h2>{title}</h2>
                    <div className={cssClass.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={cssClass.address}>
                        <AddressIcon />
                        <address>
                            {formattedAddress}
                        </address>
                    </div>
                </div>
                <div className={cssClass.actions}>
                    {/* <Link href={exploreLink}>Explore Event</Link> */}
                    <LinkButton href={exploreLink} >
                        <span>Explore Event</span>
                        <span className={cssClass.icon}><ArrowRightIcon /></span>
                    </LinkButton>
                </div>
            </div>
        </li>
    )
}
export default EventItem;