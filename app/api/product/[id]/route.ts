
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
try {
  const data = await req.json();

  const updated = await prisma.product.update({
    where: { id: params.id },
    data,
  });

  return NextResponse.json(updated);
} catch (error) {
  return NextResponse.json({ error: "Internal Server Error in product id" }, { status: 500 } );
}
  
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "Deleted" });
  } catch (error) {
      return NextResponse.json({ error: "Internal Server Error in product id" }, { status: 500 } );

  }
  
}
