var componentStyles = [{"name":"baseline","style":"@import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap);@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css);*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}:where([ws-x]){border-style:solid;border-width:0;border-color:var(--text-color-normal)}body,html{padding:0;margin:0;width:100%;height:100%;-webkit-tap-highlight-color:transparent}body[ws-x*=\"@@theme:\"]{background-color:var(--background)}[ws-x*=\"@@theme:\"]{color:var(--text-color-normal);font-family:var(--font);font-size:var(--font-size-normal);--base-radius:4px}body[ws-x~=\"@@app\"]{overflow:hidden;position:fixed;touch-action:pan-x pan-y}"},{"name":"avatar","style":"ws-avatar,ws-avatar>object{align-items:center;justify-content:center}ws-avatar{--color:transparent;--size:36px;display:inline-flex;overflow:hidden;border-radius:500px;width:var(--size);height:var(--size);background-color:var(--color);color:var(--text-color-fill);vertical-align:text-bottom}ws-avatar>img{width:100%}ws-avatar>object{width:100%;height:100%;display:flex}"},{"name":"badge","style":"ws-badge{--color:var(--primary);position:relative;display:inline-grid;overflow:visible}ws-badge::after{position:absolute;content:attr(ws-text);right:-10px;top:0;transform:translateY(-50%);background-color:var(--color);pointer-events:none;border-radius:20px;padding:4px;min-width:20px;height:20px;box-sizing:border-box;text-align:center;font-size:var(--text-size-subtitle);color:var(--text-color-fill);line-height:14px;z-index:5}"},{"name":"button","style":":is(label,a):where([ws-x~=\"@@button\"]),button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]){--color:var(--text-color-normal);--fill-color:transaprent;--text-color:var(--color);border:0 solid var(--text-color);color:var(--text-color);font-family:var(--font);background-color:var(--fill-color);border-radius:4px;cursor:pointer;padding:8px 16px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;--ripple-color:unset;--ripple-base-color:var(--ripple-normal);overflow:hidden;position:relative;user-select:none;--shadow:0px 2px 4px var(--shadow-color);box-shadow:var(--shadow)}:is(label,a):where([ws-x~=\"@@button\"]):where(:not([disabled]))::after,button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]):where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}:is(label,a):where([ws-x~=\"@@button\"]):where(:not([disabled])):active::after,button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color, var(--ripple-base-color))}:is(label,a):where([ws-x~=\"@@button\"])[disabled],button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"])[disabled]{box-shadow:none}:is(label,a):where([ws-x~=\"@@button\"]):hover,button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]):hover{--shadow:1px 3px 6px var(--shadow-color)}:is(label,a):where([ws-x~=\"@@button\"]):where([disabled]),button:where([ws-x~=\"[$flat]\"],[ws-x~=\"[$fill]\"],[ws-x~=\"[$outline]\"]):where([disabled]){filter:saturate(10%) brightness(.7)}"},{"name":"chip","style":"ws-chip{--color:var(--text-color-normal);--fill-color:transaprent;--text-color:var(--color);display:inline-flex;align-items:center;justify-content:center;border-radius:100px;padding:4px 12px;user-select:none;vertical-align:text-bottom;color:var(--text-color);background:var(--fill-color)}ws-chip:where([ws-x~=\"@@click\"]){cursor:pointer;--ripple-color:unset;--ripple-base-color:var(--ripple-normal);overflow:hidden;position:relative;user-select:none}ws-chip:where([ws-x~=\"@@click\"]):where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}ws-chip:where([ws-x~=\"@@click\"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color, var(--ripple-base-color))}"},{"name":"control","style":"label:where([ws-x~=\"@@control\"]){--color:var(--default);--border-color:var(--layer-border-color);--border-size:1px;position:relative;display:inline-grid;grid-template-areas:\"label label label\"\"start control end\"\"extra extra extra\";grid-template-rows:minmax(0,min-content) auto minmax(0,min-content);grid-template-columns:minmax(0,min-content) auto minmax(0,min-content);user-select:none;overflow:hidden;border:var(--border-size) solid var(--border-color);background-color:var(--background-element);border-radius:var(--base-radius)}label:where([ws-x~=\"@@control\"]):focus-within{--border-color:var(--color)}label:where([ws-x~=\"@@control\"]) :is(input,select,textarea){background-color:transparent;min-width:16px;font-family:var(--font);font-size:var(--text-size-normal)}label:where([ws-x~=\"@@control\"]) :is(input,select,textarea):disabled{background-color:var(--disabled-background);opacity:1}label:where([ws-x~=\"@@control\"])>:where(select){--color:var(--text-color-normal);border-width:0;padding:8px;min-height:36px;background-color:transparent;color:var(--color);cursor:pointer;grid-area:control}label:where([ws-x~=\"@@control\"])>:where(input,textarea):focus,label:where([ws-x~=\"@@control\"])>:where(select):focus{outline:0}label:where([ws-x~=\"@@control\"])>:where(select) optgroup,label:where([ws-x~=\"@@control\"])>:where(select) option{background-color:var(--background-layer);border-color:var(--background-layer);color:var(--text-color-normal);font-size:var(--text-size-normal);font-family:Arial}label:where([ws-x~=\"@@control\"])>:where(input,textarea){border-width:0;color:var(--text-normal-color);min-height:28px;width:100%;height:100%;grid-area:control;padding:4px}label:where([ws-x~=\"@@control\"])>input[type=file]{position:relative;padding:0}label:where([ws-x~=\"@@control\"])>input[type=file]::file-selector-button{font-family:var(--font);height:100%;margin:0 4px 0 0;padding:4px;color:var(--text-normal-color);background-color:transparent;border-width:0;text-decoration:underline}label:where([ws-x~=\"@@control\"])>:where([ws-x~=\"[$label]\"]){grid-area:label;padding:4px;display:flex;flex-direction:column;align-items:start;color:var(--color);white-space:nowrap;font-size:var(--text-size-subtitle)}label:where([ws-x~=\"@@control\"])>:where([ws-x~=\"[$start]\"]){grid-area:start}label:where([ws-x~=\"@@control\"])>:where([ws-x~=\"[$end]\"]){grid-area:end}label:where([ws-x~=\"@@control\"])>:where([ws-x~=\"[$extra]\"]){grid-area:extra;font-size:var(--text-size-subtitle);padding:4px}"},{"name":"details","style":"details:where([ws-x]){--color:var(--default);border:0 solid var(--color);padding-left:1em;border-radius:4px;overflow:hidden}details:where([ws-x])>summary{color:var(--color);padding:4px 4px 4px 1.1em;margin-left:-1em;cursor:pointer;--ripple-color:unset;--ripple-base-color:var(--ripple-normal);overflow:hidden;position:relative;user-select:none}details:where([ws-x])>summary:where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}details:where([ws-x])>summary:where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color, var(--ripple-base-color))}details:where([ws-x])>summary::before{position:absolute;left:0;top:50%;bottom:0;width:1em;display:flex;align-items:center;justify-content:center;font-family:bootstrap-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;content:\"\";transform:translateY(-50%);transition:transform 100ms linear}details:where([ws-x])>summary::-webkit-details-marker,details:where([ws-x])>summary::marker{content:\"\";display:none}details:where([ws-x])[open]>summary::before{transform:translateY(-50%) rotate(90deg)}"},{"name":"flex","style":"ws-flex{display:flex;flex-direction:column;gap:8px;padding:4px;overflow:hidden}ws-flex>*{flex-shrink:0}"},{"name":"grid","style":"ws-grid{display:grid;overflow:hidden;gap:8px;padding:4px;grid-auto-rows:min-content}"},{"name":"icon","style":"ws-icon{display:inline-block}"},{"name":"link","style":"a:where([ws-x]){--color:var(--text-color-normal);--text-color:var(--color)}a:where([ws-x]),a:where([ws-x]):hover,a:where([ws-x]):visited{color:var(--text-color)}a:where([ws-x])[disabled]{pointer-events:none}"},{"name":"modal","style":"ws-modal{--text-color:var(--text-color-normal);position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.55);z-index:100;cursor:default;visibility:hidden;transition:visibility var(--anim-time, 200ms) linear}ws-modal>label:first-child{position:absolute;width:100%;height:100%;cursor:pointer}ws-modal[ws-x~=\"[$show]\"]{visibility:visible!important}ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"@@action\"]),ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"@@menu\"]){transform:translateX(0)}ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"@@select\"]){transform:translateX(-50%) translateY(0)}ws-modal[ws-x~=\"[$show]\"]>:where([ws-x~=\"@@dialog\"]){opacity:1}input[type=checkbox]:not(:checked)+ws-modal{visibility:hidden}input[type=checkbox]:checked+ws-modal{visibility:visible}ws-modal>:where(:not(label:first-child)){position:absolute}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@menu\"]){top:0;left:0;height:100%;transform:translateX(-100%);transition:transform var(--anim-time, 250ms) linear;max-width:100%}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@action\"]),input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@menu\"]){transform:translateX(0)}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@action\"]){top:0;right:0;height:100%;transform:translateX(100%);transition:transform var(--anim-time, 250ms) linear;max-width:100%}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@select\"]){top:0;left:50%;transform:translateX(-50%) translateY(-100%);max-height:75vh;max-width:min(90vw,720px);transition:transform var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@select\"]){transform:translateX(-50%) translateY(0)}ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@dialog\"]){top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;transition:opacity var(--anim-time, 250ms) linear}input[type=checkbox]:checked+ws-modal>:where(:not(label:first-child)):where([ws-x~=\"@@dialog\"]){opacity:1}"},{"name":"notification","style":"ws-notification{--color:var(--layer-border-color);position:relative;display:inline-grid;grid-template-columns:auto 1fr auto;grid-template-areas:\"start text end\";border-radius:4px;cursor:pointer;user-select:none;border:2px solid var(--color);min-height:48px;z-index:0}ws-notification::after,ws-notification::before{content:\"\";position:relative;display:block;min-width:20px;background-color:var(--color);z-index:-1}ws-notification::before{grid-area:start}ws-notification::after{grid-area:end}ws-notification>:where([ws-x~=\"[$notif-text]\"]){display:flex;flex-direction:row;align-items:center;padding:4px;background-color:var(--background-element)}ws-notification>:where([ws-x~=\"[$start]\"]){grid-area:start}ws-notification>:where([ws-x~=\"[$end]\"]){grid-area:end}ws-notification>:where([ws-x~=\"[$start]\"],[ws-x~=\"[$end]\"]),ws-notification>:where([ws-x~=\"[$start]\"],[ws-x~=\"[$end]\"]) button{--ripple-color:var(--ripple-invert);--color:var(--text-color-invert);color:var(--text-color-invert)}"},{"name":"paper","style":"ws-paper{--color:var(--layer-border-color);display:grid;border-radius:var(--base-radius);box-shadow:0 2px 4px var(--shadow-color);overflow:hidden;grid-template-columns:1fr;grid-template-rows:min-content auto min-content;grid-template-areas:\"header\"\"content\"\"footer\";background-color:var(--background-layer)}ws-paper::before{content:\"\";grid-area:header}ws-paper::after{content:\"\";grid-area:footer;pointer-events:none}ws-paper>:where([ws-x~=\"[$content]\"]){grid-area:content}ws-paper>:where([ws-x~=\"[$header]\"]){grid-area:header}ws-paper>:where([ws-x~=\"[$footer]\"]){grid-area:footer}"},{"name":"popover","style":"ws-popover{display:grid;position:relative}ws-popover:not(:visibile)>:where([ws-x~=\"[$content]\"]){display:none}ws-popover>:where([ws-x~=\"[$content]\"]){position:absolute;z-index:25;display:none}ws-popover[ws-x~=\"[$show]\"]>:where([ws-x~=\"[$content]\"]){display:block}ws-popover>input:where([type=checkbox]):checked+:where([ws-x~=\"[$content]\"]){display:block}ws-popover>input:where([type=checkbox]):not(:checked)+:where([ws-x~=\"[$content]\"]){display:none}"},{"name":"screen","style":"ws-screen{--stack:0;--screen-width:min(720px, 100%);display:grid;width:calc(100% - var(--sub-pixel-offset));height:calc(100% - 1px);overflow:hidden;position:fixed;top:0;left:0;z-index:200;background-color:rgba(0,0,0,.4);grid-template-columns:auto calc(var(--screen-width) - 16px*var(--stack)) auto;grid-template-areas:\". content .\";padding-top:calc(8px*var(--stack))}ws-screen[ws-x~=\"[$left]\"]{grid-template-columns:calc(8px*var(--stack)) calc(var(--screen-width) - 16px*var(--stack)) auto}ws-screen>:where(*){grid-area:content;height:100%;overflow:hidden}"},{"name":"spinner","style":"ws-circle-spinner,ws-hexagon-spinner{--size:100px;--color:var(--primary);--ripple-color:var(--primary-ripple);width:var(--size);height:var(--size);display:inline-block}"},{"name":"table","style":"table:where([ws-x]){--border-color:var(--color);border-spacing:0;position:relative;border-top:1px solid var(--color)}table:where([ws-x]) thead :is(td,th){color:var(--color);font-weight:700}table:where([ws-x]):where([ws-x~=\"[$header-fill]\"]) thead :is(td,th){background-color:var(--color);color:var(--text-color-fill)}table:where([ws-x]) :is(td,th){padding:8px;white-space:nowrap;background-color:var(--background-layer);border-bottom:1px solid var(--color)}table:where([ws-x]) :where(th:first-child){position:sticky;left:0;z-index:10}table:where([ws-x]) :where(td:first-child,th:first-child){border-left:1px solid var(--color)}table:where([ws-x]) :where(td:last-child,th:last-child){border-right:1px solid var(--color)}"},{"name":"tabs","style":"ws-tabs{--color:var(--primary);display:flex;flex-direction:row;justify-content:stretch;align-items:stretch;user-select:none;gap:2px}ws-tabs[ws-x~=\"[$vert]\"]{flex-direction:column;justify-content:flex-start}ws-tabs[ws-x~=\"[$vert]\"] ws-tab{border-bottom-width:0;border-right-width:2px;flex-grow:0}ws-tabs[ws-x~=\"[$fill]\"]>label>input[type=radio]:checked+ws-tab{color:var(--text-color-fill);background-color:var(--color)}ws-tabs>label{display:grid;flex-grow:1}ws-tabs>label>input[type=radio]{display:none}ws-tabs>label>input[type=radio]:checked+ws-tab{color:var(--color);border-color:var(--color)}ws-tabs>label>ws-tab{display:flex;justify-content:center;align-items:center;padding:8px;border-color:var(--text-color-secondary);border-width:0 0 2px;border-style:solid;cursor:pointer;--ripple-color:unset;--ripple-base-color:var(--ripple-normal);overflow:hidden;position:relative;user-select:none}ws-tabs>label>ws-tab:where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}ws-tabs>label>ws-tab:where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color, var(--ripple-base-color))}"},{"name":"titlebar","style":"ws-titlebar{display:grid;min-height:52px;grid-template-columns:auto 1fr auto;grid-template-areas:\"menu title action\";user-select:none;position:relative}ws-titlebar>:where(button,[ws-x~=\"@@button\"]){border-radius:0}ws-titlebar>:where([ws-x~=\"[$title]\"]){--color:var(--text-color-normal);--text-color:var(--color);--border-color:var(--layer-border-color);--border-size:2px;--fill-color:transparent;grid-area:title;color:var(--text-color);border-bottom:1px solid transparent;z-index:0;display:flex;flex-direction:column;justify-content:center}ws-titlebar>:where([ws-x~=\"[$title]\"]):where([ws-x~=\"[$color\"]){--border-color:var(--color)}ws-titlebar>:where([ws-x~=\"[$title]\"])::before{content:\"\";background-color:var(--fill-color);position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-bottom:var(--border-size) solid var(--border-color);border-top:var(--border-size) solid var(--border-color)}ws-titlebar>:where([ws-x~=\"[$title]\"])~:where([ws-x~=\"[$menu]\"],[ws-x~=\"[$action]\"])>:where(button,[ws-x~=\"@@button\"]),ws-titlebar>:where([ws-x~=\"[$title]\"])~:where(button,[ws-x~=\"@@button\"]){--ripple-normal:var(--ripple-dark)}ws-titlebar>:where([ws-x~=\"[$title]\"]):where([ws-x~=\"[$fill]\"])~:where([ws-x~=\"[$menu]\"],[ws-x~=\"[$action]\"])>:where(button,[ws-x~=\"@@button\"]),ws-titlebar>:where([ws-x~=\"[$title]\"]):where([ws-x~=\"[$fill]\"])~:where(button,[ws-x~=\"@@button\"]){--color:var(--text-color-invert)}ws-titlebar>:where([ws-x~=\"[$menu]\"]){grid-area:menu}ws-titlebar>:where([ws-x~=\"[$action]\"]){grid-area:action}"},{"name":"toaster","style":"ws-toaster{position:fixed;z-index:100;display:inline-flex;flex-direction:column;padding:4px;gap:4px;height:min-content!important}ws-toaster[ws-x~=\"[$tl]\"]{top:0;left:0}ws-toaster[ws-x~=\"[$tc]\"]{top:0;left:50%;transform:translateX(-50%)}ws-toaster[ws-x~=\"[$tr]\"]{top:0;right:0}ws-toaster[ws-x~=\"[$ml]\"]{top:50%;left:0;transform:translateY(-50%)}ws-toaster[ws-x~=\"[$mr]\"]{top:50%;right:0;transform:translateY(-50%)}ws-toaster[ws-x~=\"[$bl]\"]{bottom:0;left:0}ws-toaster[ws-x~=\"[$bc]\"]{bottom:0;left:50%;transform:translateX(-50%)}ws-toaster[ws-x~=\"[$br]\"]{bottom:0;right:0}"},{"name":"toggle","style":"label:where([ws-x~=\"@@toggle\"]){--color:var(--default);--ripple-color:var(--default-ripple);--border-color:var(--layer-border-color);--border-size:1px;cursor:pointer;display:inline-flex;align-items:center;justify-content:space-between;padding:4px;border:var(--border-size) solid var(--border-color);background-color:var(--background-element);border-radius:var(--base-radius);--ripple-color:unset;--ripple-base-color:var(--ripple-normal);overflow:hidden;position:relative;user-select:none}label:where([ws-x~=\"@@toggle\"]):where(:not([disabled]))::after{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;transition:background-color 150ms linear;pointer-events:none}label:where([ws-x~=\"@@toggle\"]):where(:not([disabled])):active::after{transition:none;background-color:var(--ripple-color, var(--ripple-base-color))}label:where([ws-x~=\"@@toggle\"]):focus-within{--border-color:var(--color)}label:where([ws-x~=\"@@toggle\"])>input{position:relative;min-width:20px;min-height:20px;-webkit-appearance:none;appearance:none;margin:0;color:var(--color)}label:where([ws-x~=\"@@toggle\"])>input:focus{outline:0}label:where([ws-x~=\"@@toggle\"])>input:disabled{--color:var(--disabled-background)}label:where([ws-x~=\"@@toggle\"])>input::after{content:\"\";position:absolute;font-size:18px;font-family:bootstrap-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;top:50%;left:50%;width:20px;height:20px;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;overflow:hidden}label:where([ws-x~=\"@@toggle\"])>input[type=radio]::after{content:\"\"}label:where([ws-x~=\"@@toggle\"])>input[type=radio]:checked::after{content:\"\"}label:where([ws-x~=\"@@toggle\"])>input[type=checkbox]::after{content:\"\"}label:where([ws-x~=\"@@toggle\"])>input[type=checkbox]:checked::after{content:\"\"}label:where([ws-x~=\"@@toggle\"])>input[type=checkbox]:where([ws-x~=\"@@switch\"]){position:relative;border:1px solid var(--color);height:24px;width:44px;border-radius:12px}label:where([ws-x~=\"@@toggle\"])>input[type=checkbox]:where([ws-x~=\"@@switch\"]):disabled{background-color:var(--disabled-background)}label:where([ws-x~=\"@@toggle\"])>input[type=checkbox]:where([ws-x~=\"@@switch\"])::after{color:var(--text-dark);content:\"\";background-color:var(--text-color-secondary);position:absolute;width:18px;height:18px;border-radius:10px;top:2px;left:2px;transform:none;border-width:0;transition:left 100ms linear,color 100ms linear}label:where([ws-x~=\"@@toggle\"])>input[type=checkbox]:where([ws-x~=\"@@switch\"]):checked::after{background-color:var(--color);content:\"\";left:22px}"},{"name":"tooltip","style":"ws-tooltip{position:relative;display:inline-grid;overflow:visible}ws-tooltip::after{position:absolute;content:attr(ws-text);left:50%;bottom:calc(100% + 2px);transform:translateX(-50%);height:20px;background-color:var(--background-layer);opacity:0;transition:opacity 100ms linear;pointer-events:none;border-radius:4px;border:1px solid var(--text-color-secondary);padding:2px 8px;font-size:var(--text-size-subtitle);width:60%;display:flex;align-items:center;justify-content:center;z-index:5}ws-tooltip:hover::after{opacity:1}ws-tooltip[ws-x~=\"[$bottom]\"]::after{bottom:unset;top:calc(100% + 2px)}"},{"name":"dark","style":"[ws-x~=\"@@theme:dark\"]{--font:Roboto;--text-light:white;--text-dark:black;--text-color-normal:var(--text-light);--text-color-secondary:#cccccc;--text-color-invert:var(--text-dark);--text-color-fill:var(--text-dark);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#161616;--background-layer:#333333;--background-element:#242424;--layer-border-width:1px;--layer-border-color:#505050;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#00aaff;--primary-ripple:#00aaff60;--secondary:#2fbc2f;--secondary-ripple:#2fbc2f60;--danger:#df5348;--danger-ripple:#df534860;--warning:#ffff00;--warning-ripple:#ffff0060;--accent:#ff4dff;--accent-ripple:#ff4dff60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-light);--ripple-invert:var(--ripple-dark);--shadow-color:rgb(0, 0, 0, 0.25);--disabled-background:#606060;color-scheme:dark}"},{"name":"light","style":"[ws-x~=\"@@theme:light\"]{--font:Roboto;--text-light:white;--text-dark:black;--text-color-normal:var(--text-dark);--text-color-secondary:#505050;--text-color-invert:var(--text-light);--text-color-fill:var(--text-light);--text-size-normal:14px;--text-size-title:18px;--text-size-header:16px;--text-size-info:13px;--text-size-subtitle:12px;--text-size-data:10px;--background:#e9e9e9;--background-layer:#ffffff;--background-element:#f3f3f3;--layer-border-width:1px;--layer-border-color:#aaaaaa;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#1d62d5;--primary-ripple:#1d62d560;--secondary:#128f12;--secondary-ripple:#128f1260;--danger:#F44336;--danger-ripple:#F4433660;--warning:#db990d;--warning-ripple:#db990d60;--accent:#cf00cf;--accent-ripple:#cf00cf60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-dark);--ripple-invert:var(--ripple-light);--shadow-color:rgb(0, 0, 0, 0.25);--disabled-background:#c7c7c7}"},{"name":"tron","style":"[ws-x~=\"@@theme:tron\"]{--font:Share Tech Mono;--text-light:white;--text-dark:black;--text-color-normal:var(--text-light);--text-color-secondary:#a0a0a0;--text-color-invert:var(--text-dark);--text-color-fill:var(--text-dark);--text-size-normal:15px;--text-size-title:19px;--text-size-header:17px;--text-size-info:14px;--text-size-subtitle:13px;--text-size-data:11px;--background:#020202;--background-layer:#060d19;--background-element:#04080F;--layer-border-width:1px;--layer-border-color:#00EEEE;--default:var(--text-color-normal);--default-ripple:var(--ripple-normal);--primary:#00aaff;--primary-ripple:#00aaff60;--secondary:#2fbc2f;--secondary-ripple:#2fbc2f60;--danger:#df5348;--danger-ripple:#df534860;--warning:#ffff00;--warning-ripple:#ffff0060;--accent:#ff4dff;--accent-ripple:#ff4dff60;--ripple-dark:#00000060;--ripple-light:#FFFFFF60;--ripple-normal:var(--ripple-light);--ripple-invert:var(--ripple-dark);--shadow-color:rgb(255, 255, 255, 0.25);--disabled-background:#606060;color-scheme:dark}"}];

