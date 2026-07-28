# EQUIV AI Operating Manual

Version 1.0  
Status: Approved Draft  
Document Type: Project Operation Standard  
Owner: EQUIV Project Governance  
Applies To: ChatGPT, Codex, Work, Human Contributors and Future AI Operators

---

## Table of Contents

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

