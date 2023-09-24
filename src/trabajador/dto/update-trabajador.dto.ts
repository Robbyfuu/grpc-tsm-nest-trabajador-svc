import { PartialType } from '@nestjs/mapped-types';
import { CreateTrabajadorDto } from './create-trabajador.dto';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateTrabajadorDto extends PartialType(CreateTrabajadorDto) {
  @IsOptional()
  @IsNotEmpty()
  ficha?: number;

  @IsOptional()
  @IsNotEmpty()
  rut?: string;

  @IsOptional()
  @IsNotEmpty()
  nombreCompleto?: string;

  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @IsOptional()
  @IsNotEmpty()
  nacionalidad?: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;

  @IsOptional()
  @IsNotEmpty()
  sexo?: string;

  @IsOptional()
  @IsNotEmpty()
  cargo?: string;

  @IsOptional()
  @IsDateString()
  fechaIngreso?: string;

  @IsOptional()
  @IsNotEmpty()
  gerencia?: string;

  @IsOptional()
  @IsNotEmpty()
  tipoContrato?: string;

  @IsOptional()
  @IsEnum(['Conductor', 'Soporte'])
  calificacionTrabajador?: string;

  @IsOptional()
  @IsEnum(['Fija', 'Variable'])
  tipoEstructura?: string;

  @IsOptional()
  @IsNotEmpty()
  base?: string;

  @IsOptional()
  @IsNotEmpty()
  centroCosto?: string;

  @IsOptional()
  @IsNotEmpty()
  jefatura?: string;
}
