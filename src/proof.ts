export interface BiqProof {
  id: string;
  time: number;
  nonce: string;
  userId: string;
  beaconId: string;
  eventId: string[];
  participation?: BiqParticipation[];
}

export interface BiqParticipation {
  event: string;
  location?: string;
  area?: string;
}

export interface BiqAttendance {
  id: string;
  startTime: number;
  endTime: number;
  duration: number;
}

export type BiqPeripheralSignature = {
  uuid: string;
  major: number;
  minor: number;
  publicKey: string;
  signature: string;
}