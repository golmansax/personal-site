import React from 'react';
import freerSackler from './logos/freerSackler.png';
import hopeChineseSchool from './logos/hopeChineseSchool.png';
import arml from './logos/arml.jpg';
import bookbooster from './logos/bookbooster.jpg';
import magnet from './logos/magnet.jpg';

export default [
  {
    year: 2017,
    organization: {
      url: 'http://www.mbhsmagnet.org/pipeline',
      name: 'Magnet STEM Talent Pipeline Project',
      image: magnet,
    },
    reason: (
      <div>
        This is a great program started by a Magnet alum (Samir Paul).
      </div>
    ),
  },
  {
    year: 2016,
    organization: {
      url: 'https://bayarea.bookbooster.org',
      name: 'BookBooster',
      image: bookbooster,
    },
    reason: 'My friend A.T. and I started BookBooster, an initiative to ' +
      'provide books to schools in low income areas in the San Francisco Bay ' +
      'Area.',
  },
  {
    year: 2015,
    organization: {
      url: 'http://www.mbhsmagnet.org/',
      name: 'Montgomery County ARML Team',
      image: arml,
    },
    reason: 'This was an overnight math team field trip that I went to ' +
      'throughout middle and high school, and I loved going every year!',
  },
  {
    year: 2014,
    organization: {
      url: 'https://www.hopechineseschool.org/hcscp/',
      name: 'Hope Chinese School College Park Campus',
      image: hopeChineseSchool,
    },
    reason: 'I am very grateful to this school and my parents for ' +
      'helping/pushing me to learn Mandarin Chinese.',
  },
  {
    year: 2013,
    organization: {
      url: 'http://www.asia.si.edu/events/imaginasia.asp',
      name: 'Smithsonian ImaginAsia Family Program',
      image: freerSackler,
    },
    reason: 'I volunteered for this program for six years, and I saw ' +
      'firsthand how empowering art projects can be.',
  },
];
