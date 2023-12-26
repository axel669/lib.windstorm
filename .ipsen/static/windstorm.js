var ws = (function () {
    'use strict';

    var componentStyles = [{"name":"baseline","style":"@import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap);@import url(https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.13.0/tabler-icons.min.css);*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}:where([ws-x]){border-style:solid;border-width:0;border-color:var(--text-color-normal)}body,html{padding:0;margin:0;width:100%;height:100%;-webkit-tap-highlight-color:transparent}body[ws-x*=\"@theme:\"]{background-color:var(--background)}[ws-x*=\"@theme:\"]{color:var(--text-color-normal);font-family:var(--font);font-size:var(--font-size-normal)}body[ws-x~=\"@app\"]{overflow:hidden;position:fixed;touch-action:pan-x pan-y}"},{"name":"avatar","style":"ws-avatar{--color:transparent;--size:36px;display:inline-flex;overflow:hidden;border-radius:500px;align-items:center;justify-content:center;width:var(--size);height:var(--size);background-color:var(--color);color:var(--text-color-fill);vertical-align:text-bottom}ws-avatar>img{width:100%}"},{"name":"badge","style":"ws-badge{--color:var(--primary);position:relative;display:inline-grid;overflow:visible}ws-badge::after{position:absolute;content:attr(ws-text);right:-10px;top:0;transform:translateY(-50%);background-color:var(--color);pointer-events:none;border-radius:20px;padding:4px;min-width:20px;height:20px;box-sizing:border-box;text-align:center;font-size:var(--text-size-subtitle);color:var(--text-color-fill);line-height:14px;z-index:5}"},{"name":"button","style":":is(label,a):where([ws-x~=\"@button\"]),button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]){--color:var(--text-color-normal);--ripple-color:var(--ripple-normal);border:0 solid var(--color);color:var(--color);font-family:var(--font);background-color:transparent;border-radius:4px;cursor:pointer;padding:8px 16px;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;user-select:none}:is(label,a):where([ws-x~=\"@button\"]):where(:not([disabled]))::after,button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]):where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}:is(label,a):where([ws-x~=\"@button\"]):where(:not([disabled])):active::after,button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color)}:is(label,a):where([ws-x~=\"@button\"]):where([disabled]),button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]):where([disabled]){opacity:.6;background-color:rgba(200,200,200,.4)}"},{"name":"chip","style":"ws-chip{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;padding:4px 12px;user-select:none;vertical-align:text-bottom}ws-chip:where([ws-x~=\"[$click]\"]){cursor:pointer;overflow:hidden;position:relative;user-select:none}ws-chip:where([ws-x~=\"[$click]\"]):where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}ws-chip:where([ws-x~=\"[$click]\"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color)}"},{"name":"control","style":"label:where([ws-x~=\"[$control]\"]){--color:var(--default);--border-color:var(--default);position:relative;display:inline-grid;grid-template-areas:\"label label label\"\" start control end\"\"extra extra extra\";grid-template-rows:minmax(0,min-content) auto minmax(0,min-content);grid-template-columns:minmax(0,min-content) auto minmax(0,min-content);border:1px solid var(--border-color);border-radius:4px;user-select:none;overflow:hidden}label:where([ws-x~=\"[$control]\"]):where([ws-error])::after{content:attr(ws-error);grid-row:3;grid-column:span 3;padding:4px;font-size:var(--text-size-info);background-color:var(--danger-ripple)}label:where([ws-x~=\"[$control]\"]):focus-within{--border-color:var(--color)}label:where([ws-x~=\"[$control]\"]):focus-within:where([ws-x~=\"[$flat]\"])>:is(input,select){outline:2px solid var(--ripple-color);outline-offset:-2px}label:where([ws-x~=\"[$control]\"]) :is(input,select,textarea):disabled{background-color:var(--disabled-background)}label:where([ws-x~=\"[$control]\"])>:where(select){--color:var(--text-color-normal);border-width:0;padding:8px;min-height:36px;background-color:transparent;color:var(--color);font:var(--font);font-size:var(--text-size-normal);cursor:pointer;grid-area:control}label:where([ws-x~=\"[$control]\"])>:where(input,textarea):focus,label:where([ws-x~=\"[$control]\"])>:where(select):focus{outline:0}label:where([ws-x~=\"[$control]\"])>:where(select) optgroup,label:where([ws-x~=\"[$control]\"])>:where(select) option{background-color:var(--background-layer);border-color:var(--background-layer);color:var(--text-color-normal);font-size:var(--text-size-normal);font-family:Arial}label:where([ws-x~=\"[$control]\"])>:where(input,textarea){border-width:0;background:0 0;color:var(--text-normal-color);font-family:var(--font);min-width:24px;min-height:36px;width:100%;height:100%;grid-area:control;padding:4px}label:where([ws-x~=\"[$control]\"])>input[type=file]{position:relative;padding:0}label:where([ws-x~=\"[$control]\"])>input[type=file]::file-selector-button{font-family:var(--font);height:100%;margin:0 4px 0 0;padding:4px;color:var(--text-normal-color);background-color:var(--background-layer);border-width:0;border-right:1px solid var(--border-color);text-decoration:underline}label:where([ws-x~=\"[$control]\"])>:where([ws-x~=\"[$text]\"]){grid-area:label;padding:4px;display:flex;flex-direction:column;align-items:start;border-bottom:var(--border-size, 1px) solid var(--border-color);border-right:var(--border-size, 1px) solid var(--border-color);color:var(--color);width:min-content;white-space:nowrap;border-bottom-right-radius:4px}label:where([ws-x~=\"[$control]\"])>:where([ws-x~=\"[$text]\"]):where([ws-hint])::after{font-size:var(--text-size-subtitle);content:attr(ws-hint);color:var(--text-color-secondary)}label:where([ws-x~=\"[$control]\"])>:where([slot=start]){grid-area:start}label:where([ws-x~=\"[$control]\"])>:where([slot=end]){grid-area:end}"},{"name":"details","style":"details:where([ws-x]){--color:var(--default);border:0 solid var(--color);padding:4px;padding-left:calc(1em + 4px);border-radius:4px}details:where([ws-x])>summary{color:var(--color);position:relative;padding-left:1em;margin-left:-1em;cursor:pointer;user-select:none}details:where([ws-x])>summary::before{position:absolute;left:0;top:50%;bottom:0;width:1em;display:flex;align-items:center;justify-content:center;font-family:tabler-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;content:\"\";transform:translateY(-50%);transition:transform 100ms linear}details:where([ws-x])>summary::-webkit-details-marker,details:where([ws-x])>summary::marker{content:\"\";display:none}details:where([ws-x])[open]>summary::before{transform:translateY(-50%) rotate(90deg)}"},{"name":"flex","style":"ws-flex{display:flex;flex-direction:column;gap:4px;padding:4px;overflow:hidden}ws-flex>*{flex-shrink:0}"},{"name":"grid","style":"ws-grid{display:grid;overflow:hidden;gap:4px;padding:4px;grid-auto-rows:min-content}"},{"name":"icon","style":"ws-icon{display:inline-block}ws-icon:where(:not(:empty))::before{margin-right:2px}ws-icon::before{font-family:tabler-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;display:contents;-webkit-font-smoothing:antialiased}"},{"name":"link","style":"a:where([ws-x]){--color:var(--text-color-normal)}a:where([ws-x]),a:where([ws-x]):hover,a:where([ws-x]):visited{color:var(--color)}"},{"name":"modal","style":"ws-modal{--text-color:var(--text-color-normal);position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.55);z-index:100;color:var(--text-color-normal);cursor:default;visibility:hidden;transition:visibility var(--anim-time, 250ms) linear}ws-modal>label:first-child{position:absolute;width:100%;height:100%;cursor:pointer}ws-modal[ws-x~=\"[$show]\"]{visibility:visible!important}ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"[$action]\"]),ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"[$menu]\"]){transform:translateX(0)}ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"[$select]\"]){transform:translateX(-50%) translateY(0)}ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"[$dialog]\"]){opacity:1}input[type=checkbox]:not(:checked)+ws-modal{visibility:hidden}input[type=checkbox]:checked+ws-modal{visibility:visible}ws-modal>:where(:not(label:first-child)){position:absolute;min-width:15vw}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$menu]\"]){top:0;left:0;height:100%;transform:translateX(-100%);transition:transform var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$action]\"]),input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$menu]\"]){transform:translateX(0)}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$action]\"]){top:0;right:0;height:100%;transform:translateX(100%);transition:transform var(--anim-time, 250ms) linear}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$select]\"]){top:0;left:50%;transform:translateX(-50%) translateY(-100%);max-height:75vh;max-width:min(90vw,720px);transition:transform var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$select]\"]){transform:translateX(-50%) translateY(0)}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$dialog]\"]){top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;transition:opacity var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"[$dialog]\"]){opacity:1}"},{"name":"notification","style":"ws-notification{--background-color:var(--background-layer);--color:var(--text-color-normal);background-color:var(--background-color);color:var(--color);padding:8px;display:inline-flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:4px;cursor:pointer;user-select:none;border:1px solid var(--text-color-secondary)}ws-notification[ws-x~=\"[$color\"]{background-color:var(--color);color:var(--text-color-fill)}"},{"name":"paper","style":"ws-paper{--color:var(--layer-border-color);display:grid;border-radius:4px;box-shadow:0 2px 4px var(--shadow-color);overflow:hidden;grid-template-columns:1fr;grid-template-rows:min-content auto min-content;grid-template-areas:\"header\"\"content\"\"footer\";background-color:var(--background-layer)}ws-paper::before{content:\"\";grid-area:header}ws-paper::after{content:\"\";grid-area:footer;pointer-events:none}ws-paper>:where([slot=content]){grid-area:content}ws-paper>:where([slot=header]){grid-area:header;font-size:var(--text-size-header)}ws-paper>:where([slot=footer]){grid-area:footer}"},{"name":"popover","style":"ws-popover{display:grid;position:relative}ws-popover:not(:visibile)>:where([slot=content]){display:none}ws-popover>:where([slot=content]){position:absolute;z-index:25;display:none}ws-popover[ws-x~=\"[$show]\"]>:where([slot=content]){display:block}ws-popover>input:where([type=checkbox]):checked+:where([slot=content]){display:block}ws-popover>input:where([type=checkbox]):not(:checked)+:where([slot=content]){display:none}"},{"name":"progress","style":"label[ws-x~=\"[$progress]\"]{--color:var(--text-color-normal);--border-size:0px;display:inline-grid;grid-template-columns:1fr;grid-template-rows:min-content auto;border-radius:4px;overflow:hidden;user-select:none}label[ws-x~=\"[$progress]\"][ws-x~=\"[$row]\"]{grid-template-columns:min-content auto;grid-template-rows:1fr}label[ws-x~=\"[$progress]\"]>[ws-x~=\"[$text]\"]{padding:4px;display:flex;border-bottom:var(--border-size, 1px) solid var(--color);color:var(--color)}label[ws-x~=\"[$progress]\"]>progress{min-height:20px;height:100%;width:100%;border:0;background-color:var(--background-layer)}label[ws-x~=\"[$progress]\"]>progress::-moz-progress-bar{background-color:var(--color);border-radius:0}label[ws-x~=\"[$progress]\"]>progress::-webkit-progress-bar{background-color:var(--background-layer);border-radius:0}label[ws-x~=\"[$progress]\"]>progress::-webkit-progress-value{background-color:var(--color);border-radius:0}"},{"name":"screen","style":"ws-screen{--stack:0;--screen-width:min(720px, 100%);display:grid;width:calc(100% - var(--sub-pixel-offset));height:calc(100% - 1px);overflow:hidden;position:fixed;top:0;left:0;z-index:200;background-color:rgba(0,0,0,.4);grid-template-columns:auto calc(var(--screen-width) - 16px*var(--stack)) auto;grid-template-areas:\". content .\";padding-top:calc(8px*var(--stack))}ws-screen[ws-x~=\"[$left]\"]{grid-template-columns:calc(8px*var(--stack)) calc(var(--screen-width) - 16px*var(--stack)) auto}ws-screen>:where(*){grid-area:content;height:100%;overflow:hidden}"},{"name":"spinner","style":"ws-circle-spinner,ws-hexagon-spinner{--size:100px;--color:var(--primary);--ripple-normal:var(--primary-ripple);width:var(--size);height:var(--size);display:inline-block}"},{"name":"table","style":"table:where([ws-x]){--border-color:var(--color);border-spacing:0;position:relative;border-top:1px solid var(--color)}table:where([ws-x]) thead :is(td,th){color:var(--color);font-weight:700}table:where([ws-x]):where([ws-x~=\"[$header-fill]\"]) thead :is(td,th){background-color:var(--color);color:var(--text-color-fill)}table:where([ws-x]) :is(td,th){padding:8px;white-space:nowrap;background-color:var(--background-layer);border-bottom:1px solid var(--color)}table:where([ws-x]) :where(th:first-child){position:sticky;left:0;z-index:10}table:where([ws-x]) :where(td:first-child,th:first-child){border-left:1px solid var(--color)}table:where([ws-x]) :where(td:last-child,th:last-child){border-right:1px solid var(--color)}"},{"name":"tabs","style":"ws-tabs{--color:var(--primary);display:flex;flex-direction:row;justify-content:stretch;align-items:stretch;user-select:none;cursor:pointer;gap:2px;padding:2px}ws-tabs[ws-x~=\"[$vert]\"]{flex-direction:column;justify-content:flex-start}ws-tabs[ws-x~=\"[$vert]\"]>ws-tab{border-bottom-width:0;border-right-width:2px;flex-grow:0}ws-tabs[ws-x~=\"[$solid]\"]>ws-tab:where([ws-x~=\"[$tab-selected]\"]){color:var(--text-color-fill);background-color:var(--color)}ws-tabs>ws-tab{display:flex;justify-content:center;align-items:center;flex-grow:1;padding:8px;border-color:var(--text-color-secondary);border-width:0 0 2px;border-style:solid}ws-tabs>ws-tab:where([ws-x~=\"[$tab-selected]\"]){color:var(--color);border-color:var(--color)}"},{"name":"titlebar","style":"ws-titlebar{--text-color:var(--text-color-normal);display:grid;height:48px;grid-template-columns:min-content auto min-content;grid-template-areas:\"menu title action\";user-select:none}ws-titlebar:where(:not([ws-x~=\"[$fill]\"])){border-bottom:1px solid var(--color, var(--text-color-normal))}ws-titlebar:where([ws-x~=\"[$fill]\"]){--ripple-normal:var(--ripple-dark)!important}ws-titlebar>:where([slot=title]){grid-area:title}ws-titlebar>:where([slot=action]),ws-titlebar>:where([slot=menu]){grid-area:menu;--text-color-normal:var(--text-color)}ws-titlebar>:where([slot=action]){grid-area:action}"},{"name":"toaster","style":"ws-toaster{position:fixed;z-index:100;display:inline-flex;flex-direction:column;padding:4px;gap:4px;height:min-content!important}ws-toaster[ws-x~=\"[$tl]\"]{top:0;left:0}ws-toaster[ws-x~=\"[$tc]\"]{top:0;left:50%;transform:translateX(-50%)}ws-toaster[ws-x~=\"[$tr]\"]{top:0;right:0}ws-toaster[ws-x~=\"[$ml]\"]{top:50%;left:0;transform:translateY(-50%)}ws-toaster[ws-x~=\"[$mr]\"]{top:50%;right:0;transform:translateY(-50%)}ws-toaster[ws-x~=\"[$bl]\"]{bottom:0;left:0}ws-toaster[ws-x~=\"[$bc]\"]{bottom:0;left:50%;transform:translateX(-50%)}ws-toaster[ws-x~=\"[$br]\"]{bottom:0;right:0}"},{"name":"toggle","style":"label:where([ws-x~=\"[$toggle]\"]){--color:var(--default);--ripple-color:var(--default-ripple);--border-color:var(--default);cursor:pointer;display:inline-flex;align-items:center;justify-content:space-between;padding:4px;border-radius:4px;border:1px solid var(--border-color);overflow:hidden;position:relative;user-select:none}label:where([ws-x~=\"[$toggle]\"]):where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}label:where([ws-x~=\"[$toggle]\"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color)}label:where([ws-x~=\"[$toggle]\"]):focus-within{--border-color:var(--color)}label:where([ws-x~=\"[$toggle]\"]):focus-within:where([ws-x~=\"[$flat]\"]){outline:2px solid var(--ripple-color);outline-offset:-2px}label:where([ws-x~=\"[$toggle]\"])>input{position:relative;min-width:20px;min-height:20px;-webkit-appearance:none;appearance:none;margin:0}label:where([ws-x~=\"[$toggle]\"])>input:focus{outline:0}label:where([ws-x~=\"[$toggle]\"])>input:disabled{--color:var(--disabled-background)}label:where([ws-x~=\"[$toggle]\"])>input:checked{color:var(--text-color-invert)}label:where([ws-x~=\"[$toggle]\"])>input:checked::after{background-color:var(--color)}label:where([ws-x~=\"[$toggle]\"])>input::after{content:\"\";position:absolute;font-size:18px;font-family:tabler-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;top:50%;left:50%;width:20px;height:20px;transform:translate(-50%,-50%);display:flex;border:1px solid var(--color);border-radius:4px;align-items:center;justify-content:center;overflow:hidden}label:where([ws-x~=\"[$toggle]\"])>input[type=radio]::after{border-radius:50%}label:where([ws-x~=\"[$toggle]\"])>input[type=checkbox]:disabled,label:where([ws-x~=\"[$toggle]\"])>input[type=radio]:disabled::after{background-color:var(--disabled-background)}label:where([ws-x~=\"[$toggle]\"])>input[type=radio]:checked::after{content:\"\"}label:where([ws-x~=\"[$toggle]\"])>input[type=checkbox]:checked::after{content:\"\"}label:where([ws-x~=\"[$toggle]\"])>input[type=checkbox]:where([ws-x~=\"[$switch]\"]){position:relative;border:1px solid var(--color);height:24px;width:44px;border-radius:12px}label:where([ws-x~=\"[$toggle]\"])>input[type=checkbox]:where([ws-x~=\"[$switch]\"])::after{content:\"\";background-color:var(--text-color-secondary);position:absolute;width:18px;height:18px;border-radius:10px;top:2px;left:2px;transform:none;border-width:0;transition:left 100ms linear,color 100ms linear}label:where([ws-x~=\"[$toggle]\"])>input[type=checkbox]:where([ws-x~=\"[$switch]\"]):checked::after{background-color:var(--color);left:22px}"},{"name":"tooltip","style":"ws-tooltip{position:relative;display:inline-grid;overflow:visible}ws-tooltip::after{position:absolute;content:attr(ws-text);left:50%;bottom:calc(100% + 2px);transform:translateX(-50%);height:20px;background-color:var(--background-layer);opacity:0;transition:opacity 100ms linear;pointer-events:none;border-radius:4px;border:1px solid var(--text-color-secondary);padding:2px 8px;font-size:var(--text-size-subtitle);width:60%;display:flex;align-items:center;justify-content:center;z-index:5}ws-tooltip:hover::after{opacity:1}ws-tooltip[ws-x~=\"[$bottom]\"]::after{bottom:unset;top:calc(100% + 2px)}"},{"name":"dark","style":"[ws-x~=\"@theme:dark\"]{--font:Roboto;--text-light:white;--text-dark:black;--text-color-normal:var(--text-light);--text-color-secondary:#a0a0a0;--text-color-invert:var(--text-dark);--text-color-fill:var(--text-dark);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#161616;--background-layer:#333333;--layer-border-width:1px;--layer-border-color:#505050;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#00aaff;--primary-ripple:#00aaff60;--secondary:#2fbc2f;--secondary-ripple:#2fbc2f60;--danger:#df5348;--danger-ripple:#df534860;--warning:#ffff00;--warning-ripple:#ffff0060;--accent:#ff4dff;--accent-ripple:#ff4dff60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-light);--ripple-invert:var(--ripple-dark);--shadow-color:rgb(0, 0, 0, 0.25);--disabled-background:#606060;color-scheme:dark}"},{"name":"light","style":"[ws-x~=\"@theme:light\"]{--font:Roboto;--text-light:white;--text-dark:black;--text-color-normal:var(--text-dark);--text-color-secondary:#505050;--text-color-invert:var(--text-light);--text-color-fill:var(--text-light);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#e9e9e9;--background-layer:#ffffff;--layer-border-width:1px;--layer-border-color:#aaaaaa;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#1d62d5;--primary-ripple:#1d62d560;--secondary:#128f12;--secondary-ripple:#128f1260;--danger:#F44336;--danger-ripple:#F4433660;--warning:#db990d;--warning-ripple:#db990d60;--accent:#cf00cf;--accent-ripple:#cf00cf60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-dark);--ripple-invert:var(--ripple-light);--shadow-color:rgb(0, 0, 0, 0.25);--disabled-background:#c7c7c7}"},{"name":"tron","style":"[ws-x~=\"@theme:tron\"]{--font:Share Tech Mono;--text-light:white;--text-dark:black;--text-color-normal:var(--text-light);--text-color-secondary:#a0a0a0;--text-color-invert:var(--text-dark);--text-color-fill:var(--text-dark);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#030303;--background-layer:#04080C;--layer-border-width:1px;--layer-border-color:#00EEEE;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#00aaff;--primary-ripple:#00aaff60;--secondary:#2fbc2f;--secondary-ripple:#2fbc2f60;--danger:#df5348;--danger-ripple:#df534860;--warning:#ffff00;--warning-ripple:#ffff0060;--accent:#ff4dff;--accent-ripple:#ff4dff60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-light);--ripple-invert:var(--ripple-dark);--shadow-color:rgb(255, 255, 255, 0.25);--disabled-background:#606060;color-scheme:dark}"}];

    var coreMacros = `--b: "border: {$}";--b\\.c: "border-color: {$}";--b\\.s: "border-style: {$}";--b\\.w: "border-width: {$}";--b\\.b: "border-bottom: {$}";--b\\.b\\.c: "border-bottom-color: {$}";--b\\.b\\.s: "border-bottom-style: {$}";--b\\.b\\.w: "border-bottom-width: {$}";--b\\.t: "border-top: {$}";--b\\.t\\.c: "border-top-color: {$}";--b\\.t\\.s: "border-top-style: {$}";--b\\.t\\.w: "border-top-width: {$}";--b\\.l: "border-left: {$}";--b\\.l\\.c: "border-left-color: {$}";--b\\.l\\.s: "border-left-style: {$}";--b\\.l\\.w: "border-left-width: {$}";--b\\.r: "border-right: {$}";--b\\.r\\.c: "border-right-color: {$}";--b\\.r\\.s: "border-right-style: {$}";--b\\.r\\.w: "border-right-width: {$}";--b\\.x: "border-left: {$}" "border-right: {$}";--b\\.y: "border-top: {$}" "border-bottom: {$}";--bg: "background: {$}";--bg\\.c: "background-color: {$}";--c: "color: {$}";--col: "grid-column: {$}";--cur: "cursor: {$}";--disp: "display: {$}";--fl\\.cross: "align-items: {$}";--fl\\.dir: "flex-direction: {$}";--fl\\.main: "justify-content: {$}";--fl\\.wr: "flex-wrap: {$}";--font: "font-family: {$}";--gap: "gap: {$}";--gr\\.cols: "grid-template-columns: {$}";--gr\\.cols\\.a: "grid-auto-columns: {$}";--gr\\.flow: "grid-auto-flow: {$}";--gr\\.rows: "grid-template-rows: {$}";--gr\\.rows\\.a: "grid-auto-rows: {$}";--h: "height: {$}";--h\\.min: "min-height: {$}";--h\\.max: "max-height: {$}";--inset: "top: {$}" "left: {$}" "bottom: {$}" "right: {$}";--inset\\.x: "left: {$}" "right: {$}";--inset\\.y: "top: {$}" "bottom: {$}";--m: "margin: {$}";--m\\.b: "margin-bottom: {$}";--m\\.l: "margin-left: {$}";--m\\.r: "margin-right: {$}";--m\\.t: "margin-top: {$}";--over: "overflow: {$}";--over\\.x: "overflow-x: {$}";--over\\.y: "overflow-y: {$}";--p: "padding: {$}";--p\\.b: "padding-bottom: {$}";--p\\.l: "padding-left: {$}";--p\\.r: "padding-right: {$}";--p\\.t: "padding-top: {$}";--p\\.x: "padding-left: {$}" "padding-right: {$}";--p\\.y: "padding-top: {$}" "padding-bottom: {$}";--pos: "position: {$}";--r: "border-radius: {$}";--r\\.b: "border-bottom-left-radius: {$}" "border-bottom-right-radius: {$}";--r\\.bl: "border-bottom-left-radius: {$}";--r\\.br: "border-bottom-right-radius: {$}";--r\\.l: "border-top-left-radius: {$}" "border-bottom-left-radius: {$}";--r\\.r: "border-top-right-radius: {$}" "border-bottom-right-radius: {$}";--r\\.t: "border-top-left-radius: {$}" "border-top-right-radius: {$}";--r\\.tl: "border-top-left-radius: {$}";--r\\.tr: "border-top-right-radius: {$}";--row: "grid-row: {$}";--sel: "user-select: {$}";--sh\\.box: "box-shadow: {$}";--sh\\.text: "text-shadow: {$}";--t\\.a: "text-align: {$}";--t\\.br: "word-break: {$}";--t\\.c: "color: {$}";--t\\.dec: "text-decoration: {$}";--t\\.lh: "line-height: {$}";--t\\.over: "text-overflow: {$}";--t\\.sz: "font-size: {$}";--t\\.tf: "text-transform: {$}";--t\\.ws: "white-space: {$}";--t\\.wt: "font-weight: {$}";--tf: "transform: {$}";--tr: "transition: {$}";--vis: "visibility: {$}";--w: "width: {$}";--w\\.min: "min-width: {$}";--w\\.max: "max-width: {$}";--x: "left: {$}";---x: "right: {$}";--y: "top: {$}";---y: "bottom: {$}";--z: "z-index: {$}";`;

    const head = document.head;

    const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10;
    const roundDown = lastDigit >= 5;

    componentStyles.push({
        name: "correction",
        style: `body {--sub-pixel-offset:${roundDown ? 1 : 0}px}`
    });
    for (const { name, style } of componentStyles) {
        const st = document.createElement("style");
        st.setAttribute("ws-name", name);
        st.innerHTML = style;
        head.append(st);
    }

    const style = document.createElement("style");
    document.head.append(style);
    const sheet = style.sheet;

    style.setAttribute("ws-name", "windstorm-generated");

    const baseMacros = document.createElement("style");
    baseMacros.setAttribute("ws-name", "core macros");
    baseMacros.setAttribute("ws-root", "");
    baseMacros.innerHTML = `.ws-style {
    ${coreMacros}
    --flex: $="column" [disp flex] [fl.dir {$}];
    --grid: $="row" [disp grid] [gr.flow {$}];
    --hide: [vis hidden];
    --\\$adorn: [disp flex] [fl.cross center] [fl.main center] [p 2px];
    --\\$outline: [b.w 1px] [b.c @color];
    --\\$color: [@color @{$}] [@ripple-normal @{$}-ripple];
    --\\$compact: [p 0px 8px];
    --\\$fill: [t.c @text-color-fill] [bg.c @color] [@ripple-color @ripple-dark] [@text-color @text-color-fill];
    --\\$flat: [b.w 0px] [@border-size 0px];
    --\\$subtitle: [t.sz @text-size-subtitle] [flex] [fl.main center] [p 0px 4px];
    --\\$title: [t.sz @text-size-title] [flex] [fl.main center] [p 4px];
}`;
    document.head.append(baseMacros);

    /*
    Split the regex into parts so that I can edit them easier (the one liner is
    a huge mess to look at).
    */
    const regexParts = [
        // default value
        /\$="(?<def>[^"]+)"/,
        // windstorm macro
        /\[(?<func>[\w\-\.]+)(\s+(?<arg>[^\]]+))?\]/,
        // variable set macro
        /\[(?<variable>@[\w\-\.]+)(\s+(?<string>[^\]]+))?\]/,
        // css property
        /"(?<name>[\w\-]+)\s*:\s*(?<value>[^"]+?)"/
    ];
    const partsRegex = new RegExp(
        regexParts.map(part => part.source).join("|"),
        "g"
    );

    const styleMacro = {};
    const macro = {};

    window.styleMacro = styleMacro;
    window.macro = macro;
    window.wsxSheet = sheet;

    const argReplace = (source) => {
        if (source === undefined) {
            return "undefined"
        }
        if (source === null) {
            return "null"
        }
        return `\`${source.replace(/\{\$\}/g, "${arg}")}\``
    };

    var initialize = () => {
        const script = document.currentScript;

        const config = {
            attr: script.dataset.attr ?? "ws-x"
        };
        const cssLineCache = {};

        const roots = document.querySelectorAll("[ws-root]");
        const rules = Array.from(roots)
            .flatMap(source => [...source.sheet.cssRules])
            .filter(rule => rule.selectorText === ".ws-style")
            .flatMap(rule => [...rule.styleMap])
            .map(pair => [pair[0], pair[1].toString()]);

        for (const [key, value] of rules) {
            const ruleName = key.slice(2);
            const parts = [...value.matchAll(partsRegex)].map(
                ({ groups }) => ({ ...groups })
            );

            const def = parts.find(
                prop => prop.def !== undefined
            );
            const props = parts.filter(item => item !== def);

            const cssProps =
                props.map(
                    ({ name }) =>
                        (name === undefined)
                        ? null
                        /*
                        Have to escape the escape sequence so that when it's
                        interpolated into the template string it produces the
                        correct sequence for the function to parse.
                        */
                        : `${name}: var(--wsx\\\\.${name}\${varState}) !important`
                )
                .filter(prop => prop !== null);
            const baseSelector = `:where([${config.attr}~="[${ruleName}\${state}"], [${config.attr}~="[${ruleName}\${state}]"])`;

            const extras = props.filter(prop => prop.func !== undefined);
            const cssLines = [
                ...cssProps,
                ...extras.map(
                    ex => {
                        const lines = cssLineCache[ex.func];
                        if (lines === undefined) {
                            throw new Error(`Rule "${ex.func}" was not defined before rule "${ruleName}"`)
                        }
                        return lines
                    }
                ).flat(1)
            ];

            styleMacro[ruleName] = new Function(
                `{ state = "", varState, sheet }`,
                `const css = \`${baseSelector}\${state} {\n${cssLines.join(";")}\n}\`
            sheet.insertRule(css, sheet.cssRules.length)`
            );

            const applyLines = props.map(
                ({ name, value, func, arg, variable, string }) => {
                    if (name !== undefined || variable !== undefined) {
                        const valueTemplate = argReplace(value ?? string);
                        const varName =
                            (name !== undefined)
                            ? `--wsx.${name}\${varState}`
                            : `--${variable.slice(1)}`;
                        return `list.push([\`${varName}\`, format(${valueTemplate})])`
                    }
                    const argTemplate = argReplace(arg);
                    return `macro["${func}"]({list, format, macro, varState, arg: ${argTemplate}})`
                }
            );
            const apply = new Function(
                `{ list, format, macro, varState = "", arg = ${JSON.stringify(def?.def)} }`,
                applyLines.concat([`console.log("${ruleName}", arg)`]).join("\n")
            );
            cssLineCache[ruleName] = cssLines;
            macro[ruleName] = apply;
        }

        return config
    };

    const base$1 = `
<style>
@keyframes hi{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
circle{animation-name:hi;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:50% 50%;}
circle:nth-child(1){animation-duration:4s;}
circle:nth-child(2){animation-duration:3s;animation-direction:reverse;}
circle:nth-child(3){animation-duration:2s;}
</style>
<svg style="width:var(--size);height:var(--size)" viewBox="0 0 100 100"><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="48" stroke-dasharray="0 37.7 75.4 75.4 75.4 75.4"/><circle stroke="var(--ripple-normal)" cx="50" cy="50" stroke-width="4" fill="transparent" r="40" stroke-dasharray="0 31.4 62.83 62.83 62.83 62.83"/><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="32" stroke-dasharray="0 12.57 25.13 25.13 25.13 25.13 25.13 25.13 25.13 25.13"/></svg>`;
    const template$1 = document.createElement("template");
    template$1.innerHTML = base$1;
    customElements.define(
        "ws-circle-spinner",
        class WSHex extends HTMLElement {
            constructor() {
                super();

                const root = template$1.content.cloneNode(true);
                const shadow = this.attachShadow({ mode: "closed" });
                shadow.appendChild(root);
            }
        }
    );

    const base = `
<style>
@keyframes hi{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}
path{animation-name:hi;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:50% 50%;}
path:nth-child(1){animation-duration:3s;}
path:nth-child(2){animation-duration:2s;animation-direction:reverse;}
path:nth-child(3){animation-duration:1s;}
</style><svg style="width: var(--size); height: var(--size);" viewBox="0 0 100 100"><path stroke="var(--color)" stroke-width="4" fill="none" d="M91.57 26v48L50 98 8.43 74V26L50 2l41.57 24Z"/><path stroke="var(--ripple-normal)" stroke-width="4" fill="none" d="M81.177 32v36L50 86 18.823 68V32L50 14l31.177 18Z"/><path stroke="var(--color)" stroke-width="4" fill="none" d="M70.785 38v24L50 74 29.215 62V38L50 26l20.785 12Z"/></svg>`;
    const template = document.createElement("template");
    template.innerHTML = base;
    customElements.define(
        "ws-hexagon-spinner",
        class WSHex extends HTMLElement {
            constructor() {
                super();

                const root = template.content.cloneNode(true);
                const shadow = this.attachShadow({ mode: "closed" });
                shadow.appendChild(root);
            }
        }
    );

    console.time("initialize");
    const config = initialize();
    console.timeEnd("initialize");

    const formatPart = (key, value) => {
        if (key === "@app" && value === true) {
            return key
        }
        if (value === true) {
            return `[${key}]`
        }
        if (key === "@theme") {
            return `@theme:${value}`
        }
        return `[${key} ${value}]`
    };
    const x = (obj) =>
        Object.entries(obj)
            .reduce(
                (list, [key, value]) => {
                    if (value === null || value === undefined || value === false) {
                        return list
                    }
                    list.push(
                        formatPart(key, value)
                    );
                    return list
                },
                []
            )
            .join(" ");

    const format = (value) => value?.replace(
        /@([\w\-]+)/g,
        (_, varName) => `var(--${varName})`
    );

    const styleCache = {};
    const generateStyle = (key, name, args) => {
        if (styleCache[key] === true) {
            return
        }
        styleMacro[name](args);
        styleCache[key] = true;
    };

    const varCache = new WeakMap();
    const processMacro = (attr, next) => {
        const { name, state, arg } = attr.groups;
        const key = `${name}${state ?? ""}`;

        console.log(name, arg);

        if (name.startsWith("@") === true) {
            next.push([ `--${name.slice(1)}`, arg ]);
            return
        }
        if (macro[name] === undefined) {
            if (name.startsWith("$") === true) {
                return
            }
            console.warn(`No macro defined for ${name}`);
            return
        }

        const varState = state?.replace(/:/g, "_") ?? "";
        generateStyle(
            key,
            name,
            { sheet, state, varState }
        );
        macro[name]({
            list: next,
            format,
            macro,
            varState,
            arg: arg?.trim(),
        });
    };
    const processNode = (node) => {
        if (node.tagName === undefined) {
            return
        }
        const attr = node.getAttribute(config.attr);
        const funcs = attr?.matchAll(attrRegex) ?? [];

        const prev = varCache.get(node) ?? [];
        const next = [];
        for (const match of funcs) {
            processMacro(match, next);
        }
        const nextKeys = next.map(pair => pair[0]);
        const remove = prev.filter(key => nextKeys.includes(key) === false);

        for (const key of remove) {
            node.style.removeProperty(key);
        }
        for (const [key, value] of next) {
            node.style.setProperty(key, value);
        }
        varCache.set(node, nextKeys);
    };
    const attrRegex = /\[(?<name>[\$@\w\-\.]+)(?<state>:[^\s]+)?(?<arg>[^\]]+?)?\]/g;
    const mut = {
        childList(evt) {
            if (evt.addedNodes.length === 0) {
                return
            }
            evt.addedNodes.forEach(
                (node) => {
                    if (node.tagName === undefined) {
                        return
                    }
                    const nodes = [node, ...node.querySelectorAll("*")];
                    nodes.forEach(processNode);
                }
            );
        },
        attributes(evt) {
            processNode(evt.target);
        }
    };
    const observer = new MutationObserver(
        (muts) => muts.forEach(
            evt => mut[evt.type](evt)
        )
    );

    observer.observe(
        document.body,
        {
            subtree: true,
            attributes: true,
            childList: true,
            attributeFilter: [config.attr]
        }
    );
    const initialNodes = [
        document.body,
        ...document.body.querySelectorAll("*")
    ];
    initialNodes.forEach(processNode);

    var main = { x };

    return main;

})();
