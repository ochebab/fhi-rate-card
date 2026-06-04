import { RateCardIconKey } from '../model/rate-card-plan';

export const rateCardIconKeys: RateCardIconKey[] = ['check', 'plus', 'star', 'shield', 'wifi'];

export function isRateCardIconKey(value: unknown): value is RateCardIconKey {
  return typeof value === 'string' && rateCardIconKeys.includes(value as RateCardIconKey);
}
