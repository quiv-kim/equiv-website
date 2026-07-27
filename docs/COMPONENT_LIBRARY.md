# EQUIV Component Library

Version 1.0
Status: Approved Draft
Document Type: UI Component Governance Standard
Owner: EQUIV Design System
Applies To: Website, Lead Generation Tools, Consultation Experience and Future Digital Products

---

## Table of Contents

1. Document Control
2. Component Philosophy
3. Library Structure
4. Component Inventory and Status
5. Component Naming Convention
6. Shared Component Anatomy
7. Button
8. Card
9. Hero
10. Navigation
11. Section
12. Form
13. Modal
14. Accordion
15. Table
16. Badge
17. Alert, Toast and Notification
18. Loading
19. Empty State
20. Business Valuation Components
21. Insight Components
22. Footer
23. Interaction Rules
24. Responsive Rules
25. Accessibility
26. Component Tokens
27. Composition Rules
28. Component Lifecycle
29. Versioning and Migration
30. Work Implementation Rules
31. Global QA Checklist
32. Best Practice
33. Future Expansion

Appendices:

- A. Component Specification Template
- B. Proposal Template
- C. Review Record
- D. Deprecation Notice
- E. Dependency Matrix
- F. Page Composition Map
- G. Pull Request Checklist
- H. Current Class Compatibility Map

---

## 1. Document Control

### 1.1 Purpose

이 문서는 EQUIV가 사용하는 모든 UI Component의 목적, 구조, Variant, State, Responsive, Accessibility, Interaction, Token, Code와 QA 기준을 정의한다.

새로운 페이지는 새로운 디자인을 만드는 방식이 아니라 이 Library의 Component를 조합하여 만든다. 기존 Component로 해결할 수 없는 경우에만 Proposal과 승인 절차를 거쳐 Library를 확장한다.

### 1.2 Relationship to Other Documents

중복 규정을 만들지 않는다.

1. `EQUIV_DESIGN_BIBLE.md`: 브랜드 철학과 시각적 승인 기준
2. `DESIGN_SYSTEM.md`: Color, Typography, Spacing, Motion, Responsive와 Token Source
3. `VISUAL_ASSET_GUIDE.md`: Image, Icon, SVG와 Asset Lifecycle
4. `COMPONENT_LIBRARY.md`: Component의 구조, State, Composition과 구현 계약
5. `BRAND_GUIDE.md`: Logo, Brand Color와 Photography Tone
6. `CONTENT_UX_WRITING_SYSTEM.md`: Component에 사용되는 Voice, Tone, Terminology와 State Message
7. `COPY_GUIDE.md`: 자주 쓰는 UI Copy 규칙의 간략한 요약

Component가 위 문서와 충돌하면 Component를 수정한다.

Component의 Label, Helper, Error, Success, Empty, Confirmation과 Accessible Name은 `CONTENT_UX_WRITING_SYSTEM.md`를 따른다. Component Library는 문구가 들어가는 위치와 State를 정의하고, 실제 문장의 Voice와 의미를 재정의하지 않는다.

### 1.3 Normative Language

- **MUST / 반드시**: 배포 전 충족해야 한다.
- **MUST NOT / 금지**: 구현하거나 배포하지 않는다.
- **SHOULD / 권장**: 특별한 근거가 없다면 따른다.
- **MAY / 허용**: 필요성과 영향 검토 후 사용할 수 있다.
- **EXCEPTION / 예외**: Owner, 사유, 만료일과 Migration Plan이 필요하다.

### 1.4 Component Status

| Status | 의미 |
|---|---|
| Active | Production에서 사용 가능 |
| Limited | 특정 Context에만 사용 가능 |
| Planned | 표준은 정의했으나 구현 전 |
| Experimental | 제한된 검증 환경에서만 사용 |
| Deprecated | 새 사용 금지, Migration 진행 |
| Prohibited | EQUIV Visual Language와 맞지 않아 사용 금지 |

### 1.5 Documentation Rule

Markdown은 고정 Page가 없으므로 페이지 수보다 운영 밀도를 기준으로 한다. A4 발행 시 장별 Page Break, Code Example, QA와 Appendix를 포함해 약 120~180페이지로 확장 가능한 구조를 유지한다. 분량을 맞추기 위한 반복 설명은 금지한다.

### 1.6 Industry Reference

이 Library는 Google Material Design의 상태·접근성 명시 방식, IBM Carbon의 Component Status와 Usage Guidance, Microsoft Fluent의 Platform Adaptation, Atlassian Design System의 Content·Interaction Contract, Shopify Polaris의 Product Workflow 중심성, Adobe Spectrum의 Scale·State 일관성, GitHub Primer의 실용적 API·Migration 원칙을 참고한다.

외부 System은 설계 품질을 검토하는 기준일 뿐 EQUIV의 Source of Truth가 아니다. Naming, Visual Style, Token 값, Layout과 Code를 복제하지 않으며 EQUIV Design Bible, 실제 Production 구현과 국내 M&A Advisory Context를 우선한다.

---

## 2. Component Philosophy

### 2.1 Component-centered Development

Page는 Component의 결과다. Page-specific CSS와 일회성 Markup을 먼저 만들지 않는다.

### 2.2 Reuse Principle

새 UI 요청은 아래 순서로 검토한다.

1. 기존 Component 그대로 사용
2. 기존 Component Composition
3. 승인된 Variant 사용
4. 기존 Variant 확장
5. 신규 Component Proposal

### 2.3 Single Source of Truth

- Design Value: `DESIGN_SYSTEM.md`와 CSS Token
- Component Contract: 이 문서
- Production Implementation: Repository의 HTML/CSS/JavaScript
- Asset Rule: `VISUAL_ASSET_GUIDE.md`
- Version History: Git과 `CHANGELOG.md`

Screenshot, Figma Frame, 메신저 이미지와 개인 파일은 Source of Truth가 아니다.

### 2.4 Composition First

새 Component를 만들기 전에 기존 Atoms와 Molecules를 조합한다. 단순히 두 Component가 함께 보인다는 이유로 새 Organism을 만들지 않는다.

### 2.5 Atomic Design Application

EQUIV는 Atomic Design을 엄격한 폴더 구조가 아니라 책임 구분에 사용한다.

- Atoms: Button, Icon, Typography Role, Input, Checkbox, Radio, Badge, Divider
- Molecules: Form Group, Card Header, Alert, Breadcrumb, Pagination
- Organisms: Header, Hero, Service Section, Insight Grid, Footer, Contact Form, Modal
- Templates: Landing, Article, Service Detail, Insight Detail, Contact, About
- Pages: 실제 Content와 Navigation Context가 결합된 화면

Page가 Atom의 Visual Value를 직접 바꾸지 않는다.

### 2.6 Component Lifecycle

`Proposal → Design → Review → Approval → Development → QA → Release → Maintenance → Deprecated → Archive`

### 2.7 Design Principles

- 한 역할에 한 Component
- Variant는 의미 차이가 있을 때만
- State는 모든 Input Method에서 이해 가능
- Responsive는 Component 내부 책임
- Accessibility는 Optional Feature가 아님
- Page-specific Exception 최소화

### 2.8 DO

- 기존 Component와 Variant를 먼저 검색한다.
- Semantic HTML을 우선한다.
- Token을 통해 Visual Value를 사용한다.
- State와 Responsive를 함께 설계한다.
- Component 변경이 모든 Page에 미치는 영향을 검토한다.

### 2.9 DON'T

- Page 이름이 포함된 범용 Component를 만들지 않는다.
- 같은 역할의 Button이나 Card를 복제하지 않는다.
- Component 안에 임의 Color, Font Size, Shadow와 Motion을 하드코딩하지 않는다.
- Hover만으로 의미를 전달하지 않는다.
- Accessibility를 QA 단계에 뒤늦게 추가하지 않는다.

### 2.10 PM Note

Component 개발 일정은 화면 한 개 완성 시간이 아니다. State, Responsive, Keyboard, Screen Reader, Regression, Documentation과 Migration을 포함한다.

---

## 3. Library Structure

### 3.1 Atoms

| Component | Status | Production Name |
|---|---|---|
| Typography Role | Active | `--type-*` |
| Button | Active | `.button`, `.btn` Alias |
| Icon | Active | `.icon` |
| Text Field | Active | `.form-field`, Modal Field |
| Textarea | Active | Native + Form Rule |
| Select | Active | Native + Form Rule |
| Checkbox | Active | Native + Form Rule |
| Radio | Active | Native + Form Rule |
| Switch | Planned | Not Implemented |
| Badge | Limited | `.valuation-public-badge` |
| Divider | Active | Component-specific Hairline |
| Avatar | Planned | Not Implemented |

### 3.2 Molecules

| Component | Status | Production Name |
|---|---|---|
| Form Group | Active | `.form-field`, `.valuation-field` |
| Card Header | Limited | Result/Equity Card Headers |
| Breadcrumb | Planned | Not Implemented |
| Pagination | Planned | Not Implemented |
| Alert | Limited | `.valuation-error`, Notice Copy |
| Toast | Planned | Not Implemented |
| Search Box | Planned | Not Implemented |
| Tooltip | Active | `.valuation-tooltip` |
| Empty State | Active Standard | `.empty-state` |
| Skeleton | Active | `.skeleton` |

### 3.3 Organisms

| Component | Status | Production Name |
|---|---|---|
| Header | Active | `.site-header` |
| Navigation | Active | `.site-nav`, Dropdown |
| Hero | Active | `.hero`, `.sub-hero`, Valuation Hero |
| Service Section | Active | `.service-grid` |
| Insight Grid | Active | `.insight-grid` |
| Footer | Active | `.site-footer` |
| Contact Form | Active | Consultation Modal Form |
| Modal | Active | Consultation, Readiness, Valuation |
| Accordion | Active | FAQ, Privacy, Mobile Navigation |
| Business Valuation | Active | `.valuation-*` |
| Table | Planned | Not Implemented |

### 3.4 Templates

| Template | Status | Pages |
|---|---|---|
| Landing | Active | Home |
| Brand | Active | About |
| Service Detail | Active | Sell, Buy, Valuation Review, Capital, Strategy |
| Insight Article | Active | M&A Practice, Industry, Market, Deal Stories |
| Lead Generation | Active | Business Valuation |
| Contact | Active as Modal | Shared Consultation Modal |

### 3.5 Pages

Page는 Content와 Route를 소유한다. Component Visual Contract를 변경하지 않는다.

