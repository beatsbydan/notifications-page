import './Notification.css'
const Notification = ({ notification, unRead}) => {
    return (  
        <li key={notification.id} className={unRead === notification.unread ?"notification unread" : "notification"}>
            <img src={notification.image} alt="" />
            <div className="right">
                <div className="details">
                    <div className="block">
                        <p className="info">
                            <span className='name'>{notification.username}</span>
                            <span className='text'>  {notification.notificationText}</span>
                            <span className='caption'> {notification.caption}  </span>
                            {unRead === notification.unread&&<span className='unreadIndicator'></span>}
                        </p>
                    </div>
                    <p className="timeFrame">{notification.timeFrame}</p>
                    {notification.hasMsg&&<div className="privateMessage">
                        <p>{notification.privateMessage}</p>
                    </div>}
                </div>
                {notification.hasPicture&&<img src={notification.endImage} alt="" />}
            </div>
        </li>
    );
}
 
export default Notification;