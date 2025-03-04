import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { completed } = await request.json();
  if (typeof completed !== 'boolean') {
    return new NextResponse('Completed status is required', { status: 400 });
  }

  const todo = await prisma.todo.update({
    where: {
      id: params.id,
      user: {
        email: session.user.email,
      },
    },
    data: {
      completed,
    },
  });

  return NextResponse.json(todo);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  await prisma.todo.delete({
    where: {
      id: params.id,
      user: {
        email: session.user.email,
      },
    },
  });

  return new NextResponse(null, { status: 204 });
} 