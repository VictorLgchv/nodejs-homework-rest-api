const { joiSchema, joiSchemaFavorite } = require("./contactValidationSchemas")
const { registerSchema, loginSchema } = require("./userValidationSchemas")

module.exports = {
  joiSchema,
  joiSchemaFavorite,
  registerSchema,
  loginSchema,
}