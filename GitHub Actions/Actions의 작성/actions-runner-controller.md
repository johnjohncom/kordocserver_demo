---
layout: default
title: Autoscaling Self-hosted runner의 쿠버네티스기반 콘트롤러
parent: Action 러너
grand_parent: GitHub Actions란
nav_order: 4
---

## 쿠버네티스 기반 Actions Runner Controller(ARC)

 - https://github.com/actions-runner-controller/actions-runner-controller 에 오픈소스로 존재하는 쿠버네티스 기반의 Autoscale을 위한 콘트롤러
 - 쿠버네티스 클러스터에 Runner를 자동으로 생성하게 해주는 **actions-runner-controller**
 - GHEC와 GHES 모두 지원: GHES는 3.3.0 버젼 이상이어야 함.

## 특징
 - Autoscale을 위한 Trigger는 두 가지 방법으로 가능: Wehook driven방식이, 정해진 주기별로 정보를 가져와 autoscale을 할지 결정하는 Pull-driven방식에 비해서, 더 빠름 
   1. [Pull-driven](https://github.com/actions-runner-controller/actions-runner-controller#pull-driven-scaling)
   2. [Webhook-driven](https://github.com/actions-runner-controller/actions-runner-controller#webhook-driven-scaling)

 - API 인증은 GitHub App 또는 Personal Access Token사용 
   - Enterprise 레벨 러너를 위해서는 Personal Access token만 가능.
   - 저장소레벨과 Org레벨 러너는 두 가지 모두 가능
   - [GitHub App을 사용할 때 권한 설정](https://github.com/actions-runner-controller/actions-runner-controller#deploying-using-github-app-authentication)
   - [Personal Access Token 사용할 때의 Scope설정](https://github.com/actions-runner-controller/actions-runner-controller#deploying-using-pat-authentication)

 - [Anti-flapping](https://github.com/actions-runner-controller/actions-runner-controller#anti-flapping-configuration) 적용 : default로 Runner는 scale up된 이후 10분내에 scale down되지 않음. 
   - 이 delay는 `HorizontalRunnerAutoscaler` Kind의 `spec`에서 `scaleDownDelaySecondsAfterScaleOut` 속성값을 configure할 수 있음

 - [Ephemeral runner](https://github.com/actions-runner-controller/actions-runner-controller#webhook-driven-scaling)와 [Persisten Runner](https://github.com/actions-runner-controller/actions-runner-controller#persistent-runners) 지원: ARC에 의한 Runner는 **Default로 "Ephemeral" Runner**

 - [Software Image installed in the runner](https://github.com/actions-runner-controller/actions-runner-controller#stateful-runners)

## [Pull-driven 방식의 Autoscale](https://github.com/actions-runner-controller/actions-runner-controller#pull-driven-scaling)
 - 설정된 `metrics`속성들의 조건에 부합할 때 자동 스케일 되는 방식
 - Poll의 주기는 콘트롤러의 `--sync-period` flag로 설정: 이 값이 지정되지 않으면 default로 10분
 - Metric Options
   - `TotalNumberOfQueuedAndInProgressWorkflowRuns`: 주어진 저장소 갯수 대비 모든 pending상태인 워크플로우들의 숫자. 전체 Pending job의 갯수만큼 runner를 scale하며, 최대 scale되는 갯수의 제한은 `maxReplicas`에 설정
   - `PercentageRunnersBusy`: `busy`상태인 runner의 갯수를 바탕으로 설정된 scale factor에 따라 전체 runner대비 percentage에 따라 scale수행. 
     - Percentage 설정: `scaleUpThreshold`, `scaleDownThreshold`
     - Scale factor: `scaleUpFactor`, `scaleDownFactor`

## [Webhook-driven 방식의 Autoscale](https://github.com/actions-runner-controller/actions-runner-controller#webhook-driven-scaling)
  - Actions-runner-controller 와 별도로 설치되는 Webhook Server에 의해 실행
  - 현재 Webhook Server는 `check_run`, `workflow_job`, `pull_request` 및 `push` 이벤트들에 대응하여 `HorizontalRunnerAutoscaler` kind내 `spec`에 설정된 `N`값에 매칭되도록 scale up

## 설치 Implementation

1. Git clone the project 
  ```
  git clone git@github.com:actions-runner-controller/actions-runner-controller.git
  ```
2. [Install Cert-manager](https://github.com/actions-runner-controller/actions-runner-controller#installation)

3. [GitHub App 또는 PAT 생성 및 알맞은 권한 설정](https://github.com/actions-runner-controller/actions-runner-controller#setting-up-authentication-with-github-api)

4. Create Name Space

  ```
  kubectl create ns actions-runner-system
  ```

5. [Create GitHub App Secret](https://github.com/actions-runner-controller/actions-runner-controller#deploying-using-github-app-authentication)

  <img src="https://user-images.githubusercontent.com/230145/78968805-71777900-7b40-11ea-97e6-55c48dfc44ac.png">


6. Actions-runner-controller install (for Helm: value.yaml)
   - Kubernetes deployment
     ```
     $ kubectl create secret generic controller-manager \
       -n actions-runner-system \
       --from-literal=github_app_id=${APP_ID} \
       --from-literal=github_app_installation_id=${INSTALLATION_ID} \
       --from-file=github_app_private_key=${PRIVATE_KEY_FILE_PATH}
     ```  
   
   - Helm deployment를 위해서는 yaml파일(value.yaml) 필요 
    
     ```
     helm upgrade --install -f values.yaml -n actions-runner-system actions-runner-controller actions-runner-controller/actions-runner-controller
     ```
  
   - value.yaml예
   
     ```
     authSecret:
      github_app_id: 3
      github_app_installation_id: 1

     githubWebhookServer:
      enabled: true
      secret:
        create: true
        name: "github-webhook-server"
        github_webhook_secret_token: "123456789"
      service:
        type: LoadBalancer
        ports:
        - port: 80
          targetPort: http
          protocol: TCP
          name: http
          nodePort: 30020
     ```

7. [GHES경우 env set](https://github.com/actions-runner-controller/actions-runner-controller#github-enterprise-support)

8. [Deploy Runner](https://github.com/actions-runner-controller/actions-runner-controller#usage) 
  
   - runnerdeploy.yaml파일 예제

     ```
     kind: RunnerDeployment
     metadata:
      name: k8s-runner-deployment
     spec:
      template:
       spec:
        organization: testorg
        env: []
        labels:
        - test-runner
     ```

9. [Horizontal Scale 설정](https://github.com/actions-runner-controller/actions-runner-controller#webhook-driven-scaling)

  - `HorizontalRunnerAutoscaler` 의 hra.yaml파일 예제

     ```
     kind: HorizontalRunnerAutoscaler
     spec:
      scaleTargetRef:
       name: example-runners
       # Uncomment the below in case the target is not RunnerDeployment but RunnerSet
       #kind: RunnerSet
      scaleUpTriggers:
      - githubEvent:
         checkRun:
          types: ["created"]
          status: "queued"
        amount: 1
        duration: "5m"
     ```


10. Org에 Webhook설정
   ```
   Payload URL: http://<DNS name of the load balancer in front of the controller deployed by step 6>
   Content type: application/json
   Secret: <Use the token value from your values.yaml created in Step 14 e.g. 1234567890>
   Events: Workflow jobs
   ```