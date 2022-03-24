---
layout: default
title: GitHub Enterprise Account란
nav_order: 6
has_children: true
---


## Enterprise Account 
  - GitHub Enterprise는 **GitHub.com 클라우드상**에 Enterprise 기업 고객을 위한 특별한 관리 페이지를 제공합니다.
  - GitHub.com 클라우드 상에서 엔터프라이즈의 전체 조직을 관리할 수 있는 최상위 계위의 개체 입니다. 

                   Enterprise
                       |
         OrgA ----- Org B --- Org C --- Org D....
          |           |         |         |
        repoA1      repoB1    repoC1    repoD1
        repoA2      repoB2    repoC2    repoD2
         ...         ...       ...       ...

  - 이 페이지는 GitHub.com상의 각 기업 고객의 관리자(Owner)만 접속할 수 있는 Unique한 URL로 제공됩니다 : www.github.com/enterprises/[Enterprise account name]
  - 각 기업의 관리자는 Enterprise Account Owner라고 불립니다.
  - Enterprise Account owner는 GitHub Enterprise Cloud의 Organization(조직)의 admin과는 다릅니다. GitHub Enterprise는 클라우드에 여러개의 Organization을 만들 수 있고, 이 Organization들을 전체적으로 묶어서 관리할 수 있는 ‘상위' 개념이 Enterprise Account 입니다.
  - GitHub Enterprise를 온프렘에 설치형(GHES: GitHub Enterprise Server)으로 사용하시는 기업도, 이 Enterprise Account 페이지에서 라이센스 파일 다운로드,전체 인스턴스들의 라이센스 사용량 관리, 기술지원 티켓 생성 등의 작업이 이루어 집니다.
  - 최초 GitHub Enterprise 계약시, Enterprise Account Owner의 GitHub.com의 개인 계정의 Email 주소(기존에 없다면 새로 가입하여 생성)를 GitHub측에 보내 주시면, GitHub에서 Enterprise Account 페이지를 생성하고, Enterprise Account Owner의 이메일로 Invite를 보냅니다.
  - Enterprise Account Owner는 이메일 수신후, Invite를 수락하는 버튼을 누르면 Enterprise Account 페이지에 로그인(반드시 본인의 개인 계정ID로 로그인 해야함!) 됩니다.
  - Enterprise Account 페이지에 로그인 후, 추가로 다른 Owner들을 추가할 수 있습니다.
  - Enterprise Account는 라이센스 관리(클라우드 및 온프렘 인스턴스들), Actions/Codespaces등의 클라우드 리소스 사용량 관리 및 비용확인, 각종 정책 설정, 기술지원 티켓 생성등을 위한 기본 관리 페이지 이므로, Owner/패스워드 관리가 매우 중요합니다.
  - 최소 **3명 이상**의 Enterprise Owner를 등록해 두시는 것을 권고 드립니다.

## [Enterprise Account 페이지](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/about-enterprise-accounts)
  -  Enterprise Account는 GitHub Enterprise를 사용하시는 기업 고객의 Admin이 GitHub Enterprise의 전반적인 관리를 위해 제공되는 통합 view 입니다.
    ○ 라이센스 및 사용량/추가 사용비용 관리 (온프렘 GHES인스턴스의 라이센스 사용량포함)
    ○ Enterprise Cloud의 사용자(member) 관리
    ○ Enterprise Cloud의 조직(Organization) 관리
    ○ Enterprise Cloud의 SAML 인증 설정
    ○ Enterprise Cloud의 기타 정책 설정

## Enterprise Account 페이지 접근 (두가지 방법)
  - https://www.github.com/enterprises/[엔터프라이즈 이름]
  - 또는, Admin 계정의 GitHub.com내 사용자 사진 프로파일 클릭 후, ‘Your Enterprise’ 메뉴
    <img src>

## [Enterprise내 3가지 역할](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)
  - GitHub Enterprise내에는 아래와 같은 3가지, 서로 다른 권한을 가진 역할이 있습니다.
  - GitHub Administrator : Enterprise Account페이지에 접근하여 GitHub Enteprise를 관리할 수 있습니다.
  - Billing Manager : Billing 관련 페이지에 접근할 수 있으며 Billing 관련 관리를 수행합니다.
  - Member : 일반 사용자

## [Enterprise Administrator 추가하기](https://docs.github.com/en/enterprise-cloud@latest/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)
  - 처음 계약 시 GitHub에 의해 설정된 Admin은 추가로 Administrator를 추가할 수 있습니다.
