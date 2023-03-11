import './Notifications.css'
import Notification from './Notification/Notification';
const Notifications = ({ notifications , unRead}) => {
    return (  
        <ul className="notifications">
            {notifications.map(notification=>{
                return <Notification  unRead={unRead} key={notification.id} notification={notification}/>
            })}
        </ul>
    );
}
 
export default Notifications;