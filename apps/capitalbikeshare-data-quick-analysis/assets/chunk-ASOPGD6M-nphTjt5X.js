import{_ as t,m as a,i as r}from"./mermaid-BI-CszJi.js";var s=t(((t,a)=>{const r=t.append("rect");if(r.attr("x",a.x),r.attr("y",a.y),r.attr("fill",a.fill),r.attr("stroke",a.stroke),r.attr("width",a.width),r.attr("height",a.height),a.name&&r.attr("name",a.name),a.rx&&r.attr("rx",a.rx),a.ry&&r.attr("ry",a.ry),void 0!==a.attrs)for(const s in a.attrs)r.attr(s,a.attrs[s]);return a.class&&r.attr("class",a.class),r}),"drawRect"),e=t(((t,a)=>{const r={x:a.startx,y:a.starty,width:a.stopx-a.startx,height:a.stopy-a.starty,fill:a.fill,stroke:a.stroke,class:"rect"};s(t,r).lower()}),"drawBackgroundRect"),n=t(((t,r)=>{const s=r.text.replace(a," "),e=t.append("text");e.attr("x",r.x),e.attr("y",r.y),e.attr("class","legend"),e.style("text-anchor",r.anchor),r.class&&e.attr("class",r.class);const n=e.append("tspan");return n.attr("x",r.x+2*r.textMargin),n.text(s),e}),"drawText"),x=t(((t,a,s,e)=>{const n=t.append("image");n.attr("x",a),n.attr("y",s);const x=r.sanitizeUrl(e);n.attr("xlink:href",x)}),"drawImage"),i=t(((t,a,s,e)=>{const n=t.append("use");n.attr("x",a),n.attr("y",s);const x=r.sanitizeUrl(e);n.attr("xlink:href",`#${x}`)}),"drawEmbeddedImage"),c=t((()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0})),"getNoteRect"),o=t((()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0})),"getTextObj");export{e as a,o as b,i as c,s as d,x as e,n as f,c as g};
