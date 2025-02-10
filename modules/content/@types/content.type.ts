import { ContentTheme } from './content-theme.type';
// eslint-disable-next-line import/no-cycle
import { ContentVideo } from './content-video.type';
import { FileType } from '../../file/@types/file.type';

export interface Content {
  id: number;
  title: string;
  author: string;
  theme: ContentTheme;
  bannerFile: FileType;
  videos: ContentVideo[];
  createdAt: Date;
  updatedAt: Date;
}
