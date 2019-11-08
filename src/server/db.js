require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.USERNAMEDB}:${process.env.PASSWORDDB}@cluster0-gaxbw.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  getJobs: async values => {
    const clientPromise = MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const client = await Promise.resolve(clientPromise);
    const db = client.db("BarbaraDb");
    const output = await db
      .collection("WorkExperience")
      .find(values)
      .sort({ date: -1 })
      .toArray();
    client.close();
    return output;
  }
};
