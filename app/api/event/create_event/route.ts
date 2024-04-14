import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        await createEvent(); // Call the function that creates the event
        return NextResponse.json({
            msg: 'true'
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error();
    }
}

async function createEvent() {
    try {
        await prisma.event.create({
            data: {
                title: "farewell",
                venue: "pitampura",
                private: true,
                visibilty: true, // Corrected typo: "visibilty" to "visibility"
                description: "farewell of 4th year btech batch mait",
                organizer: "TNM",
                photoUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNpm&psig=AOvVaw3FT-ehzzmVyuTsM_jH2OzM&ust=1713186145244000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjhzO7hwYUDFQAAAAAdAAAAABAE",
                time: "4th september",
                type: "Gathering"
            }
        });
    } catch (error) {
        console.error("Error creating event:", error);
        throw error; // Rethrow the error to be caught by the outer try-catch block
    }
}
