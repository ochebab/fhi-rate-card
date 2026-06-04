# Component Library Technical Spec

## 1. Purpose

This document defines the generic architecture for packaging reusable UI components from this repository for external Angular and React projects. Component-specific behavior, fields, layout, and acceptance criteria must live in a dedicated spec under `docs/components/<component-name>/spec.md`.

The library should make future components easy to add without duplicating schema, build, validation, or framework wrapper patterns.

## 2. Documentation Model

Use two levels of documentation:

- `docs/component-library-spec.md`: generic library structure, package boundaries, naming, build outputs, and cross-framework rules.
- `docs/components/<component-name>/spec.md`: component-specific data contract, source files, behavior, styling, accessibility, tests, and acceptance criteria.

Do not put component-specific fields, copy, markup details, or design decisions in this generic spec.

## 3. Recommended Repository Structure

```txt
packages/
  core/
    src/
      components/
        <component-name>/
          model/
          icons/
          styles/
          index.ts
      index.ts
  angular/
    src/
      components/
        <component-name>/
      index.ts
  react/
    src/
      components/
        <component-name>/
      index.ts
docs/
  components/
    <component-name>/
      spec.md
examples/
  angular-app/
  react-app/
```

The `core` package owns framework-neutral contracts and utilities. Angular and React packages own framework rendering only.

## 4. Package Boundaries

Create or maintain these package layers:

- `@fhi/<component-name>-core`: shared types, defaults, normalizers, validators, icon metadata, and component CSS.
- `@fhi/<component-name>-angular`: Angular wrappers that import from core.
- `@fhi/<component-name>-react`: React wrappers that import from core.

Package names may be narrowed for publishing, but the separation must remain.

## 5. Component Contract Pattern

Each component must define a shared input type in core:

```ts
export type ComponentInput =
  | ComponentData
  | Partial<ComponentData>
  | { data: Partial<ComponentData> }
  | string
  | null
  | undefined;
```

Each component must provide:

- `default<ComponentName>Data()`
- `normalize<ComponentName>Data(input)`
- `validate<ComponentName>Data(input)`
- exported TypeScript interfaces
- framework-safe icons or media references, if needed
- package CSS scoped under a component root class

Normalization must parse JSON strings, unwrap supported wrapper objects, apply defaults, and return a complete data object.

## 6. Framework Wrapper Pattern

Angular wrappers must support:

- declarative input with `@Input() data`
- imperative update with `setData(value)`
- host events with `@Output()`
- `ChangeDetectionStrategy.OnPush`

React wrappers must support:

- declarative input with a `data` prop
- imperative update with `forwardRef` and `useImperativeHandle`
- host callbacks for events
- no mutation of incoming props

Both wrappers must render from the same normalized core data object.

## 7. Styling and Assets

Component CSS must be scoped under a stable root class:

```html
<section class="fhi-component-name">
```

Avoid global `body`, reset, page layout, or preview-only styles in package CSS. Fonts, images, and icons must be either packaged assets or documented peer assets.

## 8. Testing Requirements

Every component package should include tests for:

- default render
- declarative data input
- imperative `setData`
- event callbacks
- local UI state
- normalization and validation
- responsive smoke coverage for visual components

Component-specific test cases belong in `docs/components/<component-name>/spec.md`.

## 9. Adding a New Component

1. Create `docs/components/<component-name>/spec.md`.
2. Add core model, defaults, normalizer, validator, styles, and component exports.
3. Add Angular and React wrappers using the shared core contract.
4. Add examples for both frameworks.
5. Add tests for core and wrappers.
6. Update `docs/component-creation-rules.md`, `AGENTS.md`, and `.windsurfrules` if process rules change.

## 10. Acceptance Criteria

A component is library-ready when:

- Angular and React render the same normalized input with equivalent output.
- Both wrappers expose declarative and imperative data APIs.
- Core owns schema, defaults, validation, and normalization.
- Framework wrappers do not redefine schemas.
- CSS is scoped and production-only.
- Component-specific behavior is documented in its own spec.
