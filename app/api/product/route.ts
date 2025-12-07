import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name,price,originalPrice,image,isNew,isSale,discount,colors,description,category}= body;
        if(!name || !price || !originalPrice || !image || isNew===undefined || isSale===undefined || !discount || !colors || !description || !category){
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 } );
        }

        const product = await prisma.product.create({
            data:{
                name,
                price,
                originalPrice,
                image,
                isNew,
                isSale,
                discount,
                colors,
                description,
                category,
            }
        })
        return NextResponse.json({ message: "Product created successfully", product }, { status: 201 } );
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 } );
    }
}
export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json({ products }, { status: 200 } );
    } catch (error) {
     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 } );   
    }
}