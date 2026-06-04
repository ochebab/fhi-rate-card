# FHI Component Creation Rules

These rules apply when creating or changing FHI components in Angular, React, or shared core code.

## 0. Spec Split

- Keep `docs/component-library-spec.md` generic. It defines package architecture, wrapper patterns, and shared rules for all components.
- Keep component-specific details in `docs/components/<component-name>/spec.md`.
- For the rate card, use `docs/components/rate-card/spec.md`.
- Do not add component fields, visual details, CMS mappings, or one-off behavior to the generic library spec.
- When adding a new component, create its spec before scaffolding framework code.

## 1. Data First

- Each component must render from one JSON-compatible object defined in its component spec.
- Do not store CMS-editable content in component-local UI state.
- Do not hard-code CMS-owned copy, prices, colors, legal text, media, feature lists, or other editable fields in Angular or React templates.
- All new editable fields must be added to the shared TypeScript interface, defaults, normalizer, validator, and documentation.
- Accept the raw component JSON and the wrapper shape documented by that component spec.

## 2. Shared Core Owns Schema

- Put model types, defaults, normalization, validation, and icon/media keys in the component's core package.
- Angular and React wrappers must import the shared core contract instead of redefining it.
- Framework wrappers must not contain separate default models.
- Framework wrappers must not mutate incoming data.
- Normalization must deep merge missing fields with defaults so older JSON remains compatible.

## 3. Public Initialization API

Every framework wrapper must support both declarative and imperative data loading.

Angular:

```html
<fhi-component-name [data]="data"></fhi-component-name>
```

```ts
component.setData(json);
```

React:

```tsx
<FhiComponentName data={data} ref={componentRef} />
```

```ts
componentRef.current?.setData(json);
```

`setData` must parse strings, unwrap the documented wrapper shape, normalize defaults, replace the current rendered data, and reset invalidated local UI state.

## 4. How Everything Works

- Host apps provide JSON through props/inputs or by calling `setData(json)`.
- The wrapper passes that value to the component's core normalizer.
- The normalizer parses strings, unwraps the documented wrapper shape, applies defaults, validates/coerces supported fields, and returns a complete data object.
- Angular and React render only from normalized data plus local UI state.
- Shared CSS controls visual fidelity; framework templates should preserve production class names defined by the component spec.
- User actions are emitted to the host app. The component never owns routing, checkout, analytics, or CMS persistence unless its spec explicitly says so.
- Local UI state controls only accordions and modals. It is reset only when data replacement requires it.

## 5. Future Component Update Procedure

Use this process whenever adding, removing, or changing a visible component field or behavior:

1. Start from the source of truth: check the component-specific spec, `docs/component-library-spec.md`, and this rules file. For the rate card, also check `template.html` and `instructions.html`.
2. Update shared core first: component data types, defaults, normalizer, validator, and icon/media mappings if needed.
3. Update Angular and React wrappers from the same core field names. Do not create framework-specific schema aliases.
4. Update production CSS only when visual behavior changes. Avoid preview/configurator styles.
5. Update examples and CMS field documentation for any editor-visible field.
6. Add or update tests for core normalization/validation and both framework wrappers.
7. Run the visual and interaction checks listed in the component-specific spec.
8. If the JSON contract changes, document whether older payloads remain compatible and ensure normalization fills missing fields.

## 6. UI State Is Separate

- Local UI state is limited to presentation behavior such as feature accordion open/closed and journey modal open/closed.
- UI state must never be serialized into the component data object.
- Toggling local UI controls must not mutate component JSON.
- Opening or closing dialogs must not mutate component JSON.

## 7. Production Only

Do not ship preview-only code. Examples include:

- configurator panel
- floating demo/docs/stories buttons
- JSON import/export panel
- preview body layout and reset rules
- prototype-only framework/controller code
- dependencies used only by prototypes

The production source for each component is its component-specific spec and referenced source files.

## 8. Framework-Specific Rules

Angular:

- Use modern Angular, not AngularJS.
- Use `@Input()` for `data`.
- Expose `setData`.
- Use `@Output()` for host events.
- Use `ChangeDetectionStrategy.OnPush`.
- Use `trackBy` for repeated collections.
- Avoid direct DOM access except modal focus management.

React:

- Use `forwardRef` and `useImperativeHandle` for `setData`.
- Use props for declarative data.
- Use callbacks for host events.
- Do not use `dangerouslySetInnerHTML`.
- Render icons from controlled SVG components or a trusted internal icon map.

## 9. Styling Rules

- Keep the visual output aligned with the component-specific spec.
- Start from production CSS only.
- Keep a stable component root class.
- Avoid global `body`, universal reset, or page layout styles in package CSS.
- Preserve any layout-reservation, equal-height, or responsive behavior documented by the component spec.
- Preserve desktop and mobile behavior unless the component spec changes.

## 10. Accessibility Rules

- Primary actions must be real buttons unless the host supplies navigation semantics.
- Expand/collapse controls must expose `aria-expanded`.
- Dialog triggers must expose `aria-haspopup="dialog"` and `aria-controls`.
- Dialogs must expose `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
- Closed modal content must be hidden from assistive technology.
- Escape, close button, and backdrop close must work.
- Restore focus to the opening control when practical.
- Decorative icons must be hidden from assistive technology.

## 11. Event Rules

- The component must not hard-code checkout URLs or navigation.
- Primary actions must emit the current normalized data object to the host app.
- Dialog open and close events should emit the current normalized data object.
- Host apps own routing, analytics, ordering, and CMS persistence.

## 12. Validation Rules

- Invalid root JSON should produce a validation error.
- Missing optional nested fields should normalize to defaults.
- Invalid enum values should normalize or validate clearly.
- Invalid colors should be reported by validation.
- Arrays must remain arrays; invalid arrays should be replaced with defaults during normalization and reported during validation.

## 13. Testing Rules

Every component change must include or update tests for:

- default render
- render from data input
- imperative `setData`
- primary action events
- component-specific local UI behavior
- hidden/default states
- modal/dialog open and close when applicable
- responsive/mobile smoke coverage for layout changes

Shared model changes must include core tests for normalization and validation.

## 14. Documentation and Rules Parity

When a field is added, removed, or renamed, update:

- component TypeScript interface
- component default-data factory
- component normalizer
- component validator
- CMS field map documentation
- Angular and React examples if the field is visible

Do not update only one framework wrapper. Angular and React must remain schema-compatible.

Keep repository rules and documentation in parity:

- If implementation behavior changes, update `template.html`, `instructions.html`, and relevant files in `docs/`.
- If any component is updated, update all related docs and integration instructions in the same change: the component spec, generic library spec if affected, examples, CMS/API field mapping, host-app usage snippets, and framework integration notes.
- If contributor or agent workflow changes, update both `AGENTS.md` and `.windsurfrules`.
- If component-library rules change, update `docs/component-library-spec.md` when the generic architecture is affected.
- If a component-specific rule changes, update that component's `docs/components/<component-name>/spec.md`.
- Do not let `.windsurfrules` and `AGENTS.md` contradict each other. `.windsurfrules` can be shorter, but it must preserve the same source-of-truth, validation, and production-only requirements.
- PRs that change component behavior should mention which docs/rules were checked or updated.
