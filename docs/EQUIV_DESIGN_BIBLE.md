# EQUIV DESIGN BIBLE

Version 1.0

이 문서는 EQUIV 웹사이트의 최상위 시각 기준이다. 새로운 디자인이 이 철학과 충돌할 경우 새로운 디자인을 수정하며, Visual Philosophy는 임의로 변경하지 않는다.

## Chapter 1. Visual Philosophy

### 1. 브랜드의 첫인상

EQUIV는 화려함이나 유행을 앞세우지 않는다. 사용자가 사이트에 들어온 뒤 3초 안에 `M&A 실무 경험이 충분한 Professional Advisory Brand`라는 인상을 받도록 한다.

모든 디자인은 아래 인상을 기준으로 판단한다.

- Professional
- Balanced
- Strategic
- Premium
- Trustworthy

### 2. 브랜드의 무게중심

Header, Hero, CTA, Statistics와 Section을 분리된 장치처럼 보이게 하지 않는다. 사용자가 구조를 의식하지 않고 하나의 브랜드 흐름으로 읽도록 한다.

### 3. Visual Hierarchy

사용자의 시선은 아래 순서를 따른다.

1. Logo
2. Menu
3. Hero Title
4. Hero Description
5. CTA
6. Statistics
7. Service

한 화면 안에 두 개 이상의 시각적 중심을 만들지 않는다.

### 4. Design Principle

- 복잡함보다 여백을 선택한다.
- 큰 효과보다 균형을 선택한다.
- 화려함보다 신뢰를 선택한다.

### 5. Reference Rule

Bridgecode, LISTING과 MOMENS는 복제 대상이 아니다. 다음 원칙만 참고한다.

- 시선의 흐름
- 정보의 우선순위
- Header 비율
- Hero 비율
- CTA 위치

레이아웃, 색상, 아이콘, 카피와 애니메이션은 그대로 차용하지 않는다.

### 6. Visual Keywords

- Premium
- Simple
- Balanced
- Confident
- Calm
- Professional
- Strategic

### 7. Do

- Logo가 브랜드의 시작점이 되게 한다.
- Hero는 가장 중요한 정보만 전달한다.
- CTA는 고민하지 않고 이해하고 선택할 수 있게 한다.
- 여백을 정보만큼 중요하게 다룬다.
- 사용자는 스크롤하기 전에 회사를 신뢰할 수 있어야 한다.

### 8. Don't

- 장식적인 디자인 요소와 아이콘을 늘리지 않는다.
- Header를 시각적으로 분절하지 않는다.
- Hero를 불필요하게 화면 아래로 내리지 않는다.
- CTA를 Hero 메시지에서 멀리 배치하지 않는다.
- 한 화면 안에 두 개 이상의 중심을 만들지 않는다.

## Chapter 2. Header Design System

### 1. Header의 역할

Header는 단순한 메뉴가 아니라 브랜드를 소개하는 첫 공간이다. Navigation은 브랜드를 보조하며 시선은 `Brand → Professionalism → Menu` 순서로 이어져야 한다.

### 2. Header Composition

구조는 `Logo Group / Navigation / Action Area`의 세 역할로 구분할 수 있지만 사용자는 `Logo + Navigation / Action`의 두 그룹으로 인식해야 한다.

현재 구현에 별도 Action Area가 없는 경우 Navigation 구조를 임의로 추가하지 않는다. 기존 상담 진입점이 Action 역할을 수행하도록 유지한다.

### 3. Logo Rules

- 공식 `The EQUIV Mark + Divider + EQUIV` Lockup을 유지한다.
- Desktop Logo Group은 기존 대비 약 10~15% 확대할 수 있다.
- Mark는 약 10%, Wordmark는 약 15% 확대한다.
- Header 높이는 확대하지 않는다.
- Logo의 Container 시작 위치는 필요 시 8~12px 범위에서 광학 보정한다.

### 4. Navigation Rules

- Navigation은 Logo를 보조한다.
- Desktop Navigation 전체를 Logo 방향으로 약 80~120px 이동한다.
- Menu 사이 간격, Hover와 Dropdown 동작은 유지한다.
- Desktop Menu는 18px, Weight 600을 기준으로 한다.

### 5. Action Area

Action은 Header의 끝을 정리하는 역할만 수행한다. 브랜드보다 강하게 보이지 않으며 Menu보다 조금 강조되는 수준을 유지한다.

### 6. Optical Balance

Header의 시각적 무게는 아래 비율을 참고한다.

- Logo Group: 35%
- Navigation: 45%
- Action: 20%

수학적 중앙보다 Logo, Navigation과 Hero로 이어지는 시각적 흐름을 우선한다.

