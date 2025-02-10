// eslint-disable-next-line import/no-cycle
import { Content } from './content.type';
import { FileType } from '../../file/@types/file.type';

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
