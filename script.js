const listings = [
  { id: 'desk-01', title: 'IKEA desk in birch', category: 'Desks', price: 25, distance: 1.2, condition: 'Good condition', minutesAgo: 8, neighborhood: 'List · near Lister Platz', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=85', seller: 'Mara K.', sellerNote: 'Member since 2022 · usually replies quickly', rating: '★ 4.9', description: 'A sturdy, simple desk that has served me well through university. A few small marks on the top, but nothing that gets in the way. Easy to take apart for pickup.' },
  { id: 'chair-01', title: 'Vintage boucle armchair', category: 'Chairs', price: 40, distance: 2.4, condition: 'Very good condition', minutesAgo: 15, neighborhood: 'Oststadt · near Eilenriede', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85', seller: 'Jonas R.', sellerNote: 'Member since 2021 · 8 successful finds', rating: '★ 5.0', description: 'A cozy little reading chair in cream boucle. Still lovely and soft, with no stains. Selling because we are moving and our new place is already furnished.' },
  { id: 'table-01', title: 'Solid wood dining table', category: 'Tables', price: 60, distance: 3.1, condition: 'Good condition', minutesAgo: 22, neighborhood: 'Südstadt · by Stephansplatz', image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=900&q=85', seller: 'Leonie W.', sellerNote: 'Member since 2023 · verified email', rating: '★ 4.8', description: 'Warm-toned solid wood table with room for four. It has a few signs of everyday use and a lot of life left in it. 120 × 75 cm; legs unscrew for transport.' },
  { id: 'sofa-01', title: 'Small two-seat sofa', category: 'Sofas', price: 80, distance: 1.8, condition: 'Good condition', minutesAgo: 35, neighborhood: 'Nordstadt · near Christuskirche', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85', seller: 'Felix B.', sellerNote: 'Member since 2020 · usually replies in an hour', rating: '★ 4.9', description: 'Compact two-seater in a soft sage fabric, ideal for a smaller flat. Cushions come off for cleaning. No pets or smoking in the home.' },
  { id: 'storage-01', title: 'Tall pine bookshelf', category: 'Storage', price: 20, distance: 0.9, condition: 'Well loved', minutesAgo: 42, neighborhood: 'List · close to Moltkeplatz', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=85', seller: 'Nina S.', sellerNote: 'Member since 2024 · 3 successful finds', rating: '★ 4.7', description: 'A lightweight pine bookcase with five shelves. Some sun fading on one side, otherwise solid. I can help carry it downstairs.' },
  { id: 'bed-01', title: '140 cm bed frame', category: 'Beds', price: 50, distance: 4.2, condition: 'Very good condition', minutesAgo: 61, neighborhood: 'Linden-Mitte · near Küchengarten', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85', seller: 'David P.', sellerNote: 'Member since 2022 · verified phone', rating: '★ 4.8', description: 'Simple oak-effect bed frame for a 140 × 200 cm mattress. Slats included. Carefully disassembled and ready to collect this weekend.' },
  { id: 'chair-02', title: 'Pair of bentwood chairs', category: 'Chairs', price: 35, distance: 2.0, condition: 'Good condition', minutesAgo: 78, neighborhood: 'Calenberger Neustadt · near Ihme', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=85', seller: 'Emilia T.', sellerNote: 'Member since 2023 · usually replies quickly', rating: '★ 4.9', description: 'Two classic bentwood chairs with a lovely honey finish. A couple of little scuffs, but both are sturdy. Selling as a pair.' },
  { id: 'table-02', title: 'Round coffee table', category: 'Tables', price: 18, distance: 1.5, condition: 'Good condition', minutesAgo: 95, neighborhood: 'Vahrenwald · near Dragonerstraße', image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85', seller: 'Timo H.', sellerNote: 'Member since 2021 · 6 successful finds', rating: '★ 4.8', description: 'Small round coffee table in natural wood. Great for a first flat or a reading corner. About 70 cm across.' },
  { id: 'storage-02', title: 'Mid-century sideboard', category: 'Storage', price: 95, distance: 5.1, condition: 'Very good condition', minutesAgo: 128, neighborhood: 'Kleefeld · near Annabad', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85', seller: 'Greta L.', sellerNote: 'Member since 2020 · verified email', rating: '★ 5.0', description: 'A much-loved vintage sideboard with sliding doors and generous storage. Restored last year; a few charming age marks remain. 150 cm wide.' },
  { id: 'desk-02', title: 'Compact writing desk', category: 'Desks', price: 45, distance: 3.7, condition: 'Like new', minutesAgo: 164, neighborhood: 'Döhren · near Fiedelerplatz', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85', seller: 'Amir N.', sellerNote: 'Member since 2024 · usually replies quickly', rating: '★ 4.9', description: 'A neat little desk with one drawer, perfect for working from home without taking over the room. Bought last year; barely used.' },
  { id: 'sofa-02', title: 'Mustard lounge chair', category: 'Sofas', price: 55, distance: 2.8, condition: 'Good condition', minutesAgo: 212, neighborhood: 'Bult · close to Stadtpark', image: 'https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=900&q=85', seller: 'Clara F.', sellerNote: 'Member since 2022 · 5 successful finds', rating: '★ 4.8', description: 'A cheerful mustard accent chair with a deep, comfortable seat. Fabric is clean and in good shape; one small mark on the back.' },
  { id: 'storage-03', title: 'White 3-drawer dresser', category: 'Storage', price: 30, distance: 1.1, condition: 'Good condition', minutesAgo: 286, neighborhood: 'Oststadt · near Weißekreuzplatz', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85', seller: 'Lukas E.', sellerNote: 'Member since 2023 · verified phone', rating: '★ 4.7', description: 'Practical three-drawer dresser with smooth-running drawers. A few small marks on the sides. It is already taken apart and ready to go.' }
];

const categories = [
  { name: 'All', icon: '✳' }, { name: 'Sofas', icon: '⌂' }, { name: 'Tables', icon: '▤' },
  { name: 'Chairs', icon: '⌑' }, { name: 'Beds', icon: '▰' }, { name: 'Desks', icon: '▥' }, { name: 'Storage', icon: '▧' }
];
const grid = document.querySelector('#listing-grid');
const searchInput = document.querySelector('#search-input');
const sortSelect = document.querySelector('#sort-select');
const categoryList = document.querySelector('#category-list');
const favoritesToggle = document.querySelector('#favorites-toggle');
const emptyState = document.querySelector('#empty-state');
const endNote = document.querySelector('#end-note');
const resultsCount = document.querySelector('#results-count');
const detailDialog = document.querySelector('#detail-dialog');
const messageDialog = document.querySelector('#message-dialog');
const locationDialog = document.querySelector('#location-dialog');
const toast = document.querySelector('#toast');
let selectedCategory = 'All';
let showingFavorites = false;
let currentListingId = null;
let toastTimer;
let favorites = loadFavorites();

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem('furnifind-favorites') || '[]');
    return new Set(Array.isArray(saved) ? saved.filter((id) => listings.some((listing) => listing.id === id)) : []);
  } catch {
    return new Set();
  }
}
function saveFavorites() {
  try { localStorage.setItem('furnifind-favorites', JSON.stringify([...favorites])); }
  catch { showToast('Favorites will be remembered for this visit.'); }
  updateFavoritesCount();
}
function updateFavoritesCount() { document.querySelector('#saved-count').textContent = String(favorites.size); }
function renderCategories() {
  categoryList.innerHTML = categories.map(({ name, icon }) => `
    <button class="category-button" type="button" data-category="${name}" aria-pressed="${selectedCategory === name}">
      <span class="category-icon" aria-hidden="true">${icon}</span><span>${name}</span>
    </button>`).join('');
}
function visibleListings() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filtered = listings.filter((listing) => {
    const matchesCategory = selectedCategory === 'All' || listing.category === selectedCategory;
    const matchesQuery = !query || `${listing.title} ${listing.category} ${listing.description}`.toLocaleLowerCase().includes(query);
    const matchesFavorites = !showingFavorites || favorites.has(listing.id);
    return matchesCategory && matchesQuery && matchesFavorites;
  });
  return filtered.sort((a, b) => sortSelect.value === 'price' ? a.price - b.price : sortSelect.value === 'distance' ? a.distance - b.distance : a.minutesAgo - b.minutesAgo);
}
function imageMarkup(listing, detail = false) {
  const className = detail ? 'detail-photo' : 'listing-image';
  const symbol = listing.category === 'Chairs' ? '⌑' : listing.category === 'Beds' ? '▰' : '⌂';
  return `<img class="${className}" src="${listing.image}" alt="${escapeHtml(listing.title)}" loading="${detail ? 'eager' : 'lazy'}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className: 'image-fallback', role: 'img', ariaLabel: '${escapeHtml(listing.title)} photo unavailable', textContent: '${symbol}'}))">`;
}
function renderListings() {
  const shown = visibleListings();
  grid.innerHTML = shown.map((listing) => `
    <article class="listing-card">
      <button class="listing-open" type="button" data-open-listing="${listing.id}" aria-label="View ${escapeHtml(listing.title)}, €${listing.price}, ${listing.distance} kilometres away">
        <div class="listing-image-wrap">${imageMarkup(listing)}${listing.minutesAgo <= 45 ? `<span class="fresh-tag">${timeLabel(listing.minutesAgo)}</span>` : ''}</div>
        <div class="listing-info"><div class="listing-title-row"><h3 class="listing-title">${escapeHtml(listing.title)}</h3><span class="listing-price">€${listing.price}</span></div><p class="listing-condition">${escapeHtml(listing.condition)}</p>
          <div class="listing-meta"><span class="listing-distance"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>${listing.distance.toFixed(1)} km</span><span class="listing-time">${timeLabel(listing.minutesAgo)}</span></div>
        </div>
      </button>
      <button class="heart-button" type="button" data-favorite="${listing.id}" aria-label="${favorites.has(listing.id) ? 'Remove' : 'Save'} ${escapeHtml(listing.title)} ${favorites.has(listing.id) ? 'from' : 'to'} favorites" aria-pressed="${favorites.has(listing.id)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.2-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"/></svg></button>
    </article>`).join('');
  emptyState.hidden = shown.length > 0;
  grid.hidden = shown.length === 0;
  endNote.hidden = shown.length === 0;
  resultsCount.textContent = `${shown.length} ${shown.length === 1 ? 'find' : 'finds'}`;
  updateSectionHeading();
}
function updateSectionHeading() {
  const heading = document.querySelector('#listings-heading');
  const kicker = document.querySelector('#section-kicker');
  const badge = heading.querySelector('.new-badge');
  if (showingFavorites) {
    heading.firstChild.textContent = 'Your saved finds ';
    if (badge) badge.remove();
    kicker.innerHTML = '<span class="kicker-star">♥</span> YOUR SHORTLIST';
  } else if (selectedCategory !== 'All' || searchInput.value.trim()) {
    heading.firstChild.textContent = 'Finds for you ';
    if (badge) badge.remove();
    kicker.innerHTML = '<span class="kicker-star">⌕</span> YOUR SEARCH';
  } else {
    heading.firstChild.textContent = 'Just listed ';
    if (!heading.querySelector('.new-badge')) heading.insertAdjacentHTML('beforeend', '<span class="new-badge">NEW</span>');
    kicker.innerHTML = '<span class="kicker-star">✳</span> THE FRESH DROP';
  }
}
function timeLabel(minutes) {
  if (minutes < 60) return `Posted ${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  return `Posted ${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2300);
}
function toggleFavorite(id) {
  const listing = listings.find((item) => item.id === id);
  if (!listing) return;
  if (favorites.has(id)) { favorites.delete(id); showToast('Removed from your saved finds.'); }
  else { favorites.add(id); showToast('Saved for later. Good find!'); }
  saveFavorites();
  renderListings();
  if (currentListingId === id && detailDialog.open) renderDetail(listing);
}
function renderDetail(listing) {
  const saved = favorites.has(listing.id);
  document.querySelector('#detail-content').innerHTML = `
    <div class="detail-layout"><div class="detail-photo-wrap">${imageMarkup(listing, true)}</div><div class="detail-body">
      <button class="back-button" type="button" data-close="detail-dialog"><span aria-hidden="true">←</span> Back</button>
      <p class="dialog-eyebrow">${escapeHtml(listing.category.toUpperCase())} · ${timeLabel(listing.minutesAgo).toUpperCase()}</p>
      <div class="detail-title-line"><h2 id="detail-title">${escapeHtml(listing.title)}</h2></div><p class="detail-price">€${listing.price}</p>
      <div class="detail-facts"><span class="fact-pill">${escapeHtml(listing.condition)}</span><span class="fact-pill">${listing.distance.toFixed(1)} km away</span></div>
      <p class="detail-neighborhood"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>${escapeHtml(listing.neighborhood)}</p>
      <p class="detail-copy">${escapeHtml(listing.description)}</p>
      <div class="seller-block"><span class="seller-avatar" aria-hidden="true">${escapeHtml(listing.seller.charAt(0))}</span><div><div class="seller-name">${escapeHtml(listing.seller)}</div><div class="seller-note">${escapeHtml(listing.sellerNote)}</div></div><span class="seller-rating">${escapeHtml(listing.rating)}</span></div>
      <div class="detail-actions"><button class="primary-button" type="button" data-contact="${listing.id}">Contact seller <span aria-hidden="true">→</span></button><button class="save-detail" type="button" data-detail-favorite="${listing.id}" aria-pressed="${saved}">${saved ? '♥ Saved' : '♡ Save'}</button></div>
    </div></div>`;
}
function openDetail(id) {
  const listing = listings.find((item) => item.id === id);
  if (!listing) return;
  currentListingId = id;
  renderDetail(listing);
  detailDialog.showModal();
}
function openMessage(id) {
  const listing = listings.find((item) => item.id === id);
  if (!listing) return;
  detailDialog.close();
  document.querySelector('#message-content').innerHTML = `
    <p class="dialog-eyebrow">A QUICK HELLO</p><h2 id="message-title">Message ${escapeHtml(listing.seller.split(' ')[0])}</h2>
    <div class="message-recipient"><span class="seller-avatar" aria-hidden="true">${escapeHtml(listing.seller.charAt(0))}</span><p><strong>${escapeHtml(listing.title)}</strong><br>€${listing.price} · ${listing.distance.toFixed(1)} km away</p></div>
    <form id="message-form" data-listing="${listing.id}"><label class="field-label" for="message-text">Your message</label><textarea class="message-textarea" id="message-text" required maxlength="500">Hi ${escapeHtml(listing.seller.split(' ')[0])}, is this still available? I’d love to arrange a time to pick it up.</textarea><button class="primary-button full-button" type="submit">Send message <span aria-hidden="true">→</span></button></form>`;
  messageDialog.showModal();
}
function resetFilters() {
  selectedCategory = 'All';
  showingFavorites = false;
  searchInput.value = '';
  sortSelect.value = 'newest';
  favoritesToggle.setAttribute('aria-pressed', 'false');
  renderCategories();
  renderListings();
}

categoryList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  selectedCategory = button.dataset.category;
  showingFavorites = false;
  favoritesToggle.setAttribute('aria-pressed', 'false');
  renderCategories();
  renderListings();
});
grid.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) { event.stopPropagation(); toggleFavorite(favoriteButton.dataset.favorite); return; }
  const openButton = event.target.closest('[data-open-listing]');
  if (openButton) openDetail(openButton.dataset.openListing);
});
document.querySelector('#detail-content').addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('[data-detail-favorite]');
  const contactButton = event.target.closest('[data-contact]');
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.detailFavorite);
  if (contactButton) openMessage(contactButton.dataset.contact);
});
document.querySelector('#message-content').addEventListener('submit', (event) => {
  if (event.target.id !== 'message-form') return;
  event.preventDefault();
  const listing = listings.find((item) => item.id === event.target.dataset.listing);
  if (!listing) return;
  document.querySelector('#message-content').innerHTML = `
    <div class="message-success"><span class="success-mark" aria-hidden="true">✓</span><p class="dialog-eyebrow">MESSAGE SENT</p><h2 id="message-title">You’re on your way.</h2><p>Your note to ${escapeHtml(listing.seller.split(' ')[0])} is ready. They’ll be in touch about the ${escapeHtml(listing.title.toLowerCase())}.</p><button class="primary-button full-button" type="button" data-close="message-dialog">Back to finds</button></div>`;
});
document.addEventListener('click', (event) => {
  const closeButton = event.target.closest('[data-close]');
  if (closeButton) document.getElementById(closeButton.dataset.close).close();
});
searchInput.addEventListener('input', () => {
  showingFavorites = false;
  favoritesToggle.setAttribute('aria-pressed', 'false');
  renderListings();
});
sortSelect.addEventListener('change', renderListings);
favoritesToggle.addEventListener('click', () => {
  showingFavorites = !showingFavorites;
  favoritesToggle.setAttribute('aria-pressed', String(showingFavorites));
  renderListings();
  document.querySelector('#listings-heading').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelector('#clear-filters').addEventListener('click', resetFilters);
document.querySelector('#location-button').addEventListener('click', () => locationDialog.showModal());
document.querySelector('#location-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const newLocation = document.querySelector('#location-input').value.trim();
  if (!newLocation) return;
  document.querySelector('#location-label').textContent = newLocation;
  locationDialog.close();
  showToast(`Looking for finds near ${newLocation}.`);
});
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { event.currentTarget.value = ''; renderListings(); }
});
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchInput.focus(); }
});
renderCategories();
updateFavoritesCount();
renderListings();