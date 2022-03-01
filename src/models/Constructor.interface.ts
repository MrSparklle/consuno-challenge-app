import { Specialtie } from './Specialtie.interface';

export interface Constructor {
  id: number;
  name: string;
  logoUrl: string;
  specialties: Specialtie[];
  city: string;
}
