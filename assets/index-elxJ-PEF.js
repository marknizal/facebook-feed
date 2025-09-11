import{$ as s,Z as a,a3 as c,a0 as m,r as $,j as e}from"./index-C6Kj7UAJ.js";import{F as j}from"./index-Du4x_S5q.js";const w=a.ul`
  list-style: none;
  display: block;

  ${({$border:r})=>r&&`
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
  border-radius: ${({$type:r})=>r==="circle"?c.full:r==="square"?"0.5rem":"0"};
  padding: ${({$type:r})=>r==="default"?"0.2rem":"0"};

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({$type:r})=>r==="default"?"contain":"cover"};
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
`,z=({items:r,length:t,avatar:h="default",ariaLabel:p="List",border:g=!1,title:n,renderItem:l})=>{const[i,u]=$.useState(!1),d=typeof t=="number"&&t<r.length,x=d&&!i?r.slice(0,t):r,b=()=>{u(!0)};return e.jsxs(e.Fragment,{children:[n&&e.jsx(y,{children:n}),e.jsxs(w,{$border:g,role:"list","aria-label":p,children:[x.map(o=>{const f=o.avatar||h;return l?e.jsx("li",{role:"listitem",children:l(o)},o.id):e.jsxs(v,{role:"listitem",children:[e.jsx(k,{$type:f,children:e.jsx("img",{src:o.src,alt:`Avatar for ${o.name}`,loading:"lazy"})}),e.jsx(S,{children:o.name})]},o.id)}),d&&!i&&e.jsx("li",{role:"listitem",children:e.jsxs(A,{onClick:b,"aria-expanded":i,"aria-label":"Show more items",children:[e.jsx(L,{"aria-hidden":"true"}),"See more"]})})]})]})};export{z as L};
