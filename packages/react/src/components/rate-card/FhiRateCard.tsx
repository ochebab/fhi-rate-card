import React, {
  forwardRef,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';
import {
  normalizeRateCardPlan,
  RateCardFeature,
  RateCardIconKey,
  RateCardInput,
  RateCardPlan,
  RateCardSpecItem
} from '@fhi/rate-card-core';
import { FhiRateCardHandle, FhiRateCardProps } from './FhiRateCard.types';

export const FhiRateCard = forwardRef<FhiRateCardHandle, FhiRateCardProps>(
  function FhiRateCard({ data, className = '', onCtaClick, onJourneyOpen, onJourneyClose }, ref) {
    const [plan, setPlan] = useState<RateCardPlan>(() => normalizeRateCardPlan(data));
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [journeyOpen, setJourneyOpen] = useState(false);

    useEffect(() => {
      setPlan(normalizeRateCardPlan(data));
      setJourneyOpen(false);
    }, [data]);

    useEffect(() => {
      if (!journeyOpen) {
        return undefined;
      }

      function onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
          closeJourney();
        }
      }

      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, [journeyOpen, plan]);

    useImperativeHandle(
      ref,
      () => ({
        setData(value: RateCardInput) {
          setPlan(normalizeRateCardPlan(value));
          setJourneyOpen(false);
        },
        getData() {
          return plan;
        },
        openJourney() {
          setJourneyOpen(true);
          onJourneyOpen?.(plan);
        },
        closeJourney() {
          setJourneyOpen(false);
          onJourneyClose?.(plan);
        }
      }),
      [onJourneyClose, onJourneyOpen, plan]
    );

    const rootClassName = useMemo(
      () => ['fhi-rate-card', className].filter(Boolean).join(' '),
      [className]
    );

    function openJourney(): void {
      setJourneyOpen(true);
      onJourneyOpen?.(plan);
    }

    function closeJourney(): void {
      setJourneyOpen(false);
      onJourneyClose?.(plan);
    }

    function closeOnBackdrop(event: MouseEvent<HTMLDivElement>): void {
      if (event.target === event.currentTarget) {
        closeJourney();
      }
    }

    return (
      <>
        <article className={rootClassName}>
          {plan.cardLabel ? <div className="fhi-rate-card__label">{plan.cardLabel}</div> : null}

          <div className="fhi-rate-card__card">
            {plan.topBanner.enabled ? (
              <div
                className="fhi-rate-card__banner"
                style={{ background: plan.topBanner.bgColor, color: plan.topBanner.textColor }}
              >
                {plan.topBanner.text}
              </div>
            ) : null}

            <header
              className="fhi-rate-card__header"
              style={{
                background: `linear-gradient(180deg, ${plan.headerGradient.top} 0%, ${plan.headerGradient.bottom} 100%)`
              }}
            >
              <span className="fhi-rate-card__badge" style={{ background: plan.badgeBg }}>
                {plan.badge}
              </span>

              <div
                className={plan.show.headline ? 'fhi-rate-card__headline' : 'fhi-rate-card__hidden'}
                style={{ color: plan.headlineColor, fontSize: plan.headlineSize }}
              >
                {plan.headline}
              </div>

              <p className={plan.show.originalPrice ? 'fhi-rate-card__original-price' : 'fhi-rate-card__hidden'}>
                Reg. Price: ${plan.originalPrice}
                {plan.period}
              </p>

              <div className="fhi-rate-card__price">
                <span className="fhi-rate-card__currency">$</span>
                <span className="fhi-rate-card__amount">{plan.currentPrice}</span>
                <span className="fhi-rate-card__period">{plan.period}</span>
              </div>

              <p className="fhi-rate-card__price-note">{plan.priceNote}</p>

              <div className={plan.show.savings ? 'fhi-rate-card__savings' : 'fhi-rate-card__hidden'}>
                <Icon name="tag" />
                <span>{plan.savings}</span>
              </div>
            </header>

            {plan.specs.enabled ? (
              <section className="fhi-rate-card__specs">
                {plan.specs.showTitle ? <div className="fhi-rate-card__spec-title">{plan.specs.title}</div> : null}
                <SpecItem item={plan.specs.download} icon="download" />
                <SpecItem item={plan.specs.upload} icon="upload" />
                <SpecItem item={plan.specs.usage} icon="unlimited" />
              </section>
            ) : null}

            <button
              className="fhi-rate-card__toggle"
              type="button"
              aria-expanded={featuresOpen}
              onClick={() => setFeaturesOpen((open) => !open)}
            >
              <span>What's included</span>
              <span aria-hidden="true">{featuresOpen ? '-' : '+'}</span>
            </button>

            <section className={featuresOpen ? 'fhi-rate-card__features fhi-rate-card__features--open' : 'fhi-rate-card__features'}>
              <ul>
                {plan.features.map((feature, index) => (
                  <FeatureItem feature={feature} key={`${feature.text}-${index}`} />
                ))}
              </ul>
            </section>

            <div className="fhi-rate-card__body">
              <button
                className="fhi-rate-card__cta"
                type="button"
                style={{ background: plan.cta.color }}
                onClick={() => onCtaClick?.(plan)}
              >
                {plan.cta.label}
              </button>
            </div>

            <div className="fhi-rate-card__journey-row">
              {plan.journey.enabled ? (
                <button
                  className="fhi-rate-card__journey-link"
                  type="button"
                  aria-haspopup="dialog"
                  aria-controls="fhi-rate-card-journey"
                  onClick={openJourney}
                >
                  {plan.journey.toggleLabel} <span aria-hidden="true">&gt;</span>
                </button>
              ) : null}
            </div>

            <p className={plan.showLegal ? 'fhi-rate-card__legal' : 'fhi-rate-card__hidden'}>{plan.legal}</p>
          </div>
        </article>

        <div
          aria-hidden={!journeyOpen}
          className={journeyOpen ? 'fhi-rate-card__modal fhi-rate-card__modal--open' : 'fhi-rate-card__modal'}
          id="fhi-rate-card-journey"
          onClick={closeOnBackdrop}
        >
          <div
            aria-labelledby="fhi-rate-card-journey-title"
            aria-modal="true"
            className="fhi-rate-card__modal-panel"
            role="dialog"
          >
            <header className="fhi-rate-card__modal-header">
              <h2 className="fhi-rate-card__modal-title" id="fhi-rate-card-journey-title">
                {plan.badge} - Price journey
              </h2>
              <button className="fhi-rate-card__modal-close" type="button" aria-label="Close" onClick={closeJourney}>
                x
              </button>
            </header>

            <section>
              {plan.journey.title ? <strong>{plan.journey.title}</strong> : null}
              {plan.journey.savingsText ? <p>{plan.journey.savingsText}</p> : null}

              <div className="fhi-rate-card__journey-steps">
                {plan.journey.steps.map((step, index) => (
                  <div className={`fhi-rate-card__journey-step fhi-rate-card__journey-step--${step.style}`} key={`${step.period}-${index}`}>
                    {step.tag ? <strong>{step.tag}</strong> : null}
                    <div>{step.period}</div>
                    <div>{step.price}</div>
                    {step.subtext ? <small>{step.subtext}</small> : null}
                  </div>
                ))}
              </div>

              {plan.journey.summary.enabled ? <div className="fhi-rate-card__summary">{plan.journey.summary.text}</div> : null}
            </section>

            <footer className="fhi-rate-card__body">
              <button className="fhi-rate-card__cta" type="button" style={{ background: plan.cta.color }} onClick={() => onCtaClick?.(plan)}>
                {plan.cta.label}
              </button>
            </footer>
          </div>
        </div>
      </>
    );
  }
);