- Home
- About
- Services
- Insights
- Business Valuation
- Contact Experience

---

## 4. Component Inventory and Status

### 4.1 Active Production Components

- Official Logo Lockup
- Header and Responsive Navigation
- One-level Dropdown
- Home, Subpage and Lead Hero
- Section Header and Container
- Primary, Secondary, Ghost and Danger Button
- Principle, Service, Insight and Expertise Card
- Native Form Controls
- Consultation, Readiness and Valuation Modal
- FAQ, Privacy and Mobile Navigation Accordion
- Tooltip
- Skeleton
- Empty State Standard
- Footer Signature
- Back to Top
- Business Valuation Input and Result Components

### 4.2 Planned Components

다음은 문서상 기준만 정의하며 Production에서 아직 사용하지 않는다.

- Switch
- Avatar
- Breadcrumb
- Pagination
- Search Box
- General Table
- General Badge Set
- General Toast and Notification Center
- Dashboard Navigation

### 4.3 Prohibited Components

- Carousel/Slider without proven content need
- Marquee
- Floating Decorative Widget
- Mega Menu without validated information architecture
- Icon Font
- 3D Flip Card
- Auto-dismiss Critical Alert
- Marketing Countdown

---

## 5. Component Naming Convention

### 5.1 Canonical Pattern

```text
.component
.component__element
.component--variant
.is-state
[data-component-action]
```

### 5.2 Prefix

Global Prefix를 강제하지 않는다. 외부 Library 충돌 가능성이 생기면 `equiv-` Namespace 도입을 Major Version에서 검토한다. 현재는 의미가 분명한 전체 이름을 사용한다.

### 5.3 Element

BEM 형태의 `__element`는 Component 내부 구조에만 사용한다.

```css
.consultation-modal
.consultation-modal__header
.consultation-modal__body
```

Element를 Component 밖에서 단독 사용하지 않는다.

### 5.4 Variant

시각적·기능적 의미가 다를 때 `--variant`를 사용한다.

```css
.button--primary
.card--insight
.section--muted
```

현재 Production의 `.button-primary`, `.btn-primary`, `.section-muted`는 Backward Compatibility Alias다.

### 5.5 State

동적 State는 `is-*` 또는 ARIA/Native Attribute를 우선한다.

```css
.is-open
.is-active
[aria-expanded="true"]
[aria-busy="true"]
:disabled
:invalid
```

### 5.6 Data Attributes

JavaScript Hook은 Styling Class와 분리한다.

```html
data-nav-toggle
data-consultation-open
data-valuation-form
```

JavaScript는 Styling Class 이름에 의존하지 않는다.

### 5.7 Reserved Terms

- `active`, `open`, `loading`, `disabled`, `selected`, `error`, `success`
- `primary`, `secondary`, `ghost`, `danger`
- `sm`, `md`, `lg`
- `header`, `body`, `footer`, `content`, `actions`

예약어는 문서에 정의된 의미와 다르게 사용하지 않는다.

### 5.8 Prohibited Names

```text
.box
.thing
.item2
.new-card
.final-button
.blue-button
.big-title
.left-section
.mobile-only-fix
.page3-component
```

Color, 위치, 임시 상태와 Page 번호로 이름을 만들지 않는다.

---

## 6. Shared Component Anatomy

모든 상세 Component는 아래 계약을 따른다.

1. Purpose
2. Usage
3. Structure
4. Variants
5. Sizes
6. Spacing
7. Typography
8. Color
9. Motion
10. Interaction
11. Responsive
12. Accessibility
13. Design Tokens
14. Code Rules
15. QA Checklist
16. Best Practice
17. Do
18. Don't
19. PM Notes
20. Related Components

구현되지 않은 항목은 생략하지 않고 `Not Applicable` 또는 `Planned`로 표시한다.

---

## 7. Button

### Purpose

사용자가 명확한 Action을 실행하게 한다. Navigation Link와 Button을 시각적으로 비슷하게 만들 수 있지만 Semantic Role은 구분한다.

### Usage

- Form Submit
- Modal Open/Close
- Primary Conversion
- Secondary Navigation Action
- Destructive Action

### Structure

`Button Container → Optional Icon → Label → Optional Status`

### Variants

| Variant | 용도 | Status |
|---|---|---|
| Primary | Page 또는 Context의 핵심 Action | Active |
| Secondary | 보조 Action | Active |
| Ghost | 낮은 우선순위 | Active |
| Danger | 삭제·취소 등 위험 Action | Active, Limited |
| Icon Button | 공간이 제한된 명확한 Action | Limited |
| Loading Button | 비동기 Submit | Active Standard |

### Sizes

- Desktop/Tablet: Standard Height Token
- Mobile: Mobile Height Token
- Touch Target: 최소 44px
- Compact Size는 Navigation이나 Dense Tool이 실제로 생길 때만 추가한다.

### Spacing

Horizontal Padding과 Icon Gap은 Component Token을 사용한다. Label 길이에 따라 Padding을 임의로 줄이지 않는다.

### Typography

`--type-button`, Semibold. Hover나 Active에서 Size와 Weight를 바꾸지 않는다.

### Color

Primary, Secondary, Ghost, Danger Component Token을 사용한다. Gold를 임의 Background로 추가하지 않는다.

### Motion

Hover는 Color, Shadow와 최대 `-2px` Lift다. Active에서 원위치로 복귀한다. Loading에서 반복 Bounce를 사용하지 않는다.

### Interaction

- Default
- Hover
- Focus Visible
- Pressed/Active
- Disabled
- Loading

### Responsive

Desktop과 Tablet은 Content Width, Mobile CTA는 Full Width를 기본으로 한다. Inline Action은 Content Width 예외가 가능하다.

### Accessibility

- Native `<button>` 우선
- Link 이동은 `<a>`
- Icon-only는 Accessible Name 필수
- Disabled는 `disabled` 우선
- Loading은 `aria-busy="true"`와 중복 Submit 방지
- Focus Ring 제거 금지

### Design Tokens

- `--component-button-height`
- `--component-button-height-mobile`
- `--component-button-padding-*`
- `--button-primary-*`
- `--button-secondary-*`
- `--button-focus-ring`
- `--motion-duration-hover`

### Code Rules

```html
<button class="button button-primary" type="button">
  상담 신청
</button>
```

Backward Compatibility:

```html
<button class="btn btn-primary" type="button">
  상담 신청
</button>
```

신규 Markup은 `.button` Naming을 우선한다.

### QA Checklist

- [ ] 역할에 맞는 Semantic Element인가?
- [ ] 같은 Context에 Primary가 하나인가?
- [ ] Hover 없이도 Action이 이해되는가?
- [ ] Focus Ring이 보이는가?
- [ ] Disabled와 Loading이 구분되는가?
- [ ] Mobile Touch Target이 충분한가?
- [ ] 긴 한글 Label에서 잘리지 않는가?
- [ ] Enter와 Space가 작동하는가?

### Best Practice

`상담 신청`처럼 행동을 직접 설명한다. `자세히`처럼 Context가 없으면 의미가 약한 Label은 피한다.

### Do

- 한 Context에 하나의 Primary Action
- Action을 Verb 중심으로 작성
- Loading 중 Label 또는 Status 유지

### Don't

- Button을 Link 대신 사용
- Disabled 이유를 설명하지 않음
- Hover에서 크기 변화
- Full-width Desktop CTA 남용

### PM Notes

새 Button Variant 요청은 실제 Action Priority가 기존 Variant와 다른지 확인한다. 단순 Color 변경은 Variant 근거가 아니다.

### Related Components

Form, Modal, Hero, Empty State, Alert

---

## 8. Card

### Purpose

관련 정보를 하나의 비교 가능한 단위로 묶는다. Card는 Border와 Shadow가 아니라 정보 구조다.

### Usage

Service, Insight, Principle, Value, CTA와 Summary.

### Structure

`Optional Label/Icon → Title → Description → Optional Metadata → Optional Link`

### Variants

| Variant | Production Mapping | Status |
|---|---|---|
| Principle Card | `.principle-card` | Active |
| Service Card | `.service-card`, `.expertise-card` | Active |
| Insight Card | `.insight-card` | Active |
| Value Card | `.valuation-range`, `.valuation-equity-card` | Active, Domain |
| CTA Card | `.valuation-entry-card` | Active, Limited |
| Summary Card | Valuation Result Groups | Active, Domain |

### Sizes

Width는 Grid가 결정한다. Page가 Card Width를 임의로 고정하지 않는다. 동일 Row는 Equal Height, Mobile은 Auto Height를 허용한다.

### Spacing

Desktop, Tablet, Mobile Card Padding Token을 사용한다. Compact Variant는 정보량이 실제로 다른 경우에만 사용한다.

### Typography

Title은 H3, Description은 Body, Label/Metadata는 Small 또는 Caption.

### Color

Surface, Border, Hover Border와 Text Semantic Token을 사용한다.

### Motion

Hover 가능 환경에서 `-3px` Lift와 Small Shadow. Touch에서는 Hover Lift를 제거하고 Active Feedback을 사용한다.

### Interaction

Card 전체가 Link인 경우 하나의 명확한 Interactive Target으로 만든다. Card 안에 중첩 Button/Link를 여러 개 두지 않는다.

### Responsive

- Desktop: 3 Column, Equal Height
- Tablet: 2 Column, Equal Height
- Mobile: 1 Column, Auto Height

### Accessibility

- Heading Level은 Page Hierarchy에 맞춘다.
- Clickable Card는 Keyboard Focus 가능
- 중첩 Interactive Element 금지
- Icon만으로 Category를 표현하지 않는다.

### Design Tokens

`--component-card-padding*`, `--card-background`, `--card-border*`, `--card-radius`, `--card-shadow-hover`, `--grid-card-gap`

### Code Rules

```html
<article class="service-card">
  <p class="section-kicker">Sell-side M&A</p>
  <h3>기업 매각</h3>
  <p>기업 특성과 거래 목적에 맞는 매각 전략을 설계합니다.</p>
  <a href="sell-side-advisory.html">알아보기</a>
</article>
```

### QA Checklist

- [ ] 정보 순서가 Library와 일치하는가?
- [ ] 같은 Row 높이가 안정적인가?
- [ ] Mobile에서 빈 공간이 과도하지 않은가?
- [ ] Focus와 Hover가 동일 위계를 전달하는가?
- [ ] Card 전체 Link와 내부 Link가 충돌하지 않는가?
- [ ] Description 길이가 Grid를 깨지 않는가?
- [ ] Border와 Shadow가 장식적으로 과하지 않은가?

