# EQUIV M&A Website Master Specification

## Project Overview

EQUIV M&A 웹사이트는 단순한 원페이지 소개 사이트가 아니라, M&A 자문 서비스와 인사이트 콘텐츠가 축적되는 Corporate Website 구조를 목표로 한다.

홈페이지는 간결한 브랜드 소개와 주요 진입점을 제공하고, 서비스와 인사이트의 상세 설명은 별도 상세페이지에서 확장한다.

## Brand Policy

EQUIV는
가격 경쟁이 아닌
전문성과 신뢰를 기반으로 하는
Premium M&A Advisory 브랜드를 지향한다.

홈페이지는
가격 중심의 영업이 아니라
브랜드와 전문성을 전달하는 것을 목표로 한다.

### EQUIV Brand Positioning Principle

EQUIV는 기업가치평가 회사가 아니라 M&A 중개·자문 브랜드이다.

브랜드 표현의 중심은 기업 매각과 인수의 연결, 적합한 거래상대방 발굴, 협상 및 거래 성사 지원에 둔다. 자문과 기업가치 검토는 M&A 중개와 거래 실행을 지원하는 기능으로 표현한다.

모든 사용자 공개 문구에서는 `M&A 중개·자문` 순서를 우선 사용한다.

## Website Page Architecture

EQUIV 웹사이트는 페이지의 목적과 역할에 따라 아래 네 가지 Page Type으로 구분한다. 모든 개발과 수정은 공통 레이아웃이 아니라 각 페이지의 Role을 우선 기준으로 판단하며, 역할이 다른 페이지에 동일한 구조를 강제로 적용하지 않는다.

### 1. Brand Pages

대상:

- Home
- About EQUIV
- Expertise

Brand Pages는 브랜드를 소개하고 방문자가 EQUIV를 신뢰하도록 만드는 페이지이다. 서비스 설명을 반복하기보다 일관된 브랜드 경험을 제공한다.

- Home: 브랜드 소개
- About EQUIV: 회사와 브랜드 철학 소개
- Expertise: 방문자의 목적에 맞는 서비스 선택

### 2. Service Pages

대상:

- 기업 매각
- 기업 인수
- 기업가치 검토
- 투자유치
- 성장 전략

Service Pages는 각 서비스를 이해시키고 상담으로 연결하는 페이지이다. 모든 Service Page는 기업 매각 페이지를 Master Template으로 사용하며 다음 구조와 동일한 UX를 유지한다.

1. Hero
2. Overview
3. How We Work
4. FAQ
5. CTA

서비스별 차이는 내용에만 두고, 구조·디자인·톤앤매너는 통일한다. 기업가치 검토 Service Page와 아래 Business Valuation Lead Generation Page는 서로 다른 역할의 페이지이며 통합하거나 대체하지 않는다.

### 3. Lead Generation Page

대상: Business Valuation

Business Valuation의 목적은 서비스를 설명하는 것이 아니라 방문자가 기업가치 사전진단을 즉시 시작하도록 만드는 것이다. 일반 Service Page가 아니며 Service Page Master Template을 적용하지 않는 독립적인 Lead Generation Page로 관리한다.

대표 기능:

- Hero 우측 기업가치 사전진단 영역과 CTA
- 사전진단 Modal
- 기업가치 계산 엔진
- 업종별 Calibration
- Value Driver
- 결과 화면

`사전진단 시작하기` CTA는 항상 Hero에서 바로 접근할 수 있어야 한다. Business Valuation 수정 시 위 기능을 삭제하거나 다른 위치로 이동하거나 일반 Service Page 구조로 대체하지 않는다.

### 4. Conversion Page

대상: HOME Contact Section과 공통 Consultation Modal

Contact는 별도 페이지가 아니라 HOME 안에서 상담을 시작하는 공통 Conversion Experience이다. Header 상담 메뉴는 HOME의 `#contact`로 이동하고, Contact Section의 `상담 시작하기` CTA가 중앙 Consultation Modal을 연다.

#### Consultation Modal Principle

상담은 페이지 이동이 아니라 현재 화면 위의 공통 Modal에서 진행한다. HOME Hero, Service Page CTA, Insights CTA, Deal Readiness 결과와 Business Valuation 결과를 포함한 사이트 전체 상담 CTA는 하나의 Modal만 호출한다. 페이지별 Form 복제 또는 별도 Contact Page를 만들지 않는다.

Modal은 `Header / M&A 상담 안내 / 상담 신청 Form / 개인정보 수집 및 이용 안내 / Submit Success` 흐름으로 구성한다. Desktop은 최대 약 860px, Tablet은 약 720px 범위, Mobile은 좌우 여백을 남긴 Full Width를 사용한다. Overlay는 약 50%의 검정과 약한 Blur를 적용하고, 16~20px Radius, Soft Shadow와 0.25~0.3초 Fade·Scale 전환만 사용한다.

상담 안내에는 `상담 대상 / 상담 절차 / 비밀유지 안내`만 제공한다. 상담 절차는 `상담 신청 → 담당자 연락 → 비밀유지계약(NDA) → 자료 검토 → 미팅 및 자문` 순서를 사용한다.

초기 Form 필수 항목은 `회사명 / 담당자명 / 연락처 / 이메일 / 상담 유형 / 개인정보 수집 및 이용 동의`로 제한한다. 문의 내용은 선택 항목이다. 매출, 영업이익, EBITDA, 재무제표, 파일 첨부, 주주현황처럼 초기 상담 부담을 높이는 항목은 요청하지 않는다.

개인정보 안내는 Modal 안의 Accordion으로 제공하고 별도 페이지로 이동하지 않는다. 수집항목, 수집목적, 상담 종료 후 1년의 보유기간, 법령상 예외와 동의 거부 권리를 명시한다. 실제 수집·전송 기능이 연결되기 전에는 입력값을 서버, 외부 데이터베이스 또는 브라우저 저장소에 저장하지 않는다.

