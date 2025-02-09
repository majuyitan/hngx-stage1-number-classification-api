# **HNG12 Stage 1 Number Classification API**

## Overview

This API classifies numbers based on their mathematical properties and returns a fun fact using the [Numbers API](http://numbersapi.com/).  
It checks whether the number is prime, perfect, an Armstrong number, even/odd and calculates the sum of all its digits. It also gives a fun fact about the number.

## Installation & Setup

### Prerequisites
    Ensure you have **Node.js** installed on your system.

### Steps
    1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <project-folder>
    ```

    2. Install dependencies:
    ```sh
    pnpm install
    ```
    *(Ensure you have [pnpm](https://pnpm.io/) installed, or use `npm install` instead.)*

    3. Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    NUMBERS_API_URL=<numbers_api_url>
    LIVE_URL=http://localhost:<port>
    ```
    *(Modify values as needed for production.)*

    4. Start the server:
    ```sh
    pnpm start
    ```
    The server will start and listen on the specified port.

## API Endpoints
### **GET** `/api/classify-number?number=<your_number>`  
Example:  
```bash
https://hngx-stage1-number-classification-api-qc75.onrender.com/api/classify-number?number=401

### 1. Root Endpoint
    - **URL:** `/`
    - **Method:** `GET`
    - **Response:**
    ```json
```

## Tech Stack
- Node.js (Express.js for routing)
- Render (for deployment)
- Numbers API (for fun facts)


### Response Format (200 OK):
```json
{
    "number": 401,
    "is_prime": true,
    "is_perfect": false,
    "properties": [
        "odd"
    ],
    "digit_sum": 5,
    "fun_fact": "401 is the number of connected planar Eulerian graphs with 9 vertices."
}
}
```
### Response Format (400 Bad Request):
```json
{
    "number": "alphabet",
    "error": true
}
```

##  **Installation & Setup**  

### **Clone the Repository**  
```sh
git clone https://github.com/majuyitan/hngx-stage1-number-classification-api.git  
cd hngx-stage1-number-classification-api  
```

### **Install Dependencies**  
```sh
npm install
```

### **Run the Server**  
```sh
node index.js
```
Server should now be running at `http://localhost:3000/`

### **Test the API**
Use tools like Postman or your browser:
```sh
http://localhost:3000/api/classify-number?number=371
```


## **Deployment**  
This project is hosted on **Render**. The production API is accessible at:  
https://hngx-stage0-public-api-2kgx.onrender.com/

## Hire Node.js Developers
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
