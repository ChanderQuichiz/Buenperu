import { account } from "./account";

export type team = {
    teamId?: number;
    name?: string;
    district?: string;
    sportType?: string;
    iconSrc?: string;
    account: account;
}