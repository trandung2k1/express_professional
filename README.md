## Using mongosh

1. Dowload mongosh

```js
https://www.mongodb.com/docs/mongodb-shell/
```

2. Open terminal check version

```js
mongosh --version
```

3. Start mongosh

```js
mongosh;
```

4. Show all databases

```js
show databases
show dbs
```

5. Use database

```js
use databaseName
```

6. Show collections, tables

```js
show tables
db.getCollectionNames()
show collections
```

7. Show fields

```js
Object.keys(db.posts.findOne());
```

8. Select fields

```js
db.posts.find({}, { _id: 0, title: 1, body: 1 });
```
