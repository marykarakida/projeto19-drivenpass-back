# projeto19-drivenpass-back

## `Driven Pass API`
https://projeto-driven-pass.herokuapp.com

## `API Documentation`
https://projeto-driven-pass.herokuapp.com/api-docs/#/

## `Run locally`

Clone the project
```bash
  git clone https://github.com/marykarakida/projeto19-drivenpass-back
```

Go to the project directory

```bash
  cd projeto19-drivenpass-back/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npm prisma generate dev
```

Start the server

```bash
  npm run start
```

## `Environment Variables`

To run this project, you will need to add the following environment variables to your .env file
### PORT
- if not provided, 4000 is the default port
### DATABASE_URL (required)
- database connection string
- pgsql format: postgresql://[user[:password]@][netloc][:port][/dbname]
### SHADOW_DATABASE_URL 
- database connection string
- second, temporary database that is created and deleted automatically each time you run a development-focused command and is primarily used to detect problems such as schema drift
- pgsql format: postgresql://[user[:password]@][netloc][:port][/dbname]
### ACCESS_TOKEN_SECRET && REFRESH_TOKEN_SECRET && CRYPT_SECRET (required)
- secret key to hash/encrypt data
- as suggestion to generate key, run in your terminal:
```bash
  node 
  require("crypto").randomBytes(64).toString("hex")
```

## `Tests (Thunder Client)`
import `thunder-collection_drivenpass.json` and `thunder-environment_drivenpass.json` in thunderclient

### ENV VARIABLES IN THUNDERCLIENT
- accessToken
- refreshToken
- BASE_URL
