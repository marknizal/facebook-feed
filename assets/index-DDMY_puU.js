import{s as o,b as g,C as r,B as n,F as a,R as t,j as e,A as p,P as b,c,d as x,e as u}from"./index-D6qGdXDg.js";import"./react-gH-7aFTg.js";const f=o(g)`
  padding: 0 1rem;
`,h=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${r.grey};

  ${n.mobile} {
    border-bottom: none;
  }
`,$=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.5rem 0;

  ${n.mobile} {
    display: none;
  }
`,d=o.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${r.background};
  }
`,y=o(d)`
  justify-content: flex-start;
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: ${a.base};
  color: ${r.grey30};
  background-color: ${r.background};
  border-radius: ${t.lg};

  .name {
    ${n.mobile} {
      display: none;
    }
  }
`,l=o(d)`
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: calc(${a.sm} + 0.05rem);
  background-color: ${r.transparent};
  border-radius: ${t.sm};

  &.block {
    display: none;
    flex-direction: column;
    align-items: center;
    font-size: calc(${a.xs} - 0.05rem);
    gap: 0.15rem;
    padding: 0;

    svg {
      color: #42b35d;
    }
  }

  svg {
    font-size: ${a.lg};
    flex-shrink: 0;
    color: ${({color:s})=>s||"inherit"};
  }

  ${n.mobile} {
    &.block {
      display: flex;
    }
  }
`,j=[{icon:x,label:"Live video",color:"#F02848"},{icon:c,label:"Photo/video",color:"#42B35D"},{icon:u,label:"Feeling/activity",color:"#F7BA28"}],A=()=>e.jsxs(f,{children:[e.jsxs(h,{children:[e.jsx(p,{src:b,alt:"Mark John Allen profile picture",loading:"lazy"}),e.jsxs(y,{"aria-label":"Start a post",children:["What's on your mind",e.jsx("span",{className:"name",children:", Mark John Allen"}),"?"]}),e.jsxs(l,{className:"block",children:[e.jsx(c,{})," Photo"]})]}),e.jsx($,{children:j.map(({icon:s,label:i,color:m})=>e.jsxs(l,{color:m,"aria-label":i,children:[e.jsx(s,{"aria-hidden":"true"}),i]},i))})]});export{A as default};