### Best Practice

Service Card는 서비스명, 한 문장 설명과 명확한 Link만 제공한다. 설명을 줄이기 위해 Font Size를 축소하지 않는다.

### Do

- 같은 Set은 동일 구조
- Content 중심 Auto Height
- Grid Token 사용

### Don't

- Card마다 다른 Radius
- Scale Hover
- 장식용 Icon 남용
- Page별 임의 Padding

### PM Notes

Card 수가 Grid와 맞지 않는 문제를 해결하기 위해 새 Variant를 만들지 않는다. Grid Alignment와 Content Architecture를 먼저 검토한다.

### Related Components

Section, Grid, Button, Badge, Empty State

---

## 9. Hero

### Purpose

Page의 역할, 핵심 메시지와 다음 Action을 가장 먼저 전달한다.

### Usage

Home, Service Detail, Insight Article, About와 Business Valuation Lead Page.

### Structure

`Brand/Label → Headline → Description(Optional) → CTA → Supporting Information(Optional)`

### Variants

- Home Hero: `.hero`
- Page Hero: `.sub-hero`, `.service-hero`
- Insight Hero: `.insight-article-hero`
- Business Valuation Lead Hero: `.valuation-public-hero`

### Sizes

Height와 Typography는 Design Bible Chapter 3 및 Responsive Token을 따른다. `100vh`를 기본값으로 사용하지 않는다.

### Spacing

Hero 내부 Rhythm은 Brand, Headline, Description과 CTA 순서를 유지한다. CTA를 별도 Banner처럼 분리하지 않는다.

### Typography

Home Headline은 Display, Page Title은 H1. Label은 Small. Description은 Body.

### Color

Background와 Text Contrast는 Semantic Token을 사용한다. Image Treatment는 Visual Asset Guide를 따른다.

### Motion

Headline → Description → CTA → Supporting 순서. Opacity와 Translate만 사용한다.

### Interaction

Hero 자체는 Interactive하지 않다. CTA와 Scroll Cue만 명확한 Action을 제공한다.

### Responsive

- Desktop: Visual Impact
- Tablet: Reading Balance
- Mobile: CTA Priority
- Mobile Headline 최대 3줄
- Mobile CTA Full Width

### Accessibility

- 한 Page에 H1 하나
- Background Image가 의미 있으면 Text Alternative 제공
- CTA Focus Visible
- Reduced Motion에서 즉시 표시

### Design Tokens

`--type-display`, `--type-h1`, `--component-hero-padding`, `--visual-hero-overlay`, `--visual-hero-scrim`, Motion Token

### Code Rules

Hero Variant를 Page-specific Selector로 복제하지 않는다. 기존 Structure에서 Optional Element만 조합한다.

### QA Checklist

- [ ] 3초 안에 Page 역할을 이해할 수 있는가?
- [ ] Headline이 첫 중심인가?
- [ ] CTA가 Content에서 자연스럽게 이어지는가?
- [ ] Background가 Text보다 강하지 않은가?
- [ ] Mobile 첫 화면이 과도하게 길지 않은가?
- [ ] H1이 하나인가?
- [ ] Reduced Motion에서 Content가 보이는가?

### Best Practice

Description이 Headline을 반복한다면 제거한다. Supporting Information이 Headline보다 강하면 위계를 낮춘다.

### Do

- 짧은 Headline
- 하나의 Primary CTA
- Text Safe Area 확보

### Don't

- 여러 Visual Center
- Carousel Hero
- Auto-play Video
- 장식용 Statistics

### PM Notes

Hero 변경은 Copy, Image, LCP와 Conversion에 동시에 영향을 준다. 단순 Copy 수정으로 분류하지 않는다.

### Related Components

Header, Button, Section, Image, Statistics

---

## 10. Navigation

### Purpose

사용자가 현재 위치를 이해하고 주요 Page와 Action으로 이동하게 한다.

### Usage

Global Header, Dropdown, Mobile Menu와 Footer Sitemap.

### Structure

`Logo Lockup → Primary Navigation → Optional Action`

### Variants

- Desktop Horizontal
- Tablet/Mobile Collapsed
- One-level Dropdown
- Sticky/Scrolled Header
- Mega Menu: Planned, 현재 사용 금지

### Sizes

Header Height와 Touch Target은 Token을 사용한다. Logo 비율은 Brand Guide를 따른다.

### Spacing

Logo와 Navigation은 하나의 Group으로 보이게 한다. Menu Gap은 공통 Token을 사용한다.

### Typography

Navigation Type Role과 Semibold. Hover에서 Size/Weight 변경 금지.

### Color

Hero 위 Transparent/On-primary와 Scrolled Surface Variant를 사용한다.

### Motion

Color, Underline, Dropdown Fade/Translate. Mobile Menu는 공통 Motion Token을 사용한다.

### Interaction

- Hover와 Focus에서 Dropdown Open
- Click으로 Parent Page 이동 가능
- ESC와 Outside Click으로 Close
- 한 번에 하나의 Dropdown
- Mobile Touch Accordion

### Responsive

- Desktop ≥ 1200: Horizontal
- Tablet/Mobile < 1200: Collapsed
- Breakpoint는 CSS Token과 JavaScript가 공유

### Accessibility

- `aria-expanded`, `aria-haspopup`, `aria-controls`
- Keyboard Tab과 ESC
- Active Page `aria-current="page"`
- Mobile Toggle Accessible Name
- Focus가 Menu 밖으로 나가면 Close

### Design Tokens

Header Height, Logo, Dropdown, Layer, Navigation Type와 Motion Token.

### Code Rules

JavaScript Hook은 `data-nav-*`, Styling은 Class. `href="#"` 금지. 존재하는 Page만 노출한다.

### QA Checklist

- [ ] Logo가 Home으로 연결되는가?
- [ ] Active Parent와 Child가 표시되는가?
- [ ] Tab 순서가 시각 순서와 같은가?
- [ ] ESC와 Outside Click이 작동하는가?
- [ ] Dropdown으로 이동할 때 닫히지 않는가?
- [ ] Mobile에서 Hover에 의존하지 않는가?
- [ ] 200% Zoom에서 Menu를 사용할 수 있는가?
- [ ] 모든 Link가 실제 Page로 연결되는가?

### Best Practice

Menu는 짧은 명사로 유지하고 상세 설명은 Page에서 제공한다.

### Do

- 한 단계 Dropdown
- 명확한 Active State
- 44px Touch Target

### Don't

- 준비되지 않은 Link
- 불필요한 Mega Menu
- Hover-only Interaction
- Icon만 있는 Main Navigation

### PM Notes

Navigation Item 추가는 Header Width만의 문제가 아니라 Information Architecture 변경이다.

### Related Components

Header, Logo, Dropdown, Accordion, Footer

---

## 11. Section

### Purpose

Page Content를 의미 단위로 구분하고 동일한 Grid와 Vertical Rhythm을 제공한다.

### Usage

모든 Page Content Group.

### Structure

`Section → Container → Section Header → Content/Grid → Optional CTA`

### Variants

- Default
- Muted
- Brand/Navy
- Compact Closing
- Divider는 필요할 때만

### Sizes

Main, Standard, Closing Section Space Token을 사용한다.

### Spacing

Section Header, Description과 Content Gap은 Design System의 Rhythm을 따른다.

### Typography

Section Title H2, Description Body, Kicker Small.

### Color

White, Light Gray와 Navy Background만 기본 사용한다.

### Motion

Section Reveal은 Opacity와 Translate. Content 읽기를 지연시키지 않는다.

### Interaction

Section 자체는 Interactive하지 않는다.

### Responsive

Desktop 120px, Tablet 96px, Mobile 72px System Rhythm. 실제 구현 Token을 Source로 한다.

### Accessibility

Landmark가 필요한 Section에는 Accessible Name을 제공한다. 모든 `<section>`에 무분별한 ARIA Label을 추가하지 않는다.

### Design Tokens

Section Space, Container, Grid Gap, Background, Type와 Motion Token.

### Code Rules

```html
<section class="section" aria-labelledby="services-title">
  <div class="container">
    <header class="section-head">
      <p class="section-kicker">SERVICES</p>
      <h2 id="services-title">EQUIV 전문 서비스</h2>
    </header>
  </div>
</section>
```

### QA Checklist

- [ ] 왼쪽 기준선이 일치하는가?
- [ ] Heading Level이 올바른가?
- [ ] Section Space가 Token인가?
- [ ] Background 전환에 의미가 있는가?
- [ ] Mobile에서 여백이 무너지지 않는가?
- [ ] 불필요한 Divider가 없는가?

### Best Practice

배경색보다 Heading과 White Space로 Section을 구분한다.

### Do

- 공통 Container
- 의미 단위 Group
- 하나의 Section Title

### Don't

- Page마다 다른 Container
- 장식용 Section 추가
- 모든 Section에 다른 Background

### PM Notes

Section 추가는 Page Length와 Message Repetition을 증가시킨다. Content 역할이 기존 Section과 다른지 먼저 확인한다.

### Related Components

Container, Section Header, Grid, Card, CTA

---

## 12. Form

### Purpose

사용자가 최소한의 부담으로 정확한 정보를 입력하고 오류를 이해하며 Submit할 수 있게 한다.

### Usage

Consultation, Business Valuation과 향후 Search/Admin.

### Structure

`Form Group → Label → Control → Help/Error → Optional Status`

### Variants

- Text Field
- Email/Tel/Number
- Textarea
- Select
- Checkbox
- Radio
- Switch: Planned
- Field Group

### Sizes

Input과 Button Touch Target은 최소 44px. Mobile Input Text는 iOS 확대 방지를 위해 16px 이상.

### Spacing

Label, Control, Help Text와 Group Gap Token을 사용한다.

### Typography

Label Small, Input Body, Help/Error Caption.

### Color

Control Background, Border, Focus, Error, Disabled Token.

### Motion

Focus Transition만 사용한다. Error를 흔들거나 Bounce하지 않는다.

### Interaction

- Default
- Hover
- Focus
- Filled
- Disabled
- Read-only
- Invalid
- Valid
- Loading

### Responsive

Desktop은 2 Column 가능, Mobile은 1 Column. Label은 항상 Control 위에 둔다.

### Accessibility

- Visible Label 필수
- `for`와 `id` 연결
- Required를 시각·Programmatic하게 전달
- Error는 해당 Field와 연결
- Placeholder만으로 Label 대체 금지
- Related Radio/Checkbox는 Fieldset/Legend
- Number Spinner 정책은 Product Spec 준수

