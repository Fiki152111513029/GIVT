import{a as n,r as a,j as e}from"./app-1e50fc25.js";function o({donasi:r}){const c=l=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(l);return n(a.Card,{className:"w-full mb-2",children:e(a.CardBody,{children:[n(a.Typography,{variant:"h5",color:"blue-gray",className:"mb-2",children:r.nama}),e(a.Typography,{children:["Jumlah : ",c(r.jumlah)]}),r.doa&&e(a.Typography,{variant:"h6",children:["Doa : ",r.doa,"s"]})]})})}export{o as D};
