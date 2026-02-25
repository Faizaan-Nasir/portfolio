import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === '/' ? 'About' : location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1));
  return (
    <div className='navbar'>
      <Link to='/' className={active === 'About' ? 'nav-link-active' : 'nav-link'} onClick={() => setActive('About')} style={{ borderRight: '1px solid white' }}>About</Link>
      <Link to='/blog' className={active === 'Blog' ? 'nav-link-active' : 'nav-link'} onClick={() => setActive('Blog')} style={{ borderRight: '1px solid white' }}>Blog</Link>
      <Link to='/projects' className={active === 'Projects' ? 'nav-link-active' : 'nav-link'} onClick={() => setActive('Projects')} style={{ borderRight: '1px solid white' }}>Projects</Link>
      <Link to='/certificates' className={active === 'Certificates' ? 'nav-link-active' : 'nav-link'} onClick={() => setActive('Certificates')}>Certificates</Link>
    </div>
  );
}