### 7. Final QA

- Logo가 가장 먼저 보이는가?
- Menu가 Logo를 보조하는가?
- Header가 하나의 그룹처럼 보이는가?
- Hero로 시선이 자연스럽게 이어지는가?
- 경쟁 사이트를 복제하지 않으면서 동등한 안정감이 느껴지는가?
- Header만 보아도 Premium Advisory Brand라는 인상이 드는가?

## Chapter 3. Hero Design System

Version 1.0
Status: Approved Draft

### 1. Hero의 역할

Hero는 광고나 회사소개 영역이 아니다. 사용자가 `이 회사와 상담해볼 가치가 있다.`고 판단할 수 있는 신뢰의 시작점이다. 제품을 판매하거나 장황하게 회사를 설명하지 않는다.

### 2. Hero의 목표

사용자는 Hero를 본 뒤 3초 안에 아래 내용을 이해할 수 있어야 한다.

1. EQUIV가 무엇을 하는 회사인가
2. 왜 신뢰할 수 있는가
3. 무엇을 도와주는가
4. 어디에서 상담을 시작하는가

이 네 가지 판단에 필요하지 않은 정보는 Hero에 추가하지 않는다.

### 3. 정보 우선순위

Hero의 정보 순서는 아래를 따른다.

1. Brand
2. Headline
3. Description
4. CTA
5. Supporting Information

Statistics, Service Card, Icon과 Banner가 Headline보다 먼저 보이지 않게 한다.

### 4. 하나의 콘텐츠 블록

Headline, Description, CTA와 Supporting Information은 서로 분리된 장치처럼 보이지 않아야 한다. 각 요소의 간격은 사용자가 위에서 아래로 읽는 흐름을 방해하지 않는 하나의 리듬으로 관리한다.

### 5. Hero Height

Hero는 화면을 채우기 위한 영역이 아니다. 가장 중요한 내용을 빠르게 전달할 수 있는 높이를 사용한다.

- Desktop: Viewport Height의 70~82%
- Mobile: Viewport Height의 65~75%
- `100vh`는 사용하지 않는다.

현재 HOME 기준은 Desktop `78svh`, Mobile `70svh`이며 `vh`를 Fallback으로 함께 제공한다.

### 6. Headline Rules

- Hero Headline은 페이지에서 가장 큰 Typography 역할을 사용한다.
- 권장 줄 수는 2줄이며 최대 3줄을 넘지 않는다.
- 한 줄은 10~14단어 이하로 유지한다.
- 크기보다 짧고 명확한 메시지를 우선한다.

### 7. Description Rules

- Description은 Headline을 설명하며 새로운 주제를 추가하지 않는다.
- 2~3줄, 최대 220자 이내로 제한한다.
- 의미 없는 보조 문장을 채우기 위해 Description을 추가하지 않는다.

### 8. CTA Rules

- CTA는 Hero 메시지에서 이어지는 행동의 시작점이다.
- Description과 CTA의 간격은 Headline과 Description 사이보다 조금 넓게 둔다.
- CTA를 Hero 콘텐츠에서 분리된 배너나 장식처럼 보이게 하지 않는다.

### 9. Statistics Rules

- Statistics는 성과를 과시하는 영역이 아니라 Headline을 보조하는 근거다.
- Statistics가 없는 Hero에 임의로 수치를 추가하지 않는다.
- 사용하는 경우 Headline과 CTA보다 시각적 강조를 낮춘다.

### 10. Background Rules

- Background는 Headline의 가독성과 분위기를 지원한다.
- 이미지의 디테일, 대비와 장식이 텍스트보다 먼저 보이지 않게 한다.

### 11. Visual Balance

사용자의 시선은 `Headline → Description → CTA → Supporting Information` 순서로 이동해야 한다. 중간에 오른쪽이나 위쪽으로 시선을 분산시키는 별도 중심을 만들지 않는다.

### 12. White Space

Premium Hero는 크기가 아니라 호흡으로 완성한다. Headline 위·아래, CTA 아래와 다음 Section 사이의 여백은 하나의 수직 리듬으로 관리한다.

### 13. Benchmark Rule

Bridgecode, LISTING과 MOMENS는 복제 대상이 아니다. Hero의 절제감, Typography 비율, 콘텐츠 폭, White Space와 Header에서 Hero로 이어지는 흐름만 참고한다.

### 14. Do

- Hero를 하나의 콘텐츠 블록으로 보이게 한다.
- CTA를 Hero 메시지 안에서 자연스럽게 연결한다.
- Headline이 가장 먼저 읽히게 한다.
- Hero만으로도 EQUIV를 신뢰할 근거가 느껴지게 한다.

### 15. Don't

