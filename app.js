// THEFARAWAYTRAILS - Keralam Expeditions & Journeys

const KERALAM_EXPEDITIONS = [
  {
    id: 'exp-1',
    title: 'Munnar Tea Hills & Anamudi Ridge Trek',
    category: 'mountain',
    location: 'Munnar, Idukki District',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate',
    rating: 4.96,
    reviewsCount: 142,
    price: 450,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80',
    description: 'Hike through emerald tea estates, cloud forests, and high-altitude grasslands near Keralam’s highest peak.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Munnar & Top Station Sunset Walk', desc: 'Transfer through gap road viewpoints, welcome at eco-lodge, and evening walk through high-altitude tea gardens.' },
      { day: 'Day 2', title: 'Meesapulimala / Rhodo Valley Trek', desc: 'Pre-dawn summit hike through rhododendron forests and rolling grasslands along Keralam mountain border.' },
      { day: 'Day 3', title: 'Eravikulam Sanctuary & Anamudi Ridge Trail', desc: 'Spot the endangered Nilgiri Tahr and trek along mist-covered mountain ridge paths.' },
      { day: 'Day 4', title: 'Attukad Waterfalls & Organic Spice Garden Tour', desc: 'Descend through cascade trails, sample fresh cardamom & pepper, and farewell departure.' }
    ]
  },
  {
    id: 'exp-2',
    title: 'Alleppey & Kumarakom Backwater Voyage',
    category: 'backwaters',
    location: 'Alappuzha & Kottayam',
    duration: '3 Days / 2 Nights',
    difficulty: 'Easy',
    rating: 4.98,
    reviewsCount: 210,
    price: 520,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    description: 'Private traditional Kettuvallam houseboat cruise along palm-fringed canals, paddy fields, and Vembanad Lake.',
    itinerary: [
      { day: 'Day 1', title: 'Boarding at Punnamada Lake & Canal Cruise', desc: 'Welcome tender coconut drink, traditional Keralam Sadhya lunch on board, and quiet navigation through narrow village canals.' },
      { day: 'Day 2', title: 'Vembanad Lake Sunrise & Kayaking Trail', desc: 'Early morning canoe paddling through lotus ponds, bird sanctuary visits in Kumarakom, and fresh Toddy tasting.' },
      { day: 'Day 3', title: 'Coir Village Walk & Alappuzha Beach Sunset', desc: 'Explore historic coir making villages, heritage lighthouse, and beach stroll before checkout.' }
    ]
  },
  {
    id: 'exp-3',
    title: 'Varkala Red Cliff & Coastal Heritage Walk',
    category: 'coastal',
    location: 'Varkala, Thiruvananthapuram',
    duration: '3 Days / 2 Nights',
    difficulty: 'Easy',
    rating: 4.92,
    reviewsCount: 168,
    price: 380,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
    description: 'Trek along dramatic red clay cliffs overlooking the Arabian Sea, golden beaches, and ancient Janardhanaswamy temple.',
    itinerary: [
      { day: 'Day 1', title: 'North Cliff Walk & Sunset Yoga Session', desc: 'Check in to cliff-edge retreat, evening coastal walk, and fresh seafood by the sea.' },
      { day: 'Day 2', title: 'Kappil Estuary & Black Sand Beach Trail', desc: 'Hike where backwaters meet the Arabian Sea, paddleboarding in Kappil lake, and Papanasam holy spring dip.' },
      { day: 'Day 3', title: 'Surfing Lesson & Heritage Temple Walk', desc: 'Introductory morning surf session and 2,000-year-old temple visit.' }
    ]
  },
  {
    id: 'exp-4',
    title: 'Periyar Jungle Bamboo Rafting & Tiger Reserve Trail',
    category: 'wildlife',
    location: 'Thekkady, Idukki District',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate',
    rating: 4.95,
    reviewsCount: 115,
    price: 490,
    image: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1000&q=80',
    description: 'Full-day bamboo rafting and trek through deep evergreen forests of Periyar Tiger Reserve with wild elephant herds.',
    itinerary: [
      { day: 'Day 1', title: 'Thekkady Arrival & Spice Plantation Trail', desc: 'Walk through vanilla, cardamom, and clove plantations with master botanists.' },
      { day: 'Day 2', title: 'Full Day Bamboo Rafting & Jungle Hike', desc: 'Trek through core tiger sanctuary zones and float across Periyar Lake surrounded by wild elephants & sambar deer.' },
      { day: 'Day 3', title: 'Gavi Eco-Forest Jeep Safari', desc: 'Off-road rainforest drive to Gavi dam, cardamom processing units, and high canopy walks.' },
      { day: 'Day 4', title: 'Morning Elephant Sightseeing & Departure', desc: 'Early bird watching boat ride on Periyar lake and return transit.' }
    ]
  },
  {
    id: 'exp-5',
    title: 'Ponmudi Mist Hills & Agasthyakoodam Trail',
    category: 'mountain',
    location: 'Ponmudi, Thiruvananthapuram',
    duration: '3 Days / 2 Nights',
    difficulty: 'Challenging',
    rating: 4.89,
    reviewsCount: 88,
    price: 360,
    image: 'https://images.unsplash.com/photo-1609828913664-85d4001417ef?auto=format&fit=crop&w=1000&q=80',
    description: 'Navigate 22 hairpin curves to the Golden Peak of Ponmudi, lush orchids, stream crossings, and Agasthya biosphere reserves.',
    itinerary: [
      { day: 'Day 1', title: '22 Hairpin Scenic Drive & Peppara Forest', desc: 'Ascend to Ponmudi hill station, visit Kallar riverbed, and Meenmutty waterfall trek.' },
      { day: 'Day 2', title: 'Golden Peak Summit & Forest Stream Trail', desc: 'Hike across windswept mountain ridges, wild orchid trails, and misty valley viewpoints.' },
      { day: 'Day 3', title: 'Kallar Crystal Waters & Departure', desc: 'Natural pool swimming in Kallar river and return to Trivandrum.' }
    ]
  },
  {
    id: 'exp-6',
    title: 'Jatayu Earth Center & Vagamon Pine Valley Escape',
    category: 'cultural',
    location: 'Chadayamangalam & Vagamon',
    duration: '4 Days / 3 Nights',
    difficulty: 'Easy-Moderate',
    rating: 4.97,
    reviewsCount: 130,
    price: 420,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
    description: 'Explore the world’s largest bird sculpture at Jatayu Rock followed by Vagamon’s misty pine forests and glass bridge.',
    itinerary: [
      { day: 'Day 1', title: 'Jatayu Rock Cable Car & Sculpture Trek', desc: 'Cable car ride to Jatayu Earth Center, rock adventure activities, and mythological history museum tour.' },
      { day: 'Day 2', title: 'Transit to Vagamon & Kurisumala Meadows', desc: 'Drive through rubber plantations into Vagamon rolling green meadows and dairy farm trails.' },
      { day: 'Day 3', title: 'Pine Forest Walk & Vagamon Lake Boating', desc: 'Hike among tall British-era pine trees, glass bridge walk, and pedal boating.' },
      { day: 'Day 4', title: 'Marmala Waterfall Trail & Departure', desc: 'Trek to hidden Marmala cascade and departure transfer.' }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  renderExpeditions('all');
  initFilterTabs();
  initModals();
  initForms();
});

