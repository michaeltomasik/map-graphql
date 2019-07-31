const { RESTDataSource } = require("apollo-datasource-rest");

class MapAPI extends RESTDataSource {
  constructor() {
    super();
    // https://github.com/apollographql/apollo-server/issues/2240
    // https://github.com/apollographql/apollo-server/issues/2561
    this.initialize({});
    this.baseURL = "https://www.googleapis.com/customsearch/v1";
  }

  async getArticles(matchingString) {
    const articles = await this.get('', {
      q: matchingString,
      key: process.env.Key,
      cx: '004399504627790727017:nc67yhqclkg',
    });

    return articles;
  }
}

module.exports = MapAPI;