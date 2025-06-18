// Week15-CRUD1.js
const { MongoClient, ServerApiVersion } = require('mongodb');

// Make sure this URI has your encoded username/password and a default DB
const uri = "mongodb+srv://goodcat:nhffff7nyIS@clustermynodeapp.plgopbp.mongodb.net/AppDB?retryWrites=true&w=majority";

async function run() {
  // Create client and force TLS 1.2
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    tls: true,
    tlsMinimumVersion: "TLS1_2",
  });

  try {
    console.log("⏳ Connecting (forced TLS1.2)...");
    await client.connect();

    const db = client.db("AppDB");
    const users = db.collection("users");

    // 1. Add a user
    const newUser = { name: "Alice", email: "alice@example.com", age: 30 };
    const result = await users.insertOne(newUser);
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
