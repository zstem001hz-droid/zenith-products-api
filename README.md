# Zenith Products API

A RESTful API for managing product inventory for Zenith, a modern e-commerce platform. Built with Node.js, Express, and MongoDB.

---

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

---

## Project Structure

```
zenith-products-api/
├── config/
│   └── connection.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file using `.env.example` as a template
4. Add your MongoDB Atlas connection string as `MONGO_URI`
5. Run `nodemon server.js`

---

## Environment Variables

| Variable  | Description                     |
| --------- | ------------------------------- |
| MONGO_URI | MongoDB Atlas connection string |
| PORT      | Port number (default: 3001)     |

---

## API Endpoints

| Method | Endpoint          | Description                                  |
| ------ | ----------------- | -------------------------------------------- |
| POST   | /api/products     | Create a new product                         |
| GET    | /api/products     | Retrieve all products with advanced querying |
| GET    | /api/products/:id | Retrieve a single product by ID              |
| PUT    | /api/products/:id | Update a product by ID                       |
| DELETE | /api/products/:id | Delete a product by ID                       |

---

## Usage Examples

### Create a Product

```http
POST /api/products
Content-Type: application/json

{
  "name": "Mechanical Keyboard",
  "description": "Tenkeyless mechanical keyboard with RGB backlighting",
  "price": 149.99,
  "category": "Electronics",
  "inStock": true,
  "tags": ["keyboard", "mechanical", "rgb"]
}
```

### Get All Products

```http
GET /api/products
```

### Get All Products with Advanced Querying

```http
GET /api/products?category=Electronics&minPrice=100&maxPrice=400&sortBy=price_asc&page=1&limit=10
```

### Query Parameters

| Parameter | Description                    | Example                                     |
| --------- | ------------------------------ | ------------------------------------------- |
| category  | Filter by category             | `?category=Electronics`                     |
| minPrice  | Filter by minimum price        | `?minPrice=100`                             |
| maxPrice  | Filter by maximum price        | `?maxPrice=500`                             |
| sortBy    | Sort results                   | `?sortBy=price_asc` or `?sortBy=price_desc` |
| page      | Page number (default: 1)       | `?page=2`                                   |
| limit     | Results per page (default: 10) | `?limit=5`                                  |

### Get a Single Product

```http
GET /api/products/:id
```

### Update a Product

```http
PUT /api/products/:id
Content-Type: application/json

{
  "price": 249.99,
  "inStock": false
}
```

### Delete a Product

```http
DELETE /api/products/:id
```

---

## Testing

All endpoints can be tested using [Postman](https://www.postman.com). Set the base URL to `http://localhost:3001`.

---

## References

- [Mongoose Docs: Connections](https://mongoosejs.com/docs/connections.html)
- [Mongoose Docs: Schema Validation](https://mongoosejs.com/docs/validation.html)
- [Mongoose Docs: SchemaTypes](https://mongoosejs.com/docs/schematypes.html)
- [Mongoose Docs: Model.create()](<https://mongoosejs.com/docs/api/model.html#Model.create()>)
- [Mongoose Docs: Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
- [Mongoose Docs: Query.prototype.skip()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.skip()>)
- [Mongoose Docs: Query.prototype.limit()](<https://mongoosejs.com/docs/api/query.html#Query.prototype.limit()>)
- [Mongoose Docs: Queries](https://mongoosejs.com/docs/queries.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)

---

## Reflection

Building the Zenith Products API reinforced the value of modular application architecture — separating database connection logic, schema definitions, and route handlers into distinct files made the codebase easier to reason about and debug at each stage. The most challenging part was implementing the advanced querying endpoint, which required dynamically building a Mongoose query object based on incoming request parameters. This approach — constructing the filter, sort, and pagination logic conditionally — demonstrated how concepts like comparison operators (`$gte`, `$lte`), `.sort()`, `.skip()`, and `.limit()` work together in a real API context. Securing credentials with environment variables and including a clean `.gitignore` from the first commit reflects professional development practices that protect sensitive data throughout the entire development lifecycle.
