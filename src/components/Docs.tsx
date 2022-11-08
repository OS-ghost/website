import React from 'react'
import NavBar from './NavBar'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BackToTop from './BackToTop';
import Footer from './Footer'
import { positions } from '@mui/system';

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
      <div className="w-99vh min-h-screen bg-[#686868] p-6 flex flex-row text-white">
        <div className="flex-shrink-0 fixed w-[180px] mt-[60px] pl-3 pr-4 font-bold text-white" >
          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#getting-started">Getting started</a></li>
            <li><a href="#configuration">Configuration</a></li>
            <li><a href="#metrics">Metrics</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#permissions">Permissions</a></li>
            <li><a href="#tech">Technologies Used</a></li>
            <li><a href="#contribute">Contribute</a></li>
          </ul>
        </div>


        <div className="flex-shrink-1 w-[1200px] pt-[60px] pl-[200px] pr-4">
        <h1 id="introduction" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Introduction</h1>
          <p>
            Now that you have downloaded ghost, let's get started!
            <SyntaxHighlighter children={code1} language="javascript" style={ solarizedLight } />
            Some more stuff about ghost ... Perhaps more information that would make sense under introduction.
          </p>
          <br></br>


          <h1 id="getting-started" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Getting Started</h1>
          <p>
            After downloading ghost, log into Amazon Web Services (AWS). 
            Ghost works best when the AWS Command Line Interface (CLI) is installed on your computer.
          </p>
          <p>
          <a href="https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26state%3DhashArgsFromTB_us-west-2_3def78f93219f346&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=8I-LvSUOJq5oXg_UEBENvX3DmGuddz2I9ScmMDvYY64&code_challenge_method=SHA-256">
            <button className="rounded-md border border-transparent m-2 bg-[#9cb59d] px-8 py-3 text-base font-medium text-white hover:bg-[#798f7a] md:py-4 md:px-10 md:text-lg">Log into AWS</button>
            </a>
            <a href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html">
            <button className="items-center justify-center rounded-md border border-transparent bg-[#bdbdbd] px-8 py-3 text-base font-medium text-[#ffffff] hover:bg-[#a6a6a6] md:py-4 md:px-10 md:text-lg">Install AWS CLI</button>
            </a>
          </p>
          <p>
            Some more mumbo jumbo about getting started after logging in and installing AWS CLI.
          </p>
          <br></br>


          <h1 id="configuration" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Configuration</h1>
          <p>
            Configure the AWS CLI with your user profile in your terminal of choice.
            <SyntaxHighlighter children={ code2 } language="bash" style={ solarizedLight } />
            You will need your security credentials (Access Key ID and Secret Access Key), AWS Region,
            and output format. You can just press 'enter' if the default values match yours.
            <SyntaxHighlighter children={ code3 } language="bash" style={ solarizedLight } />
          </p> 
          <br></br>


          <h1 id="metrics" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Metrics</h1>
          <p>
            To view any graphs or data, you need to first select the Lambda Function you would like to view metrics for. 
            Press 'Your Lambda Functions' on the left menu, then click the 'METRICS' button under the Lambda Function.
          </p>
          <br></br>
          <p>
            For customized graphs, select the Lambda Function you would like to create a custom graph for and view its metrics.
            Then click the orange'CREATE GRAPH' button in the top right corner to display the graph creation user interface.
            Enter a title, select a metric, graph type, date/time range (end time must be within 24 hours from the start time),
            and then hit the 'SUBMIT' button. 

          </p>
          <br></br>


          <h1 id="pricing" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Pricing</h1>
          <p>
            To view the pricing calculator and previous billing history, first select the Lambda Function you would
            like to view pricing data for from the left menu. Click the 'PRICING' button under the specific Lambda Function.
            This will bring up the pricing calculator. Select type, memory size, storage size, billed duration, and total invocations. 
            Click the 'Calculate Price' button when you are ready.        
          </p>
          <br></br>
          <p>
            To view past billing history, click the 'HISTORY' tab when you are in the pricing calculator user interface for 
            that specific Lambda function. Select your month and year then click 'Submit'. Your previous total cost for that month
            will be displayed.
          </p>
          <br></br>

          <h1 id="permissions" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Permissions</h1>
          <p>
            How to adjust/select permissions. 
          </p>
          <br></br>

          <h1 id="tech" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technologies Used</h1>
          <p>
            <li>Electron</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Chart.js</li>
            <li>MaterialUI</li>
            <li>Tailwind CSS</li>
          </p>
          <br></br>

          <h1 id="contribute" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contribute</h1>
          <p>
            Interested in contributing to ghost or the Open Source community?
            The following is a list of features that the ghost team has either started or would like to implement.
            If you also have additional ideas, feel free to iterate off of ghost and implement those features!
          </p>
          <p>
            <li>Testing</li>
            <li>Other stuff</li>
            <li>Season 5 Silicon Valley</li>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}