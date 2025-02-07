import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './infra/prisma.service';

import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova notificação!',
        category: 'social',
        recipicientId: randomUUID()
      }
    });
  }
}
