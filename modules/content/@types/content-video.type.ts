import { FileType } from '../../file/@types/file.type';
import { Content } from './content.type';

export interface ContentVideo {
  id: number;
  content: Content;
  order: number;
  title: string;
  bannerFile: FileType;
  videoFile: FileType;
  attachments: FileType[];
  createdAt: Date;
  updatedAt: Date;
}
