(function(){
'use strict';
var I={
target:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
check:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
circle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>',
calendar:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
flame:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
trending:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
award:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
awardF:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
dumbbell:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',
utensils:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>',
chart:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
clock:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
zap:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
upload:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
trash:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
menu:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
brain:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
home:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
alert:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
};
function ic(n,c){var s=document.createElement('span');s.innerHTML=I[n]||'';s.style.display='inline-flex';s.style.alignItems='center';if(c)s.style.color=c;return s}
function el(tag,a,ch){var e=document.createElement(tag);if(a)for(var k in a){if(k==='className')e.className=a[k];else if(k==='onclick'||k==='oninput'||k==='onchange')e[k]=a[k];else if(k==='style'&&typeof a[k]==='object')for(var s in a[k])e.style[s]=a[k][s];else if(k==='innerHTML')e.innerHTML=a[k];else if(k==='value')e.value=a[k];else if(k==='type')e.type=a[k];else if(k==='placeholder')e.placeholder=a[k];else e.setAttribute(k,a[k])}if(ch){if(!Array.isArray(ch))ch=[ch];for(var i=0;i<ch.length;i++){if(ch[i]==null)continue;if(typeof ch[i]==='string'||typeof ch[i]==='number')e.appendChild(document.createTextNode(ch[i]));else e.appendChild(ch[i])}}return e}

// DATA
var HP={1:{name:'Detox & Fundament',days:[1,2,3,4,5,6,7],rules:[{id:'silence',name:'Input-Fasten',target:'45 Min',desc:'Keine Podcasts, Videos, News'},{id:'scroll',name:'No Scroll',target:'0 Min',desc:'Social Media komplett aus'},{id:'deepwork',name:'Deep Work',target:'60 Min',desc:'Fokussierter Block, Handy weg'},{id:'movement',name:'Bewegung',target:'30 Min',desc:'Workout ODER zügiger Walk'},{id:'order',name:'Ordnung',target:'10 Min',desc:'Aufräumen, Strukturieren'}]},2:{name:'Output & Routine',days:[8,9,10,11,12,13,14],rules:[{id:'silence',name:'Input-Fasten',target:'60 Min',desc:'Erweitert auf volle Stunde'},{id:'scroll',name:'Controlled Scroll',target:'≤10 Min',desc:'Max 10 Min/Tag mit Timer'},{id:'deepwork',name:'Deep Work',target:'90 Min',desc:'Ein Block oder 2×45 Min'},{id:'movement',name:'Aktive Tage',target:'4×/Woche',desc:'4× Training + 3× Walk'},{id:'order',name:'Ordnung',target:'15 Min',desc:'Erweiterte Strukturierung'},{id:'courage',name:'Mut-Aktion',target:'1×/Tag',desc:'Eine unangenehme, wichtige Sache erledigen'}]},3:{name:'Proof Season',days:[15,16,17,18,19,20,21],rules:[{id:'silence',name:'Input-Fasten',target:'60 Min',desc:'Bleibt Pflicht'},{id:'scroll',name:'Controlled Scroll',target:'≤10 Min',desc:'Bleibt limitiert'},{id:'deepwork',name:'Deep Work',target:'2h',desc:'Maximale Fokuszeit'},{id:'movement',name:'Bewegung',target:'5×/Woche',desc:'Intensiv durchziehen'},{id:'order',name:'Ordnung',target:'15 Min',desc:'Standard halten'},{id:'proof',name:'Sichtbarer Proof',target:'1 Ziel',desc:'Messbares Ergebnis fertigstellen'}]}};

var HX=[{id:1,name:'Basis Aufbau',weeks:[1,2,3,4,5,6,7,8],color:'var(--blue)',bc:'rgba(59,130,246,.3)',bg:'rgba(59,130,246,.06),rgba(6,182,212,.06)',desc:'Aerobe Grundlage, Kraftfundament, Gewichtsoptimierung.',tip:'Konsistenz schlägt Intensität. Dein Körper braucht 6-8 Wochen Anpassung.'},{id:2,name:'Kraft & Ausdauer',weeks:[9,10,11,12,13,14,15,16],color:'var(--purple)',bc:'rgba(168,85,247,.3)',bg:'rgba(168,85,247,.06),rgba(236,72,153,.06)',desc:'HYROX-Stationen einführen, Laufumfang steigern.',tip:'Führe Sled Push/Pull, Wall Balls und Burpee Broad Jumps ein.'},{id:3,name:'HYROX Spezifik',weeks:[17,18,19,20,21,22,23,24],color:'var(--fire)',bc:'rgba(239,68,68,.3)',bg:'rgba(239,68,68,.06),rgba(249,115,22,.06)',desc:'Wettkampfspezifisch, Transition-Training, Race Pace.',tip:'Übe die Übergänge: Lauf → Station ohne Pause.'},{id:4,name:'Peak & Simulation',weeks:[25,26,27,28,29,30,31,32,33,34],color:'var(--orange)',bc:'rgba(249,115,22,.3)',bg:'rgba(249,115,22,.06),rgba(234,179,8,.06)',desc:'Maximale Wettkampfform, Simulationen.',tip:'Der Kopf entscheidet. Übe mentale Stärke an der Schmerzgrenze.'},{id:5,name:'Taper & Race',weeks:[35,36,37,38,39,40,41,42,43],color:'var(--emerald)',bc:'rgba(16,185,129,.3)',bg:'rgba(16,185,129,.06),rgba(20,184,166,.06)',desc:'Reduzierte Belastung, Erholung, Race Day.',tip:'Weniger ist jetzt mehr. Vertraue deinem Training.'}];
function gHX(w){for(var i=0;i<HX.length;i++)if(HX[i].weeks.indexOf(w)!==-1)return HX[i];return HX[0]}

function getWk(w){var p=gHX(w).id,wks=[];
if(p===1){var rd=Math.min(5+Math.floor((w-1)*.5),8),s=Math.min(3+Math.floor(w/3),4);
wks.push({day:'Dienstag',type:'run',title:'Grundlagen-Lauf',dur:30+w*3,exs:[{n:'Aufwärmen',d:'5 Min Joggen + Lauf-ABC',t:''},{n:'Dauerlauf Zone 2',d:rd+'km @ '+(6.5-w*.05).toFixed(1)+'/km',t:'Du sollst reden können'},{n:'Cool Down',d:'5 Min Gehen + Dehnen',t:''}]});
wks.push({day:'Donnerstag',type:'strength',title:'Ganzkörper Kraft',dur:50+w*2,exs:[{n:'Kniebeugen',d:s+'×10-12',t:'Volle Tiefe'},{n:'Kreuzheben',d:s+'×8-10',t:''},{n:'Klimmzüge',d:s+'× max (Ziel: '+Math.min(8+w,15)+')',t:''},{n:'Liegestütze',d:s+'×15-20',t:''},{n:'Farmers Walk',d:'3×40m',t:'Schwer'},{n:'Plank',d:'3×'+(30+w*5)+'s',t:''}]});
wks.push({day:'Samstag',type:'hybrid',title:'Ausdauer + Kraft',dur:45+w*2,exs:[{n:'Lauf',d:(rd-2)+'km locker',t:''},{n:'Walking Lunges',d:'3×20',t:''},{n:'Burpees',d:'3×10',t:''},{n:'Wall Sit',d:'3×'+(30+w*5)+'s',t:''},{n:'Kabelrudern',d:'3×12',t:''},{n:'Tempo-Finish',d:'2km schnell',t:''}]});}
else if(p===2){wks.push({day:'Dienstag',type:'run',title:'Tempo + Intervalle',dur:45+Math.floor((w-9)*3),exs:[{n:'Aufwärmen',d:'10 Min',t:''},{n:'Intervalle',d:(4+Math.floor((w-9)/2))+'× 800m @ 5:00-5:30/km',t:'90s Pause'},{n:'Auslauf',d:'2km',t:''}]});
wks.push({day:'Donnerstag',type:'strength',title:'HYROX Kraftausdauer',dur:55+Math.floor((w-9)*2),exs:[{n:'Sled Push',d:'4×25m',t:'Alt: Beinpresse 4×20 + 200m Laufband'},{n:'Wall Balls',d:'4×15',t:'6-9kg'},{n:'Rudern',d:'4×500m',t:'<2:00/500m'},{n:'Farmers Walk',d:'4×50m',t:'32-40kg/Hand'},{n:'Klimmzüge gewichtet',d:'4×8-10',t:''},{n:'Burpee Broad Jumps',d:'3×8',t:''}]});
wks.push({day:'Samstag',type:'hybrid',title:'Lauf-Station Wechsel',dur:60+Math.floor((w-9)*2),exs:[{n:'1.5km → Lunges 50m',d:'Keine Pause!',t:''},{n:'1.5km → Wall Balls 20',d:'',t:''},{n:'1.5km → Burpee BJ 40m',d:'',t:''},{n:'1km Auslauf',d:'',t:''}]});}
else if(p===3){wks.push({day:'Dienstag',type:'run',title:'Race Pace Lauf',dur:55,exs:[{n:'Aufwärmen + Steigerungen',d:'10 Min',t:''},{n:'Tempo-Dauerlauf',d:(8+Math.floor((w-17)*.3))+'km @ 5:30-6:00/km',t:''},{n:'6×400m',d:'@ 4:30-5:00/km, 60s Pause',t:''}]});
wks.push({day:'Donnerstag',type:'strength',title:'Stationen Drill',dur:60,exs:[{n:'EMOM 30 Min',d:'Alle 5 Min wechseln',t:''},{n:'SkiErg/Rudern 1000m',d:'',t:''},{n:'Sled Push 2×25m',d:'',t:''},{n:'Sled Pull 2×25m',d:'',t:''},{n:'Burpee BJ 80m',d:'Wettkampfdistanz',t:''},{n:'Wall Balls 75',d:'Break: 25-25-15-10',t:''}]});
wks.push({day:'Samstag',type:'hybrid',title:'Mini-HYROX Sim',dur:80,exs:[{n:'4 Runden: 1km + Station',d:'',t:''},{n:'R1: SkiErg 1000m',d:'',t:''},{n:'R2: Wall Balls 30',d:'',t:''},{n:'R3: Burpee BJ 40m',d:'',t:''},{n:'R4: Farmers 100m',d:'',t:''},{n:'Cool Down 10 Min',d:'',t:''}]});}
else if(p===4){wks.push({day:'Dienstag',type:'run',title:'Wettkampf-Tempo',dur:50,exs:[{n:'Aufwärmen + Steigerungen',d:'10 Min',t:''},{n:'8km @ Race Pace',d:'Negative Splits',t:''},{n:'Letzter km Vollgas',d:'Finish simulieren',t:''}]});
wks.push({day:'Donnerstag',type:'strength',title:'Station-Perfektion',dur:55,exs:[{n:'Sled Push 4×25m',d:'Wettkampfgewicht',t:''},{n:'Sled Pull 4×25m',d:'',t:''},{n:'Wall Balls 2×50',d:'Ziel: <4 Min für 75',t:''},{n:'Lunges 2×50m',d:'',t:''},{n:'Core-Finisher',d:'3× (Plank+Twist+Leg Raise)',t:''}]});
wks.push({day:'Samstag',type:'hybrid',title:'Volle HYROX Sim',dur:90,exs:[{n:'⚡ FULL SIMULATION',d:'8× (1km + Station)',t:'ZEIT STOPPEN!'},{n:'1. SkiErg 1000m',d:'',t:''},{n:'2. Sled Push 50m',d:'',t:''},{n:'3. Sled Pull 50m',d:'',t:''},{n:'4. Burpee BJ 80m',d:'',t:''},{n:'5. Rudern 1000m',d:'',t:''},{n:'6. Farmers 200m',d:'',t:''},{n:'7. Lunges 100m',d:'',t:''},{n:'8. Wall Balls 75',d:'',t:''}]});}
else{var tw=w-35;if(tw<8){wks.push({day:'Di',type:'run',title:'Erhaltungs-Lauf',dur:Math.max(20,35-tw*2),exs:[{n:'Locker',d:Math.max(3,6-tw)+'km Zone 1-2',t:''},{n:'4× Steigerung',d:'80m',t:''},{n:'Mobility',d:'15 Min',t:''}]});
wks.push({day:'Do',type:'strength',title:'Aktivierung',dur:Math.max(15,30-tw*2),exs:[{n:'Stationen 50%',d:'Technik only',t:''},{n:'Wall Balls 3×15',d:'Leicht',t:''},{n:'Foam Rolling',d:'15 Min',t:''}]});
wks.push({day:'Sa',type:'hybrid',title:'Kurz-Sim',dur:Math.max(25,40-tw*3),exs:[{n:'4× (800m + Station leicht)',d:'50% Intensität',t:''},{n:'Mental Rehearsal',d:'10 Min Visualisierung',t:''}]});}
else{wks.push({day:'Di',type:'run',title:'Shakeout',dur:20,exs:[{n:'3km sehr locker',d:'',t:''},{n:'4× Steigerung 60m',d:'',t:''}]});
wks.push({day:'Do',type:'rest',title:'Ruhe/Aktivierung',dur:15,exs:[{n:'Mobility 15 Min',d:'',t:''},{n:'Visualisierung',d:'Pacing-Plan festlegen',t:''},{n:'Race Nutrition vorbereiten',d:'',t:''}]});
wks.push({day:'Sa/So',type:'hybrid',title:'🏁 RACE DAY',dur:90,exs:[{n:'HYROX WETTKAMPF!',d:'10 MONATE TRAINING. PROVE IT! 💪🔥',t:''},{n:'Pacing: 5:30-6:00/km',d:'',t:''},{n:'Gel nach Station 4',d:'',t:''}]});}}
return wks;}

function getMeals(w){
var pid=gHX(w).id;
var dayOfWeek=(w-1)%7; // 0-6, rotates through week
var t=pid<=2?{kcal:2200,p:160,c:240,f:75}:pid<=4?{kcal:2500,p:175,c:280,f:80}:{kcal:2300,p:165,c:250,f:78};

var DB={
// PHASE 1 & 2: Deficit/moderate - higher protein, moderate carbs
low:{
breakfast:[
{name:'Power Porridge',desc:'80g Haferflocken + Whey + Banane + 10g Erdnussbutter + Zimt',ma:{p:40,c:72,f:15}},
{name:'Rührei-Wrap',desc:'3 Eier + Vollkorn-Tortilla + Spinat + Tomate + Feta',ma:{p:35,c:38,f:22}},
{name:'Skyr-Bowl',desc:'250g Skyr + 40g Granola + Blaubeeren + 1 EL Honig + Chiasamen',ma:{p:32,c:55,f:8}},
{name:'Protein-Pancakes',desc:'2 Eier + 1 Banane + 30g Whey + 40g Haferflocken, in Kokosöl',ma:{p:38,c:58,f:14}},
{name:'Avocado-Toast',desc:'2 Vollkorntoast + 1/2 Avocado + 2 pochierte Eier + Chiliflocken',ma:{p:28,c:42,f:24}},
{name:'Overnight Oats',desc:'80g Haferflocken + 200ml Milch + Whey + Beeren (abends vorbereiten)',ma:{p:38,c:68,f:12}},
{name:'Türkisches Frühstück',desc:'3 Rühreier + 50g Feta + Gurke + Tomate + 1 Vollkornbrot',ma:{p:36,c:32,f:22}}
],
lunch:[
{name:'Hähnchen-Bowl',desc:'200g Hähnchen + 150g Reis + Brokkoli + Paprika + Soja-Dressing',ma:{p:50,c:68,f:10}},
{name:'Thunfisch-Wrap',desc:'150g Thunfisch + Vollkorn-Tortilla + Salat + Mais + leichte Mayo',ma:{p:42,c:45,f:14}},
{name:'Puten-Curry',desc:'200g Putenbrust + Kokosmilch (light) + Süßkartoffel + Spinat + Basmatireis',ma:{p:48,c:62,f:12}},
{name:'Griechischer Salat XL',desc:'200g Hähnchen + Feta + Gurke + Oliven + Quinoa + Zitronendressing',ma:{p:48,c:42,f:18}},
{name:'Lachs-Reis-Bowl',desc:'150g Lachs + 150g Reis + Edamame + Avocado + Soja-Ingwer Sauce',ma:{p:42,c:60,f:20}},
{name:'Burrito Bowl',desc:'200g Rinderhack (mager) + schwarze Bohnen + Reis + Salsa + Mais',ma:{p:46,c:65,f:14}},
{name:'Asia-Nudel-Bowl',desc:'200g Hähnchen + Reisnudeln + Pak Choi + Erdnuss-Sauce',ma:{p:45,c:58,f:16}}
],
snack:[
{name:'Post-WO Shake',desc:'1.5 Scoops Whey + 1 Banane + 200ml Milch + 30g Oats',ma:{p:40,c:52,f:8}},
{name:'Quark-Beeren Mix',desc:'250g Magerquark + Beeren + 15g Walnüsse + Honig',ma:{p:35,c:28,f:12}},
{name:'Protein-Riegel + Apfel',desc:'1 Proteinriegel (mind. 20g Protein) + 1 Apfel',ma:{p:24,c:38,f:10}},
{name:'Hummus-Gemüse-Teller',desc:'100g Hummus + Karotten + Gurke + Paprika-Sticks + 1 Vollkornpita',ma:{p:14,c:42,f:16}},
{name:'Thunfisch-Reis-Waffeln',desc:'100g Thunfisch auf 3 Reiswaffeln + Frischkäse + Gurke',ma:{p:28,c:30,f:6}},
{name:'Trail Mix + Skyr',desc:'150g Skyr + 30g Nuss-Mix + 1 EL Honig',ma:{p:22,c:28,f:14}},
{name:'Protein-Smoothie',desc:'Whey + Spinat + Banane + TK-Beeren + Mandelmilch',ma:{p:32,c:35,f:6}}
],
dinner:[
{name:'Lachs + Süßkartoffel',desc:'200g Lachsfilet + 200g Süßkartoffel + Spinatsalat + Olivenöl',ma:{p:45,c:48,f:22}},
{name:'Putenpfanne',desc:'200g Pute + Zucchini + Champignons + 80g Vollkornnudeln + Knoblauch',ma:{p:48,c:52,f:8}},
{name:'Steak-Gemüse-Bowl',desc:'180g Rindersteak + Ofengemüse (Paprika, Zucchini, Zwiebel) + Quinoa',ma:{p:46,c:42,f:18}},
{name:'Thai-Garnelen-Curry',desc:'200g Garnelen + Kokosmilch (light) + Thai-Basilikum + Jasminreis',ma:{p:40,c:55,f:14}},
{name:'Hähnchen-Fajitas',desc:'200g Hähnchen + Paprika + Zwiebel + 2 Tortillas + Guacamole',ma:{p:45,c:48,f:18}},
{name:'Fisch-Tacos',desc:'200g Kabeljau + Krautsalat + Limetten-Crema + Mais-Tortillas',ma:{p:42,c:45,f:12}},
{name:'One-Pot Linsen-Eintopf',desc:'150g rote Linsen + Karotten + Tomaten + Kreuzkümmel + Fladenbrot',ma:{p:32,c:62,f:8}}
]
},
// PHASE 3 & 4: Performance - more carbs, same protein
high:{
breakfast:[
{name:'Loaded Porridge',desc:'100g Haferflocken + Whey + Banane + Blaubeeren + Honig + Mandeln',ma:{p:38,c:90,f:14}},
{name:'Protein French Toast',desc:'3 Scheiben Vollkorntoast + 2 Eier + Whey-Teig + Beeren + Ahornsirup',ma:{p:40,c:82,f:16}},
{name:'Smoothie-Bowl XL',desc:'Whey + Banane + TK-Mango + Granola + Kokos + Chiasamen',ma:{p:36,c:85,f:14}},
{name:'Big Breakfast Wrap',desc:'3 Eier + Tortilla + Hähnchen + Käse + Avocado + Salsa',ma:{p:42,c:52,f:26}},
{name:'Banana Pancakes',desc:'3 Eier + 2 Bananen + 50g Haferflocken + Whey + Beeren-Topping',ma:{p:40,c:78,f:14}},
{name:'Bircher Müsli',desc:'100g Haferflocken + Joghurt + geriebener Apfel + Rosinen + Nüsse (abends prep)',ma:{p:28,c:88,f:16}},
{name:'Shakshuka + Brot',desc:'3 Eier in Tomatensauce + Feta + 2 Scheiben Sauerteigbrot',ma:{p:34,c:52,f:22}}
],
lunch:[
{name:'XXL Chicken-Rice-Bowl',desc:'250g Hähnchen + 200g Reis + Brokkoli + Teriyaki-Sauce + Sesam',ma:{p:55,c:85,f:12}},
{name:'Loaded Burrito',desc:'200g Rinderhack + Reis + schwarze Bohnen + Käse + Salsa + Tortilla',ma:{p:48,c:80,f:18}},
{name:'Pasta Bolognese',desc:'200g Rinderhack (mager) + 100g Vollkornnudeln + Tomatensauce + Parmesan',ma:{p:50,c:78,f:16}},
{name:'Bibimbap',desc:'200g Rindfleisch + Reis + Spinat + Karotten + Spiegelei + Gochujang',ma:{p:48,c:82,f:18}},
{name:'Hähnchen-Süßkartoffel-Bowl',desc:'250g Hähnchen + 250g Süßkartoffel + Avocado + Limettendressing',ma:{p:52,c:72,f:20}},
{name:'Lachs-Poke-Bowl',desc:'200g Lachs + Sushireis + Edamame + Mango + Soja + Sesamöl',ma:{p:46,c:78,f:22}},
{name:'Türkischer Köfte-Teller',desc:'200g Lammhack-Köfte + Bulgur + Tomaten-Gurken-Salat + Joghurt',ma:{p:48,c:68,f:20}}
],
snack:[
{name:'Shake + Banane + Oats',desc:'1.5 Scoops Whey + 1 Banane + 200ml Milch + 40g Instant-Oats',ma:{p:42,c:65,f:8}},
{name:'Reis-Kuchen Tower',desc:'4 Reiswaffeln + Erdnussbutter + Banane + Honig',ma:{p:16,c:62,f:14}},
{name:'Protein Müsli',desc:'250g Skyr + 50g Crunchy-Müsli + TK-Beeren + Honig',ma:{p:34,c:52,f:8}},
{name:'Energy Balls',desc:'5 Stk (Datteln + Haferflocken + Whey + Erdnussbutter + Kakao)',ma:{p:22,c:55,f:16}},
{name:'Wrap-Rolle',desc:'Tortilla + 100g Truthahn-Aufschnitt + Frischkäse + Salat',ma:{p:28,c:38,f:10}},
{name:'Smoothie groß',desc:'Whey + Banane + Haferflocken + Erdnussbutter + Milch',ma:{p:38,c:58,f:16}},
{name:'Bagel + Lachs',desc:'1 Vollkorn-Bagel + 80g Räucherlachs + Frischkäse + Kapern',ma:{p:30,c:48,f:14}}
],
dinner:[
{name:'Lachs-Teriyaki + Reis',desc:'200g Lachs + Teriyaki-Glasur + 150g Reis + gedämpfter Brokkoli',ma:{p:48,c:62,f:20}},
{name:'Chicken Stir-Fry',desc:'250g Hähnchen + Reisnudeln + Gemüse + Soja-Ingwer-Sauce + Cashews',ma:{p:52,c:68,f:18}},
{name:'Rindfleisch-Tacos',desc:'200g Rinderhack + Tortillas + Pico de Gallo + Käse + Guac',ma:{p:46,c:55,f:24}},
{name:'One-Pot Hähnchen-Pasta',desc:'200g Hähnchen + 100g Penne + Sahne-Tomaten-Sauce + Spinat + Parmesan',ma:{p:48,c:68,f:18}},
{name:'Garnelen-Pad-Thai',desc:'200g Garnelen + Reisnudeln + Ei + Erdnüsse + Limette + Sriracha',ma:{p:42,c:65,f:16}},
{name:'Ofenhähnchen-Platte',desc:'250g Hähnchen-Keule + Kartoffeln + Karotten + Rosmarin + Olivenöl',ma:{p:50,c:58,f:18}},
{name:'Marokkanischer Eintopf',desc:'200g Hähnchen + Kichererbsen + Süßkartoffel + Kreuzkümmel + Couscous',ma:{p:46,c:72,f:12}}
]
},
// PHASE 5: Taper - moderate, familiar comfort food
taper:{
breakfast:[
{name:'Klassisches Porridge',desc:'80g Haferflocken + Whey + Banane + Zimt + Honig',ma:{p:38,c:78,f:10}},
{name:'Eier-Avocado-Toast',desc:'2 Vollkorntoast + 2 Eier + 1/2 Avocado + Salz+Pfeffer',ma:{p:28,c:42,f:24}},
{name:'Joghurt-Müsli',desc:'250g Naturjoghurt + 50g Müsli + Banane + Honig',ma:{p:22,c:65,f:10}},
{name:'Protein-Crêpes',desc:'2 Eier + 30g Whey + 30g Mehl + Beeren + Quark',ma:{p:38,c:45,f:12}},
{name:'Smoothie Bowl',desc:'Whey + Banane + Erdbeeren + Granola + Kokosflocken',ma:{p:32,c:62,f:12}},
{name:'Bagel + Ei',desc:'1 Vollkorn-Bagel + 2 Spiegeleier + Tomate + Rucola',ma:{p:28,c:48,f:18}},
{name:'Bircher Müsli',desc:'80g Oats + Joghurt + Apfel + Rosinen + Walnüsse',ma:{p:22,c:68,f:14}}
],
lunch:[
{name:'Hähnchen-Wrap',desc:'200g Hähnchen + Vollkorn-Wrap + Hummus + Salat + Tomate',ma:{p:48,c:52,f:14}},
{name:'Nudelsalat',desc:'100g Fusilli + 150g Hähnchen + Pesto + Tomaten + Mozzarella',ma:{p:42,c:62,f:18}},
{name:'Reis-Bowl einfach',desc:'200g Lachs + 150g Reis + Gurke + Avocado + Soja',ma:{p:44,c:58,f:20}},
{name:'Kartoffel-Eintopf',desc:'Kartoffeln + Karotten + Lauch + 150g Hähnchen + leichte Brühe',ma:{p:38,c:58,f:8}},
{name:'Couscous-Salat',desc:'150g Couscous + Kichererbsen + Feta + Gurke + Minze + Zitrone',ma:{p:28,c:65,f:14}},
{name:'Sandwich Classic',desc:'Vollkornbrot + 150g Putenbrust + Käse + Salat + Senf',ma:{p:40,c:48,f:12}},
{name:'Tomatensuppe + Grilled Cheese',desc:'Tomatensuppe + 2 Käse-Sandwiches (Vollkorn)',ma:{p:24,c:58,f:22}}
],
snack:[
{name:'Quark + Beeren',desc:'250g Magerquark + TK-Beeren + Honig',ma:{p:32,c:28,f:4}},
{name:'Protein Shake',desc:'1.5 Scoops Whey + 200ml Milch + Banane',ma:{p:38,c:40,f:6}},
{name:'Nüsse + Obst',desc:'30g Mandeln + 1 Apfel + 1 Banane',ma:{p:8,c:48,f:16}},
{name:'Reiswaffeln + PB',desc:'4 Reiswaffeln + 2 EL Erdnussbutter + Honig',ma:{p:12,c:48,f:18}},
{name:'Joghurt-Dip + Gemüse',desc:'200g Griechischer Joghurt + Gurke + Karotten + Kräcker',ma:{p:18,c:32,f:12}},
{name:'Protein-Pudding',desc:'Whey + 200ml Milch + 1 EL Kakaopulver + Chiasamen (kalt anrühren)',ma:{p:34,c:28,f:8}},
{name:'Bananenbrot-Slice',desc:'1 Stück Protein-Bananenbrot (meal prep) + Butter',ma:{p:12,c:42,f:14}}
],
dinner:[
{name:'Pasta Arrabiata + Hähnchen',desc:'200g Hähnchen + 100g Penne + scharfe Tomatensauce + Parmesan',ma:{p:48,c:62,f:12}},
{name:'Fischfilet + Kartoffeln',desc:'200g Kabeljau + Ofenkartoffeln + grüne Bohnen + Zitrone',ma:{p:42,c:52,f:8}},
{name:'Stir-Fry einfach',desc:'200g Hähnchen + TK-Wok-Gemüse + Sojasauce + Reis',ma:{p:46,c:58,f:10}},
{name:'Omelette + Salat',desc:'4-Eier-Omelette + Käse + Schinken + großer Beilagensalat + Brot',ma:{p:42,c:38,f:24}},
{name:'Chili con Carne',desc:'200g Rinderhack + Kidneybohnen + Tomaten + Reis + Schmand',ma:{p:46,c:62,f:16}},
{name:'Lachs-Quinoa-Bowl',desc:'200g Lachs + Quinoa + Rucola + Kirschtomaten + Balsamico',ma:{p:44,c:48,f:20}},
{name:'Puten-Geschnetzeltes',desc:'200g Pute + Champignon-Rahmsauce + Spätzle + Salat',ma:{p:46,c:58,f:14}}
]
}
};

var db=pid<=2?DB.low:pid<=4?DB.high:DB.taper;
var idx=dayOfWeek;
return{meals:{
training:[{type:'breakfast',name:db.breakfast[idx].name,desc:db.breakfast[idx].desc,ma:db.breakfast[idx].ma},{type:'lunch',name:db.lunch[idx].name,desc:db.lunch[idx].desc,ma:db.lunch[idx].ma},{type:'snack',name:db.snack[idx].name,desc:db.snack[idx].desc,ma:db.snack[idx].ma},{type:'dinner',name:db.dinner[idx].name,desc:db.dinner[idx].desc,ma:db.dinner[idx].ma}],
rest:[{type:'breakfast',name:db.breakfast[(idx+3)%7].name,desc:db.breakfast[(idx+3)%7].desc,ma:db.breakfast[(idx+3)%7].ma},{type:'lunch',name:db.lunch[(idx+3)%7].name,desc:db.lunch[(idx+3)%7].desc,ma:db.lunch[(idx+3)%7].ma},{type:'snack',name:db.snack[(idx+3)%7].name,desc:db.snack[(idx+3)%7].desc,ma:db.snack[(idx+3)%7].ma},{type:'dinner',name:db.dinner[(idx+3)%7].name,desc:db.dinner[(idx+3)%7].desc,ma:db.dinner[(idx+3)%7].ma}]
},totals:t};}

var BMS=[{id:'run5k',name:'5km Lauf',unit:'min:sek',ic:'trending'},{id:'pullups',name:'Klimmzüge max',unit:'Wdh',ic:'dumbbell'},{id:'pushups',name:'Liegestütze max',unit:'Wdh',ic:'dumbbell'},{id:'deadlift',name:'Kreuzheben 1RM',unit:'kg',ic:'dumbbell'},{id:'wallballs75',name:'75 Wall Balls',unit:'min:sek',ic:'clock'},{id:'bodyweight',name:'Körpergewicht',unit:'kg',ic:'trending'},{id:'hyroxsim',name:'HYROX Simulation',unit:'h:min:sek',ic:'flame'}];

// STATE
var S={tab:'dashboard',habitsDay:1,habitsData:{},habitsShowDetail:false,habitsSelectedDay:null,hyroxWeek:1,hyroxDone:{},benchmarks:{},showWorkout:false,selWkIdx:null,mealType:'training',showMenu:false};
function load(){try{var d=JSON.parse(localStorage.getItem('proveItHyrox'));if(d){S.habitsDay=d.hd||1;S.habitsData=d.ha||{};S.hyroxWeek=d.hw||1;S.hyroxDone=d.hd2||{};S.benchmarks=d.bm||{}}}catch(e){}}
function save(){try{localStorage.setItem('proveItHyrox',JSON.stringify({hd:S.habitsDay,ha:S.habitsData,hw:S.hyroxWeek,hd2:S.hyroxDone,bm:S.benchmarks}))}catch(e){}}

function hPhase(d){return d<=7?1:d<=14?2:3}
function hScore(d){var p=hPhase(d),r=HP[p].rules,c=0;for(var i=0;i<r.length;i++)if(S.habitsData[d]&&S.habitsData[d][r[i].id])c++;return{c:c,t:r.length}}
function hStreak(){var s=0;for(var i=S.habitsDay;i>=1;i--){var sc=hScore(i);if(sc.c>=Math.ceil(sc.t*.7))s++;else break}return s}
function hTotal(){var t=0,c=0;for(var d=1;d<=S.habitsDay;d++){var s=hScore(d);t+=s.t;c+=s.c}return t>0?Math.round(c/t*100):0}
function hPerfect(){var n=0;for(var d=1;d<=S.habitsDay;d++){var s=hScore(d);if(s.c===s.t&&s.t>0)n++}return n}
function wComp(w){var wk=getWk(w),d=0;for(var i=0;i<wk.length;i++)if(S.hyroxDone[w+'_'+i])d++;return{d:d,t:wk.length}}
function wTotal(){var t=0,d=0;for(var w=1;w<=S.hyroxWeek;w++){var s=wComp(w);t+=s.t;d+=s.d}return t>0?Math.round(d/t*100):0}
function wStreak(){var s=0;for(var w=S.hyroxWeek;w>=1;w--){var c=wComp(w);if(c.d>=Math.ceil(c.t*.7))s++;else break}return s}
function toggleH(d,id){if(!S.habitsData[d])S.habitsData[d]={};S.habitsData[d][id]=!S.habitsData[d][id];save();render()}
function expD(){var s=JSON.stringify({hd:S.habitsDay,ha:S.habitsData,hw:S.hyroxWeek,hd2:S.hyroxDone,bm:S.benchmarks},null,2);var b=new Blob([s],{type:'application/json'});var u=URL.createObjectURL(b);var a=document.createElement('a');a.href=u;a.download='prove-hyrox-backup-'+new Date().toISOString().split('T')[0]+'.json';a.click();URL.revokeObjectURL(u)}
function impD(){var inp=document.createElement('input');inp.type='file';inp.accept='.json';inp.onchange=function(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(ev){try{var d=JSON.parse(ev.target.result);S.habitsData=d.ha||{};S.habitsDay=d.hd||1;S.hyroxWeek=d.hw||1;S.hyroxDone=d.hd2||{};S.benchmarks=d.bm||{};save();render();alert('Import erfolgreich!')}catch(e){alert('Fehler')}};r.readAsText(f)};inp.click()}
function resetAll(){if(confirm('Alle Daten löschen?')){S.habitsData={};S.habitsDay=1;S.hyroxWeek=1;S.hyroxDone={};S.benchmarks={};save();render()}}
function ring(pct,color,label){var d=el('div',{className:'ring'}),sz=80,r=sz/2-6,ci=2*Math.PI*r,off=ci-(pct/100)*ci;var rc=el('div',{className:'ring-circle'});rc.innerHTML='<svg width="80" height="80" style="transform:rotate(-90deg)"><circle cx="40" cy="40" r="'+r+'" fill="none" stroke="var(--border)" stroke-width="5"/><circle cx="40" cy="40" r="'+r+'" fill="none" stroke="'+color+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+ci+'" stroke-dashoffset="'+off+'" style="transition:stroke-dashoffset .6s"/></svg>';rc.appendChild(el('div',{className:'ring-val'},pct+'%'));d.appendChild(rc);d.appendChild(el('div',{className:'ring-label'},label));return d}

// RENDER
function render(){var app=document.getElementById('app');app.innerHTML='';
var logo=el('div',{className:'flex items-center gap-2'},[ic('flame','var(--fire)'),el('div',{innerHTML:'<span class="logo logo-fire">PROVE IT</span><span class="logo" style="color:var(--text-dim);margin:0 4px">×</span><span class="logo logo-fire">HYROX</span>'})]);
var mb=el('button',{className:'menu-btn',onclick:function(){S.showMenu=true;render()}});mb.appendChild(ic('menu'));
app.appendChild(el('div',{className:'header flex items-center justify-between'},[logo,mb]));
if(S.tab==='dashboard')rDash(app);else if(S.tab==='habits')rHabits(app);else if(S.tab==='training')rTrain(app);else if(S.tab==='nutrition')rNut(app);else if(S.tab==='progress')rProg(app);
rMenu(app);if(S.tab==='training')rWkMo(app);if(S.tab==='habits')rHabMo(app);rTabs()}

function rDash(app){var rc=el('div',{className:'ring-container'});rc.appendChild(ring(hTotal(),'var(--cyan)','Habits'));rc.appendChild(ring(wTotal(),'var(--fire)','Training'));rc.appendChild(ring(Math.round(S.hyroxWeek/43*100),'var(--orange)','Zeitplan'));app.appendChild(rc);
var sg=el('div',{className:'grid-4 mb-5'});[{l:'Habit-Tag',v:S.habitsDay+'/21'},{l:'Woche',v:S.hyroxWeek+'/43'},{l:'H-Streak',v:hStreak()},{l:'W-Streak',v:wStreak()}].forEach(function(x){var cd=el('div',{className:'stat-card'});cd.appendChild(el('div',{className:'stat-label'},x.l));cd.appendChild(el('div',{className:'stat-value',style:{fontSize:'18px'}},x.v));sg.appendChild(cd)});app.appendChild(sg);
var ms=el('div',{className:'mod-selector'});
ms.appendChild(el('button',{className:'mod-btn',onclick:function(){S.tab='habits';render()}},[el('div',{className:'mod-btn-icon'},'🎯'),el('div',{className:'mod-btn-title'},'PROVE IT'),el('div',{className:'mod-btn-sub'},'Tag '+S.habitsDay+'/21')]));
ms.appendChild(el('button',{className:'mod-btn',onclick:function(){S.tab='training';render()}},[el('div',{className:'mod-btn-icon'},'🏋️'),el('div',{className:'mod-btn-title'},'HYROX PREP'),el('div',{className:'mod-btn-sub'},'Woche '+S.hyroxWeek+'/43')]));app.appendChild(ms);
// Quick habits
var hp=HP[hPhase(S.habitsDay)];var t1=el('div',{className:'stitle'});t1.appendChild(ic('target','var(--cyan)'));t1.appendChild(document.createTextNode('Heutige Habits'));app.appendChild(t1);
hp.rules.forEach(function(r){var done=S.habitsData[S.habitsDay]&&S.habitsData[S.habitsDay][r.id];var item=el('div',{className:'rule'+(done?' done':''),onclick:function(){toggleH(S.habitsDay,r.id)}});var h=el('div',{className:'rule-hdr'});h.appendChild(ic(done?'check':'circle',done?'var(--emerald)':'var(--text-dim)'));h.appendChild(el('span',{className:'rule-name'},r.name));h.appendChild(el('span',{className:'rule-tag mono'},r.target));item.appendChild(h);app.appendChild(item)});
// Quick workouts
var wks=getWk(S.hyroxWeek);var t2=el('div',{className:'stitle mt-4'});t2.appendChild(ic('dumbbell','var(--fire)'));t2.appendChild(document.createTextNode('Workouts W'+S.hyroxWeek));app.appendChild(t2);
wks.forEach(function(w,idx){var k=S.hyroxWeek+'_'+idx,done=!!S.hyroxDone[k];var c=el('div',{className:'wk-card'+(done?' done':''),onclick:function(){S.tab='training';S.selWkIdx=idx;S.showWorkout=true;render()}});var tp=el('div',{className:'flex items-center justify-between'});var lf=el('div');lf.appendChild(el('div',{className:'wk-type '+w.type},w.day));lf.appendChild(el('div',{className:'wk-title'},w.title));tp.appendChild(lf);var ch=el('div',{className:'wk-chk '+(done?'y':'n')});ch.appendChild(ic(done?'check':'circle',done?'var(--emerald)':'var(--text-dim)'));tp.appendChild(ch);c.appendChild(tp);app.appendChild(c)})}

function rHabits(app){var p=hPhase(S.habitsDay),phase=HP[p];
var sg=el('div',{className:'grid-2 mb-4'});[{i:'calendar',c:'var(--blue)',l:'Tag',v:S.habitsDay,s:'/21'},{i:'flame',c:'var(--orange)',l:'Streak',v:hStreak()},{i:'trending',c:'var(--emerald)',l:'Gesamt',v:hTotal(),s:'%'},{i:'award',c:'var(--yellow)',l:'Perfekt',v:hPerfect()}].forEach(function(x){var cd=el('div',{className:'stat-card'}),lb=el('div',{className:'stat-label'});lb.appendChild(ic(x.i,x.c));lb.appendChild(document.createTextNode(x.l));cd.appendChild(lb);var vl=el('div',{className:'stat-value'});vl.appendChild(document.createTextNode(x.v));if(x.s)vl.appendChild(el('span',null,x.s));cd.appendChild(vl);sg.appendChild(cd)});app.appendChild(sg);
var bn=el('div',{className:'banner mb-4',style:{background:'linear-gradient(135deg,rgba(6,182,212,.06),rgba(59,130,246,.06))',borderColor:'rgba(6,182,212,.3)'}});bn.appendChild(el('div',{className:'banner-label',style:{color:'var(--cyan)'}},'Phase '+p));bn.appendChild(el('div',{className:'banner-name'},phase.name));bn.appendChild(el('div',{className:'nav-row'},[el('button',{className:'nav-btn back',onclick:function(){S.habitsDay=Math.max(1,S.habitsDay-1);save();render()}},'← Zurück'),el('div',{className:'nav-indicator'},'Tag '+S.habitsDay),el('button',{className:'nav-btn fwd-cyan',onclick:function(){S.habitsDay=Math.min(21,S.habitsDay+1);save();render()}},'Weiter →')]));app.appendChild(bn);
var t=el('div',{className:'stitle'});t.appendChild(ic('alert','var(--cyan)'));t.appendChild(document.createTextNode('Tag '+S.habitsDay));app.appendChild(t);
phase.rules.forEach(function(r){var done=S.habitsData[S.habitsDay]&&S.habitsData[S.habitsDay][r.id];var item=el('div',{className:'rule'+(done?' done':''),onclick:function(){toggleH(S.habitsDay,r.id)}});var h=el('div',{className:'rule-hdr'});h.appendChild(ic(done?'check':'circle',done?'var(--emerald)':'var(--text-dim)'));h.appendChild(el('span',{className:'rule-name'},r.name));h.appendChild(el('span',{className:'rule-tag mono'},r.target));item.appendChild(h);item.appendChild(el('div',{className:'rule-desc'},r.desc));app.appendChild(item)});
app.appendChild(el('div',{className:'stitle mt-4'},'Alle Tage'));
[1,2,3].forEach(function(pn){app.appendChild(el('div',{className:'flex items-center gap-2 mb-2'},[el('span',{style:{fontSize:'10px',fontWeight:700,background:'var(--surface2)',padding:'2px 8px',borderRadius:'20px',color:'var(--text-dim)'}},'Phase '+pn),el('span',{style:{fontSize:'12px',fontWeight:700,color:'var(--text-dim)'}},HP[pn].name)]));
var g=el('div',{className:'grid-3 mb-4'});HP[pn].days.forEach(function(d){var sc=hScore(d),pct=sc.t>0?Math.round(sc.c/sc.t*100):0,perf=sc.c===sc.t&&sc.t>0&&sc.c>0,good=pct>=70&&!perf,part=sc.c>0&&!good&&!perf;
var cd=el('div',{className:'day-card'+(perf?' perfect':good?' good':part?' partial':''),onclick:function(){S.habitsSelectedDay=d;S.habitsShowDetail=true;render()}},[el('div',{className:'flex items-center justify-between'},[el('span',{className:'day-num'},'Tag '+d),el('span',{className:'day-score'},sc.c+'/'+sc.t)]),el('div',{className:'day-bar'},[el('div',{style:{height:'100%',borderRadius:'4px',width:pct+'%',background:perf?'var(--emerald)':good?'var(--blue)':'var(--amber)'}})]),el('div',{className:'day-pct'},pct+'%')]);g.appendChild(cd)});app.appendChild(g)})}

function rTrain(app){var phase=gHX(S.hyroxWeek);
var bn=el('div',{className:'banner mb-4',style:{background:'linear-gradient(135deg,'+phase.bg+')',borderColor:phase.bc}});bn.appendChild(el('div',{className:'banner-label',style:{color:phase.color}},'Phase '+phase.id+' · W'+phase.weeks[0]+'–'+phase.weeks[phase.weeks.length-1]));bn.appendChild(el('div',{className:'banner-name'},phase.name));bn.appendChild(el('div',{className:'banner-desc'},phase.desc));
bn.appendChild(el('div',{className:'nav-row'},[el('button',{className:'nav-btn back',onclick:function(){S.hyroxWeek=Math.max(1,S.hyroxWeek-1);save();render()}},'← Zurück'),el('div',{className:'nav-indicator'},'Woche '+S.hyroxWeek),el('button',{className:'nav-btn fwd-fire',onclick:function(){S.hyroxWeek=Math.min(43,S.hyroxWeek+1);save();render()}},'Weiter →')]));app.appendChild(bn);
var tip=el('div',{className:'tip'});var tt=el('div',{className:'tip-title'});tt.appendChild(ic('brain','var(--purple)'));tt.appendChild(document.createTextNode(' Mindset'));tip.appendChild(tt);tip.appendChild(el('div',{className:'tip-text'},phase.tip));app.appendChild(tip);
var t=el('div',{className:'stitle'});t.appendChild(ic('dumbbell','var(--fire)'));t.appendChild(document.createTextNode('Training'));app.appendChild(t);
var wks=getWk(S.hyroxWeek);wks.forEach(function(w,idx){var k=S.hyroxWeek+'_'+idx,done=!!S.hyroxDone[k];
var c=el('div',{className:'wk-card'+(done?' done':''),onclick:function(){S.selWkIdx=idx;S.showWorkout=true;render()}});var tp=el('div',{className:'flex items-center justify-between'});var lf=el('div');lf.appendChild(el('div',{className:'wk-type '+w.type},w.day+' · '+({run:'LAUF',strength:'KRAFT',hybrid:'HYBRID',rest:'RUHE'}[w.type]||'')));lf.appendChild(el('div',{className:'wk-title'},w.title));var meta=el('div',{className:'wk-meta'});var m1=el('span',{className:'flex items-center gap-1'});m1.appendChild(ic('clock','var(--text-dim)'));m1.appendChild(document.createTextNode(w.dur+' Min'));meta.appendChild(m1);lf.appendChild(meta);tp.appendChild(lf);
var ch=el('div',{className:'wk-chk '+(done?'y':'n')});ch.appendChild(ic(done?'check':'circle',done?'var(--emerald)':'var(--text-dim)'));tp.appendChild(ch);c.appendChild(tp);app.appendChild(c)})}

function rNut(app){var data=getMeals(S.hyroxWeek);var ns=el('div',{className:'nut-sum'});var nr=el('div',{className:'nut-row'});
[{v:data.totals.kcal,l:'KCAL',c:'var(--fire)'},{v:data.totals.p+'g',l:'PROTEIN',c:'var(--fire)'},{v:data.totals.c+'g',l:'CARBS',c:'var(--amber)'},{v:data.totals.f+'g',l:'FETT',c:'var(--cyan)'}].forEach(function(x){var d=el('div');d.appendChild(el('div',{className:'nut-num',style:{color:x.c}},x.v));d.appendChild(el('div',{className:'nut-lbl'},x.l));nr.appendChild(d)});ns.appendChild(nr);app.appendChild(ns);
var pills=el('div',{className:'pills'});['training','rest'].forEach(function(t){pills.appendChild(el('button',{className:'pill'+(S.mealType===t?' on':''),onclick:function(){S.mealType=t;render()}},t==='training'?'🏋️ Trainingstag':'😴 Ruhetag'))});app.appendChild(pills);
data.meals[S.mealType].forEach(function(m){var mc=el('div',{className:'meal'});mc.appendChild(el('div',{className:'meal-type '+m.type},({breakfast:'🌅 Frühstück',lunch:'☀️ Mittagessen',dinner:'🌙 Abendessen',snack:'⚡ Snack'}[m.type]||'')));mc.appendChild(el('div',{className:'meal-name'},m.name));mc.appendChild(el('div',{className:'meal-desc'},m.desc));var mb=el('div',{className:'macros'});mb.appendChild(el('span',{className:'macro p'},'P:'+m.ma.p+'g'));mb.appendChild(el('span',{className:'macro c'},'C:'+m.ma.c+'g'));mb.appendChild(el('span',{className:'macro f'},'F:'+m.ma.f+'g'));mc.appendChild(mb);app.appendChild(mc)});
var tips={1:'Kaloriendefizit. 2g Protein/kg. Mind. 3L Wasser.',2:'Carb-Timing: Pre-WO Carbs, Post-WO Protein+Carbs.',3:'Leistung first. Carb-Loading vor langen Einheiten.',4:'Teste Race-Day Ernährung bei Simulationen.',5:'Bewährt essen. Race-Day Frühstück 3h vorher.'};var phase=gHX(S.hyroxWeek);
var tb=el('div',{className:'tip mt-3'});tb.appendChild(el('div',{className:'tip-title'},'💡 Ernährungs-Tipp'));tb.appendChild(el('div',{className:'tip-text'},tips[phase.id]));app.appendChild(tb)}

function rProg(app){var t1=el('div',{className:'stitle'});t1.appendChild(ic('trending','var(--emerald)'));t1.appendChild(document.createTextNode('Fortschritt'));app.appendChild(t1);
[{l:'Zeitplan',v:Math.round(S.hyroxWeek/43*100),c:'var(--fire),var(--orange)'},{l:'Habits',v:hTotal(),c:'var(--cyan),var(--blue)'},{l:'Training',v:wTotal(),c:'var(--emerald),var(--teal)'}].forEach(function(x){var ps=el('div',{className:'prog'});ps.appendChild(el('div',{className:'prog-label'},[el('span',null,x.l),el('span',null,x.v+'%')]));ps.appendChild(el('div',{className:'prog-bar'},[el('div',{className:'prog-fill',style:{width:x.v+'%',background:'linear-gradient(90deg,'+x.c+')'}})]));app.appendChild(ps)});
var t2=el('div',{className:'stitle mt-3'});t2.appendChild(ic('calendar','var(--blue)'));t2.appendChild(document.createTextNode('Wochen'));app.appendChild(t2);
var wg=el('div',{className:'wk-grid'});for(var w=1;w<=43;w++){var sc=wComp(w),p=sc.t>0?sc.d/sc.t:0;var col=w>S.hyroxWeek?'var(--border)':p>=1?'var(--emerald)':p>=.7?'var(--blue)':p>0?'var(--amber)':'var(--surface2)';wg.appendChild(el('div',{className:'wk-dot',style:{background:col,border:w===S.hyroxWeek?'2px solid var(--fire)':'1px solid var(--border)',color:w>S.hyroxWeek?'var(--text-dim2)':'var(--text)'},onclick:(function(wk){return function(){S.hyroxWeek=wk;S.tab='training';save();render()}})(w)},w))}app.appendChild(wg);
var t3=el('div',{className:'stitle'});t3.appendChild(ic('chart','var(--fire)'));t3.appendChild(document.createTextNode('Benchmarks'));app.appendChild(t3);
BMS.forEach(function(bm){var cd=el('div',{className:'bm'});var h=el('div',{className:'bm-title'});h.appendChild(ic(bm.ic,'var(--fire)'));h.appendChild(document.createTextNode(bm.name));cd.appendChild(h);
cd.appendChild(el('input',{className:'bm-input mono',type:'text',placeholder:bm.unit,value:S.benchmarks[bm.id]||'',onchange:function(e){S.benchmarks[bm.id]=e.target.value;var hk=bm.id+'_h';S.benchmarks[hk]=S.benchmarks[hk]||[];S.benchmarks[hk].push({v:e.target.value,w:S.hyroxWeek,d:new Date().toLocaleDateString('de-DE')});save();render()}}));
cd.appendChild(el('div',{className:'bm-unit'},bm.unit));var hk=bm.id+'_h';if(S.benchmarks[hk]&&S.benchmarks[hk].length>0){var f=S.benchmarks[hk][0],l=S.benchmarks[hk][S.benchmarks[hk].length-1];cd.appendChild(el('div',{className:'bm-hist'},'📈 '+f.v+' (W'+f.w+') → '+l.v+' (W'+l.w+')'))}app.appendChild(cd)})}


function rWkMo(app){var ov=el('div',{className:'mo'+(S.showWorkout?' open':'')});ov.onclick=function(e){if(e.target===ov){S.showWorkout=false;render()}};var sh=el('div',{className:'mo-sheet'});sh.appendChild(el('div',{className:'mo-handle'}));
if(S.selWkIdx!==null){var wks=getWk(S.hyroxWeek),w=wks[S.selWkIdx];if(w){var k=S.hyroxWeek+'_'+S.selWkIdx,done=!!S.hyroxDone[k];
var hd=el('div',{className:'flex items-center justify-between mb-3'});hd.appendChild(el('div',null,[el('div',{className:'wk-type '+w.type},w.day),el('div',{className:'mo-title',style:{marginBottom:0}},w.title)]));hd.appendChild(el('button',{className:'mo-close',onclick:function(){S.showWorkout=false;render()}},'x'));sh.appendChild(hd);
var meta=el('div',{className:'flex gap-3 mb-3',style:{fontSize:'12px',color:'var(--text-dim)'}});var m1=el('span',{className:'flex items-center gap-1'});m1.appendChild(ic('clock','var(--text-dim)'));m1.appendChild(document.createTextNode(w.dur+' Min'));meta.appendChild(m1);sh.appendChild(meta);
w.exs.forEach(function(ex){var x=el('div',{className:'ex'});x.appendChild(el('div',{className:'ex-name'},ex.n));if(ex.d)x.appendChild(el('div',{className:'ex-detail'},ex.d));if(ex.t)x.appendChild(el('div',{className:'ex-note'},ex.t));sh.appendChild(x)});
sh.appendChild(el('button',{className:'save-btn '+(done?'green':'fire'),onclick:function(){S.hyroxDone[k]=!done;save();S.showWorkout=false;render()}},done?'Erledigt - zurueck?':'Als erledigt markieren'))}}
ov.appendChild(sh);app.appendChild(ov)}

function rHabMo(app){var ov=el('div',{className:'mo'+(S.habitsShowDetail?' open':'')});ov.onclick=function(e){if(e.target===ov){S.habitsShowDetail=false;render()}};var sh=el('div',{className:'mo-sheet'});sh.appendChild(el('div',{className:'mo-handle'}));
if(S.habitsSelectedDay){var d=S.habitsSelectedDay,pn=hPhase(d),rules=HP[pn].rules;
var hd=el('div',{className:'flex items-center justify-between mb-3'});hd.appendChild(el('div',{className:'mo-title',style:{marginBottom:0}},'Tag '+d));hd.appendChild(el('button',{className:'mo-close',onclick:function(){S.habitsShowDetail=false;render()}},'x'));sh.appendChild(hd);
sh.appendChild(el('div',{className:'card mb-3',style:{padding:'10px'}},[el('div',{style:{fontSize:'11px',color:'var(--text-dim)'}},'Phase '+pn),el('div',{style:{fontWeight:700}},HP[pn].name)]));
rules.forEach(function(r){var done=S.habitsData[d]&&S.habitsData[d][r.id];var item=el('div',{className:'rule'+(done?' done':''),onclick:function(){toggleH(d,r.id)}});var h=el('div',{className:'rule-hdr'});h.appendChild(ic(done?'check':'circle',done?'var(--emerald)':'var(--text-dim)'));h.appendChild(el('span',{className:'rule-name'},r.name));h.appendChild(el('span',{className:'rule-tag mono'},r.target));item.appendChild(h);item.appendChild(el('div',{className:'rule-desc'},r.desc));sh.appendChild(item)});
sh.appendChild(el('button',{className:'save-btn cyan',onclick:function(){S.habitsShowDetail=false;render()}},'Fertig'))}
ov.appendChild(sh);app.appendChild(ov)}

function rMenu(app){var ov=el('div',{className:'mo'+(S.showMenu?' open':'')});ov.onclick=function(e){if(e.target===ov){S.showMenu=false;render()}};var sh=el('div',{className:'mo-sheet'},[el('div',{className:'mo-handle'}),el('div',{className:'mo-title'},'Menu')]);
function mi(i,c,t,fn,d){var b=el('button',{className:'mi-btn'+(d?' danger':''),onclick:function(){S.showMenu=false;render();fn()}});b.appendChild(ic(i,c));b.appendChild(document.createTextNode(t));return b}
sh.appendChild(mi('download','var(--blue)','Daten exportieren',expD));sh.appendChild(mi('upload','var(--emerald)','Daten importieren',impD));sh.appendChild(mi('trash','var(--red)','Alle Daten loeschen',resetAll,true));
sh.appendChild(el('button',{className:'mo-close-btn',onclick:function(){S.showMenu=false;render()}},'Schliessen'));ov.appendChild(sh);app.appendChild(ov)}

function rTabs(){var ex=document.querySelector('.tab-bar');if(ex)ex.remove();var bar=el('div',{className:'tab-bar'});
[{id:'dashboard',icon:'home',l:'Home'},{id:'habits',icon:'target',l:'Habits'},{id:'training',icon:'dumbbell',l:'Training'},{id:'nutrition',icon:'utensils',l:'Ernaehrung'},{id:'progress',icon:'chart',l:'Fortschritt'}].forEach(function(t){var tab=el('div',{className:'tab'+(S.tab===t.id?' active':''),onclick:function(){S.tab=t.id;render()}});tab.appendChild(ic(t.icon,S.tab===t.id?'var(--fire)':'var(--text-dim)'));tab.appendChild(document.createTextNode(t.l));bar.appendChild(tab)});document.body.appendChild(bar)}

load();render();
var ld=document.getElementById('loading'),ap=document.getElementById('app');
if(ld)ld.classList.add('hide');if(ap)ap.classList.add('show');
setTimeout(function(){if(ld)ld.remove()},500);
})();
