import './NavBar.css'
const NavBar = ({num, onClick}) => {
    return ( 
        <div className="navBar">
            <div className="notificationBar">
                <h3>Notifications</h3>
                <div className="dynamicNumber">{num}</div>
            </div>
            <button onClick={onClick}>Mark all as read </button>
        </div>
     );
}
 
export default NavBar;