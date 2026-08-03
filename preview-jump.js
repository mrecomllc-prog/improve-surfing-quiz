/* PREVIEW ONLY — loaded solely when the URL carries ?jump=<stepId>.
   Fills the quiz state with a plausible mid-level run so a deep screen
   (score / projection / result / plans) can be reviewed without clicking
   through 26 questions. Never loaded in production. */
(function(){
  var target = new URLSearchParams(location.search).get('jump');
  if(!target) return;
  function go(){
    if(typeof STEPS==='undefined'||typeof state==='undefined'){ return setTimeout(go,60); }
    state.name='Rafael'; state.gender='Man'; state.age='30-39';   /* gslot() tests gender==='Woman' */
    state._sc = state._sc || {};
    STEPS.forEach(function(s){
      if(!s.options) return;
      if(s.type==='single'){
        var o=s.options[Math.min(1,s.options.length-1)];
        state[s.id]=o.val; if(o.score!=null) state._sc[s.id]=o.score;
      } else if(s.type==='multi'){ state[s.id]=[s.options[0].val]; }
      else if(s.type==='imgcards'){ state[s.id]=(s.options[1]||s.options[0]).val; }
    });
    /* these must be REAL option values from STEPS — pickTier(), computeProjection() and the
       "N session(s) a week" copy all branch on them. Bogus seeds ('2', 'all_in') silently
       fell through and rendered "1 sessions a week" on the result screen. */
    state.missing='analysis'; state.sessions='2+'; state.commit='allin'; state.local='local';
    state.phone='+61 493447438'; state.height_cm='178'; state.weight_kg='78';
    var i = STEPS.findIndex(function(s){return s.id===target});
    if(i<0) return;
    idx = i; render();
  }
  if(document.readyState==='complete') go(); else window.addEventListener('load',go);
})();