- Hero를 광고처럼 만들지 않는다.
- 장식과 요소 수를 늘리지 않는다.
- Hero 콘텐츠를 불필요하게 아래로 내리지 않는다.
- Hero 안에 여러 개의 시각적 중심을 만들지 않는다.

### 16. Final QA

- Hero를 3초 안에 이해할 수 있는가?
- Headline이 가장 먼저 보이는가?
- CTA가 자연스럽게 이어지는가?
- Hero가 절제된 Premium Experience로 보이는가?
- Hero만 보아도 상담을 검토할 신뢰가 생기는가?

## Chapter 4. Typography System

Version 1.0
Status: Approved Draft

### 1. Typography Philosophy

Typography는 글자를 크게 만드는 기술이 아니라 정보의 중요도를 시각적으로 전달하는 시스템이다. 사용자는 문장을 읽기 전에 크기와 대비를 먼저 인식한다.

### 2. Typography Hierarchy

EQUIV는 아래 6개의 Primary Role만 사용한다.

1. Display
2. H1
3. H2
4. H3
5. Body
6. Caption

Small Text는 Label과 보조 정보를 위한 Utility Role이다. H4, Body Large, CTA와 Form 같은 기존 Token은 새로운 크기가 아니라 위 역할을 참조하는 호환 Alias로만 유지한다.

### 3. Desktop Scale

- Display: `64px / 700 / 1.15`, HOME Hero 전용
- H1: `52px / 700`, Page Title
- H2: `36px / 700`, Section Title
- H3: `26px / 600`, Card·Service·Subheading
- Body: `18px / 400 / 1.7`
- Small: `16px`, Label·Supporting Text
- Caption: `14px`, Caption·Legal·Help Text

### 4. Mobile Scale

Desktop Scale을 단순 축소하지 않는다.

- Display: `46px`
- H1: `36px`
- H2: `30px`
- H3: `24px`
- Body: `17px`
- Small: `15px`
- Caption: `13px`

### 5. Typography Width

- Body 한 줄은 약 60~75자 범위로 제한한다.
- Headline은 40자 이하를 권장한다.
- 긴 문장은 Font Size를 줄이기보다 Content Width와 문장 구조를 먼저 조정한다.

### 6. Bold Rules

Bold는 장식적 강조가 아니라 정보의 우선순위다. 한 문단 안에서 Bold 사용은 두 곳 이하로 제한한다.

### 7. Color Rules

- 본문은 순수 검정 `#000000`을 사용하지 않는다.
- 기본 본문은 EQUIV Text Primary Token을 사용한다.
- 보조 설명은 본문보다 한 단계 밝은 Text Secondary 또는 Muted Token을 사용한다.

### 8. Button Typography

- Desktop: `18px / 600`
- Mobile: `17px / 600`
- Hover에서 Font Size와 Weight를 바꾸지 않는다.
- 모든 주요 Button은 동일한 Typography Role을 사용한다.

### 9. Navigation Typography

- Desktop Menu: `18px / 600`
- Mobile Menu: `17px / 600`
- Hover에서는 크기를 변경하지 않고 색상과 기존 상태 표시만 사용한다.

### 10. Typography Rhythm

`Heading → Description → Button → Next Section`의 흐름은 페이지 전체에서 같은 위계와 리듬을 유지한다. 크기만으로 정보의 우선순위를 이해할 수 있어야 한다.

### 11. Benchmark Rule

Bridgecode의 절제감, LISTING의 Typography 대비와 MOMENS의 가독성을 참고하되 레이아웃이나 Typography 표현을 복제하지 않는다. 목표는 과장되지 않은 한국형 Premium M&A Advisory Typography다.

### 12. Final QA

- 제목만 읽어도 페이지 구조가 이해되는가?
- 크기만으로 정보 우선순위가 보이는가?
- 본문이 편안하게 읽히는가?
- 모든 페이지의 Typography Rhythm이 일관적인가?
- 디자인된 글보다 실제로 읽히는 글이 되었는가?

## Chapter 5. Grid & Spacing System

Version 1.0
Status: Approved Draft

### 1. Philosophy

EQUIV는 공간을 채우는 디자인보다 공간을 남기는 디자인을 선택한다. Premium Experience는 큰 화면이나 많은 장식이 아니라 일관된 여백과 질서에서 시작한다.

### 2. Grid Principle

모든 페이지는 하나의 Grid를 사용한다. Page마다 Container Width, Padding, Column과 Spacing을 별도로 만들지 않는다.

### 3. Container

- Desktop: `1260px`
- Ultra Wide: `1400px` 이상으로 확장하지 않는다.
- Tablet: Viewport의 `93%`
- Mobile: Full Width와 좌우 `20px` Gutter