function SpecItem({ item, icon }: { item: RateCardSpecItem; icon: 'download' | 'upload' | 'unlimited' }) {
  return (
    <div className="fhi-rate-card__spec-item">
      <span className="fhi-rate-card__icon" style={{ background: item.color }}>
        <Icon name={icon} />
      </span>
      <span>
        <strong>{item.value}</strong> {item.label}
      </span>
    </div>
  );
}

function FeatureItem({ feature }: { feature: RateCardFeature }) {
  return (
    <li className="fhi-rate-card__feature">
      <span className="fhi-rate-card__icon" style={{ background: feature.color }}>
        <Icon name={feature.icon} />
      </span>
      <span>{feature.text}</span>
    </li>
  );
}

function Icon({ name }: { name: RateCardIconKey | 'tag' | 'download' | 'upload' | 'unlimited' }) {
  if (name === 'plus') return <span aria-hidden="true">+</span>;
  if (name === 'star') return <span aria-hidden="true">*</span>;
  if (name === 'download') return <span aria-hidden="true">v</span>;
  if (name === 'upload') return <span aria-hidden="true">^</span>;
  if (name === 'unlimited') return <span aria-hidden="true">un</span>;
  if (name === 'tag') return <span aria-hidden="true">$</span>;
  return <span aria-hidden="true">ok</span>;
}
