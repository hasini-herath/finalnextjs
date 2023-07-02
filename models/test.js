import { Schema, model, models } from 'mongoose';

const TestSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  type: {
    type: String,
    required: [true, 'MealType is required.'],
  },
  name: {
    type: String,
    required: [true, 'MealPlan is required.'],
  },
  message: {
    type: String,
    required: [true, 'MealIngredients is required.'],
  },
  gender: {
    type: String,
    required: [true, 'MealIngredients is required.'],
  },
  date: {
    type: String,
    required: [true, 'MealIngredients is required.'],
  },
  age: {
    type: String,
    required: [true, 'MealIngredients is required.'],
  },

});

const Test = models.Test || model('Test', TestSchema);

export default Test;