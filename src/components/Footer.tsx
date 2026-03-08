"use client";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-black border-t border-pearl/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Bottom bar */}
        <div className="pt-8 border-t border-pearl/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © 2025 NxGeN. All rights reserved.
          </p>
          <p className="text-xs text-blush tracking-wide">
            NOVEMBER 5–8, 2026 · MIAMI
          </p>
        </div>
      </div>
    </footer>
  );
}
