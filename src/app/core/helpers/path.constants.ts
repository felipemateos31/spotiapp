import { environment } from '../../../environments/environment'

export class PathConstants {

    static NEW_RELEASES = 'browse/new-releases';
    static ARTIST = 'search?q={search}&type=artist&limit=15';

    public static getPath(path) {
        return `${environment.apiUrl}${path}`
    }
}