Submit Success도 동일한 Modal 안에서 전환하며 별도 페이지로 이동하지 않는다. 우측 상단 닫기, ESC, Overlay 클릭과 Success 확인 버튼으로 닫을 수 있어야 하고, Focus Trap, Tab 이동, ARIA 상태와 호출 요소로의 Focus 복원을 지원한다.

Success 화면은 56~64px Gold Outline Check Icon과 `상담 신청이 완료되었습니다.` 제목을 사용한다. 접수 확인, 영업일 기준 1~2일 이내 연락, 자료 안내와 비밀유지 원칙을 차분하게 전달하며 과도한 축하 표현이나 애니메이션을 사용하지 않는다. 확인 버튼과 Enter는 Modal을 닫고, 페이지 Scroll 위치를 바꾸지 않은 채 호출 요소로 Focus를 복원한다. 정적 전송 안내는 localhost, 로컬 파일과 `.local` 환경에서만 표시하고 Production에서는 숨긴다.

Consultation Modal은 `consultation`과 `success`의 두 상태로 관리한다. Success 전환 시 Body만 교체하지 않고 Header도 `SUCCESS / 상담 신청 완료 / 상담 신청이 정상적으로 접수되었습니다.`로 변경한다. Header 우측은 입력 안내 대신 비밀유지 원칙과 필요 시 NDA 체결 안내를 표시한다. Header와 Body는 약 0.28초의 짧은 Fade 전환으로 동시에 바뀌며, Modal 크기·Typography·Spacing·Color System은 유지한다. 상태에 따라 Dialog의 `aria-labelledby`와 `aria-describedby`도 함께 갱신한다.

현재 Form은 정적 UX 확인용으로 운영한다. 향후 Google Apps Script를 통해 Google Sheets 저장과 Gmail 알림을 연결할 수 있도록 표준 `name` 속성과 의미 있는 Form 구조를 유지하되, 연동 전에는 실제 접수로 오인되지 않도록 정적 상태를 명확히 안내한다.

### Page Role Principle

전체 사용자 흐름과 각 페이지의 역할은 다음과 같다.

`Home(브랜드 소개) → About(회사 소개) → Expertise(서비스 선택) → Service Page(서비스 설명) → Business Valuation(기업가치 사전진단) → HOME Contact + Consultation Modal(상담 신청) → Footer(브랜드 Signature)`

각 페이지는 자신의 역할만 수행한다. 동일한 브랜드 설명이나 서비스 설명을 여러 페이지에서 반복하지 않으며, 다음 단계로 이동하는 데 필요한 정보와 동선만 제공한다.

### Brand Communication Principle

브랜드 메시지는 한 번만 전달한다. 동일한 철학이나 문장을 여러 페이지에서 반복하지 않으며, 각 페이지는 자신의 역할만 수행한다.

- Home: 브랜드를 소개한다.
- About: 회사를 소개한다.
- Expertise: 필요한 서비스를 선택하게 한다.
- Service Page: 해당 서비스를 설명한다.
- Contact: 상담을 시작한다.

Contact에서는 브랜드와 서비스를 다시 설명하지 않는다. 방문자가 상담을 자연스럽게 시작하는 데 필요한 간결한 안내와 신뢰 요소만 제공하고, 상세한 설명은 상담에서 이어간다.

### Business Valuation Protection Rule

Business Valuation은 EQUIV 웹사이트의 대표 Lead Generation Page이다. 다음 항목은 보호 대상으로 관리한다.

- Hero 우측 사전진단 영역
- `사전진단 시작하기` 버튼
- 사전진단 Modal
- 기업가치 계산 엔진
- Value Driver
- 업종별 Calibration
- 결과 화면

Business Valuation을 수정할 때 보호 기능을 삭제하거나 이동하지 않으며, 일반 Service Page처럼 변경하지 않는다.

### Footer Principle

Footer는 회사 정보를 나열하는 공간이 아니라 EQUIV 브랜드의 마지막 Signature이다. Footer에서 브랜드 철학이나 서비스를 다시 설명하지 않는다.

Desktop에서는 좌측 Brand Signature와 우측 Site Map의 2단 구조를 사용하고, Tablet과 Mobile에서는 두 영역을 자연스러운 세로 흐름으로 전환한다.

Brand Signature는 아래 정보만 사용한다.

- The EQUIV Mark + Divider + EQUIV 공식 Lockup
- by 정진아시아M&A센터
- © 2026 EQUIV. All Rights Reserved.

Site Map은 `About / Expertise / Business Valuation / Insights / Contact`만 제공한다. Contact는 HOME `#contact`로 연결하고, Home 메뉴는 추가하지 않으며 EQUIV 로고가 Home 링크 역할을 유지한다.

Footer에는 브랜드 슬로건, 기업 철학, 장문의 회사 설명이나 반복되는 브랜드 메시지를 추가하지 않는다. 새로운 아이콘·배경·컬러 없이 기존 Navy·Gold·White 디자인 시스템 안에서 간결하게 마무리한다.

### Final Architecture Principle

앞으로 모든 페이지 수정은 레이아웃의 유사성이 아니라 페이지의 Role을 기준으로 진행한다. 역할이 다른 페이지에는 같은 구조를 강제로 적용하지 않는다.

## Site Structure

### Home

파일: `index.html`

홈페이지 섹션 구조:

1. Header
2. Hero
3. THE EQUIV PRINCIPLE
4. Featured Expertise
5. M&A 준비도 진단
6. EQUIV Insights
7. Premium Contact CTA
8. Footer

Sprint 7.5 이후 HOME은 서비스 설명보다 브랜드 경험과 상담 유도를 중심으로 운영한다. Transaction Process는 HOME에서 제거하고 About Page의 `How We Work` 영역으로 이동한다.

`M&A 준비도 진단`은 Featured Expertise와 분리된 EQUIV의 Signature Experience이다. 사용자는 HOME에서 `Deal Readiness Check` 모달을 열어 현재 거래 준비 상태를 간단히 확인할 수 있다. 이 기능은 기업가치 계산기나 가격 산정 도구가 아니며, 거래 준비 상태를 이해하고 상담으로 자연스럽게 연결하기 위한 초기 진단 경험으로 운영한다.

