import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'STARTER',
      price: 'Free',
      features: ['Up to 5 projects', 'Basic analytics', 'Community support'],
      popular: false,
    },
    {
      name: 'PRO',
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
      name: 'BUSINESS',
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
      name: 'ENTERPRISE',
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
    <section className="bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
          <div className="flex mx-auto border-2 border-blue-500 rounded-lg overflow-hidden mt-6 shadow-md">
            <button className="py-2 px-6 bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold">
              Monthly
            </button>
            <button className="py-2 px-6 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
              Annually
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {plans.map((plan) => (
            <div key={plan.name} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div
                className={`h-full p-6 rounded-2xl ${
                  plan.popular
                    ? 'border-2 border-blue-500 shadow-xl'
                    : 'border-2 border-gray-300 shadow-lg'
                } flex flex-col relative overflow-hidden bg-white hover:shadow-2xl transition-shadow`}
              >
                {plan.popular && (
                  <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 tracking-widest text-xs font-semibold absolute right-0 top-0 rounded-bl-lg">
                    POPULAR
                  </span>
                )}

                <h2 className="text-sm tracking-widest font-semibold mb-2 text-gray-600">
                  {plan.name}
                </h2>

                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 font-bold">
                  <span>{plan.price}</span>
                  {plan.period && (
                    <span className="text-lg ml-1 font-normal text-gray-500">
                      {plan.period}
                    </span>
                  )}
                </h1>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <p key={feature} className="flex items-center text-gray-600">
                      <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-full">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}
                </div>

                <button
                  className={`mt-auto flex items-center justify-center ${
                    plan.popular
                      ? 'bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500'
                      : 'bg-gray-400 hover:bg-gray-500'
                  } text-white font-semibold py-3 px-4 w-full rounded-lg shadow-md hover:shadow-lg transition-all`}
                >
                  Get Started
                </button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
