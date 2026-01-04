import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      features: ['Up to 5 projects', 'Basic analytics', 'Community support'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$38',
      period: '/mo',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
      ],
      popular: true,
    },
    {
      name: 'Business',
      price: '$56',
      period: '/mo',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Advanced security',
        'Dedicated account manager',
        'Custom workflows',
      ],
      popular: false,
    },
    {
      name: 'Enterprise',
      price: '$72',
      period: '/mo',
      features: [
        'Everything in Business',
        'Unlimited team members',
        'SSO & SAML',
        'SLA guarantee',
        'White-label options',
      ],
      popular: false,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        
        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <section className="bg-linear-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your needs. All plans include our core features.
            </p>
            
            <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md text-sm shadow-sm">
                Monthly
              </button>
              <button className="px-6 py-2 text-gray-700 font-medium rounded-md text-sm hover:bg-gray-200 transition-colors">
                Annually
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl border-2 ${
                  plan.popular
                    ? 'border-blue-600 shadow-xl'
                    : 'border-gray-200 shadow-md'
                } p-6 flex flex-col hover:shadow-lg transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                      <Star className="w-3 h-3 fill-white" strokeWidth={0} />
                      POPULAR
                    </div>
                  </div>
                )}

                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-lg text-gray-500 font-normal ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 font-semibold rounded-lg transition-colors text-sm ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  Get Started
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  No credit card required
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Pricing;