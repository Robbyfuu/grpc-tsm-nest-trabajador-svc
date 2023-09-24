import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TrabajadorService } from './trabajador.service';
import {
  LicenciasMedicasResponse,
  TRABAJADOR_SERVICE_NAME,
  TrabajadorByFichaRequest,
  TrabajadorRequest,
} from './trabajadores.pb';

@Controller()
export class TrabajadorController {
  constructor(private readonly trabajadorService: TrabajadorService) {}
  @GrpcMethod(TRABAJADOR_SERVICE_NAME, 'GetTrabajadorByFicha')
  private async getTrabajadorByFicha(
    payload: TrabajadorByFichaRequest,
  ): Promise<any> {
    const { ficha } = payload;
    return this.trabajadorService.getTrabajadorByFicha(ficha);
  }

  @GrpcMethod(TRABAJADOR_SERVICE_NAME, 'GetTrabajadores')
  private async getTrabajadores(payload: TrabajadorRequest): Promise<any> {
    return this.trabajadorService.getTrabajadores();
  }

  @GrpcMethod(TRABAJADOR_SERVICE_NAME, 'GetLicenciasMedicas')
  private async getLicenciasMedicas(
    payload: TrabajadorRequest,
  ): Promise<LicenciasMedicasResponse> {
    return this.trabajadorService.getLicenciasMedicas();
  }
}
