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
- `--section-space-lg: 96px`
- `--section-space-md: 72px`
- `--section-space-sm: 56px`
- `--space-section`은 `--section-space-lg`를 참조하는 호환 Token이다.

Mobile (`760px 이하`):

- `--space-2xs: 4px`
- `--space-xs: 8px`
- `--space-sm: 10px`
- `--space-md: 14px`
- `--space-lg: 20px`
- `--space-xl: 28px`
- `--space-2xl: 40px`
- `--section-space-lg: 64px`
- `--section-space-md: 52px`
- `--section-space-sm: 40px`
- `--space-section`은 Mobile `--section-space-lg`를 참조한다.

1~3px의 접근성 및 광학 보정은 `--space-2xs`를 기준으로 한 `calc()`만 허용한다. `0`, `auto`, 백분율과 Viewport 단위는 구조상 필요한 경우 유지할 수 있다.

Component Rule:

- Main Content Section: `--component-section-padding`
- Article / Form / Standard Section: `--component-section-padding-md`
- CTA / Short Closing Section: `--component-section-padding-sm`
- Hero Padding: `--component-hero-padding`
- Regular Card Padding: `--component-card-padding` (`24px / Mobile 20px`)
- Compact Card Padding: `--component-card-padding-compact` (`22px / Mobile 20px`)
- Mobile Card Padding Source: `--component-card-padding-mobile` (`20px`)
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

반복되는 본문 폭은 아래 Content Width Token으로 관리한다.

- `--content-width-sm: 620px`
- `--content-width-md: 720px`
- `--content-width-lg: 820px`
- `--content-width-xl: 860px`

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

- `--desktop-display: 48px`
- `--desktop-h1: 34px`
- `--desktop-h2: 27px`
- `--desktop-h3: 20px`
- `--desktop-h4: 16px`
- `--desktop-body-lg: 16px`
- `--desktop-body: 15px`
- `--desktop-small: 13px`
- `--desktop-caption: 11px`
- `--desktop-cta-title: 32px`
- `--desktop-cta-body: 16px`
- `--desktop-card-link: 16px`

Mobile (`760px 이하`):

- `--mobile-display: 26px`
- `--mobile-h1: 28px`
- `--mobile-h2: 24px`
- `--mobile-h3: 22px`
- `--mobile-h4: 18px`
- `--mobile-body-lg: 20px`
- `--mobile-body: 15px`
- `--mobile-small: 13px`
- `--mobile-caption: 13px`
- `--mobile-cta-title: 25px`
- `--mobile-cta-body: 15px`
- `--mobile-card-link: 16px`
- `--mobile-button: 16px`
- `--mobile-form: 16px`
- `--mobile-card-category: 14px`
- `--mobile-card-description: 16px`

Semantic Role은 `Display → H1 → H2 → H3 → H4 → Body Large → Body → Small → Caption` 순서를 유지한다. Desktop은 LISTING, KMX와 모멘트, Mobile은 LISTING Mobile, Apple, Stripe와 McKinsey의 절제된 Corporate 밀도를 기준으로 한다.

HOME, About, Service, Business Valuation, Insights, Contact, Footer, Modal, Navigation, Card와 Button은 모두 동일한 Token System을 사용한다. Mobile Form Input은 iOS Safari 자동 확대 방지를 위해 `--mobile-h4(16px)`를 사용한다.

Component Role은 `Hero Main Title = Display / Page Hero H1 = H1 / Section Title = H2 / Card Title = H3 / Small Card Heading = H4 / Lead Paragraph = Body Large / Normal Paragraph = Body / Label = Small / Caption = Caption`으로 고정한다. Conversion CTA는 일반 Section과 구분되는 `--type-cta-title / --type-cta-body` 역할을 사용한다.

### Card Density & CTA Hierarchy

