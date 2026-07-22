# EQUIV Design System

이 문서는 앞으로 모든 HTML, CSS, UI 수정 시 반드시 참고하는 프로젝트 공식 디자인 기준 문서이다.

새로운 디자인을 만들기 위한 문서가 아니라, 현재까지 완성된 HOME과 Detail Page의 디자인 원칙을 표준화하는 것이 목적이다.

## Design Philosophy

EQUIV의 디자인은 화려함보다 신뢰를 우선한다.

글로벌 투자은행의 절제된 분위기와
한국 기업 대표가 편안하게 읽을 수 있는
미니멀한 인터페이스를 목표로 한다.

Keywords

- Premium
- Minimal
- Trust
- Professional
- Quiet Confidence

## Color System

색상은 시각값이 아니라 역할을 기준으로 사용한다. 기존 브랜드 컬러는 유지하며 아래 Semantic Token을 공식 기준으로 한다.

- Primary: `--color-primary: #071A2F`
- Secondary: `--color-secondary: #A98235`
- Background: `--color-background: #FFFFFF`
- Surface: `--color-surface: #FFFFFF`
- Muted Surface: `--color-surface-muted: #F5F6F8`
- Border: `--color-border: rgba(7, 26, 47, 0.12)`
- Text Primary: `--color-text-primary: #222222`
- Text Secondary: `--color-text-secondary: #6F7782`
- Muted: `--color-muted: #6F7782`

기존 `--color-gold / white / gray / text / line`은 호환성을 위한 Alias이며 각각 위 Semantic Token을 참조한다. 새로운 Component는 Semantic Token을 우선 사용한다.

## Typography

Korean

Pretendard

English

Inter

Heading

700

Body

400~500

## Layout

### Spacing Token System

모든 페이지와 Component는 `padding`, `margin`, `gap`에 직접 px 값을 선언하지 않는다. 아래 공통 Token만 사용하며 `760px 이하`에서는 동일한 Token 이름이 Mobile Scale로 전환된다.

Desktop (`761px 이상`):

- `--space-2xs: 4px`
- `--space-xs: 8px`
- `--space-sm: 12px`
- `--space-md: 16px`
- `--space-lg: 24px`
- `--space-xl: 32px`
- `--space-2xl: 48px`
- `--space-section: 96px`

Mobile (`760px 이하`):

- `--space-2xs: 4px`
- `--space-xs: 8px`
- `--space-sm: 10px`
- `--space-md: 14px`
- `--space-lg: 20px`
- `--space-xl: 28px`
- `--space-2xl: 40px`
- `--space-section: 72px`

1~3px의 접근성 및 광학 보정은 `--space-2xs`를 기준으로 한 `calc()`만 허용한다. `0`, `auto`, 백분율과 Viewport 단위는 구조상 필요한 경우 유지할 수 있다.

Component Rule:

- Section Padding: `--component-section-padding`
- Hero Padding: `--component-hero-padding`
- Card Padding: `--component-card-padding`
- Standard Grid Gap: `--grid-card-gap`
- Heading Group Margin: `--grid-section-gap`
- Button Padding: `--component-button-padding-y / --component-button-padding-x`
- Input Inline Padding: `--component-input-padding-x`
- Modal Padding: `--component-modal-padding`
- Footer Padding: `--component-footer-padding`

### Container Token System

- `--container-narrow: 780px`
- `--container-default: 1180px`
- `--container-wide: 1280px`
- `--container-full: 100%`
- 기존 `--container-width`는 `--container-default`를 참조하는 호환 Alias이다.
- 기본 Container의 좌우 Gutter 합계는 `--space-xl`을 사용한다.

### Grid Token System

- Base Grid: `--grid-columns: 12`
- Column Gap: `--grid-column-gap: --space-md`
- Card Gap: `--grid-card-gap: --space-md`
- Section Content Gap: `--grid-section-gap: --space-2xl`
- Grid의 열 수와 반응형 적층 방식은 콘텐츠 역할에 따라 유지하되, 열 사이 간격은 공통 Grid Token만 사용한다.

### Radius Token System

- `--radius-sm: 4px`
- `--radius-md: 8px`
- `--radius-lg: 16px`
- `--radius-xl: 20px`
- 원형 `50%`, 완전한 Pill과 `0`은 형태를 위한 예외로 허용한다.

### Shadow Token System

- Small: `--shadow-sm: 0 12px 26px rgba(7, 26, 47, 0.09)`
- Medium: `--shadow-md: 0 12px 30px rgba(7, 26, 47, 0.12)`
- Large: `--shadow-lg: 0 28px 80px rgba(7, 26, 47, 0.18)`
- Overlay, Floating Action과 Focus Ring은 각각 `--shadow-overlay`, `--shadow-float`, `--shadow-focus` Semantic Token을 사용한다.
- 새로운 임의 `box-shadow` 수치를 Component 안에 직접 선언하지 않는다.

### Typography Token System

모든 페이지와 Component는 직접 `font-size` 수치를 선언하지 않는다. 아래 Device Token과 이를 전환하는 공통 `--type-*` Semantic Token만 사용한다. 향후 크기 변경은 Token 값에서만 수행한다.

Desktop (`761px 이상`):

