/* PREVIEW ONLY — loaded solely when the URL carries ?jump=<stepId>.
   Fills the quiz state with a plausible mid-level run so a deep screen
   (score / projection / result / plans) can be reviewed without clicking
   through 26 questions. Never loaded in production. */
(function(){
  var target = new URLSearchParams(location.search).get('jump');
  if(!target) return;
  function go(){
    if(typeof STEPS==='undefined'||typeof state==='undefined'){ return setTimeout(go,60); }
    state.name='Rafael'; state.gender='m'; state.age='30–39';
    state._sc = state._sc || {};
    STEPS.forEach(function(s){
      if(!s.options) return;
      if(s.type==='single'){
        var o=s.options[Math.min(1,s.options.length-1)];
        state[s.id]=o.val; if(o.score!=null) state._sc[s.id]=o.score;
      } else if(s.type==='multi'){ state[s.id]=[s.options[0].val]; }
      else if(s.type==='imgcards'){ state[s.id]=(s.options[1]||s.options[0]).val; }
    });
    state.missing='feedback'; state.sessions='2'; state.commit='all_in'; state.local='yes';
    state.phone='0493 447 438'; state.height='178'; state.weight='78';
    var i = STEPS.findIndex(function(s){return s.id===target});
    if(i<0) return;
    idx = i; render();
  }
  if(document.readyState==='complete') go(); else window.addEventListener('load',go);
})();
