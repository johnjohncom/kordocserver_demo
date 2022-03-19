---
layout: default
title: 외부 Actions사용을 위한 설정
parent: Actions의 GHES설정
grand_parent: GitHub Actions란
nav_order: 1
---


# On-prem에서 GitHub.com/Marketplace의 Actions 사용을 위한 설정 

## GHES에는 기본 Actions들이 빌트인 📥 으로 포함되어 있습니다. 

  - 빌트인되어 있는 Actions org에서 먼저 Actions를 찾고, 여기에서 찾을 수 없을 떄, 외부 GitHub.com의 Actions를 찾습니다. 
  - GHES 인스턴스가 설치되면 자동으로 내부에 'actions'라는 Org가 생성되어 있고, 이 Org에 다양한 Action들이 포함되어 있습니다. 이 Actions들은 https://github.com/actions 에 있는 Actions들이 GitHub Enterprise 설치 버젼에 포함된 것입니다(해당버젼이 빌드될 때의 특정시점). 

   ![image](https://user-images.githubusercontent.com/40287191/121540180-3a9d3b80-ca41-11eb-9516-2b81dd8b5751.png)

 
 
 - 워크 플로우에서 사용할 Action을 선언할 때 `uses: actions/setup-node@v1` 과 같이 선언하면 기본적으로 빌트인된 'actions' Org에 있는 Actions들을 사용하게 됩니다.
 
 - 이와 같이, Actions는 먼저 GHES내부에 있는 '조직명/저장소명'을 가진 Actions를 먼저 찾고, 만약 없다면, 설정된 GitHub Connect를 통해 외부의 Actions를 찾습니다. 
 
  ![image](https://user-images.githubusercontent.com/40287191/121542232-f14deb80-ca42-11eb-9c1d-c0252d4749d5.png)

 
 - GHES 인스턴스에 포함된 Actions들은 https://github.com/actions 의 내용이 업데이트 되어도 자동으로 동기화 되지 않습니다. 
 
 - 이 Actions들에 대한 최신 업데이트된 내용을 사용하기 위해서는 아래와 같이 **두가지 방법**이 있습니다. 
 
    - GHES내부에 빌트인된 'actions' 조직의 저장소를 삭제 (GitHub Connect 설정필요) 
    
       - 'actions' 조직의 저장소를 삭제하기 위해서는 'actions' 조직의 owner가 되어야 하며, 'actions' 조직의 owner는 default로 `actions_admin` 이라는 기본 owner가 있으나, [site admin이 추가로 owner를 지정](https://docs.github.com/en/enterprise-server@3.1/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#prerequisitesadmin)할 수 있습니다. 
   
    - 또는 [3.항](https://github.com/exceeders/Actions_GHES_gettingStarted#3-connect-%EC%84%A4%EC%A0%95-%EB%B0%8F-self-hosted-%EB%9F%AC%EB%84%88%EC%9D%98-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%97%B0%EA%B2%B0%EC%9D%B4-%EB%B6%88%EA%B0%80%ED%95%9C-%EA%B2%BD%EC%9A%B0-action-sync-tool-%EC%82%AC%EC%9A%A9)에서 설명되는 `Actions-sync tool`을 사용
 
 
## [GitHub.com/Marketplace의 Action 사용을 위해 Connect 설정 허용](https://docs.github.com/en/enterprise-server@3.1/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)
 
 - GHES에서는 GitHub.com 또는 GitHub Marketplace의 Actions를 직접적으로 사용할 수 없으나, `GitHub Connect`를 이용해 [옵션을 허용](https://docs.github.com/en/enterprise-server@3.1/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-all-githubcom-actions)해 주면 사용이 가능합니다. 
 
 - Site-admin에 의한 설정 : Site admin메뉴 > Enterprise overview > Settings > GitHub Connect 
  
   <img src="https://user-images.githubusercontent.com/40287191/121316856-b1a0da00-c944-11eb-91d8-203ac1641481.png" width="500" height="180">

## Self-hosted 러너도 별도로 인터넷 연결이 되어 있어 합니다. 