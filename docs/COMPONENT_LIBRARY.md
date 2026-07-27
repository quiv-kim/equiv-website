# EQUIV Component Library

Version 1.0
Status: Approved

이 문서는 EQUIV Website의 공식 Component 목록, Variant, State와 Responsive 책임을 정의한다. 새로운 페이지는 이 Library의 Component를 조합하여 구성한다.

## Architecture

모든 Component는 다음 구조를 사용한다.

`Component → Variant → State → Responsive`

모든 시각 값은 `Foundation → Semantic → Component Token` 순서로 전달된다. Component는 Foundation Token이나 임의 Hex, RGB, Font Size, Shadow, Motion Duration과 Z-index를 직접 사용하지 않는다.

## Button

### Canonical Name

- Base: `.button`
- Primary: `.button-primary`
- Secondary: `.button-secondary`
- Ghost: `.button-ghost`
- Danger: `.button-danger`

기존 `.btn`, `.btn-primary`, `.btn-secondary`는 Backward Compatibility Alias로 유지한다. 신규 Markup은 Canonical Name을 우선한다.

### Structure

`Label` 또는 `Label + 기존 Line Icon`

### States

- Default
- Hover: 최대 `-2px` Lift와 공통 Shadow
- Active: 원위치
- Focus: Gold Focus Ring
- Disabled: `disabled` 또는 `aria-disabled="true"`
- Loading: `.is-loading` 또는 `aria-busy="true"`

### Responsive

- Desktop·Tablet: Content Width, `52px`
- Mobile: Full Width, `54px`
- Touch Target: 최소 `44px`

## Card

### Types

- Principle Card
- Service Card
- Insight Card
- Expertise Card

### Structure

`Optional Label/Icon → Title → Description → Optional Link`

### States

- Default
- Hover: `-3px`, Card Hover Shadow
- Active: 원위치
- Focus: Gold Focus Ring
- Disabled: `aria-disabled="true"`
- Loading: `aria-busy="true"`

### Responsive

- Desktop: 3 Columns, Equal Height, `32px` Padding
- Tablet: 2 Columns, Equal Height, `28px` Padding
- Mobile: 1 Column, Auto Height, `24px` Padding

## Header & Navigation

### Structure

`Official Logo Lockup → Primary Navigation → Action`

### Variants

- Desktop Horizontal
- Tablet·Mobile Collapsed
- Dropdown 1 Level

### States

- Default / Scrolled / Open
- Link Hover / Active / Focus
- Dropdown Closed / Open

Header와 Navigation Breakpoint는 CSS의 `--breakpoint-desktop`을 JavaScript가 읽어 공유한다.

## Hero

### Structure

`Brand → Headline → Description(Optional) → CTA → Supporting Information(Optional)`

### Variants

- Home Hero
- Page Hero
- Business Valuation Lead Hero

새로운 정보 순서나 장식용 Variant를 추가하지 않는다.

## Section Header

### Structure

`Kicker(Optional) → H2 → Description(Optional)`

Container 기준선과 Heading Rhythm은 모든 페이지에서 동일하게 유지한다.

## Form Control

### Types

- Text Input
- Email / Tel Input
- Select
- Textarea
- Radio / Checkbox

### States

- Default
- Hover
- Focus
- Disabled
- Invalid
- Valid

Label은 Input 위에 표시하며 Placeholder만으로 입력 목적을 설명하지 않는다. Mobile Input Text는 iOS 자동 확대를 막기 위해 최소 `16px`을 유지한다.

## Modal

### Types

- Consultation Modal
- Business Valuation Modal
- Deal Readiness Modal

### Structure

`Backdrop → Dialog → Header → Body → Action`

### States

- Closed
- Open
- State Transition
- Success
- Loading

ESC, Overlay, Close Control, Focus Trap과 Trigger Focus Return을 지원한다. Dynamic Viewport, Safe Area와 내부 Scroll을 유지한다.

## Accordion

### Types

- FAQ
- Privacy Detail
- Mobile Navigation Submenu

### States

- Collapsed
- Expanded
- Focus

`aria-expanded`, `aria-controls`와 공통 Accordion Motion Token을 사용한다.

## Footer

### Structure

`Brand Signature → Site Map`

Desktop은 2 Column, Tablet·Mobile은 Vertical Flow를 사용한다. Footer는 회사소개가 아니라 Brand Signature 역할만 수행한다.

## Icon

### Canonical Name

- Base: `.icon`
- Small: `.icon--sm`
- Medium: `.icon`
- Large: `.icon--lg`

Outline SVG와 `currentColor`를 사용한다. Stroke, Line Cap과 Line Join은 Visual Token을 공유하며, Icon-only Control은 `aria-label` 또는 화면에 보이는 Label을 제공한다.

## Image

Hero는 `images/backgrounds/hero-city.webp`를 공통 Background Asset으로 사용하고 Navy Overlay로 Text Contrast를 확보한다. Content Image는 의미에 따라 Alt Text를 제공하며 Below-the-fold Image는 Lazy Loading과 Async Decoding을 사용한다.

## Empty State

Base는 `.empty-state`다. 짧은 제목·설명과 필요한 CTA로 구성하며 장식용 Illustration을 기본값으로 추가하지 않는다.

## Skeleton

Base는 `.skeleton`이다. Content Shape를 유지하는 Loading Placeholder로 사용하고 공통 Visual Loading Duration과 Reduced Motion 규칙을 따른다. 진행 상태는 별도로 `role="status"` 또는 `aria-live`로 전달한다.

## Governance Checklist

새 Component 또는 Variant 추가 전에 확인한다.

- 기존 Component 조합으로 해결 가능한가?
- Variant 추가만으로 해결 가능한가?
- 모든 State와 Responsive Rule이 정의되었는가?
- 기존 페이지와 Backward Compatibility가 유지되는가?
- Token과 Component의 책임이 분리되어 있는가?
- `DESIGN_SYSTEM.md`, 이 문서와 `CHANGELOG.md`가 함께 변경되는가?

승인되지 않은 Page 전용 Component, 임의 Variant와 직접 스타일 값은 추가하지 않는다.
