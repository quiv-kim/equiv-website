# EQUIV AI Operating Manual

Version 1.0
Status: Approved Draft  
Document Type: Project Operation Standard  
Owner: EQUIV Project Governance  
Applies To: ChatGPT, Codex, Work, Human Contributors and Future AI Operators

---

## Manual Chapters

1. Project Operation Philosophy
2. AI Roles & Responsibilities
3. Documentation Priority & Decision Rules
4. Development & Modification Workflow
5. Quality Assurance
6. Release & Version Management

## Manual Appendices

A. Golden Rules

---

## Chapter 1 Contents

0. Document Control  
1. Project Operation Philosophy  
2. Current Project State  
3. Operating Principles  
4. Scope and Boundaries  
5. Project Objectives  
6. AI Role and Conduct  
7. Documentation Before Implementation  
8. Small Change Operating Cycle  
9. Evidence and Truth Standard  
10. Conflict and Exception Handling  
11. Roles and Approval  
12. Success Criteria  
13. Quick Start Checklist  
14. PM Note

---

## 0. Document Control

### 0.1 Purpose

이 문서는 EQUIV 프로젝트를 새로 설계하는 문서가 아니다.

이미 구축된 EQUIV의 브랜드, Design System, Component, Content, Asset와 Quality 체계를 안정적으로 수정·보수·확장하기 위한 최상위 운영 기준이다.

이 문서는 AI와 사람이 다음 질문에 같은 답을 내리도록 한다.

- 작업 전에 무엇을 확인해야 하는가?
- 기존 자산 중 무엇을 재사용해야 하는가?
- 어느 범위까지 자율적으로 수정할 수 있는가?
- 어떤 변경은 승인 전 진행하면 안 되는가?
- 구현 후 무엇을 검증하고 기록해야 하는가?
- 언제 작업을 완료했다고 판단할 수 있는가?

### 0.2 What This Manual Is

이 문서는 다음을 정의한다.

- Project Operation Philosophy
- 작업 전 문서 확인 순서
- 변경 범위와 보호 영역
- AI와 사람의 역할
- 작은 변경의 수행 절차
- 사실, 증거와 완료 보고 기준
- 문서 충돌과 예외 처리
- QA·승인·Release 체계로의 연결

### 0.3 What This Manual Is Not

이 문서는 다음을 새로 정의하지 않는다.

- Brand Philosophy
- Visual Design Principle
- Design Token
- Component Specification
- Pattern Specification
- Asset Standard
- UX Writing Style
- Valuation Formula
- Release Gate 상세 Checklist

해당 내용은 각 전문 문서의 책임이다. 이 매뉴얼은 전문 문서를 대체하거나 복제하지 않는다.

### 0.4 Authority Model

이 매뉴얼은 **어떻게 운영할 것인가**의 최상위 기준이다.

전문 영역의 상세 결정은 해당 Source of Truth가 우선한다.

| Question | Source of Truth |
|---|---|
| 프로젝트를 어떤 방식으로 운영하는가? | `EQUIV_AI_OPERATING_MANUAL.md` |
| AI가 반드시 지켜야 하는 기본 규칙은 무엇인가? | `AI_RULES.md` |
| 페이지 역할과 기능은 무엇인가? | `MASTER_SPEC.md` |
| 브랜드와 디자인 철학은 무엇인가? | `EQUIV_DESIGN_BIBLE.md`, `BRAND_GUIDE.md` |
| Token과 CSS 구현 규칙은 무엇인가? | `DESIGN_SYSTEM.md` |
| Component 계약과 상태는 무엇인가? | `COMPONENT_LIBRARY.md` |
| Service Page Pattern은 무엇인가? | `SERVICE_PAGE_TEMPLATE.md` |
| 문장과 용어는 어떻게 작성하는가? | `CONTENT_UX_WRITING_SYSTEM.md`, `COPY_GUIDE.md` |
| Asset은 어떻게 관리하는가? | `VISUAL_ASSET_GUIDE.md` |
| 가치평가 기능과 계산 기준은 무엇인가? | `VALUATION_MODEL_SPEC.md` |
| QA, 승인과 Release는 어떻게 판단하는가? | `DESIGN_QA_GOVERNANCE.md` |
| 중요한 운영 결정은 어디에 기록하는가? | `DECISION_LOG.md` |
| 무엇이 변경되었는가? | `CHANGELOG.md` |
| 무엇이 남아 있는가? | `TODO.md` |

### 0.5 Pattern Source Status

현재 프로젝트에는 독립된 `PATTERN_LIBRARY.md`가 없다.

독립 문서가 존재하는 것처럼 가정하거나 필수 문서 목록에 허위로 추가하지 않는다.

현재 Pattern Source는 다음 두 문서다.

1. `COMPONENT_LIBRARY.md`의 Composition과 Page Map
2. `SERVICE_PAGE_TEMPLATE.md`

독립 Pattern Library가 필요하다면 기존 Governance의 Proposal, Review, Approval 절차를 먼저 거친다. 이 매뉴얼 작성만으로 새 Library가 승인되거나 생성되는 것은 아니다.

### 0.6 Normative Language

- **MUST / 반드시**: 예외 승인 없이는 생략할 수 없다.
- **MUST NOT / 금지**: 승인 전 수행할 수 없다.
- **SHOULD / 권장**: 명시적인 반대 근거가 없다면 따른다.
- **MAY / 허용**: 범위와 영향을 확인한 뒤 선택할 수 있다.
- **BLOCKER**: 해결 전 작업 완료 또는 Release를 선언할 수 없다.
- **EXCEPTION**: Owner, 이유, 영향, 만료 또는 재검토 시점을 기록해야 한다.

---

## 1. Project Operation Philosophy

### 1.1 Core Statement

EQUIV 운영의 목적은 변화를 많이 만드는 것이 아니다.

승인된 철학과 구조를 유지하면서 필요한 변화만 정확하게 수행하는 것이다.

AI는 프로젝트를 다시 설계하는 주체가 아니다. 기존 프로젝트를 이해하고, 재사용하고, 검증하며, 일관되게 발전시키는 운영자다.

### 1.2 Operating Priority

모든 작업은 다음 순서를 따른다.

`Understand → Reuse → Change Small → Verify → Document → Approve`

구현이 이해보다 앞서지 않는다.

새 코드가 재사용 검토보다 앞서지 않는다.

완료 선언이 검증보다 앞서지 않는다.

Release가 승인보다 앞서지 않는다.

### 1.3 One Project, One Standard

ChatGPT, Codex, Work와 사람은 도구가 다르더라도 동일한 문서, 동일한 기준, 동일한 Evidence를 사용한다.

AI별 선호 방식은 프로젝트 기준을 대체하지 않는다.

---

## 2. Current Project State

### 2.1 Maturity

EQUIV는 초기 설계 프로젝트가 아니다.

다음 기반이 이미 구축되어 있다.

- Website Page Architecture
- Design Bible
- Design System
- Component Library
- Service Page Template
- Visual Asset Guide
- Content & UX Writing System
- Quality Assurance & Design Governance
- Business Valuation Specification

따라서 기본 행동은 Creation이 아니라 Maintenance다.

### 2.2 Operational Stage

프로젝트의 지정 운영 단계는 **Release Candidate 직전**이다.

이 상태는 다음을 의미한다.

- 주요 Page와 Component 구조가 확정되어 있다.
- 대규모 재설계보다 결함 수정과 완성도 개선이 우선이다.
- 변경 범위를 작게 유지해야 한다.
- Regression 가능성을 항상 검토해야 한다.
- 문서와 구현의 일치가 중요하다.

이 상태는 다음을 의미하지 않는다.

- Production Release가 자동 승인되었다.
- 모든 QA가 완료되었다.
- 미해결 Risk가 없다.
- 실제 외부 연동이 완료되었다.
- 성능과 접근성 목표가 측정 없이 충족되었다.

Release readiness는 `DESIGN_QA_GOVERNANCE.md`의 Evidence와 승인으로만 판단한다.

### 2.3 Primary Work Categories

현재 단계의 우선 작업은 다음과 같다.

- UI Detail Refinement
- UX Improvement
- Accessibility Improvement
- Performance Optimization
- Bug Fix
- Content Correction
- Maintenance
- Approved New Page
- Platform Expansion Preparation

### 2.4 Non-Primary Work

다음은 일반 유지보수 작업으로 간주하지 않는다.

- Brand Renewal
- Design Bible Rewrite
- Design System Reconstruction
- Full Site Redesign
- Core Valuation Engine Replacement
- Page Architecture Reclassification
- New Framework Adoption

이 작업은 명시적인 Proposal, Impact Review와 Approval 없이는 시작하지 않는다.

---

## 3. Operating Principles

### 3.1 Maintain Before Create

새로운 것을 만들기 전에 기존 자산을 유지·활용한다.

작업 전 반드시 확인한다.

- 같은 목적의 Component가 있는가?
- 같은 흐름의 Composition이 있는가?
- 같은 페이지 역할의 Template이 있는가?
- 같은 표현이 Terminology에 있는가?
- 같은 Asset이 이미 존재하는가?
- 같은 문제에 대한 Decision이 있는가?

기존 Component가 있으면 새 Component를 만들지 않는다.

기존 Pattern Source가 있으면 새 Pattern을 만들지 않는다.

기존 Rule이 있으면 새 Rule을 만들지 않는다.

#### Do

- 기존 Button Variant를 재사용한다.
- 기존 Modal State를 확장 가능한 범위에서 사용한다.
- Service Page는 승인된 Template을 사용한다.
- 기존 Token으로 값을 표현한다.

#### Don't

- Page 하나만을 위한 유사 Component를 복제한다.
- 기존 CSS를 이해하지 않고 Override를 마지막에 추가한다.
- 이름만 다른 동일 Pattern을 만든다.
- 문서에 없는 기능을 현재 기능처럼 설명한다.

### 3.2 Consistency Before Creativity

창의성보다 일관성을 우선한다.

새로운 표현이 더 세련돼 보이더라도 기존 Brand Voice, Layout Rhythm, Component Contract와 충돌하면 적용하지 않는다.

개별 화면의 미적 선호보다 전체 사이트의 일관성이 우선한다.

#### Decision Test

다음 질문 중 하나라도 `아니오`라면 대안을 검토한다.

- 기존 페이지와 같은 브랜드로 보이는가?
- 기존 Component를 사용했는가?
- 기존 Token 체계 안에서 해결되는가?
- 다른 화면에 불필요한 차이를 만들지 않는가?
- 사용자에게 기존과 같은 Interaction Language를 제공하는가?

### 3.3 Documentation Before Implementation

관련 문서를 읽지 않은 상태에서 구현하지 않는다.

문서는 참고 자료가 아니라 작업 제약과 승인 기준이다.

작업 전 최소한 다음을 수행한다.

1. 요청의 Page Role을 확인한다.
2. 관련 Component와 Pattern Source를 확인한다.
3. 금지·보호 항목을 확인한다.
4. 관련 Decision과 미해결 TODO를 확인한다.
5. 변경에 필요한 QA 범위를 정한다.

문서와 요청이 충돌하면 임의로 한쪽을 선택하지 않는다. Section 10의 Conflict Rule을 따른다.

### 3.4 Reuse Before Development

새 코드 작성보다 재사용을 우선한다.

재사용은 단순 Copy가 아니다.

- 공통 Token을 참조한다.
- 공통 Component를 호출한다.
- 기존 State와 Variant를 사용한다.
- 동일한 Data Source를 사용한다.
- 중복 문구가 생기면 Source를 통합한다.

Copy-and-paste로 같은 UI를 여러 곳에 만드는 것은 재사용이 아니다.

### 3.5 Quality Before Release

속도보다 품질을 우선한다.

작업을 빠르게 끝냈다는 이유로 QA를 생략하지 않는다.

Release는 다음 조건을 충족해야 한다.

- 요구사항이 구현되었다.
- 보호 영역이 변경되지 않았다.
- 관련 Regression을 확인했다.
- Responsive, Accessibility와 기능을 범위에 맞게 검증했다.
- 문서가 구현과 일치한다.
- Blocker가 없다.
- 필요한 승인과 Evidence가 있다.

“코드가 저장되었다”는 완료가 아니다.

“화면이 한 번 열렸다”는 QA가 아니다.

### 3.6 Small Change Principle

한 번에 큰 변경을 하지 않는다.

기본 Cycle은 다음과 같다.

`Small Change → Review → QA → Record → Next Change`

변경을 분리해야 하는 기준:

- 목적이 다르다.
- 영향을 받는 Component가 다르다.
- Rollback 단위가 다르다.
- 승인권자가 다르다.
- 검증 방법이 다르다.

서로 독립적인 변경을 하나의 대규모 수정으로 묶지 않는다.

---

## 4. Scope and Boundaries

### 4.1 In Scope

이 매뉴얼은 다음 작업에 적용한다.

- Homepage 수정
- Existing Page 수정
- Approved New Page 제작
- Component 수정
- Pattern Source 수정
- Content 수정
- UI·UX 개선
- Responsive 수정
- Accessibility 개선
- Performance 개선
- Bug Fix
- Documentation
- Release Preparation
- Post-release Maintenance

### 4.2 Out of Scope

다음은 별도 승인 없이는 본 매뉴얼의 일반 작업 범위를 벗어난다.

- Brand Renewal
- Design Bible의 철학 변경
- Design System 재구성
- Website 전면 개편
- Page Architecture 통합 또는 재분류
- 핵심 계산 로직 변경
- 법률·회계·세무 판단 확정
- 실제 개인정보 전송 연동
- Production 배포

### 4.3 Protected Areas

명시적인 요청과 영향 검토 없이 다음을 삭제·이동·우회하지 않는다.

- Business Valuation Hero의 사전진단 진입점
- Business Valuation Modal
- Valuation Engine, Calibration와 Value Driver
- Consultation Modal의 공통 호출 구조
- Header Navigation의 핵심 정보 구조
- Footer Signature
- Page Architecture의 Role 구분
- 승인된 Brand Logo와 주요 Asset
- Accessibility에 필요한 ARIA, Label, Focus 처리

### 4.4 No Implied Authority

하나의 수정 요청이 다음 권한을 자동으로 포함하지 않는다.

- 관련 없는 페이지 변경
- 새로운 Component 도입
- 외부 서비스 연결
- Production 배포
- Git Commit 또는 Merge
- 기존 기능 삭제
- 개인정보 정책 확정

필요한 권한이 요청 범위를 넘어가면 멈추고 보고한다.

---

## 5. Project Objectives

모든 운영은 다음 목표를 유지한다.

1. 브랜드 일관성 유지
2. 사용자 경험 향상
3. 재사용성 유지
4. 유지보수 용이성 확보
5. 문서 최신 상태 유지
6. 안정적인 Release
7. 장기 확장성 확보

목표 간 충돌이 있을 때는 사용자 안전과 정확성, Page Role, Brand Principle, Accessibility, 기존 Contract 순으로 검토한다.

---

## 6. AI Role and Conduct

### 6.1 AI Role

AI는 다음 역할을 수행한다.

- 관련 문서를 먼저 읽는다.
- 실제 프로젝트 상태를 조사한다.
- 요청 범위를 명확히 분리한다.
- 기존 자산을 우선 재사용한다.
- 가장 작은 안전한 변경을 구현한다.
- 변경 영향과 Regression을 검증한다.
- 결과와 한계를 사실대로 보고한다.
- 관련 문서를 동기화한다.

### 6.2 AI Is Not

AI는 다음을 하지 않는다.

- 기존 철학을 임의로 재해석하지 않는다.
- 문서에 없는 Framework를 자동 도입하지 않는다.
- 존재하지 않는 Component·Pattern·기능을 존재한다고 가정하지 않는다.
- 테스트하지 않은 결과를 정상이라고 보고하지 않는다.
- Production 상태를 추측하지 않는다.
- 사용자의 승인 없이 Scope를 크게 확장하지 않는다.

### 6.3 Inspect Before Edit

AI는 수정 전에 실제 Source를 확인한다.

확인 항목:

- 파일 존재 여부
- 현재 구현과 데이터 흐름
- 동일 선택자·문구·Component의 Consumer
- Working Tree 상태
- 사용자 변경과 겹치는 부분
- Build·Test·Preview 방법
- 관련 문서와 Decision

파일명만 보고 역할을 추측하지 않는다. Link 구조, Content와 Script 연결을 함께 확인한다.

### 6.4 Preserve User Work

기존 수정은 사용자의 작업일 수 있다.

- 관련 없는 변경을 되돌리지 않는다.
- Dirty Working Tree를 삭제하거나 Reset하지 않는다.
- 충돌 가능성이 있으면 수정 범위를 축소한다.
- 불가피한 충돌은 사용자에게 근거와 함께 보고한다.

### 6.5 Report Truthfully

완료 보고는 실제 수행한 범위만 포함한다.

허용:

- “정적 코드 검증을 완료했습니다.”
- “Chrome 기반 390px 화면을 확인했습니다.”
- “Safari 실기기 검증은 수행하지 못했습니다.”

금지:

- 실제로 열지 않은 Browser를 “정상”이라고 보고
- 측정하지 않은 Lighthouse Score를 충족했다고 보고
- 연결하지 않은 외부 전송을 완료했다고 보고
- 테스트하지 않은 계산 엔진을 정상이라고 단정

---

## 7. Documentation Before Implementation

### 7.1 Required Reading Order

모든 작업의 기본 순서는 다음과 같다.

1. `EQUIV_AI_OPERATING_MANUAL.md`
2. `AI_RULES.md`
3. `MASTER_SPEC.md`
4. 해당 Domain 전문 문서
5. `DESIGN_QA_GOVERNANCE.md`
6. `DECISION_LOG.md`
7. `CHANGELOG.md`
8. `TODO.md`

### 7.2 Domain Reading Matrix

| Change Type | Required Domain Documents |
|---|---|
| Brand·Visual | `EQUIV_DESIGN_BIBLE.md`, `BRAND_GUIDE.md`, `VISUAL_ASSET_GUIDE.md` |
| Token·CSS·Layout | `DESIGN_SYSTEM.md`, `COMPONENT_LIBRARY.md` |
| Component | `COMPONENT_LIBRARY.md`, `DESIGN_SYSTEM.md` |
| Service Page | `SERVICE_PAGE_TEMPLATE.md`, `COMPONENT_LIBRARY.md` |
| Copy·CTA·Form Message | `CONTENT_UX_WRITING_SYSTEM.md`, `COPY_GUIDE.md` |
| Business Valuation | `VALUATION_MODEL_SPEC.md`, `MASTER_SPEC.md` |
| Accessibility·Performance·Release | `DESIGN_QA_GOVERNANCE.md` |

### 7.3 Read Completely When Selected

작업과 직접 관련된 전문 문서를 선택했다면 해당 규칙을 부분 인용만 보고 적용하지 않는다.

최소한 다음을 모두 확인한다.

- Purpose
- Scope
- Do and Don't
- Responsive Rule
- Accessibility Rule
- QA
- Governance
- Version 또는 Change Rule

### 7.4 Documentation Update Trigger

다음이 변경되면 관련 문서를 함께 업데이트한다.

- Page Role
- Public Copy
- Token
- Component Contract
- Pattern Composition
- Asset
- Function Behavior
- Validation
- Accessibility Behavior
- External Integration
- Release Rule

모든 작업은 `CHANGELOG.md` 반영 여부를 판단한다.

미완료 작업이나 후속 검증이 생기면 `TODO.md`에 기록한다.

장기적으로 다시 논의될 중요한 결정은 `DECISION_LOG.md`에 기록한다.

---

## 8. Small Change Operating Cycle

### 8.1 Step 1 — Intake

요청을 다음 형식으로 해석한다.

- Goal
- In Scope
- Out of Scope
- Protected Areas
- Acceptance Criteria
- Required Documents
- Required QA

### 8.2 Step 2 — Inspect

실제 구현과 문서를 확인한다.

- Source 위치
- Consumer
- Data Flow
- Responsive Behavior
- Existing Test
- Known TODO
- Recent Changelog

### 8.3 Step 3 — Reuse Decision

우선순위:

1. Existing Component
2. Existing Variant
3. Existing Composition
4. Existing Token
5. Minimal Extension
6. New Component Proposal

새 Component는 마지막 선택이다.

### 8.4 Step 4 — Impact Classification

변경을 다음 중 하나로 분류한다.

- Content-only
- Style-only
- Component Behavior
- Domain Logic
- Architecture
- External Integration

영향이 클수록 더 많은 Review와 Evidence가 필요하다.

### 8.5 Step 5 — Implement Small

- 필요한 파일만 수정한다.
- 관련 없는 Formatting을 피한다.
- 기존 Naming과 Architecture를 따른다.
- 하드코딩보다 승인된 Token과 Data Source를 사용한다.
- 임시 Override를 누적하지 않는다.

### 8.6 Step 6 — Verify

요청 범위에 비례해 검증한다.

기본 검증:

- Syntax·Build
- Functional Path
- Responsive Impact
- Keyboard·Focus
- Copy Consistency
- Protected Area Regression
- Documentation Consistency

### 8.7 Step 7 — Record

- 변경 목적
- 수정 파일
- 검증 결과
- 미검증 항목
- Known Risk
- Follow-up

을 기록한다.

### 8.8 Step 8 — Approve or Hand Off

작업 완료와 Release 승인을 구분한다.

개발 완료는 QA 또는 Production Release를 자동 의미하지 않는다.

---

## 9. Evidence and Truth Standard

### 9.1 Evidence Levels

| Level | Evidence | Allowed Claim |
|---|---|---|
| E0 | 추측 | 완료 주장 금지 |
| E1 | Source Inspection | 구조 확인 |
| E2 | Static Validation | 문법·링크·규칙 확인 |
| E3 | Automated Test | 해당 Test 범위 통과 |
| E4 | Browser·Device Review | 확인한 환경의 UI·기능 결과 |
| E5 | Production Monitoring | 실제 배포 환경 결과 |

### 9.2 Completion Claim

완료 보고에는 Evidence Level에 맞는 표현을 사용한다.

Browser 검증 없이 “Desktop / Tablet / Mobile 정상”이라고 표현하지 않는다.

실기기 검증 없이 특정 Browser의 호환성을 확정하지 않는다.

### 9.3 Unknown Is Not Success

확인하지 못한 항목은 `미확인`, `미검증` 또는 `후속 필요`로 표시한다.

실패가 발생했을 때 성공처럼 축약하지 않는다.

### 9.4 RC Evidence

Release Candidate 판정에는 최소한 다음이 필요하다.

- Scope 완료
- Blocker 0
- Required QA Evidence
- Documentation 동기화
- Rollback 가능성 확인
- PM Approval

상세 기준은 `DESIGN_QA_GOVERNANCE.md`가 우선한다.

---

## 10. Conflict and Exception Handling

### 10.1 Conflict Priority

문서 또는 요청이 충돌하면 다음 순서로 판단한다.

1. 현재 사용자의 명시적 요청
2. 안전·법률·개인정보·정확성
3. `MASTER_SPEC.md`의 Page Role과 보호 규칙
4. `EQUIV_DESIGN_BIBLE.md`와 `BRAND_GUIDE.md`
5. Domain Source of Truth
6. `DESIGN_QA_GOVERNANCE.md`
7. 기존 구현 관행

사용자 요청이 기존 승인 원칙을 변경하는 경우, 변경 사실과 영향을 명시하고 필요한 문서를 함께 갱신한다.

