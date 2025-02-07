"use strict";(self.webpackChunkjohnycho_dev=self.webpackChunkjohnycho_dev||[]).push([[4108],{8819:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"spring-data-jpa/jpa-entity-manager","title":"\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800(Entity Manager)","description":"\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\uc5d0 \ub300\ud574 \uc54c\uae30 \uc704\ud574\uc120 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ub300\ud574 \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4.","source":"@site/docs/spring-data-jpa/jpa-entity-manager.md","sourceDirName":"spring-data-jpa","slug":"/spring-data-jpa/jpa-entity-manager","permalink":"/docs/spring-data-jpa/jpa-entity-manager","draft":false,"unlisted":false,"tags":[{"inline":false,"label":"JPA","permalink":"/docs/tags/jpa","description":"JPA tag description"}],"version":"current","frontMatter":{"slug":"jpa-entity-manager","title":"\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800(Entity Manager)","tags":["jpa"]},"sidebar":"johnyDocsSidebar","previous":{"title":"ddl-auto \uc635\uc158","permalink":"/docs/spring-data-jpa/jpa-ddl-auto"},"next":{"title":"ID \uc0dd\uc131 \uc804\ub7b5","permalink":"/docs/spring-data-jpa/jpa-id-generation-strategy"}}');var r=a(4848),s=a(8453);const i={slug:"jpa-entity-manager",title:"\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800(Entity Manager)",tags:["jpa"]},d="\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\ub780?",l={},c=[{value:"\u2714\ufe0f \uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\uc758 \uc5ed\ud560",id:"\ufe0f-\uc5d4\ud2f0\ud2f0-\ub9e4\ub2c8\uc800\uc758-\uc5ed\ud560",level:2},{value:"\u2714\ufe0f \uc5d4\ud2f0\ud2f0\uc758 \uc0c1\ud0dc \uc815\uc758",id:"\ufe0f-\uc5d4\ud2f0\ud2f0\uc758-\uc0c1\ud0dc-\uc815\uc758",level:2},{value:"\ube44\uc601\uc18d(Transient)",id:"\ube44\uc601\uc18dtransient",level:3},{value:"\uc601\uc18d(Persistent)",id:"\uc601\uc18dpersistent",level:3},{value:"\uc900\uc601\uc18d(Detached)",id:"\uc900\uc601\uc18ddetached",level:3},{value:"\uc0ad\uc81c(Removed)",id:"\uc0ad\uc81cremoved",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\uc5d4\ud2f0\ud2f0-\ub9e4\ub2c8\uc800\ub780",children:"\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\ub780?"})}),"\n",(0,r.jsx)(n.p,{children:"\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\uc5d0 \ub300\ud574 \uc54c\uae30 \uc704\ud574\uc120 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ub300\ud574 \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4.\n\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc5d4\ud2f0\ud2f0\ub97c \uc601\uad6c \uc800\uc7a5\ud558\ub294 \ud658\uacbd\uc73c\ub85c 1\ucc28 \uce90\uc2f1, \uc4f0\uae30 \uc9c0\uc5f0, \ubcc0\uacbd \uac10\uc9c0\ub97c \ud1b5\ud574 \uc601\uc18d \ub85c\uc9c1\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4.\n\uc774\ub7ec\ud55c \ud6a8\uc728\uc801\uc778 \uc601\uc18d \ub85c\uc9c1 \uc218\ud589\uc744 \uc704\ud574\uc11c \uc5d4\ud2f0\ud2f0\ub294 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uad00\ub9ac\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub7f0 \uc791\uc5c5\uc744 \ub3c4\uc640\uc8fc\ub294 \uac83\uc774 \ubc14\ub85c \uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\uc785\ub2c8\ub2e4.\n\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\ub294 \uc5d4\ud2f0\ud2f0\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\uace0, \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc0c1\ud638\uc791\uc6a9\ud568\uc73c\ub85c\uc368 \uc601\uc18d \ub85c\uc9c1\uc744 \uc218\ud589\ud558\ub294 \uc5ed\ud560\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-\uc5d4\ud2f0\ud2f0-\ub9e4\ub2c8\uc800\uc758-\uc5ed\ud560",children:"\u2714\ufe0f \uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\uc758 \uc5ed\ud560"}),"\n",(0,r.jsx)(n.p,{children:"\uc5d4\ud2f0\ud2f0\ub294 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uad00\ub828\ud558\uc5ec 4\uac00\uc9c0 \uc0c1\ud0dc(\ube44\uc601\uc18d, \uc601\uc18d, \uc900\uc601\uc18d, \uc0ad\uc81c)\ub97c \uac00\uc9c8 \uc218 \uc788\ub294\ub370\uc694.\n\uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\ub294 persist, merge, remove, close \uba54\uc11c\ub4dc\ub97c \uc774\uc6a9\ud558\uc5ec \uc5d4\ud2f0\ud2f0\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c, \uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\ub294 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc758 1\ucc28 \uce90\uc2dc\ub85c\ubd80\ud130 \uc5d4\ud2f0\ud2f0\ub97c \uc870\ud68c\ud560 \uc218 \uc788\uc73c\uba70, \uc4f0\uae30 \uc9c0\uc5f0 \uc800\uc7a5\uc18c\uc5d0 \uc788\ub294 \ucffc\ub9ac\ub4e4\uc744 flush\ud558\uc5ec DB\uc640 \ub3d9\uae30\ud654\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c JPQL\uc774\ub098 Native Query\ub97c \uc774\uc6a9\ud574 \uc9c1\uc811 DB\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-\uc5d4\ud2f0\ud2f0\uc758-\uc0c1\ud0dc-\uc815\uc758",children:"\u2714\ufe0f \uc5d4\ud2f0\ud2f0\uc758 \uc0c1\ud0dc \uc815\uc758"}),"\n",(0,r.jsx)(n.h3,{id:"\ube44\uc601\uc18dtransient",children:"\ube44\uc601\uc18d(Transient)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Member member = new Member("\uc0b0\ucd08");\n'})}),"\n",(0,r.jsx)(n.p,{children:"\uc5d4\ud2f0\ud2f0 \uac1d\uccb4\uac00 \uc0c8\ub85c \uc0dd\uc131\ub418\uc5c8\uc9c0\ub9cc, \uc544\uc9c1 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc5f0\uad00\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \uc774 \uc0c1\ud0dc\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \uc804\ud600 \uad00\ub828\uc774 \uc5c6\uc73c\uba70, \uc5d4\ud2f0\ud2f0 \uac1d\uccb4\ub294 \uba54\ubaa8\ub9ac \uc0c1\uc5d0\ub9cc \uc874\uc7ac\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\uc601\uc18dpersistent",children:"\uc601\uc18d(Persistent)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"em.persist(member);\nem.merge(detagedMember);\nem.find(Member.class, 1L);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc5d4\ud2f0\ud2f0 \uac1d\uccb4\uac00 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uad00\ub9ac\ub418\uace0 \uc788\ub294 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \uc774 \uc0c1\ud0dc\uc5d0\uc11c\ub294 \uc5d4\ud2f0\ud2f0\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc790\ub3d9\uc73c\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ubc18\uc601\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\uc900\uc601\uc18ddetached",children:"\uc900\uc601\uc18d(Detached)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"em.detach(member);\nem.clear();\nem.close();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc5d4\ud2f0\ud2f0 \uac1d\uccb4\uac00 \ud55c \ubc88 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc758\ud574 \uad00\ub9ac\ub418\uc5c8\uc9c0\ub9cc, \ud604\uc7ac\ub294 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc640 \ubd84\ub9ac\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \uc774 \uc0c1\ud0dc\uc5d0\uc11c\ub294 \uc5d4\ud2f0\ud2f0 \uac1d\uccb4\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc774 \ub354 \uc774\uc0c1 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ubc18\uc601\ub418\uc9c0\n\uc54a\uc2b5\ub2c8\ub2e4. \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8 \uc885\ub8cc, \ud2b8\ub79c\uc7ad\uc158 \uc885\ub8cc \ub4f1\uc73c\ub85c\ub3c4 \uc900\uc601\uc18d \uc0c1\ud0dc\ub85c \uc804\ud658\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\uc0ad\uc81cremoved",children:"\uc0ad\uc81c(Removed)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"em.remove(member);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc5d4\ud2f0\ud2f0 \uac1d\uccb4\uac00 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc81c\uac70\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \uc774 \uc0c1\ud0dc\uc5d0\uc11c\ub294 \uc5d4\ud2f0\ud2f0 \uac1d\uccb4\uac00 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uc0ad\uc81c\ub429\ub2c8\ub2e4."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>d});var t=a(6540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);