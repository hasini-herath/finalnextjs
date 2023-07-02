import Test from "@models/service";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const tests = await Test.find({}).populate('creator')

        return new Response(JSON.stringify(tests), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 