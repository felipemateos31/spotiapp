import { environment } from '../../../environments/environment'

export class PathConstants {

    static NEW_RELEASES = 'browse/new-releases';
    static ARTISTS = 'search?q={search}&type=artist&limit=15';
    static ARTIST = 'artists/{id}';

    public static getPath(path) {
        return `${environment.apiUrl}${path}`
    }
}
