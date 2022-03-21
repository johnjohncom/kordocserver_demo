---
layout: default
title: GitHub Advanced Security란
nav_order: 4
has_children: true
---


## getting-started GHAS   
- GHAS는 GitHub의 보안 기능인 Advanced Security 기능입니다. 
- GitHub 플랫폼에 내제된 코드 정적분석(SAST)기능과 Secret Scanning(토큰, Certificate등을 자동 검출)해 주는 기능입니다. 
- 이 밖에도 프로젝트의 소프트웨어 의존성에 대한 자동 분석(SCA:Software Composition Analysis)과 의존성에 대한 보안 취약성 알람, 알람 발생된 보안 취약성에 대한 자동 업데이트(Dependabot) 기능은 '기본'으로 포함되어 있습니다.

## 왜 보안이 중요 😶❓ 

- 오픈소스 프로젝트는 이미 대세 <br>
- 상용 코드들의 90%가 오픈소스에 의존 
   ![GitHub Advanced Security_Kor (6)](https://user-images.githubusercontent.com/40287191/120053479-50842700-c065-11eb-9772-7728add02e3d.png)

- 오픈소스의 Contributor 누군가가 Enterprise 상용코드에 보안 위협을 심을 수 있습니다 : **소프트웨어 공급망 공격**
   ![Advanced Security Deck](https://user-images.githubusercontent.com/40287191/120103297-e9ac5e00-c189-11eb-96a6-e6b723b58dfe.png)

- 보안은 **[모두의 공동책임](WhySecurity.md)** 입니다.

## 현재는 어떤 모습이신지요 🧐
  
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

## 보안은 전체의 공동 책임 이어야 합니다. 
![GitHub Advanced Security_Kor](https://user-images.githubusercontent.com/40287191/119857145-48859380-bf4e-11eb-9d77-eca22533bc12.png)
![GitHub Advanced Security_Kor (1)](https://user-images.githubusercontent.com/40287191/119857223-59360980-bf4e-11eb-8677-48b2231331b9.png)

## 보안을 shift-left해야 하지만, 보안팀의 수는 Devs에 비해 많이 작습니다. 
  - 보안팀, 보안연구원의 수에 비해 개발자의 수가 현저히(570배) 많습니다.
![GitHub Advanced Security_Kor (2)](https://user-images.githubusercontent.com/40287191/119857448-8a163e80-bf4e-11eb-9c57-f95b0773e733.png)



