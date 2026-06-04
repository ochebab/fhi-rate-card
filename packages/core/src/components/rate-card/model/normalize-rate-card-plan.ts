import { defaultRateCardPlan } from './default-rate-card-plan';
import {
  RateCardFeature,
  RateCardInput,
  RateCardJourneyStep,
  RateCardPlan
} from './rate-card-plan';

const iconKeys = ['check', 'plus', 'star', 'shield', 'wifi'] as const;
const journeyStyles = ['active', 'discounted', 'regular'] as const;

export function normalizeRateCardPlan(input: RateCardInput): RateCardPlan {
  const defaults = defaultRateCardPlan();
  const candidate = unwrapInput(input);

  if (!isRecord(candidate)) {
    return defaults;
  }

  return {
    ...defaults,
    cardLabel: stringOr(candidate.cardLabel, defaults.cardLabel),
    topBanner: {
      ...defaults.topBanner,
      ...objectOr(candidate.topBanner),
      enabled: booleanOr(get(candidate, 'topBanner.enabled'), defaults.topBanner.enabled),
      text: stringOr(get(candidate, 'topBanner.text'), defaults.topBanner.text),
      bgColor: stringOr(get(candidate, 'topBanner.bgColor'), defaults.topBanner.bgColor),
      textColor: stringOr(get(candidate, 'topBanner.textColor'), defaults.topBanner.textColor)
    },
    badge: stringOr(candidate.badge, defaults.badge),
    badgeBg: stringOr(candidate.badgeBg, defaults.badgeBg),
    headline: stringOr(candidate.headline, defaults.headline),
    headlineSize: numberOr(candidate.headlineSize, defaults.headlineSize),
    headlineColor: stringOr(candidate.headlineColor, defaults.headlineColor),
    headerGradient: {
      top: stringOr(get(candidate, 'headerGradient.top'), defaults.headerGradient.top),
      bottom: stringOr(get(candidate, 'headerGradient.bottom'), defaults.headerGradient.bottom)
    },
    originalPrice: numberOr(candidate.originalPrice, defaults.originalPrice),
    currentPrice: numberOr(candidate.currentPrice, defaults.currentPrice),
    period: stringOr(candidate.period, defaults.period),
    priceNote: stringOr(candidate.priceNote, defaults.priceNote),
    savings: stringOr(candidate.savings, defaults.savings),
    show: {
      headline: booleanOr(get(candidate, 'show.headline'), defaults.show.headline),
      originalPrice: booleanOr(get(candidate, 'show.originalPrice'), defaults.show.originalPrice),
      savings: booleanOr(get(candidate, 'show.savings'), defaults.show.savings)
    },
    journey: {
      enabled: booleanOr(get(candidate, 'journey.enabled'), defaults.journey.enabled),
      toggleLabel: stringOr(get(candidate, 'journey.toggleLabel'), defaults.journey.toggleLabel),
      title: stringOr(get(candidate, 'journey.title'), defaults.journey.title),
      savingsText: stringOr(get(candidate, 'journey.savingsText'), defaults.journey.savingsText),
      steps: normalizeSteps(get(candidate, 'journey.steps'), defaults.journey.steps),
      summary: {
        enabled: booleanOr(get(candidate, 'journey.summary.enabled'), defaults.journey.summary.enabled),
        text: stringOr(get(candidate, 'journey.summary.text'), defaults.journey.summary.text)
      }
    },
    specs: {
      enabled: booleanOr(get(candidate, 'specs.enabled'), defaults.specs.enabled),
      showTitle: booleanOr(get(candidate, 'specs.showTitle'), defaults.specs.showTitle),
      title: stringOr(get(candidate, 'specs.title'), defaults.specs.title),
      download: normalizeSpec(get(candidate, 'specs.download'), defaults.specs.download),
      upload: normalizeSpec(get(candidate, 'specs.upload'), defaults.specs.upload),
      usage: normalizeSpec(get(candidate, 'specs.usage'), defaults.specs.usage)
    },
    features: normalizeFeatures(candidate.features, defaults.features),
    cta: {
      label: stringOr(get(candidate, 'cta.label'), defaults.cta.label),
      color: stringOr(get(candidate, 'cta.color'), defaults.cta.color)
    },
    legal: stringOr(candidate.legal, defaults.legal),
    showLegal: booleanOr(candidate.showLegal, defaults.showLegal)
  };
}

function unwrapInput(input: RateCardInput): unknown {
  const parsed = typeof input === 'string' ? safeParse(input) : input;
  if (isRecord(parsed) && isRecord(parsed.plan)) {
    return parsed.plan;
  }
  return parsed;
}

function safeParse(input: string): unknown {
  try {
    return JSON.parse(input);
  } catch {
    return undefined;
  }
}

function normalizeSpec(value: unknown, defaults: { value: string; label: string; color: string }) {
  return {
    value: stringOr(get(value, 'value'), defaults.value),
    label: stringOr(get(value, 'label'), defaults.label),
    color: stringOr(get(value, 'color'), defaults.color)
  };
}

function normalizeFeatures(value: unknown, defaults: RateCardFeature[]): RateCardFeature[] {
  if (!Array.isArray(value)) {
    return defaults;
  }

  return value.map((item, index) => {
    const fallback = defaults[index] ?? defaults[0];
    const icon = get(item, 'icon');
    return {
      text: stringOr(get(item, 'text'), fallback.text),
      icon: includes(iconKeys, icon) ? icon : fallback.icon,
      color: stringOr(get(item, 'color'), fallback.color)
    };
  });
}

function normalizeSteps(value: unknown, defaults: RateCardJourneyStep[]): RateCardJourneyStep[] {
  if (!Array.isArray(value)) {
    return defaults;
  }

  return value.map((item, index) => {
    const fallback = defaults[index] ?? defaults[0];
    const style = get(item, 'style');
    return {
      period: stringOr(get(item, 'period'), fallback.period),
      price: stringOr(get(item, 'price'), fallback.price),
      tag: stringOr(get(item, 'tag'), fallback.tag),
      subtext: stringOr(get(item, 'subtext'), fallback.subtext),
      style: includes(journeyStyles, style) ? style : fallback.style
    };
  });
}

function stringOr(value: unknown, fallback: string | undefined): string {
  return typeof value === 'string' ? value : fallback ?? '';
}

function numberOr(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function booleanOr(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function objectOr(value: unknown): Record<string, unknown> {
  return isRecord(value) ? value : {};
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function get(value: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((current, segment) => {
    if (!isRecord(current)) {
      return undefined;
    }
    return current[segment];
  }, value);
}

function includes<T extends readonly string[]>(values: T, value: unknown): value is T[number] {
  return typeof value === 'string' && values.includes(value as T[number]);
}
