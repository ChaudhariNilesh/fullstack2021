const Message = ({msg}) => {
    
    if (msg.message === null) {
      return null
    }

    return (
      <div className={msg.type}>
        {msg.message}
      </div>
    )
  }

export default Message