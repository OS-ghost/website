import React from 'react'
import NavBar from './NavBar'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BackToTop from './BackToTop';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);

const code1 = `poop.forEach((poopi) => butts.farts(poopi))`;
const code2 = `aws configure`;

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
            <li><a href="#contribute">Contribute</a></li>
          </ul>
        </div>


        <div className="flex-auto p-2">
          <h1 id="introduction" className="text-4xl">Introduction</h1>
          <p>
            Have you ever wanted to pee pee and poo poo? Well, now you can! 
            We will walk you through the steps on how to pee and poo in the toilet and sometimes both.
          </p>
          <p>
            <SyntaxHighlighter children={code1} language="javascript" style={ solarizedLight } />
          </p>
          <br></br>


          <h1 id="getting-started" className="text-4xl">Getting Started</h1>
          <p>
            Log into Amazaon Web Services (AWS)
            Ghost works best when the AWS Command Line Interface CLI is installed on your computer.
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
            How to configure your AWS account to our application.
            Configure the AWS CLI with your user profile in your terminal of choice.
            You will need your security credentials, the default output format, and the default AWS Region.
          </p>
          <p>
            <SyntaxHighlighter children={ code2 } language="bash" style={ solarizedLight } />
          </p>
          <br></br>


          <h1 id="metrics" className="text-4xl">Metrics</h1>
          <p>
            How to view metrics for your lambda function as well as set up custom graphs.
          </p>


          <h1 id="pricing" className="text-4xl">Pricing</h1>
          <p>
            How to use our pricing calculator as well as viewing past billing history.
          </p>


          <h1 id="contribute" className="text-4xl">Contribute</h1>
          <p>
            How to contribute to the Open Source community!
          </p>
        </div>
      </div>
    </div>
  )
}