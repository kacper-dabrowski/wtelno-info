import { getHttpClient, HttpClient } from '../shared/http';
import { textArrayToImages } from '../shared/utils/textToImage';
import websources from '../shared/websources';
import { GovernmentMembersDto, GovernorDto, MayorDto } from './government/dto';

class GovernmentService {
    constructor(private http: HttpClient) {}

    async fetchGovernmentInfo() {
        const [mayorData, governorData, memberData] = (await this.http.getAll([
            `${websources.STRAPI_CMS_URL}/mayor`,
            `${websources.STRAPI_CMS_URL}/governor`,
            `${websources.STRAPI_CMS_URL}/government-member`,
        ])) as [MayorDto, GovernorDto, GovernmentMembersDto];

        const [mayorPhoneImage, mayorEmailImage] = await textArrayToImages([
            mayorData.telephoneNumber,
            mayorData.email,
        ]);

        const [governorPhoneImage] = await textArrayToImages([governorData.telephoneNumber]);

        return {
            mayorData: {
                ...mayorData,
                telephoneNumber: mayorPhoneImage,
                email: mayorEmailImage,
            },
            governorData: {
                ...governorData,
                telephoneNumber: governorPhoneImage,
            },
            memberData,
        };
    }
}

let governmentService: GovernmentService;

export const getGovernmentService = (): GovernmentService => {
    if (!governmentService) {
        governmentService = new GovernmentService(getHttpClient());
    }

    return governmentService;
};
