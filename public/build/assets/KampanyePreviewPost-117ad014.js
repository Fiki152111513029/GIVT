import{a,j as s,d as i}from"./app-1e50fc25.js";import{d as t}from"./index-d3a0d218.js";import{P as l}from"./PrimaryButton-14b933fc.js";function c({kampanye:e,show_url:r}){const d=t(new Date(e.tgl_berakhir),new Date);return a("div",{className:"container mx-auto",children:a("div",{style:{backgroundColor:"rgb(245 245 245)"},className:"rounded-md",children:s("div",{className:"space-y-4 md:grid md:grid-cols-3 md:items-start md:gap-2 md:space-y-0 rounded-md",children:[a("div",{className:"",children:a("img",{className:"h-52 w-full rounded-md",src:"/storage/"+e.gambar,alt:"Featured Photo"})}),a("div",{className:"sm:col-span-2",children:s("div",{className:"p-4",children:[a("h4",{className:"text-2xl leading-6 font-bold font-sans",children:e.judul}),s("p",{className:"mt-4 text-md font-normal text-skin-base leading-5",children:["Kategori : ",e.kategori]}),s("p",{className:"mt-4 text-md font-normal text-skin-base leading-5",children:["Sisa Hari : ",d>0?d+" Hari":"Selesai"]}),a(i,{href:r,children:a(l,{children:"Selengkapnya"})})]})})]})})})}export{c as K};
