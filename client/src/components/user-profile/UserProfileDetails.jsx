import UserAvatar from '../custom/CustomAvatar'

const UserProfileDetails = ({avatar, fullName, email}) => {
  return (
    <div
          className={`auth-details flex items-center gap-3 border rounded-md px-3 py-2 relative`}
        >
          <span className="absolute -top-[10px] left-[10px] bg-white text-xs text-zinc-600">
            sign in as
          </span>
          <div className="w-10 h-10 border rounded-full">
            <UserAvatar imgSrc={avatar} name={fullName} />
          </div>
          <div className="flex flex-col">
            <p className="text-[.9rem]">{fullName}</p>
            <p className="text-[.8rem] text-[#979797]">{email}</p>
          </div>
        </div>
  )
}

export default UserProfileDetails
