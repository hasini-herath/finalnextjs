import Meal from "@models/mealsetup";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, type, plan, ingredients, overview } = await request.json();

    try {
        await connectToDB();
        const newMeal = new Meal({ 
            creator: userId, type, plan, ingredients, overview
        });

        await newMeal.save();
        return new Response(JSON.stringify(newMeal), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Meal Setup", { status: 500 });
    }
}