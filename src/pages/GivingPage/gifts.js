import freerSackler from './logos/freerSackler.png';
import hopeChineseSchool from './logos/hopeChineseSchool.png';
import arml from './logos/arml.jpg';
import bookbooster from './logos/bookbooster.jpg';
import magnet from './logos/magnet.jpg';

const BOOKBOOSTER_LINK = 'https://medium.com/@albertmcwilliams3/' +
  'book-deserts-and-the-widening-literacy-gap-a8ce2e83ceb6';

export default [
  {
    year: 2017,
    organization: {
      url: 'http://www.mbhsmagnet.org/pipeline',
      name: 'Magnet STEM Talent Pipeline Project',
      image: magnet,
    },
    reasonMarkdown: [
      'I was lucky enough to attend math/science Magnet programs throughout',
      'middle school and high school. Without a doubt, I owe a big chunk of my',
      'hard-working and inquisitive nature to the Magnet programs.\n\n',
      'The mission of the STEM Talent Pipeline Project is to support students',
      'that may not have access to the resources that help build a STEM foundation.',
      'Kudos to [Samir](https://twitter.com/samirpaul) for founding this initiative!',
    ].join(' '),
  },
  {
    year: 2016,
    organization: {
      url: 'https://www.bookbooster.us',
      name: 'BookBooster',
      image: bookbooster,
    },
    reasonMarkdown: [
      'In summer 2016, my friend [A.T.](https://twitter.com/atmcwilliams) and I founded',
      '[BookBooster](https://www.bookbooster.us), an initiative',
      'to provide books to schools in low income areas.',
      'After learning about the correlation between income, books, and literacy,',
      'I wanted to get involved to support kids who wanted books but did not have access to them.',
      '\n\nTo learn more about these “Book Deserts” and why BookBooster was started,',
      `[check out A.T.’s blog post on our mission](${BOOKBOOSTER_LINK}).`,
    ].join(' '),
  },
  {
    year: 2015,
    organization: {
      url: 'http://www.mbhsmagnet.org/',
      name: 'Montgomery County ARML Team',
      image: arml,
    },
    reasonMarkdown: [
      'ARML was a national high school math competition that I went to throughout',
      'middle and high school. Our school had around 75 students attend, which was',
      'made extra fun by the fact that this was an overnight trip.\n\n',
      'Not only was it a great bonding experience with friends, but the competition',
      'was always a blast.  ARML was one of the things I looked forward to most every year!',
    ].join(' '),
  },
  {
    year: 2014,
    organization: {
      url: 'https://www.hopechineseschool.org/hcscp/',
      name: 'Hope Chinese School College Park Campus',
      image: hopeChineseSchool,
    },
    reasonMarkdown: [
      'I am very grateful to this school and my parents for',
      'helping/pushing me to speak Mandarin and read/write Chinese.',
      'I attended Hope Chinese School throughout my pre-college years,',
      'and would take classes on Sunday.\n\n',
      'I disliked the extra work as a kid, but now I understand that the',
      'effort was certainly worth it. Not only is Mandarin an in-demand language,',
      'but also I am thankful that I am able to converse with my extended family,',
      'who for the most part only speak Mandarin.',
    ].join(' '),
  },
  {
    year: 2013,
    organization: {
      url: 'http://www.asia.si.edu/events/imaginasia.asp',
      name: 'Smithsonian ImaginAsia Family Program',
      image: freerSackler,
    },
    reasonMarkdown: [
      'I volunteered for this program on and off for six years (including for',
      'my first summer internship), and I saw firsthand how empowering art projects can be.',
      'Parents were always telling us how thankful they were that this great program',
      'was free of charge.\n\n',
      'This experience also meant a lot to me personally because Stephen, my boss and the program',
      'director. He was the perfect role model: he was kind to everyone and dedicated his career',
      'to serving others. It was a no-brainer to support Stephen and the program.',
    ].join(' '),
  },
];
