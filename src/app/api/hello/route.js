import { users } from "@/storage/users";
import { NextResponse } from "next/server";


export async function GET(request ,con) {
     const data = users
   
     return NextResponse.json(data)
  }