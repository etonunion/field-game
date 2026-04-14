import{useState,useEffect,useRef}from"react";
const SURL="https://tozetaxubfbhsjurhoun.supabase.co";
const SKEY="sb_publishable_UY56vKyP2u9c0Hf9HJd9Tw_aNCNBIOy";
const sh={"apikey":SKEY,"Authorization":`Bearer ${SKEY}`,"Content-Type":"application/json"};
const BR="#6b4c1e",PK="#c0388a",BL="#f5ede0",PLL="#fce8f4",WH="#fff",MU="#7a6a5a",OK="#16a34a",ER="#dc2626",OP="#2a5a8a";
const saveProgress=async(name,sections,total)=>{
  const pct=Math.round((sections/total)*100);
  const now=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short"});
  try{
    await fetch(`${SURL}/rest/v1/progress`,{method:"POST",headers:{...sh,"Prefer":"resolution=merge-duplicates"},body:JSON.stringify({name,sections,pct,last_active:now})});
  }catch(e){console.log(e);}
};
const loadProgress=async()=>{
  try{
    const r=await fetch(`${SURL}/rest/v1/progress?select=*&order=pct.desc`,{headers:sh});
    return await r.json();
  }catch{return[];}
};
const SUPABASE_URL="https://tozetaxubfbhsjurhoun.supabase.co";
const SUPABASE_KEY="sb_publishable_UY56vKyP2u9c0Hf9HJd9Tw_aNCNBIOy";
const sbFetch=async(path,opts={})=>fetch(`${SUPABASE_URL}/rest/v1${path}`,{headers:{"apikey":SUPABASE_KEY,"Authorization":`Bearer ${SUPABASE_KEY}`,"Content-Type":"application/json","Prefer":"resolution=merge-duplicates",...opts.headers},...opts});

BL="#f5ede0",PLL="#fce8f4",WH="#fff",MU="#7a6a5a",OK="#16a34a",ER="#dc2626",OP="#2a5a8a";
const lp=(a,b,t)=>a+(b-a)*t,cl=(v,a,b)=>Math.max(a,Math.min(b,v)),ez=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const px=30,pr=270,pt=30,pb=430,mx=150,my=230,sl=40,sr=300,st=35,sb=465,sx=170,sy=250;
const bs=(bg=BR,fg=WH)=>({background:bg,color:fg,border:"none",borderRadius:8,padding:"10px 22px",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"sans-serif"});
const cs={background:"rgba(255,255,255,0.92)",border:`0.5px solid ${BR}22`,borderRadius:12,padding:"1.5rem"};
const co={background:BL,borderLeft:`3px solid ${BR}`,borderRadius:"0 8px 8px 0",padding:"0.75rem 1rem",fontSize:14,marginBottom:"1rem",color:BR};
const h2s={fontSize:20,fontWeight:500,color:BR,marginTop:0,marginBottom:"0.75rem"};
const h3s={fontSize:15,fontWeight:500,color:BR,marginTop:"1.25rem",marginBottom:"0.5rem"};
const bds={fontSize:15,lineHeight:1.7,color:"#3a2a1a",marginBottom:"0.75rem"};
const BLN=[{x:-50,y:0},{x:-30,y:0},{x:-10,y:0},{x:10,y:0},{x:30,y:0},{x:50,y:0},{x:0,y:18}];
const OLN=[{x:-50,y:0},{x:-30,y:0},{x:-10,y:0},{x:10,y:0},{x:30,y:0},{x:50,y:0},{x:0,y:-18}];
const GQ={
  intro:[{q:"How many players on a Field Game team?",o:["9","10","11","13"],a:2,ex:"11: 7 Bully, 1 Fly, 3 Behinds (2 Shorts + 1 Long)."}],
  flow:[{q:"Where is the Set-Piece Bully formed when ball goes out at the side?",o:["Where ball crossed","On tram-line, level with where it was last kicked","Halfway","15-yard line"],a:1,ex:"On the tram-line, level with where the ball was last kicked — not where it went out."}],
  positions:[{q:"Where do the Shorts position themselves?",o:["Far behind","In front of Bully","Slightly behind Bully, spread left and right","On goal-line"],a:2,ex:"Slightly behind and to either side of the Bully."},{q:"What is the Long's main job?",o:["Push in Bully","Score goals","Stay deep, track sideways, support Shorts","Insert ball"],a:2,ex:"Stay deep, track up and down, last line of defence."}],
  bully:[{q:"On BIND, what does the team with Heads do?",o:["Insert ball","Stand upright","Put heads between opposite players","Push immediately"],a:2,ex:"Put their heads between the players directly opposite."},{q:"After Bully steps over ball, who gets it?",o:["A Short","The Long","The Fly","A Corner"],a:2,ex:"The Fly, who dribbles left or right."}],
  sneaking:[],
  scoring:[{q:"What happens after a ball goes rougeable?",o:["Stop and wait","Run to touch it down as fast as possible","Kick through posts","Form new Bully"],a:1,ex:"Both teams sprint to touch it down. Attackers first = 5pts + Conversion. Defenders first = attackers choose 3pts or free kick."},{q:"The attacking team only gets a Conversion if:",o:["Ball through posts","They touch down the rougeable ball first","Umpire awards it","Defenders kick out"],a:1,ex:"Only if attackers touch down the rougeable ball first."}],
};
const FQ=[
  {q:"How many players on a full team?",o:["9","10","11","13"],a:2,ex:"11: 7 Bully, 1 Fly, 3 Behinds (2 Shorts + 1 Long)."},
  {q:"How do you score a Rouge?",o:["Kick through posts","Run it over","Kick onto defender so it goes behind, then touch down","Head it in"],a:2,ex:"Kick onto defender → behind → attacker touches down first."},
  {q:"You are Sneaking when:",o:["Behind the ball","In front of ball when teammate moves forward, OR in front of last opp Bully player","Failing to track sideways","Kicking out"],a:1,ex:"In front of ball when teammate carries it, OR in front of last opposition Bully player."},
  {q:"On BIND, what does the team with Heads do?",o:["Insert ball","Stand upright","Put heads between opposite players","Push immediately"],a:2,ex:"Put heads between players directly opposite."},
  {q:"What is the Long's job?",o:["Push in Bully","Score goals","Stay deep, track sideways, support Shorts","Insert ball"],a:2,ex:"Stay deep, track up and down, last line of defence."},
  {q:"What is a Goal worth?",o:["1pt","2pts","3pts","5pts"],a:2,ex:"3 points."},
  {q:"After winning the Bully, what is most important?",o:["Stop","Keep running, stay onside — never Sneak","Pass back","Stand still"],a:1,ex:"Keep running and never Sneak."},
  {q:"What is Cornering?",o:["In the corner","Failing to track ball's sideways movement","Passing back","Heading"],a:1,ex:"Failing to track the ball's sideways movement."},
  {q:"Attacking team only gets Conversion if:",o:["Ball through posts","They touch down rougeable ball first","Umpire awards","Defenders kick out"],a:1,ex:"Only if attackers touch down the rougeable ball first."},
  {q:"Where is Set-Piece Bully when ball goes out at side?",o:["Where ball crossed","Tram-line, level with where it was last kicked","Halfway","15-yard line"],a:1,ex:"Tram-line, level with where ball was last kicked."},
];
const SM=[
  {label:"Scenario 1",sn:true,desc:"Your team wins the Bully. The Fly dribbles forward. Watch Player X.",exp:"Player X is Sneaking — they sprinted ahead of the ball. All others stayed behind correctly. X must raise hands and get back."},
  {label:"Scenario 2",sn:false,desc:"The Fly carries the ball forward. Watch Player X running alongside.",exp:"Player X is NOT Sneaking. They stayed level with the ball throughout. Perfectly fine."},
  {label:"Scenario 3",sn:true,desc:"The Fly is dribbling forward. Player X sprints hard from the start.",exp:"Player X is clearly Sneaking — far ahead of the ball. Hands up and get back."},
  {label:"Scenario 4",sn:true,desc:"The opposition push toward your goal. A Short kicks forward over the Bully. Watch Player X on the far side.",exp:"Player X is Sneaking. When the ball was kicked, X was already past the last opposition Bully player. Raise hands and retreat."},
  {label:"Scenario 5",sn:false,desc:"Same setup — Short kicks over the Bully. Watch where Player X is when the kick happens.",exp:"Player X is NOT Sneaking. When the ball was kicked, X was still behind the last opposition player. Runs forward legally after."},
  {label:"Scenario 6",sn:false,desc:"The Fly dribbles forward. Player X runs back toward your own goal, then once the ball carrier passes them, runs forward.",exp:"Player X is NOT Sneaking. They ran back keeping themselves behind the ball, then ran forward legally once the Fly passed their level."},
  {label:"Scenario 7",sn:true,type:"c",desc:"The ball moves sideways to the left. Watch Player X — are they tracking it?",exp:"Player X is Cornering. The ball moved left but X stayed too far right, failing to track it sideways. A player who is Cornering cannot touch the ball."},
];
const MODS=[{id:"intro",title:"What is the Field Game?",icon:"🎓"},{id:"flow",title:"Flow of the Game",icon:"⚡"},{id:"positions",title:"Players & Positions",icon:"👥"},{id:"bully",title:"The Bully",icon:"⚔️"},{id:"sneaking",title:"Sneaking & Cornering",icon:"🚨"},{id:"scoring",title:"Scoring",icon:"🎯"},{id:"finalquiz",title:"Final Test",icon:"✏️"}];

