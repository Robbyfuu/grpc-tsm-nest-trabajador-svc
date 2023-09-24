import { PartialType } from '@nestjs/mapped-types';
import { CreateTrabajadorDto } from './create-trabajador.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SearchByFichaDto extends PartialType(CreateTrabajadorDto) {
  @IsNotEmpty()
  @IsNumber()
  ficha: number;
}
