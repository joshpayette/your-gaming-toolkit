# Cloning PlanetScale's yourgamingtoolkit database for local use...

## Dump the database from PlanetScale

```bash
pscale database dump yourgamingtoolkit main
```

## Run the schema sorter script

Because of how imports work, the schemas must be imported before the data themselves. However, the tables are not named in this way by default. Running the below script will append the number 1 to the file name for any file that contains the word `schema`, ensuring it gets imported first.

```bash
sh rename-sql-schema.sh
```

## Import the database

The below example assumes your local database is named `yourgamingtoolkit`.

```bash
cat pscale/*.sql | mysql yourgamingtoolkit -u root -p
```

## Other useful commands

### Creating a new MYSQL database

```bash
# Connect to the MySQL server
mysql -u root -p

CREATE DATABASE yourgamingtoolkit;
CREATE USER 'ygtuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON yourgamingtoolkit.* TO 'ygtuser'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

### Dropping all tables in the database

Right-click all tables in MySQL Workbench and select DROP TABLES. This will provide the SQL statement to do so.
