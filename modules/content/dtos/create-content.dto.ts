export interface ContentVideoDtoInterface {
  id?: number;
  order: number;
  title: string;
  banner?: File;
  video?: File;
}

export interface CreateContentDtoInterface {
  title: string;
  author: string;
  themeId: number;
  banner?: File;
  videos: ContentVideoDtoInterface[];
}
