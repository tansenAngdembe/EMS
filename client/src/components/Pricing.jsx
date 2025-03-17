import React from 'react';
import { Check, Users, Building2, Building as Buildings } from 'lucide-react';
import { Link } from 'react-router-dom';
function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon, 
  highlighted = false 
}) {
  return (
    <div className={`rounded-2xl p-8 ${
      highlighted 
        ? 'bg-blue-600 text-white shadow-xl scale-105 transform' 
        : 'bg-white text-gray-900'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Icon className={`w-8 h-8 ${highlighted ? 'text-white' : 'text-blue-600'}`} />
      </div>
      <div className="mb-6">
        <p className="text-4xl font-bold mb-2">NPR {price}</p>
        <p className={`${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${
              highlighted ? 'text-blue-200' : 'text-blue-600'
            }`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
        highlighted
          ? 'bg-white text-blue-600 hover:bg-blue-50'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      title: 'Startup',
      price: '999',
      description: 'Perfect for small teams up to 10 employees',
      icon: Users,
      features: [
        'Up to 10 employees',
        'Basic time tracking',
        'Employee profiles',
        'Leave management',
        'Basic reporting'
      ]
    },
    {
      title: 'Business',
      price: '2999',
      description: 'Ideal for growing companies up to 50 employees',
      icon: Building2,
      features: [
        'Up to 50 employees',
        'Advanced time tracking',
        'Performance reviews',
        'Custom workflows',
        'Advanced analytics',
        'Priority support'
      ],
      highlighted: true
    },
    {
      title: 'Enterprise',
      price: '7999',
      description: 'For large organizations with advanced needs',
      icon: Buildings,
      features: [
        'Unlimited employees',
        'Custom integrations',
        'Dedicated account manager',
        'White-label options',
        'Advanced security',
        'API access',
        '24/7 phone support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
        <div><Link to="/">Go Back</Link></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your team's needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;