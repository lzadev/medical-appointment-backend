import { Injectable } from '@nestjs/common';
import { Speciality } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';

@Injectable()
export class SpecialitiesService {
  constructor(private prismaService: PrismaService) { }


  async create(dto: CreateSpecialityDto): Promise<Speciality> {
    const speciality = await this.prismaService.speciality.create({
      data: { code: 'CODE-1', name: dto.name }
    });

    return speciality;
  }

  findAll() {
    return `This action returns all specialitie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speciality`;
  }

  update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    return `This action updates a #${id} speciality`;
  }

  remove(id: number) {
    return `This action removes a #${id} speciality`;
  }
}
