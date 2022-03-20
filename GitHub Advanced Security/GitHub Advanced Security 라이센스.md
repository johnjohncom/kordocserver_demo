---
layout: default
title: GitHub Advanced Security라이센스
parent: GitHub Advanced Security란
nav_order: 3
---



## License 🧮
<details><summary>🔍</summary>
<p>
   
* GitHub Enterprise외 추가 비용없음 
   - Dependency Graph
   - Dependabot Alert
   - Dependabot Security Update

* 별도 라이센스 : GHAS license
   - Code Scanning
   - Secret Scanning

* GHAS license 라이센스 모델
   - **Commiter** 기반 : 지난 90일간 저장소에 Commit한 사람 수

   - Code Scanning은 GHAS license와 동등, Secret Scanning은 하위 기능
     - GHAS on/off : Code Scanning/Secret Scanning 모두 on/off
     - GHAS on상태에서, Secret Scanning은 Org레벨/Repo레벨에서 별도로 on/off가능하지만, GHAS를 off하면 함께 off
   
   - 한명의 User는 여러곳에 commit해도 '하나'로 카운트
   
   - 관리/비용절약 💰 
    
      - [Enterprise레벨에서 Org별로 enable/disable](https://docs.github.com/en/enterprise-server@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise)
      
      - [Org자체에서 모든 저장소 한꺼번에 enable/disable](https://docs.github.com/en/enterprise-server@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)
      
      - [저장소별로 enable/disable](https://docs.github.com/en/enterprise-server@latest/github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features)
      
      - 어떤 저장소에서 GHAS를 disable하면,해당 저장소에만 commit을 했던 committer의 수는 라이센스에서 즉시 빠짐 
   
  - Committer가 초과 시: 기존에 enable된 저장소들은 계속 추가적인 committer 허용// 신규 저장소들은 GHAS가 disable된 상태로 생성됨, GHAS가 enable되지 않았던 기존 저장소들도 GHAS의 enable버튼이 비활성화
  
   
</p>
</details>

<br>