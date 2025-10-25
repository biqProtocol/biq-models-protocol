import { BiqRequiredInfo } from "./event";

export interface BiqWebhook {
  id: string;
  clientId: string;
  organizerId?: string;
  name: string;
  scopes: BiqWebhookScope[];
  url: string;
  headers?: { [key: string]: string };
  createdAt: number;
  updatedAt: number;
  tested: boolean;
  enabled: boolean;
}

export enum BiqWebhookScope {
  TestAvailability = "test_availability",
  EventAttendance = "event_attendance",
  RewardTriggered = "reward_triggered",
  EventApplication = "event_application",
  GatedEventApplication = "gated_event_application",
  UserProfileRequest = "user_profile_request",
}

export type BiqWebhookRequest =
  BiqWebhookRequestTestAvailability
  | BiqWebhookRequestEventAttendance
  | BiqWebhookRequestRewardTriggered
  | BiqWebhookRequestEventApplication
  | BiqWebhookRequestGatedEventApplication
  | BiqWebhookRequestUserProfile;

export type BiqWebhookResponse =
  BiqWebhookResponseTestAvailability
  | BiqWebhookResponseEventAttendance
  | BiqWebhookResponseRewardTriggered
  | BiqWebhookResponseEventApplication
  | BiqWebhookResponseGatedEventApplication
  | BiqWebhookResponseUserProfile;

/** Request to test the webhook functionality */
export type BiqWebhookRequestTestAvailability = {
  scope: BiqWebhookScope.TestAvailability;
  ping: true;
}

export type BiqWebhookResponseTestAvailability = {
  scope: BiqWebhookScope.TestAvailability;
  pong: true;
}

/** Request when a user attends an event */
export type BiqWebhookRequestEventAttendance = {
  scope: BiqWebhookScope.EventAttendance;
  userId: string;
  eventId: string;
  time: number;
}

export type BiqWebhookResponseEventAttendance = {
  scope: BiqWebhookScope.EventAttendance;
  acknowledged: true;
}

/** Request when a reward is triggered for a user */
export type BiqWebhookRequestRewardTriggered = {
  scope: BiqWebhookScope.RewardTriggered;
  userId: string;
  eventId: string;
  rewardId: string;
  rewardConditionId: string;
  time: number;
}

export type BiqWebhookResponseRewardTriggered = {
  scope: BiqWebhookScope.RewardTriggered;
  acknowledged: true;
}

/** Request when a user applies for an event that requires approval */
export type BiqWebhookRequestEventApplication = {
  scope: BiqWebhookScope.EventApplication;
  userId: string;
  eventId: string;
}

export type BiqWebhookResponseEventApplication = {
  scope: BiqWebhookScope.EventApplication;
  acknowledged: true;
}

/** Request when a user applies for a gated event */
export type BiqWebhookRequestGatedEventApplication = {
  scope: BiqWebhookScope.GatedEventApplication;
  userId: string;
  eventId: string;
}

export type BiqWebhookResponseGatedEventApplication = {
  scope: BiqWebhookScope.GatedEventApplication;
  eligible: boolean;
  reason?: string; // optional reason for ineligibility
}

/** Request to get user profile information to populate participation for open events */
export type BiqWebhookRequestUserProfile = {
  scope: BiqWebhookScope.UserProfileRequest;
  userId: string;
  eventId: string;
}

export type BiqWebhookResponseUserProfile = {
  scope: BiqWebhookScope.UserProfileRequest;
  name: string;
  picture: string;
  extraInfo?: BiqRequiredInfo[];
}