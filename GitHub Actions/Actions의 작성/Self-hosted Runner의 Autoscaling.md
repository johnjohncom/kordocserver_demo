---
layout: default
title: Self Hosted Runner의 Autoscaling방법
parent: Action 러너
grand_parent: GitHub Actions란
nav_order: 3
has_chidren: true
---

## [Self-hosted Runner의 Autoscaling](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)
  - Self-hosted runner의 Autoscaling은 필요에 따라 Self-hosted runner의 숫자를 늘였다 줄였다 하는 것 입니다. 
  - Autoscale을 트리거하는 이벤트는 특정 label을 가진 Webhook 이벤트를 통해 가능합니다. 
  - 예를 들면, `queued` 상태의 `workflow_job` 웹훅 이벤트를 통해 자동으로 새로운 self-hosted runner를 추가 합니다. 
  - Job이 완료되면, `completed` 상태의 `workflow_job` 웹훅 이벤트를 통해 자동으로 self-hosted runner를 삭제 합니다. 
  - 웹훅 payload는 label data를 가지므로, job이 요구하는 runner의 타입을 identify할 수 있습니다. 


### [권고되는 autoscaling 솔루션](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#recommended-autoscaling-solutions)
   - GitHub이 권고하고 있는 솔루션은 아래 2개의 오픈소스 프로젝트 입니다. 
   - [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) : 자동 스케일을 위한 쿠버네티스 콘트롤러
   - [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) : Amazon 웹서비스 상에서 자동 스케일을 위한 테라폼 모듈

     기능|actions-runner-controller|terraform-aws-github-runner
     --|--|--
     Runtime |Kubernetes |Linux and Windows VMs
     Supported Clouds|Azure, Amazon Web Services, Google Cloud Platform, on-premises|Amazon Web Services
     Where runners can be scaled |Enterprise, organization, and repository levels. By runner label and runner group. |Organization and repository levels. By runner label and runner group.
     How runners can be scaled|Webhook events, Scheduled, Pull-based |Webhook events, Scheduled (org-level runners only)

### [ephemeral self-hosted runners 사용](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#using-ephemeral-runners-for-autoscaling)  
   - 자동 스케일을 위해 한시적인 Ephemeral self-hosted runner의 사용이 권고됩니다. 
   - 이 방식을 통해, 각 Job마다 깨끗한 환경을 제공할 수 있고, 이전에 실행되었던 job으로 부터의 민감한 데이터 노출을 최소화 할 수 있고, 보안에 침해당한 Runner가 새로운 job을 수행하는 위험도 줄일 수 있습니다. 
   - Ephemeral runner의 사용을 위해, `config.sh`을 통해 runner를 등록할 때 `--ephemeral` 파라미터를 포함 합니다. 
    `./config.sh --url https://github.com/octo-org --token example-token --ephemeral`
   - Job이 수행된 이후, GitHub Actions 서비스는 자동으로 runner의 등록을 해제 합니다. 


### [Runner의 소프트웨어 자동 업데이트 제어](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners)
   - Self-hosted runner는 새로운 runner 소프트웨어 버젼이 있을 때 자동으로 소프트웨어 업데이트를 실행하는 것이 default 동작입니다. 
   - 이 업데이트로 인해, 컨테이너에서 ephemeral runner 사용시, 반복적으로 소프트웨어 업데이트가 수행될 수 있어, 자동 업데이트를 비활성화하고, 직접 스케줄을 지정하여 업데이트를 수행할 수 있습니다. 
   - 자동 업데이트를 비활성화하려면, Runner 실행 시 `--disableupdate`를 지정합니다. 
   `./run.sh --disableupdate``
   - 자동 업데이트를 비활성화하고, 주기적으로 Runner의 소프트웨어 버젼을 업데이트 해야 합니다. GitHub Actions의 새로운 기능들은 GitHub Actions 서비스 자체의 기능 추가와 함께 Runner의 소프트웨어에도 새로운 기능이 추가되기 때문입니다. 업데이트가 제대로 이루어지지 않을 시, 새로운 기능들은 제대로 동작하지 않습니다. 
     - 새로운 Runner소프트웨어 버젼이 릴리즈된 후 30일 이내에 버젼 업데이트가 필요하며, [`actions/runner`](https://github.com/actions/runner/releases)리포지토리에 notification을 받도록 [subscribe](https://docs.github.com/en/enterprise-server@latest/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications)할 수 있습니다. 
  
     - **주의** : 만약 30일 이내 업데이트를 수행하지 않으면, GitHub Actions 서비스는 해당 Runner에 job을 수행하도록 queue에 넣지 않습니다. 

### [자동 스케일을 위한 웹훅의 사용](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#using-webhooks-for-autoscaling)     

   - `workflow_job` 웹훅의 payload를 사용해 자동 스케일 환경을 생성할 수 있습니다. 웹훅은 저장소, 조직, 엔터프라이즈 레벨에 존재하며 payload는 `action`키를 포함하며, 이것은 워크플로우 job의 라이프사이클인 `queued`, `in_progress`, `completed`를 나타냅니다. 이러한 웹훅의 payload에 대응하는 자동 스케일을 만들면 됩니다. 
     - `workflow_job`웹훅의 자세한 정보는 "[Webhook events and payloads](https://docs.github.com/en/enterprise-server@latest/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)" 참조하세요. 

### [Authentication requirements](https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#authentication-requirements)
   - [이 링크의 API](https://docs.github.com/en/enterprise-server@latest/rest/reference/actions#self-hosted-runners)를 사용해 저장소레벨과 Org레벨의 Self-hosted runner를 등록하고 삭제할 수 있습니다. 
   - API를 인증하기 위해, 자동 스케일은 Access token 또는 GitHub app을 사용할 수 있다. 
   - Access token은 아래의 scope 설정이 필요합니다. 
     - Private 저장소에 대해, [`repo` scope](https://docs.github.com/en/enterprise-server@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)
     - Public 저장소에 대해, [`public_repo` scope](https://docs.github.com/en/enterprise-server@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)

   - GitHub App을 사용한 인증을 위해서는, 아래의 권한 설정이 필요합니다. 
     - 저장소에 대해, `administration` 권한
     - Org에 대해, `organization_self_hosted_runners`권한 
   - [이곳의 API]()를 이용해 엔터프라이즈 레벨의 self-hosted runner를 등록하고 삭제할 수 있습니다. 이 API의 인증을 위해, 자동스케일은 Access token을 사용해야 합니다. 이 경우, Access token은 `manage_runner:enterprise` scope 설정이 필요합니다. 