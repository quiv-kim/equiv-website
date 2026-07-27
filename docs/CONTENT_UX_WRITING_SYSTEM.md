# EQUIV Content & UX Writing System

Version 1.0
Status: Approved Draft
Document Type: Content Design and UX Writing Governance Standard
Owner: EQUIV Content System
Applies To: Website, Service Pages, Lead Generation Tools, Consultation Experience, Business Valuation, Insights, Email and Future Digital Products

---

## Table of Contents

0. Document Control
1. Writing Philosophy
2. Brand Voice
3. Tone of Voice
4. Korean Writing Style
5. Homepage Copy
6. Service Copy
7. CTA Writing
8. Button Writing
9. Navigation Writing
10. Form Writing
11. Error Messages
12. Success Messages
13. Empty State Writing
14. Confirmation Writing
15. Article Writing
16. SEO Writing
17. Accessibility Writing
18. Localization
19. Official Terminology
20. Writing Governance
21. AI Writing Rules
22. Component and Pattern Writing
23. Content QA
24. Best Practice Library
25. Future Expansion

Appendices:

- A. Content Brief
- B. UI String Specification
- C. Content Review Record
- D. Terminology Proposal
- E. AI Prompt Contract
- F. Page Copy Inventory
- G. Release Checklist
- H. PM Review

---

## 0. Document Control

### 0.1 Purpose

이 문서는 EQUIV가 사용자에게 제공하는 모든 문구의 역할, Voice, Tone, 구조, 용어, 접근성, SEO, 현지화, 검토와 수명주기를 정의한다.

문구는 디자인이 완성된 뒤 채우는 재료가 아니다. 사용자가 정보를 이해하고 다음 행동을 결정하게 만드는 Interface다. 새 페이지와 기능은 Layout을 확정하기 전에 Content Goal, 정보 순서와 Action Label을 먼저 정의한다.

### 0.2 Scope

적용 범위:

- Homepage와 Brand Page
- Service Page와 Service Detail
- Business Valuation Lead Page와 사전진단 Modal
- Consultation Modal
- Insight Index와 Article
- Navigation, Footer와 Internal Link
- Form Label, Helper, Validation, Error와 Success
- Modal, Accordion, Tooltip, Alert, Empty와 Loading State
- Search, Dashboard, Admin, CRM과 AI 기능의 향후 문구
- Email, 자동 알림과 상담 후속 안내
- SEO Metadata와 Social Sharing Copy

법률 계약서, 감정평가서, 세무·회계 의견서와 거래 당사자 간 공식 문서는 별도 전문가 검토를 따른다.

### 0.3 Relationship to Other Standards

중복 규정을 만들지 않는다.

1. `EQUIV_DESIGN_BIBLE.md`: 브랜드 철학과 최종 승인 원칙
2. `BRAND_GUIDE.md`: 브랜드 Positioning, Personality와 Naming
3. `CONTENT_UX_WRITING_SYSTEM.md`: Voice, Tone, Terminology와 Content Governance
4. `COPY_GUIDE.md`: 자주 쓰는 실무 규칙의 간략한 요약
5. `COMPONENT_LIBRARY.md`: 문구가 들어가는 Component의 구조와 State
6. `SERVICE_PAGE_TEMPLATE.md`: Service Page의 정보 순서
7. `VISUAL_ASSET_GUIDE.md`: Alt Text가 설명하는 Asset의 운영 기준
8. `MASTER_SPEC.md`: Page Role, 기능과 비즈니스 요구사항

현재 독립된 `PATTERN_LIBRARY.md`는 없다. Pattern의 Source of Truth는 `COMPONENT_LIBRARY.md`의 Composition·Page Map과 `SERVICE_PAGE_TEMPLATE.md`다. 향후 Pattern Library가 만들어지면 이 문서의 Pattern Writing 계약을 참조해야 한다.

충돌 시 상위 사업·법률 요구사항과 Design Bible을 우선한다. Style 충돌은 이 문서를 우선하고, Component 구조 충돌은 Component Library를 우선한다.

### 0.4 Normative Language

- **MUST / 반드시**: 배포 전에 충족한다.
- **MUST NOT / 금지**: 사용하거나 배포하지 않는다.
- **SHOULD / 권장**: 명시적 근거가 없다면 따른다.
- **MAY / 허용**: 사용자와 Context에 도움이 될 때 사용한다.
- **EXCEPTION / 예외**: Owner, 사유, 적용 범위와 만료일을 기록한다.

### 0.5 External Reference

이 문서는 다음 공식 체계의 공통 원칙을 참고한다.