- 짧은 일반 Card는 Desktop `22~24px`, Mobile `20px` 내부 여백을 기준으로 한다.
- 동일 Grid의 Card는 정돈된 높이를 유지하되, 콘텐츠보다 빈 공간이 커지는 고정 높이나 과도한 `min-height`를 사용하지 않는다.
- Card 내부 간격은 `Label → Title 12~16px / Title → Description 10~12px / Description → Link 16~20px` 범위를 공통 Spacing Token으로 표현한다.
- 일반 Section H2와 Conversion CTA 제목을 같은 역할로 사용하지 않는다. CTA 제목은 Desktop `32px`, Mobile `25px`을 사용한다.
- CTA 설명은 Desktop `16px`, Mobile `15px`, 주요 CTA Button은 Desktop `52px`, Mobile `48px`의 최소 높이를 기준으로 한다.
- Form Card, Modal과 입력 Touch Area는 Card Density 조정 대상에서 제외하고 기존 접근성 높이를 유지한다.

### HOME Service & Insights Card

- HOME Featured Expertise와 Insights는 섹션 역할과 콘텐츠 수가 다르므로 독립된 Grid Width를 사용한다. 상세페이지 Card Grid에는 HOME 전용 폭을 적용하지 않는다.
- Featured Expertise는 `--content-width-home-services: 1076px` 안에서 카드 폭을 이전보다 약 `12px` 확대하고, 기존 3열과 마지막 행 중앙 정렬을 유지한다.
- Insights는 `--content-width-home-insights: 1260px`까지 사용하며 `1280px 이상`에서 4열로 배치한다. `1279px 이하`에서는 `320px` 2열, `760px 이하`에서는 Container 전체 폭 1열로 전환한다.
- HOME Service Card는 Desktop 최소 높이 `182px`, Insights Card는 `260px`을 사용한다. Mobile에서는 콘텐츠 기반 높이로 전환한다.
- HOME Card Padding은 Desktop `22px 20px`, Mobile `24px 20px`을 사용한다. Desktop의 최소 높이는 시각적 균형만 보정하고 실제 높이는 콘텐츠에 따라 늘어나며, Mobile은 `min-height:0`으로 전환한다.
- HOME Card Action은 `--type-card-link`을 사용해 Desktop·Mobile `16px`, `600` 굵기로 표시한다.
- Card Action은 최소 높이 `32px`, 텍스트와 Line Arrow 간격 `6px`, Description 이후 간격 `20px / Mobile 18px`을 유지한다.
- HOME Card에서 Action을 하단으로 강제하는 `margin-top:auto`를 사용하지 않는다. 동일 행의 자연스러운 높이 정렬은 Grid가 콘텐츠 기준으로 처리한다.
- Principle, Featured Expertise와 Insights의 Desktop Section Padding은 공통 Large Section보다 `12px` 넓게 사용하여 주요 HOME 섹션 사이의 호흡을 확보한다.

### Mobile Optimization

- QA widths: `360 / 390 / 430 / 768px`
- Mobile Header Height: `54px`
- Mobile Container Gutter: `20px`
- Mobile Button: 일반 `47px`, 주요 CTA `48px` 최소 높이
- Mobile Form Input: 최소 `48px`, Font Size `16px`
- Mobile Section Padding: `64px / 52px / 40px`의 의미 기반 Section Token
- Tablet 768px은 기존 Navigation breakpoint를 변경하지 않고 간격과 터치영역만 보정한다.

### HOME Mobile Hero

