---
layout: default
title: Troubleshooting, log파일
parent: Actions의 GHES설정
grand_parent: GitHub Actions란
nav_order: 4
---


# Artifacts와 로그 저장 정책
    
   - artifact와 로그의 저장 기간은 [저장소별](https://docs.github.com/en/enterprise-server@3.1/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository), [조직별](https://docs.github.com/en/enterprise-server@3.1/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization), 그리고 [enterprise에](https://docs.github.com/en/enterprise-server@3.1/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account) 대해 설정할 수 있습니다. 
    
   - default로 90일간 저장됩니다. 
  
   - Public저장소에 대해서 저장 기간은 1~90일 범위에서 설정할 수 있습니다. 
  
   - Private, Internal, GitHub Enterprise 저장소들은 1~400일 범위에서 설정할 수 있습니다.
  
   - 저장기간 변경시, 새로운 artifact와 로그들에 대해서만 적용되며, 이전에 생성된 artifact와 로그들에는 소급적용되지 않습니다. 