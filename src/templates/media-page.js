import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const MediaPageTemplate = ({
  mediaItems
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="content">
          {mediaItems.map(item => (
            <li className="is-size-5">
              {item.title}
            </li>
          ))}
        </div>
      </div>
    </div>
  </section>
)

MediaPageTemplate.propTypes = {
  mediaItems: PropTypes.array
}

const MediaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MediaPageTemplate
        mediaItems={frontmatter.mediaItems}
      />
    </Layout>
  )
}

MediaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MediaPage

export const MediaPageQuery = graphql`
  query MediaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        mediaItems {
          mediaItem
          link
          title
          preview
        }
      }
    }
  }
`
