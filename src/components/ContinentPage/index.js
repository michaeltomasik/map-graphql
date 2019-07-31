import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { ListGroup } from 'react-bootstrap'

import GraphQLResultAwait from '../GraphQLResultAwait'
import './ContinentPage.css'

export default class ContinentPage extends Component {
  goToCountriesList(continentCode) {
    this.props.history.push(`/articles/${continentCode}`);
  }

  render() {
    return (
      <Query query={CONTINENT_QUERY} variables={{ continentCode: this.props.match.params.continentCode }}>
        {({ data, loading, error, refetch }) => {
          if (loading || error) {
            return <GraphQLResultAwait loading={loading} error={error} />
          }

          return (
            <Fragment>
              <h1>Country: {data.getContinent.name}</h1>
              <ListGroup>{
                data.getContinent.countries.map(countryObj =>
                  <ListGroup.Item
                    action
                    as="li"
                    variant="info"
                    key={countryObj.name}
                    className="country"
                    onClick={() => { this.goToCountriesList(countryObj.name) }}>{countryObj.name}</ListGroup.Item>)
              }</ListGroup>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const CONTINENT_QUERY = gql`
  query Continent($continentCode: String) {
    getContinent(continentCode: $continentCode){
        name
        countries {
          name,
        }
    }
  }
`