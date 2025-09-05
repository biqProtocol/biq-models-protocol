import { BiqEvent } from "./event";
import { BiqPeripheralSignature } from "./proof";

/** base64 encoded nonce */
export type BiqNonceResponse = string;

export type BiqValidateNonceRequest = BiqPeripheralSignature[];

export type BiqValidateNonceResponse = false | BiqEvent[]

export interface BiqLoginRequest {
  apiSecret: string;
  userId: string;
  payload?: Record<string, string>;
}

export interface BiqLoginResponse {
  idToken: string;
  refreshToken: string;
  // Refresh token expiration timestamp
  expires: number;
}

export interface BiqRefreshRequest {
  refreshToken: string;
}

export interface BiqRefreshResponse {
  idToken: string;
}