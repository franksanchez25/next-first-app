import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from '../active-link/ActiveLink';




export const Navbar = () => {

  const navItems =  [
    { path:'/about', label:'About' },
    { path:'/pricing', label:'Pricing' },
    { path:'/contact', label:'Contact' }
  ]

  return (
    <nav className=" flex bg-blue-700 opacity-80 p-2 m-2 rounded gap-3">
       <Link href='/'> 
       <HomeIcon className=" mr-2" size={24} />      
        <span>Home</span>
       </Link>

        <div className="flex flex-1"></div>

        { 
          navItems.map( (items)=> (
          <ActiveLink key={items.path} {...items} />
          ))
        }

    </nav>
  )
}
