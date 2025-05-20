import './style.css'

// Mobile menu toggle
let mobileMenuOpen = false;

// Navigation component
function createNavigation() {
  return `
    <nav class="fixed top-0 w-full bg-white shadow-lg z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-lg">🛠️</span>
              </div>
              <span class="text-xl font-bold text-gray-900">College Fund Handymen</span>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#home" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#services" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Our Services</a>
              <a href="#about" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</a>
              <a href="#contact" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">📞 Book Now</a>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="md:hidden mobile-menu-enter">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Our Services</a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#contact" class="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mr-4">📞 Book Now</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

// Hero section
function createHeroSection() {
  return `
    <section id="home" class="hero-gradient text-white pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            College Fund Handymen 🏠
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your go-to for professional handyman services across South Florida. 
            From pressure washing to junk hauling - we do it all! 💪
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors">
              🚀 Get Free Quote
            </a>
            <a href="#services" class="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              🔧 View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Services section
function createServicesSection() {
  const services = [
    {
      title: "Pressure Washing",
      emoji: "💦",
      description: "Have a dirty driveway, patio, or fence? Get it cleaned today with our 4000 PSI commercial grade rig! We use chlorine to make sure our work lasts! Add-ons include algicide.",
      image: "/PressureWashing.jpg"
    },
    {
      title: "Car Washing",
      emoji: "🚗",
      description: "All car washing includes a wash and dry. Optional add-ons include clay, polish, compound, wax, tire shine, vacuuming, and back to black.",
      image: "/carWashing.jpeg"
    },
    {
      title: "Boat Detailing",
      emoji: "⛵",
      description: "All boat detailing includes a wash and dry. Optional add-ons include clay, polish, compound, and wax.",
      image: "/BoatDetailing.jpeg"
    },
    {
      title: "Moving",
      emoji: "📦",
      description: "Need help moving or packing your things for a move? We have over 6 months of experience with College Hunks Hauling Junk.",
      image: "/Moving.jpg"
    },
    {
      title: "Junk Hauling",
      emoji: "🗑️",
      description: "Got old furniture, yard waste, or debris that you need gone? Need something torn down like a deck or old hot tub? We can remove anything that you need thrown away!",
      image: "/JunkHauling.jpg"
    },
    {
      title: "Laboring",
      emoji: "🔨",
      description: "Anything you need done, we can do! Services include painting, furniture assembly, and demolition.",
      image: "/Labouring.jpeg"
    },
    {
      title: "Pool Cleaning",
      emoji: "🏊",
      description: "Pool cleanings include monthly filter cleanings, with no quarterly stabilizer charges. We have 3 years experience with MVPools.",
      image: "/PoolCleaning.jpg"
    },
    {
      title: "Landscaping",
      emoji: "🌿",
      description: "Services include biweekly lawn mowing, small tree/bush trimming, chainsaw work, mulching, fertilizing, and hardscape/fire pits.",
      image: "/LandScaping.jpg"
    },
    {
      title: "Website & Print Products",
      emoji: "💻",
      description: "Like this website? You could have one just like it! We can also make you print products including, but not limited to, flyers, business cards, and apparel.",
      image: "/WebsitePrint.jpg"
    }
  ];

  return `
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services 🛠️</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional services to meet all your needs. 
            Quality work, reasonable prices, and personal attention guaranteed! ⭐
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${services.map(service => `
            <div class="service-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="${service.image}" alt="${service.title}" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <span class="text-2xl mr-2">${service.emoji}</span>
                  <h3 class="text-xl font-semibold text-gray-900">${service.title}</h3>
                </div>
                <p class="text-gray-600 mb-4">${service.description}</p>
                <a href="#contact" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Get Quote →
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// About section (Parker Jones and Leo Jones)
function createAboutSection() {
  return `
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Meet The Team 👥</h2>
          <p class="text-xl text-gray-600">Get to know the heart and soul of our operation</p>
        </div>

        <!-- Parker Jones -->
        <div class="max-w-6xl mx-auto mb-16">
          <div class="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div class="flex-shrink-0">
                <img src="/ParkerJones.jpeg" alt="Parker Jones" class="w-64 h-64 rounded-full object-cover shadow-lg">
              </div>
              <div class="flex-1 text-center md:text-left">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Parker Jones 👨‍🔧</h3>
                <p class="text-lg text-gray-700 mb-6">
                  Parker is a skilled handyman who values strong customer relationships and reasonable prices. 
                  As a Florida State University graduate with a bachelor degree in Marketing, Parker ensures 
                  every project is completed with precision and clear communication. Parker is dedicated to 
                  delivering exceptional value in every job, from minor work to major repairs.
                </p>
                <div class="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🎓 FSU Graduate</span>
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">📈 Marketing Degree</span>
                  <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">🔧 Skilled Handyman</span>
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">🤝 Customer Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Leo Jones -->
        <div class="max-w-6xl mx-auto">
          <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div class="flex-shrink-0">
                <img src="/LeoJones.jpg" alt="Leo Jones" class="w-64 h-64 rounded-full object-cover shadow-lg">
              </div>
              <div class="flex-1 text-center md:text-left">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Leo Jones 🐕</h3>
                <p class="text-lg text-gray-700 mb-6">
                  Meet Leo, the real boss here. He is our team mascot and chief morale officer. 
                  When he's not following his dad around or chasing fish, Leo is busy being the 
                  best companion anyone could ask for.
                </p>
                <div class="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🏆 Chief Morale Officer</span>
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">🎯 Team Mascot</span>
                  <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">❤️ Best Companion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <div class="bg-blue-600 text-white rounded-2xl p-8">
            <h3 class="text-2xl font-bold mb-4">Why Choose College Fund Handymen? 🤔</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div class="flex items-start">
                <span class="text-2xl mr-3">💰</span>
                <div>
                  <h4 class="font-semibold mb-2">Reasonable Prices</h4>
                  <p class="text-blue-100">Much more affordable than the big guys!</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-2xl mr-3">🤝</span>
                <div>
                  <h4 class="font-semibold mb-2">Personal Touch</h4>
                  <p class="text-blue-100">We get to know our customers on a personal level</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-2xl mr-3">🎯</span>
                <div>
                  <h4 class="font-semibold mb-2">Professional Quality</h4>
                  <p class="text-blue-100">Skilled professionals with years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Contact/Book Now section
function createContactSection() {
  return `
    <section id="contact" class="py-20 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Book Now 📅</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Check our current availability and get a quote today!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-gray-800 rounded-lg p-8">
            <h3 class="text-2xl font-bold mb-6">Get Your Free Quote 💬</h3>
            <form id="contact-form" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label for="service" class="block text-sm font-medium mb-2">Service Needed</label>
                <select id="service" name="service" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a service...</option>
                  <option value="pressure-washing">💦 Pressure Washing</option>
                  <option value="car-washing">🚗 Car Washing</option>
                  <option value="boat-detailing">⛵ Boat Detailing</option>
                  <option value="moving">📦 Moving</option>
                  <option value="junk-hauling">🗑️ Junk Hauling</option>
                  <option value="laboring">🔨 General Labor</option>
                  <option value="pool-cleaning">🏊 Pool Cleaning</option>
                  <option value="landscaping">🌿 Landscaping</option>
                  <option value="website">💻 Website & Print</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" class="w-full bg-yellow-500 text-gray-900 py-3 px-6 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
                🚀 Get Started
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold mb-6">Get In Touch 📞</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">📍</span>
                  <div>
                    <h4 class="font-semibold">Service Area</h4>
                    <p class="text-gray-300">South Florida</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="text-2xl mr-4">⏰</span>
                  <div>
                    <h4 class="font-semibold">Hours</h4>
                    <p class="text-gray-300">Monday - Sunday: 7AM - 7PM</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="text-2xl mr-4">💳</span>
                  <div>
                    <h4 class="font-semibold">Payment</h4>
                    <p class="text-gray-300">Cash, Card, Venmo, Zelle</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-600 rounded-lg p-6">
              <h4 class="text-xl font-bold mb-4">🎓 College Fund Mission</h4>
              <p class="text-blue-100">
                Every job we complete helps fund our education and future. 
                When you choose College Fund Handymen, you're not just getting 
                quality service - you're investing in our dreams!
              </p>
            </div>

            <div class="bg-green-600 rounded-lg p-6">
              <h4 class="text-xl font-bold mb-4">⚡ Quick Response</h4>
              <p class="text-green-100">
                We typically respond to quotes within 24 hours. 
                For urgent requests, call us directly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Footer
function createFooter() {
  return `
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-lg">🛠️</span>
              </div>
              <span class="text-xl font-bold">College Fund Handymen</span>
            </div>
            <p class="text-gray-300 mb-4">
              Professional handyman services across South Florida. 
              Helping fund our education one job at a time! 🎓
            </p>
            <div class="flex space-x-4">
              <span class="text-2xl">📧</span>
              <span class="text-2xl">📱</span>
              <span class="text-2xl">🌟</span>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" class="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" class="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2 text-sm">
              <li class="text-gray-300">💦 Pressure Washing</li>
              <li class="text-gray-300">🚗 Car Washing</li>
              <li class="text-gray-300">🗑️ Junk Hauling</li>
              <li class="text-gray-300">🔨 General Labor</li>
              <li class="text-gray-300">🌿 Landscaping</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-300">
            © ${new Date().getFullYear()} College Fund Handymen. All rights reserved. 
            Made with ❤️ in South Florida
          </p>
        </div>
      </div>
    </footer>
  `;
}

// Initialize the application
function initApp() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    ${createNavigation()}
    ${createHeroSection()}
    ${createServicesSection()}
    ${createAboutSection()}
    ${createContactSection()}
    ${createFooter()}
  `;

  // Add event listeners
  setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
      mobileMenu.style.maxHeight = '500px';
    } else {
      mobileMenu.style.maxHeight = '0';
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenuOpen) {
          mobileMenu.style.maxHeight = '0';
          mobileMenuOpen = false;
        }
      }
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you within 24 hours. 🚀');
    this.reset();
  });

  // Add scroll effect to navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
      navbar.classList.add('bg-white', 'shadow-lg');
    } else {
      navbar.classList.remove('bg-white', 'shadow-lg');
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
