import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
// The component AND the query need to be exported
import ContinentPage, { CONTINENT_QUERY } from './index';
import wait from 'waait';

const mocks = [
  {
    request: {
      query: CONTINENT_QUERY,
      variables: {
        continentCode: 'EU',
      },
    },
    result: {
      data: {
        getContinent: {
          name: 'EU',
          countries: [
            {
              "name": "Nepal",
              "code": "NP",
              "native": "नपल",
              "emoji": "🇳🇵"
            },
            {
              "name": "Oman",
              "code": "OM",
              "native": "عمان",
              "emoji": "🇴🇲"
            },
          ]
        },
      },
    },
  },
];

const props = {
  match: {
    params: {
      continentCode: 'EU',
    }
  }
}

describe('ContinentPage form test suite', () => {
  it('renders with data', async () => {
    const wrapper = mount((
      <MockedProvider mocks={mocks} addTypename={false}>
        <ContinentPage {...props} />
      </MockedProvider>
    ));
    // https://github.com/apollographql/react-apollo/issues/2719
    await wait(0);
    wrapper.update()

    expect(wrapper.debug()).toMatchSnapshot();
  });
});