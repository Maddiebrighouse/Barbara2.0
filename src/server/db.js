require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.USERNAMEDB}:${process.env.PASSWORDDB}@cluster0-gaxbw.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  getJobs: async values => {
    const clientPromise = MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const order = [ "Tv Series", "Film", "Tv Film", "Commercial"]
    const client = await Promise.resolve(clientPromise);
    const db = client.db("BarbaraDb");
    const output = await db
      .collection("WorkExperience")
      .find(values).sort()
      .toArray()
    client.close();
    output.sort(
      function(a,b){
        if (a.category == b.category){
          return new Date(b.date) - new Date(a.date)
        } else {
          return order.indexOf(a.category) - order.indexOf(b.category)
        }
      }
    )
    return output;
  }
};
