import { Switch, Route, Router as WouterRouter, useLocation, useParams } from "wouter";
import { useEffect } from "react";

// Pages
import HomePage from "@/pages/HomePage";
import { CategoryPage, AllCategoriesPage } from "@/pages/CategoryPage";
import RandomizersPage from "@/pages/RandomizersPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/legal/PrivacyPage";
import TermsPage from "@/pages/legal/TermsPage";
import DisclaimerPage from "@/pages/legal/DisclaimerPage";
import CookiePage from "@/pages/legal/CookiePage";

// Business
import { ROICalculator } from "@/pages/tools/business/ROICalculator";
import {
  BreakEvenCalculator, DiscountCalculator, MarginCalculator,
  MarkupCalculator, CommissionCalculator, ConversionRateCalculator,
  ProductivityCalculator, ROECalculator, ROACalculator, ROSCalculator,
  ReturnOnCapitalCalculator, CACCalculator, LTVCalculator,
  ShopifyFeeCalculator, EbayFeeCalculator,
} from "@/pages/tools/business/BusinessTools";

// Finance
import {
  CompoundInterestCalculator, SimpleInterestCalculator, LoanCalculator,
  VATCalculator, HourlyToSalaryCalculator, SalaryToHourlyCalculator,
  APYCalculator, PresentValueCalculator, CarDepreciationCalculator,
  RentAffordabilityCalculator, CDCalculator, USTakeHomePayCalculator,
  CreditCardPayoffCalculator, MinimumPaymentCalculator, DebtSnowballCalculator,
  DebtAvalancheCalculator, MortgageAmortizationCalculator, MortgageOverpaymentCalculator,
  RentVsBuyCalculator, RefinanceCalculator, NetWorthCalculator,
  EmergencyFundCalculator, SavingsGoalCalculator, Budget503020Calculator,
} from "@/pages/tools/finance/FinanceTools";

// Date & Time
import {
  DaysBetweenDatesCalculator, AgeCalculator, HoursCalculator,
  DateDurationCalculator, SleepCalculator, TimeCardCalculator,
  BusinessDaysCalculator, BirthdayCalculator, YearsCalculator as YearsBetweenCalculator,
  TimeCalculator, AgeDifferenceCalculator, DayCounterCalculator,
  ChronologicalAgeCalculator,
} from "@/pages/tools/datetime/DateTimeTools";

// Health
import {
  BMICalculator, CalorieCalculator, WaterIntakeCalculator, BodyFatCalculator,
  BMRCalculator, WeightLossCalculator, HealthyWeightCalculator, HeightPredictorCalculator,
  WaistToHipCalculator, WaistToHeightCalculator, RMRCalculator,
} from "@/pages/tools/health/HealthTools";

// Fitness
import {
  TDEECalculator, MacroCalculator, OneRepMaxCalculator,
  TargetHeartRateCalculator, PaceCalculator, ProteinCalculator,
  CaloriesBurnedCalculator, BodyMassIndexCalculator, SwimmingPaceCalculator, CyclingPaceCalculator,
  LeanBodyMassCalculator, FFMICalculator, BodySurfaceAreaCalculator, RunningCadenceCalculator,
} from "@/pages/tools/fitness/FitnessTools";

// Math
import {
  FractionCalculator, ExponentCalculator, ScientificNotationCalculator,
  RatioCalculator, MeanMedianModeCalculator, LCMGCDCalculator,
  PrimeFactorizationCalculator, SquareRootCalculator, LogarithmCalculator,
  GeometricMeanCalculator, WeightedAverageCalculator, PercentageCalculator,
  AdvancedPercentageCalculator,
} from "@/pages/tools/math/MathTools";

// Geometry
import {
  AreaCalculator, VolumeCalculator, PerimeterCalculator,
  SurfaceAreaCalculator, MidpointCalculator, PythagoreanCalculator,
  CircleCalculator, TriangleCalculator, RectangleCalculator,
  SphereCalculator, CylinderCalculator, ConeCalculator, DistanceCalculator,
  TrapezoidCalculator, EllipseCalculator, PentagonCalculator,
  HexagonCalculator, PyramidCalculator, EndpointCalculator,
} from "@/pages/tools/geometry/GeometryTools";

// Trigonometry
import {
  TrigCalculator, SineCalculator, CosineCalculator, TangentCalculator,
  ArcsinCalculator, ArccosCalculator, ArctanCalculator,
  CotangentCalculator, ArccotCalculator,
} from "@/pages/tools/trig/TrigTools";

// Statistics
import {
  StandardDeviationCalculator, ZScoreCalculator, PValueCalculator,
  ConfidenceIntervalCalculator, SampleSizeCalculator,
  PermutationCombinationCalculator, CorrelationCalculator,
  MeanCalculator, VarianceCalculator, ProbabilityCalculator, FrequencyCalculator, RangeCalculator,
  HarmonicMeanCalculator, IQRCalculator, MADCalculator, BinomialDistributionCalculator, PoissonDistributionCalculator,
  DiceProbabilityCalculator, LotteryOddsCalculator, ProbabilityMultipleCalculator,
} from "@/pages/tools/stats/StatsTools";