Headline, Card, Button과 Supporting Content는 같은 Container의 왼쪽 기준선을 공유한다.

### 4. Section Rhythm

- Desktop Standard Section: 상하 `120px`
- Hero 이후 첫 Section: 상단 `140px`
- Footer 연결: `100px`
- Mobile Section: 상하 `64px`

Section마다 별도의 Padding을 만들지 않고 공통 Section Token을 사용한다.

### 5. Vertical Rhythm

- Section Title → Description: `32px`
- Description → Content: `48px`
- Section Level: `120px`
- Group Level: `64px`
- Card Level: `32px`
- Text Level: `16px`

새로운 간격이 필요하면 기존 Level과 Token을 먼저 사용한다.

### 6. Card Grid

- Desktop: 3 Columns
- Tablet: 2 Columns
- Mobile: 1 Column

콘텐츠 수가 열 수와 맞지 않는 경우에도 4열 예외를 만들지 않는다. 남은 Card는 공통 Grid 안에서 수평 균형이 유지되도록 중앙 정렬한다.

### 7. Card Gap & Padding

- Desktop Gap: `32px`
- Tablet Gap: `24px`
- Mobile Gap: `20px`
- Card Padding: `32px`

Service, Insight, Feature와 Detail Card는 같은 간격과 Padding Rule을 사용한다.

### 8. Visual Alignment

모든 Section의 왼쪽 기준선은 일치해야 한다. 한쪽에만 시각적 무게가 몰리지 않도록 Grid Width, Column과 빈 공간을 함께 조정한다.

### 9. Empty Space

빈 공간은 남는 공간이 아니라 디자인 요소다. 새로운 Icon이나 Card를 추가하기 전에 기존 정보의 여백과 위계를 먼저 조정한다.

### 10. Benchmark Rule

Bridgecode의 단순한 Grid, LISTING의 일정한 여백과 MOMENS의 안정적인 Section Rhythm을 참고하되 레이아웃을 복제하지 않는다. EQUIV는 이보다 조금 더 절제된 Grid를 목표로 한다.

### 11. Final QA

- 모든 Section이 같은 Rhythm을 사용하는가?
- 모든 Content의 왼쪽 기준선이 일치하는가?
- Card 간격이 Desktop·Tablet·Mobile에서 일관적인가?
- White Space가 정보의 위계를 강화하는가?
- Section 하나를 제거해도 전체 Grid가 유지되는가?

## Chapter 6. CTA & Card System

Version 1.0
Status: Approved Draft

### 1. Philosophy

CTA는 버튼 자체가 아니라 사용자의 다음 행동을 안내하는 장치다. Card는 정보를 담는 상자가 아니라 사용자가 내용을 비교하고 결정을 쉽게 내리도록 돕는 구조다.

### 2. CTA Priority

페이지의 CTA는 다음 세 단계만 사용한다.

1. Hero Primary CTA
2. Section Secondary CTA
3. Footer Final CTA

동일한 행동을 반복하는 CTA를 불필요하게 추가하지 않는다.

### 3. Primary CTA

- 가장 먼저 인식되는 CTA
- Brand Accent 배경과 White Text
- Large Size
- 공통 Radius
- Hover는 색상과 위치를 약 `5~8%` 범위에서만 강조

### 4. Secondary CTA

Secondary CTA는 Primary보다 한 단계 낮은 위계를 갖는다. Outline 또는 Subtle Fill을 사용하며 Primary와 경쟁하지 않는다.

### 5. CTA Placement

CTA는 `Headline → Description → CTA → Supporting Information` 순서로 정보 바로 아래에 둔다. CTA만 다른 콘텐츠와 분리하여 배치하지 않는다.

### 6. Button Width & Height

- Desktop: 내용 기준 폭, 일반 CTA Full Width 금지
- Mobile: `100%`
- Desktop Height: `52px`
- Mobile Height: `50px`
- Typography: `18px / 600`

상담과 기업가치 사전진단 Modal의 Form Submit은 Form 구조와 접근성을 위한 Full Width 예외로 유지한다.

### 7. Card Structure

모든 Card는 다음 순서를 사용한다.

1. Icon 또는 Label (Optional)
2. Title
3. Description
4. Link 또는 CTA

새로운 정보 순서를 만들지 않는다.

### 8. Card Height

동일 Row의 Card는 같은 높이를 유지한다. Grid Stretch와 `height: 100%`를 사용하며 콘텐츠보다 빈 공간이 커지는 불필요한 고정 높이는 추가하지 않는다.

### 9. Card Interaction

- Hover Lift: `-3px`
- Duration: `220ms`
- Small Shadow
- 과도한 Scale 효과 금지

