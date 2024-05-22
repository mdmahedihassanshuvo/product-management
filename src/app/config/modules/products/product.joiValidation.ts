import Joi from "joi";

const variantSchema = Joi.object({
  type: Joi.string().trim().required().messages({
    "string.base": '"Type" should be a text string.',
    "string.empty": '"Type" cannot be an empty field.',
    "any.required": '"Type" is a required field.',
  }),
  value: Joi.string().trim().required().messages({
    "string.base": '"Value" should be a text string.',
    "string.empty": '"Value" cannot be an empty field.',
    "any.required": '"Value" is a required field.',
  }),
});

const inventorySchema = Joi.object({
  quantity: Joi.number().required().messages({
    "number.base": '"Quantity" should be a number.',
    "any.required": '"Quantity" is a required field.',
  }),
  inStock: Joi.boolean().required().messages({
    "boolean.base": '"In Stock" should be a boolean value.',
    "any.required": '"In Stock" is a required field.',
  }),
});

const productJoiSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    "string.base": '"ID" should be a text string.',
    "string.empty": '"ID" cannot be an empty field.',
    "any.required": '"ID" is a required field.',
  }),
  name: Joi.string().trim().required().messages({
    "string.base": '"Name" should be a text string.',
    "string.empty": '"Name" cannot be an empty field.',
    "any.required": '"Name" is a required field.',
  }),
  description: Joi.string().trim().required().messages({
    "string.base": '"Description" should be a text string.',
    "string.empty": '"Description" cannot be an empty field.',
    "any.required": '"Description" is a required field.',
  }),
  price: Joi.number().required().messages({
    "number.base": '"Price" should be a number.',
    "any.required": '"Price" is a required field.',
  }),
  category: Joi.string().trim().required().messages({
    "string.base": '"Category" should be a text string.',
    "string.empty": '"Category" cannot be an empty field.',
    "any.required": '"Category" is a required field.',
  }),
  tags: Joi.array().items(Joi.string().trim()).required().messages({
    "array.base": '"Tags" should be an array of text strings.',
    "any.required": '"Tags" is a required field.',
  }),
  variants: Joi.array().items(variantSchema).required().messages({
    "array.base": '"Variants" should be an array of variant objects.',
    "any.required": '"Variants" is a required field.',
  }),
  inventory: inventorySchema.required().messages({
    "any.required": '"Inventory" is a required field.',
  }),
});

const orderJoiSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    "string.base": '"Email" should be a text string.',
    "string.email": '"Email" must be a valid email address.',
    "string.empty": '"Email" cannot be an empty field.',
    "any.required": '"Email" is a required field.',
  }),
  productId: Joi.string().trim().required().messages({
    "string.base": '"Product ID" should be a text string.',
    "string.empty": '"Product ID" cannot be an empty field.',
    "any.required": '"Product ID" is a required field.',
  }),
  price: Joi.number().required().messages({
    "number.base": '"Price" should be a number.',
    "any.required": '"Price" is a required field.',
  }),
  quantity: Joi.number().required().messages({
    "number.base": '"Quantity" should be a number.',
    "any.required": '"Quantity" is a required field.',
  }),
});

// Exporting the Joi schemas
export const joiValidationSchema = {
  productJoiSchema,
  orderJoiSchema,
};
