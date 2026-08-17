import React, { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Download, Layers, MapPin, Gamepad2, CheckCircle2, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import * as THREE from 'three';

function Canvas3DScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Sleek Floating 3D Geometric Crystal (Positioned on Far Right, NOT overlapping text)
    const crystalGroup = new THREE.Group();
    crystalGroup.position.set(4.2, 1.2, 0); // Shifted far right behind code panel
    scene.add(crystalGroup);

    const crystalGeo = new THREE.OctahedronGeometry(1.4, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.6,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    crystalGroup.add(crystalMesh);

    const innerCrystalGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const innerCrystalMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
    });
    const innerCrystalMesh = new THREE.Mesh(innerCrystalGeo, innerCrystalMat);
    crystalGroup.add(innerCrystalMesh);

    // Small subtle orbital ring around right crystal
    const ringGeo = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.4 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    crystalGroup.add(ringMesh);

    // 2. Ambient Particles System across space
    const particlesCount = 250;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Mouse Interaction for Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Subtle rotations on right side crystal only
      crystalMesh.rotation.x += 0.006;
      crystalMesh.rotation.y += 0.008;
      innerCrystalMesh.rotation.x -= 0.005;
      innerCrystalMesh.rotation.y += 0.007;
      ringMesh.rotation.z += 0.004;

      particlesMesh.rotation.y -= 0.0008;

      // Parallax smooth lerp
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full absolute inset-0 pointer-events-none z-0" />;
}

export default function Hero3D({ onOpenRecruiter, onOpenResume }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* 3D Subtle Background Canvas */}
      <Canvas3DScene />

      {/* Soft Ambient Radial Background Glows (Non-blocking) */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Left 7 Cols) - Clean & Highly Readable */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs font-semibold text-sky-300 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>BS Computer Science Graduate (2026)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
                <Gamepad2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Unreal Engine 3D Developer</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient-cyan underline decoration-sky-500/40 underline-offset-8">
                  {personalData.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gradient-purple">
                {personalData.title} & Software Engineer
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Building robust full-stack MERN web applications and immersive 3D games.
              Experienced in <span className="text-sky-300 font-semibold">MongoDB, Express, React, Node.js</span>, 
              <span className="text-emerald-300 font-semibold"> Java, Python, SQL</span>, and 
              <span className="text-purple-300 font-semibold"> Unreal Engine C++</span>.
            </p>

            {/* Tech Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Java', 'Python', 'Unreal Engine', 'C++', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-800 rounded-lg hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Impress Recruiter Button */}
              <button
                onClick={onOpenRecruiter}
                className="flex items-center gap-3 px-6 py-3.5 text-base font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-200 pulse-button border border-sky-300/40"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Impress Recruiter Mode</span>
              </button>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200"
              >
                <span>View MERN Projects</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>

              {/* Download CV Button */}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-950/80 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-black text-white">Full MERN</div>
                <div className="text-xs text-slate-400 font-medium">Stack Mastery</div>
              </div>
              <div>
                <div className="text-2xl font-black text-sky-400">6 Months</div>
                <div className="text-xs text-slate-400 font-medium">Giga Developers Intern</div>
              </div>
              <div>
                <div className="text-2xl font-black text-purple-400">Unreal 3D</div>
                <div className="text-xs text-slate-400 font-medium">FYP C++ Engine</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">BS CS '26</div>
                <div className="text-xs text-slate-400 font-medium">Univ of Haripur</div>
              </div>
            </div>

          </div>

          {/* Right Column: Code Config Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              
              {/* Top Panel Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">laiba_fatima.config.js</span>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60">
                  Ready for Hire
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="font-mono text-xs text-slate-300 bg-slate-950/90 p-4 rounded-xl border border-slate-800 space-y-2 overflow-x-auto">
                <p><span className="text-purple-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-sky-400">name</span>: <span className="text-emerald-300">"{personalData.name}"</span>,</p>
                <p className="pl-4"><span className="text-sky-400">role</span>: <span className="text-emerald-300">"Full MERN Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-sky-400">stack</span>: [<span className="text-amber-300">"Mongo"</span>, <span className="text-amber-300">"Express"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>],</p>
                <p className="pl-4"><span className="text-sky-400">gameEngine</span>: <span className="text-emerald-300">"Unreal Engine & C++"</span>,</p>
                <p className="pl-4"><span className="text-sky-400">internship</span>: <span className="text-emerald-300">"Giga Developers Pvt. Ltd."</span>,</p>
                <p className="pl-4"><span className="text-sky-400">location</span>: <span className="text-emerald-300">"Haripur, Pakistan"</span></p>
                <p>&#125;;</p>
              </div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">MERN Architecture</div>
                    <div className="text-[11px] text-slate-400">REST APIs, JWT, MongoDB</div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                  <Gamepad2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">Unreal Engine 3D</div>
                    <div className="text-[11px] text-slate-400">C++ Game Logic FYP</div>
                  </div>
                </div>
              </div>

              {/* Impress Recruiter Action Bar */}
              <div className="pt-2">
                <button
                  onClick={onOpenRecruiter}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-sky-500/30 hover:border-sky-400 rounded-xl flex items-center justify-between text-xs font-bold text-sky-300 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                    Open Recruiter 15-Sec Pitch
                  </span>
                  <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
