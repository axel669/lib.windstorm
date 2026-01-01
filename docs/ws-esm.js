const e=Symbol("no match"),t=(t,r)=>{const o=r=>{const o=r.length;return()=>r===t.substr(F,o)?(F+=o,r):e},a=r=>()=>{const o=t.charAt(F);return!1!==r.test(o)?(F+=1,o):e};let n=null;const s=o("@"),i=o(":"),l=a(/[^;]/),c=o(";"),d=o("*"),p=a(/[a-z0-9_\-]/i),u=o("!"),h=a(/[^{]/),g=o("{"),f=o("}"),m=a(/[a-zA-Z0-9\.\-_#\^\$\/]/),b=o("#"),x=a(/[^;#]/),v=a(/[\s]/m),w=()=>{const t=F;let r=null,o=null;return(r=N())===e||(o=z())===e?(F=t,e):[r,o]},y=()=>{const r=F;let o=null,a=null;return(o=b())===e||(a=(()=>{const r=F,o=F;for(;x()!==e;);return F-o==0?e:t.slice(r,F)})())===e?(F=r,e):[o,a]},k=()=>{n="rules";let t=F,r=null;const o=[];let a=null;for(;(a=w())!==e;)o.push(a);if(r=o,N()===e)return F=t,e;return r.map((e=>e[1]))},z=()=>{let t=null;return(t=$())!==e||(t=A())!==e||(t=E())!==e||(t=L())!==e?t:e},$=()=>{n="rule$0";let t=F,r=null;if((r=S())===e)return F=t,e;return r},A=()=>{n="rule$1";let t=F,r=null;if((r=M())===e)return F=t,e;return r},E=()=>{n="rule$2";let t=F,r=null;if((r=V())===e)return F=t,e;return r},L=()=>{n="rule$3";let t=F,r=null;if((r=C())===e)return F=t,e;return r},S=()=>{n="variable";let r=F,o=null,a=null;if(s()===e)return F=r,e;if((o=q())===e)return F=r,e;if(i()===e)return F=r,e;if(N()===e)return F=r,e;if((a=(()=>{const r=F,o=F;for(;l()!==e;);return F-o==0?e:t.slice(r,F)})())===e)return F=r,e;if(c()===e)return F=r,e;return((e,t)=>({type:"var",name:e,value:t}))(o,a)},M=()=>{n="css";let r=F,o=null,a=null;if(d()===e)return F=r,e;if((o=q())===e)return F=r,e;if(i()===e)return F=r,e;if(N()===e)return F=r,e;if((a=(()=>{const r=F,o=F;for(;l()!==e;);return F-o==0?e:t.slice(r,F)})())===e)return F=r,e;if(c()===e)return F=r,e;return((e,t)=>({type:"css",name:e,value:t}))(o,a)},q=()=>{n="cssName";let r=F,o=null;if((o=(()=>{const r=F,o=F;for(;p()!==e;);return F-o==0?e:t.slice(r,F)})())===e)return F=r,e;return o},V=()=>{n="subrule";let r=F,o=null,a=null;if(u()===e)return F=r,e;if(N()===e)return F=r,e;if((o=(()=>{const r=F,o=F;for(;h()!==e;);return F-o==0?e:t.slice(r,F)})())===e)return F=r,e;if(g()===e)return F=r,e;if((a=k())===e)return F=r,e;if(f()===e)return F=r,e;var s;return s=a,{type:"alt",selector:o.trim(),rules:s}},C=()=>{n="macro";let r=F,o=null,a=null;if((o=(()=>{const r=F,o=F;for(;m()!==e;);return F-o==0?e:t.slice(r,F)})())===e)return F=r,e;const s=(()=>{const t=F;let r=null,o=null,a=null;return(r=i())===e||(o=N())===e||(a=T())===e?(F=t,e):[r,o,a]})();if(a=s===e?null:s,c()===e)return F=r,e;return((e,t)=>({type:"macro",name:e,value:t?.[2]}))(o,a)},T=()=>{let t=null;return(t=j())!==e||(t=I())!==e?t:e},j=()=>{n="macroValue$0";let t=null;const r=[];let o=null;for(;(o=y())!==e;)r.push(o);if(0===r.length)return e;t=r;return(e=>{const t=e.map((e=>e[1].trim()));return t.arg=t.join(" "),t})(t)},I=()=>{n="macroValue$1";let r=F,o=null;if((o=(()=>{const r=F,o=F;for(;l()!==e;);return F-o==0?e:t.slice(r,F)})())===e)return F=r,e;return(e=>{const t=[e.trim()];return t.arg=e,t})(o)},N=()=>{for(n="_";v()!==e;);};let F=0;const H=(()=>{n="$";let t=F,r=null;if((r=k())===e)return F=t,e;return r})();return F!==t.length?(console.log("last",n),console.log("@",F),console.log(t.slice(F-10,F+10)),new Error("End of input not found")):H},r=document.createElement("style");r.setAttribute("data-name","windstorm-generated"),r.innerHTML="@layer ws.custom ws.macro ws.user;",document.head.append(r);const o=(e,...r)=>{const o=String.raw(e,...r);return a(t(o),{"&":[]},"&")},a=(e,t,r)=>{for(const o of e)s(o,t,r);return t},n=e=>e.replace(/@([a-zA-Z0-9\-_]+)/g,((e,t)=>`var(--${t})`)),s=(e,t,r)=>{if("var"===e.type)return void t[r].push(`--${e.name}: ${n(e.value)};`);if("css"===e.type)return void t[r].push(`${e.name}: ${n(e.value)};`);if("macro"===e.type){const o=i[e.name];if(void 0===o)return void console.warn(`no macro for "${e.name}"`);for(const[a,s]of Object.entries(o)){const o=a.replace("&",r);t[o]=t[o]??[],t[o].push(...s.map((t=>n(t.replace(/%(arg|\d+)/g,((t,r)=>e.value?.[r]??""))))))}return}const o=e.selector.replaceAll("&",r);t[o]=[...t[o]??[]],a(e.rules,t,o)},i={},l=e=>(t,...r)=>i[e]=o(t,...r),c=e=>Object.entries(e).reduce(((e,[t,r])=>{if(!0===t.startsWith("|")){const o=t.lastIndexOf("|"),a=[`@media (${t.slice(1,o)}) {`,`${`&${t.slice(o+1)}`} {`,...r,"}","}"].join("\n");return e.push(a),e}return e.push(`${t} {\n${r.join("\n")}\n}`),e}),[]),d=(e,t="ws.custom")=>(a,...n)=>{const s=o(a,...n),i=c(s).map((t=>t.replaceAll("&",e))),l=`@layer ${t} { ${i.join("\n")} }`;r.sheet.insertRule(l)};const p={attr:"ws-x",origin:"https://wind-cdn.axel669.net",...window.wsConfig,version:"0.6.0",fontVersion:"2",iconVersion:"3.34.0"},u={},h=async(e,t)=>{const r=u[t],o=`ws-icon-${t}`;if(void 0!==r){if(await r.loaded,"loaded"!==r.status||null===e)return;return void e.style.setProperty("--icon-font",o)}const a=new FontFace(o,`url(${p.origin}/icon/${t}.woff?v${p.iconVersion})`);u[t]=a;try{await a.load()}catch(e){console.error(e)}document.fonts.add(a),h(e,t)},g=e=>{if(void 0===e.tagName)return;const t=e.dataset.icon??null;null!==t&&h(e,t)},f={childList(e){0!==e.addedNodes.length&&e.addedNodes.forEach((e=>{if(void 0===e.tagName)return;[e,...e.querySelectorAll("*")].forEach(g)}))},attributes(e){g(e.target)}};new MutationObserver((e=>e.forEach((e=>f[e.type](e))))).observe(document.body,{subtree:!0,attributes:!0,childList:!0,attributeFilter:["data-icon"]});const m=(...e)=>{for(const t of e)h(null,t)};l("appr")`*apperance: %arg; *-webkit-appearance: %arg;`,l("area")`*grid-area: %arg;`,l("b")`*border: %arg;`,l("b.b")`*border-bottom: %arg;`,l("b.b.c")`*border-bottom-color: %arg;`,l("b.b.s")`*border-bottom-style: %arg;`,l("b.b.w")`*border-bottom-width: %arg;`,l("b.c")`*border-color: %arg;`,l("b.l")`*border-left: %arg;`,l("b.l.c")`*border-left-color: %arg;`,l("b.l.s")`*border-left-style: %arg;`,l("b.l.w")`*border-left-width: %arg;`,l("b.r")`*border-right: %arg;`,l("b.r.c")`*border-right-color: %arg;`,l("b.r.s")`*border-right-style: %arg;`,l("b.r.w")`*border-right-width: %arg;`,l("b.s")`*border-style: %arg;`,l("b.t")`*border-top: %arg;`,l("b.t.c")`*border-top-color: %arg;`,l("b.t.s")`*border-top-style: %arg;`,l("b.t.w")`*border-top-width: %arg;`,l("b.w")`*border-width: %arg;`,l("b.x")`*border-left: %arg; *border-right: %arg;`,l("b.x.c")`*border-left-color: %arg; *border-right-color: %arg;`,l("b.x.s")`*border-left-style: %arg; *border-right-style: %arg;`,l("b.x.w")`*border-left-width: %arg; *border-right-width: %arg;`,l("b.y")`*border-top: %arg; *border-bottom: %arg;`,l("b.y.c")`*border-top-color: %arg; *border-bottom-color: %arg;`,l("b.y.s")`*border-top-style: %arg; *border-bottom-style: %arg;`,l("b.y.w")`*border-top-width: %arg; *border-bottom-width: %arg;`,l("bg")`*background: %arg;`,l("bg.att")`*background-attachment: %arg;`,l("bg.c")`*background-color: %arg;`,l("bg.img")`*background-image: %arg;`,l("bg.pos")`*background-position: %arg;`,l("bg.rep")`*background-repeat: %arg;`,l("bg.sz")`*background-size: %arg;`,l("c")`*color: %arg;`,l("col")`*grid-column: %arg;`,l("cur")`*cursor: %arg;`,l("disp")`*display: %arg;`,l("fl.basis")`*flex-basis: %arg;`,l("fl.cross")`*align-items: %arg;`,l("fl.dir")`*flex-direction: %arg;`,l("fl.flow")`*flex-flow: %arg;`,l("fl.grow")`*flex-grow: %arg;`,l("fl.main")`*justify-content: %arg;`,l("fl.shrink")`*flex-shrink: %arg;`,l("fl.size")`*flex: %arg;`,l("fl.wr")`*flex-wrap: %arg;`,l("font")`*font-family: %arg;`,l("gap")`*gap: %arg;`,l("gap.col")`*column-gap: %arg;`,l("gap.row")`*row-gap: %arg;`,l("gr.areas")`*grid-template-areas: %arg;`,l("gr.cols")`*grid-template-columns: %arg;`,l("gr.cols.a")`*grid-auto-columns: %arg;`,l("gr.flow")`*grid-auto-flow: %arg;`,l("gr.rows")`*grid-template-rows: %arg;`,l("gr.rows.a")`*grid-auto-rows: %arg;`,l("h")`*height: %arg;`,l("h.max")`*max-height: %arg;`,l("h.min")`*min-height: %arg;`,l("inset")`*top: %arg; *left: %arg; *bottom: %arg; *right: %arg;`,l("inset.x")`*left: %arg; *right: %arg;`,l("inset.y")`*top: %arg; *bottom: %arg;`,l("m")`*margin: %arg;`,l("m.b")`*margin-bottom: %arg;`,l("m.l")`*margin-left: %arg;`,l("m.r")`*margin-right: %arg;`,l("m.t")`*margin-top: %arg;`,l("m.x")`*margin-left: %arg; *margin-right: %arg;`,l("m.y")`*margin-bottom: %arg; *margin-top: %arg;`,l("o")`*opacity: %arg;`,l("outln")`*outline: %arg;`,l("over")`*overflow: %arg;`,l("over.x")`*overflow-x: %arg;`,l("over.y")`*overflow-y: %arg;`,l("p")`*padding: %arg;`,l("p.b")`*padding-bottom: %arg;`,l("p.l")`*padding-left: %arg;`,l("p.r")`*padding-right: %arg;`,l("p.t")`*padding-top: %arg;`,l("p.x")`*padding-left: %arg; *padding-right: %arg;`,l("p.y")`*padding-top: %arg; *padding-bottom: %arg;`,l("pos")`*position: %arg;`,l("pos.abs")`*position: absolute;`,l("pos.fix")`*position: fixed;`,l("pos.rel")`*position: relative;`,l("r")`*border-radius: %arg;`,l("r.b")`*border-bottom-left-radius: %arg; *border-bottom-right-radius: %arg;`,l("r.bl")`*border-bottom-left-radius: %arg;`,l("r.br")`*border-bottom-right-radius: %arg;`,l("r.l")`*border-top-left-radius: %arg; *border-bottom-left-radius: %arg;`,l("r.r")`*border-top-right-radius: %arg; *border-bottom-right-radius: %arg;`,l("r.t")`*border-top-left-radius: %arg; *border-top-right-radius: %arg;`,l("r.tl")`*border-top-left-radius: %arg;`,l("r.tr")`*border-top-right-radius: %arg;`,l("row")`*grid-row: %arg;`,l("sel")`*user-select: %arg;`,l("self.cross")`*align-self: %arg;`,l("self.main")`*justify-self: %arg;`,l("sh.box")`*box-shadow: %arg;`,l("sh.text")`*text-shadow: %arg;`,l("t.a")`*text-align: %arg;`,l("t.br")`*word-break: %arg;`,l("t.c")`*color: %arg;`,l("t.deco")`*text-decoration: %arg;`,l("t.lh")`*line-height: %arg;`,l("t.over")`*text-overflow: %arg;`,l("t.st")`*font-style: %arg;`,l("t.sz")`*font-size: %arg;`,l("t.tf")`*text-transform: %arg;`,l("t.var")`*font-variant: %arg;`,l("t.ws")`*white-space: %arg;`,l("t.wt")`*font-weight: %arg;`,l("tf")`*transform: %arg;`,l("tf.o")`*transform-origin: %arg;`,l("tf.p")`*perspective: %arg;`,l("tr")`*transition: %arg;`,l("v.a")`*vertical-align: %arg;`,l("vis")`*visibility: %arg;`,l("w")`*width: %arg;`,l("w.max")`*max-width: %arg;`,l("w.min")`*min-width: %arg;`,l("x")`*left: %arg;`,l("-x")`*right: %arg;`,l("y")`*top: %arg;`,l("-y")`*bottom: %arg;`,l("z")`*z-index: %arg;`,l("fl.cn")`fl.cross: center; fl.main: center;`,l("fl.cn.cross")`fl.cross: center;`,l("fl.cn.main")`fl.main: center;`,l("flex")`disp: flex; fl.dir: %arg;`,l("grid")`disp: grid; gr.flow: %arg;`,l("hide")`disp: none;`,l("invis")`vis: hidden;`,l("sticky")`pos: sticky; y: 0px; z: +1;`,l("adorn")`disp: flex; fl.cn; p: 4px;`,l("pad.compact")`p: 0px 4px;`,l("variant.outline")`b.w: 1px;`,l("variant.fill")`@text-color: @alt-color; @fill-color: @core-color; @active: @alt-color;`,l("variant.lined")`b.w: 0px; b.b.w: @border-size; r.b: 0px;`,l("gr.cols-fit")`*grid-template-columns: repeat(auto-fit, minmax(%arg));`,l("gr.cols-fill")`*grid-template-columns: repeat(auto-fill, minmax(%arg));`,l("text.subtitle")`t.sz: @text-size-subtitle; flex; fl.main: center; p: 0px 8px;`,l("text.title")`t.sz: @text-size-title; flex; fl.main: center; p: 4px 8px;`,l("elevate")`sh.box: 0px 2px 3px @shadow-color;`;const b=e=>{let t=5381;for(let r=0;r<e.length;r+=1)t=33*t^e.charCodeAt(r);return t.toString(36)},x={},v=e=>Object.entries(e).reduce(((e,t)=>{const[r,o]=t;return null==o||!1===o?e:!0===o?(e.push(`${r};`),e):"object"==typeof o?(e.push(`${r} { ${v(o)} }`),e):(e.push(`${r}: ${o};`),e)}),[]).join(" "),w=(e,...t)=>{const r=b(`${Date.now()}:${Math.random().toString(16)}`);return l(r)(e,...t)},y=p.version,k=Math.ceil(screen.height*devicePixelRatio*10)%10>=5;l("#theme.base")`
    font: @font;

    @sub-pixel-offset: ${k?1:0}px;
    @z-info: 5;
    @z-cover: 25;
    @z-notif: 50;
    @z-layer: 100;

    @base-radius: 4px;
    @anim-time: 250ms;
    @short-anim-time: 150ms;

    @text-size-normal: 16px;
    @text-size-title: calc(@text-size-normal * 2);
    @text-size-header: calc(@text-size-normal * 1.5);
    @text-size-subtitle: calc(@text-size-normal * 0.9);
    @text-size-info: calc(@text-size-normal * 0.75);

    @color: @mono;

    @page-text-color: hsl(@color, @layer-text);
    bg.c: hsl(@color, @layer-bg);
    t.c: @page-text-color;
    t.sz: @text-size-normal;
`,l("#theme.tron")`
    #theme.base;

    @font: Tektur;

    @mono: 0, 0%;
    @primary: 184, 80%;
    @accent: 160, 80%;
    @info: 208, 80%;
    @success: 130, 80%;
    @warning: 58, 80%;
    @error: 4, 80%;

    @layer-bg: 15%;
    @layer-surface: 5%;
    @layer-element: 65%;
    @layer-container: 10%;
    @layer-border: 25%;
    @layer-text: 95%;
    @layer-fill: 5%;

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`,l("#theme.dark")`
    #theme.base;
    @font: Roboto;

    @mono: 0, 0%;
    @primary: 184, 80%;
    @accent: 160, 80%;
    @info: 208, 80%;
    @success: 130, 80%;
    @warning: 58, 80%;
    @error: 4, 80%;

    @layer-bg: 20%;
    @layer-surface: 10%;
    @layer-element: 50%;
    @layer-container: 15%;
    @layer-border: 30%;
    @layer-text: 90%;
    @layer-fill: 10%;

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`,l("#theme.light")`
    #theme.base;
    @font: Roboto;

    @mono: 0, 0%;
    @primary: 184, 70%;
    @accent: 160, 85%;
    @info: 208, 85%;
    @success: 130, 90%;
    @warning: 58, 85%;
    @error: 4, 80%;

    @layer-bg: 85%;
    @layer-surface: 95%;
    @layer-element: 37.5%;
    @layer-container: 90%;
    @layer-border: 80%;
    @layer-text: 10%;
    @layer-fill: 95%;

    @shadow-color: hsla(0, 0%, 20%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);
`;var z=(e,...t)=>{const r=String.raw(e,...t),o=document.createElement("template");return o.innerHTML=r,()=>o.content.cloneNode(!0)};d("ws-circle-spinner, ws-hexagon-spinner")`
    @size: 100px;

    w: @size;
    h: @size;
    disp: inline-block;
`;const $=z`
<style>
    :host {
        --color: var(--primary);
        --core-color: hsl(var(--color), var(--layer-element));
        --alt-color: hsl(var(--color), var(--layer-border));
        --size: 100px;
        display: inline;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    circle {
        animation-name: spin;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform-origin: 50% 50%;
        stroke: var(--core-color);
    }
    circle.mid {
        stroke: var(--alt-color);
    }
    circle:nth-child(1) {
        animation-duration: 4s;
    }
    circle:nth-child(2) {
        animation-duration: 3s;
        animation-direction: reverse;
    }
    circle:nth-child(3) {
        animation-duration: 2s;
    }

    svg {
        display: inline-block;
        width: var(--size);
        height: var(--size);
    }
</style>

<svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" stroke-width="4" fill="transparent" r="48" stroke-dasharray="0 37.7 75.4 75.4 75.4 75.4"></circle>
    <circle class="mid" cx="50" cy="50" stroke-width="4" fill="transparent" r="40" stroke-dasharray="0 31.4 62.83 62.83 62.83 62.83"></circle>
    <circle cx="50" cy="50" stroke-width="4" fill="transparent" r="32" stroke-dasharray="0 12.57 25.13 25.13 25.13 25.13 25.13 25.13 25.13 25.13"></circle>
</svg>
`;customElements.define("ws-circle-spinner",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"closed"}).appendChild($())}});const A=z`
<style>
    :host {
        --color: var(--primary);
        --core-color: hsl(var(--color), var(--layer-element));
        --alt-color: hsl(var(--color), var(--layer-border));
        --size: 100px;
        display: inline;
    }
    @keyframes spin {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(360deg);
        }
    }
    path {
        animation-name: spin;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform-origin: 50% 50%;
        stroke: var(--core-color);
    }
    path.mid {
        stroke: var(--alt-color);
    }
    path:nth-child(1) {
        animation-duration: 3s;
    }
    path:nth-child(2) {
        animation-duration: 2s;
        animation-direction: reverse;
    }
    path:nth-child(3) {
        animation-duration: 1s;
    }

    svg {
        display: inline-block;
        width: var(--size);
        height: var(--size);
    }
</style>

<svg  viewBox="0 0 100 100">
    <path stroke-width="4" fill="none" d="M91.57 26v48L50 98 8.43 74V26L50 2l41.57 24Z"></path>
    <path stroke-width="4" class="mid" fill="none" d="M81.177 32v36L50 86 18.823 68V32L50 14l31.177 18Z"></path>
    <path stroke-width="4" fill="none" d="M70.785 38v24L50 74 29.215 62V38L50 26l20.785 12Z"></path>
</svg>
`;customElements.define("ws-hexagon-spinner",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"closed"}).appendChild(A())}});var E=(e,t)=>`\n    @core: ${e};\n    @alt: ${t};\n    @core-color: hsl(@color, @core);\n    @alt-color: hsl(@color, @alt);\n\n    @fill: var(--fill-color, transparent);\n    @text: var(--text-color, @core-color);\n    @active: @text;\n`;d("ws-avatar")`
    @color: @mono;
    @size: 36px;

    ${E("@layer-element","@layer-fill")}

    disp: inline-flex;
    over: hidden;
    r: 500px;
    fl.cross: center;
    fl.main: center;
    w: @size;
    h: @size;
    bg.c: @fill;
    t.c: @text;
    v.a: text-bottom;

    ! & > img {
        w: 100%;
    }
    ! & > object {
        w: 100%;
        h: 100%;
        disp: flex;
        fl.cross: center;
        fl.main: center;
    }
`,d("ws-badge")`
    @color: @primary;

    ${E("@layer-element","@layer-fill")}

    pos: relative;
    disp: inline-grid;
    over: visible;

    ! &::after {
        pos: absolute;
        *content: attr(ws-text);
        -x: -10px;
        y: 0px;
        tf: translateY(-50%);
        bg.c: @core-color;
        *pointer-events: none;
        r: 20px;
        p: 4px;
        w.min: 20px;
        h: 20px;
        *box-sizing: border-box;
        t.a: center;
        t.sz: @text-size-subtitle;
        t.c: @alt-color;
        t.lh: 14px;
        z: @z-info;
        t.wt: 600;
    }
`;var L='\n    over: hidden;\n    pos: relative;\n    cur: pointer;\n\n    ! &::after {\n        *content: "";\n        pos: absolute;\n        y: 0px;\n        x: 0px;\n        -y: 0px;\n        -x: 0px;\n        *pointer-events: none;\n        o: 0;\n        bg.c: @active;\n        tr: opacity @anim-time linear;\n    }\n    ! &:where(:not(:disabled)):active::after {\n        tr: none;\n        o: 0.3;\n    }\n',S='\n    over: hidden;\n    pos: relative;\n\n    ! |pointer: fine| {\n        ! &::before {\n            *content: "";\n            pos: absolute;\n            y: 0px;\n            x: 0px;\n            -y: 0px;\n            -x: 0px;\n            *pointer-events: none;\n            o: 0;\n            bg.c: @active;\n        }\n        ! &:where(:not(:disabled)):hover::before {\n            tr: none;\n            o: 0.1;\n        }\n    }\n';d(":where(button[data-ws], a[data-ws][button], label[data-ws][button])")`
    @color: @primary;

    ${E("@layer-element","@layer-fill")}

    pos: relative;

    b: 0px solid @core-color;
    font: @font;

    t.c: @text;
    bg.c: @fill;
    r: @base-radius;
    cur: pointer;
    p: 8px 16px;
    over: hidden;
    *user-select: none;
    disp: inline-flex;
    fl.cross: center;
    fl.main: center;
    t.deco: none;
    t.wt: 500;

    ! &:disabled {
        cur: default;
        *filter: saturate(30%) brightness(0.7);
    }

    ${S}
    ${L}
`,d("ws-chip")`
    @color: @mono;

    ${E("@layer-element","@layer-fill")}

    disp: inline-flex;
    fl.cross: center;
    fl.main: center;
    r: 100px;
    p: 4px 12px;
    *user-select: none;
    v.a: text-bottom;
    t.c: @text-color;
    bg: @fill-color;
    b: 1px solid @core-color;

    ! &[clickable] {
        cur: pointer;
        ${L}
    }
`,d("label[control][data-ws]")`
    @color: @primary;
    @active: @mono;

    pos: relative;
    disp: inline-grid;
    gr.areas: "label label label" "start control end" "extra extra extra";
    gr.rows: minmax(0px, min-content) auto minmax(0px, min-content);
    gr.cols: minmax(0px, min-content) auto minmax(0px, min-content);
    *user-select: none;
    over: hidden;
    b: 0px solid hsl(@color, @layer-border);
    bg.c: hsl(@active, @layer-container);
    r: @base-radius;

    ! &:focus-within {
        @active: @color;
    }

    ! &:has(:not(button):disabled) {
        *filter: saturate(50%) brightness(0.7);
    }

    ! & > :is(input, select, ws-select, textarea) {
        area: control;
        b.w: 0px;
        @color: inherit;
        ! &:focus {
            outln: none;
        }
    }

    ! & > :where(input, textarea) {
        t.c: @text-color-normal;
        h.min: 28px;
        w: 100%;
        h: 100%;
        p: 4px;
        bg.c: transparent;
        w.min: 16px;
    }

    ! & > :where(input[type="file"]) {
        pos: relative;
        p: 0px;

        ! &::file-selector-button {
            font: @font;
            h: 100%;
            m: 0px;
            m.r: 4px;
            p: 4px;
            t.c: @text-color-normal;
            bg.c: transparent;
            b.w: 0px;
            t.deco: underline;
        }
    }

    ! & > [label-text] {
        area: label;
        p: 4px;
        disp: flex;
        fl.dir: column;
        fl.cross: start;
        t.c: hsl(@color, @layer-element);
        t.ws: nowrap;
        t.sz: @text-size-normal;
    }
`,m("caret-right-filled"),d(":where(details[data-ws])")`
    @color: @primary;
    @padding: 8px;

    ${E("@layer-element","@layer-fill")}

    b: 0px solid @core-color;
    p: 0px @padding;
    r: 4px;
    over: hidden;

    ! &:open {
        p.b: @padding;
    }

    ! & > summary {
        t.c: @core-color;
        pos: relative;
        p: 4px;
        p.l: 24px;
        m.x: calc(-1 * @padding);
        cur: pointer;
        *user-select: none;

        ! &::before {
            pos: absolute;
            x: 0px;
            y: 50%;
            -y: 0px;
            w: 1em;
            disp: flex;
            fl.cross: center;
            fl.main: center;
            font: ws-icon-caret-right-filled;
            *speak: none;
            t.st: normal;
            t.wt: 400;
            t.var: normal;
            t.tf: none;
            *content: "caret-right-filled";
            tf: translateY(-50%);
            tr: transform 100ms linear;
            w: 24px;
            h: 24px;
            t.lh: 24px;
            t.sz: 18px;
        }

        ! &::marker, &::-webkit-details-marker {
            *content: "";
            disp: none;
        }
    }
    ! &:open > summary::before {
        tf: translateY(-50%) rotate(90deg);
    }
`,d("ws-dialog")`
    pos: absolute;
    x: 50%;
    y: 50%;
    tf: translate(-50%, -50%);
    o: 0;
    tr: opacity @anim-time linear;

    ! ws-modal[open] > & {
        o: 1;
    }
`,d("ws-drawer")`
    pos: absolute;
    x: 0px;
    y: 0px;
    -y: 0px;
    tf: translateX(-100%);
    tr: transform @anim-time linear;
    disp: grid;

    ! ws-modal[open] > & {
        tf: translateX(0%);
    }
`,d("ws-flex")`
    disp: flex;
    fl.dir: column;
    gap: 8px;
    p: 4px;
    over: hidden;

    ! & > * {
        fl.shrink: 0;
    }
`,d("ws-grid")`
    disp: grid;
    over: hidden;
    gap: 8px;
    p: 4px;
    gr.rows.a: min-content;
`,d("ws-icon")`
    disp: var(--icon-font, none);
    t.lh: 1;
    ! &::before {
        disp: inline-block;
        font: @icon-font;
        *-webkit-font-smoothing: antialiased;
        *-moz-osx-font-smoothing: grayscale;
        *content: attr(data-icon);
        m.t: 2px;
    }
`,d("a[data-ws]:not([button])")`
    @color: @primary;

    t.c: hsl(@color, @layer-element);

    ! &:visited, &:hover {
        t.c: hsl(@color, @layer-element);
    }

    ! &[disabled] {
        *pointer-events: none;
        *filter: saturation(30%) brightness(0.7);
    }
`;const M=z`
<style>
    :host {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background-color: var(--modal-color);
        z-index: var(--z-cover);
        transition: visibility linear var(--anim-time, 0ms);
    }
    ws-modal-overlay {
        position: absolute;
        inset: 0px;
    }
    ws-modal-overlay:focus {
        outline: none;
    }
    :host(:not([open])) {
        visibility: hidden;
    }
    :host([clear]) {
        background-color: transparent;
    }
</style>

<ws-modal-overlay>
</ws-modal-overlay>
<slot></slot>
`;customElements.define("ws-modal",class extends HTMLElement{#e=null;constructor(){super(),this.#e=this.attachShadow({mode:"closed",delegatesFocus:!0}),this.#e.append(M())}connectedCallback(){window.addEventListener("keydown",(e=>{!0!==(!1===this.open||"Escape"!==e.key||!0===this.persistent)&&(this.hide(),this.dispatchEvent(new Event("close")))}));this.#e.querySelector("ws-modal-overlay").addEventListener("click",(e=>{!0!==this.persistent&&(this.hide(),this.dispatchEvent(new Event("close")))}))}get open(){return this.hasAttribute("open")}set open(e){!1!==e?this.setAttribute("open",""):this.removeAttribute("open")}get persistent(){return this.hasAttribute("persistent")}set persistent(e){!1!==e?this.setAttribute("persistent",""):this.removeAttribute("persistent")}show(){this.open=!0}hide(){this.open=!1}}),d("ws-paper")`
    @color: @mono;

    ${E("@layer-surface","@layer-border")}

    disp: grid;
    r: @base-radius;
    over: hidden;
    gr.cols: 1fr;
    gr.rows: min-content auto min-content;
    gr.areas: "header" "content" "footer";
    bg.c: @core-color;
    b.c: @alt-color;

    ! & > :where(*) {
        area: content;
    }

    ! &::before {
        *content: "";
        area: header;
    }
    ! &::after {
        *content: "";
        area: footer;
    }
`;const q=z`
<style>
    :host {
        --anim-time: 0ms;
    }
</style>
<slot></slot>

<ws-modal>
    <ws-popover-position>
        <slot name="popover"></slot>
    </ws-popover-position>
</ws-modal>
`;customElements.define("ws-popover",class extends HTMLElement{static observedAttributes=["open","persistent"];#e=null;#t=null;constructor(){super(),this.#e=this.attachShadow({mode:"closed",delegatesFocus:!0}),this.#e.append(q()),this.#t=this.#e.querySelector("ws-modal")}connectedCallback(){this.#t.addEventListener("close",(()=>{this.hide(),this.dispatchEvent(new Event("close"))})),this.#t.addEventListener("click",(e=>e.stopPropagation())),!1!==this.open&&(this.#t.open=this.open,this.setVars())}attributeChangedCallback(e,t,r){null!==r?(this.#t[e]=!0,"open"===e&&this.setVars()):this.#t[e]=!1}setVars(){const e=(this.sizeTarget??this).getBoundingClientRect();this.style.setProperty("--x",`${e.x}px`),this.style.setProperty("--y",`${e.y}px`),this.style.setProperty("--w",`${e.width}px`),this.style.setProperty("--h",`${e.height}px`)}get open(){return this.hasAttribute("open")}set open(e){this.#t.open=e,!1!==e?this.setAttribute("open",""):this.removeAttribute("open")}get persistent(){return this.hasAttribute("persistent")}set persistent(e){this.#t.persistent=e,!1!==e?this.setAttribute("persistent",""):this.removeAttribute("persistent")}show(){this.open=!0,this.focus()}hide(){this.open=!1}});const V=z`
<style>
@keyframes busy-load {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(400%);
    }
}
:host {
    display: block;
    height: 8px;
    border-radius: var(--base-radius);
    background-color: hsl(var(--mono), var(--layer-border));
    position: relative;
    overflow: hidden;
    --color: var(--mono);
}
div::before, div::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    --range: calc(var(--max, 1) - var(--min, 0));
    --bar-width: calc(100% * var(--value, 0) / var(--range));
    --buffer-width: calc(100% * var(--buffer, 0) / var(--range));
}
div::before {
    background-color: hsl(var(--color), var(--layer-element));
}
div::after {
    opacity: 0.3;
    background-color: hsl(var(--color), var(--layer-element));
}
:host(:not([busy])) div::before {
    width: var(--bar-width);
}
:host(:not([busy])) div::after {
    width: var(--buffer-width);
}
:host([busy]) div::before {
    width: 25%;
    animation-name: busy-load;
    animation-iteration-count: infinite;
    animation-duration: 2s;
}
</style>

<div></div>
`;customElements.define("ws-progress",class extends HTMLElement{static observedAttributes=["min","max","value","buffer"];#r=null;constructor(){super();const e=this.attachShadow({mode:"closed"});e.append(V()),this.#r=e.querySelector("div")}get value(){return parseFloat(this.getAttribute("value")??"0")}get buffer(){return parseFloat(this.getAttribute("buffer")??"0")}get min(){return parseFloat(this.getAttribute("min")??"0")}get max(){return parseFloat(this.getAttribute("max")??"1")}get busy(){return this.hasAttribute("busy")}set value(e){!1===e&&this.removeAttribute("value"),this.setAttribute("value","")}set buffer(e){!1===e&&this.removeAttribute("buffer"),this.setAttribute("buffer","")}set min(e){!1===e&&this.removeAttribute("min"),this.setAttribute("min","")}set max(e){!1===e&&this.removeAttribute("max"),this.setAttribute("max","")}set busy(e){!1===e&&this.removeAttribute("busy"),this.setAttribute("busy","")}#o(e,t){this.#r.style.setProperty(`--${e}`,this.getAttribute(e)||t)}connectedCallback(){this.#o("value","0"),this.#o("buffer","0"),this.#o("min","0"),this.#o("max","1")}attributeChangedCallback(e,t,r){this.#o(e,r)}}),d("ws-screen")`
    @screen-width: min(720px, 100%);
    @pad-x: auto;
    @pad-y: auto;
    @pad-left: var(--pad-x, auto);
    @pad-right: var(--pad-x, auto);
    @pad-top: var(--pad-y, auto);
    @pad-bottom: var(--pad-y, auto);

    disp: grid;
    h: round(down, calc(100% - @sub-pixel-offset), 1px);
    w: calc(100%);
    over: hidden;
    pos: absolute;
    y: 0px;
    x: 0px;
    gr.cols: @pad-left @screen-width @pad-right;
    gr.rows: @pad-top 1fr @pad-bottom;
    gr.areas:
        "tl t tr"
        "l content r"
        "bl b br"
    ;

    ! & > :where(*) {
        area: content;
    }
`;const C="caret-down-filled";m(C),d("ws-option")`
    ${E("@layer-element","@layer-fill")}

    disp: block;
    p: 8px;
    *pointer-events: auto;
    t.c: @text-color-normal;
    w.min: fit-content;

    ! &[selected] {
        bg.c: @core-color;
        t.c: @alt-color;
    }

    ! & * {
        *pointer-events: none;
    }

    ${S}
    ${L}
`,d("ws-optgroup")`
    grid;
    gr.cols: 16px 1fr;
    *pointer-events: none;

    ! &::before {
        *content: attr(label);
        disp: block;
        p: 8px;
        col: 1 / -1;
        bg.c: hsl(@color, @layer-container);
    }

    ! & > * {
        col: 2;
    }
`;const T=z`
<style>
    :host {
        --color: var(--mono);
        --modal-color: transparent;
        --max-height: 200px;
        --core-color: hsl(var(--color), var(--layer-border));
        --alt-color: hsl(var(--color), var(--layer-surface));
        display: inline-grid;
        grid-template-rows: 1fr 0px;
        user-select: none;
        cursor: default;
        position: relative;
        border: 1px solid var(--core-color);
        border-radius: var(--base-radius);
        padding: 4px;
    }

    slot[name=options] {
        display: block;
        overflow: visible;
    }
    ws-options {
        box-sizing: border-box;
        border: 1px solid var(--core-color);
        border-radius: var(--base-radius);
        display: grid;
        position: absolute;
        max-height: var(--max-height);
        overflow: auto;
        background-color: var(--alt-color);
        grid-template-columns: 1fr;
        border-radius: var(--base-radius);
        box-shadow: 0px 2px 4px var(--shadow-color);
        /* visibility: none; */
        opacity: 0;
        transform: translateY(10px);
        transition:
            /* visibility var(--anim-time) linear, */
            opacity var(--anim-time) linear,
            transform var(--anim-time) linear
        ;
    }
    :host([open]) ws-options {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    ws-options {
        top: calc(var(--y) + var(--h));
        left: var(--x);
        width: var(--w);
        transform-origin: top center;
    }
    :host([direction="up"]) ws-options {
        top: unset;
        bottom: calc(100% - var(--y));
        transform-origin: bottom center;
    }

    value-display {
        display: grid;
        user-select: none;
        grid-template-columns: 1fr min-content;
        height: 100%;
    }
    value-display:focus {
        outline: none;
    }
    ws-sel-caret {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        padding-right: 0px;
        width: 24px;
    }
    ws-sel-caret::before {
        display: block;
        font-family: ws-icon-${C};
        content: attr(data-icon);
    }
    slot[name="selected"] {
        display: flex;
        align-items: center;
    }
    :host(:focus) {
        outline: -webkit-focus-ring-color auto 1px;
    }

    ws-popover {
        --anim-time: unset;
    }
</style>

<value-display tabindex="0">
    <slot name="selected">
        <ws-selected>No Selection</ws-selected>
    </slot>
    <ws-sel-caret data-icon="${C}"></ws-sel-caret>
</value-display>
<ws-popover>
    <slot slot="popover" name="options">
        <ws-options>
            <slot></slot>
        </ws-options>
    </slot>
</ws-popover>
`,j="ws-option";customElements.define(j,class extends HTMLElement{#a=null;get value(){return this.#a}set value(e){this.#a=e;const t=this.parentNode;null!==t&&t.value===e&&t.__childValueMatch?.(this)}}),customElements.define("ws-select",class extends HTMLElement{static formAssociated=!0;#a=null;#n=-1;#s=null;#i=null;#l=null;#c=null;#e=null;#d=null;#p(){return[...this.querySelectorAll(j)]}#u(e){const t=Array.from(e,(e=>[...e.addedNodes])).flat();if(!1===t.some((e=>e.tagName?.toLowerCase()===j)))return;const r=t.findLast((e=>e.tagName?.toLowerCase()===j&&!0===e.hasAttribute("selected")))??this.#s,o=this.#p();for(const e of o)e.removeAttribute("selected");this.selectedIndex=o.indexOf(r)}constructor(){super(),this.#e=this.attachShadow({mode:"closed",delegatesFocus:!0}),this.#e.append(T()),this.#c=this.#e.querySelector("ws-selected"),this.#l=this.#e.querySelector("ws-popover"),this.#d=this.#e.querySelector("value-display"),this.#l.sizeTarget=this,this.removeAttribute("open")}connectedCallback(){this.tabIndex=this.getAttribute("tabindex")??"0";const e=new MutationObserver(this.#u.bind(this));e.observe(this,{childList:!0,subtree:!0}),this.#i=e,this.role="combobox",this.addEventListener("click",(()=>{this.toggle(),this.#d.focus()}),{passive:!0}),this.#l.addEventListener("close",(()=>this.close())),this.#l.addEventListener("pointerdown",(e=>e.preventDefault())),this.#e.querySelector("slot[name='options']").addEventListener("pointerdown",(e=>e.preventDefault())),this.#e.querySelector("slot[name='options']").addEventListener("click",(e=>{const t=e.target.tagName?.toLowerCase();"ws-option"===t&&(this.selectedIndex=this.#p().indexOf(e.target),this.close(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0})))}))}disconnectedCallback(){this.#i.disconnect()}get value(){return this.#a}set value(e){this.#a=e;const t=this.#p(),r=t.find((t=>t.value===e||t.getAttribute("value")===e));this.selectedIndex=t.indexOf(r)}get selectedIndex(){return this.#n}set selectedIndex(e){this.#s?.removeAttribute("selected");const t=this.#p(),r=Math.min(e,t.length);this.#s=t[r]??null,this.#n=r,this.#s?.setAttribute("selected",""),this.#a=this.#s?.value??this.#s?.getAttribute("value")??this.#a;(this.querySelector("[slot=selected] ws-selected")??this.#c).innerHTML=this.#s?.getAttribute("preview")??this.#s?.innerHTML??this.getAttribute("blank")??"No Selection"}toggle(){null!==this.getAttribute("open")?this.close():this.open()}open(){this.setAttribute("open",""),this.#l.show();(this.querySelector("ws-options")??this.#e.querySelector("ws-options")).scrollTop=0,this.#s?.scrollIntoView()}close(){this.removeAttribute("open"),this.#l.hide()}__childValueMatch(e){const t=this.#p().indexOf(e);this.selectedIndex=t}}),d("ws-text")`
    ! &[title] {
        t.sz: @text-size-title;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[header] {
        t.sz: @text-size-header;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[subtitle] {
        disp: inline-block;
        t.sz: @text-size-subtitle;
        p: 0px 8px;
    }
    ! &[info] {
        disp: inline-block;
        t.sz: @text-size-info;
    }
`,d("ws-tabs")`
    @color: @primary;

    ${E("@layer-element","@layer-fill")}

    disp: grid;
    gr.cols.a: 1fr;
    gr.rows.a: 1fr;
    gr.flow: column;
    *user-select: none;
    gap: 4px;
`,d("label[tab]")`
    @fill: transparent;
    @text: @core-color;
    @active: @core-color;

    bg.c: @fill;
    t.c: @text;

    grid;
    gr.cols: 1fr;
    gr.rows: min-content 2px;
    gr.areas: "content" "border";
    pos: relative;

    ! & > input[type="radio"] {
        hide;
    }

    ! & > :where(*) {
        area: content;
        flex;
        fl.cn;
        p: 8px;
    }

    ! &::before {
        *content: "";
        pos: absolute;
        -y: 0px;
        x: 0px;
        w: 100%;
        h: 2px;
        area: border;
    }

    ! &:has(input[type="radio"]:checked) {
        @fill: var(--fill-color, transparent);
        @text: var(--text-color, @core-color);
        @active: unset;
        ! &::before {
            bg.c: @core-color;
        }
    }

    ${L}
`,d("ws-titlebar")`
    @border-size: 2px;
    @color: @primary;

    ${E("@layer-element","@layer-fill")}

    disp: grid;
    h.min: 52px;
    gr.cols: auto 1fr auto;
    gr.areas: "menu title action";
    *user-select: none;
    pos: relative;
    p: 0px 2px;

    t.c: @text;
    bg.c: @fill;

    b.y: @border-size solid @core-color;

    ! & > :where(*) {
        area: title;
    }
`,d("ws-toast")`
    @color: @primary;

    @fill: var(--fill-color, @background-element);
    @text: var(--text-color, @text-color-normal);

    t.c: @text;
    bg.c: @fill;

    pos: relative;
    disp: inline-grid;
    gr.cols: auto 1fr auto;
    gr.areas: "start content end";
    r: @base-radius;
    *user-select: none;
    b: 2px solid @color;
    h.min: 32px;
    z: +0;

    ! & > :where(*) {
        area: content;
    }
`,d("ws-toaster")`
    pos: fixed;
    z: var(--z-notif);
    disp: grid;
    gr.cols: fr;
    p: 0px;
    gap: 8px;
    h: min-content;
    w: 280px;

    ! &[pos^="top-"] {
        y: 20px;
    }
    ! &[pos^="center-"] {
        y: 50%;
        tf: translateY(-50%);
    }
    ! &[pos^="bottom-"] {
        -y: 20px;
    }

    ! &[pos$="-left"] {
        x: 20px;
    }
    ! &[pos$="-center"] {
        x: 50%;
        tf: translateX(-50%);
    }
    ! &[pos$="-right"] {
        -x: 20px;
    }
`,m("square-dashed","square-check-filled","circle","circle-check-filled","circle-filled");const I='\n    @color: var(--toggle-color, @primary);\n    @size: 20px;\n\n    @core-color: hsl(@color, @layer-element);\n\n    pos: relative;\n    w: @size;\n    h: @size;\n    appr: none;\n    m: 0px;\n    t.c: @core-color;\n    v.a: middle;\n\n    ! &::after {\n        *content: "";\n        pos: absolute;\n        t.sz: calc(@size - 2px);\n        *speak: none;\n        t.st: normal;\n        t.wt: 400;\n        t.var: normal;\n        t.tf: none;\n        y: 50%;\n        x: 50%;\n        w: @size;\n        h: @size;\n        tf: translate(-50%, -50%);\n        disp: flex;\n        fl.cross: center;\n        fl.main: center;\n        over: hidden;\n    }\n';d("input[data-ws][type=checkbox]:not([switch])")`
    ${I}

    ! &::after {
        font: ws-icon-square-dashed;
        *content: "square-dashed";
    }
    ! &:checked::after {
        font: ws-icon-square-check-filled;
        *content: "square-check-filled";
    }
`,d("input[data-ws][type=radio]")`
    ${I}

    ! &::after {
        font: ws-icon-circle;
        *content: "circle";
    }
    ! &:checked::after {
        font: ws-icon-circle-check-filled;
        *content: "circle-check-filled";
    }
`,d("input[data-ws][type=checkbox][switch]")`
    @color: @primary;
    @size: 20px;
    @anim-time: 100ms;

    appr: none;
    m: 0px;
    pos: relative;
    w: calc(@size * 2);
    h: @size;
    v.a: middle;

    ! &::before {
        *content: "";
        pos: absolute;
        inset: calc(@size / 4);
        b: 1px solid @color;
        r: calc(@size / 2);
        bg.c: @mono50;
        o: 0.5;
        tr: background-color @anim-time linear;
    }
    ! &:checked::before {
        bg.c: @color;
    }

    ! &::after {
        *content: "";
        pos: absolute;
        w: @size;
        h: @size;
        y: 0px;
        x: 0px;
        tr: left @anim-time linear, color @anim-time linear;
        bg.c: @mono100;
        r: @size;
    }
    ! &:checked::after {
        x: @size;
        bg.c: @color;
    }
`,d("label[data-ws][toggle]")`
    @color: @primary;
    @active-color: @mono;
    @toggle-color: @color;

    pos: relative;
    *user-select: none;
    over: hidden;
    b: 1px solid hsl(@active-color, @layer-border);
    bg.c: @background-element;
    r: @base-radius;
    p: 4px;

    disp: flex;
    fl.main: space-between;

    ! &:focus-within {
        @active-color: @color;
    }
`,d("*")`
    *box-sizing: border-box;
    *-webkit-tap-highlight-color: transparent;
    *border-width: 0px;
    *border-style: solid;
`,d("html, body")`
    *padding: 0px;
    *margin: 0px;
    *width: 100%;
    *height: 100%;
    *-webkit-tap-highlight-color: transparent;
    *-webkit-font-smoothing: antialiased;
`,d("@font-face",null)`
    *font-family: Tektur;
    *font-display: swap;
    *src:
        url(${p.origin}/font/tektur.woff2?v${p.version})
        format("woff2")
    ;
`,d("@font-face",null)`
    *font-family: Roboto;
    *font-display: swap;
    *src:
        url(${p.origin}/font/roboto.woff2?v${p.version})
        format("woff2")
    ;
`;const N=e=>{const t=(e=>{if(""===e||null===e)return;const t=c(o({raw:[e]})),a=b(t.join("\n"));if(x[a]=(x[a]??0)+1,x[a]>1)return a;const n=t.map((e=>e.replaceAll("&",`[data-wsid="${a}"]`)));return r.sheet.insertRule(`@layer ws.macro { ${n.join("\n")} }`,r.sheet.cssRules.length),a})(e.dataset?.ws??"");void 0!==t?e.dataset.wsid=t:delete e.dataset?.wsid};new MutationObserver((e=>{const t=new Set(Array.from(e,(e=>[e.target,...Array.from(e.addedNodes,(e=>[e,...e.querySelectorAll?.("*")||[]]))])).flat(3));for(const e of t)N(e)})).observe(document.body,{subtree:!0,attributes:!0,childList:!0,attributeFilter:["data-ws"]});for(const e of document.querySelectorAll("*"))N(e);export{d as component,w as localMacro,l as macro,m as preloadIcons,y as version,v as x};
