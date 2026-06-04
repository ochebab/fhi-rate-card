# FHI Rate Card Component Spec

## 1. Goal

Package the existing FHI rate card from `template.html` as reusable Angular and React component libraries that can be installed into external projects and initialized from JSON.

The component must render from a single serializable plan object. External projects should be able to provide that object declaratively and imperatively:

```ts
component.setData(json);
```

The current source of truth is:

- `template.html` section 3.3: production rate card CSS.
- `template.html` section 3.4: responsive CSS.
- `template.html` section 4b: production rate card markup.
- `template.html` section 5: model defaults, icon helpers, and behavior.
- `instructions.html`: behavioral, accessibility, and CMS field documentation.

The configurator panel in `template.html` is preview-only and must not ship inside the production packages.

## 2. Recommended Package Structure

Use a small monorepo with one framework-neutral core package and two framework wrappers.

```txt
packages/
  core/
    src/
      model/
        rate-card-plan.ts
        default-plan.ts
        normalize-plan.ts
        validate-plan.ts
      icons/
        rate-card-icons.ts
      styles/
        rate-card.css
      public-api.ts
  angular/
    src/
      fhi-rate-card.component.ts
      fhi-rate-card.component.html
      fhi-rate-card.module.ts
      public-api.ts
  react/
    src/
      FhiRateCard.tsx
      FhiRateCard.types.ts
      index.ts
examples/
  angular-app/
  react-app/
```

The core package owns all schema, defaults, normalization, validation, icon metadata, and CSS. Angular and React own only framework rendering and local UI state.

## 3. Public Packages

Publish or distribute:

- `@fhi/rate-card-core`
- `@fhi/rate-card-angular`
- `@fhi/rate-card-react`

If the packages stay private, the same names can be used with a private npm registry, tarball install, or workspace dependency.

## 4. Shared Data Contract

The component renders a `RateCardPlan`.

```ts
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
  summary: {
    enabled: boolean;
    text: string;
  };
}

export interface RateCardJourneyStep {
  period: string;
  price: string;
  tag?: string;
  subtext: string;
  style: 'active' | 'discounted' | 'regular';
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
  icon: 'check' | 'plus' | 'star' | 'shield' | 'wifi';
  color: string;
}

export interface RateCardCta {
  label: string;
  color: string;
}
```

The library should also accept the existing template wrapper shape:

```ts
export interface RateCardJsonTemplate {
  _version?: string;
  _mapping?: Record<string, string>;
  plan: Partial<RateCardPlan>;
}
```

Input can be either:

- raw `RateCardPlan`
- partial `RateCardPlan`
- JSON string containing either a raw plan or `{ plan: {...} }`

## 5. Core API

The core package should export:

```ts
export function defaultRateCardPlan(): RateCardPlan;

export function normalizeRateCardPlan(
  input: RateCardPlan | Partial<RateCardPlan> | RateCardJsonTemplate | string | null | undefined
): RateCardPlan;

export function validateRateCardPlan(input: unknown): RateCardValidationResult;

export function isValidRateCardPlan(input: unknown): input is RateCardPlan;
```

`normalizeRateCardPlan` must:

1. Parse string input as JSON.
2. Accept `{ plan: {...} }` and unwrap it.
3. Deep merge the payload with `defaultRateCardPlan()`.
4. Preserve unknown fields only if explicitly required by consumers. Default behavior should drop unknown fields to keep the schema clean.
5. Coerce missing optional nested objects to defaults.
6. Normalize invalid enum values to defaults.

`validateRateCardPlan` must return structured errors:

```ts
export interface RateCardValidationResult {
  valid: boolean;
  errors: Array<{
    path: string;
    message: string;
  }>;
}
```

Validation should reject impossible root shapes, missing required arrays, invalid color values, invalid journey step styles, and non-numeric prices. Normalization can be permissive; validation should be explicit.

## 6. Angular Package

Target modern Angular, not AngularJS.

### Component Selector

```html
<fhi-rate-card [data]="plan"></fhi-rate-card>
```

### Public API

