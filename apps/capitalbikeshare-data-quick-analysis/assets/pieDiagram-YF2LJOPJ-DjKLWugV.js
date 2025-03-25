import{p as t}from"./chunk-TMUBEWPD-DJRqYmW2.js";import{_ as e,g as a,s as n,a as i,b as r,n as o,o as s,l,c as p,D as c,H as d,N as u,d as f,v as m,F as g}from"./mermaid-BI-CszJi.js";import{p as h}from"./gitGraph-YCYPL57B-DTonYtFa.js";import"./transform-CdY8z5kT.js";import{d as x}from"./arc-B5qYPUYs.js";import{o as y}from"./ordinal-DDUp3AbE.js";import{b as w,t as S,n as $}from"./step-xJWGRC3d.js";import"./index-kAbxqOS5.js";import"./_baseEach-C4Gv2TKe.js";import"./_baseUniq-DaNc0Gt2.js";import"./min-D0K32hqh.js";import"./_baseMap-CLDR0GqA.js";import"./clone-CDS1CeAK.js";import"./init-DLRA0X12.js";function b(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function D(t){return t}var T=g.pie,v={sections:new Map,showData:!1},A=v.sections,C=v.showData,j=structuredClone(T),k={getConfig:e((()=>structuredClone(j)),"getConfig"),clear:e((()=>{A=new Map,C=v.showData,m()}),"clear"),setDiagramTitle:s,getDiagramTitle:o,setAccTitle:r,getAccTitle:i,setAccDescription:n,getAccDescription:a,addSection:e((({label:t,value:e})=>{A.has(t)||(A.set(t,e),l.debug(`added new section: ${t}, with value: ${e}`))}),"addSection"),getSections:e((()=>A),"getSections"),setShowData:e((t=>{C=t}),"setShowData"),getShowData:e((()=>C),"getShowData")},M=e(((e,a)=>{t(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)}),"populateDb"),z={parse:e((async t=>{const e=await h("pie",t);l.debug(e),M(e,k)}),"parse")},O=e((t=>`\n  .pieCircle{\n    stroke: ${t.pieStrokeColor};\n    stroke-width : ${t.pieStrokeWidth};\n    opacity : ${t.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${t.pieOuterStrokeColor};\n    stroke-width: ${t.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${t.pieTitleTextSize};\n    fill: ${t.pieTitleTextColor};\n    font-family: ${t.fontFamily};\n  }\n  .slice {\n    font-family: ${t.fontFamily};\n    fill: ${t.pieSectionTextColor};\n    font-size:${t.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${t.pieLegendTextColor};\n    font-family: ${t.fontFamily};\n    font-size: ${t.pieLegendTextSize};\n  }\n`),"getStyles"),W=e((t=>{const e=[...t.entries()].map((t=>({label:t[0],value:t[1]}))).sort(((t,e)=>e.value-t.value));return function(){var t=D,e=b,a=null,n=w(0),i=w(S),r=w(0);function o(o){var s,l,p,c,d,u=(o=$(o)).length,f=0,m=new Array(u),g=new Array(u),h=+n.apply(this,arguments),x=Math.min(S,Math.max(-S,i.apply(this,arguments)-h)),y=Math.min(Math.abs(x)/u,r.apply(this,arguments)),w=y*(x<0?-1:1);for(s=0;s<u;++s)(d=g[m[s]=s]=+t(o[s],s,o))>0&&(f+=d);for(null!=e?m.sort((function(t,a){return e(g[t],g[a])})):null!=a&&m.sort((function(t,e){return a(o[t],o[e])})),s=0,p=f?(x-u*w)/f:0;s<u;++s,h=c)l=m[s],c=h+((d=g[l])>0?d*p:0)+w,g[l]={data:o[l],index:s,value:d,startAngle:h,endAngle:c,padAngle:y};return g}return o.value=function(e){return arguments.length?(t="function"==typeof e?e:w(+e),o):t},o.sortValues=function(t){return arguments.length?(e=t,a=null,o):e},o.sort=function(t){return arguments.length?(a=t,e=null,o):a},o.startAngle=function(t){return arguments.length?(n="function"==typeof t?t:w(+t),o):n},o.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:w(+t),o):i},o.padAngle=function(t){return arguments.length?(r="function"==typeof t?t:w(+t),o):r},o}().value((t=>t.value))(e)}),"createPieArcs"),F={parser:z,db:k,renderer:{draw:e(((t,e,a,n)=>{l.debug("rendering pie chart\n"+t);const i=n.db,r=p(),o=c(i.getConfig(),r.pie),s=18,m=450,g=m,h=d(e),w=h.append("g");w.attr("transform","translate(225,225)");const{themeVariables:S}=r;let[$]=u(S.pieOuterStrokeWidth);$??($=2);const b=o.textPosition,D=Math.min(g,m)/2-40,T=x().innerRadius(0).outerRadius(D),v=x().innerRadius(D*b).outerRadius(D*b);w.append("circle").attr("cx",0).attr("cy",0).attr("r",D+$/2).attr("class","pieOuterCircle");const A=i.getSections(),C=W(A),j=[S.pie1,S.pie2,S.pie3,S.pie4,S.pie5,S.pie6,S.pie7,S.pie8,S.pie9,S.pie10,S.pie11,S.pie12],k=y(j);w.selectAll("mySlices").data(C).enter().append("path").attr("d",T).attr("fill",(t=>k(t.data.label))).attr("class","pieCircle");let M=0;A.forEach((t=>{M+=t})),w.selectAll("mySlices").data(C).enter().append("text").text((t=>(t.data.value/M*100).toFixed(0)+"%")).attr("transform",(t=>"translate("+v.centroid(t)+")")).style("text-anchor","middle").attr("class","slice"),w.append("text").text(i.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const z=w.selectAll(".legend").data(k.domain()).enter().append("g").attr("class","legend").attr("transform",((t,e)=>"translate(216,"+(22*e-22*k.domain().length/2)+")"));z.append("rect").attr("width",s).attr("height",s).style("fill",k).style("stroke",k),z.data(C).append("text").attr("x",22).attr("y",14).text((t=>{const{label:e,value:a}=t.data;return i.getShowData()?`${e} [${a}]`:e}));const O=512+Math.max(...z.selectAll("text").nodes().map((t=>(null==t?void 0:t.getBoundingClientRect().width)??0)));h.attr("viewBox",`0 0 ${O} 450`),f(h,m,O,o.useMaxWidth)}),"draw")},styles:O};export{F as diagram};
