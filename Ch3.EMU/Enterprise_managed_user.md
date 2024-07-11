---
layout: default
title: 03. Enterprise Managed User(EMU)서비스
nav_order: 4
has_children: true
---

## 폐쇄형 클라우드 SaaS 서비스

## [GitHub Enterprise Managed User(EMU)](https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)
  - GitHub Enterprise Cloud(GHEC) 서비스의 한 형태로, 기존의 GHEC서비스는 GitHub.com의 사용자 계정을 GHEC의 조직으로 초대하여 추가하는 형태 입니다.
  - 반면 EMU(Enterprise Managed User)서비스는 동일한 GHEC서비스 이지만, 사용자의 계정 관리를 엔터프라이즈의 IdP에서 직접하는 관리하는 형태 입니다. 
  - 즉, 사용자의 계정 관리를 엔터프라이즈의 Identity Provider(IdP)를 통해 SAML SSO인증과 Provision, updated, deprovision등의 모든 관리를 수행합니다. 
  - 사용자의 계정을 각 엔터프라이즈가 직접 관리하며, 조직 레벨이나 사용자계정 모두 **퍼블릭 저장소를 사용할 수 없어** 기존 GHEC에 비해 매우 폐쇄적인 환경을 제공해 주는 GitHub Enterprise Cloud서비스 입니다.
  - EMU에 속한 사용자 계정은 **오직** 자신이 속한 EMU Org의 Private 저장소, 또는 본인의 사용자 계정의 Private 저장소에서만 활동할 수 있습니다. (퍼블릭 저장소 생성 불가)
  - EMU에 속한 조직과 사용자 계정은 외부 GitHub.com에는 전혀 노출되지 않습니다. 
  - 현재 지원되는 IdP는 **Azure AD와 Okta**의 두 가지가 있습니다. EMU를 사용하기 원하는 엔터프라이즈는 이 두가지 중 하나의 IdP를 사용하여야 합니다. 
  - EMU서비스는 반드시 GitHub Sales에 문의하셔야 구매가 가능합니다. (GitHub.com의 웹사이트를 통해 직접 구매 및 결제는 불가합니다.)
  
### [EMU의 특징](https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users) 
  - 조직과 사용자 계정 모두에 대해 퍼블릭 저장소를 생성할 수 없습니다. 
  - 사용자는 GitHub.com의 퍼블릭 저장소에 대해 '쓰기' 권한이 없습니다. (읽기는 가능)
  - Public 저장소를 EMU조직으로 Fork할 수 없습니다.
  - Outside collaborator를 특정 저장소에 초대할 수 없습니다. 
  - 사용자 계정에 GitHub App을 추가할 수 없습니다. 
  
### [Short Code와 Username](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users#create-a-new-enterprise-account)
  - EMU서비스를 위해 클라우드 상에서 EMU만의 고유한 Name space를 구분짓는 **Short Code**가 엔터프라이즈마다 고유하게 생성됩니다. Short code는 처음 생성되면 **수정이나 변경이 불가능**하므로 처음 생성시에 신중하게 선택하셔야 합니다. Short code는 외부에 노출되는 정보는 아니며, 단지 GitHub.com 클라우드 내부에서 각 EMU의 엔터프라이즈를 고유하게 구별지어 주는 Name Space입니다.
  - Short code는 3-8자리 alphanumeric string입니다.
  - EMU 사용자계정의 이름 뒤에 Short code가 suffix로 붙습니다. 
    **@IDP-USERNAME_SHORT-CODE** 

  - 예) 사용자 이름이 `honggildong`이고 Short code가 `aaacom`이라면, EMU 사용자이름은 `honggildong_aaacom`이 됩니다. 
  - 만약, EMU조직의 URL이 아닌 github.com/login으로 login을 하기위해 short code가 포함된 username을 입력하면, 자동으로 아래 화면과 같이 IdP를 통한 인증을 받도록 메뉴가 변경됩니다.
    <img src="/assets/images/emu_login.png">

### EMU의 Admin
  - EMU의 Admin은 특수하게 **@SHORT-CODE_admin**으로 suffix가 구성됩니다. 
  - EMU 조직을 GitHub에서 생성하고, Admin에게만 최초 invite가 전송됩니다. 
  - Invite를 수신한 Admin은 브라우져의 **시크릿 창**을 실행하여, 해당 초대 링크로 접속하여 본인의 패스워드를 설정합니다. (시크릿 창이 아닌 일반 브라우져에서 동시에 실행하면 기존 계정으로 인식되어 문제발생할 가능)
  - 이후 Admin은 EMU와 연결할 SAML SSO와 SCIM을 설정합니다. 


### EMU 트라이얼
   - EMU의 트라이얼을 위해서는 GitHub Sales에 연락하시면 정해진 기간만큼 Trial을 위해 EMU조직을 생성하여, Admin하실 분을 초대해 드립니다. 
   - EMU의 Short code는 Unique하게 설정되고, 이후 변경이 불가하므로 초기 Trial시에 이점 유의하셔서 신중하게 Short code를 설정하시기 바랍니다. 
   
