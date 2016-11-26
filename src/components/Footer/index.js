import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    © {new Date().getFullYear()} Holman Gao
    {' '}| <a href='/'>Home</a>
    {' '}| <a href='https://golmansax.com/portfolio'>Portfolio</a>
    {' '}| <a href='https://golmansax.com/blog'>Blog</a>
    {' '}| <a href='https://github.com/golmansax' target='_blank'>Github</a>
    {' '}| <a href='https://twitter.com/golmansax' target='_blank'>Twitter</a>
  </footer>
)

export default Footer
