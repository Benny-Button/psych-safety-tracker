// ---- Full detailed tips, read-only modal + Streaks + PDF ----
const ITEMS = ["Team members share new ideas freely", "Mistakes are openly discussed and learned from", "Diverse opinions are respected", "People ask for help when needed", "Constructive feedback is given", "Team members admit when they don't know something", "Conflicts are addressed calmly and constructively", "People express dissenting opinions", "Leaders actively listen", "Team members support each other", "Individuals speak up without fear", "Questions are encouraged", "Team members suggest improvements", "Concerns are raised without hesitation", "Leaders show empathy", "People feel valued for their contributions", "Differences are embraced and celebrated", "Team members take risks and experiment", "There is a sense of trust among team members", "Positive reinforcement is common", "Team members feel included", "Open discussions about tough issues", "Leaders model vulnerability", "Everyone has a voice in decisions", "Team members are comfortable being themselves"];
const TIPS = {"Team members share new ideas freely": ["Create a safe space for brainstorming: Regularly schedule idea-sharing sessions where all ideas are welcomed without judgment.", "Encourage diverse participation: Actively invite input from quieter team members or those from different departments.", "Acknowledge contributions: Publicly recognise and appreciate every idea, regardless of its immediate feasibility."], "Mistakes are openly discussed and learned from": ["Host debrief sessions: After projects or tasks, hold meetings to discuss what went well and what didn’t, focusing on learning rather than blame.", "Model vulnerability: Leaders should share their own mistakes and what they learned from them.", "Create a “mistake of the month” award: Celebrate the best learning experience from a mistake each month."], "Diverse opinions are respected": ["Foster inclusive meetings: Ensure everyone has a chance to voice their opinions and is listened to respectfully.", "Training on unconscious bias: Conduct regular training to help team members recognise and mitigate their own biases.", "Rotate meeting roles: Assign roles like devil’s advocate to different team members to ensure all perspectives are considered."], "People ask for help when needed": ["Promote help-seeking as a strength: Normalise asking for help by highlighting examples where it led to better outcomes.", "Mentorship programs: Pair team members with mentors who can provide guidance and support.", "Clear channels for assistance: Ensure everyone knows how and where to seek help, whether through a dedicated Slack channel or regular check-ins."], "Constructive feedback is given": ["Training on feedback techniques: Offer workshops on how to give and receive constructive feedback effectively.", "Regular feedback sessions: Implement a routine of feedback exchange, such as bi-weekly one-on-ones.", "Use feedback models: Encourage the use of models like “The Situation-Behavior-Impact (SBI)” model to structure feedback."], "Team members admit when they don't know something": ["Model curiosity: Leaders should frequently say, “I don’t know, but let’s find out.”", "Celebrate learning moments: Recognise and reward instances where admitting a lack of knowledge led to team learning and growth.", "Encourage questions: Create a culture where asking questions is seen as a path to improvement rather than a weakness."], "Conflicts are addressed calmly and constructively": ["Conflict resolution training: Provide training on how to handle conflicts in a calm and constructive manner.", "Neutral mediators: Use neutral parties to mediate conflicts and ensure all voices are heard.", "Conflict resolution policies: Have clear policies and procedures for resolving conflicts, and ensure everyone knows them."], "People express dissenting opinions": ["Reward dissent: Acknowledge and appreciate when someone provides a different perspective.", "Safe dissent channels: Provide anonymous suggestion boxes or online forums where team members can express their opinions without fear.", "Inclusive decision-making: Ensure dissenting opinions are considered in decision-making processes."], "Leaders actively listen": ["Active listening training: Train leaders in active listening skills, emphasising the importance of truly hearing and understanding others.", "Regular check-ins: Leaders should have regular one-on-one meetings with team members to listen to their concerns and suggestions.", "Feedback loops: Create systems where team members can see how their input is acted upon, reinforcing that they are heard."], "Team members support each other": ["Buddy system: Implement a buddy system where team members are paired to provide mutual support.", "Team-building activities: Regularly schedule activities that build camaraderie and mutual support.", "Celebrate successes together: Recognise team achievements collectively, reinforcing the importance of supporting one another."], "Individuals speak up without fear": ["Anonymous reporting: Provide channels for anonymously reporting issues or concerns.", "Encourage open dialogue: Regularly remind the team that their input is valued and necessary for the team’s success.", "Respond positively: Always respond to input and concerns with gratitude and a commitment to consider or act on them."], "Questions are encouraged": ["Question of the week: Encourage team members to submit questions weekly, and address them in team meetings.", "Question-friendly meetings: Dedicate time in meetings specifically for questions, ensuring everyone feels comfortable asking.", "Reward curiosity: Acknowledge and reward those who ask insightful or challenging questions."], "Team members suggest improvements": ["Suggestion box: Have a physical or digital suggestion box for team members to submit ideas for improvements.", "Innovation time: Allocate time each week for team members to work on or discuss process improvements.", "Follow-up on suggestions: Regularly review and implement viable suggestions, and update the team on the status of their ideas."], "Concerns are raised without hesitation": ["Open-door policy: Ensure leaders maintain an open-door policy for raising concerns.", "Anonymous surveys: Conduct regular anonymous surveys to surface concerns that might not be raised openly.", "Responsive action: Act promptly and visibly on raised concerns to build trust in the process."], "Leaders show empathy": ["Empathy training: Provide leaders with training on empathy and emotional intelligence.", "Personal check-ins: Leaders should regularly check in on team members’ well-being, not just their work.", "Lead by example: Leaders should openly share their own experiences and emotions, modeling empathetic behavior."], "People feel valued for their contributions": ["Recognition programs: Implement formal recognition programs that highlight individual and team contributions.", "Personal thank-yous: Leaders and peers should regularly express gratitude for each other’s contributions.", "Career development: Show appreciation through opportunities for professional growth and development."], "Differences are embraced and celebrated": ["Diversity training: Provide regular training on the importance and benefits of diversity and inclusion.", "Celebrate cultural events: Acknowledge and celebrate various cultural events and holidays within the team.", "Inclusive policies: Ensure company policies promote and protect diversity and inclusion."], "Team members take risks and experiment": ["Encourage innovation: Create a safe environment where experimentation is encouraged and failures are seen as learning opportunities.", "Pilot programs: Run small pilot programs for new ideas, allowing for experimentation without large-scale risk.", "Reward innovation: Recognise and reward those who take risks and experiment, regardless of the outcome."], "There is a sense of trust among team members": ["Team-building activities: Regularly schedule activities that build trust and strengthen relationships among team members.", "Transparent communication: Ensure open and honest communication within the team to build trust.", "Follow through on commitments: Leaders and team members should always follow through on their promises to build and maintain trust."], "Positive reinforcement is common": ["Regular praise: Encourage leaders and peers to regularly recognise and praise positive behaviors and achievements.", "Recognition programs: Implement programs that highlight and reward positive actions and behaviors.", "Feedback loops: Ensure that positive feedback is part of regular performance reviews and one-on-one meetings."], "Team members feel included": ["Inclusive decision-making: Involve team members in decision-making processes to ensure they feel included.", "Open communication channels: Maintain open lines of communication where everyone can share their thoughts and ideas.", "Team-building activities: Regularly organise activities that promote inclusion and team bonding."], "Open discussions about tough issues": ["Safe spaces: Create safe spaces for discussing difficult topics without fear of retribution.", "Facilitated discussions: Use trained facilitators to guide conversations on tough issues, ensuring they remain productive.", "Regular forums: Hold regular forums or town halls where tough issues can be openly discussed."], "Leaders model vulnerability": ["Share personal stories: Leaders should openly share their own challenges and vulnerabilities with the team.", "Admit mistakes: Leaders should admit their mistakes and discuss what they learned from them.", "Seek feedback: Leaders should actively seek feedback on their own performance and demonstrate a willingness to improve."], "Everyone has a voice in decisions": ["Inclusive decision-making: Ensure all team members are involved in decision-making processes.", "Regular surveys: Conduct regular surveys to gather input and feedback on decisions affecting the team.", "Open forums: Hold open forums where team members can discuss and influence key decisions."], "Team members are comfortable being themselves": ["Promote authenticity: Encourage team members to bring their whole selves to work and celebrate their uniqueness.", "Support networks: Create support networks or affinity groups where team members can connect and support each other.", "Inclusive policies: Ensure company policies support and protect the right to individuality and self-expression."]};

