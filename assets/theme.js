/* Full interactive JS extracted from the provided Webside.html */
(function(){
  const defaultConfig = {
    store_name: 'UrbanNest',
    tagline: 'Kitchen & Dining',
    hero_title: 'Elevate Your Culinary Space',
    hero_subtitle: 'Discover premium kitchen essentials crafted for the modern UAE home. From artisan cookware to elegant dining sets.',
    promo_text: '🎉 FREE DELIVERY on orders over AED 200 | Use code: URBAN20 for 20% OFF',
    background_color: '#F8F5F0',
    surface_color: '#FFFFFF',
    text_color: '#2D2D2D',
    primary_action_color: '#B87333',
    secondary_action_color: '#8B9A7D',
    font_family: 'Plus Jakarta Sans',
    font_size: 16
  };

  const products = [
    { id: 1, name: 'Premium Copper Cookware Set', price: 1299, originalPrice: 1599, category: 'cookware', badge: 'Best Seller', rating: 4.9, reviews: 128, isNew: false, icon: 'pot' },
    { id: 2, name: 'Smart Air Fryer Pro', price: 549, originalPrice: 699, category: 'appliances', badge: 'Sale', rating: 4.8, reviews: 256, isNew: false, icon: 'airfryer' },
    { id: 3, name: 'Artisan Knife Collection', price: 899, originalPrice: null, category: 'accessories', badge: null, rating: 5.0, reviews: 89, isNew: true, icon: 'knife' },
    { id: 4, name: 'Marble Dining Set (6pc)', price: 1899, originalPrice: 2299, category: 'dining', badge: 'Sale', rating: 4.7, reviews: 45, isNew: false, icon: 'plate' },
    { id: 5, name: 'Espresso Machine Deluxe', price: 2499, originalPrice: null, category: 'appliances', badge: 'Premium', rating: 4.9, reviews: 167, isNew: false, icon: 'coffee' },
    { id: 6, name: 'Bamboo Utensil Organizer', price: 149, originalPrice: 199, category: 'accessories', badge: 'Eco', rating: 4.6, reviews: 312, isNew: false, icon: 'utensils' },
    { id: 7, name: 'Crystal Wine Glass Set', price: 399, originalPrice: null, category: 'dining', badge: null, rating: 4.8, reviews: 78, isNew: true, icon: 'wine' },
    { id: 8, name: 'Digital Kitchen Scale', price: 89, originalPrice: 129, category: 'accessories', badge: 'Sale', rating: 4.5, reviews: 423, isNew: false, icon: 'scale' },
    { id: 9, name: 'Cast Iron Dutch Oven', price: 449, originalPrice: null, category: 'cookware', badge: "Chef's Pick", rating: 4.9, reviews: 198, isNew: false, icon: 'dutch' },
    { id: 10, name: 'Stainless Steel Mixing Bowls', price: 199, originalPrice: 249, category: 'accessories', badge: null, rating: 4.7, reviews: 156, isNew: false, icon: 'bowl' },
    { id: 11, name: 'Smart Blender 1200W', price: 699, originalPrice: 899, category: 'appliances', badge: 'New', rating: 4.8, reviews: 87, isNew: true, icon: 'blender' },
    { id: 12, name: 'Japanese Tea Set', price: 349, originalPrice: null, category: 'dining', badge: 'Artisan', rating: 5.0, reviews: 34, isNew: true, icon: 'tea' },
    { id: 13, name: 'Non-Stick Frying Pan Set', price: 299, originalPrice: 399, category: 'cookware', badge: 'Sale', rating: 4.6, reviews: 267, isNew: false, icon: 'pan' },
    { id: 14, name: 'Electric Kettle Rose Gold', price: 179, originalPrice: null, category: 'appliances', badge: null, rating: 4.7, reviews: 189, isNew: false, icon: 'kettle' },
    { id: 15, name: 'Ceramic Dinnerware (12pc)', price: 599, originalPrice: 749, category: 'dining', badge: 'Popular', rating: 4.8, reviews: 145, isNew: false, icon: 'dinner' },
    { id: 16, name: 'Silicone Baking Mat Set', price: 79, originalPrice: null, category: 'accessories', badge: null, rating: 4.5, reviews: 534, isNew: false, icon: 'mat' },
    { id: 17, name: 'Food Processor 1000W', price: 799, originalPrice: 999, category: 'appliances', badge: 'Sale', rating: 4.7, reviews: 112, isNew: false, icon: 'processor' },
    { id: 18, name: 'Cocktail Shaker Kit', price: 249, originalPrice: null, category: 'dining', badge: 'Bar', rating: 4.9, reviews: 67, isNew: true, icon: 'shaker' },
    { id: 19, name: 'Herb Garden Planter', price: 129, originalPrice: 169, category: 'accessories', badge: 'Eco', rating: 4.4, reviews: 89, isNew: false, icon: 'plant' },
    { id: 20, name: 'Pressure Cooker 6L', price: 549, originalPrice: null, category: 'appliances', badge: null, rating: 4.8, reviews: 234, isNew: false, icon: 'pressure' }
  ];

  let cart = [];
  let wishlist = [];
  let currentCategory = 'all';
  let currentSort = 'featured';
  let currentProductId = null;

  function getProductIcon(iconType) {
    const icons = {
      pot: `<svg viewBox="0 0 100 100" class="w-full h-full"><ellipse cx="50" cy="60" rx="35" ry="15" fill="#B87333"/><rect x="15" y="35" width="70" height="25" fill="#B87333"/><ellipse cx="50" cy="35" rx="35" ry="12" fill="#C98343"/><rect x="5" y="42" width="12" height="8" rx="2" fill="#2D2D2D"/><rect x="83" y="42" width="12" height="8" rx="2" fill="#2D2D2D"/><path d="M35 25 Q40 15 35 5" stroke="#E8E0D5" stroke-width="3" fill="none" opacity="0.5"/><path d="M50 22 Q55 12 50 2" stroke="#E8E0D5" stroke-width="3" fill="none" opacity="0.5"/><path d="M65 25 Q70 15 65 5" stroke="#E8E0D5" stroke-width="3" fill="none" opacity="0.5"/></svg>`,
      airfryer: `<svg viewBox="0 0 100 100" class="w-full h-full"><rect x="20" y="15" width="60" height="70" rx="8" fill="#2D2D2D"/><rect x="28" y="25" width="44" height="35" rx="4" fill="#3D3D3D"/><circle cx="50" cy="42" r="12" fill="#B87333" opacity="0.3"/><rect x="35" y="68" width="30" height="8" rx="2" fill="#B87333"/><circle cx="70" cy="75" r="3" fill="#8B9A7D"/></svg>`,
      pot: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#B87333"/></svg>`
    };
    return icons[iconType] || icons.pot;
  }

  function renderProductCard(product, isFeatured = false) {
    const isInWishlist = wishlist.includes(product.id);
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    return `
      <div class="product-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${isFeatured ? 'animate-fade-in-up' : ''}">
        <div class="relative aspect-square bg-gradient-to-br from-brand-sand/50 to-brand-cream p-6 overflow-hidden">
          <div class="product-image transition-transform duration-500 h-full flex items-center justify-center">
            ${getProductIcon(product.icon)}
          </div>
          ${product.badge ? `<span class="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-brand-copper text-white">${product.badge}</span>` : ''}
          ${discount > 0 ? `<span class="absolute top-3 right-3 px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full">-${discount}%</span>` : ''}
          <button onclick="toggleWishlist(${product.id})" class="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-copper hover:text-white transition-colors ${isInWishlist ? 'bg-brand-copper text-white' : ''}">
            <i data-lucide="heart" class="w-4 h-4"></i>
          </button>
          <button onclick="addToCart(${product.id})" class="quick-add absolute bottom-3 left-3 right-3 py-2.5 bg-brand-charcoal text-white text-sm font-semibold rounded-lg opacity-0 transform translate-y-2 transition-all duration-300 hover:bg-brand-copper">
            Add to Cart
          </button>
        </div>
        <div class="p-4">
          <div class="flex items-center gap-1 mb-2">
            <i data-lucide="star" class="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
            <span class="text-sm font-medium">${product.rating}</span>
            <span class="text-xs text-gray-400">(${product.reviews})</span>
          </div>
          <h4 onclick="viewProduct(${product.id})" class="font-semibold text-brand-charcoal mb-2 cursor-pointer hover:text-brand-copper transition-colors line-clamp-2">${product.name}</h4>
          <div class="flex items-center gap-2">
            <span class="text-lg font-bold text-brand-copper">AED ${product.price}</span>
            ${product.originalPrice ? `<span class="text-sm text-gray-400 line-through">AED ${product.originalPrice}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  function renderProducts(container, productList, isFeatured = false) {
    const el = document.getElementById(container);
    if (el) {
      el.innerHTML = productList.map(p => renderProductCard(p, isFeatured)).join('');
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    }
  }

  function navigateTo(page) {
    const pages = ['home', 'shop', 'product', 'cart', 'wishlist', 'about'];
    pages.forEach(p => {
      const el = document.getElementById(`page-${p}`);
      if (el) el.classList.add('hidden');
    });
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
      targetPage.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (page === 'shop') {
      renderProducts('shop-products', getFilteredProducts());
      updateProductCount();
    } else if (page === 'cart') {
      renderCart();
    } else if (page === 'wishlist') {
      renderWishlist();
    } else if (page === 'home') {
      renderProducts('featured-products', products.slice(0, 8), true);
    }
  }

  function filterByCategory(category) {
    currentCategory = category;
    navigateTo('shop');
    document.querySelectorAll('.category-btn').forEach(btn => {
      if (btn.dataset.category === category) {
        btn.classList.remove('bg-white', 'text-brand-charcoal', 'border', 'border-brand-sand');
        btn.classList.add('bg-brand-charcoal', 'text-white');
      } else {
        btn.classList.add('bg-white', 'text-brand-charcoal', 'border', 'border-brand-sand');
        btn.classList.remove('bg-brand-charcoal', 'text-white');
      }
    });
    const titles = { all: 'All Products', appliances: 'Kitchen Appliances', accessories: 'Kitchen Accessories', dining: 'Dining & Bar', cookware: 'Cookware', new: 'New Arrivals' };
    const shopTitleEl = document.getElementById('shop-title');
    if (shopTitleEl) shopTitleEl.textContent = titles[category] || 'All Products';
  }

  function getFilteredProducts() {
    let filtered = [...products];
    if (currentCategory !== 'all') {
      if (currentCategory === 'new') filtered = filtered.filter(p => p.isNew);
      else filtered = filtered.filter(p => p.category === currentCategory);
    }
    switch (currentSort) {
      case 'price-low': filtered.sort((a,b)=>a.price-b.price); break;
      case 'price-high': filtered.sort((a,b)=>b.price-a.price); break;
      case 'newest': filtered.sort((a,b)=>b.isNew-a.isNew); break;
    }
    return filtered;
  }

  function sortProducts(sortBy) { currentSort = sortBy; renderProducts('shop-products', getFilteredProducts()); }
  function updateProductCount() { const filtered = getFilteredProducts(); const el = document.getElementById('product-count'); if (el) el.textContent = `Showing ${filtered.length} products`; }
  function toggleSearch(){ const s=document.getElementById('search-bar'); if(!s) return; s.classList.toggle('hidden'); const i=document.getElementById('search-input'); if(i&&!s.classList.contains('hidden')) i.focus(); }
  function handleSearch(q){ if(q.length>2){ const f=products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())); navigateTo('shop'); renderProducts('shop-products',f); const st=document.getElementById('shop-title'); if(st) st.textContent=`Search: \"${q}\"`; const pc=document.getElementById('product-count'); if(pc) pc.textContent=`Found ${f.length} products`; } }
  function toggleMobileMenu(){ const m=document.getElementById('mobile-menu'); if(m) m.classList.toggle('hidden'); }

  function addToCart(productId){ const existing=cart.find(i=>i.id===productId); if(existing) existing.quantity++; else cart.push({id:productId,quantity:1}); updateCartCount(); showToast('Added to cart!'); }
  function removeFromCart(productId){ cart=cart.filter(i=>i.id!==productId); updateCartCount(); renderCart(); }
  function updateCartQuantity(productId,delta){ const item=cart.find(i=>i.id===productId); if(item){ item.quantity+=delta; if(item.quantity<=0) removeFromCart(productId); else renderCart(); } }
  function updateCartCount(){ const count=cart.reduce((s,i)=>s+i.quantity,0); const el=document.getElementById('cart-count'); if(el) el.textContent=count; }

  function renderCart(){ const container=document.getElementById('cart-content'); if(!container) return; if(cart.length===0){ container.innerHTML = `<div class="text-center py-16"><div class="w-24 h-24 mx-auto mb-6 bg-brand-sand rounded-full flex items-center justify-center"><i data-lucide="shopping-bag" class="w-12 h-12 text-gray-400"></i></div><h3 class="text-xl font-semibold text-brand-charcoal mb-2">Your cart is empty</h3><p class="text-gray-500 mb-6">Looks like you haven't added anything yet.</p><button onclick="navigateTo('shop')" class="px-6 py-3 bg-brand-copper text-white font-semibold rounded-lg hover:bg-brand-copper/90 transition-colors">Start Shopping</button></div>`; if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons(); return; }
    const cartItems = cart.map(item => { const p = products.find(p=>p.id===item.id); return {...p, quantity: item.quantity}; });
    const subtotal = cartItems.reduce((s,i)=>s+i.price*i.quantity,0);
    const shipping = subtotal >= 200 ? 0 : 25;
    const total = subtotal + shipping;
    container.innerHTML = `<div class="space-y-4 mb-8">${cartItems.map(item=>`<div class="flex gap-4 bg-white p-4 rounded-xl shadow-sm"><div class="w-24 h-24 bg-brand-sand rounded-lg flex items-center justify-center flex-shrink-0 p-2">${getProductIcon(item.icon)}</div><div class="flex-1"><h4 class="font-semibold text-brand-charcoal mb-1">${item.name}</h4><p class="text-brand-copper font-bold">AED ${item.price}</p><div class="flex items-center gap-3 mt-2"><button onclick="updateCartQuantity(${item.id}, -1)" class="w-8 h-8 bg-brand-sand rounded-full flex items-center justify-center hover:bg-brand-copper hover:text-white transition-colors"><i data-lucide="minus" class="w-4 h-4"></i></button><span class="font-semibold">${item.quantity}</span><button onclick="updateCartQuantity(${item.id}, 1)" class="w-8 h-8 bg-brand-sand rounded-full flex items-center justify-center hover:bg-brand-copper hover:text-white transition-colors"><i data-lucide="plus" class="w-4 h-4"></i></button></div></div><button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 transition-colors"><i data-lucide="trash-2" class="w-5 h-5"></i></button></div>`).join('')}</div><div class="bg-white rounded-xl p-6 shadow-sm"><h3 class="font-semibold text-brand-charcoal mb-4">Order Summary</h3><div class="space-y-2 mb-4"><div class="flex justify-between text-gray-600"><span>Subtotal</span><span>AED ${subtotal}</span></div><div class="flex justify-between text-gray-600"><span>Shipping</span><span>${shipping===0?'FREE':`AED ${shipping}`}</span></div>${shipping>0?`<p class="text-xs text-brand-copper">Add AED ${200-subtotal} more for free shipping!</p>`:''}</div><div class="border-t border-brand-sand pt-4 mb-6"><div class="flex justify-between text-lg font-bold text-brand-charcoal"><span>Total</span><span>AED ${total}</span></div></div><button onclick="showToast('Checkout coming soon!')" class="w-full py-4 bg-brand-charcoal text-white font-semibold rounded-lg hover:bg-brand-copper transition-colors">Proceed to Checkout</button></div>`; if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons(); }

  function toggleWishlist(productId){ const i=wishlist.indexOf(productId); if(i>-1){ wishlist.splice(i,1); showToast('Removed from wishlist'); } else { wishlist.push(productId); showToast('Added to wishlist!'); } updateWishlistCount(); const currentPage=document.querySelector('[id^="page-"]:not(.hidden)'); if(currentPage){ if(currentPage.id==='page-home') renderProducts('featured-products', products.slice(0,8), true); else if(currentPage.id==='page-shop') renderProducts('shop-products', getFilteredProducts()); else if(currentPage.id==='page-wishlist') renderWishlist(); } }
  function updateWishlistCount(){ const el=document.getElementById('wishlist-count'); if(!el) return; if(wishlist.length>0){ el.textContent=wishlist.length; el.classList.remove('hidden'); } else el.classList.add('hidden'); }
  function renderWishlist(){ const container=document.getElementById('wishlist-content'); if(!container) return; if(wishlist.length===0){ container.innerHTML=`<div class="text-center py-16"><div class="w-24 h-24 mx-auto mb-6 bg-brand-sand rounded-full flex items-center justify-center"><i data-lucide="heart" class="w-12 h-12 text-gray-400"></i></div><h3 class="text-xl font-semibold text-brand-charcoal mb-2">Your wishlist is empty</h3><p class="text-gray-500 mb-6">Save items you love for later.</p><button onclick="navigateTo('shop')" class="px-6 py-3 bg-brand-copper text-white font-semibold rounded-lg hover:bg-brand-copper/90 transition-colors">Browse Products</button></div>`; if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons(); return; } const wishlistProducts=products.filter(p=>wishlist.includes(p.id)); container.innerHTML=`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">${wishlistProducts.map(p=>renderProductCard(p)).join('')}</div>`; if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons(); }

  function viewProduct(productId){ currentProductId=productId; const product=products.find(p=>p.id===productId); if(!product) return; const container=document.getElementById('product-detail-content'); if(!container) return; const isInWishlist=wishlist.includes(product.id); container.innerHTML=`<div class="grid md:grid-cols-2 gap-12"><div class="bg-gradient-to-br from-brand-sand/50 to-brand-cream rounded-2xl p-12 flex items-center justify-center"><div class="w-64 h-64">${getProductIcon(product.icon)}</div></div><div>${product.badge?`<span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-brand-copper text-white mb-4">${product.badge}</span>`:''}<h1 class="text-3xl font-display font-bold text-brand-charcoal mb-4">${product.name}</h1><div class="flex items-center gap-4 mb-6"><div class="flex items-center gap-1"><i data-lucide="star" class="w-5 h-5 text-yellow-400 fill-yellow-400"></i><span class="font-semibold">${product.rating}</span><span class="text-gray-500">(${product.reviews} reviews)</span></div><span class="text-gray-300">|</span><span class="text-brand-sage font-medium">In Stock</span></div><div class="flex items-center gap-4 mb-6"><span class="text-3xl font-bold text-brand-copper">AED ${product.price}</span>${product.originalPrice?`<span class="text-xl text-gray-400 line-through">AED ${product.originalPrice}</span>`:''}</div><p class="text-gray-600 mb-8">Premium quality ${product.name.toLowerCase()} designed for the modern kitchen. Perfect for everyday cooking and entertaining guests. Made with high-quality materials for lasting durability.</p><div class="flex gap-4 mb-8"><button onclick="addToCart(${product.id})" class="flex-1 py-4 bg-brand-charcoal text-white font-semibold rounded-lg hover:bg-brand-copper transition-colors flex items-center justify-center gap-2"><i data-lucide="shopping-bag" class="w-5 h-5"></i>Add to Cart</button><button onclick="toggleWishlist(${product.id})" class="w-14 h-14 border-2 border-brand-sand rounded-lg flex items-center justify-center hover:border-brand-copper transition-colors ${isInWishlist?'bg-brand-copper border-brand-copper text-white':''}"><i data-lucide="heart" class="w-6 h-6 ${isInWishlist?'fill-current':''}"></i></button></div><div class="space-y-3 text-sm"><div class="flex items-center gap-3 text-gray-600"><i data-lucide="truck" class="w-5 h-5 text-brand-copper"></i><span>Free delivery on orders over AED 200</span></div><div class="flex items-center gap-3 text-gray-600"><i data-lucide="refresh-cw" class="w-5 h-5 text-brand-copper"></i><span>30-day easy returns</span></div><div class="flex items-center gap-3 text-gray-600"><i data-lucide="shield-check" class="w-5 h-5 text-brand-copper"></i><span>1 year warranty included</span></div></div></div></div>`; navigateTo('product'); if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons(); }

  function showToast(message){ const toast=document.getElementById('toast'); const toastMessage=document.getElementById('toast-message'); if(!toast||!toastMessage) return; toastMessage.textContent=message; toast.classList.remove('translate-y-20','opacity-0'); setTimeout(()=>{ toast.classList.add('translate-y-20','opacity-0'); },2500); }
  function updateCountdown(){ const now=new Date(); const endDate=new Date(now.getTime()+3*24*60*60*1000+12*60*60*1000+45*60*1000); const diff=endDate-now; const days=Math.floor(diff/(1000*60*60*24)); const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60)); const mins=Math.floor((diff%(1000*60*60))/(1000*60)); const secs=Math.floor((diff%(1000*60))/1000); const dEl=document.getElementById('countdown-days'); const hEl=document.getElementById('countdown-hours'); const mEl=document.getElementById('countdown-mins'); const sEl=document.getElementById('countdown-secs'); if(dEl) dEl.textContent=String(days).padStart(2,'0'); if(hEl) hEl.textContent=String(hours).padStart(2,'0'); if(mEl) mEl.textContent=String(mins).padStart(2,'0'); if(sEl) sEl.textContent=String(secs).padStart(2,'0'); }

  document.addEventListener('DOMContentLoaded',function(){ const featured=document.getElementById('featured-products'); if(featured) featured.innerHTML=products.slice(0,8).map(p=>(`<div class="product-card bg-white p-4 rounded-xl"><h4 class="font-semibold">${p.name}</h4><div class="text-brand-copper font-bold">AED ${p.price}</div></div>`)).join(''); if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons(); updateCountdown(); setInterval(updateCountdown,1000); });

  window.navigateTo=navigateTo; window.filterByCategory=filterByCategory; window.sortProducts=sortProducts; window.addToCart=addToCart; window.toggleSearch=toggleSearch; window.handleSearch=handleSearch; window.toggleMobileMenu=toggleMobileMenu; window.toggleWishlist=toggleWishlist; window.viewProduct=viewProduct; window.updateCartQuantity=updateCartQuantity; window.removeFromCart=removeFromCart; window.renderCart=renderCart; window.renderWishlist=renderWishlist; window.showToast=showToast;
})();
