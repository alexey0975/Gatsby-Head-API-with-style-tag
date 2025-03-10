import * as React from "react";
import { Link } from 'gatsby';

import theme from '!raw-loader!!../styles/main.css';

const IndexPage = () => {
  return (
    <main className="page">
      <h1 className="heading">
        FOUC when using style tag with Gatsby Head API
      </h1>
      <p className="paragraph">
        First page with the main style theme
      </p>
      <Link to='/second' className="link"> Second page </Link>
    </main>
  )
}

export default IndexPage

export const Head = () => <>
  <style id='theme'>{theme}</style>
</>
