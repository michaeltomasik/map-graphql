import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import WorldMap from 'react-world-map'

import './MapPage.css'

class MapPage extends Component {
  constructor() {
    super();

    window.addEventListener('WorldMapClicked', (e) => {
      this.goToCountriesList(e.detail.clickedState);
    });
  }

  goToCountriesList(continentCode) {
    this.props.history.push(`/continent/${continentCode}`);
  }

  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <WorldMap />
      </div>
    )
  }
}

export default withRouter(MapPage)
