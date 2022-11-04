import React from 'react'
import NavBar from './NavBar'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);

const code = `poop.forEach((poopi) => butts.farts(poopi))`
const code2 = `aws configure`

export default function Docs() {

  return (
    <div>
      <NavBar />
      <div className="w-99vh min-h-screen bg-[#686868] flex flex-row p-4 text-white">
        <div className="flex-auto w-48">
          <ul>Table of contents:
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#getting-started">Getting started</a></li>
            <li><a href="#configuration">Configuration</a></li>
            <li>Pee</li>
            <li>Poo</li>
            <li>Contributing</li>
            <li>Farting</li>
          </ul>
        </div>
        
        <div className="flex-auto p-2">
          <h1 id="introduction" className="text-4xl">Introduction</h1>
          <p>
            Have you ever wanted to pee pee and poo poo? Well, now you can! We will walk you through the steps on how to pee and poo in the toilet and sometimes both.
          </p>
          <SyntaxHighlighter children={code} language="javascript" style={ solarizedLight } />

          <br></br>

          <h1 id="getting-started" className="text-4xl">Getting Started</h1>
          <p>
            Log into AWS
          </p>
          <p>Ghost works best when the AWS CLI is installed on your computer.</p>
            <a
              href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
            >
              <button className="rounded-md border border-transparent m-2 bg-[#9cb59d] px-8 py-3 text-base font-medium text-white hover:bg-[#798f7a] md:py-4 md:px-10 md:text-lg">Install AWS CLI</button>
            </a>
            <p>Configure the AWS CLI with your user profile in your terminal of choice.</p>
            <SyntaxHighlighter children={ code2 } language="bash" style={ solarizedLight } />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam. Fusce id velit ut tortor pretium viverra suspendisse. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Eget nunc scelerisque viverra mauris in. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Tempus urna et pharetra pharetra massa massa. Feugiat in fermentum posuere urna. Mauris pharetra et ultrices neque ornare. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacinia quis vel eros donec ac odio. Ut consequat semper viverra nam libero justo laoreet sit amet. Neque sodales ut etiam sit amet.
            </p><p>
              Netus et malesuada fames ac. Mauris augue neque gravida in. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Lacus vel facilisis volutpat est velit egestas. Tristique senectus et netus et malesuada. Nulla aliquet enim tortor at auctor urna nunc. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Volutpat est velit egestas dui id ornare arcu odio ut. Odio ut sem nulla pharetra. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Orci ac auctor augue mauris augue.
              </p>
              <h1 id="configuration" className="text-4xl">Configuration</h1>
              <p>
              Massa eget egestas purus viverra. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Nec ultrices dui sapien eget mi proin sed libero. Pellentesque diam volutpat commodo sed egestas egestas. Sapien pellentesque habitant morbi tristique senectus. Vel facilisis volutpat est velit egestas dui id ornare. Amet luctus venenatis lectus magna fringilla urna porttitor. Malesuada fames ac turpis egestas. Nibh ipsum consequat nisl vel pretium. Consectetur adipiscing elit pellentesque habitant. Sit amet aliquam id diam. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Quis risus sed vulputate odio. Cras sed felis eget velit. Mauris nunc congue nisi vitae suscipit. Nunc aliquet bibendum enim facilisis gravida neque. Cras ornare arcu dui vivamus arcu felis. At volutpat diam ut venenatis tellus. Duis convallis convallis tellus id interdum. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
              </p>
        </div>
      </div>
    </div>
  )
}