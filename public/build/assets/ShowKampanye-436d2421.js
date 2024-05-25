import{W as o,a as e,j as a,d,n as b,F as p}from"./app-1e50fc25.js";import{E as h}from"./Editor-9ba3f569.js";import{d as g}from"./index-d3a0d218.js";import{P as x}from"./PostPreview-838559cf.js";import{P as n}from"./PrimaryButton-14b933fc.js";import{A as N}from"./AuthenticatedLayout-98726e4f.js";import{D as f}from"./DonasiKampanye-f567c352.js";import"./index-fea706aa.js";import"./ApplicationLogo-39fb6c53.js";import"./Dropdown-cde00935.js";import"./transition-1dc21d7e.js";function w({kampanye:t,posts:l,dana_terkumpul:r}){o().props;const i=c=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(c),s=g(new Date(t.tgl_berakhir),new Date);return e("div",{class:"max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto",children:a("div",{className:"p-6 bg-white rounded-md",children:[e("img",{src:"/storage/"+t.gambar,alt:"",className:"w-full h-48 md:h-96 rounded-md object-fill"}),e("h1",{className:"mt-4 text-6xl text-black",children:t.judul}),e("p",{className:"mt-4 text-lg text-black",children:"Gambar Header :"}),e("p",{className:"mt-4 text-lg text-black",children:"Deskripsi : "}),e("div",{children:e(h,{tinymceScriptSrc:"../tinymce/tinymce.min.js",initialValue:t.deskripsi,disabled:!0,init:{toolbar:!1,statusbar:!1,menubar:!1,readonly:!0,plugins:"autoresize",content_css:"default"}})}),e("div",{className:"clear-both"}),a("p",{className:"mt-4 text-lg text-black",children:["Target : ",i(t.target)]}),a("p",{className:"mt-4 text-lg text-black",children:["Dana Terkumpul : ",i(r)]}),e("div",{className:"h-1 w-full bg-neutral-200 rounded-md",children:e("div",{className:"h-1 bg-blue-700 rounded-md",style:{width:r/t.target*100<100?r/t.target*100+"%":100+"%"}})}),a("p",{className:"mt-4 text-lg text-black",children:["Sisa Hari : ",s>0?s+" Hari":"Selesai"]}),a("p",{className:"mt-4 text-lg text-black",children:["Kategori : ",t.kategori]}),e("p",{className:"mt-4 mb-4 text-lg text-black",children:"Berita Terkait : "}),!l.length==0?a("div",{className:"space-y-2",children:[l.slice(0,2).map((c,m)=>e(x,{post:c},m)),e(d,{href:route("kampanye.showbt",t),children:e(n,{className:"mt-4",children:"Berita Terkait Lainnya ..."})})]}):e("p",{className:"mt-4 text-lg text-black",children:"Belum Ada Berita Terkait Kampanye ..."}),e("div",{children:e(d,{href:route("donasi.create",t),children:e(n,{type:"button",className:"mt-4",children:"Donasi Sekarang"})})})]})})}function D({kampanye:t,posts:l,dana_terkumpul:r}){console.log(t),console.log(l),o().props;const i=m=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(m),s=g(new Date(t.tgl_berakhir),new Date),c={weekday:"long",year:"numeric",month:"long",day:"numeric"};return e("div",{class:"max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto",children:a("div",{className:"p-6 space-x-2 bg-white rounded-md",children:[e("img",{src:"/storage/"+t.gambar,alt:"",className:"w-full h-48 md:h-96 rounded-md object-fill"}),e("h1",{className:"mt-4 text-6xl text-black",children:t.judul}),e("p",{className:"mt-4 text-lg text-black",children:"Gambar Header :"}),e("p",{className:"mt-4 text-lg text-black",children:"Deskripsi : "}),e("div",{children:e(h,{tinymceScriptSrc:"../tinymce/tinymce.min.js",initialValue:t.deskripsi,disabled:!0,init:{toolbar:!1,statusbar:!1,menubar:!1,readonly:!0,plugins:"autoresize",content_css:"default"}})}),e("div",{className:"clear-both"}),a("p",{className:"mt-4 text-lg text-black",children:["Target : ",i(t.target)]}),a("p",{className:"mt-4 text-lg text-black",children:["Dana Terkumpul : ",i(r)]}),e("div",{className:"h-1 w-full bg-gray-200 rounded-md",children:e("div",{className:"h-1 bg-blue-700 rounded-md",style:{width:r/t.target*100<100?r/t.target*100+"%":100+"%"}})}),a("p",{className:"mt-4 text-lg text-black",children:["Tgl Mulai : ",new Date(t.tgl_mulai).toLocaleString("id-ID",c)]}),a("p",{className:"mt-4 text-lg text-black",children:["Tgl Berakhir : ",new Date(t.tgl_berakhir).toLocaleString("id-ID",c)]}),a("p",{className:"mt-4 text-lg text-black",children:["Sisa Hari : ",s>0?s+" Hari":"Selesai"]}),a("p",{className:"mt-4 text-lg text-black",children:["Terverifikasi : ",t.terverifikasi?"Sudah diverifikasi":"Belum terverifikasi"]}),a("p",{className:"mt-4 text-lg text-black",children:["Kategori : ",t.kategori]}),e("p",{className:"mt-4 mb-4 text-lg text-black",children:"Berita Terkait : "}),!l.length==0?a("div",{className:"space-y-2",children:[l.slice(0,2).map((m,u)=>e(x,{post:m},u)),e(d,{href:route("kampanye.showbt",t),children:e(n,{className:"mt-4",children:"Berita Terkait Lainnya ..."})})]}):e("p",{className:"mt-4 text-lg text-black",children:"Belum Ada Berita Terkait Kampanye ..."}),e(d,{href:route("kampanye.edit",t),children:e(n,{className:"mt-4",children:"Edit"})})]})})}function A({auth:t,kampanye:l,posts:r,dana_terkumpul:i,donasis:s}){return a(N,{auth:t,children:[e(b,{title:"Kampanye"}),t.user&&t.user.id==l.user_id?e(D,{kampanye:l,posts:r,dana_terkumpul:i}):e(w,{kampanye:l,posts:r,dana_terkumpul:i}),a("div",{class:"max-w-3xl px-4 pb-12 sm:px-6 lg:px-8 mx-auto",children:[e("p",{className:"text-lg text-black mb-2",children:"Donasi : "}),!s.length==0?s.map((c,m)=>e(f,{donasi:c},m)):e(p,{children:e("p",{className:"text-lg text-gray-800",children:"Belum Ada Donasi ..."})})]})]})}export{A as default};
