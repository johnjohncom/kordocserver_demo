---
layout: default
title: Self Hosted Runner
parent: Action 러너
grand_parent: GitHub Actions란
nav_order: 2
---

## Self-hosted Runner

  1. Self-hosted Runner는 별도 과금이 없습니다. 
  
  2. Self-hosted Runner 어플리케이션
  
     - Self-hosted Runner를 GitHub Enterprise와 연결해 주는 어플리케이션 입니다. 
     - 오픈소스이며, https://github.com/actions/runner 에서 보실 수 있습니다. 
     - Self-hosted Runner 추가시, 화면에 보여지는 가이드의 순서데로 설치 진행 하면 됩니다. (아래 5.Self-hosted Runner 추가)
    
  3. [지원되는 OS및 Architecture](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners#supported-architectures-and-operating-systems-for-self-hosted-runners)
    
      Linux | Windows | MacOS | Architectures
      --|--|--|--
      Red Hat Enterprise Linux 7 or later<br>CentOS 7 or later<br>Oracle Linux 7<br>Fedora 29 or later<br>Debian 9 or later<br>Ubuntu 16.04 or later<br>Linux Mint 18 or later<br>openSUSE 15 or later<br>SUSE Enterprise Linux (SLES) 12 SP2 or later | Windows 7 64-bit<br>Windows 8.1 64-bit<br>Windows 10 64-bit<br>Windows Server 2012 R2 64-bit<br>Windows Server 2016 64-bit<br>Windows Server 2019 64-bit |macOS 10.13 (High Sierra) or later |x64 - Linux, macOS, Windows.<br>ARM64 - Linux only.<br>ARM32 - Linux only.  
      

  4. [Self-hosted Runner 계위](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)
  
     - Self-hosted Runner는 아래와 같이 크게 3가지로 구성하여 사용할 수 있습니다. 
      
       Enterprise 레벨 러너 | GitHub Enterprise 전체에서 사용가능 (개인계정의 저장소 제외)
       --|--
       **Organization 레벨 러너** | **Organization에 소속된 모든 저장소에서 사용 가능**
       **Repository 레벨 러너** | **해당 저장소에서만 사용가능**
  
      ![image](https://user-images.githubusercontent.com/40287191/121205776-e7957e00-c8b2-11eb-9866-d5fcee9c885c.png)
   

  5. [Self-hosted Runner 추가](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/adding-self-hosted-runners)
  
      - 저장소 settings메뉴 > Actions 
      - Organizations settings메뉴 > Actions
      - Enterprise settings > Policies > Actions 
      - "Self-hosted runners"에서 "Add runner"
  
       ![image](https://user-images.githubusercontent.com/40287191/121208239-e1080600-c8b4-11eb-8c65-463a9f8b0a6b.png)
      - Add runner 화면에 나오는 순서데로, 디렉토리 생성 후, 생성된 디렉토리내에서 self-hosted runner 어플리케이션을 다운받아 설치 후 연결
 
  6. [Self-hosted Runner as a service](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)
  
      - `systemd`을 사용하는 Linux 시스템에서 self-hosted runner 어플리케이션에 포함된 `svc.sh`스크립트를 실행
      - Runner 어플리케이션이 실행중이면 실행을 종료하고, `svc.sh` install
        
         ```
         sudo ./svc.sh install
         ```
      
       - 서비스 시작
  
         ```
         sudo ./svc.sh start
         ```
  
       - 서비스 상태 확인
     
         ```
         sudo ./svc.sh status
         ```
      
       - 서비스 종료
     
         ```
         sudo ./svc.sh stop
         ```
  
  
  7. [러너를 그룹으로 묶어서 사용하기](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)
  
      - 여러개의 Self-hosted 러너들을 그룹으로 묶어서 Organization과 Enterprise 레벨에서 한꺼번에 여러 Self-hosted 러너들에 대한 접근 제어를 위해 사용
      - 예를들어, Organization에 러너 그룹을 만들고 특정 저장소들만 러너그룹에 할당하여 사용
      - 또는, Enterprise레벨에 러너 그룹을 만들고 특정 Organization들만 러너그룹에 할당하여 사용
      - 러너 그룹 생성 : [Organization](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization), [Enterprise](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise) 
  
          <img src="https://user-images.githubusercontent.com/40287191/121213577-537ae500-c8b9-11eb-8678-a7193b5329a2.png" width="400" height="300">


  8. [러너에 Label 붙여 사용하기](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)
    
     - 러너를 생성할 때, 혹은 생성된 러너에 대해 아래와 같이 UI메뉴에서 Label을 추가/수정 할 수 있습니다. 
     ![image](https://user-images.githubusercontent.com/40287191/121207836-8e2e4e80-c8b4-11eb-9d87-fef26c1f8336.png)

 
  9. [Self-hosted Runner와 GHES사이의 Communication](https://docs.github.com/en/enterprise-server@latest/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)
     - HTTPS 프로토콜을 통한 통신
     - Self Hosted Runner는 Jobs에 대한 정보를 주고받기 위해 GitHub과 통신
     - Self Hosted Runner에 “GitHub Action Runner Application”이 설치되어 실행되어야 GitHub으로 부터 Action의 Job들을 수신하여 실행 할 수 있음
    
    
  10. [Self-hosted Runner의 인터넷 연결](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github)
      - Self-hosted Runner는 아래와 같은 용도로 인터넷 연결이 필요합니다. 
        - Self-hosted Runner application update 
        - GitHub.com의 Actions download
        - Toolcache (setup-node, setup-python, setup-java,,) Action들의 패키지 다운로드
  
      - Self-hosted Runner가 인터넷 연결이 불가할 시, 인터넷이 가능한 곳에서 다운로드하여 [수동으로 사용할 수 있는 방법](https://docs.github.com/en/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)을 제공합니다.
  
 
  11. [Self-hosted Runner 어플리케이션의 업그레이드](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)
     
      - Self-hosted Runner 어플리케이션은 새로운 버젼이 출시되면, Job이 러너에 할당 될 때 자동으로 업데이트 합니다.
      
      - Job이 할당되지 않더라도 새로운 버젼 출시 후 1주일 이내에 자동으로 업데이트 됩니다. 
  

  12. [Self-hosted Runner security with Public repositories](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)
  
      - 보안을 위해 Public repository들에서는 Self Hosted Runner의 사용이 권장되지 않습니다. 

      - 처음 Org/Enterprise 레벨에 Self-hosted Runner를 추가하면 기본으로 생성된 'default' 러너그룹에 추가되는데, 이 러너그룹은 'public' 저장소를 포함하지 않도록 설정되어져 있습니다. 

      - Public저장소에 대해서도 사용하려면, 아래 그림과 같이 'public' 저장소를 포함하도록 하는 옵션을 체크하시면 됩니다. 

        <img src="https://user-images.githubusercontent.com/40287191/121277614-f3f9f500-c90b-11eb-94c7-d36bc4cc2f70.png" width="600" height="150"> &nbsp; &nbsp; 

        <img src="https://user-images.githubusercontent.com/40287191/121277586-dfb5f800-c90b-11eb-956a-9c6feb1a36cd.png" width="300" height="200">

  
   13. Self-hosted Runner는 30일 이상 GitHub Action과 연결되지 않으면 [자동으로 삭제됩니다](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners). 
  
 
   14. [사용량 최대치 limit](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/about-self-hosted-runners)
  
        항목 | 최대치
        --|--
        Workflow run time | 72시간
        API requests | 1000 request /1시간 (한 저정소내 전체 Actions에 대해)
        Job matrix | 256 job /워크플로우
        Workflow run queue | 저장소 당 10초에 최대 100개 워크 플로우
        Job queue time | 각 job은 최대 24시간 동안 큐에 대기
  
        * 표의 값들은 변경될 수 있습니다. 
