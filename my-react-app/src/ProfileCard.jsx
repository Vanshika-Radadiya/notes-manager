import './ProfileCard.css'

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img
        src={props.imageUrl}
        alt={props.name}
        className="profile-img"
      />

      <h2 className="profile-name">
        {props.name}
      </h2>

      <h4 className="profile-role">
        {props.role}
      </h4>

      <p className="profile-desc">
        {props.description}
      </p>
    </div>
  )
}

export default ProfileCard