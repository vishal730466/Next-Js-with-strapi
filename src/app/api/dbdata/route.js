import { dburl } from "@/db/connect";
import { Aschema } from "@/db/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(dburl)

    const data = await Aschema.find();
    
   
    return NextResponse.json({result:data})
}
