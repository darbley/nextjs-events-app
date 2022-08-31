import Link from 'next/link';
import cssClass from './linkbutton.module.scss';

const LinkButton = (props) => {
    if(props.href){
        return (
            <button>
                <Link href={props.href} ><a className={cssClass.btn}>{props.children}</a></Link>
            </button>
        )
    }
    return <button className={cssClass.btn} onClick={props.onClick}>{props.children}</button>
    
}
export default LinkButton;