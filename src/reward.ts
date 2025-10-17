export interface BiqRewardCondition {
  id: string;
  clientId: string;
  organizerId: string;
  event: string;
  location?: string;
  area?: string;
  recurrence: BiqRewardRecurrence;
  /** Minutes of participation */
  requiredParticipation: number;
  validFrom?: number;
  validUntil?: number;
  /** Require previously obtained rewards */
  requiredRewards?: BiqRequiredRewards;
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
  condition: BiqRewardCondition;
  user: string;
  createdAt: number;
}