```ts
@Component({
  selector: 'fhi-rate-card',
  templateUrl: './fhi-rate-card.component.html',
  styleUrls: ['../../core/src/styles/rate-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FhiRateCardComponent {
  @Input() set data(value: RateCardInput) {
    this.setData(value);
  }

  @Output() ctaClick = new EventEmitter<RateCardPlan>();
  @Output() journeyOpen = new EventEmitter<RateCardPlan>();
  @Output() journeyClose = new EventEmitter<RateCardPlan>();

  plan = defaultRateCardPlan();
  featuresOpen = false;
  journeyModalOpen = false;

  setData(value: RateCardInput): void {
    this.plan = normalizeRateCardPlan(value);
    this.closeJourney();
  }
}
```

`RateCardInput` is:

```ts
export type RateCardInput =
  | RateCardPlan
  | Partial<RateCardPlan>
  | RateCardJsonTemplate
  | string
  | null
  | undefined;
```

### Angular Module

Provide both standalone and module-based usage if the supported Angular version allows it.

```ts
@NgModule({
  declarations: [FhiRateCardComponent],
  imports: [CommonModule],
  exports: [FhiRateCardComponent]
})
export class FhiRateCardModule {}
```

### Angular Requirements

- Use `*ngIf`, `*ngFor`, `[ngClass]`, `[ngStyle]`, and interpolation.
- Use `trackBy` functions for features and journey steps.
- Do not use AngularJS syntax, `$sce`, `ngSanitize`, or `ng-bind-html`.
- Inline SVG icons should be Angular-safe static templates or produced from a trusted icon map controlled by the library.
- Use `OnPush` change detection.
- Avoid direct DOM access except focus management for the modal, and only through Angular-safe APIs where practical.

## 7. React Package

### Component Usage

```tsx
import { FhiRateCard, FhiRateCardHandle } from '@fhi/rate-card-react';

const ref = useRef<FhiRateCardHandle>(null);

<FhiRateCard ref={ref} data={plan} onCtaClick={handleCtaClick} />;

ref.current?.setData(json);
```

### Public API

```ts
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
```

Implementation should use `forwardRef` and `useImperativeHandle`.

```tsx
export const FhiRateCard = forwardRef<FhiRateCardHandle, FhiRateCardProps>(
  function FhiRateCard(props, ref) {
    const [plan, setPlan] = useState(() => normalizeRateCardPlan(props.data));
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [journeyModalOpen, setJourneyModalOpen] = useState(false);

    useEffect(() => {
      setPlan(normalizeRateCardPlan(props.data));
      setJourneyModalOpen(false);
    }, [props.data]);

    useImperativeHandle(ref, () => ({
      setData(value) {
        setPlan(normalizeRateCardPlan(value));
        setJourneyModalOpen(false);
      },
      getData() {
        return plan;
      },
      openJourney() {
        setJourneyModalOpen(true);
      },
      closeJourney() {
        setJourneyModalOpen(false);
      }
    }), [plan]);
  }
);
```

### React Requirements

- Use controlled local state for `featuresOpen` and `journeyModalOpen`.
- Do not mutate the incoming `data` prop.
- Use `key` values for arrays. Prefer stable IDs if added later; otherwise use index only while the schema has no IDs.
- Do not use `dangerouslySetInnerHTML` for feature icons. Render controlled SVG components from the library icon map.
- Keep CSS class names aligned with the production CSS from `template.html`.

## 8. Styling and Assets

The shared CSS must be copied from production sections only:

- section 3.3: rate card styles
- section 3.4: responsive overrides

Do not include:

- reset and `body` layout rules from preview page
- floating demo/configurator buttons
- configurator panel styles
- JSON import/export UI styles

Prefix all production classes with a stable library namespace where practical. Existing names can be preserved for fidelity, but the root must always include a package class:

```html
<article class="fhi-rate-card pricing-card">
```

Fonts should be package assets or documented peer assets:

```css
@font-face {
  font-family: 'Ambra Sans Text';
  src: url('./assets/fonts/Ambra-Sans-Text-Regular.ttf') format('truetype');
}
```

If external host projects cannot consume packaged fonts, expose a CSS variable fallback:

```css
.fhi-rate-card {
  --fhi-rate-card-font-family: 'Ambra Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## 9. Behavior

### Initial Render

If no data is supplied, render `defaultRateCardPlan()`.

### setData

`setData(value)` must:

1. Accept object or JSON string.
2. Accept raw plan or `{ plan: {...} }`.
3. Normalize with defaults.
4. Replace the current plan.
5. Close the price journey modal.
6. Leave the feature accordion state unchanged unless the new data invalidates the feature list.

### Feature Accordion

- Closed by default.
- Uses `aria-expanded`.
- Toggling changes only local UI state, never the plan JSON.

### Price Journey Modal

- Hidden by default in production unless `plan.journey.enabled === true`.
- Opens from the reserved journey link row.
- Uses `role="dialog"`, `aria-modal="true"`, and a labelled title.
- Closes on close button, backdrop click, and Escape.
- Restores focus to the opening button where possible.
- Body content is rendered from `plan.journey`, not from a separate modal data shape.

### CTA

The component should emit a CTA event and should not hard-code navigation.

Angular:

```ts
@Output() ctaClick = new EventEmitter<RateCardPlan>();
```

React:

```ts
onCtaClick?: (plan: RateCardPlan) => void;
```

## 10. Build Outputs

### Core

- ESM output.
- Type declarations.
- CSS asset copied to package.

### Angular

- Build with Angular Package Format through `ng-packagr`.
- Peer dependencies: `@angular/common`, `@angular/core`.
- Dependency: `@fhi/rate-card-core`.

### React

- ESM and CJS output if consumers require both.
- Type declarations.
- Peer dependencies: `react`, `react-dom`.
- Dependency: `@fhi/rate-card-core`.

## 11. Testing

### Core Tests

- `normalizeRateCardPlan` accepts raw plan object.
- `normalizeRateCardPlan` accepts `{ plan }` wrapper.
- `normalizeRateCardPlan` accepts JSON string.
- Missing `topBanner` receives defaults.
- Invalid journey step style falls back to `regular`.
- Validation reports path-level errors.

### Angular Tests

- Renders defaults with no input.
- Renders supplied JSON through `[data]`.
- `setData` replaces the visible card.
- CTA emits current plan.
- Journey link is absent when disabled.
- Journey modal opens and closes when enabled.

### React Tests

- Renders defaults with no prop.
- Renders supplied JSON through `data`.
- Ref `setData` replaces the visible card.
- `onCtaClick` receives current plan.
- Journey link is absent when disabled.
- Journey modal opens and closes when enabled.

### Browser Checks

Run visual smoke tests for:

- desktop card width around 411px
- mobile width at 375px
- feature accordion closed and open
- journey modal desktop
- journey modal mobile bottom-sheet behavior
- multi-card alignment when only some cards have journey enabled

## 12. Migration From template.html

1. Extract production CSS only.
2. Convert AngularJS template bindings to Angular and React syntax.
3. Move `defaultPlan()` into `defaultRateCardPlan()`.
4. Move `ensurePlanDefaults()` into `normalizeRateCardPlan()` and expand it into a deep schema merge.
5. Replace `$sce`/`ng-bind-html` icon rendering with framework-safe SVG components.
6. Keep `ui` state separate from `plan` state.
7. Remove preview-only configurator, data import/export panel, floating buttons, and body reset styles.
8. Add tests before publishing.

## 13. Acceptance Criteria

- Angular package can be installed in an external Angular app and render `<fhi-rate-card [data]="json">`.
- Angular consumers can call `component.setData(json)`.
- React package can be installed in an external React app and render `<FhiRateCard data={json} />`.
- React consumers can call `ref.current.setData(json)`.
- Both packages render the same JSON with visually equivalent output.
- Both packages use the same TypeScript `RateCardPlan` contract from core.
- No production package ships the configurator.
- No production package relies on AngularJS.
- The price journey is hidden by default and only appears when enabled in JSON.
- CTA actions are emitted to the host app instead of hard-coded.
- Integration instructions are maintained in `docs/components/rate-card/integration.md`.
