import {
  Injectable,
  Logger,
  HttpStatus,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import {
  CreateTrabajadorDto,
  UpdateTrabajadorDto,
  SearchByFichaDto,
  DeleteTrabajadorDto,
} from '@/trabajador/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Trabajador } from './entities/trabajador.entity';
import { In, Repository } from 'typeorm';
import {
  LicenciasMedicasResponse,
  TrabajadorByFichaResponse,
} from './trabajadores.pb';
import { LicenciaMedica } from './entities/licencia-medica.entity';

@Injectable()
export class TrabajadorService {
  logger = new Logger('TrabajadorService');

  constructor(
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
    @InjectRepository(LicenciaMedica)
    private readonly licenciaMedicaRepository: Repository<LicenciaMedica>,
  ) {}
  async getTrabajadorByFicha(
    ficha: number,
  ): Promise<TrabajadorByFichaResponse> {
    const trabajador = await this.trabajadorRepository.findOne({
      where: { ficha },
    });
    if (!trabajador) {
      return {
        ok: false,
        status: HttpStatus.NOT_FOUND,
        msg: 'Trabajador no encontrado',
      };
    }
    return {
      ok: true,
      status: HttpStatus.OK,
      // @ts-ignore
      trabajador,
    };
  }
  async getTrabajadores() {
    const trabajadores = await this.trabajadorRepository.find();
    return {
      ok: true,
      status: HttpStatus.OK,
      trabajadores,
    };
  }
  async getLicenciasMedicas(): Promise<LicenciasMedicasResponse> {
    const licenciasMedicas = await this.licenciaMedicaRepository.find();
    return {
      ok: true,
      status: HttpStatus.OK,
      //@ts-ignore
      licenciasMedicas,
    };
  }
}
