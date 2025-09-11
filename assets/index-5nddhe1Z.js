import{r as c,Z as t,a5 as p,$ as s,a8 as u,a3 as b,a0 as x,a6 as w,j as e,a7 as j,a9 as $}from"./index-BWM5PhX5.js";import{d as S,e as L}from"./index-BoOZ8RkW.js";import{b as R}from"./data-DeSl26II.js";import{B as k}from"./button-C7lFLz9j.js";import"./react-gH-7aFTg.js";function z(n=200){const r=c.useRef(null),[d,l]=c.useState(!1),[o,g]=c.useState(!1),a=()=>{if(!r.current)return;const{scrollLeft:i,scrollWidth:v,clientWidth:y}=r.current;l(i>0),g(i+y<v)};return c.useEffect(()=>{a();const i=r.current;return i?.addEventListener("scroll",a),window.addEventListener("resize",a),()=>{i?.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),{scrollRef:r,isLeft:d,isRight:o,scroll:i=>{r.current&&r.current.scrollBy({left:i==="left"?-n:n,behavior:"smooth"})}}}const E=t.div`
  position: relative;
`,C=t.ul`
  list-style: none;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  overflow-x: auto;

  ${p.mobile} {
    padding: 0.5rem;
    background-color: ${s.white};
    box-shadow: ${u.thin};
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,h=t(k)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 3rem !important;
  height: 3rem !important;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  svg {
    flex-shrink: 0;
    font-size: 1.25rem;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }

  ${p.mobile} {
    display: none;
  }
`,I=t.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  pointer-events: none;
  transition: all 0.3s ease;
`,f=t.li`
  position: relative;
  width: 7rem;
  aspect-ratio: 9 / 16;
  border-radius: ${b.md};
  box-shadow: ${u.thin};
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    height: 100%;
  }
`,m=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,N=t.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: ${s.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
  border: none;
  cursor: pointer;

  &:hover .icon {
    transform: scale(1.1);
  }

  .icon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: -1rem;
    background-color: ${s.primary};
    color: ${s.white};
    width: 2.5rem;
    aspect-ratio: 1 / 1;
    border-radius: ${b.full};
    padding: 0.25rem;
    border: 4px solid ${s.white};

    transition: transform 0.3s ease;
  }

  p {
    font-size: ${x.xs};
    margin-top: auto;
    color: ${s.black};
  }
`,O=t.p`
  position: absolute;
  left: 0.75rem;
  bottom: 0.75rem;
  right: 0.75rem;
  font-size: ${x.xs};
  color: ${s.white};
  z-index: 2;
`,B=t(w)`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  border: 4px solid ${s.primary};
  z-index: 2;
`,Y=()=>{const{scrollRef:n,isLeft:r,isRight:d,scroll:l}=z();return e.jsxs(E,{children:[r&&e.jsx(h,{className:"left",shape:"circle",onClick:()=>l("left"),icon:e.jsx(S,{}),"aria-label":"Scroll left"}),d&&e.jsx(h,{className:"right",shape:"circle",onClick:()=>l("right"),icon:e.jsx(L,{}),"aria-label":"Scroll right"}),e.jsxs(C,{ref:n,children:[e.jsxs(f,{children:[e.jsx(m,{src:j,alt:"Your story",loading:"lazy"}),e.jsxs(N,{"aria-label":"Create new story",children:[e.jsx($,{className:"icon"}),e.jsx("p",{children:"Create story"})]})]}),R.map(o=>e.jsxs(f,{tabIndex:0,children:[e.jsx(B,{src:o.profile,alt:`${o.name} Profile`,loading:"lazy"}),e.jsx(m,{src:o.story,alt:`${o.name}'s story`,loading:"lazy"}),e.jsx(I,{className:"overlay"}),e.jsx(O,{children:o.name})]},o.id))]})]})};export{Y as default};
