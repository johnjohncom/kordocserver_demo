---
layout: default
title: 동시수행될 Job갯수에 따른 CPU/Mem준비
parent: Actions의 GHES설정
grand_parent: GitHub Actions란
nav_order: 1
---

## 예상되는 동시실행 Job갯수에 따라 CPU/Mem할당 필요

  - GHES에 GitHub Actions의 실행을 위해서는 최소 8 vCPU와 64GB 메모리 할당이 권고됩니다. 
  - 동시에 실행될 최대 Job 갯수가 몇개 정도일지 예상, 혹은 차츰 확산시켜 가며 적절한 vCPU와 Mem의 할당이 필요합니다. 
  - [GitHub Help 설명링크](https://docs.github.com/en/enterprise-server@latest/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)

  vCPUs| Memory	| Maximum | Concurrency
  --|--|--|--
  8	| 64 GB	|300 jobs
  16| 128 GB|700 jobs
  32| 160 GB|1500 jobs
  64|256 GB|2500 jobs
  96|384 GB|4500 jobs
  128|550 GB|5000 jobs

   - 최대 concurrency는 여러개의 저장소에서 job을 실행시키면서, 각 job마다 대략 10분정도 실행되며 10MB의 artifact를 업로드하는 환경으로 측정되었습니다. 
   - 각 엔터프라이즈의 job실행이 상이하므로, 개별적인 환경에 대한 예측이나 소규모로 시작해 점진적으로 확산하는 방법이 권고됩니다. 