- `--desktop-display: 52px`
- `--desktop-h1: 36px`
- `--desktop-h2: 28px`
- `--desktop-h3: 22px`
- `--desktop-h4: 17px`
- `--desktop-body-lg: 15px`
- `--desktop-body: 13.5px`
- `--desktop-small: 12px`
- `--desktop-caption: 10.5px`

Mobile (`760px 이하`):

- `--mobile-display: 20px`
- `--mobile-h1: 17px`
- `--mobile-h2: 16px`
- `--mobile-h3: 15px`
- `--mobile-h4: 14px`
- `--mobile-body-lg: 13.5px`
- `--mobile-body: 13px`
- `--mobile-small: 12px`
- `--mobile-caption: 10.5px`

Semantic Role은 `Display → H1 → H2 → H3 → H4 → Body Large → Body → Small → Caption` 순서를 유지한다. Desktop은 LISTING, KMX와 모멘트, Mobile은 LISTING Mobile, Apple, Stripe와 McKinsey의 절제된 Corporate 밀도를 기준으로 한다.

HOME, About, Service, Business Valuation, Insights, Contact, Footer, Modal, Navigation, Card와 Button은 모두 동일한 Token System을 사용한다. Mobile Form Input은 iOS Safari 자동 확대 방지를 위해 `--mobile-h2(16px)`를 사용한다.

### Mobile Optimization

- QA widths: `360 / 390 / 430 / 768px`
- Mobile Header Height: `64px`
- Mobile Container Gutter: `--space-xl(28px)`
- Mobile Button: 최소 `52px`, 주요 CTA `56px`
- Mobile Form Input: 최소 `48px`, Font Size `16px`
- Mobile Section Padding: `--space-section(72px)`
- Tablet 768px은 기존 Navigation breakpoint를 변경하지 않고 간격과 터치영역만 보정한다.

### Mobile Typography Scale

- 적용 범위: `760px 이하`; 공통 Semantic Token이 Mobile Device Token으로 전환된다.
- Component별 임의 크기나 별도의 Mobile Typography Scale을 추가하지 않는다.
- Button과 Navigation은 `Small`, Section Label은 `Caption`, 본문은 `Body`, Card Title은 `H3/H4`, Page Title은 `H1`, HOME Hero는 `Display` 역할을 사용한다.
- Form Input Text는 iOS Safari 자동 확대 방지를 위해 `--mobile-h2(16px)`를 사용한다.

## Header

Transparent on Hero

White Glass Background on Scroll

Height

76px Default

68px Scrolled Desktop

Navigation

Gold Underline Only

Focus

Visible Gold Outline or Underline

## Grid

Desktop

3 Columns

Tablet

2 Columns

Mobile

1 Column

## Border Radius

Card

`--radius-lg`

Button

`--radius-sm`

## Button

Primary

Gold Background

White Text

Secondary

Transparent

Navy Border

Ghost

Text Only

## Card

White Background

Thin Border

Soft Shadow

Hover

TranslateY(-4px)

Transition

300ms ease

## Animation

## Official Logo Component

- Primary Lockup: The EQUIV Mark / 1px Vertical Divider / EQUIV Wordmark
- Header: Desktop은 Mark `30px`, Divider `26px`, Wordmark `23px`, Gap `7px`을 기본으로 사용한다. Tablet은 `28px / 24px / 22px / 7px`, Mobile은 `26px / 22px / 19px / 6px`로 비례 축소한다.
- Header Wordmark는 Inter `font-weight: 600`과 기본 Kerning을 유지하고 `letter-spacing: 0.10em`을 사용한다. 글자별 공백·개별 Span·Margin으로 자간을 만들지 않는다.
- Header Divider는 `1px`, `currentColor`, `opacity: 0.62`를 사용해 Mark와 Wordmark보다 낮은 시각적 위계를 유지한다.
- Web Wordmark는 SVG Mask 대신 실제 Text를 사용해 브라우저별 가시성을 보장한다.
- Footer: 동일 비율을 유지하며 축소하고 Dark Navy 배경에서는 White Wordmark와 Gold Mark를 사용한다.
- Consultation Modal: 동일 Lockup을 Header 안에 소형으로 사용한다.
- Favicon: Navy 바탕의 Gold The EQUIV Mark 단독 심볼을 사용한다.
- Header Entry: Mark → Divider → Wordmark 순서로 각 0.2초 간격 Fade-in, 개별 전환은 약 0.42초 이내로 제한한다.
- `prefers-reduced-motion`에서는 Logo Animation을 제거한다.

## Animation

Reveal Only

No Fancy Animation

No Parallax

No Slider

## Icon

Simple Line Icon

Gold Accent

## Image

Wide Hero Image

Real Business

Real City

No Illustration

## White Space

Section 간 충분한 여백을 유지한다.

디자인보다 여백을 우선한다.

## Design Principle

디자인은 콘텐츠를 방해하지 않는다.

여백을 적극적으로 사용한다.

Gold는 강조에만 사용한다.

과도한 장식은 하지 않는다.

사용자가 읽기 쉽게 만든다.

## Project Reference Rule

앞으로 디자인을 수정하거나 새로운 페이지를 만들 때에는 아래 문서를 먼저 참고한 후 코드를 작성하는 것을 프로젝트 원칙으로 적용한다.

- `MASTER_SPEC.md`
- `BRAND_GUIDE.md`
- `COPY_GUIDE.md`
- `DESIGN_SYSTEM.md`
- `AI_RULES.md`
