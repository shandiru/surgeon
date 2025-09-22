// src/components/SmearTestFooter.jsx
export default function SmearTestFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#ff97b3] to-[#ffb3c9] py-10 mt-16 rounded-xl">
      <div className="container mx-auto px-6 text-center space-y-4">
        {/* Message */}
        <p className="text-white text-base sm:text-lg">
          For more information or to book an appointment, contact your healthcare provider.
        </p>

        {/* Divider */}
        <div className="w-20 mx-auto border-t-2 border-white/60"></div>

        {/* Copyright */}
        <p className="text-white/80 text-sm">
          © {new Date().getFullYear()} Women’s Health Awareness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
