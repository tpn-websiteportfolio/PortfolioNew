import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";
import { workflowData } from "../data/workflows";
import { calculateVAFitScore } from "../utils/helpers";

export function VAFitChecker() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = workflowData.vaFitQuestions;

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (newAnswers.length === questions.length) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const result = answers.length === questions.length ? calculateVAFitScore(answers) : null;

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Is VA Support Right for You?
          </h2>
          <p className="text-xl text-gray-300">
            Answer a few questions to find out if a Virtual Assistant can transform your business
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-800 rounded-xl p-8 border border-primary-500/20"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-primary-400">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-dark-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-primary-600 to-primary-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-2xl font-bold text-white mb-8">
              {questions[currentQuestion].question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left p-4 rounded-lg border border-dark-700 hover:border-primary-500 bg-dark-700 hover:bg-dark-600 transition-all group"
                >
                  <span className="text-white group-hover:text-primary-400 transition-colors font-medium">
                    {option.text}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : result ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl p-8 md:p-12 border border-primary-500/30 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`inline-block mb-6 p-4 rounded-full ${
                result.level === "perfect"
                  ? "bg-green-500/20 border border-green-500/50"
                  : result.level === "high"
                    ? "bg-primary-500/20 border border-primary-500/50"
                    : result.level === "medium"
                      ? "bg-yellow-500/20 border border-yellow-500/50"
                      : "bg-gray-500/20 border border-gray-500/50"
              }`}
            >
              <Zap
                size={32}
                className={`${
                  result.level === "perfect"
                    ? "text-green-400"
                    : result.level === "high"
                      ? "text-primary-400"
                      : result.level === "medium"
                        ? "text-yellow-400"
                        : "text-gray-400"
                }`}
              />
            </motion.div>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{result.score}%</h3>
            <p className="text-2xl font-semibold text-primary-400 mb-6 capitalize">{result.level} Fit</p>
            <p className="text-lg text-gray-300 mb-8">{result.message}</p>

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
              <div className="bg-dark-700 rounded-lg p-6 mb-8 text-left">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary-400" />
                  Recommended Next Steps:
                </h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-3">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetQuiz}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Take Quiz Again
            </motion.button>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
