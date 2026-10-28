/**
 * ==============================================================================
 * PLAYZONE ENTERTAINMENT - MAIN APPLICATION LOGIC
 * ==============================================================================
 * Handles navigation, dynamic data hydration, category filtering,
 * article reading modals, and all 3 client-side interactive games.
 * ==============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. GLOBAL INITIALIZATION & DOM READY
  // --------------------------------------------------------------------------
  function initApp() {
    initNavigation();
    hydrateCreatorData();
    initFeaturedVideo();
    initLatestVideosGrid();
    initArticleFilters();
    initArticleModals();
    initQuizGame();
    initChallengeGenerator();
    initComparisonGame();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  // --------------------------------------------------------------------------
  // 2. NAVIGATION & MOBILE DRAWER
  // --------------------------------------------------------------------------
  function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    if (!mobileDrawer) return;

    function openDrawer() {
      mobileDrawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (drawerCloseBtn) drawerCloseBtn.focus();
    }

    function closeDrawer() {
      mobileDrawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (menuToggle) menuToggle.focus();
    }

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (mobileDrawer.classList.contains('open')) closeDrawer();
        closeArticleModal();
      }
    });

    // Highlight current active link based on page URL (resilient to GitHub Pages subpath)
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    if (!currentPath || currentPath.toLowerCase() === 'entertainment-hub' || currentPath === '') {
      currentPath = 'index.html';
    }
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    allNavLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || (currentPath === 'index.html' && (href === 'index.html' || href === './')))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. HYDRATE CREATOR DATA & PLACEHOLDERS ACROSS PAGES
  // --------------------------------------------------------------------------
  function hydrateCreatorData() {
    if (typeof PLAYZONE_DATA === 'undefined') return;
    const { creatorProfile } = PLAYZONE_DATA;

    // Update Subscribe links
    const subscribeLinks = document.querySelectorAll('.js-subscribe-link');
    subscribeLinks.forEach((el) => {
      el.setAttribute('href', creatorProfile.youtubeSubscribeUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    // Update Channel links
    const channelLinks = document.querySelectorAll('.js-channel-link');
    channelLinks.forEach((el) => {
      el.setAttribute('href', creatorProfile.youtubeChannelUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    // Update Channel Name text
    const channelNameTexts = document.querySelectorAll('.js-channel-name');
    channelNameTexts.forEach((el) => {
      el.textContent = creatorProfile.brandName;
    });

    // Update Subscriber Count badge
    const subBadges = document.querySelectorAll('.js-sub-count');
    subBadges.forEach((el) => {
      el.textContent = creatorProfile.subscriberBadge;
    });

    // Update Contact email
    const emailEls = document.querySelectorAll('.js-contact-email');
    emailEls.forEach((el) => {
      el.textContent = creatorProfile.contactEmail;
      if (el.tagName === 'A') {
        el.setAttribute('href', `mailto:${creatorProfile.contactEmail}`);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. FEATURED VIDEO EMBEDDING (RESPONSIVE & PRIVACY-ENHANCED)
  // --------------------------------------------------------------------------
  function initFeaturedVideo() {
    const wrapper = document.getElementById('featured-video-player');
    if (!wrapper || typeof PLAYZONE_DATA === 'undefined') return;

    const video = PLAYZONE_DATA.featuredVideo;
    const placeholder = document.getElementById('featured-video-placeholder');
    const playBtn = document.getElementById('featured-play-btn');

    function loadIframe() {
      // Use privacy-enhanced YouTube URL
      const embedUrl = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`;
      wrapper.innerHTML = `
        <iframe 
          src="${embedUrl}" 
          title="${video.title}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    }

    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadIframe();
      });
    }

    if (placeholder) {
      placeholder.addEventListener('click', () => {
        loadIframe();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 5. LATEST VIDEOS GRID
  // --------------------------------------------------------------------------
  function initLatestVideosGrid() {
    const grid = document.getElementById('latest-videos-grid');
    if (!grid || typeof PLAYZONE_DATA === 'undefined') return;

    const videos = PLAYZONE_DATA.latestVideos || [];
    grid.innerHTML = videos
      .map(
        (v) => `
      <article class="card">
        <div class="card-media">
          <img src="assets/images/cover-sports.svg" alt="${v.title}" loading="lazy" onerror="this.onerror=null; this.src='cover-sports.svg';">
          <span class="badge badge-red card-overlay-badge">${v.badge}</span>
          <span class="card-duration-badge">${v.duration}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${v.category}</span>
            <span>•</span>
            <span>${v.uploadDate}</span>
          </div>
          <h3 class="card-title">
            <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer">${v.title}</a>
          </h3>
          <div class="card-footer">
            <span class="badge badge-sample">Sample Video</span>
            <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
              Watch on YouTube →
            </a>
          </div>
        </div>
      </article>
    `
      )
      .join('');
  }

  // --------------------------------------------------------------------------
  // 6. CATEGORY FILTERING (SPORTS, CINEMA, OPINIONS)
  // --------------------------------------------------------------------------
  function initArticleFilters() {
    const filterTabs = document.querySelectorAll('.js-filter-tab');
    if (filterTabs.length === 0) return;

    filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // Toggle active state on buttons
        const parent = tab.closest('.filter-tabs');
        if (parent) {
          parent.querySelectorAll('.js-filter-tab').forEach((b) => b.classList.remove('active'));
        }
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');
        const grid = document.getElementById('articles-grid');
        if (!grid) return;

        const cards = grid.querySelectorAll('.card[data-category]');
        let visibleCount = 0;

        cards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Empty state handler
        let emptyState = document.getElementById('filter-empty-state');
        if (visibleCount === 0) {
          if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.id = 'filter-empty-state';
            emptyState.className = 'game-widget-card';
            emptyState.style.textAlign = 'center';
            emptyState.innerHTML = `
              <p style="font-weight:700; color:var(--text-primary);">No articles found in this category.</p>
              <p style="color:var(--text-muted); font-size:0.9rem;">Check back soon for new creator uploads!</p>
            `;
            grid.parentNode.appendChild(emptyState);
          }
          emptyState.style.display = 'block';
        } else if (emptyState) {
          emptyState.style.display = 'none';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. ARTICLE MODAL (READ MORE IN-DEPTH COMMENTARY)
  // --------------------------------------------------------------------------
  function initArticleModals() {
    const openBtns = document.querySelectorAll('.js-open-article');
    const modal = document.getElementById('article-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalBackdrop = document.getElementById('modal-backdrop');

    if (!modal) return;

    openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const articleId = btn.getAttribute('data-article-id');
        openArticleModal(articleId);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeArticleModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeArticleModal);
  }

  function openArticleModal(articleId) {
    const modal = document.getElementById('article-modal');
    if (!modal || typeof PLAYZONE_DATA === 'undefined') return;

    // Search across sports, cinema, opinions
    const allArticles = [
      ...(PLAYZONE_DATA.sportsArticles || []),
      ...(PLAYZONE_DATA.cinemaArticles || []),
      ...(PLAYZONE_DATA.opinions || [])
    ];

    const article = allArticles.find((a) => a.id === articleId);
    if (!article) return;

    const titleEl = document.getElementById('modal-title');
    const metaEl = document.getElementById('modal-meta');
    const bodyEl = document.getElementById('modal-body-content');
    const videoBtn = document.getElementById('modal-video-btn');

    if (titleEl) titleEl.textContent = article.headline;
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="badge badge-red">${article.categoryLabel || article.category}</span>
        <span>•</span>
        <span>${article.date}</span>
        <span>•</span>
        <span>${article.readTime || '3 min read'}</span>
      `;
    }
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div style="margin-bottom:16px;">
          <span class="badge badge-sample">Sample Creator Analysis</span>
        </div>
        ${article.fullContent || `<p>${article.summary}</p>`}
      `;
    }

    if (videoBtn) {
      if (article.videoId) {
        videoBtn.style.display = 'inline-flex';
        videoBtn.setAttribute('href', `https://www.youtube.com/watch?v=${article.videoId}`);
        videoBtn.setAttribute('target', '_blank');
      } else {
        videoBtn.style.display = 'none';
      }
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    if (modal && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // --------------------------------------------------------------------------
  // 8. INTERACTIVE GAME 1: SPORTS & CINEMA QUIZ
  // --------------------------------------------------------------------------
  function initQuizGame() {
    const quizCard = document.getElementById('quiz-widget');
    if (!quizCard || typeof PLAYZONE_DATA === 'undefined') return;

    const questions = PLAYZONE_DATA.quizQuestions || [];
    if (questions.length === 0) return;

    let currentQuestions = [...questions];
    let currentIndex = 0;
    let score = 0;
    let answered = false;

    const questionTextEl = document.getElementById('quiz-question-text');
    const optionsListEl = document.getElementById('quiz-options-list');
    const scorePillEl = document.getElementById('quiz-score-display');
    const progressBarEl = document.getElementById('quiz-progress-bar');
    const countPillEl = document.getElementById('quiz-count-display');
    const feedbackBoxEl = document.getElementById('quiz-feedback-box');
    const feedbackTextEl = document.getElementById('quiz-feedback-text');
    const nextBtnEl = document.getElementById('quiz-next-btn');
    const quizFilterPills = document.querySelectorAll('.js-quiz-filter');

    // Filter questions by category (all, sports, cinema)
    quizFilterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        quizFilterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.getAttribute('data-quiz-category');
        if (cat === 'all') {
          currentQuestions = [...questions];
        } else {
          currentQuestions = questions.filter((q) => q.category === cat);
        }
        resetQuiz();
      });
    });

    function renderQuestion() {
      answered = false;
      feedbackBoxEl.classList.remove('active');
      nextBtnEl.style.display = 'none';

      if (currentIndex >= currentQuestions.length) {
        showQuizResults();
        return;
      }

      const q = currentQuestions[currentIndex];
      questionTextEl.textContent = `${currentIndex + 1}. ${q.question}`;
      countPillEl.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
      scorePillEl.textContent = `Score: ${score} pts`;

      const progressPct = ((currentIndex) / currentQuestions.length) * 100;
      progressBarEl.style.width = `${progressPct}%`;

      optionsListEl.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `
          <span style="display:inline-block; width:26px; height:26px; border-radius:50%; background:var(--bg-surface); text-align:center; line-height:26px; font-weight:800; font-size:0.8rem;">
            ${String.fromCharCode(65 + idx)}
          </span>
          <span>${opt}</span>
        `;
        btn.addEventListener('click', () => handleOptionClick(idx, btn));
        optionsListEl.appendChild(btn);
      });
    }

    function handleOptionClick(selectedIdx, clickedBtn) {
      if (answered) return;
      answered = true;

      const q = currentQuestions[currentIndex];
      const allOptionBtns = optionsListEl.querySelectorAll('.quiz-option-btn');

      allOptionBtns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answerIndex) {
          btn.classList.add('correct');
        }
      });

      if (selectedIdx === q.answerIndex) {
        score += 10;
        scorePillEl.textContent = `Score: ${score} pts`;
        feedbackBoxEl.style.borderLeftColor = 'var(--accent-green)';
        feedbackTextEl.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
      } else {
        clickedBtn.classList.add('incorrect');
        feedbackBoxEl.style.borderLeftColor = 'var(--accent-red)';
        feedbackTextEl.innerHTML = `<strong>Not quite!</strong> ${q.explanation}`;
      }

      feedbackBoxEl.classList.add('active');
      nextBtnEl.style.display = 'inline-flex';
      nextBtnEl.textContent = currentIndex === currentQuestions.length - 1 ? 'See Results 🎉' : 'Next Question →';
    }

    function showQuizResults() {
      progressBarEl.style.width = '100%';
      questionTextEl.textContent = 'Quiz Completed! 🏆';
      countPillEl.textContent = 'Results';

      const maxScore = currentQuestions.length * 10;
      const percentage = Math.round((score / maxScore) * 100);
      let remark = 'Great effort! Tune into PLAYZONE videos to level up your sports and cinema trivia!';
      if (percentage >= 80) remark = 'Legendary Fan Status! You possess verified encyclopedic knowledge!';
      else if (percentage >= 50) remark = 'Solid knowledge! A few tricky bouncers got through your defense.';

      optionsListEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 20px 0;">
          <div style="font-size: 3rem; margin-bottom: 8px;">🎯</div>
          <h3 style="font-size: 1.8rem; margin-bottom: 8px;">Final Score: ${score} / ${maxScore} (${percentage}%)</h3>
          <p style="color:var(--text-secondary); max-width:480px; margin: 0 auto 20px auto;">${remark}</p>
          <button id="quiz-restart-btn" class="btn btn-primary">Try Again / Restart Quiz ↺</button>
        </div>
      `;

      feedbackBoxEl.classList.remove('active');
      nextBtnEl.style.display = 'none';

      document.getElementById('quiz-restart-btn').addEventListener('click', resetQuiz);
    }

    function resetQuiz() {
      currentIndex = 0;
      score = 0;
      renderQuestion();
    }

    nextBtnEl.addEventListener('click', () => {
      currentIndex++;
      renderQuestion();
    });

    renderQuestion();
  }

  // --------------------------------------------------------------------------
  // 9. INTERACTIVE GAME 2: RANDOM CHALLENGE GENERATOR
  // --------------------------------------------------------------------------
  function initChallengeGenerator() {
    const card = document.getElementById('challenge-card-display');
    const spinBtn = document.getElementById('challenge-spin-btn');
    if (!card || !spinBtn || typeof PLAYZONE_DATA === 'undefined') return;

    const challenges = PLAYZONE_DATA.challengesList || [];
    if (challenges.length === 0) return;

    let timerInterval = null;
    let remainingSeconds = 0;

    const titleEl = document.getElementById('challenge-title');
    const catEl = document.getElementById('challenge-category');
    const descEl = document.getElementById('challenge-desc');
    const forfeitEl = document.getElementById('challenge-forfeit');
    const timerDisplay = document.getElementById('challenge-timer-display');
    const timerStartBtn = document.getElementById('timer-start-btn');
    const timerResetBtn = document.getElementById('timer-reset-btn');

    function getRandomChallenge() {
      const idx = Math.floor(Math.random() * challenges.length);
      return challenges[idx];
    }

    function displayChallenge(ch) {
      clearInterval(timerInterval);
      timerInterval = null;
      remainingSeconds = ch.timeLimitSeconds;
      updateTimerDisplay(remainingSeconds);

      titleEl.textContent = ch.title;
      catEl.textContent = `${ch.category} • Difficulty: ${ch.difficulty}`;
      descEl.textContent = ch.description;
      forfeitEl.textContent = ch.forfeit;

      if (timerStartBtn) {
        timerStartBtn.textContent = 'Start Timer ▶';
        timerStartBtn.disabled = false;
      }
    }

    function updateTimerDisplay(sec) {
      if (!timerDisplay) return;
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      timerDisplay.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    spinBtn.addEventListener('click', () => {
      card.classList.add('shuffling');
      spinBtn.disabled = true;

      // Simulated rolling shuffle
      let rolls = 0;
      const rollInterval = setInterval(() => {
        rolls++;
        const temp = getRandomChallenge();
        titleEl.textContent = temp.title;
        if (rolls > 6) {
          clearInterval(rollInterval);
          card.classList.remove('shuffling');
          spinBtn.disabled = false;
          displayChallenge(getRandomChallenge());
          showToast('🎲 New Challenge Generated! Can you beat the clock?', 'info');
        }
      }, 80);
    });

    if (timerStartBtn) {
      timerStartBtn.addEventListener('click', () => {
        if (timerInterval) {
          // Pause
          clearInterval(timerInterval);
          timerInterval = null;
          timerStartBtn.textContent = 'Resume Timer ▶';
        } else {
          // Start / Resume
          if (remainingSeconds <= 0) remainingSeconds = 30;
          timerStartBtn.textContent = 'Pause ⏸';
          timerInterval = setInterval(() => {
            remainingSeconds--;
            updateTimerDisplay(remainingSeconds);

            if (remainingSeconds <= 0) {
              clearInterval(timerInterval);
              timerInterval = null;
              timerStartBtn.textContent = 'Time Up! 🔔';
              timerStartBtn.disabled = true;
              showToast('⏰ Time is UP! Did you complete the challenge or take the forfeit?', 'warning');
            }
          }, 1000);
        }
      });
    }

    if (timerResetBtn) {
      timerResetBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        remainingSeconds = 30;
        updateTimerDisplay(remainingSeconds);
        if (timerStartBtn) {
          timerStartBtn.textContent = 'Start Timer ▶';
          timerStartBtn.disabled = false;
        }
      });
    }

    // Initialize with first challenge
    displayChallenge(challenges[0]);
  }

  // --------------------------------------------------------------------------
  // 10. INTERACTIVE GAME 3: "WHO WINS?" COMPARISON GAME
  // --------------------------------------------------------------------------
  function initComparisonGame() {
    const wrapper = document.getElementById('comparison-widget');
    if (!wrapper || typeof PLAYZONE_DATA === 'undefined') return;

    const matchups = PLAYZONE_DATA.comparisonsList || [];
    if (matchups.length === 0) return;

    let currentIndex = 0;
    const userVotes = {}; // Keyed by matchup ID

    const prevBtn = document.getElementById('cmp-prev-btn');
    const nextBtn = document.getElementById('cmp-next-btn');
    const matchupTitleEl = document.getElementById('cmp-matchup-title');
    const matchupCatEl = document.getElementById('cmp-matchup-category');
    const cardA = document.getElementById('cmp-card-a');
    const cardB = document.getElementById('cmp-card-b');
    const voteBtnA = document.getElementById('cmp-vote-a');
    const voteBtnB = document.getElementById('cmp-vote-b');
    const barA = document.getElementById('cmp-bar-a');
    const barB = document.getElementById('cmp-bar-b');
    const pctLabelA = document.getElementById('cmp-pct-a');
    const pctLabelB = document.getElementById('cmp-pct-b');
    const verdictBox = document.getElementById('cmp-creator-verdict');
    const verdictPickEl = document.getElementById('cmp-verdict-pick');
    const verdictReasonEl = document.getElementById('cmp-verdict-reason');

    function renderMatchup(idx) {
      const item = matchups[idx];
      matchupTitleEl.textContent = item.title;
      matchupCatEl.textContent = item.category;

      // Populate Option A
      document.getElementById('cmp-name-a').textContent = item.optionA.name;
      document.getElementById('cmp-tag-a').textContent = item.optionA.tag;
      document.getElementById('cmp-stat-a').textContent = item.optionA.stat;
      document.getElementById('cmp-desc-a').textContent = item.optionA.desc;

      // Populate Option B
      document.getElementById('cmp-name-b').textContent = item.optionB.name;
      document.getElementById('cmp-tag-b').textContent = item.optionB.tag;
      document.getElementById('cmp-stat-b').textContent = item.optionB.stat;
      document.getElementById('cmp-desc-b').textContent = item.optionB.desc;

      // Reset card state or apply saved vote
      cardA.classList.remove('voted');
      cardB.classList.remove('voted');

      const userChoice = userVotes[item.id];
      if (userChoice) {
        applyVoteVisuals(item, userChoice);
      } else {
        voteBtnA.disabled = false;
        voteBtnB.disabled = false;
        voteBtnA.textContent = 'Vote for Option A';
        voteBtnB.textContent = 'Vote for Option B';
        barA.style.width = '50%';
        barB.style.width = '50%';
        pctLabelA.textContent = 'Vote to reveal %';
        pctLabelB.textContent = 'Vote to reveal %';
        verdictBox.classList.remove('revealed');
      }

      // Pagination buttons
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === matchups.length - 1;
    }

    function applyVoteVisuals(item, choice) {
      voteBtnA.disabled = true;
      voteBtnB.disabled = true;

      let pctA = item.votesA;
      let pctB = item.votesB;

      if (choice === 'A') {
        cardA.classList.add('voted');
        voteBtnA.textContent = '✓ Your Pick';
        voteBtnB.textContent = 'Option B';
      } else {
        cardB.classList.add('voted');
        voteBtnB.textContent = '✓ Your Pick';
        voteBtnA.textContent = 'Option A';
      }

      barA.style.width = `${pctA}%`;
      barB.style.width = `${pctB}%`;
      pctLabelA.textContent = `${pctA}% Community Vote`;
      pctLabelB.textContent = `${pctB}% Community Vote`;

      verdictPickEl.textContent = `Creator's Pick: ${item.creatorPick} (${item[item.creatorPick === 'Option A' ? 'optionA' : 'optionB'].name})`;
      verdictReasonEl.textContent = item.creatorReason;
      verdictBox.classList.add('revealed');
    }

    voteBtnA.addEventListener('click', () => {
      const item = matchups[currentIndex];
      userVotes[item.id] = 'A';
      applyVoteVisuals(item, 'A');
      showToast('🗳️ Your vote has been recorded! Check creator verdict below.', 'success');
    });

    voteBtnB.addEventListener('click', () => {
      const item = matchups[currentIndex];
      userVotes[item.id] = 'B';
      applyVoteVisuals(item, 'B');
      showToast('🗳️ Your vote has been recorded! Check creator verdict below.', 'success');
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderMatchup(currentIndex);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < matchups.length - 1) {
        currentIndex++;
        renderMatchup(currentIndex);
      }
    });

    renderMatchup(0);
  }

  // --------------------------------------------------------------------------
  // 11. CONTACT FORM HANDLER (STATIC COMPATIBLE / MAILTO / SETUP NOTICE)
  // --------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      const destEmail = (typeof PLAYZONE_DATA !== 'undefined' && PLAYZONE_DATA.creatorProfile.contactEmail)
        ? PLAYZONE_DATA.creatorProfile.contactEmail
        : 'contact@playzone-entertainment.demo';

      // Construct mailto link
      const mailtoUrl = `mailto:${destEmail}?subject=${encodeURIComponent(
        `[PLAYZONE Inquiry] ${subject || 'Contact from Website'}`
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      // Open email client
      window.location.href = mailtoUrl;

      showToast('Opening your default email client with your prefilled message!', 'info');
      form.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 12. TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '❌';

    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Expose toast utility if needed globally
  window.showToast = showToast;
})();
