import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Request,
} from '@nestjs/common'
import { ApplicationsService } from './applications.service'
import { CreateApplicationDto } from './dto/create-application.dto'
import { UpdateApplicationDto } from './dto/update-application.dto'
import { Request as RequestType } from 'types'

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(
    @Body() createApplicationDto: CreateApplicationDto,
    @Request() req: RequestType
  ) {
    return this.applicationsService.create(createApplicationDto, req.userId)
  }

  @Get()
  findAll(@Request() req: RequestType) {
    const { query } = req
    const { page, limit } = query
    const skip = (+page - 1) * +limit
    const filters = {
      skip,
      limit: +limit,
    }

    return this.applicationsService.findAll(req.userId, filters)
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: RequestType) {
    return this.applicationsService.findOne(id, req.userId)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
    @Request() req: RequestType
  ) {
    return this.applicationsService.update(id, updateApplicationDto, req.userId)
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: RequestType) {
    return this.applicationsService.remove(id, req.userId)
  }
}
