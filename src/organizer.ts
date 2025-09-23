import { BiqSocial } from "./socials";

export enum BiqOrganizerStatus {
  /** Just registered */
  New = 'new',
  /** Can only publish private events */
  Limited = 'limited',
  /** Can publish public events */
  Verified = 'verified',
  /** Suspended */
  Suspended = 'suspended',
}

export interface BiqOrganizer {
  id: string;
  clientId: string;
  name: string;
  description: string;
  logo: string;
  banner?: string;
  socials: { [key in BiqSocial]?: string };
  status: BiqOrganizerStatus;
  createdAt: number;
  updatedAt: number;
}

export enum BiqOrganizerUserRole {
  /** Can add other users with admin/organizer/viewer roles, assign admins, manage all events, view all data */
  Owner = 'owner',
  /** Same as owner but cannot add admins */
  Admin = 'admin',
  /** Can manage events, view data */
  Organizer = 'organizer',
  /** Can view events, no management permissions */
  Viewer = 'viewer',
}

export interface BiqOrganizerUser {
  id: string;
  userId: string;
  organizerId: string;
  role: BiqOrganizerUserRole;
  createdAt: number;
  updatedAt: number;
}

export interface BiqOrganizerInvitation {
  id: string;
  code: string;
  organizerId: string;
  role: BiqOrganizerUserRole;
  createdAt: number;
  expiresAt: number;
}