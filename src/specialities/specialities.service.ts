import { Injectable } from '@nestjs/common';
import { Speciality } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';

@Injectable()
export class SpecialitiesService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateSpecialityDto): Promise<Speciality> {
    try {
      const parameter = await this.prismaService.systemParameter.findFirst({
        where: { prefix: 'ESP' },
      });

      parameter.secuence = (Number.parseInt(parameter.secuence) + 1)
        .toString()
        .padStart(6, '0');

      const code = `${parameter.prefix}-${parameter.secuence}`;

      const [speciality] = await this.prismaService.$transaction([
        this.prismaService.speciality.create({
          data: { code, name: dto.name },
        }),
        this.prismaService.systemParameter.update({
          data: { secuence: parameter.secuence },
          where: { id: parameter.id },
        }),
      ]);

      return speciality;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<Speciality[]> {
    const specialities = await this.prismaService.speciality.findMany();
    return specialities;
  }

  async findOne(id: number) {
    const speciality = await this.prismaService.speciality.findFirst({
      where: {
        id: id,
      },
    });
    return speciality;
  }

  update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    return `This action updates a #${id} speciality`;
  }

  async remove(id: number) {
    await this.prismaService.speciality.delete({ where: { id } });
  }
}
