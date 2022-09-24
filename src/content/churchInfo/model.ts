import { PageDto } from '../page/dto';
import { HolyMassesDto, ImportantDate } from './dto';

export interface ChurchInfoModel {
    parson: ParsonModel;
    holyMasses: HolyMassesModel;
    dates: ImportantDatesModel;
    currentPage: PageDto;
}

export type HolyMassesModel = HolyMassesDto;

export type ImportantDatesModel = ImportantDate[];

export interface ParsonModel {
    name: string;
    telephoneNumber: string;
    title: string;
    email: string;
}
