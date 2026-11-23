require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.USERNAMEDB}:${process.env.PASSWORDDB}@cluster0-gaxbw.mongodb.net/test?retryWrites=true&w=majority`;

const categoryOrder = ['Tv Series', 'Film', 'Tv Film', 'Commercial'];

module.exports = {
  getJobs: async values => {
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db('BarbaraDb');
      const output = await db
        .collection('WorkExperience')
        .find(values)
        .sort()
        .toArray();

      output.sort((a, b) => {
        if (a.category === b.category) {
          return new Date(b.date) - new Date(a.date);
        }
        return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
      });

      return output;
    } finally {
      await client.close();
    }
  },
};