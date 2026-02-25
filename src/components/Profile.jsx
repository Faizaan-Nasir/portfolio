import { useState, useEffect } from 'react';
import Email from '../assets/Email.png';
import Location from '../assets/Location.png';
import GitHub from '../assets/GitHub.png';
import LinkedIn from '../assets/LinkedIn.png';
import MoreDetails from '../assets/MoreDetails.png';
import ProfilePicture from '../assets/ProfilePicture.png';
import ResumeButton from './ResumeButton';
import ProfileItem from './ProfileItem';
import ProfileLink from './ProfileLink';

export default function Profile({ client }) {
    const [showMore, setShowMore] = useState(false);
    const [resume, setResume] = useState([]);
    useEffect(() => {
        client.getEntries({ content_type: 'resume' })
            .then((response) => setResume(response.items))
            .catch(console.error);
    }, [client]);
    return (
        <div className='profile'>
            <img src={MoreDetails} alt='More Details' className='more-details' onClick={() => { setShowMore(!showMore) }} />
            <div className='profile-mobile-spacer'>
                <img src={ProfilePicture} alt='Profile' className='profile-picture' />
                <h1 className='name'>Faizaan Nasir</h1>
            </div>
            {/* <hr className='hr-profile' /> */}
            <ResumeButton showMore={showMore} link={resume.length > 0 ? resume[0].fields.resumePdf.fields.file.url : ''} />
            {/* <hr className='hr-profile' /> */}
            <div className='profile-item-container'>
                <ProfileItem image={Email} description={'faizaannasir06@gmail.com'} showMore={showMore} />
                <ProfileItem image={Location} description={'Bengaluru, Karnataka, India'} showMore={showMore} />
            </div>
            <div className={showMore ? 'profile-links-container-expanded' : 'profile-links-container'}>
                <ProfileLink image={GitHub} link='https://github.com/Faizaan-Nasir' />
                <ProfileLink image={LinkedIn} link='https://www.linkedin.com/in/faizaan-nasir/' />
            </div>
        </div>
    )
}