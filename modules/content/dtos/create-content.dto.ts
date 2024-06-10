export interface ContentVideoDtoInterface {
  order: number;
  title: string;
}

export interface CreateContentDtoInterface {
  title: string;
  author: string;
  themeId: number;
  videos: ContentVideoDtoInterface[];
}
