import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FAQ = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          Frequently Asked Question (FAQ)
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">

          {/* Item 1 (open by default) */}
          <div className="collapse collapse-arrow border border-teal-400 bg-white">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title font-semibold text-left">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-left  text-gray-600">
              A posture corrector works by providing support and gentle alignment
              to your shoulders, back, and spine, encouraging you to maintain
              proper posture throughout the day. It helps align your shoulders
              and improves body positioning.
            </div>
          </div>

          {/* Item 2 */}
          <div className="collapse collapse-arrow border border-teal-400 bg-white">
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold text-left">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-left text-gray-600">
              Yes, it is designed to be adjustable and comfortable for most body
              types and ages.
            </div>
          </div>

          {/* Item 3 */}
          <div className="collapse collapse-arrow border border-teal-400 bg-white">
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold text-left">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-left text-gray-600">
              Regular use may help improve posture and reduce discomfort caused
              by poor alignment.
            </div>
          </div>

          {/* Item 4 */}
          <div className="collapse collapse-arrow border border-teal-400 bg-white">
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold text-left">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-left text-gray-600">
              Some versions include smart reminders or vibration alerts to help
              maintain proper posture.
            </div>
          </div>

          {/* Item 5 */}
          <div className="collapse collapse-arrow border border-teal-400 bg-white">
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold text-left">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-left text-gray-600">
              You’ll receive email or app notifications once the product becomes
              available.
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="inline-flex items-center gap-3 bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            See More FAQ’s
            <span className="bg-black text-white p-2 rounded-full">
              <FiArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;