const LS_KEY="bb_psych_safety_notes_clean_full_v2";
let events=load();
let selected=null;

// DOM refs
const grid=document.getElementById("cardGrid");
const selectedItemEl=document.getElementById("selectedItem");
const notesEl=document.getElementById("notes");
const recentEl=document.getElementById("recent");
const form=document.getElementById("logForm");
const clearFormBtn=document.getElementById("clearForm");
const totalCountEl=document.getElementById("totalCount");
const last7El=document.getElementById("last7");
const last30El=document.getElementById("last30");
const byItemEl=document.getElementById("byItem");
const tipOfDayEl=document.getElementById("tipOfDay");
const currentStreakEl=document.getElementById("currentStreak");
const bestStreakEl=document.getElementById("bestStreak");

const modal=document.getElementById("tipModal");
const tipTitle=document.getElementById("tipTitle");
const tipList=document.getElementById("tipList");
const closeModal=document.getElementById("closeModal");

const csvBtn   = document.getElementById("exportCsv");
const jsonBtn  = document.getElementById("exportJson");
const pdfBtn   = document.getElementById("exportPdf");
const clearBtn = document.getElementById("clearAll");

if (csvBtn)  csvBtn.addEventListener("click", () =>
  download("notes_export.csv", toCsv(events))
);
// If you’ve removed JSON/PDF buttons, these lines will harmlessly skip:
if (jsonBtn) jsonBtn.addEventListener("click", () =>
  download("notes_export.json", JSON.stringify(events, null, 2))
);
if (pdfBtn)  pdfBtn.addEventListener("click", () => window.print());

