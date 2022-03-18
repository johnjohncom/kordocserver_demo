# getting-started GHAS   
- GHAS는 GitHub의 보안 기능인 Advanced Security 기능입니다. 
- GitHub 플랫폼에 내제된 코드 정적분석(SAST)기능과 Secret Scanning(토큰, Certificate등을 자동 검출)해 주는 기능입니다. 
- 이 밖에도 프로젝트의 소프트웨어 의존성에 대한 자동 분석(SCA:Software Composition Analysis)과 의존성에 대한 보안 취약성 알람, 알람 발생된 보안 취약성에 대한 자동 업데이트(Dependabot) 기능은 '기본'으로 포함되어 있습니다.

## 왜 보안이 중요 😶❓ 
<details><summary> 🔍 </summary>
<p>

- 오픈소스 프로젝트는 이미 대세 <br>
- 상용 코드들의 90%가 오픈소스에 의존 
   ![GitHub Advanced Security_Kor (6)](https://user-images.githubusercontent.com/40287191/120053479-50842700-c065-11eb-9772-7728add02e3d.png)

- 오픈소스의 Contributor 누군가가 Enterprise 상용코드에 보안 위협을 심을 수 있습니다 : **소프트웨어 공급망 공격**
   ![Advanced Security Deck](https://user-images.githubusercontent.com/40287191/120103297-e9ac5e00-c189-11eb-96a6-e6b723b58dfe.png)

- 보안은 **[모두의 공동책임](WhySecurity.md)** 입니다.
   
</p>
</details>

## 현재는 어떤 모습이신지요 🧐
<details><summary>🔍</summary>
<p>
   
* Devs와 Security팀이 어떻게 일하시나요? 🖥️
  * working relationship 🧑‍🤝‍🧑 : single team 처럼 함께 협력하시는지, 아니면 의사소통만 오가는 정도인지요?
  
  * 보안취약성을 해결하는데 얼마나 효율적으로 일하나요? ⏳
  
  * Devs에서 느끼는 어려운 점들은? 
  
  * 30일 이상 오픈되어 있는 취약성은 얼마나..?(%) 📆

* 현재의 SAST / DAST/Secret Scanning 도구들은?🤔 
  
  * 얼마나 오래 사용되어왔는지/어느 팀이 ownership
  
  * Devs와의 워크플로우 결합은 어떻게 되어 있으신지요, 커밋 단계의 early integrations?
  
  * 좋은점과, 개선이 필요한 부분들이 있다면 어떤 것들이 있을까요? 👀
  
  * 도구를 개발/관리/유지하기 위한 현재의 노력은? 
  
  * 만약 현재 도구가 없다면, 무엇이, 어떤 목적 🎛️ , Initiative?
  
  * 현재 사용하시는 소스코드관리/협업 플랫폼은? 👀

</p>
</details>

# 보안은 전체의 공동 책임 이어야 합니다. 
![GitHub Advanced Security_Kor](https://user-images.githubusercontent.com/40287191/119857145-48859380-bf4e-11eb-9d77-eca22533bc12.png)
![GitHub Advanced Security_Kor (1)](https://user-images.githubusercontent.com/40287191/119857223-59360980-bf4e-11eb-8677-48b2231331b9.png)

# 보안을 shift-left해야 하지만, 보안팀의 수는 Devs에 비해 많이 작습니다. 
![GitHub Advanced Security_Kor (2)](https://user-images.githubusercontent.com/40287191/119857448-8a163e80-bf4e-11eb-9c57-f95b0773e733.png)

<br/>
<br/>
<br/>

# GitHub은 소프트웨어 개발 주기 전반에 걸친 보안을 강화합니다. 

## How 1. 먼저 의존성 부터 확인 합니다. 
<details><summary>🔍</summary>
<p>

* 프로젝트가 의존하고 있는 의존성은 어떤것이 있지? 🤔 : [Dependency Graph](https://github.com/doosanbear/Demo-webgoatm/network/dependencies)  
  
* 의존성에 알람이 뜨면 알람을 발생시킵니다. 🔊 : [Dependabot alert](https://github.com/doosanbear/Demo-webgoatm) 
   - Dependabot alert를 볼 수 있는 권한은 [Org owner/저장소 admin이 추가/삭제](https://docs.github.com/en/enterprise-server@3.1/github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)
  
* 발생된 의존성 알람에 대해 자동 패치를 수행합니다. : [Dependabot security update](https://github.com/doosanbear/Demo-webgoatm/pulls)

* 보안 데이터베이스 
   * GitHub의 전체 보안 데이터 베이스 : [GitHub Advisory Database](https://github.com/advisories)
   * GitHub은 [CVE를 직접 발행할 수 있는 인증기관](https://github.blog/2019-09-18-securing-software-together/#github-is-now-a-cve-numbering-authority) (CNA: CVE Numbering Authority)
   * [NVD(National Vulnerability Database), Community Sources](https://github.blog/2019-09-18-securing-software-together/)

   
</p>
</details>

<br>

## How 2. Code를 작성할 때 들어갈 수 있는 위협요소를 분석합니다. :
<details><summary>🔍</summary>
<p>

   * **GitHub + Semmle**
   ![GitHub Advanced Security - issc29](https://user-images.githubusercontent.com/40287191/120106398-bf619d00-c197-11eb-8324-01691841a262.png)
   ![GitHub Advanced Security - issc29 (1)](https://user-images.githubusercontent.com/40287191/120127834-6f1c2680-c1fb-11eb-8ee1-3ae7452d2045.png)


   * [CodeQL : 정적 분석을 위한 내부 쿼리 엔진](slide/codeql.md)
   
   * [분석예제 with Javascript](https://github.com/doosanbear/code-scanning-javascript-demo)
   
   * [Pull Request에서의 Code Scanning Alert](https://github.com/octodemo/demo-vulnerabilities-ghas/pull/21)
   
   * [더 많은 예제입니다.](https://github.com/doosanbear/Demo-webgoatm/security)
   
   * [Codeql 저장소](https://github.com/github/codeql), [Codeql-action 저장소](https://github.com/github/codeql-action)에 지속적으로 Query들이 업데이트 됩니다.
      - [GitHub Connect 설정](https://docs.github.com/en/enterprise-server@3.1/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)을 이용해 자동으로 업데이트된 CodeQL 쿼리들 사용가능
   
   * [순수 온프렘에서도 사용가능합니다: Codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/)을 이용해 인터넷 연결이 없는 상황에서도 수동으로 sync가능 
   
   * 저장소의 읽기 권한이 있으면, Pull Request상에 Code Scanning 결과 볼 수 있고, 저장소에 '쓰기' 권한이 있으면 'Security' 탭에서 전체 결과 확인 가능 ([설명](https://docs.github.com/en/enterprise-server@3.1/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository))
   
   * [CodeQL 쿼리 스위트 설명](queries.md)
     - [Help 설명](https://docs.github.com/en/enterprise-server@3.1/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#running-additional-queries)
     - [Extended CodeQL query 실행 yaml파일](https://github.com/son7211/demovul/blob/master/.github/workflows/codeql-analysis.yml)
   
   * [3rd 도구와 유연하게 연동하여](https://github.com/github/advanced-security-field/blob/main/technical-knowledge/code-scanning-integrations.md), [Upload SARIF](https://docs.github.com/en/code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github)를 통해 결과를 함께 확인할 수 있습니다.
   
   * [CodeQL CLI](https://codeql.github.com/docs/codeql-cli/)
   
   * [CodeQL Visual Studio](https://codeql.github.com/docs/codeql-for-visual-studio-code/) : [Analysis Example](https://gist.github.com/lcartey/323731b3de439b2fad7b499fee83b842)
  
   * [CodeQL은 Microsoft, Google, Uber등에서 분석을 위해 사용됩니다.](slide/codeql_customer.md) 

   </p>
</details>

<br>

## How 3. Code 작성시 실수로 Push되는 Credential을 자동으로 검출합니다. 
<details><summary>🔍</summary>
<p>
   
   * [Secret Scanning](https://github.com/octodemo/demo-vulnerabilities-ghas/security/secret-scanning)
 
   * [현재 37개 패턴 coverage](https://docs.github.com/en/enterprise-server@3.1/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-private-repositories)
   
   * GitHub.com상에 Public 저장소들은 이전부터 default로 자동 ON되어 있어왔습니다. GitHub.com상의 Private 저장소는 Organization 소속의 저장소만 지원
   
   * GHES는 Organization 소속의 저장소만 지원
   
   * User Defiend 패턴까지 지원 예정
   
   * Secret Scanning alert를 볼 수 있는 권한은 [Org의 Owner/저장소의 Admin이 추가/삭제 가능](https://docs.github.com/en/enterprise-server@3.1/github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)
   
   
</p>
</details>

<br>

## How 4. 전체적인 보안 상태를 확인할 수 있습니다. 
<details><summary>🔍</summary>
<p>
   
   * Org Owner는 [Security Center](https://github.com/orgs/johnjohncom/security)에서 조직 레벨의 전체 상태를 확인할 수 있습니다 (currently beta on GHEC)
     - [Team level Security center](https://github.com/orgs/johnjohncom/teams/team1/security)
   
</p>
</details>

<br>

## How 5. Policy를 설정 합니다. 
<details><summary>🔍</summary>
<p> 
   
   * [Org에 대해 Advanced Security 강제화](https://docs.github.com/en/enterprise-server@3.1/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise#enforcing-a-policy-for-advanced-security-features)
   
   * [Policy.md 파일 설정](https://github.com/doosanbear/Demo-webgoatm/security/policy)
   

</p>
</details>

<br>

## 자료
- [CodeQL Document](https://codeql.github.com/docs/)
- [CodeQL query help](https://codeql.github.com/codeql-query-help/)
- [push a GitHub Actions workflow to multiple repositories](https://github.com/jhutchings1/Create-ActionsPRs)
- [codeQL CWE coverage](https://codeql.github.com/codeql-query-help/codeql-cwe-coverage/#)