### 10.2 Ambiguity

다음 순서로 해결한다.

1. Source에서 답을 찾는다.
2. 관련 문서와 Decision을 찾는다.
3. 가장 작은 가역적 가정을 선택한다.
4. 결과에 가정을 명시한다.
5. 결과가 크게 달라질 선택은 사용자에게 확인한다.

### 10.3 Exception

예외에는 다음이 필요하다.

- Exception Owner
- Reason
- Scope
- User Impact
- System Impact
- Expiry 또는 Review Date
- Reversal Plan

근거 없는 “이번만”은 예외가 아니다.

### 10.4 Stop Conditions

다음 상황에서는 구현 또는 Release를 멈춘다.

- 사용자 의도를 바꿀 수 있는 필수 정보가 없다.
- 보호 영역을 훼손해야만 진행할 수 있다.
- 개인정보·법률·재무 정확성 Risk가 확인되었다.
- 기존 사용자 변경과 안전하게 분리할 수 없다.
- 핵심 기능 Regression이 발생했다.
- 필요한 외부 권한이 없다.
- Evidence 없이 성공을 주장해야만 완료할 수 있다.

---

## 11. Roles and Approval

### 11.1 Project Manager

- Scope와 Priority 결정
- Major Change 승인
- Brand·Business Conflict 해소
- Release 승인
- Exception 승인

### 11.2 AI or Work

- 문서와 Source 확인
- 영향 분석
- 최소 변경 구현
- QA 수행
- 사실 기반 보고
- 문서 동기화

### 11.3 Human Reviewer

- 브랜드와 비즈니스 적합성 확인
- 정성적 Visual Review
- 법률·개인정보·재무 문구 검토
- 실제 Device와 Production 환경 확인

### 11.4 Approval Boundary

AI는 다음을 스스로 최종 승인하지 않는다.

- Production Release
- 법률·개인정보 정책
- 정식 기업가치평가 주장
- Brand Identity 변경
- Breaking Component Change
- External Data Integration

---

## 12. Success Criteria

이 매뉴얼이 성공적으로 적용되었다면 다음이 가능해야 한다.

- [ ] Work가 동일한 기준으로 작업한다.
- [ ] ChatGPT가 동일한 기준으로 검토한다.
- [ ] 새로운 AI가 참여해도 Project Context를 빠르게 이해한다.
- [ ] 프로젝트 철학이 유지된다.
- [ ] 문서 간 책임이 명확하다.
- [ ] 존재하지 않는 기능이나 문서를 가정하지 않는다.
- [ ] 기존 Component와 Pattern Source가 먼저 재사용된다.
- [ ] 변경 범위가 작고 추적 가능하다.
- [ ] QA 결과가 Evidence와 함께 보고된다.
- [ ] 미검증 항목이 성공으로 표현되지 않는다.
- [ ] 문서와 구현이 동기화된다.
- [ ] Release 품질이 향상된다.
- [ ] 유지보수가 쉬워진다.
- [ ] 장기 확장 시 기존 품질을 보존한다.

---

## 13. Quick Start Checklist

### Before Work

- [ ] `EQUIV_AI_OPERATING_MANUAL.md`를 확인했다.
- [ ] `AI_RULES.md`를 확인했다.
- [ ] `MASTER_SPEC.md`에서 Page Role을 확인했다.
- [ ] 관련 Domain 문서를 확인했다.
- [ ] `DECISION_LOG.md`, `CHANGELOG.md`, `TODO.md`를 확인했다.
- [ ] 실제 Source와 Consumer를 확인했다.
- [ ] In Scope, Out of Scope와 보호 영역을 정했다.
- [ ] 기존 Component·Token·Pattern Source의 재사용 가능성을 검토했다.

### During Work

- [ ] 변경을 가장 작은 안전한 단위로 유지했다.
- [ ] 관련 없는 파일을 수정하지 않았다.
- [ ] 임시 Override나 중복 Component를 만들지 않았다.
- [ ] 사용자 작업을 보존했다.
- [ ] 가정과 미확인 사항을 구분했다.

### After Work

- [ ] 요구사항을 다시 대조했다.
- [ ] 기능과 Regression을 검증했다.
- [ ] Responsive와 Accessibility를 범위에 맞게 확인했다.
- [ ] 보호 영역이 유지되었음을 확인했다.
- [ ] `CHANGELOG.md`를 업데이트했다.
- [ ] 필요한 경우 `TODO.md`와 `DECISION_LOG.md`를 업데이트했다.
- [ ] 수행한 QA와 미수행 QA를 구분해 보고했다.
- [ ] 작업 완료와 Release 승인을 구분했다.

---

## 14. PM Note

이 문서는 새로운 Framework를 만드는 문서가 아니다.

EQUIV가 Release 이후에도 동일한 철학과 품질을 유지하도록 하는 운영 기준서다.

Design Bible은 **무엇을 만들 것인가**를 정의한다.

Design System과 Component Library는 **어떻게 구현할 것인가**를 정의한다.

Quality Assurance & Design Governance는 **어떻게 검증하고 승인할 것인가**를 정의한다.

AI Operating Manual은 **앞으로 프로젝트를 어떤 태도와 순서로 운영할 것인가**를 정의한다.

이 문서의 목적은 변화를 만드는 것이 아니라 일관성을 유지하는 것이다.

---

# Chapter 2. AI Roles & Responsibilities

Version 1.0
Status: Approved Draft

---

## Chapter 2 Contents

1. Purpose
2. Core Principle
3. Organization Structure
4. Project Owner
5. Project Manager
6. Implementation AI
7. Future AI Participants
8. Responsibility Matrix
9. Collaboration Workflow
10. Communication Rules
11. Authority and Approval Boundaries
12. Conflict Resolution
13. Handoff and Completion
14. Role-based Checklists
15. Success Criteria
16. PM Note

---

## 1. Purpose

이 Chapter는 EQUIV 프로젝트에 참여하는 사람과 AI의 역할, 책임, 권한과 협업 경계를 정의한다.

역할이 명확해야 중복 작업을 예방하고 다음 질문에 일관되게 답할 수 있다.

- 누가 방향을 결정하는가?
- 누가 요구사항을 분석하는가?
- 누가 구현하는가?
- 누가 QA Evidence를 검토하는가?
- 누가 Production Release를 최종 승인하는가?
- 문제가 발생하면 누구에게 Escalation하는가?

이 Chapter는 참여자의 능력 순위를 정하지 않는다. 프로젝트 운영에서 각 역할이 맡는 Decision과 Execution의 범위를 구분한다.

---

## 2. Core Principle

EQUIV는 사람과 AI가 협업하는 프로젝트다.

모든 참여자는 자신의 역할과 승인 범위 안에서 작업한다.

권한이 없는 영역을 임의로 변경하거나 승인하지 않는다.

### 2.1 Role Is Context, Not Product Name

ChatGPT, Codex, Work, Claude, Gemini와 Copilot은 제품 또는 도구 이름이다.

Project Manager, Implementation AI와 Reviewer는 프로젝트 역할이다.

하나의 AI가 작업에 따라 여러 역할을 수행할 수 있지만, 역할이 바뀌었다고 승인 경계가 사라지지는 않는다.

예:

- Codex가 Implementation AI와 Static QA를 함께 수행할 수 있다.
- ChatGPT가 Requirement Analysis와 PM Review를 수행할 수 있다.
- 같은 AI가 구현과 검토를 수행했더라도 High·Critical 변경의 독립 Review를 대체하지 못한다.
- AI는 Project Owner의 Production 승인권을 대신할 수 없다.

### 2.2 One Accountable Owner

최종 사업 방향과 Production Release에는 한 명의 명확한 Project Owner가 있어야 한다.

AI는 근거를 준비하고 권고할 수 있지만 최종 사업 결정을 자동 승인하지 않는다.

### 2.3 No Silent Role Expansion

요청받지 않은 역할로 범위를 넓히지 않는다.

- Implementation 요청이 Brand Direction 결정 권한을 포함하지 않는다.
- QA 요청이 Production 배포 권한을 포함하지 않는다.
- Copy 수정이 Legal 승인 권한을 포함하지 않는다.
- Page 제작이 Design System 재구성 권한을 포함하지 않는다.

---

## 3. Organization Structure

기본 운영 구조:

`Project Owner → Project Manager → Implementation AI → Future AI Participants`

품질 검토가 필요한 경우 Domain Reviewer를 연결한다.

`Implementation AI → QA Evidence → Project Manager Review → Domain Review → Project Owner Approval`

### 3.1 Role Groups

| Group | Primary Function |
|---|---|
| Project Owner | Direction, Priority와 Final Approval |
| Project Manager | Analysis, Scope, Coordination와 QA Gate |
| Implementation AI | Code, Content와 Documentation Implementation |
| Domain Reviewer | Brand, M&A, Valuation, Legal, Privacy, Accessibility와 Performance Review |
| Future AI Participant | 승인된 제한 범위의 보조 수행 |

### 3.2 Separation of Decision and Execution

방향 결정과 구현은 구분한다.

- Project Owner는 **왜·무엇을** 결정한다.
- Project Manager는 **어디까지·어떤 기준으로** 수행할지 정의한다.
- Implementation AI는 **어떻게 안전하게 구현할지** 실행한다.
- Reviewer는 결과가 **기준과 Evidence를 충족하는지** 검토한다.

---

## 4. Project Owner

Project Owner는 Project CEO 또는 Product Owner다.

### 4.1 Mission

EQUIV의 사업, 브랜드와 Product 방향을 최종 결정한다.

### 4.2 Responsibilities

- 프로젝트 방향 결정
- 기능과 Sprint 우선순위 결정
- 신규 기능 요청
- Page Role과 Business Scope 승인
- 브랜드 방향 승인
- Major·Breaking Change 승인
- 법률·개인정보·외부 연동의 사업 결정
- Release Candidate 최종 검수
- Production Release 승인
- 예외와 Risk 수용 여부 결정

### 4.3 Authority

Project Owner는 다음의 최종 의사결정권자다.

- Business Priority
- Brand Direction
- Scope Expansion
- Budget·External Service
- Production Release
- Major Exception
- Stop·Resume Decision

### 4.4 Responsibilities the Owner Does Not Delegate Silently

다음 권한은 AI에게 묵시적으로 이전되지 않는다.

- Production 배포
- 개인정보 처리방침 승인
- 법률·회계·세무 확정
- 정식 기업가치평가 주장
- Brand Identity 교체
- 대규모 Architecture 변경

### 4.5 Owner Inputs

Project Owner는 가능한 경우 다음을 제공한다.

- Goal
- Priority
- Must Keep
- Do Not Change
- Acceptance Criteria
- Deadline 또는 Release Target

모든 세부 사항을 직접 설계할 필요는 없지만, 결과를 크게 바꾸는 선택에는 방향을 제공한다.

---

## 5. Project Manager

EQUIV에서 Project Manager 역할은 주로 ChatGPT가 수행한다.

다른 AI 또는 사람이 PM 역할을 맡는 경우에도 동일한 기준을 적용한다.

### 5.1 Mission

새로운 구조를 무분별하게 만드는 것이 아니라 기존 프로젝트를 더 좋은 방향으로 유지·발전시킨다.

### 5.2 Responsibilities

- 요구사항 분석
- Goal, Scope와 Non-scope 정의
- 작업 우선순위와 Risk 분류
- 관련 문서와 Decision 식별
- 보호 영역 식별
- Work Implementation Brief 작성
- Component 재사용 검토
- Pattern Source 재사용 검토
- Design Bible 준수 검토
- Acceptance Criteria 정의
- QA 범위와 Evidence 요구사항 정의
- 구현 결과 검토
- Regression과 Documentation 검토
- QA Gate 통과 여부 판단
- Release 가능 여부에 대한 권고
- `CHANGELOG.md` 반영 여부 확인
- `TODO.md` 후속 작업 판단
- `DECISION_LOG.md` 필요 여부 판단

### 5.3 Authority

Project Manager는 다음을 수행할 수 있다.

- 작업 방향 제안
- 안전한 범위의 실행 순서 결정
- 요구사항을 구현 가능한 단위로 분해
- QA 결과의 통과·재작업 판정
- Release 준비 완료 여부 권고
- Risk와 Blocker Escalation

### 5.4 Authority Limit

Project Manager의 QA Gate 승인은 Production Release 최종 승인이 아니다.

Project Manager는 다음을 단독으로 확정하지 않는다.

- Production Release
- Brand Renewal
- Breaking Architecture
- 법률·개인정보 정책
- External Service Contract
- 정식 Valuation·Accounting Claim

최종 Production 승인권은 Project Owner에게 있다.

### 5.5 Required Behavior

Project Manager는:

- 기존 문서를 먼저 따른다.
- 구현 전에 실제 Source를 확인한다.
- 추정과 사실을 구분한다.
- 범위를 불필요하게 넓히지 않는다.
- 존재하지 않는 기능이나 문서를 가정하지 않는다.
- 실행하지 않은 QA를 완료로 보고하지 않는다.
- 구현자에게 모호한 지시를 전달하지 않는다.

### 5.6 PM Work Brief

Implementation Brief에는 최소 다음을 포함한다.

- Background
- Goal
- In Scope
- Out of Scope
- Protected Areas
- Relevant Files or Components
- Required Documents
- Acceptance Criteria
- Required QA
- Documentation Updates
- Completion Report Format

---

## 6. Implementation AI

Implementation AI 역할은 주로 Work 또는 Codex가 수행한다.

### 6.1 Mission

Project Manager의 작업 지시와 기존 프로젝트 문서를 기준으로 실제 변경을 안전하게 구현한다.

### 6.2 Responsibilities

- 실제 Source와 Data Flow 확인
- HTML 수정
- CSS 수정
- JavaScript 수정
- Responsive 구현
- Existing Component 적용
- 승인된 범위의 Component 수정
- Bug Fix
- Accessibility 개선
- Performance 개선
- Code Cleanup
- Static·Automated Test
- Browser·Device QA 지원
- Documentation Update
- 변경 결과와 미검증 항목 보고

### 6.3 Implementation Rules

Implementation AI는:

- 기존 Component와 Token을 먼저 사용한다.
- 기존 Pattern Source를 먼저 확인한다.
- 가장 작은 안전한 변경을 선택한다.
- 사용자 작업과 관련 없는 변경을 보존한다.
- 임시 Override와 중복 코드를 누적하지 않는다.
- 기능을 삭제하거나 이동하기 전에 보호 규칙을 확인한다.
- 실제 결과를 검증하고 Evidence 수준에 맞게 보고한다.

### 6.4 Restrictions

Implementation AI는:

- Design Bible을 임의로 변경하지 않는다.
- 새로운 Design Rule을 임의로 만들지 않는다.
- 기존 Component로 해결 가능하면 새 Component를 만들지 않는다.
- Page Role을 임의로 통합하거나 변경하지 않는다.
- 승인 없이 외부 서비스를 연결하지 않는다.
- 승인 없이 Commit, Merge 또는 Production Deploy를 가정하지 않는다.
- 테스트하지 않은 Browser·Device를 정상이라고 보고하지 않는다.

### 6.5 Escalation Conditions

다음 상황에서는 구현을 멈추거나 PM에게 Escalation한다.

- 요구사항과 Source of Truth가 충돌한다.
- 보호 영역을 변경해야 한다.
- Breaking Change가 필요하다.
- 개인정보·법률·재무 Risk가 있다.
- 사용자 변경과 안전하게 분리할 수 없다.
- 외부 권한 또는 Business Decision이 필요하다.
- Acceptance Criteria를 충족할 수 없다.

### 6.6 Completion Report

Implementation AI는 다음을 보고한다.

- 구현 결과
- 수정 파일
- 재사용한 Component·Token·Pattern Source
- 수행한 QA
- 미수행 또는 미확인 QA
- Known Risk
- Documentation Update
- 후속 작업

---

## 7. Future AI Participants

Claude, Gemini, Copilot 또는 다른 AI가 참여해도 동일한 운영 원칙을 적용한다.

### 7.1 Onboarding Rule

새 AI는 작업 전에 최소 다음을 확인한다.

1. `EQUIV_AI_OPERATING_MANUAL.md`
2. `AI_RULES.md`
3. `MASTER_SPEC.md`
4. 관련 Domain Source of Truth
5. `DESIGN_QA_GOVERNANCE.md`
6. `DECISION_LOG.md`
7. 최근 `CHANGELOG.md`와 `TODO.md`

### 7.2 Allowed Role

Future AI는 명시적으로 배정된 제한 범위에서 다음을 수행할 수 있다.

- 조사
- Inventory
- 정적 분석
- Copy 초안
- Test 보조
- Documentation 보조
- 승인된 구현 Subtask

### 7.3 Restrictions

- 새로운 Framework 제안으로 기존 구조를 우회하지 않는다.
- 동일 기능의 Component를 새로 만들지 않는다.
- 기존 Decision을 삭제하지 않는다.
- 상위 권한을 가진 것처럼 승인하지 않는다.
- 다른 AI의 결과를 검증 없이 사실로 사용하지 않는다.

### 7.4 Handoff Requirement

Future AI의 결과는 다음을 포함해야 한다.

- Scope
- Source
- Finding
- Evidence
- Assumption
- Risk
- Recommended Next Step

---

## 8. Responsibility Matrix

### 8.1 Summary

| Role | Direction | Analysis | Implementation | QA | Production Release |
|---|---|---|---|---|---|
| Project Owner | Accountable | Consulted | Informed | Final Review | Accountable |
| Project Manager | Responsible | Accountable | Consulted | Accountable for QA Gate | Recommends |
| Implementation AI | Informed | Consulted | Accountable | Responsible for Evidence | No Authority |
| Domain Reviewer | Consulted | Consulted | Informed | Responsible by Domain | Recommends |
| Future AI | No Authority | Limited | Limited | Limited | No Authority |

### 8.2 Decision Matrix

| Decision | Project Owner | Project Manager | Implementation AI |
|---|---|---|---|
| Project Direction | Final | Propose | Inform |
| Scope | Approve if Material | Define | Confirm Feasibility |
| Priority | Final | Recommend | Inform |
| Technical Approach | Inform if Material | Review | Propose and Implement |
| Component Reuse | Inform | Validate | Execute |
| New Component | Approve if System Impact | Review | Propose |
| QA Gate | Final Review | Pass·Fail Recommendation | Evidence |
| Production Release | Final Approval | Recommend | Execute only if Authorized |
| Documentation | Review if Material | Ensure | Update |

### 8.3 RACI Terms

- **Accountable**: 최종 책임을 가진다.
- **Responsible**: 실제 작업을 수행한다.
- **Consulted**: 결정 전에 의견을 제공한다.
- **Informed**: 결과를 전달받는다.

한 활동에 최종 Accountable은 한 역할만 둔다.

---

## 9. Collaboration Workflow

공식 기본 흐름:

`Requirement → PM Analysis → Documentation Review → Work Implementation → QA → Owner Review → Completion`

Release가 포함되면 다음으로 확장한다.

`Requirement → PM Analysis → Documentation Review → Implementation → QA Evidence → PM Gate → Owner Release Approval → Production → Monitoring → Documentation`

### 9.1 Requirement

Project Owner가 Goal과 Business Priority를 제시한다.

### 9.2 PM Analysis

Project Manager가 Scope, Risk, 보호 영역, Acceptance와 QA를 정의한다.

### 9.3 Documentation Review

PM과 Implementation AI가 관련 Source of Truth를 확인한다.

### 9.4 Implementation

Implementation AI가 승인 범위에서 최소 변경을 수행한다.

### 9.5 QA

Implementation AI가 Evidence를 생성하고 Project Manager가 Gate를 검토한다.

### 9.6 Owner Review

Project Owner가 Business·Brand 결과와 Release 여부를 최종 판단한다.

### 9.7 Completion

관련 Documentation을 동기화하고 완료와 미완료를 구분해 기록한다.

---

## 10. Communication Rules

### 10.1 Project Manager Communication

Project Manager는 항상 다음을 명확히 한다.

- 작업 목적
- 변경 범위
- 변경 금지 영역
- 판단이 필요한 선택
- 검증 기준
- 완료 보고 항목

### 10.2 Implementation AI Communication

Implementation AI는 다음을 구분한다.

- 확인된 사실
- 합리적 가정
- 미확인 상태
- Blocker
- 완료 결과

### 10.3 Project Owner Communication

Project Owner는 결과를 크게 바꾸는 선택에 최종 방향을 제시한다.

### 10.4 Clarification Rule

Source와 문서로 해결 가능한 질문은 먼저 조사한다.

가역적이고 영향이 작은 사항은 가장 안전한 가정을 사용하고 보고한다.

다음은 구현 전에 확인한다.

- 결과가 크게 달라지는 Business Choice
- Brand Direction 변경
- 개인정보·법률 결정
- Breaking Change
- Production Release
- Scope의 의미 있는 확장

### 10.5 No Hidden Assumption

가정은 완료 보고에서 숨기지 않는다.

“요청이 불명확했다”는 이유로 임의의 대규모 결정을 하지 않는다.

---

## 11. Authority and Approval Boundaries

### 11.1 QA Approval

Project Manager는 정의된 Acceptance와 Evidence에 대해 QA Gate 통과 여부를 판단할 수 있다.

이 판단은 다음을 의미한다.

- 구현 검토 완료
- 필수 QA Evidence 확인
- 알려진 Blocker 없음
- Owner Review 준비 완료

### 11.2 Release Approval

Production Release 최종 승인은 Project Owner에게 있다.

Project Manager는 Release를 권고한다.

Implementation AI는 명시적인 배포 권한이 있을 때만 Release 작업을 수행한다.

### 11.3 Domain Approval

다음 영역은 해당 Reviewer의 확인이 필요하다.

- M&A·Valuation: Domain Reviewer
- Privacy·Legal: Legal/Privacy Reviewer
- Brand Identity: Brand Owner와 Project Owner
- Accessibility: Accessibility Reviewer
- Performance Regression: Performance Reviewer

### 11.4 Self-approval Restriction

High·Critical 변경은 구현자가 단독으로 승인하지 않는다.

같은 AI가 Implementation과 QA를 모두 수행한 경우 그 사실을 보고하고, 필요한 독립 Review를 요청한다.

---

## 12. Conflict Resolution

### 12.1 Principle

문서 충돌은 새 규칙을 즉석에서 만들어 해결하지 않는다.

먼저 각 문서의 책임 영역을 확인한다.

문서 계층, 승인 상태, Update Trigger와 상세 Decision Rule은 Chapter 3을 따른다.

### 12.2 Domain-based Authority

| Conflict Area | Primary Authority |
|---|---|
| Page Role·Business Requirement | `MASTER_SPEC.md` |
| Brand·Design Philosophy | `EQUIV_DESIGN_BIBLE.md`, `BRAND_GUIDE.md` |
| Token·Implementation Rule | `DESIGN_SYSTEM.md` |
| Component Contract | `COMPONENT_LIBRARY.md` |
| Pattern Composition | `COMPONENT_LIBRARY.md` Composition·Page Map, `SERVICE_PAGE_TEMPLATE.md` |
| Asset | `VISUAL_ASSET_GUIDE.md` |
| Content·Terminology | `CONTENT_UX_WRITING_SYSTEM.md`, `COPY_GUIDE.md` |
| AI Operating Process | `EQUIV_AI_OPERATING_MANUAL.md`, `AI_RULES.md` |
| QA·Approval·Release | `DESIGN_QA_GOVERNANCE.md` |
| Accepted Exception·Decision | `DECISION_LOG.md` |
| Change History | `CHANGELOG.md` |

