import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export function GET(){
    // database logic
    return Response.json({
        email: "rutujaharne@gmail.com",
        name: "Rutuja"
    })
}

export async function POST(req: NextRequest){
    //extract the body
    const body = await req.json()
    //store the body in the database
    await client.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    });

    return NextResponse.json({
        message: "You are logged in!"
    })
}