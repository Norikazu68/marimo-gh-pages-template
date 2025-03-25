import{a as t,g as e,f as n,d as i}from"./chunk-ASOPGD6M-nphTjt5X.js";import{_ as s,g as r,s as a,a as o,b as c,n as l,o as h,c as u,d as p,v as y}from"./mermaid-BI-CszJi.js";import{s as d}from"./transform-CdY8z5kT.js";import{d as f}from"./arc-B5qYPUYs.js";import"./index-kAbxqOS5.js";import"./step-xJWGRC3d.js";var g=function(){var t=s((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),e=[6,8,10,11,12,14,16,17,18],n=[1,9],i=[1,10],r=[1,11],a=[1,12],o=[1,13],c=[1,14],l={trace:s((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:s((function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:i.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 9:this.$=r[o].trim(),i.setAccTitle(this.$);break;case 10:case 11:this.$=r[o].trim(),i.setAccDescription(this.$);break;case 12:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 13:i.addTask(r[o-1],r[o]),this.$="task"}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:i,14:r,16:a,17:o,18:c},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:n,12:i,14:r,16:a,17:o,18:c},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:s((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:s((function(t){var e=this,n=[0],i=[],r=[null],a=[],o=this.table,c="",l=0,h=0,u=a.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var f=p.yylloc;a.push(f);var g=p.options&&p.options.ranges;function m(){var t;return"number"!=typeof(t=i.pop()||p.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,s((function(t){n.length=n.length-2*t,r.length=r.length-t,a.length=a.length-t}),"popStack"),s(m,"lex");for(var x,k,_,b,v,w,$,T,M={};;){if(k=n[n.length-1],this.defaultActions[k]?_=this.defaultActions[k]:(null==x&&(x=m()),_=o[k]&&o[k][x]),void 0===_||!_.length||!_[0]){var S="";for(v in T=[],o[k])this.terminals_[v]&&v>2&&T.push("'"+this.terminals_[v]+"'");S=p.showPosition?"Parse error on line "+(l+1)+":\n"+p.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(S,{text:p.match,token:this.terminals_[x]||x,line:p.yylineno,loc:f,expected:T})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+x);switch(_[0]){case 1:n.push(x),r.push(p.yytext),a.push(p.yylloc),n.push(_[1]),x=null,h=p.yyleng,c=p.yytext,l=p.yylineno,f=p.yylloc;break;case 2:if(w=this.productions_[_[1]][1],M.$=r[r.length-w],M._$={first_line:a[a.length-(w||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(w||1)].first_column,last_column:a[a.length-1].last_column},g&&(M._$.range=[a[a.length-(w||1)].range[0],a[a.length-1].range[1]]),void 0!==(b=this.performAction.apply(M,[c,h,l,y.yy,_[1],r,a].concat(u))))return b;w&&(n=n.slice(0,-1*w*2),r=r.slice(0,-1*w),a=a.slice(0,-1*w)),n.push(this.productions_[_[1]][0]),r.push(M.$),a.push(M._$),$=o[n[n.length-2]][n[n.length-1]],n.push($);break;case 3:return!0}}return!0}),"parse")},h=function(){return{EOF:1,parseError:s((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:s((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:s((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:s((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:s((function(){return this._more=!0,this}),"more"),reject:s((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:s((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:s((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:s((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:s((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:s((function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1}),"test_match"),next:s((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:s((function(){var t=this.next();return t||this.lex()}),"lex"),begin:s((function(t){this.conditionStack.push(t)}),"begin"),popState:s((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:s((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:s((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:s((function(t){this.begin(t)}),"pushState"),stateStackSize:s((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:s((function(t,e,n,i){switch(n){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}}),"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}}}();function u(){this.yy={}}return l.lexer=h,s(u,"Parser"),u.prototype=l,l.Parser=u,new u}();g.parser=g;var m=g,x="",k=[],_=[],b=[],v=s((function(){k.length=0,_.length=0,x="",b.length=0,y()}),"clear"),w=s((function(t){x=t,k.push(t)}),"addSection"),$=s((function(){return k}),"getSections"),T=s((function(){let t=E();let e=0;for(;!t&&e<100;)t=E(),e++;return _.push(...b),_}),"getTasks"),M=s((function(){const t=[];_.forEach((e=>{e.people&&t.push(...e.people)}));return[...new Set(t)].sort()}),"updateActors"),S=s((function(t,e){const n=e.substr(1).split(":");let i=0,s=[];1===n.length?(i=Number(n[0]),s=[]):(i=Number(n[0]),s=n[1].split(","));const r=s.map((t=>t.trim())),a={section:x,type:x,people:r,task:t,score:i};b.push(a)}),"addTask"),A=s((function(t){const e={section:x,type:x,description:t,task:t,classes:[]};_.push(e)}),"addTaskOrg"),E=s((function(){const t=s((function(t){return b[t].processed}),"compileTask");let e=!0;for(const[n,i]of b.entries())t(n),e=e&&i.processed;return e}),"compileTasks"),P=s((function(){return M()}),"getActors"),I={getConfig:s((()=>u().journey),"getConfig"),clear:v,setDiagramTitle:h,getDiagramTitle:l,setAccTitle:c,getAccTitle:o,setAccDescription:a,getAccDescription:r,addSection:w,getSections:$,getTasks:T,addTask:S,addTaskOrg:A,getActors:P},C=s((t=>`.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${t.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${t.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${t.textColor}\n  }\n\n  .face {\n    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${t.fillType0?`fill: ${t.fillType0}`:""};\n  }\n  .task-type-1, .section-type-1  {\n    ${t.fillType0?`fill: ${t.fillType1}`:""};\n  }\n  .task-type-2, .section-type-2  {\n    ${t.fillType0?`fill: ${t.fillType2}`:""};\n  }\n  .task-type-3, .section-type-3  {\n    ${t.fillType0?`fill: ${t.fillType3}`:""};\n  }\n  .task-type-4, .section-type-4  {\n    ${t.fillType0?`fill: ${t.fillType4}`:""};\n  }\n  .task-type-5, .section-type-5  {\n    ${t.fillType0?`fill: ${t.fillType5}`:""};\n  }\n  .task-type-6, .section-type-6  {\n    ${t.fillType0?`fill: ${t.fillType6}`:""};\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0?`fill: ${t.fillType7}`:""};\n  }\n\n  .actor-0 {\n    ${t.actor0?`fill: ${t.actor0}`:""};\n  }\n  .actor-1 {\n    ${t.actor1?`fill: ${t.actor1}`:""};\n  }\n  .actor-2 {\n    ${t.actor2?`fill: ${t.actor2}`:""};\n  }\n  .actor-3 {\n    ${t.actor3?`fill: ${t.actor3}`:""};\n  }\n  .actor-4 {\n    ${t.actor4?`fill: ${t.actor4}`:""};\n  }\n  .actor-5 {\n    ${t.actor5?`fill: ${t.actor5}`:""};\n  }\n`),"getStyles"),j=s((function(t,e){return i(t,e)}),"drawRect"),V=s((function(t,e){const n=15,i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",n).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");function a(t){const i=f().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function o(t){const i=f().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function c(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return r.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s(a,"smile"),s(o,"sad"),s(c,"ambivalent"),e.score>3?a(r):e.score<3?o(r):c(r),i}),"drawFace"),O=s((function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n}),"drawCircle"),L=s((function(t,e){return n(t,e)}),"drawText"),D=s((function(t,e){function n(t,e,n,i,s){return t+","+e+" "+(t+n)+","+e+" "+(t+n)+","+(e+i-s)+" "+(t+n-1.2*s)+","+(e+i)+" "+t+","+(e+i)}s(n,"genPoints");const i=t.append("polygon");i.attr("points",n(e.x,e.y,50,20,7)),i.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,L(t,e)}),"drawLabel"),F=s((function(t,n,i){const s=t.append("g"),r=e();r.x=n.x,r.y=n.y,r.fill=n.fill,r.width=i.width*n.taskCount+i.diagramMarginX*(n.taskCount-1),r.height=i.height,r.class="journey-section section-type-"+n.num,r.rx=3,r.ry=3,j(s,r),z(i)(n.text,s,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+n.num},i,n.colour)}),"drawSection"),B=-1,N=s((function(t,n,i){const s=n.x+i.width/2,r=t.append("g");B++;r.append("line").attr("id","task"+B).attr("x1",s).attr("y1",n.y).attr("x2",s).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),V(r,{cx:s,cy:300+30*(5-n.score),score:n.score});const a=e();a.x=n.x,a.y=n.y,a.fill=n.fill,a.width=i.width,a.height=i.height,a.class="task task-type-"+n.num,a.rx=3,a.ry=3,j(r,a);let o=n.x+14;n.people.forEach((t=>{const e=n.actors[t].color,i={cx:o,cy:n.y,r:7,fill:e,stroke:"#000",title:t,pos:n.actors[t].position};O(r,i),o+=10})),z(i)(n.task,r,a.x,a.y,a.width,a.height,{class:"task"},i,n.colour)}),"drawTask"),R=s((function(e,n){t(e,n)}),"drawBackgroundRect"),z=function(){function t(t,e,n,s,r,a,o,c){i(e.append("text").attr("x",n+r/2).attr("y",s+a/2+5).style("font-color",c).style("text-anchor","middle").text(t),o)}function e(t,e,n,s,r,a,o,c,l){const{taskFontSize:h,taskFontFamily:u}=c,p=t.split(/<br\s*\/?>/gi);for(let y=0;y<p.length;y++){const t=y*h-h*(p.length-1)/2,c=e.append("text").attr("x",n+r/2).attr("y",s).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",u);c.append("tspan").attr("x",n+r/2).attr("dy",t).text(p[y]),c.attr("y",s+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(c,o)}}function n(t,n,s,r,a,o,c,l){const h=n.append("switch"),u=h.append("foreignObject").attr("x",s).attr("y",r).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,s,r,a,o,c,l),i(u,c)}function i(t,e){for(const n in e)n in e&&t.attr(n,e[n])}return s(t,"byText"),s(e,"byTspan"),s(n,"byFo"),s(i,"_setTextAttrs"),function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),Y={drawRect:j,drawCircle:O,drawSection:F,drawText:L,drawLabel:D,drawTask:N,drawBackgroundRect:R,initGraphics:s((function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}),"initGraphics")},W=s((function(t){Object.keys(t).forEach((function(e){G[e]=t[e]}))}),"setConf"),X={};function q(t){const e=u().journey;let n=60;Object.keys(X).forEach((i=>{const s=X[i].color,r={cx:20,cy:n,r:7,fill:s,stroke:"#000",pos:X[i].position};Y.drawCircle(t,r);const a={x:40,y:n+7,fill:"#666",text:i,textMargin:5|e.boxTextMargin};Y.drawText(t,a),n+=20}))}s(q,"drawActorLegend");var G=u().journey,U=G.leftMargin,H=s((function(t,e,n,i){const s=u().journey,r=u().securityLevel;let a;"sandbox"===r&&(a=d("#i"+e));const o=d("sandbox"===r?a.nodes()[0].contentDocument.body:"body");Z.init();const c=o.select("#"+e);Y.initGraphics(c);const l=i.db.getTasks(),h=i.db.getDiagramTitle(),y=i.db.getActors();for(const u in X)delete X[u];let f=0;y.forEach((t=>{X[t]={color:s.actorColours[f%s.actorColours.length],position:f},f++})),q(c),Z.insert(0,0,U,50*Object.keys(X).length),Q(c,l,0);const g=Z.getBounds();h&&c.append("text").text(h).attr("x",U).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const m=g.stopy-g.starty+2*s.diagramMarginY,x=U+g.stopx+2*s.diagramMarginX;p(c,m,x,s.useMaxWidth),c.append("line").attr("x1",U).attr("y1",4*s.height).attr("x2",x-U-4).attr("y2",4*s.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const k=h?70:0;c.attr("viewBox",`${g.startx} -25 ${x} ${m+k}`),c.attr("preserveAspectRatio","xMinYMin meet"),c.attr("height",m+k+25)}),"draw"),Z={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:s((function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0}),"init"),updateVal:s((function(t,e,n,i){void 0===t[e]?t[e]=n:t[e]=i(n,t[e])}),"updateVal"),updateBounds:s((function(t,e,n,i){const r=u().journey,a=this;let o=0;function c(c){return s((function(s){o++;const l=a.sequenceItems.length-o+1;a.updateVal(s,"starty",e-l*r.boxMargin,Math.min),a.updateVal(s,"stopy",i+l*r.boxMargin,Math.max),a.updateVal(Z.data,"startx",t-l*r.boxMargin,Math.min),a.updateVal(Z.data,"stopx",n+l*r.boxMargin,Math.max),"activation"!==c&&(a.updateVal(s,"startx",t-l*r.boxMargin,Math.min),a.updateVal(s,"stopx",n+l*r.boxMargin,Math.max),a.updateVal(Z.data,"starty",e-l*r.boxMargin,Math.min),a.updateVal(Z.data,"stopy",i+l*r.boxMargin,Math.max))}),"updateItemBounds")}s(c,"updateFn"),this.sequenceItems.forEach(c())}),"updateBounds"),insert:s((function(t,e,n,i){const s=Math.min(t,n),r=Math.max(t,n),a=Math.min(e,i),o=Math.max(e,i);this.updateVal(Z.data,"startx",s,Math.min),this.updateVal(Z.data,"starty",a,Math.min),this.updateVal(Z.data,"stopx",r,Math.max),this.updateVal(Z.data,"stopy",o,Math.max),this.updateBounds(s,a,r,o)}),"insert"),bumpVerticalPos:s((function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos}),"bumpVerticalPos"),getVerticalPos:s((function(){return this.verticalPos}),"getVerticalPos"),getBounds:s((function(){return this.data}),"getBounds")},J=G.sectionFills,K=G.sectionColours,Q=s((function(t,e,n){const i=u().journey;let s="";const r=n+(2*i.height+i.diagramMarginY);let a=0,o="#CCC",c="black",l=0;for(const[h,u]of e.entries()){if(s!==u.section){o=J[a%J.length],l=a%J.length,c=K[a%K.length];let n=0;const r=u.section;for(let t=h;t<e.length&&e[t].section==r;t++)n+=1;const p={x:h*i.taskMargin+h*i.width+U,y:50,text:u.section,fill:o,num:l,colour:c,taskCount:n};Y.drawSection(t,p,i),s=u.section,a++}const n=u.people.reduce(((t,e)=>(X[e]&&(t[e]=X[e]),t)),{});u.x=h*i.taskMargin+h*i.width+U,u.y=r,u.width=i.diagramMarginX,u.height=i.diagramMarginY,u.colour=c,u.fill=o,u.num=l,u.actors=n,Y.drawTask(t,u,i),Z.insert(u.x,u.y,u.x+u.width+i.taskMargin,450)}}),"drawTasks"),tt={setConf:W,draw:H},et={parser:m,db:I,renderer:tt,styles:C,init:s((t=>{tt.setConf(t.journey),I.clear()}),"init")};export{et as diagram};