### 12.3 Important Pattern Status

현재 독립 `PATTERN_LIBRARY.md`는 없다.

따라서 존재하지 않는 Pattern Library를 충돌 우선순위에 넣지 않는다.

현재 Pattern Authority는:

1. `COMPONENT_LIBRARY.md`의 Composition·Page Map
2. `SERVICE_PAGE_TEMPLATE.md`

다.

### 12.4 Decision Log Rule

`DECISION_LOG.md`는 단순 참고 문서가 아니다.

Accepted Decision이 기존 규칙의 승인된 예외 또는 변경을 명시하면 해당 Decision을 적용한다. 기존 Decision은 삭제하지 않고 새로운 Decision으로 Supersede한다.

### 12.5 Current User Direction

Project Owner의 현재 명시적 요청이 기존 기준 변경을 요구하면:

1. 충돌과 영향을 알린다.
2. 변경 범위를 확인한다.
3. 필요한 승인 문서를 업데이트한다.
4. QA와 Migration을 정의한다.
5. 구현한다.

침묵한 채 기존 문서를 무시하지 않는다.

### 12.6 Escalation

권한 문서만으로 해결할 수 없거나 서로 다른 Domain의 필수 규칙이 충돌하면 Project Manager가 대안을 정리하고 Project Owner에게 Escalation한다.

---

## 13. Handoff and Completion

### 13.1 PM to Implementation

PM Handoff에는 다음이 있어야 한다.

- Goal
- Scope
- Protected Area
- Source of Truth
- Acceptance
- QA
- Deliverables

### 13.2 Implementation to PM

Implementation Handoff에는 다음이 있어야 한다.

- Changed Result
- Changed Files
- Reused Assets
- QA Evidence
- Limitations
- Risks
- Documentation

### 13.3 PM to Owner

PM Review에는 다음이 있어야 한다.

- Outcome
- Acceptance Status
- Blocker
- Residual Risk
- Release Recommendation
- Owner Decision Required

### 13.4 Completion Definition

작업 완료는 다음을 의미한다.

- Scope가 구현되었다.
- Acceptance를 충족한다.
- 필요한 QA를 수행했다.
- 미검증 항목을 표시했다.
- 관련 문서를 갱신했다.
- Owner 결정이 필요한 항목을 분리했다.

작업 완료는 Production Release와 동일하지 않다.

---

## 14. Role-based Checklists

### 14.1 Project Owner

- [ ] Goal과 Priority가 명확한가?
- [ ] Must Keep과 Do Not Change가 명확한가?
- [ ] Material Scope를 승인했는가?
- [ ] Business·Brand 결과를 검토했는가?
- [ ] Residual Risk를 이해했는가?
- [ ] Production Release 여부를 최종 결정했는가?

### 14.2 Project Manager

- [ ] 요청을 분석했는가?
- [ ] Scope와 Non-scope를 정의했는가?
- [ ] 관련 문서를 확인했는가?
- [ ] Existing Component·Pattern Source 재사용을 검토했는가?
- [ ] Risk와 보호 영역을 정의했는가?
- [ ] Acceptance와 QA를 정의했는가?
- [ ] Evidence를 검토했는가?
- [ ] Documentation 반영을 확인했는가?
- [ ] Release 권고와 최종 승인을 구분했는가?

### 14.3 Implementation AI

- [ ] 실제 Source를 확인했는가?
- [ ] 기존 자산을 재사용했는가?
- [ ] 가장 작은 변경을 수행했는가?
- [ ] 관련 없는 변경을 보존했는가?
- [ ] 기능·Responsive·Accessibility 영향을 검증했는가?
- [ ] 수행한 QA와 미수행 QA를 구분했는가?
- [ ] 관련 문서를 업데이트했는가?
- [ ] 승인 범위를 넘지 않았는가?

### 14.4 Future AI

- [ ] Operating Manual과 AI Rules를 읽었는가?
- [ ] 제한된 Scope를 이해했는가?
- [ ] Source와 Evidence를 제공했는가?
- [ ] 가정과 Risk를 표시했는가?
- [ ] 승인권이 없는 결정을 하지 않았는가?

---

## 15. Success Criteria

- [ ] 역할이 명확하다.
- [ ] 중복 작업이 없다.
- [ ] 책임과 최종 Accountable이 명확하다.
- [ ] Work가 구현에 집중할 수 있다.
- [ ] ChatGPT가 분석·조정·QA에 집중할 수 있다.
- [ ] Project Owner가 필요한 결정을 빠르게 내릴 수 있다.
- [ ] QA Gate와 Production Release 승인이 구분된다.
- [ ] High·Critical 변경이 Self-approved 되지 않는다.
- [ ] 새로운 AI도 같은 문서와 Evidence를 사용한다.
- [ ] 현재 존재하지 않는 Pattern Library를 가정하지 않는다.
- [ ] 모든 Handoff가 추적 가능하다.

---

## 16. PM Note

이 Chapter의 목적은 AI의 능력을 정의하는 것이 아니다.

프로젝트를 효율적으로 운영하기 위해 각 참여자의 책임과 권한을 명확히 하는 것이다.

역할이 명확할수록 프로젝트는 단순해지고 유지보수는 쉬워진다.

모든 참여자는 새로운 것을 만드는 것보다 기존 프로젝트를 더 좋게 만드는 것을 우선한다.

AI는 분석하고 구현하고 검증할 수 있다.

그러나 EQUIV의 최종 사업 방향과 Production Release는 Project Owner가 결정한다.

---

# Chapter 3. Documentation Priority & Decision Rules

Version 1.0
Status: Approved Draft

---

## Chapter 3 Contents

1. Purpose
2. Core Principle
3. Documentation Model
4. Documentation Hierarchy
5. Document Purpose and Ownership
6. Document Usage Rules
7. Reference Rules
8. Decision Rules
9. Conflict Resolution
10. Documentation Update Rules
11. Documentation Principles
12. AI Decision Rules
13. Document Lifecycle and Status
14. Governance and Review
15. Operational Checklists
16. Success Criteria
17. PM Note

---

## 1. Purpose

이 Chapter는 EQUIV 프로젝트에서 사용하는 모든 운영 문서의 역할, 책임, 참조 순서와 충돌 해결 기준을 정의한다.

목적은 다음과 같다.

- 문서 간 중복 방지
- 문서 간 충돌 예방
- Source of Truth 명확화
- 작업 전 확인 순서 통일
- 변경 시 갱신 대상 명확화
- AI와 사람의 동일 기준 확보
- 승인된 Decision의 추적성 유지

이 Chapter는 새로운 전문 문서를 만드는 기준이 아니다.

이미 존재하는 문서를 가장 정확하고 효율적으로 활용하기 위한 운영 규칙이다.

---

## 2. Core Principle

모든 작업은 추측이 아니라 문서를 기반으로 수행한다.

작업을 시작하기 전에 관련 문서를 먼저 확인한다.

개인 선호나 AI의 일반 지식이 EQUIV의 승인 문서보다 앞서지 않는다.

### 2.1 Documentation Is an Operating Constraint

문서는 참고용 설명이 아니다.

문서에는 다음이 포함된다.

- Scope
- Contract
- Protected Area
- Approved Pattern
- Decision Boundary
- QA Criteria
- Release Requirement

구현이 문서와 다르면 문서를 무시하지 않는다. 구현 오류인지, 문서가 낡았는지, 승인된 예외인지 확인한다.

### 2.2 One Topic, One Source of Truth

동일한 규칙을 여러 문서에서 각각 관리하지 않는다.

한 문서는 해당 Domain의 원본 규칙을 가진다.

다른 문서는:

- 원본 문서를 참조하거나
- 필요한 요약만 제공하거나
- 해당 규칙이 적용되는 Gate를 정의한다.

복사된 동일 문장을 여러 문서에 독립적으로 유지하지 않는다.

### 2.3 Authority Is Role-based

모든 문서를 한 줄로 세워 단순 비교하지 않는다.

문서의 우선순위는:

1. 규칙이 속한 Domain
2. 문서의 승인 상태
3. 명시적인 Supersede 여부
4. 현재 요청의 Scope

를 함께 판단한다.

예:

- Color Token은 `DESIGN_SYSTEM.md`가 우선한다.
- Button Anatomy는 `COMPONENT_LIBRARY.md`가 우선한다.
- Production Release Gate는 `DESIGN_QA_GOVERNANCE.md`가 우선한다.
- AI 작업 순서는 `EQUIV_AI_OPERATING_MANUAL.md`가 우선한다.

---

## 3. Documentation Model

EQUIV 문서는 네 가지 유형으로 구분한다.

### 3.1 Direction Documents

프로젝트가 무엇이고 어떤 방향을 유지하는지 정의한다.

- `MASTER_SPEC.md`
- `EQUIV_DESIGN_BIBLE.md`
- `BRAND_GUIDE.md`

### 3.2 System and Domain Documents

특정 영역을 어떻게 설계·구현·운영하는지 정의한다.

- `DESIGN_SYSTEM.md`
- `COMPONENT_LIBRARY.md`
- `SERVICE_PAGE_TEMPLATE.md`
- `VISUAL_ASSET_GUIDE.md`
- `CONTENT_UX_WRITING_SYSTEM.md`
- `COPY_GUIDE.md`
- `VALUATION_MODEL_SPEC.md`

### 3.3 Operation and Governance Documents

작업과 검증을 어떤 순서와 권한으로 수행하는지 정의한다.

- `EQUIV_AI_OPERATING_MANUAL.md`
- `AI_RULES.md`
- `DESIGN_QA_GOVERNANCE.md`

### 3.4 Record Documents

결정, 변경과 미해결 작업의 이력을 기록한다.

- `DECISION_LOG.md`
- `CHANGELOG.md`
- `TODO.md`
- `EQUIV_CALIBRATION_LOG.md`

Record Document는 일반적으로 새로운 규칙을 만드는 문서가 아니다.

단, `DECISION_LOG.md`의 Accepted Decision은 명시된 범위에서 기존 규칙을 변경하거나 예외를 승인할 수 있다.

---

## 4. Documentation Hierarchy

### 4.1 Base Design and Product Cascade

기본 설계·제품 계층은 다음을 따른다.

| Level | Document | Primary Authority |
|---|---|---|
| 1 | `MASTER_SPEC.md` | Project Scope, Page Role, Information Architecture와 Feature |
| 2 | `EQUIV_DESIGN_BIBLE.md` | Brand, Design과 UX Philosophy |
| 3 | `DESIGN_SYSTEM.md` | Token, CSS와 Implementation Foundation |
| 4 | `COMPONENT_LIBRARY.md` | UI Component Contract, Variant와 State |
| 5 | Pattern Source | Page·Interaction·UX Composition |
| 6 | `VISUAL_ASSET_GUIDE.md` | Image, Icon, SVG와 Asset Governance |
| 7 | `CONTENT_UX_WRITING_SYSTEM.md` | Voice, Tone, Terminology와 UI Writing |
| 8 | `EQUIV_AI_OPERATING_MANUAL.md` | Operation Procedure, Role와 Documentation Use |
| 9 | `CHANGELOG.md` | Change History |
| 10 | `DECISION_LOG.md` | Accepted Decision Record |

이 표는 문서의 가치 순위가 아니다.

Level 1–8은 기본 참조 Cascade를 나타낸다. Level 9–10은 Record Layer이므로 일반 규칙과 같은 방식으로 하위 문서로 취급하지 않는다.

### 4.2 Pattern Source at Level 5

현재 독립 `PATTERN_LIBRARY.md`는 존재하지 않는다.

따라서 Level 5의 Pattern Source는 다음 두 문서가 공동으로 담당한다.

1. `COMPONENT_LIBRARY.md`의 Composition과 Page Map
2. `SERVICE_PAGE_TEMPLATE.md`

새로운 UX를 검토할 때 존재하지 않는 `PATTERN_LIBRARY.md`를 찾거나 참조 완료로 표시하지 않는다.

독립 Pattern Library가 승인·생성되면 Level 5 Source of Truth를 해당 문서로 이전하고 관련 참조를 갱신한다.

### 4.3 Operating Manual Position

Operating Manual이 Level 8에 표시되어 있다고 해서 운영 절차가 다른 문서의 일반 문장에 의해 자동 변경되는 것은 아니다.

이 문서는 다음 영역의 Primary Authority다.

- AI 작업 순서
- 역할과 책임
- Documentation Use
- Evidence와 완료 보고
- Escalation

Design Rule을 정할 때는 Design 문서를 따르고, 작업 절차를 정할 때는 Operating Manual을 따른다.

### 4.4 Decision Log Position

`DECISION_LOG.md`는 단순히 가장 낮은 우선순위의 문서가 아니다.

Accepted Decision은 다음 조건을 충족할 때 명시된 범위에서 기존 기준을 보완·변경한다.

- Decision ID
- Status: Accepted
- Owner와 Approver
- Context와 Reason
- Affected Scope
- Supersedes
- Version·Migration
- Review Date

Draft 또는 Proposed Decision은 기존 규칙을 변경하지 않는다.

### 4.5 Changelog Position

`CHANGELOG.md`는 무엇이 변경되었는지 기록한다.

Changelog는:

- 변경의 근거가 될 수 있지만
- 새로운 Design Rule을 승인하지 않으며
- Source of Truth를 대체하지 않고
- 현재 구현을 자동 승인하지 않는다.

Changelog와 전문 문서가 다르면 실제 Source, Accepted Decision과 전문 문서를 확인한다.

### 4.6 Additional Supporting Documents

다음 문서도 실제 운영에서 필수로 사용한다.

| Document | Role |
|---|---|
| `BRAND_GUIDE.md` | Brand Identity, Logo와 Brand Expression |
| `COPY_GUIDE.md` | 현재 Website Copy의 실무 적용 |
| `AI_RULES.md` | AI의 기본 금지·우선 행동 |
| `DESIGN_QA_GOVERNANCE.md` | QA Evidence, Approval와 Release Gate |
| `VALUATION_MODEL_SPEC.md` | Business Valuation Domain Logic |
| `EQUIV_CALIBRATION_LOG.md` | Calibration 변경·검증 기록 |
| `TODO.md` | 미완료 작업과 후속 계획 |

이 문서들은 단순 Level 숫자에 끼워 넣기보다 해당 Domain에서 직접 참조한다.

---

## 5. Document Purpose and Ownership

### 5.1 MASTER_SPEC

Purpose:

- 프로젝트 전체 구조
- Scope
- Information Architecture
- Page Type과 Page Role
- Feature Definition
- Protected Function
- Business Requirement

Use When:

- Page를 추가·삭제·재분류할 때
- User Flow를 변경할 때
- Business Valuation과 Service Page 역할을 판단할 때
- 기능 Scope를 확인할 때

Must Not:

- 세부 Token 값을 관리하지 않는다.
- Component의 세부 Anatomy를 반복하지 않는다.
- Changelog 역할을 대신하지 않는다.

### 5.2 EQUIV_DESIGN_BIBLE

Purpose:

- Brand Philosophy
- Design Principle
- UX Principle
- Visual Philosophy
- Responsive Experience
- Content와 Quality의 상위 원칙

Use When:

- 시각적·경험적 방향을 판단할 때
- 새로운 Proposal이 브랜드와 일치하는지 검토할 때
- Page 간 일관성을 평가할 때

Must Not:

- Component별 코드 계약을 관리하지 않는다.
- Sprint별 구현 이력을 기록하지 않는다.

### 5.3 DESIGN_SYSTEM

Purpose:

- Foundation·Semantic·Component Token
- Color
- Typography
- Spacing
- Container와 Grid
- Radius
- Shadow
- Motion
- CSS Architecture Rule

Use When:

- Style 값을 변경할 때
- Token을 추가·수정할 때
- Responsive Foundation을 조정할 때
- Component가 참조할 공통 값을 찾을 때

Must Not:

- 페이지 전용 값을 무분별하게 추가하지 않는다.
- Component Usage를 중복 정의하지 않는다.

### 5.4 COMPONENT_LIBRARY

Purpose:

- UI Component Inventory
- Anatomy
- Variant
- State
- Dependency
- Responsive Contract
- Accessibility Contract
- Lifecycle

Use When:

- Component를 사용·수정·추가할 때
- 기존 Variant로 해결 가능한지 판단할 때
- Consumer Impact를 검토할 때

Must Not:

- Token의 원본 값을 소유하지 않는다.
- Page 하나를 위한 중복 Component를 승인하지 않는다.

### 5.5 Pattern Source

Purpose:

- User Flow
- Page Composition
- Interaction Pattern
- UX Pattern
- Component Combination

Current Sources:

- `COMPONENT_LIBRARY.md` Composition·Page Map
- `SERVICE_PAGE_TEMPLATE.md`

Use When:

- 새로운 User Flow를 만들 때
- Page Structure를 변경할 때
- 여러 Component를 반복 조합할 때

### 5.6 VISUAL_ASSET_GUIDE

Purpose:

- Image
- Icon
- SVG
- Photography
- Illustration
- Background
- Asset Naming
- Optimization
- Rights와 Lifecycle

Use When:

- Asset을 추가·교체·삭제할 때
- 포맷과 해상도를 결정할 때
- Alt Text와 Asset Accessibility를 검토할 때

### 5.7 CONTENT_UX_WRITING_SYSTEM

Purpose:

- Voice
- Tone
- Terminology
- CTA
- Button
- Form
- Error
- Success Message
- Article와 SEO Writing

Use When:

- 새로운 Copy를 작성할 때
- 서비스 문구를 통일할 때
- Form·Modal State 문구를 변경할 때

`COPY_GUIDE.md`는 현재 Website Copy의 실무 적용과 간결성 기준을 보완한다.

### 5.8 EQUIV_AI_OPERATING_MANUAL

Purpose:

- Operation Procedure
- Work Sequence
- AI Role
- Responsibility
- Documentation Use
- Evidence
- Escalation

Use When:

- 모든 작업을 시작할 때
- 역할과 승인 경계를 판단할 때
- 완료와 Release를 구분할 때
- 문서 충돌을 처리할 때

### 5.9 DESIGN_QA_GOVERNANCE

Purpose:

- QA Standard
- Evidence
- Review
- Approval Gate
- Release
- Risk
- Design Debt
- Incident와 Hotfix

Use When:

- QA 범위를 정할 때
- Release 가능성을 검토할 때
- Exception과 Risk를 승인할 때

### 5.10 CHANGELOG

Purpose:

- 프로젝트 변경 이력
- Version별 Change Summary
- Documentation Change

Changelog는 실제 변경 후 갱신한다.

### 5.11 DECISION_LOG

Purpose:

- 중요한 결정의 Context
- Alternatives
- Reason
- Impact
- Approval
- Supersede History

Decision Log는 “무엇을 바꿨는가”가 아니라 “왜 그 결정을 승인했는가”를 기록한다.

### 5.12 TODO

Purpose:

- 미완료 작업
- 검증 필요 항목
- Deferred Scope
- Follow-up

TODO는 승인된 현재 기능을 정의하지 않는다.

---

## 6. Document Usage Rules

### 6.1 Universal Start

모든 참여자는 작업 전에 다음을 확인한다.

1. `EQUIV_AI_OPERATING_MANUAL.md`
2. `AI_RULES.md`
3. `MASTER_SPEC.md`
4. 최근 `DECISION_LOG.md`, `CHANGELOG.md`, `TODO.md`

그 후 작업 Domain에 맞는 전문 문서를 확인한다.

### 6.2 Standard Task Sequence

실제 수정 순서는 다음과 같다.

1. `MASTER_SPEC.md`에서 Project·Page Role 확인
2. 관련 Page와 실제 Source 확인
3. `EQUIV_DESIGN_BIBLE.md`에서 상위 원칙 확인
4. `COMPONENT_LIBRARY.md`에서 Existing Component 확인
5. Pattern Source에서 Existing Composition 확인
6. `DESIGN_SYSTEM.md`에서 Token·Implementation Rule 확인
7. Asset이 포함되면 `VISUAL_ASSET_GUIDE.md` 확인
8. Copy가 포함되면 `CONTENT_UX_WRITING_SYSTEM.md`와 `COPY_GUIDE.md` 확인
9. Domain Logic이 포함되면 해당 Spec 확인
10. `DESIGN_QA_GOVERNANCE.md`에서 QA와 Release Gate 확인
11. 수정 작업 진행
12. 검증과 문서 동기화

### 6.3 Read by Change Type

모든 문서를 매번 기계적으로 전부 읽는 것이 목적은 아니다.

필수 공통 문서와 변경 Domain 문서를 정확히 선택하는 것이 목적이다.

| Change | Must Read |
|---|---|
| Header·Hero·Layout | Master, Design Bible, Design System, Component Library |
| Service Page | Master, Service Template, Component Library, Content System |
| Business Valuation | Master, Valuation Spec, Component Library, QA Governance |
| Copy | Content System, Copy Guide, Brand Guide |
| Asset | Visual Asset Guide, Brand Guide, Design System |
| Component | Component Library, Design System, QA Governance |
| Release | Operating Manual, QA Governance, Decision, Changelog, TODO |

### 6.4 Verify Current State

문서만 읽고 실제 구현을 추측하지 않는다.

반드시 확인한다.

- 파일 존재 여부
- 현재 Consumer
- 실제 Data Source
- Version 또는 Status
- 최근 변경
- 미완료 TODO

---

## 7. Reference Rules

### 7.1 Component

새로운 Component를 만들기 전에 `COMPONENT_LIBRARY.md`를 먼저 확인한다.

판단 순서:

1. Existing Component
2. Existing Variant
3. Existing State
4. Existing Composition
5. Minimal Extension
6. New Component Proposal

### 7.2 Pattern

새로운 UX를 만들기 전에 현재 Pattern Source를 확인한다.

독립 Pattern Library가 없으므로:

- `COMPONENT_LIBRARY.md` Composition·Page Map
- `SERVICE_PAGE_TEMPLATE.md`

를 확인한다.

### 7.3 Style

새로운 Style 값을 만들기 전에 `DESIGN_SYSTEM.md`를 확인한다.

하드코딩 전에:

- Existing Token
- Semantic Token
- Component Token
- Responsive Token

순으로 검토한다.

### 7.4 Content

새 Copy를 작성하기 전에 `CONTENT_UX_WRITING_SYSTEM.md`와 `COPY_GUIDE.md`를 확인한다.

기존 Terminology와 동일 Action에는 동일 Label을 사용한다.

### 7.5 Asset

새 이미지·Icon·SVG를 만들기 전에 `VISUAL_ASSET_GUIDE.md`를 확인한다.

기존 Asset 재사용, 권리, 포맷, 최적화와 접근성을 먼저 검토한다.

### 7.6 New Rule

새로운 Rule은 기존 문서와 Component로 해결할 수 없을 때만 검토한다.

필요성 판단:

- 반복 Consumer가 있는가?
- 기존 규칙으로 표현할 수 없는가?
- 장기적으로 재사용 가능한가?
- Migration과 Owner가 있는가?
- 문서 증가 비용보다 가치가 큰가?

---

## 8. Decision Rules

### 8.1 Evidence Before Decision

AI는 결정을 제안하기 전에 다음을 확인한다.

- User Goal
- Actual Source
- Existing Documentation
- Existing Decision
- Affected Consumer
- Risk
- Reversibility

