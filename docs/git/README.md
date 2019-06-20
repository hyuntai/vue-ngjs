# GIT

## Command
- git log --branches --graph --decorate --oneline
- git log --decorate --all --oneline
- git log --branches --graph --decorate
- git reset --hard {commit-hashcode}
- git reset --hard ORIG_HEAD
- git reflog
- git check out {commit-hashcode}   
  - 특정 commit을 checkout 할 수도있음
- git diff 
  - working copy 와 index 비교
- git add
- git commit 
- git commit -am
  - add 와 commit message 를 동시에, but 최초 add 는 실행한 상태에서
- git checkout -b {name}
  - branch
- git log --reverse
  - git log를 거꾸로 출력하기
- git commit --amend
  - commit 변경
- git log --decorate --graph
- ORIG_HEAD 병합 이전의 커밋 -> 원복할 수 있음

## fetch
- git fetch
  - pull 과 달리 HEAD를 변경하지 않는다.
  - git log --decorate --all --online 으로 확인.
- git diff HEAD origin/master
  - fetch 후에 원격저장소의 내용과 비교할 수 있음
- git merge origin/master

## 원격저장소
- git init --bare {name}
- 1) git remote add origin git@github.com:user/myrepo.git
  - 현재 저장소에 origin(별명) 이름으로 경로의 원격저장소를 추가한다.
- 2) git push --set-upstream origin master
  - git push -u origin master
  - 원격저장소와 연결 and 업로드
- git remote -v 
  - 정보확인
- git push 

## Merge Tool (kdiff3, Beyond Compare)
- git config --global merge.tool kdiff3
- git config --global merge.tool bc
- git mergetool


## annotated tag 
- git tag -a 1.1.0 -m "bug fix" 
- git tag -v 1.1.0
- git push --tags