Hover는 움직임을 강조하는 것이 아니라 클릭 가능한 반응을 전달한다.

### 10. Card Radius & Padding

- Radius: 모든 Card가 `--component-card-radius` 사용
- Desktop Padding: `32px`
- Tablet Padding: `28px`
- Mobile Padding: `24px`

Section별 Radius와 Padding 예외를 만들지 않는다.

### 11. CTA Copy Consistency

같은 의미의 CTA에는 같은 문구를 사용한다.

- 공통 상담: `상담 신청`
- 기업가치 업무: `기업가치 검토`
- 일반 연락: `문의하기`

서비스별 CTA는 행동 목적이 다른 경우에만 `기업 매각 상담`, `기업 인수 상담`처럼 구분한다. `지금 신청`, `바로 시작`과 같은 압박성 표현은 사용하지 않는다.

### 12. Benchmark Rule

Bridgecode의 절제된 CTA, LISTING의 읽기 쉬운 Card와 MOMENS의 자연스러운 Hover를 참고하되 디자인을 복제하지 않는다. EQUIV는 이보다 더 차분한 CTA와 Interaction을 목표로 한다.

### 13. Final QA

- 사용자의 다음 행동이 명확한가?
- 같은 역할의 Button이 동일한 스타일을 사용하는가?
- 같은 Row의 Card 높이가 일치하는가?
- Card Hover가 절제되고 자연스러운가?
- 사용자가 고민 없이 다음 단계로 이동할 수 있는가?

---

## Chapter 7. Motion & Interaction System

Version 1.0
Status: Approved

### 1. Motion Philosophy

EQUIV의 Motion은 장식이 아니라 사용자의 시선을 다음 정보와 행동으로 안내하는 기능이다. 움직임 자체가 기억되지 않도록 Calm, Smooth, Confident, Professional, Premium을 기준으로 한다.

### 2. Motion Hierarchy

1. Page Entrance
2. Section Reveal
3. Card Hover
4. Button Interaction
5. Modal Transition

모든 단계는 동일한 Motion Token과 Easing을 사용한다. Bounce, Zoom, 3D Flip, 과도한 Scale, 장식용 Rotate와 좌우 흔들림은 사용하지 않는다.

### 3. Motion Tokens

- Hover: `--motion-duration-hover` / `200ms`
- Click: `--motion-duration-click` / `160ms`
- Fade: `--motion-duration-fade` / `300ms`
- Reveal: `--motion-duration-reveal` / `600ms`
- Modal: `--motion-duration-modal` / `280ms`
- Accordion: `--motion-duration-accordion` / `250ms`
- Stagger: `--motion-delay-step` / `100ms`
- Standard Easing: `--motion-ease-standard`
- Emphasized Easing: `--motion-ease-emphasized`

컴포넌트에서 임의의 duration, delay, easing 값을 만들지 않는다.

### 4. Page, Hero and Section Motion

- 상세페이지 진입은 `opacity`와 `translateY(10px)`만 사용한다.
- Home Hero는 Headline, CTA, Supporting Information 순서로 등장한다.
- Section Reveal은 `opacity`와 `translateY(24px)`만 사용한다.
- 동일 그룹의 카드 또는 정보는 최대 4단계까지 `100ms` 간격으로 순차 노출한다.
- Motion은 콘텐츠를 숨기거나 읽는 순서를 바꾸지 않는다.

### 5. Component Interaction

- Card: 작은 Shadow와 `-3px` Lift만 사용하고 Scale은 사용하지 않는다.
- Button: Hover 시 최대 `-2px`, Active 시 원위치로 복귀한다.
- Navigation: 크기와 굵기를 바꾸지 않고 색상과 절제된 Underline만 사용한다.
- Modal: Backdrop Fade와 `0.98 → 1` Scale을 사용한다.
- Accordion: 기능상 필요한 높이 전환만 `250ms`로 허용하며 Jump를 방지한다.
- Loading: 새로운 Spinner를 만들지 않고 가능한 경우 Skeleton을 우선한다. 기존 짧은 상태 표시만 기능적으로 유지한다.

### 6. Performance and Accessibility

- CSS Transition과 브라우저 기본 기능을 우선하며 별도 Animation Library를 도입하지 않는다.
- 애니메이션은 `transform`과 `opacity` 중심으로 구현한다.
- `prefers-reduced-motion: reduce` 환경에서는 Page, Hero, Reveal, Modal 전환을 제거하고 모든 콘텐츠를 즉시 표시한다.
- Motion이 없어도 Focus, Hover, Active, Expanded 상태를 이해할 수 있어야 한다.
- Anchor와 Top 이동은 기본적으로 Smooth Scroll을 사용하되 Reduced Motion에서는 즉시 이동한다.

