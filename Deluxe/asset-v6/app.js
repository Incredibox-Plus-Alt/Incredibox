/* 0.4.6 2019-12-16 15:29:28 */
var app=new function(){this.name="Alive",this.version="6",this.date="2018",this.folder="asset-v6/",this.looptime=7110,this.totalframe=342,this.nbpolo=7,this.nbloopbonus=3,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=26,this.recminloop=3,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.sndmetronome="-metronome.wav",this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#120521",this.col0="#a07dfa",this.col1="#825fd2",this.col2="#5f3ca0",this.col3="#371464",this.col4="#230a41",this.animearray=[{name:"1_kick",color:"BCC0D3",uniqsnd:!0},{name:"2_snare",color:"BCC0D3",uniqsnd:!0},{name:"3_kanye",color:"BCC0D3",uniqsnd:!0},{name:"4_tuctuc",color:"BCC0D3",uniqsnd:!0},{name:"5_break",color:"BCC0D3",uniqsnd:!0},{name:"6_cribasse",color:"BF56EA",uniqsnd:!0},{name:"7_distotut",color:"BF56EA",uniqsnd:!0},{name:"8_screw",color:"BF56EA",uniqsnd:!0},{name:"9_shaolin",color:"BF56EA",uniqsnd:!0},{name:"10_shower",color:"BF56EA",uniqsnd:!0},{name:"11_basse",color:"B22519",uniqsnd:!0},{name:"12_hou",color:"B22519",uniqsnd:!0},{name:"13_clav",color:"B22519",uniqsnd:!0},{name:"14_synth",color:"B22519",uniqsnd:!0},{name:"15_yah",color:"B22519",uniqsnd:!0},{name:"16_hurry",color:"4C09A4",uniqsnd:!0},{name:"17_good",color:"4C09A4",uniqsnd:!0},{name:"18_mind",color:"4C09A4",uniqsnd:!0},{name:"19_haha",color:"4C09A4",uniqsnd:!0},{name:"20_wow",color:"4C09A4",uniqsnd:!0}],this.bonusarray=[{name:"Alive",src:"v6-b1-alive-hb.mp4",code:"4,6,8,14,17",sound:"bonus-alive",aspire:"aspire-alive"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var s=this.animearray[n].name;this.animearray[n].soundA=s+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?s+"_a":s+"_b",this.animearray[n].anime=s+"-sprite.png",this.animearray[n].animeData=s+".json"}};