var coreMacros = `--b: "border: {$}";--b\\.c: "border-color: {$}";--b\\.s: "border-style: {$}";--b\\.w: "border-width: {$}";--b\\.b: "border-bottom: {$}";--b\\.b\\.c: "border-bottom-color: {$}";--b\\.b\\.s: "border-bottom-style: {$}";--b\\.b\\.w: "border-bottom-width: {$}";--b\\.t: "border-top: {$}";--b\\.t\\.c: "border-top-color: {$}";--b\\.t\\.s: "border-top-style: {$}";--b\\.t\\.w: "border-top-width: {$}";--b\\.l: "border-left: {$}";--b\\.l\\.c: "border-left-color: {$}";--b\\.l\\.s: "border-left-style: {$}";--b\\.l\\.w: "border-left-width: {$}";--b\\.r: "border-right: {$}";--b\\.r\\.c: "border-right-color: {$}";--b\\.r\\.s: "border-right-style: {$}";--b\\.r\\.w: "border-right-width: {$}";--b\\.x: "border-left: {$}" "border-right: {$}";--b\\.x\\.c: "border-left-color: {$}" "border-right-color: {$}";--b\\.x\\.s: "border-left-style: {$}" "border-right-style: {$}";--b\\.x\\.w: "border-left-width: {$}" "border-right-width: {$}";--b\\.y: "border-top: {$}" "border-bottom: {$}";--b\\.y\\.c: "border-top-color: {$}" "border-bottom-color: {$}";--b\\.y\\.s: "border-top-style: {$}" "border-bottom-style: {$}";--b\\.y\\.w: "border-top-width: {$}" "border-bottom-width: {$}";--bg: "background: {$}";--bg\\.att: "background-attachment: {$}";--bg\\.c: "background-color: {$}";--bg\\.img: "background-image: {$}";--bg\\.rep: "background-repeat: {$}";--bg\\.pos: "background-position: {$}";--bg\\.sz: "background-size: {$}";--c: "color: {$}";--col: "grid-column: {$}";--cur: "cursor: {$}";--disp: "display: {$}";--fl\\.basis: "flex-basis: {$}";--fl\\.cross: "align-items: {$}";--fl\\.dir: "flex-direction: {$}";--fl\\.flow: "flex-flow: {$}";--fl\\.grow: "flex-grow: {$}";--fl\\.main: "justify-content: {$}";--fl\\.shrink: "flex-shrink: {$}";--fl\\.size: "flex: {$}";--fl\\.wr: "flex-wrap: {$}";--font: "font-family: {$}";--gap: "gap: {$}";--gr\\.cols: "grid-template-columns: {$}";--gr\\.cols\\.a: "grid-auto-columns: {$}";--gr\\.flow: "grid-auto-flow: {$}";--gr\\.rows: "grid-template-rows: {$}";--gr\\.rows\\.a: "grid-auto-rows: {$}";--h: "height: {$}";--h\\.min: "min-height: {$}";--h\\.max: "max-height: {$}";--inset: "top: {$}" "left: {$}" "bottom: {$}" "right: {$}";--inset\\.x: "left: {$}" "right: {$}";--inset\\.y: "top: {$}" "bottom: {$}";--m: "margin: {$}";--m\\.b: "margin-bottom: {$}";--m\\.l: "margin-left: {$}";--m\\.r: "margin-right: {$}";--m\\.t: "margin-top: {$}";--m\\.x: "margin-left: {$}" "margin-right: {$}";--m\\.y: "margin-bottom: {$}" "margin-top: {$}";--o: "opacity: {$}";--outln: "outline: {$}";--over: "overflow: {$}";--over\\.x: "overflow-x: {$}";--over\\.y: "overflow-y: {$}";--p: "padding: {$}";--p\\.b: "padding-bottom: {$}";--p\\.l: "padding-left: {$}";--p\\.r: "padding-right: {$}";--p\\.t: "padding-top: {$}";--p\\.x: "padding-left: {$}" "padding-right: {$}";--p\\.y: "padding-top: {$}" "padding-bottom: {$}";--pos: "position: {$}";--r: "border-radius: {$}";--r\\.b: "border-bottom-left-radius: {$}" "border-bottom-right-radius: {$}";--r\\.bl: "border-bottom-left-radius: {$}";--r\\.br: "border-bottom-right-radius: {$}";--r\\.l: "border-top-left-radius: {$}" "border-bottom-left-radius: {$}";--r\\.r: "border-top-right-radius: {$}" "border-bottom-right-radius: {$}";--r\\.t: "border-top-left-radius: {$}" "border-top-right-radius: {$}";--r\\.tl: "border-top-left-radius: {$}";--r\\.tr: "border-top-right-radius: {$}";--row: "grid-row: {$}";--sel: "user-select: {$}";--sh\\.box: "box-shadow: {$}";--sh\\.text: "text-shadow: {$}";--t\\.a: "text-align: {$}";--t\\.br: "word-break: {$}";--t\\.c: "color: {$}";--t\\.dec: "text-decoration: {$}";--t\\.lh: "line-height: {$}";--t\\.over: "text-overflow: {$}";--t\\.sz: "font-size: {$}";--t\\.tf: "text-transform: {$}";--t\\.ws: "white-space: {$}";--t\\.wt: "font-weight: {$}";--tf: "transform: {$}";--tf\\.o: "transform-origin: {$}";--tf\\.p: "perspective: {$}";--tr: "transition: {$}";--vis: "visibility: {$}";--w: "width: {$}";--w\\.min: "min-width: {$}";--w\\.max: "max-width: {$}";--x: "left: {$}";---x: "right: {$}";--y: "top: {$}";---y: "bottom: {$}";--z: "z-index: {$}";`;

