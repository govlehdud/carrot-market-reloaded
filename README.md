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



2024-11-22

** validation library Zod **

npm install zod

1. 유효성 검사를 짧게 할수있게 도와준다
- 원래라면 if,else를 걸고 비밀번호확인이 맞는지 id는 3자리수이상 10자리 이하인지 그런것들을 해준다.

개별적 스키마 작성법
import {z} from "zod";

const usernameSchema = z.string().min(3).max(10)
  usernameSchema.parse(data.username);
}

전체적인 스키마 작성법
import {z} from "zod";

const formSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string(),
  password: z.string().min(10),
  confirm_password: z.string().min(10),
});
formSchema.parse(data);

에러들은 try-catch문으로 잡을수있다.

니꼬썜은 parse보단 safeParse를 사용한다고 한다.
그 이유는 parse는 데이터 유효성 검사가 실패하면 에러를 throw하지만
safeParse는 에러를 throw 하지 않기 떄문이다.
parse대신 safeParse를 쓰면 에러를 throw하지않기떄문에 try-catch문을 사용하지 않아도 된다.

error.message를 띄울떄 사용할것은 flatten
flatten은 우리가 error를 더 관리 할수있게 해준다.
좀더 깔끔하고 보기편하게 정리된 변수가 나온다.

--------------------------------------------------------------------------------------------------

*Prisma*

npm i prisma

npx prisma init
ㄴ> Prisma Schema가 생성되었고 Prisma라는 새로운 폴더가 생겼으며 그 안에는 schema.prisma 파일이 있다.
우리가 만든 DB에 접속하기 위해서는 DB URL을 .env 파일에 저장해야 한다

.gitignore에 .env를 넣어줘야한다 <- DB 정보를 공개할수없기떄문


datasource db {
  provider = "sqlite"  <- 사용할 db를 적으면 된다 Ex) oracle, sqlite, maria,mongo, postgre
  url      = env("DATABASE_URL")
}


기본적으로 model을 사용하여 만든다
model User{
	id Int @id @default(autoincrement()) <- 여기서 autoincrement는 자동으로 증가하는 값이며
	초기값은 1 두번쨰사용자는 2 세번째 사용자는 3이다
	username String @unique <- pk값
	created_at DateTime @default <- default는 초기값을 정해주는것 Datetime을 써야 날짜관련해서 사용할수있다.
	updated_at DateTime @updatedAt 어떠한 작업을해서 수정을할떄 그 시간을 저장할수있게해줌.
}


npx prisma migrate dev
ㄴ> 실행하면 prisma는 npx prisma generate 명령어도 같이 실행할것이다.
그러면 그 명령어는 너를 위한 client를 생성할것이다.(DB와 소통하기위한 ts로 작성된 client가 생성됨)
**마이그레이션은 데이터베이스의 구조를 수정하는 것을 의미합니다. 이를 위해 프리즘 스키마를 변경하고 명령을 실행하여 스키마를 데이터베이스와 동기화합니다.

node_module/.prisma/clinet/index.d.ts 를 보면 나를 위한 ts로 보호된 값들이 만들어진다. 이것을 어떻게 사용해야할까?
ㄴ>
(폴더)/db.ts 를 만든뒤 그냥 client를 초기화 하면된다
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const user = await db.user.create({
    data: {
      username: "abcdTest",
    },
  });
  console.log(user);
}
test();
export default db;



app/page.tsx에서 import "@/lib/db";를 실행해서 ide내 console에서 확인할수있다.


async function test() {
  const users = await db.user.findMany({
    where: {
      username: {
        contains: "est",
      },
    },
  });
  console.log(users);
}

findMany를 사용하고 where문을 사용해서 "est"가 들어간것을 { }형태로 찾을수있다

npx prisma studio
ㄴ> localhost 5555 페이지가 열린다.
우리가 만들었던 user정보도 여기에서 볼수있는것처럼 DB정보 확인 가능하다. 변경,삭제도 가능하고 필터링해서 정보를 볼수있다.
하지만 이 진행과정을 거쳐야한다
next.js에서 수정 후 prisma studio를 다시 켜줘야 한다!

