export const swaggerDocument = {
    "openapi": "3.0.0",
    "info": {
      "title": "My Bank API Description",
      "description": "My Bank API Descprition",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:3000"
      }
    ],
    "paths": {
      "/accounts": {
        "post": {
          "summary": "Create new account.",
          "description": "Create a new account with received parameters",
          "requestBody": {
            "description": "Create a new account with received parameters",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountCreate"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Account created with sucess",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Account"
                  }
                }
              }
            },
            "400": {
              "description": "Error occurred"
            }
          }
        },
        "put": {
          "summary": "Update data exists account.",
          "description": "Update data exists account with received parameters",
          "requestBody": {
            "description": "Update data exists with received parameters",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Account"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Account update with sucess",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Account"
                  }
                }
              }
            },
            "400": {
              "description": "Error occurred"
            }
          }
        },
        "get": {
          "summary": "Returns an accounts list.",
          "description": "Get existing account description",
          "responses": {
            "200": {
              "description": "A JSON list of user names",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Account"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Error occurred"
            }
          }
        }
      },
      "/accounts/{id}": {
        "delete": {
          "summary": "Delete an account exists.",
          "description": "Delete an account exists",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "Account ID",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Account delete with sucess"
            },
            "400": {
              "description": "Error occurred"
            }
          }
        }
      },
      "/accounts/updateBalance": {
        "patch": {
          "summary": "Update account.balance exists account.",
          "description": "Update account balance exists account with received parameters",
          "requestBody": {
            "description": "Update account balance exists account with received parameters",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountBalance"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Account balance update with sucess",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Account"
                  }
                }
              }
            },
            "400": {
              "description": "Error occurred"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Account": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Joao da Silva"
            },
            "balance": {
              "type": "number",
              "example": 742.34
            }
          }
        },
        "AccountCreate": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "Joao da Silva"
            },
            "balance": {
              "type": "number",
              "example": 742.34
            }
          }
        },
        "AccountBalance": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": 1
            },
            "balance": {
              "type": "number",
              "example": 742.34
            }
          }
        }
      }
    }
  }