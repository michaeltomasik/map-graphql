import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import MapPage from './components/MapPage'
import ResultPage from './components/ResultPage'
import ContinentPage from './components/ContinentPage'

import 'tachyons'
import './index.css'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <div className="fl w-100 pl4 pr4">
          <Switch>
            <Route exact path="/" component={MapPage} />
            <Route path="/articles/:matchingString" component={ResultPage} exact />
            <Route path="/continent/:continentCode" component={ContinentPage} exact />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