### 8.2 Decision Types

| Type | Example | Required Record |
|---|---|---|
| Routine | Copy 오탈자, 명확한 Bug | Changelog |
| Local | 한 Component의 비파괴 개선 | Changelog, 필요 시 Component Doc |
| System | Token, Shared Component, Pattern | Proposal, Domain Doc, Changelog |
| Major | Architecture, Page Role, Brand Rule | Decision Log, Migration, Approval |
| Emergency | Production Blocker Hotfix | Incident·Hotfix Record, Changelog |

### 8.3 Reversible Decision

영향이 작고 쉽게 되돌릴 수 있는 변경은 가장 작은 안전한 가정으로 진행할 수 있다.

가정과 결과를 보고한다.

### 8.4 Irreversible or Material Decision

다음은 Project Owner 확인 전에 임의 결정하지 않는다.

- Brand Direction
- Page Architecture
- Breaking Component
- Production Release
- 개인정보·법률
- External Integration
- Valuation Logic
- 대규모 Content Removal

### 8.5 Decision Log Trigger

다음 중 하나면 `DECISION_LOG.md`를 검토한다.

- 장기적으로 다시 논의될 가능성이 있다.
- 기존 원칙을 변경한다.
- 여러 Page·Component에 영향을 준다.
- Breaking Change다.
- 승인된 예외를 만든다.
- Architecture 또는 Governance를 변경한다.

### 8.6 Supersede Rule

기존 Accepted Decision을 삭제·수정해 과거를 지우지 않는다.

새 Decision을 만들고:

- `Supersedes`
- 변경 이유
- Migration
- 영향

을 기록한다.

---

## 9. Conflict Resolution

### 9.1 First Question: Is It a Real Conflict?

표현이 다르다고 모두 충돌은 아니다.

먼저 확인한다.

- 서로 다른 Domain을 설명하는가?
- 한 문서는 원칙, 다른 문서는 구현인가?
- 한 문서는 현재 상태, 다른 문서는 이력인가?
- 한 문서는 요약, 다른 문서는 상세인가?

### 9.2 Base Conflict Cascade

동일 Domain에서 실제 충돌하면 기본적으로 다음을 검토한다.

`MASTER_SPEC → Design Bible → Design System → Component Library → Pattern Source → Visual Asset Guide → Content System → Operating Manual`

그러나 각 문서가 자신의 책임 영역에서만 권한을 가진다는 원칙을 유지한다.

### 9.3 Records Are Not Lower Rules

`CHANGELOG.md`와 `DECISION_LOG.md`는 위 Cascade 뒤에 단순히 놓이는 하위 규칙이 아니다.

- Changelog: 과거 변경의 Evidence
- Accepted Decision: 승인된 변경·예외의 Authority

Accepted Decision이 명확하게 기존 규칙을 Supersede하면 Decision을 적용하고 원본 전문 문서를 함께 갱신해야 한다.

### 9.4 Current Project Owner Instruction

현재 Project Owner의 명시적 요청이 기존 문서 변경을 요구하면:

1. 충돌을 확인한다.
2. 영향과 Risk를 설명한다.
3. 변경 승인 범위를 확인한다.
4. 관련 Source of Truth를 갱신한다.
5. 필요한 Decision과 Migration을 기록한다.

명시적 요청을 적용하면서 기존 문서를 낡은 상태로 방치하지 않는다.

### 9.5 Version and Status

동일 책임을 가진 문서가 둘 이상이면 다음을 확인한다.

1. Active·Approved Status
2. Version
3. Accepted Decision
4. Supersedes
5. Owner

파일 수정일이 더 최근이라는 이유만으로 자동 우선하지 않는다.

### 9.6 Unresolved Conflict

해결할 수 없는 충돌은 Project Manager가 다음을 준비해 Project Owner에게 Escalation한다.

- Conflict
- Affected Scope
- Option A·B
- Risk
- Recommendation
- Required Decision

승인 전 임의로 새 Rule을 만들지 않는다.

---

## 10. Documentation Update Rules

모든 수정이 모든 문서의 변경을 의미하지는 않는다.

변경의 Source of Truth만 갱신하고 다른 문서는 필요한 참조만 수정한다.

### 10.1 Update Matrix

| Change | Primary Update |
|---|---|
| Project Scope·Page Role·Feature | `MASTER_SPEC.md` |
| Brand·Design·UX Principle | `EQUIV_DESIGN_BIBLE.md`, 필요 시 `BRAND_GUIDE.md` |
| Token·CSS Foundation | `DESIGN_SYSTEM.md` |
| Component Structure·Variant·State | `COMPONENT_LIBRARY.md` |
| Page·Interaction Pattern | 현재 Pattern Source |
| Asset Policy | `VISUAL_ASSET_GUIDE.md` |
| Voice·Tone·Terminology | `CONTENT_UX_WRITING_SYSTEM.md` |
| Website Copy Application | `COPY_GUIDE.md` |
| AI Operation·Role·Decision Process | `EQUIV_AI_OPERATING_MANUAL.md`, 필요 시 `AI_RULES.md` |
| QA·Approval·Release | `DESIGN_QA_GOVERNANCE.md` |
| Valuation Model | `VALUATION_MODEL_SPEC.md`, 필요 시 Calibration Log |
| Important Structural Decision | `DECISION_LOG.md` |
| Implemented Change | `CHANGELOG.md` |
| Deferred or Unverified Work | `TODO.md` |

### 10.2 Changelog Trigger

다음 실제 변경은 Changelog에 기록한다.

- 기능
- 구조
- Public Copy
- Design
- Component
- Pattern
- Accessibility
- Performance
- Documentation Governance

단순 조사나 변경 없는 검토는 Changelog에 Release Change처럼 기록하지 않는다.

### 10.3 Decision Trigger

Routine Bug Fix마다 Decision Log를 만들지 않는다.

System·Major Change, 승인된 예외와 장기적으로 중요한 선택만 기록한다.

### 10.4 Pattern Update

현재는 독립 Pattern Library 대신 실제 Pattern Source를 수정한다.

존재하지 않는 문서에 Update 완료를 기록하지 않는다.

### 10.5 Cross-reference Update

문서명, 책임 또는 Source of Truth가 바뀌면 해당 문서를 참조하는 위치를 검색하고 함께 갱신한다.

### 10.6 Documentation Is Part of Done

필요한 문서 업데이트가 누락되면 작업은 완료되지 않았다.

---

## 11. Documentation Principles

### 11.1 Minimal

문서는 필요한 만큼만 수정한다.

작은 변경을 이유로 전체 문서를 재작성하지 않는다.

### 11.2 No Duplication

이미 존재하는 문서를 중복 생성하지 않는다.

같은 규칙을 여러 문서에 복사하지 않는다.

### 11.3 Single Responsibility

한 문서는 하나의 명확한 역할을 가진다.

전문 문서가 다른 Domain의 세부 규칙을 흡수하지 않는다.

### 11.4 Traceable

중요한 변경은 다음을 추적할 수 있어야 한다.

- 무엇이 변경되었는가?
- 왜 변경되었는가?
- 누가 승인했는가?
- 어떤 문서와 Consumer가 영향을 받는가?
- 어떻게 되돌리는가?

### 11.5 Current

문서는 실제 구현과 일치해야 한다.

Planned 기능을 Active처럼 설명하지 않는다.

### 11.6 Searchable

공식 파일명, Component명, Decision ID와 Terminology를 일관되게 사용한다.

### 11.7 No Documentation Theater

문서를 업데이트했다는 사실 자체가 품질을 보장하지 않는다.

문서가 실제 Source, Decision과 QA Evidence를 정확하게 반영해야 한다.

---

## 12. AI Decision Rules

### 12.1 Follow Existing Documentation

AI는 기존 문서를 우선적으로 따른다.

문서와 충돌하는 새로운 구조를 임의로 제안·구현하지 않는다.

### 12.2 Verify, Do Not Assume

AI는 다음을 추측하지 않는다.

- 파일 존재
- Component 상태
- Pattern Library 존재
- Production 배포
- Browser QA
- External Integration
- 승인 상태

### 12.3 Maintain Existing Project

AI는 기존 프로젝트를 최대한 유지하면서 개선한다.

기본 판단:

`Reuse > Extend > Create`

### 12.4 Distinguish Proposal and Approval

AI가 제안한 내용은 승인된 Rule이 아니다.

다음을 구분한다.

- Proposal
- Approved Draft
- Active
- Deprecated
- Archived

### 12.5 Explain Conflict

문서 충돌을 발견하면:

- 숨기지 않는다.
- 임의로 한쪽을 삭제하지 않는다.
- 책임 영역을 구분한다.
- 영향과 권고를 보고한다.

### 12.6 No Unrequested Framework

기존 문서로 해결 가능한 경우 새로운 Framework, Library, Layer 또는 Governance 문서를 만들지 않는다.

---

## 13. Document Lifecycle and Status

### 13.1 Status

| Status | Meaning |
|---|---|
| Draft | 검토 전 초안 |
| Approved Draft | 방향 승인, 운영 적용 가능 |
| Active | 현재 공식 운영 기준 |
| Deprecated | 신규 사용 금지, Migration 진행 |
| Archived | 이력 보존, 현재 적용 금지 |

### 13.2 New Document Gate

새 문서는 다음 조건을 모두 검토한다.

- 기존 문서로 해결 불가능한가?
- 독립 책임이 있는가?
- 반복 Consumer가 있는가?
- Owner가 있는가?
- Maintenance 비용을 감당할 수 있는가?
- 기존 문서와 경계가 명확한가?
- Decision 또는 Approval이 있는가?

### 13.3 Deprecation

문서를 Deprecated할 때:

- 대체 문서
- Migration 기간
- Affected Reference
- Archive 위치
- Owner

를 기록한다.

파일을 즉시 삭제해 과거 Context를 잃지 않는다.

### 13.4 Review

문서는 다음 시점에 검토한다.

- Major Change
- Domain Owner 변경
- 반복 충돌 발생
- Release 전
- 정기 Governance Audit

---

## 14. Governance and Review

### 14.1 Owner

각 문서는 명확한 Owner를 가져야 한다.

Owner는:

- Scope 유지
- 중복 방지
- Version 관리
- Review 조정
- Deprecated 결정

을 책임진다.

### 14.2 Review Questions

- 이 문서가 자신의 역할만 수행하는가?
- 다른 문서와 동일 규칙을 중복 관리하는가?
- 실제 구현과 일치하는가?
- Status와 Version이 명확한가?
- 참조 링크가 유효한가?
- 존재하지 않는 기능을 설명하는가?
- 최근 Decision이 반영되었는가?

### 14.3 Documentation Debt

다음은 Documentation Debt다.

- 구현과 문서 불일치
- 중복 Source of Truth
- Owner 없는 문서
- Deprecated 참조
- Broken Link
- Planned 기능의 Active 표기
- 이유 없는 새 문서

Risk에 따라 `TODO.md` 또는 Governance Debt Register에 기록한다.

---

## 15. Operational Checklists

### 15.1 Before Work

- [ ] Operating Manual을 확인했다.
- [ ] AI Rules를 확인했다.
- [ ] Master Spec에서 Scope와 Page Role을 확인했다.
- [ ] 실제 관련 Page와 Source를 확인했다.
- [ ] Design Bible을 확인했다.
- [ ] Existing Component를 확인했다.
- [ ] Existing Pattern Source를 확인했다.
- [ ] Design System Token을 확인했다.
- [ ] Asset·Content·Domain 문서를 필요에 따라 확인했다.
- [ ] Accepted Decision과 최근 Changelog를 확인했다.
- [ ] 미완료 TODO를 확인했다.

### 15.2 Before New Component·Pattern·Rule

- [ ] 기존 Component로 해결 가능한가?
- [ ] Variant 또는 State로 해결 가능한가?
- [ ] Existing Composition이 있는가?
- [ ] 기존 Token으로 해결 가능한가?
- [ ] 새 Rule이 반복 사용되는가?
- [ ] Owner와 Consumer가 있는가?
- [ ] Proposal과 Approval이 필요한가?

### 15.3 After Work

- [ ] Primary Source of Truth를 갱신했는가?
- [ ] 중복 문장을 만들지 않았는가?
- [ ] 관련 Cross-reference를 갱신했는가?
- [ ] Changelog를 기록했는가?
- [ ] Decision Log가 필요한지 검토했는가?
- [ ] 미완료 항목을 TODO에 기록했는가?
- [ ] 문서와 실제 Source가 일치하는가?
- [ ] 변경한 문서의 Status와 Owner가 유효한가?

### 15.4 Conflict Review

- [ ] 동일 Domain의 실제 충돌인가?
- [ ] 각 문서의 책임을 확인했는가?
- [ ] Accepted Decision이 있는가?
- [ ] Supersede가 명시되어 있는가?
- [ ] Project Owner 판단이 필요한가?
- [ ] 결과를 관련 문서에 동기화했는가?

---

## 16. Success Criteria

- [ ] 모든 문서의 역할이 명확하다.
- [ ] 문서 간 중복 Source of Truth가 없다.
- [ ] Work가 어떤 문서를 확인해야 하는지 명확하다.
- [ ] ChatGPT가 동일한 기준으로 Review할 수 있다.
- [ ] 새로운 AI도 Project Context를 이해할 수 있다.
- [ ] 문서 충돌을 Domain과 승인 상태로 해결할 수 있다.
- [ ] Accepted Decision을 단순 하위 기록으로 오인하지 않는다.
- [ ] Changelog를 규칙 문서로 오인하지 않는다.
- [ ] 현재 없는 Pattern Library를 존재한다고 가정하지 않는다.
- [ ] 새로운 문서는 기존 문서로 해결할 수 없을 때만 검토한다.
- [ ] 구현과 문서가 동기화된다.
- [ ] 프로젝트가 장기적으로 유지 가능하다.

---

## 17. PM Note

이 Chapter의 목적은 문서를 늘리는 것이 아니다.

이미 존재하는 문서를 가장 효율적으로 사용하는 기준을 만드는 것이다.

앞으로 새로운 기능이 추가되더라도 가능한 한 기존 문서를 활용한다.

새로운 문서는 기존 문서로 해결할 수 없는 경우에만 추가를 검토한다.

프로젝트의 성장 속도보다 문서의 일관성과 사실성을 우선한다.

문서의 숫자가 많아지는 것은 성숙함의 증거가 아니다.

필요한 규칙을 한 곳에서 정확하게 찾을 수 있는 상태가 성숙한 Documentation System이다.

---

# Chapter 4. Development & Modification Workflow

Version 1.0
Status: Approved Draft

---

## Chapter 4 Contents

1. Purpose
2. Core Workflow
3. Workflow Application Rules
4. Step 1 — Request
5. Step 2 — Requirement Analysis
6. Step 3 — Documentation Review
7. Step 4 — Impact Analysis
8. Step 5 — Implementation Plan
9. Step 6 — Development
10. Step 7 — Quality Assurance
11. Step 8 — Documentation Update
12. Step 9 — Release
13. Modification Principles
14. Standard Workflows
15. Escalation Rules
16. Workflow Records and Templates
17. Operational Checklists
18. Success Criteria
19. PM Note

---

## 1. Purpose

이 Chapter는 EQUIV 프로젝트의 모든 개발, 수정, 유지보수와 신규 Page 작업이 동일한 절차로 수행되도록 정의한다.

모든 작업은 빠르게 구현하는 것이 아니라 다음을 목표로 한다.

- 요구사항을 정확하게 이해한다.
- 기존 프로젝트의 일관성을 유지한다.
- 변경 범위를 최소화한다.
- 재사용 가능한 구조를 보존한다.
- Regression을 예방한다.
- 검증 가능한 Evidence를 남긴다.
- 문서와 구현을 동기화한다.
- 승인된 상태만 Release한다.

이 Workflow는 ChatGPT, Work, Codex, 사람과 향후 참여하는 모든 AI에 동일하게 적용한다.

---

## 2. Core Workflow

모든 작업은 다음 순서를 따른다.

`Request`

`↓`

`Requirement Analysis`

`↓`

`Documentation Review`

`↓`

`Impact Analysis`

`↓`

`Implementation Plan`

`↓`

`Development`

`↓`

`Quality Assurance`

`↓`

`Documentation Update`

`↓`

`Release`

### 2.1 No Silent Skip

어느 단계도 설명 없이 생략하지 않는다.

작업 성격상 특정 단계가 적용되지 않으면 삭제하지 않고 `N/A`와 근거를 기록한다.

예:

- Copy 오탈자 수정에서 Performance 측정: `N/A — Runtime과 Asset 변경 없음`
- 문서 전용 변경에서 Browser Visual QA: `N/A — UI Source 변경 없음`
- Local Draft에서 Production Release: `N/A — Owner가 배포를 요청하지 않음`

### 2.2 Scale by Risk

모든 작업이 같은 양의 문서와 QA를 요구하지는 않는다.

Workflow 단계는 유지하되 Evidence의 깊이는 Risk에 비례한다.

| Risk | Example | Workflow Depth |
|---|---|---|
| Low | 오탈자, 링크 문구 | 간결한 분석·정적 검증 |
| Medium | UI·Responsive·Component Style | 영향 분석·Browser QA |
| High | Shared Component Behavior, Form, Modal | 다중 Consumer·A11y·Regression |
| Critical | Valuation Logic, Privacy, Release Architecture | 독립 Review·Owner 승인·Rollback |

### 2.3 Work Completion vs Release

Development 완료, QA 완료와 Production Release는 서로 다른 상태다.

- **Implementation Complete**: 수정이 Source에 반영됨
- **QA Complete**: 정의된 Evidence와 Acceptance 충족
- **Release Ready**: 문서, Risk, Rollback과 승인 준비 완료
- **Released**: Project Owner 승인 후 대상 환경에 배포됨

문서 전용 작업에서 Release는 승인 가능한 Documentation Handoff를 의미할 수 있다. 실제 Production 배포를 자동 의미하지 않는다.

---

## 3. Workflow Application Rules

### 3.1 Applies To

- Bug Fix
- UI Improvement
- UX Improvement
- Content Update
- Responsive Fix
- Accessibility Improvement
- Performance Optimization
- Component Update
- Pattern Update
- New Page
- Feature Enhancement
- Documentation Change
- Refactoring
- Hotfix

### 3.2 Roles

| Stage | Accountable Role | Responsible Role |
|---|---|---|
| Request | Project Owner | Project Owner·PM |
| Requirement Analysis | Project Manager | Project Manager |
| Documentation Review | Project Manager | PM·Implementation AI |
| Impact Analysis | Project Manager | PM·Implementation AI·Reviewer |
| Implementation Plan | Project Manager | Project Manager |
| Development | Engineering/Implementation | Implementation AI |
| Quality Assurance | Project Manager | Implementation AI·QA·Reviewer |
| Documentation Update | Project Manager | Implementation AI·Document Owner |
| Production Release | Project Owner | Authorized Operator |

역할의 상세 권한은 Chapter 2를 따른다.

### 3.3 Required Outputs

각 작업에는 최소 다음 Output이 있어야 한다.

- 분류된 Request
- 명확한 Acceptance Criteria
- 확인한 Documentation
- Impact Summary
- Implementation Plan
- 변경 Diff
- QA Evidence
- Documentation Decision
- Release 또는 Handoff Status

---

## 4. Step 1 — Request

### 4.1 Objective

사용자의 수정 또는 신규 요청을 작업 가능한 단위로 접수한다.

### 4.2 Request Classification

요청은 하나 이상의 유형으로 분류한다.

| Type | Definition |
|---|---|
| Bug Fix | 의도된 동작과 실제 동작의 차이 수정 |
| UI Improvement | 시각적 품질·일관성 개선 |
| UX Improvement | 사용자 흐름·이해·행동 개선 |
| Content Update | Public Copy·Label·Message 수정 |
| Responsive Fix | Device·Viewport별 문제 수정 |
| Accessibility Improvement | Keyboard·Focus·ARIA·Contrast 등 개선 |
| Performance Optimization | Loading·Runtime·Asset·CWV 개선 |
| Component Update | Shared Component Contract·Variant·State 수정 |
| Pattern Update | 반복 Flow·Page Composition 수정 |
| New Page | 승인된 Architecture 안의 Page 추가 |
| Feature Enhancement | 기존 기능의 비파괴 확장 |
| Refactoring | 외부 동작 유지 상태의 내부 구조 개선 |
| Documentation Change | 운영·전문 문서만 수정 |
| Hotfix | Production Blocker의 긴급 수정 |

### 4.3 Request Record

최소 기록:

- Requester
- Date
- Goal
- Target Page·Component
- Requested Change
- Must Keep
- Do Not Change
- Expected Result

### 4.4 Intake Questions

- 사용자가 해결하려는 문제는 무엇인가?
- 어떤 화면·기능·문구가 대상인가?
- 현재 동작과 기대 동작은 무엇인가?
- 보호해야 할 기능은 무엇인가?
- Desktop·Tablet·Mobile 중 어느 범위인가?
- 외부 연동이나 Production 변경이 포함되는가?

### 4.5 Request Boundary

요청에 포함되지 않은 변경을 자동으로 추가하지 않는다.

예:

- Header 수정 요청으로 Footer를 변경하지 않는다.
- Copy 변경 요청으로 Layout을 재설계하지 않는다.
- Mobile 수정 요청으로 Desktop Token을 변경하지 않는다.
- 문서 작성 요청으로 Production Deploy를 수행하지 않는다.

### 4.6 Output

- Request Type
- Initial Scope
- Known Constraint
- Clarification Need

---

## 5. Step 2 — Requirement Analysis

### 5.1 Owner

Project Manager가 요구사항을 분석한다.

### 5.2 Required Analysis

반드시 확인한다.

- 수정 목적
- 사용자 기대 결과
- Business Goal
- Page Role
- 영향 범위
- 기존 기능과의 관계
- 기존 Page와의 일관성
- Must Keep
- Do Not Change
- Acceptance Criteria
- Validation Method

### 5.3 Problem Statement

요청 문장을 그대로 반복하지 않는다.

다음 형식으로 문제를 정의한다.

> 현재 [대상]에서 [문제]가 발생하여 [사용자 영향]이 있다. [보호 영역]을 유지하면서 [기대 결과]를 달성한다.

### 5.4 Scope

Scope를 세 부분으로 나눈다.

- **In Scope**: 이번 작업에서 반드시 변경
- **Out of Scope**: 이번 작업에서 변경하지 않음
- **Protected**: Regression이 발생하면 안 되는 기능

### 5.5 Acceptance Criteria

Acceptance Criteria는 검증 가능해야 한다.

Bad:

- 더 Premium하게 만든다.
- 자연스럽게 보이게 한다.

Good:

- Header 높이는 지정 Token을 사용한다.
- 360·390·430px에서 Logo와 Menu가 충돌하지 않는다.
- ESC, Overlay와 Close Button으로 Modal이 닫힌다.
- 기존 Valuation Engine 결과는 변경되지 않는다.

정성적 목표가 포함되면 기준 Screenshot 또는 비교 화면을 함께 사용한다.

### 5.6 Clarification Rule

불명확한 요구사항은 먼저 Source와 Documentation에서 확인한다.

다음은 구현 전에 Project Owner에게 확인한다.

- 결과를 크게 바꾸는 선택
- Page Role 변경
- Brand Direction 변경
- 개인정보·법률 판단
- Core Logic 변경
- Production Release

