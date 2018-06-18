import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Title from '../components/title'
import LeftSide from '../components/leftSide'
import RightSide from '../components/rightSide'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Title siteTitle={data.site.siteMetadata.title} currentOccupation='Software Developer' />
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
    <LeftSide siteTitle='leftSide' currentOccupation='leftSide' />
    <RightSide siteTitle='rightSide' currentOccupation='rightSide' />
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
