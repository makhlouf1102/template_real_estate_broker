import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

const iconsStyle = {
    size: 18,
    round: true,
    color: '#000',
    hoverColor: '#fff',
    hoverBackgroundColor: '#000',
    hoverBorderColor: '#000',
    hoverBorderWidth: '0',
    hoverBorderStyle: 'none',
    hoverTextDecoration: 'none',
  }
  

export const socialMedia = [
    {
        title: 'Email',
        link: 'mailto:info@yourwebsite.com',
        icon: <FaEnvelope size={iconsStyle.size} />
    },
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/',
        icon: <FaFacebookF size={iconsStyle.size} />
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/',
        icon: <FaInstagram size={iconsStyle.size} />
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/',
        icon: <FaLinkedinIn size={iconsStyle.size} />
    },
]

