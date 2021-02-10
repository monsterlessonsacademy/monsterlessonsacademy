class Track {
  constructor(params) {
    this.name = params.name;
    this.url = params.url;
  }

  playTrack() {
    console.log(`We started playing ${this.name}`);
  }
}

class YoutubeTrack extends Track {
  constructor(params) {
    super(params);
    this.image = params.image;
  }

  playTrack() {
    console.log(`Hello youtube ${this.name}`);
  }
}

var track01 = new Track({
  name: "track01",
  url: "track01.mp3",
});

var track02 = new Track({
  name: "track02",
  url: "track02.mp3",
});

console.log(track01);
console.log(track02);

track01.playTrack();
track02.playTrack();

var youtubeTrack01 = new YoutubeTrack({
  name: "youtubeTrack01",
  url: "youtubeTrack01.mp3",
  image: "track01.jpg",
});

var youtubeTrack02 = new YoutubeTrack({
  name: "youtubeTrack02",
  url: "youtubeTrack02.mp3",
  image: "track02.jpg",
});

console.log(youtubeTrack01);
console.log(youtubeTrack02);
youtubeTrack01.playTrack();
youtubeTrack02.playTrack();