if (clearBtn) clearBtn.addEventListener("click", () => {
  if (confirm("Clear ALL saved notes on this device?")) {
    events = [];
    save();
    renderRecent();
    updateAll();
  }
});

// Build grid with light bulb icon
ITEMS.forEach(label=>{
  const btn=document.createElement("button");
  btn.type="button"; btn.className="square"; btn.dataset.key=label;
  btn.innerHTML=`<span class="bulb" title="Tips">💡</span><span>${label}</span><span class="badge" data-badge="${label}">0</span>`;
  btn.addEventListener("click",(e)=>{
    if(e.target.classList.contains("bulb") || e.target.textContent === "💡"){ openTips(label); return; }
    selected=label; selectedItemEl.value=label; notesEl.focus();
  });
  grid.appendChild(btn);
});

updateAll();
renderRecent();
renderTipOfDay();

// Save note
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(!selected){ alert("Click a square to choose an item first."); return; }
  const text=notesEl.value.trim();
  if(!text){ alert("Please enter some notes."); return; }
  const ev={ id:crypto.randomUUID(), item:selected, at:new Date().toISOString(), notes:text };
  events.push(ev); save(); notesEl.value=""; selectedItemEl.value=""; selected=null; renderRecent(); updateAll();
});
clearFormBtn.addEventListener("click",()=>{ notesEl.value=""; selectedItemEl.value=""; selected=null; });

// Tips modal (read-only)
function openTips(key){
  tipTitle.textContent=key;
  tipList.innerHTML="";
  (TIPS[key]||["(No tips yet)"]).forEach((t)=>{
    const li=document.createElement("li"); li.textContent=t; tipList.appendChild(li);
  });
  modal.hidden=false;
}
closeModal.addEventListener("click",()=> modal.hidden=true);
modal.addEventListener("click",(e)=>{ if(e.target===modal) modal.hidden=true; });

// Helpers & dashboard
function load(){ try{return JSON.parse(localStorage.getItem(LS_KEY)||"[]")}catch{return[]} }
function save(){ localStorage.setItem(LS_KEY, JSON.stringify(events)); }
function countBy(arr, prop){ return arr.reduce((m,x)=> (m[x[prop]]=(m[x[prop]]||0)+1, m),{}); }
function daysAgo(n){ const d=new Date(); d.setDate(d.getDate()-n); return d; }