영향이 작고 가역적인 세부 사항은 안전한 가정을 사용하고 완료 보고에 명시할 수 있다.

### 5.7 Output

- Problem Statement
- Goal
- In Scope
- Out of Scope
- Protected Areas
- Acceptance Criteria
- Open Questions

---

## 6. Step 3 — Documentation Review

### 6.1 Principle

구현 전에 기존 문서를 검토한다.

기존 문서로 해결 가능하면 새로운 구조를 만들지 않는다.

### 6.2 Basic Review Order

1. `EQUIV_AI_OPERATING_MANUAL.md`
2. `AI_RULES.md`
3. `MASTER_SPEC.md`
4. 실제 관련 Page와 Source
5. `EQUIV_DESIGN_BIBLE.md`
6. `COMPONENT_LIBRARY.md`
7. 현재 Pattern Source
8. `DESIGN_SYSTEM.md`
9. `VISUAL_ASSET_GUIDE.md`
10. `CONTENT_UX_WRITING_SYSTEM.md`, `COPY_GUIDE.md`
11. 관련 Domain Spec
12. `DESIGN_QA_GOVERNANCE.md`
13. `DECISION_LOG.md`, `CHANGELOG.md`, `TODO.md`

문서 우선순위와 상세 책임은 Chapter 3을 따른다.

### 6.3 Pattern Review

현재 독립 `PATTERN_LIBRARY.md`는 없다.

Pattern 확인은 다음으로 수행한다.

- `COMPONENT_LIBRARY.md`의 Composition·Page Map
- `SERVICE_PAGE_TEMPLATE.md`

존재하지 않는 문서의 검토를 완료했다고 표시하지 않는다.

### 6.4 Review by Change Type

| Change | Additional Required Documents |
|---|---|
| Brand·Visual | Brand Guide, Design Bible, Visual Asset Guide |
| Token·CSS | Design System, Component Library |
| Component | Component Library, Design System, QA Governance |
| Service Page | Master Spec, Service Template, Content System |
| Copy | Content System, Copy Guide |
| Valuation | Valuation Model Spec, Calibration Log |
| Release | QA Governance, Decision Log, Changelog, TODO |

### 6.5 Documentation Findings

다음을 기록한다.

- Relevant Rule
- Existing Component
- Existing Pattern
- Protected Area
- Known Decision
- Known TODO
- Documentation Conflict

### 6.6 Output

- Reviewed Documents
- Applicable Rules
- Reuse Candidate
- Conflict or Gap

---

## 7. Step 4 — Impact Analysis

### 7.1 Objective

수정이 직접 대상과 프로젝트 전체에 미치는 영향을 검토한다.

### 7.2 Impact Domains

반드시 해당 여부를 판단한다.

- 다른 Page
- Shared Component
- Pattern
- Token
- Responsive
- Accessibility
- JavaScript
- Data·State
- SEO
- Performance
- Content
- Asset
- Analytics
- External Integration
- Documentation
- Release·Rollback

### 7.3 Consumer Analysis

Shared Source를 수정할 때 Consumer를 검색한다.

확인:

- 어떤 Page가 같은 Class·Component·Function을 사용하는가?
- Mobile·Tablet Override가 있는가?
- Modal·Dropdown처럼 전역 State가 있는가?
- 동일 Copy가 Data·Template·JavaScript에 중복되어 있는가?
- 변경이 Public Link나 SEO에 영향을 주는가?

### 7.4 Risk Classification

| Risk | Criteria |
|---|---|
| Low | 한 위치, 가역적, 기능 영향 없음 |
| Medium | 여러 Viewport 또는 Page, UI Regression 가능 |
| High | Shared Component, User Flow, Form, Modal, Accessibility |
| Critical | Privacy, Legal, Valuation, Production Data, Breaking Architecture |

### 7.5 Change Splitting

영향이 큰 변경은 작은 작업으로 분리한다.

분리 기준:

- 다른 목적
- 다른 Consumer
- 다른 QA
- 다른 Rollback
- 다른 승인권자

### 7.6 Backward Compatibility

Component·Pattern·Data 변경은 기존 Consumer가 계속 동작하는지 확인한다.

Breaking Change가 필요하면:

- Proposal
- Impact
- Migration
- Deprecation
- Decision
- Owner Approval

을 준비한다.

### 7.7 Rollback

Medium 이상 변경은 되돌리는 방법을 확인한다.

Critical 변경은 문서화된 Rollback 없이 Release하지 않는다.

### 7.8 Output

- Affected Files
- Affected Consumers
- Risk Level
- Regression Areas
- Rollback Strategy
- Required Reviewer

---

## 8. Step 5 — Implementation Plan

### 8.1 Owner

Work가 구현하기 전에 Project Manager가 작업 계획을 정의한다.

### 8.2 Required Plan

계획에는 다음이 포함되어야 한다.

- 작업 목적
- 수정 대상
- 재사용 대상
- 구현 순서
- 예상 영향
- 보호 영역
- QA 항목
- 문서 업데이트
- 완료 기준

### 8.3 Plan Size

Low Risk:

- 한 문단 또는 짧은 Checklist

Medium Risk:

- 단계별 Plan과 QA Matrix

High·Critical:

- Proposal, Consumer, Migration, Rollback, Reviewer와 Approval

### 8.4 Implementation Boundary

Implementation AI는 계획 범위를 벗어난 구현을 하지 않는다.

새로운 문제가 발견되면:

1. 현재 Scope와 관련 있는지 판단한다.
2. 안전한 수정인지 평가한다.
3. Scope 변경이 필요하면 PM에게 보고한다.
4. 별도 Task가 적절하면 TODO로 분리한다.

### 8.5 Plan Change

구현 중 Plan이 바뀌면 이유와 영향을 기록한다.

High·Critical 변경은 PM Review 없이 Plan을 변경하지 않는다.

### 8.6 Output

- Ordered Steps
- File Scope
- QA Plan
- Documentation Plan
- Done Definition

---

## 9. Step 6 — Development

### 9.1 Principle

Implementation AI가 승인 범위 안에서 실제 변경을 수행한다.

### 9.2 Required Development Rules

- 기존 Component를 우선 사용한다.
- 기존 Pattern Source를 유지한다.
- Design System을 준수한다.
- 승인된 Token을 사용한다.
- 중복 코드를 만들지 않는다.
- 불필요한 CSS Override를 추가하지 않는다.
- 기존 Architecture와 Naming을 유지한다.
- 관련 없는 Formatting을 피한다.
- 사용자 변경을 보존한다.
- Accessibility State를 제거하지 않는다.

### 9.3 Reuse Decision

`Existing Component → Variant → State → Composition → Minimal Extension → New Component`

새로운 Component는 기존 방식으로 해결할 수 없을 때만 Proposal한다.

### 9.4 Code Change Rules

- 가장 작은 Diff를 선호한다.
- Magic Number보다 Token을 사용한다.
- 같은 값을 여러 파일에 복제하지 않는다.
- Dead Code 삭제는 Scope와 Consumer를 확인한 뒤 수행한다.
- 임시 Fix에는 Owner와 제거 계획을 기록한다.
- External Dependency는 승인 없이 추가하지 않는다.

### 9.5 Content Change Rules

- 최신 Copy Source를 확인한다.
- HTML·JavaScript·Data·Template의 실제 출력 위치를 모두 확인한다.
- 동일 Action에는 동일 Label을 사용한다.
- 근거 없는 Claim을 추가하지 않는다.

### 9.6 Responsive Rules

- Desktop 변경 요청이 아니면 Desktop Regression을 피한다.
- Component Responsive Rule을 우선한다.
- 360·390·430·768·1024·1280·1440·1920px 중 Scope에 맞는 Matrix를 선택한다.
- Browser와 Device 검증을 수행하지 않았다면 명시한다.

### 9.7 Accessibility Rules

- Semantic HTML
- Keyboard
- Focus
- ARIA
- Label
- Contrast
- Touch Target
- Reduced Motion

을 기능과 함께 구현한다.

접근성을 후속 장식 작업으로 미루지 않는다.

### 9.8 Working Tree Safety

- 관련 없는 변경을 되돌리지 않는다.
- 파괴적 Reset을 사용하지 않는다.
- 기존 수정과 충돌하면 범위를 축소하거나 Escalation한다.
- Auto-format으로 전체 파일을 불필요하게 변경하지 않는다.

### 9.9 Output

- Implemented Change
- Changed Files
- Reused Components·Tokens
- Known Deviation

---

## 10. Step 7 — Quality Assurance

### 10.1 Responsibility

Implementation AI는 QA Evidence를 생성한다.

Project Manager는 Acceptance와 Evidence를 검토해 QA Gate를 판단한다.

High·Critical 변경은 독립 Reviewer가 필요하다.

### 10.2 Minimum QA

- [ ] 요구사항 충족
- [ ] 디자인 일관성
- [ ] Typography
- [ ] Spacing
- [ ] Alignment
- [ ] Responsive
- [ ] Accessibility
- [ ] Interaction
- [ ] Content
- [ ] Console Error
- [ ] Protected Area Regression
- [ ] Documentation Consistency

### 10.3 Conditional QA

변경에 따라 추가한다.

| Change | Additional QA |
|---|---|
| JavaScript | State, Event, Error, Memory, Console |
| Form | Validation, Error, Success, Keyboard, Privacy |
| Modal | Focus Trap, ESC, Overlay, Scroll Lock, Focus Return |
| Navigation | Active, Dropdown, Keyboard, Mobile Menu |
| Valuation | Calculation Regression, Calibration, Result State |
| Asset | Format, Size, Alt, Crop, Lazy Loading |
| SEO | Title, Meta, Heading, Link, Structured Data |
| Performance | LCP, INP, CLS, Bundle, Network |

### 10.4 Evidence Levels

Chapter 1의 E0–E5 Evidence Level을 사용한다.

최소 Claim은 실제 Evidence를 넘지 않는다.

### 10.5 Browser and Device

필요한 Matrix:

- Chrome
- Edge
- Safari
- Samsung Internet
- In-app Browser

Target Viewport:

- 360
- 390
- 430
- 768
- 1024
- 1280
- 1440
- 1920

모든 작업에서 전체 Matrix를 기계적으로 실행하지는 않지만, Scope에 필요한 환경을 명시한다.

### 10.6 QA Failure

QA를 통과하지 못하면 Release하지 않는다.

다음 중 하나로 처리한다.

- Fix and Retest
- Scope Reduction
- Known Issue with Approved Exception
- Defer
- Reject

### 10.7 Regression

직접 변경한 영역뿐 아니라 Shared Consumer를 확인한다.

Regression이 발견되면 원인과 수정 결과를 다시 검증한다.

### 10.8 QA Report

- Acceptance Status
- Tests Performed
- Environment
- Evidence
- Failed Items
- N/A with Reason
- Residual Risk
- Release Recommendation

상세 Gate는 `DESIGN_QA_GOVERNANCE.md`가 우선한다.

---

## 11. Step 8 — Documentation Update

### 11.1 Principle

모든 수정은 문서 변경 필요 여부를 확인한다.

문서 변경이 필요하지 않다면 불필요하게 수정하지 않는다.

### 11.2 Update Matrix

| Change | Update |
|---|---|
| 기능·Public Change | `CHANGELOG.md` |
| 새 Component·Contract | `COMPONENT_LIBRARY.md` |
| 새 Pattern·Composition | 현재 Pattern Source |
| 새 Design·UX Principle | `EQUIV_DESIGN_BIBLE.md` |
| 새 Token·CSS Foundation | `DESIGN_SYSTEM.md` |
| Asset Rule | `VISUAL_ASSET_GUIDE.md` |
| Voice·Tone·Terminology | `CONTENT_UX_WRITING_SYSTEM.md` |
| Page Role·Feature | `MASTER_SPEC.md` |
| AI Operation·Workflow | `EQUIV_AI_OPERATING_MANUAL.md` |
| QA·Release Rule | `DESIGN_QA_GOVERNANCE.md` |
| Important Decision | `DECISION_LOG.md` |
| Deferred Work | `TODO.md` |

### 11.3 Pattern Note

현재 독립 Pattern Library가 없으므로 Pattern 변경은 실제 Pattern Source에 기록한다.

존재하지 않는 `PATTERN_LIBRARY.md`를 생성하거나 업데이트했다고 보고하지 않는다.

### 11.4 No Duplicate Documentation

Primary Source를 갱신하고 다른 문서에는 참조만 추가한다.

동일 규칙을 여러 문서에 복사해 독립 관리하지 않는다.

### 11.5 Changelog

실제 사용자·개발·운영 결과가 변경되면 Changelog를 기록한다.

단순 조사, 실패한 시도 또는 변경 없는 Review는 Release Change처럼 기록하지 않는다.

### 11.6 Output

- Updated Documents
- No-update Reason
- Decision Log Trigger
- Deferred TODO

---

## 12. Step 9 — Release

### 12.1 Release Preconditions

- [ ] Acceptance 충족
- [ ] QA 완료
- [ ] 필수 문서 반영
- [ ] Changelog 작성
- [ ] Blocker 0
- [ ] Open Risk 기록
- [ ] Rollback 확인
- [ ] 프로젝트 일관성 유지
- [ ] Project Owner 승인

### 12.2 Release Types

| Type | Meaning |
|---|---|
| Documentation Handoff | 문서 승인·검토 가능한 상태 |
| Local Verification | 개발 환경 검증 완료 |
| Release Candidate | Production 전 QA·승인 준비 |
| Production Release | Owner 승인 후 실제 배포 |
| Hotfix Release | 승인된 긴급 Production 수정 |

### 12.3 Owner Approval

Project Manager는 QA Gate와 Release Recommendation을 제공한다.

Project Owner 승인 후 Production Release한다.

Implementation AI는 명시적인 배포 권한이 있는 경우에만 배포한다.

### 12.4 Release Record

- Version
- Scope
- QA Evidence
- Approved By
- Release Target
- Rollback
- Known Issue
- Monitoring Plan

### 12.5 Post-release

Production Release 후:

- Smoke Test
- Monitoring
- Error 확인
- User Flow 확인
- Incident 대응
- Documentation Finalization

을 수행한다.

### 12.6 No False Release

Source 수정 또는 Local Test만으로 Released라고 보고하지 않는다.

Production 확인이 없으면 `Not Released` 또는 `Release Ready`로 표현한다.

---

## 13. Modification Principles

### 13.1 Maintain Before Replace

기존 구조가 유효하면 유지한다.

교체는 유지로 해결할 수 없을 때 검토한다.

### 13.2 Replace Before Rewrite

문제 영역을 국소적으로 교체할 수 있다면 전체를 다시 작성하지 않는다.

Rewrite는:

- 현재 구조가 요구사항을 충족할 수 없고
- Migration과 Regression 비용이 정당화되며
- 승인된 Plan이 있을 때

만 수행한다.

### 13.3 Reuse Before Create

Component, Pattern, Token, Copy와 Asset을 재사용한다.

### 13.4 Small Changes First

작은 단위로 수정하고 검토하고 QA한다.

### 13.5 Quality Before Speed

속도를 이유로 QA, 접근성과 문서를 생략하지 않는다.

### 13.6 Documentation First

구현 전 관련 문서를 확인한다.

문서가 낡았으면 이를 기록하고 승인된 방식으로 동기화한다.

### 13.7 Minimal Change, Maximum Quality

AI는 기존 프로젝트를 최대한 유지하면서 최소한의 수정으로 문제를 해결한다.

---

## 14. Standard Workflows

### 14.1 Bug Fix

`Request → Reproduce → Root Cause → Impact → Fix → Regression QA → Changelog → Release`

Required:

- 실제 재현
- 원인과 증상 구분
- 임시 우회보다 Root Cause 수정
- 관련 Consumer 확인
- Regression Test

완전히 재현하지 못하면 추측 Fix를 적용하지 않는다.

### 14.2 UI Improvement

`Request → Design Bible → Component·Token Review → Impact → Modify → Visual·Responsive QA → Changelog → Release`

Do Not:

- 새 Design Language 도입
- Page 전용 임의 값 추가
- 다른 Page의 Typography를 우발적으로 변경

### 14.3 UX Improvement

`Request → User Problem → Existing Pattern → Flow Impact → Plan → Implement → Task·A11y QA → Documentation → Release`

확인:

- 사용자의 다음 행동
- State 변화
- Error·Success
- Keyboard·Focus
- Mobile Action Priority

### 14.4 New Page

`Request → MASTER_SPEC → Page Role Approval → Existing Pattern → Component Reuse → Content → Implementation → Full QA → Documentation → Release`

Required:

- Architecture 안의 명확한 Page Role
- 기존 Page와 중복되지 않는 목적
- 승인된 Template·Composition
- Navigation·SEO·Responsive·Accessibility

### 14.5 Content Update

`Request → Content Source → Actual Output Search → Copy Change → Content·Layout QA → Changelog → Handoff`

HTML만 수정하지 않는다.

JavaScript, Data, Template와 Modal에서 실제 출력되는 Source를 확인한다.

### 14.6 Responsive Fix

`Request → Target Device → Existing Component Rule → Impact → Mobile·Tablet·Desktop Isolation → Device QA → Changelog → Release`

한 Breakpoint 수정이 다른 Device에 영향을 주지 않는지 확인한다.

### 14.7 Accessibility Improvement

`Request → WCAG·Component Contract → User Task → Implement → Keyboard·Focus·Screen Reader·Zoom QA → Documentation → Release`

시각적 결과만으로 완료하지 않는다.

### 14.8 Performance Optimization

`Request → Baseline → Bottleneck → Hypothesis → Minimal Change → Measure → Regression QA → Documentation → Release`

측정 전후 환경을 동일하게 유지한다.

측정하지 않은 개선을 성능 향상이라고 단정하지 않는다.

### 14.9 Component Update

`Request → Consumer Inventory → Contract → Impact → Version·Migration → Implementation → Component·Consumer QA → Documentation → Release`

Shared Component는 한 Page만 보고 수정하지 않는다.

### 14.10 Feature Enhancement

`Request → Business Goal → Existing Feature → Scope → Risk → Plan → Implement → Functional·A11y·Performance QA → Documentation → Owner Approval → Release`

Feature가 Page Role이나 External Integration을 바꾸면 Owner 승인이 필요하다.

### 14.11 Refactoring

`Request → Behavior Baseline → Dependency → Plan → Refactor → Equivalence Test → Regression QA → Changelog → Release`

Refactoring은 외부 동작을 변경하지 않는다.

동작 변경이 필요하면 별도 Feature 또는 Bug Fix로 분리한다.

### 14.12 Documentation Change

`Request → Document Inventory → Authority·Conflict Review → Edit → Cross-reference QA → Changelog·Decision → Handoff`

UI·기능이 변경되지 않았다면 Browser·Production Release를 허위로 보고하지 않는다.

### 14.13 Hotfix

`Incident → Triage → Minimal Safe Fix → Critical QA → Owner Approval → Release → Monitor → Full Documentation → Follow-up`

Hotfix는 Governance를 생략하는 절차가 아니다.

시간을 줄이되 Risk, 승인과 기록은 유지한다.

---

## 15. Escalation Rules

### 15.1 Immediate Owner Escalation

다음 상황에서는 즉시 Project Owner와 협의한다.

- Brand 변경
- Information Architecture 변경
- Design System의 Breaking 변경
- 핵심 구조 변경
- 신규 기능 추가
- Release 일정 변경
- 개인정보·법률 Risk
- Valuation Logic 변경
- External Integration
- Production Incident
- Rollback 불가

AI는 독자적으로 이러한 변경을 결정하지 않는다.

### 15.2 PM Escalation Record

- Issue
- Current State
- Affected Scope
- Risk
- Options
- Recommendation
- Required Decision

### 15.3 Work Stop Conditions

- Acceptance가 불명확하다.
- 필수 Source가 없다.
- 보호 영역을 훼손해야 한다.
- 사용자 작업과 충돌한다.
- 승인 범위를 넘어간다.
- QA를 수행할 수 없다.
- 성공을 사실대로 검증할 수 없다.

### 15.4 Continue Safely

영향이 작고 가역적인 세부 사항은 가장 안전한 기존 Pattern을 사용해 진행할 수 있다.

가정과 결과를 보고한다.

---

## 16. Workflow Records and Templates

### 16.1 Work Intake

```text
Request:
Type:
Goal:
Target:
Must Keep:
Do Not Change:
Expected Result:
```

### 16.2 Requirement Brief

```text
Problem:
Goal:
In Scope:
Out of Scope:
Protected:
Acceptance:
Open Questions:
```

### 16.3 Impact Summary

```text
Affected Pages:
Affected Components:
Affected Pattern:
Responsive:
Accessibility:
JavaScript/Data:
SEO:
Performance:
Documentation:
Risk:
Rollback:
```

### 16.4 Implementation Plan

```text
Purpose:
Files:
Reuse:
Steps:
QA:
Documentation:
Done:
```

### 16.5 QA Record

```text
Acceptance:
Environment:
Tests:
Passed:
Failed:
N/A and Reason:
Evidence:
Residual Risk:
Recommendation:
```

### 16.6 Completion Report

```text
Outcome:
Changed Files:
Reused Assets:
QA:
Not Verified:
Documentation:
Known Risk:
Release Status:
Next Step:
```

---

## 17. Operational Checklists

### 17.1 Request

- [ ] Request Type을 분류했는가?
- [ ] Goal과 Expected Result가 명확한가?
- [ ] Must Keep과 Do Not Change가 있는가?
- [ ] 요청 범위를 불필요하게 넓히지 않았는가?

### 17.2 Requirement

- [ ] Problem Statement가 명확한가?
- [ ] In Scope와 Out of Scope가 분리되었는가?
- [ ] Protected Area가 정의되었는가?
- [ ] Acceptance가 검증 가능한가?
- [ ] 필요한 Clarification을 완료했는가?

### 17.3 Documentation

- [ ] Operating Manual과 AI Rules를 확인했는가?
- [ ] Master Spec에서 Page Role을 확인했는가?
- [ ] Design Bible을 확인했는가?
- [ ] Existing Component를 확인했는가?
- [ ] 실제 Pattern Source를 확인했는가?
- [ ] Design System Token을 확인했는가?
- [ ] 관련 Asset·Content·Domain 문서를 확인했는가?
- [ ] Decision, Changelog와 TODO를 확인했는가?

### 17.4 Impact

- [ ] 다른 Page 영향이 있는가?
- [ ] Shared Component Consumer를 확인했는가?
- [ ] Responsive 영향을 확인했는가?
- [ ] Accessibility 영향을 확인했는가?
- [ ] JavaScript·Data 영향을 확인했는가?
- [ ] SEO·Performance 영향을 확인했는가?
- [ ] Risk와 Rollback을 정의했는가?

### 17.5 Plan

- [ ] 수정 대상이 명확한가?
- [ ] 재사용 대상이 명확한가?
- [ ] 작업 순서가 있는가?
- [ ] QA 항목이 있는가?
- [ ] 완료 기준이 있는가?

### 17.6 Development

- [ ] 기존 Component와 Pattern을 재사용했는가?
- [ ] Token을 사용했는가?
- [ ] 중복 Code와 CSS를 만들지 않았는가?
- [ ] 관련 없는 변경을 보존했는가?
- [ ] Accessibility를 기능과 함께 구현했는가?
- [ ] Plan 범위를 벗어나지 않았는가?

### 17.7 QA