`THE EQUIV PRINCIPLE` 영역은 서비스 설명이 아니라 EQUIV의 거래 철학을 보여주는 Brand Manifesto 역할을 한다. 핵심 메시지는 `좋은 거래는 올바른 원칙에서 시작됩니다.`로 운영하며, `가치 / 전략 / 신뢰`의 세 원칙을 짧고 명확하게 전달한다. 별도의 하단 영문 슬로건이나 반복 설명은 사용하지 않는다.

#### Home Hero Principle

Hero는 브랜드를 기억시키는 공간이다. 회사소개를 하지 않고 브랜드명, 브랜드 정체성과 대표 메시지만 전달한다. 상세 설명은 About EQUIV에서 담당한다.

HOME Hero 상단은 `EQUIV (이퀴브) │ M&A 중개·자문 브랜드`, 메인 제목은 `기업을 연결하고, / 성공적인 M&A를 만듭니다.`로 운영한다. 별도의 회사·거래·가치 설명 문단을 두지 않으며 CTA는 `기업 매각 상담`을 Primary, `기업 인수 상담`을 Secondary로 유지한다.

Hero의 브랜드 영역, 메인 제목과 CTA는 하나의 콘텐츠 그룹으로 관리하며 화면 정중앙보다 약간 위에 배치한다. 브랜드 영역과 제목은 하나의 메시지처럼 가깝게 연결하고, 제목과 CTA 사이에는 메시지를 읽은 뒤 행동으로 전환할 수 있는 충분한 여백을 둔다. Desktop·Tablet·Mobile에서 Hero 높이와 버튼 디자인은 유지하면서 콘텐츠 그룹의 수직 균형을 우선한다.

About EQUIV에서는 EQUIV가 어떤 브랜드인지, 브랜드를 만든 이유, M&A 중개 중심 철학과 거래 지원 방식을 자연스럽게 설명한다.

본문은 분석 항목을 나열하지 않고, `기업을 깊이 이해하고, 가치를 올바르게 해석하며, 가장 적합한 거래 전략을 함께 설계합니다.`처럼 브랜드 철학과 거래 설계 관점을 짧고 단정하게 표현한다.

### About EQUIV

파일: `about.html`

About EQUIV는 회사 연혁, 대표 인사말, 조직도를 소개하는 페이지가 아니라 EQUIV가 하는 일과 M&A 중개 원칙, 거래 진행 방식을 짧고 명확하게 보여주는 브랜드 페이지이다.

페이지 구조:

1. Header
2. About Hero
3. EQUIV 소개: Who We Are + Our Philosophy 통합
4. 거래 진행 방식: 가로형 5단계 How We Work
5. CTA
6. Footer

#### About Page Principle

About 페이지는 회사를 장황하게 설명하지 않는다. EQUIV가 하는 일, M&A 중개 철학과 거래 진행 방식만 짧고 명확하게 전달한다. 브랜드 경험은 설명보다 실제 서비스와 상담 과정에서 확인하도록 한다.

`How We Work`는 `이해 / 검토 / 설계 / 연결 / 진행`의 다섯 단계로 구성한다. Desktop에서는 한 줄 가로형, Tablet에서는 3개와 2개의 자연스러운 흐름, Mobile에서는 세로형으로 전환한다. 단계 번호, 한글 제목과 실제 업무 중심 설명만 사용하며 강한 그림자, 큰 아이콘과 과도한 장식은 사용하지 않는다.

About 페이지는 Desktop 기준 약 2개 화면 내외를 목표로 하며 Hero, 통합 소개, How We Work와 CTA 외의 반복 철학 섹션을 두지 않는다.

Header 로고는 모든 공개 페이지에서 `EQUIV`만 표시한다. 브랜드 설명은 Hero가 담당하고, Footer는 별도의 Brand Signature 원칙을 따른다.

### Featured Expertise Pages

홈페이지의 Featured Expertise 카드는 전체 클릭 가능한 카드로 동작한다.

- 기업 매각: `sell-side-advisory.html`
- 기업 인수: `buy-side-advisory.html`
- 기업가치 검토: `business-valuation.html`
- 투자유치: `capital-advisory.html`
- 성장 전략: `strategic-consulting.html`

#### Expertise Principle

Expertise는 서비스를 상세히 설명하는 페이지가 아니라 대표가 자신의 상황에 맞는 M&A 지원 업무를 빠르게 선택하는 Navigation 영역이다. 각 카드는 번호, 제목, 영문 부제와 구체적인 `알아보기` CTA만 제공하고 설명 문단은 두지 않는다.

카드 제목은 `기업 매각 / 기업 인수 / 기업가치 검토 / 투자유치 / 성장 전략`처럼 짧고 직관적으로 운영한다. 공개 카드에서는 `기업가치평가`보다 `기업가치 검토`, `기업가치 참고`와 `거래를 위한 가치 검토` 표현을 우선 사용한다.

각 카드 CTA는 `자세히 보기` 대신 연결되는 거래 업무를 알 수 있는 `기업 매각 알아보기 / 기업 인수 알아보기 / 기업가치 검토 알아보기 / 투자유치 알아보기 / 성장 전략 알아보기`로 운영한다. 영문 부제는 `Sell-side M&A / Buy-side M&A / Business Valuation / Capital Raising / Growth Strategy`를 사용하고 제목보다 작은 보조 정보로 표시한다. 카드 수, 상세페이지 링크와 기존 디자인 언어는 유지한다.

Featured Expertise의 대표 제목은 `M&A, 그 전략.`으로 운영하고 별도의 설명 문구를 두지 않는다. 카드는 전체 콘텐츠를 수직 중앙에 모은 짧은 선택 메뉴로 구성하며, 영문 부제와 CTA 사이의 간격은 약 10px, 한글 제목에서 CTA까지의 전체 시각적 간격은 약 30~40px로 유지한다.

#### Expertise Terminology Principle

Expertise 카드에서는 서비스 설명보다 거래 선택 경험을 우선한다. `매각자문`, `인수자문`과 같이 `자문`을 반복하지 않고 `기업 매각`, `기업 인수`처럼 거래 자체를 중심으로 표현한다.