- [Google Material Design](https://m2.material.io/design/communication/writing.html): 간결한 UI 문구와 Action 중심 Label
- [IBM Carbon Writing Style](https://carbondesignsystem.com/guidelines/content/writing-style/): 일관된 문장 형태와 Business Context
- [Microsoft Fluent Content Design](https://fluent2.microsoft.design/content-design): 필요한 순간에 필요한 정보 제공
- [Atlassian Content Design](https://atlassian.design/get-started/content-design): Voice·Tone과 Message Type의 연결
- [Shopify Polaris Button Guidance](https://shopify.dev/docs/api/app-home/web-components/actions/button): 명확한 Action Label과 상태 위계
- [GitHub Primer Content](https://primer.style/product/getting-started/foundations/content/): Plain Language와 일관된 Interface Copy
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/alerts): 직접적이고 중립적인 Alert와 명확한 Action

외부 문구와 Naming을 복제하지 않는다. EQUIV의 한국어 M&A Advisory Context, 현재 서비스 구조와 공식 용어를 최종 기준으로 삼는다.

### 0.6 Content Status

| Status | 의미 |
|---|---|
| Draft | 작성 중이며 Production 사용 금지 |
| Review | PM·Domain·Content 검토 중 |
| Approved | 배포 가능한 승인 문구 |
| Conditional | 특정 Page·State에서만 사용 |
| Deprecated | 신규 사용 금지, 교체 예정 |
| Legal Review | 법률 또는 개인정보 검토 필요 |

### 0.7 Single Source of Truth

- Voice와 Tone: 이 문서
- 공식 용어: 이 문서의 Terminology
- 실제 화면 문구: HTML과 JavaScript의 승인된 String
- 반복 서비스 설명: 공통 Data Source
- 변경 이력: `CHANGELOG.md`와 Git

Screenshot, Figma 임시 문구, 메신저와 개인 문서는 Source of Truth가 아니다.

---

## 1. Writing Philosophy

### 1.1 Trust Before Persuasion

EQUIV의 문장은 신뢰를 전달하는 도구다. 사용자를 설득하기 전에 상황과 선택지를 정확히 이해하게 한다.

문장의 우선순위:

1. 사실
2. 사용자에게 필요한 판단 기준
3. 다음 행동
4. 브랜드 감도

브랜드 감도를 위해 사실을 흐리거나 결과를 보장하지 않는다.

### 1.2 Clear Before Clever

화려한 문장보다 명확한 문장을 우선한다. 은유, 수사적 질문과 추상적 형용사가 실제 정보를 대신하면 삭제한다.

**Example**

- 권장: 거래 목적과 기업 현황을 먼저 확인합니다.
- Anti-pattern: 기업의 무한한 가능성을 깨우는 새로운 거래 여정을 시작합니다.

### 1.3 Short but Complete

짧다는 이유로 필수 조건이나 결과를 생략하지 않는다.

- UI Label: 한 번에 이해되는 최소 단어
- Helper: 입력 이유와 기준
- Error: 발생한 문제와 해결 행동
- Success: 완료된 일과 다음 단계

### 1.4 Specific Before Abstract

`전문적인 검토`만 쓰지 말고 무엇을 검토하는지 밝힌다.

- 권장: 재무자료와 업종 특성을 바탕으로 기업가치의 참고 범위를 검토합니다.
- 지양: 다양한 관점에서 전문적으로 검토합니다.

### 1.5 Calm Confidence

과장 없이 단정하게 말한다. 불확실한 내용은 조건과 범위를 밝힌다.

- 확정 사실: `진행합니다`, `확인합니다`
- 예상·범위: `예상됩니다`, `달라질 수 있습니다`
- 제안: `검토할 수 있습니다`, `권장합니다`

### 1.6 User Control

사용자가 현재 상태와 다음 행동을 알 수 있어야 한다. 압박과 긴급성을 인위적으로 만들지 않는다.

### 1.7 Do

- 결론을 먼저 쓴다.
- 한 문장에 하나의 핵심을 둔다.
- 행동 주체와 대상을 밝힌다.
- 전문 용어는 필요한 만큼 사용하고 처음에 설명한다.
- 조건, 범위와 한계를 함께 쓴다.
- 결과보다 검토 과정과 판단 기준을 설명한다.

### 1.8 Don't

- 근거 없는 최상급
- 성공·가격·기간 보장
- 사용자의 불안을 자극하는 문장
- 같은 의미의 브랜드 문구 반복
- `제공합니다`만 반복하는 서비스 설명
- 뜻이 없는 `혁신`, `솔루션`, `인사이트`, `최적`
- 한글 문장 안의 불필요한 영어

### 1.9 Best Practice

문장을 삭제해도 의미가 유지되면 삭제한다. 문장을 줄인 뒤 사용자가 다음 행동을 이해하지 못한다면 필요한 정보를 복원한다.

### 1.10 PM Notes

카피의 길이 문제를 Font Size로 해결하지 않는다. Content Priority, 중복과 Component 적합성을 먼저 검토한다.

---

## 2. Brand Voice

Voice는 EQUIV가 언제나 유지하는 성격이다. Tone은 사용자의 상황에 따라 달라진다.

### 2.1 Professional

실무에서 쓰는 정확한 용어와 논리적인 정보 순서를 사용한다.

- 의미: 전문지식을 과시하지 않고 판단에 필요한 정보를 제공한다.
- 사용: Service, Valuation, Article, Consultation
- Anti-pattern: 전문 용어를 설명 없이 나열한다.

### 2.2 Trustworthy

할 수 있는 일, 할 수 없는 일과 결과의 한계를 구분한다.

- 의미: 숫자와 결과를 보장하지 않고 검토 기준을 투명하게 밝힌다.
- 사용: Valuation Result, Privacy, Error, Email
- Anti-pattern: `정확한 기업가치를 즉시 확인합니다.`

### 2.3 Confident

불필요한 사과와 모호한 완곡어법 없이 단정하게 안내한다.

- 의미: 확인된 사실을 짧고 분명하게 말한다.
- 사용: Headline, Process, Success
- Anti-pattern: `아마 도움을 드릴 수도 있을 것 같습니다.`

### 2.4 Calm

긴급성, 감탄과 감정적 압박을 사용하지 않는다.

- 의미: 오류와 실패에서도 사용자를 탓하지 않고 해결 순서를 제공한다.
- 사용: Error, Confirmation, Consultation
- Anti-pattern: `지금 바로 신청하지 않으면 기회를 놓칩니다!`

### 2.5 Strategic

행동만 권하지 않고 목적, 기준과 영향을 연결한다.

- 의미: 무엇을 왜 검토하는지 설명한다.
- 사용: Service Overview, How We Work, Insight
- Anti-pattern: 모든 상황에 같은 `맞춤형 전략`을 사용한다.

### 2.6 Premium

단어를 꾸미는 것이 아니라 정보의 밀도와 정확성을 관리한다.

- 의미: 반복, 감탄, 유행어와 장황함을 줄인다.
- 사용: 전 영역
- Anti-pattern: Gold, Premium, Global 같은 단어로 고급감을 설명한다.

### 2.7 Balanced

기회와 위험, 기업가치와 지분가치, 기대와 한계를 함께 설명한다.

- 의미: 한쪽 결과를 유도하지 않는다.
- 사용: Valuation, Deal Structure, Article
- Anti-pattern: 매각이나 인수가 언제나 최선이라고 암시한다.

### 2.8 Friendly but Formal

존댓말을 사용하되 과도한 의전 표현은 피한다.

- 권장: 내용을 남겨주시면 담당자가 확인 후 연락드립니다.
- 지양: 귀하께서 소중한 시간을 내어 남겨주신 문의에 깊이 감사드립니다.
- 금지: 가벼운 유행어, 이모지, 과도한 감탄사

### 2.9 Voice Balance Matrix

| Context | Professional | Trustworthy | Confident | Calm | Strategic | Friendly |
|---|---:|---:|---:|---:|---:|---:|
| Home Hero | High | High | High | High | Medium | Low |
| Service | High | High | High | High | High | Medium |
| Insight | High | High | Medium | High | High | Medium |
| Form | Medium | High | High | High | Low | Medium |
| Error | Medium | High | Medium | Very High | Low | High |
| Success | Medium | High | High | High | Low | Medium |
| Email | High | Very High | Medium | High | Medium | High |

---

## 3. Tone of Voice

### 3.1 Tone Model

Tone은 다음 네 축으로 조정한다.

- Informational ↔ Action-oriented
- Formal ↔ Approachable
- Concise ↔ Explanatory
- Neutral ↔ Reassuring

Voice는 바뀌지 않는다. 사용자의 감정과 Task 위험도에 따라 Tone의 강도만 바뀐다.

### 3.2 Homepage

- 목적: EQUIV의 역할을 3초 안에 이해시킨다.
- Tone: Confident, Calm, Concise
- 문장: 짧고 직접적
- 금지: 서비스 전체를 Hero에서 설명

### 3.3 Service

- 목적: 내 상황에 필요한 서비스인지 판단하게 한다.
- Tone: Professional, Strategic, Explanatory
- 문장: 문제 → 검토 기준 → 업무 범위 → 다음 행동
- 금지: 결과 보장과 추상적 홍보

### 3.4 Inquiry and Consultation

- 목적: 부담 없이 필요한 정보를 남기게 한다.
- Tone: Reassuring, Direct, Formal
- 문장: 필요한 정보, 사용 목적, 연락 시점과 비밀유지
- 금지: 필요 이상의 자료 요구와 영업성 압박

### 3.5 Error

- 목적: 문제를 이해하고 복구하게 한다.
- Tone: Neutral, Calm, Helpful
- 순서: 무엇이 발생했는가 → 무엇을 유지했는가 → 무엇을 하면 되는가
- 금지: 사용자 탓, Error Code만 표시, 과도한 사과

### 3.6 Information and Notification

- 목적: 현재 상태와 영향을 알린다.
- Tone: Factual, Concise
- 문장: 상태 → 영향 → 필요 시 Action
- 금지: 중요하지 않은 알림을 Modal로 표시

### 3.7 Success

- 목적: 완료된 일을 확인하고 다음 단계를 안내한다.
- Tone: Confident, Reassuring
- 문장: 완료 → 처리 일정 → 다음 단계
- 금지: 과도한 축하, 감탄사, 보장

### 3.8 Failure

- 목적: 실패 범위와 복구 방법을 알린다.
- Tone: Calm, Transparent
- 문장: 완료되지 않음 → 저장 여부 → 재시도 또는 대안
- 금지: `실패했습니다`만 표시

### 3.9 Email

- 목적: 상담 관계를 정확하고 예측 가능하게 이어간다.
- Tone: Professional, Personal, Structured
- 구조: 제목 → 인사 → 핵심 → 필요한 Action → 일정 → Confidential → 서명
- 금지: 자동 메일처럼 긴 Disclaimer, 불필요한 Marketing Copy

### 3.10 Tone Examples

| Situation | Recommended | Anti-pattern |
|---|---|---|
| 상담 접수 | 상담 신청이 정상적으로 접수되었습니다. | 상담 신청 성공! |
| 입력 누락 | 연락처를 입력해 주세요. | 잘못된 입력입니다. |
| 네트워크 | 연결 상태를 확인한 후 다시 시도해 주세요. | 서버 오류가 발생했습니다. |
| 결과 제한 | 입력자료가 제한적이므로 참고용으로 활용해 주세요. | 정확도가 낮습니다. |
| 삭제 확인 | 작성한 내용을 삭제하시겠습니까? | 정말 삭제할까요? |

### 3.11 PM Notes

Tone을 친근하게 만들기 위해 정확성을 낮추지 않는다. 위험하거나 되돌릴 수 없는 상황일수록 감정 표현을 줄이고 결과를 구체적으로 쓴다.

---

## 4. Korean Writing Style

### 4.1 Sentence Ending

- 본문과 안내: `합니다`, `드립니다`, `수 있습니다`
- 질문: `계십니까?`, `필요하신가요?` 중 Page Tone에 맞춰 하나로 통일
- Button: 종결어미와 마침표 없이 행동형
- Label, Heading: 명사형 또는 짧은 서술형
- Error: `해 주세요`로 해결 행동 안내

### 4.2 Sentence Length

- UI Sentence: 가급적 40자 이내
- Helper: 1~2문장
- Modal Description: 2~4문장
- Paragraph: 2~4문장
- 한 문장이 두 개 이상의 접속어를 가지면 분리한다.

### 4.3 Active and Direct

주체를 불필요하게 숨기지 않는다.

- 권장: 담당자가 내용을 확인한 후 연락드립니다.
- 지양: 내용 확인 후 연락이 진행될 예정입니다.

### 4.4 Pronouns

`귀사`, `고객님`, `당신`을 반복하지 않는다. 자연스러운 경우 주어를 생략하고, 소유 관계가 필요하면 `입력하신 정보`, `현재 상황`처럼 쓴다.

### 4.5 Punctuation

- Heading, Label, Button에는 마침표를 사용하지 않는다.
- 완전한 본문 문장에는 마침표를 사용한다.
- 느낌표는 원칙적으로 사용하지 않는다.
- Slash보다 `·` 또는 문장으로 관계를 표현한다.
- 괄호는 첫 용어 설명과 법적 표기에 제한한다.
- 말줄임표와 연속 물음표를 사용하지 않는다.

### 4.6 Numbers and Units

- 숫자는 아라비아 숫자를 사용한다.
- 기간: `영업일 기준 1~2일`
- 비율: `15%`
- 금액: `42억~56억원` 또는 표의 Column 규칙에 맞춤
- 범위 기호 앞뒤 간격은 Product 규칙으로 통일한다.
- 정확하지 않은 수치는 `약`, `예상`, `참고 범위`를 함께 쓴다.

### 4.7 English

- 브랜드명과 공식 실무 용어에만 사용한다.
- 처음 필요한 경우 `비밀유지계약(NDA)`처럼 병기한다.
- 같은 Page에서 다시 풀어 쓰지 않는다.
- English Label이 한국어보다 먼저 의미를 전달하게 하지 않는다.

### 4.8 Line Break

HTML `<br>`로 의미 없는 운율을 만들지 않는다. 문장 구조와 Container Width로 줄바꿈을 해결한다. 브랜드 Headline의 승인된 의도적 줄바꿈만 예외다.

### 4.9 Do

- 현재형과 능동형
- 쉬운 동사
- 같은 개념에 같은 단어
- 핵심 정보를 문장 앞에 배치

### 4.10 Don't

- `~에 대한`, `~을 통한`, `~함으로써`의 연속
- 명사만 이어 붙인 문장
- `진행`, `제공`, `관련`의 반복
- 한 문단의 과도한 Bold
- `등`으로 중요한 범위를 모호하게 처리

---

## 5. Homepage Copy

### 5.1 Purpose

Homepage는 브랜드 소개, 서비스 선택, 전문성 확인과 상담 진입을 담당한다. 상세 서비스와 거래 절차를 반복하지 않는다.

### 5.2 Hero

구조:

`Eyebrow → Headline → Description(Optional) → Primary CTA → Secondary CTA`

작성 규칙:

- Headline은 EQUIV가 하는 일을 한 문장으로 설명한다.
- 2줄을 권장하고 최대 3줄이다.
- Description은 Headline을 풀어 설명하며 새 주제를 추가하지 않는다.
- 영문 Slogan을 한글 핵심 카피 아래 반복하지 않는다.

현재 승인 예:

> 기업을 연결하고,
> 성공적인 M&A를 만듭니다.

`성공적인 M&A`는 Home Hero의 브랜드 핵심 카피로 제한적으로 유지한다. 결과 보장 문구로 다른 Page에 반복하지 않는다.

### 5.3 Headline

- 회사 소개보다 고객이 이해할 수 있는 업무를 말한다.
- 추상어는 하나 이하로 제한한다.
- `최고`, `혁신`, `압도적`을 사용하지 않는다.

### 5.4 Subheadline

- 2~3줄
- 대상, 지원 범위와 차이를 설명
- Headline을 다른 단어로 반복하지 않음

### 5.5 CTA

- Hero Primary: 상담 또는 핵심 Lead Action
- Secondary: 대안적 경로
- 같은 우선순위의 Primary를 두 개 이상 만들지 않는다.

### 5.6 Section Title

- Section의 정보 역할이 제목만으로 드러나야 한다.
- 감성적 문구보다 기능과 브랜드 중심 제목을 우선한다.
- Label과 Title이 같은 말을 반복하지 않는다.

### 5.7 Section Description

- Section이 왜 필요한지 한두 문장으로 설명한다.
- Card 내용을 미리 모두 설명하지 않는다.
- `전문 서비스를 제공합니다`처럼 정보가 없는 문장을 사용하지 않는다.

### 5.8 Footer

Footer는 브랜드 Signature와 최소 Site Map만 제공한다. 회사 철학, Hero Copy와 CTA를 반복하지 않는다.

### 5.9 Example

**Recommended**

> EQUIV(이퀴브) 전문 서비스
> 기업의 상황과 거래 목적에 맞는 M&A 중개·자문 서비스를 제공합니다.

**Anti-pattern**

> 성공을 위한 최고의 M&A 솔루션
> 압도적인 전문성과 혁신적인 전략으로 모든 기업의 성공을 함께 만들어갑니다.

### 5.10 PM Notes

Homepage의 각 핵심 문구는 특별한 이유가 없다면 한 번만 사용한다. Service, Insight와 CTA가 같은 브랜드 철학을 반복하면 각 Section의 실제 역할을 설명하도록 교체한다.

---

## 6. Service Copy

### 6.1 Shared Structure

모든 Service Page는 다음 질문에 답한다.

1. 누구에게 필요한가?
2. 무엇을 검토하는가?
3. EQUIV는 어떤 일을 하는가?
4. 어떤 순서로 진행하는가?
5. 다음 행동은 무엇인가?

Hero → Overview → How We Work → FAQ → CTA 구조를 유지한다.

### 6.2 Shared Sentence Pattern

권장 구조:

`검토 대상/기준 + 실제 업무 + 목적`

예:

> 거래 목적과 기업 현황을 확인하고 적합한 매각 방향을 검토합니다.

### 6.3 기업 매각

공식 Lead:

> 기업의 특성과 거래 목적에 맞는 매각 전략을 설계합니다.

사용할 내용:

- 매각 목적
- 거래 구조
- 잠재 인수자
- 자료 준비
- 협상과 거래 종결

피할 내용:

- 최고가 매각
- 빠른 매각 보장
- 좋은 매각
- 모든 기업에 같은 절차

### 6.4 기업 인수

공식 Lead:

> 적합한 인수 대상의 발굴부터 거래 검토까지 함께합니다.

사용할 내용:

- 인수 목적과 투자 기준
- 대상기업 탐색
- 기업 검토
- 거래 조건과 협상

피할 내용:

- 우량 매물 확보
- 무조건적인 시너지
- 성공 인수 보장

### 6.5 투자유치

공식 Lead:

> 기업의 성장 단계에 맞는 투자 전략을 설계합니다.

사용할 내용:

- 자금 목적
- 성장 단계
- 투자자료
- 투자 조건
- 투자자 검토와 협의

피할 내용:

- 투자유치 성공 보장
- 자금 문제 해결
- 기업가치 상승 확정

### 6.6 기업가치 검토

공식 Lead:

> 기업의 현재 가치를 다양한 관점에서 객관적으로 검토합니다.

사용할 내용:

- 재무자료
- 업종 특성
- 수익성과 성장성
- 보유 자산
- 기업가치의 참고 범위

피할 내용:

- 정식 감정평가로 오인되는 표현
- 정확한 가격 확정
- 자동 평가
- Business Valuation Lead Page와 역할 통합

### 6.7 성장 전략

공식 Lead:

> 기업의 현재와 미래를 분석하여 실행 가능한 성장 전략을 제안합니다.

사용할 내용:

- 현재 사업 구조
- 성장 과제
- 실행 우선순위
- M&A·투자와의 연결 가능성

피할 내용:

- 성장 보장
- 매출 확대 확정
- 모든 기업에 적용되는 성공 공식

### 6.8 Service FAQ

- 실제 대표가 결정 전에 묻는 질문만 사용한다.
- 질문은 한 문장으로 쓴다.
- 답변은 결론을 먼저 쓰고 2~4문장으로 제한한다.
- 법률·세무·가격을 확정적으로 답하지 않는다.

### 6.9 Service Data Consistency

상세 Page, Consultation Modal, CTA와 공통 Component가 같은 서비스 설명을 사용하면 단일 Data Source를 사용한다. HTML과 JavaScript에 다른 문구를 복제하지 않는다.

### 6.10 Do

- 서비스별 판단 기준을 구분한다.
- 실제 업무 동사를 사용한다.
- 범위와 한계를 밝힌다.
- CTA에서 상담 시 확인할 내용을 말한다.

### 6.11 Don't

- 서비스명만 바꾼 동일 설명
- `맞춤형`, `전문적`, `최적`만으로 차이 설명
- 경쟁사 비교
- 결과, 기간과 가격 보장

### 6.12 PM Notes

`풍부한 경험`은 검증 가능한 경력·거래 범위와 함께 사용할 때만 허용한다. `맞춤형 전략`은 실제로 달라지는 기준을 같은 문단에서 설명할 때만 허용한다.

---

## 7. CTA Writing

### 7.1 Purpose

CTA는 사용자가 취할 다음 행동과 그 결과를 명확하게 알린다. 압박하지 않는다.

### 7.2 CTA Types

| Type | 역할 | 예 |
|---|---|---|
| Primary | Context의 핵심 행동 | 상담 신청 |
| Secondary | 대안 경로 | 기업가치 사전진단 |
| Final | Page 종료 후 다음 단계 | 기업 매각 상담 |
| Inline | 관련 정보 이동 | 기업 인수 서비스 보기 |

### 7.3 Writing Formula

`Action + Object`를 기본으로 한다.

- 상담 신청
- 기업가치 사전진단
- 기업 매각 상담
- 기업 인수 상담
- 자료 요청
- 결과 다시 확인

### 7.4 Length

- Button: 한글 2~8자 권장, 최대 12자
- CTA Title: 1문장, 최대 2줄
- Description: 1~2문장
- 하나의 CTA Block에 Action은 2개 이하

### 7.5 Common CTA

Title:

> M&A 검토가 필요하신가요?

Description:

> 현재 상황과 거래 목적을 남겨주시면 적합한 상담 방향을 안내해드립니다.

Button:

> 상담 신청

### 7.6 Service CTA

- 매각: `기업 매각 상담`
- 인수: `기업 인수 상담`
- 투자유치: `투자유치 상담`
- 기업가치 검토: `기업가치 사전진단`
- 성장 전략: `성장 전략 상담`

### 7.7 Prohibited

- 지금 바로
- 놓치지 마세요
- 무료 상담
- 성공의 첫걸음
- 최고의 선택
- 클릭하기
- 시작해 보세요
- 문의하기만 하면 해결됩니다

### 7.8 Best Practice

CTA 앞 설명이 충분하면 Button은 짧게 쓴다. 설명이 없는 Inline Link는 목적지를 포함한다.

### 7.9 Anti-pattern

`자세히 보기`를 여러 Card에 반복해 스크린리더와 빠른 Scanning에서 목적지를 알 수 없게 만드는 것.

### 7.10 PM Notes

동일 Action에는 동일 Label을 사용한다. 문구를 새롭게 보이게 하려고 동의어를 추가하지 않는다.

---

## 8. Button Writing

### 8.1 Principle

Button은 행동을 표현한다. Button을 누른 뒤 발생하는 결과를 동사와 목적어로 예측할 수 있어야 한다.

### 8.2 Recommended Labels

- 상담 신청
- 입력 완료
- 다음 단계
- 이전 단계
- 결과 확인
- 다시 시도
- 내용 삭제
- 변경사항 저장
- Modal 닫기
- 개인정보 안내 보기

### 8.3 Label Rules

- 행동 동사를 사용한다.
- `예/아니요`, `확인`만으로 중요한 결과를 표현하지 않는다.
- Button에 마침표를 사용하지 않는다.
- 같은 화면에서 동사 형태를 통일한다.
- Loading 중 Action Context를 유지한다: `신청 중`

### 8.4 Confirmation Buttons

| Situation | Primary | Secondary |
|---|---|---|
| 상담 제출 | 상담 신청 | 취소 |
| 입력 종료 | 입력 종료 | 계속 입력 |
| 내용 삭제 | 삭제 | 취소 |
| 변경 저장 | 저장 | 취소 |
| 정보 Modal | 확인 | 없음 |

### 8.5 Accessibility

Icon-only Button은 보이는 Text가 없어도 Accessible Name을 제공한다. `여기`, `더보기` 대신 `기업 매각 자세히 보기`처럼 Context를 포함한다.

### 8.6 Do

- 결과를 예측할 수 있는 Label
- 한 화면의 Primary Action 하나
- Loading과 Disabled 이유 제공

### 8.7 Don't

- 문장형 Button
- 같은 Action의 여러 이름
- `OK`, `Yes`, `Submit`
- 장식용 영어

### 8.8 Example

- 권장: `상담 신청`
- 지양: `제출`
- 이유: 사용자가 무엇을 제출하는지 Button만으로 이해할 수 있다.

---

## 9. Navigation Writing

### 9.1 Principle

Navigation은 설명이 아니라 목차다. 짧고 명확하며 목적지가 예측되어야 한다.

### 9.2 Official Primary Navigation

- 홈
- EQUIV 소개
- 서비스
- 인사이트
- 상담

### 9.3 Service Navigation

- 기업 매각
- 기업 인수
- 기업가치 검토
- 투자유치
- 성장 전략

### 9.4 Rules

- 명사를 우선한다.
- 한글을 기본으로 한다.
- Brand Name은 `EQUIV`를 유지한다.
- 서비스명과 Page H1을 일치시킨다.
- 존재하지 않는 Page를 노출하지 않는다.
- Navigation Label에 설명과 Marketing Copy를 넣지 않는다.

### 9.5 Abbreviations

`M&A`는 공식 약어로 허용한다. `NDA`, `EBITDA` 등은 Navigation에 사용하지 않고 본문에서 처음 설명한다.

### 9.6 Link Writing

- 목적지가 보이는 Label
- 새 창이면 필요한 경우 상태 설명
- URL 자체를 Link Text로 사용하지 않음
- `여기를 클릭` 사용 금지

### 9.7 PM Notes

메뉴명을 바꾸면 Header, Mobile Navigation, Footer, Breadcrumb, Page Title과 Analytics Label을 함께 검토한다.

---

## 10. Form Writing

### 10.1 Principle

Form 문구는 사용자가 무엇을 왜 입력하는지 이해하게 한다. Placeholder로 Label을 대신하지 않는다.

### 10.2 Field Anatomy

`Label → Required/Optional → Input → Helper → Error`

### 10.3 Label

- 명사형
- 사용자가 가진 정보의 이름
- 예: 회사명, 담당자명, 연락처, 이메일, 상담 유형, 문의 내용
- `입력하세요`를 Label에 반복하지 않는다.

### 10.4 Required and Optional

- 필수: Label 옆 `필수` 또는 `*`와 Accessible Text
- 선택: `선택`
- 모든 Field가 필수이면 Form 시작 부분에서 한 번 설명할 수 있다.
- Required 이유가 명확하지 않으면 Helper로 사용 목적을 설명한다.

### 10.5 Placeholder

- 입력 형식 또는 짧은 예시만 제공
- Label 반복 금지
- 개인정보를 실제 예시로 사용하지 않음
- 긴 안내문을 넣지 않음

예:

- 연락처: `010-0000-0000`
- 이메일: `name@company.com`
- 문의 내용: `검토 중인 거래와 현재 상황을 간단히 작성해 주세요.`

### 10.6 Helper Text

- 입력 전에 필요한 기준을 설명한다.
- Error가 발생한 뒤 처음 알려야 하는 조건을 미리 제공한다.
- 기업가치 Field는 단위와 기준연도를 명시한다.

### 10.7 Validation

- 문제 Field 가까이에 표시한다.
- 잘못된 값이 무엇인지 구체적으로 말한다.
- 해결 방법을 제공한다.
- 입력값을 불필요하게 지우지 않는다.

### 10.8 Error Examples

- 회사명을 입력해 주세요.
- 연락처 형식을 확인해 주세요.
- 이메일 주소를 `name@company.com` 형식으로 입력해 주세요.
- 상담 유형을 선택해 주세요.
- 개인정보 수집 및 이용에 동의해 주세요.

### 10.9 Success

Form 자체에서 완료가 분명하면 `저장되었습니다`처럼 짧게 쓴다. 상담처럼 후속 절차가 있으면 접수, 연락 시점과 자료 안내를 함께 제공한다.

### 10.10 Sensitive Data

초기 상담에서는 매출, EBITDA, 재무제표, 주주현황과 파일 첨부를 요구하지 않는다. 필요한 자료는 상담 과정에서 별도로 안내한다.

### 10.11 Do

- Label을 항상 표시
- 입력 단위와 형식 제공
- 선택 항목을 명확히 표시
- Error 후 입력값 유지

### 10.12 Don't

- Placeholder-only Form
- `유효하지 않음`
- 사용자를 탓하는 문장
- 필요하지 않은 개인정보 수집
- 긴 법률 문구를 Field 사이에 배치

### 10.13 PM Notes

새 Field 요청은 수집 목적, 필수 여부, 보유기간, 개인정보 영향과 실제 후속 업무 사용 여부를 함께 승인한다.

---

## 11. Error Messages

### 11.1 Error Formula

`상황 또는 문제 → 유지된 상태 → 해결 행동`

모든 Error가 세 문장을 가져야 하는 것은 아니다. 사용자가 복구하는 데 필요한 정보만 제공한다.

### 11.2 Principles

- Error Code가 아니라 사용자의 Task를 말한다.
- 사용자를 탓하지 않는다.
- 알 수 없는 원인을 추측하지 않는다.
- 저장 여부와 결제·제출 여부가 중요하면 명시한다.
- 해결 가능한 Action을 제공한다.
- 같은 Error를 Alert, Field와 Toast에 중복 표시하지 않는다.

### 11.3 404

Title:

> 요청하신 페이지를 찾을 수 없습니다.

Description:

> 주소가 변경되었거나 페이지가 삭제되었을 수 있습니다.

Primary:

> 홈으로 이동

Secondary:

> 서비스 보기

### 11.4 500

Title:

> 페이지를 불러오지 못했습니다.

Description:

> 잠시 후 다시 시도해 주세요. 문제가 계속되면 상담을 통해 알려주세요.

Action:

> 다시 시도

### 11.5 Required Input

- 회사명을 입력해 주세요.
- 연락처를 입력해 주세요.
- 상담 유형을 선택해 주세요.

`필수 항목입니다`만 표시하지 않는다. Field 이름과 필요한 행동을 포함한다.

### 11.6 Invalid Input

- 연락처 형식을 확인해 주세요.
- 이메일 주소를 올바른 형식으로 입력해 주세요.
- 금액은 0보다 큰 숫자로 입력해 주세요.

### 11.7 Permission

Title:

> 이 페이지에 접근할 수 없습니다.

Description:

> 접근 권한을 확인하거나 담당자에게 문의해 주세요.

사용자가 로그인하지 않은 상황과 권한이 없는 상황을 구분한다.

### 11.8 Network

Title:

> 연결 상태를 확인해 주세요.

Description:

> 인터넷 연결을 확인한 후 다시 시도해 주세요. 입력한 내용은 현재 화면에 유지됩니다.

입력 유지가 실제로 보장될 때만 마지막 문장을 사용한다.

### 11.9 Submission Failure

Title:

> 상담 신청을 접수하지 못했습니다.

Description:

> 입력한 내용을 확인한 후 다시 시도해 주세요. 문제가 계속되면 이메일로 문의해 주세요.

Action:

> 다시 시도

### 11.10 Valuation Error

- 계산을 진행할 수 없는 조건을 구체적으로 설명한다.
- 입력 부족이면 결과를 숨기기보다 참고 신뢰도를 조정하는 기존 원칙을 따른다.
- Engine Error와 Validation Error를 구분한다.
- `기업가치가 없습니다`라고 표현하지 않는다.

### 11.11 Do

- 문제와 해결을 함께 제시
- 중요한 경우 Data 보존 여부 명시
- Field Error를 Field 가까이에 표시
- 복구 가능한 Action 제공

### 11.12 Don't

- 오류가 발생했습니다.
- Error 500
- 잘못 입력하셨습니다.
- 다시 해보세요.
- 죄송합니다를 모든 Error에 반복

### 11.13 Best Practice

시스템이 원인을 확실히 알지 못하면 사실만 말한다. `서버가 혼잡합니다`처럼 검증되지 않은 원인을 쓰지 않는다.

### 11.14 PM Notes

Error Copy 승인에는 실제 Trigger, 저장 상태, Retry 동작, Escalation 경로와 Analytics Event가 포함되어야 한다.

---

## 12. Success Messages

### 12.1 Purpose

Success는 사용자가 완료한 일을 확인하고 이후 과정을 예측하게 한다.

### 12.2 Formula

`완료된 Action → 처리 상태/일정 → 다음 단계`

### 12.3 Consultation Success

Header:

> 상담 신청 완료

Headline:

> 상담 신청이 완료되었습니다.

Body:

> 상담 신청이 정상적으로 접수되었습니다. 담당자가 내용을 확인한 후 영업일 기준 1~2일 이내 연락드리겠습니다. 필요한 자료는 상담 과정에서 별도로 안내드리며, 상담 내용은 비밀유지 원칙에 따라 안전하게 관리됩니다.

Action:

> 확인

### 12.4 Inquiry Success

> 문의가 접수되었습니다. 담당자가 내용을 확인한 후 연락드리겠습니다.

### 12.5 Material Request Success

> 자료 요청이 접수되었습니다. 확인 후 등록하신 이메일로 안내드리겠습니다.

실제 이메일 발송 기능과 일정이 있을 때만 사용한다.

### 12.6 Save Success

- 변경사항을 저장했습니다.
- 입력한 내용을 저장했습니다.

저장 대상이 화면에서 분명한 경우에만 짧은 표현을 사용한다.

### 12.7 Do

- 무엇이 완료되었는지 명시
- 다음 연락 시점과 채널 안내
- 실제 동작과 일치
- 필요한 경우 Reference Number 제공

### 12.8 Don't

- 성공!
- 완벽하게 완료되었습니다!
- 곧 연락드리겠습니다.
- 성공적으로 처리되었습니다. 무엇이 처리됐는지 생략

### 12.9 PM Notes

Success 화면은 Marketing 공간이 아니다. 관련 서비스 추천과 추가 CTA를 넣기 전에 사용자의 Task 종료를 우선한다.

---

## 13. Empty State Writing

### 13.1 Purpose

Empty State는 문제가 아니라 현재 데이터 상태를 설명하고 가능한 다음 행동을 제시한다.

### 13.2 Types

| Type | 의미 | Action |
|---|---|---|
| First Use | 아직 생성된 항목 없음 | 생성 또는 안내 |
| No Result | 검색·필터 결과 없음 | 조건 변경 |
| No Content | 공개 콘텐츠 없음 | 다른 Category |
| Permission | 볼 수 있는 자료 없음 | 권한 확인 |
| Error-like Empty | 불러오지 못함 | Retry |

### 13.3 Search

Title:

> 검색 결과가 없습니다.

Description:

> 검색어를 확인하거나 다른 검색어로 다시 시도해 주세요.

### 13.4 Insight

Title:

> 등록된 인사이트가 없습니다.

Description:

> 새로운 콘텐츠가 준비되면 이곳에서 확인할 수 있습니다.

현재 사용자에게 도움이 되는 다른 Category가 있으면 Link를 제공한다.

### 13.5 Data

> 표시할 자료가 없습니다.

데이터가 왜 없는지 알고 있으면 더 구체적으로 쓴다.

### 13.6 Do

- Empty 이유를 가능한 범위에서 설명
- Dead End를 만들지 않음
- Action은 하나를 우선
- Title과 Description 중복 금지

### 13.7 Don't

- No data
- 아무것도 없습니다.
- 재미있는 축하 문구
- 빈 상태를 Error처럼 표현
- 관련 없는 상담 CTA

### 13.8 PM Notes

Empty State가 반복되면 문구보다 Data Flow, Filter Default와 Content Operation을 먼저 점검한다.

---

## 14. Confirmation Writing

### 14.1 When to Confirm

되돌릴 수 없거나 비용·Data·진행 상태에 중요한 영향을 주는 Action만 확인한다. 일반적인 Modal 닫기와 취소를 모두 Confirmation으로 막지 않는다.

### 14.2 Structure

`구체적 결과를 묻는 Title → 영향 설명 → 결과형 Primary → 취소`

### 14.3 Delete

Title:

> 작성한 내용을 삭제하시겠습니까?

Description:

> 삭제한 내용은 복구할 수 없습니다.

Primary:

> 삭제

Secondary:

> 취소

### 14.4 Cancel Input

Title:

> 입력을 종료하시겠습니까?

Description:

> 저장되지 않은 내용은 사라집니다.

Primary:

> 입력 종료

Secondary:

> 계속 입력

### 14.5 Submit

정상적인 Form 제출은 Confirmation 없이 진행한다. 법률 동의, 되돌릴 수 없는 공개 또는 거래 지시처럼 영향이 큰 경우에만 확인한다.

### 14.6 Close Modal

변경 사항이 없으면 즉시 닫는다. 입력 내용이 사라질 때만 종료 Confirmation을 사용한다.

### 14.7 Do

- 대상과 결과를 Title에 포함
- 위험한 Action을 구체적으로 Label
- 취소 Button을 `취소`로 통일

### 14.8 Don't

- 정말 진행하시겠습니까?
- 예 / 아니요
- 확인 / 취소로 삭제 의미 표현
- 설명 안에 Button 사용법 반복

### 14.9 PM Notes

Confirmation 추가는 사용자 불안을 키우고 Task를 지연시킨다. Undo로 해결 가능한지 먼저 검토한다.

---

## 15. Article Writing

### 15.1 Purpose

Insight는 뉴스 양을 늘리는 공간이 아니라 대표가 M&A 판단 기준을 이해하게 하는 콘텐츠다. 실제 경험과 실무에서 자주 발생하는 질문을 중심으로 쓴다.

### 15.2 Categories

- M&A 실무
- 업종별 M&A
- 시장분석
- 거래사례

기업가치 검토는 독립 서비스와 Business Valuation Page가 있으므로 현재 Insight의 독립 Category로 운영하지 않는다.

### 15.3 Title

- 독자가 실제로 묻는 질문 또는 명확한 결론
- 한 Title에 주제 하나
- 과도한 Clickbait 금지
- 핵심 Keyword를 자연스럽게 포함
- 권장: 18~34자

Examples:

- 기업 매각은 언제 준비해야 할까요?
- 제조업 M&A에서 가장 중요하게 보는 것은 무엇일까요?
- 최근 국내 M&A 시장은 어떻게 변화하고 있을까요?
- 거래는 가격보다 구조가 중요했던 사례

### 15.4 Subtitle and Lead

첫 두 문단에서 독자의 상황, 글이 답할 질문과 범위를 설명한다. `오늘날`, `급변하는`, `복합적인`으로 시작하지 않는다.

### 15.5 Body

- 결론부터 쓴다.
- 한 Section은 한 질문에 답한다.
- Paragraph는 2~4문장
- 전문 용어는 첫 등장에 설명
- 실제 사례는 익명화와 Confidential 기준 준수
- 사실, 해석과 제안을 구분

### 15.6 Heading

Heading만 읽어도 글의 논리 구조를 이해할 수 있어야 한다. `배경`, `핵심`, `결론`보다 구체적인 내용을 쓴다.

### 15.7 Table

- 행과 열 비교가 실제로 필요할 때 사용
- Caption 또는 앞 문장으로 목적 설명
- 단위, 기준일과 Source 명시
- Mobile Summary를 고려

### 15.8 Quote

직접 인용은 출처와 허가를 확인한다. 익명 사례를 실제 고객의 직접 발언처럼 만들지 않는다.

### 15.9 FAQ

- 본문에서 다루지 못한 실제 질문
- 질문 3~5개 권장
- 답변은 결론부터 2~4문장
- SEO Keyword 반복을 목적으로 만들지 않는다.

### 15.10 Data and Claims

- 시장 수치에는 기준일과 출처를 표시한다.
- 예측은 전망임을 밝힌다.
- 거래 사례는 식별 가능한 정보를 제거한다.
- 법률·세무 결과는 전문가 검토 필요성을 밝힌다.

### 15.11 Style

- 실제 M&A 중개인이 대표에게 설명하는 문체
- 짧고 명확한 문장
- 광고보다 판단 기준
- 2~3분 안에 읽을 수 있는 대표 글을 기본으로 함

### 15.12 Prohibited AI-like Expressions

- 오늘날
- 급변하는
- 복합적인
- 다양한 관점에서
- 종합적으로
- 핵심 경쟁력
- 인사이트를 제공합니다
- 최적의 솔루션
- 새로운 패러다임
- 성공적인 여정

필요한 의미가 있으면 구체적인 사실과 동사로 교체한다.

### 15.13 Article Ending

본문 결론을 요약하고 필요한 경우 관련 Service 또는 Consultation으로 연결한다. 모든 Article을 같은 CTA 문구로 끝내지 않는다.

### 15.14 PM Notes

AI 초안은 Source가 아니다. Domain Reviewer가 사실, 거래 관행, Confidential, 과장과 시의성을 검토해야 Approved가 된다.

---

## 16. SEO Writing

### 16.1 Principle

SEO 문구는 검색 엔진보다 사용자의 기대를 먼저 충족한다. Keyword를 반복하지 않고 Page의 실제 내용을 정확히 요약한다.

### 16.2 Title

Pattern:

`Page 핵심 주제 | EQUIV M&A`

Guidance:

- 각 Page 고유 Title
- 중요한 Keyword를 앞에 배치
- 30~60자 내외를 검토 기준으로 사용
- 실제 검색 결과의 Pixel 폭은 별도 Preview로 확인
- Home은 Brand와 핵심 업무를 함께 표현

### 16.3 Meta Description

- Page가 제공하는 정보와 다음 행동을 1~2문장으로 설명
- 70~120자 내외 검토
- Title을 그대로 반복하지 않음
- 결과 보장과 광고 문구 금지
- Search Intent와 실제 Content 일치

### 16.4 Slug

- 영문 소문자 Kebab Case
- 짧고 지속 가능한 명사
- 날짜와 임시 Campaign Name을 피함
- 예: `/sell-side-advisory`, `/business-valuation`

기존 Static HTML Route는 변경 영향과 Redirect 계획 없이 바꾸지 않는다.

### 16.5 Heading

- Page당 H1 하나
- H1은 Page 역할과 일치
- H2는 Section의 질문 또는 주제
- Keyword를 넣기 위해 Heading Hierarchy를 왜곡하지 않음

### 16.6 Internal Link

- 목적지가 드러나는 Link Text
- 관련 Service와 Insight를 실제 맥락에서 연결
- `여기`, `클릭`, URL 노출 금지
- 같은 문단의 과도한 Link 금지

### 16.7 Keywords

- Primary Topic 하나
- Supporting Topic 2~4개
- 동의어보다 공식 Terminology 우선
- Keyword Density 목표를 두지 않음

### 16.8 OG and Social

- Title은 공유 맥락에서도 이해 가능
- Description은 Page Summary
- Image Text와 Metadata가 충돌하지 않음
- 실제 Domain 확정 전 Placeholder URL은 TODO로 관리

### 16.9 Structured Data

실제 Page Type, Author, Date와 Organization 정보만 제공한다. FAQ Schema는 화면에 보이는 동일 질문과 답변에만 사용한다.

### 16.10 Do

- 사용자 Intent와 Page Content 일치
- 고유 Metadata
- 명확한 Heading
- 자연스러운 Internal Link

### 16.11 Don't

- Keyword Stuffing
- Page마다 같은 Description
- 보이지 않는 SEO 문구
- 클릭을 유도하는 과장 Title
- 존재하지 않는 서비스나 지역명 삽입

### 16.12 PM Notes

Title과 Meta 변경은 Search Console 성과, Brand Naming과 Page Role을 함께 검토한다. SEO를 이유로 UI 용어와 Metadata 용어를 다르게 만들지 않는다.

---

## 17. Accessibility Writing

### 17.1 Plain Language

- 독자가 M&A 전문가라고 가정하지 않는다.
- 짧은 문장과 익숙한 단어를 사용한다.
- 전문 용어는 처음 설명하고 같은 표현을 유지한다.
- Double Negative를 피한다.

### 17.2 Link Text

- 목적지를 설명한다.
- 문맥 밖에서 읽어도 의미가 있어야 한다.
- 같은 Page의 여러 `자세히 보기`는 Accessible Name을 구분한다.

### 17.3 Icon Alternative

- 장식 Icon: 대체 문구 없음
- 기능 Icon: Button의 Accessible Name 제공
- 상태 Icon: 상태 Text 함께 제공
- 이미지 Alt Text는 `VISUAL_ASSET_GUIDE.md`를 따른다.

### 17.4 Screen Reader Order

문구의 DOM 순서가 시각적 순서와 논리적으로 일치해야 한다. `왼쪽`, `오른쪽`, `위 아이콘` 같은 방향 표현에 의존하지 않는다.

### 17.5 Error and Live Region

- Error Summary와 Field Error가 중복 낭독되지 않게 한다.
- 동적 Success는 적절한 Status Live Region을 사용한다.
- 긴 Modal Description을 열릴 때 전부 강제 낭독하지 않는다.

### 17.6 Numbers

- 단위가 시각적으로만 표시되지 않게 한다.
- Star Rating은 `별 4개`가 아니라 `참고 신뢰도 높음` 같은 의미 Text를 제공한다.
- Range와 날짜를 모호하지 않게 쓴다.

### 17.7 Cognitive Accessibility

- 한 화면의 용어를 통일한다.
- 한 번에 하나의 주요 Action
- Error에서 복구 경로 제공
- 시간 제한을 문구만으로 압박하지 않는다.

### 17.8 Inclusive Language

기업 규모, 업종, 성별, 연령과 장애를 추정하거나 평가하는 표현을 사용하지 않는다. `정상`, `일반인`, `취약 기업`처럼 불필요한 판단을 피한다.

### 17.9 Example

- 권장 Link: `기업 매각 서비스 보기`
- Anti-pattern: `자세히 보기`
- 권장 Icon Label: `상담 Modal 닫기`
- Anti-pattern: `X`

### 17.10 PM Notes

접근성 문구는 보이는 문구의 부록이 아니다. Visible Label, Accessible Name과 Interaction 결과가 같은 의미를 가져야 한다.

---

## 18. Localization

### 18.1 Principle

번역은 단어 교체가 아니라 동일한 사용자 결과를 다른 언어로 제공하는 작업이다. 한국어 원문의 줄바꿈, 어순과 존칭을 그대로 옮기지 않는다.

### 18.2 Source Language

현재 Source Language는 한국어다. Brand Name `EQUIV`, 공식 Mark Name `The EQUIV Mark`와 승인된 영문 실무 용어는 예외다.

### 18.3 Translation Rules

- 직역보다 의도와 Task를 유지한다.
- English는 간결한 Sentence Case를 기본으로 한다.
- 한국어의 생략된 주어를 영어에서 자연스럽게 보완한다.
- `함께합니다`를 모든 문장에서 `together`로 번역하지 않는다.
- `검토`는 Context에 따라 review, assess, analyze를 구분한다.
- 법률·회계 용어는 Domain Reviewer가 승인한다.

### 18.4 Expansion

- UI Container는 영문 30%, 독일어 등 장문 언어 40% 확장을 고려한다.
- Line Break를 String에 포함하지 않는다.
- Button Text가 잘리면 번역을 임의 축약하기 전에 Component를 검토한다.

### 18.5 Placeholders

문장을 조각내 연결하지 않는다. 변수에는 설명적인 이름을 사용한다.

권장:

`{businessDays}영업일 이내 연락드립니다.`

지양:

`연락 ` + number + `일`

### 18.6 Dates, Numbers and Currency

- Locale에 맞는 Format 사용
- 통화 Code와 단위 명시
- 날짜는 `2026년 7월 27일`처럼 모호하지 않게 표현
- Timezone이 중요한 일정에는 `KST` 명시

### 18.7 English Terminology

| Korean | Approved English |
|---|---|
| 기업 매각 | Sell-side M&A |
| 기업 인수 | Buy-side M&A |
| 투자유치 | Capital Raising |
| 기업가치 검토 | Business Valuation Review |
| 성장 전략 | Growth Strategy |
| 기업가치 | Enterprise Value |
| 지분가치 | Equity Value |
| 비밀유지계약 | Non-disclosure Agreement (NDA) |
| 실사 | Due Diligence |
| 거래 종결 | Closing |

### 18.8 Do

- Context 기반 번역
- 전문 용어 Reviewer 지정
- UI에서 실제 Length Test
- Locale Format 적용

### 18.9 Don't

- Machine Translation 무검토 배포
- 한글 줄바꿈 유지
- 같은 용어의 여러 번역
- 한국어 Marketing 표현 직역

### 18.10 PM Notes

영문 Site 도입 전에 Terminology Lock, Route Strategy, hreflang, Metadata, Legal Copy와 Translation Memory를 함께 준비한다.

---

## 19. Official Terminology

### 19.1 Governance

공식 용어는 UI, Service Page, Modal, Article, Email, Metadata와 내부 기획서에서 같은 의미로 사용한다. 새로운 동의어를 만들기 전에 이 표를 확인한다.

### 19.2 Core Glossary

| Official Korean | English | Definition | Usage Rule | Avoid |
|---|---|---|---|---|
| EQUIV (이퀴브) | EQUIV | 공식 브랜드 첫 표기 | Page 첫 등장 1회 | 이퀴브 M&A 회사 |
| EQUIV | EQUIV | 이후 브랜드 표기 | 동일 Page 재등장 | EQUIV M&A Advisory 반복 |
| M&A 중개·자문 | M&A Brokerage & Advisory | 핵심 업무 범위 | 브랜드 설명 | 종합 솔루션 |
| 기업 매각 | Sell-side M&A | 기업 또는 지분 매각 검토 | 서비스명 | 좋은 매각 |
| 기업 인수 | Buy-side M&A | 대상기업 발굴·인수 검토 | 서비스명 | 좋은 인수 |
| 투자유치 | Capital Raising | 외부 자금 유치 검토 | 붙여 씀 | 투자 유치 혼용 |
| 기업가치 검토 | Business Valuation Review | 서비스 소개 Page | 서비스명 | 기업가치평가 서비스 혼용 |
| Business Valuation | Business Valuation | 사전진단 Lead Page | 고유 Page명 | 서비스 상세 Page와 통합 |
| 기업가치 사전진단 | Preliminary Valuation | 입력 기반 참고 범위 경험 | CTA와 Modal | 자동 가치평가 |
| 기업가치 | Enterprise Value | 사업의 영업가치 | 지분가치와 구분 | 회사 가격 |
| 예비 기업가치 | Preliminary Enterprise Value | 사전진단의 참고 범위 | 결과 화면 | 확정 기업가치 |
| 지분가치 | Equity Value | 재무구조 반영 후 주주 관점 가치 | 첫 등장 설명 | 주식 가격 |
| 예상 지분가치 | Indicative Equity Value | 사전진단 범위 | 결과 화면 | 확정 지분가치 |
| 참고 신뢰도 | Reference Confidence | 결과 참고 수준 | 기업 경쟁력 점수 아님 | 기업 신뢰도 |
| 성장 전략 | Growth Strategy | 실행 가능한 성장 과제 검토 | 띄어 씀 | 성장전략 혼용 |
| 거래 | Transaction / Deal | M&A 과정 전체 | Context에 맞춰 번역 | 딜 남용 |
| 거래 목적 | Transaction Objective | 매각·인수·투자의 목적 | Form·Service | 니즈 |
| 거래 구조 | Deal Structure | 대금·지분·조건의 구조 | 설명 가능 | 최적 구조 단정 |
| 거래 전략 | Deal Strategy | 목적에 맞는 진행 방향 | 구체 기준 병기 | 전략 반복 |
| 잠재 인수자 | Potential Buyer | 매수 가능성이 있는 후보 | 매각 Context | 매수처 |
| 대상기업 | Target Company | 인수 검토 대상 | 붙여 씀 | 타겟사 남용 |
| 거래상대방 | Counterparty | 거래 반대편 당사자 | 공식 문맥 | 파트너 혼용 |
| 기업 현황 | Company Profile / Current State | 현재 사업·재무·목표 | 상담 Context | 회사 사정 |
| 재무자료 | Financial Information | 검토에 필요한 재무정보 | 한 단어 | 재무 데이터 혼용 |
| 실사 | Due Diligence | 거래 전 확인 절차 | 첫 등장 병기 가능 | 검증 |
| 협상 | Negotiation | 조건 조율 과정 | 명확한 대상 병기 | 네고 |
| 거래 종결 | Closing | 계약과 거래 완료 단계 | 첫 등장 병기 가능 | 클로징만 표기 |
| 비밀유지 | Confidentiality | 정보 보호 원칙 | 상담 안내 | 보안 보장 |
| 비밀유지계약(NDA) | Non-disclosure Agreement | 필요 시 체결하는 계약 | 첫 등장 병기 | NDA만 첫 표기 |
| 상담 | Consultation | 전문가 검토 시작 | `문의`보다 우선 | 무료 상담 강조 |
| 상담 신청 | Request a Consultation | Form 제출 Action | Button | 상담 문의 |
| 담당자 | Advisor / Representative | 상담 확인 주체 | 실제 역할에 맞춤 | 매니저 혼용 |
| 영업일 | Business Day | 연락 처리 기준 | 기간과 함께 사용 | 평일 |
| 업종 특성 | Industry Characteristics | 업종별 가치·거래 요소 | 구체 예시 권장 | 산업 특성 혼용 |
| 수익성 | Profitability | 이익 창출 특성 | 지표와 함께 사용 | 돈 버는 힘 |
| 성장성 | Growth Potential | 성장 추세와 가능성 | 근거와 함께 사용 | 무한한 성장 |
| 금융부채 | Financial Debt | 지분가치 반영 항목 | Tooltip 설명 | 부채 전체와 혼용 |
| 보유 현금 | Cash Holdings | 지분가치 반영 항목 | Tooltip 설명 | 현금성 자산 혼용 시 정의 |
| 운전자금 | Working Capital | 거래 조정 요소 | 첫 등장 설명 | 운영자금 혼용 |
| 우발채무 | Contingent Liabilities | 조건부 잠재 채무 | 첫 등장 설명 | 숨은 부채 |
| EBITDA | EBITDA | 이자·세금·감가상각 전 이익 | 필요한 문서에서 설명 | 일반 사용자 UI 남용 |
| Value Driver | Value Driver | 기업가치에 영향을 주는 요인 | Valuation Context | 가치 동인 무설명 |
| Calibration | Calibration | 업종·기업 특성 보정 | 내부 또는 Help | 캘리브레이션 단독 |

### 19.3 Preferred Verbs

- 확인합니다
- 검토합니다
- 분석합니다
- 정리합니다
- 설계합니다
- 발굴합니다
- 연결합니다
- 협의합니다
- 안내합니다
- 제안합니다

`지원합니다`는 구체적인 업무가 앞에 있을 때만 사용한다.

### 19.4 Restricted Expressions

다음 표현은 증빙과 승인 없이 사용하지 않는다.

- 풍부한 경험
- 맞춤형 전략
- 전문적인 검토
- 검증된 방식
- 글로벌 네트워크
- 높은 성공률

### 19.5 Prohibited Claims

- 국내 최고
- 업계 1위
- 압도적
- 100% 성공
- 반드시
- 완벽한
- 최고가 보장
- 정확한 가격 확정
- 무조건
- 즉시 승인

법률 문장 안의 `반드시`처럼 의무를 정확히 표현하는 경우는 Legal Review 후 예외다.

### 19.6 Terminology Decision

새 용어는 Definition, User Need, Korean, English, Avoided Synonyms, First-use Explanation과 적용 Component를 함께 승인한다.

---

## 20. Writing Governance

### 20.1 Content Lifecycle

`Discover → Brief → Draft → Domain Review → Content Review → Legal/Privacy Review → Implement → QA → Approve → Measure → Revise → Deprecate`

### 20.2 Before Writing

다음을 먼저 확인한다.

1. 사용자는 누구인가?
2. 현재 어떤 Task를 수행하는가?
3. 무엇을 알고 있거나 모르는가?
4. 어떤 감정과 위험이 있는가?
5. 반드시 전달할 사실은 무엇인가?
6. 다음 행동은 무엇인가?
7. 기존 문구와 용어로 해결 가능한가?

### 20.3 Content Brief

모든 신규 Page와 핵심 Flow는 다음을 기록한다.

- Page/Component
- Audience
- User Need
- Business Goal
- Primary Message
- Primary Action
- Supporting Evidence
- Required Terms
- Prohibited Claims
- Legal/Privacy Need
- Owner와 Reviewer

### 20.4 Roles

| Role | Responsibility |
|---|---|
| PM | User Need, Scope, Priority와 승인 |
| Content Owner | Voice, Tone, Structure와 Terminology |
| M&A Domain Reviewer | 거래 관행, 사실과 전문 용어 |
| Design | Content Hierarchy와 Component Fit |
| Engineering | String Source, State와 Accessibility 구현 |
| Legal/Privacy | 법률, 개인정보와 Disclaimer |
| SEO Owner | Metadata, Search Intent와 Structured Data |

한 사람이 여러 역할을 수행할 수 있지만 Review 항목은 생략하지 않는다.

### 20.5 Review Levels

- Level 1: Button, Label, Helper의 Minor Copy
- Level 2: Section, CTA, Error와 Success
- Level 3: Service Positioning, Valuation, Legal·Privacy, Email
- Level 4: Brand Core Message, Naming과 공식 Terminology

Level이 높을수록 Domain, Brand와 Legal Review 범위가 넓어진다.

### 20.6 Change Management

- 반복 String은 공통 Data Source에서 수정한다.
- 화면 HTML만 수정하고 Modal String을 남기지 않는다.
- 변경한 문구의 모든 Consumer를 검색한다.
- Meaning Change는 Changelog에 기록한다.
- Deprecated 문구는 신규 사용을 중단하고 Migration 대상과 기한을 기록한다.

### 20.7 Content Inventory

Page, Component, String Key, Korean, English, Status, Owner, Last Review, Source와 Consumer를 관리한다. 향후 CMS 도입 시 동일 Field를 유지한다.

### 20.8 Measurement

문구 품질은 클릭률만으로 판단하지 않는다.

- Task Completion
- Validation Error
- Abandonment
- Support Question
- Consultation Quality
- Search Behavior
- Accessibility Issue
- Misunderstanding Report

### 20.9 Exception

예외에는 이유, Owner, 적용 범위, 위험, 만료일과 교체 계획이 필요하다. `이번 Page만`은 근거가 아니다.

### 20.10 Do

- 기존 String과 Terminology 먼저 검색
- 실제 State에서 Review
- Domain과 Legal Risk 구분
- 변경 후 모든 Consumer QA

### 20.11 Don't

- 승인 없이 Production Copy 수정
- Design에서 임시 문구를 최종본으로 사용
- 같은 서비스 설명 복제
- 문구 문제를 Layout으로 숨김
- Owner 없는 예외

### 20.12 PM Notes

문구 변경은 기능 변경이 될 수 있다. Button Label, Error, Consent와 Result Explanation은 사용자의 기대와 법적 의미를 바꾸므로 단순 교정으로 처리하지 않는다.

---

## 21. AI Writing Rules

### 21.1 Scope

ChatGPT, Work와 기타 생성형 AI가 Page Copy, UI String, Article, SEO Metadata, Email 또는 상담 안내 초안을 만들 때 적용한다.

### 21.2 AI Role

AI는 초안 작성과 일관성 검사 도구다. 사실, 거래 경험, 법률 적합성과 최종 승인 주체가 아니다.

### 21.3 Required Input

AI 요청에는 최소 다음을 포함한다.

- 대상 사용자
- Page/Component 역할
- User Task
- 전달할 사실
- 금지 표현
- 공식 Terminology
- 길이와 출력 Format
- Source
- Review Owner

### 21.4 Prompt Rule

모호한 `전문적으로 써줘` 대신 역할과 제약을 구체적으로 쓴다.

**Recommended Prompt**

> 기업 매각 Service CTA 문구를 작성합니다. 대상은 매각을 검토하는 국내 중소·중견기업 대표입니다. Title 1문장, Description 2문장, Button 8자 이내로 작성합니다. 결과를 보장하지 말고 매각 목적과 기업 현황을 확인한다는 내용을 포함합니다. `좋은 거래`, `최적의 솔루션`, `국내 최고`는 사용하지 않습니다.

**Anti-pattern**

> 프리미엄하고 멋진 M&A 카피를 만들어줘.

### 21.5 Output Contract

AI는 다음을 구분해 출력한다.

1. Draft Copy
2. 사용한 공식 용어
3. 확인이 필요한 사실
4. 금지 표현 검사 결과
5. 대안이 필요한 경우 이유

### 21.6 Style Rules

- 존댓말
- 짧고 능동적인 문장
- 한 문장에 핵심 하나
- 한글 중심
- 감탄사와 이모지 금지
- 불필요한 서론 금지
- `오늘날`, `급변하는`, `복합적인`, `종합적으로` 금지
- 같은 의미 반복 금지

### 21.7 Fact and Claims

- Source에 없는 실적, 거래 건수, 고객, 성공률과 시장 수치를 만들지 않는다.
- 불확실한 내용은 `[확인 필요]`로 표시한다.
- 실제 거래 사례를 합성하지 않는다.
- 전문가 자격, 법률·회계 권한을 추정하지 않는다.
- 현재 정보가 필요한 시장·법률·SEO 사항은 공식 Source로 확인한다.

### 21.8 Valuation

- 확정 가치로 표현하지 않는다.
- 기업가치와 지분가치를 구분한다.
- 참고 신뢰도를 기업 우수성 점수로 표현하지 않는다.
- 계산 로직과 상수를 임의로 설명하거나 변경하지 않는다.
- 입력자료의 범위와 결과 한계를 명시한다.

### 21.9 Privacy and Confidentiality

- 실제 고객정보를 Prompt에 입력하지 않는다.
- 거래명, 회사명, 금액과 개인 식별정보를 익명화한다.
- `완벽한 보안`, `절대 유출되지 않음`을 쓰지 않는다.
- 승인된 개인정보와 비밀유지 문구를 변형하지 않는다.

### 21.10 Human-like Claims

AI 기능이 생겨도 감정, 의식, 개인적 판단을 암시하지 않는다.

- 권장: 입력한 정보를 바탕으로 참고 항목을 정리했습니다.
- 금지: 귀사의 상황을 깊이 이해했습니다.

### 21.11 Review

AI 문구는 최소 다음 검토를 통과한다.

- Content
- Domain
- Fact
- Terminology
- Accessibility
- Legal/Privacy 해당 시
- 실제 UI State

### 21.12 Do

- 명확한 Input과 Output Format
- Source와 불확실성 표시
- 여러 대안보다 승인 가능한 한 개의 기본안 우선
- Project 전체 반복 문구 검색
- 최종 Human Approval

### 21.13 Don't

- AI 초안을 바로 Production 배포
- 거래 경험을 창작
- 최상급과 보장 표현
- 승인된 Legal Copy 재작성
- 영어를 사용해 전문성 연출
- 사용자 질문보다 긴 브랜드 설명

### 21.14 Best Practice

AI에게 문장을 만들기 전에 기존 승인 String을 검색하게 한다. 새 문구가 필요한 경우에만 Draft를 생성하고 변경 이유와 Consumer를 함께 기록한다.

### 21.15 PM Notes

AI 출력 품질 문제를 Prompt만으로 해결하지 않는다. Terminology, Source, Component Constraint와 Review Process가 없으면 일관된 결과를 만들 수 없다.

---

## 22. Component and Pattern Writing

### 22.1 Component Contract

각 Component 문구는 `Purpose → User State → Message → Action`을 정의한다. Component Library의 구조와 State를 바꾸지 않는다.

### 22.2 Hero Pattern

- Brand/Page 역할
- 하나의 Headline
- 필요한 Description
- Primary Action
- Supporting Information

Hero에서 FAQ, Process와 브랜드 철학을 반복하지 않는다.

### 22.3 Card Pattern

`Category/Label → Title → Description → Link`

- 같은 Card Set은 같은 정보 순서
- Title은 Card 차이를 설명
- Description은 한 가지 Value
- Link는 목적지 Context 포함

### 22.4 Modal Pattern

`Context Label → Task Title → Short Description → Content/Form → Actions`

Success State는 Header와 Body가 모두 완료 상태를 말한다. 닫은 뒤 원래 Page Context가 유지됨을 문구와 동작이 함께 보장한다.

### 22.5 Accordion Pattern

- Trigger는 사용자의 질문 또는 주제
- Panel 첫 문장에서 결론
- Trigger와 Panel의 첫 문장 중복 금지
- `자세히`보다 구체적인 질문

### 22.6 Tooltip Pattern

- 용어를 짧게 설명
- 핵심 Task에 필요한 정보는 Tooltip에만 숨기지 않음
- Title + 2~4문장
- Button 사용법 설명 금지

### 22.7 Alert Pattern

`상태 Title → 영향 → Action`

Alert Type에 맞는 Tone을 사용하고 Color 이름을 문구에서 말하지 않는다.

### 22.8 Loading Pattern

- 작업을 알 필요가 있을 때만 Text 표시
- `결과를 준비하고 있습니다.`
- 시간이 오래 걸리면 예상 시간 또는 취소 가능 여부 제공
- 완료 전 성공을 암시하지 않음

### 22.9 Service Page Pattern

`Hero → Overview → How We Work → FAQ → CTA`

각 Section은 다른 질문에 답한다. 같은 Lead를 Overview와 CTA에 반복하지 않는다.

### 22.10 Insight Pattern

`Category → Title → Reading Time → Lead → Sections → Conclusion → Related Action`

Reading Time은 실제 분량과 일치해야 한다.

### 22.11 Consultation Pattern

`상담 대상 → 필요한 기본정보 → 개인정보 동의 → 접수 → 연락 일정 → NDA/자료 안내`

초기 단계에서 재무자료 업로드를 요구하지 않는다.

### 22.12 Valuation Pattern

`목적 설명 → 최소 입력 → Progress → 결과 범위 → 기업가치/지분가치 관계 → 참고 신뢰도 → Insight → 상담`

결과를 숨기기보다 참고 수준을 설명한다.

### 22.13 Email Pattern

Subject:

`[EQUIV] 상담 신청 접수 안내`

Body:

1. 수신자 이름 또는 담당자명
2. 접수 사실
3. 검토 항목
4. 연락 일정
5. 필요한 자료 안내
6. 비밀유지
7. EQUIV Signature

### 22.14 PM Notes

독립 Pattern Library가 만들어지면 이 Section을 Pattern별 Content Contract로 이전하고 이 문서에는 Voice·Tone·Terminology 원칙과 참조만 남긴다.

---

## 23. Content QA

### 23.1 Global Checklist

- [ ] 사용자가 누구인지 정의했는가?
- [ ] Page 또는 Component의 목적이 하나인가?
- [ ] 문구가 User Task를 지원하는가?
- [ ] 결론이 첫 문장에 있는가?
- [ ] 한 문장에 핵심이 하나인가?
- [ ] 불필요한 수식어를 삭제했는가?
- [ ] 존댓말이 일관적인가?
- [ ] 현재형과 능동형을 우선했는가?
- [ ] 같은 개념에 같은 용어를 사용했는가?
- [ ] Terminology에 없는 새 용어를 승인했는가?
- [ ] 영문 사용이 필요한가?
- [ ] 첫 전문 용어에 설명이 있는가?
- [ ] 근거 없는 최상급이 없는가?
- [ ] 결과, 가격과 기간을 보장하지 않는가?
- [ ] 사용자를 압박하지 않는가?
- [ ] 경쟁사를 근거 없이 비교하지 않는가?
- [ ] 브랜드 문구가 다른 Section과 반복되지 않는가?
- [ ] `좋은 거래`가 Principle 외에 반복되지 않는가?
- [ ] `성공적인 M&A`가 Home Hero 외에서 보장처럼 쓰이지 않는가?
- [ ] `최적`, `맞춤형`, `전문적`이 구체적 기준 없이 쓰이지 않는가?
- [ ] CTA가 다음 행동을 설명하는가?
- [ ] 같은 Action에 같은 Label을 사용했는가?
- [ ] Button이 12자 이내인가?
- [ ] Primary Action이 하나인가?
- [ ] Link Text만 읽어도 목적지를 알 수 있는가?
- [ ] Heading만 읽어도 구조를 이해할 수 있는가?
- [ ] H1이 Page 역할과 일치하는가?
- [ ] Label이 Placeholder와 분리되어 있는가?
- [ ] Required와 Optional이 명확한가?
- [ ] Helper가 입력 기준을 미리 설명하는가?
- [ ] Error가 문제를 구체적으로 설명하는가?
- [ ] Error가 해결 행동을 제공하는가?
- [ ] Error가 사용자를 탓하지 않는가?
- [ ] 입력 보존 여부 문구가 실제 동작과 일치하는가?
- [ ] Success가 완료된 Action을 명시하는가?
- [ ] Success가 다음 일정과 단계를 설명하는가?
- [ ] Empty State가 Dead End를 만들지 않는가?
- [ ] Confirmation이 필요한 위험한 Action인가?
- [ ] Confirmation Button이 결과를 설명하는가?
- [ ] Modal Header와 Body가 같은 State인가?
- [ ] Loading 문구가 완료를 미리 암시하지 않는가?
- [ ] Tooltip에 필수 정보만 숨기지 않았는가?
- [ ] Article Title이 Clickbait가 아닌가?
- [ ] Article 사실에 기준일과 출처가 있는가?
- [ ] 사례가 익명화되었는가?
- [ ] FAQ가 본문을 반복하지 않는가?
- [ ] SEO Title이 Page마다 고유한가?
- [ ] Meta Description이 실제 Content와 일치하는가?
- [ ] Keyword가 자연스럽게 사용되었는가?
- [ ] Internal Link가 구체적인가?
- [ ] Alt Text가 Asset 목적을 설명하는가?
- [ ] Icon-only Action에 Accessible Name이 있는가?
- [ ] 방향과 색상만으로 의미를 전달하지 않는가?
- [ ] 숫자, 단위와 범위가 명확한가?
- [ ] 스크린리더의 읽기 순서가 자연스러운가?
- [ ] 200% 확대에서 의미가 잘리지 않는가?
- [ ] 번역 시 String을 조각내지 않았는가?
- [ ] Hard-coded Line Break가 없는가?
- [ ] 날짜, 숫자와 통화가 Locale에 맞는가?
- [ ] English Terminology가 Glossary와 일치하는가?
- [ ] 개인정보 수집 목적이 명확한가?
- [ ] 승인된 Legal Copy를 임의로 바꾸지 않았는가?
- [ ] 비밀유지 표현이 과도한 보장이 아닌가?
- [ ] Valuation이 정식 평가로 오인되지 않는가?
- [ ] 기업가치와 지분가치를 구분했는가?
- [ ] 참고 신뢰도가 기업 우수성 점수로 보이지 않는가?
- [ ] AI가 Source 없는 사실을 만들지 않았는가?
- [ ] AI 초안을 Domain Reviewer가 확인했는가?
- [ ] 반복 String이 공통 Data Source에 있는가?
- [ ] HTML과 JavaScript 문구가 일치하는가?
- [ ] Mobile에서 문구가 잘리지 않는가?
- [ ] 실제 Error·Success State를 열어 확인했는가?
- [ ] Browser별 Form Message를 확인했는가?
- [ ] 변경한 String의 모든 Consumer를 검색했는가?
- [ ] Changelog가 업데이트되었는가?
- [ ] Owner와 승인 상태가 기록되었는가?

### 23.2 Release Gate

다음 항목 중 하나라도 충족하지 않으면 배포하지 않는다.

- 법률 또는 개인정보 위험
- 사실 출처 없음
- 결과 보장 표현
- 접근 가능한 이름 없음
- Error 복구 경로 없음
- 반복 String 불일치
- 공식 용어 충돌

---

## 24. Best Practice Library

### 24.1 Before and After

| Intent | Anti-pattern | Recommended |
|---|---|---|
| 전문성 | 최고의 전문가가 완벽한 솔루션을 제공합니다. | 거래 목적과 기업 현황을 바탕으로 진행 방향을 검토합니다. |
| 상담 | 지금 바로 무료 상담을 신청하세요! | 현재 상황을 남겨주시면 담당자가 확인 후 연락드립니다. |
| 매각 | 성공적인 최고가 매각을 보장합니다. | 기업의 특성과 거래 목적에 맞는 매각 전략을 설계합니다. |
| 인수 | 최적의 우량 매물을 찾아드립니다. | 인수 목적과 투자 기준에 맞는 대상기업을 검토합니다. |
| 가치 | 정확한 기업가치를 즉시 확인하세요. | 입력한 정보를 바탕으로 예비 기업가치의 참고 범위를 확인합니다. |
| 오류 | 잘못 입력하셨습니다. | 연락처 형식을 확인해 주세요. |
| 성공 | 신청 성공! | 상담 신청이 정상적으로 접수되었습니다. |
| Empty | 아무것도 없습니다. | 검색 결과가 없습니다. 검색어를 확인해 주세요. |
| Link | 자세히 보기 | 기업 매각 서비스 보기 |

### 24.2 Editing Pass

1. 사실과 주장 표시
2. 중복 삭제
3. 추상 명사를 구체적 동사로 교체
4. 문장 분리
5. 공식 용어 확인
6. Action 명확화
7. 접근성 확인
8. 실제 화면에서 Length 확인

### 24.3 Content Smell

다음 징후가 있으면 다시 작성한다.

- 문장마다 `제공합니다`
- 모든 Section이 질문형 Title
- 모든 CTA가 `함께 검토해 보십시오`
- 서비스명을 바꿔도 같은 설명
- Error가 기술 원인만 설명
- Success가 브랜드 메시지를 반복
- Mobile에서 줄바꿈을 위해 단어 삭제
- 영어가 한글보다 많음

### 24.4 PM Notes

좋은 문구는 인상적인 문구가 아니라 오해가 적고 Task가 완료되는 문구다.

---

## 25. Future Expansion

### 25.1 AI Chat

- AI임을 명확히 표시
- 가능한 일과 한계를 설명
- 답변의 Source와 기준일 제공
- 사람 상담으로 전환하는 경로
- 개인정보 입력 전 안내
- 감정과 인간적 판단을 암시하지 않음

### 25.2 Dashboard

- 상태와 Action 중심
- 금융·거래 수치의 단위와 기준일
- Empty, Loading, Error와 Permission State
- 사용자 역할별 Terminology

### 25.3 Admin

- Dense UI에서도 약어를 남용하지 않음
- Destructive Action Confirmation
- Audit Log에 명확한 과거형
- 내부 용어와 공개 용어 Mapping

### 25.4 CRM

- Lead Status 정의
- 상담 단계별 Email Template
- 개인정보 보유기간과 삭제 상태
- 고객에게 노출되는 Note와 내부 Note 구분

### 25.5 M&A Platform

- 거래 단계와 권한의 공식 용어
- Confidential과 Data Room 문구
- Buyer/Seller Role별 Tone
- 법률·재무 Disclaimer
- 국가별 Localization

### 25.6 Governance

새 Product는 이 문서의 Voice와 Terminology를 재사용한다. Product-specific Tone이나 용어가 필요하면 Variant로 제안하고 EQUIV 전체 Voice를 대체하지 않는다.

---

## Appendix A. Content Brief

```md
# Content Brief

- Request:
- Page / Component:
- Audience:
- User Task:
- User State:
- Business Goal:
- Primary Message:
- Primary Action:
- Supporting Evidence:
- Required Terms:
- Prohibited Claims:
- Legal / Privacy:
- SEO Intent:
- Localization:
- Owner:
- Reviewers:
- Due Date:
```

---

## Appendix B. UI String Specification

```md
# UI String

- String ID:
- Component:
- State:
- Korean:
- English:
- Character Guidance:
- Accessible Name:
- Variables:
- Source:
- Consumer:
- Status:
- Owner:
- Last Review:
```

String ID 권장:

`domain.component.state.element`

예:

- `consultation.modal.success.title`
- `valuation.result.confidence.help`
- `form.email.error.invalid`

---

## Appendix C. Content Review Record

```md
# Content Review

- Change Summary:
- Previous Copy:
- Proposed Copy:
- Reason:
- User Impact:
- Terminology Check:
- Fact Check:
- Accessibility Check:
- Legal / Privacy Check:
- SEO Check:
- Consumer Search:
- Reviewer:
- Decision:
- Follow-up:
```

---

## Appendix D. Terminology Proposal

```md
# Terminology Proposal

- Proposed Korean:
- Proposed English:
- Definition:
- User Need:
- First-use Explanation:
- Approved Synonyms:
- Avoided Synonyms:
- Components / Pages:
- Localization Risk:
- Domain Reviewer:
- Decision:
```

---

## Appendix E. AI Prompt Contract

```md
# Role
EQUIV의 승인된 UX Writing System을 따르는 Content Designer

# Audience
[사용자]

# Context
[Page / Component / State]

# User Task
[수행하려는 일]

# Facts
[검증된 사실만]

# Required Terminology
[공식 용어]

# Prohibited
[금지 표현과 Claims]

# Output
[Title / Body / CTA / Length]

# Review Flags
근거가 없거나 확인이 필요한 내용은 [확인 필요]로 표시
```

---

## Appendix F. Page Copy Inventory

| Page Type | Primary Content | Primary Action | Source |
|---|---|---|---|
| Home | Brand Role, Services, Insights | 상담 신청 | HTML + Shared Modal |
| About | Company and Mark | 상담 신청 | HTML |
| Expertise | Service Selection | Service Detail | HTML |
| Service Detail | Service Scope and Process | Service Consultation | HTML + Service Data |
| Business Valuation | Preliminary Diagnosis | 기업가치 사전진단 | HTML + Valuation JS |
| Insight | Practical M&A Content | Related Service/Consultation | HTML |
| Consultation | Initial Contact | 상담 신청 | Shared Modal JS |

---

## Appendix G. Release Checklist

- [ ] Content Brief 승인
- [ ] Voice와 Tone 확인
- [ ] Terminology 확인
- [ ] Fact와 Source 확인
- [ ] Claim 확인
- [ ] CTA와 Button 확인
- [ ] Form State 확인
- [ ] Error와 Success 확인
- [ ] Accessibility 확인
- [ ] Localization 준비
- [ ] SEO Metadata 확인
- [ ] Legal·Privacy 확인
- [ ] 반복 String Consumer 검색
- [ ] Desktop·Tablet·Mobile 확인
- [ ] Chrome·Edge·Safari·Mobile Browser 확인
- [ ] Changelog와 Inventory 업데이트

---

## Appendix H. PM Review

- [ ] 브랜드 Voice가 모든 Page에서 일관적인가?
- [ ] 상황별 Tone이 사용자의 Task와 감정에 맞는가?
- [ ] CTA 문구가 행동과 결과를 명확히 안내하는가?
- [ ] 오류 메시지가 문제와 해결 방법을 설명하는가?
- [ ] 서비스 소개 문장이 과장되지 않았는가?
- [ ] SEO와 접근성을 함께 고려했는가?
- [ ] 공식 용어를 모든 Consumer에서 일관되게 사용했는가?
- [ ] 영문 확장을 고려한 Terminology와 String 구조를 갖추었는가?
- [ ] AI 생성 문구가 Human·Domain Review를 통과했는가?
- [ ] 기존 Brand Guide, Design Bible과 Component Library에 충돌하지 않는가?
- [ ] Pattern Library가 없는 현재 구조에서 Component Composition과 Service Template을 참조했는가?
- [ ] Legal·Privacy 문구가 승인되었는가?
- [ ] 실제 UI State에서 문구를 확인했는가?
- [ ] 변경 이력과 Owner가 기록되었는가?

하나라도 `NO`이면 문구 상태는 `Approved`가 아니라 `Review` 또는 `Approved Draft`를 유지한다.
