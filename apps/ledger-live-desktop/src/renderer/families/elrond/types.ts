// @flow

export type ValidatorType = {
  apr: any;
  avatar: string;
  description: string;
  distribution: any;
  identity: string;
  location: string;
  locked: string;
  name: string;
  providers: Array<string>;
  rank: number;
  score: number;
  stake: string;
  stakePercent: any;
  topUp: string;
  twitter: string;
  validators: number;
  website: string;
};

export type UnbondingType = {
  amount: string;
  seconds: number;
  contract?: string;
  validator?: ValidatorType;
};

export type DelegationType = {
  address: string;
  claimableRewards: string;
  contract: string;
  userActiveStake: string;
  userUnBondable: string;
  userUndelegatedList: Array<UnbondingType>;
  validator: ValidatorType;
};
