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

Primary Navy

`#071A2F`

Brand Gold

`#A98235`

White

`#FFFFFF`

Light Gray

`#F5F6F8`

Text

`#222222`

Muted

`#6F7782`

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

Container

1200px

Section Padding

120px

Mobile

24px

### Mobile Optimization

- QA widths: `360 / 390 / 430 / 768px`
- Mobile Header Height: `64px`
- Mobile Container Side Margin: `16px`
- Mobile Button: 최소 `52px`, 주요 CTA `56px`
- Mobile Form Input: 최소 `48px`, Font Size `16px`
- Mobile Section Padding: 콘텐츠 역할에 따라 약 `70~84px`
- Tablet 768px은 기존 Navigation breakpoint를 변경하지 않고 간격과 터치영역만 보정한다.

### Mobile Typography Scale

- 적용 범위: `760px 이하`만 사용하며 Desktop과 Tablet Typography는 변경하지 않는다.
- Section Label: `6.25px / 0.08em`
- Home Hero Title: `12~13.25px / 1.14`
- Section Title: `10~12px / 1.34`
- Subpage Hero Title: `12~14px / 1.26`
- Card Title: 콘텐츠 성격에 따라 `9~11.5px`, 같은 Component 안에서는 동일 Scale을 유지한다.
- Body: 기본 `9.5~9.75px`, 긴 설명은 `1.92~2.06` Line Height를 사용한다.
- Button Text: 기본 `11.25px`, Primary Contact CTA는 `12.5px`; 기존 Touch Target 높이는 유지한다.
- Form Input Text: iOS Safari 자동 확대 방지를 위해 `16px`을 유지한다.

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

16px

Button

12px

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
- Header: Desktop 로고 높이는 24~32px, Mobile은 22~28px 범위에서 메뉴와 수직 정렬한다.
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