function Bg(){
  return(
    <div style={{position:"fixed",inset:0,zIndex:0,overflow:"hidden",background:`linear-gradient(160deg,${BR} 0%,#4a2e0e 40%,#7a1a52 70%,${PK} 100%)`}}>
      {[{w:420,h:420,t:"-120px",l:"-100px",op:.13},{w:300,h:300,t:"60%",r:"-80px",op:.10},{w:500,h:500,b:"-200px",r:"-150px",op:.09}].map((c,i)=>(
        <div key={i} style={{position:"absolute",width:c.w,height:c.h,borderRadius:"50%",border:`1.5px solid rgba(255,255,255,${c.op*2})`,background:`radial-gradient(circle,rgba(255,255,255,${c.op}) 0%,transparent 70%)`,top:c.t,left:c.l,right:c.r,bottom:c.b}}/>
      ))}
    </div>
  );
}

function BR2({cx,cy,offs,color}){
  return offs.map((o,i)=><circle key={i} cx={cx+o.x} cy={cy+o.y} r={9} fill={color} stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>);
}

function PB2(){
  const gl=sx-45,gr=sx+45;
  return(<>
    {[0,1,2,3,4,5,6].map(i=><rect key={i} x={sl} y={st+(i*((sb-st)/7))} width={sr-sl} height={(sb-st)/7} fill={i%2===0?"#1e5e1e":"#236b23"}/>)}
    <rect x={sl} y={st} width={sr-sl} height={sb-st} fill="none" stroke="white" strokeWidth="1.5"/>
    <rect x={gl} y={st-7} width={gr-gl} height={9} fill="none" stroke={PK} strokeWidth="2.5"/>
    <text x={sx} y={st-11} textAnchor="middle" fill={PK} fontSize="10" fontWeight="600">▲ GOAL</text>
    <rect x={gl} y={sb-2} width={gr-gl} height={9} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
    <text x={sx} y={sb+17} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9">your goal ▼</text>
    <line x1={sl} y1={st+35} x2={sr} y2={st+35} stroke="white" strokeWidth="1" strokeDasharray="5 3" opacity="0.5"/>
    <line x1={sl} y1={sb-35} x2={sr} y2={sb-35} stroke="white" strokeWidth="1" strokeDasharray="5 3" opacity="0.5"/>
    <line x1={sl} y1={sy} x2={sr} y2={sy} stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="6 4"/>
    <line x1={sl+60} y1={st} x2={sl+60} y2={sb} stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1={sr-60} y1={st} x2={sr-60} y2={sb} stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3"/>
    <text x={sx} y={st+16} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">▲ attacking direction</text>
  </>);
}

function OB({cy,cx=sx}){
  const o=[{x:-45,y:4},{x:-25,y:-3},{x:-6,y:6},{x:12,y:-4},{x:30,y:3},{x:48,y:-2},{x:2,y:-16}];
  return o.map((v,i)=><circle key={i} cx={cx+v.x} cy={cy+v.y} r={10} fill={OP} stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>);
}

function MB({cy,cx=sx}){
  const o=[{x:-45,y:-4},{x:-25,y:3},{x:-6,y:-6},{x:12,y:4},{x:30,y:-3},{x:48,y:2},{x:2,y:16}];
  return o.map((v,i)=><circle key={i} cx={cx+v.x} cy={cy+v.y} r={10} fill={BR} stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>);
}

function XD({x,y,on}){
  return(
    <g>
      <circle cx={x} cy={y} r={13} fill={PK} stroke={on?"#f44":WH} strokeWidth={on?2.5:2}/>
      {on&&<circle cx={x} cy={y} r={18} fill="none" stroke="#f44" strokeWidth="1.5" opacity="0.5"/>}
      <text x={x} y={y+1} textAnchor="middle" dominantBaseline="middle" fill={WH} fontSize="10" fontWeight="700">X</text>
    </g>
  );
}

function Bll({x,y}){
  return(
    <g>
      <circle cx={x} cy={y} r={8} fill="#f59e0b" stroke={WH} strokeWidth="1.5"/>
      <text x={x} y={y+1} textAnchor="middle" dominantBaseline="middle" fill={WH} fontSize="7">⚽</text>
    </g>
  );
}

function Fly({x,y}){
  return(
    <g>
      <circle cx={x} cy={y} r={12} fill={PK} stroke={WH} strokeWidth="1.5"/>
      <text x={x} y={y+1} textAnchor="middle" dominantBaseline="middle" fill={WH} fontSize="9" fontWeight="700">FLY</text>
    </g>
  );
}

function useAnim(dur=2200){
  const[p,setP]=useState(0);
  const[run,setRun]=useState(false);
  const raf=useRef(null),t0=useRef(null);
  const go=spd=>{
    if(raf.current)cancelAnimationFrame(raf.current);
    setP(0);setRun(true);t0.current=null;
    const d=spd===.5?dur*2:dur;
    const fn=ts=>{
      if(!t0.current)t0.current=ts;
      const v=Math.min((ts-t0.current)/d,1);
      setP(v);
      if(v<1)raf.current=requestAnimationFrame(fn);
      else setRun(false);
    };
    raf.current=requestAnimationFrame(fn);
  };
  useEffect(()=>()=>{if(raf.current)cancelAnimationFrame(raf.current);},[]);
  return{p,run,go};
}

