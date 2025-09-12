import{Z as o,a4 as g,$ as a,a5 as n,a0 as r,a3 as l,j as e,a6 as p,a7 as b}from"./index-Bcw-_1GI.js";import{a as c,b as x,c as u}from"./index-COh2yegP.js";import"./react-gH-7aFTg.js";const f=o(g)`
  padding: 0 1rem;
`,$=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${a.grey};

  ${n.mobile} {
    border-bottom: none;
  }
`,h=o.div`
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
    background-color: ${a.background};
  }
`,y=o(d)`
  justify-content: flex-start;
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: ${r.base};
  color: ${a.grey30};
  background-color: ${a.background};
  border-radius: ${l.lg};

  .name {
    ${n.mobile} {
      display: none;
    }
  }
`,t=o(d)`
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: calc(${r.sm} + 0.05rem);
  background-color: ${a.transparent};
  border-radius: ${l.sm};

  &.block {
    display: none;
    flex-direction: column;
    align-items: center;
    font-size: calc(${r.xs} - 0.05rem);
    gap: 0.15rem;
    padding: 0;

    svg {
      color: #42b35d;
    }
  }

  svg {
    font-size: ${r.lg};
    flex-shrink: 0;
    color: ${({color:s})=>s||"inherit"};
  }

  ${n.mobile} {
    &.block {
      display: flex;
    }
  }
`,j=[{icon:x,label:"Live video",color:"#F02848"},{icon:c,label:"Photo/video",color:"#42B35D"},{icon:u,label:"Feeling/activity",color:"#F7BA28"}],F=()=>e.jsxs(f,{children:[e.jsxs($,{children:[e.jsx(p,{src:b,alt:"Mark John Allen profile picture",loading:"lazy"}),e.jsxs(y,{"aria-label":"Start a post",children:["What's on your mind",e.jsx("span",{className:"name",children:", Mark John Allen"}),"?"]}),e.jsxs(t,{className:"block",children:[e.jsx(c,{})," Photo"]})]}),e.jsx(h,{children:j.map(({icon:s,label:i,color:m})=>e.jsxs(t,{color:m,"aria-label":i,children:[e.jsx(s,{"aria-hidden":"true"}),i]},i))})]});export{F as default};
