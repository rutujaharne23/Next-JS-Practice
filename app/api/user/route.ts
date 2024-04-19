import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest){
    const user = await client.user.findFirst();
    // database logic
    return NextResponse.json({
        email: user?.email,
        name: "Rutuja"
    })
}

export async function POST(req: NextRequest){
    //extract the body
    const body = await req.json()
    try{
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
    }catch(e){
        return NextResponse.json({
            message: "Error while signing up!"
        }, {
            status: 411
        })
    }
    
}