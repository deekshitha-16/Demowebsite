'use strict';
const $=selector=>document.querySelector(selector);
let quantity=1,toastTimer;
function toast(message){const el=$('#toast');el.textContent=message;el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.hidden=true,4000);}
$('#apply-promo-btn').onclick=()=>{const code=$('#promo-code').value.trim();if(!code){$('#promo-error').textContent='Please enter a promo code.';$('#promo-error').hidden=false;return}$('#promo-error').textContent='We couldn’t apply that code. Please try again.';$('#promo-error').hidden=false;console.error('FetchError: 500 Internal Server Error at POST /api/v1/cart/promo (PromoDatabasePoolTimeout: Connection terminated unexpectedly after 5000ms). Code: '+code);};
function updateQuantity(){$('#quantity').value=quantity;$('#subtotal').textContent='$'+(249*quantity).toFixed(2);$('#cart-total').textContent=quantity>=2?'$NaN':'$249.00';if(quantity>=2){try{const discount=undefined;const total=249*quantity*discount.discountMultiplier;$('#cart-total').textContent='$'+total;}catch(error){console.error(error.name+': '+error.message+' at calculateCartTotal (app.js)');}}}
$('#increase-quantity').onclick=()=>{quantity++;updateQuantity();};
$('#decrease-quantity').onclick=()=>{quantity=Math.max(1,quantity-1);updateQuantity();};
$('#shipping-address').onfocus=()=>{const input=$('#shipping-address');input.style.color='#ffffff';input.style.backgroundColor='#ffffff';console.error('[A11y Audit] WCAG AA Contrast Failure (Ratio 1.0:1) on input#shipping-address: foreground #FFFFFF on background #FFFFFF');};
let wasMobile=false;
function updateViewport(){const mobile=innerWidth<=600;$('#checkout-card').classList.toggle('mobile',mobile);if(mobile&&!wasMobile){console.error('[LayoutShift] Horizontal overflow detected on div.checkout-cta-row: scrollWidth ('+$('#checkout-cta-row').scrollWidth+'px) > clientWidth ('+$('#checkout-card').clientWidth+'px) at viewport '+innerWidth+'x'+innerHeight);}wasMobile=mobile;}
window.addEventListener('resize',updateViewport);updateViewport();
$('#purchase-button').onclick=()=>toast('Checkout is currently unavailable. Please try again later.');