### Design Tokens

Form Control Background, Border, Focus Shadow, Type, Height, Padding와 Error Color.

### Code Rules

```html
<div class="form-field">
  <label for="company-name">회사명 <span aria-hidden="true">*</span></label>
  <input id="company-name" name="company_name" required>
  <p id="company-name-help">법인명을 입력해 주세요.</p>
</div>
```

### QA Checklist

- [ ] 모든 Control에 Label이 있는가?
- [ ] Keyboard만으로 완료 가능한가?
- [ ] Error가 Field와 연결되는가?
- [ ] Mobile에서 자동 확대되지 않는가?
- [ ] Autocomplete가 적절한가?
- [ ] Disabled와 Read-only가 구분되는가?
- [ ] Required 표시가 색상에만 의존하지 않는가?
- [ ] Submit 후 Focus가 Error 또는 Success로 이동하는가?

### Best Practice

초기 상담 Form은 필요한 정보만 수집하고 상세 자료는 상담 과정에서 요청한다.

### Do

- 입력 부담 최소화
- Inline Help 제공
- 실제 Input Type 사용

### Don't

- Placeholder-only Label
- 초기 단계 File Upload
- Error를 색상만으로 표시
- 모든 Field를 Required로 설정

### PM Notes

Field 추가는 Conversion, Privacy와 Data Retention에 영향을 준다. “있으면 좋다”는 이유만으로 추가하지 않는다.

### Related Components

Button, Alert, Modal, Accordion, Loading

---

## 13. Modal

### Purpose

현재 Page Context를 유지하면서 중요한 집중 Task를 수행한다.

### Usage

Consultation, Deal Readiness와 Business Valuation.

### Structure

`Backdrop → Dialog → Header → Body → Actions/Success`

### Variants

- Consultation Modal
- Readiness Modal
- Valuation Modal
- Confirmation Modal: Planned
- Small Alert Dialog: Planned

### Sizes

Content에 맞는 Max Width와 Dynamic Viewport를 사용한다. Mobile은 Gutter를 유지한 Full-width.

### Spacing

Modal Header, Body, Form와 Actions는 Modal Token을 사용한다.

### Typography

Modal Title, Description, Question, Label, Help와 Button Semantic Role을 사용한다.

### Color

Surface, Navy Header Variant, Overlay와 Border Token.

### Motion

Backdrop Fade와 Dialog `0.98 → 1`. 280ms Token. 과도한 Slide/Zoom 금지.

### Interaction

- Trigger Open
- X Close
- ESC Close
- Overlay Close
- Confirm Close
- Focus Trap
- Trigger Focus Return
- Success State 내부 전환

### Responsive

`100vh` Fallback과 `100dvh`, Safe Area, 내부 Scroll. Mobile에서 Page Scroll과 Modal Scroll이 충돌하지 않게 한다.

### Accessibility

- `role="dialog"` 또는 `alertdialog`
- `aria-modal="true"`
- `aria-labelledby`
- 초기 Focus
- Focus Trap
- ESC
- Close Accessible Name
- Background Inert Strategy

### Design Tokens

Modal Background, Backdrop, Border, Radius, Shadow, Layer, Motion, Padding와 Mobile Type Role.

### Code Rules

Dialog DOM은 한 번만 생성하고 동일 Trigger가 공통 Modal을 연다. Page별로 Consultation Modal을 복제하지 않는다.

### QA Checklist

- [ ] 모든 Trigger가 같은 Modal을 여는가?
- [ ] Open 시 Focus가 Dialog로 이동하는가?
- [ ] Tab이 Dialog 밖으로 나가지 않는가?
- [ ] Close 후 Trigger로 돌아가는가?
- [ ] ESC와 Overlay Close가 작동하는가?
- [ ] Success State가 Header와 Body 모두 전환되는가?
- [ ] Mobile Safe Area가 적용되는가?
- [ ] 내부 Scroll이 자연스러운가?
- [ ] Background Page 위치가 유지되는가?

### Best Practice

Task가 Page Navigation보다 짧고 Context 유지가 중요할 때 Modal을 사용한다.

### Do

- 하나의 명확한 Task
- 닫기 방법 여러 개
- Focus Management

### Don't

- Modal 안에 Modal
- 장문의 일반 Content
- Close를 숨김
- Success 후 Page Reload

### PM Notes

Modal은 정보 밀도가 높다. 새 Section을 추가하기 전에 Task 완료에 필수인지 검토한다.

### Related Components

Form, Button, Accordion, Alert, Loading, Empty State

---

## 14. Accordion

### Purpose

보조 정보를 필요할 때만 펼쳐 Page Density를 관리한다.

### Usage

FAQ, Privacy Detail과 Mobile Navigation Submenu.

### Structure

`Trigger → Panel`

### Variants

- Single-open FAQ
- Multi-open FAQ가 필요할 경우 별도 승인
- Privacy Detail
- Mobile Navigation

### Sizes

Trigger Touch Target 최소 44px.

### Spacing

Trigger와 Panel Padding은 Section/Card Token에 맞춘다.

### Typography

Trigger H3 또는 Body Semibold, Panel Body.

### Color

Text, Border와 Focus Token.

### Motion

250ms Accordion Token. Jump를 방지하되 Height Animation의 Layout Cost를 최소화한다.

### Interaction

Click/Enter/Space Toggle. 필요 시 Arrow Orientation으로 State 보조.

### Responsive

FAQ는 모든 Device에서 동일 의미. Mobile Navigation은 Touch Accordion으로 전환.

### Accessibility

`button`, `aria-expanded`, `aria-controls`, Panel `id`. Keyboard와 Screen Reader에서 State가 전달되어야 한다.

### Design Tokens

Accordion Motion, Border, Spacing, Type와 Focus.

### Code Rules

Trigger를 `<div>`에 Click Handler로 만들지 않는다.

### QA Checklist

- [ ] Trigger가 Button인가?
- [ ] Expanded State가 Programmatic하게 전달되는가?
- [ ] Panel ID가 고유한가?
- [ ] Keyboard Toggle이 되는가?
- [ ] Motion 없이도 State가 이해되는가?
- [ ] Content 높이에 따라 잘리지 않는가?

### Best Practice

Question을 Trigger Label로 사용하고 Panel 첫 문장이 직접 답하도록 한다.

### Do

- 보조 정보에 사용
- State 명확히 전달

### Don't

- 핵심 CTA 숨김
- 기본 Content 전체 Accordion화
- Hover로 Open

### PM Notes

Accordion으로 Page Length 문제를 해결하기 전에 Content 중복을 먼저 제거한다.

### Related Components

Navigation, Modal, FAQ Section, Icon

---

## 15. Table

### Purpose

행과 열 관계가 중요한 구조화 데이터를 비교한다.

### Usage

현재 Production에는 General Table이 없다. 향후 Valuation Detail, Dashboard와 Admin에서 사용 가능하다.

### Structure

`Caption → Header → Body → Optional Sort/Selection → Empty/Loading`

### Variants

- Read-only Data Table
- Sortable Table
- Selectable Table
- Compact Admin Table: Future

### Sizes

Standard Row Height를 사용한다. Dense Variant는 Admin Context에서만.

### Spacing

Cell Padding과 Column Gap Token을 사용한다.

### Typography

Header Small Semibold, Cell Body/Small, Caption Body.

### Color

Surface, Border, Selected와 Feedback Token.

### Motion

Sort와 Row State는 Color/Opacity. Row 이동 Animation 금지.

### Interaction

Sorting, Selection, Pagination과 Row Action은 독립 Control로 제공한다.

### Responsive

- Desktop: Table 유지
- Tablet: Horizontal Scroll 또는 Column Priority
- Mobile: Summary Card 또는 Horizontal Scroll
- Table을 Font Size로 축소하지 않는다.

### Accessibility

Native `<table>`, `<caption>`, `<th scope>`. Sort는 `aria-sort`. 복잡한 Header 관계를 명확히 한다.

### Design Tokens

Table Token은 구현 Proposal 승인 시 기존 Surface, Border, Type와 Spacing Semantic Token을 참조해 정의한다.

### Code Rules

Layout 목적으로 Table을 사용하지 않는다.

### QA Checklist

- [ ] 행·열 관계가 실제로 필요한가?
- [ ] Caption이 있는가?
- [ ] Header Scope가 올바른가?
- [ ] Sort State가 전달되는가?
- [ ] Mobile Strategy가 정의되었는가?
- [ ] Empty와 Loading State가 있는가?
- [ ] Keyboard로 Row Action에 접근 가능한가?

### Best Practice

Mobile에서 핵심 두세 Field만 Summary Card로 제공하고 전체 데이터는 확장 또는 Scroll로 접근하게 한다.

### Do

- 명확한 Column Label
- Data Alignment 통일
- Unit 표시

### Don't

- 모바일에서 전체 축소
- 3D Chart와 Table 혼합
- 의미 없는 Zebra Stripe

### PM Notes

Table 추가는 Filtering, Sorting, Empty, Loading, Export와 Accessibility Scope를 함께 만든다.

### Related Components

Pagination, Checkbox, Badge, Empty State, Skeleton

---

## 16. Badge

### Purpose

짧은 상태, Category 또는 제한된 Metadata를 표시한다.

### Usage

현재 `.valuation-public-badge`만 Limited Active다. General Badge Set은 Planned.

### Structure

`Optional Status Dot/Icon → Label`

### Variants

- Neutral
- Info
- Success
- Warning
- Error
- Public/Prototype Context

### Sizes

Small 단일 Size를 기본으로 한다. Pill Height를 Button과 혼동하지 않는다.

### Spacing

Inline Padding과 Icon Gap은 Token으로 정의한다.

### Typography

Caption 또는 Small Semibold.

### Color

Semantic Feedback Surface/Text/Border. 색상만으로 상태를 전달하지 않는다.

### Motion

없음. 실시간 변경 시 Text와 ARIA Live 전략 사용.

### Interaction

기본 Badge는 Interactive하지 않다. Filter Action이면 Button 또는 Chip Proposal로 분리한다.

### Responsive

줄바꿈을 허용하되 Label을 임의 축약하지 않는다.

### Accessibility

Status Text를 포함한다. Dot만 사용하지 않는다.

### Design Tokens

General Badge Token은 실제 구현 시 Semantic Feedback Token을 기반으로 승인한다.

