당근마켓 

2024-11-15 Start

GitHub에 repository 생성
license = MIT로 변경

작업할 폴더 지정 후 프로젝트 생성
Ex) /Docements > npx create-next-app@latest
앱 생성해주는 코드이며 react-app 처럼 기본기능도 잘 깔려 설치된다.
전에는 next 기초였기때문에 수동으로 설치해본것이였다.


Tailwind 
✅ 이번 섹션의 요점은 class를 암기하는것이아니라 tailwind를 사용해보는것

- Utility-First CSS 프레임워크
- 작은 class 이름들로 가득한 엄청나게 큰 CSS파일이라는 뜻
- 기존 css는 class나 id이름을 만들어내고 생각해야하는게 귀찮고 어려웠다.
- Tailwind CSS IntelliSense 확장 프로그램 설치
- 이 플러그인은 tailwind.config.ts 파일을 탐색한다.

className에 style이나 import문으로 css파일 연결이 아니라 직접 코드를 넣는것이며
height: width: display와 같은 태그형이 아니라 값만 넣으면 된다. ex) <main className="bg-gray-300 flex items-center"

자동완성 트리거 = ctrl + space 

자동완성 트리거를 쓰고 보면 추가될 css를 미리 보여준다.

tailwind라면 class위에 마우스 커서 올렸을떄 해당class가 어떤 css를 수행하고 있는지 미리 보여줌

h-screen <- 화면높이100% viewport height를 제공한다. ex) height: 100vh;

width를 사용할떈 w이며 가득채우고싶을떈 w-full

대충 유추가 가능하기떄문에 한번 잘 보면된다.

padding설정할떄 pt:padding-top, pb:padding-bottom이라고 쓸수있는데 py처럼 padding-y축으로 x,y지표 설정도 가능하다.

height와 width를 한번에 변경할떈 w-12 h-12 -> size-12 이렇게 변경해야한다.

너비와 높이를 자연수만이아닌 분수로도 사용 가능하다
<span w-2/3 text-gray-300 />  
<span w-1/3 text-green-300 />

tailwind가 가장 강력한 기능은 modifier 이다
modifier: 스타일을 조건부로 적용시킴
ex) dark: bg-gray-700
다크모드일경우로 만든 modifier 이다 tailwind를 사용하면 다크모드 구현이 쉬워진다.

ring으로 input 주위를 감싸는 ring을 컨트롤 할 수 있다.

placeholer도 지정해서 색상을 넣어 줄 수 있다.

tailwind는 모바일이 기준이다 그래서 더 큰 화면에 적용시키는 modifier들이 존재한다.
그래서 모바일 디자인을 먼저 구현하고 그 뒤에 화면을 키워나간다.

bg-graient를 쓰면 상하좌우 설정할수있고 
from - via - to / from - to 
3 혹은 2 가지 색상으로 쓸수있다.

invalid를 사용하면 css에서도 valid를 하고있다.
ex) invalid:focus:ring-red-500
peer을 사용하면 옵션에 따라 변경가능
ex) <input type="email" peer /> <button peer-invalid:bg-red-100 />
CSS에서 후속 형제 결합자(Subsequent-sibling combinator)가 작동하는 방식 때문에 
peer 마커는 이전 형제에서만 사용할 수 있다는 점을 유의하기
bg-gradient를 주면, peer-invalid:에도 gradient background color를 주어야 한다
ex) button className="bg-gradient-to-tr from-cyan-400 to-purple-400 
peer-invalid:from-red-400 peer-invalid:to-orange-400"


~~~~~ 이 두기능은 tailwind 기능이 아닌 css의 기능이다. ~~~~~~
*: 		<- *을 사용하면 모든 직계 하위 항목을 선택한다는 뜻
has-[]: <- has를 사용하면 해당 컨테이너에서 특정 조건을 만족하는 자식을 확인가능
has는 가상 클래스이며 컨테이너에 특정 class의 존재 유무를 확인할수있다.
:has() 수도 클래스는 Flexbox 이후 CSS에 추가된 가장 강력한 것입니다.
최초로 부모를 기준으로 하는 것이 아니라 자식을 기준으로 요소의 스타일을 지정할 수 있습니다.
has()를 사용해서 코드에서 엄청난 양의 JavaScript를 대체했습니다.

ring은 항상 가지고있지만 초기값은 투명으로 되어있다.

odd: <- key값이 홀수
even <- key값이 짝수

first: last: 이름대로 처음과 마지막

animate
		-bounce 이름대로 태그가 페이지에서 바운스한다
		-sprin 이름대로 태그가 페이지에서 돈다

empty: 값이 비어있을떄 동작

group modifier는 아버지의 state에 따라서 자식을 변경하는것을 도와줌
className에 group을 추가하고 원하는 기능을 넣으면됨
group-hover:text-red-500

전에는 자식의 state에 기반해서 container의 스타일을 변경했지만
group은 아버지 state에 따라 자식의 style을 modify하고있다.

group-focus-within: group안에 focus가 된 녀석을 향해 타겟할수있다.

tailwind 를 쓰면서 느끼는건 js하던 작업을 css에서 할수있게되는거같다.
querySelector로 타겟해서 하던걸 여기선 group이나 peer 이런것으로 말이다.
