import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
test('All four bugs emit capture-ready errors and reset cleanly',async()=>{
 const nodes=new Map(),errors=[];
 function element(){const classes=new Set();return {value:'',textContent:'',hidden:false,style:{},children:[],scrollWidth:520,clientWidth:375,classList:{toggle(k,on){if(on)classes.add(k);else classes.delete(k)},remove(k){classes.delete(k)},contains:k=>classes.has(k)},setAttribute(k,v){this[k]=v},removeAttribute(k){if(k==='style')this.style={}},prepend(node){this.children.unshift(node)},replaceChildren(){this.children=[]},append(node){this.children.push(node)}}}
 const get=id=>{if(!nodes.has(id))nodes.set(id,element());return nodes.get(id)};
 const document={querySelector:get,createElement:element,getElementById:()=>null,body:element()};
 const context={document,console:{error:e=>errors.push(String(e))},setTimeout:()=>0,clearTimeout(){},innerWidth:1440,innerHeight:900,Date};
 vm.runInNewContext(await readFile(new URL('../dist/app.js',import.meta.url),'utf8'),context);
 get('#apply-promo-btn').onclick();assert.match(errors.at(-1),/Demo API simulation/);assert.equal(get('#promo-error').hidden,false);
 get('#increase-quantity').onclick();assert.equal(get('#cart-total').textContent,'$NaN');assert.match(errors.at(-1),/discountMultiplier/);
 get('#shipping-address').onfocus();assert.equal(get('#shipping-address').style.color,'#ffffff');assert.match(errors.at(-1),/Contrast Failure/);
 get('#mobile-toggle').onclick();assert.equal(get('#checkout-card').classList.contains('mobile'),true);assert.match(errors.at(-1),/Horizontal overflow/);
 assert.equal(get('#events').children.length,4);
 get('#reset-demo').onclick();assert.equal(get('#cart-total').textContent,'$249.00');assert.equal(get('#events').children.length,0);assert.equal(get('#checkout-card').classList.contains('mobile'),false);
});
test('Overlay opens the existing VoiceTrace app and supports imported evidence',async()=>{const source=await readFile(new URL('../dist/overlay.js',import.meta.url),'utf8');assert.doesNotThrow(()=>new vm.Script(source));assert.ok(source.includes('https://ghostqa-voice-engine-deeks.toastygrape130.chatgpt.site'));for(const field of ['ext_url','ext_selector','ext_error','ext_rant','ext_viewport'])assert.ok(source.includes(field))});
