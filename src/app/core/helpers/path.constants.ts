import { environment } from '../../../environments/environment'

export class PathConstants {

    static NEW_RELEASES = 'browse/new-releases';
    static ARTISTS = 'search?q={search}&type=artist&limit=15';
    static ARTIST = 'artists/{id}';
    static ARTIST_TOP_TRACKS = 'artists/{id}/top-tracks?market=es';

    public static getPath(path) {
        return `${environment.apiUrl}${path}`;
    }


    public static getPathLocal(){
        return environment.apiLocalUrl;
    }
}