- [ ] Acceptance를 검증했는가?
- [ ] Visual·Responsive를 확인했는가?
- [ ] Keyboard·Focus·ARIA를 확인했는가?
- [ ] Interaction과 State를 확인했는가?
- [ ] Console Error를 확인했는가?
- [ ] Shared Consumer Regression을 확인했는가?
- [ ] 실제 Evidence 수준에 맞게 보고했는가?

### 17.8 Documentation

- [ ] Changelog 필요 여부를 확인했는가?
- [ ] Component·Pattern·Token 문서 필요 여부를 확인했는가?
- [ ] Decision Log Trigger를 확인했는가?
- [ ] Deferred Work를 TODO에 기록했는가?
- [ ] 문서와 구현이 일치하는가?

### 17.9 Release

- [ ] QA Gate를 통과했는가?
- [ ] Blocker가 0인가?
- [ ] Open Risk가 기록되었는가?
- [ ] Rollback이 가능한가?
- [ ] Project Owner 승인이 있는가?
- [ ] 실제 Release Target을 확인했는가?
- [ ] Release와 Handoff를 혼동하지 않았는가?

---

## 18. Success Criteria

- [ ] 모든 작업이 동일한 절차로 진행된다.
- [ ] 분석 후 구현이 이루어진다.
- [ ] 문서를 먼저 확인한다.
- [ ] Work가 구현 범위를 벗어나지 않는다.
- [ ] 영향 분석과 Plan이 Risk에 맞게 수행된다.
- [ ] 기존 Component·Pattern·Token을 재사용한다.
- [ ] QA가 항상 수행되거나 N/A 근거가 기록된다.
- [ ] Changelog와 필요한 전문 문서가 유지된다.
- [ ] Project Owner 승인 없이 Production Release하지 않는다.
- [ ] 완료, Release Ready와 Released가 구분된다.
- [ ] 프로젝트 일관성이 유지된다.
- [ ] Release 품질이 지속적으로 향상된다.

---

## 19. PM Note

Development Workflow의 목적은 개발 속도를 높이는 것이 아니다.

프로젝트 품질을 일정하게 유지하는 것이다.

EQUIV는 매번 새롭게 만드는 프로젝트가 아니라 완성된 제품을 지속적으로 개선하는 프로젝트다.

따라서 모든 수정은 **최소한의 변경으로 최대한의 품질을 유지한다**는 원칙 아래 수행한다.

이 Workflow는 향후 유지보수, 기능 확장과 신규 AI 참여 시에도 동일하게 적용되는 EQUIV의 Standard Operating Procedure다.

빠른 구현은 좋은 결과가 아니다.

정확한 분석, 작은 변경, 충분한 검증과 사실 기반 보고가 좋은 결과다.

---

# Chapter 5. Quality Assurance

Version 1.0
Status: Approved Draft

---

## Chapter 5 Contents

1. Purpose
2. QA Philosophy
3. QA Authority and Relationship
4. QA Timing
5. QA Workflow
6. QA Responsibility
7. QA Scope Selection
8. QA Categories
9. QA Principles
10. Evidence and Environment
11. QA Decision
12. Defect and Revision Classification
13. Rework Policy
14. Release Connection
15. Continuous Quality
16. QA Records and Templates
17. Operational Checklists
18. Success Criteria
19. PM Note

---

## 1. Purpose

이 Chapter는 EQUIV 프로젝트의 모든 변경이 동일한 품질 기준을 만족하도록 QA의 실행 시점, 책임, 판정, 재작업과 승인 절차를 정의한다.

본 Chapter는 세부 QA 기준 자체를 새로 정의하지 않는다.

Typography, Spacing, Responsive, Accessibility, Performance, Content, Component, Pattern과 Release의 상세 기준·Checklist는 `DESIGN_QA_GOVERNANCE.md`를 따른다.

본 Chapter가 정의하는 것은 다음이다.

- 언제 QA를 수행하는가?
- 누가 Evidence를 만드는가?
- 누가 QA Gate를 검토하는가?
- 어떤 범위를 검증하는가?
- 어떤 상태로 판정하는가?
- Fail 이후 어떻게 재검증하는가?
- 언제 Release를 권고할 수 있는가?

---

## 2. QA Philosophy

모든 구현은 완료되었다고 주장하는 것이 아니라 검증되어야 한다.

QA를 통과하지 못한 구현은 완성으로 인정하지 않는다.

### 2.1 Verified, Not Assumed

코드가 저장되었다는 사실은 정상 동작의 Evidence가 아니다.

화면이 한 번 열렸다는 사실은 전체 User Flow가 정상이라는 Evidence가 아니다.

자동 Test 통과는 실제 Browser·Keyboard·Responsive 경험을 완전히 대체하지 않는다.

### 2.2 Quality Is Designed

QA는 마지막에 결함을 찾는 작업이 아니다.

Request, Requirement, Documentation Review, Impact Analysis와 Plan 단계에서 품질 조건을 먼저 정의한다.

### 2.3 User Task First

QA는 단순히 픽셀 오류를 찾는 과정이 아니다.

사용자가:

- Page를 이해할 수 있는가?
- 필요한 행동을 수행할 수 있는가?
- Keyboard와 Touch로 접근할 수 있는가?
- Error에서 회복할 수 있는가?
- 결과를 신뢰할 수 있는가?

를 검증한다.

### 2.4 Brand Quality

기능이 동작해도 EQUIV의 Brand, Typography, Spacing, Voice와 Interaction이 흔들리면 QA를 통과한 것으로 보지 않는다.

### 2.5 Evidence-based

모든 PASS는 Evidence를 가져야 한다.

확인하지 않은 항목을 “문제 없음”으로 표시하지 않는다.

---

## 3. QA Authority and Relationship

### 3.1 Source of Truth

세부 QA의 Single Source of Truth는 `DESIGN_QA_GOVERNANCE.md`다.

이 Chapter는 해당 기준을 실제 Development Workflow에서 언제·어떻게 적용하는지 정의한다.

### 3.2 Relationship

| Document | QA Responsibility |
|---|---|
| `EQUIV_AI_OPERATING_MANUAL.md` Chapter 5 | QA Timing, Role, Decision와 Rework Procedure |
| `DESIGN_QA_GOVERNANCE.md` | 상세 Criteria, 215개 Review Checklist, Evidence와 Release Gate |
| `COMPONENT_LIBRARY.md` | Component별 QA Contract |
| `VISUAL_ASSET_GUIDE.md` | Asset QA |
| `CONTENT_UX_WRITING_SYSTEM.md` | Content QA |
| `VALUATION_MODEL_SPEC.md` | Valuation Domain QA |

### 3.3 No Duplicate Standard

세부 Threshold와 Checklist를 이 Chapter에 복제하지 않는다.

상세 기준이 바뀌면 전문 문서만 수정하고 본 Chapter에는 운영 연결만 유지한다.

### 3.4 Conflict

QA 세부 기준이 충돌하면 `DESIGN_QA_GOVERNANCE.md`와 해당 Domain Contract를 확인한다.

QA 수행 순서와 역할이 충돌하면 본 Chapter와 Chapter 2·4를 따른다.

Production Release 최종 승인은 Project Owner에게 있다.

---

## 4. QA Timing

### 4.1 Every Change Is Reviewed

다음 작업은 반드시 QA를 수행한다.

- UI 수정
- UX 수정
- 신규 Page
- Component 변경
- Pattern 변경
- JavaScript 수정
- Responsive 수정
- Content 변경
- Performance 개선
- Accessibility 개선
- Asset 변경
- SEO 변경
- Documentation 변경
- Refactoring
- Bug Fix
- Hotfix

QA 자체에는 예외가 없다.

단, 변경과 관련 없는 QA Category는 `N/A`와 근거를 기록할 수 있다.

### 4.2 QA Begins Before Development

QA Timing은 구현 후에만 존재하지 않는다.

| Stage | QA Activity |
|---|---|
| Request | Expected Result와 User Impact 확인 |
| Requirement | Acceptance Criteria 정의 |
| Documentation Review | Existing Contract와 Protected Area 확인 |
| Impact Analysis | Regression과 Test Scope 정의 |
| Plan | QA Matrix와 Environment 정의 |
| Development | Incremental Self Review |
| After Development | Full Applicable QA |
| Before Release | PM Gate와 Documentation Check |
| After Release | Smoke Test와 Monitoring |

### 4.3 Incremental QA

큰 변경은 구현이 모두 끝난 후 한 번에 검증하지 않는다.

다음 단위마다 확인한다.

- Component
- State
- Viewport
- User Flow
- Integration Point

### 4.4 Pre-release QA

Release Candidate 전 필수 QA를 완료한다.

Production에서 처음 확인하는 방식으로 Release하지 않는다.

### 4.5 Post-release QA

Production Release 후 Smoke Test와 Monitoring을 수행한다.

Post-release QA는 Pre-release QA를 대체하지 않는다.

---

## 5. QA Workflow

공식 QA Workflow:

`Development`

`↓`

`Self Review — Implementation AI`

`↓`

`Evidence Preparation`

`↓`

`PM Review — ChatGPT`

`↓`

`QA Decision`

`↓`

`Documentation Check`

`↓`

`Project Owner Release Approval`

`↓`

`Release and Monitoring`

### 5.1 Development

승인된 Plan과 Component Contract에 따라 구현한다.

### 5.2 Self Review

Implementation AI가 변경 직후 기본 오류, Scope, Diff와 직접 영향을 확인한다.

### 5.3 Evidence Preparation

실행한 Test, 환경, 결과, Screenshot·Log·Command와 미검증 항목을 정리한다.

### 5.4 PM Review

Project Manager가:

- Acceptance
- Scope
- Documentation
- Design·UX
- Component Reuse
- Responsive
- Accessibility
- Content
- Performance
- Regression

Evidence를 검토한다.

### 5.5 QA Decision

결과를 PASS, Minor Revision, Major Revision 또는 REJECT로 판정한다.

### 5.6 Documentation Check

Primary Source, Changelog, Decision과 TODO가 실제 결과와 일치하는지 확인한다.

### 5.7 Release Approval

PASS만 Project Owner에게 Production Release 승인을 요청할 수 있다.

QA PASS는 Project Owner의 Release 승인을 자동 의미하지 않는다.

### 5.8 Monitoring

Release 후 핵심 User Flow, Error와 Regression을 확인한다.

---

## 6. QA Responsibility

### 6.1 Implementation AI — Work or Codex

Responsibilities:

- 구현 완료
- Scope Self Review
- 기본 오류 확인
- Console·Network Error 확인
- Syntax·Build·Automated Test
- Code Diff Review
- 직접 영향 기능 확인
- Responsive·Keyboard 기본 검증
- Dead Code·Debug Output 정리
- Evidence 준비
- 미검증 항목 보고

Implementation AI는 자신이 구현한 결과를 PASS로 최종 승인하지 않는다.

### 6.2 Project Manager — ChatGPT

Responsibilities:

- 요구사항과 Acceptance 검토
- 디자인 검토
- UX와 User Task 검토
- 문서 일관성 검토
- Responsive 검토
- Component·Pattern 재사용 검토
- Content 검토
- Accessibility·Performance Evidence 검토
- Regression 범위 검토
- QA Decision
- Release Recommendation

Project Manager는 검증하지 않은 환경을 정상이라고 승인하지 않는다.

### 6.3 Project Owner

Responsibilities:

- 최종 결과 확인
- Business·Brand 적합성 확인
- Residual Risk 확인
- Production Release 승인

### 6.4 Domain Reviewer

필요한 경우 다음 Reviewer가 참여한다.

- Design·Brand
- M&A·Valuation
- Legal·Privacy
- Accessibility
- Performance
- Content

### 6.5 Separation of Duties

High·Critical 변경은 구현자 단독 승인 금지다.

동일 AI가 구현과 Self Review를 수행했다면 PM 또는 독립 Reviewer가 Evidence를 확인한다.

---

## 7. QA Scope Selection

### 7.1 Risk-based Scope

QA는 변경 Risk와 Consumer에 비례한다.

| Risk | Minimum Scope |
|---|---|
| Low | Changed Source, Static Validation, Direct Output |
| Medium | Direct Page, Relevant Viewports, Interaction, Regression Consumer |
| High | Shared Consumer, Full State, A11y, Browser, Performance |
| Critical | Independent Review, Domain Validation, Rollback, Owner Approval |

### 7.2 Changed Area

직접 변경한 요소의:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error
- Success

중 적용 가능한 State를 확인한다.

### 7.3 Consumer Scope

Shared Token·Component·JavaScript를 변경하면 모든 Consumer를 Inventory한다.

한 Page에서 정상이라는 이유로 Shared Change를 PASS하지 않는다.

### 7.4 Responsive Scope

Scope에 맞는 Target을 선택한다.

- Mobile: 360, 390, 430
- Tablet: 768, 1024
- Desktop: 1280, 1440, 1920

Breakpoint 경계도 필요한 경우 확인한다.

### 7.5 Browser Scope

변경 유형에 맞게 확인한다.

- Chrome
- Edge
- Safari
- Samsung Internet
- In-app Browser

실제 확인하지 않은 Browser는 `Not Verified`로 표시한다.

### 7.6 N/A Rule

적용되지 않는 Category는:

- `N/A`
- 이유
- 영향 없음의 근거

를 기록한다.

단순히 시간이 없다는 이유로 `N/A` 처리하지 않는다.

---

## 8. QA Categories

세부 기준은 `DESIGN_QA_GOVERNANCE.md`를 따른다.

### 8.1 Layout

- Container
- Grid
- Section Flow
- Overflow
- Viewport Fit

### 8.2 Typography

- Role Token
- Hierarchy
- Line Height
- Wrapping
- Readability

### 8.3 Color

- Approved Token
- Contrast
- State Color
- Brand Accent

### 8.4 Spacing

- Section Rhythm
- Component Gap
- Internal Padding
- Touch Separation

### 8.5 Alignment

- Baseline
- Optical Alignment
- Grid Edge
- Icon·Text

### 8.6 Component

- Approved Variant
- State
- Dependency
- Consumer
- Backward Compatibility

### 8.7 Responsive

- Mobile
- Tablet
- Desktop
- Orientation
- Zoom·Reflow

### 8.8 Accessibility

- Semantic Structure
- Keyboard
- Focus
- ARIA
- Screen Reader
- Contrast
- Touch Target
- Reduced Motion

### 8.9 Performance

- LCP
- INP
- CLS
- Asset Size
- Script·CSS Cost
- Runtime Error

### 8.10 Content

- Voice
- Tone
- Terminology
- Accuracy
- Duplication
- Error·Success State

### 8.11 Navigation

- Link
- Active State
- Dropdown
- Mobile Menu
- Keyboard
- ESC

### 8.12 Interaction

- Trigger
- Feedback
- State Transition
- Error Recovery
- Focus Return

### 8.13 Animation

- Motion Token
- Duration
- Reduced Motion
- Performance
- No Unexpected Movement

### 8.14 SEO

- Title
- Meta
- Heading
- Canonical·OG
- Link
- Alt

### 8.15 Console and Network

- Console Error
- Unhandled Rejection
- Failed Request
- Missing Asset
- 404

### 8.16 Cross Browser

- Layout
- Font Rendering
- Form
- Modal
- Navigation
- Viewport Behavior

---

## 9. QA Principles

### 9.1 Quality, Not Blame

QA는 잘못한 사람을 찾는 과정이 아니다.

브랜드와 사용자 품질을 유지하는 과정이다.

### 9.2 Criteria, Not Preference

“마음에 들지 않는다”가 아니라 승인된 Criteria와 User Impact를 기준으로 판정한다.

### 9.3 User Experience Before Internal Convenience

구현이 편하다는 이유로 사용자의 이해, 접근성과 안정성을 낮추지 않는다.

### 9.4 Regression Is a Defect

요청한 화면이 좋아졌더라도 다른 Page나 State가 깨지면 PASS가 아니다.

### 9.5 No Hidden Failure

실패, 미검증과 Known Issue를 숨기지 않는다.

### 9.6 Same Standard

사람과 AI, 신규 Page와 기존 Page, Desktop과 Mobile에 같은 품질 철학을 적용한다.

### 9.7 Risk Proportionality

모든 Checklist를 기계적으로 수행하지 않는다.

Scope와 Risk에 필요한 항목을 선택하고 N/A에는 근거를 기록한다.

---

## 10. Evidence and Environment

### 10.1 Evidence Types

- Source Diff
- Static Check
- Build Result
- Automated Test
- Console·Network Log
- Screenshot
- Video
- Keyboard Test
- Screen Reader Result
- Device·Browser Result
- Lighthouse·Performance Measurement
- Production Monitoring

### 10.2 Required Metadata

QA Evidence에는 다음을 포함한다.

- Date
- Build or Commit
- Environment
- Browser
- Viewport·Device
- Test Scenario
- Expected
- Actual
- Result
- Reviewer

### 10.3 Evidence Level

Chapter 1의 E0–E5 Evidence Level을 따른다.

PASS Claim은 해당 Criteria에 필요한 Evidence 수준을 충족해야 한다.

### 10.4 Screenshot Rule

Screenshot은 시각적 결과를 증명하지만 Keyboard, Screen Reader, Console과 계산 정확성을 증명하지 않는다.

### 10.5 Automated Test Rule

자동 Test는 반복 Regression에 유용하지만 정성적 Brand Review와 실제 Device 경험을 대체하지 않는다.

### 10.6 Environment Limitation

Safari·실기기·Production 등 접근할 수 없는 환경은 명시한다.

검증하지 않은 환경을 추론으로 PASS하지 않는다.

---

## 11. QA Decision

QA 결과는 다음 중 하나다.

### 11.1 PASS

조건:

- 모든 필수 Acceptance 충족
- Blocker·Critical Defect 없음
- 필수 Evidence 존재
- 필요한 Documentation 준비
- 승인되지 않은 Risk 없음

PASS만 Production Release 승인을 요청할 수 있다.

### 11.2 Minor Revision

조건:

- 핵심 User Task는 가능
- 제한된 Cosmetic·Content·Non-critical Issue 존재
- 수정 범위가 작고 명확

상태:

- Release 불가
- 수정 후 적용 가능한 QA와 Regression 재수행

### 11.3 Major Revision

조건:

- User Flow·Responsive·Accessibility·Shared Component 문제
- Acceptance 일부 미충족
- 여러 Consumer 영향
- 구조 또는 Plan 재검토 필요

상태:

- Release 불가
- Requirement·Impact·Plan 단계로 필요한 만큼 되돌아감

### 11.4 REJECT

조건:

- 요청 목적과 구현 방향이 근본적으로 다름
- Brand·Architecture·Safety와 충돌
- 증거 없는 구조 변경
- 개인정보·법률·계산 정확성 Risk
- Scope를 유지한 수정으로 해결 불가

상태:

- 현재 구현 경로 중단
- 대안 Proposal 또는 Owner Decision 필요

### 11.5 No Conditional Release

Minor Revision과 Major Revision은 PASS가 아니다.

Production Release는 최종 PASS 후에만 가능하다.

Non-blocking Issue를 Project Owner가 명시적으로 수용하더라도:

1. Exception의 Owner·기한·영향을 기록하고
2. 필수 Criteria를 다시 판정하며
3. 최종 QA Result를 PASS 또는 REJECT로 확정한다.

`Conditional Pass`를 Production Release 상태로 사용하지 않는다.

---

## 12. Defect and Revision Classification

### 12.1 Blocker

- 주요 User Task 불가
- Privacy·Security·Legal Critical
- 계산 결과 오류
- Production Crash
- Rollback 불가

Decision: Major Revision 또는 REJECT

### 12.2 Critical

- 핵심 Navigation·Form·Modal 불가
- WCAG Critical Failure
- Brand Logo 손상
- Shared Component 대규모 Regression

Decision: Major Revision

### 12.3 Major

- 특정 Device·Browser에서 주요 기능 실패
- Acceptance의 의미 있는 부분 미충족
- 여러 Page Layout Regression

Decision: Major Revision

### 12.4 Minor

- 제한된 Cosmetic Misalignment
- 의미를 해치지 않는 Copy 문제
- Workaround가 있는 Non-critical Issue

Decision: Minor Revision

### 12.5 Observation

- 현재 Release를 차단하지 않는 개선 제안
- Future Optimization

Observation은 QA Result를 낮추지 않을 수 있지만 `TODO.md` 또는 Review Note에 기록한다.

---

## 13. Rework Policy

### 13.1 Fix the Cause

QA Fail은 증상만 숨기지 않고 원인을 수정한다.

### 13.2 Rework Flow

`QA Decision`

`↓`

`Root Cause`

`↓`

`Revision Plan`

`↓`

`Fix`

`↓`

`Self Review`

`↓`

`Applicable QA Rerun`

`↓`

`Regression QA`

`↓`

`New Decision`

### 13.3 Same QA Rerun

실패한 Criteria는 동일한 환경과 Scenario에서 다시 검증한다.

환경이 바뀌면 비교 가능성을 설명한다.

### 13.4 Regression Rerun

수정이 영향을 줄 수 있는 인접 영역도 다시 확인한다.

단순히 실패한 한 항목만 확인하고 Release하지 않는다.

### 13.5 Scope of Rerun

전체 Site QA를 매번 반복하는 것이 목적은 아니다.

다음을 다시 수행한다.

- 실패한 Test
- 수정된 Source의 직접 State
- 영향을 받는 Consumer
- 관련 Regression Suite

### 13.6 New Failure

재작업 중 새로운 결함이 생기면 별도 Defect로 기록하고 Severity를 판정한다.

### 13.7 Repeated Failure

동일 문제가 반복되면:

- Root Cause 재분석
- Plan 재검토
- Test Coverage 추가
- Component·Pattern Debt 확인
- PM Escalation

을 수행한다.

---

## 14. Release Connection

### 14.1 PASS Is Necessary, Not Sufficient

QA PASS는 Release의 필수 조건이지만 유일한 조건은 아니다.

Release에는 추가로:

- Documentation
- Changelog
- Version
- Rollback
- Monitoring
- Project Owner Approval

이 필요하다.

### 14.2 Release Recommendation

Project Manager는 다음 중 하나를 권고한다.

- Ready for Owner Approval
- Not Ready — Minor Revision
- Not Ready — Major Revision
- Rejected

### 14.3 Owner Approval

Project Owner는 PASS Evidence와 Residual Risk를 확인한 후 Production Release를 승인한다.

### 14.4 Post-release Verification

Release 후:

- 핵심 Page
- Navigation
- Consultation
- Business Valuation
- Error
- Performance Signal

을 확인한다.

### 14.5 Rollback

Production에서 Blocker·Critical Issue가 발생하면 수정 가능성을 기다리지 않고 승인된 Rollback 기준을 적용한다.

---

## 15. Continuous Quality

### 15.1 No Quality Regression

모든 수정은 프로젝트 품질을 유지하거나 향상해야 한다.

품질이 낮아지는 변경은 허용하지 않는다.

### 15.2 Defect Learning

반복 결함은 개인의 실수로만 처리하지 않는다.

다음을 검토한다.

- Requirement Gap
- Missing Contract
- Missing Test
- Token·Component Drift
- Documentation Gap
- Tooling Gap

### 15.3 Test Asset Reuse

반복되는 핵심 Flow는 재사용 가능한 Test Scenario와 Checklist로 유지한다.

### 15.4 Quality Trend

정기적으로 확인한다.

