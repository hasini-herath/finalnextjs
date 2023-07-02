import Test from "@models/service";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, type, name, message, gender, date, age } = await request.json();

    try {
        await connectToDB();
        const newTest = new Test({ 
            creator: userId, type, name, message, gender, date, age
        });

        await newTest.save();
        return new Response(JSON.stringify(newTest), { status: 201 })
    } catch (error) {
        return new Response(error.message,"Failed to create a new Meal Setup", { status: 500 });
    }
}