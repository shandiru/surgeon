// src/components/SmearTestFooter.jsx
export default function SmearTestFooter() {
  return (
    <footer className="bg-white py-10 mt-16 rounded-xl border-t border-light-pink-2/50 shadow-sm">
      <div className="container mx-auto px-6 text-center space-y-4">
        {/* Message */}
        <p className="text-black text-base sm:text-lg">
          For more information or to book an appointment, contact your healthcare provider.
        </p>

        {/* Divider */}
        <div className="w-20 mx-auto border-t-2 border-primary-pink/50"></div>

        {/* Copyright */}
        <p className="text-primary-pink/80 text-sm">
          © {new Date().getFullYear()} Women’s Health Awareness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