- 반복 Regression
- Accessibility Debt
- Performance Trend
- Browser Issue
- Documentation Drift
- Component Duplication

### 15.5 QA Debt

수행하지 못한 필수 QA는 숨기지 않고 Debt 또는 Blocker로 기록한다.

시간 부족은 PASS 근거가 아니다.

---

## 16. QA Records and Templates

### 16.1 QA Plan

```text
Change:
Risk:
Acceptance:
Categories:
Consumers:
Viewports:
Browsers:
Accessibility:
Performance:
Domain Review:
Evidence:
```

### 16.2 Self Review

```text
Implementation:
Changed Files:
Direct Tests:
Console/Network:
Responsive:
Keyboard/Focus:
Known Issue:
Not Verified:
```

### 16.3 QA Review

```text
Reviewer:
Environment:
Acceptance Result:
Category Results:
Defects:
Evidence:
Documentation:
Residual Risk:
Decision:
Required Rework:
```

### 16.4 Revision Record

```text
Previous Decision:
Root Cause:
Revision:
Affected Scope:
Retest:
Regression:
New Decision:
```

### 16.5 Release Recommendation

```text
QA Result:
Blockers:
Open Issues:
Documentation:
Rollback:
Monitoring:
Recommendation:
Owner Decision:
```

---

## 17. Operational Checklists

### 17.1 QA Planning

- [ ] Acceptance Criteria가 검증 가능한가?
- [ ] Risk Level이 정해졌는가?
- [ ] QA Category를 선택했는가?
- [ ] Consumer를 확인했는가?
- [ ] Viewport·Browser를 선택했는가?
- [ ] Domain Reviewer가 필요한가?
- [ ] Evidence 형식이 정해졌는가?

### 17.2 Work Self Review

- [ ] Scope를 충족했는가?
- [ ] 관련 없는 변경이 없는가?
- [ ] 기본 기능이 동작하는가?
- [ ] Console·Network Error가 없는가?
- [ ] Code가 정리되었는가?
- [ ] 직접 Responsive 영향을 확인했는가?
- [ ] Keyboard·Focus를 확인했는가?
- [ ] 미검증 항목을 기록했는가?

### 17.3 PM Review

- [ ] Design Bible과 일치하는가?
- [ ] Component·Pattern을 재사용했는가?
- [ ] Layout·Typography·Spacing이 일관적인가?
- [ ] UX와 User Task가 명확한가?
- [ ] Responsive Evidence가 있는가?
- [ ] Accessibility Evidence가 있는가?
- [ ] Content가 정확한가?
- [ ] Performance Regression이 없는가?
- [ ] Shared Consumer Regression이 없는가?
- [ ] Documentation이 일치하는가?

### 17.4 Decision

- [ ] 필수 Acceptance를 모두 확인했는가?
- [ ] Blocker·Critical Issue가 없는가?
- [ ] Evidence가 충분한가?
- [ ] PASS·Minor·Major·REJECT 중 하나로 판정했는가?
- [ ] Revision 항목이 명확한가?
- [ ] Release 가능 여부를 분명히 했는가?

### 17.5 Rework

- [ ] Root Cause를 확인했는가?
- [ ] 수정 범위를 정의했는가?
- [ ] 실패한 Test를 다시 실행했는가?
- [ ] 영향 Consumer를 다시 확인했는가?
- [ ] Regression QA를 수행했는가?
- [ ] 새로운 Decision을 기록했는가?

### 17.6 Release

- [ ] 최종 QA Result가 PASS인가?
- [ ] 문서가 최신인가?
- [ ] Changelog가 작성되었는가?
- [ ] Rollback이 준비되었는가?
- [ ] Monitoring Owner가 있는가?
- [ ] Project Owner 승인이 있는가?
- [ ] 실제 Production 결과를 확인했는가?

---

## 18. Success Criteria

- [ ] QA가 생략되지 않는다.
- [ ] 모든 변경은 검증된다.
- [ ] QA Category의 N/A에는 근거가 있다.
- [ ] Work의 Self Review와 PM Review가 구분된다.
- [ ] QA Result가 네 가지 상태로 명확하다.
- [ ] Minor·Major Revision은 Release되지 않는다.
- [ ] 재작업 후 적용 가능한 QA와 Regression을 다시 수행한다.
- [ ] PASS Evidence가 추적 가능하다.
- [ ] 프로젝트 품질이 유지된다.
- [ ] QA 기준이 일관된다.
- [ ] Project Owner 승인 후에만 Production Release한다.
- [ ] Release 품질이 지속적으로 향상된다.

---

## 19. PM Note

QA는 개발 마지막 단계가 아니다.

프로젝트 전체 품질을 유지하는 운영 프로세스다.

품질은 Release 직전에 만드는 것이 아니라 모든 작업 과정에서 유지한다.

EQUIV의 QA는 많은 Checklist를 채우는 일이 아니다.

필요한 기준을 정확한 환경에서 검증하고, 확인한 사실만 보고하며, 사용자와 브랜드에 위험이 남아 있으면 Release하지 않는 일이다.

---

# Chapter 6. Release & Version Management

Version 1.0
Status: Approved Draft

---

## Chapter 6 Contents

1. Purpose
2. Release Philosophy
3. Release Authority and Relationship
4. Release States
5. Release Workflow
6. Release Types
7. Version Policy
8. Version Selection Rules
9. Release Candidate
10. Changelog Rules
11. Decision Log Rules
12. Release Approval
13. Release Execution
14. Post-release Review
15. Rollback Policy
16. Hotfix Policy
17. Documentation Policy
18. Release Records and Templates
19. Operational Checklists
20. Success Criteria
21. PM Note

---

## 1. Purpose

이 Chapter는 EQUIV 프로젝트의 Release 절차와 Version 관리 기준을 정의한다.

Release는 단순한 파일 업로드가 아니다.

품질이 검증되고 승인된 결과물을 추적 가능한 Version으로 사용자에게 제공하는 과정이다.

이 Chapter의 목적은 다음 질문에 일관되게 답하는 것이다.

- 무엇을 Release할 수 있는가?
- 누가 Release를 승인하는가?
- 어떤 Version을 부여하는가?
- Changelog와 Decision Log는 언제 작성하는가?
- Release 후 무엇을 확인하는가?
- 치명적 문제가 발생하면 어떻게 복구하는가?

---

## 2. Release Philosophy

Release는 빠르게 하는 것이 아니라 안정적으로 하는 것이다.

충분히 검토되지 않은 변경은 Release하지 않는다.

### 2.1 Quality State

Release는 Source를 Production에 복사하는 행위가 아니다.

검증·문서화·승인된 Quality State를 특정 환경으로 이동하는 과정이다.

### 2.2 Trust

EQUIV의 Release는 사용자의 신뢰에 직접 영향을 준다.

특히 다음은 일반 UI 변경보다 높은 기준을 적용한다.

- Consultation
- 개인정보
- Business Valuation
- Navigation
- Brand Logo
- Accessibility
- External Integration

### 2.3 Reversible

Release는 되돌릴 수 있어야 한다.

Rollback 방법을 확인하지 않은 변경은 Production에 배포하지 않는다.

### 2.4 Traceable

모든 Production Release는 다음을 추적할 수 있어야 한다.

- Version
- Scope
- Actor
- Approver
- Date·Time
- QA Evidence
- Changelog
- Rollback
- Monitoring

### 2.5 Small and Predictable

큰 Release보다 작은 Release를 선호한다.

서로 다른 Risk와 Rollback 단위를 하나의 Release에 무리하게 묶지 않는다.

---

## 3. Release Authority and Relationship

### 3.1 Source of Truth

세부 Release Gate, Risk, Rollback, Monitoring과 Incident 기준은 `DESIGN_QA_GOVERNANCE.md`를 따른다.

본 Chapter는 Release와 Version을 실제 운영 Workflow에 연결한다.

### 3.2 Document Relationship

| Document | Responsibility |
|---|---|
| Operating Manual Chapter 6 | Release Sequence, Version Selection과 Record Procedure |
| `DESIGN_QA_GOVERNANCE.md` | Release Gate, Risk, Rollback, Monitoring과 Incident |
| `CHANGELOG.md` | 실제 변경 이력 |
| `DECISION_LOG.md` | 중요한 선택과 승인 이유 |
| Domain Documentation | Release된 Contract와 Rule |
| `TODO.md` | Release되지 않았거나 Deferred된 작업 |

### 3.3 Authority

- Implementation AI: Release Package와 Evidence 준비
- Project Manager: QA PASS와 Release Readiness 권고
- Project Owner: Production Release 최종 승인
- Authorized Operator: 승인된 Release 실행

### 3.4 No Implied Release Permission

다음은 Production Release 권한을 의미하지 않는다.

- 구현 요청
- QA PASS
- Local Preview
- Git Commit
- Release Candidate
- 문서 업데이트

Project Owner의 명시적 승인이 필요하다.

---

## 4. Release States

### 4.1 State Model

| State | Meaning |
|---|---|
| In Development | 구현 중 |
| Implementation Complete | Source 변경 완료 |
| QA In Progress | 검증 중 |
| Revision Required | Minor·Major Revision |
| QA PASS | 필수 QA 충족 |
| Release Candidate | Version·문서·Rollback·Monitoring 준비 |
| Ready for Owner Approval | PM Release 권고 완료 |
| Approved for Release | Project Owner 승인 완료 |
| Released | 대상 환경 배포 완료 |
| Verified in Production | Production Smoke Test 완료 |
| Rolled Back | 이전 안정 Version으로 복구 |
| Superseded | 이후 Version으로 대체 |

### 4.2 State Transition

`In Development`

`→ Implementation Complete`

`→ QA In Progress`

`→ QA PASS`

`→ Release Candidate`

`→ Ready for Owner Approval`

`→ Approved for Release`

`→ Released`

`→ Verified in Production`

### 4.3 Invalid Transitions

다음 전환은 금지한다.

- In Development → Released
- QA In Progress → Released
- Minor Revision → Released
- Major Revision → Released
- Release Candidate → Released without Owner Approval
- Released → Verified without Production Check

### 4.4 Documentation Handoff

Documentation-only 작업은 `Documentation Handoff`로 완료할 수 있다.

Website Runtime을 변경하지 않았다면 이를 Production Release라고 부르지 않는다.

---

## 5. Release Workflow

공식 Workflow:

`Development`

`↓`

`QA`

`↓`

`Documentation Check`

`↓`

`CHANGELOG Update`

`↓`

`Version Assignment`

`↓`

`Release Candidate`

`↓`

`PM Release Recommendation`

`↓`

`Project Owner Approval`

`↓`

`Release`

`↓`

`Post-release Review`

`↓`

`Monitoring and Documentation Finalization`

### 5.1 Development

Chapter 4 Workflow에 따라 변경을 구현한다.

### 5.2 QA

Chapter 5에 따라 최종 PASS를 확보한다.

### 5.3 Documentation Check

Primary Source, Changelog, Decision, Migration과 TODO가 실제 변경과 일치하는지 확인한다.

### 5.4 Version Assignment

Compatibility와 Change Scope를 기준으로 Version을 선택한다.

### 5.5 Release Candidate

Scope를 Freeze하고 Release Package와 Rollback을 준비한다.

### 5.6 PM Recommendation

Project Manager가 Evidence와 Open Risk를 검토한다.

### 5.7 Owner Approval

Project Owner가 Production Release를 최종 승인한다.

### 5.8 Release

Authorized Operator가 승인된 Version과 범위만 배포한다.

### 5.9 Post-release

Production Smoke Test, Monitoring과 최종 Record를 수행한다.

---

## 6. Release Types

### 6.1 Major Release

Major Release는 기존 Public Contract 또는 사용자 기대를 깨는 변경이다.

Examples:

- Breaking Component API
- Token Role 제거·의미 변경
- 필수 User Flow 변경
- Page Architecture 변경
- Brand Identity 변경
- 핵심 Domain Logic의 비호환 변경
- 지원 Platform의 중대한 변경

새 기능이라는 이유만으로 Major가 되지는 않는다.

Backward-compatible Feature는 Minor다.

### 6.2 Minor Release

기존 Contract를 유지하는 기능 확장이다.

Examples:

- 새로운 기능
- Backward-compatible Component Variant
- 새 Token·Pattern 추가
- UI 개선
- UX 개선
- 새로운 Page
- 지원 Browser·Device 확장
- 새로운 QA Rule

### 6.3 Patch Release

기존 Contract를 바꾸지 않는 수정이다.

Examples:

- Bug Fix
- 오타
- Content Correction
- Documentation Clarification
- 경미한 Visual Correction
- 호환성을 유지하는 Accessibility Fix
- 경미한 Performance Fix

### 6.4 Hotfix Release

Production의 Blocker·Critical Issue를 해결하는 긴급 Patch다.

Hotfix도 Version, QA, 승인, Rollback과 Changelog를 유지한다.

### 6.5 Documentation Release

Runtime 변경 없이 운영·전문 문서만 갱신하는 변경이다.

Document Version 또는 Changelog에는 반영할 수 있지만 Website Product Version을 자동 증가시키지 않는다.

### 6.6 Release Train

관련 변경을 하나의 Version으로 묶을 수 있지만 다음은 분리한다.

- 서로 다른 Owner
- 다른 Risk
- 다른 Rollback
- 독립적인 Breaking Change
- 검증되지 않은 Scope

---

## 7. Version Policy

### 7.1 Semantic Versioning

Website Product Release는 Semantic Versioning을 사용한다.

`MAJOR.MINOR.PATCH`

Examples:

`1.0.0 → 1.1.0 → 1.1.1 → 1.2.0 → 2.0.0`

### 7.2 Major

기존 Contract와의 호환성을 깨면 Major를 증가시킨다.

`1.8.4 → 2.0.0`

Major가 증가하면 Minor와 Patch는 0으로 초기화한다.

### 7.3 Minor

Backward-compatible 기능을 추가하면 Minor를 증가시킨다.

`1.8.4 → 1.9.0`

Minor가 증가하면 Patch는 0으로 초기화한다.

### 7.4 Patch

Backward-compatible Fix면 Patch를 증가시킨다.

`1.8.4 → 1.8.5`

### 7.5 Pre-release

필요한 경우 다음 식별자를 사용할 수 있다.

- `2.0.0-alpha.1`
- `2.0.0-beta.1`
- `2.0.0-rc.1`

Pre-release는 Production Stable Version으로 간주하지 않는다.

### 7.6 Build Metadata

필요한 경우:

`1.4.2+build.20260728`

처럼 Build Metadata를 사용할 수 있다.

Metadata는 Version 우선순위를 바꾸지 않는다.

### 7.7 Document Version

Document Version은 Website Product Version과 별도로 관리한다.

예:

- Operating Manual Version 1.0
- Component Library Version 1.1
- Website Release 2.3.4

모든 문서 Version을 Website Version과 억지로 동일하게 만들지 않는다.

### 7.8 Component Version

독립 Contract와 Migration이 필요한 Shared Component는 별도 Version을 가질 수 있다.

Dependency를 기록한다.

### 7.9 Current Version

실제 현재 Product Version은 Release Record 또는 Version Source에서 확인한다.

문서만 보고 존재하지 않는 Version을 추측·발급하지 않는다.

---

## 8. Version Selection Rules

### 8.1 Decision Sequence

1. Public Contract가 깨지는가?
   - Yes → Major
2. Backward-compatible 기능이 추가되는가?
   - Yes → Minor
3. Contract를 유지하는 Fix인가?
   - Yes → Patch
4. Runtime 변경이 없는 문서 작업인가?
   - Document Version 또는 Documentation Record

### 8.2 Highest Impact Wins

하나의 Release에 여러 변경이 포함되면 가장 높은 Version Impact를 적용한다.

Example:

- Patch 3개 + Minor 1개 → Minor
- Minor 2개 + Breaking 1개 → Major

### 8.3 Scope Does Not Equal Version

변경 파일 수가 많다고 Major가 아니다.

변경 파일이 하나라도 Public Contract를 깨면 Major가 될 수 있다.

### 8.4 Internal Refactoring

외부 동작과 Contract가 동일하면 Patch 또는 Product Version 미증가로 처리할 수 있다.

실제 Release 여부와 운영 정책을 확인한다.

### 8.5 Accessibility and Performance

접근성·성능 Fix는 일반적으로 Patch다.

Public Behavior 또는 지원 범위를 의미 있게 바꾸면 Minor 또는 Major를 검토한다.

### 8.6 Content

오타·명확화는 Patch다.

Page Role, Legal Meaning 또는 핵심 Claim을 바꾸면 Minor·Major와 Decision Log를 검토한다.

### 8.7 Version Proposal

Implementation AI는 Version을 제안할 수 있다.

Project Manager가 Compatibility와 Scope를 검토한다.

Project Owner가 Major Release와 Production Release를 승인한다.

---

## 9. Release Candidate

### 9.1 Entry Criteria

- Scope Freeze
- Version Assigned
- 최종 QA PASS
- Blocker 0
- Known Issue 기록
- 필수 Documentation 준비
- Changelog 준비
- Migration 준비
- Rollback Ready
- Monitoring Owner 지정

### 9.2 Scope Freeze

Release Candidate 이후에는 Blocker Fix만 허용한다.

추가 개선은 다음 Version으로 이동한다.

### 9.3 RC Change

RC에서 수정이 발생하면:

- 영향 분석
- 관련 QA 재수행
- Changelog·Evidence 갱신
- 필요 시 `rc.N` 증가

를 수행한다.

### 9.4 RC Rejection

Minor·Major Revision, Blocker, Evidence 누락 또는 Rollback 불가면 RC를 해제하고 Development 단계로 되돌린다.

### 9.5 RC Is Not Released

Release Candidate는 Production Release가 아니다.

Owner 승인과 실제 배포가 필요하다.

---

## 10. Changelog Rules

### 10.1 Required

Release 시 `CHANGELOG.md`를 반드시 업데이트한다.

### 10.2 Record Categories

- Added
- Changed
- Fixed
- Deprecated
- Removed
- Security
- Documentation

현재 Changelog 형식을 유지하되 필요한 경우 이 Category를 사용한다.

### 10.3 Record

기록 대상:

- 신규 기능
- 기능 수정
- UI·UX 개선
- Bug Fix
- Public Content 변경
- Component·Pattern·Token 변경
- Accessibility·Performance 개선
- Deprecation·Removal
- 운영·Governance 변경

### 10.4 Do Not Record as Release Change

- 변경 없는 조사
- 실패한 실험
- Temporary Local File
- 사소한 개인 작업 메모
- User-visible·System-visible 영향이 없는 일회성 확인

필요하면 QA Record 또는 Working Note에 남긴다.

### 10.5 Draft vs Released

아직 Release되지 않은 변경을 Released 상태처럼 기록하지 않는다.

프로젝트가 현재 Unreleased Section을 사용하지 않는 경우, Changelog Entry와 실제 Release Status를 완료 보고에서 명확히 구분한다.

### 10.6 Content

각 Entry는 다음을 답해야 한다.

- 무엇이 바뀌었는가?
- 사용자·System 영향은 무엇인가?
- 어떤 기능이 보호되었는가?
- Migration이 필요한가?

### 10.7 Changelog Is Not Decision Log

Changelog는 변경 사실을 기록한다.

중요한 선택의 이유와 Alternative는 Decision Log에 기록한다.

---

## 11. Decision Log Rules

### 11.1 Trigger

다음 경우에만 `DECISION_LOG.md`를 작성한다.

- 구조 변경
- Design Philosophy 변경
- 운영 원칙 변경
- 중요한 기술 선택
- Project Direction 변경
- Breaking Change
- 승인된 예외
- 장기 Migration

### 11.2 Not Required

일반 수정은 Decision Log 대상이 아니다.

Examples:

- 일반 Bug Fix
- 오타 수정
- 기존 Token을 사용한 Visual Correction
- 기존 Contract 안의 Content Update

### 11.3 Required Fields

- Decision ID
- Status
- Date
- Owner
- Approver
- Context
- Problem
- Decision
- Alternatives
- Impact
- Risk
- Migration
- Review Date
- History

### 11.4 Supersede

Accepted Decision을 삭제하지 않는다.

새 Decision으로 Supersede하고 History를 유지한다.

### 11.5 Release Relationship

Decision이 필요한 Release는 Accepted Decision 없이 Release하지 않는다.

---

## 12. Release Approval

### 12.1 PM Review

Project Manager가 다음을 검토한다.

- QA PASS
- Acceptance
- Open Issue
- Risk
- Documentation
- Changelog
- Version
- Migration
- Rollback
- Monitoring

### 12.2 PM Decision

- Ready for Owner Approval
- Not Ready — Minor Revision
- Not Ready — Major Revision
- Rejected

### 12.3 Owner Decision

Project Owner는 다음 중 하나를 결정한다.

- Approved for Release
- Hold
- Return for Revision
- Cancel

### 12.4 Approval Record

- Approver
- Date·Time
- Version
- Target
- Scope
- Accepted Risk
- Conditions

### 12.5 PASS Is Required

QA PASS가 아닌 변경은 Production Release 승인 대상이 아니다.

### 12.6 Separation

PM의 Release Recommendation과 Project Owner의 최종 승인은 구분한다.

Authorized Operator는 승인된 범위만 실행한다.

---

## 13. Release Execution

### 13.1 Preflight

- Version 확인
- Target 환경 확인
- Branch·Commit·Artifact 확인
- Environment Variable 확인
- Backup·Rollback 확인
- Maintenance Window 확인
- Monitoring 준비

### 13.2 Artifact Integrity

검증한 Source와 배포할 Artifact가 동일해야 한다.

Build 이후 Source가 바뀌면 다시 Build·QA한다.

### 13.3 Execution

- 승인된 Actor가 실행
- 승인된 Version만 배포
- 배포 시작·완료 시각 기록
- 예상하지 못한 Scope가 포함되면 중단

### 13.4 Immediate Verification

- Homepage 접근
- Header·Navigation
- 핵심 Service Page
- Consultation Flow
- Business Valuation 진입
- Asset·Link
- Console·Network

### 13.5 Release Failure

배포 중 실패하면:

1. 추가 변경 중지
2. 사용자 영향 확인
3. Rollback 또는 Fix Forward 판단
4. Owner·PM 보고
5. Incident 기록

### 13.6 No Unverified Completion

배포 명령 성공만으로 Release 완료라고 보고하지 않는다.

Production Verification 후 `Released and Verified`로 표시한다.

---

## 14. Post-release Review

### 14.1 Immediate

- 기능 정상 동작
- UI 이상 없음
- UX 이상 없음
- Link 확인
- Console Error 확인
- Network 404 확인
- Form·Modal 확인
- 주요 Browser 확인

### 14.2 Monitoring

- Error Log
- Consultation Completion
- Business Valuation Error
- Performance Signal
- Accessibility Feedback
- User·Support Feedback

### 14.3 Review Window

Risk에 따라 Monitoring 기간을 정한다.

- Patch: 짧은 집중 확인
- Minor: 핵심 Flow와 Browser 확인
- Major: 확대 Monitoring과 Owner Review

구체 기간은 Release Plan에 기록한다.

### 14.4 Post-release Issue

Issue를 Severity로 분류한다.

- Observation
- Minor
- Major
- Critical
- Blocker

필요하면 Patch 또는 Hotfix Release를 진행한다.

### 14.5 Documentation Finalization

- 실제 Release 시각
- Version
- Actor
- Verification
- Incident
- Rollback 여부

를 최종 반영한다.