`자문`은 Home Hero, About, Footer와 회사 소개 등 EQUIV의 브랜드 정체성을 설명하는 영역에서 `M&A 중개·자문`으로 유지한다. Expertise 카드 제목, 영문 부제와 CTA에는 사용하지 않는다.

### Insights Pages

Insights는 아래 네 개 카테고리로 운영한다.

- M&A 실무: `ma-practice.html`
- 업종별 M&A: `industry-ma.html`
- 시장분석: `market-insights.html`
- 거래사례: `deal-stories.html`

Business Valuation이 별도 Lead Generation Page로 운영되므로 가치평가는 Insights의 독립 카테고리로 사용하지 않는다. 기존 `valuation-insight.html`은 공개 메뉴와 HOME Insights 카드에서 제외하고 기존 경로 호환을 위해 보존한다.

초기에는 카테고리별 대표 글 한 개만 제공한다. 콘텐츠 수를 늘리는 것보다 홈페이지 문체와 실제 M&A 상담 관점에 맞는 짧고 읽기 쉬운 글을 우선한다.

Insights 글은 EQUIV 전체 홈페이지와 동일하게 짧은 문장, 명확한 설명과 절제된 표현을 사용한다. 실제 거래 경험과 반복되는 상담 질문을 중심으로 작성하며, 확인되지 않은 특정 거래를 EQUIV의 실제 사례처럼 표현하지 않는다.

과도한 전문용어, 광고 문구와 AI 문체를 사용하지 않는다. `오늘날`, `급변하는`, `복합적인`, `다양한 관점에서`, `종합적으로`, `핵심 경쟁력`, `인사이트를 제공합니다`, `최적의 솔루션` 같은 상투적 표현을 피한다.

모든 카테고리는 동일한 카드와 Article Layout을 사용한다. 향후 실제 M&A 경험과 사례가 축적되면 같은 디자인과 문체를 유지하며 카테고리별 글을 지속적으로 추가한다.

## Detail Page Standard

상세페이지 공통 기본 구조:

1. Header
2. Sub Page Hero
3. Intro Section
4. Key Points Section
5. CTA Section
6. Footer

상세페이지 Hero는 HOME Hero보다 작고 단정하게 구성한다. 배경은 White 또는 Light Gray를 사용하고, 제목은 Navy, 영문 카테고리는 Gold로 표시한다.

### Service Page Principle

모든 일반 Service Page는 서비스를 설명하는 페이지가 아니라 대표의 고민을 해결하는 페이지로 운영한다. 서비스 소개보다 거래 과정과 문제 해결을 중심으로 구성하며, 방문자가 자신의 상황에 필요한 지원인지 빠르게 판단할 수 있어야 한다.

공통 구조:

1. Hero
2. Overview
3. How We Work
4. FAQ
5. CTA

`sell-side-advisory.html`의 기업 매각 페이지를 Service Page Master Template로 사용한다. 모든 일반 Service Page는 위 구조와 `docs/SERVICE_PAGE_TEMPLATE.md`의 짧고 실제 업무 중심인 톤앤매너를 유지한다. Business Valuation은 별도 목적과 구조를 유지한다.

#### Service Page Standard

기업 매각 페이지를 일반 Service Page의 Master Template로 사용한다. 기업 매각, 기업 인수, 기업가치 검토, 투자유치와 성장 전략 페이지는 동일한 구조, 디자인, UX와 톤앤매너를 유지하며 서비스 내용만 다르게 구성한다.

각 페이지는 Hero, Overview, How We Work, FAQ와 CTA의 다섯 섹션만 사용한다. Overview는 두 개의 짧은 문단, How We Work는 네 단계, FAQ는 네 질문으로 구성하며 새로운 카드나 별도 홍보 섹션을 추가하지 않는다.

#### Business Valuation Page Scope

`business-valuation-review.html`의 기업가치 검토 상세페이지와 `business-valuation.html`의 Business Valuation 페이지는 별개의 페이지이다.

기업가치 검토 상세페이지는 서비스 설명과 상담 동선을 담당하며 일반 Service Page Standard의 5개 섹션 구조를 따른다. CTA는 Business Valuation 페이지로 이동시키되 상세페이지에서 사전진단 Modal을 직접 실행하지 않는다.

Business Valuation 페이지는 기업가치 사전진단 기능과 Modal의 유일한 공개 진입점을 담당한다. Hero 오른쪽의 사전진단 영역, 실행 CTA, Modal, 계산 엔진, Calibration, Value Driver, 결과 화면과 관련 JavaScript를 기존 구조로 유지한다.

Business Valuation은 Service Page가 아니라 Lead Generation Page이다. 방문자가 페이지 진입 직후 기업가치 사전진단을 시작할 수 있도록 `사전진단 시작하기` CTA를 항상 Hero에서 바로 접근 가능한 위치에 유지한다. 사전진단 CTA를 페이지 하단으로 이동하거나 다른 서비스 상세페이지에서 Modal을 중복 실행하지 않는다.

두 페이지의 역할을 통합하거나 서로 대체하지 않는다. 다만 HOME Expertise의 `기업가치 검토` 카드는 Lead Generation Page인 `business-valuation.html`로 직접 연결한다. `business-valuation-review.html`은 현재 공개 주 진입 경로에서 사용하지 않는다.

Business Valuation 페이지는 일반 Service Page Standard의 예외로 관리하고 아래 전용 구조와 정책을 따른다.

Business Valuation은 Sprint 8.1에서 별도로 표준화하며, 그 전까지 아래 Premium Advisory Structure를 유지한다.

Business Valuation 페이지는 가치평가 회사처럼 보이지 않도록 `M&A를 위한 가치 검토`와 `거래 전략 수립을 위한 판단 기준`으로 표현한다.

### Business Valuation Premium Advisory Structure

Sprint 7 이후 `business-valuation.html`은 기업가치평가 서비스를 판매하는 페이지가 아니라, EQUIV가 기업가치평가를 어떻게 M&A 전략으로 연결하는지 보여주는 Premium Advisory Page로 운영한다.

