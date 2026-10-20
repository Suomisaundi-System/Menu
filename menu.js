// Responsive, hierarchical navigation builder with one-open-at-a-time groups.
export function createMenu(groups,{onSelect=()=>{},collapsed=false}={}){
 const nav=document.createElement("nav");nav.setAttribute("aria-label","System navigation");
 nav.style.cssText="display:grid;gap:8px;max-width:100%";
 let current=null;
 for(const group of groups){
  const details=document.createElement("details");details.open=!collapsed;
  const summary=document.createElement("summary");summary.textContent=group.title;summary.style.cursor="pointer";
  const list=document.createElement("ul");list.style.cssText="list-style:none;padding:6px 12px;display:grid;gap:5px";
  for(const item of group.items||[]){
   const li=document.createElement("li"),button=document.createElement("button");
   button.type="button";button.textContent=item.label;button.style.cssText="padding:8px;width:100%;text-align:left";
   button.addEventListener("click",()=>onSelect(item,group));
   li.append(button);list.append(li);
  }
  details.addEventListener("toggle",()=>{
   if(!details.open)return;
   if(current&&current!==details)current.open=false;
   current=details;
  });
  details.append(summary,list);nav.append(details);
 }
 return {element:nav,collapse:()=>nav.querySelectorAll("details").forEach(d=>d.open=false)};
}
