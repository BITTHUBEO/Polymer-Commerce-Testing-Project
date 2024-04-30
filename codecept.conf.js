exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    menOuterwearPage: "./page_object/men_outerwear.js", 
    checkoutPage: "./page_object/checkout.js",
    checkoutForm: "./page_object/checkout-form/checkoutForm.js",
    checkoutFormPP80: "./page_object/checkout-form/checkout-form-PP-80.js",
    checkoutFormPP98: "./page_object/checkout-form/checkout-form-PP-98.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/men_outerwear.js','./step_definitions/checkout-page/checkout-page-PP-34.js','./step_definitions/checkout-form/checkout-form-PP-80.js','./step_definitions/checkout-form/checkout-form-PP-98.js', './step_definitions/checkout-form/checkout-form-PP-36.js', './step_definitions/checkout-form/checkout-form-PP-43.js','./step_definitions/checkout-form/checkout-form-PP-100.js', './step_definitions/checkout-form/checkout-form-PP-35.js', './step_definitions/checkout-form/checkout-form-PP-52.js','./step_definitions/checkout-form/checkout-form-PP-55.js','./step_definitions/checkout-form/checkout-form-PP-100.js','./step_definitions/checkout-form/checkout-form-PP-109.js','./step_definitions/checkout-form/checkout-form-PP-61.js','./step_definitions/checkout-form/checkout-form-PP-64.js','./step_definitions/checkout-form/checkout-form-PP-71.js','./step_definitions/checkout-form/checkout-form-PP-73.js','./step_definitions/checkout-form/checkout-form-PP-78.js', './step_definitions/checkout-page/checkout-page-PP-33.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Polymer-FinalPractice',
/*  plugins: {
    qase: {
      require: "codeceptjs-qase",
      apiKey: "4e9e92efdb8938ce5f2f6b52b158ecee2d2042fbdabc56e5e0b43614792c861c",
      projectName: "PP", //process.env.QASE_PROJECT_NAME,
      enabled: true, //process.env.QASE_REPORT || false,
      // runId: process.env.TEST_RUN_ID,
      // testRunTags: ['smoke-tests']
    }
  }*/
  
}