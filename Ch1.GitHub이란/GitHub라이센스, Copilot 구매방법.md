---
layout: default
title: GitHub 라이센스, Copilot 구매방법
nav_order: 5
parent: 01. GitHub이란
---


## GitHub 라이센스, Copilot 구매방법

<table>
   <thead>
      <tr>
         <th>GitHub 제품</th>
         <th>세부 라이센스</th>
         <th>라이센스 형태</th>
         <th>구매방법</th>
         <th style="width: 20%">특징</th>
      </tr>
   </thead>
   <tbody>
           <tr>
             <td>GitHub Enterprise</td>
             <td>GitHub Enterprise</td>
             <td>연단위 계약</td>
             <td>GitHub Sales와 연락</td>
             <td></td>
           </tr>
           <tr>
             <td rowspan="3">GitHub Copilot 기업용</td>
             <td>Copilot Business</td>
             <td>월별 사용량 기반</td>
             <td>Azure 구독 ID로 월별 자동 결재</td>
             <td>GitHub Enterprise라이센스 구매는 옵션</td>
           </tr>
           <tr>
             <td>Copilot Enterprise</td>
             <td>월별 사용량 기반</td>
             <td>Azure 구독 ID로 월별 자동 결재 </td>
             <td>GitHub Enterprise 라이센스 반드시 구매필요(must)</td>
           </tr>
           <tr>
             <td>Copilot Standalone</td>
             <td>월별 사용량 기반</td>
             <td>Azure 구독 ID로 월별 자동 결재(must)</td>
             <td>GitHub Enterprise 라이센스 없음</td>
           </tr>
   </tbody>
</table>

- GitHub Enterprise는 GitHub Sales와 연락하여 연단위로 계약을 맺습니다.
- GitHub Copilot은 Azure 구독 ID로 월별 자동 결재를 하며, 사용량 (사용하는 사람수)에 따라 요금이 부과됩니다.
- Copilot Enterprise 라이센스는 GitHub Enterprise 라이센스를 반드시 구매해야 합니다.

## GitHub Copilot 기업용 라이센스

- GitHub Copilot의 기업용 라이센스는 <U>Copilot Business </U> 와 <U>Copilot Enterprise </U> 로 나뉩니다. (Copilot Standalone은 하단에 별도 설명) 

- Coiplot Business는 IDE상에서 동작하는 Copilot Chat, Code완성, Copilot CLI 등의 기능을 제공합니다. 
- Copilot Enterprise는 Copilot Business의 모든 기능을 제공하며, GitHub Enterprise 'Cloud'의 웹 UI 상에서 추가적인 Copilot 기능이 제공됩니다.

- Copilot Business와 Copilot Enterprise의 기능비교는 [여기](../Ch6.Copilot/03.Copilot-license-comparison.md)를 참조하세요.

- GitHub Enterprise 라이센스의 유/무에 따라, Copilot의 기업용 라이센스를 구매할 때는 아래와 같은 절차를 따릅니다.

<table>
   <thead>
      <tr>
         <th>구매방법</th>
         <th>절차</th>
         <th style="width: 20%">비고</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td rowspan="3">이미 GitHub Enterprise 사용중</td>
         <td>1. GitHub Enterprise관리자 메뉴에서 Azure 구독 ID등록</td>
         <td> <a href="../Ch6.Copilot/04.GHE-start-cfb.md">설명링크</a> </td>
      </tr>
      <tr>
         <td>2. 관리자 메뉴에서 Copilot Business 혹은 Copilot Enterprise를 활성화</td>
         <td></td>
      </tr>
      <tr>
         <td>3. Org 설정메뉴에서 사용자에게 Copilot 라이센스 할당</td>
         <td></td>
      </tr>
      <tr>
         <td rowspan="2">GitHub Enterprise를 함께 구매</td>
         <td>1. GitHub Sales에 문의하여 GitHub Enterprise 라이센스 연단위 계약</td>
         <td></td>
      </tr>
      <tr>
         <td>2. GitHub Enterprise가 활성화 된 후, 위의 'GitHub Enterprise 사용중' 절차 진행</td>
         <td></td>
      </tr>
      <tr>
         <td>GitHub Enterprise는 나중에 구매</td>
         <td>Copilot Standalone으로 진행 </td>
         <td>Copilot Standalone은 GitHub Enterprise 라이센스 없이 사용 가능</td>
      </tr>
   </tbody>
</table>

- Copilot Standalone은 GitHub Enterprise 라이센스 없이 Copilot Business 라이센스를 사용할 수 있는 옵션입니다. ([Copilot Standalone 설명](../Ch6.Copilot/06.CopilotStandalone.md) 참조) 
  ** Copilot Standalone은 GitHub Enterprise 라이센스가 없으므로, 'Copilot Business' 라이센스만을 구매하는 형태의 제품입니다. 향후, 'Copilot Enterprise'로 업그레이드 하려면, GitHub Enterprise 라이센스를 구매해야 합니다.

## Copilot 비용 

- 월별로 사용량 (사용자 수)에 대한 과금이 부과됩니다.
    - 예를 들어, 첫달 시작시 100명의 사용자를 할당하고, 이후 15일이 지나 10명을 추가하면, 추가 10명은 15일에 대해서만 추가 과금됩니다.
    - 사용자를 해당 월의 중간 시점에 어느 사용자에 대해 Copilot 라이센스를 할당 중지하면, 이 할당 중지는 '다음월의 갱신'에 적용되므로, 해당 월에는 과금이 발생합니다.
    - [Youtube:Copilot for Business - Billing Explained](https://youtu.be/sFpSH8jikSA)
