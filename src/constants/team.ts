import { ValueOf } from '@/types';
import { TeamName } from '@/types/dto';

export const teamUrls = {
  design: 'design',
  web: 'web',
  android: 'android',
  ios: 'ios',
  node: 'node',
  spring: 'spring',
} as const;

export const teamNames = {
  design: 'Design',
  web: 'Web',
  android: 'Android',
  ios: 'iOS',
  node: 'Node',
  spring: 'Spring',
} as const;

export const teamIds = {
  12: {
    [teamNames.design]: 5,
    [teamNames.web]: 6,
    [teamNames.android]: 7,
    [teamNames.ios]: 8,
    [teamNames.node]: 9,
    [teamNames.spring]: 10,
  },
  13: {
    [teamNames.design]: 11,
    [teamNames.web]: 12,
    [teamNames.android]: 13,
    [teamNames.ios]: 14,
    [teamNames.node]: 15,
    [teamNames.spring]: 16,
  },
  // TODO: 14기 팀 id 확정되면 수정
  14: {
    [teamNames.design]: 17,
    [teamNames.web]: 18,
    [teamNames.android]: 19,
    [teamNames.ios]: 20,
    [teamNames.node]: 21,
    [teamNames.spring]: 22,
  },
} as const;

export const TEAM_NICK_NAME: Record<TeamName, string> = {
  Design: 'Product Design Team',
  Android: 'Android Team',
  iOS: 'iOS Team',
  Web: 'Web Team',
  Node: 'Node Team',
  Spring: 'Spring Team',
} as const;

export type Teams = ValueOf<typeof teamUrls>;
export type TeamNames = ValueOf<typeof teamNames>;
export type TeamIds = ValueOf<typeof teamIds>;
