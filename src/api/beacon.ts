import { BiqEvent } from "../event";

export interface BiqBeaconRegisterDemoResponse {
  created: boolean;
  events?: BiqEvent[];
}