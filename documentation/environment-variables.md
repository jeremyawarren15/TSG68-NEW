## Setting up environment variables

Environment variables allow us to be able to configure the app from a single file so that we can configure the app to run appropriately in different environments.

For right now, all that we have to worry about is setting up the environment variables file and create an entry for the database url so that our app can communicate with postgres.

Start by creating a file called `.env` in the root of your project.

Then you will want to open that file and add the following. Note that you will need to replace `USER` and `PASSWORD` with the username and password that you created in the [instructions for setting up postgres](./setup-postgres.md).

```
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/tsg68
```
