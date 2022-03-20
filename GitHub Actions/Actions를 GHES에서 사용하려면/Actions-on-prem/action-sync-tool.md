---
layout: default
title: 인터넷연결이 불가한 경우 수동으로 외부 Actions사용방법
parent: Actions의 GHES설정
grand_parent: GitHub Actions란
nav_order: 2
---

## Connect설정 및 Self-hosted 러너의 인터넷 연결이 불가한 경우, 수동으로 아래 툴을 통해서 사용

### [Action-sync tool 사용](https://docs.github.com/en/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)

 - `actions-sync` tool을 사용하여 인터넷이 가능한 곳에서 Actions를 다운 받은 뒤, 온프렘의 저장소로 push할 수 있습니다. 
 - GitHub.com으로 부터의 Pull과 내부로의 Push를 동시에 할 수도 있고 (`action-sync sync`), Pull이후에 별도로 Push를 진행 할 수도 있습니다(`action-sync pull`, `action-sync push`). 
 
   ```
   ./actions-sync sync \
   --cache-dir "cache" \
   --destination-token "aabbccddeeffgg" \
   --destination-url "https://my-ghes-instance" \
   --repo-name "docker/build-push-action:synced-actions/docker-build-push-action"  
   ``` 
 
  - 동시에 여러 저장소를 Sync하려면, `--repo-name` 부분을 아래와 같이 변경하면 됩니다. 
    - `repo-name-list` : 컴마(,)로 저장소 명칭을 구분하여 여러개 나열
    - `repo-name-list-file`: 저장소들의 이름을 가진 파일 경로
 
### [Tool Cache(`actions/setup-LANGUAGE`)의 수동 패키지 다운로드](https://docs.github.com/en/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)
 
  - Self-hosted runner는 `setup-node`와 같은 `actions/setup-LANGUAGE`의 환경 설정을 위해 인터넷 접속이 필요합니다. 그러나 인터넷을 연결할 수 없는 Self-hosted Runner는 인터넷으로 부터 환경 설정에 필요한 바이너리들을 다운로드 받을 수 없으므로, 이를 수동으로 진행해야 합니다. 
 
  - GitHub.com에서 워크플로우를 실행하여 tool cache를 가져온 뒤, 이것을 artifact로 업로드 합니다. 이것을 다운로드하여 Self-hosted Runner에 밀어 넣어 사용합니다. 
  - [예시](https://docs.github.com/en/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access#populating-the-tool-cache-for-a-self-hosted-runner)
 
### [CodeQL Action-sync tool 사용](https://docs.github.com/en/enterprise-server@latest/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access) (참고)
 
  - GitHub Enterprise의 Code Scanning은 정적분석을 수행하는 GitHub Enterprise의 Advanced Security 기능입니다. 
  - GitHub Actions를 바탕으로 개발의 워크 플로우에 자동화된 절차로 수행되며, 이를 통해 소프트웨어 개발 주기의 가장 빠른 단계에서 보안을 수행하는 shift left의 실질적인 워크 플로우가 이루어집니다. 
  - Code Scanning은 CodeQL이라고 하는 보안 분석의 핵심 쿼리엔진이 Action으로 수행되며, 이것 역시 GHES설치 시 기본적으로 내부에 빌트인으로 포함되어 있습니다. 
  - 인터넷에 연결되어 있지 않다면, 동기화를 수동으로 수행하는 별도의 sync tool(https://github.com/github/codeql-action-sync-tool) 을 사용해 동기화 할 수 있습니다. 

<br/>


  
