import{C as s,s as a,R as c,F as m,a as j,r as $,j as r}from"./index-zgMHIMHA.js";const w=a.ul`
  list-style: none;
  display: block;

  ${({$border:e})=>e&&`
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid ${s.grey10};
    `}
`,y=a.p`
  padding: 0.5rem;
  color: ${s.grey20};
  font-weight: 600;
`,v=a.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${s.ash};
  }
`,S=a.p`
  font-size: ${m.sm};
  font-weight: 500;
`,k=a.div`
  width: 2.25rem;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: ${({$type:e})=>e==="circle"?c.full:e==="square"?"0.5rem":"0"};
  padding: ${({$type:e})=>e==="default"?"0.2rem":"0"};

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({$type:e})=>e==="default"?"contain":"cover"};
  }
`,A=a.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.8rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: ${m.sm};
  font-weight: 500;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${s.grey};
  }
`,L=a(j)`
  display: flex;
  padding: 0.5rem;
  border-radius: ${c.full};
  background-color: ${s.ash};
  width: 2.25rem;
  height: 2.25rem;
`,R=({items:e,length:t,avatar:h="default",ariaLabel:p="List",border:g=!1,title:n,renderItem:l})=>{const[i,u]=$.useState(!1),d=typeof t=="number"&&t<e.length,x=d&&!i?e.slice(0,t):e,b=()=>{u(!0)};return r.jsxs(r.Fragment,{children:[n&&r.jsx(y,{children:n}),r.jsxs(w,{$border:g,role:"list","aria-label":p,children:[x.map(o=>{const f=o.avatar||h;return l?r.jsx("li",{role:"listitem",children:l(o)},o.id):r.jsxs(v,{role:"listitem",children:[r.jsx(k,{$type:f,children:r.jsx("img",{src:o.src,alt:`Avatar for ${o.name}`,loading:"lazy"})}),r.jsx(S,{children:o.name})]},o.id)}),d&&!i&&r.jsx("li",{role:"listitem",children:r.jsxs(A,{onClick:b,"aria-expanded":i,"aria-label":"Show more items",children:[r.jsx(L,{"aria-hidden":"true"}),"See more"]})})]})]})};export{R as L};
