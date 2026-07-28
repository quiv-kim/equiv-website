# EQUIV Design Quality Assurance & Design Governance

Version 1.0
Status: Approved Draft
Document Type: Quality Assurance, Release and Design Governance Standard
Owner: EQUIV Design Governance
Applies To: Website, Design System, Lead Generation Tools, Consultation Experience and Future Digital Products

---

## Table of Contents

0. Document Control
1. Quality Philosophy
2. Design Governance Philosophy
3. Governance Model and Roles
4. End-to-End Review Process
5. Design Review Checklist
6. Implementation Review
7. Responsive QA
8. Accessibility QA
9. Performance QA
10. Visual Consistency QA
11. Content QA
12. Component QA
13. Pattern QA
14. Documentation Governance
15. Version Management
16. Design Debt
17. Change Management
18. Decision Management
19. Risk Management
20. Release Process
21. Work Implementation Rules
22. PM Review Rules
23. Monitoring, Incident and Hotfix
24. Future Governance

Appendices:

- A. Design Change Proposal
- B. QA Review Record
- C. Decision Log
- D. Design Debt Register
- E. Risk Register
- F. Release Candidate Report
- G. Rollback Plan
- H. Governance Audit
- I. Final PM Review

---

## 0. Document Control

### 0.1 Purpose

이 문서는 EQUIV의 디자인을 새로 만드는 방법이 아니라 이미 승인된 품질을 유지하고 확장하는 방법을 정의한다.

모든 변경은 검토 가능한 근거, 재사용 가능한 구조, 명확한 승인권한과 추적 가능한 기록을 가져야 한다. 품질은 Release 직전에 발견하는 결과가 아니라 Brief, Design, Implementation, QA와 Documentation 단계에서 함께 설계한다.

### 0.2 Scope

적용 범위:

- Brand, Service, Lead Generation, Insight와 Conversion Page
- Header, Hero, Navigation, Card, Form, Modal, Footer와 Domain Component
- Typography, Spacing, Grid, Color, Radius, Shadow, Motion과 Responsive Token
- Image, Icon, Illustration, Logo와 Data Visualization
- Voice, Tone, Terminology, CTA, Form Message와 SEO
- Accessibility, Browser Compatibility와 Performance
- Documentation, Version, Migration, Deprecation과 Design Debt
- 향후 Admin, Dashboard, CRM, AI, M&A Platform과 Investor Portal

### 0.3 Relationship to Other Standards

이 문서는 각 전문 문서의 내용을 반복하지 않고 Release Gate와 책임을 통합한다.

1. `EQUIV_AI_OPERATING_MANUAL.md`: 프로젝트의 최상위 운영 순서, 변경 범위와 Evidence 원칙
2. `EQUIV_DESIGN_BIBLE.md`: 브랜드와 디자인 철학
3. `DESIGN_QA_GOVERNANCE.md`: 최상위 Review, Approval, Release와 Audit
4. `DESIGN_SYSTEM.md`: Token과 구현 규칙
5. `COMPONENT_LIBRARY.md`: Component Contract와 Lifecycle
6. `CONTENT_UX_WRITING_SYSTEM.md`: Voice, Tone, Terminology와 Content QA
7. `VISUAL_ASSET_GUIDE.md`: Asset Lifecycle, Rights, Optimization과 Asset QA
8. `SERVICE_PAGE_TEMPLATE.md`: 현재 Service Pattern
9. `MASTER_SPEC.md`: Page Role, 기능과 비즈니스 요구사항
10. `AI_RULES.md`: AI와 Work의 프로젝트 수행 원칙
11. `CHANGELOG.md`: 배포된 변경 이력
12. `TODO.md`: 현재 계획과 미해결 작업

`EQUIV_AI_OPERATING_MANUAL.md`는 작업을 수행하는 순서를 정의한다. 본 문서는 QA Evidence, 승인과 Release Gate의 Single Source of Truth이며 두 문서는 서로의 책임을 대체하지 않는다.

현재 독립된 `PATTERN_LIBRARY.md`는 없다. Pattern Source는 `COMPONENT_LIBRARY.md`의 Composition·Page Map과 `SERVICE_PAGE_TEMPLATE.md`다. 독립 Pattern Library가 생기면 이 문서의 Pattern QA와 Version Gate를 적용한다.

### 0.4 Normative Language

- **MUST / 반드시**: Release Gate 통과에 필요하다.
- **MUST NOT / 금지**: 승인 또는 배포할 수 없다.
- **SHOULD / 권장**: 명시적인 근거가 없다면 따른다.
- **MAY / 허용**: Scope와 영향을 기록한 뒤 사용할 수 있다.
- **BLOCKER**: 해결 전 Release 금지.
- **EXCEPTION**: Owner, 이유, 영향, 만료일과 해결 계획이 필요하다.

### 0.5 External Reference

운영 구조는 다음 공식 체계의 공통 원칙을 참고한다.

