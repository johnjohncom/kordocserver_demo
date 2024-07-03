---
layout: default
title: GitHub의 기본개념, 용어설명, FAQ
nav_order: 2
parent: 01. GitHub이란
---


## GitHub 기본개념, 용어설명, FAQ
  
### GitHub의 'Account'(계정)는 어떤것들이 있나요?
- GitHub.com **클라우드상**의 'Account', 즉 '계정'은 'Personal'과 'Organization', 그리고 'Enterprise'로 나뉩니다.
- 'Personal'은 개인 계정이며, 'Organization'은 단체 계정, 그리고 'Enterprise'는 기업용 계정입니다.
- 'Personal' 계정은 무료, 또는 유료([Pro plan](https://docs.github.com/en/get-started/learning-about-github/githubs-plans#github-pro))로 사용할 수 있으며, 개인이 일반적인 웹사이트에 가입하는 것과 같은 개념의 '개인의 계정'을 의미합니다. (개인계정에 Private, Public Repository 무제한 생성 가능)
- 'Organization' 계정은 무료, 또는 유료로 사용할 수 있으며, 단체나 조직이 사용하는 계정입니다. (Organization 계정에 Private, Public Repository 무제한 생성 가능)
   - 무료로 사용하는 Organization 계정은 오픈소스에서 사용하는 계정이며, 
   - 유료로 Organization을 사용하려면 'Team'라이센스, 혹은 'GitHub Enterprise'라이센스를 구매해야 합니다.
   - 무료, Team, Enterprise 라이센스에 따라 사용할 수 있는 기능이 다릅니다. 기능 비교는 [여기](https://github.com/pricing), 또는 [GitHub Help](https://docs.github.com/ko/get-started/learning-about-github/githubs-plans)에서 확인하세요.
   - Team vs Enterprise 기능 비교 : [여기](Team-vs-Enterprise.md)를 참조하세요.

- 'Enterprise'계정은, GitHub의 기업용 라이센스인 'GitHub Enterprise' 라이센스를 구매하여 사용하는 계정입니다. Enterprise 계정은, 그 밑에 여러개의 'Organization'을 생성할 수 있습니다. ([Enterprise Account란](../Ch2.Enterprise_account/Enterprise_account.md))
  - 'Enterprise' 밑에는 바로 Repository를 생성할 수 없으며, 'Organization'을 생성하여 그 밑에 Repository를 생성할 수 있습니다. 
  ```
               Enterprise Account
                       |
         OrgA ----- Org B --- Org C --- Org D....
          |           |         |         |
        repoA1      repoB1    repoC1    repoD1
        repoA2      repoB2    repoC2    repoD2
         ...         ...       ...       ...
   ```

    - 즉, 사용자들은 하나 이상의 Organization에 소속되어야 비로소 GitHub Enterprise를 사용할 수 있게 되며, GitHub Enterprise Cloud상에서는 사용자가 어느 Org에도 소속되어 있지 않은 상태면 'Unaffiliated' 상태이며, GitHub Enterprise Cloud라면 라이센스를 사용하지 않습니다. 

  - Cloud의 경우, 기존에 유료, 또는 무료로 사용하던 Organization이 있다면, 해당 Organization을 'Enterprise' 계정으로 이관할 수 있습니다.
  - 'Enterprise'는, 'Cloud'와 'Server'로 나뉩니다. 'Cloud'는 GitHub.com에서 제공하는 클라우드형 SaaS 서비스이며, 'Server'는 온프렘에서 직접 설치하여 사용하는 서버형 서비스입니다.


### GitHub Enterprise - 'Cloud'와 'Server'의 차이는 무엇인가요?
   
   | 항목 | GitHub Enterprise Cloud | GitHub Enterprise Server |
   |:---:|:---:|:---:|
   | 설치 | GitHub.com 클라우드상 SaaS서비스 | 기업 관리자에 의해 온프렘에서 직접 설치 | 
   | 버전 업그레이드 | GitHub.com에서 자동 업그레이드 | 기업 관리자에 의해 [직접 업그레이드](https://docs.github.com/ko/enterprise-server@latest/admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server) |
   | 사용자 계정 | - GitHub.com '개인 계정을 Enterprise로 초대'하여 사용 <BR>    - 혹은 기업의 인증서버(IdP)에 존재하는 '기업의 사용자 계정'을 직접사용 (EMU서비스인 경우 ([EMU서비스란](../Ch3.EMU/Ch2.Enterprise_managed_user.md)))  | 기업의 온프렘 내부 계정 사용 (기업의 내부 인증 서버 LDAP, SAML등 연동, 혹은 GHES내부에 직접 계정 생성)  |
   | 이중화 구성 | GitHub.com에서 자동으로 처리 | 기업 관리자에 의해 직접 구성 ([GitHub Enterprise Server의 HA구성](https://docs.github.com/ko/enterprise-server@latest/admin/monitoring-managing-and-updating-your-instance/configuring-high-availability/creating-a-high-availability-replica)) |
   | 백업 구성 | GitHub.com에서 자동으로 처리 | 기업 관리자에 의해 직접 구성 ([GitHub Enterprise Server의 백업](https://docs.github.com/ko/enterprise-server@latest/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance)) |
   | 저장소 | GitHub.com 저장소 사용 | 온프렘 저장소 사용 |

  

### GitHub Enterprise의 '멤버'는 어떻게 구성할 수 있나요?

| 항목 | GitHub Enterprise Cloud | GitHub Enterprise Server |
|:---:|:---:|:---:|
| 멤버쉽 | Enterprise에 소속된 Organization들 중, 어느 하나의 Organization 또는 다수의 Organization에 소속된 사용자는 Enterprise의 멤버가 됩니다. | 온프렘 GHES에 LDAP, SAML등의 인증서버와 연동하여 사용자를 추가하거나, GHES내부에 직접 계정을 생성하여 사용합니다. |
| 사용자 계정 | - GitHub.com '개인 계정을 Enterprise로 초대'하여 사용 <BR> - 혹은 기업의 인증서버(IdP)에 존재하는 '기업의 사용자 계정'을 직접사용 (EMU서비스인 경우)  | 기업의 온프렘 내부 계정 사용 (기업의 내부 인증 서버 LDAP, SAML등 연동, 혹은 GHES내부에 직접 계정 생성)  |
| 멤버 구성 | - 개인계정 사용시: 'Enterprise' 하위의 'Organization'에 멤버를 초대   <br>  - EMU 사용시: Enterprise 레벨에서 기업 인증서버와 SSO 및 auto-provisioning으로 자동 구성 | 온프렘 GHES에 LDAP, SAML 인증을 통해 사용자가 로그인하거나, 관리자가 직접 계정 생성 |
| SSO 설정 | Enterprise 레벨 또는 각 Organization 레벨에서 설정 가능 | 기업 관리자에 의해 기업 내부 인증서버(LDAP, SAML)와 연동 구성 설정


- GitHub Enterprise Cloud와 GitHub Enterprise Server의 계정은 별개의 것으로 서로 연동되지 않으며, 각각 별도로 존재하는 계정입니다.

### GitHub Enterprise Cloud의 '사용자 계정'은 어떻게 구성되나요?
- GitHub Enterprise **Cloud** (GHEC)의 사용자 계정은 아래 테이블과 같이 'GitHub.com상의 개인 계정'을 초대하여 사용하는 경우와, '기업의 인증서버(IdP)에 존재하는 사용자 계정'을 직접 사용하는 경우로 나뉩니다.

| 사용자 계정 | 일반 GHEC 서비스 | EMU(Enterprise Managed User)서비스 |
|:---:|:---:|:---:|
| 계정 | GitHub.com의 개인 계정을 Enterprise로 초대하여 사용 | 기업의 인증서버(IdP)에 존재하는 사용자 계정을 직접 사용 |
| SSO 연동 | GitHub Enterprise Cloud의 [Enterprise 레벨](https://docs.github.com/ko/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise), 혹은 [각 Organization 레벨에서 개별 설정](https://docs.github.com/ko/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization) 가능 | [Enterprise 레벨에서 기업의 인증서버 (IdP)와 반드시 연동 구성](https://docs.github.com/ko/enterprise-cloud@latest/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)해야 함 |
| Provisioning 구성(SCIM) | [Organization 레벨에서만 설정](https://docs.github.com/ko/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) 가능 |  [Enterprise 레벨에서만 구성 가능](https://docs.github.com/ko/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users) |
| 지원 IdP 종류 | [GitHub.com 설명페이지](https://docs.github.com/ko/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#supported-identity-providers) | [Azure AD, Okta, PingFederate](https://docs.github.com/ko/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users#partner-identity-providers) |

### GitHub의 'Repository' 종류는 어떤것이 있나요?
- GitHub의 Repository 타입은 'Public', 'Private', 'Internal'로 나뉩니다.
- 'Public'은 누구나 볼 수 있는 오픈소스 저장소이며, 'Private'는 특정 사용자만 볼 수 있는 비공개 저장소입니다.
- 'Internal'은 'Enterprise' 계정에서만 사용할 수 있는 저장소로, 'Public'과 'Private'의 중간 형태로, 'Enterprise'내의 사용자만 볼 수 있는 (Enterprise 내부에서만 Public 타입 저장소 처럼 동작하는) 저장소입니다. 즉, Internal 타입 저장소는, Enterprise 하위의 어떤 Organization에 속해 있더라도, Enterprise 내부의 모든 사용자가 볼 수 있는 저장소입니다. 

| 저장소 타입 | Enterprise | Team 플랜 | Personal |
|:---:|:---:|:---:|:---:|
| Public | O | O | O |
| Private | O | O | O |
| Internal | O | X | X |




