"use strict";(self["webpackChunkweb_project"]=self["webpackChunkweb_project"]||[]).push([[198],{8198:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var a=i(6913);const s={class:"contact-container"},o={id:"contact",class:"contact-header"},r={class:"title"},n={class:"contact-content"},l={class:"contact-info"},c={class:"info-card"},m={class:"form-group"},d={class:"form-group"},h={key:0,class:"error-message"},u={class:"form-group"},f={class:"form-group"},p=["disabled"];function b(e,t,i,b,g,v){const w=(0,a.g2)("gradient-text");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",o,[(0,a.Lk)("h1",r,[(0,a.bF)(w,null,{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("联系我")])),void 0,!0),_:1})]),t[8]||(t[8]=(0,a.Lk)("p",{class:"subtitle"},"如果您有任何问题或合作意向，欢迎随时联系我",-1))]),(0,a.Lk)("div",n,[(0,a.Lk)("div",l,[(0,a.Lk)("div",c,[t[9]||(t[9]=(0,a.Lk)("i",{class:"fas fa-envelope"},null,-1)),t[10]||(t[10]=(0,a.Lk)("h3",null,"邮箱",-1)),t[11]||(t[11]=(0,a.Lk)("p",null,"zhuyiming023@gmail.com",-1)),(0,a.Lk)("button",{class:"copy-btn",onClick:t[0]||(t[0]=e=>v.copyToClipboard("zhuyiming023@gmail.com"))}," 复制邮箱 ")]),t[12]||(t[12]=(0,a.Fv)('<div class="info-card" data-v-22d43de6><i class="fab fa-weixin" data-v-22d43de6></i><h3 data-v-22d43de6>微信</h3><p data-v-22d43de6>In Blue $$ Sky</p><img src="/images/qrcode.jpg" alt="WeChat QR Code" class="qr-code" data-v-22d43de6></div><div class="info-card" data-v-22d43de6><i class="fab fa-github" data-v-22d43de6></i><h3 data-v-22d43de6>GitHub</h3><p data-v-22d43de6>github.com/TechLeanrning</p><a href="https://github.com/TechLeanrning" target="_blank" class="link-btn" data-v-22d43de6> 访问主页 </a></div>',2))]),(0,a.Lk)("form",{class:"contact-form",onSubmit:t[5]||(t[5]=(0,a.D$)(((...e)=>v.submitForm&&v.submitForm(...e)),["prevent"]))},[t[18]||(t[18]=(0,a.Lk)("h2",null,"发送消息",-1)),(0,a.Lk)("div",m,[t[13]||(t[13]=(0,a.Lk)("label",{for:"name"},"姓名",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>g.form.name=e),required:"",placeholder:"请输入您的姓名"},null,512),[[a.Jo,g.form.name]])]),(0,a.Lk)("div",d,[t[14]||(t[14]=(0,a.Lk)("label",{for:"email"},"邮箱",-1)),(0,a.bo)((0,a.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>g.form.email=e),required:"",class:(0,a.C4)({invalid:g.showErrors&&!v.validateEmail(g.form.email)}),placeholder:"请输入您的邮箱"},null,2),[[a.Jo,g.form.email]]),g.showErrors&&!v.validateEmail(g.form.email)?((0,a.uX)(),(0,a.CE)("span",h," 请输入有效的邮箱地址 ")):(0,a.Q3)("",!0)]),(0,a.Lk)("div",u,[t[15]||(t[15]=(0,a.Lk)("label",{for:"subject"},"主题",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"subject","onUpdate:modelValue":t[3]||(t[3]=e=>g.form.subject=e),required:"",placeholder:"请输入消息主题"},null,512),[[a.Jo,g.form.subject]])]),(0,a.Lk)("div",f,[t[16]||(t[16]=(0,a.Lk)("label",{for:"message"},"消息内容",-1)),(0,a.bo)((0,a.Lk)("textarea",{id:"message","onUpdate:modelValue":t[4]||(t[4]=e=>g.form.message=e),required:"",rows:"6",placeholder:"请输入您的消息内容"},null,512),[[a.Jo,g.form.message]])]),(0,a.Lk)("button",{type:"submit",class:"submit-btn",disabled:g.submitting},[t[17]||(t[17]=(0,a.Lk)("i",{class:"fas fa-paper-plane"},null,-1)),(0,a.eW)(" "+(0,a.v_)(g.submitting?"发送中...":"发送消息"),1)],8,p)],32)]),g.notification.show?((0,a.uX)(),(0,a.CE)("div",{key:0,class:(0,a.C4)(["notification",g.notification.type]),onClick:t[6]||(t[6]=e=>g.notification.show=!1)},(0,a.v_)(g.notification.message),3)):(0,a.Q3)("",!0)])}var g=i(574);class v{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const w=()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},k={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:w()},y=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},L=(e,t="https://api.emailjs.com")=>{if(!e)return;const i=y(e);k.publicKey=i.publicKey,k.blockHeadless=i.blockHeadless,k.storageProvider=i.storageProvider,k.blockList=i.blockList,k.limitRate=i.limitRate,k.origin=i.origin||t},j=async(e,t,i={})=>{const a=await fetch(k.origin+e,{method:"POST",headers:i,body:t}),s=await a.text(),o=new v(a.status,s);if(a.ok)return o;throw o},_=(e,t,i)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||"string"!==typeof i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},C=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},T=e=>e.webdriver||!e.languages||0===e.languages.length,P=()=>new v(451,"Unavailable For Headless Browser"),F=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"},S=e=>!e.list?.length||!e.watchVariable,E=(e,t)=>e instanceof FormData?e.get(t):e[t],I=(e,t)=>{if(S(e))return!1;F(e.list,e.watchVariable);const i=E(t,e.watchVariable);return"string"===typeof i&&e.list.includes(i)},R=()=>new v(403,"Forbidden"),V=(e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"},q=async(e,t,i)=>{const a=Number(await i.get(e)||0);return t-Date.now()+a},x=async(e,t,i)=>{if(!t.throttle||!i)return!1;V(t.throttle,t.id);const a=t.id||e,s=await q(a,t.throttle,i);return s>0||(await i.set(a,Date.now().toString()),!1)},H=()=>new v(429,"Too Many Requests"),K=async(e,t,i,a)=>{const s=y(a),o=s.publicKey||k.publicKey,r=s.blockHeadless||k.blockHeadless,n=s.storageProvider||k.storageProvider,l={...k.blockList,...s.blockList},c={...k.limitRate,...s.limitRate};if(r&&T(navigator))return Promise.reject(P());if(_(o,e,t),C(i),i&&I(l,i))return Promise.reject(R());if(await x(location.pathname,c,n))return Promise.reject(H());const m={lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:i};return j("/api/v1.0/email/send",JSON.stringify(m),{"Content-type":"application/json"})},N=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},D=e=>"string"===typeof e?document.querySelector(e):e,J=async(e,t,i,a)=>{const s=y(a),o=s.publicKey||k.publicKey,r=s.blockHeadless||k.blockHeadless,n=k.storageProvider||s.storageProvider,l={...k.blockList,...s.blockList},c={...k.limitRate,...s.limitRate};if(r&&T(navigator))return Promise.reject(P());const m=D(i);_(o,e,t),N(m);const d=new FormData(m);return I(l,d)?Promise.reject(R()):await x(location.pathname,c,n)?Promise.reject(H()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",o),j("/api/v1.0/email/send-form",d))},O={init:L,send:K,sendForm:J,EmailJSResponseStatus:v},U={name:"Contact",components:{GradientText:g.A},data(){return{form:{name:"",email:"",subject:"",message:""},submitting:!1,notification:{show:!1,message:"",type:"success"},emailjsConfig:{serviceId:"",templateId:"",publicKey:""},showErrors:!1}},methods:{async submitForm(){this.submitting=!0;try{if(!this.validateForm())throw new Error("请填写所有必填字段");const e={from_name:this.form.name,from_email:this.form.email,subject:this.form.subject,message:this.form.message,to_name:"一鸣Tech",reply_to:this.form.email};await O.send(this.emailjsConfig.serviceId,this.emailjsConfig.templateId,e,this.emailjsConfig.publicKey),this.showNotification("消息发送成功！","success"),this.resetForm()}catch(e){console.error("发送失败:",e),this.showNotification(e.message||"发送失败，请稍后重试","error")}finally{this.submitting=!1}},validateForm(){return this.form.name.trim()&&this.form.email.trim()&&this.form.subject.trim()&&this.form.message.trim()&&this.validateEmail(this.form.email)},validateEmail(e){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return t.test(e)},resetForm(){this.form={name:"",email:"",subject:"",message:""}},showNotification(e,t="success"){this.notification={show:!0,message:e,type:t},setTimeout((()=>{this.notification.show=!1}),3e3)},copyToClipboard(e){navigator.clipboard.writeText(e).then((()=>{this.showNotification("复制成功！")})).catch((()=>{this.showNotification("复制失败，请手动复制","error")}))}},async created(){try{const e=await fetch("/config/email.json"),t=await e.json();this.emailjsConfig=t.emailjs}catch(e){console.error("Failed to load email config:",e)}}};var A=i(6262);const B=(0,A.A)(U,[["render",b],["__scopeId","data-v-22d43de6"]]),$=B}}]);