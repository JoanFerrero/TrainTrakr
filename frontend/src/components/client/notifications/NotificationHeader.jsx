import { useNotification } from "../../../hooks/useNotification";

const NotificationHeader = ({data}) => {
  const { updateNotification } = useNotification()

  return (
    <li className="list-group-item" key={data.id} onClick={()=> updateNotification(data.id)}>{data.desc}</li>
  )
}

export default NotificationHeader;