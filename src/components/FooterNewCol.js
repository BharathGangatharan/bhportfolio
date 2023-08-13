import React from 'react'
import './FooterNew.css'
import { Link } from 'react-router-dom';

const FooterNewCol = ({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) => {
  return (
    <div className='FooterCol__Container'>
        <h2 className="Footer__heading">{heading}</h2>
        <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
               <li className="nnav-item">
                <Link activeClass="active" to={item.path} smooth={true} offset={-85} duration={10}>{item.title}</Link>
              </li>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterNewCol;