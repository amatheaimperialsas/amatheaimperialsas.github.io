/* Amathea Imperial — Chatbot v3.0 | val.town proxy */
(function(){
const P='https://amatheaimperialsas--773e66fc5e0411f1b7501607ee4eb77e.web.val.run';
const SYS=`Eres el asistente virtual oficial de Amathea Imperial S.A.S. Nombre: "ED". Responde siempre en el idioma del cliente (ES o EN). Tono: cálido, elegante, conciso. Usa negritas (**texto**) para datos clave. Máx 130 palabras salvo que necesiten más detalle.

== EMPRESA ==
Nombre: AMATHEA IMPERIAL S.A.S.
RUC: 0791844705001
Email: amatheaimperialsas@gmail.com
Web: amatheaimperialsas.com
Instagram: @amatheaimperialsas
Facebook: amatheaimperialsas

== CONTACTO ==
Tel Ecuador: +593 989 114 500
WhatsApp 1: +34 618 939 220
WhatsApp 2: +34 660 184 759

== APARTAMENTOS ==
Ubicación: Urbanización El Sol, Machala, El Oro, Ecuador
Apt A: hasta 5 personas | Apt B: hasta 3 personas
Puntuaciones: Airbnb ⭐5.0 | Booking 9.2/10

== TARIFAS POR NOCHE (USD) ==
Entre semana = Lunes-Jueves + Domingo | Fin de semana = Viernes-Sábado

Apartamento A:
- 1 huésped: $50 / $55
- 2 huéspedes: $60 / $65
- 3 huéspedes: $75 / $80
- 4 huéspedes: $85 / $90
- 5 huéspedes: $95 / $100

Apartamento B:
- 1 huésped: $30 / $33
- 2 huéspedes: $35 / $38
- 3 huéspedes: $45 / $48

== DATOS BANCARIOS (RESERVA DIRECTA) ==
- Produbanco: Cuenta Corriente N.º 27059134874 | AMATHEA IMPERIAL S.A.S. | RUC: 0791844705001
- Cooperativa Jardín Azuayo: Cuenta de Ahorros N.º 2838342 | AMATHEA IMPERIAL S.A.S. | RUC: 0791844705001
Enviar comprobante a WhatsApp: +34 618 939 220 o +34 660 184 759

== BEBIDAS & SNACKS (disponibles en el apartamento) ==
- Coca-Cola personal: $2.00
- Nestea: $2.00
- Cerveza de importación: $3.00
- Agua personal: $2.00
- Vino tinto (botella): $28.00
- Snacks: $2.00

== SERVICIO DE TRANSPORTE ==
Empresa: SERVIEXCLUSIVO (empresa externa autorizada, opera en la urbanización)
Servicio con conductor | Disponible 24 horas
Teléfono: +593 96 990 1694 | +593 99 811 2797

== SERVICIO DE COMIDAS ==
Proveedor: Parrilladas Doña Nachita
Entrega directa al apartamento
- Almuerzos: Lunes a Viernes
- Parrilladas nocturnas: Martes a Domingo
Teléfono: +593 98 025 7877


== NORMAS DE LA CASA / HOUSE RULES ==
- ✅ Check-in: desde las 15:00 h
- ✅ Check-out: antes de las 12:30 h
- 🚭 Prohibido fumar en el interior del apartamento
- 🔇 Silencio y control de volumen a partir de las 22:00 h (respeto a los vecinos)
- El incumplimiento de las normas puede conllevar penalizaciones según la plataforma de reserva

== INSTRUCCIONES PARA EL BOT ==
- DISPONIBILIDAD Y RESERVAS: Cuando el cliente pregunte por disponibilidad, fechas o quiera reservar, pregúntale siempre por qué canal prefiere reservar y muéstrale estas opciones con links en formato [texto](url):

🏡 **Reserva directa** (mejor precio garantizado)
📞 **+593 989 114 500**

✈️ **Airbnb**
• [Apartamento A — hasta 5 personas](https://www.airbnb.es/rooms/1534153207590673237)
• [Apartamento B — hasta 3 personas](https://www.airbnb.es/rooms/1406703789280995048)

🏨 **Booking.com**
[Ver disponibilidad en Booking](https://www.booking.com/searchresults.es.html?ss=Amathea+Imperial%2C+Machala%2C+Ecuador&dest_id=15182753&dest_type=hotel)

Si elige reserva directa: proporciona los datos bancarios y solicita DNI + placa de vehículo
- Para pago directo: proporciona los datos bancarios completos
- Para transporte: da el teléfono de SERVIEXCLUSIVO
- Para comida: da el teléfono de Doña Nachita
- Para precios: muestra la tabla completa del apartamento consultado
- Nunca inventes disponibilidad — siempre confirmar en tiempo real
- WiFi: SOLO compartir la contraseña si el cliente confirma explícitamente que YA TIENE reserva confirmada. Si pregunta el WiFi sin confirmar reserva, responde: "El WiFi se facilita una vez confirmada la reserva. ¿Ya tienes tu reserva hecha? 😊" Si confirma que sí, entonces comparte: Red: NETLIFE-macfdullauriv1 | Contraseña: 0101197986`;

const W={es:'¡Bienvenido a **Amathea Imperial** 🏡\n\nApartamentos de lujo en **Machala, Ecuador**\n⭐ 5.0 Airbnb · 9.2 Booking\n\n¿En qué puedo ayudarte?',en:'Welcome to **Amathea Imperial** 🏡\n\nLuxury apartments in **Machala, Ecuador**\n⭐ 5.0 Airbnb · 9.2 Booking\n\nHow can I help you?'};
const QR={es:['💰 Precios','📅 Disponibilidad','🏠 Apartamentos','🚗 Transporte','🍽️ Comida','🏦 Pago directo'],en:['💰 Prices','📅 Availability','🏠 Apartments','🚗 Transport','🍽️ Food','🏦 Direct payment']};
let H=[],lang=document.documentElement.lang==='en'?'en':'es',busy=false;

const css=`#a-fab{position:fixed;bottom:130px;right:20px;border-radius:30px;background:linear-gradient(135deg,#1a1a12,#2a2410);border:1px solid rgba(201,168,76,.5);cursor:pointer;z-index:99999;display:flex;align-items:center;gap:8px;padding:10px 16px 10px 12px;box-shadow:0 8px 28px rgba(0,0,0,.5),0 2px 8px rgba(201,168,76,.3);transition:all .3s;white-space:nowrap}
#a-fab:hover{transform:translateY(-2px);box-shadow:0 12px 36px rgba(0,0,0,.6),0 4px 16px rgba(201,168,76,.45);border-color:rgba(201,168,76,.8)}
#a-fab .fab-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#9d7a2e);display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:1rem;font-weight:700;color:#0f0f0f;flex-shrink:0;position:relative}
#a-fab .fab-avatar::after{content:'';position:absolute;bottom:0;right:0;width:9px;height:9px;border-radius:50%;background:#3ecf4a;border:2px solid #1a1a12}
#a-fab .fab-text{display:flex;flex-direction:column;align-items:flex-start}
#a-fab .fab-name{font-size:.8rem;font-weight:600;color:#e2c97e;letter-spacing:.05em;line-height:1}
#a-fab .fab-sub{font-size:.62rem;color:#6a8a6a;letter-spacing:.04em;margin-top:2px}
#a-fab::before{content:'';position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;border-radius:30px;background:linear-gradient(135deg,rgba(201,168,76,.3),transparent,rgba(201,168,76,.15));pointer-events:none}
@keyframes a-ring{0%{opacity:.8}100%{opacity:0}}
#a-win{position:fixed;bottom:195px;right:16px;width:340px;height:510px;background:#161612;border:1px solid rgba(201,168,76,.2);border-radius:16px;box-shadow:0 24px 80px rgba(0,0,0,.7);display:flex;flex-direction:column;z-index:99998;overflow:hidden;transform:translateY(20px) scale(.95);opacity:0;pointer-events:none;transition:all .35s cubic-bezier(.34,1.56,.64,1);font-family:system-ui,sans-serif}
#a-win.on{transform:none;opacity:1;pointer-events:all}
.a-hd{background:linear-gradient(135deg,#161612,#1e1b0f);border-bottom:1px solid rgba(201,168,76,.2);padding:12px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0}
.a-av{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#9d7a2e);display:flex;align-items:center;justify-content:center;font-size:.95rem;color:#0f0f0f;font-weight:700;flex-shrink:0;position:relative}
.a-av::after{content:'';position:absolute;bottom:1px;right:1px;width:8px;height:8px;border-radius:50%;background:#3ecf4a;border:2px solid #161612}
.a-nm{font-size:.9rem;color:#e2c97e;font-weight:600;letter-spacing:.04em}.a-st{font-size:.65rem;color:#3ecf4a;margin-top:1px}
.a-lg{background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.2);border-radius:20px;padding:3px 8px;color:#c9a84c;font-size:.64rem;cursor:pointer;margin-left:auto;font-family:inherit}
.a-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:9px;scroll-behavior:smooth}
.a-msgs::-webkit-scrollbar{width:3px}.a-msgs::-webkit-scrollbar-thumb{background:rgba(201,168,76,.2);border-radius:2px}
.a-m{display:flex;align-items:flex-end;gap:6px;animation:a-in .3s ease}@keyframes a-in{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}
.a-m.u{flex-direction:row-reverse}.a-b{max-width:84%;padding:8px 12px;border-radius:12px;font-size:.79rem;line-height:1.6}
.a-m.b .a-b{background:#1e1e18;border:1px solid rgba(201,168,76,.12);color:#e8e0d0;border-bottom-left-radius:3px}
.a-m.u .a-b{background:#2a2410;border:1px solid rgba(201,168,76,.25);color:#e2c97e;border-bottom-right-radius:3px}
.a-t{font-size:.58rem;color:#5a5040;flex-shrink:0;margin-bottom:2px}
.a-av2{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#9d7a2e);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#0f0f0f;font-weight:700;flex-shrink:0}
.a-dots{display:flex;gap:4px;padding:8px 12px;background:#1e1e18;border:1px solid rgba(201,168,76,.12);border-radius:12px;border-bottom-left-radius:3px}
.a-dots span{width:5px;height:5px;border-radius:50%;background:#c9a84c;animation:a-d 1.2s infinite}.a-dots span:nth-child(2){animation-delay:.2s}.a-dots span:nth-child(3){animation-delay:.4s}
@keyframes a-d{0%,60%,100%{transform:none;opacity:.4}30%{transform:translateY(-4px);opacity:1}}
.a-qrs{padding:5px 12px 2px;display:flex;gap:5px;flex-wrap:wrap;flex-shrink:0;border-top:1px solid rgba(201,168,76,.07)}
.a-q{background:rgba(201,168,76,.08);border:1px solid rgba(201,168,76,.2);border-radius:20px;padding:4px 9px;color:#c9a84c;font-size:.66rem;cursor:pointer;white-space:nowrap;font-family:inherit}
.a-q:hover{background:rgba(201,168,76,.18)}
.a-inp{padding:8px 10px 12px;display:flex;gap:7px;align-items:center;border-top:1px solid rgba(201,168,76,.2);flex-shrink:0}
#a-txt{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(201,168,76,.18);border-radius:24px;padding:8px 13px;color:#e8e0d0;font-size:.79rem;outline:none;transition:.2s;font-family:inherit}
#a-txt:focus{border-color:rgba(201,168,76,.5)}#a-txt::placeholder{color:#5a5040}
#a-snd{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#9d7a2e);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:.2s;box-shadow:0 4px 12px rgba(201,168,76,.3)}
#a-snd:hover{transform:scale(1.08)}#a-snd:disabled{opacity:.4;cursor:not-allowed;transform:none}
.a-b strong{color:#e2c97e;font-weight:500}
.a-cta{display:inline-block;margin-top:6px;padding:5px 12px;background:linear-gradient(135deg,#c9a84c,#9d7a2e);color:#0f0f0f;border-radius:20px;font-size:.7rem;font-weight:600;text-decoration:none}
.a-link{color:#c9a84c;text-decoration:none;font-weight:500;border-bottom:1px solid rgba(201,168,76,.3);transition:.2s;padding-bottom:1px}.a-link:hover{color:#e2c97e;border-color:#e2c97e}
@media(max-width:480px){#a-win{width:calc(100vw - 16px);right:8px;bottom:185px}#a-fab{right:10px;bottom:120px}}.a-head{font-size:.85rem;font-weight:700;color:#e2c97e;margin:6px 0 4px;letter-spacing:.03em;display:block}
.a-head2{font-size:.78rem;font-weight:600;color:#c9a84c;margin:5px 0 3px;display:block}
.a-tbl{width:100%;border-collapse:collapse;margin:6px 0;font-size:.74rem}
.a-tbl th{background:rgba(201,168,76,.12);color:#c9a84c;padding:5px 8px;text-align:left;border-bottom:1px solid rgba(201,168,76,.3);font-weight:600}
.a-tbl td{padding:5px 8px;border-bottom:1px solid rgba(201,168,76,.06);color:#e8e0d0;vertical-align:middle}
.a-tbl tr:last-child td{border-bottom:none}
.a-tbl tr:hover td{background:rgba(201,168,76,.04)}
.a-tbl td:first-child{color:#c9a84c;font-weight:500}
.a-hr{height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.25),transparent);margin:7px 0}
.a-ul{margin:3px 0 3px 4px;padding:0;list-style:none}
.a-ul li{padding:2px 0;color:#e8e0d0;font-size:.78rem;line-height:1.5}
.a-ul li::before{content:"\u2022 ";color:#c9a84c}`;

const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
const fab=document.createElement('button');fab.id='a-fab';fab.setAttribute('aria-label','Asistente Amathea Imperial');
fab.innerHTML='<div class="fab-avatar">ED</div><div class="fab-text"><span class="fab-name">ED</span><span class="fab-sub">● Online ahora</span></div>';
const win=document.createElement('div');win.id='a-win';
win.innerHTML=`<div class="a-hd"><div class="a-av">A</div><div><div class="a-nm">ED</div><div class="a-st">● Online 24/7</div></div><button class="a-lg" id="a-lg">ES/EN</button></div><div class="a-msgs" id="a-msgs"></div><div class="a-qrs" id="a-qrs"></div><div class="a-inp"><input type="text" id="a-txt" placeholder="Escribe tu pregunta…" maxlength="500" autocomplete="off"/><button id="a-snd"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div>`;
document.body.appendChild(fab);document.body.appendChild(win);
const ms=document.getElementById('a-msgs'),inp=document.getElementById('a-txt'),snd=document.getElementById('a-snd'),qr=document.getElementById('a-qrs');
function aI(t){return t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\[WA\]/g,'<a class="a-cta" href="https://wa.me/34618939220" target="_blank">💬 WhatsApp</a>').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a class="a-link" href="$2" target="_blank" rel="noopener">$1 ↗</a>')}
function fmt(t){t=t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');var ln=t.split('\n'),o=[],i=0;while(i<ln.length){var l=ln[i];if(/^###\s/.test(l)){o.push('<span class="a-head">'+aI(l.replace(/^###\s+/,''))+'</span>');i++;continue}if(/^##\s/.test(l)){o.push('<span class="a-head2">'+aI(l.replace(/^##\s+/,''))+'</span>');i++;continue}if(l.trim()[0]==='|'&&i+1<ln.length&&/^\|[\s\-|]+\|$/.test(ln[i+1].trim())){var hh=l.split('|').filter(function(c,x,a){return x>0&&x<a.length-1}).map(function(h){return h.trim()});i+=2;var rr=[];while(i<ln.length&&ln[i].trim()[0]==='|'){rr.push(ln[i].split('|').filter(function(c,x,a){return x>0&&x<a.length-1}).map(function(c){return c.trim()}));i++}var tb='<table class="a-tbl"><thead><tr>';hh.forEach(function(h){tb+='<th>'+aI(h)+'</th>'});tb+='</tr></thead><tbody>';rr.forEach(function(r){tb+='<tr>';r.forEach(function(c){tb+='<td>'+aI(c)+'</td>'});tb+='</tr>'});o.push(tb+'</tbody></table>');continue}if(/^-{3,}$/.test(l.trim())){o.push('<div class="a-hr"></div>');i++;continue}if(/^[-*]\s/.test(l)){var li='';while(i<ln.length&&/^[-*]\s/.test(ln[i])){li+='<li>'+aI(ln[i].replace(/^[-*]\s+/,''))+'</li>';i++}o.push('<ul class="a-ul">'+li+'</ul>');continue}if(!l.trim()){o.push('<div style="height:4px"></div>');i++;continue}o.push(aI(l)+'<br>');i++}return o.join('')}
function msg(r,t){const d=document.createElement('div');d.className='a-m '+r;const tm=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});d.innerHTML=r==='b'?`<div class="a-av2">A</div><div><div class="a-b">${fmt(t)}</div><div class="a-t">${tm}</div></div>`:`<div><div class="a-b">${t.replace(/</g,'&lt;')}</div><div class="a-t" style="text-align:right">${tm}</div></div>`;ms.appendChild(d);ms.scrollTop=ms.scrollHeight}
function typing(){const d=document.createElement('div');d.className='a-m b';d.id='a-ty';d.innerHTML='<div class="a-av2">A</div><div class="a-dots"><span></span><span></span><span></span></div>';ms.appendChild(d);ms.scrollTop=ms.scrollHeight}
function rmTyping(){const e=document.getElementById('a-ty');if(e)e.remove()}
function rQR(){qr.innerHTML='';QR[lang].forEach(q=>{const b=document.createElement('button');b.className='a-q';b.textContent=q;b.onclick=()=>{send(q);qr.innerHTML=''};qr.appendChild(b)})}
async function send(t){t=(t||'').trim();if(!t||busy)return;msg('u',t);H.push({role:'user',content:t});inp.value='';busy=true;snd.disabled=true;inp.disabled=true;typing();
try{const r=await fetch(P,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:800,system:SYS,messages:H})});const d=await r.json();const rep=d?.content?.[0]?.text||(lang==='es'?'Error de conexión. Contáctanos: [WA]':'Connection error. Contact us: [WA]');rmTyping();msg('b',rep);H.push({role:'assistant',content:rep});if(H.length>20)H=H.slice(-20);if(H.length===2||H.length<=4)rQR()}catch(e){rmTyping();msg('b',lang==='es'?'Error de conexión. Contáctanos: [WA]':'Connection error. Contact us: [WA]')}
busy=false;snd.disabled=false;inp.disabled=false}
let open=false;
fab.onclick=()=>{open=!open;win.classList.toggle('on',open);if(open&&H.length===0){msg('b',W[lang]);rQR()}if(open)setTimeout(()=>inp.focus(),350)};
document.getElementById('a-lg').onclick=(e)=>{e.stopPropagation();lang=lang==='es'?'en':'es';inp.placeholder=lang==='es'?'Escribe tu pregunta…':'Type your question…';rQR()};
snd.onclick=()=>send(inp.value);inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send(inp.value)}});
})();