function updateAll(){ updateBadgesAndGreen(); updateStats(); updateStreaks(); drawTrend(); renderByItem(); }
function updateBadgesAndGreen(){
  const counts=countBy(events,"item");
  document.querySelectorAll("[data-badge]").forEach(el=>{
    const k=el.getAttribute("data-badge");
    el.textContent=counts[k]||0;
    const tile=el.closest(".square");
    if((counts[k]||0)>0){ tile.classList.add("logged"); } else { tile.classList.remove("logged"); }
  });
}
function updateStats(){
  totalCountEl.textContent=events.length;
  last7El.textContent=events.filter(e=> new Date(e.at)>=daysAgo(7)).length;
  last30El.textContent=events.filter(e=> new Date(e.at)>=daysAgo(30)).length;
}
function updateStreaks(){
  const days=new Set(events.map(e=> e.at.slice(0,10)));
  let cur=0;
  let d=new Date(); d.setHours(0,0,0,0);
  while(days.has(d.toISOString().slice(0,10))){ cur++; d.setDate(d.getDate()-1); }
  currentStreakEl.textContent=cur;
  // best streak
  let best=0;
  if(days.size>0){
    const unique=[...days].sort().reverse();
    const toDate = s => new Date(s+"T00:00:00");
    let streak=1;
    for(let i=1;i<unique.length;i++){
      const prev=toDate(unique[i-1]); const curd=toDate(unique[i]);
      const diff=(prev - curd)/(1000*60*60*24);
      if(diff===1){ streak++; } else { best=Math.max(best, streak); streak=1; }
    }
    best=Math.max(best, streak);
  }
  bestStreakEl.textContent=best;
}
function renderByItem(){
  const counts=countBy(events,"item");
  const pairs=ITEMS.map(k=>[k, counts[k]||0]).sort((a,b)=>b[1]-a[1]);
  byItemEl.innerHTML="";
  pairs.forEach(([k,v])=>{
    const pill=document.createElement("div"); pill.className="pill";
    pill.innerHTML=`<span>${k}</span><strong>${v}</strong>`;
    byItemEl.appendChild(pill);
  });
}
function drawTrend(){
  const canvas=document.getElementById("trendCanvas");
  const ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const days=[...Array(30)].map((_,i)=>{
    const d0=new Date(); d0.setDate(d0.getDate()-(29-i));
    const dStr=d0.toISOString().slice(0,10);
    return { date:dStr, count: events.filter(e=> e.at.slice(0,10)===dStr).length };
  });
  const max=Math.max(1, ...days.map(d=>d.count));
  const w=canvas.width, h=canvas.height, step=w/(days.length-1);
  ctx.beginPath(); ctx.moveTo(0,h-20); ctx.lineTo(w,h-20); ctx.strokeStyle="#ddd"; ctx.stroke();
  ctx.beginPath();
  days.forEach((d,i)=>{
    const x=i*step;
    const y=h-20-(d.count/max)*(h-40);
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.strokeStyle="#1e90ff"; ctx.lineWidth=2; ctx.stroke();
  ctx.fillStyle="#1e90ff";
  days.forEach((d,i)=>{
    const x=i*step; const y=h-20-(d.count/max)*(h-40);
    ctx.beginPath(); ctx.arc(x,y,2.5,0,Math.PI*2); ctx.fill();
  });
}
function renderTipOfDay(){
  const all=[];
  for(const k of ITEMS){ (TIPS[k]||[]).forEach(t=> all.push({k,t})); }
  if(!all.length){ tipOfDayEl.textContent="Add tips in TIPS in app.js"; return; }
  const today=new Date().toISOString().slice(0,10);
  const seed = [...today].reduce((a,c)=>a+c.charCodeAt(0),0);
  const pick = all[seed % all.length];
  tipOfDayEl.innerHTML = `<strong>${pick.k}:</strong> ${pick.t}`;
}
function renderRecent(){
  recentEl.innerHTML="";
  const last=events.slice(-10).reverse();
  if(!last.length){ recentEl.innerHTML="<li>No notes yet.</li>"; return; }
  last.forEach(ev=>{
    const li=document.createElement("li");
    const when=new Date(ev.at).toLocaleString();
    li.innerHTML=`<div class="meta">${when} • <strong>${ev.item}</strong></div><div>${escapeHtml(ev.notes)}</div>`;
    recentEl.appendChild(li);
  });
}
function toCsv(rows){
  if(!rows.length) return "id,item,at,notes\n";
  const esc=s=>`"${String(s??'').replaceAll('"','""')}"`;
  const headers=Object.keys(rows[0]);
  const lines=[headers.join(",")];
  for(const r of rows){ lines.push(headers.map(h=>esc(r[h])).join(",")); }
  return lines.join("\n");
}
function download(filename,text){
  const blob=new Blob([text],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a"); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url);
}
function escapeHtml(s){ return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }

// Dashboard toggle
const dashBtn=document.getElementById("toggleDashboard");
const dashContent=document.getElementById("dashboardContent");
dashBtn.addEventListener("click",()=>{
  const hidden=dashContent.hasAttribute("hidden");
  if(hidden){ dashContent.removeAttribute("hidden"); dashBtn.textContent="Hide Dashboard ▲"; }
  else{ dashContent.setAttribute("hidden",""); dashBtn.textContent="Show Dashboard ▼"; }
});
