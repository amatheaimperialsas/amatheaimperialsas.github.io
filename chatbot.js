/* Amathea Imperial — Chatbot v2.1 | val.town proxy */
(function(){
const P='https://amatheaimperialsas--773e66fc5e0411f1b7501607ee4eb77e.web.val.run';
const SYS=`Eres el asistente virtual oficial de Amathea Imperial S.A.S. — apartamentos turísticos de lujo en Machala, Ecuador (Urb. El Sol). Nombre: "Amathea Assistant". Responde en el idioma del cliente (ES/EN). Sé elegante y conciso. Usa negritas (**texto**) para datos clave. Máx 120 palabras salvo que necesiten más detalle.

EMPRESA:
- Nombre legal: AMATHEA IMPERIAL S.A.S.
- RUC: 0791844705001
- Email: amatheaimperialsas@gmail.com
- Tel Ecuador: +593 989 114 500 | +593 989 114 500
- WhatsApp España: +34 618 939 220
- Web: amatheaimperialsas.com

APARTAMENTOS:
Apt A (hasta 5 personas) | Apt B (hasta 3 personas)
Puntuaciones: Airbnb ⭐5.0 | Booking 9.2/10

TARIFAS POR NOCHE (USD) — Entre semana = Lunes-Jueves + Domingo | Fin de semana = Viernes-Sábado:

Apartamento A:
- 1 huésped: $50 entre semana / $55 fin de semana
- 2 huéspedes: $60 / $65
- 3 huéspedes: $75 / $80
- 4 huéspedes: $85 / $90
- 5 huéspedes: $95 / $100

Apartamento B:
- 1 huésped: $30 entre semana / $33 fin de semana
- 2 huéspedes: $35 / $38
- 3 huéspedes: $45 / $48

DATOS BANCARIOS PARA RESERVA DIRECTA:
- Produbanco: Cuenta Corriente N.º 27059134874 | AMATHEA IMPERIAL S.A.S. | RUC: 0791844705001
- Cooperativa Jardín Azuayo: Cuenta de Ahorros N.º 2838342 | AMATHEA IMPERIAL S.A.S. | RUC: 0791844705001
- Tras el pago, enviar comprobante a WhatsApp: +34 618 939 220 o +593 989 114 500

UBICACIÓN: Urbanización El Sol, Machala, El Oro, Ecuador.

POLÍTICA:
- Disponibilidad: confirmar siempre en tiempo real via WhatsApp o plataformas (Airbnb/Booking).
- Para reservar usa: [WA]
- Cuando pregunten por precios, muestra la tabla completa del apartamento consultado.
- Para pagos directos, proporciona los datos bancarios completos.`;

const W={es:'¡Hola! Soy el asistente de **Amathea Imperial** 🏡\n\nApartamentos de lujo en **Machala, Ecuador**\n⭐ 5.0 Airbnb · 9.2 Booking\n\n¿En qué puedo ayudarte?',en:'Hello! I\'m the **Amathea Imperial** assistant 🏡\n\nLuxury apartments in **Machala, Ecuador**\n⭐ 5.0 Airbnb · 9.2 Booking\n\nHow can I help you?'};
const QR={es:['🏠 Ver apartamentos','💰 Precios','📅 Disponibilidad','🏦 Pago directo','📞 Contactar'],en:['🏠 Apartments','💰 Prices','📅 Availability','🏦 Direct payment','📞 Contact']};
let H=[],lang=document.documentElement.lang==='en'?'en':'es',busy=false;

const css=`#a-fab{position:fixed;bottom:130px;right:20px;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#9d7a2e);border:none;cursor:pointer;z-index:99999;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(201,168,76,.5);transition:transform .3s}
#a-fab:hover{transform:scale(1.1)}#a-fab::before{content:'';position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(201,168,76,.4);animation:a-ring 2.5s ease-out infinite}
@keyframes a-ring{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.6);opacity:0}}
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
@media(max-width:480px){#a-win{width:calc(100vw - 16px);right:8px;bottom:185px}#a-fab{right:10px;bottom:120px}}`;

const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
const fab=document.createElement('button');fab.id='a-fab';fab.setAttribute('aria-label','Asistente Amathea Imperial');
fab.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8M8 14h4" stroke-opacity=".7"/></svg>';
const win=document.createElement('div');win.id='a-win';
win.innerHTML=`<div class="a-hd"><div class="a-av">A</div><div><div class="a-nm">Amathea Assistant</div><div class="a-st">● Online 24/7</div></div><button class="a-lg" id="a-lg">ES/EN</button></div><div class="a-msgs" id="a-msgs"></div><div class="a-qrs" id="a-qrs"></div><div class="a-inp"><input type="text" id="a-txt" placeholder="Escribe tu pregunta…" maxlength="500" autocomplete="off"/><button id="a-snd"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div>`;
document.body.appendChild(fab);document.body.appendChild(win);
const ms=document.getElementById('a-msgs'),inp=document.getElementById('a-txt'),snd=document.getElementById('a-snd'),qr=document.getElementById('a-qrs');
function fmt(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\[WA\]/g,'<a class="a-cta" href="https://wa.me/34618939220" target="_blank">💬 WhatsApp</a>').replace(/\n/g,'<br>')}
function msg(r,t){const d=document.createElement('div');d.className='a-m '+r;const tm=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});d.innerHTML=r==='b'?`<div class="a-av2">A</div><div><div class="a-b">${fmt(t)}</div><div class="a-t">${tm}</div></div>`:`<div><div class="a-b">${t.replace(/</g,'&lt;')}</div><div class="a-t" style="text-align:right">${tm}</div></div>`;ms.appendChild(d);ms.scrollTop=ms.scrollHeight}
function typing(){const d=document.createElement('div');d.className='a-m b';d.id='a-ty';d.innerHTML='<div class="a-av2">A</div><div class="a-dots"><span></span><span></span><span></span></div>';ms.appendChild(d);ms.scrollTop=ms.scrollHeight}
function rmTyping(){const e=document.getElementById('a-ty');if(e)e.remove()}
function rQR(){qr.innerHTML='';QR[lang].forEach(q=>{const b=document.createElement('button');b.className='a-q';b.textContent=q;b.onclick=()=>{send(q);qr.innerHTML=''};qr.appendChild(b)})}
async function send(t){t=(t||'').trim();if(!t||busy)return;msg('u',t);H.push({role:'user',content:t});inp.value='';busy=true;snd.disabled=true;inp.disabled=true;typing();
try{const r=await fetch(P,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:800,system:SYS,messages:H})});const d=await r.json();const rep=d?.content?.[0]?.text||(lang==='es'?'Error de conexión. Contáctanos: [WA]':'Connection error. Contact us: [WA]');rmTyping();msg('b',rep);H.push({role:'assistant',content:rep});if(H.length===2)rQR()}catch(e){rmTyping();msg('b',lang==='es'?'Error de conexión. Contáctanos: [WA]':'Connection error. Contact us: [WA]')}
busy=false;snd.disabled=false;inp.disabled=false}
let open=false;
fab.onclick=()=>{open=!open;win.classList.toggle('on',open);if(open&&H.length===0){msg('b',W[lang]);rQR()}if(open)setTimeout(()=>inp.focus(),350)};
document.getElementById('a-lg').onclick=(e)=>{e.stopPropagation();lang=lang==='es'?'en':'es';inp.placeholder=lang==='es'?'Escribe tu pregunta…':'Type your question…';rQR()};
snd.onclick=()=>send(inp.value);inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send(inp.value)}});
})();