// Physics
import {
  OhmsLawCalculator, KineticEnergyCalculator, AccelerationCalculator,
  DensityCalculator, HalfLifeCalculator, PressureCalculator,
  GravitationalForceCalculator, WorkCalculator, PowerCalculator,
  TorqueCalculator, MomentumCalculator, FrequencyWavelengthCalculator,
  PotentialEnergyCalculator, TankVolumeCalculator,
} from "@/pages/tools/physics/PhysicsTools";

// Data
import {
  DownloadTimeCalculator, RAIDCalculator,
  InternetSpeedCalculator, ScreenSizeCalculator, AspectRatioCalculator,
  PixelDensityCalculator, NumberToWordsConverter, RandomStringGenerator, CharacterCounterTool,
} from "@/pages/tools/data/DataTools";

// Cryptography
import {
  MD5Calculator, SHA256Calculator, SHA512Calculator, SHA1Calculator,
  CRC32Calculator,
} from "@/pages/tools/crypto/CryptoTools";

// Cooking
import {
  RecipeScalerCalculator, PizzaDoughCalculator, RiceCalculator, CoffeeCalculator,
  YeastCalculator, BakingSubstitutionCalculator, CaloriesPerServingCalculator,
  RecipeCostCalculator, MealCalorieEstimatorCalculator,
} from "@/pages/tools/cooking/CookingTools";

// Construction
import {
  PaintCalculator, ConcreteCalculator, TileCalculator, GravelCalculator,
  BrickCalculator, SquareFootageCalculator, MulchCalculator, TopsoilCalculator,
  SandCalculator, AsphaltCalculator, MetalWeightCalculator,
  FlooringCalculator, DrywallCalculator, FenceCalculator, StairCalculator,
  DeckingCalculator, RoofingCalculator,
} from "@/pages/tools/construction/ConstructionTools";

// Transportation
import {
  FuelCostCalculator, MPGCalculator, SpeedDistanceTimeCalculator, AverageSpeedCalculator,
  CarLoanCalculator, TripCostCalculator, ElectricCarCostCalculator,
} from "@/pages/tools/transportation/TransportTools";

// Other
import {
  TipCalculator, PercentOffCalculator, GradeCalculator, GPACalculator,
  OddsCalculator, DogYearsCalculator, MarksPercentageCalculator, HeightComparisonCalculator,
  SplitBillCalculator, MovingCostCalculator, WeddingBudgetCalculator, GroceryBudgetCalculator,
  FinalGradeNeededCalculator, GPAByCreditsCalculator, SemesterGPACalculator, ReverseGradeCalculator,
} from "@/pages/tools/other/OtherTools";

// Converters
import {
  LengthConverter, HeightConverter, InchesToCmConverter, CmToInchesConverter,
  FeetToCmConverter, MetersToFeetConverter, MmToInchesConverter,
  KmToMilesConverter, MilesToKmConverter, MetersToMilesConverter,
  AreaConverterTool, AcresToHectaresConverter, SqmToSqftConverter, SqftToSqmConverter,
  VolumeConverterTool,
  SpeedConverter, MphToKmhConverter, KmhToMphConverter,
  TimeZoneConverter, MilitaryTimeConverter, UnixTimestampConverter,
  MinutesToHoursConverter, SalaryConverterTool,
  RomanNumeralsConverter, PercentToFractionConverter, FractionToPercentConverter,
  DecimalToFractionConverter, FractionToDecimalConverter, BinaryToDecimalConverter,
  DecimalToBinaryConverter, HexToDecimalConverter, DecimalToHexConverter, ShoeSizeConverter,
  DataStorageConverter, GramsToMlConverter,
  TemperatureConverter, PressureConverterTool, EnergyConverter,
  CupsToGramsConverter, GramsToCupsConverter, CupsToMlConverter,
  CupsToTbspConverter, CupsToTspConverter, ButterConverter, RecipeConverterTool,
  HexToBinaryConverter, BinaryToHexConverter,
  PercentToDecimalConverter, DecimalToPercentConverter, OctalToDecimalConverter,
  MilesConverter, FeetToMetersConverter,
  LiterToGallonConverter, GallonsConverter, CubicMetersConverter,
  MPHConverter, KnotsConverter,
  AcreToSqFtConverter, HectaresConverter,
  BitsByteConverter, SecondToMinuteConverter,
  HoursToMinutesConverter, DecimalToTimeConverter, TimeToDecimalConverter,
  MlToCupsConverter, Time24To12Converter, UniversalUnitConverterTool,
} from "@/pages/tools/converters/ConverterTools";

