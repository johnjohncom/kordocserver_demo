---
layout: default
title: GitHub Hosted Runner
parent: Action 러너
grand_parent: GitHub Actions란
nav_order: 1
---

## GitHub-hosted Runner 

  1. GitHub-hosted Runner는 어디서 호스팅 되나요? ☁️
     - [Windows, Linux 러너](https://docs.github.com/en/enterprise-server@latest/actions/using-github-hosted-runners/about-github-hosted-runners#cloud-hosts-for-github-hosted-runners) : Azure - `Standard_DS2_v2 virtual machine`
     - [Mac 러너](https://docs.github.com/en/enterprise-server@latest/actions/using-github-hosted-runners/about-github-hosted-runners#cloud-hosts-for-github-hosted-runners) : GitHub 자체 macOS Cloud
   

  2. [GitHub-hosted Runner 과금](https://docs.github.com/en/enterprise-cloud@latest/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-billing-for-github-actions)
     - GitHub Enterprise는 기본적으로 **월별 50,000분/50GB Storage**(Actions/Packages용도)가 포함되어 있습니다. 
   
     - 초과되는 사용량에 대해서 아래와 같이 분당 ⏰ 과금됩니다. 
     <img src="https://user-images.githubusercontent.com/40287191/121186647-48688a80-c8a2-11eb-9874-45fd40619203.png" width="650" height="150">

     - 초과되는 사용량은 Admin page에서 확인 가능 ([Organization](https://docs.github.com/en/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization), [Enterprise](https://docs.github.com/en/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account))하며, _월별 최대사용한도_ 📊를 미리 정해 놓을 수 있습니다. 
       - [사용량 계산 예시](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#calculating-minute-and-storage-spending)
       - 월별사용한도 설정 : [Organization](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise), [Enterprise](https://docs.github.com/en/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions#managing-the-spending-limit-for-github-actions-for-your-enterprise-account)
   
       <img src="https://user-images.githubusercontent.com/40287191/121212009-eadf3880-c8b7-11eb-8742-84f2ec094047.png" width="700" height="250">

     - 초과 사용량에 대해서만 월별 결재, 또는 사전에 일정량을 Pre-paid로 구매 가능합니다. 
  
     - Microsoft Enterprise Agreement로 GitHub Enterprise를 구매했다면, [Azure Subscription ID를 GitHub Enterprise Account와 연결](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)하여 초과 사용량에 대한 지불을 포함시킬 수 있습니다. 
 
  
  3. GitHub-hosted Runner 지원 OS 
     
     - 아래의 표와 같이 [지원되는 OS](https://docs.github.com/en/enterprise-cloud@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)가 있습니다. 
    
      <img src="https://user-images.githubusercontent.com/40287191/121195196-5ae6c200-c8aa-11eb-8bcb-5648f677d4e6.png" width="450" height="250">


  4. GitHub-hosted Runner 사전 설치된 소프트웨어
   
     - [OS별 사전 설치된 소프트웨어 확인](https://docs.github.com/en/enterprise-cloud@latest/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)
    
     - 예: Ubuntu 20.04 LTS
      
      <img src="https://user-images.githubusercontent.com/40287191/121188796-6b943980-c8a4-11eb-8cd7-9f935c4f033d.png" width="250" height="600">&nbsp;
      <img src="https://user-images.githubusercontent.com/40287191/121188890-81a1fa00-c8a4-11eb-9dd6-0f681770c4cc.png" width="250" height="600">&nbsp;  
      <img src="https://user-images.githubusercontent.com/40287191/121189004-a007f580-c8a4-11eb-8c1b-25297a8a760a.png" width="250" height="600">


  5. IP address of GitHub-hosted runner
  
     - GitHub-hosted runner를 위해 Actions가 사용하는 IP address range는 [GitHub REST API](https://docs.github.com/en/enterprise-server@latest/rest/reference/meta#get-github-meta-information)로 확인 가능 : [https://api.github.com/meta](https://api.github.com/meta)

     * `Note`: If you use an `IP address allow list` for your GitHub organization or enterprise account, you cannot use GitHub-hosted runners and must instead use self-hosted runners. 
 

  6. 사용량 최대치 limit
  
     - GitHub-hosted runner를 사용할 때 아래와 같은 [사용량의 한계](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/usage-limits-billing-and-administration#usage-limits)가 정해져 있습니다. (이 내용은 변경될 수 있습니다)

        항목 | 최대치
        --|--
        Job Execution time | 6시간
        Workflow run time | 72시간
        API requests | 1000 request /1시간 (한 저장소내 전체 Actions에 대해)
        Concurrent jobs | 180개, MacOS는 50개
        Job matrix | 256 job /워크플로우
        Workflow run queue | 저장소 당 10초에 최대 100개 워크 플로우

<br/>
  