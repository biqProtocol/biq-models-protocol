export interface BiqRewardCondition {
  id: string;
  event: string;
  location?: string;
  area?: string;
  recurrence: BiqRewardRecurrence;
  requiredParticipation: number;
  validFrom?: number;
  validUntil?: number;
}

export enum BiqRewardRecurrence {
  ONCE = "ONCE",
  REPEATING = "REPEATING",
}

export interface BiqReward {
  id: string;
  condition: BiqRewardCondition;
  user: string;
  createdAt: number;
}