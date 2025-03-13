import * as crypto from 'crypto';

export class EncryptionUtils {
  static encrypt<T = any>(data: T, key: string): string {
    const stringData = JSON.stringify(data);

    const buffer = Buffer.from(stringData, 'utf8');
    const encrypted = crypto.publicEncrypt(
      {
        key,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      new Uint8Array(buffer),
    );
    return encrypted.toString('base64');
  }
}