### 7. Final QA

- 모든 Hover가 같은 리듬으로 움직이는가?
- Hero 등장 순서가 자연스러운가?
- Motion이 콘텐츠를 방해하지 않는가?
- Page, Card, Button, Navigation, Modal의 언어가 일관적인가?
- 저사양 PC와 모바일에서도 transform과 opacity 중심으로 부드럽게 동작하는가?
- Reduced Motion 환경에서 모든 기능과 정보가 그대로 유지되는가?

---

## Chapter 8. Responsive Experience System

Version 1.0
Status: Approved

### 1. Responsive Philosophy

Responsive는 화면을 축소하는 기술이 아니라 기기별 우선순위에 맞춰 같은 EQUIV 브랜드 경험을 제공하는 시스템이다.

- Desktop: Information First
- Tablet: Reading First
- Mobile: Action First

### 2. Breakpoint Strategy

EQUIV는 세 개의 경험 구간만 사용한다.

- Mobile: `0–767px`
- Tablet: `768–1199px`
- Desktop: `1200px 이상`

가로 회전, Hover Capability와 Reduced Motion은 화면 너비 Breakpoint가 아니라 입력 방식과 접근성을 위한 보조 조건으로만 사용한다.

### 3. Responsive Tokens

Typography, Spacing, Container, Grid, Card, Button과 Motion은 Device Token에서 전환한다. Component 내부에서 기기별 임의 값을 만들지 않는다.

- Desktop Display: `clamp(60px, 4.5vw, 68px)`
- Tablet Display: `clamp(50px, 5.2vw, 56px)`
- Mobile Display: `clamp(40px, 10.7vw, 46px)`
- Desktop Section: `120px`
- Tablet Section: `96px`
- Mobile Section: `72px`
- Desktop Grid: 3 Columns
- Tablet Grid: 2 Columns
- Mobile Grid: 1 Column
- Mobile Card Padding: `24px`
- Desktop/Tablet Button: `52px`
- Mobile Button: `54px`

### 4. Component Experience

- Header: Desktop Horizontal Navigation, Tablet과 Mobile Collapsed Navigation
- Hero: Desktop Visual Impact, Tablet Reading Balance, Mobile CTA Priority
- Card: Desktop·Tablet Equal Height, Mobile Auto Height
- CTA: Desktop·Tablet Content Width, Mobile Full Width
- Form: Mobile 1 Column과 Input 위 Label 유지
- Modal: Dynamic Viewport, Safe Area와 내부 Scroll 적용
- Image: Hero의 중심 피사체가 유지되도록 Center Crop을 기본으로 사용

### 5. Mobile Interaction

Mobile Motion은 Desktop보다 20% 짧은 Token을 사용한다. Hover가 없는 Touch Device에서는 Lift를 제거하고 Active 상태의 Border, Shadow와 밝기 변화로 반응을 전달한다. 모든 주요 Touch Target은 최소 `44px`, Mobile CTA는 `54px`를 확보한다.

### 6. Orientation and Browser Stability

- Mobile·Tablet 가로 모드에서 Hero 콘텐츠가 잘리지 않도록 최소 콘텐츠 높이를 보장한다.
- Navigation과 Modal은 `100dvh`와 `100vh` Fallback을 함께 사용한다.
- Safari를 위해 `-webkit-backdrop-filter`를 함께 제공한다.
- 모바일 주소창 변화 중에도 Menu와 Modal은 내부 Scroll을 유지한다.
- 200% Zoom에서도 Container, Grid와 Form이 고정 폭 때문에 잘리지 않도록 Fluid Width를 우선한다.

### 7. Performance and Accessibility

- 새로운 Responsive Library를 도입하지 않는다.
- Hero Image는 기존 최적화된 단일 자산을 재사용한다.
- 불필요한 Script와 장식 요소를 추가하지 않는다.
- Keyboard Focus, Touch Target, Reduced Motion, Contrast와 Semantic Label을 모든 기기에서 유지한다.
- Lighthouse 목표는 Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+다.

### 8. Final QA

- Desktop과 Mobile에서 같은 브랜드 경험이 유지되는가?
- Hero와 Navigation이 모든 방향에서 자연스럽게 읽히는가?
- CTA가 손쉽게 눌리고 White Space가 유지되는가?
- Typography가 Clamp Token으로 자연스럽게 변하는가?
- Card와 Form 구조가 Device 전환에서 깨지지 않는가?
- Safari와 Chromium 계열 브라우저에서 동적 뷰포트가 안정적인가?

---

## Chapter 9. Design Token & Component Library

Version 1.0
Status: Approved

