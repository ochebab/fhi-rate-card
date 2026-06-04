# Repository Guidelines

## Project Structure & Module Organization

This repository contains static HTML prototypes and docs for the FHI rate card.

- `template.html`: canonical single-card builder and source of truth for production markup, CSS, model defaults, and behavior.
- `rate-cards-demo.html`: multi-card demo for alignment, feature expansion, and journey modal behavior.
- `instructions.html`: developer documentation and CMS field mapping.
- `docs/`: Angular/React component packaging specs and rules.
- `packages/`: core, Angular, and React component library packages.
- `examples/`: placeholder Angular and React integration examples.
- `fonts/`, `images/`, `TV Logos/`: local assets used by prototypes.
- `.github/`: repository automation and deployment workflow files.

If component packages are added, follow generic architecture in `docs/component-library-spec.md` and component-specific details in `docs/components/<component-name>/spec.md`.

## Build, Test, and Development Commands

There is no `package.json`, build command, or automated test suite. Validate changes by opening the affected HTML file in a browser:

```powershell
Start-Process .\template.html
Start-Process .\rate-cards-demo.html
Start-Process .\instructions.html
```

For searches, prefer:

```powershell
rg "journey.enabled" template.html instructions.html
```

When Angular/React packages are introduced, add the relevant `npm install`, `npm test`, and `npm run build` commands here.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, JavaScript, and Markdown. Keep existing section comments and numbering in `template.html` and `instructions.html`; they are integration references. Preserve production-vs-preview separation.

Use descriptive CSS class names matching the existing style, such as `.journey-link-row`, `.pricing-card`, and `.internet-specs`. For TypeScript, use PascalCase components, camelCase functions/fields, and `RateCard*` type names.

## Testing Guidelines

Manual browser checks are required for visual changes:

- desktop and mobile widths
- feature accordion closed/open states
- price journey hidden by default
- journey modal open, Escape close, backdrop close, and mobile bottom-sheet behavior
- multi-card alignment when only some plans expose a journey

For component libraries, add unit tests for normalization, validation, declarative data input, imperative `setData(json)`, CTA events, and modal behavior.

## Commit & Pull Request Guidelines

Use concise imperative commit subjects, following the existing history:

```txt
Add real-time keyword search inside the channels modal
Refactor Price Journey to modal pattern, add multi-card demo, flatten URLs
```

Pull requests should include a short summary, affected files/pages, manual test notes, and screenshots or recordings for visual changes. Link related issues or user stories when available. Keep unrelated prototype, asset, and documentation changes out of the same PR.

## Agent-Specific Instructions

Before changing component behavior, read `docs/component-creation-rules.md` and the relevant `docs/components/<component-name>/spec.md`. For the rate card, treat `template.html` production sections and `instructions.html` as source files. Do not introduce AngularJS dependencies into planned modern Angular or React packages.

Keep guidance files aligned: component behavior changes must update related docs and integration instructions, and workflow/rule changes must keep `AGENTS.md` and `.windsurfrules` consistent.
