import * as React from "react";
import { Link } from 'gatsby';

import theme from '!!raw-loader!../../styles/other.css';

const IndexPage = () => {
  return (
    <main className="page">
      <h1 className="heading">
        FOUC when using style tag with Gatsby Head API
      </h1>
      <p className="paragraph">
        Second page with other style theme
      </p>
      <Link to='/' className="link"> First page </Link>
    </main>
  )
}

export default IndexPage

export const Head = () => <>
  <style id='theme'>{theme}</style>
</>