플러그인 prisma 다운
cmd + shift + p로 JSON settings 파일을 열고

"[prisma]": {
"editor.defaultFormatter": "Prisma.prisma"
}
추가하면 save시 릴레이션 자동완성 됩니다.


DB를 수정할떄마다 prisma studio를 꺼주고 npx prisma migrate dev 를 해줘야한다.
그리고 확인할때 npx prisma migrate dev 를 입력한다


generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  email     String?  @unique
  password  String?
  phone     String?  @unique
  github_id String?  @unique
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
model SMSToken {
  id        Int      @id @default(autoincrement())
  token     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  user      User     @relation(fields: [userId], references: [id])
  userId    Int
}



ex) user User를 하면
@relation(fields: [userId], references: [id])
userId    Int

이렇게 두개가 생기는데

@relation(fields: [userId], references: [id]) <- 이 relation은 db에 입력되지않고 밑에있는
userId만 저장될것이다. 하지만 이 속성은 특별해서 db.ts에서 db.sMSToken.findUnique으로 값을 찾을떄
where {id :1} 하면 id가 1인 속성을 찾아준다.

*include*
이 속성을 findUnique 안에 쓰면 user안의 값들을 모조리 볼수있다.

이런식으로 model끼리 relation을 사용하면 값들을 이동하거나 확인할수있다.

하지만 이것에 대한 문제가있는데 user와 relationship을 맺었는데 user를 삭제한다면 SMSToken은 관계성을 잃어버리기떄문에 엄청난 에러가 발생한다.

*ondelete*
-삭제했을떄 동작을 설정할수있다

**ondelete.Cascade: 참조 레코드를 삭제하면 참조 레코드의 삭제가 트리거됩니다.**
**ondelete.Restrict: 참조 레코드가 있는 경우 삭제를 방지합니다.**
**ondelete.NoAction: Restrict과 유사하지만 사용 중인 데이터베이스에 따라 다릅니다.**
**ondelete.SetNull: 참조 필드가 NULL로 설정됩니다. (optional일 때만 정상 작동)**
**ondelete.SetDefault: 참조 필드가 기본값으로 설정됩니다.**

내 계정을 삭제했으면 내가 올렸던 게시글들도 사라지는것이 당연한것처럼
그래서 위에서 언급했던 @relation(fields: [userId], references: [id]) <- 이 공간에 넣는것이다
ex) @relation(fields: [userId], references: [id], onDelete.Cascade)
onDelete.Cascade를 넣으면 삭제 시 부모를 지우면 자식들도 지울수있게된다.

*MiddleWare*
app폴더 옆에 만들어야한다 안에 만드는것이아닌 같은 경로에!
ex) ex) project/app || project.middleware.ts

js나 css파일 등을 랜더링 하려할떄 실행된다
request: NextRequest를 하면 header를 받을수도잇고 cookie를 받을수도있다

middleware는 node.js runtime내에서 실행되지않는다.
Edge runtime이란곳에서 따로 실행된다.

Edge runtime <- node.js의 경량화된 버전

prisma는 middleware에서 실행하는걸 지원하지않는다
Edge runtime은 빠르게 실행해야 해서 너무 무거우면 안되기떄문에 npm pakage들이 middleware에서 작동 안되는 이유기도하다

특정 URL에서만 실행되도록 middleware설정이 가능하다
ex) export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

이처럼 정규식을 사용하면 가능하다

--------------------------------------------------------------------------------------------------------------------------------------------

2024-12-02

schema.prisma에서 model Product{} 만듬
relation은 user User와 맺음
원하는 쿼리 넣음

npx prisma migrate dev

app/(auth)
이와같이 폴더링을 () 괄호를 사용하면 경로에 문제가 생기지도않고 그룹핑을 할수있다!

그리고 ()괄호를 사용하여 그룹핑을 한 후 layout.tsx를 하면 다른 그룹과 다른 작업을 할수있게된다

<Image /> <- next/image를 import해서 만든 이미지 컨포넌트이며
loading,srcset

