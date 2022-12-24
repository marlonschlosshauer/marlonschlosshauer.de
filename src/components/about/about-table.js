import React from 'react';
import { Modifiers } from '../../utility/modifiers';
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
  },
  {
    content: "HTML",
  },
  {
    content: "Clojure",
    modifiers: ['bold'],
  },
  {
    content: "ClojureScript",
  },
  {
    content: "SQL",
    modifiers: ['bold'],
  },
  {
    content: "Java",
  },
  {
    content: "Python",
  },
  {
    content: "C#",
  },
  {
    content: "Haskell",
  },
  {
    content: "PHP",
  },
  {
    content: "C++",
  },
  {
    content: "C",
  },
  {
    content: "ASM",
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
    content: "Storybook",
    modifiers: ['bold'],
  },
  {
    content: "Gatsby",
    modifiers: ['bold'],
  },
  {
    content: "Redux (Toolkit)",
    modifiers: ['bold'],
  },
  {
    content: 'msw',
  },
  {
    content: "React Navigation",
  },
  {
    content: "RevenueCat",
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
  {
    content: "Angular",
  },
  {
    content: "Karma",
  },
  {
    content: "Protractor",
  },
  {
    content: "Jest",
  },
  {
    content: "Antd",
  },
  {
    content: "Bootstrap",
  },

];


const backend = [
  {
    content: "Express",
    modifiers: ['bold',],
  },
  {
    content: "passport",
  },
  {
    content: "express-graphql",
  },
  {
    content: "MongoDB",
    modifiers: ['bold'],
  },
  {
    content: "Spring",
  },
  {
    content: "Quarkus",
  },
  {
    content: "Akka",
  },
  {
    content: "Ring",
    modifiers: ['bold'],
  },
  {
    content: "Monger",
    modifiers: ['bold'],
  },
  {
    content: "Buddy",
    modifiers: ['bold'],
  },
  {
    content: "Django",
  },
  {
    content: "gRPC",
  },
  {
    content: "Selenium",
  },

];

const tools = [
  {
    content: "Emacs",
    modifiers: ['bold',],
  }, {
    content: "VSCode",
  },
  {
    content: "Jetbrains IDEs",
  },
  {
    content: "Postman",
  },
  {
    content: "Docker",
    modifiers: ['bold'],
  },
  {
    content: "Figma",
    modifiers: ['bold',],
  },

  {
    content: "Slack",
    modifiers: ['bold'],
  },
  {
    content: "Github",
    modifiers: ['bold'],
  },
  {
    content: "Google Drive",
    modifiers: ['bold'],
  },
  {
    content: "Notion",
    modifiers: ['bold'],
  },
  {
    content: "Adobe Suite",
  },
  {
    content: "Zoom",
  },
  {
    content: "Zeplin",
  },

  {
    content: "Blender",
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

export const AboutTable = () => (
  <div className="about-me-table-container">
    <AboutTableCategory items={languages} title='Languages' />
    <AboutTableCategory items={frontend} title='Frontend' />
    <AboutTableCategory items={backend} title='Backend' />
    <AboutTableCategory items={tools} title='Tools' />
  </div>
)

export default AboutTable;
