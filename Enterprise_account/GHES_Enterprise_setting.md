---
layout: default
title: 온프렘 GHES의 Enterprise Settings페이지
nav_order: 4
parent: GitHub Enterprise Account란
---

## 온프렘 GHES의 Enterprise Settings페이지
  - 온프렘에 설치형으로 GitHub Enterprise Server를 사용하는 경우, 해당 인스턴스를 관리해 주는 Enterprise Settings 페이지가 존재합니다.
  - GitHub.com 클라우드에 Enterprise Account 페이지와 유사하게 해당 온프렘 인스턴스의 전체 엔터프라이즈 레벨에서 하위 Org들을 한꺼번에 관리하고, 정책 설정 및 라이센스, 사용량 등을 관리하기위한 Admin 페이지 입니다. 
  - 이 페이지는 온프렘에 설치된 **각각의 인스턴스에만 존재**하는 것이므로, GitHub.com의 Enterprise Account 페이지와는 관계 없습니다.
  - 다만, 이 페이지에서 ‘GitHub Connect’를 설정 하여, 위에서 설명된 Enterprise Account 페이지에 ‘connect'을 구성할 수 있습니다. 이렇게 하면, 라이센스 통합관리, 의존성 보안 취약성 알람 활성화, GitHub.com의 Actions들의 사용등 다양한 편리 기능이 있습니다. 자세한 설명은 아래 2항에서 설명합니다.
  - 온프렘 GHES 인스턴스의 Site Admin이 이 페이지에 접근 가능합니다.

## Enterprise Settings 페이지 접근
  - 온프렘 GHES 인스턴스의 Site admin은 로그인 후, 본인 개인 계정의 버튼을 누르면, ‘Enterprise Settings’라는 메뉴가 있습니다.
  - 또는, Site admin 페이지 왼편 중간에 ‘Enterprise Overview’ 메뉴

## GitHub Connect 설정
  - Enterprise Settings 페이지 왼편의 GitHub Connect 메뉴 Connect를 활성화는 Enterprise Account 페이지의 Owner 권한이 있어야 가능합니다.
  - Connect 기능을 통해 아래 기능들의 활성화가 가능합니다.
     - [라이센스 통합 관리-자동으로 동기](https://docs.github.com/en/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)
     - GitHub.com의 Actions의 사용
     - [의존성의 보안취약점에 대한 알람 활성화](https://docs.github.com/en/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)
     - [사용자들이 GitHub내에서 검색 시, GitHub.com의 검색결과도 함께 표시](https://docs.github.com/en/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)
     - [사용자들이 온프렘에서의 contribution 횟수만 GitHub.com의 개인 프로필에 반영](https://docs.github.com/en/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom)

## 라이센스 통합관리
  - GitHub Enterprise 라이센스는 클라우드(GitHub Enterprise Cloud서비스)와 온프렘 인스턴스를 동시에 사용할 수 있고, 온프렘에도 여러개의 인스턴스를 설치할 수 있습니다.
  - GitHub Enterprise 라이센스에서 라이센스 1개를 차지하는 것은, Unique한 이메일 주소를 가진 한명의 사용자 입니다.
  - 즉, 한명의 사용자는 클라우드와 여러개의 온프렘 인스턴스에 동시에 접속할 수 있습니다.
  - GitHub Enterprise Cloud 서비스는 필요하지 않으면 전혀 사용하지 않을 수도 있습니다.
  - 라이센스 통합 관리는, 이렇게 Cloud 및 여러 온프렘 인스턴스의 라이센스 사용량을 통합 하여 관리할 수 있습니다.
  - 자동으로 하길 원치 않는다면, 이 옵션을 비활성화하고, [수동으로 파일을 업로드하여 동기화](https://docs.github.com/en/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#manually-syncing-license-usage) 할 수 있습니다.

## GitHub.com의 Actions 사용
  - GitHub Actions는 일일이 Actions들을 새로 만들지 않고, GitHub.com상에 존재하는 다양한 Action들을 편리하게 호출하여 사용할 수 있도록 되어 있습니다.
  - 이 기능을 활성화 하여 [외부 GitHub.com의 Actions들](https://github.com/marketplace?category=&query=&type=actions&verification=)을 사용 할 수 있습니다. (*온프렘에서 Actions들을 실행하는 Self-hosted runner도 이 옵션 활성화와 별도로 인터넷이 연결되어야 합니다)
  - 다만, 온프렘에 설치된 인스턴스가 회사 정책으로 외부 인터넷이 아예 단절되어야 하는 경우에 [수동으로 가져와 사용할 수 있는 방법](/GitHub%EC%9D%B4%EB%9E%80/Actions를 GHES에서 사용하려면/Actions-on-prem/action-sync-tool.md)을 제공합니다.

## GitHub Enterprise LICENSE 파일 다운로드
  - 최초 GitHub Enterprise계약시, 또는 라이센스 갱신시에 온프렘 인스턴스에 사용할 라이센스 파일을 다운로드할 수 있는 곳은, [Enterprise Account 페이지](/Enterprise_account/Enterprise_account.html)에 존재합니다.
  - 계약이나, 갱신시에 이 메뉴에 들어가면 새로 업데이트된 라이센스가 파일로 존재하며 이것을 다운로드 받아, 온프렘에 설치된 GitHub Enterprise Server 인스턴스에 업로드 해 주시면 됩니다.
  - [라이센스 파일의 다운로드](https://docs.github.com/en/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)는 Enterprise Account 페이지 > Settings > Enterprise licensing 메뉴 입니다.
  - 여기에서 파일을 받아, 온프렘에 설치된 인스턴스의 Enterprise Settings 메뉴 > Settings > [License 메뉴에 업로드](https://docs.github.com/en/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) 하면 됩니다.