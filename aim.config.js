// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Malin Yamato Lääkkö',
  domain: 'malin.jp', // add without https:// , used in meta tags and share urls
  image: '/images/med.png',
  email: 'malin@malin.jp',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'malin.jp',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'MalinYamato',
    linkedin: 'MalinYamato',
    facebook: 'MalinYamato',
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_GYAN_KARN_DARK.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'SendPost', src: '/images/sendpost.png', url: 'https://sendpost.io' },
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
      { name: 'InterviewReady', src: '/images/interviewready-io.png', url: 'https://get.interviewready.io' },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  loadingIndicator: {
    name: 'nuxt'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'resources',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'Artificial Intelligence in Medicine AIM',
        description: 'Hi there, I am Malin Yamato, - a postgraduate student in Computer Sciences with a specialization in Artificial Intelligence at the department of Computer and Systems Sciences, University of Stockholm. My thesis work is going to attempt to create an artificial endocrine system in software by applying artificial intelligence at the deparment of Physiology and Pharmacology, Karolinska Institute 2022. I have completed a medcial year at Karolinska Institute with courses such as biochemistry, histology, human physiology, pharmacology, microbiology and molecular cell biololgoy and will carry on studying one year Artificial Intelliegnce and data science at Stockholm Unniversty.',
        words: ['Artificial Intelligence', 'appplied to', 'Medicine','Human Physiology', 'Pharmacology', 'Biochemistry', 'Molecular Cell Biology'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'Resources',
        subtext: 'Documents and resources regarding Medicine, AI, etc -- malin@malin.jp'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: ''
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page explains my Thesis work in applying AI to medicine'
      }
    }
  }
}
