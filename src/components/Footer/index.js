import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    © {new Date().getFullYear()} Holman Gao
  </footer>
)

export default Footer
