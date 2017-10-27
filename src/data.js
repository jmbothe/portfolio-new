module.exports = {
  sections: ['about', 'projects', 'skills', 'contact', 'justBecause'],

  about: `Hi, I'm Jeff, front-end web developer, musician, photographer, and traveler from Baltimore, MD. I currently live in the central mountains of Colombia, where I devote all of my free time to leveling-up my tech skills. I also like to climb the local volcanoes when the weather is good. Enjoy this portfolio of my web development work, and if you like what you see, please get in touch :)`,

  projects: [
    {
      title: 'Client Website',
      demoLink: 'https://jmbothe.github.io/photo-phinish/',
      codeLink: 'https://github.com/jmbothe/photo-phinish',
      description: 'A prototype for a local painting business website, built with <a href="https://foundation.zurb.com/sites.html" target="_blank">Zurb\'s Foundation for Sites</a> front-end framework.',
    },
    {
      title: 'Drum Sequencer',
      demoLink: 'https://jmbothe.github.io/drum-sequencer/dist/',
      codeLink: 'https://github.com/jmbothe/drum-sequencer',
      description: 'A basic drum sequencer that was originally conceived as a learning exercise in <a href="https://jquery.com/" target="_blank">jQuery</a>, but quickly grew into a serious challenge in wrangling the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" target="_blank">Web Audio API</a>.',
    },
    {
      title: 'Calculator',
      demoLink: 'https://jmbothe.github.io/calculator-MVC/dist/',
      codeLink: 'https://github.com/jmbothe/calculator-MVC',
      description: 'On the surface, an attempt to reverse engineer the basic functionality of the iOS10 calculator (in portrait view). Under the hood, an attempt to follow the rudiments of the <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">Model-View-Controller</a> design pattern.',
    },
    {
      title: 'Todo List',
      demoLink: 'https://jmbothe.github.io/todo-list/dist/',
      codeLink: 'https://github.com/jmbothe/todo-list',
      description: 'Every newbie coder must at some point complete a todo list tutorial. This is the result of following the amazing <a href="https://watchandcode.com/p/practical-javascript" target="_blank">Watch and Code - Practical Javascript tutorial</a>.',
    },
    {
      title: 'Portfolio First Draft',
      demoLink: 'https://jmbothe.github.io/portfolio-old/',
      codeLink: 'https://github.com/jmbothe/portfolio-old',
      description: 'For my first portfolio website, I went in a very different direction from the current site. Exuberant, flamboyant, ambitious, irreverent.',
    },
  ],

  skills: [
    {
      title: 'Core',
      items: [
        'Mobile-first responsive design',
        'Pattern-oriented software architecture design',
        'Clean, DRY, self-documenting code',
        'Agile software development processes',
      ]
    },
    {
      title: 'Web Technologies',
      items: [
        'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React.js and JSX', 'Node.js and npm',
        'Bootstrap and Foundation', 'Git and GitHub'
      ]
    },
    {
      title: 'Graphic Design',
      items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom', 'GIMP']
    },
    {
      title: 'Languages',
      items: ['English: Native', 'Spanish: Intermediate']
    }
  ],

  contacts: [
    {
      name: 'E-mail',
      link: 'mailto:jeffrymbothe@gmail.com',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jmbothe/',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/jmbothe/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/jeffbothe',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/jeff_bothe/',
    }
  ],
}