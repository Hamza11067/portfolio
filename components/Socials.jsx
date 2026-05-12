import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"


const socials = [
    {icon: <FaGithub/>, path: "https://github.com/Hamza11067"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/hamza-khalid-843781226/"},
    {icon: <FaYoutube/>, path: "https://www.youtube.com/@professorhamzakhalid"},
    {icon: <FaTwitter/>, path: "https://x.com/HamzaKhali13765"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((link, index) => {
            return (
                <Link target="_blank" className={iconStyles} key={index} href={link.path} >{link.icon}</Link>
            )
        })}
    </div>
  )
}

export default Socials