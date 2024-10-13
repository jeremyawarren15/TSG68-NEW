## Setting up Postgres

Start the postgres service.

> [!IMPORTANT]
> This will need to be run every time you restart your computer unless you set it up to run this service at startup

```
sudo service postgresql start
```

Switch to the default postgres user. This allows you to be able to configure the database.

```
sudo -i -u postgres
```

Open the PostgreSQL interactive terminal

```
psql
```

Now you are going to want to create your own user. Replace your_username and your_password with the username and password that you would like to use.

```
CREATE USER your_username WITH PASSWORD 'your_password';
```

You are now going to need to create the database and set the owner to the username you created in the previous step.

```
CREATE DATABASE tsg68 OWNER your_username;
```

Now you need to grant all of the appropriate permissions for this user.

```
GRANT ALL PRIVILEGES ON DATABASE tsg68 TO your_username;
```

Now exit the postgres interactive terminal

```
\q
```

Exit the postgres user and return to your default user account.

```
exit
```

Now you will need to connect the tsg68 database to your user. You will also be prompted for your password.

```
psql -U your_username -d tsg68
```
