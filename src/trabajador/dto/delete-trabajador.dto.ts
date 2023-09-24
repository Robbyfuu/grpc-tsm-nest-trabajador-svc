import { IsNotEmpty, IsNumber } from 'class-validator';
import { DeleteTrabajadorRequest } from '../trabajadores.pb';

export class DeleteTrabajadorDto implements DeleteTrabajadorRequest {
  @IsNotEmpty()
  @IsNumber()
  ficha: number;
}