/**
@type {{
    attr: string
}}
*/
const config = {
    attr: "ws-x",
    // Using a window variable is not the coolest method, but when a script is
    // loaded in an async tag, it's much more difficult to get the tag details
    // to pull out config in a cooler way.
    ...window.windstormConfig
};

// The component styles and yml file are both loaded using custom rollup

const head = document.head;

// When devices scale screens, sometimes the edges are off by a pixel because
// of rounding errors. I do the math with integers to prevent weird floating
// point errors from breaking my check, since it's already breaking the scale.
const lastDigit = Math.ceil(screen.width * devicePixelRatio * 10) % 10;
const roundDown = lastDigit >= 5;

componentStyles.push({
    name: "correction",
    style: `body {--sub-pixel-offset:${roundDown ? 1 : 0}px}`
});
for (const { name, style } of componentStyles) {
    const st = document.createElement("style");
    st.setAttribute("ws-name", name);
    st.innerHTML = style.replaceAll("ws-x", config.attr);
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
    --fl-center: [fl.cross center] [fl.main center];
    --flex: $="column" [disp flex] [fl.dir {$}];
    --grid: $="row" [disp grid] [gr.flow {$}];
    --hide: [disp none];
    --invis: [vis hidden];
    --\\$adorn: [disp flex] [fl-center] [p 4px];
    --\\$outline: [b.w 1px] [b.c @color];
    --\\$color: [@color {$}] [@ripple-base-color {$}-ripple];
    --\\$compact: [p 0px 8px];
    --\\$fill: [@text-color @text-color-fill] [@fill-color @color] [@ripple-color @ripple-invert];
    --\\$flat: [@border-size 0px] [bg.c transparent];
    --\\$lined: [b.w 0px] [b.b.w @border-size] [bg.c transparent] [r 0px];
    --\\$lined-fill: [b.w 0px] [b.b.w @border-size] [r.b 0px];
    --\\$ground: [sh.box none];
    --gr\\.cols-fit: "grid-template-columns: repeat(auto-fit, minmax({$}))";
    --gr\\.cols-fill: "grid-template-columns: repeat(auto-fill, minmax({$}))";
    --\\$subtitle-text: [t.sz @text-size-subtitle] [flex] [fl.main center] [p 0px 4px];
    --\\$title-text: [t.sz @text-size-title] [flex] [fl.main center] [p 4px];
}`;
document.head.insertBefore(baseMacros, document.head.firstChild);

// Style setup also creates the built-in macros, so it needs to run first

// Split the regex into parts so that I can edit them easier (the one liner is
// a huge mess to look at).
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
const cssLineCache = {};

// Uncomment these and rebuild for some helpful debugging variables dumped into
// the window.
// window.styleMacro = styleMacro
// window.macro = macro
// window.wsxSheet = sheet

// Takes the {$} string in the macro defs and converts it into an interpolated
// string for JS code gen, with fallbacks that don't cause JS parse errors.
const argReplace = (source) => {
    if (source === undefined) {
        return "undefined"
    }
    if (source === null) {
        return "null"
    }
    return `\`${source.replace(/\{\$\}/g, "${arg}")}\``
};

