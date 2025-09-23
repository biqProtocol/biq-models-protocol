import { BiqEvent } from "../event";
import { BiqPeripheralSignature } from "../proof";


export type BiqValidateNonceRequest = BiqPeripheralSignature[];

export type BiqValidateNonceResponse = {events: BiqEvent[]};