srcset: 다른 image를 보여줄수있도록 허용하는 attribute(속성)이다.
다른 스크린 다른 해상도일떄 말이다.
일반 모니터 일반 해상도를 해줄수도잇고 특별한 모니터 특별한 해상도에게 다른 픽셀 밀도 지원 가능하다
이 모든건 next.js가 해주는것이다 나는 <Image />에게 width와 height만 더 설정해주면된다.
하지만 width와 height를 모를떄 dafault로 fill 속성을 쓰면된다.
fill 속성은 Next.js의 Image 컴포넌트에서 사용되며, 이미지가 부모 요소의 크기에 맞게 자동으로
조정되도록 합니다. 이 속성을 사용하면 이미지가 부모 요소의 너비와 높이에 맞춰서 늘어나거나 줄어들게 되어,
 비율을 유지하면서도 공간을 채우게 됩니다.
즉, fill을 사용하면 이미지가 부모 요소의 크기에 맞춰서 완전히 채워지도록 설정할 수 있습니다.

Next에서 제공하는 Image 컴포넌트
기본 jsx img가 지원하지않는 여러가지 강력한기능을 지원함

- 로딩 전후로 컴포넌트 위치가 밀리는 content shift 를 방지함.
- 압축률이나, 화면 크기별 압축옵션을 제공함
필수 prop으로 src, width, height, alt를 입력해주어야함.
width, height를 모른다면, fill을 제공해주면됨
fill은 이미지를 자동으로 부모컴포넌트의 크기로 맞춰줌

utils.ts
ex) price.toLocaleString("ko-kr"); <- 한국 won으로 숫자 format함

intl(다국어 지원) 즉  국제화와 관련된 API
const formatter = new Intl.RelativeTimeFormat("ko");
-2 -> 2일전 // +3 -> 3일 후 로 변환된다.

Number생성자
Number("1111") => 1111
Number("qwer") => NaN

NextJS의 Image는 이미지를 자동으로 최적화를 해 주어 성능을 향상시키고 빠른 로딩이 되도록 해 준다.
하지만 외부 호스트의 이미지(다른 사이트의 이미지 링크 등)를 불러올 때는 보안 상의 이유로 이 기능이 허용되지 않는다.
따라서 next.config.mjs에서 hostname들을 등록해 주어야 한다.
(nextConfig > images > remotePatterns > hostname)

사진 비율 박스에 맞추기 <- className="object-cover"

이렇게 하면 prisma가 Type을 return해줘서
export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

useRef()
- varialbe 내부에 data를 저장할 수 있게 해준다.
ex) const trigger = useRef(1) 이 trigger숫자 1은 Rerender 시에도 지속된다.

*IntersectionObserver*
무한스크롤 트리거

const trigger = useRef<HTMLSpanElement>
getElementByID에서 element를찾아 가져오는것처럼 여기는 span태그를 가져왔다.

span을 observe하다가 버튼(element)이 사용자의 화면에 보이면 intersecting을 한다
그러면 trigger는 unobserve한다
페이지 변경할떄 page가 userEfeect의 dependenct이기 때문에 IntersectionObserver코드가
다시 실행된다. <- trigger가 다시 observe된다.
ㄴ> unobserve한 다음에 page를 바꾸고 page가 userEfeect의 dependenct이기 때문에 IntersectionObserver코드가
다시 실행된다.

useEffect가 함수를 return할떄마다 observe의 연결을 끊어야한다.
ㄴ> return하면 그 컴포넌트는 사라지는데 observe 할 이유가 없기떄문
--------------------------------------------------------------------------------------------------------------
2024-12-04
#11 Product Upload

HTML에서 input에 id가 있으면 그 input을 위한 label을 만들 수 있다.
for이랑 input의 id가 같으면 label을 클릭할 떄마다 input이 focus된다.

react에서 쓰고있기떄문에 for이아닌 htmlFor이라고 써야한다.

className="hidden" 이라고쓰면 숨길수있다.

