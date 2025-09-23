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