// Use an attribute to mark tags that should be processed for macros.
// Since both style and link tags ahve the same attributes, specific tag names
// aren't used in the query selecor.
// REFACTOR: use :where() for the tags to make sure it's only those?
const roots = document.querySelectorAll("[ws-root]");
const rules = Array.from(roots)
    .flatMap(source => [...source.sheet.cssRules])
    .filter(rule => rule.selectorText === ".ws-style")
    .flatMap(rule => Array.from(
        rule.style,
        (name) => [name, rule.style.getPropertyValue(name)]
    ));

for (const [key, value] of rules) {
    // Custom css props all start with -- and that's what allows the custom
    // macros to be defined without the CSS parser throwing them away, so the
    // -- gets removed before processing the name.
    const ruleName = key.slice(2);
    const parts = [...value.matchAll(partsRegex)].map(
        // RegExp.groups isn't a real object, this converts it to one.
        ({ groups }) => ({ ...groups })
    );

    const def = parts.find(
        prop => prop.def !== undefined
    );
    const props = parts.filter(item => item !== def);

    const cssProps =
        props.map(
            ({ name, variable }) => {
                // Have to escape the escape sequences so that when it's
                // interpolated into the template string it produces the
                // correct sequence for the function to parse.
                // I don't know why I did this to myself.
                if (variable !== undefined) {
                    const varname = variable.slice(1);
                    return `--${varname}: var(--wsx\\\\.\\\\${variable}\${varState}\\\\.\${size ?? ""}) !important`
                }
                if (name === undefined) {
                    return null
                }
                return `${name}: var(--wsx\\\\.${name}\${varState}\\\\.\${size ?? ""}) !important`
            }
        )
        .filter(prop => prop !== null);
    // Selector uses both [key] and [key as checks instead of trying to to
    // figure out if each macro takes an argument or not. Both of those
    // sequences will be unique to a macro, so using both works.
    const baseSelector = `:where([${config.attr}~="[${ruleName}\${state}"], [${config.attr}~="[${ruleName}\${state}]"])`;

    // The lines of CSS that setup styles for macros are cached as each macro
    // is created, so that any macros using other macros can use a copy of the
    // raw CSS for the setup, rather than trying to do complex css rule sharing.
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

    // Style macros are used to create teh CSS for a macro when it get's used.
    // This serves 2 purposes:
    // - Unused macros don't generate any CSS that needs to get processed
    // - States can be added at any time with new CSS generated for that state
    //   so that any CSS state combinations can be used.
    // The extra bit of code for the insertion point calculation are there so
    // that size-based CSS gets inserted in such a way that it always overrides
    // CSS not related to specific screen sizes.
    styleMacro[ruleName] = new Function(
        `{ state = "", varState, sheet, size }`,
        "sizer",
        `const selectorBase = \`${baseSelector}\${state}\`
        const selector =
            (size === undefined)
            ? selectorBase
            : selectorBase.replace(/ws-x~="\\[/g, s => \`\${s}\${size}|\`)
        const css = sizer(size, \`\${selector} {\n${cssLines.join(";")}\n}\`)
        const rules = Array.from(sheet.cssRules)
        const index =
            (size === undefined)
            ? rules.findLastIndex(rule => rule.media === undefined)
            : rules.findLastIndex(
                rule => {
                    return (
                        rule.media !== undefined
                        && rule.cssRules[0].selectorText > selector
                    )
                }
            )
        sheet.insertRule(css, (index === -1) ? sheet.cssRules.length : index)`
    );

    // Macro function lines get generated in order of the definitions, ensuring
    // that the application of variables that affect styles is deterministic
    // regardless of what the browser might normally try and do.
    const applyLines = props.map(
        ({ name, value, func, arg, variable, string }) => {
            if (name !== undefined || variable !== undefined) {
                const valueTemplate = argReplace(value ?? string);
                const varName =
                    (name !== undefined)
                    ? `--wsx.${name}\${varState}.\${size ?? ""}`
                    : `--wsx.\\${variable}\${varState}.\${size ?? ""}`;
                return `list.push([\`${varName}\`, format(${valueTemplate})])`
            }
            const argTemplate = argReplace(arg);
            return `macro["${func}"]({list, format, macro, varState, arg: ${argTemplate}, size})`
        }
    );
    const apply = new Function(
        `{ list, format, macro, varState = "", arg = ${JSON.stringify(def?.def)}, size }`,
        applyLines.join("\n")
    );
    cssLineCache[ruleName] = cssLines;
    macro[ruleName] = apply;
}