Business Valuation은 EQUIV의 핵심 역량이지만, 브랜드의 목적은 가치평가가 아니라 성공적인 M&A 전략 설계이다.

### Business Valuation Public Experience

Sprint 12.0부터 예비 기업가치 범위 산출 기능은 Business Valuation 페이지에서 제공하는 공개용 Premium Advisory Experience로 운영한다.

금지 항목:

- 확정 기업가치 표시
- 확정 매각가격 표시
- 보장된 거래가격 표시
- 정식 가치평가로 오인될 표현

허용 조건:

- 제한적 기초정보에 기반한 예비 범위일 것
- 단일 금액이 아닌 범위로 표시할 것
- 정식 기업가치평가 또는 실제 매각가격이 아님을 명시할 것
- 입력정보와 결과를 서버 또는 외부 데이터베이스에 저장하거나 전송하지 않을 것
- 결과의 한계와 전문 상담 필요성을 공개용 Disclaimer로 안내할 것

공개 진입점은 `business-valuation.html` Hero 오른쪽의 `사전진단 시작하기` CTA 한 곳으로 제한한다. HOME에는 사전진단 버튼을 추가하지 않고 Business Valuation 페이지 하단에도 동일 CTA를 반복하지 않는다. 기존 `valuation-prototype.html`은 Business Valuation 페이지로 연결하는 호환 안내 페이지로만 유지한다.

Hero의 공개 진단 영역은 `기업가치 사전진단 / 내 회사의 기업가치는?`를 한글 중심으로 표시한다. 핵심 재무정보와 사업 특성을 기반으로 현재 기업가치의 참고 범위를 확인하는 서비스임을 안내하고, 입력정보가 저장되거나 전송되지 않는다는 원칙과 예상 소요시간 `약 2~3분`을 함께 표시한다. 별도 카드, 테두리나 강한 그림자를 사용하지 않고 Hero 배경에 자연스럽게 통합하며 골드는 실행 버튼에만 절제하여 사용한다.

설정의 `publicReleaseApproved`는 `true`로 운영한다. 사용자 화면에는 `INTERNAL TEST PROTOTYPE`, `TEST_ONLY`, 개발 버전이나 내부 검증 표기를 노출하지 않는다. 내부 배수, 가중치, 보정계수와 Calibration 기록은 계속 공개하지 않는다.

계산은 브라우저 내부 JavaScript로만 수행하며 입력값과 결과를 저장하거나 전송하지 않는다. 설정, 계산, UI는 각각 `js/valuation-config.js`, `js/valuation-engine.js`, `js/valuation-modal.js`로 분리한다.

현재 구현 및 검증 기준은 `docs/VALUATION_MODEL_SPEC.md`를 따른다. 업종별 배수, 보정계수와 Premium의 실제 시장 비교 및 유지·변경 의사결정은 내부 문서 [`docs/EQUIV_CALIBRATION_LOG.md`](EQUIV_CALIBRATION_LOG.md)에 기록한다.

Business Valuation은 정확한 기업가치를 확정하는 시스템이 아니라, 대표가 회사의 대략적인 가치와 가치에 영향을 주는 요소를 이해하도록 돕는 Preliminary Valuation Tool이다.

예비 기업가치는 가능한 한 항상 제시한다. 결과를 숨기는 대신 결과 신뢰도를 통해 참고 수준을 설명한다. 정확한 가치평가는 상담을 통해 진행한다.

필수 입력은 최소화한다. 입력자료가 부족하더라도 가능하면 예비 기업가치를 제시한다. 입력이 부족한 경우에는 결과를 숨기는 대신 결과 신뢰도를 통해 참고 수준을 설명한다.

최근 실적은 최근 사업연도만 필수로 입력하고, 직전 사업연도는 권장, 2개년 전 자료는 선택 입력으로 운영한다. 누락된 과거 실적은 UI 계층에서 가장 가까운 입력 연도의 값으로 보완해 기존 평가 엔진에 전달하며, 실제 입력 연도 수는 결과 신뢰도와 추가 검토 요인에 반영한다.

결과 신뢰도는 예비 기업가치와 예상 지분가치 결과의 참고 가능성을 나타내며, 기업의 우수성이나 경쟁력을 평가하는 점수로 사용하지 않는다. 다만 기존 평가모델로 산출 근거를 만들 수 없는 경우에는 임의의 금액을 생성하지 않고 추가 검토가 필요한 이유를 안내한다.

고부채 기업이라도 영업가치를 산출할 수 있으면 예비 기업가치는 가능한 한 제시한다. 사업의 가치와 현재 재무구조를 구분하여 설명하고, 양수의 예상 지분가치를 산출하기 어려운 경우에는 `거래구조 검토가 필요합니다.`라고 안내한다. 사용자가 회사를 가치가 없는 기업으로 오해하지 않도록 채무조정, 부채 승계와 인수조건 등 전문가 검토가 필요한 이유를 함께 설명한다.

EQUIV Scale Premium은 중·대형 안정적 수익기업의 시장 안정성, 인수자 풀과 거래 경쟁도를 반영하는 내부 보정 알고리즘이다. 기존 업종 배수와 기업 특성 Adjustment를 변경하지 않고 Stable Profit Model의 영업가치 산출 이후 적용하며, 영업이익과 매출 기준 Premium의 합계는 최대 +35%로 제한한다. Temporary Loss, Turnaround, High-Growth와 Asset-Based Model의 계산 방식에는 적용하지 않으며 결과 화면에 계산식이나 적용률을 공개하지 않는다.

EQUIV Distribution Revenue Contribution Model은 유통기업의 영업이익 기반 가치만으로 설명하기 어려운 매출 규모, 유통망과 거래 안정성을 반영하는 유통업 전용 내부 평가 로직이다. 기존 유통업 배수와 Scale Premium은 변경하지 않고, 영업이익 기반 가치 90%와 매출 기반 가치 10%를 혼합한 뒤 기존 기업 특성 Adjustment와 Scale Premium을 반영한다. 기존 Distribution Premium은 폐지하며 서비스업 등 다른 업종과 이미 매출가치를 혼합하는 High-Growth Model에는 적용하지 않는다. 85:15와 80:20 가중치는 향후 실제 사례 Calibration 후보로만 관리하고 현재 계산에는 사용하지 않는다.