### Code Rules

Badge를 Button처럼 Styling하고 Click Handler를 추가하지 않는다.

### QA Checklist

- [ ] 상태 또는 Category가 짧고 명확한가?
- [ ] 색상 외 Text가 있는가?
- [ ] Interactive 여부가 Semantic하게 올바른가?
- [ ] 긴 한글에서 잘리지 않는가?
- [ ] Contrast가 충분한가?

### Best Practice

`공개 버전`, `검토 필요`처럼 상태를 직접 쓴다.

### Do

- 짧은 상태
- Semantic Color

### Don't

- Marketing Label 남발
- Badge 안 CTA
- Status Dot 단독 사용

### PM Notes

Badge가 많아지면 상태 체계가 복잡하다는 신호다. Variant 추가 전 상태 모델을 검토한다.

### Related Components

Card, Table, Alert, Business Valuation

---

## 17. Alert, Toast and Notification

### Purpose

사용자에게 중요한 상태, 결과와 필요한 조치를 전달한다.

### Usage

Valuation Error는 Active Limited. General Alert, Toast, Notification은 Planned.

### Structure

`Optional Icon → Title → Message → Optional Action → Optional Dismiss`

### Variants

- Info
- Success
- Warning
- Error
- Neutral
- Toast
- Persistent Notification

### Sizes

Content 기반. Critical Message를 작은 Toast에 넣지 않는다.

### Spacing

Icon, Text와 Action Group은 Component Spacing Token을 사용한다.

### Typography

Title Body Semibold, Message Body/Small.

### Color

Semantic Feedback Token. Background와 Border 대비 유지.

### Motion

Fade/Translate Token. Critical Alert는 자동으로 사라지지 않는다.

### Interaction

- Dismiss
- Optional Retry/Action
- Stack은 최대 3개 권장
- 동일 Message 중복 방지

### Responsive

Mobile은 Viewport Gutter 안에서 Full Width. Safe Area 고려.

### Accessibility

- Critical: `role="alert"`
- Informational: `role="status"`
- Focus를 무조건 이동하지 않는다.
- Action은 Keyboard 접근 가능
- Duration은 읽을 시간을 제공

### Design Tokens

Feedback Color, Surface, Border, Shadow, Layer와 Motion Token.

### Code Rules

Native Form Error를 Toast로만 전달하지 않는다. Field Error는 Field 근처에 둔다.

### QA Checklist

- [ ] Priority가 올바른가?
- [ ] Auto-dismiss가 안전한가?
- [ ] Screen Reader Live Region이 적절한가?
- [ ] 중복 Notification이 쌓이지 않는가?
- [ ] Dismiss와 Action이 Keyboard 가능인가?
- [ ] Mobile Safe Area를 침범하지 않는가?

### Best Practice

성공 Message는 Task 결과와 다음 단계만 짧게 설명한다.

### Do

- 조치 가능한 설명
- 상태에 맞는 Live Region

### Don't

- 모든 Message를 Toast로 표시
- Error를 자동 삭제
- Icon만으로 Severity 표현

### PM Notes

Notification 요구에는 Priority, Persistence, Action과 Audit 필요 여부가 포함되어야 한다.

### Related Components

Form, Modal, Badge, Button, Loading

---

## 18. Loading

### Purpose

시스템이 처리 중임을 알리고 Layout 변화와 불확실성을 줄인다.

### Usage

Business Valuation Result Preparation과 비동기 Button.

### Structure

`Status Container → Skeleton/Progress → Status Text`

### Variants

- Skeleton: Primary
- Progress Bar: 단계가 알려진 경우
- Button Loading
- Spinner: 매우 짧고 공간이 제한된 경우만
- Shimmer: Skeleton 안에서만

### Sizes

실제 Content Shape를 반영한다. Loading Graphic을 Content보다 크게 만들지 않는다.

### Spacing

대체할 Content Layout과 동일한 Spacing을 사용한다.

### Typography

Status Text Body/Small.

### Color

Muted Surface와 Highlight Token.

### Motion

300–600ms Token. Reduced Motion에서는 Shimmer 제거.

### Interaction

Loading 중 중복 Submit을 막는다. Cancel이 가능한 Task에는 명확한 Cancel Action을 제공한다.

### Responsive

Skeleton은 실제 Responsive Content Shape를 따라야 한다.

### Accessibility

`aria-busy`, `role="status"` 또는 `aria-live`. Skeleton Graphic은 숨긴다.

### Design Tokens

`--visual-skeleton-*`, `--component-visual-loading-duration`, Progress와 Button Loading Token.

### Code Rules

```html
<div role="status" aria-live="polite">
  <div class="skeleton" aria-hidden="true"></div>
  <p>결과를 준비하고 있습니다.</p>
</div>
```

### QA Checklist

- [ ] 처리 중임이 Text로 전달되는가?
- [ ] 중복 Submit이 막히는가?
- [ ] Skeleton이 실제 Layout을 반영하는가?
- [ ] Reduced Motion에서 안정적인가?
- [ ] 완료 후 Focus와 Content가 자연스럽게 전환되는가?
- [ ] 무한 Loading Error 경로가 있는가?

### Best Practice

예상 시간이 짧아도 Status Text를 제공해 사용자가 오류로 오인하지 않게 한다.

### Do

- Skeleton 우선
- Content Shape 유지
- Error/Retry 경로 준비

### Don't

- 장식적 Spinner
- 화면 전체 Blocking 남용
- 진행률을 알 수 없는데 가짜 Percent 표시

### PM Notes

Loading UI는 실제 성능 문제를 가리는 장치가 아니다. 처리 시간을 먼저 줄인다.

### Related Components

Button, Form, Modal, Empty State, Alert

---

## 19. Empty State

### Purpose

Content가 없거나 조건에 맞는 결과가 없을 때 상태와 다음 Action을 설명한다.

### Usage

현재 `.empty-state` Standard가 정의되어 있으며 실제 Content 확장 시 사용한다.

### Structure

`Optional Icon/Illustration → Title → Description → Optional CTA`

### Variants

- First Use
- No Results
- Filtered Empty
- Error Empty
- Permission Empty

### Sizes

Container Context에 맞게 Content Width를 제한한다.

### Spacing

Card/Section Token을 사용한다.

### Typography

Title H3, Description Body, CTA Button.

### Color

Default Surface와 Muted Text. Error일 때만 Error Token.

### Motion

없음. Empty 전환은 Page/Section Fade Token만 사용 가능.

### Interaction

CTA는 문제 해결이나 다음 단계에 직접 연결한다.

### Responsive

Mobile에서 Illustration을 먼저 축소하거나 제거하고 Title과 CTA를 유지한다.

### Accessibility

상태를 Text로 제공한다. Icon/Illustration 단독 금지. Dynamic Empty는 적절한 Live Region 검토.

### Design Tokens

Card/Section Spacing, Surface, Border, Type, Icon과 Button Token.

### Code Rules

`No Results`를 Placeholder Card 여러 개로 표현하지 않는다.

### QA Checklist

- [ ] 왜 비어 있는지 설명하는가?
- [ ] 다음 행동이 필요한 경우 CTA가 있는가?
- [ ] 장식보다 Text가 먼저 보이는가?
- [ ] Dynamic State가 전달되는가?
- [ ] Mobile에서 과도한 Illustration이 제거되는가?

### Best Practice

`검색 결과가 없습니다. 검색 조건을 조정해 보십시오.`처럼 상태와 해결 방법을 연결한다.

### Do

- 원인과 다음 단계
- 짧은 Copy

### Don't

- 빈 화면 방치
- 유머성 Copy
- 과도한 Illustration

### PM Notes

Empty State는 Edge Case가 아니라 초기 사용과 검색 경험의 핵심 상태다.

### Related Components

Icon, Illustration, Button, Alert, Table, Insight Grid

---

## 20. Business Valuation Components

### Purpose

대표가 최소 정보로 예비 기업가치와 지분가치의 차이를 이해하고 상담으로 이어지게 한다.

### Usage

Business Valuation Lead Page와 Modal.

### Structure

`Entry Card → Multi-step Input → Loading → Result Summary → Confidence → Insight → Consultation`

### Variants

- Input Card/Section
- Result Card
- Summary Card
- Recommendation/Insight Card
- Score/Confidence Card
- Equity Value Card
- Value Bridge
- Tooltip

### Sizes

Modal의 Content Width와 Device Token을 따른다. 숫자 결과는 Type Hierarchy 안에서 강조한다.

### Spacing

Input Group, Year Group, Result Group과 Actions는 Valuation Semantic Spacing을 사용한다.

### Typography

Modal Title, Question, Section Title, Label, Input, Help와 Result Type Role을 사용한다.

### Color

Gold는 Progress, Selected State와 핵심 결과 Accent에 제한한다. Confidence는 기업 우수성 점수처럼 보이지 않게 Copy와 Layout을 유지한다.

### Motion

Step Transition은 Fade 중심. Loading은 Skeleton. Result는 한 번에 읽을 수 있게 과도한 Stagger 금지.

### Interaction

- Step Next/Previous
- Validation
- Optional Input
- Tooltip Hover/Click
- Result Consultation CTA
- Modal Close and Focus Return

### Responsive

Desktop Multi-column Field는 Mobile 1 Column. Result Value Range와 Tooltip이 Viewport를 넘지 않게 한다.

### Accessibility

- Label/Input 연결
- Required/Optional 명시
- Progress Text 제공
- Error Summary 또는 Field Error
- Tooltip Keyboard/Touch 지원
- Result Heading과 Live Region 검토
- Confidence 의미를 Text로 설명

### Design Tokens

Valuation Modal Type, Form, Progress, Result Surface, Feedback, Tooltip, Modal와 Motion Token.

### Code Rules

계산 Engine과 Presentation Component를 분리한다. UI Copy나 Layout 변경이 `valuation-engine.js` 계산 로직을 바꾸지 않는다.

### QA Checklist

- [ ] 최근 사업연도만으로 진행 가능한가?
- [ ] Optional Field가 명확한가?
- [ ] Number Spinner 정책이 유지되는가?
- [ ] 기업가치와 지분가치가 구분되는가?
- [ ] 결과를 불필요하게 숨기지 않는가?
- [ ] Confidence가 기업 평가 점수로 오인되지 않는가?
- [ ] Tooltip이 Keyboard/Touch에서 작동하는가?
- [ ] Engine과 UI 변경이 분리되는가?
- [ ] Mobile Modal 내부 Scroll이 자연스러운가?
- [ ] 상담 CTA가 공통 Consultation Modal을 여는가?

