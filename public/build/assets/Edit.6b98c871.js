import{L as R}from"./Layout.e382120b.js";import{g as U}from"./debounce.fc910586.js";import{T as $}from"./TextInput.a2141727.js";import{C as B}from"./CheckboxInput.f10b4ae9.js";import{L as F}from"./LoadingButton.85689857.js";import{T as j}from"./TrashedMessage.ffd17295.js";import{D as M}from"./DeleteRestoreComponent.4ff86d86.js";import{_ as O,r as n,o as f,c as S,a as o,b as l,e as p,h as u,t as d,f as k,d as h,w as Y,n as E,g as P}from"./app.ec2edc46.js";import"./Dropdown.eacf22f8.js";import"./FlashMessages.e38ce7e7.js";import"./InputError.6940633d.js";import"./Dialog.b2cea2ae.js";import"./Modal.40562aeb.js";const z={metaInfo(){return{title:this.salary.staff.name}},layout:R,components:{LoadingButton:F,TextInput:$,TrashedMessage:j,CheckboxInput:B,DeleteRestoreComponent:M},props:{salary:Object,members:Array},remember:"form",data(){return{restore:!1,sending:!1,form:{date:this.salary.date,amount:this.salary.amount,staff_id:this.salary.staff.id,settled_on:this.salary.settled_on,description:this.salary.description,advance:!!this.salary.advance},staff:{label:this.salary.staff.name,value:this.salary.staff.id},staff_members:[]}},mounted(){this.staff_members=this.members.map(e=>({value:e.value,label:e.label+(e.salary?" ("+parseFloat(e.salary).toFixed(2)+")":"")})),this.staff_members.push(this.staff)},methods:{staffChanged(e){this.staff=e||null,this.form.staff_id=e?e.value:null},submit(){this.sending=!0,this.$inertia.put(this.route("salaries.update",this.salary.id),this.form,{onFinish:()=>this.sending=!1})},destroy(){this.$modal.show("dialog",{title:"Delete Salary!",text:"Are you sure you want to delete this salary?",buttons:[{title:"Yes",handler:()=>{this.$modal.hide("dialog"),this.$inertia.delete(this.route("salaries.destroy",this.salary.id))}},{title:"No"}]})},destroyPermanently(){this.$modal.show("dialog",{title:"Delete Permanently!",text:"Are you sure you want to permanently delete this salary?",buttons:[{title:"Yes",class:"px-6 py-3 bg-gray-200 hover:bg-gray-400",handler:()=>{this.$modal.hide("dialog"),this.$inertia.delete(this.route("salaries.delete",this.salary.id))}},{title:"No",class:"px-6 py-3 border-l bg-gray-200 hover:bg-gray-400"}]})},restore(){this.$modal.show("dialog",{title:"Restore Salary!",text:"Are you sure you want to restore this salary?",buttons:[{title:"Yes",class:"px-6 py-3 bg-gray-200 hover:bg-gray-400",handler:()=>{this.$modal.hide("dialog"),this.$inertia.put(this.route("salaries.restore",this.salary.id))}},{title:"No",class:"px-6 py-3 border-l bg-gray-200 hover:bg-gray-400"}]})},searchStaff(e,t){e&&(t(!0),this.searchingStaff(t,e,this))},searchingStaff:U((e,t,i)=>{fetch(i.route("ajax.staff")+"?search="+escape(t)).then(y=>{y.json().then(r=>i.staff_members=r.map(s=>({value:s.value,label:s.label+(s.salary?" ("+parseFloat(s.salary).toFixed(2)+")":"")}))),e(!1)})},350)}},q={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},G=o("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),H={class:"transition-all bg-white rounded shadow overflow-hidden max-w-3xl"},J={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},K={class:"px-8 pb-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},Q={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},W={class:"form-label",for:"staff_id"},X={key:0,class:"form-error"},Z={class:"transition-all px-8 pb-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0"},ee={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"};function te(e,t,i,y,r,s){var c,b,g,_,v,w,x;const V=n("Icons"),C=n("Link"),D=n("trashed-message"),m=n("text-input"),I=n("v-select"),N=n("checkbox-input"),T=n("DeleteRestoreComponent"),A=n("loading-button");return f(),S("div",null,[o("h1",q,[l(C,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("salaries")},{default:p(()=>[l(V,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),u(" "+d(e.$t("Salaries")),1)]),_:1},8,["href"]),G,u(" "+d(i.salary.staff.name),1)]),i.salary.deleted_at?(f(),k(D,{key:0,class:"mb-6",onRestore:t[0]||(t[0]=()=>s.restore=!0)},{default:p(()=>[u(d(e.$t("This salary has been deleted.")),1)]),_:1})):h("",!0),o("div",H,[o("form",{onSubmit:t[7]||(t[7]=Y((...a)=>s.submit&&s.submit(...a),["prevent"])),autocomplete:"off"},[o("div",J,[l(m,{type:"date",label:e.$t("Date"),modelValue:r.form.date,"onUpdate:modelValue":t[1]||(t[1]=a=>r.form.date=a),pattern:"\\d{4}-\\d{2}-\\d{2}",errors:(c=e.$page.props.errors)==null?void 0:c.date,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),l(m,{modelValue:r.form.amount,"onUpdate:modelValue":t[2]||(t[2]=a=>r.form.amount=a),type:"number",errors:(b=e.$page.props.errors)==null?void 0:b.amount,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Amount")},null,8,["modelValue","errors","label"])]),o("div",K,[o("div",Q,[o("label",W,d(e.$t("Staff")),1),l(I,{dir:e.$page.props.user.account.direction,transition:"",value:r.staff,"input-id":"staff_id",onInput:s.staffChanged,onSearch:s.searchStaff,options:r.staff_members,placeholder:"Search Staff","onOption:selected":s.staffChanged,class:E({error:((g=e.$page.props.errors)==null?void 0:g.staff_id)&&((_=e.$page.props.errors)==null?void 0:_.staff_id.length)})},null,8,["dir","value","onInput","onSearch","options","onOption:selected","class"]),(v=e.$page.props.errors)!=null&&v.staff_id?(f(),S("div",X,d((w=e.$page.props.errors)==null?void 0:w.staff_id[0]),1)):h("",!0)]),l(m,{modelValue:r.form.description,"onUpdate:modelValue":t[3]||(t[3]=a=>r.form.description=a),errors:(x=e.$page.props.errors)==null?void 0:x.description,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Description")},null,8,["modelValue","errors","label"])]),o("div",Z,[l(N,{id:"advance",checked:r.form.advance,"onUpdate:checked":t[4]||(t[4]=a=>r.form.advance=a),label:"Advance payment (if not settled then deduct from next salary)"},null,8,["checked"]),l(P,{mode:"out-in",name:"slide-fade",appear:""},{default:p(()=>{var a;return[r.form.advance?(f(),k(m,{key:0,type:"date",label:e.$t("Settled on"),modelValue:r.form.settled_on,"onUpdate:modelValue":t[5]||(t[5]=L=>r.form.settled_on=L),pattern:"\\d{4}-\\d{2}-\\d{2}",class:"ltr:pr-6 rtl:pl-6 pt-8 w-full",errors:(a=e.$page.props.errors)==null?void 0:a.settled_on},null,8,["label","modelValue","errors"])):h("",!0)]}),_:1})]),o("div",ee,[l(T,{restore:s.restore,data:i.salary,model:"Salary",routeM:"salaries",onCloseRestore:t[6]||(t[6]=()=>s.restore=!1)},null,8,["restore","data"]),l(A,{loading:r.sending,class:"btn-gray ltr:ml-auto rtl:mr-auto",type:"submit"},{default:p(()=>[u(d(e.$t("Update Salary")),1)]),_:1},8,["loading"])])],32)])])}const ye=O(z,[["render",te]]);export{ye as default};
