interface CompleteInfoBooks{
  title: string,
  authors: string[],

  publisher: string,
  publishedDate: string,

  description: string,
  categories: string[],

  canonicalVolumeLink: string,
  infoLink: string,

  imageLinks: ImageLinks
}

type ImageLinks = {
  smallThumbnail: string,
  thumbnail: string,
}

export type { CompleteInfoBooks, ImageLinks }