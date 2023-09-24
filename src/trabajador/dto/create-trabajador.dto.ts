import { IsBoolean, IsDateString, IsEnum, IsNotEmpty } from 'class-validator';
import { CreateTrabajadorRequest } from '../trabajadores.pb';

export class CreateTrabajadorDto implements CreateTrabajadorRequest {
  @IsNotEmpty()
  ficha: number;

  @IsNotEmpty()
  rut: string;

  @IsNotEmpty()
  nombreCompleto: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsNotEmpty()
  nacionalidad: string;

  @IsBoolean()
  estado: boolean;

  @IsNotEmpty()
  sexo: string;

  @IsNotEmpty()
  cargo: string;

  @IsDateString()
  fechaIngreso: string;

  @IsNotEmpty()
  gerencia: string;

  @IsNotEmpty()
  tipoContrato: string;

  @IsNotEmpty()
  @IsEnum(['Conductor', 'Soporte'])
  calificacionTrabajador: string;

  @IsNotEmpty()
  @IsEnum(['Fija', 'Variable'])
  tipoEstructura: string;

  @IsNotEmpty()
  base: string;

  @IsNotEmpty()
  centroCosto: string;

  @IsNotEmpty()
  jefatura: string;
}
