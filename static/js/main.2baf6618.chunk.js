(this["webpackJsonpreact-dnd"]=this["webpackJsonpreact-dnd"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),p=(n(11),n(4)),c=n(1),u=(n(12),n(5)),s=function(e){var t=e.data,n=e.dispatch;return a.a.createElement("div",{className:t.inDropZone?"drag-drop-zone inside-drag-area":"drag-drop-zone",onDrop:function(e){return function(e){e.preventDefault(),e.stopPropagation();var r=Object(u.a)(e.dataTransfer.files);if(r&&r.length>0){var a=t.fileList.map((function(e){return e.name}));r=r.filter((function(e){return!a.includes(e.name)})),n({type:"ADD_FILE_TO_LIST",files:r}),n({type:"SET_DROP_DEPTH",dropDepth:0}),n({type:"SET_IN_DROP_ZONE",inDropZone:!1})}}(e)},onDragOver:function(e){return function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",n({type:"SET_IN_DROP_ZONE",inDropZone:!0})}(e)},onDragEnter:function(e){return function(e){e.preventDefault(),e.stopPropagation(),n({type:"SET_DROP_DEPTH",dropDepth:t.dropDepth+1})}(e)},onDragLeave:function(e){return function(e){e.preventDefault(),e.stopPropagation(),n({type:"SET_DROP_DEPTH",dropDepth:t.dropDepth-1}),t.dropDepth>0||n({type:"SET_IN_DROP_ZONE",inDropZone:!1})}(e)}},a.a.createElement("p",null,"Drag files here to upload"))};var l=function(){var e=a.a.useReducer((function(e,t){switch(t.type){case"SET_DROP_DEPTH":return Object(c.a)({},e,{dropDepth:t.dropDepth});case"SET_IN_DROP_ZONE":return Object(c.a)({},e,{inDropZone:t.inDropZone});case"ADD_FILE_TO_LIST":return Object(c.a)({},e,{fileList:e.fileList.concat(t.files)});default:return e}}),{dropDepth:0,inDropZone:!1,fileList:[]}),t=Object(p.a)(e,2),n=t[0],r=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"React drag and drop component"),a.a.createElement(s,{data:n,dispatch:r}),a.a.createElement("ol",{className:"dropped-files"},n.fileList.map((function(e){return a.a.createElement("li",{key:e.name},e.name)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.2baf6618.chunk.js.map