---
layout: default
title: GitHub Enterprise
nav_order: 1
parent: GitHub이란
---




## GitHub.com = GitHub Enterprise + more


### 글로벌 GitHub.com의 서비스 플랫폼의 안정성, 확장성, 성능이 그대로 엔터프라이즈에 적용됩니다. 
  
### GitHub.com의 ☝️ 모든 기능들이 그대로 엔터프라이즈에 적용됩니다. 
   - 📂 코드 저장소 
   - 🔔[Notifications](https://github.com/notifications)
   - 👀 Issues 및 Pull Request
   - 📊 [Project관리 - New issues](https://github.com/features/issues)
   - 🚧 [브랜치 보호](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
   - 🚀 GitHub Actions: [내제된 CI/CD](https://github.com/microsoft/vscode/actions)
     - [example1](https://github.com/son7211/ttaacklee/blob/master/.github/workflows/dockerimage.yml)
     - [example2](https://github.com/exceeders/action-02)
     - [example3](https://github.com/exceeders/awesome-actions)
   - 📦 GitHub Packages : Artifactory 저장
     - [examples](https://github.com/github-packages-examples)
   - 👮 [Security 기능](/GitHub Advanced Security/GitHub의 보안기능 정리.md) 
   - 📔 문서화 기능 : GitHub Pages, Wiki
     - Twitter OSS https://twitter.github.io/
     - NETFLIX OSS https://netflix.github.io/
   - 기타 다양한 통계 확인, Insights
 
### 사용자 관리, 보안 🛡️, 연동
   - 사용자 관리/인증 : LDAP, SAML, CAS, 시스템 자체 등록 🔑
   - 다양한 사용자 보안 : 2FA의무화, PAT, SSH키 등록 및 관리, Verified Domain, IP allow list,,
   - 다양한 사용자 권한 설정 : 저장소 생성권한, forking권한, Invite권한, 기본 저장소 접근 권한
   - Audit Log, Log 포워딩, Syslog
   - 다양한 API 연동 : Webhook, GitHub App
   - 다양한 툴들과의 연동 방법 제공
  
### 온프렘 설치형의 시스템 관리, 성능, 확장성
   - 1개 VM 📍
   - Any Cloud Infra : Azure, AWS, GCP// VMware, KVM, Xen
   - 1개 VM에 ~수만의 사용자 💪
  

<br>
<br>

## GitHub Enterprise 
  
### GitHub.com과 GitHub Enterprise는 전세계 개발자들의 오픈소스와, 엔터프라이즈 개발자들의 Home 입니다. 
  ![image](https://user-images.githubusercontent.com/40287191/146722382-53d8b8ff-5c33-4992-86e3-a43cffb57c7e.png)
 <br>
  
### Fortune 100기업의 84%가 GitHub을 사용합니다. (GitHub [Octoverse report](https://octoverse.github.com/))
  ![image](https://user-images.githubusercontent.com/40287191/146722501-4a54c868-c5c4-4394-a119-e021ed5f2fe6.png)
  <br>
  
### GitHub Enterprise는 SaaS형 서비스 (GitHub Enterprise Cloud ☁️)와 온프렘 설치형 GitHub Enterprise Server 두 가지
  ![image](https://user-images.githubusercontent.com/40287191/122533534-a47a9e00-d05c-11eb-916b-01240a371e52.png)

  <br>
  
### GitHub Enterprise는 1➕1 : 👆 두가지 모두를 동시에 제공합니다.
  ![image](https://user-images.githubusercontent.com/40287191/120342476-cb359680-c332-11eb-86fa-5457ac2792d0.png)
  
  <br>
  
### GitHub Enterprise Server로 유용한 정보를 다운로드 하여 편리하게 사용할 수 있습니다. : GitHub Connect
   - 의존성 보안 알람 
   - GitHub.com에 존재하는 GitHub Actions를 편리하게 사용
   - Unified Search : 온프렘에서 한번의 Search로 온프렘과 GitHub.com 모두의 결과를 동시에
   - Unified Contribution : 개발자 프로필에 온프렘의 기여 횟수를 표시
  <br>
  
### GitHub Mobile App
  <img src="https://user-images.githubusercontent.com/40287191/120345536-852e0200-c335-11eb-84e7-ca365c153846.png" width="200" height="350">
   
 - 모바일에 최적화된 GitHub의 모든 기능 편리하게 사용; Issue, Pull request.
 - GHES 지원
 - 편리한 검색과 결과 보기 : Users, Repos, Orgs, Issues, Pull Requests.
 - 언제 어디에 있든 Issues와 Pull Requests상에서 편리한 협업 : Comment, react, and merge code.
 - “Favorite Repos”, “Recently Viewed” sections 
  
<br>
  
### GitHub Codespace
 ![image](https://user-images.githubusercontent.com/40287191/120346118-08e7ee80-c336-11eb-94d0-bc821c8baf22.png)
  
  - GitHub Enterprise (Cloud only) 서비스로 제공되며, 저장소내 브라우져에서 원클릭으로 실행되는 개발환경
    - [Codespace 비용](https://docs.github.com/en/enterprise-cloud@latest/codespaces/codespaces-reference/understanding-billing-for-codespaces)
  - VS code의 모든 기능과 동일, 모든 extension 사용가능
  - 해당 저장소에서 실행되는 모든 Codespace에 동일한 환경 구성을 위해 devcontainer.json파일 사용
  - 개인화 구성을 위해 개인 계정과 [Setting sync](https://code.visualstudio.com/docs/editor/settings-sync)
  - GitHub.com의 개인 계정에 [dotfiles Repository](https://docs.github.com/en/enterprise-cloud@latest/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#dotfiles) 사용가능
  - GitHub Enterprise Organization의 Owner에 의한 [Codespace 사용 정책 설정](https://docs.github.com/en/enterprise-cloud@latest/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization) 가능
     - [Usage limit](https://docs.github.com/en/enterprise-cloud@latest/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization#usage-limits) 설정
<br>
<br>