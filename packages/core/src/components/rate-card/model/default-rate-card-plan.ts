import { RateCardPlan } from './rate-card-plan';

export function defaultRateCardPlan(): RateCardPlan {
  return {
    cardLabel: 'Internet - Rate Card Model',
    topBanner: {
      enabled: false,
      text: 'Limited time offer!',
      bgColor: '#2E7DC1',
      textColor: '#ffffff'
    },
    badge: 'Internet 1G',
    badgeBg: '#17599C',
    headline: 'Internet 1G',
    headlineSize: 48,
    headlineColor: '#ed6b1f',
    headerGradient: {
      top: '#0a1628',
      bottom: '#162a4a'
    },
    originalPrice: 95,
    currentPrice: 75,
    period: '/mo.',
    priceNote: 'for your first 12 months',
    savings: 'Save $240 in your first year',
    show: {
      headline: true,
      originalPrice: true,
      savings: true
    },
    journey: {
      enabled: false,
      toggleLabel: 'See price journey',
      title: '',
      savingsText: 'Save $240/year',
      steps: [
        { period: 'Months 1-3', price: 'Free', tag: 'Free trial', subtext: '3 months on us', style: 'active' },
        { period: 'Months 4-12', price: '$39/mo', tag: '', subtext: '$6 off/mo.', style: 'active' }
      ],
      summary: {
        enabled: true,
        text: 'Free for 3 months, then $39/mo. through month 12, then $45/mo. ongoing.'
      }
    },
    specs: {
      enabled: true,
      showTitle: true,
      title: 'Internet specs',
      download: { value: '1 Gbps', label: 'download speed', color: '#2E7DC1' },
      upload: { value: '50 Mbps', label: 'upload speed', color: '#2E7DC1' },
      usage: { value: 'Unlimited', label: 'monthly usage', color: '#2E7DC1' }
    },
    features: [
      { text: 'Ideal for 20+ devices online at the same time', icon: 'check', color: '#2E7DC1' },
      { text: 'Perfect for streaming, gaming & 4K video', icon: 'check', color: '#2E7DC1' },
      { text: 'No contracts - cancel anytime', icon: 'plus', color: '#ed6b1f' }
    ],
    cta: {
      label: 'Choose This Plan',
      color: '#ed6b1f'
    },
    legal: '*Promotional pricing. $95/mo. starting month 13. Taxes extra.',
    showLegal: true
  };
}
