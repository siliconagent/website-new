export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SiliconAgent.ai. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
