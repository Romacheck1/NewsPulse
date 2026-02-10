import React from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionHeader title="About NewsPulse" />
      
      <div className="mt-8 space-y-6 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Mission</h2>
          <p className="leading-relaxed">
            NewsPulse is a modern news aggregation platform designed to keep you informed 
            with the latest stories that matter. We curate news from various categories 
            including Technology, Business, Science, Health, and Sports, making it easy 
            for you to stay up-to-date with what's happening around the world.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Features</h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>Browse news articles across multiple categories</li>
            <li>Search for specific topics and stories</li>
            <li>Save your favorite articles for later reading</li>
            <li>Clean, modern interface designed for easy reading</li>
            <li>Responsive design that works on all devices</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">How It Works</h2>
          <p className="leading-relaxed mb-3">
            NewsPulse aggregates news articles from various sources and presents them 
            in an organized, easy-to-navigate format. You can:
          </p>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>Use the search bar to find articles on specific topics</li>
            <li>Filter news by category using the category chips</li>
            <li>Click on any article to read the full story</li>
            <li>Save articles you want to revisit later</li>
            <li>Manage your saved articles from the Saved page</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Contact</h2>
          <p className="leading-relaxed">
            Have questions or feedback? We'd love to hear from you! 
            NewsPulse is committed to providing you with the best news reading experience.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important Disclaimer:</strong> All news articles displayed on NewsPulse are fictional 
                  and created for demonstration purposes only. They are not real news stories and should not be 
                  treated as factual information. This is a portfolio/demo project showcasing web development 
                  capabilities.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 NewsPulse. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

