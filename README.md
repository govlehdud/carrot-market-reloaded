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

```이 두기능은 tailwind 기능이 아닌 css의 기능이다. ~~~~~~
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

미리생성된 classname파일은 존재하지않는다 / class name은 요청에 따라 생성되는 것이다.

대괄호 표기를하면 수치를 custom해서 쓸수있따.

**just in time 컴파일러**
이런 힘은 tailwind.config.ts에서 오는것이다.
- tailwind compiler가 class name을 찾을 위치를 알고있는 이유는 tailwind.config.ts에 있는 이 문법 덕분이다.
 content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

- config.ts에 값을 설정해두면 className작업할떄 쓸 수 있다.
  theme: {
    extend: {
      borderRadius: {
        "sexy-name": "11.11px",
      },
	.weekly {
		@apply flex  h-[80px]  w-[55px] flex-col items-center rounded-xl p-2 hover:bg-[#2da6ff];
  }
    },
  },

 ex)
 <button className="w-full rounded-sexy-name" /> <- 마우스에 올려보면 sexy-name: 11.11px이 잘 나온다.
 <button className="w-full weekly" /> <- .weekly 에 썻던 설정을 쓸수있게 된다.

 컴파일러는 실제로 globals.css에 와서 directive들을 생성된 class name으로 대체 할 거야
 @tailwind utilities : 컴파일러가 생성된 모든 code를 넣는 placeholer라고 생각하면된다.
 w-full bg-black 과 같은 태그들은 utilities에 저장된다.
 이걸 지우면 대부분 utilities 태그들이기떄문에 망가진다. tailwind.css가 거의 다 망가지는 정도
 @tailwind base : base는 컴파일러가 tailwind와 함꼐 제공되는 기본적인 스타일 종류를 두는 곳이다.
 tailwind가 생성하는 기본적인 reset 및 기본값의 일종이라고 생각하면 된다.
 base를 지우면 많이 틀어지지는 않지만 기본값이 없기떄문에 조금씩 틀려지는게 보인다.

 @tailwind <- 이 부분이 밑줄 쳐져있으면 오른쪽 하단에 css파일 종류를 tailwind CSS로 변경하면된다.

 globals.css 파일에 .className{@apply "style에 쓸 내용" } 직접 반복하지않고 style을 재사용 할 수 있는 옵션

 layer directive는 layer를 각각 확장 할 수있도록 해준다.
 ex)
 @layer base{
	a{
		@apply text-blue-500;
	}
 }
 이렇게하면 a태그는 blue-500색상이 default로 된다.

 @apply
기존 유틸리티 클래스를 사용자 커스텀 CSS에 인라인하려면 @apply를 사용하세요.
https://tailwindcss.com/docs/functions-and-directives#apply

@layer
@layer 지시문을 사용하여 사용자 정의 스타일 세트가 속한 '버킷'을 Tailwind에 알립니다.
https://tailwindcss.com/docs/functions-and-directives#layer

*daisyui*
Tailwind CSS용 가장 인기있는 컴포넌트 라이브러리
npm i -D daisyui@latest
plugins: [require("@tailwindcss/forms")],
https://daisyui.com


TailwindCSS 공식 플러그인
- @tailwindcss/typography
- @tailwindcss/forms
- @tailwindcss/aspect-ratio
- @tailwindcss/container-queries
https://tailwindcss.com/docs/plugins#official-plugins

---------------------------------------------------------------------------------------------------------------------


2024-11-20

tailwindCSS를 만든 사람들이 만든 무료 라이브러리 사이트
heroicons.com
npm install @heroicons/react


next.js에서는 state나 eventHandler는 쓰지않아도 html을 이쁘게 조작할수있다.
react에서는 loading할떄도 state같은걸 많이 썻는데 흠흠..

계정생성버튼에 아이콘을 넣고싶을때
import React, { ReactNode } from "react";
icon: ReactNode;

React Icon site
https://react-icons.github.io/react-icons/search/#q=github
npm install react-icons --save


리액트 컴포넌트를 렌더링하는게 아니다.
http 요청을 받아서 json 같은 걸 반환함
NextJS는 NextRequest 타입의 request 객체를 제공하고 있다.
Get으로 받을것인지 Post 받을것인지는 확인할 필요가없다. 대신 함수 이름을 GET이나 POST로 명시해주면
그안의 코드는 자동으로 GET request를 처리할것이다.


API route를 만드는 방법

ex) (원하는 이름)/(원하는이름)/route.ts    <- 폴더/route.ts만 제대로 만들면된다.
ex) www/users/route.ts

*page.tsx*
<span onClick={onClick}>버튼</span>
const onClick = async () => {
    const res = await fetch("/www/users", {
      method: "POST",
      body: JSON.stringify({
        username: "nico",
        password: "1234",
      }),
    });
    console.log(await res.json());
};

*route.ts*
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request);
  return Response.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return Response.json(data);
}


이런식으로 API route를 만드는 방법을 알아보았다.
Next.js에서는 이러한 불편함을 없애줄수있다.
route <- route라는 파일 이름이 매우 중요하다.
route라는 파일명을 알려줘야 nextJS가 route handler을 만든다는 것을 알수있다
page나 [id] 와 같은 것이다.
-만약 내가 앱(Android / IOS) 개발이나 webhook같은것을 해야한다면 알아야하는 방식이다!


**use server**

use cline를 적었던 것 처럼 사용하려면 use server를 적어야한다
use server는 함수가 서버에서만 실행되도록 만들어준다
✔유의사항
-server Action은 async function(비동기 함수)여야 한다.

const handleForm = async () => {
    "use server";
    console.log("what is your name?");
};

이렇게 자동으로 만들거나

async function handleForm(){
    "use server";
    console.log("what is your name?");
};

이렇게 function을 만든 뒤 아래에서 action에 handleForm을 넣어주면 된다.
ex) <form action={handleForm} >

-input에는 name속성이 필요하다 그래야 백엔드에서 확인이 가능하다
이전버전의 nextJs나 단순 react.js로만 작업을 하고잇다면
아마 input_name을 신경 안 썻을것이다

백엔드로 보내진 데이터를 사용하는법은
ㄴ> use server했던 function의 args를 FormData형식으로 받으면된다
ex) async function handleForm(data:FormData){
	"use server"  <--- 이 use server는 항상 최 상단에 있어야 한다.
	   console.log(data.get("email"),data.get("password"))
}



-- Server Action의 경과 & UI가 서로 소통하는 방법 --

React.js에는 form action의 작업 상태를 알려주는 hook이 있다.
이 hook의 이름은 useFormStatus
pending을 쓰면 pending 상태인지를 알려주는 건데 function이 끝난 여부를 알려준다
하지만 이 hook은 action을 실행하는 form과 같은 곳에서 사용할 수 없다.
이 hook은 form의 자식에서만 사용할 수 있다.
login버튼을 누를떄 loading대신에 pending을 써서 완료가 되었는지 안되었는지 구분을 할수있다.
이렇게 logbutton을 동적이게 만들었으니 use server 가 아니라 use client가 되어야한다.
내가 boolean 타입을 넘기지 않아도 pending은 자동으로 부모 form을 가져와서
여기 action이 pending 상태인지 자동으로 알아낼것이다.


-- Server Action의 결과를 UI로 전달하는 방법 --
import redirect from "next/navigation"
redirect("/")

사용자가 로그인정보를 틀리게 입력했을경우
useFormState라는 hook을 사용하게된다.

useFormState(action, initialState, permalink?)
컴포넌트 최상위 레벨에서 useFormState를 호출하여 폼 액션이 실행될 때 업데이트되는 컴포넌트 state를 생성합니다.

useFormState는 두 개의 값이 담긴 배열을 반환합니다.
- state: 첫 번째 렌더링에서는 initialState와 일치합니다. 액션이 실행된 이후에는 액션에서 반환된 값과 일치합니다.
-formAction: form 컴포넌트의 action prop에 전달하거나 폼 내부 button 컴포넌트의 formAction prop에 전달할 수 있는 새로운 액션입니다.
```