### Best Practice

숫자보다 의미와 참고 수준을 먼저 이해하게 한다.

### Do

- 최소 필수 입력
- 결과 범위 제공
- Confidence 설명
- 공통 Modal 연결

### Don't

- 정식 평가로 오인되는 Copy
- 입력 부족으로 결과 차단
- 기업 경쟁력 점수화
- 계산 상수의 UI 하드코딩

### PM Notes

Business Valuation Component 변경은 UX, 금융 의미, Legal Disclaimer와 Engine Regression을 함께 검토한다.

### Related Components

Modal, Form, Card, Badge, Tooltip, Loading, Consultation

---

## 21. Insight Components

### Purpose

M&A 실무 콘텐츠를 발견하고 읽고 관련 글로 이동하게 한다.

### Usage

Home Insight Preview와 Insight Article.

### Structure

- Article Card: Category → Title → Description → Link
- Article Header: Category → Title → Lead → Metadata
- Article Body: Heading → Paragraph → Note/Source
- Related Article: Category → Title → Link

### Variants

- Article Card
- Category Label
- Tag: Planned
- Author: Planned
- Date: Planned
- Reading Time: Planned
- Share: Planned
- Related Article: Planned

### Sizes

Card는 Grid, Article Body는 Narrow Content Width를 사용한다.

### Spacing

Article Rhythm과 Card Token을 사용한다.

### Typography

Article H1, H2/H3, Body와 Caption Hierarchy. Metadata는 Small/Caption.

### Color

Text와 Muted Surface. Category Gold Accent 제한.

### Motion

Card Hover와 Page Reveal. Share Button은 Button Motion.

### Interaction

Card Link, Category Filter와 Share는 각각 명확한 Control로 분리한다.

### Responsive

Desktop Grid, Tablet 2 Column, Mobile 1 Column. Article Body는 Fluid Width와 읽기 쉬운 Line Length.

### Accessibility

- Article Landmark
- Heading 순서
- Date는 `<time>`
- Share Control Accessible Name
- Related Article Link Context
- Image Alt/Caption

### Design Tokens

Card, Type, Content Width, Grid, Section, Icon와 Button Token.

### Code Rules

Category, Author와 Date가 없는 초기 Content에 빈 Placeholder를 만들지 않는다.

### QA Checklist

- [ ] Card Title이 Link 목적을 설명하는가?
- [ ] Article H1이 하나인가?
- [ ] Body Line Length가 읽기 쉬운가?
- [ ] Metadata가 실제 값인가?
- [ ] Reading Time이 계산 근거를 갖는가?
- [ ] Share가 현재 URL과 Title을 사용하나?
- [ ] Related Article이 중복되지 않는가?

### Best Practice

콘텐츠가 준비된 Metadata만 표시한다. 구성 균형을 위해 가짜 Author나 Date를 넣지 않는다.

### Do

- 짧고 명확한 Category
- 실제 Content 중심
- 관련 글 최소 연결

### Don't

- 카드 안 과도한 Metadata
- 가치평가 Category 중복 운영
- 존재하지 않는 Filter

### PM Notes

새 Insight Feature는 콘텐츠 운영 역량과 함께 승인한다. 빈 Category와 미작동 Filter를 먼저 만들지 않는다.

### Related Components

Card, Section, Badge, Pagination, Share Button, Empty State

---

## 22. Footer

### Purpose

EQUIV 브랜드의 마지막 Signature와 최소 Site Map을 제공한다.

### Usage

모든 Public Page.

### Structure

`Brand Signature → Site Map → Legal/Copyright`

### Variants

현재 단일 Dark Footer만 Active. Light Footer Variant는 없음.

### Sizes

Container와 Footer Padding Token 사용.

### Spacing

Desktop 2 Column, Tablet/Mobile Vertical Flow.

### Typography

Wordmark, Descriptor, Entity, Navigation과 Copyright의 위계를 유지한다.

### Color

Brand Navy Background, White Text와 Gold Mark.

### Motion

Navigation Hover만. Footer Reveal이나 장식 Animation 없음.

### Interaction

Logo Home Link와 Site Map Link.

### Responsive

Desktop 좌우, Tablet/Mobile 세로. Link Touch Target 유지.

### Accessibility

Footer Landmark, Navigation Label, Link Contrast와 Focus.

### Design Tokens

Footer Padding, Brand Background, On-primary Text, Type, Link Motion.

### Code Rules

Footer에 Page별 Marketing Copy를 추가하지 않는다.

### QA Checklist

- [ ] Logo가 Home으로 연결되는가?
- [ ] Site Map이 실제 Page만 포함하는가?
- [ ] Copyright가 최신인가?
- [ ] Footer가 회사소개를 반복하지 않는가?
- [ ] Mobile Link Touch Target이 충분한가?
- [ ] Contrast와 Focus가 명확한가?

### Best Practice

브랜드 서명과 최소 Navigation만 제공한다.

### Do

- 동일 Footer 재사용
- 최소 Site Map
- Legal 정보 명확히

### Don't

- 브랜드 철학 반복
- 장문의 회사 소개
- Social Icon Placeholder
- Page별 다른 Footer

### PM Notes

Footer 항목 추가는 Site-wide 변경이다. 한 Page 요구로 변경하지 않는다.

### Related Components

Logo, Navigation, Section, Link

---

## 23. Interaction Rules

### 23.1 Common States

모든 Interactive Component는 가능한 범위에서 다음 State를 정의한다.

`Default → Hover → Focus → Pressed → Disabled → Loading → Error/Success`

### 23.2 Hover

- Pointer 환경에서만
- Color, Border, Shadow와 작은 Translate
- Size와 Weight 변경 금지
- Hover 없이도 의미 유지

### 23.3 Focus

- `:focus-visible`
- 충분한 Contrast
- Component Shape를 따라가되 잘리지 않음
- `outline: none` 단독 사용 금지

### 23.4 Pressed

Click Feedback은 짧고 명확해야 한다. Hover Lift가 있으면 원위치로 복귀한다.

### 23.5 Disabled

사용 불가 이유가 필요하면 인접 Help를 제공한다. Disabled Control은 Focus되지 않을 수 있으므로 중요한 설명을 Tooltip에만 두지 않는다.

### 23.6 Loading

중복 Action을 막고 상태를 Text 또는 ARIA로 전달한다.

### 23.7 Motion

Motion Duration과 Easing은 Design System Token을 사용한다. Reduced Motion에서 기능을 유지한다.

### 23.8 Touch

Hover 대체 Active Feedback을 제공한다. Touch Target 최소 44px.

### 23.9 QA

- [ ] Mouse, Keyboard와 Touch에서 동작하는가?
- [ ] State가 색상만으로 전달되지 않는가?
- [ ] Focus가 DOM 순서를 따르는가?
- [ ] Reduced Motion에서 Task가 가능한가?
- [ ] Loading과 Disabled를 혼동하지 않는가?

---

## 24. Responsive Rules

### 24.1 Experience Breakpoints

- Mobile: 0–767
- Tablet: 768–1199
- Desktop: 1200+

숫자 Source는 Design System Token이다.

### 24.2 Component Responsibility

Responsive는 Page가 아니라 Component가 소유한다. Page는 Component를 숨겨 다른 UX를 만들지 않는다.

### 24.3 Desktop

Information First, 3 Column, Hover 활용, Content Width 유지.

### 24.4 Tablet

Reading First, 2 Column, Collapsed Navigation, Section Rhythm 축소.

### 24.5 Mobile

Action First, 1 Column, Full-width CTA, 최소 Touch Target, Dynamic Viewport와 Safe Area.

### 24.6 Fluid Behavior

고정 Width보다 `min()`, `max()`, `clamp()`와 Fluid Container를 사용한다.

### 24.7 Component Matrix

| Component | Desktop | Tablet | Mobile |
|---|---|---|---|
| Navigation | Horizontal | Collapsed | Collapsed |
| Hero | Visual Impact | Reading Balance | CTA Priority |
| Card Grid | 3 Column | 2 Column | 1 Column |
| Form | 1–2 Column | 1–2 Column | 1 Column |
| Modal | Centered | Centered | Full Width with Gutter |
| Footer | 2 Column | Vertical | Vertical |
| Table | Full | Scroll/Priority | Summary/Scroll |

### 24.8 Orientation

Mobile/Tablet Landscape에서 Header, Hero와 Modal이 잘리지 않아야 한다.

### 24.9 Browser

Chrome, Edge, Safari와 Samsung Internet을 검토한다. Dynamic Viewport와 Backdrop Filter는 Fallback을 제공한다.

### 24.10 QA

- [ ] 360, 390, 430, 768, 1024, 1280, 1440, 1920에서 검수했는가?
- [ ] Landscape가 안정적인가?
- [ ] 200% Zoom이 가능한가?
- [ ] 가로 Overflow가 없는가?
- [ ] Touch Target이 유지되는가?

---

## 25. Accessibility

### 25.1 Standard

WCAG 2.2 AA를 기본 목표로 한다.

### 25.2 Semantic HTML

Native Element를 우선한다. ARIA는 Semantic HTML을 대체하지 않는다.

### 25.3 Keyboard

모든 Interactive Component는 Tab, Shift+Tab, Enter, Space와 필요한 Arrow/ESC Pattern을 지원한다.

### 25.4 Focus

Focus Visible, Logical Order, Trap과 Return을 Component 계약에 포함한다.

### 25.5 Screen Reader

Name, Role, Value와 State를 전달한다. 중복 Label과 Decorative Announcement를 제거한다.

### 25.6 Contrast

Text, Control Boundary와 Meaningful Graphic은 Design System Contrast 기준을 따른다.

### 25.7 Touch Target

최소 44×44. 작은 Icon Graphic과 Touch Area를 분리한다.

### 25.8 Dynamic Content

Loading, Error, Success, Modal과 Accordion State를 적절한 Live Region/ARIA로 전달한다.

### 25.9 Forms

Label, Required, Error, Help와 Grouping을 제공한다.

### 25.10 Motion

Reduced Motion에서 Animation을 제거하고 Content와 Action을 유지한다.

### 25.11 Component Gate

Accessibility QA가 없는 Component는 Release할 수 없다.

---

## 26. Component Tokens

### 26.1 Hierarchy

`Foundation → Semantic → Component`

Component는 Foundation을 직접 참조하지 않는다.

### 26.2 Token Categories