#### IT Valuation Principle

IT·소프트웨어 기업은 현재 실적뿐 아니라 기술력, 반복매출, 장기계약과 고객 기반 등 무형요소가 기업가치에 영향을 준다. Business Valuation에서는 업종이 IT·소프트웨어이고 `기술·특허·노하우`, `장기계약`과 반복매출 조건을 모두 충족할 때 Technology Business Premium을 적용하여 이러한 무형가치를 일부 반영한다.

Technology Business Premium은 기존 업종 배수, Adjustment와 Scale Premium을 변경하지 않고 그 이후에 적용하는 내부 보정계수이다. 기본 적용률은 +10%이며, 최근 3년 매출이 성장 또는 급성장한 경우 +15%를 적용한다. 별도의 IT 유형이나 신규 입력항목을 만들지 않고 공통 입력값만 사용하며, 실제 기술가치와 성장성 평가는 전문 실사 및 상담을 통해 추가 검토한다. 적용식과 적용률은 공개 화면에 노출하지 않는다.

#### Asset-Based Valuation Principle

자산형 기업은 영업성과뿐 아니라 사업용 자산가치를 기업가치의 핵심 Value Driver로 본다. Business Valuation에서는 기존 Asset-Based Model의 영업성과·자산 혼합 산출 방식을 유지하고, 산출된 기업가치에 사업용 자산가치의 일부를 Asset Value Adjustment로 추가 반영한다.

사업용 자산은 영업활동에 사용되는 자산이므로 전액을 가산하지 않는다. 초기 Calibration에서는 사업용 자산가치의 40%만 반영하며, 이는 정확한 감정평가가 아닌 실무적으로 납득 가능한 예비 범위를 제시하기 위한 내부 조정값이다. 실제 자산가치는 부동산, 시설, 입지, 운영현황과 실사를 통해 추가 검토한다.

업종 선택 화면의 표기는 `자산형 (임대업·호텔·골프장·물류창고 등)`으로 운영한다. 자산형은 영업이익보다 사업용 자산가치가 기업가치에 큰 영향을 미치는 사업모델을 의미하며, 내부 업종 Key는 `asset`을 유지한다.

#### EQUIV Valuation Engine Version History

현재 엔진 버전은 `EQUIV Valuation Engine v1.5`이다. 프로토타입 문서 버전과 엔진 버전을 구분하여 관리하고, 결과 화면에는 엔진 버전을 표시한다.

| Engine Version | Date | Changes |
|---|---|---|
| `v1.5` | 2026-07-16 | 자산형 기업 Asset Value Adjustment 40% 추가 |
| `v1.4` | 2026-07-16 | IT·소프트웨어 Technology Business Premium 추가 |
| `v1.3` | 2026-07-15 | Distribution Premium 폐지, 유통업 Revenue Contribution 90:10 모델 적용 |
| `v1.2` | 2026-07-15 | 유통업 전용 Distribution Premium 추가, 유통·서비스 업종 선택 분리 |
| `v1.1` | 2026-07-15 | EQUIV Scale Premium 추가, 결과 금액 표시 개선 |

#### Calibration Management

EQUIV Valuation Engine은 실제 M&A 시장 및 EQUIV 내부 사례와 지속적으로 비교하여 Calibration한다. 업종별 Calibration 상태, 적용 버전, 조정 근거와 결론은 [`EQUIV_CALIBRATION_LOG.md`](EQUIV_CALIBRATION_LOG.md)를 공식 내부 기록으로 사용한다. Calibration Log는 공개 대상이 아니며, 엔진 또는 설정값 변경 여부와 관계없이 검토 결론을 남긴다.

#### Business Valuation Input Consistency Principle

모든 업종은 동일한 입력 UI를 사용한다. 업종별로 별도의 체크박스나 복잡한 추가 입력화면을 만들지 않는다. 동일한 입력항목을 업종 특성에 맞게 내부 알고리즘에서 다르게 해석한다.

사용자 경험은 단순하게 유지하고, 업종별 전문성은 계산 엔진 내부의 가중치와 해석 로직에서 처리한다. IT·소프트웨어의 AI, SaaS, 플랫폼, 알고리즘, 클라우드, API, 소스코드와 기술인력은 별도 입력항목을 추가하지 않고 공통 `기술·특허·노하우` 항목 안에서 해석한다.

#### Industry-Specific Value Driver Principle

EQUIV Valuation Engine은 업종별 배수만 적용하는 시스템이 아니다. 각 업종의 기업가치를 결정하는 핵심 요소(Value Driver)를 함께 반영한다.

- 제조업: 수익성, 규모, 생산기술
- 식품: 수익성, 브랜드, 반복거래
- 유통: 수익성, 매출 규모, 유통망
- 서비스: 수익성, 반복수익, 대표자 의존도
- IT·소프트웨어: 성장성, 기술·특허·노하우
- 자산형 (임대업·호텔·골프장·물류창고 등): 자산가치, 수익성

#### Other Industry Principle

EQUIV는 Calibration과 실무 검증이 완료된 업종만 독립적인 평가모델로 운영한다. 검증되지 않은 업종을 무리하게 세분화하지 않으며, 건설업을 포함한 특수 업종은 `기타`에서 일반 평가모델을 적용한다.

사업모델, 면허, 인허가, 자산구조와 거래관행 등 업종별 특성은 전문 상담을 통해 반영한다. 정확하지 않은 세부 모델보다 신뢰할 수 있는 일반 모델을 우선하며, 기타 업종도 기존 신뢰도 알고리즘에 따라 예비 기업가치와 예상 지분가치를 정상적으로 산출한다.

#### Industry Expansion Principle

Business Valuation은 불필요하게 업종을 세분화하지 않는다. 업종은 Calibration과 실무 검증이 완료된 대표 산업군만 독립적으로 구성하며, 최종 입력 체계는 `제조업 / 식품 / 유통 / 서비스 / IT·소프트웨어 / 자산형 (임대업·호텔·골프장·물류창고 등) / 기타`의 7개 업종으로 운영한다.

