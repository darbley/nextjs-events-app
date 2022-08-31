import MainHeader from "../MainHeader/MainHeader";

const Wrapper = (props) => {

    return (
        <div className='wrapper'>
            <MainHeader />
            <main>
                {props.children}
            </main>
           
        </div>
    )
}
export default Wrapper;