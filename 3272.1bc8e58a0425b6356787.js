(self.webpackChunkmodel_preds=self.webpackChunkmodel_preds||[]).push([[3272],{3272:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createSwipeBackGesture:()=>s});var a=r(2377),n=r(9461);r(960);const s=(e,t,r,s,o)=>{const c=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{s(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,r=e.deltaX/t,n=e.velocityX,s=n>=0&&(n>.2||e.deltaX>t/2),d=(s?1-r:r)*t;let i=0;if(d>5){const e=d/Math.abs(n);i=Math.min(e,540)}o(s,r<=0?.01:(0,a.j)(0,r,.9999),i)}})}}}]);