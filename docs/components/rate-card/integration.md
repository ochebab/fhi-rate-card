# FHI Rate Card Integration

Use this guide when consuming the packaged rate card in an external Angular or React project.

## Shared Contract

All framework wrappers render the same normalized `RateCardPlan` from `@fhi/rate-card-core`.

Supported input shapes:

- raw `RateCardPlan`
- partial `RateCardPlan`
- JSON string
- `{ plan: { ... } }` wrapper JSON from the template export flow

The wrapper normalizes missing fields with `defaultRateCardPlan()`.

## React

```tsx
import { useRef } from 'react';
import { FhiRateCard, FhiRateCardHandle } from '@fhi/rate-card-react';
import '@fhi/rate-card-core/src/components/rate-card/styles/rate-card.css';

const ref = useRef<FhiRateCardHandle>(null);

<FhiRateCard
  ref={ref}
  data={rateCardJson}
  onCtaClick={(plan) => choosePlan(plan)}
/>;

ref.current?.setData(nextJson);
```

## Angular

```ts
import { FhiRateCardModule } from '@fhi/rate-card-angular';

@NgModule({
  imports: [FhiRateCardModule]
})
export class AppModule {}
```

```html
<fhi-rate-card
  [data]="rateCardJson"
  (ctaClick)="choosePlan($event)"
></fhi-rate-card>
```

The Angular component also exposes `setData(value)` for imperative updates through `@ViewChild`.

## CSS

The package CSS is scoped under `.fhi-rate-card`. Host apps should import the shared stylesheet once and should not copy preview/configurator CSS from `template.html`.

## Host-Owned Behavior

The component emits events for CTA and journey open/close. The host app owns routing, checkout, analytics, ordering, and CMS persistence.
