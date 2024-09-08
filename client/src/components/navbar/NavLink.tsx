import { Link } from 'react-router-dom'

interface IProps {
  to: string
  content: string
  active: boolean
}

const NavLink = ({ to, content, active }: IProps) => {
  return (
    <Link to={to} className={`relative outline-none ${active ? 'text-secondary font-semibold after:content-[ ] after:absolute after:top-full after:left-0 after:mt-2 after:w-full after:h-[2px] after:bg-secondary' : 'hover:text-secondary hover:font-semibold hover:after:content-[ ] hover:after:absolute hover:after:top-full hover:after:left-0 hover:after:mt-2 hover:after:w-full hover:after:h-[2px] hover:after:bg-secondary'}`}>
      {content}
    </Link>
  )
}

export default NavLink