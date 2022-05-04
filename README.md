# MongoDB Exercises

In these exercises you will perform some async MongoDB database operations.

## Quickstart

### Install MongoDB

If you know you have MongoDB installed and how to start it, start it.

If you have any doubt at all as to whether you have it installed or how to tell,
run this:

```shell
; mongosh
# You should see some versions and info lines. Followed with something like
# test>
```

If you see the prompt, skip down to [Running the Script](#running-the-script)

If you get an error, then continue below.

```shell
# First, check whether you have mongodb running
; brew services info mongodb-community
# If you see 'Running: ✔', then skip down to 'Running the Script'
# If you don't see 'Running: ✔' then proceed to install MongoDB:

# Connect Brew to the MongoDB repository
; brew tap mongodb/brew
# This command should succeed silently.

# Install MongoDB Community Edition
; brew install mongodb-community@5.0
# You should see a lot of log lines, then:

# To start mongodb/brew/mongodb-community now and restart at login:
#   brew services start mongodb/brew/mongodb-community
# Or, if you don't want/need a background service you can just run:
#   mongod --config /usr/local/etc/mongod.conf

# Run this to start the service:
; brew services start mongodb/brew/mongodb-community
# It may take a few moments, then you should see:
# ==> Successfully started `mongodb-community`

# Finally, check you can check it is working by running the Mongo Shell:
; mongosh
# You should see some versions and info lines. Followed with something like
# test>
```

### Running the Script

```shell
; node main.js
# You should see something like:
Connecting to MongoDB...
If this takes ages and then fails, contact your coach for help.
Connection to MongoDB established successfully.
Deleting all records...
{ acknowledged: true, deletedCount: 3 }
Adding records...
{
  acknowledged: true,
  insertedId: new ObjectId("6271375a5928b870abbc3e51")
} {
  acknowledged: true,
  insertedId: new ObjectId("6271375a5928b870abbc3e52")
} {
  acknowledged: true,
  insertedId: new ObjectId("6271375a5928b870abbc3e53")
}
Getting all records...
[
  {
    _id: new ObjectId("6271375a5928b870abbc3e51"),
    title: 'Seeking Rat',
    number: '07800000000'
  },
  {
    _id: new ObjectId("6271375a5928b870abbc3e52"),
    title: 'Seeking Cat',
    number: '07800000001'
  },
  {
    _id: new ObjectId("6271375a5928b870abbc3e53"),
    title: 'Seeking Dog',
    number: '07800000002'
  }
]
Looks like those methods work!
Now:
1. Open this file.
2. Uncomment each of the below sections one by one.
3. Implement the functions to make them work.
4. Run the file.
5. Continue until everything is complete.
6. (Bonus) Anything else you wish you could do just with MongoDB, try to do that!.
```

Now, work through those steps.