- 적용 범위는 `760px 이하`의 HOME Hero로 한정하며 Desktop과 Tablet Hero에는 적용하지 않는다.
- Mobile Hero는 `60svh`를 기준으로 하여 전체 Hero와 다음 Section 시작이 첫 화면에 함께 보이도록 한다. `vh`는 Fallback으로 함께 제공한다.
- Hero 제목은 `--mobile-display(26px)`과 `1.24` 행간을 사용하며 기존보다 굵게 만들지 않는다.
- Hero Brand Label은 `--mobile-small(13px)`과 기존 Weight·Letter Spacing을 유지한다.
- Hero CTA는 기존 폭과 Radius를 유지하고 높이 `48px`, 글자 `16px`, 버튼 간격 `8px`을 사용한다.
- Mobile Container Gutter `20px`을 Hero에도 적용하며 현재 Hero에는 별도 Description을 추가하지 않는다.
- Mobile Header 높이·Logo·Menu·Padding과 Hero 이미지·색상·Scroll Indicator는 변경하지 않는다.

### QA-03 Mobile Density

- Mobile Section은 역할별로 Hero 다음 Principle `48px`, Service·Insights 일반 콘텐츠 `56px` 상하 Padding을 사용한다.
- HOME Service Grid Gap은 `16px`을 유지한다. Insight Grid는 콘텐츠 밀도 보정을 위해 `10px`을 사용한다.
- HOME Service Card Padding은 Mobile `24px 20px`을 유지한다. Insight Card는 상단 `16px`, 하단 `24px`, 좌우 `20px`을 사용한다.
- HOME Card는 Mobile에서 `min-height:0 / height:auto / justify-content:flex-start`를 적용하고 `margin-top:auto`를 사용하지 않는다.
- Service Card는 Number `15px`, 한글 Title `22px`, 영문 Title `18px`, Link `16px` 역할을 사용한다.
- Insight Card는 Category `14px`, Title `20px`, Description `16px`, Link `16px` 역할을 사용한다.
- HOME Service 제목과 Insights 제목은 Mobile Page Title 역할인 `28px`, Principle 제목은 Section Title 역할인 `24px`을 사용한다.

### Mobile Typography Scale

- 적용 범위: `760px 이하`; 공통 Semantic Token이 Mobile Device Token으로 전환된다.
- Component별 임의 크기나 별도의 Mobile Typography Scale을 추가하지 않는다.
- Button과 Navigation 및 Section Label은 `Small`, 본문은 `Body`, Card Title은 `H3`, Small Card Heading은 `H4`, Page Title은 `H1`, HOME Hero는 `Display` 역할을 사용한다.
- Form Input Text는 iOS Safari 자동 확대 방지를 위해 `--mobile-form(16px)`을 사용한다.

## Header

Transparent on Hero

White Glass Background on Scroll

Height

72px Default

64px Scrolled Desktop

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
- Header: Desktop은 Mark `27px`, Divider `24px`, Gap `5px`을 기본으로 사용한다. Tablet은 `25px / 22px / 5px`, Mobile은 `24px / 20px / 2px`로 비례 축소한다.
- Header Wordmark는 Inter `font-weight: 600`과 기본 Kerning을 유지하고 `letter-spacing: -0.4px`을 사용한다. 글자별 공백·개별 Span·Margin으로 자간을 만들지 않는다.
- Header의 Mark·Divider·Gap·Wordmark Tracking은 `--component-header-logo-*` 전용 Token으로 관리한다.
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

## CSS Architecture

QA-04 이후 `css/style.css`는 다음 책임 순서를 기준으로 관리한다.

1. Root Variables / Color System
2. Typography System
3. Spacing System
4. Layout & Container
5. Components
6. Utilities
7. Consolidated Responsive
8. Page-specific Layout Policy

### Typography

- Device Primitive Scale은 Desktop과 Mobile 각각 `Display / H1 / H2 / H3 / Body Large / Body / Small` 7단계만 유지한다.
- Component는 숫자 `font-size`를 선언하지 않고 `--type-*` Semantic Role만 사용한다.
- H4, Caption, CTA, Button, Form, Card 보조 역할은 Primitive Scale에서 계산되는 Semantic Alias이며 별도의 Device Scale이 아니다.
- Mobile에서는 Root의 `--type-*` 매핑만 전환하고 Component별 독립적인 숫자 Scale을 만들지 않는다.

