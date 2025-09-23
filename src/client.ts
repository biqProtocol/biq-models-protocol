export interface BiqClient {
  id: string;
  name: string;
  /** 24 chars */
  apiKey: string;
  apiSecrets: BiqClientApiSecret[];
  // projectInfo: {};
  // contactInfo: {};
  // billingInfo: {};
  // users: {};
  // webhooks: {}
  prefix: string;
}

export interface BiqClientApiSecret {
  name: string;
  secret: string;
  createdAt: number;
  expiresAt?: number;
}

export interface BiqClientRefreshToken {
  /** 64 chars */
  id: string;
  clientId: string;
  userId: string;
  createdAt: number;
  expiresAt: number;
}

export interface BiqClientUserInvitation {
  id: string;
  code: string;
  clientId: string;
  createdAt: number;
  expiresAt: number;
}