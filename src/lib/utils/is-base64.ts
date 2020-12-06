export function isBase64(str: string): boolean {
    return /^data:image\/(jpeg|png|jpg);base64,/.test(str);
}