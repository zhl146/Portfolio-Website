import { Project } from './project.model';

export const projects = [
  new Project( 'Portfolio Website',
    'Responsive portfolio site with blog',
    'assets/img/project-img/portfolio.png',
    'https://github.com/zhl146/ZhenLuInfo',
    '',
    ''
  ),
  new Project( 'Recipe Helper',
    'Responsive mobile-first web application',
    'assets/img/project-img/recipehelper.jpg',
    'https://github.com/zhl146/Recipe-Helper',
    'https://zhenlu.info/recipehelper',
    ''
  ),
  new Project( 'exBook Frontend',
    'Hybrid web application built with ionic2',
    'assets/img/project-img/exBook.png',
    'https://github.com/zhl146/exbookfrontend',
    '',
    ''
  ),
  new Project( 'exBook Backend',
    'REST API built using python/flask',
    'assets/img/project-img/exBook.png',
    'https://github.com/zhl146/exbookbackend',
    '',
    ''
  )
];
