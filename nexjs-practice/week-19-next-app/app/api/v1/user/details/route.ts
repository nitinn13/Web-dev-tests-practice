import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name : "nitin",
        email : "nitinjha@gmail.com",
        address : {
            "city" : "New Delhi",
            "state" : "Delhi",
            "houseNumber" : "c-31"
        }
    })
}