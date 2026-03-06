import React from "react";
import { Phone, MessageCircle, Headset, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const ContactUs: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-[#152d32]">
      <Breadcrumb />

      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Contact us</h1>
        <p className="text-base text-gray-700 max-w-2xl mx-auto">
          We&apos;re here to help. Find the right way to get in touch or use our
          self‑serve tools to manage your trip faster.
        </p>
      </header>

      {/* Travel help & support CTA */}
      <section className="mb-10">
        <div className="rounded-2xl bg-[#f5fafb] border border-[#00A0DF]/20 px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Travel help and support</h2>
            <p className="text-sm text-gray-700">
              Planning travel, managing your trip, or preparing to fly? Explore our most
              helpful topics in one place.
            </p>
          </div>
          <a
            href="#common-topics"
            className="inline-flex items-center justify-center rounded-full bg-[#00A0DF] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0084b7] transition-colors"
          >
            View common topics
          </a>
        </div>
      </section>

      {/* Common topics grid */}
      <section id="common-topics" className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Explore common topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Baggage",
            "Flight changes and cancellations",
            "Refunds",
            "Manage your trip",
            "Review your itinerary",
            "Frequently asked questions",
          ].map((topic) => (
            <div
              key={topic}
              className="rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-1">{topic}</h3>
              <p className="text-sm text-gray-700">
                Learn more about {topic.toLowerCase()} and find step‑by‑step guidance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Chat & call options */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <MessageCircle className="h-6 w-6 text-[#00A0DF]" />
            <h2 className="text-xl font-semibold">Chat with an agent</h2>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Our live chat agents can help with new flight‑only reservations, baggage,
            changes to existing bookings, and preparing for your trip.
          </p>
          <p className="flex items-center text-sm text-gray-700 mb-4">
            <Clock className="h-4 w-4 mr-2 text-[#00A0DF]" />
            English: 6 a.m. – 8 p.m. MT, seven days a week
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-[#00A0DF] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0084b7] transition-colors"
          >
            Chat with an agent
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Headset className="h-6 w-6 text-[#00A0DF]" />
            <h2 className="text-xl font-semibold">Call us</h2>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Have your reservation code and WestJet Rewards ID (if applicable) ready
            when you call.
          </p>
          <div className="space-y-2 text-sm text-gray-800">
            <div>
              <p className="font-semibold">New or existing bookings &amp; general inquiries</p>
              <p>Toll‑free from North America: <span className="font-mono">1-888-937-8538</span></p>
              <p>Available 24 hours a day, seven days a week</p>
            </div>
            <div className="mt-3">
              <p className="font-semibold">Calling from outside Canada or the U.S.</p>
              <p className="font-mono">+1-403-444-2586</p>
              <p>6 a.m. – 10 p.m. MT, seven days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility & feedback */}
      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Guests with special needs</h2>
          <p className="text-sm text-gray-700 mb-2">
            If you use a teletypewriter (TTY) or are experiencing difficulties accessing
            westjet.com, dedicated support is available.
          </p>
          <p className="text-sm text-gray-800">
            TTY: dial <span className="font-mono">711</span> and request{" "}
            <span className="font-mono">1-888-937-8538</span>.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Share feedback</h2>
          <p className="text-sm text-gray-700 mb-3">
            Have feedback about your experience? Submit a service request or share your
            comments so we can continue improving.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#00A0DF] px-6 py-2 text-sm font-semibold text-[#00A0DF] hover:bg-[#00A0DF] hover:text-white transition-colors"
          >
            Open feedback form
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

