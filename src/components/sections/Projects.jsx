import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* --- Note Nexus --- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Note Nexus</h3>
              <p className="text-gray-400 mb-4">
                A real-time note-sharing platform built using the MERN Stack. It
                includes AI-based note summarization, cloud storage, and
                responsive UI for seamless collaboration between students and
                educators.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "MongoDB",
                  "Express.js",
                  "React.js",
                  "Node.js",
                  "Redux",
                  "AI Integration",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/divyatripathi1406"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>

            {/* --- Expense Tracker --- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>
              <p className="text-gray-400 mb-4">
                A web app to track income and expenses, visualize spending
                trends, and set financial goals. Designed with an intuitive UI
                and real-time chart updates for better budgeting insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "JavaScript",
                  "CSS",
                  "Chart.js",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/divyatripathi1406"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>

            {/* --- PrepInsta AI Interview Website --- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                PrepInsta AI Interview Prep
              </h3>
              <p className="text-gray-400 mb-4">
                An AI-powered interview preparation platform using the MERN
                Stack. It offers AI-driven question generation, mock interviews,
                and instant performance feedback to help students prepare
                efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "MERN Stack",
                  "OpenAI API",
                  "TailwindCSS",
                  "JWT Auth",
                  "React.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/divyatripathi1406"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>

            {/* --- Data Analytics Dashboard --- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Data Analytics Dashboard
              </h3>
              <p className="text-gray-400 mb-4">
                An interactive Power BI dashboard designed for data-driven
                insights and performance visualization. Highlights analytical
                thinking and storytelling through visual data representation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Power BI", "SQL", "Excel", "Data Visualization"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://github.com/divyatripathi1406"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Dashboard →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};



// import { RevealOnScroll } from "../RevealOnScroll";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//               <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable cloud infrastructure management with real-time
//                 monitoring and automated scaling.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
//                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
//               <p className="text-gray-400 mb-4">
//                 ML-powered data visualization platform with predictive analytics
//                 and interactive reports.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
//               <p className="text-gray-400 mb-4">
//                 Full-stack e-commerce with modern UI, secure payment
//                 integration, and customizable product inventory.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
//                   (tech) => (
//                     <span
//                       key={tech}
//                       className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                     >
//                       {tech}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable chat platform supporting real-time messaging, presence,
//                 and group chat features.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center ">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
