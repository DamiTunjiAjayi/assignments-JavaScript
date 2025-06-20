// Week15-CRUD1.js
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');


// URL‑encode each value in case it contains special characters
const user = encodeURIComponent(process.env.MONGODB_USER);
const pass = encodeURIComponent(process.env.MONGODB_PASS);
const db   = encodeURIComponent(process.env.MONGODB_DB);
const uri = `mongodb+srv://${user}:${pass}` +`@clustermynodeapp.plgopbp.mongodb.net/${db}` +`?retryWrites=true&w=majority&appName=ClusterMyNodeApp`;

async function run() {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    
    });
  
    try {
      console.log("⏳ Connecting to MongoDB Atlas...");
      await client.connect();
  
      const users = client.db("AppDB").collection("users");
      const result = await users.insertOne({ name: "Alice", email: "alice@example.com", age: 30 });
      console.log("✅ Inserted user with _id:", result.insertedId);
  

        // 2. Fetch and print all users
      const all = await users.find().toArray();
      console.log("📋 All users:", all);
    } catch (err) {
      console.error("❌ Operation error:", err);
    } finally {
      await client.close();
    }
  }
  

run();