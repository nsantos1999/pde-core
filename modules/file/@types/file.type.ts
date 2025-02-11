export interface FileType {
  id: number;
  fileName: string;
  key: string;
  acl: string;
  mimeType: string;
  contentType: string;
  fullUrl?: string;
  createdAt: Date;
}
