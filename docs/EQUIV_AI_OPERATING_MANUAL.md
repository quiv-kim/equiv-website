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
