export interface BiqRewardCondition {
  id: string;
  clientId: string;
  organizerId?: string;
  event: string;
  location?: string;
  area?: string;
  recurrence: BiqRewardRecurrence;
  /** Minutes of participation */
  requiredParticipation: number;
  /** For recurring rewards, cooldown period in minutes */
  cooldown?: number;
  /** This reward is issued for each unique beacon */
  forUniqueBeacon?: boolean;
  validFrom?: number;
  validUntil?: number;
  /** Require previously obtained rewards */
  requiredRewards?: BiqRequiredRewards;
  createdAt: number;
  updatedAt: number;
  deletedAt: number | null;
}

export enum BiqRewardRecurrence {
  ONCE = "ONCE",
  REPEATING = "REPEATING",
}

export interface BiqRequiredReward {
  id: string;
  optional: boolean;
}

export interface BiqRequiredRewards {
  /** Number of required optional rewards */
  optionalCount: number;
  rewards: BiqRequiredReward[];
}


export interface BiqReward {
  id: string;
  condition: BiqRewardCondition | string;
  user: string;
  beacon: string;
  createdAt: number;
}