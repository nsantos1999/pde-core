export class QrCodePaymentEntity {
  encodedImage: string;
  pixCopyPasteCode: string;
  expirationDate: Date;

  constructor(data: QrCodePaymentEntity) {
    this.encodedImage = data.encodedImage;
    this.pixCopyPasteCode = data.pixCopyPasteCode;
    this.expirationDate = data.expirationDate;
  }
}
