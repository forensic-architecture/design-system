"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),a=require("marked");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),i=r(t),o=r(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".default{background:red}.other{background:#ff0}.alpha{background:#0f0}.beta{background:#f0f}.button{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;border:0;border-radius:0;cursor:pointer;display:inline-block;line-height:1;outline:none;text-align:left}.button--primary{color:#efefef;background-color:red}.button--secondary{color:#333;background-color:initial;box-shadow:inset 0 0 0 2px rgba(0,0,0,.15)}.button--small{font-size:12px;padding:10px 16px;margin:.6em .3em 0 0}.button--medium{font-size:14px;padding:11px 20px}.button--large{font-size:16px;padding:12px 24px}.no-hover{cursor:auto!important}.event-card{box-sizing:border-box;margin:2px 0;padding:15px;transition:.2 ease;background:#a0a0a0;opacity:.92;color:#232323;list-style-type:none;font-size:14px;line-height:20px;transition:background-color .4s;text-align:left;overflow-y:scroll;height:100%;max-width:400px}.event-card:hover{background:#dfdfdf;transition:background-color .4s}.event-card h4{margin-bottom:0;margin-right:5px;text-transform:uppercase;font-size:11px;color:#7a7a7a;font-weight:800}.event-card h4:first-child{margin-top:0}.event-card p{margin:0}.event-card .card-cell,.event-card .card-col,.event-card .card-row{margin:5px 3px 5px 0}.event-card .card-cell.m0,.event-card .card-col.m0,.event-card .card-row.m0{margin:0}.event-card .card-col,.event-card .card-row{display:flex;flex-direction:row}.event-card .card-col .card-cell,.event-card .card-row .card-cell{flex:1}.event-card .card-col{flex-direction:column}.event-card .card-source{margin:0;padding:2px 0;border-radius:3px}.event-card .card-source .source-row{display:flex;flex-direction:row;align-items:flex-start;padding:5px 10px;border-left:3px solid #232323;background:linear-gradient(90deg,#232323 50%,transparent 0);background-size:200% 100%;background-position:100% 100%}.event-card .card-source .source-row:hover{background-color:#232323;color:#fff;cursor:pointer;background-position:0 100%;transition:all 1s ease-in}.event-card .card-source .source-icon{display:flex;align-items:center;font-size:24px;margin-right:15px}.event-card .card-source .source-type{display:inline-block;margin-right:5px;text-transform:uppercase;font-weight:700}.event-card .card-cell a{transition:color .2s}.event-card .card-cell a:hover{color:#7a7a7a;cursor:pointer;transition:color .2s}.event-card .card-cell a.disabled{color:#2c2c2c;font-weight:400;cursor:default}.event-card .card-bottomhalf{transition:.4s ease;height:auto}.event-card .card-bottomhalf.folded{transition:.4s ease;height:0;overflow:hidden}.event-card .card-toggle p{text-align:center;cursor:pointer}.event-card .card-toggle p .arrow-down{display:inline-block;transition:.2s ease;border:solid #7a7a7a;border-width:0 2px 2px 0;padding:3px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.event-card .card-toggle p .arrow-down.folded{transition:.2s ease;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.event-card .card-toggle p:hover .arrow-down{transition:.2s ease;border:solid #232323;border-width:0 2px 2px 0}.event-card .filters{width:100%;margin:5px 0;text-align:left}.event-card .warning{background:#ee4238;color:#fff;text-transform:uppercase;width:100%;text-align:center}.event-card .timestamp{margin-top:0}.event-card .timestamp .estimated-timestamp{color:#a0a0a0;margin-left:5px}.event-card .media{display:flex;max-height:350px;flex-direction:column;cursor:pointer}.event-card .media .img-wrapper{width:100%;display:flex}.event-card .media .img-wrapper img{max-width:100%;height:auto;object-fit:cover}.event-card .media video{width:100%;user-select:none}.event-card .media video:focus{outline:0!important}.event-card .media video::-webkit-media-controls-panel{background-image:none!important;filter:brightness(.9);display:flex;align-self:flex-end;background-color:rgba(238,66,56,.6)}.event-card .media video::-webkit-media-controls-play-button{align-self:center}.event-card .media video::-webkit-media-controls-timeline{display:none}.event-card .category{margin-bottom:5px}.event-card .category .color-category{width:12px;height:12px;border-radius:20px;display:inline-block;margin:0 0 0 5px}.event-card .category p{text-align:right;flex:1}.event-card .summary{overflow:auto;margin-top:0;border-bottom:none;white-space:pre-line}.event-card .filter{display:inline-block;margin:0 5px 0 0}.event-card.selected{background:#efefef}.event-card .card-row{border-color:#a9a9a9}.card-stack{position:absolute;max-height:calc(100% - 180px);height:auto;width:386px;overflow-y:scroll;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);z-index:10;color:#fff;overflow-x:hidden;overflow-y:auto}.card-stack.narrative-mode{right:9px;left:auto;top:237px;height:calc(100% - 407px)}.card-stack.full-height{max-height:calc(100% - 20px)}.card-stack .card-stack-header{min-height:38px;line-height:38px;width:386px;box-sizing:border-box;padding:0 5px;background:#000;border-radius:2px;border:1px solid #000;font-size:14px;transition:.2s ease;text-align:left}.card-stack .card-stack-header:hover{transition:.2s ease}.card-stack .card-stack-header .header-copy{margin:0;padding:0 10px;line-height:20px;text-align:right}.card-stack .card-stack-header .header-copy.top{padding-top:10px}.card-stack .card-stack-header .header-copy:last-child{padding-bottom:10px}.card-stack .card-stack-header .side-menu-burg{position:absolute;left:8px;top:9px}.card-stack .card-stack-header .side-menu-burg span{width:20px}.card-stack .card-stack-content{width:386px}.card-stack .card-stack-content ul{padding:0;margin-top:1px;margin-bottom:0}.card-stack .card-stack-content .card-list{height:auto}.card-stack.folded .card-stack-header{border:0;height:0;overflow:hidden}.card-stack.folded .card-stack-content{height:0;overflow:hidden}li{list-style-type:none}body{font-family:Helvetica,Arial,GT-Zirkon-Regular}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9saWIvc3R5bGVzL2J1dHRvbi5zY3NzIiwic3JjL2xpYi9zdHlsZXMvY2FyZC5zY3NzIiwic3JjL2xpYi9zdHlsZXMvY2FyZHN0YWNrLnNjc3MiLCJzcmMvbGliL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBLFNBQ0UsY0FOVyxDQVFiLE9BQ0UsZUFOWSxDQVFkLE9BQ0UsZUFYYSxDQWFmLE1BQ0UsZUFiWSxDQ2xCZCxRQUNFLHFEQUEyRCxDQUMzRCxlQUFtQixDQUNuQixRQUFTLENBQ1QsZUFBa0IsQ0FDbEIsY0FBZSxDQUNmLG9CQUFxQixDQUNyQixhQUFjLENBQ2QsWUFBYSxDQUNiLGVBQWdCLENBR2xCLGlCQUNFLGFEUmdCLENDU2hCLG9CREVXLENDQWIsbUJBQ0UsVUFBVyxDQUNYLHdCQUE2QixDQUM3QiwwQ0FBcUQsQ0FFdkQsZUFDRSxjQUFlLENBQ2YsaUJBQWtCLENBQ2xCLG9CQUF1QixDQUV6QixnQkFDRSxjQUFlLENBQ2YsaUJBQWtCLENBRXBCLGVBQ0UsY0FBZSxDQUNmLGlCQUFrQixDQUdwQixVQUNFLHFCQUF1QixDQ3BDekIsWUFDRSxxQkFBc0IsQ0FDdEIsWUFBYSxDQUNiLFlBQWEsQ0FDYixrQkFBb0IsQ0FDcEIsa0JGRWdCLENFRGhCLFdBQWEsQ0FDYixhRktnQixDRUpoQixvQkFBcUIsQ0FDckIsY0Y2QlUsQ0U1QlYsZ0JGOEJZLENFM0JaLCtCQUFpQyxDQUNqQyxlQUFnQixDQUNoQixpQkFBa0IsQ0FDbEIsV0FBWSxDQUNaLGVBQWdCLENBakJsQixrQkFvQkksa0JGZGdCLENFZWhCLCtCQUFpQyxDQXJCckMsZUEwQkksZUFBZ0IsQ0FDaEIsZ0JBQWlCLENBQ2pCLHdCQUF5QixDQUN6QixjRk9RLENFTlIsYUZ0QjhCLENFdUI5QixlQUFnQixDQS9CcEIsMkJBa0NNLFlBQWEsQ0FsQ25CLGNBdUNJLFFBQVMsQ0F2Q2IsbUVBNkNJ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 */");var u=function(e){var t=e.primary,a=e.backgroundColor,r=e.borderRadius,i=e.size,o=e.label,s=e.normalCursor,d=c(e,["primary","backgroundColor","borderRadius","size","label","normalCursor"]),u=t?"button--primary":"button--secondary";return n.default.createElement("button",l({type:"button",className:["button","button--".concat(i),u,s?"no-hover":""].join(" "),style:{backgroundColor:a,borderRadius:r}},d),o)};u.propTypes={primary:i.default.bool,backgroundColor:i.default.string,borderRadius:i.default.string,size:i.default.oneOf(["small","medium","large"]),label:i.default.string.isRequired,onClick:i.default.func},u.defaultProps={backgroundColor:"red",borderRadius:"0%",primary:!1,size:"medium",onClick:void 0};var Q=function(t){var a=t.title,r=t.value,i=t.hoverValue,o=void 0===i?null:i,l=s(e.useState(!1),2),c=l[0],d=l[1];return n.default.createElement("div",{className:"card-cell"},a?n.default.createElement("h4",null,a):null,n.default.createElement("div",{style:{width:"fit-content"}},n.default.createElement("div",{onMouseOver:function(){return o&&d(!0)},onMouseOut:function(){return o&&d(!1)}},c?n.default.createElement("span",{style:{pointerEvents:"none",opacity:.8}},n.default.createElement("em",null,o)):n.default.createElement("div",{style:{pointerEvents:"none",display:"inline-block",height:"1.1rem",borderBottom:o&&"1px rgb(235, 68, 62) dashed"}},r))))},m={"es-MX":{loading:"Cargando...",legend:{view2d:{paragraphs:["Seleccionando una serie de filtros verá aparecer eventos en el mapa y en la línea del tiempo.","Cada evento estará coloreado según la persona que dio el testimonio del evento."],colors:[{class:"category_group00",label:"Category Group 00"},{class:"category_group01",label:"Category Group 01"},{class:"category_group02",label:"Category Group 02"},{class:"category_group03",label:"Category Group 03"},{class:"other",label:"Other categories"}]}},toolbar:{title:"TITLE",categories:"Categories",filters:"Filters",explore_by_filter__title:"Explore by filter or category",explore_by_filter__description:"Selecting filters or categories, you'll see only those events that are tagged accordingly. If you select nothing, as well as everything, all data will be displayed.",panels:{mentions:{title:"Personas",overview:"Seleccionar los nombres de personas mostrará eventos en los que esta persona o organización ha sido mencionada, incluyendo el propio testimonio. Entre paréntesis encontrará el número de menciones. Ej. (34)."},categories:{title:"Testimonios",overview:"Seleccionar el nombre de una persona mostrará los eventos descritos por su testimonio. Entre paréntesis encontrará el número de eventos descritos. Ej. (34)."},search:{title:"Directorio de etiquetas",placeholder:"Búsqueda"}}},timeline:{zooms:["3 años","3 meses","3 días","12 horas","2 horas","30 min","10 min"],labels_title:"Testimonios",labels:["Testimony Group 00","Testimony Group 01","Testimony Group 02","Testimony Group 03","Other categories"],info:"Viendo eventos ocurridos entre"},cardstack:{header:"eventos seleccionados",unknown_location:"Localización desconocida",unknown_time:"Día y hora desconocida",timestamp:"Día y hora",estimated:"aproximado",location:"Localización",incident_type:"Tipo de acción",description:"Hechos",people:"Personas en el evento",sources:"Fuentes",category:"Según el testimonio de",communication:"Comunicación",transmitter:"Transmisor",receiver:"Receptor",warning:"(!) HECHOS CUESTIONADOS"}},"en-US":{loading:"Loading...",legend:{view2d:{paragraphs:["Selecting a series of filters, you will be able to explore events on the map of Iguala and on the timeline.","Each event is colored according the person that gave category of the event."],colors:[{class:"category_group00",label:"Category Group 00"},{class:"category_group01",label:"Category Group 01"},{class:"category_group02",label:"Category Group 02"},{class:"category_group03",label:"Category Group 03"},{class:"other",label:"Other categories"}]},default:{header:"Navigating the Platform",intro:["Open source research by [Bellingcat](https://bellingcat.com).<br/>Software and spatialisation by [Forensic Architecture](https://forensic-architecture.org).","Each event represents an occurence that is distinct in time or space, or both. An event is represented by a coloured circle on both the map and the timeline.","Select an event to reveal its content and sources. You can filter events by category or other specified filters in the top left toolbar."],notation:"Combinations of colours within a circle indicate multiple events in a single location.",arrows:"Use the left/right arrows on the keboard to move back and forth between events in time."}},toolbar:{title:"TITLE",panels:{mentions:{title:"Mentions",overview:"Selecting the names of people/organisation will show events in which these have been mentioned in their own testistimony and by others. The number in the parentheses shows how many events contain a mention of a person or organisation, e.g. (34)"},categories:{title:"Testimonies",overview:"Selecting the name of a person will show the events only according to a person’s category or category. The number in the parentheses show how many events are contained in each category, e.g. (34)."},search:{title:"Directory of filters",placeholder:"Search"}},narratives_label:"Narratives",narrative_summary:"Follow a path through the data, from one key event to the next.",categories:"Categories",filters:"Filters",filters_label:"Filters",explore_by_filter__title:"Explore by filter",explore_by_filter__description:"Selecting a filter will show you only those events that are annotated with the filter. If you select nothing, as well as everything, all data will be displayed.",explore_by_category__title:"Explore events by category",explore_by_category__description:""},timeline:{zooms:["3 years","3 months","3 days","12 hours","2 hours","30 min","10 min"],labels_title:"Testimonies",labels:["Testimony Group 00","Testimony Group 01","Testimony Group 02","Testimony Group 03","Other"],info:"Seeing events that occurred between"},cardstack:{header:"selected events",timestamp:"Day and time",unknown_location:"Unknown location",estimated:"estimated",unknown_time:"Unknown time",location:"Localization",incident_type:"Type of action",description:"Summary",filters:"Filters",nofilters:"No known filters for this event.",sources:"Sources",unknown_source:"The information for this source could not be retrieved.",category:"Category",communication:"Communication",transmitter:"Transmitter",receiver:"Receiver",warning:"(!) Highly questioned"}}};function p(e){if(null===e)return null;var t=s(new Intl.DateTimeFormat("en",{year:"numeric",month:"long",day:"2-digit"}).formatToParts(e),5),a=t[0].value,r=t[2].value,n=t[4].value;return"".concat(r," ").concat(a," ").concat(n)}var f=function(e){return 0===e.length};var x=function(e){var t=e.title,a=void 0===t?"Timestamp":t,r=e.timelabel,i=e.language,o=e.precision,l=m[i].cardstack.unknown_time;return null!=r?n.default.createElement("div",{className:"card-cell"},n.default.createElement("h4",null,a),r,o&&""!==o?" - ".concat(o):null):n.default.createElement("div",{className:"card-cell"},n.default.createElement("h4",null,a),l)},g=function(e){var t=e.text,a=e.color,r=void 0===a?"#000":a,i=e.onClick,o=void 0===i?function(){}:i,l=e.normalCursor;return n.default.createElement(u,{size:"small",backgroundColor:r,borderRadius:"12px",primary:!1,label:t,onClick:o,normalCursor:l})},v=function(e){var t=e.isOpen,a=e.toggle,r=t?"arrow-down":"arrow-down folded";return n.default.createElement("div",{className:"card-toggle",onClick:a},n.default.createElement("p",null,n.default.createElement("i",{className:r})))},h=function(e){var t=e.title,a=e.value;return n.default.createElement("div",{className:"card-cell"},t?n.default.createElement("h4",null,t):null,n.default.createElement("div",{dangerouslySetInnerHTML:{__html:o.default("".concat(a))}}))},k=function(t){var a=t.src,r=t.title,i=e.useRef(),o=e.useCallback((function(){var e;return null===(e=i.current)||void 0===e?void 0:e.play()}),[]),l=e.useCallback((function(){var e;return null===(e=i.current)||void 0===e?void 0:e.pause()}),[]),c=function(e){var t;switch(e=e.trim(),!0){case/\.((png)|(jpg)|(jpeg))$/.test(e):t="Image";break;case/\.(mp4)$/.test(e):t="Video";break;case/\.(md)$/.test(e):t="Text";break;case/\.(pdf)$/.test(e):t="Document";break;default:t="Unknown"}return t}(a),s=r&&r.length>50?"".concat(r.slice(0,51),"..."):r;switch(c){case"Video":return n.default.createElement("div",{className:"card-cell media"},r&&n.default.createElement("h4",{title:r},s),n.default.createElement("video",{onMouseEnter:o,onMouseLeave:l,ref:i,disablePictureInPicture:!0},n.default.createElement("source",{src:a})));case"Image":return n.default.createElement("div",{className:"card-cell media"},r&&n.default.createElement("h4",{title:r},s),n.default.createElement("div",{className:"img-wrapper"},n.default.createElement("img",{src:a,alt:"an inline photograph for the event card component"})));default:return null}},F=function(t){var a=t.content,r=void 0===a?[]:a,i=(t.isLoading,t.onSelect),o=void 0===i?function(){}:i,c=t.sources,d=void 0===c?[]:c,u=t.isSelected,m=void 0!==u&&u,F=t.language,b=void 0===F?"en-US":F,E=s(e.useState(!1),2),y=E[0],U=E[1];function B(e){switch(e.kind){case"media":return n.default.createElement("div",{className:"card-cell"},e.value.map((function(e,t){return function(e){var t=e.media,a=e.idx;return n.default.createElement(k,{key:a,src:t.src,title:t.title})}({media:e,idx:t})})));case"line":return n.default.createElement("div",{style:{height:"1rem",width:"100%"}},n.default.createElement("hr",null));case"line-break":return n.default.createElement("div",{style:{height:"".concat(e.times||1,"rem"),width:"100%"}});case"item":return null;case"markdown":return n.default.createElement(h,e);case"tag":return n.default.createElement("div",{className:"card-cell m0",style:{textTransform:"uppercase",fontSize:".8em",lineHeight:".8em"}},n.default.createElement("div",{style:{display:"flex",justifyContent:"flex-".concat(e.align||"start")}},e.value));case"button":return n.default.createElement("div",{className:"card-cell"},e.title&&n.default.createElement("h4",null,e.title),e.value.map((function(e,t){return n.default.createElement(g,l({key:"card-button-".concat(t)},e))})));case"text":return!f(e.value)&&n.default.createElement(Q,e);case"date":return function(e){return n.default.createElement(x,l({language:b,timelabel:p(e.value)},e))}(e);case"links":return n.default.createElement("div",{className:"card-cell"},e.title&&n.default.createElement("h4",null,e.title),n.default.createElement("div",{className:"card-row m0"},e.value.map((function(e,t){var a=e.text,r=e.href;return n.default.createElement("a",{href:r,key:"card-links-url-".concat(t)},a)}))));case"list":return!!e.value.length&&!!e.value.filter((function(e){return!f(e)})).length?n.default.createElement("div",null,e.title&&n.default.createElement("h4",null,e.title),n.default.createElement("div",{className:"card-row m0"},e.value.map((function(e,t){return n.default.createElement(Q,l({key:"card-list-text-".concat(t),value:e},e))})))):null;default:return null}}return d=[],n.default.createElement("li",{className:"event-card ".concat(m?"selected":""),onClick:o},r.map((function(e){return function(e){return n.default.createElement("div",{className:"card-row"},e.map((function(e){return n.default.createElement(n.default.Fragment,null,B(e))})))}(e)})),y&&n.default.createElement("div",{className:"card-bottomhalf"},d.map((function(e){return n.default.createElement("div",{className:"card-row"})}))),d.length>0?0===d.length&&n.default.createElement(v,{toggle:function(){return U(!y)},isOpen:y}):null)},b={basic:function(e){var t=e.event;return[[{kind:"date",title:"Incident Date",value:t.datetime||t.date||""},{kind:"text",title:"Location",value:t.location||"—"}],[{kind:"line-break",times:.4}],[{kind:"text",title:"Summary",value:t.description||"",scaleFont:1.1}]]},sourced:function(e){var t=e.event;return[[{kind:"date",title:"Incident Date",value:t.datetime||t.date||""},{kind:"text",title:"Location",value:t.location||"—"}],[{kind:"line-break",times:.4}],[{kind:"text",title:"Summary",value:t.description||"",scaleFont:1.1}],[{kind:"button",title:"Sources",value:t.sources.map((function(e,t){return{text:"Source ".concat(t+1),href:e,color:null,onClick:function(){return window.open(e,"_blank")}}}))}]]},us_protests:function(e){var t,a=e.event,r=e.colors,n=e.coloringSet,i=e.getFilterIdxFromColorSet;switch(a.location_precision){case"Generalised":t="No location data";break;case"Estimated":t="Precise location estimated";break;case"Self-reported":t="Location reported by witness";break;case"Confirmed":default:t=null}return[[{kind:"tag",align:"end",value:"Incident #".concat(a.incident_id)}],[{kind:"line"}],[{kind:"date",title:"Incident Date",value:a.datetime},{kind:"text",title:"Location",hoverValue:t,value:a.location}],[{kind:"line-break",times:.4}],[{kind:"text",title:"Summary",value:a.description,scaleFont:1.1}],[{kind:"line-break",times:.4}],[{kind:"button",title:"Type of Violation",value:a.associations.slice(0,-1).map((function(e){return{text:e,color:i(e,n)>=0?r[i(e,n)]:null,normalCursor:!0}}))},{kind:"button",title:"Against",value:a.associations.slice(-1).map((function(e){return{text:e,color:null,normalCursor:!0}}))}],[{kind:"line-break",times:.2}],[{kind:"list",title:"Law Enforcement Agencies",value:a.le_agencys}],[{kind:"text",title:"Name of reporter(s)",value:a.journalist_name},{kind:"text",title:"Network",value:a.news_organisation}],[{kind:"FALSE"===a.hide_source?"button":"markdown",title:"Sources",value:"FALSE"===a.hide_source?a.links.map((function(e,t){return{text:"Source ".concat(t+1),href:e,color:null,onClick:function(){return window.open(e,"_blank")}}})):"Source hidden to protect the privacy and dignity of civilians. Read more [here](https://staging.forensic-architecture.org/wp-content/uploads/2020/09/2020.14.09-FA-Bcat-Mission-Statement.pdf)."}]]},yemen:function(e){var t,a=e.event;switch(a.precision_exact){case"YES":t="Precise location confirmed";break;case"NO":t="Location estimated";break;default:t=null}return[[{kind:"date",title:"Incident Date",value:a.datetime},{kind:"text",title:"Location",hoverValue:t,value:a.location}],[{kind:"line-break",times:.4}],[{kind:"text",title:"Summary",value:a.description,scaleFont:1.1}],[{kind:"line-break",times:.4}],[{kind:"text",title:"Remnants found",value:a.remnants_found}],[{kind:"line-break",times:.4}],[{kind:"text",title:"Manufacturer",value:a.manufacturer}],[{kind:"line-break",times:.4}],[a.type_of_attack&&{kind:"button",title:"Type of Attack",value:a.associations.filter((function(e){return e.title===a.type_of_attack})).map((function(e){return{text:a.type_of_attack,color:e.colour,normalCursor:!0}}))}],[{kind:"line-break",times:.2}],[{kind:"button",title:"Sources",value:a.links.map((function(e,t){return{text:"Source ".concat(t+1),href:e,color:null,onClick:function(){return window.open(e,"_blank")}}}))}],[{kind:"line-break",times:.2}],[{kind:"media",title:"Media",value:a.media}]]}};exports.Button=u,exports.Card=F,exports.CardStack=function(t){var a=t.isCardstack,r=void 0===a||a,i=t.isLoading,o=void 0!==i&&i,l=t.language,c=void 0===l?"en-US":l,s=t.narrative,d=void 0===s?null:s,u=t.onHighlight,Q=void 0===u?function(){}:u,p=t.onSelect,f=void 0===p?function(){}:p,x=t.onToggleCardstack,g=void 0===x?function(){}:x,v=t.onViewSource,h=void 0===v?function(){}:v,k=t.timelineDims,b=void 0===k?{height:250,width:0,marginLeft:100,marginTop:15,marginBottom:60,contentHeight:200,width_controls:100}:k,E=t.selected,y=void 0===E?null:E,U=t.sourceError,B=void 0!==U&&U,N=e.useRef([]),C=e.useRef(),L=e.useRef();e.useEffect((function(){!!d&&function(e){var t=e.to,a=void 0===t?null:t,r=e.duration,n=void 0===r?500:r,i=a,o=window.offsetTop,l=i.scrollTop,c=o-l,s=0;!function e(){var t,a,r,o=(t=s+=20,a=l,r=c,(t/=n/2)<1?r/2*t*t+a:-r/2*((t-=1)*(t-2)-1)+a);i.scrollTop=o,s<n&&setTimeout(e,20)}()}({from:N[d.current].current.offsetTop,to:C.current,duration:500})}),[d]),e.useEffect((function(){}),[y]);var w,D,S=function(t,a){return a||(a=t.map((function(e){return!0}))),N.current=[],t.map((function(t,r){var i,l=e.createRef();return N.current[r]=l,n.default.createElement(F,{key:"card-stack-iten-".concat(r),event:t,ref:l,sourceError:B,language:c,isLoading:o,isSelected:a[r],onViewSource:h,onHighlight:Q,onSelect:f,idx:r,inlineMedia:null==t||null===(i=t.sources[0])||void 0===i?void 0:i.paths})}))},I=function(){return n.default.createElement("div",{id:"card-stack-content",className:"card-stack-content"},n.default.createElement("ul",null,y.length>0?S(y):null))},R=function(){return n.default.createElement("div",{id:"card-stack-content",className:"card-stack-content",ref:L},n.default.createElement("ul",null,(e=d.steps,t=e.map((function(e,t){return t===d.current})),S(e,t))));var e,t};return n.default.createElement(n.default.Fragment,null,(D="calc(100% - 237px - ".concat(b.height,"px)"),(null==y?void 0:y.length)>0?d?n.default.createElement("div",{id:"card-stack",ref:C,className:"card-stack narrative-mode\n            ".concat(r?"":" folded"),style:{height:D}},R()):n.default.createElement("div",{id:"card-stack",className:"card-stack\n            ".concat(r?"":" folded")},(w=m[c].cardstack.header,n.default.createElement("div",{id:"card-stack-header",className:"card-stack-header",onClick:function(){return g()}},n.default.createElement("button",{className:"side-menu-burg is-active"},n.default.createElement("span",null)),n.default.createElement("p",{className:"header-copy top"},"".concat(y.length," ").concat(w)))),I()):n.default.createElement("div",null)))},exports.Spinner=function(e){var t=e.small;return n.default.createElement("div",{className:"spinner ".concat(t?"small":"")},n.default.createElement("div",{className:"double-bounce-overlay"}),n.default.createElement("div",{className:"double-bounce"}))},exports.generateCardLayout=b;
//# sourceMappingURL=react.js.map