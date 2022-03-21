---
layout: default
title: Scheduled workflow들의 불필요한 실행 방지
parent: Actions의 GHES설정
grand_parent: GitHub Actions란
nav_order: 7
---

## Scheduled workflow들의 불필요한 실행 방지
  
   - 불필요한 workflow의 실행을 방지하기 위해, scheduled workflow들은 자동으로 disable될 수 있습니다. 
  
   - Public 저장소가 fork되었을 때, scheduled workflow들은 자동으로 disable되어 있습니다. 
  
   - Public 저장소들에 대해서, 60일간 아무런 repository activity가 없을 때, scheduled workflow들은 자동으로 disable 됩니다. 
