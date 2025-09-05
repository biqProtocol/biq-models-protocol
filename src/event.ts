export interface BiqEvent {
  id: string;
  type: BiqEventType;
  name: string;
  description: string;
  image: string;
  tags?: string[];
  owners?: string[];
  organizer?: string;
  url?: string;
  locations?: BiqEventLocation[];
  calendar?: BiqEventCalendar;
  startTime?: number;
  endTime?: number;
  isPublic?: boolean;
  isGated?: boolean;
}

export enum BiqEventType {
  EVENT = "EVENT",
  LOCATION = "LOCATION",
  TREASURE_HUNT = "TREASURE_HUNT",
  WORKPLACE = "WORKPLACE",
  CLASSROOM = "CLASSROOM",
}

export interface BiqEventLocation {
  id: string;
  name: string;
  address: string;
  mapLink: string;
  geofence: {
    lat: number;
    lng: number;
    radius: number;
  };
  beacons?: string[];
  allowUserBeacons?: boolean;
  areas?: BiqEventArea[];
}

export interface BiqEventCalendar {
  // TODO
  id: string;
}

export interface BiqEventArea {
  id: string;
  name: string;
  description: string;
  image: string;
  beacons?: string[];
}