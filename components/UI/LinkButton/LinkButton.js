import Link from 'next/link';
import cssClass from './linkbutton.module.scss';

const LinkButton = (props) => {

    return (
        <button>
            <Link href={props.href} ><a className={cssClass.btn}>{props.children}</a></Link>
        </button>
    )
}
export default LinkButton;