# EQUIV Design Decision Log

Version 1.0
Status: Active
Owner: EQUIV Design Governance

이 문서는 장기적으로 다시 논의될 가능성이 있는 Design System, Component, Pattern, Quality, Accessibility, Performance와 Governance 결정을 기록한다.

운영 기준과 Template은 `DESIGN_QA_GOVERNANCE.md` Chapter 18과 Appendix C를 따른다.

---

## Decision Index

| Decision ID | Title | Status | Date | Supersedes |
|---|---|---|---|---|
| DQ-2026-002 | AI Operating Manual을 최상위 Project Operation Standard로 채택 | Accepted | 2026-07-28 | None |
| DQ-2026-001 | Design QA & Governance를 최상위 Release Gate로 채택 | Accepted | 2026-07-27 | None |

---

## DQ-2026-002 — AI Operating Manual을 최상위 Project Operation Standard로 채택

- Status: Accepted
- Date: 2026-07-28
- Owner: EQUIV Project Governance
- Approvers: Project Manager

### Context

EQUIV는 Design Bible, Design System, Component Library, Service Page Template, Visual Asset Guide, Content & UX Writing System과 QA Governance를 갖춘 Release Candidate 직전 프로젝트다. 전문 문서들은 무엇을 만들고 어떻게 검증할지를 정의하지만, AI와 사람이 실제 작업을 어떤 순서와 태도로 수행하는지를 하나로 연결하는 최상위 운영 기준이 필요했다.

### Decision

`EQUIV_AI_OPERATING_MANUAL.md`를 프로젝트의 최상위 Operation Standard로 채택한다.

이 매뉴얼은 기존 전문 문서를 대체하지 않는다. Design Bible은 디자인 철학, Design System은 구현 규칙, Component Library는 Component Contract, `DESIGN_QA_GOVERNANCE.md`는 QA·승인·Release Gate의 Single Source of Truth로 유지한다.

### Operating Principles

- Maintain Before Create
- Consistency Before Creativity
- Documentation Before Implementation
- Reuse Before Development
- Quality Before Release
- Small Change Principle

### Impact

- 모든 AI와 사람은 구현 전에 Operating Manual과 관련 전문 문서를 확인한다.
- 기존 Component, Pattern Source와 Token을 신규 구현보다 우선한다.
- 완료 보고는 실제 Evidence 수준에 맞춰 작성한다.
- Production Release와 작업 완료를 구분한다.
- 독립 `PATTERN_LIBRARY.md`가 없는 현재 상태를 사실대로 유지한다.

### Affected Documents

- `EQUIV_AI_OPERATING_MANUAL.md`
- `AI_RULES.md`
- `DESIGN_QA_GOVERNANCE.md`
- `DESIGN_SYSTEM.md`
- `DECISION_LOG.md`
- `CHANGELOG.md`
- `TODO.md`

### Version and Migration

- Operating Manual Version: 1.0
- Migration: 신규 작업부터 즉시 적용
- 기존 완료 작업은 재구현하지 않으며 향후 수정 시 적용

### Review Date

2026-10-28

### History

- 2026-07-28: Chapter 3 문서 계층·Source of Truth·Decision과 Conflict Rule 추가
- 2026-07-28: Chapter 2 역할·책임, QA Gate와 Production Release 승인 경계 추가
- 2026-07-28: Accepted

---

## DQ-2026-001 — Design QA & Governance를 최상위 Release Gate로 채택

- Status: Accepted
- Date: 2026-07-27
- Owner: EQUIV Design Governance
- Approvers: Project Manager

### Context

EQUIV에는 Design Bible, Design System, Component Library, Visual Asset Guide와 Content & UX Writing System이 존재한다. 각 문서에는 전문 영역별 QA가 있으나 모든 변경의 Review, Approval, Release, Monitoring과 Documentation을 하나로 연결하는 최상위 운영 규칙은 없었다.

### Problem

전문 문서별 Checklist만으로는 다음을 일관되게 결정하기 어렵다.

- 어떤 변경이 Release를 중단해야 하는가?
- 누가 승인하고 어떤 Evidence가 필요한가?
- Component와 Pattern의 중복을 어떻게 예방하는가?
- Risk, Design Debt, Version과 Migration을 어떻게 추적하는가?
- Release 후 Issue와 Hotfix를 어떻게 문서화하는가?

### Decision

`DESIGN_QA_GOVERNANCE.md`를 EQUIV의 최상위 Design Quality, Review, Approval와 Release Governance 문서로 채택한다.

Design Bible Chapter 12는 핵심 철학과 Gate를 정의하고, 상세 Checklist와 Template은 독립 문서를 Single Source of Truth로 사용한다.

### Reason

- QA를 Sprint 마지막이 아니라 모든 단계에 포함한다.
- 사람과 AI가 같은 Criteria와 Evidence를 사용한다.
- Component, Pattern, Documentation과 Release의 책임을 연결한다.
- 장기 확장 시 기존 품질을 유지한다.

### Alternatives

1. 기존 문서의 QA를 그대로 유지: 영역 간 Release 판단과 승인 책임이 분산되어 선택하지 않았다.
2. Checklist만 추가: Decision, Risk, Debt, Version과 Monitoring을 운영할 수 없어 선택하지 않았다.
3. 외부 Framework를 그대로 도입: 현재 조직 규모와 EQUIV Context에 과도하여 선택하지 않았다.

### Impact

- 모든 Sprint는 Risk 기반 QA와 Release Gate를 사용한다.
- Major System Change는 Decision Log를 업데이트한다.
- Documentation은 Release Scope에 포함된다.
- 독립 Pattern Library가 생기기 전에는 기존 Composition과 Service Template을 Pattern Source로 사용한다.

### Risks

- 초기 Review 시간이 증가할 수 있다.
- 모든 Checklist를 기계적으로 적용하면 과도한 절차가 될 수 있다.

Mitigation:

- Risk Level에 따라 적용 범위를 조정한다.
- `N/A`에는 근거를 기록한다.
- Quarterly Audit에서 불필요한 절차를 개선한다.

### Affected Documents and Components

- `EQUIV_DESIGN_BIBLE.md`
- `DESIGN_SYSTEM.md`
- `COMPONENT_LIBRARY.md`
- `VISUAL_ASSET_GUIDE.md`
- `CONTENT_UX_WRITING_SYSTEM.md`
- `AI_RULES.md`
- `CHANGELOG.md`
- `TODO.md`

### Version and Migration

- Governance Version: 1.0
- Migration: 신규 Sprint부터 적용
- 기존 Released Page는 Quarterly Audit에서 점진적으로 검토

### Review Date

2026-10-27

### History

- 2026-07-27: Accepted