### 1. Design System Philosophy

EQUIV는 페이지별로 새로운 디자인을 만드는 대신 검증된 Component를 조합한다. 새로운 화면을 만들기 전 기존 Component와 Variant로 해결할 수 있는지 먼저 확인하며, 재사용하기 어려운 UI는 Library에 추가하지 않는다.

### 2. Token Hierarchy

모든 Token은 다음 단방향 계층을 따른다.

`Foundation Token → Semantic Token → Component Token`

- Foundation: 브랜드의 원시 값. RGB, Font Family, Weight, 8px Grid, Radius, Shadow와 Motion 값
- Semantic: Primary, Surface, Text, Border, Display, Body, Section Space와 같은 역할
- Component: Button, Card, Modal, Dropdown, Header와 Form이 실제 사용하는 역할

Component는 Foundation을 직접 참조하지 않는다. 기존 공개 Class와 Alias는 Backward Compatibility를 위해 유지할 수 있지만, 새로운 Component는 Semantic 또는 Component Token만 사용한다.

### 3. Color & Typography

색상은 `Primary / Secondary / Accent / Background / Surface / Border / Text / Feedback` 역할로 사용한다. Component 안에서 Hex, RGB와 색상 이름을 직접 선언하지 않는다.

Typography는 `Display / H1 / H2 / H3 / Body / Caption`의 6단계와 Button·Navigation Semantic Role만 사용한다. Component는 직접 `font-size` 값을 만들지 않는다.

### 4. Spacing, Radius, Shadow & Motion

- Spacing: `--space-1`을 8px 기준으로 사용하며 4px은 Optical Half-step으로만 허용
- Radius: `SM / MD / LG / XL`
- Shadow: `SM / MD / LG / XL`
- Motion: `Fast / Normal / Slow / Hover / Modal / Reveal`

Component 내부 Margin, Padding, Gap, Radius, Shadow와 Duration은 Token을 통해서만 결정한다. 기능상 필요한 1px Hairline과 접근성 최소 높이는 명시적인 Component Token으로 관리한다.

### 5. Layer System

레이어 순서는 다음 Token을 사용한다.

`Base → Content → Sticky Header → Floating Action → Dropdown → Modal Backdrop → Modal → Toast → Debug`

Component에서 임의의 큰 `z-index`를 만들지 않는다.

### 6. Component Architecture

모든 Component는 아래 구조를 따른다.

`Component → Variant → State → Responsive`

공통 State는 `Default / Hover / Active / Focus / Disabled / Loading`이다. Button과 Card는 동일한 Focus, Disabled와 Loading 원칙을 사용하며, Touch Device에서는 Hover 대신 Active Feedback을 제공한다.

### 7. Component Library

공식 Component 목록과 상세 운영 계약은 `COMPONENT_LIBRARY.md`에서 관리한다. 이 Chapter는 철학과 상위 원칙만 정의하며 Purpose, Usage, Structure, Variant, Size, Spacing, Typography, Color, Motion, Interaction, Responsive, Accessibility, Token, Code, QA와 Lifecycle 규정은 Component Library를 Single Source of Truth로 사용한다.

- Header & Navigation
- Hero
- Section Header
- Button
- Card
- Form Control
- Modal
- Accordion
- Loading & Empty State
- Business Valuation Domain Components
- Insight Components
- Footer

Production 구현 여부는 `Active / Limited / Planned / Deprecated / Prohibited` 상태로 구분한다. 새로운 Variant나 Component를 추가하면 `DESIGN_SYSTEM.md`, `COMPONENT_LIBRARY.md`와 `CHANGELOG.md`를 함께 갱신한다.

### 8. CSS & JavaScript Architecture

CSS는 하나의 진입 파일 안에서 `Tokens → Reset → Base → Layout → Components → Utilities → Responsive → Page-specific Policy` 순서를 유지한다. 단순히 파일을 나누기 위해 새 CSS 파일을 추가하지 않는다.

JavaScript는 기능별 Component 경계를 사용한다.

- `main.js`: Motion Token과 Reveal
- `navigation.js`: Header, Navigation, Dropdown과 Back to Top
- `readiness-modal.js`: Deal Readiness Modal
- `consultation-modal.js`: Consultation Modal
- `valuation-modal.js`: Business Valuation Modal
- `valuation-config.js / valuation-engine.js`: Valuation Configuration과 Calculation

각 스크립트는 필요한 DOM이 없는 페이지에서도 안전하게 종료하고 전역 상태를 불필요하게 만들지 않는다.

### 9. Governance

새 Component를 추가하기 전에 다음을 확인한다.

