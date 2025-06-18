// Week15-CRUD1.js
const { MongoClient, ServerApiVersion } = require('mongodb');

// Make sure this URI has your encoded username/password and a default DB
const uri = "mongodb+srv://damilaretunjiajayi:WJr8WmZ1Uasq6nF8@clustermynodeapp.plgopbp.mongodb.net/AppDB?retryWrites=true&w=majority&appName=ClusterMyNodeApp";

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
  
      const all = await users.find().toArray();
      console.log("📋 All users:", all);
    } catch (err) {
      console.error("❌ Operation error:", err);
    } finally {
      await client.close();
    }
  }
  
  run();