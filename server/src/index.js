const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const MapAPI = require('./MapAPI')

let countriesData = require('./data/countries.json');

const resolvers = {
  Query: {
    getArticles: async (_, { matchingString }, { dataSources }) => {
      return dataSources.map.getArticles(matchingString)
    },
    getContinent: async (_, { continentCode },__ ) => {
      return countriesData.data.continents.find(continent => continent.code === continentCode.toUpperCase());
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  dataSources: () => ({
    map: new MapAPI()
  }),
  context: {
    dataSources: { map: new MapAPI() },
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
