import { PartialType } from '@nestjs/mapped-types';
import { CreateSystemParameterDto } from './create-system-parameter.dto';

export class UpdateSystemParameterDto extends PartialType(CreateSystemParameterDto) {}
