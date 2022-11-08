import React from 'react'
import NavBar from './NavBar'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BackToTop from './BackToTop';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);

const code1 = `npm install`;
const code2 = `aws configure`;
const code3 = 
`AWS Access Key ID:
AWS Secret Access Key:
Default region name [us-west-1]:
Default output format [json]:`;


export default function Docs() {

  return (
    <div>
      <NavBar />
      <BackToTop />
      <div className="w-99vh min-h-screen bg-[#686868] flex flex-row p-4 text-white">
        <div className="flex-shrink-0 w-[150px]">
          <ul><li className="text-[#9cb59d]">Table of contents:</li>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#getting-started">Getting started</a></li>
            <li><a href="#configuration">Configuration</a></li>
            <li><a href="#metrics">Metrics</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#tech">Technologies Used</a></li>
            <li><a href="#contribute">Contribute</a></li>
          </ul>
        </div>


        <div className="flex-auto p-2">
          <h1 id="introduction" className="text-4xl">Introduction</h1>
          <p>
            Now that you have downloaded ghost, let's get started!
            <SyntaxHighlighter children={code1} language="javascript" style={ solarizedLight } />
            Some more stuff about ghost ... Perhaps more information that would make sense under introduction.
          </p>
          <br></br>


          <h1 id="getting-started" className="text-4xl">Getting Started</h1>
          <p>
            After downloading ghost, log into Amazaon Web Services (AWS). 
            Ghost works best when the AWS Command Line Interface CLI is installed on your computer.
          </p>
          <p>
            <a href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html">
            <button className="rounded-md border border-transparent m-2 bg-[#9cb59d] px-8 py-3 text-base font-medium text-white hover:bg-[#798f7a] md:py-4 md:px-10 md:text-lg">Install AWS CLI</button>
            </a>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Fermentum iaculis eu non diam. Fusce id velit ut tortor
            pretium viverra suspendisse. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.
            Eget nunc scelerisque viverra mauris in. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim
            cras tincidunt. Tempus urna et pharetra pharetra massa massa. Feugiat in fermentum posuere urna.
            Mauris pharetra et ultrices neque ornare. Justo donec enim diam vulputate ut pharetra sit amet aliquam.
            Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacinia quis vel eros donec ac odio.
            Ut consequat semper viverra nam libero justo laoreet sit amet. Neque sodales ut etiam sit amet.
          </p>
          <br></br>


          <h1 id="configuration" className="text-4xl">Configuration</h1>
          <p>
            Configure the AWS CLI with your user profile in your terminal of choice.
            <SyntaxHighlighter children={ code2 } language="bash" style={ solarizedLight } />
            You will need your security credentials (Access Key ID and Secret Access Key), the default AWS Region,
            and the default output format. You can just press 'enter' if the default values match yours.
            <SyntaxHighlighter children={ code3 } language="bash" style={ solarizedLight } />
          </p> 
          <br></br>


          <h1 id="metrics" className="text-4xl">Metrics</h1>
          <p>
            To view any graphs, first select the Lambda Function you would like to view metrics for. 
            Press 'Your Lambda Functions' on the left menu, then click the 'METRICS' button under the Lambda Function.
          </p>
          <br></br>


          <h1 id="pricing" className="text-4xl">Pricing</h1>
          <p>
            To view the pricing calculator and previous billing history, first select the Lambda Function you would
            like to view pricing data for. Click the 'PRICING' button under the Lambda Function. This will bring up
            the pricing calculator. Select type, metric,         
            <br></br>
            To view past billing history, click the 'History' tab when you are in the pricing calculator interface for 
            that Lambda function. Select your month and year, 
          </p>
          <br></br>

          <h1 id="tech" className="text-4xl">Technologies Used</h1>
          <p>
            <li>Electron</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Router</li>
            <li>Node</li>
            <li>Chart.js</li>
            <li>MaterialUI</li>
            <li>Tailwind CSS</li>
          </p>
          <br></br>

          <h1 id="contribute" className="text-4xl">Contribute</h1>
          <p>
            How to contribute to the Open Source community!
          </p>
        </div>
      </div>
    </div>
  )
}