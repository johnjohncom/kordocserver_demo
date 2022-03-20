---
layout: default
title: Actions 이중화, 백업
parent: Actions의 GHES설정
grand_parent: GitHub Actions란
nav_order: 5
---


# Actions 이중화, 백업

## [GitHub Actions 이중화](https://docs.github.com/en/enterprise-server@latest/admin/github-actions/advanced-configuration-and-troubleshooting/high-availability-for-github-actions)   
   
   - GitHub Enterprise Server 자체의 백업과 이중화 구성은, Action이 사용하는 외부 S3 blob 스토리지(Azure, Amazon, MinIO)의 백업과 이중화와는 **제공하지 않습니다**. 
 
   - 외부 S3 blob 스토리지에서 제공하는 이중화 및 백업에 의존하며, 이러한 스토리지 서비스의 데이터 이중화와 replication에 대한 구성이 강력히 권고됩니다. 
 
   - GitHub Enterprise Server 운영 중, 이중화 replica를 primary로 승격하는 경우, GitHub Actions을 위해 별도의 구성이나 작업이 필요하지 않습니다. 
 
   
## [Backup and restoring](https://docs.github.com/en/enterprise-server@latest/admin/github-actions/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)
 
   - GitHub Enterprise Server 자체의 백업과 이중화 구성은, 외부 S3 blob 스토리지의 백업 및 이중화는 제공하지 않습니다. 
 
   - GitHub Action를 사용하던 instance의 백업데이터를, 신규 인스턴스에 restore할 때의 절차는 아래와 같습니다. 
 
     1) 원래의 인스턴스가 오프라인임을 확인
     2) 새로운 GHES 인스턴스의 네트웍 구성 설정. (네트웍 구성은 백업 스냅샷에 포함되지 않고, `ghe-restore` 명령으로도 덮어씌어 지지 않음)
     3) 새로운 GHES 인스턴스에 이전 원래 인스턴스가 사용하던 동일한 외부 스토리지 등록
     4) 새로운 GHES 인스턴스에 GitHub Actions 활성화
     5) `ghe-restore` 명령으로 백업 데이터 복구
     6) Self-hosted 러너 재등록

<br/>
  