건설업, 운송업, 물류업, 병원, 교육, 호텔, 여행, 문화콘텐츠, 엔터테인먼트와 기타 특수업종은 `기타`에서 일반 평가모델을 적용한다. 실제 거래가치는 상담 과정에서 업종 특성, 사업모델, 면허, 인허가, 자산구조와 거래관행을 반영하여 상세 검토한다. UI의 단순성과 사용자 경험을 최우선으로 유지하며, 충분한 Calibration 근거 없이 업종 선택지를 계속 확장하지 않는다.

페이지 구조:

1. Hero
2. Why Business Valuation Matters
3. How EQUIV Approaches Valuation
4. What We Review
5. Case Perspective
6. FAQ
7. CTA

Business Valuation의 하단에서는 앞선 설명과 중복되는 Framework, Strategic Analysis와 별도 Brand Statement를 반복하지 않는다. CTA를 마지막 콘텐츠로 유지하고 추가 설명 없이 Footer로 연결하여 사전진단과 상담 전환에 집중한다.

Sprint 7.5 이후 Deal Readiness Check는 Business Valuation 페이지에서 제거하고 HOME의 Signature Experience로 이동한다. Business Valuation 페이지는 기업가치평가 철학, 전략적 접근 방식, M&A를 위한 가치 분석 기준을 설명하는 전문 페이지로 운영한다.

Business Valuation 페이지는 일반적인 가치평가의 한계를 설명하고, EQUIV가 가치 분석을 거래 목적, 시장 위치, 거래 구조, 협상 전략과 연결하는 방식을 보여준다.

Deal Readiness Check는 기업가치 금액, 점수, 배수, 예상 거래 조건을 표시하지 않는다. 상담 전 거래 준비 상태를 점검하고 상담으로 자연스럽게 연결하는 Lead Generation 영역으로 사용한다.

Sprint 7.1 이후 Deal Readiness Check는 단순 CTA가 아니라 EQUIV의 Brand Experience로 운영한다. 사용자는 모달 안에서 5~7개의 간단한 질문에 답하고, 점수 계산 과정 없이 준비도 결과와 추천 다음 단계를 확인한다. 이 기능은 자동 기업가치평가 시스템이 아니며, 기업가치, 예상 매각가, 배수, 금액, 가격, 수익률을 표시하지 않는다. 최종 CTA에서만 전문가 상담으로 연결한다.

Sprint 7.2 이후 결과 화면은 `Excellent / Good / Needs Preparation` 표현을 사용한다. 학교 성적처럼 보이는 알파벳 등급 표현은 사용하지 않는다. 결과 화면에는 작은 Brand Statement, Premium Report 느낌의 Recommended Next Step, Disclaimer, `거래 전략 상담하기` CTA를 배치한다.

Sprint 7.3 이후 결과 화면은 평가가 아니라 현재 거래 준비 상태를 보여주는 Status 방식으로 운영한다. 상태 표현은 `READY / NEARLY READY / PREPARING`을 사용하며 모두 대문자로 표기한다. 결과 메시지는 부정적 표현을 피하고, 사용자가 현재 위치와 다음 거래 전략의 필요성을 이해하도록 작성한다. EQUIV는 기업을 평가하는 브랜드가 아니라, 기업의 현재 상태를 함께 이해하고 성공적인 M&A 전략을 설계하는 Premium M&A Advisory 브랜드라는 원칙을 유지한다.

## Sell-side Advisory Reference Page

`sell-side-advisory.html`은 모든 일반 Service Page의 Master Template이자 디자인·카피 Reference Page이다.

구조:

1. Hero
2. Overview
3. How We Work
4. FAQ
5. CTA

페이지 제목은 `기업 매각`, 영문 제목은 `Sell-side M&A`를 사용한다. How We Work는 `기업 이해 / 거래 전략 / 매수자 발굴 / 협상 및 거래 종결`의 네 단계로 구성하고, 각 단계는 실제 진행 업무를 한 문장으로 설명한다.

## Technical Structure

- HTML: 정적 HTML 파일
- CSS: `css/style.css`
- JavaScript: `js/main.js`
- 이미지: `images/`
- 출력 시안/캡처: `outputs/`
- 관리 문서: `docs/`

GitHub Pages에서 바로 실행 가능한 정적 사이트 구조를 유지한다.

## Navigation Rules

- Header 메뉴는 `홈 / EQUIV 소개 / 서비스 / 인사이트 / 상담` 구조를 사용한다.
- About EQUIV는 `about.html`로 이동한다.
- Expertise는 HOME의 Featured Expertise 섹션으로 이동한다.
- Insights는 HOME의 Insights 섹션으로 이동한다.
- Contact는 HOME의 `#contact`로 이동한다. Contact Section의 `상담 시작하기` CTA를 통해 공통 Consultation Modal을 연다.
- 상세페이지에서 로고 클릭 시 `index.html`로 이동한다.
- HOME Header Logo는 `#top`으로 연결하여 현재 페이지를 다시 불러오지 않고 부드럽게 최상단으로 이동한다.
- 상세페이지 Header 메뉴는 `about.html`, `index.html#services`, `index.html#insights`, `index.html#contact` 형식으로 브랜드 페이지와 HOME 섹션으로 연결한다.

### Header Navigation Language

EQUIV 웹사이트는 브랜드명 `EQUIV`를 제외한 사용자 인터페이스에서 한글을 기본으로 사용한다. Header 메뉴는 한국 기업 대표가 목적지를 즉시 이해할 수 있는 짧고 직관적인 용어로 구성하며, 설명형 문구를 사용하지 않는다.

Header 로고는 공식 `The EQUIV Mark + Divider + EQUIV` Lockup만 노출한다. `M&A Advisory`, `M&A Brokerage` 등의 브랜드 보조 설명은 기본 로고에 추가하지 않는다.

### The EQUIV Mark V1.0

