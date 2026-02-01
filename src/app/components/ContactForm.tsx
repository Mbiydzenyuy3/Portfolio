'use client'

import { useForm, ValidationError } from '@formspree/react'
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mgvrwajn')

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-green-50 dark:bg-green-900 rounded-lg shadow-md">
        <HiCheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Thank you for your message!
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full px-4 py-3 rounded-md shadow-sm 
                     bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600
                     focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full px-4 py-3 rounded-md shadow-sm 
                     bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600
                     focus:ring-blue-500 focus:border-blue-500"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full px-4 py-3 rounded-md shadow-sm 
                     bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600
                     focus:ring-blue-500 focus:border-blue-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full flex justify-center py-3 px-6 border border-transparent 
                     rounded-md shadow-sm text-lg font-medium text-white 
                     bg-blue-600 hover:bg-blue-700 
                     dark:bg-blue-500 dark:hover:bg-blue-600
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {state.errors && !state.succeeded && (
        <div className="flex items-center text-red-600 dark:text-red-400">
          <HiExclamationCircle className="h-5 w-5 mr-2" />
          <p>Something went wrong. Please check the form and try again.</p>
        </div>
      )}
    </form>
  )
}