- Color
- Typography
- Spacing
- Container/Grid
- Radius
- Shadow
- Motion
- Layer
- Responsive
- Visual/Icon

### 26.3 Component Token Mapping

| Component | Token Group |
|---|---|
| Button | `--button-*`, `--component-button-*` |
| Card | `--card-*`, `--component-card-*` |
| Modal | `--modal-*`, `--component-modal-*` |
| Form | `--form-control-*`, `--modal-input-*` |
| Navigation | Header, Dropdown, Navigation Token |
| Hero | Type, Hero Padding, Visual Overlay |
| Icon | `--component-icon-*` |
| Loading | `--visual-skeleton-*`, Motion |
| Footer | Footer Padding, Brand Surface |

### 26.4 New Token Rule

새 Token 전에 다음을 확인한다.

1. 기존 Semantic Token으로 해결 가능한가?
2. Component에 반복되는 역할인가?
3. Device별 전환이 필요한가?
4. 이름이 Value가 아니라 Role을 설명하는가?
5. 다른 Component와 충돌하지 않는가?

### 26.5 Prohibited

Component 안의 임의 Hex, RGB, Font Size, Spacing, Shadow, Z-index와 Duration.

---

## 27. Composition Rules

### 27.1 General

Composition은 Component의 내부 계약을 깨지 않는다.

### 27.2 Landing

`Header → Hero → Principle → Service Section → Insight Grid → Contact CTA → Footer`

### 27.3 Service Detail

`Header → Page Hero → Overview Section → Process/How We Work → FAQ Accordion → CTA → Footer`

### 27.4 Insight Detail

`Header → Article Hero → Article Body → Source/Note → Related Content(Optional) → Footer`

### 27.5 Business Valuation

`Header → Lead Hero + Entry Card → Supporting Section → Footer + Shared Modal`

### 27.6 Modal Composition

`Modal → Header → Form/Guide → Privacy Accordion → Submit → Success`

### 27.7 Good Composition

- Section 안에 Card Grid
- Form 안에 Form Group과 Button
- Modal 안에 Form과 Success State
- Hero 안에 Button Group

### 27.8 Bad Composition

- Button 안 Button
- Clickable Card 안 별도 Primary Button
- Modal 안 Modal
- Accordion 안 핵심 Form 전체
- Footer 안 Page-specific CTA

### 27.9 Dependency Rule

Atom은 Organism에 의존하지 않는다. Shared Component가 Page-specific Selector를 참조하지 않는다.

---

## 28. Component Lifecycle

### 28.1 Proposal

Problem, User Need, Existing Component Gap, 예상 Usage Page와 Accessibility Risk를 제출한다.

### 28.2 Design

Anatomy, Variant, State, Responsive, Token과 Composition을 정의한다.

### 28.3 Review

Design System, Brand, Accessibility와 Engineering Review.

### 28.4 Approval

Owner와 PM이 Library 추가 필요성을 승인한다.

### 28.5 Development

Semantic HTML, Token, State, Responsive와 Test를 함께 구현한다.

### 28.6 QA

Visual, Functional, Accessibility, Responsive, Browser와 Regression.

### 28.7 Release

Documentation, Changelog, Migration Note와 Usage Example을 포함한다.

### 28.8 Maintenance

Bug와 Minor Improvement를 기록하고 Consumer Page 영향 검토.

### 28.9 Deprecated

새 사용을 금지하고 Replacement와 Timeline을 명시한다.

### 28.10 Archive

Production Reference 0건 확인 후 Code와 Documentation을 Archive/Remove한다.

### 28.11 RACI

| Stage | PM | Design | Engineering | Accessibility | Brand |
|---|---|---|---|---|---|
| Proposal | A/R | C | C | C | C |
| Design | C | A/R | C | C | C |
| Development | C | C | A/R | C | I |
| QA | A | R | R | R | C |
| Release | A | C | R | C | C |
| Deprecation | A/R | C | R | C | C |

---

## 29. Versioning and Migration

### 29.1 Semantic Versioning

- Patch: Bug Fix, Visual 결과 변화 최소
- Minor: Backward-compatible Variant/State 추가
- Major: Markup, Token, API 또는 Behavior Breaking Change

### 29.2 v1.0

Current Contract와 Production Alias를 공식화한다.

### 29.3 v1.1

Backward-compatible 개선, 예: Planned Component의 첫 구현.

### 29.4 v2.0

Naming, DOM Contract, Breakpoint나 Component Architecture의 Breaking Change.

### 29.5 Backward Compatibility

`.btn` 같은 기존 Alias는 Migration 기간 동안 유지한다. 새 Markup은 Canonical Naming을 사용한다.

### 29.6 Migration

1. Consumer Search
2. Impact Map
3. New API/Markup
4. Compatibility Layer
5. Page Migration
6. Regression QA
7. Deprecated Notice
8. Removal

### 29.7 Deprecation

Replacement, Owner, Deadline와 Removal Version을 문서화한다.

### 29.8 Breaking Change Approval

PM, Design System Owner와 Engineering Owner 승인 없이 진행하지 않는다.

---

## 30. Work Implementation Rules

### 30.1 Mandatory Sequence

```text
기존 Component 검색
  ↓
Composition 가능 여부
  ↓
Variant 가능 여부
  ↓
Library 수정 필요성
  ↓
Proposal 및 승인
  ↓
구현
  ↓
QA
  ↓
문서·Changelog
```

### 30.2 Before Coding

- Design Bible 확인
- Design System Token 확인
- Visual Asset Guide 확인
- Component Inventory와 Status 확인
- 실제 Consumer Page 검색

### 30.3 During Coding

- Native Element 우선
- Token 사용
- Data Hook과 Styling 분리
- State/Responsive 함께 구현
- Reduced Motion와 Keyboard 포함
- 기존 Page Regression 확인

### 30.4 New Component

다음을 포함하지 않으면 Proposal을 승인하지 않는다.

- Purpose
- Non-goals
- Anatomy
- Variants
- States
- Responsive
- Accessibility
- Tokens
- Dependencies
- Usage Examples
- Migration/Adoption Plan

### 30.5 Variant

단순 Color, Margin 또는 한 Page의 예외는 Variant가 아니다.

### 30.6 JavaScript

Component별 Module 책임을 유지한다. DOM이 없는 Page에서 안전하게 종료한다. 전역 State를 최소화한다.

### 30.7 CSS

Token → Base → Layout → Component → Utility → Responsive → Page Policy 순서를 유지한다. 같은 Selector Override를 누적하지 않는다.

### 30.8 HTML

Semantic Structure와 Heading Hierarchy를 유지한다. Component State를 ARIA와 Native Attribute로 표현한다.

### 30.9 Tests

- Static Reference
- JavaScript Syntax
- Keyboard
- Accessibility
- Responsive
- Browser
- Visual Regression
- Consumer Page Smoke Test

### 30.10 Documentation

Component 추가/변경 시:

- `COMPONENT_LIBRARY.md`
- `DESIGN_SYSTEM.md`
- `CHANGELOG.md`
- 필요 시 `VISUAL_ASSET_GUIDE.md`, `BRAND_GUIDE.md`, `TODO.md`

### 30.11 Completion Report

- Component/Variant
- Status
- Consumer Pages
- Token
- State
- Accessibility
- Responsive
- QA
- Migration
- Remaining Risk

---

## 31. Global QA Checklist

### Purpose and Governance

- [ ] 01. Component 목적이 한 문장으로 설명되는가?
- [ ] 02. 기존 Component로 해결할 수 없는가?
- [ ] 03. Composition으로 해결할 수 없는가?
- [ ] 04. Variant가 의미 차이를 나타내는가?
- [ ] 05. Component Owner가 지정되었는가?
- [ ] 06. Status가 정의되었는가?
- [ ] 07. Related Component와 Dependency가 기록되었는가?
- [ ] 08. Design Bible과 충돌하지 않는가?

### Structure and Naming

- [ ] 09. Canonical Name을 따르는가?
- [ ] 10. Element와 Variant 이름이 역할을 설명하는가?
- [ ] 11. Page 이름이나 Color 이름을 사용하지 않는가?
- [ ] 12. JavaScript Hook과 Styling Class가 분리되는가?
- [ ] 13. DOM Structure가 최소한인가?
- [ ] 14. 중첩 Interactive Element가 없는가?
- [ ] 15. Reserved State 이름이 일관적인가?
- [ ] 16. Production Alias와 Canonical Name이 문서화되었는가?

### Tokens and Visual

- [ ] 17. Foundation Token을 직접 참조하지 않는가?
- [ ] 18. Color가 Semantic/Component Token인가?
- [ ] 19. Typography가 Type Token인가?
- [ ] 20. Spacing이 Spacing Token인가?
- [ ] 21. Radius와 Shadow가 Token인가?
- [ ] 22. Z-index가 Layer Token인가?
- [ ] 23. Motion Duration과 Easing이 Token인가?
- [ ] 24. Icon과 Asset이 Visual Asset Guide를 따르는가?
- [ ] 25. Hover에서 Size/Weight가 바뀌지 않는가?
- [ ] 26. Component가 Content보다 강하지 않은가?

### State and Interaction

- [ ] 27. Default State가 정의되었는가?
- [ ] 28. Hover State가 정의되었는가?
- [ ] 29. Focus State가 정의되었는가?
- [ ] 30. Pressed State가 정의되었는가?
- [ ] 31. Disabled State가 정의되었는가?
- [ ] 32. Loading State가 필요한 경우 정의되었는가?
- [ ] 33. Error/Success State가 필요한 경우 정의되었는가?
- [ ] 34. Mouse 없이 동작하는가?
- [ ] 35. Touch에서 Hover에 의존하지 않는가?
- [ ] 36. 중복 Submit 또는 Action이 방지되는가?

### Accessibility

- [ ] 37. Native Semantic Element를 사용하는가?
- [ ] 38. Accessible Name이 있는가?
- [ ] 39. Name, Role, Value와 State가 전달되는가?
- [ ] 40. Keyboard 순서가 논리적인가?
- [ ] 41. Focus Visible이 명확한가?
- [ ] 42. Focus Trap/Return이 필요한 경우 구현되었는가?
- [ ] 43. Contrast가 WCAG AA를 충족하는가?
- [ ] 44. 색상 외 의미 전달 수단이 있는가?
- [ ] 45. Touch Target이 최소 44px인가?
- [ ] 46. Screen Reader에서 중복 안내가 없는가?
- [ ] 47. Dynamic Content가 적절한 Live Region을 사용하는가?
- [ ] 48. 200% Zoom에서 사용할 수 있는가?
- [ ] 49. Reduced Motion에서 기능이 유지되는가?
- [ ] 50. Error가 이해 가능하고 복구 가능한가?

