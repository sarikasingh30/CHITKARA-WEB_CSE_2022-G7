
Commands for various tasks

1. mongosh

2. show dbs

3. use databasename

4. db.createCollection("collectionname")

5. db.collectionname

6. db.collectionname.insertOne({userObject})
    ```
        db.users.insertOne({"email":"a@b.com","password":"1234"})
    ```

7. db.collectionname.find()

8. db.collectionname.insertMany([{userObject},{userObject},{userObject}])

9. db.collectionname.find().sort({key: order})
    ```
        db.users.find().sort({"email": 1})
    ```
10. db.collectionname.find().limit(number)



