export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 20,
      "maxItems": 35,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "pattern": "^\[A-ZÅÄÖ\]\[a-zåäö\]{2,10}",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "pattern": "^\[A-ZÅÄÖ\]\(\[a-zåäö\]{3,10}\)\( \[A-ZÅÄÖ\]\[a-zåäö\]{3,10}\){0,2}",
            "faker": "name.lastName",
          },
          "email": {
            "type": "string",
            "pattern": "^[a-z]{7,12}[0-9]{0,4}@(yahoo|gmail|hotmail)\\.(se|com|uk|de)",
            "faker": "internet.email",
          }
        },
        required: ['id', 'firstName', 'lastName', 'email']
      }
    }
  },
  required: ['users']
};
