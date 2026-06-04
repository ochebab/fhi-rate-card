import { RateCardInput, RateCardPlan } from '@fhi/rate-card-core';

export interface FhiRateCardProps {
  data?: RateCardInput;
  className?: string;
  onCtaClick?: (plan: RateCardPlan) => void;
  onJourneyOpen?: (plan: RateCardPlan) => void;
  onJourneyClose?: (plan: RateCardPlan) => void;
}

export interface FhiRateCardHandle {
  setData(value: RateCardInput): void;
  getData(): RateCardPlan;
  openJourney(): void;
  closeJourney(): void;
}
