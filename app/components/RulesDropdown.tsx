"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const RULES_ITEMS = [
  {
    label: "BASE BUILDING & STRUCTURE",
    href: "https://discord.com/channels/1375764048045408327/1475160342056403218",
  },
  {
    label: "IDENTITY CONSISTENCY PROTOCOL",
    href: "https://discord.com/channels/1375764048045408327/1475159327328440516",
  },
  {
    label: "PROPERTY & VEHICLE SECURITY",
    href: "https://discord.com/channels/1375764048045408327/1475157597782020257",
  },
  {
    label: "RESTART & LOOT INTEGRITY",
    href: "https://discord.com/channels/1375764048045408327/1475156781087985818",
  },
  {
    label: "SECRECY PROTOCOL",
    href: "https://discord.com/channels/1375764048045408327/1475155132412072107",
  },
  {
    label: "CONDUCT PROTOCOL",
    href: "https://discord.com/channels/1375764048045408327/1475153871956607068",
  },
  {
    label: "CLASSIFIED ENTRY PROTOCOL",
    href: "https://discord.com/channels/1375764048045408327/1475150435768598701",
  },
] as const;

export function RulesDropdown() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (buttonRef.current && typeof document !== "undefined") {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        isOpen &&
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div className="relative">
        <button
          ref={buttonRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!isOpen) updatePosition();
            setIsOpen((prev) => !prev);
          }}
          onMouseDown={(e) => e.stopPropagation()}
          className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label="Rules menu"
        >
          <span className="flex items-center gap-1">
            {t.nav.rules}
            <svg
              className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </div>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={dropdownRef}
            role="menu"
            className="fixed z-[9999] mt-2 max-h-[80vh] w-72 overflow-auto rounded-lg border border-zinc-700 bg-zinc-900 py-1 shadow-xl"
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {RULES_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-left text-sm text-zinc-300 transition-colors hover:bg-amber-500/20 hover:text-amber-500"
              >
                {item.label}
              </Link>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
