/** Lmao you think this wouldn't be changed **/
var app=new function(){this.name="Laboratory",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=6857,this.bpm=140,this.totalframe=328,this.nbpolo=7,this.nbloopbonus=4,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=42,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#000000",this.col0="#000000",this.col1="#00d5ff",this.col2="#000000",this.col3="#000000",this.col4="#000000",this.animearray=[{name:"1_guard",color:"8dfff7",uniqsnd:!0},{name:"2_juggernaut",color:"8dfff7",uniqsnd:!0},{name:"3_scout",color:"8dfff7",uniqsnd:!0},{name:"4_nightguard",color:"8dfff7",uniqsnd:!0},{name:"5_gunner",color:"8dfff7",uniqsnd:!0},{name:"6_oil_digger",color:"e32fbc",uniqsnd:!1},{name:"7_flesh_leaves",color:"e32fbc",uniqsnd:!0},{name:"8_john",color:"e32fbc",uniqsnd:!1},{name:"9_alarm",color:"e32fbc",uniqsnd:!0},{name:"10_x-ray",color:"e32fbc",uniqsnd:!0},{name:"11_escapee",color:"b10500",uniqsnd:!1},{name:"12_mineral",color:"b10500",uniqsnd:!1},{name:"13_cloak",color:"b10500",uniqsnd:!1},{name:"14_clone",color:"b10500",uniqsnd:!1},{name:"15_right_hand",color:"b10500",uniqsnd:!1},{name:"16_infiltrator",color:"080051",uniqsnd:!1},{name:"17_burned",color:"080051",uniqsnd:!1},{name:"18_deserter",color:"080051",uniqsnd:!1},{name:"19_explorer",color:"080051",uniqsnd:!1},{name:"20_engineer",color:"080051",uniqsnd:!1}],this.bonusarray=[{name:"Infiltration",src:"v1-Infiltration-b1.mp4",code:"1,2,6,11,16",sound:"Infiltration",aspire:"Infiltration_aspire"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};