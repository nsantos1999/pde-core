import { FileType } from '../../file/@types/file.type';
import { ContentTheme } from './content-theme.type';
import { ContentVideo } from './content-video.type';

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
