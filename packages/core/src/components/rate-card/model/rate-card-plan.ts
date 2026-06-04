export type RateCardIconKey = 'check' | 'plus' | 'star' | 'shield' | 'wifi';
export type RateCardJourneyStepStyle = 'active' | 'discounted' | 'regular';

export interface RateCardPlan {
  cardLabel?: string;
  topBanner: RateCardTopBanner;
  badge: string;
  badgeBg: string;
  headline: string;
  headlineSize: number;
  headlineColor: string;
  headerGradient: RateCardGradient;
  originalPrice: number;
  currentPrice: number;
  period: string;
  priceNote: string;
  savings: string;
  show: RateCardVisibility;
  journey: RateCardJourney;
  specs: RateCardSpecs;
  features: RateCardFeature[];
  cta: RateCardCta;
  legal: string;
  showLegal: boolean;
}

export interface RateCardTopBanner {
  enabled: boolean;
  text: string;
  bgColor: string;
  textColor: string;
}

export interface RateCardGradient {
  top: string;
  bottom: string;
}

export interface RateCardVisibility {
  headline: boolean;
  originalPrice: boolean;
  savings: boolean;
}

export interface RateCardJourney {
  enabled: boolean;
  toggleLabel: string;
  title: string;
  savingsText: string;
  steps: RateCardJourneyStep[];
  summary: RateCardJourneySummary;
}

export interface RateCardJourneyStep {
  period: string;
  price: string;
  tag: string;
  subtext: string;
  style: RateCardJourneyStepStyle;
}

export interface RateCardJourneySummary {
  enabled: boolean;
  text: string;
}

export interface RateCardSpecs {
  enabled: boolean;
  showTitle: boolean;
  title: string;
  download: RateCardSpecItem;
  upload: RateCardSpecItem;
  usage: RateCardSpecItem;
}

export interface RateCardSpecItem {
  value: string;
  label: string;
  color: string;
}

export interface RateCardFeature {
  text: string;
  icon: RateCardIconKey;
  color: string;
}

export interface RateCardCta {
  label: string;
  color: string;
}

export interface RateCardJsonTemplate {
  _version?: string;
  _mapping?: Record<string, string>;
  plan: Partial<RateCardPlan>;
}

export type RateCardInput =
  | RateCardPlan
  | Partial<RateCardPlan>
  | RateCardJsonTemplate
  | string
  | null
  | undefined;
