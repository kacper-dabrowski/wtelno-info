import { getHttpClient, HttpClient } from '../shared/http';
import { textArrayToImages } from '../shared/utils/textToImage';
import websources from '../shared/websources';
import { AlbumDto, AlbumsDto } from './album/dto';
import { HolyMassesDto, ImportantDatesDto, ParsonDto } from './churchInfo/dto';
import { ChurchInfoModel, ImportantDatesModel, ParsonModel } from './churchInfo/model';
import { PageDto } from './page/dto';
import { getPageService } from './pageService';

class ChurchService {
    private albums: AlbumsDto;

    constructor(private http: HttpClient) {}

    getAlbums = async (): Promise<AlbumsDto> => {
        if (!this.albums) {
            await this.fetchAlbums();
        }

        return this.albums;
    };

    getAlbumById = async (id: string): Promise<AlbumDto | undefined> => {
        if (!this.albums) {
            await this.fetchAlbums();
        }

        return this.albums.find((album) => album.id === id);
    };

    getChurchInfo = async (): Promise<ChurchInfoModel> => {
        const [churchPage, [importantDateDto, parsonDto, holyMassDto]] = await Promise.all([
            getPageService().getPage('church'),
            this.http.getAll([
                `${websources.STRAPI_CMS_URL}/important-date`,
                `${websources.STRAPI_CMS_URL}/parson`,
                `${websources.STRAPI_CMS_URL}/holy-mass`,
            ]),
        ]);

        return {
            parson: await this.mapParsonDto(parsonDto as ParsonDto),
            dates: this.mapDatesDto(importantDateDto as ImportantDatesDto),
            holyMasses: this.mapHolyMassesDto(holyMassDto as HolyMassesDto),
            currentPage: churchPage as PageDto,
        };
    };

    private mapHolyMassesDto(dto: HolyMassesDto): HolyMassesDto {
        return dto;
    }

    private mapDatesDto(dto: ImportantDatesDto): ImportantDatesModel {
        const { date } = dto;

        return date;
    }

    private async mapParsonDto(dto: ParsonDto): Promise<ParsonModel> {
        const { parson } = dto;

        const [parsonModel] = parson;

        const [email, telephoneNumber] = await textArrayToImages([parsonModel.email, parsonModel.telephoneNumber]);

        return {
            ...parsonModel,
            telephoneNumber,
            email,
        };
    }

    private async fetchAlbums() {
        this.albums = await this.http.get<AlbumsDto>(`${websources.STRAPI_CMS_URL}/church-albums`);
    }
}

let churchService: ChurchService;

export const getChurchService = (): ChurchService => {
    if (!churchService) {
        churchService = new ChurchService(getHttpClient());
    }

    return churchService;
};
