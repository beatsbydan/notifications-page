import Notifications from "../Notifications/Notifications";
import NavBar from '../NavBar/NavBar'
import './NotificationsBlock.css'
import useFetch from "../../Hooks/useFetch/useFetch";
import { useEffect, useState } from "react";
const NotificationsBlock = () => {
    const [notifications, setNotifications] = useState([])
    const [unRead, setUnRead] = useState(true)
    const {data} = useFetch('./data.json')
    const [num, setNum] = useState(3)
    const handleClick = () => {
        setUnRead(null)
        setNum(0)
    }
    useEffect(()=>{
        setNotifications(data);
    },[data])
    return ( 
        <div className="notificationsBlock">
            <NavBar onClick = {handleClick} num = {num}/>
            <Notifications unRead = {unRead} notifications={notifications}/>
        </div>
     );
}
 
export default NotificationsBlock;