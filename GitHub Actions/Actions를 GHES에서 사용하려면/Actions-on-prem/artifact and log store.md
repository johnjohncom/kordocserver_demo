---
layout: default
title: Artifacts와 로그 저장 정책
parent: Actions의 GHES설정
grand_parent: GitHub Actions란
nav_order: 5
---


## Artifacts와 로그 저장 정책
    
   - artifact와 로그의 저장 기간은 [저장소별](https://docs.github.com/en/enterprise-server@latest/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository), [조직별](https://docs.github.com/en/enterprise-server@latest/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization), 그리고 [enterprise에](https://docs.github.com/en/enterprise-server@latest/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account) 대해 설정할 수 있습니다. 
    
   - default로 90일간 저장됩니다. 
  
   - Public저장소에 대해서 저장 기간은 1~90일 범위에서 설정할 수 있습니다. 
  
   - Private, Internal, GitHub Enterprise 저장소들은 1~400일 범위에서 설정할 수 있습니다.
  
   - 저장기간 변경시, **새로운 artifact와 로그들에 대해서만 적용되며, 이전에 생성된 artifact와 로그들에는 소급적용되지 않습니다.** 

   - Actions log retention period 설정에 설정된 기간을 지난 외부 S3 blob 스토리지(MinIO)의 데이터를 purge하는 동작을 수행합니다. 다만, 지정된 기간이 지난 데이터를, 00:00:01초에 바로 모두 삭제하는 것은 아니며, 일정기간 Grace period가 내부적으로 알고리즘을 가지고 있고, 실제 Purge하는 job이 야간에만 실행되도록 되어 있어(다른 중요job에 영향 없도록), 지정된 기간이 지난 후 대략 1개월 정도가 더 지나야 합니다. 이 기간을 추가적으로 고려 해서 MinIO의 스토리지 사이즈와 retention period를 고려하는 것이 필요합니다. 
   
   - 수동으로 admin이 blob 스토리지에서 불필요한 데이터는 바로 삭제 가능 합니다.

   - 리포지토리가 그냥 삭제된 경우에는 retention period에서 지정된 purge동작을 제대로 수행하지 못합니다. 