- [Google Material Design](https://m3.material.io/): Foundation, Component와 Accessibility의 일관된 적용
- [IBM Carbon](https://carbondesignsystem.com/): Usage Guidance, Component Status와 Contribution
- [Microsoft Fluent Accessibility](https://fluent2.microsoft.design/accessibility): Design 초기부터의 접근성 명세
- [Atlassian Contribution](https://atlassian.design/resources/contribution): System 영향에 따른 Contribution 범위와 Review
- [Shopify Polaris](https://shopify.dev/docs/api/app-home/web-components): 재사용 Component와 Product Workflow
- [Adobe Spectrum Principles](https://spectrum.adobe.com/page/principles/): 투명한 Version, Issue와 Design Checklist
- [GitHub Primer](https://primer.style/): 실용적인 Component API와 Migration

외부 System의 UI, Naming과 Process를 그대로 복제하지 않는다. EQUIV의 현재 규모, 위험과 운영 역량에 맞게 적용한다.

### 0.6 Standards Baseline

- Accessibility: WCAG 2.2 Level AA
- Performance: Core Web Vitals `LCP ≤ 2.5s`, `INP ≤ 200ms`, `CLS ≤ 0.1`의 75th Percentile
- Browser: Chrome, Edge, Safari와 Samsung Internet의 지원 가능한 최신 안정판
- Responsive Matrix: 360, 390, 430, 768, 1024, 1280, 1440, 1920px
- Quality Source: 자동 검사는 보조 수단이며 실제 Device·Keyboard·Screen Reader와 Visual Review가 최종 판단에 포함된다.

기준이 바뀌면 Decision Log와 Version Update 없이 수치를 조용히 변경하지 않는다.

### 0.7 Quality Status

| Status | 의미 |
|---|---|
| Draft | 제안 작성 중 |
| In Review | PM·Design·Engineering 검토 중 |
| Approved for Implementation | 구현 승인 |
| Implemented | 코드 반영, QA 전 |
| Release Candidate | 모든 필수 QA 완료 |
| Released | Production 반영 |
| Monitoring | 배포 후 관찰 |
| Deprecated | 신규 사용 금지 |
| Archived | 참조만 유지 |

---

## 1. Quality Philosophy

### 1.1 Quality Is Designed

품질은 마지막에 검사해서 추가할 수 없다. Requirement가 모호하면 UI가 흔들리고, Token이 없으면 Component가 분기되며, State가 정의되지 않으면 Error와 Accessibility가 누락된다.

따라서 QA는 다음 단계 모두에서 수행한다.

`Brief → Content → Design → Prototype → Implementation → Review → Release → Monitoring`

### 1.2 Prevention Before Detection

우선순위:

1. 문제를 만들지 않는 Token과 Component
2. Design 단계의 State·Responsive·Accessibility 명세
3. Implementation 단계의 자동·수동 검증
4. Release 전 Regression
5. 배포 후 Monitoring

### 1.3 Evidence-based Approval

`좋아 보인다`, `고급스럽다`, `문제없다`는 승인 근거가 아니다. Screenshot, Browser Matrix, Test Result, Metric, Diff, Checklist와 Decision Record로 판단한다.

### 1.4 Risk-based Depth

모든 변경을 같은 깊이로 검토하지 않는다.

- Low: Copy 오탈자, 문서 Link
- Medium: Spacing, Asset, 단일 Component State
- High: Header, Navigation, Modal, Form, Valuation Result, Shared Token
- Critical: 개인정보, 계산 Engine, Accessibility Blocker, Brand Logo, Release Architecture

위험도가 높을수록 Reviewer, Regression 범위와 Rollback 준비를 확대한다.

### 1.5 User Outcome

Visual Fidelity만으로 Release하지 않는다. 사용자가 이해하고, 이동하고, 입력하고, 오류에서 복구하고, 상담이나 사전진단을 완료할 수 있어야 한다.

### 1.6 Best Practice

- Acceptance Criteria에 QA를 포함한다.
- Edge State를 정상 State와 함께 설계한다.
- 변경 범위보다 영향 범위를 기준으로 Test한다.
- 자동화와 수동 검증을 함께 사용한다.
- Release 후 실제 지표와 Issue를 다시 확인한다.

### 1.7 Anti-pattern

- 마지막 날 QA
- Desktop Screenshot 한 장으로 승인
- Lighthouse 점수만으로 접근성 승인
- CSS Override로 급히 수정한 뒤 Documentation 생략
- Bug를 `디자인 취향`으로 분류
- Release 후 Issue를 다음 Sprint로 무기한 미룸

### 1.8 PM Notes

QA 일정은 개발 이후 별도 여유 시간이 아니다. Sprint Estimation에 Review, Device Test, Fix, Regression, Documentation과 승인 시간을 포함한다.

---

## 2. Design Governance Philosophy

### 2.1 Purpose

Design Governance의 목적은 통제 자체가 아니다.

- Brand Consistency
- Component와 Pattern 재사용
- 확장 가능한 Architecture
- 접근성과 성능 품질 유지
- 근거와 책임이 있는 Decision
- 중복과 Design Debt 방지
- 변경 이력과 Migration 추적

### 2.2 Principles

1. Token First
2. Component First
3. Pattern Before Page Exception
4. Accessibility by Design
5. Content as Interface
6. Evidence Before Approval
7. Documentation with Release
8. Reversible Change when Possible

### 2.3 Decision over Preference

개인 취향보다 다음을 우선한다.

1. User Need
2. Brand Principle
3. Accessibility
4. Existing System
5. Technical and Performance Impact
6. Evidence
7. Aesthetic Preference

### 2.4 Consistency and Exceptions

일관성은 모든 Page를 똑같게 만드는 것이 아니다. Page Role은 다를 수 있지만 Token, Component, Interaction, Voice와 QA 방식은 동일해야 한다.

예외는 숨기지 않는다. Exception Record에는 Owner, 이유, 영향, 만료일과 System으로 복귀하는 계획을 남긴다.

### 2.5 Governance Cadence

- Sprint: 변경별 Review와 Release QA
- Monthly: Debt, Risk와 반복 Issue 검토
- Quarterly: Token, Component, Pattern과 Browser Matrix Audit
- Semiannual: Accessibility와 Performance Deep Audit
- Annual: Design Bible, Brand, Platform Expansion과 Governance Version 검토

---

## 3. Governance Model and Roles

### 3.1 Roles

| Role | Responsibility |
|---|---|
| Project Owner | 프로젝트 방향, 최종 의사결정과 Production Release 승인 |
| Project Manager | Scope, Priority, Risk, Acceptance, QA Gate와 Release 권고 |
| Design Owner | Design Bible, Visual Hierarchy와 Pattern 적합성 |
| Design System Owner | Token, Component, Version과 Migration |
| Engineering Owner | 구현 품질, Architecture, Test와 Rollback |
| Content Owner | Voice, Tone, Terminology, SEO와 State Copy |
| Accessibility Reviewer | WCAG, Keyboard, Screen Reader와 Zoom |
| Performance Reviewer | CWV, Bundle, Asset와 Runtime |
| Brand Owner | Logo, Color, Visual Language와 Brand Risk |
| Domain Reviewer | M&A, Valuation와 거래 실무 정확성 |
| Legal/Privacy Reviewer | 개인정보, 법률 문구와 동의 |
| QA Owner | Test Matrix, Evidence, Defect와 Regression |

한 사람이 여러 역할을 수행할 수 있지만 필수 Review 관점은 생략할 수 없다. Project Manager의 QA Gate 통과 판단과 Project Owner의 Production Release 최종 승인은 서로 다른 책임이다.

### 3.2 RACI

| Activity | Owner | PM | Design | Engineering | QA | Content | A11y | Domain/Legal |
|---|---|---|---|---|---|---|---|---|
| Proposal | A | R | C | C | C | C | C | C |
| Design Review | I | A | R | C | C | C | C | C |
| Implementation | I | C | C | A/R | C | C | C | I |
| Functional QA | I | A | C | R | R | C | C | I |
| Accessibility QA | I | A | C | C | C | I | R | I |
| Content QA | I | A | C | I | C | R | C | C |
| QA Gate | I | A | C | R | R | C | C | C |
| Production Release Approval | A | R | C | R | R | C | C | C |
| Documentation | I | A | R | R | C | R | C | I |
| Hotfix | A | R | C | R | R | I | C | C |

`A`는 한 명이어야 한다. 승인권자가 불명확하면 Release하지 않는다.

### 3.3 Separation of Duties

High와 Critical 변경은 구현자 단독 승인 금지다. 최소 한 명의 독립 Reviewer가 Diff와 실제 화면을 확인한다.

### 3.4 ChatGPT Project Manager

ChatGPT 또는 Work가 PM 역할을 수행할 때도 동일한 Gate를 따른다.

- 문서를 먼저 읽는다.
- 실제 구현을 확인한다.
- 추정과 사실을 구분한다.
- 변경 범위를 임의로 넓히지 않는다.
- 자동 검사 결과만으로 완료를 선언하지 않는다.
- 사용자 승인 없이 Production Release나 Commit을 가정하지 않는다.
- QA Gate 통과 판단과 Production Release 최종 승인을 구분한다.
- Production Release 준비가 완료되면 Project Owner에게 근거와 함께 권고한다.

### 3.5 Escalation

다음은 PM에게 즉시 Escalation한다.

- Design Bible 충돌
- 개인정보 또는 법률 위험
- 계산 Engine 영향
- Breaking Component Change
- WCAG Blocker
- CWV Poor 회귀
- Rollback 불가
- 문서와 구현 불일치

---

## 4. End-to-End Review Process

### 4.1 Official Flow

`Request → Requirement Analysis → Documentation Review → Impact Analysis → Implementation Plan → Work Implementation → QA → Documentation Update → PM Gate → Project Owner Approval → Release → Monitoring`

Workflow의 상세 수행 기준은 `EQUIV_AI_OPERATING_MANUAL.md` Chapter 4를 따르며, 실제 운영에서는 다음 Gate로 세분화한다.

### 4.2 Gate 0 — Intake

Required:

- Problem과 User Need
- Page Role
- Scope와 Non-scope
- Risk Level
- Acceptance Criteria
- Existing Component/Pattern Audit
- Required Reviewers

Output: Approved Brief

### 4.3 Gate 1 — Design Review

Required:

- Design Bible 적합성
- Token, Component와 Pattern 재사용
- 정상·Loading·Empty·Error·Success State
- Desktop·Tablet·Mobile
- Keyboard, Focus와 Screen Reader Annotation
- Content Draft
- Performance 영향

Output: Approved for Implementation

### 4.4 Gate 2 — Implementation Review

Required:

- Code Diff
- Design Fidelity
- Semantic HTML
- Functional State
- Responsive Matrix
- Automated Test
- Console·Network Error
- No unintended Scope Change

Output: Implemented

### 4.5 Gate 3 — QA

QA의 실행 시점, 책임, 판정과 Rework 절차는 `EQUIV_AI_OPERATING_MANUAL.md` Chapter 5를 따른다.

Order:

1. Design QA
2. Functional QA
3. Responsive QA
4. Accessibility QA
5. Performance QA
6. Content QA
7. Regression QA
8. Documentation Check

Output: Release Candidate

### 4.6 Gate 4 — Approval

PM은 Evidence, Open Defect, Risk Acceptance, Rollback과 Documentation을 검토해 QA Gate와 Release Recommendation을 결정한다. Production Release의 최종 승인은 Project Owner가 수행한다.

Blocker 또는 Critical Defect가 하나라도 있으면 승인하지 않는다.

최종 QA Result가 `PASS`인 Release Candidate만 Project Owner 승인 단계로 이동한다.

### 4.7 Gate 5 — Release

Required:

- Approved Release Candidate
- Version
- Changelog
- Rollback
- Monitoring Owner
- Production Verification Plan

### 4.8 Gate 6 — Documentation Finalization

필수 문서 변경은 Gate 4 전에 준비한다. Gate 6에서는 실제 Version, Release 결과, Production Verification과 후속 Issue를 최종 반영한다. Documentation은 Release 이후 선택적으로 정리하는 작업이 아니라 Release Scope다.

### 4.9 Gate 7 — Monitoring

- Production Smoke Test
- Error와 Console
- CWV Field Trend
- Form Completion
- Accessibility Feedback
- Support·User Report

### 4.10 Rejection

Reject 사유는 사람에 대한 평가가 아니라 Criteria와 Evidence로 기록한다. 수정 범위, Owner와 Re-review 조건을 함께 제공한다.

---

## 5. Design Review Checklist

이 Checklist는 전체 Design Review의 공통 기준이다. 변경 범위와 무관한 항목은 `N/A`와 근거를 기록한다. 단순히 체크 수를 채우지 않는다.

### 5.1 Purpose and Scope

- [ ] 001. 해결하려는 User Problem이 한 문장으로 정의되었는가?
- [ ] 002. 대상 사용자와 주요 Task가 정의되었는가?
- [ ] 003. Page Type과 Role이 Architecture에 맞는가?
- [ ] 004. Scope와 Non-scope가 명확한가?
- [ ] 005. Acceptance Criteria가 검증 가능한가?
- [ ] 006. 기존 기능을 삭제하거나 이동하지 않는가?
- [ ] 007. 변경의 Risk Level이 지정되었는가?
- [ ] 008. 관련 Owner와 Reviewer가 지정되었는가?
- [ ] 009. Success와 Failure Outcome이 정의되었는가?
- [ ] 010. 변경하지 않는 항목이 보호되는가?

### 5.2 Brand and Hierarchy

- [ ] 011. Design Bible의 Page Role과 일치하는가?
- [ ] 012. EQUIV가 첫 Brand Anchor로 보이는가?
- [ ] 013. Brand보다 Menu나 CTA가 먼저 보이지 않는가?
- [ ] 014. 한 화면의 시각적 중심이 하나인가?
- [ ] 015. Primary Message가 3초 안에 이해되는가?
- [ ] 016. Professional, Balanced, Strategic, Premium과 Trustworthy 기준에 맞는가?
- [ ] 017. 장식보다 정보 전달이 우선하는가?
- [ ] 018. Gold가 Accent로 제한되는가?
- [ ] 019. Page별 Brand Message 반복이 없는가?
- [ ] 020. Footer가 Brand Signature 역할만 수행하는가?

### 5.3 Typography

- [ ] 021. Display, H1, H2, H3, Body와 Caption 역할이 올바른가?
- [ ] 022. Page에 H1이 하나인가?
- [ ] 023. Heading Level이 순서대로 사용되는가?
- [ ] 024. 직접 Font Size 대신 승인 Token을 사용하는가?
- [ ] 025. Font Family가 Design System과 일치하는가?
- [ ] 026. Weight가 정보 위계를 전달하는가?
- [ ] 027. Line Height가 긴 한글 문장을 편하게 읽게 하는가?
- [ ] 028. Letter Spacing이 브랜드와 가독성을 해치지 않는가?
- [ ] 029. Body Width가 지나치게 길지 않은가?
- [ ] 030. Mobile에서 제목이 화면을 지배하지 않는가?
- [ ] 031. 200% Text Zoom에서 잘림이 없는가?
- [ ] 032. Bold가 한 문단에서 과도하게 사용되지 않는가?

### 5.4 Spacing and Rhythm

- [ ] 033. Spacing Token만 사용하는가?
- [ ] 034. Section Space가 Page Role에 맞는 Semantic Token인가?
- [ ] 035. Heading과 Description 간격이 일관적인가?
- [ ] 036. Description과 Content 간격이 일관적인가?
- [ ] 037. Card 내부 Padding이 승인 Scale인가?
- [ ] 038. Button 내부 Padding이 승인 Scale인가?
- [ ] 039. Form Field 간격이 일관적인가?
- [ ] 040. Modal Padding이 Viewport에 맞는가?
- [ ] 041. Empty Space가 의도된 계층을 만드는가?
- [ ] 042. Typography 축소 후 여백만 과도하게 남지 않는가?
- [ ] 043. Mobile에서 Section이 지나치게 압축되지 않는가?
- [ ] 044. Footer 전후 공간이 자연스러운가?

### 5.5 Grid and Container

- [ ] 045. 승인된 Container Token을 사용하는가?
- [ ] 046. Section의 왼쪽 기준선이 일치하는가?
- [ ] 047. Grid Column 수가 Device Rule과 맞는가?
- [ ] 048. Column Gap이 승인 Token인가?
- [ ] 049. Card Width가 Content 역할에 맞는가?
- [ ] 050. 같은 Row의 Card 높이가 안정적인가?
- [ ] 051. Horizontal Balance가 한쪽으로 치우치지 않는가?
- [ ] 052. Ultra-wide에서 Content가 과도하게 늘어나지 않는가?
- [ ] 053. Mobile에서 가로 Scroll이 생기지 않는가?
- [ ] 054. 임의 Max-width가 반복 추가되지 않았는가?

### 5.6 Color, Surface and Visual Language

- [ ] 055. Semantic Color Token을 사용하는가?
- [ ] 056. 직접 Hex와 RGBA가 새로 추가되지 않았는가?
- [ ] 057. Navy, White, Light Gray와 Gold 체계를 유지하는가?
- [ ] 058. Text와 Background Contrast가 기준을 충족하는가?
- [ ] 059. Non-text Control Contrast가 기준을 충족하는가?
- [ ] 060. Radius가 Component Token과 일치하는가?
- [ ] 061. Shadow가 Elevation 역할만 수행하는가?
- [ ] 062. Glow, Blob, Heavy Pattern과 과도한 Gradient가 없는가?
- [ ] 063. Divider가 콘텐츠보다 강조되지 않는가?
- [ ] 064. 상태가 Color만으로 전달되지 않는가?
- [ ] 065. Dark Background의 Text와 Focus가 명확한가?

### 5.7 Logo, Icon and Image

- [ ] 066. 공식 Logo Lockup을 변형하지 않았는가?
- [ ] 067. Logo Safe Area와 Ratio가 유지되는가?
- [ ] 068. Icon Style과 Stroke가 일관적인가?
- [ ] 069. Icon Size가 승인된 Small, Medium, Large 중 하나인가?
- [ ] 070. Icon이 Text를 불필요하게 대체하지 않는가?
- [ ] 071. 의미 있는 Icon에 Accessible Name 또는 Text가 있는가?
- [ ] 072. Image Tone이 Brand Guide와 일치하는가?
- [ ] 073. 과장된 Stock·AI Image가 없는가?
- [ ] 074. Image Aspect Ratio가 깨지지 않는가?
- [ ] 075. Responsive Crop에서 핵심 피사체가 유지되는가?
- [ ] 076. 의미 있는 Image에 적절한 Alt가 있는가?
- [ ] 077. 장식 Image가 Assistive Technology에서 제외되는가?
- [ ] 078. Asset Filename과 Directory가 Guide를 따르는가?
- [ ] 079. WebP, AVIF 또는 SVG의 적절한 Format인가?
- [ ] 080. Below-the-fold Image가 Lazy Loading되는가?

### 5.8 Component

- [ ] 081. 기존 Component로 해결 가능한지 먼저 확인했는가?
- [ ] 082. 새 Variant가 실제 의미 차이를 갖는가?
- [ ] 083. Component Anatomy가 Library와 일치하는가?
- [ ] 084. Default State가 정의되었는가?
- [ ] 085. Hover State가 정의되었는가?
- [ ] 086. Focus State가 정의되었는가?
- [ ] 087. Active/Pressed State가 정의되었는가?
- [ ] 088. Disabled State가 정의되었는가?
- [ ] 089. Loading State가 정의되었는가?
- [ ] 090. Error State가 정의되었는가?
- [ ] 091. Empty State가 정의되었는가?
- [ ] 092. Success State가 정의되었는가?
- [ ] 093. Component가 Page-specific Selector에 의존하지 않는가?
- [ ] 094. Public API와 Data Hook이 명확한가?
- [ ] 095. Dependency가 단방향인가?
- [ ] 096. 기존 Consumer에 Regression이 없는가?
- [ ] 097. Backward Compatibility가 검토되었는가?
- [ ] 098. Deprecated Alias의 Migration 계획이 있는가?
- [ ] 099. Component Version이 결정되었는가?
- [ ] 100. Usage와 Code Example이 문서화되었는가?

### 5.9 Pattern and Flow

- [ ] 101. 기존 Composition 또는 Pattern으로 해결 가능한가?
- [ ] 102. Pattern이 하나의 반복 User Problem을 해결하는가?
- [ ] 103. Page 하나를 위해 Pattern을 만들지 않았는가?
- [ ] 104. Entry, Progress, Completion과 Exit가 정의되었는가?
- [ ] 105. Loading, Empty, Error와 Recovery가 정의되었는가?
- [ ] 106. Back, Close와 Cancel의 결과가 명확한가?
- [ ] 107. Context와 Scroll Position이 필요한 경우 유지되는가?
- [ ] 108. Pattern 안의 Component 책임이 중복되지 않는가?
- [ ] 109. Mobile에서 동일한 Task Outcome을 제공하는가?
- [ ] 110. Pattern Name과 Owner가 명확한가?

### 5.10 CTA, Form and Interaction

- [ ] 111. 한 Context의 Primary CTA가 하나인가?
- [ ] 112. CTA가 정보 바로 아래에 있는가?
- [ ] 113. Button Label이 결과를 설명하는가?
- [ ] 114. Link와 Button Semantic이 구분되는가?
- [ ] 115. Form Label이 항상 보이는가?
- [ ] 116. Required와 Optional이 명확한가?
- [ ] 117. Helper가 Validation 기준을 미리 설명하는가?
- [ ] 118. Error가 Field 가까이에 표시되는가?
- [ ] 119. Error 후 입력값이 유지되는가?
- [ ] 120. Success가 완료와 다음 단계를 설명하는가?
- [ ] 121. Destructive Action에 필요한 Confirmation이 있는가?
- [ ] 122. 되돌릴 수 있는 Action에 Confirmation을 남용하지 않는가?
- [ ] 123. Click Target과 Cursor Feedback이 명확한가?
- [ ] 124. Touch Target이 최소 44px인가?
- [ ] 125. Nested Interactive Element가 없는가?

### 5.11 Motion

- [ ] 126. Motion Token을 사용하는가?
- [ ] 127. Motion이 정보보다 먼저 보이지 않는가?
- [ ] 128. Hover Duration이 공통 Rhythm과 맞는가?
- [ ] 129. Card Hover에 과도한 Scale이 없는가?
- [ ] 130. Button Transform이 최대 승인 범위인가?
- [ ] 131. Modal이 Backdrop Fade와 Subtle Scale을 사용하는가?
- [ ] 132. Layout Thrashing을 유발하는 Animation이 없는가?
- [ ] 133. transform과 opacity를 우선하는가?
- [ ] 134. `prefers-reduced-motion`을 지원하는가?
- [ ] 135. Motion 없이도 State와 Action을 이해할 수 있는가?

### 5.12 Responsive

- [ ] 136. 360px에서 정상인가?
- [ ] 137. 390px에서 정상인가?
- [ ] 138. 430px에서 정상인가?
- [ ] 139. 768px에서 정상인가?
- [ ] 140. 1024px에서 정상인가?
- [ ] 141. 1280px에서 정상인가?
- [ ] 142. 1440px에서 정상인가?
- [ ] 143. 1920px에서 정상인가?
- [ ] 144. Mobile Portrait에서 정상인가?
- [ ] 145. Mobile Landscape에서 정상인가?
- [ ] 146. Tablet Portrait에서 정상인가?
- [ ] 147. Tablet Landscape에서 정상인가?
- [ ] 148. Dynamic Viewport 변화에서 Hero와 Modal이 안정적인가?
- [ ] 149. Safe Area가 필요한 Device에서 Content가 가려지지 않는가?
- [ ] 150. Desktop, Tablet과 Mobile이 같은 Brand Experience를 제공하는가?

### 5.13 Accessibility

- [ ] 151. WCAG 2.2 AA 범위를 검토했는가?
- [ ] 152. Keyboard만으로 모든 기능을 사용할 수 있는가?
- [ ] 153. Tab Order가 Visual·Logical Order와 일치하는가?
- [ ] 154. Focus Indicator가 명확한가?
- [ ] 155. Sticky Header와 Modal에 Focus가 가려지지 않는가?
- [ ] 156. Modal에 Focus Trap이 있는가?
- [ ] 157. Modal Close 후 Trigger로 Focus가 돌아가는가?
- [ ] 158. ESC와 명시적 Close가 작동하는가?
- [ ] 159. Skip Link가 작동하는가?
- [ ] 160. Landmark가 올바른가?
- [ ] 161. Heading Structure가 논리적인가?
- [ ] 162. Form Label과 Input이 연결되는가?
- [ ] 163. Error가 Programmatically 연결되는가?
- [ ] 164. Name, Role과 Value가 전달되는가?
- [ ] 165. ARIA가 Native Semantic을 불필요하게 대체하지 않는가?
- [ ] 166. Screen Reader에서 동적 상태가 적절히 안내되는가?
- [ ] 167. Link Purpose가 명확한가?
- [ ] 168. 200% Text Zoom에서 기능 손실이 없는가?
- [ ] 169. 400% Zoom과 320px Reflow를 검토했는가?
- [ ] 170. Drag 없이 대체 Pointer Action이 있는가?

### 5.14 Content and SEO

- [ ] 171. Voice와 Tone이 Content System과 일치하는가?
- [ ] 172. 공식 Terminology를 사용하는가?
- [ ] 173. 과장과 보장 표현이 없는가?
- [ ] 174. 같은 문장이 여러 영역에 반복되지 않는가?
- [ ] 175. CTA가 실제 동작과 일치하는가?
- [ ] 176. Error가 문제와 복구 방법을 설명하는가?
- [ ] 177. Success가 후속 절차를 설명하는가?
- [ ] 178. 개인정보와 비밀유지 문구가 승인되었는가?
- [ ] 179. Title과 Meta Description이 고유한가?
- [ ] 180. H1과 Search Intent가 일치하는가?
- [ ] 181. Internal Link Text가 목적지를 설명하는가?
- [ ] 182. OG Metadata가 실제 Page와 일치하는가?
- [ ] 183. Page Language가 설정되는가?
- [ ] 184. Hard-coded Line Break가 Localization을 막지 않는가?
- [ ] 185. AI 생성 문구가 Human·Domain Review를 통과했는가?

### 5.15 Performance and Engineering

- [ ] 186. LCP Element가 확인되었는가?
- [ ] 187. LCP Asset이 최적화되고 우선순위가 적절한가?
- [ ] 188. Image Width와 Height가 예약되는가?
- [ ] 189. Font Loading이 Text 표시를 막지 않는가?
- [ ] 190. CLS를 만드는 동적 삽입이 없는가?
- [ ] 191. Interaction Handler가 INP를 악화시키지 않는가?
- [ ] 192. 불필요한 JavaScript가 추가되지 않았는가?
- [ ] 193. 중복 CSS와 Override가 추가되지 않았는가?
- [ ] 194. Console Error와 Warning이 없는가?
- [ ] 195. Network 404가 없는가?
- [ ] 196. Third-party Script가 필요한가?
- [ ] 197. Cache와 Compression이 배포 환경에서 적용되는가?
- [ ] 198. Lazy Loading이 Above-the-fold에 잘못 적용되지 않았는가?
- [ ] 199. Layout 측정과 변경이 반복되지 않는가?
- [ ] 200. Baseline 대비 Bundle·Asset 증가가 기록되었는가?

### 5.16 Documentation and Release

- [ ] 201. 관련 Design Bible Chapter를 확인했는가?
- [ ] 202. Design System 변경이 문서화되었는가?
- [ ] 203. Component Library가 업데이트되었는가?
- [ ] 204. Asset Guide와 Registry가 업데이트되었는가?
- [ ] 205. Content System과 Terminology가 업데이트되었는가?
- [ ] 206. Pattern Source가 업데이트되었는가?
- [ ] 207. Decision Log가 필요한 변경인가?
- [ ] 208. Design Debt가 발생하면 등록했는가?
- [ ] 209. Risk와 Mitigation이 기록되었는가?
- [ ] 210. Version과 Migration이 결정되었는가?
- [ ] 211. Changelog가 업데이트되었는가?
- [ ] 212. TODO가 현재 상태와 일치하는가?
- [ ] 213. QA Evidence가 저장되었는가?
- [ ] 214. Rollback Plan이 있는가?
- [ ] 215. Release Owner와 Monitoring Owner가 지정되었는가?

### 5.17 Review Result

- **PASS**: 모든 필수 항목과 Evidence 충족
- **Minor Revision**: 제한된 Non-critical Issue, 수정 후 관련 QA와 Regression 재수행
- **Major Revision**: User Flow·Shared Consumer·Accessibility·구조 문제, Plan과 영향 범위 재검토
- **REJECT**: 방향·Architecture·Safety 충돌 또는 현재 접근으로 해결 불가

Minor Revision과 Major Revision은 Release할 수 없다. Project Owner 승인 단계에는 최종 PASS만 전달한다.

### 5.18 PM Notes

215개 항목을 모두 매번 수행하는 것이 목적이 아니다. 변경의 Scope와 Risk에 맞는 항목을 선택하되, `N/A`는 이유를 기록한다. Shared Token, Header, Modal, Form과 Valuation 변경은 전체 Checklist를 기본으로 한다.

---

## 6. Implementation Review

### 6.1 Purpose

Implementation Review는 Design Screenshot과 비슷한지만 확인하지 않는다. 구조, State, 반응형, 접근성, 성능, 재사용성과 유지보수성을 함께 검증한다.

### 6.2 Required Evidence

- 변경 파일 목록
- Scope 요약
- Before/After Screenshot
- Desktop·Tablet·Mobile Screenshot
- State Screenshot 또는 Video
- Keyboard Flow 결과
- Automated Check 결과
- Console과 Network 결과
- Performance Baseline 비교
- Documentation Diff

### 6.3 HTML

- Semantic Element 우선
- Heading과 Landmark 구조
- Button과 Link 역할 구분
- Label/Input 연결
- 유효한 ID와 ARIA 관계
- 중복 Modal DOM 금지
- `href="#"` 금지
- 의미 없는 Wrapper 최소화

### 6.4 CSS

- Foundation → Semantic → Component Token
- Page-specific Typography Override 금지
- 직접 Color, Font Size, Spacing과 Shadow 추가 금지
- 동일 Selector 중복 최소화
- Breakpoint 중복 금지
- Specificity 상승으로 문제 숨기기 금지
- 빈 Rule과 미사용 Legacy Rule 제거
- `!important`는 승인된 Utility 외 금지

### 6.5 JavaScript

- Component 책임 분리
- 중복 Event Listener 금지
- 초기화가 여러 번 실행되어도 안전
- DOM 부재 시 오류 없음
- Keyboard와 Pointer 동등 지원
- Focus Management
- State와 ARIA 동기화
- Error Handling과 Cleanup
- Calculation Engine과 Presentation 분리

### 6.6 Functional States

반드시 확인:

- Initial
- Hover
- Focus
- Active
- Disabled
- Loading
- Empty
- Error
- Success
- Close/Cancel
- Retry

### 6.7 Regression

변경한 Component의 모든 Consumer를 검색한다. 한 Page에서만 확인하지 않는다.

공통 Header 변경 예:

- Home
- About
- 모든 Service Detail
- Business Valuation
- 모든 Insight
- Mobile Navigation
- Modal Brand Area

### 6.8 Data and Security

- 공개 UI에 내부 설정값 노출 없음
- 개인정보를 Console, URL과 Local Storage에 기록하지 않음
- Prototype와 Production Flag 구분
- Form의 실제 전송 상태와 Success 문구 일치
- 사용자 입력을 HTML로 주입하지 않음

### 6.9 Work Completion Report

완료 보고에는 다음을 포함한다.

- Outcome
- 변경 파일
- 변경하지 않은 보호 영역
- Test Matrix
- Known Limitation
- Documentation
- Release/Commit 여부

### 6.10 Anti-pattern

- CSS를 마지막에 덧붙여 Cascade로 해결
- Browser 한 개에서만 확인
- `작동함`만 보고 State QA 생략
- 자동 검사 통과를 Visual QA로 간주
- 사용자의 기존 변경을 덮어씀

---

## 7. Responsive QA

### 7.1 Experience Principle

- Desktop: Information First
- Tablet: Reading First
- Mobile: Action First

Responsive는 Desktop 축소가 아니라 동일한 Task Outcome을 Device에 맞게 제공하는 것이다.

### 7.2 Required Viewports

| Class | Viewport |
|---|---|
| Mobile Small | 360 × 800 |
| Mobile Standard | 390 × 844 |
| Mobile Large | 430 × 932 |
| Tablet Portrait | 768 × 1024 |
| Tablet Landscape | 1024 × 768 |
| Laptop | 1280 × 800 |
| Desktop | 1440 × 900 |
| Wide Desktop | 1920 × 1080 |

Height는 대표값이며 Dynamic Browser UI와 Content Overflow도 확인한다.

### 7.3 Browser Matrix

- Windows: Chrome, Edge
- macOS: Safari, Chrome
- iOS: Safari, 가능한 경우 KakaoTalk In-app Browser
- Android: Chrome, Samsung Internet, 가능한 경우 KakaoTalk In-app Browser

모든 조합을 매 Release마다 물리 Device로 확인할 수 없으면 Risk 기반 대표 Matrix와 Remote Test를 기록한다.

### 7.4 Header

- Logo와 Menu 충돌 없음
- Desktop Navigation과 Mobile Menu 전환 지점 안정
- Dropdown에서 Pointer Gap 없음
- Mobile Accordion Touch 동작
- Header Height와 Sticky Offset 일치
- 200% Zoom에서 Menu 접근 가능

### 7.5 Hero

- 핵심 Headline 우선
- Mobile에서 CTA가 첫 화면에 접근 가능
- 100vh 고정 의존 없음
- `dvh`와 Fallback
- Background Crop와 Overlay 안정
- Scroll Cue가 Content를 가리지 않음

### 7.6 Cards and Grid

- Desktop 3열, Tablet 2열, Mobile 1열 원칙
- 같은 Row 높이
- Mobile Auto Height
- 긴 제목과 Description에서 Overflow 없음
- Link와 Touch Target 접근 가능

### 7.7 Modal

- Mobile Margin과 Safe Area
- 내부 Scroll
- Background Scroll Lock
- Keyboard 표시 시 Field 접근 가능
- Close Button 고정과 가시성
- Orientation 전환 후 Layout 복구

### 7.8 Forms

- Mobile 1열
- Input Zoom 방지보다 충분한 가독성 우선
- Native Picker 접근
- Error가 Viewport 밖에 숨지 않음
- Submit Button Touch Target

### 7.9 Pass Criteria

- Horizontal Scroll 없음
- Content Loss 없음
- Primary Task 완료 가능
- Touch Target 충돌 없음
- Orientation 전환 후 State 유지
- Browser UI 높이 변화로 Layout Jump 없음

### 7.10 PM Notes

Screenshot만으로 In-app Browser와 Virtual Keyboard 문제를 검증할 수 없다. 상담과 사전진단 Modal은 실제 Touch·Scroll·Keyboard Test를 필수로 한다.

---

## 8. Accessibility QA

### 8.1 Standard

기본 목표는 WCAG 2.2 Level AA다. EQUIV 내부 기준이 더 엄격하면 내부 기준을 따른다.

### 8.2 Contrast

- 일반 Text: 최소 4.5:1
- Large Text: 최소 3:1
- UI Component와 Meaningful Graphic: 최소 3:1
- Focus Indicator: 인접 색과 충분한 대비
- Logo는 WCAG 예외가 가능하지만 Brand Guideline 가시성을 유지

### 8.3 Keyboard

- 모든 Interactive Element Tab 접근
- Logical Focus Order
- Enter와 Space Activation
- ESC Close
- Arrow Key가 필요한 Pattern에 표준 동작
- Keyboard Trap 없음
- Skip Link

### 8.4 Focus

- Focus Visible 제거 금지
- Sticky Header에 Focus가 가려지지 않음
- Modal Open 시 적절한 첫 Focus
- Modal Close 시 Trigger Return
- Dropdown Close 후 Parent Focus 유지
- Validation 후 첫 Error로 안내

### 8.5 Semantics and ARIA

- Native HTML 우선
- Landmark와 Heading
- Accessible Name
- Name, Role, Value
- `aria-expanded`, `aria-controls`, `aria-current`
- `aria-live`와 `role=status/alert`의 절제된 사용
- Hidden Content가 Focus되지 않음

ARIA를 추가했다고 접근 가능한 Component가 되는 것은 아니다.

### 8.6 Screen Reader

대표 Test:

- Windows Chrome + NVDA
- macOS/iOS Safari + VoiceOver

확인:

- Page Title과 H1
- Navigation
- Dropdown/Accordion
- Form Label과 Error
- Modal Entry/Exit
- Loading/Success
- Valuation Result와 Confidence

### 8.7 Touch and Pointer

- EQUIV Touch Target 최소 44 × 44px
- Target 간 충분한 간격
- Hover-only Action 금지
- Drag의 대체 방법
- Pointer Cancellation

### 8.8 Zoom and Reflow

- Text 200%에서 Content와 기능 손실 없음
- 400% Zoom/320px Width에서 핵심 Content Reflow
- Modal과 Table에 필요한 Scroll Strategy
- Fixed Height로 Text 잘림 금지

### 8.9 Media and Motion

- Image Alt
- Decorative Image 제외
- Video Caption과 Transcript
- Reduced Motion
- Auto-play 금지 또는 Control
- Flash 기준 준수

### 8.10 Forms and Errors

- Placeholder가 Label을 대체하지 않음
- Required가 Programmatically 전달
- Error Text와 Field 연결
- Error Prevention for Legal, Financial and Data Action
- 입력 반복 최소화
- Authentication이 도입되면 Accessible Authentication 검토

### 8.11 Release Blockers

- Keyboard로 주요 Task 불가
- Focus Trap
- Label 없는 Form
- Accessible Name 없는 주요 Action
- Contrast Critical Failure
- Screen Reader에서 Modal/Result 이해 불가
- 200% Zoom에서 Content Loss

### 8.12 PM Notes

자동 Accessibility Scan은 누락 탐지 도구다. Keyboard, Focus, Screen Reader, Zoom과 실제 Task Test를 대체하지 않는다.

---

## 9. Performance QA

### 9.1 Core Web Vitals

Field Data 75th Percentile에서:

| Metric | Good | Needs Improvement | Poor |
|---|---:|---:|---:|
| LCP | ≤ 2.5s | 2.5–4.0s | > 4.0s |
| INP | ≤ 200ms | 200–500ms | > 500ms |
| CLS | ≤ 0.1 | 0.1–0.25 | > 0.25 |

Lab Data는 문제 진단에 사용하고 Field Data를 대체하지 않는다.

### 9.2 Lighthouse Targets

대표 Mobile Test에서 권장:

- Performance 90+
- Accessibility 95+
- Best Practices 95+
- SEO 95+

점수 하나보다 Regression 원인과 실제 User Metric을 우선한다.

### 9.3 LCP

- LCP Element 식별
- Hero Image 적절한 크기
- Above-the-fold Lazy Loading 금지
- 필요한 Preload 또는 Priority
- Render-blocking Resource 최소화
- Server와 Cache 환경 확인

### 9.4 INP

- Long Task 확인
- Event Handler 최소화
- 중복 Listener 제거
- 큰 DOM Update 분할
- Modal Open과 Form Validation 반응성
- Third-party Script 영향

### 9.5 CLS

- Image와 Video Dimension 예약
- Font Swap 영향
- 동적 Banner와 Error 공간
- Late Style Injection 금지
- Loading에서 Skeleton과 Result 크기 전환 확인

### 9.6 Asset

- WebP/AVIF/SVG 우선
- Responsive `srcset`와 `sizes`
- Below-the-fold Lazy Loading
- 적정 Compression
- 중복 Asset 제거
- Logo와 Icon 선명도

### 9.7 Font

- 필요한 Weight만 Load
- `font-display` 전략
- Preload 남용 금지
- Fallback Metric 차이 검토
- External Font Failure에서 가독성 유지

### 9.8 CSS

- 중복 Rule과 Override 제거
- Critical Path 확인
- 미사용 CSS 감사
- 비싼 Selector와 Layout Animation 최소화
- Source Order 명확

### 9.9 JavaScript

- 기능별 Component Scope
- 불필요한 Library 금지
- Deferred Loading
- Main Thread Blocking 최소화
- Error와 Retry 처리
- 이벤트 Cleanup

### 9.10 Budget and Regression

절대 Budget이 없으면 현재 Production Baseline을 기준으로 한다.

- JS, CSS, Image와 Font 증가량 기록
- 단일 변경으로 10% 이상 증가 시 PM·Performance Review
- CWV Good에서 Needs Improvement로 회귀하면 Release Block
- Lighthouse 5점 이상 하락 시 원인과 승인 필요

수치는 맥락 없이 Quality를 보장하지 않는다.

### 9.11 Measurement Conditions

- 동일 Device Profile
- 동일 Network Throttling
- Cache Cold/Warm 구분
- 최소 3회 Median
- Test Date와 Tool Version 기록
- Production Field Data 별도 확인

### 9.12 PM Notes

Performance 개선을 위해 Content, 접근성 Label 또는 기능을 삭제하지 않는다. 원인은 Asset, Loading, Architecture와 Runtime에서 해결한다.

---

## 10. Visual Consistency QA

### 10.1 Token Audit

Color, Typography, Spacing, Container, Grid, Radius, Shadow, Motion과 Z-index는 Single Source of Truth를 사용한다.

### 10.2 Cross-page Comparison

다음 화면을 동일 Viewport에서 비교한다.

- Home
- About
- Service Detail 5개
- Business Valuation
- Insight 4개
- Consultation Modal
- Valuation Modal
- Footer

### 10.3 Optical Review

수치가 같아도 시각적 정렬이 다를 수 있다. Logo, Menu, CTA, Icon과 Text Baseline은 실제 화면에서 Optical Balance를 검토한다.

### 10.4 Screenshot Regression

- Baseline Screenshot 저장
- 동일 Viewport와 State
- Diff 확인
- 의도된 변경과 Regression 구분
- Anti-aliasing 차이는 수동 검토

### 10.5 Visual Blockers

- Brand Logo 변형
- 승인되지 않은 Color
- Page별 다른 Typography Scale
- Layout Shift
- 잘린 Text
- 겹친 Component
- Mobile Horizontal Scroll
- Focus 보이지 않음

### 10.6 PM Notes

Pixel-perfect는 목적이 아니다. System-perfect, 즉 역할과 Token이 일관되고 사용자 Task가 안정적인지가 목적이다.

---

## 11. Content QA

### 11.1 Source

`CONTENT_UX_WRITING_SYSTEM.md`의 Voice, Tone, Terminology, Claims와 State Message 규칙을 따른다.

### 11.2 Review

- 존댓말과 문장 종결
- 결론 우선
- 공식 서비스명
- 과장과 보장 금지
- 같은 의미 반복 제거
- CTA Action 명확
- Error와 Recovery
- Success와 Next Step
- 개인정보와 Confidential
- SEO Title, Description과 H1
- Accessible Link와 Icon Name
- Translation Readiness

### 11.3 Cross-source Consistency

같은 서비스 문구가 HTML, Modal JavaScript, CTA와 Footer에 중복되면 최신 승인 문구 또는 공통 Data Source로 통일한다.

### 11.4 Domain Review

Valuation, 시장 수치, 거래사례, 법률·회계 표현은 Source, 기준일과 Reviewer를 기록한다.

### 11.5 Content Blockers

- 결과 보장
- Source 없는 실적과 수치
- 정식 기업가치평가로 오인
- 개인정보 사용 목적 불명
- Error 복구 방법 없음
- CTA와 실제 Action 불일치
- 접근 가능한 이름 없음

---

## 12. Component QA

### 12.1 New Component Gate

신규 Component 요청은 다음 순서로 검토한다.

1. 기존 Component 재사용
2. 기존 Composition
3. 승인된 Variant
4. Variant 확장
5. 신규 Component Proposal

### 12.2 Proposal Requirements

- User Problem
- Existing Gap
- Expected Consumers
- Anatomy
- Variants
- States
- Responsive
- Accessibility
- Content
- Dependency
- Token
- Performance
- Version
- Migration
- Owner

### 12.3 Review

- Component Library Template 완성
- Design와 Code API 일치
- 모든 State
- Keyboard와 Screen Reader
- Consumer Regression
- Story/Example 또는 실제 Test Page
- Documentation

### 12.4 Version

- Patch: Visual/Code Bug Fix, Contract 유지
- Minor: Backward-compatible Variant 또는 기능
- Major: Breaking API, Anatomy 또는 Behavior

### 12.5 Dependency

Atom은 Organism에 의존하지 않는다. Shared Component는 Page-specific Selector와 Domain Engine을 직접 참조하지 않는다.

### 12.6 Backward Compatibility

Breaking Change는:

- Consumer Inventory
- Migration Guide
- Compatibility Alias
- Deprecation 기간
- Owner와 Deadline
- Rollback

을 필요로 한다.

### 12.7 Approval

Shared Component의 Major 변경은 PM, Design System Owner, Engineering, Accessibility와 주요 Consumer Owner 승인이 필요하다.

### 12.8 PM Notes

단일 화면의 차이를 새 Component로 만들지 않는다. Content, Layout Context 또는 기존 Variant로 해결 가능한지 먼저 확인한다.

---

## 13. Pattern QA

### 13.1 Definition

Pattern은 반복되는 User Problem을 해결하기 위해 여러 Component, Content와 Interaction을 조합한 검증된 Flow다.

### 13.2 Current Pattern Sources

- Service Detail: `SERVICE_PAGE_TEMPLATE.md`
- Consultation Flow: Shared Consultation Modal
- Business Valuation: Lead Page → Modal → Result → Consultation
- Navigation: Desktop Dropdown → Mobile Accordion
- Insight Article: Category → Article → Related Action

### 13.3 New Pattern Proposal

필수:

- 반복 User Problem
- 최소 2개 이상의 예상 Consumer
- Entry와 Exit
- Happy Path
- Alternate Path
- Loading, Empty, Error와 Recovery
- Responsive Behavior
- Accessibility
- Content Contract
- Component Dependency
- Analytics
- Version과 Owner

### 13.4 Pattern Review

- 기존 Pattern과 중복 여부
- Component 역할 침범 여부
- Page Role 일치
- 사용자 상태와 Task 연속성
- Back/Close/Cancel 결과
- Mobile Action Priority
- Failure Recovery
- Documentation와 Example

### 13.5 Pattern Conflict

두 Pattern이 같은 문제를 다르게 해결하면 새 Pattern을 추가하지 않는다. Evidence, Consumer, Migration과 통합안을 Decision Log에서 검토한다.

### 13.6 Version

Pattern의 순서, 필수 Step 또는 완료 결과가 바뀌면 Major 후보로 본다. Copy와 Optional 설명 추가는 Minor 또는 Patch가 가능하다.

### 13.7 Future Pattern Library

독립 `PATTERN_LIBRARY.md`가 생성되면 Pattern Inventory, Status, Version, Dependency와 QA Evidence를 이전한다. Design Bible과 본 Governance 문서는 상위 Rule과 Gate만 유지한다.

### 13.8 PM Notes

Pattern은 Page Template보다 넓고 Component보다 목적 중심이다. 단순 Section 순서나 화면 복사본을 Pattern이라고 부르지 않는다.

---

## 14. Documentation Governance

### 14.1 Documentation Is Part of the Product

문서와 구현이 다르면 구현만 잘못된 것이 아니다. 운영 System 전체가 불완전한 상태다. Documentation은 Release Gate의 필수 Deliverable이다.

### 14.2 Update Matrix

| Change | Required Documents |
|---|---|
| Brand Principle, Logo | Design Bible, Brand Guide, Asset Guide, Changelog |
| Token | Design System, Component Library, Changelog |
| Component | Component Library, Design System, Changelog, Migration |
| Pattern | Pattern Source, Component Library, Changelog, Decision Log |
| Asset | Visual Asset Guide/Registry, Brand Guide, Changelog |
| Content/Terminology | Content System, Copy Guide, Consumers, Changelog |
| Page Role | Master Spec, Design Bible, Page Template, Changelog |
| Responsive | Design Bible, Design System, Component/Pattern Docs |
| Accessibility | Component/Pattern Docs, QA Evidence, Changelog |
| Performance Budget | Governance, Decision Log, Changelog |
| Breaking Change | All affected Docs, Migration, Decision Log, Changelog |

### 14.3 Core Documents

- `EQUIV_DESIGN_BIBLE.md`: 변경이 드문 상위 철학
- `DESIGN_SYSTEM.md`: Token Source
- `COMPONENT_LIBRARY.md`: Component Contract
- `VISUAL_ASSET_GUIDE.md`: Asset Governance
- `CONTENT_UX_WRITING_SYSTEM.md`: Content Governance
- `DESIGN_QA_GOVERNANCE.md`: Review와 Release Governance
- `SERVICE_PAGE_TEMPLATE.md`: 현재 Service Pattern
- `DECISION_LOG.md`: 주요 Decision History
- `CHANGELOG.md`: 배포된 변경
- `TODO.md`: 계획과 미해결 상태

### 14.4 Pattern Library

독립 Pattern Library가 없는 동안 존재하지 않는 문서를 필수 Update로 표시하지 않는다. 현재 Pattern Source에 기록하고, Pattern이 3개 이상의 반복 Consumer 또는 독립 Version 필요성을 가지면 생성 Proposal을 검토한다.

### 14.5 Decision Log Update

다음 변경은 Decision Log가 필요하다.

- Design Bible Principle
- Breakpoint, Typography Scale과 Shared Token
- New Component/Pattern
- Breaking Change
- Quality Threshold
- Browser Support
- Accessibility Exception
- Performance Regression Acceptance
- Brand Asset 변경
- Deprecated 또는 Migration

### 14.6 Changelog

Changelog는 무엇이 바뀌었는지뿐 아니라 사용자·System 영향, 보호된 기능과 Migration을 기록한다. 아직 Release되지 않은 Draft는 Released Change처럼 쓰지 않는다.

### 14.7 Document Status

- Draft
- Approved Draft
- Approved
- Deprecated
- Archived

Owner, Version과 Last Review Date를 권장한다.

### 14.8 Audit

Quarterly Audit:

- Broken Reference
- 문서와 Code Class/API 불일치
- Deprecated 사용
- TODO와 실제 상태
- Changelog 누락
- Owner 없는 규칙
- 중복 또는 충돌 기준

### 14.9 Anti-pattern

- Code만 수정
- 동일 규칙을 여러 문서에 복제
- 존재하지 않는 Component를 Active로 문서화
- TODO를 완료 기록으로 사용
- Changelog를 작업 일지로 과도하게 상세화

---

## 15. Version Management

### 15.1 Semantic Versioning

`MAJOR.MINOR.PATCH`

### 15.2 Major

다음 중 하나:

- Breaking Component API
- Token Role 제거 또는 의미 변경
- Pattern 필수 Flow 변경
- Page Architecture 변경
- Brand Identity 변경
- Governance Gate 또는 지원 Platform의 중대한 변경

Requirements:

- Proposal
- Decision Log
- Migration Guide
- Consumer Inventory
- Deprecation 기간
- Release Note
- Rollback

### 15.3 Minor

- Backward-compatible Component Variant
- 새 Token 또는 Pattern 추가
- 새로운 QA Rule
- 지원 Browser/Device 추가
- 기능 확장

### 15.4 Patch

- Bug Fix
- 오탈자
- 문서 명확화
- Contract를 바꾸지 않는 Visual Correction
- 접근성 Fix

접근성 Fix가 Consumer Behavior를 바꾸면 Minor 또는 Major가 될 수 있다.

### 15.5 Migration

Migration Plan:

1. Previous
2. New
3. Reason
4. Affected Consumers
5. Compatibility
6. Migration Steps
7. Owner
8. Deadline
9. Validation
10. Removal Version

### 15.6 Deprecated

- 신규 사용 금지
- 대체 항목 제공
- Warning 또는 Documentation 표시
- Consumer 추적
- 기한과 Owner
- 제거 전 Regression

### 15.7 Version Alignment

Design Documentation, CSS Token과 JavaScript Component Version이 서로 다른 의미를 갖지 않게 한다. 모든 문서의 Version을 억지로 동일하게 만들 필요는 없지만 Dependency를 기록한다.

### 15.8 PM Notes

File 이름 뒤에 `final-final-v2`를 붙이는 것은 Version 관리가 아니다. Git History, Document Header, Changelog와 Migration을 사용한다.

---

## 16. Design Debt

### 16.1 Definition

Design Debt는 승인된 System과 현재 구현 사이의 차이로 인해 사용성, 일관성, 접근성, 성능 또는 변경 비용이 증가하는 상태다.

### 16.2 Causes

- 일정 압박으로 임시 Override
- Page-specific Component
- 중복 Pattern
- 오래된 Token Alias
- 미완성 Responsive State
- 접근성 예외
- 문서 누락
- Deprecated Consumer 미이전
- Asset 중복
- Copy와 Terminology 불일치

### 16.3 Classification

| Level | 의미 | Response |
|---|---|---|
| D0 Critical | Task 불가, 법률·접근성·브랜드 중대 위험 | 즉시 Block/Hotfix |
| D1 High | Shared Component, 다수 Page 또는 성능 영향 | 다음 Sprint 우선 |
| D2 Medium | 일관성·유지보수 저하 | 계획된 개선 |
| D3 Low | Cosmetic 또는 문서 경미한 차이 | Backlog |

### 16.4 Register

필수 Field:

- Debt ID
- 발견일
- Component/Pattern/Page
- Description
- Cause
- User/System Impact
- Level
- Workaround
- Owner
- Target Sprint
- Resolution

### 16.5 Prioritization

우선순위:

1. 접근성, 개인정보와 기능 Blocker
2. Shared Component와 Pattern
3. 다수 Consumer Regression
4. Performance
5. 문서와 Migration
6. Cosmetic

### 16.6 Debt Budget

Sprint마다 Debt Review를 수행한다. 신규 기능으로 Debt가 증가하면 해결 계획 없이 `Done`으로 종료하지 않는다.

### 16.7 Anti-pattern

- `나중에`만 기록
- Owner와 Target 없음
- 같은 Debt를 여러 TODO에 중복
- Debt를 이유로 새 Component 생성
- Cosmetic Issue와 Critical A11y를 같은 Priority로 처리

### 16.8 PM Notes

Design Debt를 모두 즉시 없애는 것이 목표가 아니다. 위험과 비용을 가시화하고 의도적으로 관리하는 것이 목표다.

---

## 17. Change Management

### 17.1 Flow

`Proposal → Impact Review → Approval → Implementation → QA → Release → Documentation → Monitoring`

### 17.2 Proposal

- Problem
- Evidence
- User
- Scope/Non-scope
- Alternatives
- Existing System Gap
- Expected Impact
- Risk
- Version
- Rollback

### 17.3 Impact Review

검토 대상:

- Brand
- Page Architecture
- Token
- Component
- Pattern
- Content
- Accessibility
- Responsive
- Performance
- Data/Privacy
- SEO
- Documentation

### 17.4 Approval Level

| Change | Minimum Approval |
|---|---|
| Patch | PM + Owner |
| Minor | PM + Design/Engineering + affected Reviewer |
| Major | PM + System Owner + Engineering + QA + required Domain/Legal |
| Critical Hotfix | PM + Engineering + QA, 이후 사후 Review |

### 17.5 Implementation

Approved Proposal의 Scope를 따른다. 구현 중 새로운 문제로 Scope가 달라지면 변경을 숨기지 말고 Re-review한다.

### 17.6 Release

Version, Changelog, Migration, QA Evidence와 Rollback을 포함한다.

### 17.7 Change Freeze

Release Candidate 이후에는 Blocker Fix만 허용한다. 추가 개선은 다음 Version으로 이동한다.

### 17.8 PM Notes

작은 CSS 값 하나도 Shared Token이면 Major 영향 범위를 가질 수 있다. 변경 파일 수가 아니라 Consumer와 User Risk로 분류한다.

---

## 18. Decision Management

### 18.1 Purpose

Decision Log는 무엇을 했는지가 아니라 왜 선택했고 무엇을 포기했는지 기록한다. 같은 논의를 반복하지 않고 변경의 배경을 보존한다.

### 18.2 Decision ID

Format:

`DQ-YYYY-NNN`

예:

`DQ-2026-001`

### 18.3 Required Fields

- Decision ID
- Title
- Date
- Status
- Context
- Problem
- Decision
- Reason
- Alternatives
- Impact
- Risks
- Affected Docs/Components
- Version
- Approval
- Review Date
- History

### 18.4 Status

- Proposed
- Accepted
- Superseded
- Deprecated
- Rejected

### 18.5 Decision Threshold

Decision Log가 필요한 경우는 14.5를 따른다. 단순 Bug Fix는 Changelog로 충분할 수 있다.

### 18.6 Alternatives

최소한 `변경하지 않음`을 Alternative로 검토한다. 선택하지 않은 대안과 이유를 한두 문장으로 기록한다.

### 18.7 Supersede

기존 Decision을 삭제하거나 덮어쓰지 않는다. 새 Decision ID에서 이전 ID를 참조하고 상태를 Superseded로 바꾼다.

### 18.8 History

Decision의 본문은 당시 기준을 보존한다. 사후 변경은 History에 날짜와 이유를 추가한다.

### 18.9 PM Notes

Decision Log를 모든 사소한 수정의 회의록으로 만들지 않는다. 장기적으로 다시 논의될 가능성이 있는 System Decision에 집중한다.

---

## 19. Risk Management

### 19.1 Risk Categories

- Brand Damage
- UI Inconsistency
- Accessibility Failure
- Performance Regression
- Functional Failure
- Privacy/Legal
- Documentation Drift
- Component Duplication
- Pattern Conflict
- Browser/Device Compatibility
- SEO
- Data/Calculation

### 19.2 Scoring

Likelihood 1–5 × Impact 1–5

| Score | Level | Action |
|---:|---|---|
| 15–25 | Critical | Release Block |
| 8–14 | High | Mitigation + PM Approval |
| 4–7 | Medium | Owner와 Monitoring |
| 1–3 | Low | Record |

Privacy, 법률, 계산과 접근성 Blocker는 Score와 무관하게 Release Block이 될 수 있다.

### 19.3 Risk Record

- Risk ID
- Category
- Description
- Trigger
- Likelihood
- Impact
- Score
- Mitigation
- Contingency
- Owner
- Status
- Review Date

### 19.4 Key Controls

| Risk | Preventive Control | Detective Control |
|---|---|---|
| Brand 훼손 | Brand Guide, Logo Asset Lock | Cross-page Visual QA |
| UI 불일치 | Token/Component First | Screenshot Regression |
| 접근성 | A11y Spec in Design | Keyboard/Screen Reader |
| 성능 | Budget and Asset Rule | CWV/Lighthouse |
| 문서 누락 | Update Matrix | Quarterly Audit |
| Component 중복 | Proposal Audit | Inventory Review |
| Pattern 충돌 | Pattern Gate | Consumer Flow Review |

### 19.5 Risk Acceptance

Risk Acceptance에는 Owner, Business Reason, 기간, Monitoring과 해결 계획이 필요하다. `시간 부족`만으로 Critical Risk를 승인하지 않는다.

### 19.6 PM Notes

Risk Register는 문제를 숨기지 않고 의사결정을 돕는 도구다. 기록된 Risk가 있다는 이유만으로 실패가 아니며, Owner 없는 Risk가 운영 실패다.

---

## 20. Release Process

### 20.1 Lifecycle

`Release Candidate → QA → Approval → Production → Monitoring → Issue → Hotfix → Documentation → Next Sprint`

### 20.2 Release Candidate

조건:

- Scope Freeze
- Version Assigned
- QA Evidence Complete
- Blocker 0
- Known Issue Recorded
- Documentation Draft Complete
- Rollback Ready

### 20.3 Final Release Checklist

- [ ] Approved Brief와 Scope가 일치하는가?
- [ ] 모든 Acceptance Criteria가 통과했는가?
- [ ] Design QA가 완료되었는가?
- [ ] Functional QA가 완료되었는가?
- [ ] Responsive QA가 완료되었는가?
- [ ] Accessibility QA가 완료되었는가?
- [ ] Performance QA가 완료되었는가?
- [ ] Content와 SEO QA가 완료되었는가?
- [ ] Regression QA가 완료되었는가?
- [ ] Blocker가 0개인가?
- [ ] High Issue가 승인 또는 해결되었는가?
- [ ] Browser Matrix 결과가 있는가?
- [ ] Actual Device Test가 필요한 Flow에서 완료되었는가?
- [ ] Console Error가 없는가?
- [ ] Network 404가 없는가?
- [ ] Form, Modal과 CTA가 정상인가?
- [ ] Keyboard와 Focus가 정상인가?
- [ ] Screen Reader 대표 Flow가 정상인가?
- [ ] CWV/Lighthouse Regression이 없는가?
- [ ] 개인정보와 Legal Review가 완료되었는가?
- [ ] Calculation Engine 보호가 확인되었는가?
- [ ] Version이 지정되었는가?
- [ ] Changelog가 작성되었는가?
- [ ] 관련 Documentation이 업데이트되었는가?
- [ ] Decision Log가 필요한 경우 작성되었는가?
- [ ] Migration이 필요한 경우 준비되었는가?
- [ ] Deprecated Consumer가 추적되는가?
- [ ] Rollback Plan이 검증되었는가?
- [ ] Release Owner가 지정되었는가?
- [ ] Monitoring Owner와 기간이 정해졌는가?

### 20.4 Approval

PM은 QA Report, Open Risk, Documentation, Migration과 Rollback을 검토하고 다음 중 하나를 결정한다.

- Ready for Owner Approval — PASS
- Not Ready — Minor Revision
- Not Ready — Major Revision
- Rejected

Production Release는 PASS와 Project Owner 최종 승인이 모두 있을 때만 가능하다.

### 20.5 Production

- 승인된 Version만 배포
- 배포 시각과 Actor 기록
- Production Config 확인
- Smoke Test 즉시 수행

### 20.6 Monitoring

Release 후:

- 주요 Page 접근
- Navigation
- Consultation
- Business Valuation
- Error Log
- CWV
- Form Completion
- Support Report

### 20.7 Rollback

Critical Issue가 있으면 수정 가능성을 기다리지 않고 Rollback 기준을 적용한다.

Rollback Trigger:

- 주요 Task 불가
- 개인정보 노출
- 계산 결과 오류
- Navigation 전체 장애
- Critical Accessibility
- Severe Performance Regression

### 20.8 PM Notes

Release는 파일 업로드가 아니라 승인된 Quality State를 Production으로 이동하는 과정이다.

---

## 21. Work Implementation Rules

### 21.1 Sprint Completion Flow

모든 Sprint 종료 시 다음을 수행한다.

`Design QA → Responsive QA → Accessibility QA → Performance QA → Documentation Update → CHANGELOG Update → PM Review → Project Owner Approval → Authorized Commit·Release`

Git Commit과 Release는 프로젝트 권한과 사용자의 명시적 승인 범위 안에서 수행한다. 승인 전에는 Commit 또는 Production Release를 완료했다고 보고하지 않는다.

### 21.2 Before Work

Work는 다음 문서를 확인한다.

1. `EQUIV_AI_OPERATING_MANUAL.md`
2. `AI_RULES.md`
3. `MASTER_SPEC.md`
4. `EQUIV_DESIGN_BIBLE.md`
5. `BRAND_GUIDE.md`
6. `CONTENT_UX_WRITING_SYSTEM.md`
7. `DESIGN_SYSTEM.md`
8. `COMPONENT_LIBRARY.md`
9. 현재 Pattern Source
10. `VISUAL_ASSET_GUIDE.md`
11. `DESIGN_QA_GOVERNANCE.md`
12. Task 관련 전문 문서
13. `DECISION_LOG.md`
14. `CHANGELOG.md`
15. `TODO.md`

현재 독립 `PATTERN_LIBRARY.md`는 없으므로 Pattern Source는 `COMPONENT_LIBRARY.md`의 Composition·Page Map과 `SERVICE_PAGE_TEMPLATE.md`를 사용한다.

### 21.3 During Work

- 사용자 기존 변경 보존
- Scope와 Non-scope 유지
- Token과 Component 우선
- Pattern 재사용
- 정기적인 Evidence 확보
- Blocker 즉시 보고
- 60초 이상 긴 작업에서 진행 상황 공유
- 임시 Fix를 Debt 없이 숨기지 않음

### 21.4 After Work

- 실제 브라우저 확인
- 자동 검사
- Responsive Matrix
- Keyboard와 Focus
- Performance Regression
- 변경 파일 목록
- Documentation
- Diff Check
- 보호 영역 미변경 확인

### 21.5 Completion Report

다음을 보고한다.

- 완료된 Outcome
- 핵심 변경
- 재사용한 Component/Pattern
- 수정 파일
- Test Device/Viewport/Browser
- Accessibility 결과
- Performance 결과
- Documentation
- Known Issue
- Commit/Release 상태

### 21.6 Prohibited

- 검증하지 않은 완료 보고
- 사용자 승인 없는 범위 확장
- 기능 요청에 무관한 Redesign
- Test를 위해 Production Data 변경
- 계산 Engine을 UI Fix와 함께 변경
- 관련 없는 사용자 수정 정리
- Destructive Git 명령

### 21.7 PM Notes

Work가 `완료`라고 보고하는 기준은 Code가 저장된 시점이 아니라 Acceptance, QA, Documentation과 필요한 승인까지 준비된 시점이다.

---

## 22. PM Review Rules

### 22.1 PM Responsibility

PM은 결과물의 취향을 평가하는 사람이 아니라 Scope, Evidence, Risk와 사용자 결과를 승인하는 책임자다.

### 22.2 Required Review

ChatGPT(Project Manager)는 다음을 확인한다.

- Design Bible 준수
- Component 재사용
- Pattern 재사용
- Accessibility
- Responsive
- Brand Consistency
- Performance
- Content
- Documentation
- QA Checklist
- Risk
- Version과 Rollback

### 22.3 PM Questions

1. 이 변경은 어떤 User Problem을 해결하는가?
2. 기존 System으로 해결했는가?
3. 다른 Consumer에 어떤 영향을 주는가?
4. 실패하면 사용자가 무엇을 잃는가?
5. 어떤 Evidence로 정상임을 판단하는가?
6. 접근성과 성능이 동등하게 검토되었는가?
7. 문서와 구현이 일치하는가?
8. Rollback 가능한가?

### 22.4 Approval Rules

PM은 다음 경우 승인하지 않는다.

- Scope 불명
- Evidence 없음
- Blocker 존재
- 사용자 Task 미완료
- 접근성 Critical
- Performance Poor 회귀
- Documentation 누락
- Owner 없는 Risk
- Rollback 불가

### 22.5 Exception and Final PASS

Non-blocking Issue를 Project Owner가 수용하더라도 `Conditional Pass`를 Production Release 상태로 사용하지 않는다.

Exception에는 다음이 필요하다.

- Owner
- Reason
- User·System Impact
- Expiry
- Resolution Plan

Exception 기록 후 필수 Criteria를 다시 검토하고 최종 결과를 PASS 또는 REJECT로 확정한다.

다음은 Exception으로 PASS 처리할 수 없다.

- 개인정보
- 계산 정확성
- 주요 Navigation·Form
- Critical Accessibility
- Brand Logo
- Rollback 불가

### 22.6 PM Notes

빠른 승인보다 예측 가능한 승인이 중요하다. 같은 기준을 사람과 AI 모두에게 적용한다.

---

## 23. Monitoring, Incident and Hotfix

### 23.1 Monitoring Period

- Patch: 최소 첫 Smoke Test
- Minor: 1–3영업일
- Major: 1–2주 또는 충분한 Traffic
- Critical Flow: 별도 Event와 Error Monitoring

### 23.2 Incident Severity

| Severity | Example | Response |
|---|---|---|
| S0 | 개인정보, 계산 결과 중대 오류 | 즉시 차단/롤백 |
| S1 | 상담·Navigation 등 주요 Task 불가 | 긴급 Hotfix |
| S2 | 일부 Browser·Component 장애 | 우선 Fix |
| S3 | Cosmetic·Content Minor | 다음 Patch |

### 23.3 Incident Flow

`Detect → Triage → Contain → Fix/Rollback → Verify → Communicate → Document → Prevent`

### 23.4 Hotfix

Hotfix도 최소한 다음을 통과한다.

- Issue 재현
- Scope 제한
- Code Review
- 핵심 Regression
- Accessibility 영향
- Production Verification
- Changelog
- 사후 Decision/Debt

### 23.5 Post-incident Review

- Root Cause
- Detection Gap
- User Impact
- Timeline
- Fix
- Prevention
- Documentation
- Owner

사람을 비난하지 않고 System 개선에 집중한다.

### 23.6 Next Sprint

Hotfix의 임시 Compatibility와 미완성 Documentation은 다음 Sprint의 확정 Task로 등록한다.

---

## 24. Future Governance

### 24.1 Principle

새 Product가 추가되어도 새로운 품질 철학을 만들지 않는다. 동일한 Gate, Version, Decision, Risk, Accessibility와 Documentation 체계를 사용하고 Product-specific Checklist를 확장한다.

### 24.2 Admin

- Dense UI와 Table
- Role/Permission
- Bulk Action
- Audit Log
- Destructive Action
- Keyboard Efficiency

### 24.3 Dashboard

- Data Accuracy
- 기준일·단위
- Loading/Empty/Error
- Chart Accessibility
- Real-time Update
- Performance under Data Load

### 24.4 CRM

- 개인정보와 보유기간
- Internal/External Note
- Lead Status
- Email Template
- 권한과 Audit
- Data Export/Delete

### 24.5 AI

- AI Disclosure
- Source와 기준일
- Hallucination Risk
- Human Escalation
- 개인정보
- Prompt/Output Version
- Bias와 Overreliance
- Model 변경 Regression

### 24.6 M&A Platform

- Buyer/Seller Role
- Confidential Information
- Data Room
- Transaction State
- Legal/Financial Error Prevention
- Audit Trail
- Cross-border Localization

### 24.7 Investor Portal

- Access Control
- Document Version
- Download and Watermark
- Disclosure Timing
- Financial Data Accuracy
- Session Security

### 24.8 Governance Scaling

Product 수가 늘어나면:

- Design System Council
- Domain Owner
- Release Train
- Automated Regression
- Component Package
- Pattern Library
- Central Decision Log
- Risk and Compliance Review

를 단계적으로 도입한다. 현재 규모보다 복잡한 절차를 미리 강제하지 않는다.

### 24.9 Final Principle

좋은 Governance는 변경을 느리게 만드는 체계가 아니다. 반복 논의를 줄이고 위험을 조기에 발견하며, 승인된 Component와 Pattern으로 더 빠르고 일관되게 Release하게 만드는 체계다.

---

## Appendix A. Design Change Proposal

```md
# Design Change Proposal

- Proposal ID:
- Title:
- Owner:
- Date:
- User Problem:
- Evidence:
- Scope:
- Non-scope:
- Existing Component / Pattern:
- Proposed Change:
- Alternatives:
- Affected Consumers:
- Accessibility:
- Responsive:
- Performance:
- Content:
- Risk Level:
- Version:
- Migration:
- Rollback:
- Required Reviewers:
- Decision:
```

---

## Appendix B. QA Review Record

```md
# QA Review

- Release / Sprint:
- Version:
- Commit:
- Environment:
- Scope:
- Viewports:
- Browsers:
- Devices:
- Design QA:
- Functional QA:
- Responsive QA:
- Accessibility QA:
- Performance QA:
- Content QA:
- Regression QA:
- Open Issues:
- Exceptions:
- Evidence:
- Reviewer:
- Result:
```

---

## Appendix C. Decision Log

```md
# DQ-YYYY-NNN — Decision Title

- Status: Proposed / Accepted / Superseded / Deprecated / Rejected
- Date:
- Owner:
- Approvers:

## Context

## Problem

## Decision

## Reason

## Alternatives

## Impact

## Risks

## Affected Documents and Components

## Version and Migration

## Review Date

## History
```

---

## Appendix D. Design Debt Register

```md
| Debt ID | Date | Area | Description | Cause | Impact | Level | Owner | Target | Status | Resolution |
|---|---|---|---|---|---|---|---|---|---|---|
```

---

## Appendix E. Risk Register

```md
| Risk ID | Category | Description | Trigger | Likelihood | Impact | Score | Mitigation | Contingency | Owner | Status | Review |
|---|---|---|---|---:|---:|---:|---|---|---|---|---|
```

---

## Appendix F. Release Candidate Report

```md
# Release Candidate

- Release:
- Version:
- Scope:
- Included Changes:
- Excluded Changes:
- QA Summary:
- Accessibility:
- Performance:
- Browser / Device:
- Open Defects:
- Accepted Risks:
- Documentation:
- Migration:
- Rollback:
- Release Owner:
- Monitoring Owner:
- Approval:
```

---

## Appendix G. Rollback Plan

```md
# Rollback Plan

- Release:
- Trigger:
- Decision Owner:
- Previous Stable Version:
- Files / Configuration:
- Data Impact:
- Rollback Steps:
- Verification:
- Communication:
- Documentation:
```

---

## Appendix H. Governance Audit

### Monthly

- [ ] Open Critical/High Risk 검토
- [ ] D0/D1 Design Debt 검토
- [ ] 반복 Defect 확인
- [ ] Deprecated Consumer 진행 확인
- [ ] 문서 누락 확인

### Quarterly

- [ ] Token 중복과 직접값 Audit
- [ ] Component Inventory와 실제 Class/API 비교
- [ ] Pattern 중복 검토
- [ ] Browser Matrix 업데이트
- [ ] Accessibility 대표 Flow 재검증
- [ ] CWV Field Trend 검토
- [ ] Broken Link와 문서 Reference 확인
- [ ] Decision Review Date 확인

### Annual

- [ ] Design Bible 전체 Review
- [ ] Brand Positioning 변화
- [ ] Governance 효과와 과도한 절차
- [ ] Platform Expansion
- [ ] WCAG와 CWV 기준
- [ ] External Design System Benchmark
- [ ] Major Version 필요성

---

## Appendix I. Final PM Review

- [ ] Design Bible 전체를 관리할 수 있는가?
- [ ] 새로운 Page를 추가해도 품질이 유지되는가?
- [ ] Component와 Pattern 중복을 사전에 차단하는가?
- [ ] Documentation이 Release와 함께 최신 상태가 되는가?
- [ ] Release 전에 Design, 기능, 반응형, 접근성, 성능과 Content를 검증할 수 있는가?
- [ ] AI와 사람이 동일한 Criteria와 Evidence를 사용하는가?
- [ ] Decision, Risk와 Design Debt가 추적 가능한가?
- [ ] Major, Minor, Patch와 Migration이 명확한가?
- [ ] Production Issue와 Hotfix 절차가 있는가?
- [ ] 장기 Project와 Future Product 확장에 적용 가능한가?
- [ ] Governance가 현재 조직 규모에 과도하지 않은가?
- [ ] 승인권자와 Release Owner가 명확한가?
- [ ] 모든 Blocker에 Release Stop Rule이 있는가?
- [ ] 최종 Checklist가 실제 Sprint에서 사용할 수 있는가?

하나라도 `NO`이면 문서는 `Approved`가 아니라 `Approved Draft` 상태를 유지한다.
