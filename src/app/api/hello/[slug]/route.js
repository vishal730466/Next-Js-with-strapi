import { users } from "@/storage/users";
import { NextResponse } from "next/server";


export async function GET(request ,con) {
     const data = users.filter((item)=>item.id==con.params.slug)
     console.log(con)
     return NextResponse.json(data.length==0?{result:"not found"}:{result: data})
  
  }