// Randomizers
import {
  RandomNumberGenerator, RandomPasswordGenerator, RandomColorGenerator,
  ListRandomizer, DiceRoller, NamePicker, TeamGenerator,
} from "@/pages/tools/randomizers/RandomizerTools";

// ─── Scroll to top on every route change ──────────────────────────────────────

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

// ─── Category page wrapper components ─────────────────────────────────────────

function CalculatorCategoryPage() {
  const params = useParams<{ subcategory: string }>();
  return <CategoryPage category="calculators" subcategory={params.subcategory ?? ""} />;
}

function ConverterCategoryPage() {
  const params = useParams<{ subcategory: string }>();
  return <CategoryPage category="converters" subcategory={params.subcategory ?? ""} />;
}

function AllCalculatorsPage() {
  return <AllCategoriesPage category="calculators" />;
}

function AllConvertersPage() {
  return <AllCategoriesPage category="converters" />;
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
      <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">The calculator or tool you're looking for doesn't exist.</p>
      <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
        Go to Homepage
      </a>
    </div>
  );
}

// ─── Router ──────────────────────────────────────────────────────────────────

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      {/* Home */}
      <Route path="/" component={HomePage} />

      {/* Static pages */}
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/disclaimer" component={DisclaimerPage} />
      <Route path="/cookies" component={CookiePage} />

      {/* All categories pages */}
      <Route path="/calculators" component={AllCalculatorsPage} />
      <Route path="/converters" component={AllConvertersPage} />
      <Route path="/randomizers" component={RandomizersPage} />

      {/* ─── BUSINESS ─────────────────────────────────────────────────────── */}
      <Route path="/calculators/business/roi" component={ROICalculator} />
      <Route path="/calculators/business/break-even" component={BreakEvenCalculator} />
      <Route path="/calculators/business/discount" component={DiscountCalculator} />
      <Route path="/calculators/business/margin" component={MarginCalculator} />
      <Route path="/calculators/business/markup" component={MarkupCalculator} />
      <Route path="/calculators/business/commission" component={CommissionCalculator} />
      <Route path="/calculators/business/conversion-rate" component={ConversionRateCalculator} />
      <Route path="/calculators/business/productivity" component={ProductivityCalculator} />
      <Route path="/calculators/business/roe" component={ROECalculator} />
      <Route path="/calculators/business/roa" component={ROACalculator} />
      <Route path="/calculators/business/ros" component={ROSCalculator} />
      <Route path="/calculators/business/return-on-capital" component={ReturnOnCapitalCalculator} />
      <Route path="/calculators/business/cac" component={CACCalculator} />
      <Route path="/calculators/business/ltv" component={LTVCalculator} />
      <Route path="/calculators/business/shopify-fees" component={ShopifyFeeCalculator} />
      <Route path="/calculators/business/ebay-fees" component={EbayFeeCalculator} />

      {/* ─── FINANCE ──────────────────────────────────────────────────────── */}
      <Route path="/calculators/finance/compound-interest" component={CompoundInterestCalculator} />
      <Route path="/calculators/finance/simple-interest" component={SimpleInterestCalculator} />
      <Route path="/calculators/finance/loan" component={LoanCalculator} />
      <Route path="/calculators/finance/vat" component={VATCalculator} />
      <Route path="/calculators/finance/hourly-to-salary" component={HourlyToSalaryCalculator} />
      <Route path="/calculators/finance/salary-to-hourly" component={SalaryToHourlyCalculator} />
      <Route path="/calculators/finance/apy" component={APYCalculator} />
      <Route path="/calculators/finance/present-value" component={PresentValueCalculator} />
      <Route path="/calculators/finance/car-depreciation" component={CarDepreciationCalculator} />
      <Route path="/calculators/finance/rent-affordability" component={RentAffordabilityCalculator} />
      <Route path="/calculators/finance/cd-calculator" component={CDCalculator} />
      <Route path="/calculators/finance/us-take-home-pay" component={USTakeHomePayCalculator} />
      <Route path="/calculators/finance/credit-card-payoff" component={CreditCardPayoffCalculator} />
      <Route path="/calculators/finance/minimum-payment" component={MinimumPaymentCalculator} />
      <Route path="/calculators/finance/debt-snowball" component={DebtSnowballCalculator} />
      <Route path="/calculators/finance/debt-avalanche" component={DebtAvalancheCalculator} />
      <Route path="/calculators/finance/mortgage-amortization" component={MortgageAmortizationCalculator} />
      <Route path="/calculators/finance/mortgage-overpayment" component={MortgageOverpaymentCalculator} />
      <Route path="/calculators/finance/rent-vs-buy" component={RentVsBuyCalculator} />
      <Route path="/calculators/finance/refinance-calculator" component={RefinanceCalculator} />
      <Route path="/calculators/finance/net-worth" component={NetWorthCalculator} />
      <Route path="/calculators/finance/emergency-fund" component={EmergencyFundCalculator} />
      <Route path="/calculators/finance/savings-goal" component={SavingsGoalCalculator} />
      <Route path="/calculators/finance/budget-50-30-20" component={Budget503020Calculator} />

      {/* ─── DATE & TIME ──────────────────────────────────────────────────── */}
      <Route path="/calculators/date-time/days-between-dates" component={DaysBetweenDatesCalculator} />
      <Route path="/calculators/date-time/age" component={AgeCalculator} />
      <Route path="/calculators/date-time/hours-calculator" component={HoursCalculator} />
      <Route path="/calculators/date-time/date-duration" component={DateDurationCalculator} />
      <Route path="/calculators/date-time/sleep" component={SleepCalculator} />
      <Route path="/calculators/date-time/time-card" component={TimeCardCalculator} />
      <Route path="/calculators/date-time/business-days" component={BusinessDaysCalculator} />
      <Route path="/calculators/date-time/birthday" component={BirthdayCalculator} />
      <Route path="/calculators/date-time/years" component={YearsBetweenCalculator} />
      <Route path="/calculators/date-time/time-calculator" component={TimeCalculator} />
      <Route path="/calculators/date-time/age-difference" component={AgeDifferenceCalculator} />
      <Route path="/calculators/date-time/day-counter" component={DayCounterCalculator} />
      <Route path="/calculators/date-time/chronological-age" component={ChronologicalAgeCalculator} />

      {/* ─── HEALTH ───────────────────────────────────────────────────────── */}
      <Route path="/calculators/health/bmi" component={BMICalculator} />
      <Route path="/calculators/health/calorie" component={CalorieCalculator} />
      <Route path="/calculators/health/water-intake" component={WaterIntakeCalculator} />
      <Route path="/calculators/health/body-fat" component={BodyFatCalculator} />
      <Route path="/calculators/health/bmr" component={BMRCalculator} />
      <Route path="/calculators/health/weight-loss" component={WeightLossCalculator} />
      <Route path="/calculators/health/healthy-weight" component={HealthyWeightCalculator} />
      <Route path="/calculators/health/height-predictor" component={HeightPredictorCalculator} />
      <Route path="/calculators/health/waist-to-hip" component={WaistToHipCalculator} />
      <Route path="/calculators/health/waist-to-height" component={WaistToHeightCalculator} />
      <Route path="/calculators/health/rmr" component={RMRCalculator} />

      {/* ─── FITNESS ──────────────────────────────────────────────────────── */}
      <Route path="/calculators/fitness/tdee" component={TDEECalculator} />
      <Route path="/calculators/fitness/macro" component={MacroCalculator} />
      <Route path="/calculators/fitness/one-rep-max" component={OneRepMaxCalculator} />
      <Route path="/calculators/fitness/target-heart-rate" component={TargetHeartRateCalculator} />
      <Route path="/calculators/fitness/pace" component={PaceCalculator} />
      <Route path="/calculators/fitness/protein" component={ProteinCalculator} />
      <Route path="/calculators/fitness/calories-burned" component={CaloriesBurnedCalculator} />
      <Route path="/calculators/fitness/body-mass-index" component={BodyMassIndexCalculator} />
      <Route path="/calculators/fitness/swimming-pace" component={SwimmingPaceCalculator} />
      <Route path="/calculators/fitness/cycling-pace" component={CyclingPaceCalculator} />
      <Route path="/calculators/fitness/lean-body-mass" component={LeanBodyMassCalculator} />
      <Route path="/calculators/fitness/ffmi" component={FFMICalculator} />
      <Route path="/calculators/fitness/body-surface-area" component={BodySurfaceAreaCalculator} />
      <Route path="/calculators/fitness/running-cadence" component={RunningCadenceCalculator} />

      {/* ─── MATH ─────────────────────────────────────────────────────────── */}
      <Route path="/calculators/mathematics/fraction" component={FractionCalculator} />
      <Route path="/calculators/mathematics/exponent" component={ExponentCalculator} />
      <Route path="/calculators/mathematics/scientific-notation" component={ScientificNotationCalculator} />
      <Route path="/calculators/mathematics/ratio" component={RatioCalculator} />
      <Route path="/calculators/mathematics/mean-median-mode" component={MeanMedianModeCalculator} />
      <Route path="/calculators/mathematics/lcm-gcd" component={LCMGCDCalculator} />
      <Route path="/calculators/mathematics/prime-factorization" component={PrimeFactorizationCalculator} />
      <Route path="/calculators/mathematics/square-root" component={SquareRootCalculator} />
      <Route path="/calculators/mathematics/logarithm" component={LogarithmCalculator} />
      <Route path="/calculators/mathematics/geometric-mean" component={GeometricMeanCalculator} />
      <Route path="/calculators/mathematics/weighted-average" component={WeightedAverageCalculator} />
      <Route path="/calculators/mathematics/percentage" component={PercentageCalculator} />
      <Route path="/calculators/mathematics/advanced-percentage" component={AdvancedPercentageCalculator} />

      {/* ─── GEOMETRY ─────────────────────────────────────────────────────── */}
      <Route path="/calculators/geometry/area" component={AreaCalculator} />
      <Route path="/calculators/geometry/volume" component={VolumeCalculator} />
      <Route path="/calculators/geometry/perimeter" component={PerimeterCalculator} />
      <Route path="/calculators/geometry/surface-area" component={SurfaceAreaCalculator} />
      <Route path="/calculators/geometry/midpoint" component={MidpointCalculator} />
      <Route path="/calculators/geometry/pythagorean" component={PythagoreanCalculator} />
      <Route path="/calculators/geometry/circle" component={CircleCalculator} />
      <Route path="/calculators/geometry/triangle" component={TriangleCalculator} />
      <Route path="/calculators/geometry/rectangle" component={RectangleCalculator} />
      <Route path="/calculators/geometry/sphere" component={SphereCalculator} />
      <Route path="/calculators/geometry/cylinder" component={CylinderCalculator} />
      <Route path="/calculators/geometry/cone" component={ConeCalculator} />
      <Route path="/calculators/geometry/distance" component={DistanceCalculator} />
      <Route path="/calculators/geometry/trapezoid-calc" component={TrapezoidCalculator} />
      <Route path="/calculators/geometry/ellipse" component={EllipseCalculator} />
      <Route path="/calculators/geometry/pentagon" component={PentagonCalculator} />
      <Route path="/calculators/geometry/hexagon" component={HexagonCalculator} />
      <Route path="/calculators/geometry/pyramid" component={PyramidCalculator} />
      <Route path="/calculators/geometry/endpoint" component={EndpointCalculator} />

      {/* ─── TRIGONOMETRY ─────────────────────────────────────────────────── */}
      <Route path="/calculators/trigonometry/trig" component={TrigCalculator} />
      <Route path="/calculators/trigonometry/sine" component={SineCalculator} />
      <Route path="/calculators/trigonometry/cosine" component={CosineCalculator} />
      <Route path="/calculators/trigonometry/tangent" component={TangentCalculator} />
      <Route path="/calculators/trigonometry/arcsin" component={ArcsinCalculator} />
      <Route path="/calculators/trigonometry/arccos" component={ArccosCalculator} />
      <Route path="/calculators/trigonometry/arctan" component={ArctanCalculator} />
      <Route path="/calculators/trigonometry/cotangent" component={CotangentCalculator} />
      <Route path="/calculators/trigonometry/arccot" component={ArccotCalculator} />

      {/* ─── STATISTICS ───────────────────────────────────────────────────── */}
      <Route path="/calculators/statistics/standard-deviation" component={StandardDeviationCalculator} />
      <Route path="/calculators/statistics/z-score" component={ZScoreCalculator} />
      <Route path="/calculators/statistics/p-value" component={PValueCalculator} />
      <Route path="/calculators/statistics/confidence-interval" component={ConfidenceIntervalCalculator} />
      <Route path="/calculators/statistics/sample-size" component={SampleSizeCalculator} />
      <Route path="/calculators/statistics/permutation-combination" component={PermutationCombinationCalculator} />
      <Route path="/calculators/statistics/correlation" component={CorrelationCalculator} />
      <Route path="/calculators/statistics/mean" component={MeanCalculator} />
      <Route path="/calculators/statistics/variance" component={VarianceCalculator} />
      <Route path="/calculators/statistics/probability" component={ProbabilityCalculator} />
      <Route path="/calculators/statistics/frequency" component={FrequencyCalculator} />
      <Route path="/calculators/statistics/range" component={RangeCalculator} />
      <Route path="/calculators/statistics/harmonic-mean" component={HarmonicMeanCalculator} />
      <Route path="/calculators/statistics/iqr" component={IQRCalculator} />
      <Route path="/calculators/statistics/mad" component={MADCalculator} />
      <Route path="/calculators/statistics/binomial" component={BinomialDistributionCalculator} />
      <Route path="/calculators/statistics/poisson" component={PoissonDistributionCalculator} />
      <Route path="/calculators/statistics/dice-probability" component={DiceProbabilityCalculator} />
      <Route path="/calculators/statistics/lottery-odds" component={LotteryOddsCalculator} />
      <Route path="/calculators/statistics/probability-multiple" component={ProbabilityMultipleCalculator} />

      {/* ─── PHYSICS ──────────────────────────────────────────────────────── */}
      <Route path="/calculators/physics/ohms-law" component={OhmsLawCalculator} />
      <Route path="/calculators/physics/kinetic-energy" component={KineticEnergyCalculator} />
      <Route path="/calculators/physics/acceleration" component={AccelerationCalculator} />
      <Route path="/calculators/physics/density" component={DensityCalculator} />
      <Route path="/calculators/physics/half-life" component={HalfLifeCalculator} />
      <Route path="/calculators/physics/pressure" component={PressureCalculator} />
      <Route path="/calculators/physics/gravitational-force" component={GravitationalForceCalculator} />
      <Route path="/calculators/physics/work" component={WorkCalculator} />
      <Route path="/calculators/physics/power" component={PowerCalculator} />
      <Route path="/calculators/physics/torque" component={TorqueCalculator} />
      <Route path="/calculators/physics/momentum" component={MomentumCalculator} />
      <Route path="/calculators/physics/frequency-wavelength" component={FrequencyWavelengthCalculator} />
      <Route path="/calculators/physics/potential-energy" component={PotentialEnergyCalculator} />
      <Route path="/calculators/physics/tank-volume" component={TankVolumeCalculator} />

      {/* ─── DATA ─────────────────────────────────────────────────────────── */}
      <Route path="/calculators/data/download-time" component={DownloadTimeCalculator} />
      <Route path="/calculators/data/raid" component={RAIDCalculator} />
      <Route path="/calculators/data/internet-speed" component={InternetSpeedCalculator} />
      <Route path="/calculators/data/screen-size" component={ScreenSizeCalculator} />
      <Route path="/calculators/data/aspect-ratio" component={AspectRatioCalculator} />
      <Route path="/calculators/data/pixel-density" component={PixelDensityCalculator} />
      <Route path="/calculators/data/number-to-words" component={NumberToWordsConverter} />
      <Route path="/calculators/data/random-string" component={RandomStringGenerator} />
      <Route path="/calculators/data/character-counter" component={CharacterCounterTool} />

      {/* ─── CRYPTOGRAPHY ─────────────────────────────────────────────────── */}
      <Route path="/calculators/cryptography/md5" component={MD5Calculator} />
      <Route path="/calculators/cryptography/sha256" component={SHA256Calculator} />
      <Route path="/calculators/cryptography/sha512" component={SHA512Calculator} />
      <Route path="/calculators/cryptography/sha1" component={SHA1Calculator} />
      <Route path="/calculators/cryptography/crc32" component={CRC32Calculator} />

      {/* ─── COOKING ──────────────────────────────────────────────────────── */}
      <Route path="/calculators/cooking/recipe-scaler" component={RecipeScalerCalculator} />
      <Route path="/calculators/cooking/pizza-dough" component={PizzaDoughCalculator} />
      <Route path="/calculators/cooking/rice" component={RiceCalculator} />
      <Route path="/calculators/cooking/coffee" component={CoffeeCalculator} />
      <Route path="/calculators/cooking/yeast" component={YeastCalculator} />
      <Route path="/calculators/cooking/baking-substitution" component={BakingSubstitutionCalculator} />
      <Route path="/calculators/cooking/calories-per-serving" component={CaloriesPerServingCalculator} />
      <Route path="/calculators/cooking/recipe-cost" component={RecipeCostCalculator} />
      <Route path="/calculators/cooking/meal-calorie-estimator" component={MealCalorieEstimatorCalculator} />

      {/* ─── CONSTRUCTION ─────────────────────────────────────────────────── */}
      <Route path="/calculators/construction/paint" component={PaintCalculator} />
      <Route path="/calculators/construction/concrete" component={ConcreteCalculator} />
      <Route path="/calculators/construction/tile" component={TileCalculator} />
      <Route path="/calculators/construction/gravel" component={GravelCalculator} />
      <Route path="/calculators/construction/brick" component={BrickCalculator} />
      <Route path="/calculators/construction/square-footage" component={SquareFootageCalculator} />
      <Route path="/calculators/construction/mulch" component={MulchCalculator} />
      <Route path="/calculators/construction/topsoil" component={TopsoilCalculator} />
      <Route path="/calculators/construction/sand" component={SandCalculator} />
      <Route path="/calculators/construction/asphalt" component={AsphaltCalculator} />
      <Route path="/calculators/construction/metal-weight" component={MetalWeightCalculator} />
      <Route path="/calculators/construction/flooring" component={FlooringCalculator} />
      <Route path="/calculators/construction/drywall" component={DrywallCalculator} />
      <Route path="/calculators/construction/fence" component={FenceCalculator} />
      <Route path="/calculators/construction/stair" component={StairCalculator} />
      <Route path="/calculators/construction/decking" component={DeckingCalculator} />
      <Route path="/calculators/construction/roofing" component={RoofingCalculator} />

      {/* ─── TRANSPORTATION ───────────────────────────────────────────────── */}
      <Route path="/calculators/transportation/fuel-cost" component={FuelCostCalculator} />
      <Route path="/calculators/transportation/mpg" component={MPGCalculator} />
      <Route path="/calculators/transportation/speed-distance-time" component={SpeedDistanceTimeCalculator} />
      <Route path="/calculators/transportation/average-speed" component={AverageSpeedCalculator} />
      <Route path="/calculators/transportation/car-loan" component={CarLoanCalculator} />
      <Route path="/calculators/transportation/trip-cost" component={TripCostCalculator} />
      <Route path="/calculators/transportation/ev-cost" component={ElectricCarCostCalculator} />

      {/* ─── OTHER ────────────────────────────────────────────────────────── */}
      <Route path="/calculators/other/tip" component={TipCalculator} />
      <Route path="/calculators/other/percent-off" component={PercentOffCalculator} />
      <Route path="/calculators/other/grade" component={GradeCalculator} />
      <Route path="/calculators/other/gpa" component={GPACalculator} />
      <Route path="/calculators/other/odds" component={OddsCalculator} />
      <Route path="/calculators/other/dog-years" component={DogYearsCalculator} />
      <Route path="/calculators/other/marks-percentage" component={MarksPercentageCalculator} />
      <Route path="/calculators/other/height-comparison" component={HeightComparisonCalculator} />
      <Route path="/calculators/other/split-bill" component={SplitBillCalculator} />
      <Route path="/calculators/other/moving-cost" component={MovingCostCalculator} />
      <Route path="/calculators/other/wedding-budget" component={WeddingBudgetCalculator} />
      <Route path="/calculators/other/grocery-budget" component={GroceryBudgetCalculator} />
      <Route path="/calculators/other/final-grade-needed" component={FinalGradeNeededCalculator} />
      <Route path="/calculators/other/gpa-by-credits" component={GPAByCreditsCalculator} />
      <Route path="/calculators/other/semester-gpa" component={SemesterGPACalculator} />
      <Route path="/calculators/other/reverse-grade" component={ReverseGradeCalculator} />

      {/* ─── CONVERTERS: DIMENSIONS ───────────────────────────────────────── */}
      <Route path="/converters/dimensions/universal-unit-converter" component={UniversalUnitConverterTool} />
      <Route path="/converters/dimensions/length" component={LengthConverter} />
      <Route path="/converters/dimensions/height" component={HeightConverter} />
      <Route path="/converters/dimensions/inches-to-cm" component={InchesToCmConverter} />
      <Route path="/converters/dimensions/cm-to-inches" component={CmToInchesConverter} />
      <Route path="/converters/dimensions/feet-to-cm" component={FeetToCmConverter} />
      <Route path="/converters/dimensions/meters-to-feet" component={MetersToFeetConverter} />
      <Route path="/converters/dimensions/mm-to-inches" component={MmToInchesConverter} />

      {/* ─── CONVERTERS: DISTANCE ─────────────────────────────────────────── */}
      <Route path="/converters/distance/km-to-miles" component={KmToMilesConverter} />
      <Route path="/converters/distance/miles-to-km" component={MilesToKmConverter} />
      <Route path="/converters/distance/meters-to-miles" component={MetersToMilesConverter} />
      <Route path="/converters/distance/miles-converter" component={MilesConverter} />
      <Route path="/converters/distance/feet-to-meters" component={FeetToMetersConverter} />

      {/* ─── CONVERTERS: AREA ─────────────────────────────────────────────── */}
      <Route path="/converters/area/area-converter" component={AreaConverterTool} />
      <Route path="/converters/area/acres-to-hectares" component={AcresToHectaresConverter} />
      <Route path="/converters/area/sqm-to-sqft" component={SqmToSqftConverter} />
      <Route path="/converters/area/sqft-to-sqm" component={SqftToSqmConverter} />
      <Route path="/converters/area/acre-to-sqft" component={AcreToSqFtConverter} />
      <Route path="/converters/area/hectares-converter" component={HectaresConverter} />

      {/* ─── CONVERTERS: VOLUME ───────────────────────────────────────────── */}
      <Route path="/converters/volume/volume-converter" component={VolumeConverterTool} />
      <Route path="/converters/volume/liter-to-gallon" component={LiterToGallonConverter} />
      <Route path="/converters/volume/gallons-converter" component={GallonsConverter} />
      <Route path="/converters/volume/cubic-meters-converter" component={CubicMetersConverter} />
      <Route path="/converters/volume/ml-to-cups" component={MlToCupsConverter} />

      {/* ─── CONVERTERS: SPEED ────────────────────────────────────────────── */}
      <Route path="/converters/speed/speed-converter" component={SpeedConverter} />
      <Route path="/converters/speed/mph-to-kmh" component={MphToKmhConverter} />
      <Route path="/converters/speed/kmh-to-mph" component={KmhToMphConverter} />
      <Route path="/converters/speed/mph-converter" component={MPHConverter} />
      <Route path="/converters/speed/knots-converter" component={KnotsConverter} />

      {/* ─── CONVERTERS: DATE/TIME ────────────────────────────────────────── */}
      <Route path="/converters/date-time/time-zone" component={TimeZoneConverter} />
      <Route path="/converters/date-time/military-time" component={MilitaryTimeConverter} />
      <Route path="/converters/date-time/unix-timestamp" component={UnixTimestampConverter} />
      <Route path="/converters/date-time/minutes-to-hours" component={MinutesToHoursConverter} />
      <Route path="/converters/date-time/seconds-to-minutes" component={SecondToMinuteConverter} />
      <Route path="/converters/date-time/hours-to-minutes" component={HoursToMinutesConverter} />
      <Route path="/converters/date-time/decimal-to-time" component={DecimalToTimeConverter} />
      <Route path="/converters/date-time/time-to-decimal" component={TimeToDecimalConverter} />
      <Route path="/converters/date-time/24h-to-12h" component={Time24To12Converter} />
      <Route path="/converters/date-time/salary-converter" component={SalaryConverterTool} />

      {/* ─── CONVERTERS: MATH ─────────────────────────────────────────────── */}
      <Route path="/converters/mathematics/roman-numerals" component={RomanNumeralsConverter} />
      <Route path="/converters/mathematics/percent-to-fraction" component={PercentToFractionConverter} />
      <Route path="/converters/mathematics/fraction-to-percent" component={FractionToPercentConverter} />
      <Route path="/converters/mathematics/decimal-to-fraction" component={DecimalToFractionConverter} />
      <Route path="/converters/mathematics/fraction-to-decimal" component={FractionToDecimalConverter} />
      <Route path="/converters/mathematics/binary-to-decimal" component={BinaryToDecimalConverter} />
      <Route path="/converters/mathematics/decimal-to-binary" component={DecimalToBinaryConverter} />
      <Route path="/converters/mathematics/hex-to-decimal" component={HexToDecimalConverter} />
      <Route path="/converters/mathematics/decimal-to-hex" component={DecimalToHexConverter} />
      <Route path="/converters/mathematics/shoe-size" component={ShoeSizeConverter} />
      <Route path="/converters/mathematics/hex-to-binary" component={HexToBinaryConverter} />
      <Route path="/converters/mathematics/binary-to-hex" component={BinaryToHexConverter} />
      <Route path="/converters/mathematics/percent-to-decimal" component={PercentToDecimalConverter} />
      <Route path="/converters/mathematics/decimal-to-percent" component={DecimalToPercentConverter} />
      <Route path="/converters/mathematics/octal-to-decimal" component={OctalToDecimalConverter} />

      {/* ─── CONVERTERS: DATA ─────────────────────────────────────────────── */}
      <Route path="/converters/data/data-storage" component={DataStorageConverter} />
      <Route path="/converters/data/bits-bytes-converter" component={BitsByteConverter} />
      <Route path="/converters/data/grams-to-ml" component={GramsToMlConverter} />

      {/* ─── CONVERTERS: PHYSICS ──────────────────────────────────────────── */}
      <Route path="/converters/physics/temperature" component={TemperatureConverter} />
      <Route path="/converters/physics/pressure-converter" component={PressureConverterTool} />
      <Route path="/converters/physics/energy-converter" component={EnergyConverter} />

      {/* ─── CONVERTERS: COOKING ──────────────────────────────────────────── */}
      <Route path="/converters/cooking/cups-to-grams" component={CupsToGramsConverter} />
      <Route path="/converters/cooking/grams-to-cups" component={GramsToCupsConverter} />
      <Route path="/converters/cooking/cups-to-ml" component={CupsToMlConverter} />
      <Route path="/converters/cooking/cups-to-tbsp" component={CupsToTbspConverter} />
      <Route path="/converters/cooking/cups-to-tsp" component={CupsToTspConverter} />
      <Route path="/converters/cooking/butter-converter" component={ButterConverter} />
      <Route path="/converters/cooking/recipe-converter" component={RecipeConverterTool} />

      {/* ─── RANDOMIZERS ──────────────────────────────────────────────────── */}
      <Route path="/randomizers/random-number" component={RandomNumberGenerator} />
      <Route path="/randomizers/random-password" component={RandomPasswordGenerator} />
      <Route path="/randomizers/random-color" component={RandomColorGenerator} />
      <Route path="/randomizers/list-randomizer" component={ListRandomizer} />
      <Route path="/randomizers/dice-roller" component={DiceRoller} />
      <Route path="/randomizers/name-picker" component={NamePicker} />
      <Route path="/randomizers/team-generator" component={TeamGenerator} />

      {/* ─── CATEGORY LISTING ─────────────────────────────────────────────── */}
      <Route path="/calculators/:subcategory" component={CalculatorCategoryPage} />
      <Route path="/converters/:subcategory" component={ConverterCategoryPage} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
