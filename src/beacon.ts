export interface BiqBeacon {
  id: string;
  name: string;
  owner: string;
  type: BiqBeaconType;
  position?: BiqBeaconPosition;
  assignment?: BiqBeaconAssignment[];
  disabled?: boolean;
}

export enum BiqBeaconType {
  HW = "HW",
  ORGANIZER = "ORGANIZER",
  USER = "USER",
}

export interface BiqBeaconPosition {
  lat: number;
  lng: number;
}

export interface BiqBeaconAssignment {
  id: string;
  event: string;
  location?: string;
  area?: string;
}