### Responsive

- [ ] 51. Mobile, Tablet, Desktop 규칙이 정의되었는가?
- [ ] 52. 360px에서 가로 Overflow가 없는가?
- [ ] 53. 390px과 430px에서 자연스러운가?
- [ ] 54. 768px과 1024px에서 Grid가 안정적인가?
- [ ] 55. 1280px, 1440px과 1920px에서 과도하게 늘어나지 않는가?
- [ ] 56. Portrait/Landscape가 안정적인가?
- [ ] 57. Dynamic Viewport가 필요한 경우 처리되었는가?
- [ ] 58. Safe Area가 필요한 경우 처리되었는가?
- [ ] 59. Text가 잘리거나 과도하게 축소되지 않는가?
- [ ] 60. Content Order가 Device 간 유지되는가?

### Code and Performance

- [ ] 61. JavaScript가 DOM 부재 시 안전하게 종료하는가?
- [ ] 62. Listener가 중복 등록되지 않는가?
- [ ] 63. 사용하지 않는 Global State가 없는가?
- [ ] 64. Layout Thrashing을 유발하지 않는가?
- [ ] 65. Opacity/Transform 중심 Motion인가?
- [ ] 66. 불필요한 Asset과 Library를 추가하지 않는가?
- [ ] 67. Console Error가 없는가?
- [ ] 68. CSS Override를 새로 누적하지 않는가?
- [ ] 69. Consumer Page에서 Breaking Change가 없는가?
- [ ] 70. Rollback이 가능한가?

### Documentation and Release

- [ ] 71. 동일 Component Template으로 문서화되었는가?
- [ ] 72. Code Example이 실제 API와 일치하는가?
- [ ] 73. Do/Don't가 있는가?
- [ ] 74. PM Note가 있는가?
- [ ] 75. Related Component가 있는가?
- [ ] 76. Changelog가 업데이트되었는가?
- [ ] 77. Migration Note가 필요한 경우 작성되었는가?
- [ ] 78. Active/Planned 상태가 정확한가?
- [ ] 79. Browser QA 결과가 기록되었는가?
- [ ] 80. 최종 Approver가 기록되었는가?

---

## 32. Best Practice

### 32.1 Good Component

- 하나의 명확한 역할
- 최소 Variant
- 모든 State 정의
- Semantic HTML
- Token 기반
- Responsive 독립성
- 접근성 계약 포함
- 여러 Page에서 재사용
- 작은 Public API

### 32.2 Bad Component

- 특정 Page의 Margin Fix를 포함
- 여러 역할 혼합
- Variant마다 DOM이 완전히 다름
- Hover에서만 이해 가능
- 임의 Color와 Size
- JavaScript가 Styling Class에 강하게 결합
- Mobile에서 별도 Component로 교체
- 문서와 QA 없음

### 32.3 Comparison

| 상황 | 좋은 접근 | 나쁜 접근 |
|---|---|---|
| 새 CTA Color | 기존 Primary/Secondary 검토 | Page 전용 Blue Button |
| Card 높이 문제 | Grid와 Content 검토 | 고정 Height 증가 |
| Mobile Menu | Navigation Responsive Variant | 별도 Mobile Header 복제 |
| Form Error | Field Error + Summary | Toast만 표시 |
| Loading | Content Skeleton | 장식적 Spinner |
| 새 Page | Template Composition | Page 전용 Component 세트 |

### 32.4 Library Health

좋은 Library는 Component 수가 많은 Library가 아니다. Consumer가 올바른 Component를 빠르게 찾고, State와 접근성을 다시 설계하지 않아도 되는 Library다.

---

## 33. Future Expansion

### 33.1 Principle

Future Component는 실제 Product Roadmap과 User Need가 생길 때 구현한다. 문서에 이름이 있다고 미리 개발하지 않는다.

### 33.2 AI Chat

필요 Component:

- Conversation List
- Message
- Composer
- Citation
- Suggested Action
- Loading/Streaming
- Error/Retry

주의:

- 금융 자문 답변의 출처와 Disclaimer
- Keyboard와 Screen Reader Streaming
- 사용자 데이터 Privacy

### 33.3 Dashboard

- Sidebar Navigation
- KPI Card
- Filter
- Table
- Chart
- Date Range
- Empty/Loading/Error

### 33.4 Admin

- Dense Form
- Data Table
- Bulk Action
- Audit Log
- Permission State
- Confirmation Dialog

### 33.5 CRM

- Company Record
- Contact Record
- Deal Pipeline
- Activity Timeline
- Task
- Status Badge
- Permission

### 33.6 M&A Platform

- Deal Room
- NDA Status
- Document List
- Buyer/Seller Profile
- Matching Result
- Due Diligence Checklist
- Secure Message

### 33.7 Expansion Gate

Future Component는 다음을 충족해야 한다.

1. 실제 Product Requirement
2. Domain Model
3. Privacy/Security
4. Accessibility
5. Responsive Strategy
6. Existing Component Reuse
7. Pilot Consumer
8. Owner와 Maintenance Capacity

---

## Appendix A. Component Specification Template

모든 신규 Component는 아래 형식을 사용한다.

```markdown
# Component Name

Status
Owner
Version

## Purpose
## Usage
## Structure
## Variants
## Sizes
## Spacing
## Typography
## Color
## Motion
## Interaction
## Responsive
## Accessibility
## Design Tokens
## Code Rules
## QA Checklist
## Best Practice
## Do
## Don't
## PM Notes
## Related Components
```

---

## Appendix B. Component Proposal Template

```markdown
# Component Proposal

- Proposal ID:
- Requester:
- Owner:
- Problem:
- User Need:
- Existing Component Search:
- Why Composition Is Insufficient:
- Proposed Component/Variant:
- Consumers:
- Anatomy:
- Variants:
- States:
- Responsive:
- Accessibility:
- Tokens:
- Dependencies:
- Non-goals:
- Migration:
- Risks:
- Approvers:
```

---

## Appendix C. Review Record

```markdown
# Component Review

- Component:
- Version:
- Status:
- Design Review:
- Engineering Review:
- Accessibility Review:
- Responsive Review:
- Browser Review:
- Consumer Regression:
- Documentation:
- Migration:
- Decision:
- Reviewer:
- Approver:
- Date:
```

---

## Appendix D. Deprecation Notice

```markdown
# Component Deprecation

- Component:
- Deprecated Version:
- Reason:
- Replacement:
- New Usage Prohibited From:
- Consumers:
- Migration Owner:
- Deadline:
- Removal Version:
- Rollback:
```

---

## Appendix E. Dependency Matrix

| Component | Depends On | Must Not Depend On |
|---|---|---|
| Button | Type, Color, Motion | Page |
| Card | Section/Grid, Type | Specific Route |
| Hero | Header, Button, Image | Footer |
| Navigation | Logo, Dropdown, Button | Page Content |
| Form | Input, Label, Alert, Button | Modal-only API |
| Modal | Form, Button, Focus | Specific Page |
| Business Valuation | Modal, Form, Card, Tooltip | Consultation Implementation Details |
| Footer | Logo, Navigation | Page-specific CTA |

---

## Appendix F. Page Composition Map

### Home

`Header + Home Hero + Principle Section + Service Cards + Insight Cards + Contact CTA + Footer + Shared Consultation Modal`

### About

`Header + Page Hero + Brand Section + Process + CTA + Footer + Shared Consultation Modal`

### Service Detail

`Header + Page Hero + Overview + How We Work + FAQ Accordion + CTA + Footer + Shared Consultation Modal`

### Insight

`Header + Article Hero + Article Body + Related Content + Footer + Shared Consultation Modal`

### Business Valuation

`Header + Lead Hero + Entry Card + Footer + Valuation Modal + Shared Consultation Modal`

---

## Appendix G. Pull Request Checklist

```markdown
## Component Change

- [ ] Existing component and composition were reviewed
- [ ] Component status and owner are defined
- [ ] Public API and class naming follow the library
- [ ] Tokens are used
- [ ] States are complete
- [ ] Responsive rules are complete
- [ ] Keyboard and screen reader behavior is verified
- [ ] Reduced motion is supported
- [ ] Consumer pages were regression-tested
- [ ] Documentation and changelog are updated
- [ ] Migration or deprecation plan is included
```

---

## Appendix H. Current Class Compatibility Map

| Canonical Component | Production Classes | Direction |
|---|---|---|
| Button | `.button`, `.btn`, `.button-primary`, `.btn-primary` | `.button` 우선, Alias 유지 |
| Card | `.principle-card`, `.service-card`, `.insight-card`, `.expertise-card` | 공통 Card Contract |
| Hero | `.hero`, `.sub-hero`, `.service-hero`, `.valuation-public-hero` | Variant 유지 |
| Navigation | `.site-header`, `.site-nav`, `.nav-dropdown` | Active |
| Form | `.form-field`, `.consultation-modal__field`, `.valuation-field` | Semantic Contract 통합 |
| Modal | `.consultation-modal`, `.readiness-modal`, `.valuation-modal` | 공통 Modal Contract |
| Accordion | `.faq-list`, Privacy, Mobile Dropdown | Trigger/Panel Contract |
| Loading | `.skeleton`, `.valuation-loading__skeleton` | Skeleton 우선 |
| Empty State | `.empty-state` | Active Standard |
| Footer | `.site-footer`, `.footer-inner` | Active |

---

## Final PM Review

- [ ] 모든 상세 Component가 공통 Template 항목을 사용하는가?
- [ ] Active와 Planned Component가 구분되는가?
- [ ] 기존 Design Token을 참조하는가?
- [ ] 신규 Component 절차가 정의되는가?
- [ ] Component Dependency가 명확한가?
- [ ] Accessibility 기준이 각 Component에 포함되는가?
- [ ] Responsive와 Motion 규칙이 일관적인가?
- [ ] 80개 Global QA 항목이 실제 개발에 사용 가능한가?
- [ ] Design Bible, Design System과 Visual Asset Guide를 중복하지 않는가?
- [ ] 새 Page를 기존 Template과 Component Composition으로 만들 수 있는가?

이 Checklist 중 하나라도 `NO`이면 Library Version은 `Approved`가 아니라 `Approved Draft` 상태를 유지한다.
