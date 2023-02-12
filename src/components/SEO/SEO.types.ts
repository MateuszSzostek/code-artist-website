interface ISEO {
  // FACEBOOK
  fbAppId?: string;

  title?: string;
  description?: string;
  keywords?: string;
  externalScripts?: string[];

  canonicalUrl?: string;

  ogType?: OgType;

  ogUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogLocale?: string;

  ogVideo?: string;
  ogVideoUrl?: string;
  ogVideoSecureUrl?: string;
  ogVideoType?: OgVideoType;
  ogVideoWidth?: string;
  ogVideoHeight?: string;

  ogImageUrl?: string;
  ogImageSecureUrl?: string;
  ogImageType?: OgImageType;
  ogImageWidth?: string;
  ogImageHeight?: string;

  // TWITTER
  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
  twCard?: TwitterCard;
  twSite?: string;
  twCreator?: string;

  //LINKEDIN info
  //https://www.linkedin.com/help/linkedin/answer/a521928/making-your-website-shareable-on-linkedin?lang=en
}

enum TwitterCard {
  summary = "summary",
  summaryLargeImage = "summary_large_image",
  app = "app",
  player = "player",
}

enum OgVideoType {
  applicationXShockwaveFlash = "application/x-shockwave-flash",
  videoMp4 = " video/mp4",
}

enum OgImageType {
  imageJpeg = "image/jpeg",
  imageGif = "image/gif",
  imagePng = "image/png",
}

enum OgType {
  website = "website",
  article = "article",
  book = "book",
  profile = "profile",
  musicSong = "music.song",
  musicAlbum = "music.album",
  musicPlaylist = "music.playlist",
  musicRadioStation = "music.radio_station",
  videoMovie = "video.movie",
  videoEpisode = "video.episode",
  videoTvShow = "video.tv_show",
  videoOther = "video.other",
}

export default ISEO;
