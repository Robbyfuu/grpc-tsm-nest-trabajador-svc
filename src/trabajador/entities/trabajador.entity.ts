import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { LicenciaMedica } from './licencia-medica.entity';

@Entity({ name: 'trabajador' })
export class Trabajador extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  ficha: number;

  @Column({ type: 'varchar', length: 100 })
  rut: string;

  @Column({ type: 'varchar', length: 250 })
  nombreCompleto: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;

  @Column({
    type: 'enum',
    enum: [
      'Chilena',
      'Argentina',
      'Peruana',
      'Colombiana',
      'Boliviana',
      'Paraguaya',
      'Uruguaya',
      'Ecuatoriana',
      'Venezolana',
      'Brasileña',
      'Haitiana',
      'Española',
      'Mexicana',
    ],
  })
  nacionalidad: string;

  @Column({ type: 'char', length: 2 })
  sexo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  cargo: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'date', nullable: true })
  fechaIngreso: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  gerencia: string;

  @Column({ type: 'enum', enum: ['Conductor', 'Soporte'], nullable: true })
  calificacionTrabajador: string;

  @Column({ type: 'enum', enum: ['Indefinido', 'A Plazo'], nullable: true })
  tipoContrato: string;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @Column({ type: 'enum', enum: ['Fija', 'Variable'], nullable: false })
  tipoEstructura: string;

  @Column({
    type: 'enum',
    enum: [
      'Base Concon',
      'Caldera',
      'Concon',
      'Guardia Vieja',
      'Lautaro',
      'Maipu',
      'Osorno',
      'Rosario',
      'Talcahuano',
      'Teno',
    ],
    nullable: true,
  })
  base: string;

  @Column({
    type: 'enum',
    enum: [
      'Administracion Caldera',
      'Administracion Concon',
      'Administracion Osorno',
      'Administracion Rosario',
      'Administracion Sibelco',
      'Administracion Talcahuano',
      'Administracion Y Finanzas',
      'Adquisiciones Y Bodega',
      'Ag Gerencia Admin. Central',
      'Anglo American Agua La Farfana',
      'Anglo American Agua San Isidro',
      'Anglo American Agua Sn. Clemente',
      'Bodega',
      'Bravo Energy',
      'Cbb Bateas Spot',
      'Cbb Silos Andina',
      'Cbb Silos Internacional',
      'Cementos Bb Mapa',
      'Cementos Bb Osorno',
      'Cementos Bb Sn Antonio',
      'Cementos Bb Talcahuano',
      'Cementos Bb Teno',
      'Cementos Melon',
      'Consorcio Santa Marta',
      'Contabilidad Y Tesoreria',
      'Control Flota',
      'Control Gestion Y Planificacion',
      'Copec Concon',
      'Cristalería Chile',
      'Enap Coke',
      'Enap Combustible (Cl Linares)',
      'Enap Combustible (Cl San Fernando)',
      'Enap Combustible (Santiago)',
      'Enap Combustible (Talcahuano)',
      'Enap Gnl',
      'Enex Caldera',
      'Enex Costa',
      'Enex Maipu',
      'Enex Talcahuano',
      'Esmax Talcahuano',
      'Gerencia Comercial',
      'Guardias Osorno',
      'Interplanta Prolesur',
      'Linde',
      'Linde Mel',
      'Mantencion Taller Centro',
      'Mantencion Caldera',
      'Mantencion Concon',
      'Mantencion Osorno',
      'Mantencion Talcahuano',
      'Metrogas',
      'Nestle',
      'Operaciones Caldera',
      'Operaciones Centro',
      'Operaciones Centro Norte',
      'Operaciones Concon',
      'Operaciones Osorno',
      'Operaciones Talcahuano',
      'Peddler Costa',
      'Peddler Lautaro',
      'Peddler Maipu',
      'Peddler Rosario',
      'Peddler Sur (Talcahuano)',
      'Petrobras Centro',
      'Prolesur Predial Osorno',
      'Recepcion',
      'RRHH',
      'SAAM',
      'Sibelco Andina',
      'Sibelco Bateas',
      'Sibelco Silos',
      'Silos Weber',
      'Sistemas',
      'SSOMAC',
      'SSOMAC Concon',
      'Styropex',
    ],
    nullable: true,
  })
  centroCosto: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  jefatura: string;

  @Column({ type: 'float', default: 0, nullable: true })
  vacacionesRestantes: number;

  @OneToMany(() => LicenciaMedica, (licenciaMedica) => licenciaMedica.ficha)
  licenciasMedicas: LicenciaMedica[];
}
