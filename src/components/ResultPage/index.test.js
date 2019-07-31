import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
// The component AND the query need to be exported
import ResultPage, { ARTICLES_QUERY } from './index';
import wait from 'waait';

const mocks = [
  {
    request: {
      query: ARTICLES_QUERY,
      variables: {
        matchingString: 'UK',
      },
    },
    result: {
      data: {
        getArticles: {
          items: [
            {
              "link": "www.Nepal.com",
              "title": "NP",
            },
            {
              "link": "www.test.com",
              "title": "test",
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
      matchingString: 'UK',
    }
  }
}

describe('ResultPage form test suite', () => {
  it('renders with data', async () => {
    const wrapper = mount((
      <MockedProvider mocks={mocks} addTypename={false}>
        <ResultPage {...props} />
      </MockedProvider>
    ));
    // https://github.com/apollographql/react-apollo/issues/2719
    await wait(0);
    wrapper.update()

    expect(wrapper.debug()).toMatchSnapshot();
  });
});