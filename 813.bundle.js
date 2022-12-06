"use strict";(self.webpackChunk_nimesko_tic_tac_toe=self.webpackChunk_nimesko_tic_tac_toe||[]).push([[813],{813:(z,e,r)=>{r.r(e),r.d(e,{default:()=>ve});var m=r(294),e=r(788);const o=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),m.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}));const a=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),m.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),l=e.ZP.div.withConfig({shouldForwardProp:e=>!["size"].includes(e)})`
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid ${e=>e.theme.color.borderColorGrid};
    border-bottom: 1px solid ${e=>e.theme.color.borderColorGrid};
    font-family: sans-serif;
    color: ${e=>e.theme.color.colorIconGrid};
    &:nth-child(${({size:e})=>e}n) {
        border-right: none;
    }
    &:nth-last-child(-n + ${({size:e})=>e}) {
        border-bottom: none;
    }
    > * {
        width: 75%;
    }
`;const p=({player:e,position:r,size:t,onClick:n})=>{return m.createElement(l,{onClick:()=>{n({position:r})},size:t},0===e?m.createElement(a,null):1===e?m.createElement(o,null):"")},u=e.ZP.div.withConfig({shouldForwardProp:e=>!["size","disabled"].includes(e)})`
    display: grid;
    grid-template-columns: repeat(${({size:e})=>e}, 1fr);
    grid-template-rows: repeat(${({size:e})=>e}, 1fr);
    height: 100%;
    width: 100%;
    grid-gap: 1px;
    pointer-events: ${({disabled:e})=>e?"none":"auto"};
`,i=e.ZP.button`
    outline: 0px;
    margin: 0px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    padding: 5px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    background-color: ${e=>e.theme.color.backgroundButton};
    border: 1px solid ${e=>e.theme.color.borderColorButton};
    color: ${e=>e.theme.color.colorButtonText};
    min-height: 36px;
    font-weight: bold;
    width: 100%;
    &:hover {
        text-decoration: none;
        background-color: ${e=>e.theme.color.backgroundButtonHover};
        color: ${e=>e.theme.color.colorButtonTextHover};
    }
`;var t=({children:e,onClick:r,type:t,...n})=>{return m.createElement(i,{...n,onClick:e=>{r&&r(e)},type:t},e)};t.defaultProps={type:"button"};const n=t,c=e.ZP.div`
    font-weight: bold;
    margin: 0 0 1rem;
    font-size: 2rem;
    letter-spacing: 0.02857em;
`,s=e.ZP.div`
    text-align: center;
    font-size: 2.5rem;
    margin: 0 0 1rem;
`,d=e.ZP.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.theme.color.backgroundEndGame};
    color: ${e=>e.theme.color.colorText};
    transition: all .3s;
    width: 100%;
    height: 100%;