URL.createObjectURL
URL을 생성하고 우리 브라우저에만 존재하고 다른사람들은 볼수없다.
파일이 브라우저의 메모리에 업로드되었고, 페이지를 새로고침 할 떄 까지 거기에 저장된다는 것이다.

import 할떄 /promises를 붙이면 async와 await를 사용할수있다.


--------------------------------------------------------------------------------------------------------------
2024-12-05
#13 Caching

DB와 상호작용 하는 방식과 시점을 더 효율적으로 할수있게해줌

캐싱(Caching)의 개념
- 서버로부터 받은 데이터를 메모리에 저장해 놓는 것

캐싱의 장점
저장한 정보를 재활용함으로써, 동일한 API를 반복해서 요청하는 상황을 줄인다.
즉, 화면에 빠르게 원하는 정보를 표시할 수있고, DB의 부담또한 덜어 줄 수있다.

강의의 예시:

generateMetaData 함수 내부에서 getProduct 액션을 실행하여 서버에서 정보를 받아오면, 페이지의 타이틀에 제품의 이름을 동적으로 넣어주는 것이 가능하다.

그런데 Product 컴포넌트 함수 내부에서도 제품의 정보를 가져오기 위해 getProduct 액션을 실행하니까, 같은 액션을 두 번 실행하게 된다.

먼저 실행된 getProduct 액션의 결과, 즉 반환값을 저장해 놓고 재사용하면,
서버에 가해지는 부하도 줄일 수 있고, 사용자에게도 빠르게 화면을 보여줄 수 있다.


unstable_cache

Next팀이 14버전에서 공개한 캐싱함수

아직은 불안정할 수있으므로, 설정한 이름이다 추후 이름이 바뀔수도있음
불편하면 import시 import { unstable_cache as nextCache } from "next/cache";
이렇게 as 별칭 함수를 써서 바꿔써도된다.

사용방법
첫 번째 매개변수: action 함수 삽입 (db 통신, 데이터를 반환하는 함수)
두번째 매개변수: 캐시키 배열 (프로젝트 내부에서 하나의 action에대해 unique해야함.
다른 action함수에 같은값을 사용하면 안됨)

이렇게 세팅한 unstable_cache를 기존의 action대신 호출해주면 됨.

unstable_cache실행시 일어나는일
첫 호출에서는 그냥 이전 코드와 똑같이 action함수가 실행됨. db에 요청을 보내고 결과를 반환함.
하지만 데이터가 메모리에 캐싱됨

이후에 다시 unstable_cache 함수가 호출되면,db와의 통신을 하지않음.
첫번째 호출에서 캐시된 데이터를 반환함.

그래서 강의에서는 prisma studio로 db에 저장된 Product이름을 바꿔주었으나,
유저에게 보여지는 값은 바뀌지 않는걸 알수있음
- db의 값을 바꾸기 전의 데이터를 캐싱해놓아서 그 데이터를 제공하기 때문임


 revalidate: 10, <- 숫자(초)만큼 지난후 update할수있게되는 새로고침 타이머같은 함수



 우리가 요청했을떄 데이터를 새로고침하는 방법을 배워야한다.


  const reavalidate = async () => {
    "use server";
    revalidatePath("/products");
  };
  <form action={reavalidate}>
        <button>Revalidate</button>
  </form>

  1. button을 눌렀을떄 revalidate를 찾아감
  2. use server <- 백엔드서버가동함
  3. revalidatePath("/products"); <- /products 경로와 연관돼있는 모든 데이터가 새로고침됨
  모든 데이터가 새로고침 되기 떄문에 tag를 이용해서 따로 설정해주는것이 필요하다.



	async function getProductTitle(id: number) {
	const product = await db.product.findUnique({
	where: {
	  id,
	},
	select: {
	  title: true,
	},

	});
	return {
		title: product?.title,
	};
	}

	const getCachedProductTitle = nextCache(getProductTitle, ["product-title"], {
	  tags: ["product-title"],
	});

	const product = await getCachedProductTitle(Number(params.id));

	1. const product는 getCachedProductTitle를 param.id를 param로 넣어서 호출한다.
	2. getCachedProductTitle은 nextCache


```
