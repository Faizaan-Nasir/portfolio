export default function ProfileLink({ image, link }) {
  return (
    <div className='profile-links' onClick={() => { window.open(link) }}>
      <img src={image} alt='Profile Link' />
    </div>
  )
}