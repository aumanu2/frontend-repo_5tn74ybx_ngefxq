import React from 'react';

const Section = ({ title, children }) => (
  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <div className="text-white/80 text-sm leading-relaxed">{children}</div>
  </div>
);

const RoadmapCard = ({ topic, items }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 p-5 ring-1 ring-white/10">
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-300 to-orange-300">
        {topic}
      </h3>
      <div className="mt-4 space-y-4">
        {items.map((sub, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="text-white font-semibold">{idx + 1}. {sub.title}</h4>
            <div className="grid sm:grid-cols-3 gap-3">
              <Section title="AI Explanation">{sub.explanation}</Section>
              <Section title="Examples & Questionaries">{sub.examples}</Section>
              <Section title="Quick Quiz">{sub.quiz}</Section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const RoadmapView = ({ query }) => {
  // Simple mocked content generation for front-end demo
  const sample = [
    {
      title: 'Foundations',
      explanation: 'Core ideas and intuition built step-by-step for easy understanding.',
      examples: 'Guided exercises and sample questions to test understanding.',
      quiz: '3 quick MCQs to assess basics.',
    },
    {
      title: 'Applications',
      explanation: 'How the concepts apply in real-world scenarios and problems.',
      examples: 'Practice problems that mirror real use cases.',
      quiz: '3 MCQs focusing on application-oriented thinking.',
    },
    {
      title: 'Advanced',
      explanation: 'Deeper insights, nuances, and edge cases.',
      examples: 'Challenging prompts to stretch your understanding.',
      quiz: '3 MCQs with moderate difficulty.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-white">
        Roadmap for: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-300 to-orange-300">{query}</span>
      </h2>
      <p className="mt-2 text-white/70">Organized into subtopics with explanations, examples, and quick quizzes.</p>
      <div className="mt-6">
        <RoadmapCard topic={query} items={sample} />
      </div>
    </div>
  );
};

export default RoadmapView;
