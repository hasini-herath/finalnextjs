import Meal from "@models/meal";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, type, name, message, gender, date, age } = await request.json();

    try {
        await connectToDB();
        const newMeal = new Meal({ 
            creator: userId, type, name, message, gender, date, age
        });

        await newMeal.save();
        return new Response(JSON.stringify(newMeal), { status: 201 })
    } catch (error) {
        return new Response(error.message,"Failed to create a new Meal Setup", { status: 500 });
    }
}