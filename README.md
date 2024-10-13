## Getting Started

This project uses postgres for it's database. You can find instructions for how to install the proper version of postgres on Linux and set it up to work properly with this project here.

- [Installing Postgres](documentation/install-postgres.md)
- [Setting up Postgres](documentation/setup-postgres.md)
- [Setting up environment variables](documentation/environment-variables.md)
- [Migrate your database](documentation/migrate.md)
- [Running Prisma Studio]()

To run the project locally, you are going to need to install [bun](https://bun.sh/docs/installation). As of the writing of this documentation, the required version is 1.1.30, which you can install with this command.

```
curl -fsSL https://bun.sh/install | bash -s "bun-v1.1.30"
```

Once that has installed, you will want to install the packages. If you are familiar with node, bun should be straightforward. You still add packages to the package.json. You can install all of the required packages by running this command.

```
bun install
```

After the packages have successfully installed, you are going to want to run the following command to start the development server. There is a chance that if you did not follow the previous steps that you will encounter an error. Follow the instructions on the error and make sure you have completed all of the necessary steps in this documentation.

```
bun dev
```

Now you should be able to open [http://localhost:3000](http://localhost:3000) in your web browser to view the app.
