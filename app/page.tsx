'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiGift } from 'react-icons/fi';
import Image from 'next/image';
import { projects, type Project } from '@/data/projects';
import { inProgressProjects } from '@/data/inProgressProjects'; // External import
import { SiReact, SiTypescript, SiNodedotjs, SiJouav, SiSpring, SiPython, SiFlask, SiNextdotjs } from "react-icons/si";

// 技能与图标
const skillIcons = {
  React: <SiReact className="text-sky-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  'Node.js': <SiNodedotjs className="text-green-600" />,
  Java: <SiJouav className="text-red-500" />,
  'Spring Boot': <SiSpring className="text-green-700" />,
  Python: <SiPython className="text-yellow-500" />,
  Flask: <SiFlask className="text-blue-600" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
};

const skills: (keyof typeof skillIcons)[] = [
  'React',
  'TypeScript',
  'Node.js',
  'Java',
  'Spring Boot',
  'Python',
  'Flask',
  'Next.js',
];

const contactLinks = [
  { icon: <FiGithub />, url: 'https://github.com/YSevenK' },
  //{ icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourname' },
  { icon: <FiMail />, url: 'mailto:ysevenk.k7@email.com' },
  { icon: <FiGift />, url: 'https://blackpineapple.asia' }
];

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        const current = Array.from(sections).findIndex((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        });
        setActiveSection(current === 0 ? 'home' : current === 1 ? 'skills' : current === 2 ? 'projects' : 'inprogress');
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-black scroll-smooth">
      {/* 右侧功能区 */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <motion.div
          className="flex flex-col gap-6 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {contactLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              {link.icon}
            </a>
          ))}
        </motion.div>
      </aside>

      {/* 顶部滚动进度条 */}
      <motion.div className="fixed left-0 top-0 h-1 bg-blue-600 z-50" style={{ scaleX: scrollYProgress }} />

      {/* 主内容 */}
      <main className="max-w-6xl mx-auto px-4 py-20 space-y-40">
        {/* 首页 */}
        <section className="min-h-screen flex items-center">
          <motion.div className="space-y-8 relative" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <motion.div className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-200 to-purple-200 blur-3xl opacity-30 dark:opacity-20" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              你 好
              <span className="block text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mt-4">我是 YSevenK</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">Become water, my friend</p>
          </motion.div>
        </section>

        {/* 技术栈 */}
        <section id="skills" className="space-y-12 scroll-mt-20">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }} className="text-4xl font-bold text-gray-800 dark:text-white">
            技术栈
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="flex items-center gap-3 p-4 rounded-xl shadow-md bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:-translate-y-1 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 120 }}
              >
                <div className="text-3xl">{skillIcons[skill]}</div>
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 成果集 */}
        <section id="projects" className="space-y-12 scroll-mt-20">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }} className="text-4xl font-bold text-gray-800 dark:text-white">
            成果集
          </motion.h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(max-width: 768px) 100vw, 50vw" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJp08sG7wAAAABJRU5ErkJggg==" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 正在做 */}
        <section id="inprogress" className="space-y-12 scroll-mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="text-4xl font-bold text-gray-800 dark:text-white"
          >
            正在做(学)
          </motion.h2>

          <div className="grid gap-8">
            {inProgressProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