### Spacing and Layout

- Padding, Margin, Gap은 `--space-*`, `--component-*`, `--grid-*` Token을 사용한다.
- Page CSS는 Layout과 배치만 담당하며 독립적인 Typography 값은 정의하지 않는다.
- 기존 UI를 보존하기 위한 Responsive의 Semantic Role 지정도 반드시 Root Token을 참조한다.

### Responsive

- 동일 조건 Media Query는 한 블록으로 통합한다.
- 기본 구간은 Desktop / Tablet / Mobile이며, Grid 열 수가 달라지는 1280px·1279px 및 Header 안정성을 위한 900px 구간만 Layout 예외로 유지한다.
- `prefers-reduced-motion`은 기능 보호를 위한 별도 접근성 조건으로 유지한다.
- Responsive 규칙에는 직접 숫자 `font-size`를 추가하지 않는다.

### Maintenance Rule

Typography 변경은 Desktop 또는 Mobile Primitive Token에서 시작한다. Component나 Page에서 값을 덮어쓰지 않는다. 새로운 예외가 필요하면 기존 Semantic Role로 해결 가능한지 먼저 확인하고, 동일 Media Query를 새로 추가하지 않는다.

### CSS Size Optimization

- CSS 최적화는 Minify가 아니라 전체 HTML·JavaScript의 실제 참조 여부를 기준으로 수행한다.
- Selector List의 일부만 미사용이면 해당 Rule을 유지하고, 모든 Selector Branch가 미사용인 Rule만 제거한다.
- JavaScript가 동적으로 사용하는 Class, Modal State, Hover·Focus·Active 및 접근성 상태는 보호한다.
- 동일 Context와 Selector에서 뒤 선언이 앞 선언을 완전히 대체하는 경우에만 Shadowed Declaration을 제거한다.
- 최적화 후에는 모든 페이지의 Desktop·Tablet·Mobile 계산 Style과 실제 Layout을 이전 버전과 비교한다.
- Source CSS는 사람이 읽고 유지보수할 수 있는 구조를 유지하며, 파일 크기만을 위한 공백 제거 또는 단일 행 압축을 기준으로 삼지 않는다.

### Mobile Modal Typography and Density

상담 신청 Modal과 Business Valuation 사전진단 Modal은 동일한 Mobile Modal Semantic Role을 공유한다.

- Modal Title: `--modal-title-size`
- Modal Description: `--modal-description-size`
- Question: `--modal-question-size`
- Section Heading: `--modal-section-title-size`
- Label: `--modal-label-size`
- Input / Select / Textarea: `--modal-input-size`
- Help / Error / Privacy: `--modal-help-size`
- Primary Action: `--modal-button-size`

Mobile에서 Input Text는 iOS 자동 확대 방지를 위해 항상 `16px` 이상을 유지한다. Input과 Button의 최소 높이는 `48px`, 닫기 버튼의 Touch Area는 `44px` 이상을 사용한다. Modal은 `100vh` Fallback 뒤에 `100dvh` 기준 최대 높이를 선언하고 내부 Scroll을 사용하며, 하단 Padding에는 Safe Area를 반영한다. Overlay Blur는 Safari 계열을 위해 `-webkit-backdrop-filter`를 함께 제공한다.

두 Modal은 별도의 중복 Typography Scale을 만들지 않는다. Desktop과 Tablet의 기존 Component 값은 유지하고, `760px 이하` 구간에서만 공통 Modal Role Token으로 전환한다.

## Project Reference Rule

앞으로 디자인을 수정하거나 새로운 페이지를 만들 때에는 아래 문서를 먼저 참고한 후 코드를 작성하는 것을 프로젝트 원칙으로 적용한다.

- `MASTER_SPEC.md`
- `BRAND_GUIDE.md`
- `COPY_GUIDE.md`
- `DESIGN_SYSTEM.md`
- `AI_RULES.md`
