export interface ContentVideoDtoInterface {
  id?: number;
  order: number;
  title: string;
  bannerFileId?: number;
  videoFileId?: number;
  attachmentFilesIds: number[];
}

export interface CreateContentDtoInterface {
  title: string;
  author: string;
  themeId: number;
  bannerFileId?: number;
  videos: ContentVideoDtoInterface[];
}
