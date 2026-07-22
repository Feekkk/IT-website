export const CATEGORIES = ["Academic Staff", "Non-Academic Staff", "Student"] as const;

export const RATING_LABELS = [
  "Not Satisfied",
  "Somewhat Satisfied",
  "Neutral",
  "Satisfied",
  "Very Satisfied",
] as const;

export const QUESTIONS = [
  "The IT facilities provided are sufficient to support my academic or work-related activities.",
  "The condition and availability of IT facilities meet my needs.",
  "The IT support team responds to requests and issues within a reasonable time.",
  "The IT support team provides effective assistance in resolving technical problems.",
  "The internet service generally meets my daily academic or work requirements.",
  "The internet performance is satisfactory for accessing online resources and applications.",
  "WiFi coverage is available in most areas where I study or work.",
  "The WiFi connection is generally stable for my daily activities.",
  "The institution's digital systems are user-friendly and accessible when needed.",
  "The system makes it easy for users to book rooms, equipment, and other facilities when required.",
  "The online learning platforms provided effectively support teaching and learning activities. (VLE, TEAMS, VCMS)",
  "The online learning tools are reliable and easy to use.",
] as const;

export const SUGGESTION_QUESTION =
  "Please share any suggestions or ideas that could help improve our IT services.";

export const TOTAL_STEPS = QUESTIONS.length + 2;

export type Category = (typeof CATEGORIES)[number];
export type Ratings = Record<number, number>;