function Sc({si,p}){
  const t=p,e=ez(t);
  if(si===0){
    const fy=lp(320,200,e),by=fy,oy=Math.max(lp(340,230,e),by+20),opy=lp(270,185,e),xy=lp(315,155,e),sn=xy<by-4;
    return(<svg viewBox="0 0 340 500" style={{width:"100%",borderRadius:10}}><rect width="340" height="500" fill="#1e5e1e" rx="10"/><PB2/><line x1={sl} y1={by} x2={sr} y2={by} stroke="rgba(255,200,0,0.4)" strokeWidth="1" strokeDasharray="4 3"/><OB cy={opy}/><MB cy={oy}/><Fly x={sx+35} y={fy}/><Bll x={sx+35} y={by}/><XD x={sx-40} y={xy} on={sn}/></svg>);
  }
  if(si===1){
    const fy=lp(320,195,e),by=fy,oy=Math.max(lp(340,225,e),by+20),opy=lp(270,180,e),xy=lp(318,202,e),sn=xy<by-8;
    return(<svg viewBox="0 0 340 500" style={{width:"100%",borderRadius:10}}><rect width="340" height="500" fill="#1e5e1e" rx="10"/><PB2/><line x1={sl} y1={by} x2={sr} y2={by} stroke="rgba(255,200,0,0.3)" strokeWidth="1" strokeDasharray="4 3"/><OB cy={opy}/><MB cy={oy}/><Fly x={sx+35} y={fy}/><Bll x={sx+35} y={by}/><XD x={sx-42} y={xy} on={sn}/></svg>);
  }
  if(si===2){
    const fy=lp(320,210,e),by=fy,oy=Math.max(lp(340,235,e),by+20),opy=lp(270,185,e),xy=lp(315,120,e),sn=xy<by-2;
    return(<svg viewBox="0 0 340 500" style={{width:"100%",borderRadius:10}}><rect width="340" height="500" fill="#1e5e1e" rx="10"/><PB2/><line x1={sl} y1={by} x2={sr} y2={by} stroke="rgba(255,200,0,0.4)" strokeWidth="1" strokeDasharray="4 3"/><OB cy={opy}/><MB cy={oy}/><Fly x={sx} y={fy}/><Bll x={sx} y={by}/><XD x={sx+48} y={xy} on={sn}/></svg>);
  }
  if(si===3){
    const ph=.45,e1=ez(cl(t/ph,0,1)),e2=ez(cl((t-ph)/(1-ph),0,1));
    const opy=lp(210,250,e1),oy=lp(250,290,e1),by=t<ph?oy-12:lp(oy-12,st+60,e2),ly=opy,xy=t<ph?lp(185,200,e1):lp(200,145,e2),sn=t>=ph&&xy<ly;
    return(<svg viewBox="0 0 340 500" style={{width:"100%",borderRadius:10}}><rect width="340" height="500" fill="#1e5e1e" rx="10"/><PB2/>{t>=ph&&<><line x1={sl} y1={ly} x2={sr} y2={ly} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.9"/><text x={sl+4} y={ly-4} fill="#f59e0b" fontSize="8">last opp player</text></>}<OB cy={opy}/><MB cy={oy}/><Bll x={sx} y={by}/><XD x={sx+55} y={xy} on={sn}/>{t<ph&&<text x={sx} y={sb-10} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">▼ opp pushing your way</text>}</svg>);
  }
  if(si===4){
    const ph=.45,e1=ez(cl(t/ph,0,1)),e2=ez(cl((t-ph)/(1-ph),0,1));
    const opy=lp(210,250,e1),oy=lp(250,290,e1),by=t<ph?oy-12:lp(oy-12,st+60,e2),ly=opy,xy=t<ph?lp(235,260,e1):lp(260,185,e2),sn=t>=ph&&xy<ly-5;
    return(<svg viewBox="0 0 340 500" style={{width:"100%",borderRadius:10}}><rect width="340" height="500" fill="#1e5e1e" rx="10"/><PB2/>{t>=ph&&<><line x1={sl} y1={ly} x2={sr} y2={ly} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.9"/><text x={sl+4} y={ly-4} fill="#f59e0b" fontSize="8">last opp player</text></>}<OB cy={opy}/><MB cy={oy}/><Bll x={sx} y={by}/><XD x={sx-55} y={xy} on={sn}/>{t<ph&&<text x={sx} y={sb-10} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">▼ opp pushing your way</text>}</svg>);
  }
  if(si===5){
    const p1=.35,p2=.65,e1=ez(cl(t/p1,0,1)),e2=ez(cl((t-p1)/(p2-p1),0,1)),e3=ez(cl((t-p2)/(1-p2),0,1));
    const fx=t<p2?sx:lp(sx,sx-55,e3),fy=t<p1?lp(310,240,e1):t<p2?240:lp(240,185,e3);
    const oy=Math.max(lp(340,255,ez(t)),fy+22),opy=lp(260,180,ez(t));
    const xy=t<p1?lp(295,345,e1):t<p2?345:lp(345,fy+10,e3),sn=xy<fy-8;
    return(<svg viewBox="0 0 340 500" style={{width:"100%",borderRadius:10}}><rect width="340" height="500" fill="#1e5e1e" rx="10"/><PB2/><line x1={sl} y1={fy} x2={sr} y2={fy} stroke="rgba(255,200,0,0.35)" strokeWidth="1" strokeDasharray="4 3"/><OB cy={opy}/><MB cy={oy}/><Fly x={fx} y={fy}/><Bll x={fx} y={fy}/><XD x={sx+48} y={xy} on={sn}/></svg>);
  }
  if(si===6){
    const shift=lp(0,-75,e);
    const fx=sx+shift,fy=lp(290,230,e),oy=Math.max(lp(340,265,e),fy+20),opy=lp(275,195,e);
    const bullyX=sx+shift;
    const xx=lp(sx+40,sx+85,e)+shift*0.3,xy=lp(310,250,e),cn=xx>fx+45&&t>.3;
    return(<svg viewBox="0 0 340 500" style={{width:"100%",borderRadius:10}}><rect width="340" height="500" fill="#1e5e1e" rx="10"/><PB2/>{cn&&<><line x1={fx} y1={st} x2={fx} y2={sb} stroke="rgba(255,200,0,0.35)" strokeWidth="1" strokeDasharray="4 3"/><text x={fx} y={st+26} textAnchor="middle" fill="rgba(255,200,0,0.7)" fontSize="8">ball</text></>}<OB cy={opy} cx={bullyX}/><MB cy={oy} cx={bullyX}/><Fly x={fx} y={fy}/><Bll x={fx} y={fy}/><XD x={xx} y={xy} on={cn}/>{cn&&<text x={sx} y={sb-10} textAnchor="middle" fill="rgba(255,180,0,0.8)" fontSize="8">ball moved left — X should track left</text>}</svg>);
  }
  return null;
}

function SnQ({onPass}){
  const[si,setSi]=useState(0);
  const[phase,setPhase]=useState("w");
  const[ans,setAns]=useState(null);
  const{p,run,go}=useAnim(2200);
  const sc=SM[si];
  const qw=sc.type==="c"?"Cornering":"Sneaking";
  useEffect(()=>{if(!run&&p===1&&phase==="w")setPhase("a");},[run,p]);
  const replay=spd=>{go(spd);setPhase("w");setAns(null);};
  const pick=v=>{setAns(v);setPhase("r");};
  const next=()=>{if(si+1>=SM.length){onPass();return;}setSi(i=>i+1);setAns(null);setPhase("w");};
  return(
    <div>
      <div style={{...co}}><strong>{sc.label} — {si+1} of {SM.length}</strong>: Watch, then decide.</div>
      <p style={{fontSize:14,color:"#3a2a1a",marginBottom:12,lineHeight:1.6}}>{sc.desc}</p>
      <Sc si={si} p={p}/>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:12}}>
        {phase==="w"&&p===0&&<button onClick={()=>replay(1)} style={bs(BR)}>▶ Play</button>}
        {phase==="w"&&p>0&&!run&&<><button onClick={()=>replay(1)} style={bs(BR)}>↺ Replay</button><button onClick={()=>replay(.5)} style={{...bs("transparent",BR),border:`1px solid ${BR}`}}>↺ Slow</button><button onClick={()=>setPhase("a")} style={bs(PK)}>Answer →</button></>}
        {run&&<button onClick={()=>setPhase("a")} style={{...bs("transparent",BR),border:`1px solid ${BR}`}}>Pause</button>}
        {phase==="a"&&<><button onClick={()=>replay(1)} style={{...bs("transparent",BR),border:`1px solid ${BR}`}}>↺ Replay</button><button onClick={()=>replay(.5)} style={{...bs("transparent",BR),border:`1px solid ${BR}`}}>↺ Slow</button><p style={{width:"100%",fontSize:14,fontWeight:500,color:"#3a2a1a",margin:"6px 0 4px"}}>Is Player X {qw}?</p><button onClick={()=>pick(true)} style={bs(ER)}>Yes — {qw}</button><button onClick={()=>pick(false)} style={bs(OK)}>No — fine</button></>}
      </div>
      {phase==="r"&&(
        <div style={{marginTop:12}}>
          <div style={{background:ans===sc.sn?"#dcfce7":"#fee2e2",border:`1px solid ${ans===sc.sn?OK:ER}`,borderRadius:8,padding:"0.75rem 1rem",fontSize:13,marginBottom:10}}>
            <strong>{ans===sc.sn?"Correct!":"Wrong."}</strong>
          </div>
          <div style={{...co,marginBottom:12}}><strong>Explanation:</strong> {sc.exp}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <button onClick={()=>replay(1)} style={{...bs("transparent",BR),border:`1px solid ${BR}`}}>↺ Replay</button>
            <button onClick={()=>replay(.5)} style={{...bs("transparent",BR),border:`1px solid ${BR}`}}>↺ Slow</button>
            <button onClick={next} style={bs(BR)}>{si+1>=SM.length?"Unlock next →":"Next →"}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function KOA(){
  const{p:t,go}=useAnim(3500);
  const e=ez(t),ph1=.35,ph2=.7;
  const e1=ez(cl(t/ph1,0,1)),e2=ez(cl((t-ph1)/(ph2-ph1),0,1)),e3=ez(cl((t-ph2)/(1-ph2),0,1));
  const bx=t<ph1?lp(pr+20,mx,e1):t<ph2?mx:lp(mx,mx-60,e3);
  const by=t<ph2?my:lp(my,my+45,e3);
  const oc=t<ph1?my-20:lp(my-20,my-20-e2*35,1);
  const mc=t<ph1?my+20:lp(my+20,my+20-e2*35,1);
  const fx=lp(mx,mx-60,e3),fy=lp(mc+35,mc+80,e3);
  const gl=mx-45,gr=mx+45;
  return(
    <div>
      <svg viewBox="0 0 300 460" style={{width:"100%",maxWidth:300,display:"block",margin:"0 auto",borderRadius:10}}>
        <rect width="300" height="460" fill="#1e5e1e" rx="10"/>
        {[0,1,2,3,4,5,6].map(i=><rect key={i} x={px} y={pt+(i*((pb-pt)/7))} width={pr-px} height={(pb-pt)/7} fill={i%2===0?"#1e5e1e":"#236b23"}/>)}
        <rect x={px} y={pt} width={pr-px} height={pb-pt} fill="none" stroke="white" strokeWidth="1.5"/>
        <rect x={gl} y={pt-7} width={gr-gl} height={9} fill="none" stroke={PK} strokeWidth="2.5"/>
        <text x={mx} y={pt-11} textAnchor="middle" fill={PK} fontSize="9" fontWeight="600">▲ GOAL</text>
        <rect x={gl} y={pb-2} width={gr-gl} height={9} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <text x={mx} y={pb+16} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9">your goal ▼</text>
        <line x1={px} y1={my} x2={pr} y2={my} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="6 4"/>
        <line x1={px+55} y1={pt} x2={px+55} y2={pb} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
        <line x1={pr-55} y1={pt} x2={pr-55} y2={pb} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
        <text x={mx} y={pt+14} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">▲ attacking direction</text>
        <circle cx={mx-35} cy={oc-55} r={7} fill={OP} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <circle cx={mx+35} cy={oc-55} r={7} fill={OP} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <circle cx={mx} cy={oc-95} r={7} fill={OP} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <BR2 cx={mx} cy={oc} offs={OLN} color={OP}/>
        <text x={mx} y={oc-32} textAnchor="middle" fill="rgba(100,150,255,0.65)" fontSize="8">{t<ph1?"opposition (heads)":"← pushed back"}</text>
        <circle cx={bx} cy={by} r={8} fill="#f59e0b" stroke="white" strokeWidth="1.5"/>
        <text x={bx} y={by+1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7">⚽</text>
        <BR2 cx={mx} cy={mc} offs={BLN} color={BR}/>
        <text x={mx} y={mc+32} textAnchor="middle" fill="rgba(255,200,130,0.65)" fontSize="8">{t<ph1?"your team (no heads)":t<ph2?"pushing →":""}</text>
        {t>=ph2&&<g><circle cx={fx} cy={fy} r={10} fill={PK} stroke="white" strokeWidth="1.5"/><text x={fx} y={fy+1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="700">FLY</text></g>}
        <circle cx={mx-35} cy={mc+55} r={7} fill={BR} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <circle cx={mx+35} cy={mc+55} r={7} fill={BR} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <circle cx={mx} cy={mc+100} r={7} fill={BR} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        {t>=ph2&&<>
          <text x={mx-35} y={mc+70} textAnchor="middle" fill="rgba(255,200,130,0.6)" fontSize="7">short</text>
          <text x={mx+35} y={mc+70} textAnchor="middle" fill="rgba(255,200,130,0.6)" fontSize="7">short</text>
          <text x={mx} y={mc+115} textAnchor="middle" fill="rgba(255,200,130,0.6)" fontSize="7">long</text>
        </>}
        {t<ph1&&<text x={pr+5} y={my-10} fill="rgba(255,255,255,0.5)" fontSize="8">← ball</text>}
      </svg>
      <div style={{display:"flex",gap:8,marginTop:10}}>
        <button onClick={()=>go(1)} style={bs(BR)}>{t===0?"▶ Play":"↺ Replay"}</button>
      </div>
    </div>
  );
}

function BDiag(){
  const cx=170,r=11;
  const pl=[{x:cx-75,y:100,l:"Corner",s:"C"},{x:cx-45,y:100,l:"Side-Post",s:"SP"},{x:cx-15,y:100,l:"Post",s:"P"},{x:cx+15,y:100,l:"Side-Post",s:"SP"},{x:cx+45,y:100,l:"Corner",s:"C"},{x:cx+75,y:100,l:"Corner",s:"C"}];
  const bupX=cx,bupY=135;
  const flyX=cx,flyY=175;
  return(
    <svg viewBox="0 0 340 240" style={{width:"100%",borderRadius:8,background:"#1a3a1a"}}>
      <text x={170} y={18} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">▲ attacking direction</text>
      <text x={170} y={36} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9">— front row —</text>
      {pl.map((p,i)=>(
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={r} fill={BR} stroke={PK} strokeWidth="1.5"/>
          <text x={p.x} y={p.y+1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="600">{p.s}</text>
          <text x={p.x} y={p.y+r+10} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7">{p.l}</text>
        </g>
      ))}
      <circle cx={bupX} cy={bupY} r={r} fill={BR} stroke={PK} strokeWidth="1.5"/>
      <text x={bupX} y={bupY+1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="600">Bup</text>
      <text x={bupX} y={bupY+r+10} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7">Bup</text>
      <circle cx={flyX} cy={flyY} r={r} fill={PK} stroke="white" strokeWidth="1.5"/>
      <text x={flyX} y={flyY+1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="600">FLY</text>
      <text x={flyX} y={flyY+r+10} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7">Fly</text>
    </svg>
  );
}

function GateQ({mid,onPass}){
  const qs=GQ[mid]||[];
  const[i,setI]=useState(0);
  const[sel,setSel]=useState(null);
  const[ans,setAns]=useState(false);
  const[fail,setFail]=useState(false);
  if(!qs.length){onPass();return null;}
  const q=qs[i],ok=sel===q.a;
  const next=()=>{if(!ok){setFail(true);return;}if(i+1>=qs.length){onPass();return;}setI(x=>x+1);setSel(null);setAns(false);};
  if(fail)return(
    <div style={{textAlign:"center",padding:"1.5rem 0"}}>
      <div style={{fontSize:40,marginBottom:10}}>📖</div>
      <h3 style={{color:BR,fontWeight:500}}>Not quite — re-read and try again.</h3>
      <button onClick={()=>{setI(0);setSel(null);setAns(false);setFail(false);}} style={bs()}>Try again</button>
    </div>
  );
  return(
    <div>
      <div style={{...co,marginBottom:"1rem"}}><strong>Quick check</strong> — {i+1} of {qs.length}.</div>
      <div style={{...cs,marginBottom:"1rem",padding:"1rem 1.25rem"}}><p style={{fontSize:15,fontWeight:500,margin:0}}>{q.q}</p></div>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:"1rem"}}>
        {q.o.map((opt,j)=>{
          let bg="rgba(255,255,255,0.9)",bd2="rgba(107,76,30,0.2)",cl2="#3a2a1a";
          if(ans){if(j===q.a){bg="#dcfce7";bd2=OK;cl2="#15803d";}else if(j===sel){bg="#fee2e2";bd2=ER;cl2="#b91c1c";}}
          return<button key={j} onClick={()=>{if(!ans){setSel(j);setAns(true);}}} style={{background:bg,border:`1.5px solid ${bd2}`,borderRadius:8,padding:"10px 14px",fontSize:14,textAlign:"left",cursor:ans?"default":"pointer",color:cl2,fontFamily:"sans-serif"}}><span style={{fontWeight:500,marginRight:8}}>{["A","B","C","D"][j]}.</span>{opt}</button>;
        })}
      </div>
      {ans&&<><div style={{background:ok?"#dcfce7":"#fee2e2",border:`1px solid ${ok?OK:ER}`,borderRadius:8,padding:"0.75rem 1rem",fontSize:13,marginBottom:"1rem"}}><strong>{ok?"Correct!":"Incorrect."}</strong> {q.ex}</div><button onClick={next} style={bs(BR)}>{ok?(i+1>=qs.length?"Unlock next section →":"Next →"):"See result"}</button></>}
    </div>
  );
}

function Content({id}){
  if(id==="intro")return(
    <div>
      <h2 style={h2s}>What is the Field Game?</h2>
      <p style={bds}>The Field Game is played only at Eton College. It has been here for centuries and exists nowhere else in the world — somewhere between football and rugby, but with its own completely unique rules, positions, and language.</p>
      <div style={co}>Don't try to apply football rules here — the Field Game is its own thing.</div>
      <p style={bds}>Two teams of eleven face off on a rectangular pitch. Each team has 7 Bully players, 1 Fly, and 3 Behinds — made up of <strong>2 Shorts</strong> and <strong>1 Long</strong>. The most exciting score is a <strong style={{color:PK}}>Rouge</strong> (5 pts). A <strong style={{color:OK}}>Goal</strong> through the posts is worth 3.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginTop:"1rem"}}>
        {[["Players","11 per side"],["Match","Two 25-min halves"],["Ball","Size 4 Gaelic football"]].map(([l,v])=>(
          <div key={l} style={{background:BL,borderRadius:8,padding:"0.75rem",textAlign:"center"}}>
            <div style={{fontSize:11,color:BR,marginBottom:3,textTransform:"uppercase",letterSpacing:.5}}>{l}</div>
            <div style={{fontSize:13,fontWeight:500}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
  if(id==="flow")return(
    <div>
      <h2 style={h2s}>Flow of the Game</h2>
      {[
        {c:BR,n:"1. Kick off — the Bully",pre:"The game starts with a Set-Piece Bully in the centre. The Bully is the core formation — seven players per side bind together and push against each other to win possession. It is similar to a scrum in rugby.",anim:<KOA/>},
        {c:PK,n:"2. When it is your team's Heads",body:"When it is your team's Heads, your Bully crouches lower and pushes — this gives you the advantage and your team wins possession. Once the Bully pushes forward and the ball is behind your players, it goes to your Fly, who dribbles left or right to start the attack."},
        {c:BR,n:"3. Attacking",body:"The attacking team tries to score a Rouge — by kicking the ball onto a defending player so that it goes behind the goal-line (the same way you win a corner in football) — or a Goal by kicking through the posts."},
        {c:PK,n:"4. Defending",body:"Defenders must stay behind the player on their own team who is running forward with the ball. They must also track the ball's sideways movement at all times."},
        {c:BR,n:"5. Restarts",body:<>If the ball goes out at the side, a Set-Piece Bully is formed on the vertical dotted line. <strong><u>This is level with where the ball was last kicked — not where it went out.</u></strong> If it goes behind off an attacker, defenders get a Goal-Kick.</>},
        {c:PK,n:"6. Scoring a Rouge",body:"Kick the ball onto a defending player so it goes behind the goal-line — which extends infinitely. Once rougeable, run and touch the ball on the floor with your hand. Attackers touching it down first scores more than defenders doing so."},
      ].map(({c,n,pre,body,anim})=>(
        <div key={n} style={{background:c===BR?"rgba(107,76,30,0.06)":"rgba(192,56,138,0.06)",borderRadius:10,padding:"1rem",marginBottom:"1rem",borderLeft:`3px solid ${c}`}}>
          <div style={{fontWeight:500,fontSize:14,color:c,marginBottom:6}}>{n}</div>
          {pre&&<p style={{fontSize:13,lineHeight:1.7,margin:"0 0 10px"}}>{pre}</p>}
          {anim}
          {body&&<p style={{fontSize:13,lineHeight:1.7,margin:0}}>{body}</p>}
        </div>
      ))}
    </div>
  );
  if(id==="positions")return(
    <div>
      <h2 style={h2s}>Players & Positions</h2>
      <p style={bds}>There are 11 players per side: 7 Bully players, 1 Fly, and 3 Behinds (2 Shorts + 1 Long).</p>
      <div style={{background:BR,borderRadius:"8px 8px 0 0",padding:"8px 14px",color:WH,fontWeight:500,fontSize:14}}>Bully players — 7</div>
      <div style={{border:`1px solid ${BR}33`,borderTop:"none",borderRadius:"0 0 8px 8px",overflow:"hidden",marginBottom:"1rem"}}>
        {[["Post","Central anchor of the front row."],["Side-Posts (×2)","Bind either side of the Post."],["Corners (×3)","Bind to the Side-Posts. One inserts the ball."],["Bup","Binds behind the Post, providing push."]].map(([n,d],i)=>(
          <div key={n} style={{padding:"10px 14px",background:i%2===0?"rgba(255,255,255,0.9)":"rgba(245,237,224,0.6)",borderBottom:`0.5px solid ${BR}22`}}>
            <span style={{fontWeight:500,fontSize:14}}>{n}</span>
            <p style={{margin:"3px 0 0",fontSize:13,color:MU}}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{background:PK,borderRadius:"8px 8px 0 0",padding:"8px 14px",color:WH,fontWeight:500,fontSize:14}}>Fly — 1</div>
      <div style={{border:`1px solid ${PK}33`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:"10px 14px",background:"rgba(255,255,255,0.9)",marginBottom:"1rem"}}>
        <p style={{margin:0,fontSize:13,color:"#3a2a1a",lineHeight:1.6}}>Stands just behind the Bully, receives the ball, and dribbles left or right.</p>
      </div>
      <div style={{background:"#8b5e0a",borderRadius:"8px 8px 0 0",padding:"8px 14px",color:WH,fontWeight:500,fontSize:14}}>Behinds — 3 (2 Shorts + 1 Long)</div>
      <div style={{border:"1px solid rgba(139,94,10,0.3)",borderTop:"none",borderRadius:"0 0 8px 8px",overflow:"hidden",marginBottom:"1rem"}}>
        <div style={{padding:"12px 14px",background:"rgba(255,255,255,0.9)",borderBottom:"0.5px solid rgba(139,94,10,0.15)"}}>
          <span style={{fontWeight:500,fontSize:14}}>The two Shorts</span>
          <p style={{margin:"4px 0 0",fontSize:13,color:"#3a2a1a",lineHeight:1.7}}>Sit a short distance behind the Bully, spread out — one to the left, one to the right. Constantly adjusting as the Bully moves, involved in both attack and defence.</p>
        </div>
        <div style={{padding:"12px 14px",background:"rgba(245,237,224,0.6)"}}>
          <span style={{fontWeight:500,fontSize:14}}>The Long</span>
          <p style={{margin:"4px 0 0",fontSize:13,color:"#3a2a1a",lineHeight:1.7}}>Sits considerably further back — well behind the main play. Tracks up and down as the game moves. Last line of defence when the opposition breaks through.</p>
        </div>
      </div>
      <h3 style={h3s}>How it looks on the pitch</h3>
      <svg viewBox="0 0 300 460" style={{width:"100%",maxWidth:300,display:"block",margin:"0 auto",borderRadius:8}}>
        <rect width="300" height="460" fill="#1e5e1e" rx="8"/>
        {[0,1,2,3,4,5,6].map(i=><rect key={i} x={px} y={pt+(i*((pb-pt)/7))} width={pr-px} height={(pb-pt)/7} fill={i%2===0?"#1e5e1e":"#236b23"}/>)}
        <rect x={px} y={pt} width={pr-px} height={pb-pt} fill="none" stroke="white" strokeWidth="1.5"/>
        <rect x={mx-45} y={pt-7} width={90} height={9} fill="none" stroke={PK} strokeWidth="2.5"/>
        <text x={mx} y={pt-11} textAnchor="middle" fill={PK} fontSize="9" fontWeight="600">▲ GOAL</text>
        <rect x={mx-45} y={pb-2} width={90} height={9} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <text x={mx} y={pb+16} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9">your goal ▼</text>
        <line x1={px} y1={my} x2={pr} y2={my} stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="6 4"/>
        <line x1={px+55} y1={pt} x2={px+55} y2={pb} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
        <line x1={pr-55} y1={pt} x2={pr-55} y2={pb} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
        <text x={mx} y={pt+14} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">▲ attacking direction</text>
        <BR2 cx={mx} cy={175} offs={OLN} color={OP}/>
        <circle cx={mx-30} cy={135} r={8} fill={OP} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <circle cx={mx+30} cy={135} r={8} fill={OP} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <circle cx={mx} cy={100} r={8} fill={OP} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <text x={mx} y={158} textAnchor="middle" fill="rgba(100,150,255,0.55)" fontSize="8">opposition</text>
        <BR2 cx={mx} cy={235} offs={BLN} color={BR}/>
        <circle cx={mx} cy={268} r={9} fill={PK} stroke="white" strokeWidth="1.5"/>
        <text x={mx} y={269} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontWeight="600">FLY</text>
        <circle cx={mx-40} cy={300} r={8} fill="#8b5e0a" stroke="white" strokeWidth="1.5"/>
        <text x={mx-40} y={314} textAnchor="middle" fill="rgba(255,200,130,0.7)" fontSize="7">short</text>
        <circle cx={mx+40} cy={300} r={8} fill="#8b5e0a" stroke="white" strokeWidth="1.5"/>
        <text x={mx+40} y={314} textAnchor="middle" fill="rgba(255,200,130,0.7)" fontSize="7">short</text>
        <circle cx={mx} cy={350} r={8} fill="#5a3d06" stroke="white" strokeWidth="1.5"/>
        <text x={mx} y={364} textAnchor="middle" fill="rgba(255,200,130,0.6)" fontSize="7">long</text>
      </svg>
    </div>
  );
  if(id==="bully")return(
    <div>
      <h2 style={h2s}>The Bully</h2>
      <p style={bds}>The Bully is the heart of the Field Game — seven players per side bind together and push for the ball, similar to a scrum in rugby.</p>
      <h3 style={h3s}>The formation</h3>
      <BDiag/>
      <div style={{background:`linear-gradient(135deg,${BR}ee,#7a1a52cc)`,borderRadius:10,padding:"1rem 1.25rem",margin:"1rem 0"}}>
        <p style={{color:WH,fontWeight:500,fontSize:15,margin:"0 0 6px"}}>The golden rule after your team wins the Bully:</p>
        <p style={{color:"rgba(255,255,255,0.9)",fontSize:14,margin:0,lineHeight:1.7}}>
          <strong style={{color:PK}}>Keep running. Never stop. Never get caught Sneaking.</strong><br/>
          When your team wins possession, every player must run to stay behind the ball. Drift ahead and you are Sneaking — your team loses possession.
        </p>
      </div>
      <h3 style={h3s}>How a Set-Piece Bully starts</h3>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:"1rem"}}>
        {[["CROUCH","The umpire calls CROUCH. The front row of the team with Heads crouches down."],["BIND","On BIND, the team with Heads puts their heads in between the players directly opposite."],["SET","On SET, a Corner from the team without Heads inserts the ball into the tunnel. Both sides push."]].map(([c,d])=>(
          <div key={c} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{background:BR,color:PK,borderRadius:6,padding:"4px 10px",fontWeight:500,fontSize:12,whiteSpace:"nowrap",minWidth:68,textAlign:"center"}}>{c}</div>
            <div style={{fontSize:14,lineHeight:1.6}}>{d}</div>
          </div>
        ))}
      </div>
      <div style={co}>The ball must reach the Post's feet before it can be played out of the Bully.</div>
      <div style={{...co,borderLeftColor:PK,background:PLL}}>Winning the Bully is only half the job. The moment the ball comes out — keep running and stay onside.</div>
    </div>
  );
  if(id==="scoring")return(
    <div>
      <h2 style={h2s}>Scoring</h2>
      <p style={bds}>A Rouge is worth more than a Goal.</p>
      <div style={{overflowX:"auto",marginBottom:"1.25rem"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
          <thead>
            <tr style={{background:BR}}>
              {["Score","Pts","How"].map(h=><th key={h} style={{padding:"9px 12px",textAlign:h==="Pts"?"center":"left",color:WH,fontWeight:500}}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {[
              ["Rouge — attackers touch down",5,"Kick onto defender → behind → attacker touches down first",PK],
              ["Rouge + Conversion",7,"Rouge (5pts) + Conversion (2pts)",PK],
              ["Rougeable — defenders touch down",3,"Attackers choose 3pts or free kick","#9333ea"],
              ["Goal",3,"Ball through the posts",OK],
              ["Conversion",2,"Only if attackers touched down first — 2v2 to touch down again","#4a90d9"],
              ["Penalty-Goal",3,"Defender handles to prevent goal",ER],
              ["Penalty point",1,"Defender infringes in 3-yard zone",MU],
            ].map(([type,pts,desc,color],i)=>(
              <tr key={i} style={{background:i%2===0?"rgba(255,255,255,0.9)":"rgba(245,237,224,0.5)"}}>
                <td style={{padding:"9px 12px",fontWeight:500,color,fontSize:12}}>{type}</td>
                <td style={{padding:"9px 12px",textAlign:"center",fontWeight:500,fontSize:15}}>{pts}</td>
                <td style={{padding:"9px 12px",color:MU,fontSize:12}}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 style={h3s}>Scoring a Rouge</h3>
      <p style={bds}>Kick the ball onto a defending player so it goes behind the goal-line — the same way you win a corner in football. The goal-line extends infinitely. Once rougeable, sprint and touch it down with your hand. Attackers first = 5 points + Conversion. Defenders first = attackers choose 3 points or free kick on the 3-yard line.</p>
      <h3 style={h3s}>The Conversion</h3>
      <p style={bds}>The attacking team only gets a Conversion if they touched down first. It is 2v2 — attackers try to touch down again while defenders try to kick it out past the 3-yard line. Success = 2 extra points.</p>
    </div>
  );
  return null;
}

function FinalQuiz(){
  const[s,setS]=useState({i:0,sel:null,ans:false,score:0,wrong:[],done:false});
  const q=FQ[s.i];
  const pick=j=>{
    if(s.ans)return;
    setS(p=>({...p,sel:j,ans:true,score:j===q.a?p.score+1:p.score,wrong:j!==q.a?[...p.wrong,p.i]:p.wrong}));
  };
  const next=()=>{
    if(s.i+1>=FQ.length)setS(p=>({...p,done:true}));
    else setS(p=>({...p,i:p.i+1,sel:null,ans:false}));
  };
  if(s.done){
    const pct=Math.round(s.score/FQ.length*100);
    return(
      <div style={{textAlign:"center",padding:"1rem 0"}}>
        <div style={{fontSize:48,marginBottom:8}}>{pct>=80?"🎉":pct>=60?"👍":"📖"}</div>
        <h2 style={{...h2s,textAlign:"center"}}>Test complete</h2>
        <div style={{fontSize:32,fontWeight:500,color:pct>=80?OK:pct>=60?"#f59e0b":ER,marginBottom:8}}>{s.score}/{FQ.length}</div>
        <p style={{color:MU,fontSize:15}}>{pct>=80?"Excellent.":pct>=60?"Good — review weaker sections.":"Keep going through the guide."}</p>
        {s.wrong.length>0&&(
          <div style={{textAlign:"left",marginTop:"1rem"}}>
            <p style={{fontWeight:500,fontSize:14}}>To revisit:</p>
            {s.wrong.map(i=>(
              <div key={i} style={{background:"rgba(255,255,255,0.9)",borderLeft:`3px solid ${ER}`,borderRadius:"0 8px 8px 0",padding:"0.75rem 1rem",marginBottom:6}}>
                <p style={{fontSize:13,margin:0,fontWeight:500}}>{FQ[i].q}</p>
                <p style={{fontSize:12,color:OK,margin:"3px 0 0"}}>✓ {FQ[i].o[FQ[i].a]}</p>
              </div>
            ))}
          </div>
        )}
        <button onClick={()=>setS({i:0,sel:null,ans:false,score:0,wrong:[],done:false})} style={{...bs(BR),marginTop:"1.5rem"}}>Try again</button>
      </div>
    );
  }
  return(
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
        <h2 style={{...h2s,margin:0}}>Final test</h2>
        <span style={{fontSize:13,color:MU}}>{s.i+1}/{FQ.length}</span>
      </div>
      <div style={{background:"rgba(245,237,224,0.5)",borderRadius:8,padding:"0.5rem 0.75rem",marginBottom:"1rem"}}>
        <div style={{height:4,background:"rgba(107,76,30,0.15)",borderRadius:99}}>
          <div style={{height:4,background:BR,borderRadius:99,width:`${(s.i/FQ.length)*100}%`,transition:"width 0.3s"}}/>
        </div>
      </div>
      <div style={{...cs,marginBottom:"1rem"}}><p style={{fontSize:15,fontWeight:500,margin:0}}>{q.q}</p></div>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:"1rem"}}>
        {q.o.map((opt,j)=>{
          let bg="rgba(255,255,255,0.9)",bd2="rgba(107,76,30,0.2)",cl2="#3a2a1a";
          if(s.ans){if(j===q.a){bg="#dcfce7";bd2=OK;cl2="#15803d";}else if(j===s.sel){bg="#fee2e2";bd2=ER;cl2="#b91c1c";}}
          return<button key={j} onClick={()=>pick(j)} style={{background:bg,border:`1.5px solid ${bd2}`,borderRadius:8,padding:"10px 14px",fontSize:14,textAlign:"left",cursor:s.ans?"default":"pointer",color:cl2,fontFamily:"sans-serif"}}><span style={{fontWeight:500,marginRight:8}}>{["A","B","C","D"][j]}.</span>{opt}</button>;
        })}
      </div>
      {s.ans&&(
        <>
          <div style={{background:s.sel===q.a?"#dcfce7":"#fee2e2",border:`1px solid ${s.sel===q.a?OK:ER}`,borderRadius:8,padding:"0.75rem 1rem",fontSize:13,marginBottom:"1rem"}}>
            <strong>{s.sel===q.a?"Correct!":"Not quite."}</strong> {q.ex}
          </div>
          <button onClick={next} style={bs(BR)}>{s.i+1>=FQ.length?"See results →":"Next →"}</button>
        </>
      )}
    </div>
  );
}

function AdminView({onClose}){
  const[users,setUsers]=useState(null);
  useEffect(()=>{loadProgress().then(setUsers);},[]);
  return(
    <div style={{position:"fixed",inset:0,zIndex:100,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
      <div style={{background:WH,borderRadius:14,padding:"1.5rem",maxWidth:480,width:"100%",maxHeight:"80vh",overflowY:"auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
          <h2 style={{margin:0,fontSize:18,fontWeight:500,color:BR}}>Progress tracker</h2>
          <button onClick={onClose} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:MU}}>✕</button>
        </div>
        {!users&&<p style={{color:MU,fontSize:14}}>Loading...</p>}
        {users&&users.length===0&&<p style={{color:MU,fontSize:14}}>No one has started yet.</p>}
        {users&&users.map((u,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"0.75rem 0",borderBottom:"0.5px solid #eee"}}>
            <div style={{width:36,height:36,borderRadius:"50%",background:BR,display:"flex",alignItems:"center",justifyContent:"center",color:WH,fontWeight:500,fontSize:14,flexShrink:0}}>
              {u.name.charAt(0).toUpperCase()}
            </div>
            <div style={{flex:1}}>
              <div style={{fontWeight:500,fontSize:14,color:"#1a1a1a"}}>{u.name}</div>
              <div style={{fontSize:12,color:MU}}>{u.sections} of {MODS.length} sections · last active {u.last_active}</div>
              <div style={{marginTop:4,height:4,background:"#eee",borderRadius:99}}>
                <div style={{height:4,background:u.pct===100?OK:PK,borderRadius:99,width:`${u.pct}%`}}/>
              </div>
            </div>
            <div style={{fontSize:14,fontWeight:500,color:u.pct===100?OK:PK}}>{u.pct}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App(){
  const[screen,setScreen]=useState("landing");
  const[name,setName]=useState("");
  const[nin,setNin]=useState("");
  const[cur,setCur]=useState(0);
  const[unlocked,setUnlocked]=useState(new Set([0]));
  const[gating,setGating]=useState(false);
  const[sqz,setSqz]=useState(false);
  const[showAdmin,setShowAdmin]=useState(false);
  const pct=Math.round((unlocked.size/MODS.length)*100);

  const pass=()=>{
    const n=cur+1;
    const newUnlocked=new Set([...unlocked,n]);
    setUnlocked(newUnlocked);
    setGating(false);setSqz(false);setCur(n);
    saveProgress(name,newUnlocked.size,MODS.length);
  };
  const goTo=i=>{if(!unlocked.has(i))return;setGating(false);setSqz(false);setCur(i);};
  const startG=()=>{if(MODS[cur].id==="sneaking")setSqz(true);else setGating(true);};
  const mod=MODS[cur],isLast=cur===MODS.length-1;

  const startGuide=()=>{
    if(!nin.trim())return;
    const nm=nin.trim();
    setName(nm);
    setScreen("basic");
    saveProgress(nm,1,MODS.length);
  };

  if(screen==="landing")return(
    <div style={{fontFamily:"sans-serif",minHeight:"100vh",position:"relative"}}>
      <Bg/>
      {showAdmin&&<AdminView onClose={()=>setShowAdmin(false)}/>}
      <div style={{position:"relative",zIndex:1,maxWidth:480,margin:"0 auto",padding:"3rem 1.25rem 2rem"}}>
        <div style={{textAlign:"center",marginBottom:"2rem"}}>
          <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:64,height:64,borderRadius:16,background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.25)",fontSize:30,marginBottom:"1rem"}}>⚽</div>
          <h1 style={{color:WH,fontSize:28,fontWeight:500,margin:"0 0 8px"}}>Welcome to the Field Game — Mustians</h1>
          <p style={{color:"rgba(255,255,255,0.7)",fontSize:15,margin:0}}>An interactive guide — Adnan Al-Sadi</p>
        </div>
        <div style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:16,padding:"1.5rem",marginBottom:"1.5rem"}}>
          <label style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.8)",marginBottom:8}}>Your name</label>
          <input value={nin} onChange={e=>setNin(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")startGuide();}} placeholder="Enter your name..." style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.15)",color:WH,fontSize:15,boxSizing:"border-box",outline:"none",fontFamily:"sans-serif",marginBottom:"1rem"}}/>
          <button onClick={startGuide} disabled={!nin.trim()} style={{...bs(PK),width:"100%",opacity:nin.trim()?1:.5,cursor:nin.trim()?"pointer":"not-allowed"}}>Start →</button>
        </div>
        <p style={{color:"rgba(255,255,255,0.4)",fontSize:12,textAlign:"center",marginBottom:"3rem"}}>Eton College · Field Game Guide · 2025</p>
        <div style={{textAlign:"center"}}>
          <button onClick={()=>setShowAdmin(true)} style={{background:"none",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.15)",fontSize:11,padding:"4px 8px"}}>⚙</button>
        </div>
      </div>
    </div>
  );

  return(
    <div style={{fontFamily:"sans-serif",minHeight:"100vh",position:"relative"}}>
      <Bg/>
      <div style={{position:"relative",zIndex:1,maxWidth:720,margin:"0 auto",padding:"1.5rem 1rem 3rem"}}>
        <div style={{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:14,padding:"1.25rem 1.5rem",marginBottom:"1.25rem"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
            <div>
              <p style={{margin:"0 0 2px",fontSize:11,color:"rgba(255,255,255,0.55)",textTransform:"uppercase",letterSpacing:1}}>Field Game · Basic</p>
              <h1 style={{margin:0,fontSize:20,fontWeight:500,color:WH}}>Hey {name} — let's learn the Field Game</h1>
            </div>
            <button onClick={()=>{setScreen("landing");setCur(0);setUnlocked(new Set([0]));setGating(false);setSqz(false);}} style={{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,padding:"6px 12px",fontSize:12,color:"rgba(255,255,255,0.8)",cursor:"pointer",fontFamily:"sans-serif"}}>← Back</button>
          </div>
          <div style={{marginTop:12,background:"rgba(255,255,255,0.15)",borderRadius:99,height:5}}>
            <div style={{height:5,background:PK,borderRadius:99,width:`${pct}%`,transition:"width 0.4s"}}/>
          </div>
          <p style={{margin:"5px 0 0",fontSize:11,color:"rgba(255,255,255,0.5)"}}>{unlocked.size} of {MODS.length} sections unlocked</p>
        </div>
        <nav style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:"1.25rem"}}>
          {MODS.map((m,i)=>{
            const u=unlocked.has(i),c=cur===i;
            return(
              <button key={m.id} onClick={()=>goTo(i)} disabled={!u} style={{padding:"5px 11px",borderRadius:20,fontSize:12,cursor:u?"pointer":"not-allowed",border:"1px solid",borderColor:c?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.2)",background:c?"rgba(255,255,255,0.25)":"rgba(255,255,255,0.08)",color:c?WH:"rgba(255,255,255,0.6)",fontWeight:c?500:400,opacity:u?1:.4}}>
                {!u?"🔒 ":""}{m.icon} {m.title}
              </button>
            );
          })}
        </nav>
        <div style={{...cs,borderTop:`3px solid ${PK}`,borderRadius:"0 0 14px 14px",borderTopLeftRadius:0,borderTopRightRadius:0}}>
          {sqz?<SnQ onPass={pass}/>:gating?<GateQ mid={mod.id} onPass={pass}/>:mod.id==="sneaking"?(
            <div>
              <h2 style={h2s}>Sneaking & Cornering</h2>
              <p style={bds}>These are the two most common mistakes new players make.</p>
              <h3 style={h3s}>Sneaking</h3>
              <p style={bds}>You are <strong style={{color:ER}}>Sneaking</strong> when you are in front of the ball whilst a teammate is moving forward with it, OR when you are in front of the last player in the opposing team's Bully.</p>
              <p style={bds}>If you find yourself Sneaking, get back as fast as possible — <strong>put your hands up whilst you do it</strong> to signal to the umpire. You cannot interfere with play whilst Sneaking.</p>
              <div style={co}>Think of it like offside in football — every time a teammate runs forward with the ball, every other player must stay behind it.</div>
              <h3 style={h3s}>Cornering</h3>
              <p style={bds}>You are <strong style={{color:"#f59e0b"}}>Cornering</strong> if you fail to track the ball's sideways movement. If the ball moves left, you move left. A player who is Cornering cannot touch the ball.</p>
              <div style={{background:PLL,borderLeft:`3px solid ${PK}`,borderRadius:"0 8px 8px 0",padding:"0.75rem 1rem",fontSize:14,marginBottom:"1rem",color:"#5a0a3a"}}>Sneaking = too far <em>forward</em>. Cornering = too far to the <em>side</em>.</div>
              <div style={{marginTop:"1.5rem",borderTop:"0.5px solid rgba(107,76,30,0.15)",paddingTop:"1.25rem"}}>
                <p style={{fontSize:13,color:MU,marginBottom:10}}>Watch animated scenarios and decide whether Player X is Sneaking or Cornering.</p>
                <button onClick={startG} style={bs(BR)}>Start the quiz →</button>
              </div>
            </div>
          ):mod.id==="finalquiz"?<FinalQuiz/>:(
            <div>
              <Content id={mod.id}/>
              {!isLast&&(
                <div style={{marginTop:"1.5rem",borderTop:"0.5px solid rgba(107,76,30,0.15)",paddingTop:"1.25rem"}}>
                  <p style={{fontSize:13,color:MU,marginBottom:10}}>Answer a quick question to unlock the next section.</p>
                  <button onClick={startG} style={bs(BR)}>Continue →</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}