const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <span className="text-1xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Blog Posts
            </span>
          </div>

          <p className="mt-4 ml-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
