import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class MediaPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Solidware in Media</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <a 
                  href={post.frontmatter.link}
                  target='_blank'
                >
                  <div
                    className="content"
                    style={{ border: '1px solid #333', padding: '2em 4em' }}
                    key={post.id}
                  >
                    <p>
                      {post.frontmatter.title}
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

MediaPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const mediaPageQuery = graphql`
  query MediaPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: {mediaName: { glob: "*"}} },
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            link
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
