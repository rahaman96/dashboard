import React from 'react';

const Header = () => {
  return (
    <div>
      <header class="bg-gray-900 text-white">
        <div class="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between">
          <div class="flex items-center">
            <a href="#" class="text-xl font-bold">Logo</a>
          </div>
          <nav class="hidden md:flex md:items-center md:justify-end">
            <a href="#" class="ml-4">Home</a>
            <a href="#" class="ml-4">About</a>
            <a href="#" class="ml-4">Services</a>
            <a href="#" class="ml-4">Contact</a>
          </nav>
          <button class="md:hidden">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="hidden md:block md:fle md:items-center">
            <a href="#" class="ml-4">Sign In</a>
            <a href="#" class="ml-4">Sign Up</a>
          </div>
        </div>
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-4">
            <a href="#" class="block">Home</a>
            <a href="#" class="block mt-2">About</a>
            <a href="#" class="block mt-2">Services</a>
            <a href="#" class="block mt-2">Contact</a>
            <a href="#" class="block mt-2">Sign In</a>
            <a href="#" class="block mt-2">Sign Up</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
