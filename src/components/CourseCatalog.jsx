
import React from 'react';

function CourseCatalog() {
const courseList = [
{ id: 101, title: 'Web Development in React', code: 'BCA-501', credits: 4 },
{ id: 102, title: 'Database Management Systems', code: 'BCA-502', credits: 3 },
{ id: 103, title: 'Python Data Science', code: 'BCA-503', credits: 4 },
{ id: 104, title: 'Cloud Computing Fundamentals', code: 'BCA-504', credits: 3 }
];

return (
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-purple-950/40 sm:p-8">

<div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl"></div>

<div className="relative z-10">
<div className="mb-8 flex items-center gap-4">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 text-2xl shadow-lg shadow-purple-500/30">
🎓
</div>
<div>
<p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-violet-400">Academic Portal</p>
<h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">Course Catalog</h2>
<p className="mt-1 text-sm text-slate-400">Explore your learning journey</p>
</div>
</div>

<div className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
<div>
<p className="text-sm font-medium text-slate-400">Available Courses</p>
<p className="mt-1 text-3xl font-black text-white">{courseList.length}<span className="ml-2 text-sm font-medium text-slate-400">Courses</span></p>
</div>
<div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-400">
● ALL ACTIVE
</div>
</div>

<div className="space-y-4">
{courseList.map(function(course) {
return (
<div key={course.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-slate-800 hover:shadow-xl hover:shadow-violet-950/40 sm:p-5">
<div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-500 to-blue-500 opacity-60 transition-all duration-300 group-hover:w-1.5 group-hover:opacity-100"></div>

<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="mb-3 flex items-center gap-2">
<span className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-violet-300">
{course.code}
</span>
<span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">COURSE</span>
</div>

<h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-violet-300 sm:text-lg">
{course.title}
</h3>

<p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
Department Curriculum
</p>
</div>

<div className="flex shrink-0 flex-col items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-violet-500/15 to-blue-500/15 px-3 py-3 transition-all duration-300 group-hover:border-violet-400/50 group-hover:from-violet-500/25 group-hover:to-blue-500/25 sm:px-4">
<span className="text-2xl font-black text-white">{course.credits}</span>
<span className="mt-1 text-[9px] font-extrabold uppercase tracking-widest text-blue-300">Credits</span>
</div>
</div>
</div>
);
})}
</div>

<div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-xs text-slate-500">Learn • Build • Grow</p>
<p className="text-xs font-semibold text-violet-400">BCA Department ✦</p>
</div>
</div>
</div>
);
}

export default CourseCatalog;


