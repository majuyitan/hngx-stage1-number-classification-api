# **HNG12 Stage 1 Number Classification API**

## Overview

This API classifies numbers based on their mathematical properties and returns a fun fact using the [Numbers API](http://numbersapi.com/).  
It checks whether the number is prime, perfect, an Armstrong number, even/odd and calculates the sum of all its digits. It also gives a fun fact about the number.

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
http://localhost:3000/api/classify-number?number=401
```

## Tech Stack
- Node.js (Express.js for routing)
- Render (for deployment)
- Numbers API (for fun facts)

## **Deployment**  
This project is hosted on **Render**. The production API is accessible at:  
https://hngx-stage1-number-classification-api-qc75.onrender.com/api/classify-number?number=401

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

```

## Hire Node.js Developers
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
