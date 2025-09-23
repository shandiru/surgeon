// src/components/SmearTestFooter.jsx
export default function SmearTestFooter() {
  return (
    <footer className="bg-white py-10 mt-16 rounded-xl border-t border-[#ff97b3]/50 shadow-sm">
      <div className="container mx-auto px-6 text-center space-y-4">
        {/* Message */}
        <p className="text-[#7a2f4f] text-base sm:text-lg">
          For more information or to book an appointment, contact your healthcare provider.
        </p>

        {/* Divider */}
        <div className="w-20 mx-auto border-t-2 border-[#b03b66]/50"></div>

        {/* Copyright */}
        <p className="text-[#b03b66]/80 text-sm">
          © {new Date().getFullYear()} Women’s Health Awareness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
