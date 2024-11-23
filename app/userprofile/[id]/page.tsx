
const UserProfile = ({params}:{params:{id:string}}) => {
    const {id} = params
  return (
    <div>
      <p>User Profile: {id}</p>
    </div>
  )
}

export default UserProfile
