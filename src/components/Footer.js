import React from 'react'

import { pageLinks, socialLinks } from '../data'

function Footer() {
  return (
    <div>
        <footer className="section footer">
        <ul class="footer-links">

            {
                pageLinks.map((link) => {
                    return(
                        <li key={link.id}>
                            <a href={link.href} class="footer-link">{link.text}</a>
                        </li>
                    )
                })
            }
        </ul>
        <ul class="footer-icons">

            {
                socialLinks.map((slink) => {
                    return (
                        <li key={slink.id}>
                        <a href={slink.href} target="_blank" rel="noreferrer" class="footer-icon"><i class={'fab '+slink.icon}></i></a>
                        </li>            

                    )
                })

            }   
        </ul>
        <p class="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date"></span> all rights reserved
        </p>
        </footer>
    </div>
  )
}

export default Footer