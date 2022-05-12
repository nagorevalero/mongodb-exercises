// In this script we will add and remove some records from MongoDB.

const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1');

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    console.log("If this takes ages and then fails, contact your coach for help.")
    await client.connect();
    console.log("Connection to MongoDB established successfully.");

    const database = client.db('makerslist');

    console.log("Deleting all records...");
    console.log(await deleteAllRecords(database));

    console.log("Adding records...");
    let rat = await addRecord(database, 'Seeking Rat', '07800000000');
    let cat = await addRecord(database, 'Seeking Cat', '07800000001');
    let dog = await addRecord(database, 'Seeking Dog', '07800000002');
    console.log(rat, cat, dog);

    console.log("Getting all records...");
    console.log(await getAllRecords(database));

    console.log("Looks like those methods work!");
    console.log("Now:");
    console.log("1. Open this file.")
    console.log("2. Uncomment each of the below sections one by one.");
    console.log("3. Implement the functions to make them work.");
    console.log("4. Run the file.");
    console.log("5. Continue until everything is complete.");
    console.log("6. (Bonus) Anything else you wish you could do just with MongoDB, try to do that!.");

    console.log("Finding record by id...");
    console.log(await findRecordById(database, rat.insertedId));

    console.log("Finding record by number...");
    console.log(await findRecordByNumber(database, '07800000001'));

    // console.log("Updating record by id...");
    // console.log(await updateRecordById(database, dog.insertedId, 'Seeking Dog', '07800000003'));

    // console.log("Deleting record by id...");
    // console.log(await deleteRecordById(database, cat.insertedId));

    // console.log("Getting all records...");
    // console.log(await getAllRecords(database));

    // console.log("Deleting records by number...");
    // console.log(await deleteRecordsByNumber(database, '07800000002'));

    // console.log("Getting all records...");
    // console.log(await getAllRecords(database));

    // console.log("Deleting all records...");
    // console.log(await deleteAllRecords(database));

    // console.log("Getting all records...");
    // console.log(await getAllRecords(database));
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

function deleteAllRecords(db) {
  return db.collection('adverts').deleteMany({});
}

function getAllRecords(db) {
  const adverts = db.collection('adverts');
  return adverts.find().toArray();
}

function addRecord(db, title, number) {
  const adverts = db.collection('adverts');
  return adverts.insertOne({
    title,
    number,
  });
}

function findRecordById(database, id) {
  const adverts = database.collection('adverts');
  return adverts.findOne({
    _id: id
  })
}

function findRecordByNumber(database, number) {
  const adverts = database.collection('adverts');
  return adverts.findOne({
    number: number
  })
}

function updateRecordById() {
  throw new Error("Not implemented");
}

function deleteRecordById() {
  throw new Error("Not implemented");
}

function deleteRecordsByNumber() {
  throw new Error("Not implemented");
}


