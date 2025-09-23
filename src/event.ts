import { BiqSocial } from "./socials";

export interface BiqEvent {
  id: string;
  clientId: string;
  organizerId: string[];
  type: BiqEventType;
  name: string;
  description: string;
  image: string;
  tags?: string[];
  url?: string;
  locations?: BiqEventLocation[];
  calendar?: BiqEventCalendar;
  timezone: string;
  startTime?: number;
  endTime?: number;
  visibility: BiqEventVisibility;
  participation: BiqEventParticipation;
  isGated?: boolean;
  requiredInfo?: BiqRequiredInfo[];
  maxParticipants?: number;
  webhooks?: string[]; // webhook IDs
  createdAt: number;
  updatedAt: number;
}

export enum BiqEventType {
  EVENT = "EVENT",
  LOCATION = "LOCATION",
  TREASURE_HUNT = "TREASURE_HUNT",
  WORKPLACE = "WORKPLACE",
  CLASSROOM = "CLASSROOM",
}

export enum BiqEventVisibility {
  DRAFT = "DRAFT",
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export enum BiqEventParticipation {
  OPEN = "OPEN",
  JOIN = "JOIN",
}

export type BiqRequiredInfo = BiqRequiredInfoSocial | BiqRequiredInfoWallet | BiqRequiredInfoCustom;

export type BiqRequiredInfoSocial = {
  type: "social";
  social: BiqSocial;
  value?: string;
}

export type BiqRequiredInfoWallet = {
  type: "wallet";
  chain: "Solana" | "Ethereum";
  provider?: string; // e.g. BiqAppWalletProvider
  value?: string;
}

export type BiqRequiredInfoCustom = {
  type: "custom";
  label: string;
  placeholder?: string;
  required: boolean;
  value?: string;
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
  calendar?: BiqEventCalendar;
  areas?: BiqEventArea[];
}

export interface BiqEventCalendar {
  id: string;
  clientId: string;
  organizerId?: string;
  name: string;
  timezone: string;
  rules: BiqEventCalendarRule[];
}

export enum BiqEventCalendarDay {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum BiqEventCalendarMonth {
  January = "january",
  February = "february",
  March = "march",
  April = "april",
  May = "may",
  June = "june",
  July = "july",
  August = "august",
  September = "september",
  October = "october",
  November = "november",
  December = "december",
}

export interface BiqEventCalendarTime {
  start: string; // e.g. "14:00"
  end: string;   // e.g. "18:00"
}

export type BiqEventCalendarRule = BiqEventCalendarRuleDay | BiqEventCalendarRuleMonth | BiqEventCalendarRuleDate;

export interface BiqEventCalendarRuleDay {
  type: "day";
  days: BiqEventCalendarDay[];
  time: BiqEventCalendarTime[];
}

export interface BiqEventCalendarRuleMonth {
  type: "month";
  months: BiqEventCalendarMonth[];
  dates: number[]; // 1-31
  time: BiqEventCalendarTime[];
}

export interface BiqEventCalendarRuleDate {
  type: "date";
  dates: string[]; // e.g. ["2023-12-25"]
  time: BiqEventCalendarTime[];
}

export interface BiqEventArea {
  id: string;
  name: string;
  description: string;
  image: string;
  beacons?: string[];
  calendar?: BiqEventCalendar;
}

export enum BiqEventUserParticipationStatus {
  /** Default status when user has no interaction with the event or he is not interested anymore */
  DEFAULT = "DEFAULT",
  /** Mark the event as favorite */
  INTERESTED = "INTERESTED",
  /** User applied but organizer needs to approve him */
  PENDING = "PENDING",
  /** User has been rejected by the organizer */
  REJECTED = "REJECTED",
  /** User is approved to attend the event */
  APPROVED = "APPROVED",
  /** User attended the event */
  ATTENDED = "ATTENDED",
  /** User was approved but canceled his registration */
  CANCELED = "CANCELED",
}

export interface BiqEventUserParticipation {
  id: string;
  clientId: string;
  organizerId: string;
  userId: string;
  eventId: string;
  status: BiqEventUserParticipationStatus;
  name: string;
  picture: string;
  requiredInfo?: BiqRequiredInfo[];
  history: {
    status: BiqEventUserParticipationStatus;
    timestamp: number;
  }[];
  createdAt: number;
  updatedAt: number;
}