`;const h=({player:e,onResetGame:r})=>{return m.createElement(d,null,e?m.createElement(s,null,e.name," won!"):m.createElement(c,null,"Tied Game"),m.createElement(n,{"aria-label":"Start New Game",onClick:()=>{r()}},"Start New Game"))};function E(e){var r=e.sort((e,r)=>r.score-e.score),t=[];let n=0,o=1;for(let e=0;e<r.length;e++){var a=r[e];0===e?t.push({...a,rank:o}):r[e-1].score===a.score?(t.push({...a,rank:o}),n++):(o=o+n+1,n=0,t.push({...a,rank:o}))}return t}function y(e){return(e+1)%2}function b(){return Math.random().toString(36).replace(".","")}const g=e.ZP.div`
    position: relative;
    width: 100%;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    ${u} {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`,f=e.ZP.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;const v=({disableKeyboard:t,grid:e,players:r,onGameUpdate:n,onGameFinished:o,onGameReset:a})=>{const{winner:l,playsLeft:i}=function(r){let t=-1,n=0,o=!0;var a=Math.sqrt(r.length);for(let e=0;e<a;e++){var l=e*a,i=r[l],c=r[1+l],l=r[2+l],s=r[e],d=r[e+a],m=r[e+2*a];-1===i&&n++,-1===c&&n++,-1===l&&n++,o&&-1!==i&&i===c&&i===l&&(t=i,o=!1),o&&-1!==s&&s===d&&s===m&&(t=s,o=!1),0===e&&o&&-1!==r[e]&&r[e]===r[a+1]&&r[e]===r[2*(a+1)]&&(t=r[e],o=!1),2===e&&o&&-1!==r[e]&&r[e]===r[e*e]&&r[e]===r[e*a]&&(t=r[e],o=!1)}return{winner:t,playsLeft:n}}(e),c=0===i||-1!==l,s=Math.sqrt(e.length),d=({position:e})=>{n({position:e})};return(0,m.useEffect)(()=>{const e=e=>{var r;if(!t)return r=+e.key.trim(),c?/enter/i.test(e.key)&&a():r&&!isNaN(r)&&n({position:function(e){if(9<e||e<1)throw new Error("Number must be less that 10 and greater than 0");return 6<e?e-7:3<e?e-1:e+5}(r)}),e.preventDefault(),!1};return document.addEventListener("keypress",e),()=>document.removeEventListener("keypress",e)},[t,c]),(0,m.useEffect)(()=>{c&&o({grid:e,winner:r[l]})},[c]),m.createElement(g,null,m.createElement(u,{size:s,disabled:c},e.map((e,r)=>m.createElement(p,{onClick:d,position:r,size:s,key:r,player:e}))),c&&m.createElement(f,null,m.createElement(h,{player:r[l],onResetGame:()=>{a()}})))};t=r(602);const P=e.ZP.div`
    width: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${e=>e.theme.color.borderColorGrid};
    color: ${e=>e.theme.color.colorText};
    border-radius: 8px;
    padding: 8px;
    @media screen and ${t.z2.xs} {
        width: 15rem;
        flex-direction: row;
    }
`,w=e.ZP.div`
    width: 100%;
    @media screen and ${t.z2.xs} {
        width: 0;
        flex-grow: 1;
    }
`;var x=e.ZP.p`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    margin: 0 auto;
    width: 100%;
    @media screen and ${t.z2.xs} {
        width: 75%;
    }
`;const k=(0,e.ZP)(x)`
    font-size: 0.75em;
    text-align: center;
    cursor: pointer;
`,A=(0,e.ZP)(x)`
    font-size: 2em;
    text-align: center;
`,Z=e.ZP.div`
    position: relative;
    height: 2px;
    background-color: ${e=>e.theme.color.borderColorGrid};
    border-radius: 8px;
    transition: all .3s;
    width: 75%;
    margin: 1rem 0;
    &:after {
        content: "";
        display: block;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: ${e=>0===e.currentPlayer?8:0}px solid ${e=>e.theme.color.borderColorGrid}; // p1
        border-top: ${e=>0===e.currentPlayer?0:8}px solid ${e=>e.theme.color.borderColorGrid}; // p2
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: ${e=>0===e.currentPlayer?2:-8}px;
        transition: all .3s;
    }
    @media screen and ${t.z2.xs} {
        height: 55.5px;
        width: 2px;
        margin: 0 1rem;
        &:after {
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-right: ${e=>0===e.currentPlayer?8:0}px solid ${e=>e.theme.color.borderColorGrid};
            border-left: ${e=>0===e.currentPlayer?0:8}px solid ${e=>e.theme.color.borderColorGrid};
            left: ${e=>0===e.currentPlayer?-8:2}px;
            transform: none;
            bottom: 38%;
        }
    }
`;var C,_;const G=({currentPlayer:e,players:r,onClickChangeName:t})=>{if(2!==r.length)throw new Error("This game only supports 2 players");var n=e=>()=>t(e);return m.createElement(P,null,m.createElement(w,null,m.createElement(k,{onClick:n(r[0])},r[0].name," (X)"),m.createElement(A,null,99<r[0].score?"+99":r[0].score)),m.createElement(Z,{currentPlayer:e}),m.createElement(w,null,m.createElement(k,{onClick:n(r[1])},r[1].name," (O)"),m.createElement(A,null,99<r[1].score?"+99":r[1].score)))};const R=function(){const r=new Audio;async function e(e){r.src!==e&&(r.src=e);try{await r.play()}catch(e){r.currentTime=0}}return{playWin:()=>e("win.wav"),playMove:()=>e("move.wav"),playTie:()=>e("tie.wav")}}();(x=C=C||{}).Rank="rank",x.Sound="sound";const T={store:(e,r)=>{localStorage.setItem(L(e),JSON.stringify(r))},remove:e=>{localStorage.removeItem(L(e))},get:(e,r)=>{try{var t=localStorage.getItem(L(e));return JSON.parse(t||"")}catch{return r}}};function L(e){return"tic-tac-toe."+e}(x=_=_||{})[x.UPDATE_BOARD=0]="UPDATE_BOARD",x[x.RESET_BOARD=1]="RESET_BOARD",x[x.CREATE_PLAYER=2]="CREATE_PLAYER",x[x.UPDATE_PLAYER=3]="UPDATE_PLAYER",x[x.WINNER_PLAYER=4]="WINNER_PLAYER",x[x.TIED_GAME=5]="TIED_GAME",x[x.CHANGE_LEADER_BOARD_VISIBILITY=6]="CHANGE_LEADER_BOARD_VISIBILITY",x[x.CHANGE_SOUND=7]="CHANGE_SOUND",x[x.UPDATE_PLAYER_FORM_VISIBILITY=8]="UPDATE_PLAYER_FORM_VISIBILITY";const N={grid:new Array(9).fill(-1),rank:[],players:[{id:b(),name:"Player 1",score:0},{id:b(),name:"Player 2",score:0}],currentPlayer:0,isLeaderBoardVisible:!1,isSoundEnable:!0};const O=(e,r)=>{switch(r.type){case _.UPDATE_BOARD:{var n=e;var o=r.payload;let t=!1;var a=n.grid.map((e,r)=>r===o.position&&-1===e?(t=!0,n.isSoundEnable&&R.playMove(),n.currentPlayer):e),l=t?y(n.currentPlayer):n.currentPlayer;return{...n,isLeaderBoardVisible:!1,currentPlayer:l,grid:a};return}case _.RESET_BOARD:return{...l=e,isLeaderBoardVisible:!1,grid:l.grid.map(()=>-1),currentPlayer:y(l.currentPlayer)};case _.CREATE_PLAYER:return a=e,u=r.payload,(h=a.players.filter(e=>e.id!==u.oldPlayer.id)).push({...u.newPlayer,id:b(),score:0}),{...a,isLeaderBoardVisible:!1,players:h};case _.UPDATE_PLAYER:return h=e,p=r.payload,{...h,isLeaderBoardVisible:!1,rank:h.rank.map(e=>e.id===p.player.id?{...e,name:p.player.name}:{...e}),players:h.players.map(e=>e.id===p.player.id?{...e,name:p.player.name}:{...e}),playerToUpdate:void 0};case _.WINNER_PLAYER:return i=e,c=r.payload,d=i.players.map(e=>e.id===c.player.id?{...e,score:e.score+1}:{...e}),i.isSoundEnable&&R.playWin(),m=y(i.currentPlayer),i.rank.find(e=>e.id===c.player.id)?(s=E(i.rank.map(e=>e.id===c.player.id?{...e,score:e.score+1}:{...e})),T.store(C.Rank,s),{...i,players:d,isLeaderBoardVisible:!1,currentPlayer:m,rank:s}):(s=E([...i.rank,{...c.player,score:1}]),T.store(C.Rank,s),{...i,players:d,isLeaderBoardVisible:!1,currentPlayer:m,rank:s});case _.TIED_GAME:return(i=e).isSoundEnable&&R.playTie(),{...i,isLeaderBoardVisible:!1,currentPlayer:y(i.currentPlayer)};case _.CHANGE_LEADER_BOARD_VISIBILITY:return d=r.payload,{...e,isLeaderBoardVisible:d.visible};case _.CHANGE_SOUND:return m=e,s=r.payload,T.store(C.Sound,s.enable),{...m,isSoundEnable:s.enable};case _.UPDATE_PLAYER_FORM_VISIBILITY:return t=r.payload,{...e,playerToUpdate:t.playerToUpdate}}var t,i,c,s,d,m,p,u,h};function V(){return(0,m.useReducer)(O,function(){var e=T.get(C.Sound,!0),r=T.get(C.Rank,!0);let t=!1,n=[];return"true"!==e&&!0!==e&&1!==e&&"1"!==e||(t=!0),"object"==typeof r&&r instanceof Array&&0<r.length&&r.map(e=>{var r=Object.prototype.hasOwnProperty.call(e,"id")&&"string"==typeof e.id&&0<e.id.length,t=Object.prototype.hasOwnProperty.call(e,"name")&&"string"==typeof e.name&&0<e.name.length,n=Object.prototype.hasOwnProperty.call(e,"score")&&"number"==typeof e.score,e=Object.prototype.hasOwnProperty.call(e,"rank")&&"number"==typeof e.rank;return r&&t&&n&&e}).reduce((e,r)=>e&&r,!0)&&(n=r),{...N,rank:n,isSoundEnable:t}}())}function I(e,r){e({type:_.CHANGE_LEADER_BOARD_VISIBILITY,payload:r})}function S(e,r){e({type:_.UPDATE_PLAYER_FORM_VISIBILITY,payload:r})}const M=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},m.createElement("rect",{fill:"none",height:"24",width:"24"}),m.createElement("g",null,m.createElement("path",{d:"M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z"})));var U=r(935);const Y=e.ZP.dialog`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${e=>e.theme.color.backgroundDialog};
    max-width: 760px;
`;x=({onClose:r,children:e,isVisible:t})=>{var n;return(0,m.useEffect)(()=>{const e=e=>{e=e.key.trim();/escape/i.test(e)&&r()};return document.addEventListener("keyup",e),()=>document.removeEventListener("keyup",e)},[]),t?(n=document.getElementById("modal-root"),(0,U.createPortal)(m.createElement(Y,{open:t,onClick:()=>{r()}},e),n)):null};x.defaultProps={isVisible:!1};const D=x,H=new Intl.NumberFormat;const F=e.ZP.table`
    border-collapse: collapse;
    border-spacing: 0px;
    color: ${e=>e.theme.color.colorText};
	width: 100%;
`,j=e.ZP.thead`
    font-size: bold;
`,W=e.ZP.tbody``,B=e.ZP.tr`
    vertical-align: middle;
    outline: 0px;
`;r=e.ZP.td`
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    vertical-align: inherit;
    border-bottom: 1px solid ${e=>e.theme.color.borderColorTable};
    text-align: left;
    padding: 16px;
`;const q=(0,e.ZP)(r)``,J=(0,e.ZP)(r)``;function K(e,r){e=e[r];return"number"==typeof e?(r=e,H.format(r)):e}const X=({columnDefinitions:n,rowDefinitions:o,data:e})=>{if(n&&0!==n.length)return m.createElement(F,null,m.createElement(j,null,m.createElement(B,null,n.map(({header:e})=>m.createElement(q,{as:"th",key:e},e)))),m.createElement(W,null,e.map(e=>{const r=e,t=r[o.keyField];return m.createElement(B,{key:t},n.map(({field:e})=>m.createElement(J,{as:"td",key:t+"_"+e},K(r,e))))})));throw new Error("Column definitions must be defined")},$=e.ZP.div`
	width: 100%;
`,Q=e.ZP.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    border: 1px solid ${e=>e.theme.color.borderColorGrid};
    color: ${e=>e.theme.color.colorText};
    border-radius: 8px;
    padding: 8px;
`,ee=[{header:"Rank",field:"rank"},{header:"Name",field:"name"},{header:"Score",field:"score"}],re={keyField:"id"};const te=({players:e})=>0===e.length?m.createElement($,null,m.createElement(Q,null,"Nobody scored yet")):m.createElement($,null,m.createElement(X,{columnDefinitions:ee,rowDefinitions:re,data:e}));const ne=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),m.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}));const oe=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),m.createElement("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})),ae=(0,e.ZP)(n)`
    width: 4rem;
`;const le=({isSoundEnabled:e,onChange:r})=>{return m.createElement(ae,{"aria-label":"Toggle sound to "+(e?"off":"on"),onClick:()=>{r(!e)}},e?m.createElement(ne,null):m.createElement(oe,null))},ie=e.ZP.div`
    display: flex;
    flex-direction: column;
`,ce=e.ZP.input`
    background: none;
    outline: 0;
    border: 2px solid ${e=>e.theme.color.borderColorInput};
    border-radius: 4px;
    padding: 0.5rem 1rem;
    color: ${e=>e.theme.color.colorText};
    transition: all .3s;
    &:focus {
        border-color: ${e=>e.theme.color.borderColorInputFocus};
    }
`,se=e.ZP.label`
    margin: 0 0 0.5rem;
`;x=({name:e,label:r,value:t,onChange:n,...o})=>{const[a,l]=(0,m.useState)(t);return m.createElement(ie,null,m.createElement(se,{htmlFor:e},r),m.createElement(ce,{...o,id:e,value:a,onChange:e=>{l(e.target.value),n(e)}}))};x.defaultProps={value:""};const de=x,me=e.ZP.form`
    width: 100%;
`,pe=(0,e.ZP)(n)`
    margin: 1rem 0 0;
`;const ue=({value:e,onSubmit:r})=>{const[t,n]=(0,m.useState)(e);var o;return m.createElement(me,{onClick:e=>(e.stopPropagation(),!1),onSubmit:e=>(e.preventDefault(),r(t),!1)},m.createElement(de,{name:"name",label:"Name",value:t.name,onChange:(o="name",e=>{n({...t,[o]:e.target.value})}),required:!0}),m.createElement(pe,{type:"submit"},"Save"))},he=e.ZP.div`
    display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
	height: 100%;
`,Ee=e.ZP.div`
    margin: 0 1rem;
`,ye=e.ZP.div`
    width: 80vmin;
	max-width: 600px;
    margin: 3rem 0 0;
	@media screen and ${t.z2.sm} {
		width: 100vmin;
	}
`,be=e.ZP.h1`
	font-size: 3rem;
	margin: 0;
`,ge=(0,e.ZP)(n)`
	width: 4rem;
`,fe=e.ZP.div`
	display: flex;
	justify-content: center;
    align-items: center;
	margin: 3rem 0 0;
`;const ve=()=>{const[t,n]=V();var e=!!t.playerToUpdate;return m.createElement(he,null,m.createElement(be,null,"Tic Tac Toe"),m.createElement(ye,null,m.createElement(v,{disableKeyboard:e,grid:t.grid,players:t.players,onGameUpdate:({position:e})=>{var r;r=n,e={position:e},r({type:_.UPDATE_BOARD,payload:e})},onGameReset:()=>{n({type:_.RESET_BOARD})},onGameFinished:({winner:e})=>{var r;e?(r=n,e={player:e},r({type:_.WINNER_PLAYER,payload:e})):n({type:_.TIED_GAME})}})),m.createElement(fe,null,m.createElement(ge,{"aria-label":"Show LeaderBoard",onClick:()=>{I(n,{visible:!0})}},m.createElement(M,null)),m.createElement(Ee,null,m.createElement(G,{currentPlayer:t.currentPlayer,players:t.players,onClickChangeName:e=>{S(n,{playerToUpdate:e})}})),m.createElement(le,{onChange:e=>{var r;r=n,e={enable:e},r({type:_.CHANGE_SOUND,payload:e})},isSoundEnabled:t.isSoundEnable})),m.createElement(D,{onClose:()=>{I(n,{visible:!1})},isVisible:t.isLeaderBoardVisible},m.createElement(te,{players:t.rank})),m.createElement(D,{onClose:()=>{S(n,{playerToUpdate:void 0})},isVisible:e},m.createElement(ue,{value:t.playerToUpdate,onSubmit:({name:e})=>{var r;r=n,e={player:{...t.playerToUpdate,name:e}},r({type:_.UPDATE_PLAYER,payload:e})}})))}}}]);