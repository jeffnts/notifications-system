import { Injectable } from '@nestjs/common'
import { CreateApplicationDto } from './dto/create-application.dto'
import { UpdateApplicationDto } from './dto/update-application.dto'
import { PrismaService } from 'libs'

type Filters = {
  skip: number
  limit: number
}

@Injectable()
export class ApplicationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createApplicationDto: CreateApplicationDto, userId: string) {
    return this.prisma.applications.create({
      data: {
        ...createApplicationDto,
        userId,
      },
    })
  }

  async findAll(userId: string, filters: Filters) {
    const { skip, limit } = filters

    const results = await this.prisma.applications.findMany({
      where: {
        userId,
      },
    })

    const count = await this.prisma.applications.count()

    return {
      results,
      count,
    }
  }

  async findOne(id: string, userId: string) {
    return this.prisma.applications.findUnique({
      where: {
        id,
        userId,
      },
      select: {
        id: true,
        channels: true,
        name: true,
      },
    })
  }

  async update(
    id: string,
    updateApplicationDto: UpdateApplicationDto,
    userId: string
  ) {
    return this.prisma.applications.update({
      where: {
        id,
        userId,
      },
      data: {
        ...updateApplicationDto,
      },
    })
  }

  async remove(id: string, userId: string) {
    return this.prisma.applications.delete({
      where: {
        id,
        userId,
      },
    })
  }
}
