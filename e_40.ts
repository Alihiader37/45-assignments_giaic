interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating three different albums using the makeAlbum function
const album1 = makeAlbum('Adele', '21');
const album2 = makeAlbum('Ed Sheeran', '÷', 12); // Including number of tracks
const album3 = makeAlbum('Taylor Swift', '1989');

// Printing each album object to show the album information
console.log(album1);
console.log(album2);
console.log(album3);
