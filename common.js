/**
 * BEYTI SERVICE - Common Utilities & Navigation Engine
 * Handles Language, Device Mode, Bottom Nav, Toasts, and State
 */

const BEYTI_COMMON = {
  lang: localStorage.getItem('beyti_lang') || 'ar',
  viewMode: localStorage.getItem('beyti_view_mode') || 'phone',

  init() {
    this.applyViewMode();
    this.applyLanguage(this.lang);
    this.setupListeners();
    this.highlightActiveNav();
  },

  setupListeners() {
    // Desktop View Toggle
    const btnPhone = document.getElementById('btnPhoneView');
    const btnFull = document.getElementById('btnFullView');
    const phoneFrame = document.getElementById('phoneFrame');

    if (btnPhone && btnFull && phoneFrame) {
      btnPhone.addEventListener('click', () => {
        phoneFrame.classList.remove('full-view-mode');
        btnPhone.classList.add('active');
        btnFull.classList.remove('active');
        localStorage.setItem('beyti_view_mode', 'phone');
      });

      btnFull.addEventListener('click', () => {
        phoneFrame.classList.add('full-view-mode');
        btnFull.classList.add('active');
        btnPhone.classList.remove('active');
        localStorage.setItem('beyti_view_mode', 'full');
      });
    }

    // Language Toggle Buttons
    const langBtns = document.querySelectorAll('.lang-toggle, #langSwitchBtn, #dockLangBtn, #profileLangToggle');
    langBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = this.lang === 'ar' ? 'fr' : 'ar';
        this.applyLanguage(newLang);
      });
    });

    // Moughataa changes
    const moughataaSelect = document.getElementById('moughataaSelect');
    if (moughataaSelect) {
      const savedDistrict = localStorage.getItem('beyti_district');
      if (savedDistrict) moughataaSelect.value = savedDistrict;
      moughataaSelect.addEventListener('change', (e) => {
        localStorage.setItem('beyti_district', e.target.value);
        this.showToast(this.lang === 'ar' ? `تم تحديد مقاطعة: ${e.target.options[e.target.selectedIndex].text}` : `Zone mise à jour : ${e.target.options[e.target.selectedIndex].text}`);
      });
    }

    // Clock
    this.updateClock();
    setInterval(() => this.updateClock(), 30000);
  },

  applyViewMode() {
    const phoneFrame = document.getElementById('phoneFrame');
    const btnPhone = document.getElementById('btnPhoneView');
    const btnFull = document.getElementById('btnFullView');

    if (phoneFrame && this.viewMode === 'full') {
      phoneFrame.classList.add('full-view-mode');
      if (btnFull) btnFull.classList.add('active');
      if (btnPhone) btnPhone.classList.remove('active');
    }
  },

  applyLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('beyti_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update buttons indicator
    const currentLangTag = document.getElementById('currentLangTag');
    if (currentLangTag) currentLangTag.textContent = lang === 'ar' ? 'FR' : 'AR';

    const dockLangLabel = document.getElementById('dockLangLabel');
    if (dockLangLabel) dockLangLabel.textContent = lang === 'ar' ? 'Français' : 'العربية';

    const profileLangLabel = document.getElementById('profileLangLabel');
    if (profileLangLabel) profileLangLabel.textContent = lang === 'ar' ? 'العربية (Mauritanie)' : 'Français (Mauritanie)';

    const profileLangToggle = document.getElementById('profileLangToggle');
    if (profileLangToggle) profileLangToggle.textContent = lang === 'ar' ? 'Changer en Français' : 'التحويل للعربية';

    // Update text elements with data-ar and data-fr
    document.querySelectorAll('[data-ar]').forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });
  },

  highlightActiveNav() {
    const path = window.location.pathname.toLowerCase();
    const navButtons = document.querySelectorAll('.bottom-dock-nav .nav-tab-btn, .bottom-dock-nav .nav-tab-center-btn');

    navButtons.forEach(btn => {
      btn.classList.remove('active');
      const href = btn.getAttribute('href');
      if (href && path.endsWith(href.toLowerCase())) {
        btn.classList.add('active');
      }
    });

    if (path.endsWith('home.html')) {
      const homeBtn = document.querySelector('.bottom-dock-nav [href*="home.html"]');
      if (homeBtn) homeBtn.classList.add('active');
    }
  },

  updateClock() {
    const clockEl = document.getElementById('statusClock');
    if (clockEl) {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      clockEl.textContent = `${h}:${m}`;
    }
  },

  setupPresentationDeck() {
    const btnOpen = document.getElementById('btnOpenPresentation');
    const overlay = document.getElementById('deckOverlay');
    const btnClose = document.getElementById('deckCloseBtn');
    const btnPrev = document.getElementById('deckPrevBtn');
    const btnNext = document.getElementById('deckNextBtn');
    const btnFullscreen = document.getElementById('deckFullscreenBtn');
    const counter = document.getElementById('deckSlideCounter');
    const progress = document.getElementById('deckProgressFill');
    const dotsContainer = document.getElementById('deckDotsContainer');
    const slides = document.querySelectorAll('.deck-slide');

    if (!overlay || slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    const updateSlideView = () => {
      slides.forEach((s, idx) => {
        s.classList.toggle('active', idx === currentSlide);
      });

      if (counter) {
        const currentStr = String(currentSlide + 1).padStart(2, '0');
        const totalStr = String(totalSlides).padStart(2, '0');
        counter.textContent = `${currentStr} / ${totalStr}`;
      }

      if (progress) {
        const pct = ((currentSlide + 1) / totalSlides) * 100;
        progress.style.width = `${pct}%`;
      }

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.deck-dot');
        dots.forEach((d, idx) => {
          d.classList.toggle('active', idx === currentSlide);
        });
      }

      if (btnPrev) btnPrev.disabled = currentSlide === 0;
      if (btnNext) btnNext.disabled = currentSlide === totalSlides - 1;
    };

    const goToSlide = (idx) => {
      if (idx >= 0 && idx < totalSlides) {
        currentSlide = idx;
        updateSlideView();
      }
    };

    const nextSlide = () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlideView();
      }
    };

    const prevSlide = () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlideView();
      }
    };

    // Build dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `deck-dot ${idx === 0 ? 'active' : ''}`;
        dot.title = `السلايد ${idx + 1}`;
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }

    if (btnOpen) {
      btnOpen.addEventListener('click', () => {
        overlay.classList.add('active');
        currentSlide = 0;
        updateSlideView();
      });
    }

    if (btnClose) {
      btnClose.addEventListener('click', () => {
        overlay.classList.remove('active');
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });

    if (btnPrev) btnPrev.addEventListener('click', prevSlide);
    if (btnNext) btnNext.addEventListener('click', nextSlide);

    if (btnFullscreen) {
      btnFullscreen.addEventListener('click', () => {
        const box = document.getElementById('deckBox');
        if (!document.fullscreenElement) {
          (box || overlay).requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'ArrowRight') {
        if (document.documentElement.dir === 'rtl') prevSlide();
        else nextSlide();
      } else if (e.key === 'ArrowLeft') {
        if (document.documentElement.dir === 'rtl') nextSlide();
        else prevSlide();
      } else if (e.key === 'Escape') {
        overlay.classList.remove('active');
      }
    });

    updateSlideView();
  },

  showToast(message, icon = 'fa-circle-check') {
    let hub = document.getElementById('toastHub');
    if (!hub) {
      hub = document.createElement('div');
      hub.id = 'toastHub';
      hub.className = 'toast-hub';
      document.body.appendChild(hub);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    hub.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  BEYTI_COMMON.init();
  BEYTI_COMMON.setupPresentationDeck();
});
