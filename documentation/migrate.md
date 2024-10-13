## Migrating your database

Before your app can use the database, you will need to make sure that it has all the tables it needs to work. Run the following command to make sure that your database has all of the required tables.

```
npx prisma migrate deploy
```

This will only work if you have successfully [connected your database with your environment variables](./environment-variables.md)
