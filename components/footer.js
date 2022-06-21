export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 items-center">
        <div>
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Cindy Le. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
