import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
     return NextResponse.json(
    await prisma.collection.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    })
  );
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error in collection" }, { status: 500 } );
  }
 
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

  const collection = await prisma.collection.create({
    data,
  });

  return NextResponse.json(collection);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error in collection" }, { status: 500 } );
  }
  
}
