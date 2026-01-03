import { ArtistModel } from "./artist.model";

export interface TrackModel {
    name: string;
    album: string;
    cover: string;
    url: string;
    id: string | number;
    artist: ArtistModel;
}