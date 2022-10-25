import React from 'react';
import Modifiers from '../../utility/modifiers';
import './about-table.css';

const languages = [
  {
    content: "TypeScript",
    modifiers: ['bold',],
  },
  {
    content: "JavaScript",
    modifiers: ['bold',],
  },
  {
    content: "CSS",
    modifiers: [],
  },
  {
    content: "HTML",
    modifiers: [],
  },
  {
    content: "Clojure",
    modifiers: ['bold'],
  },
  {
    content: "ClojureScript",
    modifiers: [],
  },

  {
    content: "SQL",
    modifiers: ['bold'],
  },
  {
    content: "Java",
    modifiers: [],
  },
  {
    content: "Python",
    modifiers: [],
  },
  {
    content: "C#",
    modifiers: [],
  },
  {
    content: "Haskell",
    modifiers: [],
  },
  {
    content: "PHP",
    modifiers: [],
  },
  {
    content: "C++",
    modifiers: [],
  },
  {
    content: "C",
    modifiers: [],
  },
  {
    content: "ASM",
    modifiers: [],
  },
];

const frontend = [
  {
    content: "React",
    modifiers: ['bold',],
  },
  {
    content: "React Native",
    modifiers: ['bold'],
  },
  {
    content: "GraphQL",
    modifiers: ['bold'],
  },
  {
    content: "React Navigation",
    modifiers: [],
  },
  {
    content: "Gatsby",
    modifiers: ['bold'],
  },
  {
    content: "RevenueCat",
    modifiers: [],
  },

  {
    content: "Redux",
    modifiers: ['bold'],
  },
  {
    content: "Redux Toolkit",
    modifiers: ['bold'],
  },
  {
    content: "Angular",
    modifiers: [],
  },
  {
    content: "Karma",
    modifiers: [],
  },
  {
    content: "Protractor",
    modifiers: [],
  },
  {
    content: "Jest",
    modifiers: [],
  },
  {
    content: "Antd",
    modifiers: [],
  },
  {
    content: "Bootstrap",
    modifiers: [],
  },
  {
    content: "Reacl-C",
    modifiers: ['bold'],
  },

  {
    content: "Reframe",
    modifiers: ['bold'],
  },
  {
    content: "Reagent",
    modifiers: ['bold'],
  },
];


const backend = [
  {
    content: "Express",
    modifiers: ['bold',],
  },
  {
    content: "passport",
    modifiers: [],
  },
  {
    content: "express-graphql",
    modifiers: [],
  },
  {
    content: "Spring",
    modifiers: [],
  },
  {
    content: "Quarkus",
    modifiers: [],
  },
  {
    content: "Akka",
    modifiers: [],
  },
  {
    content: "Ring",
    modifiers: [],
  },
  {
    content: "HTTP-Kit",
    modifiers: [],
  },
  {
    content: "Compojure",
    modifiers: [],
  },
  {
    content: "Django",
    modifiers: [],
  },
  {
    content: "gRPC",
    modifiers: [],
  },
  {
    content: "Selenium",
    modifiers: [],
  },

];

const tools = [
  {
    content: "Emacs",
    modifiers: ['bold',],
  }, {
    content: "VSCode",
    modifiers: [,],
  },
  {
    content: "Jetbrains IDEs",
    modifiers: [],
  },
  {
    content: "Postman",
    modifiers: [],
  },
  {
    content: "Docker",
    modifiers: [],
  },
  {
    content: "Figma",
    modifiers: ['bold',],
  },
  {
    content: "Storybook",
    modifiers: ['bold'],
  },
  {
    content: "Slack",
    modifiers: [],
  },
  {
    content: "Github",
    modifiers: ['bold'],
  },
  {
    content: "Google Drive",
    modifiers: [],
  },
  {
    content: "Notion",
    modifiers: [],
  },
  {
    content: "Adobe Suite",
    modifiers: [],
  },
  {
    content: "Zoom",
    modifiers: [],
  },
  {
    content: "Zeplin",
    modifiers: [],
  },

  {
    content: "Blender",
    modifiers: [],
  },
];

const AboutTableCategory = ({ title = '', items = [] }) => (
  <div className="about-me-table-category">
    <p className='about-me-table-category-title'>{title}</p>
    <ul className='about-me-table-list'>
      {
        items?.map((item, key) =>
          <li className='about-me-table-item' key={key}>
            <Modifiers modifiers={item?.modifiers}>{item?.content}</Modifiers>
          </li>
        )
      }
    </ul>
  </div>
)

const AboutTable = () => (
  <div className="about-me-table-container">
    <AboutTableCategory items={languages} title='Languages' />
    <AboutTableCategory items={frontend} title='Frontend' />
    <AboutTableCategory items={backend} title='Backend' />
    <AboutTableCategory items={tools} title='Tools' />
  </div>
)

export default AboutTable;
