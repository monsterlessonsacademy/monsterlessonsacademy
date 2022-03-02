const data = [
  {
    question: "What does CSS stand for?",
    incorrectAnswers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },

  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    incorrectAnswers: [
      "In the <body> section",
      "At the end of the document",
      "You can't refer to an external style sheet",
    ],
    correctAnswer: "In the <head> section",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    incorrectAnswers: ["class", "font", "styles"],
    correctAnswer: "style",
  },
  {
    question: "Which is the correct CSS syntax?",
    incorrectAnswers: [
      "{body:color=black;}",
      "{body;color:black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    incorrectAnswers: [
      "' this is a comment",
      "// this is a comment",
      "// this is a comment //",
    ],
    correctAnswer: "/* this is a comment */",
  },
  {
    question: "Which property is used to change the background color?",
    incorrectAnswers: ["color", "bgcolor", "bgColor"],
    correctAnswer: "background-color",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
  },
];

export default data;
