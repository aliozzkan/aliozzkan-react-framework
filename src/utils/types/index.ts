export type TDecodedSignature = {
}


export interface IArrayResponse<T> {
  Count: number;
  Status: number;
  Items: Array<T>;
}