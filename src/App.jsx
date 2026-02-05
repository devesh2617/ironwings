
import React, {useEffect, useState} from "react";

const styles = {
nav:{
position:"fixed",
top:0,
width:"100%",
background:"#fff",
boxShadow:"0 4px 12px rgba(0,0,0,0.08)",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"14px 40px",
zIndex:1000
},
hero:{
height:"100vh",
backgroundImage:"linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
color:"#fff",
textAlign:"center"
},
button:{
background:"#ff6b00",
color:"#fff",
padding:"16px 36px",
borderRadius:"12px",
border:"none",
fontSize:"18px",
cursor:"pointer",
fontWeight:"bold",
boxShadow:"0 10px 25px rgba(0,0,0,.2)"
},
section:{
padding:"100px 40px",
maxWidth:"1200px",
margin:"auto"
},
grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:"40px"
},
card:{
background:"#fff",
padding:"40px",
borderRadius:"18px",
boxShadow:"0 10px 30px rgba(0,0,0,.08)",
transition:"0.3s"
},
bigCard:{
background:"#fff",
padding:"60px",
borderRadius:"22px",
boxShadow:"0 20px 40px rgba(0,0,0,.1)"
},
cta:{
background:"#ff6b00",
color:"#fff",
padding:"120px 20px",
textAlign:"center"
}
};

function Countdown(){
const [time,setTime]=useState("");

useEffect(()=>{
const eventDate=new Date("April 5, 2026 05:00:00").getTime();

const timer=setInterval(()=>{
const now=new Date().getTime();
const dist=eventDate-now;

const d=Math.floor(dist/(1000*60*60*24));
const h=Math.floor((dist%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((dist%(1000*60*60))/(1000*60));
const s=Math.floor((dist%(1000*60))/1000);

setTime(`${d}d ${h}h ${m}m ${s}s`);

},1000);

return ()=>clearInterval(timer);
},[]);

return <h2 style={{fontSize:"32px",marginBottom:"30px"}}>{time}</h2>
}

export default function App(){

return (
<div>

{/* NAV */}
<div style={styles.nav}>
<div style={{display:"flex",alignItems:"center",gap:"10px"}}>
<img src="/ironwings/logo.png" width="40"/>
<b>IronWings Marathon</b>
</div>

<a href="https://www.townscript.com/e/world-health-day-IronWings-marathon-gurgaon-404444">
<button style={styles.button}>Register</button>
</a>
</div>

{/* HERO */}
<div style={styles.hero}>
<img src="/ironwings/logo.png" width="140"/>
<h1 style={{fontSize:"72px",margin:"20px 0"}}>IRONWINGS MARATHON 2026</h1>
<p style={{fontSize:"22px"}}>Gurgaon • 5 April 2026 • World Health Day</p>

<Countdown/>

<a href="https://www.townscript.com/e/world-health-day-IronWings-marathon-gurgaon-404444">
<button style={styles.button}>Register Now</button>
</a>
</div>

{/* RACES */}
<div style={styles.section}>
<h2 style={{fontSize:"48px",textAlign:"center",marginBottom:"60px"}}>Choose Your Challenge</h2>

<div style={styles.grid}>
<div style={styles.card}><h3>21 KM</h3><p>Half Marathon for serious runners.</p></div>
<div style={styles.card}><h3>10 KM</h3><p>Perfect blend of speed and endurance.</p></div>
<div style={styles.card}><h3>5 KM</h3><p>Fun run for everyone.</p></div>
</div>
</div>

{/* AMENITIES */}
<div style={{...styles.section,background:"#fafafa"}}>
<h2 style={{fontSize:"48px",textAlign:"center",marginBottom:"60px"}}>Elite Amenities</h2>

<div style={styles.grid}>
<div style={styles.bigCard}>🏅 Finisher Medals & Certificates</div>
<div style={styles.bigCard}>👕 Premium Runner Kit</div>
<div style={styles.bigCard}>🎶 Live Music & Zumba</div>
<div style={styles.bigCard}>🥤 Hydration Stations</div>
<div style={styles.bigCard}>💆 Recovery Zone</div>
<div style={styles.bigCard}>📸 Professional Photography</div>
</div>
</div>

{/* PARTNERS */}
<div style={styles.section}>
<h2 style={{fontSize:"48px",textAlign:"center",marginBottom:"60px"}}>Booking Partners</h2>

<div style={styles.grid}>
<div style={styles.bigCard}>Townscript</div>
<div style={styles.bigCard}>India Running</div>
<div style={styles.bigCard}>BookMyRace</div>
</div>
</div>

{/* CTA */}
<div style={styles.cta}>
<h2 style={{fontSize:"54px"}}>Be Part of Something Epic</h2>

<a href="https://www.townscript.com/e/world-health-day-IronWings-marathon-gurgaon-404444">
<button style={{...styles.button,background:"#000"}}>Secure Your Spot</button>
</a>
</div>

</div>
);
}
