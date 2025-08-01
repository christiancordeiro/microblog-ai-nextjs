import { SparklesIcon } from '@heroicons/react/16/solid';
import {
    ChatBubbleBottomCenterTextIcon,
    ArrowsRightLeftIcon,
    PresentationChartLineIcon,
} from '@heroicons/react/24/outline';
import CTAButton from './components/CTAButton';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    iconColor: string;
}

const features: Feature[] = [
    {
        icon: <SparklesIcon className="w-6 h-6" />,
        title: 'Smart Insights',
        description:
            'Trend analysis and optimized hashtag suggestions to maximize your reach and engagement.',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
        icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
        title: 'Adaptive Tone of Voice',
        description:
            'Choose between technical, casual, or motivational tones to effectively reach your target audience.',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
        icon: <ArrowsRightLeftIcon className="w-6 h-6" />,
        title: 'Multiple Variations',
        description:
            'Generate different versions of your content to find the perfect approach for your message.',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        iconColor: 'text-green-600 dark:text-green-400',
    },
    {
        icon: <PresentationChartLineIcon className="w-6 h-6" />,
        title: 'Analytics Dashboard',
        description: 'Track performance metrics...',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        iconColor: 'text-orange-600 dark:text-orange-400',
    },
];

const stats = [
    { number: '10K+', label: 'Posts Generated' },
    { number: '95%', label: 'Engagement Increase' },
    { number: '500+', label: 'Happy Users' },
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            {/* Hero Section */}
            <section
                id="hero"
                className="px-4 pt-24 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8"
            >
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
                            Smart Microblog
                        </span>
                        <span className="block text-blue-600 dark:text-blue-500">
                            Generator & Insights
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-500 dark:text-gray-300">
                        Transform your ideas into impactful social media
                        content. Maximize your reach with AI-optimized posts
                        powered by GitHub Models.
                    </p>
                    <div className="mt-8">
                        <CTAButton href="/generate">Get Started</CTAButton>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="feature"
                className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            Powerful Features
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`${
                                    feature.bgColor
                                } rounded-2xl p-8 shadow-sm transition-all duration-300 animate-[animateIn_0.6s_ease-out_forwards] delay-[${
                                    index * 400
                                }ms] hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className={`rounded-lg bg-white dark:bg-gray-800 p-3 ${feature.iconColor}`}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="stats"
                className="py-16 bg-gray-50 dark:bg-gray-800/10 transition-colors duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            Stats
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/80 dark:bg-gray-900/60 rounded-2xl shadow-sm p-10 flex flex-col justify-center items-center"
                            >
                                <span className="text-4xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {stat.number}
                                </span>
                                <span className="text-lg text-gray-700 dark:text-gray-300">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-16 bg-gray-100/50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
                        Ready to create impactful content?
                    </h2>
                    <CTAButton href="/generate">Start For Free</CTAButton>
                </div>
            </section>
        </div>
    );
}
