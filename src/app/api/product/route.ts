import { NextRequest, NextResponse } from "next/server"
import {product} from "../product/product"

export const GET = (request:NextRequest)=>{
    const id = request.nextUrl.searchParams.get("id")

    if(!id){
        return NextResponse.json(product)
    }

    const foundProduct = product.find((item)=>item.id === parseInt(id,10))

    if(!foundProduct){
        return NextResponse.json({
            message:"product not found"
        },
    {
        status:404
    },)
    }
return NextResponse.json(foundProduct) // return in nextresponse
}