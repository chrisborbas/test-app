import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { completed } = await request.json();
  const todo = await prisma.todo.update({
    where: { id: params.id },
    data: { completed },
  });
  return NextResponse.json(todo);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await prisma.todo.delete({
    where: { id: params.id },
  });
  return new NextResponse(null, { status: 204 });
} 