- 기존 Component로 해결 가능한가?
- 새로운 Component가 아니라 Variant로 충분한가?
- 기존 페이지와 Backward Compatibility가 유지되는가?
- Design Bible의 Premium, Balanced, Calm 원칙과 일치하는가?
- 코드와 문서가 동시에 갱신되는가?

### 10. Final QA

- Foundation에서 Component까지 Token 흐름이 단방향인가?
- Component에 임의 색상, Font Size, Shadow와 Z-index가 남지 않았는가?
- Button과 Card의 State가 일관적인가?
- Responsive가 Component 단위로 작동하는가?
- JavaScript 기능이 Component별 책임으로 분리되어 있는가?
- Token 변경 후 모든 공개 페이지와 Modal이 정상 동작하는가?

---

## Chapter 10. Visual Language System

Version 1.0
Status: Approved

### 1. Visual Language Philosophy

EQUIV의 시각 요소는 콘텐츠보다 먼저 보이지 않는다. 모든 Asset과 Graphic은 `Professional / Premium / Balanced / Strategic / Modern / Minimal / Trustworthy / Global` 기준을 통과해야 하며, 장식보다 정보 전달을 우선한다.

### 2. Iconography

- Outline와 단순한 기하 형태를 기본으로 한다.
- Icon Size는 `Small / Medium / Large` 세 역할만 사용한다.
- Stroke 두께, Line Cap과 Line Join은 공통 Visual Token을 사용한다.
- 기본 색상은 `currentColor`이며 특별한 강조에만 Accent Color를 사용한다.
- Icon은 텍스트를 대체하지 않으며, 단독 Control에는 접근 가능한 이름을 제공한다.

### 3. Image and Photography

- Meeting, Negotiation, Office, Business City와 Executive Context의 실사 이미지를 우선한다.
- 과장된 악수, 과도한 미소, 연출된 성공 장면과 AI 오류가 보이는 인물 이미지는 사용하지 않는다.
- 자연스러운 명암과 낮은 채도를 유지하고 Hero에는 가독성을 위한 Navy Overlay를 적용한다.
- Section Image는 Overlay를 최소화하며 텍스트와 이미지가 경쟁하지 않게 한다.

### 4. Background, Accent and Shape

- Background는 White, Light Gray와 Brand Navy만 사용한다.
- Graphic Accent는 Hairline, Divider, Subtle Gradient와 Section Highlight로 제한한다.
- Glow, Heavy Pattern, Floating Shape, Blob과 장식용 Organic Shape는 사용하지 않는다.
- Radius와 Shadow는 Design Token을 사용하고 원형은 상태나 핵심 강조에만 제한한다.

### 5. Data, Empty and Loading

- Data Visualization은 평면 2D, 높은 명암, 최소 Grid와 명확한 Label을 사용한다.
- Empty State는 짧은 설명과 필요한 CTA를 제공하고 색상만으로 상태를 전달하지 않는다.
- Loading은 Content Shape를 보여주는 Skeleton을 우선하며 300–600ms Motion Token을 사용한다.
- Reduced Motion 환경에서는 Loading과 Transition을 즉시 상태로 전환한다.

### 6. Asset Organization and Optimization

- `/images/logos`: 공식 Logo와 Favicon
- `/images/backgrounds`: Hero와 Section Background
- `/images/icons`, `/images/illustrations`: 실제 Asset이 생길 때만 생성
- 파일명은 역할과 내용을 나타내는 소문자 Kebab Case를 사용한다.
- SVG와 WebP를 우선하고, 의미 있는 Image에는 Alt Text를 제공한다.
- Below-the-fold Image는 Lazy Loading과 Async Decoding을 사용한다.

### 7. Governance

새로운 시각 요소는 기존 Asset 재사용 가능성, Brand Keyword 적합성, 정보 전달 필요성, 접근성과 최적화 상태를 확인한 뒤 추가한다. 새로운 Icon Set이나 Image Policy를 도입하면 `BRAND_GUIDE.md`, `DESIGN_SYSTEM.md`, `COMPONENT_LIBRARY.md`와 `CHANGELOG.md`를 함께 갱신한다.

Asset의 분류, 파일명, 제작 규격, 권리, 최적화, 접근성, Version과 Lifecycle은 `VISUAL_ASSET_GUIDE.md`를 공식 운영 기준으로 사용한다.

### 8. Final QA

- Icon Style과 Stroke가 일관적인가?
- Image Tone과 Overlay가 브랜드에 맞는가?
- Glow와 불필요한 장식이 없는가?
- Asset 경로와 파일명이 역할별로 관리되는가?
- SVG와 WebP 등 최적화 형식을 사용하는가?
- Icon과 Image가 접근 가능한 이름 또는 대체 텍스트를 제공하는가?
