import { Schema, model, models } from 'mongoose';

const MealSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  type: {
    type: String,
    required: [true, 'MealType is required.'],
  },
  plan: {
    type: String,
    required: [true, 'MealPlan is required.'],
  },
  ingredients: {
    type: String,
    required: [true, 'MealIngredients is required.'],
  },
  overview: {
    type: String,
    required: [true, 'MealOverview is required.'],
  },
  seen: {
    type: String,
    required: [true, 'seen is required.'],
  },
  date: {
    type: String,
    required: [true, 'date is required.'],
  },
  gender: {
    type: String,
    
  },

});

const Meal = models.Meal || model('Meal', MealSchema);

export default Meal;