import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"


const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedin/>, path: ""},
    {icon: <FaYoutube/>, path: ""},
    {icon: <FaTwitter/>, path: ""},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((link, index) => {
            return (
                <Link className={iconStyles} key={index} href={link.path} >{link.icon}</Link>
            )
        })}
    </div>
  )
}

export default Socials