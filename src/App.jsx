
import React from 'react';
import CourseCatalog from './components/CourseCatalog';

function App() {
return (
<div className="relative min-h-screen overflow-hidden bg-[#080b18] px-4 py-10 sm:px-8 sm:py-16">

<div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]"></div>
<div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"></div>

<div className="relative mx-auto max-w-2xl">
<div className="mb-8 text-center">
<p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
<span className="h-2 w-2 animate-pulse rounded-full bg-violet-400"></span>
Student Learning Space
</p>
<h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
Your Future,
<span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text pb-1 text-transparent">
Your Courses.
</span>
</h1>
<p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
Discover the subjects that shape your skills and build your future in technology.
</p>
</div>

<CourseCatalog />

<p className="mt-6 text-center text-xs tracking-wide text-slate-600">
© 2026 Student Portal · Designed for learners
</p>
</div>
</div>
);
}

export default App;
