import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Trabajador } from './trabajador.entity';

@Entity({ name: 'licencias_medicas' })
export class LicenciaMedica extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int' })
  ficha: number;

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column({ type: 'date' })
  fechaFin: Date;

  @Column({ type: 'int' })
  cantDias: number;

  @Column({ type: 'date', nullable: true })
  fechaRecepcion: Date;

  @Column({ nullable: true })
  doctor: string;

  @Column({ nullable: true })
  doctorRut: string;

  @Column({ nullable: true })
  doctorEspecialidad: string;

  @Column({ type: 'boolean', default: true })
  estadoLicencia: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Trabajador, (trabajador) => trabajador.licenciasMedicas, {
    eager: true,
  })
  @JoinColumn({ name: 'ficha' })
  trabajador: Trabajador;
}
