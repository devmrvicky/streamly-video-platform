import UserAvatar from '../custom/CustomAvatar'

const UserProfilePopoverTrigger = ({avatar, fullName}) => {
  return (
    <div className="auth-popover-trigger w-10 h-10 border rounded-full ">
          <UserAvatar imgSrc={avatar} name={fullName} />
        </div>
  )
}

export default UserProfilePopoverTrigger
