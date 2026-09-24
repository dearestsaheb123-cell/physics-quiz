const extracted = [
 {q:'একটি গাড়ি 60 km/h বেগে পূর্ব দিকে এবং অন্য একটি গাড়ি 80 km/h বেগে উত্তর দিকে চলছে। প্রথম গাড়িটির সাপেক্ষে দ্বিতীয় গাড়িটির আপেক্ষিক বেগ কত?',o:['20 km/h','140 km/h','70 km/h','100 km/h'],a:3},
 {q:'বৃষ্টি 4 m/s বেগে উল্লম্বভাবে নিচে পড়ছে। একজন লোক 3 m/s বেগে অনুভূমিক সমতলে হাঁটছে। বৃষ্টির হাত থেকে বাঁচতে লোকটিকে উল্লম্বের সাথে কত কোণে ছাতা ধরতে হবে?',o:['sin⁻¹(0.75)','tan⁻¹(0.75)','cos⁻¹(0.75)','tan⁻¹(1.33)'],a:1},
 {q:'একটি নদী 2 km/h বেগে প্রবাহিত হচ্ছে। একজন সাঁতারু স্থির জলে 4 km/h বেগে সাঁতার কাটতে পারে। ন্যূনতম সময়ে পার হতে স্রোতের দিকের সাথে কোণ কত?',o:['60°','0°','90°','120°'],a:2},
 {q:'0.5 km চওড়া নদীতে স্রোতের বেগ 3 km/h এবং স্থির জলে নৌকার বেগ 5 km/h। সোজা অপর পাড়ে পৌঁছাতে স্রোতের দিকের সাথে কোণ কত?',o:['90°','143°','120°','127°'],a:3},
 {q:'দুটি ট্রেন 50 km/h ও 30 km/h বেগে পরস্পর বিপরীত দিকে চলছে। প্রথম ট্রেনের সাপেক্ষে দ্বিতীয় ট্রেনের আপেক্ষিক বেগ কত?',o:['20 km/h','40 km/h','80 km/h','1500 km/h'],a:2},
 {q:'A = 2i + 3j − k এবং B = −i + 4j + k₁k পরস্পর লম্ব হলে k₁-এর মান কত?',o:['−10','−14','14','10'],a:3},
 {q:'A = 3i + 4j এবং B = 6i + 8j ভেক্টর দুটির মধ্যবর্তী কোণ কত?',o:['0°','90°','180°','45°'],a:0},
 {q:'|A × B| = A · B হলে A ও B-এর মধ্যবর্তী কোণ কত?',o:['45°','90°','0°','60°'],a:0},
 {q:'A = 2i + 3j এবং B = i − 2j দ্বারা গঠিত সামান্তরিকের ক্ষেত্রফল কত?',o:['13 square units','1 square unit','5 square units','7 square units'],a:0},
 {q:'r = i + j + 2k ভেক্টরের মান (magnitude) কত?',o:['4','√5','√6','2'],a:2}
];
const practice = [
 ['দুটি সমান ভেক্টরের লব্ধি সর্বাধিক হয় যখন তাদের মধ্যবর্তী কোণ কত?',['0°','45°','90°','180°'],0],
 ['একটি শূন্য ভেক্টরের দিক সম্পর্কে সঠিক বক্তব্য কোনটি?',['একটি নির্দিষ্ট দিক আছে','দিক নির্ণয় করা যায় না','দিক সর্বদা পূর্ব','দিক সর্বদা উত্তর'],1],
 ['i · j-এর মান কত?',['1','−1','0','i + j'],2],
 ['i × j-এর মান কত?',['k','−k','0','1'],0],
 ['একটি ভেক্টরের একক ভেক্টর পেতে কী করতে হয়?',['ভেক্টরকে তার মান দিয়ে ভাগ','মান দিয়ে গুণ','বর্গ করতে','ঋণাত্মক করতে'],0],
 ['সরণ কোন ধরনের রাশি?',['স্কেলার','ভেক্টর','মাত্রাহীন','ধ্রুবক'],1],
 ['দ্রুতি ও বেগের মধ্যে মূল পার্থক্য কী?',['দ্রুতি ভেক্টর, বেগ স্কেলার','দ্রুতি স্কেলার, বেগ ভেক্টর','দুটিই স্কেলার','দুটিই এক'],1],
 ['সমবেগে চলা বস্তুর ত্বরণ কত?',['শূন্য','9.8 m/s²','বেগের সমান','অসীম'],0],
 ['একটি বস্তু স্থির অবস্থা থেকে 2 m/s² ত্বরণে 5 s চললে বেগ কত?',['2 m/s','5 m/s','10 m/s','25 m/s'],2],
 ['অনুভূমিক প্রক্ষেপণে অনুভূমিক ত্বরণ কত?',['g','0','u','g/2'],1],
 ['প্রক্ষেপণের পাল্লা সর্বাধিক হয় কোন কোণে?',['30°','45°','60°','90°'],1],
 ['বেগ-সময় গ্রাফের নিচের ক্ষেত্রফল কী নির্দেশ করে?',['ত্বরণ','সরণ','বল','ভরবেগ'],1],
 ['ত্বরণ-সময় গ্রাফের নিচের ক্ষেত্রফল কী?',['বেগের পরিবর্তন','সরণ','দূরত্ব','বল'],0],
 ['একটি বস্তু 20 m/s বেগে চলছে এবং 4 s পরে থামে। মন্দন কত?',['5 m/s²','80 m/s²','16 m/s²','4 m/s²'],0],
 ['বৃত্তীয় গতিতে কেন্দ্রাভিমুখী ত্বরণের দিক কোনদিকে?',['বাইরে','স্পর্শকের দিকে','কেন্দ্রের দিকে','উপরের দিকে'],2],
 ['ভরবেগের SI একক কোনটি?',['kg m/s','N/m','kg/m','J/s'],0],
 ['ঘর্ষণ বল সাধারণত গতির কোন দিকে কাজ করে?',['গতির দিকে','গতির বিপরীতে','উল্লম্বভাবে','কেন্দ্রের দিকে'],1],
 ['কাজের SI একক কী?',['Watt','Joule','Newton','Pascal'],1],
 ['ক্ষমতার SI একক কোনটি?',['Joule','Watt','Newton','Coulomb'],1],
 ['গতিশক্তির সূত্র কোনটি?',['mv','½mv²','mgh','ma'],1],
 ['ভরবেগ দ্বিগুণ হলে একই ভরের গতিশক্তি কত গুণ হবে?',['2','4','1/2','8'],1],
 ['সংঘর্ষে মোট ভরবেগ কখন সংরক্ষিত থাকে?',['বাহ্যিক বল শূন্য হলে','সবসময় নয়','শুধু স্থির অবস্থায়','শুধু অসম স্থিতিস্থাপক সংঘর্ষে'],0],
 ['দুটি লম্ব ভেক্টরের ডট গুণফল কত?',['1','−1','0','দুটি ভেক্টরের গুণফল'],2],
 ['A × B-এর দিক কোন নিয়মে নির্ণয় করা হয়?',['বাম হাত','ডান হাত','সমান্তরাল অক্ষ','শক্তি সংরক্ষণ'],1],
 ['আপেক্ষিক বেগ নির্ণয়ের সূত্র কোনটি?',['vAB = vA + vB','vAB = vA − vB','vAB = vA/vB','vAB = vA × vB'],1],
 ['নদী পার হওয়ার সর্বনিম্ন দূরত্বের পথে লব্ধি বেগের মান কত? (v > u)',['v² − u²','√(v² − u²)','v + u','v − u'],1],
 ['প্রক্ষেপণের উড্ডয়নকাল কোনটির উপর নির্ভর করে?',['শুধু অনুভূমিক উপাংশ','উল্লম্ব বেগের উপাংশ','শুধু ভর','শুধু পাল্লা'],1],
 ['মুক্তপতনে বস্তুর ত্বরণ কোনদিকে?',['উপরের দিকে','নিচের দিকে','অনুভূমিক','শূন্য'],1],
 ['একটি ভেক্টরের ঋণাত্মক ভেক্টরের মান কেমন?',['অর্ধেক','সমান','দ্বিগুণ','শূন্য'],1],
 ['নদী পার হওয়ার সর্বনিম্ন দূরত্বের জন্য কোন শর্ত প্রযোজ্য?',['v > u','v < u','v = 0','u = 0'],0]
].map(([q,o,a])=>({q,o,a}));
const questions = [...extracted, ...practice, ...Array.from({length:55-extracted.length-practice.length},(_,i)=>({...practice[i%practice.length],q:`অনুশীলনী ${i+1}: ${practice[i%practice.length].q}`}))];
const state={index:0,answers:[],name:'',id:'',startedAt:0,timerId:null}; const $=id=>document.getElementById(id); const KEY='vectorLabSubmissions'; const channel='BroadcastChannel' in window?new BroadcastChannel('vector-lab-live'):null;
function records(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}} function save(items){localStorage.setItem(KEY,JSON.stringify(items));channel?.postMessage('refresh')} function bn(v){return String(v).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d])} function view(id){document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));$(id).classList.remove('hidden')}
function renderQuestion(){const q=questions[state.index];$('questionCount').textContent=`প্রশ্ন ${bn(state.index+1)} / ${bn(questions.length)}`;$('questionLabel').textContent=`QUESTION ${String(state.index+1).padStart(2,'0')}`;$('questionText').textContent=q.q;$('progressBar').style.width=`${(state.index+1)/questions.length*100}%`;$('answeredCount').textContent=`${bn(state.answers.filter(a=>a!==null).length)} উত্তর`;$('options').innerHTML=q.o.map((o,i)=>`<button class="option ${state.answers[state.index]===i?'selected':''}" data-option="${i}"><span>${String.fromCharCode(65+i)}</span><b>${o}</b></button>`).join('');$('previousQuestion').disabled=!state.index;$('nextQuestion').classList.toggle('hidden',state.index===questions.length-1);$('submitQuiz').classList.toggle('hidden',state.index!==questions.length-1);document.querySelectorAll('.option').forEach(b=>b.addEventListener('click',()=>{state.answers[state.index]=Number(b.dataset.option);renderQuestion()}))}
function start(){state.name=$('participantName').value.trim();state.id=$('participantId').value.trim();if(!state.name||!state.id){alert('নাম এবং রোল / ID দুটিই প্রয়োজন।');return}state.index=0;state.answers=Array(questions.length).fill(null);state.startedAt=Date.now();$('identityPanel').classList.add('hidden');$('quizPanel').classList.remove('hidden');clearInterval(state.timerId);state.timerId=setInterval(()=>{const left=Math.max(0,5400-Math.floor((Date.now()-state.startedAt)/1000));$('timer').textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;if(!left)submit()},1000);renderQuestion()}
function submit(){if(state.answers.some(a=>a===null)&&!confirm('কিছু প্রশ্নের উত্তর দেওয়া হয়নি। তবুও জমা দেবেন?'))return;clearInterval(state.timerId);const correct=state.answers.reduce((n,a,i)=>n+(a===questions[i].a?1:0),0);const result={name:state.name,id:state.id,correct,total:questions.length,submittedAt:new Date().toISOString(),answers:state.answers};save([...records().filter(r=>r.id.toLowerCase()!==state.id.toLowerCase()),result]);showResult(result)}
function showResult(r){$('quizPanel').classList.add('hidden');$('resultPanel').classList.remove('hidden');const pct=Math.round(r.correct/r.total*100);$('resultTitle').textContent=`${r.name}, আপনার ফলাফল`;$('resultTime').textContent=`জমা দেওয়া হয়েছে ${new Date(r.submittedAt).toLocaleString('bn-BD')}`;$('resultScore').textContent=`${bn(r.correct)} / ${bn(r.total)}`;$('resultPercent').textContent=`${bn(pct)}%`;$('resultCorrect').textContent=bn(r.correct);$('resultWrong').textContent=bn(r.total-r.correct);$('answerReview').innerHTML=r.answers.map((a,i)=>`<div class="review-row ${a===questions[i].a?'right':'wrong'}"><span>${bn(i+1)}</span><p>${questions[i].q}</p><strong>${a===null?'উত্তর নেই':a===questions[i].a?'সঠিক':`সঠিক উত্তর: ${questions[i].o[questions[i].a]}`}</strong></div>`).join('')}
function tracker(){const rs=records();$('totalParticipants').textContent=rs.length;$('submittedParticipants').textContent=rs.length;$('averageScore').textContent=`${rs.length?Math.round(rs.reduce((n,r)=>n+r.correct/r.total*100,0)/rs.length):0}%`;$('trackerBody').innerHTML=rs.length?rs.sort((a,b)=>new Date(b.submittedAt)-new Date(a.submittedAt)).map(r=>`<tr><td>${r.name}</td><td>${r.id}</td><td><span class="status-badge">জমা হয়েছে</span></td><td>${new Date(r.submittedAt).toLocaleTimeString('bn-BD',{hour:'2-digit',minute:'2-digit'})}</td><td><strong>${r.correct}/${r.total}</strong></td><td><button class="table-button" data-delete="${r.id}">মুছুন</button></td></tr>`).join(''):'<tr><td colspan="6" class="empty-cell">এখনও কোনো submission নেই</td></tr>';document.querySelectorAll('[data-delete]').forEach(b=>b.addEventListener('click',()=>{save(records().filter(r=>r.id!==b.dataset.delete));tracker()}))}
function exportCsv(){const rows=[['Name','ID','Score','Total','Submitted at'],...records().map(r=>[r.name,r.id,r.correct,r.total,r.submittedAt])];const csv=rows.map(row=>row.map(c=>`"${String(c).replaceAll('"','""')}"`).join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.download='vector-lab-results.csv';a.click()}
$('startQuiz').addEventListener('click',start);$('nextQuestion').addEventListener('click',()=>{if(state.index<questions.length-1){state.index++;renderQuestion()}});$('previousQuestion').addEventListener('click',()=>{if(state.index){state.index--;renderQuestion()}});$('submitQuiz').addEventListener('click',submit);$('restartQuiz').addEventListener('click',()=>{$('resultPanel').classList.add('hidden');$('identityPanel').classList.remove('hidden');$('participantName').value=state.name;$('participantId').value=state.id;$('timer').textContent='90:00'});$('adminToggle').addEventListener('click',()=>{view('adminView');tracker()});$('backToQuiz').addEventListener('click',()=>view('participantView'));$('exportResults').addEventListener('click',exportCsv);channel?.addEventListener('message',tracker);window.addEventListener('storage',tracker);tracker();
