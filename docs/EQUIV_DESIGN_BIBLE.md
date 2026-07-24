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