- 공식 Primary Logo는 Gold The EQUIV Mark, 세로 Divider와 EQUIV Wordmark로 구성한다.
- Header Wordmark는 공백 없는 단일 텍스트 `EQUIV`로 작성하며 Inter `font-weight: 600`, 기본 Kerning과 `letter-spacing: 0.10em`을 사용한다. 글자별 Span이나 Margin으로 자간을 만들지 않는다.
- Header Lockup은 Desktop `Mark 30px / Divider 26px / Wordmark 23px / Gap 7px`, Tablet `28px / 24px / 22px / 7px`, Mobile `26px / 22px / 19px / 6px`을 공통 기준으로 사용한다.
- Mobile Header Lockup에는 `max-width: calc(100vw - 96px)`을 적용해 메뉴 버튼과의 충돌을 방지하며 Mark, Divider와 Wordmark를 모두 유지한다.
- Header, Footer와 공통 Consultation Modal은 동일한 비율의 Lockup을 사용하고 배경에 맞게 크기와 White 표현만 조정한다.
- The EQUIV Mark는 실제 SVG 이미지로 표시하고 EQUIV Wordmark는 이미지 로딩 상태와 관계없이 항상 보이는 Text Wordmark로 렌더링한다. 외부 SVG Mask에 의존하지 않는다.
- Header에서는 Mark, Divider, EQUIV 순서로 0.2초 간격의 절제된 Fade-in을 적용하고 Reduced Motion 설정을 존중한다.
- Favicon은 텍스트 없이 The EQUIV Mark만 사용한다.
- HOME Hero는 `EQUIV (이퀴브) | M&A 중개·자문 브랜드`, 한글 Main Headline과 두 상담 CTA만 유지한다. 별도의 영문 슬로건과 영문 보조 설명은 사용하지 않는다.
- About EQUIV는 Mark가 M&A의 M에서 출발해 균형 있는 가치(Equivalence)를 만나 EQUIV의 E로 완성되는 브랜드 의미를 설명한다.
- Footer는 공식 Lockup, `by 정진아시아M&A센터`, Copyright와 최소 Site Map만 유지하며 별도의 업종 설명을 로고에 결합하지 않는다.

### Header Dropdown Principle

복수의 실제 상세페이지를 가진 Header 상위 메뉴는 현재 디자인 언어를 유지하는 간결한 1단 Dropdown을 사용할 수 있다. 복잡한 Mega Menu, 큰 아이콘과 새로운 장식 요소는 사용하지 않는다.

Desktop에서는 Hover, Focus와 명시적인 Toggle Click으로 Dropdown을 열 수 있어야 한다. 상위 메뉴명은 기존 메인 영역으로 이동하는 Link 역할을 유지하고, Dropdown은 메뉴 바깥 Click, Focus 이탈 또는 `ESC` 입력으로 닫는다. 한 번에 하나의 Dropdown만 연다.

Mobile에서는 Hover에 의존하지 않고 상위 메뉴 Link와 Dropdown Toggle Button의 역할을 구분한다. Toggle Button을 누르면 Accordion 방식으로 열고 닫으며, 하위 Link를 선택하면 해당 페이지로 이동하면서 Mobile Navigation을 닫는다.

Dropdown Toggle에는 `aria-expanded`, `aria-haspopup`와 `aria-controls`를 적용한다. 현재 하위 상세페이지에서는 해당 하위 Link와 상위 메뉴의 Active 상태를 함께 표시한다.

존재하지 않는 페이지, 빈 Link와 `href="#"`는 Dropdown에 노출하지 않는다. 현재 Service Dropdown은 `기업 매각 / 기업 인수 / 기업가치 검토 / 투자유치 / 성장 전략`, Insights Dropdown은 실제 공개 페이지인 `M&A 실무 / 업종별 M&A / 시장분석 / 거래사례`만 사용한다.

## Mobile Experience Principle

Mobile Experience는 Desktop 디자인을 축소 복제하지 않고 읽기와 터치를 기준으로 별도 최적화한다. Desktop의 구조, 색상과 기본 Breakpoint는 변경하지 않는다.

- 우선 검수 폭은 `360px / 390px / 430px / 768px`이다.
- 760px 이하에서는 Header, Hero, Section, Card, CTA와 Modal을 Mobile 전용 Typography와 Spacing으로 운영한다.
- 768px은 기존 Desktop Navigation breakpoint를 유지하면서 좁은 Tablet 폭에 필요한 Header 간격, Section Padding과 Modal Touch Target만 보정한다.
- 모든 주요 Button과 Form Control은 Mobile에서 최소 48px 전후의 터치영역을 확보한다.
- Mobile Form Input은 16px 글자 크기를 사용하여 iOS Safari의 의도하지 않은 화면 확대를 방지한다.
- Modal은 `dvh` 기준 최대 높이, 내부 Scroll과 `overscroll-behavior`를 사용해 현재 페이지의 Scroll과 충돌하지 않도록 한다.
- Desktop Selector의 수치와 구조를 변경하지 않고 Mobile·Tablet Media Query 안에서만 조정한다.

Mobile Typography는 LISTING 모바일의 여백 우선 Premium Corporate 밀도를 Benchmark로 사용한다. HOME Hero Title은 `20px / 1.28`, Main Section Title과 상세 CONTACT Title은 `17px / 1.42`, Service·Insights 상세 H1은 `12.5px / 1.55`를 사용한다. Hero·Detail Description은 `11.25~14.5px`, Button은 `12px / 47px`, Label은 `10.5px`을 사용한다. Card Title 16px, Body 14px, Mobile Navigation 13px과 iOS 자동 확대 방지를 위한 Form Input 16px은 유지한다. Section Padding은 유지하고 HOME Hero 높이만 Mobile에서 `80svh`로 조정한다.

## Maintenance Rule

기능, 디자인, 문구, 페이지 구조를 수정할 때는 반드시 아래 문서를 함께 확인한다.

- `docs/CHANGELOG.md`: 변경 이력 기록
- `docs/TODO.md`: 남은 작업 갱신

## Future Expansion

향후 아래 페이지를 추가할 수 있도록 확장성을 유지한다.

- Team
- Success Stories
- FAQ
- Resources
- Contact Form
