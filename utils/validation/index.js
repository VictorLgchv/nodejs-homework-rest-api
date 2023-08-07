const { joiSchema, joiSchemaFavorite } = require("./contactValidationSchemas")
const { registerSchema, loginSchema, verifyEmailSchema } = require("./userValidationSchemas")

module.exports = {
  joiSchema,
  joiSchemaFavorite,
  registerSchema,
  loginSchema,
  verifyEmailSchema,
}