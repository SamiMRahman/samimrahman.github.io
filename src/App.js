import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container mx-auto max-w-2xl scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
            <div className="flex flex-col min-h-screen justify-start items-start text-gray-700">
                <div className="text-muted-foreground space-x-4 mb-2 text-sm font-mono">
                    {/* <a href="/" className="font-mono text-sm text-zinc-800 hover:underline">Home</a> */}
                    {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-800 hover:underline">Resume</a> */}
                    <a href="mailto:sami101rahman@gmail.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-6 text-zinc-500">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </a>
                    {/* <a href="https://github.com/SamiMRahman" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-800 hover:underline">Github</a> */}
                    <a href="https://github.com/SamiMRahman" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github size-6 text-zinc-500">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </a>
                    {/* <a href="https://www.linkedin.com/in/sami-m-rahman" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-800 hover:underline">LinkedIn</a> */}
                    <a href="https://www.linkedin.com/in/sami-m-rahman/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin size-6 text-zinc-500">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>

                <main className="mx-auto flex min-h-0 flex-col gap-y-3 w-full">
                    <h1 className="mt-8 text-2xl font-bold">Hi, I'm Sami.</h1>
                    <p class="text-muted-foreground max-w-md text-pretty font-mono text-xs">
                        <a class="inline-flex items-center gap-x-1.5 align-baseline leading-none text-zinc-500 hover:underline" href="https://maps.app.goo.gl/tMA7iAx1sz8A9rdh9" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                            West Midtown, Atlanta, GA
                        </a>
                    </p>
                    <h3 className="text-muted-foreground max-w-md text-pretty font-mono text-sm text-zinc-500">I'm a Software Engineer and Computer Science Master's student at Georgia Tech.</h3>
                    {/* <h3 className="text-muted-foreground text-pretty font-mono text-sm">I really enjoy systems, linguistics, embodied cognition, and the nature of thought.</h3> */}
                    <h3 className="text-muted-foreground text-pretty font-mono text-sm text-zinc-500">I currently work as a prompt engineer at Scale AI, where I help create better AI models for people to use.</h3>
                    <h3 className="text-muted-foreground text-pretty font-mono text-sm text-zinc-500">Prior to this, I was a full-time Software Engineer at VMware.</h3>
                    <h3 className="text-muted-foreground text-pretty font-mono text-sm text-zinc-500">
                        Here's my&nbsp;
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="py-1 px-1 me-1 mb-1 text-sm font-mono text-zinc-800 focus:outline-none bg-zinc-100 rounded-lg border border-muted hover:bg-white focus:z-10 focus:ring-4 focus:ring-gray-100  dark:hover:text-gray-900">resume</a>
                        &nbsp;for a more detailed view of my background.
                    </h3>
                    <h3 className="text-muted-foreground text-pretty font-mono text-sm text-zinc-500">Feel free to get in touch if anything here interests you.</h3>
                </main>

                {/* <footer className="w-full fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 text-center py-2">
                    <span>Made with <kdb className="bg-gray-200 px-2 py-1" style="color: #e25555;">&hearts;</kdb> from Atlanta.</span>
                </footer> */}
            </div>
        </div>
        // ----------------- SCROLL DOWN CV --------------------
        // <body class="__className_e3c363">
        //     <main class="container relative mx-auto max-w-2xl scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
        //         <div class="flex gap-x-3 align-baseline font-mono leading-none print:hidden">
        //             <a href="/">
        //                 <h2 class="font-mono text-sm font-bold text-zinc-800 hover:underline">samirahman.me</h2>
        //             </a>
        //             <a href="/resume.pdf">
        //                 <h2 class="font-mono text-sm text-zinc-800 hover:underline">resume</h2>
        //             </a>
        //             <a href="/posts">
        //                 <h2 class="font-mono text-sm text-zinc-800 hover:underline">posts</h2>
        //             </a>
        //             <a href="/books">
        //                 <h2 class="font-mono text-sm text-zinc-800 hover:underline">books</h2>
        //             </a>
        //         </div>
        //         <div>
        //             <section class="mx-auto w-full  space-y-8  print:space-y-6">
        //                 <div class="flex items-center justify-between gap-x-10 mt-10">
        //                     <div class="flex-1 space-y-1.5">
        //                         <h1 class="text-2xl font-bold">Sami Rahman</h1>
        //                         <p class="text-muted-foreground max-w-md text-pretty font-mono text-sm">Programmer, Student.</p>
        //                         <p class="text-muted-foreground max-w-md text-pretty font-mono text-xs">
        //                             <a class="inline-flex items-center gap-x-1.5 align-baseline leading-none text-zinc-500 hover:underline" href="https://maps.app.goo.gl/tMA7iAx1sz8A9rdh9" target="_blank">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-3">
        //                                     <circle cx="12" cy="12" r="10"></circle>
        //                                     <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        //                                     <path d="M2 12h20"></path>
        //                                 </svg>
        //                                 West Midiwn, Atlanta, GA
        //                             </a>
        //                         </p>
        //                         <div class="text-muted-foreground flex gap-x-2 pt-1 font-mono text-sm print:hidden">
        //                             <a href="mailto:sami101rahman@gmail.com" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-8">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4 text-zinc-500">
        //                                     <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        //                                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        //                                 </svg>
        //                             </a>
        //                             <a href="https://github.com/SamiMRahman" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-8">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github size-4 text-zinc-500">
        //                                     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        //                                     <path d="M9 18c-4.51 2-5-2-7-2"></path>
        //                                 </svg>
        //                             </a>
        //                             <a href="https://www.linkedin.com/in/sami-m-rahman/" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-8">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin size-4 text-zinc-500">
        //                                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        //                                     <rect width="4" height="12" x="2" y="9"></rect>
        //                                     <circle cx="4" cy="4" r="2"></circle>
        //                                 </svg>
        //                             </a>
        //                             <a href="https://twitter.com/carmguti" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground size-8">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter size-4 text-zinc-500">
        //                                     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        //                                 </svg>
        //                             </a>
        //                         </div>
        //                         <div class="text-muted-foreground hidden flex-col gap-x-1 font-mono text-sm print:flex">
        //                             <a href="mailto:sami101rahman@gmail.com">
        //                                 <span class="underline">sami101rahman@gmail.com</span>
        //                             </a>
        //                         </div>
        //                     </div>
        //                     {/* <img alt="My Headshot" loading="lazy" width="170" height="100" decoding="async" data-nimg="1" class="max-h-52 rounded-2xl" style="color:transparent" srcSet="/_next/image?url=%2Favatar_image.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Favatar_image.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Favatar_image.png&amp;w=384&amp;q=75" /> */}
        //                 </div>
        //                 <section class="flex min-h-0 flex-col gap-y-3">
        //                     <h2 class="text-xl font-bold">Education</h2>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 text-base">
        //                                 <h3 class="flex-1 font-semibold leading-none">Georgia Institute of Technology</h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">2024
        //                                     -
        //                                     2028</div>
        //                             </div>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-2">Master's Degree in Computer Science (concentration: Machine Learning)</div>
        //                         <div class="hover:none flex items-center">
        //                             <div class="flex flex-wrap justify-start gap-1 py-2 print:hidden">
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Thermodynamics</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Electromagnetism</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Quantum Mechanics</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Lagrangian Mechanics</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Hamiltonian Mechanics</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Laser Physics &amp;Optics</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Perturbation Theory &amp;Chaos</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">ODEs &amp;PDEs</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Multivariable Calculus</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Applied Matrix Theory</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Differential Geometry</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Groups &amp;Symmetry</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Special &amp;General Relativity</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Signal Processing</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Art History</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Deep Learning</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Reinforcement Learning</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">German</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Spanish</div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 text-base">
        //                                 <h3 class="flex-1 font-semibold leading-none">Georgia Institute of Technology</h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">2017
        //                                     -
        //                                     2021</div>
        //                             </div>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-2">Bachelor's Degree of Computer Science (concentrations: Artificial Intelligence, Human-Computer Interaction)</div>
        //                         <div class="hover:none flex items-center">
        //                             <div class="flex flex-wrap justify-start gap-1 py-2 print:hidden">
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Computer Vision</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Reinforcement Learning</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Design & Analysis of Algorithms</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Motion Planning &amp;Robot Autonomy</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Machine Learning</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Operating Systems</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Discrete Math</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Formal Logic</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">AI Ethics</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Computer Organization</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Computational Logic</div>
        //                                 <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Complexity Theory</div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </section>
        //                 <section class="flex min-h-0 flex-col gap-y-3">
        //                     <h2 class="text-xl font-bold">Experience</h2>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 gap-y-2 text-base">
        //                                 <h3 class="inline-flex flex-wrap items-center gap-x-1 gap-y-2 font-semibold leading-none">
        //                                     <a class="gap-x-2 text-black hover:underline" href="https://residua.ai">Scale AI</a>
        //                                     <span class="">
        //                                         <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Remote</div>
        //                                     </span>
        //                                 </h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">Dec 2023
        //                                     -
        //                                     Present</div>
        //                             </div>
        //                             <h4 class="font-mono text-sm leading-none">Platinum Team Programmer</h4>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono mt-2 text-xs">We live in an era of data abundance, and with it comes a lot of noise. Residua &#x27;s mission is to apply LLMs to help users sift through the noise to find what is truly relevant and meaningful to them. As the CEO of Residua, I handle everything from investor and business relations to full-stack software development, product design, and marketing. </div>
        //                     </div>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 gap-y-2 text-base">
        //                                 <h3 class="inline-flex flex-wrap items-center gap-x-1 gap-y-2 font-semibold leading-none">
        //                                     <a class="gap-x-2 text-black hover:underline" href="https://www.meta.com/">VMware</a>
        //                                     <span class="">
        //                                         <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Atlanta, GA</div>
        //                                     </span>
        //                                 </h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">Feb 2022
        //                                     -
        //                                     April 2023</div>
        //                             </div>
        //                             <h4 class="font-mono text-sm leading-none">Software Developement Engineer</h4>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono mt-2 text-xs">At VMware, I created infra tools facilitating synchronized communication between clients and developers on a number of Meta hardware and software products. This project involved learning and using web development skills like GraphQL, HTML, XHP, and internal Meta frameworks. </div>
        //                     </div>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 gap-y-2 text-base">
        //                                 <h3 class="inline-flex flex-wrap items-center gap-x-1 gap-y-2 font-semibold leading-none">
        //                                     <a class="gap-x-2 text-black hover:underline" href="https://www.randommath.com/">VMware</a>
        //                                     <span class="">
        //                                         <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Atlanta, GA</div>
        //                                     </span>
        //                                 </h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">May 2021
        //                                     -
        //                                     Aug 2021</div>
        //                             </div>
        //                             <h4 class="font-mono text-sm leading-none">Software Developement Engineer Intern</h4>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono mt-2 text-xs">Random Math is a California-based company offering specialized supplemental courses to middle and high school students. During the COVID-19 pandemic, I designed and taught an algebra- and calculus-based high-school level physics curriculum, and additionally wrote and graded homework problems and a supplemental course reader. I also provided personal support for students beginning their academic journey and considering a career in physics and math. </div>
        //                     </div>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 gap-y-2 text-base">
        //                                 <h3 class="inline-flex flex-wrap items-center gap-x-1 gap-y-2 font-semibold leading-none">
        //                                     <a class="gap-x-2 text-black hover:underline" href="https://www.facebook.com/">VMware</a>
        //                                     <span class="">
        //                                         <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Atlanta, GA</div>
        //                                     </span>
        //                                 </h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">May 2020
        //                                     -
        //                                     Aug 2020</div>
        //                             </div>
        //                             <h4 class="font-mono text-sm leading-none">Software Developement Engineer Intern</h4>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono mt-2 text-xs">At VMware, I learned and used React Native and Swift/Objective-C to bridge UI components across Facebook products and platforms like WhatsApp, Facebook iOS, Facebook Web, and Facebook Android. Having never before worked at a production software company, this internship taught me a lot about programming at scale.</div>
        //                     </div>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 gap-y-2 text-base">
        //                                 <h3 class="inline-flex flex-wrap items-center gap-x-1 gap-y-2 font-semibold leading-none">
        //                                     <a class="gap-x-2 text-black hover:underline" href="https://physics.stanford.edu/">Panasonic Automotive Systems of America</a>
        //                                     <span class="">
        //                                         <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Peachtree City, GA</div>
        //                                     </span>
        //                                 </h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">Aug 2019
        //                                     -
        //                                     Dec 2019</div>
        //                             </div>
        //                             <h4 class="font-mono text-sm leading-none">Software and Systems Engineer Intern</h4>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono mt-2 text-xs">For one quarter, I lead a 10-student weekly section for Physics 41E, an introductory mechanics course at Stanford targeted at students from under-resourced educational backgrounds, taught by Nobel Prize winner and physics educator Carl Wieman.</div>
        //                     </div>
        //                     <div class="bg-card text-card-foreground rounded-lg">
        //                         <div class="flex flex-col space-y-1.5">
        //                             <div class="flex items-center justify-between gap-x-2 gap-y-2 text-base">
        //                                 <h3 class="inline-flex flex-wrap items-center gap-x-1 gap-y-2 font-semibold leading-none">
        //                                     <a class="gap-x-2 text-black hover:underline" href="https://hepl.stanford.edu/">Network Dynamics Laboratory</a>
        //                                     <span class="">
        //                                         <div class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">Atlanta, GA</div>
        //                                     </span>
        //                                 </h3>
        //                                 <div class="flex-0 text-sm tabular-nums text-gray-500">Jan 2019
        //                                     -
        //                                     Aug 2019</div>
        //                             </div>
        //                             <h4 class="font-mono text-sm leading-none">Software Developer</h4>
        //                         </div>
        //                         <div class="text-muted-foreground hover:none text-pretty font-mono mt-2 text-xs">Under Professor Leo Hollberg (Stanford Physics Department, Hansen Experimental Physics Lab (HEPL)), I conducted laser physics and optics research, spending most of my time characterizing a Silicon Nitride waveguide chip for use with a femtosecond frequency comb. This investigation probed the possibility of using these chips, which are cheap and readily available, to replace current atomic frequency references in orbiting satellites.</div>
        //                     </div>
        //                 </section>
        //                 <section class="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
        //                     <h2 class="text-xl font-bold">Projects</h2>
        //                     <div class="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
        //                         <a href="https://drive.google.com/file/d/1-QT4RPXGJrtEQvKPOuKxRfoLKJRapkM5/view?usp=sharing" class="">
        //                             <div class="bg-card text-card-foreground rounded-lg border-muted flex flex-col overflow-hidden border p-3 hover:bg-zinc-50">
        //                                 <div class="flex flex-col space-y-1.5">
        //                                     <div class="space-y-1">
        //                                         <h3 class="font-semibold tracking-tight inline-flex items-center gap-1 text-base">Accelerated Generative Agents

        //                                         </h3>
        //                                         <div class="hidden font-mono text-xs underline print:visible">drive.google.comfile/d/1-QT4RPXGJrtEQvKPOuKxRfoLKJRapkM5/view?usp=sharing</div>
        //                                         <p class="text-muted-foreground font-mono text-xs hover:no-underline">Parallelizing generative agents simulations.</p>
        //                                     </div>
        //                                 </div>
        //                                 <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-auto flex">
        //                                     <div class="mt-2 flex flex-wrap gap-1">
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">CUDA</div>
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">Python</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="https://drive.google.com/file/d/1Mi5pFb_F3e9fqZzYqAR2TsbDLTIkMSFy/view?usp=sharing" class="">
        //                             <div class="bg-card text-card-foreground rounded-lg border-muted flex flex-col overflow-hidden border p-3 hover:bg-zinc-50">
        //                                 <div class="flex flex-col space-y-1.5">
        //                                     <div class="space-y-1">
        //                                         <h3 class="font-semibold tracking-tight inline-flex items-center gap-1 text-base">Characterizing Diode Pumped Solid State Lasers

        //                                         </h3>
        //                                         <div class="hidden font-mono text-xs underline print:visible">drive.google.comfile/d/1Mi5pFb_F3e9fqZzYqAR2TsbDLTIkMSFy/view?usp=sharing</div>
        //                                         <p class="text-muted-foreground font-mono text-xs hover:no-underline">Characterizing Si3N4 waveguide chips for use as optical frequency reference in satellites</p>
        //                                     </div>
        //                                 </div>
        //                                 <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-auto flex">
        //                                     <div class="mt-2 flex flex-wrap gap-1">
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">Python</div>
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">SQL</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="https://drive.google.com/file/d/14fBWzOvAjt_cAJfC_l8pWCJD1dkbFjGz/view?usp=sharing" class="">
        //                             <div class="bg-card text-card-foreground rounded-lg border-muted flex flex-col overflow-hidden border p-3 hover:bg-zinc-50">
        //                                 <div class="flex flex-col space-y-1.5">
        //                                     <div class="space-y-1">
        //                                         <h3 class="font-semibold tracking-tight inline-flex items-center gap-1 text-base">Groups and Symmetry of Rubik &#x27;s Cubes

        //                                         </h3>
        //                                         <div class="hidden font-mono text-xs underline print:visible">drive.google.comfile/d/14fBWzOvAjt_cAJfC_l8pWCJD1dkbFjGz/view?usp=sharing</div>
        //                                         <p class="text-muted-foreground font-mono text-xs hover:no-underline">Analysis of the Rubik &#x27;s Cube toy from a Group Theoretic perspective</p>
        //                                     </div>
        //                                 </div>
        //                                 <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-auto flex">
        //                                     <div class="mt-2 flex flex-wrap gap-1">
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">Group Theory</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="https://drive.google.com/file/d/19EVkJpexwr10DTzXwKWwathM5FV6V6QA/view?usp=sharing" class="">
        //                             <div class="bg-card text-card-foreground rounded-lg border-muted flex flex-col overflow-hidden border p-3 hover:bg-zinc-50">
        //                                 <div class="flex flex-col space-y-1.5">
        //                                     <div class="space-y-1">
        //                                         <h3 class="font-semibold tracking-tight inline-flex items-center gap-1 text-base">ML for Pulsar Identification

        //                                         </h3>
        //                                         <div class="hidden font-mono text-xs underline print:visible">drive.google.comfile/d/19EVkJpexwr10DTzXwKWwathM5FV6V6QA/view?usp=sharing</div>
        //                                         <p class="text-muted-foreground font-mono text-xs hover:no-underline">Application of machine learning methods to identify and categorize radio pulsar signal candidates</p>
        //                                     </div>
        //                                 </div>
        //                                 <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-auto flex">
        //                                     <div class="mt-2 flex flex-wrap gap-1">
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">Python</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="https://drive.google.com/file/d/1hyZbK-3kFAAirSfcvg01mnH-ezila7_o/view?usp=sharing" class="">
        //                             <div class="bg-card text-card-foreground rounded-lg border-muted flex flex-col overflow-hidden border p-3 hover:bg-zinc-50">
        //                                 <div class="flex flex-col space-y-1.5">
        //                                     <div class="space-y-1">
        //                                         <h3 class="font-semibold tracking-tight inline-flex items-center gap-1 text-base">Image Captioning Metrics Evaluations

        //                                         </h3>
        //                                         <div class="hidden font-mono text-xs underline print:visible">drive.google.comfile/d/1hyZbK-3kFAAirSfcvg01mnH-ezila7_o/view?usp=sharing</div>
        //                                         <p class="text-muted-foreground font-mono text-xs hover:no-underline">Applicability and limitations of reference-based metrics for evaluating image captions for Blind and Low Vision Technology Users</p>
        //                                     </div>
        //                                 </div>
        //                                 <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-auto flex">
        //                                     <div class="mt-2 flex flex-wrap gap-1">
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">Python</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                         <a href="https://drive.google.com/file/d/1OpFe6uFOjeq0uyiFj16TCTQTtTpSMOut/view?usp=sharing" class="">
        //                             <div class="bg-card text-card-foreground rounded-lg border-muted flex flex-col overflow-hidden border p-3 hover:bg-zinc-50">
        //                                 <div class="flex flex-col space-y-1.5">
        //                                     <div class="space-y-1">
        //                                         <h3 class="font-semibold tracking-tight inline-flex items-center gap-1 text-base">LIDETECT

        //                                         </h3>
        //                                         <div class="hidden font-mono text-xs underline print:visible">drive.google.comfile/d/1OpFe6uFOjeq0uyiFj16TCTQTtTpSMOut/view?usp=sharing</div>
        //                                         <p class="text-muted-foreground font-mono text-xs hover:no-underline">Antagonistic Turing Test game and case study of deception in AI chatbots</p>
        //                                     </div>
        //                                 </div>
        //                                 <div class="text-muted-foreground hover:none text-pretty font-mono text-sm mt-auto flex">
        //                                     <div class="mt-2 flex flex-wrap gap-1">
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">Python</div>
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">Next.JS</div>
        //                                         <div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">React</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                     </div>
        //                 </section>
        //             </section>
        //         </div>
        //         <p class="border-t-muted text-muted-foreground fixed bottom-0 left-0 right-0 hidden border-t bg-white p-1 text-center text-sm xl:block print:hidden">
        //             Press
        //             <kbd class="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
        //                 <span class="text-xs">⌘</span>
        //                 K
        //             </kbd>
        //             to open the command menu
        //         </p>
        //         <button class="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 fixed bottom-4 right-4 flex rounded-full shadow-2xl xl:hidden print:hidden">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-command my-6 size-6">
        //                 <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
        //             </svg>
        //         </button>
        //     </main>
        // </body>
    );
}

export default App;
