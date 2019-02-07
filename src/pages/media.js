import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class MediaPage extends React.Component {
  render() {

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Solidware in Media</h1>
            </div>
            this is media page
          </div>
        </section>
      </Layout>
    )
  }
}
