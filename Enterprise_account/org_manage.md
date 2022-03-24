---
layout: default
title: Enterprise Account에서 Org 관리
nav_order: 1
parent: GitHub Enterprise Account란
---


## [Enterprise내 조직(Organization) 관리하기](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account)
  - Enterprise Admin들은 Enterprise cloud내에 조직들을 추가하고 관리할 수 있습니다.
 
  ● `(주의)` Enterprise Admin과 조직의 Owner는 별도의 권한입니다. Enterprise Admin이라도 자신이 생성하지 않은 조직은, 자동으로 조직의 Owner 권한을 갖지 않습니다. 즉, 각 조직 별로 해당 조직을 생성한 Owner가 별도로 존재하며, Enterprise의 Admin이라 할 지라도, 조직의 owner 권한을 자동으로 갖는 것은 아니며, 특정 조직에 초대받지 않으면, 해당 조직의 Private 저장소를 볼 수 없습니다.
  
  - 조직에 사용자 관리하기
     ○ 조직에 Member 추가, 삭제
     ○ 팀 관리

## [Enterprise의 정책 관리하기](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account)
  - Enterprise Cloud에 대한 각종 정책을 설정하고 관리할 수 있습니다.
  - Enterprise 레벨에서의 설정은, Enterprise 하위에 존재하는 모든 Org에 한꺼번에 적용됩니다. 

  - [저장소 권한 관련설정](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account)
    ○ Default 권한(Admin/Write/Read/No policy)
    ○ 저장소 생성권한 (Public/Private/Internal)
    ○ 저장소 포킹권한 (Private/Internal 저장소에 대한)
    ○ 저장소에 outside collaborator 추가 권한
    ○ 저장소 설정변경 권한 등
  - [Project 설정](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account)
  - [Security 세팅](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)
  - [GitHub Actions 관련 정책 설정](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)
  - [GitHub Actions artifact 및 로그 보존 기간 설정](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)