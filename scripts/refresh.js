const fs = require('fs');
const path = require('path');
function pickByDay(list){const start=new Date('2025-01-01T00:00:00Z');const today=new Date();const diff=Math.floor((today-start)/(1000*60*60*24));return list[diff%list.length];}
function loadJSON(p){return JSON.parse(fs.readFileSync(path.join(__dirname,'..',p),'utf8'));}
const quotes=loadJSON('src/data/quotes.json'); const affs=loadJSON('src/data/affirmations.json'); const cels=loadJSON('src/data/celebrations.json');
const payload={updatedAt:new Date().toISOString(),quote:pickByDay(quotes),affirmation:pickByDay(affs),celebration:pickByDay(cels)};
fs.writeFileSync(path.join(__dirname,'..','src/data/daily.json'), JSON.stringify(payload,null,2));
console.log('Daily content refreshed:', payload);
