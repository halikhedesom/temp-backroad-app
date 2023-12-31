import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul class="nav-links" id="nav-links">
           {
            pageLinks.map((linkItem)=> {
                return(
                <li>
                    <a key={linkItem.id} href={linkItem.href} class="nav-link"> {linkItem.text} </a>
                </li>)
    
            })
           } 

        </ul>

        <ul class="nav-icons">
           {
                socialLinks.map((slinks) => {
                    return(
                        <li>
                            <a key={slinks.id} href={slinks.href} target="_blank" rel="noreferrer" class="nav-icon"
                            ><i class={"fab " + slinks.icon}></i
                            ></a>
                        </li>                     
                    )
                })
           }
        </ul>
      </div>
    </nav>


    </div>
  )
}

export default Navbar