// Sticky Navbar Scroll Listener
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-nav');
    });
  }
}

// Render Expeditions Grid
function renderExpeditions(categoryFilter, searchQuery = '') {
  const container = document.getElementById('expeditionsContainer');
  if (!container) return;

  let filtered = KERALAM_EXPEDITIONS;
  if (categoryFilter && categoryFilter !== 'all') {
    filtered = filtered.filter(item => item.category === categoryFilter);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.location.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <h3 style="font-size: 1.5rem; color: var(--primary-charcoal); margin-bottom: 0.5rem;">No Keralam Trails Found</h3>
        <p style="color: var(--text-muted);">Try searching for Munnar, Alleppey, Varkala, Thekkady, or Ponmudi.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="card">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
        <span class="card-badge">${item.category}</span>
        <span class="card-rating">★ ${item.rating} (${item.reviewsCount})</span>
      </div>
      <div class="card-body">
        <div class="card-location">📍 ${item.location}</div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <div class="card-meta-item">⏱️ ${item.duration}</div>
          <div class="card-meta-item">🌿 ${item.difficulty}</div>
        </div>
        <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.5rem;">${item.description}</p>
        <div class="card-footer">
          <div class="card-price">
            <span class="price-label">Package From</span>
            <span class="price-amount">$${item.price.toLocaleString()}</span>
          </div>
          <button class="btn btn-primary" onclick="openItineraryModal('${item.id}')">View Trail Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Tabs Listener
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderExpeditions(category);
    });
  });

  // Hero Search widget listener
  const searchBtn = document.getElementById('heroSearchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const destSelect = document.getElementById('searchDestination');
      const categorySelect = document.getElementById('searchCategory');
      
      const categoryVal = categorySelect ? categorySelect.value : 'all';
      const destVal = destSelect ? destSelect.value : '';

      renderExpeditions(categoryVal, destVal);

      // Smooth scroll to expeditions section
      const target = document.getElementById('expeditions');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Modal Handlers
let selectedExpedition = null;

function openItineraryModal(id) {
  selectedExpedition = KERALAM_EXPEDITIONS.find(e => e.id === id);
  if (!selectedExpedition) return;

  const modal = document.getElementById('itineraryModal');
  const modalHeroImg = document.getElementById('modalHeroImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalLocation = document.getElementById('modalLocation');
  const modalPrice = document.getElementById('modalPrice');
  const modalItineraryContainer = document.getElementById('modalItineraryContainer');

  if (modalHeroImg) modalHeroImg.src = selectedExpedition.image;
  if (modalTitle) modalTitle.textContent = selectedExpedition.title;
  if (modalLocation) modalLocation.textContent = `📍 ${selectedExpedition.location} • ⏱️ ${selectedExpedition.duration} • 🌿 ${selectedExpedition.difficulty}`;
  if (modalPrice) modalPrice.textContent = `$${selectedExpedition.price.toLocaleString()}`;

  if (modalItineraryContainer) {
    modalItineraryContainer.innerHTML = selectedExpedition.itinerary.map(step => `
      <div class="itinerary-step">
        <span class="step-day">${step.day}</span>
        <h4 class="step-title">${step.title}</h4>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${step.desc}</p>
      </div>
    `).join('');
  }

  modal.classList.add('active');
}

function closeItineraryModal() {
  const modal = document.getElementById('itineraryModal');
  if (modal) modal.classList.remove('active');
}

function openBookingModal() {
  closeItineraryModal();
  const bookingModal = document.getElementById('bookingModal');
  if (!bookingModal) return;

  if (selectedExpedition) {
    document.getElementById('bookingTripName').textContent = selectedExpedition.title;
    updateTotalPrice();
  }

  bookingModal.classList.add('active');
}

function closeBookingModal() {
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) bookingModal.classList.remove('active');
}

function updateTotalPrice() {
  if (!selectedExpedition) return;
  const guestsInput = document.getElementById('bookingGuests');
  const guests = parseInt(guestsInput ? guestsInput.value : 1) || 1;
  const total = selectedExpedition.price * guests;
  const totalEl = document.getElementById('bookingTotalPrice');
  if (totalEl) totalEl.textContent = `$${total.toLocaleString()}`;
}

function initModals() {
  const modalCloseBtns = document.querySelectorAll('.modal-close');
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeItineraryModal();
      closeBookingModal();
    });
  });

  // Close modal on backdrop click
  window.addEventListener('click', (e) => {
    const itineraryModal = document.getElementById('itineraryModal');
    const bookingModal = document.getElementById('bookingModal');
    if (e.target === itineraryModal) closeItineraryModal();
    if (e.target === bookingModal) closeBookingModal();
  });
}

// Form Submit Handlers
function initForms() {
  // Booking Form Submit
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookingName').value;
      closeBookingModal();
      showToast(`🌴 Swagatham ${name}! Your Keralam trail inquiry for ${selectedExpedition ? selectedExpedition.title : 'THE FARAWAY TRAILS'} has been confirmed! Reference: #FT-KL-${Math.floor(100000 + Math.random() * 900000)}`);
      bookingForm.reset();
    });
  }

  // Custom Trip Planner Submit
  const plannerForm = document.getElementById('plannerForm');
  if (plannerForm) {
    plannerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('plannerName').value;
      const dest = document.getElementById('plannerDest').value;
      showToast(`🐘 Custom Keralam Itinerary Requested! Our local Keralam trail experts will contact ${name} within 24 hours for ${dest}.`);
      plannerForm.reset();
    });
  }
}

// Toast Alert Notification
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}
