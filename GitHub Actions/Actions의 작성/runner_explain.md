---
layout: default
title: Action 러너
parent: GitHub Actions란
nav_order: 3
has_children: true
---



## Actions Runner
- GitHub Actions의 Runner는 GitHub-hosted runner와 Self-hosted runner 두 가지가 있습니다. 
- GitHub-hosted runner는 GitHub에서 Hosting하여 서비스 하는 러너입니다. 
- Self-hosted runner는 Enterprise에서 직접 Compute자원을 준비하여 실행하는 러너 입니다.
- 현재 GHES에서는 **Self-hosted Runner만 지원됩니다.**

<img src="https://user-images.githubusercontent.com/40287191/121185766-5f5aad00-c8a1-11eb-9af2-57ef2ec38254.png">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/40287191/121161933-6b864080-c888-11eb-87a4-eae91b4a7210.png">  


### 1. GitHub-hosted Runner vs. Self-hosted Runner

<table>
    <thead>
        <tr>
            <th>GitHub-hosted runner </th>
            <th>Self-hosted runner </th>
        </tr>
    </thead>
    <tbody>
        <tr>
         <td> GitHub에 의해 호스팅 되는 Runner </td>
         <td> 사용자가 직접 on-prem에 호스팅하는 Runner  </td>
        </tr>
        <tr>
         <td> Linux, Windows, MacOS - virtual machine, container </td>
         <td> Linux, Windows, MacOS <br>  - physical, virtual, container, on-premises, or in a cloud </td>
        </tr>
        <tr>
         <td> Virtual machine에 직접 동작 또는 Docker 컨테이너로 워크 플로우 동작 가능 </td>
         <td> GitHub Enterprise와 연결을 위한 "GitHub Actions runner 어플리케이션" 설치 후 실행 해야 함 </td>
        </tr>
        <tr>
          <td>  Runner Hardware resources : Linux/Window <br> - 2core CPU / 7GB Mem / 14GB SSD disk space </td>
          <td> 사용자가 구성하는 하드웨어 리소스; 필요에 따라 맞춤화된 하드웨어 구성가능 </td>
        </tr>
        <tr>
         <td>  Runner Hardware resources : MacOS <br> - 3core CPU / 14GB Mem / 14GB SSD disk space </td>
         <td> 사용자가 구성하는 하드웨어 리소스; 필요에 따라 맞춤화된 하드웨어 구성가능 </td>
        </tr>
        <tr>
          <td>  OS별 사전 설치된 소프트웨어/패키지 (하단 별도설명) </td>
          <td> 사용자가 필요한 소프트웨어/패키지등을 직접설치 </td>
        </tr>
    </tbody>
</table>


<br/>
  

