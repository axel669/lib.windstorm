var ws=function(){"use strict";function e(...e){const r=Reflect.construct(Error,e);return Reflect.setPrototypeOf(r,Reflect.getPrototypeOf(this)),r}e.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}}),Reflect.setPrototypeOf(e,Error);var r=[{name:"baseline",style:'@import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap);@import url(https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.13.0/tabler-icons.min.css);*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}:where([ws-x]){border-style:solid;border-width:0;border-color:var(--text-color-normal)}body,html{padding:0;margin:0;width:100%;height:100%;-webkit-tap-highlight-color:transparent}body[ws-x*="$theme["]{background-color:var(--background)}body[ws-x~="$app"]{overflow:hidden;position:fixed;touch-action:pan-x pan-y}'},{name:"avatar",style:"ws-avatar{--color:transparent;--size:36px;display:inline-flex;overflow:hidden;border-radius:500px;align-items:center;justify-content:center;width:var(--size);height:var(--size);background-color:var(--color);color:var(--text-color-fill);vertical-align:text-bottom}ws-avatar>img{width:100%}"},{name:"badge",style:"ws-badge{--color:var(--primary);position:relative;display:inline-grid;overflow:visible}ws-badge::after{position:absolute;content:attr(ws-text);right:-10px;top:0;transform:translateY(-50%);background-color:var(--color);pointer-events:none;border-radius:20px;padding:4px;min-width:20px;height:20px;box-sizing:border-box;text-align:center;font-size:var(--text-size-subtitle);color:var(--text-color-fill);line-height:14px;z-index:5}"},{name:"button",style:':is(label,a):where([ws-x~="$button"]),button:where([ws-x~="$flat"],[ws-x~="$fill"],[ws-x~="$outline"]){--color:var(--text-color-normal);--ripple-color:var(--ripple-normal);border:0 solid var(--color);color:var(--color);font-family:var(--font);background-color:transparent;border-radius:4px;cursor:pointer;padding:8px 16px;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;user-select:none}:is(label,a):where([ws-x~="$button"]):where(:not([disabled]))::after,button:where([ws-x~="$flat"],[ws-x~="$fill"],[ws-x~="$outline"]):where(:not([disabled]))::after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}:is(label,a):where([ws-x~="$button"]):where(:not([disabled])):active::after,button:where([ws-x~="$flat"],[ws-x~="$fill"],[ws-x~="$outline"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color)}:is(label,a):where([ws-x~="$button"]):where([disabled]),button:where([ws-x~="$flat"],[ws-x~="$fill"],[ws-x~="$outline"]):where([disabled]){opacity:.6;background-color:rgba(200,200,200,.4)}'},{name:"chip",style:'ws-chip{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;padding:4px 12px;user-select:none;vertical-align:text-bottom}ws-chip:where([ws-x~="$click"]){cursor:pointer;overflow:hidden;position:relative;user-select:none}ws-chip:where([ws-x~="$click"]):where(:not([disabled]))::after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}ws-chip:where([ws-x~="$click"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color)}'},{name:"control",style:'label:where([ws-x~="$control"]){--color:var(--default);--border-color:var(--default);position:relative;display:inline-grid;grid-template-areas:"label label label"" start control end""extra extra extra";grid-template-rows:minmax(0,min-content) auto minmax(0,min-content);grid-template-columns:minmax(0,min-content) auto minmax(0,min-content);border:1px solid var(--border-color);border-radius:4px;user-select:none;overflow:hidden}label:where([ws-x~="$control"]):where([ws-error])::after{content:attr(ws-error);grid-row:3;grid-column:span 3;padding:4px;font-size:var(--text-size-info);background-color:var(--danger-ripple)}label:where([ws-x~="$control"]):focus-within{--border-color:var(--color)}label:where([ws-x~="$control"]):focus-within:where([ws-x~="$flat"])>:is(input,select){outline:2px solid var(--ripple-color);outline-offset:-2px}label:where([ws-x~="$control"]) :is(input,select,textarea):disabled{background-color:var(--disabled-background)}label:where([ws-x~="$control"])>:where(select){--color:var(--text-color-normal);border-width:0;padding:8px;min-height:36px;background-color:transparent;color:var(--color);font:var(--font);font-size:var(--text-size-normal);cursor:pointer;background-color:var(--background-layer);grid-area:control}label:where([ws-x~="$control"])>:where(input,textarea):focus,label:where([ws-x~="$control"])>:where(select):focus{outline:0}label:where([ws-x~="$control"])>:where(select) optgroup,label:where([ws-x~="$control"])>:where(select) option{background-color:var(--background-layer);border-color:var(--background-layer);color:var(--text-color-normal);font-size:var(--text-size-normal);font-family:Arial}label:where([ws-x~="$control"])>:where(input,textarea){border-width:0;background:0 0;color:var(--text-normal-color);font-family:var(--font);min-width:24px;min-height:36px;width:100%;height:100%;grid-area:control;padding:4px;background-color:var(--background-layer)}label:where([ws-x~="$control"])>input[type=file]{position:relative;padding:0}label:where([ws-x~="$control"])>input[type=file]::file-selector-button{font-family:var(--font);height:100%;margin:0 4px 0 0;padding:4px;color:var(--text-normal-color);background-color:var(--background-layer);border-width:0;border-right:1px solid var(--border-color);text-decoration:underline}label:where([ws-x~="$control"])>:where([ws-x~="$text"]){grid-area:label;padding:4px;display:flex;flex-direction:column;align-items:start;border-bottom:var(--border-size, 1px) solid var(--border-color);border-right:var(--border-size, 1px) solid var(--border-color);color:var(--color);width:min-content;white-space:nowrap;border-bottom-right-radius:4px}label:where([ws-x~="$control"])>:where([ws-x~="$text"]):where([ws-hint])::after{font-size:var(--text-size-subtitle);content:attr(ws-hint);color:var(--text-color-secondary)}label:where([ws-x~="$control"])>:where([slot=start]){grid-area:start}label:where([ws-x~="$control"])>:where([slot=end]){grid-area:end}'},{name:"details",style:'details:where([ws-x]){--color:var(--default);border:0 solid var(--color);padding:4px;padding-left:calc(1em + 4px);border-radius:4px}details:where([ws-x])>summary{color:var(--color);position:relative;padding-left:1em;margin-left:-1em;cursor:pointer;user-select:none}details:where([ws-x])>summary::before{position:absolute;left:0;top:50%;bottom:0;width:1em;display:flex;align-items:center;justify-content:center;font-family:tabler-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;content:"";transform:translateY(-50%);transition:transform 100ms linear}details:where([ws-x])>summary::-webkit-details-marker,details:where([ws-x])>summary::marker{content:"";display:none}details:where([ws-x])[open]>summary::before{transform:translateY(-50%) rotate(90deg)}'},{name:"flex",style:"ws-flex{display:flex;flex-direction:column;gap:4px;padding:4px;overflow:hidden}ws-flex>*{flex-shrink:0}"},{name:"grid",style:"ws-grid{display:grid;overflow:hidden;gap:4px;padding:4px;grid-auto-rows:min-content}"},{name:"icon",style:"ws-icon{display:inline-block}ws-icon:where(:not(:empty))::before{margin-right:2px}ws-icon::before{font-family:tabler-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;display:contents;-webkit-font-smoothing:antialiased}"},{name:"link",style:"a:where([ws-x]){--color:var(--text-color-normal)}a:where([ws-x]),a:where([ws-x]):hover,a:where([ws-x]):visited{color:var(--color)}"},{name:"modal",style:'ws-modal{--text-color:var(--text-color-normal);position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.55);z-index:100;color:var(--text-color-normal);cursor:default;visibility:hidden;transition:visibility var(--anim-time, 250ms) linear}ws-modal>label:first-child{position:absolute;width:100%;height:100%;cursor:pointer}ws-modal:where([ws-x*="$show"]){visibility:visible!important}ws-modal:where([ws-x*="$show"])>:where([ws-x*="$action"]),ws-modal:where([ws-x*="$show"])>:where([ws-x*="$menu"]){transform:translateX(0)}ws-modal:where([ws-x*="$show"])>:where([ws-x*="$select"]){transform:translateX(-50%) translateY(0)}ws-modal:where([ws-x*="$show"])>:where([ws-x*="$dialog"]){opacity:1}input[type=checkbox]:not(:checked)+ws-modal{visibility:hidden}input[type=checkbox]:checked+ws-modal{visibility:visible}ws-modal>:where(:not(label:first-child)){position:absolute;min-width:15vw}ws-modal>:where(:not(label:first-child)):where([ws-x*="$menu"]){top:0;left:0;height:100%;transform:translateX(-100%);transition:transform var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x*="$action"]),input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x*="$menu"]){transform:translateX(0)}ws-modal>:where(:not(label:first-child)):where([ws-x*="$action"]){top:0;right:0;height:100%;transform:translateX(100%);transition:transform var(--anim-time, 250ms) linear}ws-modal>:where(:not(label:first-child)):where([ws-x*="$select"]){top:0;left:50%;transform:translateX(-50%) translateY(-100%);max-height:75vh;max-width:min(90vw,720px);transition:transform var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x*="$select"]){transform:translateX(-50%) translateY(0)}ws-modal>:where(:not(label:first-child)):where([ws-x*="$dialog"]){top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;transition:opacity var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x*="$dialog"]){opacity:1}'},{name:"notification",style:'ws-notification{--background-color:var(--background-layer);--color:var(--text-color-normal);background-color:var(--background-color);color:var(--color);padding:8px;display:inline-flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:4px;cursor:pointer;user-select:none;border:1px solid var(--text-color-secondary)}ws-notification[ws-x*="$color"]{background-color:var(--color);color:var(--text-color-fill)}'},{name:"paper",style:'ws-paper{--color:var(--layer-border-color);display:grid;border-radius:4px;box-shadow:0 2px 4px var(--shadow-color);overflow:hidden;grid-template-columns:1fr;grid-template-rows:min-content auto min-content;grid-template-areas:"header""content""footer";background-color:var(--background-layer)}ws-paper::before{content:"";grid-area:header}ws-paper::after{content:"";grid-area:footer;pointer-events:none}ws-paper>:where([slot=content]){grid-area:content}ws-paper>:where([slot=header]){grid-area:header;font-size:var(--text-size-header)}ws-paper>:where([slot=footer]){grid-area:footer}'},{name:"popover",style:'ws-popover{display:grid;position:relative}ws-popover:not(:visibile)>:where([slot=content]){display:none}ws-popover>:where([slot=content]){position:absolute;z-index:25;display:none}ws-popover[ws-x~="$show"]>:where([slot=content]){display:block}ws-popover>input:where([type=checkbox]):checked+:where([slot=content]){display:block}ws-popover>input:where([type=checkbox]):not(:checked)+:where([slot=content]){display:none}'},{name:"progress",style:'label[ws-x~="$progress"]{--color:var(--text-color-normal);--border-size:0px;display:inline-grid;grid-template-columns:1fr;grid-template-rows:min-content auto;border-radius:4px;overflow:hidden;user-select:none}label[ws-x~="$progress"][ws-x~="$row"]{grid-template-columns:min-content auto;grid-template-rows:1fr}label[ws-x~="$progress"]>[ws-x~="$text"]{padding:4px;display:flex;border-bottom:var(--border-size, 1px) solid var(--color);color:var(--color)}label[ws-x~="$progress"]>progress{min-height:20px;height:100%;width:100%;border:0;background-color:var(--background-layer)}label[ws-x~="$progress"]>progress::-moz-progress-bar{background-color:var(--color);border-radius:0}label[ws-x~="$progress"]>progress::-webkit-progress-bar{background-color:var(--background-layer);border-radius:0}label[ws-x~="$progress"]>progress::-webkit-progress-value{background-color:var(--color);border-radius:0}'},{name:"screen",style:'ws-screen{--stack:0;--screen-width:min(720px, 100%);display:grid;width:calc(100% - var(--sub-pixel-offset));height:calc(100% - 1px);overflow:hidden;position:fixed;top:0;left:0;z-index:200;background-color:rgba(0,0,0,.4);grid-template-columns:auto calc(var(--screen-width) - 16px*var(--stack)) auto;grid-template-areas:". content .";padding-top:calc(8px*var(--stack))}ws-screen[ws-x~="$left"]{grid-template-columns:calc(8px*var(--stack)) calc(var(--screen-width) - 16px*var(--stack)) auto}ws-screen>:where(*){grid-area:content;height:100%;overflow:hidden}'},{name:"spinner",style:"ws-circle-spinner,ws-hexagon-spinner{--size:100px;--color:var(--primary);--ripple-color:var(--primary-ripple);width:var(--size);height:var(--size);display:inline-block}"},{name:"table",style:'table:where([ws-x]){--border-color:var(--color);border-spacing:0;position:relative}table:where([ws-x]) thead :is(td,th){color:var(--color);font-weight:700}table:where([ws-x]):where([ws-x~="$header-fill"]) thead :is(td,th){background-color:var(--color);color:var(--text-color-fill)}table:where([ws-x]) :is(td,th){padding:8px;white-space:nowrap;background-color:var(--background-layer);border-bottom:1px solid var(--color)}table:where([ws-x]) :where(th:first-child){position:sticky;left:0;z-index:10}table:where([ws-x]) :where(td:first-child,th:first-child){border-left:1px solid var(--color)}table:where([ws-x]) :where(td:last-child,th:last-child){border-right:1px solid var(--color)}'},{name:"tabs",style:'ws-tabs{--color:var(--primary);display:flex;flex-direction:row;justify-content:stretch;align-items:stretch;user-select:none;cursor:pointer;gap:2px;padding:2px}ws-tabs[ws-x~="$vert"]{flex-direction:column;justify-content:flex-start}ws-tabs[ws-x~="$vert"]>ws-tab{border-bottom-width:0;border-right-width:2px;flex-grow:0}ws-tabs[ws-x~="$solid"]>ws-tab:where([ws-x~="$tab-selected"]){color:var(--text-color-fill);background-color:var(--color)}ws-tabs>ws-tab{display:flex;justify-content:center;align-items:center;flex-grow:1;padding:8px;border-color:var(--text-color-secondary);border-width:0 0 2px;border-style:solid}ws-tabs>ws-tab:where([ws-x~="$tab-selected"]){color:var(--color);border-color:var(--color)}'},{name:"titlebar",style:'ws-titlebar{--text-color:var(--text-color-normal);display:grid;height:48px;grid-template-columns:min-content auto min-content;grid-template-areas:"menu title action";user-select:none}ws-titlebar:where(:not([ws-x~="$fill"])){border-bottom:1px solid var(--color, var(--text-color-normal))}ws-titlebar>:where([slot=title]){grid-area:title}ws-titlebar>:where([slot=action]),ws-titlebar>:where([slot=menu]){grid-area:menu;--text-color-normal:var(--text-color)}ws-titlebar>:where([slot=action]){grid-area:action}'},{name:"toaster",style:'ws-toaster{position:fixed;z-index:100;display:inline-flex;flex-direction:column;padding:4px;gap:4px;height:min-content!important}ws-toaster[ws-x~="$tl"]{top:0;left:0}ws-toaster[ws-x~="$tc"]{top:0;left:50%;transform:translateX(-50%)}ws-toaster[ws-x~="$tr"]{top:0;right:0}ws-toaster[ws-x~="$ml"]{top:50%;left:0;transform:translateY(-50%)}ws-toaster[ws-x~="$mr"]{top:50%;right:0;transform:translateY(-50%)}ws-toaster[ws-x~="$bl"]{bottom:0;left:0}ws-toaster[ws-x~="$bc"]{bottom:0;left:50%;transform:translateX(-50%)}ws-toaster[ws-x~="$br"]{bottom:0;right:0}'},{name:"toggle",style:'label:where([ws-x~="$toggle"]){--color:var(--default);--ripple-color:var(--default-ripple);--border-color:var(--default);cursor:pointer;display:inline-flex;align-items:center;justify-content:space-between;padding:4px;border-radius:4px;border:1px solid var(--border-color);overflow:hidden;position:relative;user-select:none}label:where([ws-x~="$toggle"]):where(:not([disabled]))::after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}label:where([ws-x~="$toggle"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color)}label:where([ws-x~="$toggle"]):focus-within{--border-color:var(--color)}label:where([ws-x~="$toggle"]):focus-within:where([ws-x~="$flat"]){outline:2px solid var(--ripple-color);outline-offset:-2px}label:where([ws-x~="$toggle"])>input{position:relative;min-width:20px;min-height:20px;-webkit-appearance:none;appearance:none;margin:0}label:where([ws-x~="$toggle"])>input:focus{outline:0}label:where([ws-x~="$toggle"])>input:disabled{--color:var(--disabled-background)}label:where([ws-x~="$toggle"])>input:checked{color:var(--text-color-invert)}label:where([ws-x~="$toggle"])>input:checked::after{background-color:var(--color)}label:where([ws-x~="$toggle"])>input::after{content:"";position:absolute;font-size:18px;font-family:tabler-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;top:50%;left:50%;width:20px;height:20px;transform:translate(-50%,-50%);display:flex;border:1px solid var(--color);border-radius:4px;align-items:center;justify-content:center;overflow:hidden}label:where([ws-x~="$toggle"])>input[type=radio]::after{border-radius:50%}label:where([ws-x~="$toggle"])>input[type=checkbox]:disabled,label:where([ws-x~="$toggle"])>input[type=radio]:disabled::after{background-color:var(--disabled-background)}label:where([ws-x~="$toggle"])>input[type=radio]:checked::after{content:""}label:where([ws-x~="$toggle"])>input[type=checkbox]:checked::after{content:""}label:where([ws-x~="$toggle"])>input[type=checkbox]:where([ws-x~="$switch"]){position:relative;border:1px solid var(--color);height:24px;width:44px;border-radius:12px}label:where([ws-x~="$toggle"])>input[type=checkbox]:where([ws-x~="$switch"])::after{content:"";background-color:var(--text-color-secondary);position:absolute;width:18px;height:18px;border-radius:10px;top:2px;left:2px;transform:none;border-width:0;transition:left 100ms linear,color 100ms linear}label:where([ws-x~="$toggle"])>input[type=checkbox]:where([ws-x~="$switch"]):checked::after{background-color:var(--color);left:22px}'},{name:"tooltip",style:'ws-tooltip{position:relative;display:inline-grid;overflow:visible}ws-tooltip::after{position:absolute;content:attr(ws-text);left:50%;bottom:calc(100% + 2px);transform:translateX(-50%);height:20px;background-color:var(--background-layer);opacity:0;transition:opacity 100ms linear;pointer-events:none;border-radius:4px;border:1px solid var(--text-color-secondary);padding:2px 8px;font-size:var(--text-size-subtitle);width:60%;display:flex;align-items:center;justify-content:center;z-index:5}ws-tooltip:hover::after{opacity:1}ws-tooltip[ws-x~="$bottom"]::after{bottom:unset;top:calc(100% + 2px)}'},{name:"dark",style:'[ws-x~="$theme[dark]"]{--font:Roboto;--text-light:white;--text-dark:black;--text-color-normal:var(--text-light);--text-color-secondary:#a0a0a0;--text-color-invert:var(--text-dark);--text-color-fill:var(--text-dark);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#161616;--background-layer:#333333;--layer-border-width:1px;--layer-border-color:#505050;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#00aaff;--primary-ripple:#00aaff60;--secondary:#2fbc2f;--secondary-ripple:#2fbc2f60;--danger:#df5348;--danger-ripple:#df534860;--warning:#ffff00;--warning-ripple:#ffff0060;--accent:#ff4dff;--accent-ripple:#ff4dff60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-light);--ripple-invert:var(--ripple-dark);--shadow-color:rgb(0, 0, 0, 0.25);--disabled-background:#606060;color-scheme:dark}'},{name:"light",style:'[ws-x~="$theme[light]"]{--font:Roboto;--text-light:white;--text-dark:black;--text-color-normal:var(--text-dark);--text-color-secondary:#505050;--text-color-invert:var(--text-light);--text-color-fill:var(--text-light);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#e9e9e9;--background-layer:#ffffff;--layer-border-width:1px;--layer-border-color:#aaaaaa;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#1d62d5;--primary-ripple:#1d62d560;--secondary:#128f12;--secondary-ripple:#128f1260;--danger:#F44336;--danger-ripple:#F4433660;--warning:#db990d;--warning-ripple:#db990d60;--accent:#cf00cf;--accent-ripple:#cf00cf60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-dark);--ripple-invert:var(--ripple-light);--shadow-color:rgb(0, 0, 0, 0.25);--disabled-background:#c7c7c7}'},{name:"tron",style:'[ws-x~="$theme[tron]"]{--font:Share Tech Mono;--text-light:white;--text-dark:black;--text-color-normal:var(--text-light);--text-color-secondary:#a0a0a0;--text-color-invert:var(--text-dark);--text-color-fill:var(--text-dark);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#030303;--background-layer:#04080C;--layer-border-width:1px;--layer-border-color:#00EEEE;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#00aaff;--primary-ripple:#00aaff60;--secondary:#2fbc2f;--secondary-ripple:#2fbc2f60;--danger:#df5348;--danger-ripple:#df534860;--warning:#ffff00;--warning-ripple:#ffff0060;--accent:#ff4dff;--accent-ripple:#ff4dff60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-light);--ripple-invert:var(--ripple-dark);--shadow-color:rgb(255, 255, 255, 0.25);--disabled-background:#606060;color-scheme:dark}'}];const t=document.head,o=Math.ceil(screen.width*devicePixelRatio*10)%10>=5;r.push({name:"correction",style:`body {--sub-pixel-offset:${o?1:0}px}`});for(const{name:e,style:o}of r){const r=document.createElement("style");r.setAttribute("ws:name",e),r.innerHTML=o,t.appendChild(r)}const a=document.createElement("style");document.head.append(a);const i=a.sheet;a.setAttribute("ws:name","windstorm-generated");const l=(...e)=>e.join(";"),n=(e,r)=>{const t=(e=>null==e?null:"string"!=typeof e?e:e.replace(/\&([\w\d_\-]+)/g,((e,r)=>`var(--${r})`)))(r);return null===t?"":`${e}:${t}`};const s={...{bg:e=>n("background",e),"bg.c":e=>n("background-color",e),b:e=>n("border",e),"b.c":e=>n("border-color",e),"b.s":e=>n("border-style",e),"b.w":e=>n("border-width",e),"b.b":e=>n("border-bottom",e),"b.b.c":e=>n("border-bottom-color",e),"b.b.s":e=>n("border-bottom-style",e),"b.b.w":e=>n("border-bottom-width",e),"b.t":e=>n("border-top",e),"b.t.c":e=>n("border-top-color",e),"b.t.s":e=>n("border-top-style",e),"b.t.w":e=>n("border-top-width",e),"b.l":e=>n("border-left",e),"b.l.c":e=>n("border-left-color",e),"b.l.s":e=>n("border-left-style",e),"b.l.w":e=>n("border-left-width",e),"b.r":e=>n("border-right",e),"b.r.c":e=>n("border-right-color",e),"b.r.s":e=>n("border-right-style",e),"b.r.w":e=>n("border-right-width",e),c:e=>n("color",e),col:e=>n("grid-column",e),cur:e=>n("cursor",e),disp:e=>n("disp",e),"fl.cross":e=>n("align-items",e),"fl.dir":e=>n("flex-direction",e),"fl.main":e=>n("justify-content",e),"fl.wr":e=>n("flex-wrap",e),font:e=>n("font-family",e),gap:e=>n("gap",e),"gr.cols":e=>n("grid-template-columns",e),"gr.cols.a":e=>n("grid-auto-columns",e),"gr.flow":e=>n("grid-auto-flow",e),"gr.rows":e=>n("grid-template-rows",e),"gr.rows.a":e=>n("grid-auto-rows",e),h:e=>n("height",e),"h.min":e=>n("min-height",e),"h.max":e=>n("max-height",e),inset:e=>l(n("top",e),n("left",e),n("bottom",e),n("right",e)),"inset.x":e=>l(n("left",e),n("right",e)),"inset.y":e=>l(n("top",e),n("bottom",e)),m:e=>n("margin",e),"m.b":e=>n("margin-bottom",e),"m.l":e=>n("margin-left",e),"m.r":e=>n("margin-right",e),"m.t":e=>n("margin-top",e),over:e=>n("overflow",e),"over.x":e=>n("overflow-x",e),"over.y":e=>n("overflow-y",e),p:e=>n("padding",e),"p.b":e=>n("padding-bottom",e),"p.l":e=>n("padding-left",e),"p.r":e=>n("padding-right",e),"p.t":e=>n("padding-top",e),"p.x":e=>l(n("padding-left",e),n("padding-right",e)),"p.y":e=>l(n("padding-top",e),n("padding-bottom",e)),pos:e=>n("position",e),r:e=>n("border-radius",e),"r.b":e=>l(n("border-bottom-left-radius",e),n("border-bottom-right-radius",e)),"r.bl":e=>n("border-bottom-left-radius",e),"r.br":e=>n("border-bottom-right-radius",e),"r.l":e=>l(n("border-top-left-radius",e),n("border-bottom-left-radius",e)),"r.r":e=>l(n("border-top-right-radius",e),n("border-bottom-right-radius",e)),"r.t":e=>l(n("border-top-left-radius",e),n("border-top-right-radius",e)),"r.tl":e=>n("border-top-left-radius",e),"r.tr":e=>n("border-top-right-radius",e),row:e=>n("grid-row",e),sel:e=>n("user-select",e),"sh.box":e=>n("box-shadow",e),"sh.text":e=>n("text-shadow",e),"t.a":e=>n("text-align",e),"t.br":e=>n("word-break",e),"t.c":e=>n("color",e),"t.dec":e=>n("text-decoration",e),"t.lh":e=>n("line-height",e),"t.over":e=>n("text-overflow",e),"t.sz":e=>n("text-size",e),"t.tf":e=>n("text-transform",e),"t.ws":e=>n("white-space",e),"t.wt":e=>n("text-weight",e),tf:e=>n("transform",e),tr:e=>n("transition",e),vis:e=>n("visibility",e),w:e=>n("width",e),"w.min":e=>n("min-width",e),"w.max":e=>n("max-width",e),x:e=>n("left",e),"-x":e=>n("right",e),y:e=>n("top",e),"-y":e=>n("bottom",e),z:e=>n("z-index",e)},flex:(e="column")=>l(n("display","flex"),n("flex-direction",e)),grid:(e="row")=>l(n("display","grid"),n("grid-auto-flow",e)),hide:()=>n("visibility","hidden"),$adorn:()=>l(n("display","flex"),n("justify-content","center"),n("align-items","center"),n("padding","2px")),$color:e=>l(n("--color",`&${e}`),n("--ripple-color",`&${e}-ripple`)),$compact:()=>n("padding","0px 8px"),$fill:()=>l(n("--ripple-color","&ripple-dark !important"),n("--text-color","&text-color-fill"),n("background-color","&color"),n("color","&text-color-fill")),$flat:()=>l(n("border-width","0px"),n("--border-size","0px")),$outline:()=>l(n("border-width","1px"),n("border-color","&color")),$subtitle:()=>l(n("font-size","&text-size-subtitle"),n("display","flex"),n("flex-direction","column"),n("justify-content","center"),n("padding","0px 4px")),$title:()=>l(n("font-size","&text-size-title"),n("font-weight","700"),n("display","flex"),n("flex-direction","column"),n("justify-content","center"),n("padding","4px")),$theme:()=>l(n("color","&text-color-normal"),n("font-family","&font"),n("font-size","&text-size-normal"))},d=document.createElement("template");d.innerHTML='\n<style>\n@keyframes hi{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}\ncircle{animation-name:hi;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:50% 50%;}\ncircle:nth-child(1){animation-duration:4s;}\ncircle:nth-child(2){animation-duration:3s;animation-direction:reverse;}\ncircle:nth-child(3){animation-duration:2s;}\n</style>\n<svg style="width:var(--size);height:var(--size)" viewBox="0 0 100 100"><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="48" stroke-dasharray="0 37.7 75.4 75.4 75.4 75.4"/><circle stroke="var(--ripple-color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="40" stroke-dasharray="0 31.4 62.83 62.83 62.83 62.83"/><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="32" stroke-dasharray="0 12.57 25.13 25.13 25.13 25.13 25.13 25.13 25.13 25.13"/></svg>',customElements.define("ws-circle-spinner",class extends HTMLElement{constructor(){super();const e=d.content.cloneNode(!0);this.attachShadow({mode:"closed"}).appendChild(e)}});const c=document.createElement("template");c.innerHTML='\n<style>\n@keyframes hi{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}\npath{animation-name:hi;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:50% 50%;}\npath:nth-child(1){animation-duration:3s;}\npath:nth-child(2){animation-duration:2s;animation-direction:reverse;}\npath:nth-child(3){animation-duration:1s;}\n</style><svg style="width: var(--size); height: var(--size);" viewBox="0 0 100 100"><path stroke="var(--color)" stroke-width="4" fill="none" d="M91.57 26v48L50 98 8.43 74V26L50 2l41.57 24Z"/><path stroke="var(--ripple-color)" stroke-width="4" fill="none" d="M81.177 32v36L50 86 18.823 68V32L50 14l31.177 18Z"/><path stroke="var(--color)" stroke-width="4" fill="none" d="M70.785 38v24L50 74 29.215 62V38L50 26l20.785 12Z"/></svg>',customElements.define("ws-hexagon-spinner",class extends HTMLElement{constructor(){super();const e=c.content.cloneNode(!0);this.attachShadow({mode:"closed"}).appendChild(e)}});const p={},w=e=>{const r=e[0];if(!0===p[r])return;const{name:t,mods:o,content:a}=e.groups,l=`[ws-x*="${r}"]${o}`,d=t.startsWith("&")?(e=>r=>n(`--${e.slice(1)}`,r))(t):s[t];if(void 0===d){if(!0===t.startsWith("$"))return;return void console.error(`No function found for "${t}"`)}const c=a?.replace(/\&([\w\-]+)/g,"var(--$1)"),w=`${l}{${d(c||void 0)}}`;i.insertRule(w,i.cssRules.length),p[r]=!0},h=e=>{if(void 0===e.tagName)return;const r=e.getAttribute("ws-x"),t=r?.matchAll(b)??[];for(const e of t)w(e)},b=/(?<name>[@\$\&\w\-\.]+)(?<mods>(:[^:\[]+)*)(\[(?<content>.+?)\])?/g,x={childList(e){0!==e.addedNodes.length&&e.addedNodes.forEach((e=>{if(void 0===e.tagName)return;[e,...e.querySelectorAll("*")].forEach(h)}))},attributes(e){h(e.target)}};new MutationObserver((e=>e.forEach((e=>x[e.type](e))))).observe(document.body,{subtree:!0,attributes:!0,childList:!0,attributeFilter:["ws-x"]});return[document.body,...document.body.querySelectorAll("*")].forEach(h),{rules:l,prop:n,x:e=>Object.entries(e).reduce(((e,[r,t])=>{if(null==t||!1===t)return e;const o=!0===t?r:`${r}[${t}]`;return e.push(o),e}),[]).join(" "),custom(r,t){if(void 0!==s[r])throw new e(`"${r}" is already defined`);s[r]=t}}}();