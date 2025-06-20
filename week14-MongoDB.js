require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

// URL‑encode each value in case it contains special characters
const user = encodeURIComponent(process.env.MONGODB_USER);
const pass = encodeURIComponent(process.env.MONGODB_PASS);
const db   = encodeURIComponent(process.env.MONGODB_DB);
const uri = `mongodb+srv://${user}:${pass}` +`@clustermynodeapp.plgopbp.mongodb.net/${db}` +`?retryWrites=true&w=majority&appName=ClusterMyNodeApp`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log("⏳ Starting connection attempt...");
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
