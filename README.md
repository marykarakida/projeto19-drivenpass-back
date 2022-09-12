<div align="center">
  <a href="https://github.com/LeonMesquita/projeto-17-linkr-front">
    <img src="https://images.emojiterra.com/twitter/512px/1f355.png" alt="JavaScriptLogo" width="100">
  </a>

  <h3 align="center">Valex</h3>
  <div align="center">
    18th Project of Driven Education
    <br />
  </div>
  <div align="center">
    An API Project to manage benefit cards
    <br />
  </div>
</div>

<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="30px" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px" />


  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<!-- Table of Contents -->

<div align="center" style="margin-top: 50px">
    <h1> Project Guide</h1>
</div>

## Features

-   Get the card balance and transactions
-   Create cards
-   Activate / Block / Unlock a card
-   Recharge a card
-   Make card payments with online payment option

</br>

<div align="center" >
    <h1> API Reference</h1>
</div>

<details style="margin-bottom: 10px">
<summary style="font-size: 20px; color: #7E7E7E">TL;DR</summary>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /cards/create</summary>

Header:

```json
{
    "x-api-key": string
}
```

Body:

```json
{
    "employeeId": integer,
    "cardType": string
}
```

Response:

```json
{
    "cardId": 1,
    "number": "1111 1111 1111 1111",
    "cardholderName": "NAME N NAME",
    "creditCardCVC": "111",
    "expirationDate": "01/27"
}
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">PATCH</span> /cards/activate</summary>
Body:

```json
{
    "employeeId": integer,
    "secutiryCode": string,
    "password": string
}
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /cards/recharge</summary>

Header:

```json
{
    "x-api-key": string
}
```

Body:

```json
{
    "cardId": integer,
    "value": integer,
}
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">PATCH</span> /cards/block</summary>

Body:

```json
{
    "cardId": integer,
    "password": string
}
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">PATCH</span> /cards/unlock</summary>

Body:

```json
{
    "cardId": integer,
    "password": string
}
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #F0F170">GET</span> /cards/statement/:cardId</summary>

Params:

```json
{
    "cardId": integer
}
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /purchases/pos/:cardId</summary>

Body:

```json
{
    "cardId": integer,
    "businessId": integer,
    "cardPassword": string,
    "value": integer
    // value: use 4000 instead of 40.00
}
```

</details>

</details>

#

### Create a card

```http
POST /cards/create
```

#### Request:

| Body         | Type      | Description                        |
| :----------- | :-------- | :--------------------------------- |
| `employeeId` | `integer` | **Required**. user Id              |
| `cardType`   | `string`  | **Required**. type of card benefit |

`Valid types: [groceries, restaurant, transport, education, health]`

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `x-api-key` | `string` | **Required**. api key |

####

</br>

#### Response:

```json
{
    "cardId": 1,
    "number": "1111 1111 1111 1111",
    "cardholderName": "NAME N NAME",
    "creditCardCVC": "111",
    "expirationDate": "01/27"
}
```

#

### Activate a card

```http
PATCH /cards/activate
```

#### Request:

| Body           | Type      | Description                 |
| :------------- | :-------- | :-------------------------- |
| `employeeId`   | `integer` | **Required**. employeeId    |
| `securityCode` | `string`  | **Required**. card cvv      |
| `password`     | `string`  | **Required**. card password |

`Password length: 4`

`Password pattern: only numbers`

`CVV max length: 3`

`CVV pattern: only numbers`

#

### Recharge a card

```http
POST /cards/recharge
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `x-api-key` | `string` | **Required**. api key |

####

| Body     | Type      | Description                   |
| :------- | :-------- | :---------------------------- |
| `cardId` | `integer` | **Required**. card Id         |
| `value`  | `integer` | **Required**. recharge amount |

#

### Block a card

```http
PATCH /cards/block
```

#### Request:

| Body       | Type      | Description                 |
| :--------- | :-------- | :-------------------------- |
| `cardId`   | `integer` | **Required**. card Id       |
| `password` | `string`  | **Required**. card password |

`Password length: 4`

`Password pattern: only numbers`

#

### Unlock a card

```http
PATCH /cards/unlock
```

#### Request:

| Body       | Type      | Description                 |
| :--------- | :-------- | :-------------------------- |
| `cardId`   | `integer` | **Required**. card Id       |
| `password` | `string`  | **Required**. card password |

`Password length: 4`

`Password pattern: only numbers`

#

### Get card balance

```http
GET /cards/statement/:cardId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card Id |

### Response:

```json
{
"balance": 35000,
"transactions": [
{ "id": 1, "cardId": 1, "businessId": 1, "businessName": "DrivenEats", "timestamp": "22/01/2022", "amount": 5000 },{...},{...}
],
"recharges": [
{ "id": 1, "cardId": 1, "timestamp": "21/01/2022", "amount": 40000 },{...},{...}
]
}
```

#

### Card payments

```http
POST /purchases/pos/
```

#### Request:

| Body           | Type      | Description                        |
| :------------- | :-------- | :--------------------------------- |
| `cardId`       | `integer` | **Required**. cardId               |
| `businessId`   | `integer` | **Required**. card expiration date |
| `cardPassword` | `string`  | **Required**. card password        |
| `value`        | `integer` | **Required**. payment value        |

`Value: must be without period, like '4000' instead of '40.00'`

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://YOUR-USER-NAME:YOUR-PASSWORD@Hostname:5432/DatabaseName`

`PORT = number `

`CRYPTR_SECRET = any string`

#

## Run Locally

Clone the project

```bash
  git clone https://github.com/DarlonGomes/projeto18-valex
```

Go to the project directory

```bash
  cd projeto18-valex/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  cd valex-setup/
```

```bash
  bash ./create-database
```

```bash
  cd ../../..
```

Start the server

```bash
  npm run start
```

</br>

#

## Lessons Learned

-   API Architecture
-   TypeScript interfaces
-   TypeScript types
-   Classes
-   Constructor
-   Object Literals

#

## Acknowledgements

-   [Badges for Github](https://dev.to/envoy_/150-badges-for-github-pnk)
-   [README inspiration](https://github.com/andrezopo/projeto18-valex#readme)

#

## Authors

-   Darlon Gomes is a student at Driven Education and is putting effort into switch careers. Nowadays he works with Fine Woodworking
    looking forward to become a Fullstack Dev.
    <br/>
