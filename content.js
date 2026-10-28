/**
 * ==============================================================================
 * PLAYZONE ENTERTAINMENT - CENTRAL CONTENT CONFIGURATION
 * ==============================================================================
 * 
 * WELCOME CREATOR!
 * This file is your website's content command center. You do NOT need a database
 * or paid CMS. Simply edit the text, YouTube IDs, or links below to update your
 * website instantly on GitHub Pages.
 * 
 * HOW TO EDIT:
 * 1. To change your YouTube link: Edit 'youtubeSubscribeUrl' in CREATOR_PROFILE.
 * 2. To change the featured video: Edit 'FEATURED_VIDEO' below.
 * 3. To add a new video: Add an item to 'LATEST_VIDEOS'.
 * 4. To post a new Sports or Cinema article: Add an item to 'SPORTS_ARTICLES' or 'CINEMA_ARTICLES'.
 * 5. All demo items are clearly marked as sample creator content.
 * ==============================================================================
 */

const PLAYZONE_DATA = {
  // ----------------------------------------------------------------------------
  // 1. CREATOR & CHANNEL BRANDING (Configure your own links here)
  // ----------------------------------------------------------------------------
  creatorProfile: {
    brandName: "PLAYZONE",
    tagline: "Your Daily Stadium & Silver Screen Entertainment Hub",
    creatorName: "Playzone Founding Team",
    creatorHandle: "@PlayzoneOfficial",
    subscriberBadge: "58.4K Subscribers",
    videoCountBadge: "240+ Videos",
    // REPLACE WITH YOUR REAL YOUTUBE CHANNEL URL:
    youtubeChannelUrl: "https://www.youtube.com/@PlayzoneOfficial",
    // REPLACE WITH YOUR DIRECT SUBSCRIBE LINK:
    youtubeSubscribeUrl: "https://www.youtube.com/@PlayzoneOfficial?sub_confirmation=1",
    // REPLACE WITH YOUR BUSINESS INQUIRY EMAIL:
    contactEmail: "contact@playzone-entertainment.demo",
    socialLinks: {
      youtube: "https://www.youtube.com/@PlayzoneOfficial",
      instagram: "https://www.instagram.com/playzone_official_demo",
      twitter: "https://twitter.com/playzone_demo",
      discord: "https://discord.gg/playzone-community-demo",
      telegram: "https://t.me/playzone_updates_demo"
    },
    bio: "An independent four-member creator team bringing you energetic match reviews, cinema breakdowns, uncensored opinions, and interactive games every single week!"
  },

  // ----------------------------------------------------------------------------
  // 2. FEATURED HERO VIDEO
  // Put your newest or most popular YouTube video ID here (11 characters).
  // E.g. For https://www.youtube.com/watch?v=dQw4w9WgXcQ -> id is 'dQw4w9WgXcQ'
  // ----------------------------------------------------------------------------
  featuredVideo: {
    id: "dQw4w9WgXcQ", // Replace with your YouTube Video ID
    badge: "EPISODE 42 • LATEST BROADCAST",
    title: "Masterclass Run-Chases & Big Budget Mass Cinema Teasers Broken Down!",
    description: "In this high-energy breakdown, we analyze death-overs tactical masterclasses, review the newest Tamil cinema teaser frames, and give our unfiltered predictions for this weekend's blockbuster clashes.",
    duration: "18:45",
    category: "Sports & Cinema Double Bill",
    publishedDate: "2 days ago",
    viewsCount: "34.2K views",
    isPlaceholder: true // Set to false once you put your real video ID
  },

  // ----------------------------------------------------------------------------
  // 3. LATEST VIDEOS GRID
  // Add your recent YouTube uploads here.
  // ----------------------------------------------------------------------------
  latestVideos: [
    {
      id: "dQw4w9WgXcQ",
      title: "Top 5 Unbelievable Last-Over Finishes in Cricket History Ranked",
      category: "Sports Breakdown",
      duration: "14:20",
      views: "48K views",
      uploadDate: "3 days ago",
      badge: "Fan Favorite"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Mass Cinema Trailer Breakdown: Frame-by-Frame Hidden Easter Eggs",
      category: "Cinema Review",
      duration: "11:50",
      views: "62K views",
      uploadDate: "5 days ago",
      badge: "Trending"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Football Derby Tactical Masterclass: How The High Press Won The Clásico",
      category: "Football Analysis",
      duration: "16:05",
      views: "29K views",
      uploadDate: "1 week ago",
      badge: "Tactics"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Tier List: Ranking Every Major 2024 Pan-Indian Movie Soundtrack",
      category: "Music & Cinema",
      duration: "21:30",
      views: "75K views",
      uploadDate: "1 week ago",
      badge: "Tier List"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Blindfold Sports Trivia Challenge With Subscribers! (Hilarious Forfeits)",
      category: "Fun & Games",
      duration: "15:40",
      views: "52K views",
      uploadDate: "2 weeks ago",
      badge: "Challenge"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Formula 1 Street Circuit Chaos: Pit Stop Drama & Champion's Defense",
      category: "Motorsports",
      duration: "13:15",
      views: "31K views",
      uploadDate: "2 weeks ago",
      badge: "Motorsport"
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. SPORTS ZONE ARTICLES & COMMENTARY
  // Categories: 'cricket', 'football', 'motorsports', 'other'
  // ----------------------------------------------------------------------------
  sportsArticles: [
    {
      id: "sp-1",
      headline: "The Art of the Death Overs: Why Yorker Execution Decides Modern T20s",
      category: "cricket",
      categoryLabel: "Cricket",
      date: "Oct 24, 2026",
      readTime: "4 min read",
      author: "Playzone Sports Desk",
      summary: "Sample creator analysis dissecting how bowling rotations, wide yorkers, and slower bouncers tilt high-scoring thrillers in modern franchise cricket.",
      fullContent: `
        <p>In modern white-ball cricket, the margin between legendary status and a 20-run over is less than 3 inches on the pitch. While modern power hitters possess bat speeds exceeding 140 km/h and 360-degree reach, death-overs bowling has evolved from a brute pace contest into a grandmaster chess game.</p>
        
        <h3>1. The Return of the Wide Yorker</h3>
        <p>Over the past three seasons, data reveals that deliveries aimed 10cm outside the off-stump tramline with subtle seam variations have produced the highest percentage of dot balls and mis-hits. By taking away the batter's leg-side swing, captains force batters into awkward lunges.</p>

        <h3>2. Disguised Slower Balls</h3>
        <p>Pace off the ball remains the ultimate equalizer. Top franchise pacers are now delivering knuckle balls that drop sharply right at the batter's toes, making clean lofted shots almost impossible.</p>

        <blockquote>"A bowler who can hit 4 yorkers in an over is worth more than any specialist power-hitter in the auction." — Playzone Hot Take</blockquote>

        <p>Watch our full tactical video on YouTube for full pitch map graphics and radar data overlays!</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "sp-2",
      headline: "High-Pressing Midfields: The Tactical Shift Dominating European Nights",
      category: "football",
      categoryLabel: "Football",
      date: "Oct 22, 2026",
      readTime: "5 min read",
      author: "Playzone Football Desk",
      summary: "Sample tactical breakdown of inverted fullbacks, counter-pressing triggers, and how modern managers exploit transitional turnover spaces.",
      fullContent: `
        <p>European football in 2026 is no longer defined by traditional positional play; it is defined by transition speed and territorial asphyxiation. When top clubs lose possession, they do not retreat—they suffocate.</p>

        <h3>The 5-Second Counter-Press Rule</h3>
        <p>Modern analytical tracking shows that 68% of clear-cut chances against top-six sides originate not from elaborate 25-pass build-ups, but from aggressive ball recoveries within 30 meters of the opponent's goal line.</p>

        <h3>Inverted Fullbacks Creating Midfield Overloads</h3>
        <p>By moving fullbacks into central midfield alongside the holding pivot, teams create a numerical 3-2-4-1 overload in possession. This prevents the opposition from launching direct central counter-attacks.</p>

        <p>Check out our YouTube channel for weekly matchday reaction streams and tactical whiteboard sessions.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "sp-3",
      headline: "Street Circuit Strategy: Undercut vs Overcut Under Safety Car Conditions",
      category: "motorsports",
      categoryLabel: "Motorsports",
      date: "Oct 19, 2026",
      readTime: "3 min read",
      author: "Playzone Speed Desk",
      summary: "Sample motorsport analysis into tire degradation curves, track evolution, and the high-stakes pit wall gamble at narrow street venues.",
      fullContent: `
        <p>Street circuits punish hesitation with concrete barriers. Unlike permanent circuits where passing zones are plentiful, track position is king in Monaco, Singapore, and Baku.</p>

        <h3>The Undercut Window</h3>
        <p>Pitting one lap earlier on fresh soft compounds often provides a 1.8-second advantage over an out-lap on worn rubber. However, if a virtual safety car triggers just after you enter the pit lane, your race strategy can instantly unravel.</p>

        <p>Join our live watch-along stream on YouTube every Grand Prix Sunday!</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "sp-4",
      headline: "The Spin Revolution: Why Mystery Spinners Are Franchise Cricket Gold",
      category: "cricket",
      categoryLabel: "Cricket",
      date: "Oct 16, 2026",
      readTime: "4 min read",
      author: "Playzone Sports Desk",
      summary: "Sample breakdown of carrom balls, wrong'uns, and release angles that continue to bamboozle the world's most aggressive batters.",
      fullContent: `
        <p>Batters have mastered textbook leg-spin and off-spin with high-definition video analysis and bowling machines. But mystery spinners with rapid seam flick variations continue to confound even veteran international stars.</p>
        <p>When the ball leaves the hand at 95 km/h with finger-flick rotation, human reaction times are pushed to their biological limits.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "sp-5",
      headline: "Golden Boot Contenders: Statistical Analysis of Finishing Efficiency",
      category: "football",
      categoryLabel: "Football",
      date: "Oct 12, 2026",
      readTime: "4 min read",
      author: "Playzone Football Desk",
      summary: "Sample analytical piece comparing Expected Goals (xG) overperformance across top league strikers this season.",
      fullContent: `
        <p>Who is truly elite in front of goal versus who is merely riding an unsustainable hot streak? We dive into post-shot xG metrics to separate elite ball-strikers from lucky tap-in merchants.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "sp-6",
      headline: "Next-Gen Athletes: How Biometrics & High-Tech Recovery Are Extending Careers",
      category: "other",
      categoryLabel: "Other Sports",
      date: "Oct 08, 2026",
      readTime: "3 min read",
      author: "Playzone Performance Desk",
      summary: "Sample overview of cryotherapy, sleep monitoring, and GPS load management in modern professional athletic regimes.",
      fullContent: `
        <p>Athletes in their mid-to-late thirties are performing at peak physical output like never before. From tennis icons to Olympic sprinters, sports science and personalized biometric recovery have rewritten the rules of athletic longevity.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. CINEMA ZONE ARTICLES & REVIEWS
  // Categories: 'tamil', 'reviews', 'trailers', 'general'
  // ----------------------------------------------------------------------------
  cinemaArticles: [
    {
      id: "cn-1",
      headline: "Mass Cinema Evolution: How Sound Design and Editing Redefined The Blockbuster",
      category: "tamil",
      categoryLabel: "Tamil Cinema",
      date: "Oct 25, 2026",
      rating: "4.5 / 5",
      verdict: "Essential Breakdown",
      readTime: "5 min read",
      summary: "Sample commentary exploring the stylistic shift in modern Tamil and South Indian cinema—from conventional hero introductions to pulse-pounding sonic soundscapes.",
      fullContent: `
        <p>South Indian cinema has captured global attention not merely through heroic spectacle, but through a masterclass in auditory immersion and frantic yet coherent editorial rhythm.</p>

        <h3>The Audio-Visual High</h3>
        <p>When a superstar steps onto the screen in modern cinema, the hype is built long before the face reveal. Sub-bass rumbles, brass stabs, silence cutaways, and hyper-stylized slow-motion build anticipation to a fever pitch.</p>

        <h3>Grounded Emotional Cores</h3>
        <p>What elevates modern blockbusters above generic action films is an unapologetic emotional core. Whether fighting for family, community, or redemption, high-octane set-pieces hit harder when the stakes feel deeply personal.</p>

        <p>Tune into our YouTube breakdown for an in-depth track-by-track review of recent composer masterclasses!</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "cn-2",
      headline: "The Psychological Thriller Renaissance: Why Slow-Burn Cinema Captivates Audiences",
      category: "reviews",
      categoryLabel: "Movie Reviews",
      date: "Oct 21, 2026",
      rating: "4 / 5",
      verdict: "Gripping & Tense",
      readTime: "4 min read",
      summary: "Sample movie review analyzing how minimalist lighting, claustrophobic framing, and unreliable narrators keep viewers glued to their seats.",
      fullContent: `
        <p>In an era of relentless CGI explosions and superhero fatigue, audiences are turning toward grounded psychological mysteries where tension is built through quiet glances and ticking clocks.</p>

        <h3>Key Review Highlights</h3>
        <ul>
          <li><strong>Atmosphere:</strong> Moody cinematography drenched in deep shadows and neon hues.</li>
          <li><strong>Performance:</strong> Nuanced, understated lead acting that refuses melodramatic tropes.</li>
          <li><strong>Pacing:</strong> Slow-burn first act paying off with a breathless, unpredictable climax.</li>
        </ul>

        <p>Our complete spoiler-free video review is live on the PLAYZONE YouTube channel!</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "cn-3",
      headline: "Teaser Breakdown: Deciphering The Hidden Frames & Lore in Festive Mega-Projects",
      category: "trailers",
      categoryLabel: "Trailers & Teasers",
      date: "Oct 18, 2026",
      rating: "5 / 5 Hype",
      verdict: "Massive Hype",
      readTime: "3 min read",
      summary: "Sample trailer breakdown decoding background props, color temperature shifts, and potential cinematic universe links in the latest 90-second festival teaser.",
      fullContent: `
        <p>Creators and movie buffs know that a 90-second teaser is packed with intentional breadcrumbs. From the vintage revolver sitting on the desk to the reflection in the rearview mirror, we zoomed in frame-by-frame.</p>

        <h3>Three Easter Eggs You Probably Missed</h3>
        <p>1. The tattoo on the antagonist's forearm matches the insignia from the director's debut indie thriller.<br>
        2. The color palette abruptly shifts from warm sepia to cold steel-blue, hinting at a two-timeline narrative structure.<br>
        3. The Morse code rhythm in the closing title cue spells out the release month!</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "cn-4",
      headline: "The Art of the Interval Block: Why Indian Cinema's Midpoint Cliffhanger is Unique",
      category: "tamil",
      categoryLabel: "Tamil Cinema",
      date: "Oct 15, 2026",
      rating: "Editorial",
      verdict: "Must Read",
      readTime: "4 min read",
      summary: "Sample editorial exploring how directors structure a film around an unforgettable interval twist that sends audiences to the lobby buzzing with adrenaline.",
      fullContent: `
        <p>Unlike Western cinema which typically follows a continuous three-act structure, Indian commercial cinema operates on two distinct acts divided by the iconic interval block. A great interval transforms a good movie into a cultural event.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "cn-5",
      headline: "Festival Box Office Showdown: Historical Trends, Screen Counts & Advance Bookings",
      category: "general",
      categoryLabel: "Pop Culture & Box Office",
      date: "Oct 10, 2026",
      rating: "Analysis",
      verdict: "Box Office Insight",
      readTime: "4 min read",
      summary: "Sample box-office commentary exploring how festival release windows, IMAX distribution, and early morning fan shows shape opening weekend records.",
      fullContent: `
        <p>Festival weekends are the high-stakes battlegrounds of the entertainment industry. We analyze ticket pricing dynamics, overseas theatrical rights, and grassroots fan club celebrations.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "cn-6",
      headline: "Indie Gems That Deserved Bigger Theatrical Runs: Hidden Masterpieces to Stream",
      category: "reviews",
      categoryLabel: "Movie Reviews",
      date: "Oct 05, 2026",
      rating: "4.5 / 5",
      verdict: "Hidden Gem",
      readTime: "3 min read",
      summary: "Sample recommendations of brilliant small-budget scripts with extraordinary screenplays that deserve your weekend streaming watchlist.",
      fullContent: `
        <p>Not every brilliant film gets a 500-screen multiplex release. Here are three understated gems from recent years that prove compelling writing and heartfelt direction triumph over hundred-crore budgets.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. OPINIONS, RANKINGS & HOT TAKES
  // Categories: 'match-opinions', 'movie-reviews', 'rankings', 'predictions', 'debates'
  // ----------------------------------------------------------------------------
  opinions: [
    {
      id: "op-1",
      headline: "Rankings: Top 5 Clutch Finishers in Modern Cricket History (Debate Inside!)",
      category: "rankings",
      categoryLabel: "Rankings",
      date: "Oct 26, 2026",
      readTime: "4 min read",
      creatorTake: "Ice in the veins beats raw bat speed every single time.",
      summary: "Sample creator ranking counting down the coolest calm-under-pressure finishers who turn impossible chases into unforgettable victories.",
      fullContent: `
        <p><em>Disclaimer: This ranking represents the creator's personal subjective opinion and is designed to spark healthy debate in the comments!</em></p>
        
        <h3>#5. The Fearless Innovator</h3>
        <p>Able to manufacture boundaries behind the wicket when fielders are posted on the fence.</p>

        <h3>#4. The Counter-Attack Specialist</h3>
        <p>Striking at 200+ from ball one when the team is 4 wickets down in the powerplay.</p>

        <h3>#3. The Tactical Calculation Machine</h3>
        <p>Targeting the weakest 5th bowler and stretching the game into the 20th over.</p>

        <h3>#2. The Modern Power Phenom</h3>
        <p>Clearing 85-meter boundaries effortlessly with pure wrist leverage.</p>

        <h3>#1. The Ultimate Captain Cool</h3>
        <p>Unshakable demeanor, legendary running between the wickets, and a six to seal the glory.</p>

        <p>Agree or disagree? Hop into the comments of our companion YouTube video to defend your picks!</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "op-2",
      headline: "Hot Take: Why Over-Reliance on Data Analytics Is Killing Sporting Instinct",
      category: "match-opinions",
      categoryLabel: "Match Opinions",
      date: "Oct 23, 2026",
      readTime: "5 min read",
      creatorTake: "Algorithms cannot measure heart, momentum, and crowd adrenaline.",
      summary: "Sample creator debate on whether rigid matchup spreadsheets are robbing captains and players of organic game-reading brilliance.",
      fullContent: `
        <p><em>Disclaimer: The views expressed here are the creator's personal hot take and commentary.</em></p>
        <p>We live in an era where computers tell managers when to press, who to substitute at the 63rd minute, and which bowler must deliver to a left-handed batter. While data is invaluable, great sports moments are forged when players defy the algorithms and back their gut feeling.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "op-3",
      headline: "Predictions: 3 Dark Horse Contenders Set to Shock The Upcoming Tournament",
      category: "predictions",
      categoryLabel: "Predictions",
      date: "Oct 20, 2026",
      readTime: "3 min read",
      creatorTake: "Don't sleep on well-drilled underdogs with zero burden of expectations.",
      summary: "Sample creator tournament predictions breaking down tournament matchups and potential giant-killing upsets.",
      fullContent: `
        <p><em>Disclaimer: All predictions are speculative creator commentary for fan entertainment only, not financial or betting advice.</em></p>
        <p>Tournaments are rarely won by the media darlings who look unbeatable on paper. When pressure mounts in knockout stages, fearless upstart teams with cohesive teamwork often topple established heavyweights.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "op-4",
      headline: "Debate: Has The Marvel/Franchise Era Irreversibly Damaged Original Screenplays?",
      category: "debates",
      categoryLabel: "Entertainment Debates",
      date: "Oct 17, 2026",
      readTime: "4 min read",
      creatorTake: "Audiences are craving standalone stories with real human consequences.",
      summary: "Sample debate dissecting moviegoer franchise fatigue, post-credit culture, and why standalone original cinema is fighting back.",
      fullContent: `
        <p>For over a decade, studios prioritized 10-year universe roadmaps over single satisfying movie experiences. Now that audiences are feeling universe fatigue, mid-budget original cinema has a golden window to recapture the cultural zeitgeist.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    },
    {
      id: "op-5",
      headline: "Movie Review Hot Take: The Best Action Sequences Are The Ones Where The Hero Loses First",
      category: "movie-reviews",
      categoryLabel: "Movie Reviews",
      date: "Oct 14, 2026",
      readTime: "3 min read",
      creatorTake: "Invincible heroes are boring. Vulnerability makes triumph exhilarating.",
      summary: "Sample review thesis on why classic storytelling demands high physical and emotional costs for the protagonist.",
      fullContent: `
        <p>When a hero dodges 500 bullets without breaking a sweat, tension evaporates. The greatest cinematic brawls leave the protagonist bleeding, exhausted, and desperately fighting for every breath.</p>
      `,
      videoId: "dQw4w9WgXcQ",
      isSample: true
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. FUN & CHALLENGES: INTERACTIVE CLIENT-SIDE EXPERIENCES
  // ----------------------------------------------------------------------------

  // A. Sports & Cinema Multiple-Choice Quiz Bank
  quizQuestions: [
    {
      id: 1,
      category: "sports",
      question: "In white-ball cricket, how many fielders are permitted outside the 30-yard circle during the first Powerplay overs (1–10 in ODIs)?",
      options: ["A maximum of 2 fielders", "Up to 4 fielders", "Only 1 fielder", "No restriction"],
      answerIndex: 0,
      explanation: "During the mandatory first powerplay in ODI cricket, only a maximum of two fielders are allowed outside the 30-yard circle!"
    },
    {
      id: 2,
      category: "cinema",
      question: "Which iconic film composer is celebrated worldwide for introducing boundary-pushing synths, mass themes, and Western rhythms into South Indian cinema?",
      options: ["Ennio Morricone", "A. R. Rahman & Ilaiyaraaja", "Hans Zimmer", "John Williams"],
      answerIndex: 1,
      explanation: "Ilaiyaraaja and A. R. Rahman revolutionized Indian and global cinema scoring, blending intricate symphonic orchestrations with traditional folk and world electronic sounds!"
    },
    {
      id: 3,
      category: "sports",
      question: "In association football (soccer), which official FIFA rule determines an offside offense at the exact moment the ball is played?",
      options: [
        "Position when the ball reaches the attacker",
        "Position of attacker's head, body, or feet closer to the goal line than both the ball and second-last opponent when played",
        "Whether both attacker's hands are over the halfway line",
        "Any attacker inside the 18-yard box"
      ],
      answerIndex: 1,
      explanation: "Offside is judged at the precise moment the ball is played or touched by a teammate, considering any playable body part closer to the goal line than the second-last opponent."
    },
    {
      id: 4,
      category: "cinema",
      question: "What is the industry term for an unexpected, high-octane cliffhanger or twist placed right before the halfway intermission in Indian theatrical films?",
      options: ["Mid-credit scene", "Interval Block", "Cold Open", "Epilogue Hook"],
      answerIndex: 1,
      explanation: "The 'Interval Block' is a signature structural hallmark in Indian cinema designed to send theater audiences out on a dramatic adrenaline high!"
    },
    {
      id: 5,
      category: "sports",
      question: "In Formula 1 motorsport, what does the waving yellow flag indicate to drivers on that track sector?",
      options: ["Track is clear, resume full speed", "Danger ahead, reduce speed and no overtaking", "Session cancelled permanently", "Mandatory pit stop required"],
      answerIndex: 1,
      explanation: "A yellow flag warns drivers of hazard or danger on or beside the circuit; drivers must slow down and cannot overtake until a green flag is displayed."
    },
    {
      id: 6,
      category: "cinema",
      question: "Which camera technique involves moving the camera backward while simultaneously zooming in forward, creating a disorientation vertigo effect?",
      options: ["Dutch angle tilt", "Dolly Zoom (Vertigo shot)", "Whip pan", "Steadicam orbit"],
      answerIndex: 1,
      explanation: "The Dolly Zoom (popularized by Alfred Hitchcock in 'Vertigo') keeps the subject the same size while warping the background perspective, heightening psychological drama!"
    },
    {
      id: 7,
      category: "sports",
      question: "Who was the first batter in international cricket history to score a double century (200*) in a men's One Day International match?",
      options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "Chris Gayle"],
      answerIndex: 1,
      explanation: "Sachin Tendulkar made history on February 24, 2010 in Gwalior against South Africa by scoring the first ever 200 in men's ODIs!"
    },
    {
      id: 8,
      category: "cinema",
      question: "In filmmaking terminology, what does the acronym 'CGI' stand for?",
      options: ["Color Grade Integration", "Computer-Generated Imagery", "Cinematography Grid Index", "Custom Gimbal Interface"],
      answerIndex: 1,
      explanation: "CGI stands for Computer-Generated Imagery, the digital visual effects software used to create fantastical backgrounds, explosions, and visual set extensions."
    }
  ],

  // B. Predefined Random Challenge Generator Prompts
  challengesList: [
    {
      id: "ch-1",
      title: "The 15-Second Captains Blitz",
      category: "Sports Speed Challenge",
      timeLimitSeconds: 15,
      difficulty: "Medium",
      description: "Hit the timer and name 5 cricket World Cup winning captains before the countdown reaches zero! No pausing or looking at your phone!",
      forfeit: "If you fail, drop your most embarrassing sports prediction in the comments!"
    },
    {
      id: "ch-2",
      title: "Straight-Face Punch Dialogue",
      category: "Cinema Acting Challenge",
      timeLimitSeconds: 30,
      difficulty: "Hard",
      description: "Pick your favorite superstar's most intense mass movie punch dialogue. Deliver it to the camera or your friend with maximum gravitas without smiling or laughing once!",
      forfeit: "If you laugh, you must subscribe and share the latest PLAYZONE video!"
    },
    {
      id: "ch-3",
      title: "Emoji Movie Decoder",
      category: "Cinema Trivia Challenge",
      timeLimitSeconds: 20,
      difficulty: "Easy",
      description: "Decode these 3 movies from emojis alone: 1) 🦁👑 2) 🕶️💊🐇 3) 🏏🏆🇮🇳 (Lion King, Matrix, Lagaan)! Can you name 3 more in under 20 seconds?",
      forfeit: "Tag a friend and challenge them to beat your time!"
    },
    {
      id: "ch-4",
      title: "Blind XI Nationality Draft",
      category: "Sports Fantasy Challenge",
      timeLimitSeconds: 45,
      difficulty: "Extreme",
      description: "Build an all-time cricket or football starting XI in 45 seconds, but you CANNOT pick more than ONE player from any single country!",
      forfeit: "Take a screenshot of your drafted team and tweet it to @PlayzoneOfficial!"
    },
    {
      id: "ch-5",
      title: "Whistle Theme Song Whistle-Off",
      category: "Cinema Music Challenge",
      timeLimitSeconds: 20,
      difficulty: "Fun",
      description: "Whistle or hum your favorite blockbuster BGM (Background Score) and see if someone in the room or stream chat can guess it within 15 seconds!",
      forfeit: "Post your humming audio note in the community Discord!"
    },
    {
      id: "ch-6",
      title: "Rapid-Fire Football Club Derbies",
      category: "Sports Geography Challenge",
      timeLimitSeconds: 20,
      difficulty: "Medium",
      description: "Name the city or region for these 4 famous derbies: El Clásico, Superclásico, Derby della Madonnina, and Old Firm!",
      forfeit: "Wear your rival team's jersey color for tomorrow's watch-along!"
    }
  ],

  // C. "Who Wins?" Comparison Game Match-ups
  comparisonsList: [
    {
      id: "cmp-1",
      title: "Ultimate Clutch Run-Chase Finisher",
      category: "Cricket Legend Clash",
      optionA: {
        name: "Prime MS Dhoni (2011)",
        tag: "Calculated Finisher",
        stat: "Ice-Cold Temperament",
        desc: "Takes the game deep to the 20th over, maximizes pressure on bowler, famous helicopter finish."
      },
      optionB: {
        name: "Ben Stokes (2019 Headingley)",
        tag: "Unstoppable Battler",
        stat: "Pure Heroic Grit",
        desc: "Relentless counter-punching with the #11 batter, switch-hits, boundary clearing under immense pressure."
      },
      votesA: 64,
      votesB: 36,
      creatorPick: "Option A",
      creatorReason: "Dhoni's strike rate management and psychological mastery of the bowler across 15 years remains unmatched in white-ball cricket history."
    },
    {
      id: "cmp-2",
      title: "High-Octane Cinematic Action Universe",
      category: "Blockbuster Showdown",
      optionA: {
        name: "Dark Urban Syndicate (Vikram/Leo)",
        tag: "Grounded Guns & Drug Cartels",
        stat: "9.2/10 BGM Hype",
        desc: "Raw martial brawls, retro soundtrack remixes, machine guns, and interconnected character cameos."
      },
      optionB: {
        name: "Mythic Period Mass (Baahubali/RRR)",
        tag: "Epic Scale & Legend Lore",
        stat: "9.6/10 Visual Scale",
        desc: "Larger-than-life heroic emotion, animal stampedes, mythological heroism, and towering palace sets."
      },
      votesA: 52,
      votesB: 48,
      creatorPick: "Option B",
      creatorReason: "While urban action is pulse-pounding, the emotional operatic heights and sheer cinematic scale of the mythic period epics redefined Indian cinema globally."
    },
    {
      id: "cmp-3",
      title: "Legendary European Front Three",
      category: "Football Dynasty Debate",
      optionA: {
        name: "MSN (Messi, Suárez, Neymar)",
        tag: "Pure Fluid Samba Telepathy",
        stat: "122 Goals in Single Season",
        desc: "Unselfish passing, dazzling dribbling, and peak South American flair at Camp Nou."
      },
      optionB: {
        name: "BBC (Bale, Benzema, Cristiano)",
        tag: "Devastating Counter & Aerial Power",
        stat: "3 Consecutive European Crowns",
        desc: "Electrifying transition speed, physical dominance in Champions League knockout nights."
      },
      votesA: 58,
      votesB: 42,
      creatorPick: "Option A",
      creatorReason: "MSN played football like joy in motion. Their chemistry on and off the pitch created some of the most breathtaking goals ever televised."
    },
    {
      id: "cmp-4",
      title: "Sci-Fi Mass Spectacle",
      category: "Cinema Genre Face-Off",
      optionA: {
        name: "Enthiran: The Robot (2010)",
        tag: "Pioneering Indian Sci-Fi Mass",
        stat: "Game-Changing Practical Animatronics",
        desc: "Chitti's dual identity, magnetic field spheres, and visionary animatronic action by Stan Winston Studios."
      },
      optionB: {
        name: "Kalki 2898 AD (2024)",
        tag: "Dystopian Cyberpunk & Epic Myth",
        stat: "Global Scale World-Building",
        desc: "Futuristic vehicles, mythological resurrection, futuristic bounty hunters, and desert wasteland lore."
      },
      votesA: 61,
      votesB: 39,
      creatorPick: "Option A",
      creatorReason: "Enthiran came in 2010 with zero domestic reference points and set a benchmark for sci-fi mass entertainment that still holds up brilliantly today."
    }
  ]
};

// Make accessible to all page scripts
if (typeof window !== "undefined") {
  window.PLAYZONE_DATA = PLAYZONE_DATA;
}
