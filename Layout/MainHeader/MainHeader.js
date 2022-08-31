import Link from 'next/link';
import cssClass from './mainheader.module.scss';

const MainHeader = (props) => {

    return (
        <div className='blockwrap'>
            <header className={cssClass.header}>
                <div className={cssClass.logo}>
                    <Link href="/">NextEvents</Link>
                </div>
                
                <nav className={cssClass.navigation}>
                    <ul>
                        <li>
                            <Link href='/events'>Browse All Events</Link>
                        </li>
                    </ul>
                </nav>
                
            </header>
        </div>
    )
}
export default MainHeader;