'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFolderOpen, FaPenNib  } from 'react-icons/fa';

const Header = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasBorder(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 mx-auto w-full transition-colors duration-300 ${
        hasBorder
          ? 'border-b border-neutral-800 bg-neutral-950 shadow-xl shadow-lime-400/5'
          : ''
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-6">
        {/* 👋 Logo / Name */}
        <Link
          href="/"
          className="flex text-2xl font-semibold leading-none whitespace-nowrap text-lime-400"
        >
          Victor Johnson
        </Link>

        {/* 🧭 Desktop Navigation */}
        <nav className="hidden items-center space-x-8 text-base text-lime-400 md:flex">
          {/* Projects */}
          <Link href="/projects" className="inline-flex items-center gap-1.5 hover:text-lime-300">
            <FaFolderOpen className="h-4 w-4" />
            Projects
          </Link>

          {/* Blog */}
          <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-lime-300">
            <FaPenNib className="h-4 w-4" />
            Blog
          </Link>

          {/* 🔗 GitHub */}
          <a
            href="https://github.com/victorjohnsonk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-lime-300"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>

          {/* 🔗 LinkedIn */}
          <a
            href="https://www.linkedin.com/in/victor-johnson-7a4700386/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-lime-300"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>

          {/* ✉️ Email */}
          <a
            href="mailto:hello@victorjohnson.online"
            className="inline-flex items-center gap-1.5 hover:text-lime-300"
          >
            <FaEnvelope className="h-4 w-4" />
            Email
          </a>
        </nav>

        {/* 🍔 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-4 flex flex-col items-end justify-center space-y-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[3px] w-7 bg-lime-400 transition-all ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          ></span>
          <span
            className={`h-[3px] w-7 bg-lime-400 transition-all ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`h-[3px] w-7 bg-lime-400 transition-all ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* 📱 Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur-md">
          <nav className="flex flex-col items-start px-6 py-5 space-y-4 text-lg text-lime-400">
            <Link
            href="/projects"
            className="inline-flex items-center gap-2 hover:text-lime-300"
            onClick={() => setMenuOpen(false)}
          >
            <FaFolderOpen className="h-5 w-5" />
            Projects
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 hover:text-lime-300"
            onClick={() => setMenuOpen(false)}
          >
            <FaPenNib className="h-5 w-5" />
            Blog
          </Link>

            {/* GitHub */}
            <a
              href="https://github.com/victorjohnsonk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-lime-300"
              onClick={() => setMenuOpen(false)}
            >
              <FaGithub className="h-5 w-5" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/victor-johnson-7a4700386/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-lime-300"
              onClick={() => setMenuOpen(false)}
            >
              <FaLinkedin className="h-5 w-5" />
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:hello@victorjohnson.online"
              className="inline-flex items-center gap-2 hover:text-lime-300"
              onClick={() => setMenuOpen(false)}
            >
              <FaEnvelope className="h-5 w-5" />
              Email
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
