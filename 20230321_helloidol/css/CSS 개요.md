# style 적용 3가지 방법
1. <... style="..."> in HTML
1. ```<style>...</style>``` in HTML ```<head>```
1. __.css 파일 만들어서 link__

# 형식
``` css
selector {
    attribute : value; /* comment, 여러 줄 상관 X */
}
```

## selector
<pre>
*                       전체
#id                     
.class                  주어진 값을 class 속성값으로 가진 html요소를 찾아 선택한다
TAG                     HTML TAG

selector1 selector2     selector1 요소의 자손 selector2 요소를 선택한다
selector1 > selector2   selector1 요소의 자식 중 모든 selector2
selector1, selector2    우리가 알고있는 ,(콤마) :선택자 그룹을 생성하는 방법으로 모든 일치하는 노드를 선택
selector1 + selector2   selector1의 첫째 자매 selector2 하나 선택 / 인접선택자로 부르는 선택자(앞에 요소 바로 뒤에 요소) (자매, selector1 옆의 selector2 선택, selector1 선택 X)
selector1 ~ selector2   selector1의 자매 중 모든 selector2 선택 / 일반형제선택자 : 예를들어서 A하고 B가 있는데 같은 계층에 있으면 A뒤에 있는 모든 선택자 지정
                        p ~ ul: p요소 뒤에 있는 모든 자매 ul 선택
selector:first-child()  selector 요소 중 첫번째
selector:nth-child(n)   자매 요소 중에서 특정 순서(n)에 있는 요소를 선택할 때
selector:hover          요소의 마우스가 올라가는동안 selector를 선택

[속성="값"]              <... 속성="값">인 모든 요소 선택
</pre>

# 우선순위
1. !important
2. #id
3. .class
4. TAG
5. \*
- 구체 > 포괄 (구체적인 것이 더 셈)
- 같은 우선순위일 때, 나중에 쓴게 적용