const base$2 = `
<style>
@keyframes hi{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
circle{animation-name:hi;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:50% 50%;}
circle:nth-child(1){animation-duration:4s;}
circle:nth-child(2){animation-duration:3s;animation-direction:reverse;}
circle:nth-child(3){animation-duration:2s;}
</style>
<svg style="width:var(--size);height:var(--size)" viewBox="0 0 100 100"><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="48" stroke-dasharray="0 37.7 75.4 75.4 75.4 75.4"/><circle stroke="var(--ripple-base-color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="40" stroke-dasharray="0 31.4 62.83 62.83 62.83 62.83"/><circle stroke="var(--color)" cx="50" cy="50" stroke-width="4" fill="transparent" r="32" stroke-dasharray="0 12.57 25.13 25.13 25.13 25.13 25.13 25.13 25.13 25.13"/></svg>`;
const template$2 = document.createElement("template");
template$2.innerHTML = base$2;
customElements.define(
    "ws-circle-spinner",
    class WSHex extends HTMLElement {
        constructor() {
            super();

            const root = template$2.content.cloneNode(true);
            const shadow = this.attachShadow({ mode: "closed" });
            shadow.appendChild(root);
        }
    }
);

const base$1 = `
<style>
@keyframes hi{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}
path{animation-name:hi;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:50% 50%;}
path:nth-child(1){animation-duration:3s;}
path:nth-child(2){animation-duration:2s;animation-direction:reverse;}
path:nth-child(3){animation-duration:1s;}
</style><svg style="width: var(--size); height: var(--size);" viewBox="0 0 100 100"><path stroke="var(--color)" stroke-width="4" fill="none" d="M91.57 26v48L50 98 8.43 74V26L50 2l41.57 24Z"/><path stroke="var(--ripple-base-color)" stroke-width="4" fill="none" d="M81.177 32v36L50 86 18.823 68V32L50 14l31.177 18Z"/><path stroke="var(--color)" stroke-width="4" fill="none" d="M70.785 38v24L50 74 29.215 62V38L50 26l20.785 12Z"/></svg>`;
const template$1 = document.createElement("template");
template$1.innerHTML = base$1;
customElements.define(
    "ws-hexagon-spinner",
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
    border-radius: 4px;
    background-color: var(--background-element);
    position: relative;
    overflow: hidden;
    --color: var(--default);
    --ripple-base-color: var(--default-ripple);
}
div::before, div::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    --range: calc(var(--max) - var(--min));
    --bar-width: calc(100% * var(--value) / var(--range));
    --buffer-width: calc(100% * var(--buffer) / var(--range));
}
div::before {
    background-color: var(--color);
}
div::after {
    background-color: var(--ripple-base-color);
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
`;
const template = document.createElement("template");
template.innerHTML = base;
customElements.define(
    "ws-progress",
    class WSProgress extends HTMLElement {
        static observedAttributes = ["min", "max", "value", "buffer"]

        constructor() {
            super();

            const root = template.content.cloneNode(true);
            const shadow = this.attachShadow({ mode: "closed" });
            shadow.appendChild(root);
            this.core = shadow.querySelector("div");
        }

        get value() {
            return parseFloat(this.getAttribute("value") ?? "0")
        }
        get buffer() {
            return parseFloat(this.getAttribute("buffer") ?? "0")
        }
        get min() {
            return parseFloat(this.getAttribute("min") ?? "0")
        }
        get max() {
            return parseFloat(this.getAttribute("max") ?? "1")
        }
        get busy() {
            return this.getAttribute("busy") !== null
        }

        set value(next) { this.setAttribute("value", next.toString()); }
        set buffer(next) { this.setAttribute("buffer", next.toString()); }
        set min(next) { this.setAttribute("min", next.toString()); }
        set max(next) { this.setAttribute("max", next.toString()); }
        set busy(next) { this.setAttribute("busy", next.toString()); }

        #setSize(attr, defValue) {
            this.core.style.setProperty(
                `--${attr}`,
                this.getAttribute(attr) || defValue
            );
        }

        connectedCallback() {
            this.#setSize("value", "0");
            this.#setSize("buffer", "0");
            this.#setSize("min", "0");
            this.#setSize("max", "1");
        }

        attributeChangedCallback(name, prev, next) {
            this.#setSize(name, next);
        }
    }
);

const formatPart = (key, value) => {
    if (key.startsWith("@@") === true) {
        if (value === true) {
            return key
        }
        return `${key}:${value}`
    }
    if (value === true) {
        return `[${key}]`
    }
    return `[${key} ${value}]`
};
/**
Takes an object and generates the ws-x string.
@param {{
    [name: string]: string | string[] | null
}} obj
@return {string}
*/
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

const styleCache = {};
const sizeLims = {
    sm: "(max-width: 600px)",
    md: "(max-width: 1024px)",
    lg: "(min-width: 1025px)",
    lnd: "(orientation: landscape)",
    prt: "(orientation: portrait)",
};
const format = (value) => value?.replace(
    /@([\w\-]+)/g,
    (_, varName) => `var(--${varName})`
);
const sizer = (size, rule) => {
    if (size === undefined) {
        return rule
    }
    return `@media screen and ${sizeLims[size]} { ${rule} }`
};
const generateStyle = (key, name, args) => {
    const cacheKey = `${args.size ?? ""}|${key}`;
    if (styleCache[cacheKey] === true) {
        return
    }
    styleMacro[name](args, sizer);
    styleCache[cacheKey] = true;
};

const varCache = new WeakMap();
const processMacro = (attr, next, node) => {
    const { name, state, arg, size } = attr.groups;
    const key = `${name}${state ?? ""}`;

    if (name.startsWith("@") === true) {
        next.push([ `--${name.slice(1)}`, arg ]);
        return
    }
    if (macro[name] === undefined) {
        if (name.startsWith("$") === true) {
            return
        }
        console.warn(`No macro defined for ${name} on`, node);
        return
    }

    const varState = state?.replace(/:|\|/g, "_") ?? "";
    generateStyle(
        key,
        name,
        { sheet, state, varState, size }
    );
    macro[name]({
        list: next,
        format,
        macro,
        varState,
        arg: arg?.trim(),
        size,
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
        processMacro(match, next, node);
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
// This horrible regex parses each macro inside of an attribute string with the
// advantage that any incorrectly formatted macro is ignored instead of causing
// errors to fill the console.
const attrRegex = /\[((?<size>\w+)\|)?(?<name>[\$@\w\-\.]+)(?<state>:[^\s\]]+)?(?<arg>[^\]]+?)?\]/g;
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
// MutationObserver is quite fast even over the whole DOM tree.
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
// Set of nodes that already exists in the DOM that should be processed. Any
// DOM element that was loaded before the script isn't caught by the
// MutationObserver. Ignores anything outside the body.
const initialNodes = [
    document.body,
    ...document.body.querySelectorAll("*")
];
initialNodes.forEach(processNode);

var main = {
    x,
    attr: config.attr
};

export { main as default };
