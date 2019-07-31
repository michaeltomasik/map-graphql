import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

import GraphQLResultAwait from '../GraphQLResultAwait'

export default class ResultPage extends Component {
  render() {
    return (
      <Query query={ARTICLES_QUERY} variables={{ matchingString: this.props.match.params.matchingString }}>
        {({ data, loading, error, refetch }) => {
          if (loading || error) {
            return <GraphQLResultAwait  loading={loading} error={error} />
          }

          return (
            <Fragment>
              <h1>Results:</h1>
              <ul>{
                data.getArticles.items.map(article =>
                  <li key={article.link}>
                    <a href={article.link}>{article.title}</a>
                  </li>)
              }</ul>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const ARTICLES_QUERY = gql`
  query Articles($matchingString: String) {
    getArticles(matchingString: $matchingString){
        items {
          title
          link
        }
    }
  }
`