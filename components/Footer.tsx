const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 px-6 text-center text-sm">
      &copy; {currentYear} Syamoji.works. All rights reserved.
    </footer>
  );
}
