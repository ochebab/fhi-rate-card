import { normalizeRateCardPlan } from './normalize-rate-card-plan';
import { RateCardInput, RateCardPlan } from './rate-card-plan';

export interface RateCardValidationResult {
  valid: boolean;
  errors: Array<{
    path: string;
    message: string;
  }>;
}

const hexColorPattern = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

export function validateRateCardPlan(input: RateCardInput): RateCardValidationResult {
  const errors: RateCardValidationResult['errors'] = [];
  let plan: RateCardPlan;

  if (typeof input === 'string') {
    try {
      JSON.parse(input);
    } catch (error) {
      return {
        valid: false,
        errors: [{ path: '$', message: error instanceof Error ? error.message : 'Invalid JSON input.' }]
      };
    }
  }

  try {
    plan = normalizeRateCardPlan(input);
  } catch (error) {
    return {
      valid: false,
      errors: [{ path: '$', message: error instanceof Error ? error.message : 'Invalid JSON input.' }]
    };
  }

  requireString(plan.badge, 'badge', errors);
  requireString(plan.headline, 'headline', errors);
  requireNumber(plan.currentPrice, 'currentPrice', errors);
  requireArray(plan.features, 'features', errors);
  requireArray(plan.journey.steps, 'journey.steps', errors);

  [
    ['badgeBg', plan.badgeBg],
    ['headlineColor', plan.headlineColor],
    ['headerGradient.top', plan.headerGradient.top],
    ['headerGradient.bottom', plan.headerGradient.bottom],
    ['cta.color', plan.cta.color]
  ].forEach(([path, value]) => requireColor(value, path, errors));

  plan.features.forEach((feature, index) => {
    requireString(feature.text, `features.${index}.text`, errors);
    requireColor(feature.color, `features.${index}.color`, errors);
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

export function isValidRateCardPlan(input: RateCardInput): input is RateCardPlan {
  return validateRateCardPlan(input).valid;
}

function requireString(value: unknown, path: string, errors: RateCardValidationResult['errors']): void {
  if (typeof value !== 'string' || value.trim().length === 0) {
    errors.push({ path, message: 'Expected a non-empty string.' });
  }
}

function requireNumber(value: unknown, path: string, errors: RateCardValidationResult['errors']): void {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    errors.push({ path, message: 'Expected a finite number.' });
  }
}

function requireArray(value: unknown, path: string, errors: RateCardValidationResult['errors']): void {
  if (!Array.isArray(value)) {
    errors.push({ path, message: 'Expected an array.' });
  }
}

function requireColor(value: unknown, path: string, errors: RateCardValidationResult['errors']): void {
  if (typeof value !== 'string' || !hexColorPattern.test(value)) {
    errors.push({ path, message: 'Expected a hex color value.' });
  }
}