---

## 15. Rollback Policy

### 15.1 Principle

Release 후 치명적인 문제가 발견되면 즉시 이전 안정 Version으로 Rollback한다.

수정 가능성을 기다리며 사용자 Risk를 유지하지 않는다.

### 15.2 Trigger

- 주요 Task 불가
- 개인정보 노출
- 계산 결과 오류
- Navigation 전체 장애
- Critical Accessibility Failure
- Severe Performance Regression
- Data Corruption
- Security Issue

### 15.3 Rollback Plan

- Stable Version
- Trigger
- Decision Owner
- Steps
- Data Impact
- Verification
- Communication
- Recovery

### 15.4 Authority

Critical Incident에서는 사전 승인된 Rollback Plan과 Incident Authority를 따른다.

Project Owner와 PM에게 즉시 보고한다.

### 15.5 After Rollback

- Production 안정 확인
- 원인 분석
- Incident 기록
- Changelog
- Fix Plan
- Regression Test
- 재Release 승인

### 15.6 Fix Forward

Rollback보다 Fix Forward가 안전하다는 Evidence가 있을 때만 선택한다.

시간이 짧다는 이유만으로 Fix Forward를 선택하지 않는다.

---

## 16. Hotfix Policy

### 16.1 Purpose

Hotfix는 Production Blocker·Critical Issue를 최소 범위로 해결한다.

### 16.2 Workflow

`Detect → Triage → Contain → Minimal Fix or Rollback → Critical QA → Owner Approval → Release → Monitor → Document`

### 16.3 Version

기본적으로 Patch Version을 증가시킨다.

Breaking Hotfix가 필요하면 Major와 Migration을 검토한다.

### 16.4 Scope

Hotfix에는 직접 원인 해결에 필요한 변경만 포함한다.

일반 개선을 함께 넣지 않는다.

### 16.5 QA

시간을 줄이되 다음은 생략하지 않는다.

- Root Cause
- Direct Flow
- Regression
- Security·Privacy·Valuation Domain
- Rollback

### 16.6 Follow-up

임시 Compatibility 또는 미완성 Documentation은 다음 Sprint의 확정 Task로 등록한다.

---

## 17. Documentation Policy

### 17.1 Before Release

다음 문서는 Release 승인 전에 준비한다.

- Changelog
- Domain Contract
- Component·Pattern·Token 변경
- Migration
- Decision
- Rollback
- Monitoring

### 17.2 After Release

실제 Version, Date, Actor, Verification과 Issue를 최종 반영한다.

### 17.3 Consistency

운영 문서와 실제 프로젝트가 불일치하지 않도록 관리한다.

### 17.4 No Over-documentation

모든 내부 작업을 Changelog나 Decision Log에 기록하지 않는다.

사용자·System·Governance에 의미 있는 변경만 기록한다.

### 17.5 Unreleased Work

Release되지 않은 변경은 Released 문서와 구분한다.

필요하면 TODO, Draft 또는 RC Record로 유지한다.

---

## 18. Release Records and Templates

### 18.1 Version Proposal

```text
Current Version:
Proposed Version:
Change Type:
Compatibility:
Breaking:
Migration:
Reason:
```

### 18.2 Release Candidate

```text
Version:
Scope:
QA Result:
Evidence:
Known Issues:
Documentation:
Migration:
Rollback:
Monitoring Owner:
Release Owner:
```

### 18.3 Approval

```text
Version:
PM Recommendation:
Project Owner Decision:
Approved Scope:
Accepted Risk:
Target:
Date:
```

### 18.4 Release Record

```text
Version:
Commit/Artifact:
Environment:
Actor:
Start:
End:
Result:
Verification:
Incident:
Rollback:
```

### 18.5 Post-release Review

```text
Version:
Core Flows:
Console/Network:
Performance:
User Feedback:
Open Issues:
Action:
Monitoring End:
```

### 18.6 Rollback Record

```text
Failed Version:
Stable Version:
Trigger:
Decision:
Steps:
Verification:
Root Cause:
Follow-up:
```

---

## 19. Operational Checklists

### 19.1 Version

- [ ] Current Version을 실제 Source에서 확인했는가?
- [ ] Breaking Compatibility를 검토했는가?
- [ ] Major·Minor·Patch를 올바르게 선택했는가?
- [ ] Highest Impact Rule을 적용했는가?
- [ ] Document Version과 Product Version을 구분했는가?
- [ ] Migration이 필요한가?

### 19.2 Release Candidate

- [ ] Scope가 Freeze되었는가?
- [ ] Version이 지정되었는가?
- [ ] 최종 QA Result가 PASS인가?
- [ ] Blocker가 0인가?
- [ ] Known Issue가 기록되었는가?
- [ ] Documentation이 준비되었는가?
- [ ] Changelog가 준비되었는가?
- [ ] Rollback이 가능한가?
- [ ] Monitoring Owner가 있는가?

### 19.3 Changelog and Decision

- [ ] Added·Changed·Fixed·Removed를 기록했는가?
- [ ] 사용자·System 영향을 설명했는가?
- [ ] Release되지 않은 변경을 Released처럼 쓰지 않았는가?
- [ ] Decision Log Trigger를 확인했는가?
- [ ] 필요한 Accepted Decision이 있는가?

### 19.4 Approval

- [ ] PM이 QA와 Risk를 검토했는가?
- [ ] Release Recommendation이 있는가?
- [ ] Project Owner가 Version과 Scope를 승인했는가?
- [ ] Accepted Risk가 기록되었는가?
- [ ] Authorized Operator가 정해졌는가?

### 19.5 Preflight

- [ ] Target 환경이 맞는가?
- [ ] 검증한 Artifact와 배포 Artifact가 동일한가?
- [ ] Environment Variable이 준비되었는가?
- [ ] Backup·Rollback이 준비되었는가?
- [ ] Monitoring이 준비되었는가?

### 19.6 Post-release

- [ ] Production 접근이 정상인가?
- [ ] 핵심 기능이 정상인가?
- [ ] UI·UX 이상이 없는가?
- [ ] Link와 Asset이 정상인가?
- [ ] Console·Network Error가 없는가?
- [ ] User Feedback를 확인했는가?
- [ ] Release Record를 완료했는가?

### 19.7 Rollback

- [ ] Trigger가 충족되었는가?
- [ ] 이전 안정 Version이 확인되었는가?
- [ ] Rollback Actor와 Owner가 있는가?
- [ ] 복구 후 핵심 Flow를 확인했는가?
- [ ] Incident와 Root Cause를 기록했는가?
- [ ] 재Release 조건을 정의했는가?

---

## 20. Success Criteria

- [ ] Release 절차가 일관된다.
- [ ] QA PASS 전에는 Release하지 않는다.
- [ ] Project Owner 승인 없이 Production Release하지 않는다.
- [ ] Version이 Semantic Versioning에 따라 명확하다.
- [ ] Breaking Change만 Major로 분류된다.
- [ ] Backward-compatible Feature는 Minor로 분류된다.
- [ ] Bug·Content Fix는 적절한 Patch로 관리된다.
- [ ] Product Version과 Document Version이 구분된다.
- [ ] Changelog가 유지된다.
- [ ] 중요한 Decision이 추적된다.
- [ ] Release Candidate와 Released가 구분된다.
- [ ] Rollback이 가능하다.
- [ ] Post-release Review와 Monitoring이 수행된다.
- [ ] 프로젝트가 안정적으로 운영된다.

---

## 21. PM Note

Release는 프로젝트의 종료가 아니다.

다음 개선을 위한 새로운 시작이다.

EQUIV는 완성 후 멈추는 프로젝트가 아니라 지속적으로 발전하는 Product다.

모든 Release는 브랜드 신뢰도를 높이는 과정이어야 한다.

Version 숫자를 올리는 것보다 중요한 것은 사용자가 받은 결과와 그 결과를 되돌릴 수 있는 능력이다.

안정적인 Release는 느린 Release가 아니다.

Scope가 명확하고, QA가 충분하며, 문서와 Rollback이 준비된 예측 가능한 Release다.

---

# Appendix A. Golden Rules

Version 1.0
Status: Approved Draft

---

## Purpose

Golden Rules는 EQUIV 프로젝트 운영 시 모든 AI와 모든 참여자가 반드시 지켜야 하는 최상위 운영 원칙이다.

이 원칙은 프로젝트가 성장해도 유지되는 기준이며 모든 작업과 의사결정의 출발점이다.

Golden Rules는 전문 문서의 세부 규칙을 다시 정의하지 않는다.

- Page Role은 `MASTER_SPEC.md`
- Design은 `EQUIV_DESIGN_BIBLE.md`
- Token은 `DESIGN_SYSTEM.md`
- Component는 `COMPONENT_LIBRARY.md`
- QA·Release Gate는 `DESIGN_QA_GOVERNANCE.md`

를 따른다.

Golden Rules는 해당 규칙을 어떤 태도로 적용할지를 정의한다.

### Governance

Golden Rules의 변경은 일반 문서 수정이 아니다.

변경하려면:

- Project Owner 승인
- 영향 분석
- Accepted Decision
- 관련 Chapter와 AI Rules 동기화
- Changelog

가 필요하다.

---

## The 10 Golden Rules

### Rule 1 — Understand Before You Change

변경하기 전에 먼저 프로젝트를 이해한다.

추측으로 구현하지 않는다.

항상 요구사항, 관련 문서와 실제 Source를 먼저 검토한다.

#### Required Behavior

- 요청의 목적을 확인한다.
- 현재 동작을 재현·관찰한다.
- Page Role과 보호 영역을 확인한다.
- 실제 Consumer와 Data Flow를 확인한다.
- 모르는 상태를 사실처럼 단정하지 않는다.

#### Decision Test

- 무엇을 왜 바꾸는지 설명할 수 있는가?
- 현재 동작을 Evidence로 확인했는가?
- 변경하지 말아야 할 영역을 알고 있는가?

하나라도 `아니오`라면 구현 전에 조사한다.

#### Anti-pattern

- 파일명만 보고 역할을 추측한다.
- Screenshot만 보고 Data Flow를 단정한다.
- 재현 없이 Bug Fix를 적용한다.
- “아마 그럴 것”을 완료 보고에 사용한다.

---

### Rule 2 — Documents First

코드보다 문서를 먼저 확인한다.

운영 시작 기준:

1. `EQUIV_AI_OPERATING_MANUAL.md`
2. `AI_RULES.md`

Task의 기본 Domain 순서:

1. `MASTER_SPEC.md`
2. `EQUIV_DESIGN_BIBLE.md`
3. `DESIGN_SYSTEM.md`
4. `COMPONENT_LIBRARY.md`
5. 현재 Pattern Source
6. `VISUAL_ASSET_GUIDE.md`
7. `CONTENT_UX_WRITING_SYSTEM.md`
8. 관련 Domain Specification
9. `DESIGN_QA_GOVERNANCE.md`
10. `DECISION_LOG.md`, `CHANGELOG.md`, `TODO.md`

현재 독립 `PATTERN_LIBRARY.md`는 없다.

Pattern Source는:

- `COMPONENT_LIBRARY.md`의 Composition·Page Map
- `SERVICE_PAGE_TEMPLATE.md`

이다.

기존 문서가 답을 가지고 있다면 새로운 규칙을 만들지 않는다.

#### Required Behavior

- 변경 Domain의 Source of Truth를 찾는다.
- Accepted Decision과 최근 변경을 확인한다.
- 문서와 구현이 다르면 원인을 확인한다.
- 존재하지 않는 문서를 확인했다고 보고하지 않는다.

#### Decision Test

- 어떤 문서가 이 결정의 Authority인지 말할 수 있는가?
- 최신 Accepted Decision이 반영되었는가?
- 문서가 실제 Source와 일치하는가?

#### Anti-pattern

- 개인 선호를 문서보다 우선한다.
- Changelog를 Design Rule처럼 사용한다.
- TODO를 현재 기능의 Specification처럼 사용한다.
- 문서를 읽지 않고 Override를 추가한다.

---

### Rule 3 — Reuse Before Create

새로운 것을 만들기 전에 기존 것을 재사용한다.

다음은 기존 자산으로 해결할 수 없는 경우에만 추가한다.

- Component
- Pattern
- Style
- Token
- Rule
- Copy
- Asset

#### Reuse Order

`Existing → Variant → State → Composition → Minimal Extension → Create`

#### Required Behavior

- Component Inventory를 검색한다.
- Existing Pattern Source를 확인한다.
- Semantic·Component Token을 확인한다.
- 동일 Action과 Terminology를 재사용한다.
- 기존 Asset의 적합성·권리·품질을 검토한다.

#### Decision Test

- 기존 Component Variant로 해결 가능한가?
- 새로운 자산이 둘 이상의 Consumer에 필요한가?
- 추가 비용보다 재사용 가치가 큰가?

#### Anti-pattern

- Page 하나를 위한 유사 Component를 복제한다.
- 같은 Button에 새 이름과 Style을 만든다.
- 기존 Token과 같은 값의 새 Token을 추가한다.
- 같은 문구를 HTML·JavaScript·Data에 독립 복사한다.

---

### Rule 4 — Consistency Wins

창의성보다 일관성을 우선한다.

모든 수정은 EQUIV의 브랜드 경험을 강화해야 한다.

페이지마다 다른 디자인을 만드는 것이 아니라 하나의 브랜드를 만드는 것이 목표다.

#### Required Behavior

- 같은 역할에는 같은 Component를 사용한다.
- 같은 정보 위계에는 같은 Typography를 사용한다.
- 같은 State에는 같은 Interaction을 사용한다.
- 같은 의미에는 같은 Terminology를 사용한다.
- Page Role이 달라도 Brand Language는 유지한다.

#### Decision Test

- 기존 Page와 같은 Product로 보이는가?
- 사용자에게 이미 학습한 Interaction을 제공하는가?
- 새 차이가 Page Role 때문에 필요한가?

#### Anti-pattern

- 미적 취향만으로 Page별 Radius·Shadow를 바꾼다.
- 같은 CTA에 다른 Label을 사용한다.
- Mobile과 Desktop이 다른 브랜드처럼 보인다.
- 한 화면의 개선 때문에 Shared Consumer가 흔들린다.

---

### Rule 5 — Small Changes, Big Stability

작게 수정하고 자주 검토한다.

큰 변경보다 작은 개선을 반복한다.

모든 변경은 프로젝트 안정성을 유지해야 한다.

#### Required Behavior

- 하나의 Goal에 집중한다.
- 영향과 Rollback 단위로 작업을 분리한다.
- 작은 Diff를 유지한다.
- 각 단계에서 Incremental QA를 수행한다.
- Scope가 커지면 다시 계획한다.

#### Decision Test

- 더 작은 변경으로 같은 결과를 만들 수 있는가?
- 이 변경을 독립적으로 되돌릴 수 있는가?
- 관련 없는 Formatting·Refactoring이 포함됐는가?

#### Anti-pattern

- UI Fix와 Architecture Refactoring을 함께 수행한다.
- 한 Sprint에 여러 독립 Goal을 묶는다.
- 전체 파일을 재작성해 작은 문제를 해결한다.
- “정리하는 김에” 관련 없는 코드를 변경한다.

---

### Rule 6 — Quality Is Non-negotiable

QA를 통과하지 않은 구현은 완성이 아니다.

속도보다 품질을 우선한다.

Production Release는 최종 QA PASS 이후에만 가능하다.

#### Required Behavior

- Acceptance Criteria를 먼저 정의한다.
- Work Self Review와 PM Review를 구분한다.
- Scope와 Risk에 맞는 QA를 수행한다.
- 미검증 환경은 `Not Verified`로 표시한다.
- Revision 후 관련 QA와 Regression을 다시 수행한다.

#### Decision Test

- 최종 QA Result가 PASS인가?
- 필수 Evidence가 있는가?
- Blocker와 Critical Defect가 없는가?
- Project Owner 승인이 있는가?

#### Anti-pattern

- Local Preview를 Production 검증처럼 보고한다.
- 자동 Test만으로 Visual·A11y QA를 대체한다.
- Minor Revision 상태를 Release한다.
- 시간 부족을 N/A 또는 PASS 근거로 사용한다.

---

### Rule 7 — Every Change Has the Right Record

중요한 변경은 기록한다.

`CHANGELOG.md`는 프로젝트의 이력이다.

`DECISION_LOG.md`는 프로젝트의 기억이다.

필요한 변경은 반드시 기록하고 불필요한 기록은 남기지 않는다.

#### Record Rule

- 실제 변경: Changelog
- 중요한 선택·예외: Decision Log
- 미완료·미검증: TODO
- Domain Contract: 해당 전문 문서
- Release·Rollback: Release Record

#### Required Behavior

- 변경 후 Documentation Trigger를 확인한다.
- Primary Source of Truth만 상세 갱신한다.
- Accepted Decision의 History를 유지한다.
- Release되지 않은 변경을 Released처럼 기록하지 않는다.

#### Decision Test

- 사용자가 결과 차이를 느끼는가?
- System Contract가 바뀌는가?
- 장기적으로 이유를 다시 물을 가능성이 있는가?
- 미완료 작업이 남는가?

#### Anti-pattern

- 모든 작업 메모를 Changelog에 기록한다.
- 중요한 구조 변경을 Changelog 한 줄로만 남긴다.
- Decision을 삭제해 과거 Context를 지운다.
- 문서 업데이트 없이 구현만 변경한다.

---

### Rule 8 — Respect Existing Architecture

기존 구조를 존중한다.

다음은 명확한 필요와 승인 없이 수행하지 않는다.

- 불필요한 Refactoring
- 불필요한 Redesign
- 불필요한 Framework 변경
- Page Role 통합
- Core Logic 교체

프로젝트는 계속 새롭게 만드는 것이 아니라 더 나아지게 만드는 것이다.

#### Required Behavior

- 현재 Architecture의 이유를 조사한다.
- Shared Consumer와 Dependency를 확인한다.
- Backward Compatibility를 유지한다.
- Breaking Change에는 Proposal·Migration·Rollback을 준비한다.
- 보호 영역을 명시적으로 검증한다.

#### Decision Test

- 현재 구조로 해결할 수 없는가?
- 변경의 장기 가치가 Migration 비용보다 큰가?
- Owner와 Reviewer가 승인했는가?

#### Anti-pattern

- 새로운 기술이 더 익숙하다는 이유로 교체한다.
- 한 Page 문제로 Design System을 재구성한다.
- 기존 기능을 삭제하고 비슷한 기능을 다시 만든다.
- 사용자 요청 없이 Framework를 도입한다.

---

### Rule 9 — Human Makes the Final Decision

AI는 분석하고 제안하고 구현하고 검증을 지원한다.

다음의 최종 판단은 Project Owner가 결정한다.

- Project Direction
- Brand Direction
- Production Release
- Major·Breaking Change
- Core Architecture
- Privacy·Legal Business Decision
- External Integration

#### Required Behavior

- AI의 Recommendation과 Approval을 구분한다.
- PM QA Gate와 Owner Release Approval을 구분한다.
- 중요 Risk와 Alternative를 Owner에게 제시한다.
- 승인되지 않은 Scope를 실행하지 않는다.

#### Decision Test

- 이 결정이 Business·Brand·Release를 바꾸는가?
- AI가 권고를 승인처럼 표현하고 있지 않은가?
- Project Owner의 명시적인 결정이 있는가?

#### Anti-pattern

- QA PASS를 Production 승인으로 간주한다.
- 구현 요청을 배포 권한으로 해석한다.
- AI가 법률·회계 판단을 최종 확정한다.
- Owner에게 알리지 않고 Breaking Change를 적용한다.

---

### Rule 10 — Create Less. Maintain Better.

EQUIV 프로젝트의 가장 중요한 운영 철학이다.

새로운 것을 만드는 것보다 기존 프로젝트를 더 완성도 있게 유지하는 것이 중요하다.

모든 수정은 프로젝트를:

- 더 단순하게
- 더 안정적으로
- 더 일관성 있게
- 더 이해하기 쉽게
- 더 검증 가능하게

만들어야 한다.

#### Required Behavior

- 추가보다 제거·통합 가능성을 먼저 본다.
- 새 Rule보다 기존 Rule의 정확한 적용을 우선한다.
- 복잡도를 늘리면 그 이유와 Owner를 기록한다.
- 유지보수 비용을 Acceptance에 포함한다.

#### Decision Test

- 이 변경이 사용자 가치를 높이는가?
- 장기 유지보수가 쉬워지는가?
- 불필요한 선택지와 중복이 줄어드는가?
- 변경 후 프로젝트를 더 쉽게 설명할 수 있는가?

#### Anti-pattern

- 결과보다 코드·문서 양을 성과로 본다.
- 신규 Component 수를 발전으로 본다.
- 기능을 계속 추가해 핵심 User Flow를 흐린다.
- 기존 품질보다 새로운 시각 효과를 우선한다.

---

## Daily Checklist

작업을 시작하기 전에 다음 질문에 답한다.

- [ ] 요구사항을 정확히 이해했는가?
- [ ] 현재 동작과 실제 Source를 확인했는가?
- [ ] Operating Manual과 AI Rules를 확인했는가?
- [ ] 관련 Domain 문서를 확인했는가?
- [ ] 기존 Component를 사용할 수 있는가?
- [ ] 기존 Pattern Source를 사용할 수 있는가?
- [ ] Design System을 따르고 있는가?
- [ ] 최소한의 변경으로 해결 가능한가?
- [ ] 다른 Page와 Consumer에 영향을 주는가?
- [ ] Protected Area를 정의했는가?
- [ ] QA 항목과 Evidence를 정의했는가?
- [ ] Changelog가 필요한가?
- [ ] Decision Log가 필요한가?
- [ ] Owner 판단이 필요한가?
- [ ] 이번 수정이 프로젝트를 더 좋아지게 만드는가?

### Stop Check

다음 중 하나라도 `예`라면 구현 또는 Release를 멈추고 검토한다.

- [ ] 문서를 읽지 않았다.
- [ ] 현재 동작을 확인하지 못했다.
- [ ] 존재하지 않는 기능이나 문서를 가정한다.
- [ ] 보호 영역을 변경해야 한다.
- [ ] QA Evidence를 만들 수 없다.
- [ ] Production 승인 권한이 없다.
- [ ] Rollback할 수 없다.
- [ ] 완료를 사실대로 보고할 수 없다.

---

## Operating Motto

**Create Less.**

**Maintain Better.**

**Improve Continuously.**

**Release Confidently.**

### Korean Operating Statement

적게 만들고,

더 잘 유지하며,

계속 개선하고,

검증된 결과만 자신 있게 Release한다.

---

## Final Message

EQUIV는 단순한 Website가 아니다.

오랜 시간 축적한 경험과 철학을 하나의 Digital Product로 구현한 프로젝트다.

모든 AI와 참여자는 새로운 것을 만드는 사람만이 아니라 프로젝트의 품질과 일관성을 지키는 Custodian이라는 마음가짐으로 작업한다.

좋은 프로젝트는 많이 바꾸어서 만들어지는 것이 아니다.

필요한 것만 신중하게 개선하며 완성된다.

Golden Rules는 EQUIV의 모든 운영과 의사결정에서 가장 먼저 확인하는 기준이다.

세부 판단은 각 전문 문서와 승인된 Decision을 따르며, Golden Rules는 그 판단이 EQUIV의 운영 철학을 벗어나지 않도록 지키는 최상위 행동 원칙이다.
