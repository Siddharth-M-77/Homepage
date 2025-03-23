import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingTier = ({ name, description, price, features, recommended = false, color }) => {
    return (
        <div className={`bg-white rounded-2xl p-8 shadow-lg border ${recommended ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-gray-100'} transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative reveal-animation`}>
            {recommended && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                </div>
            )}

            <div className={`text-${color} text-xl font-bold mb-2`}>{name}</div>
            <p className="text-muted-foreground mb-6 text-sm">{description}</p>

            <div className="mb-6">
                <span className="text-3xl font-bold">${price}</span>
                <span className="text-muted-foreground">/month</span>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        {feature.included ? (
                            <Check size={18} className={`text-${color} mt-0.5 flex-shrink-0`} />
                        ) : (
                            <X size={18} className="text-gray-300 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>{feature.text}</span>
                    </li>
                ))}
            </ul>

            <a
                href="#"
                className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${recommended
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                    }`}
            >
                Get Started
            </a>
        </div>
    );
};

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Perfect for individuals and small projects',
            price: billingCycle === 'monthly' ? 19 : 15,
            color: 'blue-500',
            features: [
                { text: 'Up to 10 projects', included: true },
                { text: 'Basic templates', included: true },
                { text: 'Limited storage (5GB)', included: true },
                { text: 'Basic support', included: true },
                { text: 'Advanced features', included: false },
                { text: 'Custom integrations', included: false },
            ]
        },
        {
            name: 'Professional',
            description: 'Ideal for growing teams and businesses',
            price: billingCycle === 'monthly' ? 49 : 39,
            color: 'blue-500',
            recommended: true,
            features: [
                { text: 'Unlimited projects', included: true },
                { text: 'All templates included', included: true },
                { text: 'Extended storage (50GB)', included: true },
                { text: 'Priority support', included: true },
                { text: 'Advanced features', included: true },
                { text: 'Custom integrations', included: false },
            ]
        },
        {
            name: 'Enterprise',
            description: 'For large organizations and complex needs',
            price: billingCycle === 'monthly' ? 99 : 79,
            color: 'blue-500',
            features: [
                { text: 'Unlimited projects', included: true },
                { text: 'All templates included', included: true },
                { text: 'Unlimited storage', included: true },
                { text: 'Dedicated support', included: true },
                { text: 'Advanced features', included: true },
                { text: 'Custom integrations', included: true },
            ]
        }
    ];

    return (
        <section id="pricing" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16 lg:mb-24 reveal-animation">
                    <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full font-medium text-sm">
                        Pricing Plans
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Simple, Transparent <span className="text-blue-500">Pricing</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        Choose the plan that fits your needs. All plans include core features, regular updates, and 99.9% uptime guarantee.
                    </p>

                    <div className="flex items-center justify-center mb-8 gap-3">
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${billingCycle === 'yearly'
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-black'
                                }`}
                        >
                            Yearly Billing <span className="text-xs ml-1 text-rose-500">Save 20%</span>
                        </button>

                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${billingCycle === 'monthly'
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-black'
                                }`}
                        >
                            Monthly Billing
                        </button>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingTier
                            key={index}
                            {...plan}
                            style={{ transitionDelay: `${100 + index * 100}ms` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;