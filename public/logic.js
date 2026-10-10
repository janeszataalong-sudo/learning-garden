export const shuffle = (array, rng=Math.random) => {const result=[...array];for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;};
export const sum = values => values.reduce((a,b)=>a+b,0);
export function mathQuestion(level=1,rng=Math.random){const a=1+Math.floor(rng()*(level===1?9:20)),b=1+Math.floor(rng()*(level===1?9:10));const subtract=rng()>.5;const left=subtract?Math.max(a,b):a,right=subtract?Math.min(a,b):b;const answer=subtract?left-right:left+right;const options=shuffle([...new Set([answer,answer+1,Math.max(0,answer-1),answer+3,answer+2])].slice(0,4),rng);return {a:left,b:right,op:subtract?'−':'+',answer,options};}
export const mazes=[
  {walls:[6,7,8,13,16,18],start:20,goal:4},
  {walls:[1,6,8,11,13,18,21],start:20,goal:4},
  {walls:[3,6,8,11,13,16,18,21],start:24,goal:0}
];
export function moveRobot(position,direction,maze){const x=position%5,y=Math.floor(position/5);const [dx,dy]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[direction]||[0,0];const nx=x+dx,ny=y+dy,next=ny*5+nx;if(nx<0||nx>=5||ny<0||ny>=5||maze.walls.includes(next))return {position,blocked:true};return {position:next,blocked:false};}
export function runProgram(maze,commands){let position=maze.start;const path=[position];for(const direction of commands){const result=moveRobot(position,direction,maze);if(result.blocked)return {position,path,blocked:true,won:false};position=result.position;path.push(position);}return {position,path,blocked:false,won:position===maze.goal};}
export const words=[
 {word:'cat',th:'แมว',icon:'🐱'}, {word:'dog',th:'สุนัข',icon:'🐶'}, {word:'sun',th:'ดวงอาทิตย์',icon:'☀️'}, {word:'moon',th:'ดวงจันทร์',icon:'🌙'}, {word:'apple',th:'แอปเปิล',icon:'🍎'}, {word:'fish',th:'ปลา',icon:'🐟'}, {word:'tree',th:'ต้นไม้',icon:'🌳'}, {word:'bird',th:'นก',icon:'🐦'}, {word:'book',th:'หนังสือ',icon:'📖'}, {word:'car',th:'รถยนต์',icon:'🚗'}, {word:'flower',th:'ดอกไม้',icon:'🌼'}, {word:'banana',th:'กล้วย',icon:'🍌'}
];
export function memoryDeck(rng=Math.random){return shuffle(['🐱','🌼','🍎','🦋','🌙','🐸'].flatMap((value,pair)=>[{id:pair*2,pair,value},{id:pair*2+1,pair,value}]),rng);}
export function memoryMatch(deck,a,b){return a!==b&&deck[a]?.pair!==undefined&&deck[a].pair===deck[b]?.pair;}
export const experiments=[
 {th:'ถ้าปล่อยก้อนหินลงในน้ำ จะเกิดอะไรขึ้น?',en:'What happens when a stone is placed in water?',icon:'🪨',options:[['จม','It sinks'],['ลอย','It floats']],answer:0,explain:['ก้อนหินทั่วไปมีความหนาแน่นมากกว่าน้ำ จึงจมลง','An ordinary stone is denser than water, so it sinks.']},
 {th:'น้ำแข็งที่วางไว้ในห้องอุ่นจะเป็นอย่างไร?',en:'What happens to ice in a warm room?',icon:'🧊',options:[['ละลายเป็นน้ำ','It melts into water'],['กลายเป็นหิน','It becomes a stone']],answer:0,explain:['น้ำแข็งรับความร้อนแล้วเปลี่ยนเป็นน้ำ','Ice takes in heat and changes into liquid water.']},
 {th:'ต้นไม้ต้องการอะไรเพื่อเติบโต?',en:'What helps a plant grow?',icon:'🌱',options:[['แสงและน้ำ','Light and water'],['ขนมและน้ำอัดลม','Candy and soda']],answer:0,explain:['ต้นไม้ใช้แสงสร้างอาหาร และใช้น้ำในการเติบโต','Plants use light to make food and need water to grow.']},
 {th:'แม่เหล็กดึงดูดสิ่งไหน?',en:'Which object will a magnet attract?',icon:'🧲',options:[['คลิปเหล็ก','A steel paper clip'],['ช้อนไม้','A wooden spoon']],answer:0,explain:['แม่เหล็กดึงดูดเหล็ก แต่ไม่ดึงดูดไม้','A magnet attracts iron and steel, but not wood.']},
 {th:'ผสมสีแดงกับสีเหลือง จะได้สีอะไร?',en:'Mix red and yellow paint. What color do you get?',icon:'🎨',options:[['สีส้ม','Orange'],['สีม่วง','Purple']],answer:0,explain:['สีแดงกับสีเหลืองผสมกันเป็นสีส้ม','Red and yellow paint mix to make orange.']},
 {th:'เมื่อบังแสงไฟด้วยมือ จะเห็นอะไร?',en:'Put your hand in front of a light. What appears?',icon:'🔦',options:[['เงา','A shadow'],['เสียง','A sound']],answer:0,explain:['มือบังแสง ทำให้เกิดเงาด้านหลังมือ','Your hand blocks the light, creating a shadow behind it.']}
];
export const shapes={triangle:{symbol:'▲',th:'สามเหลี่ยม',en:'triangle'},square:{symbol:'■',th:'สี่เหลี่ยมจัตุรัส',en:'square'},circle:{symbol:'●',th:'วงกลม',en:'circle'},rectangle:{symbol:'▬',th:'สี่เหลี่ยมผืนผ้า',en:'rectangle'}};
export const builds=[{th:'บ้านหลังเล็ก',en:'A little house',icon:'🏠',pieces:['triangle','square','rectangle']},{th:'รถของเรา',en:'Our little car',icon:'🚗',pieces:['rectangle','square','circle','circle']},{th:'จรวดสำรวจ',en:'Explorer rocket',icon:'🚀',pieces:['triangle','rectangle','triangle','circle']},{th:'ต้นไม้',en:'A tree',icon:'🌳',pieces:['circle','circle','rectangle']}];
export const sameSequence=(a,b)=>a.length===b.length&&a.every((v,i)=>v===b[i]);
export const routines=[
 {th:'ล้างมือก่อนกินอาหาร',en:'Wash hands before eating',steps:[['เปิดน้ำให้มือเปียก','Wet your hands'],['ถูสบู่ให้ทั่วมือ','Rub soap all over your hands'],['ล้างสบู่ออก','Rinse off the soap'],['เช็ดมือให้แห้ง','Dry your hands']]},
 {th:'เตรียมตัวไปโรงเรียน',en:'Get ready for school',steps:[['ตื่นนอน','Wake up'],['ล้างหน้าและแปรงฟัน','Wash your face and brush your teeth'],['แต่งตัว','Get dressed'],['หยิบกระเป๋าแล้วออกจากบ้าน','Take your bag and leave home']]},
 {th:'ปลูกเมล็ดพันธุ์',en:'Plant a seed',steps:[['ใส่ดินในกระถาง','Put soil in a pot'],['วางเมล็ดแล้วกลบดิน','Plant the seed and cover it'],['รดน้ำเบา ๆ','Water gently'],['วางในที่มีแสง','Place it somewhere with light']]},
 {th:'เก็บของเล่น',en:'Tidy your toys',steps:[['หยุดเล่น','Finish playing'],['รวบรวมของเล่น','Gather the toys'],['ใส่ของเล่นในกล่อง','Put the toys in a box'],['วางกล่องบนชั้น','Put the box on the shelf']]}
];
export const shopItems=[{icon:'🍌',th:'กล้วย',en:'Banana',price:7},{icon:'🥛',th:'นม',en:'Milk',price:12},{icon:'📖',th:'สมุด',en:'Notebook',price:18},{icon:'🍎',th:'แอปเปิล',en:'Apple',price:15},{icon:'🧸',th:'ตุ๊กตา',en:'Teddy bear',price:35}];
export function paymentResult(price,coins){const total=sum(coins);return {total,exact:total===price,short:Math.max(0,price-total),change:Math.max(0,total-price)};}
export function clockAngles(hour,minute){return {hour:((hour%12)+minute/60)*30,minute:minute*6};}
export function clockMatches(hour,minute,target){return hour%12===target.hour%12&&minute===target.minute;}
const hourThai=['สิบสอง','หนึ่ง','สอง','สาม','สี่','ห้า','หก','เจ็ด','แปด','เก้า','สิบ','สิบเอ็ด'];
const hourEnglish=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven'];
export function clockWords(hour,minute,lang='th'){const h=hour%12;if(lang==='en'){return minute===0?`${hourEnglish[h]} o’clock`:minute===30?`half past ${hourEnglish[h]}`:minute===15?`quarter past ${hourEnglish[h]}`:minute===45?`quarter to ${hourEnglish[(h+1)%12]}`:`${hourEnglish[h]} and ${minute} minutes`;}return `${hourThai[h]}นาฬิกา${minute===0?'ตรง':minute===30?'ครึ่ง':minute===15?'สิบห้านาที':minute===45?'สี่สิบห้านาที':`${minute}นาที`}`;}
