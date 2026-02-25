export default function ProfileItem({ image, description, showMore }) {
  return (
    <div className={showMore ? 'profile-grid-expanded' : 'profile-grid'}>
      <img src={image} className='profile-item-image' alt='Profile Item' />
      <div className='profile-item-description'>{description}</div>
    </div>
  )
}