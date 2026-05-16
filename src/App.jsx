import { Routes, Route } from "react-router-dom";

// Main pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import UserDashboard from "./pages/UserDashboard";

// Tutorials-related pages
import Tutorial from "./pages/Tutorial";          // main tutorials hub
import Programming from "./Programming/Programming";
import AIML from "./AIML/AIML";
import AI from "./AIML/AI/AI";

// Web Development
import WebDevelopment from "./WebDev/WebDevelopment";
import Frontend from "./WebDev/Frontend/Frontend";
import HTML from "./WebDev/Frontend/HTML/HTML";
import FundamentalsWeb from "./WebDev/Frontend/HTML/FundamentalsWeb";
import IntroToHTML from "./WebDev/Frontend/HTML/IntroToHTML";
import HTMLStructure from "./WebDev/Frontend/HTML/HTMLStructure";
import HTMLElements from "./WebDev/Frontend/HTML/TextContent/HTMLElements";
import HTMLAttributes from "./WebDev/Frontend/HTML/TextContent/HTMLAttributes";
import HTMLHeadings from "./WebDev/Frontend/HTML/TextContent/HTMLHeadings";
import HTMLParagraphs from "./WebDev/Frontend/HTML/TextContent/HTMLParagraphs";
import HTMLFormatting from "./WebDev/Frontend/HTML/TextContent/HTMLFormatting";
import HTMLBlockInline from "./WebDev/Frontend/HTML/TextContent/HTMLBlockInline";
import HTMLCharsets from "./WebDev/Frontend/HTML/TextContent/HTMLCharsets";

// Links & Navigation Module
import WhatAreLinks from "./WebDev/Frontend/HTML/LinksNav/WhatAreLinks";
import AnchorSyntax from "./WebDev/Frontend/HTML/LinksNav/AnchorSyntax";
import UrlsAbsoluteRelative from "./WebDev/Frontend/HTML/LinksNav/UrlsAbsoluteRelative";
import FolderStructurePaths from "./WebDev/Frontend/HTML/LinksNav/FolderStructurePaths";
import InPageLinking from "./WebDev/Frontend/HTML/LinksNav/InPageLinking";
import EmailSpecialLinks from "./WebDev/Frontend/HTML/LinksNav/EmailSpecialLinks";
import NewTabsWindows from "./WebDev/Frontend/HTML/LinksNav/NewTabsWindows";
import NavigationMenus from "./WebDev/Frontend/HTML/LinksNav/NavigationMenus";
import LinksBestPractices from "./WebDev/Frontend/HTML/LinksNav/LinksBestPractices";

// Images Module
import ImagesIntro from "./WebDev/Frontend/HTML/Images/ImagesIntro";
import ImageMarkup from "./WebDev/Frontend/HTML/Images/ImageMarkup";
import ImageFormats from "./WebDev/Frontend/HTML/Images/ImageFormats";

// Video & Audio Module
import FlashVideo from "./WebDev/Frontend/HTML/Media/FlashVideo";
import AudioWeb from "./WebDev/Frontend/HTML/Media/AudioWeb";
import MediaBestPractices from "./WebDev/Frontend/HTML/Media/MediaBestPractices";

// Lists Module
import OrderedLists from "./WebDev/Frontend/HTML/Lists/OrderedLists";
import UnorderedLists from "./WebDev/Frontend/HTML/Lists/UnorderedLists";
import DefinitionLists from "./WebDev/Frontend/HTML/Lists/DefinitionLists";
import NestedLists from "./WebDev/Frontend/HTML/Lists/NestedLists";

// Tables Module
import BasicTables from "./WebDev/Frontend/HTML/Tables/BasicTables";
import TableHeadings from "./WebDev/Frontend/HTML/Tables/TableHeadings";
import Spanning from "./WebDev/Frontend/HTML/Tables/Spanning";
import StructuringTables from "./WebDev/Frontend/HTML/Tables/StructuringTables";

// Forms Module
import IntroForms from "./WebDev/Frontend/HTML/Forms/IntroForms";
import FormElement from "./WebDev/Frontend/HTML/Forms/FormElement";
import TextInputControls from "./WebDev/Frontend/HTML/Forms/TextInputControls";
import ChoiceControls from "./WebDev/Frontend/HTML/Forms/ChoiceControls";
import ButtonsSpecial from "./WebDev/Frontend/HTML/Forms/ButtonsSpecial";
import Html5Inputs from "./WebDev/Frontend/HTML/Forms/Html5Inputs";
import LabelsFieldsets from "./WebDev/Frontend/HTML/Forms/LabelsFieldsets";
import FormValidation from "./WebDev/Frontend/HTML/Forms/FormValidation";
import AccessibleForms from "./WebDev/Frontend/HTML/Forms/AccessibleForms";

// Semantic HTML
import SemanticHTML from "./WebDev/Frontend/HTML/SemanticHTML";
// Best Practices
import HTMLBestPractices from "./WebDev/Frontend/HTML/HTMLBestPractices";
// Integration of HTML with CSS & JS
import HTMLCSSJSConnection from "./WebDev/Frontend/HTML/HtmlCssJsConnection";

// CSS Course
import CSS from "./WebDev/Frontend/CSS/CSS";
import IntroToCSS from "./WebDev/Frontend/CSS/IntroToCSS";
// CSS Selectors module
import CssSelectorIntro from "./WebDev/Frontend/CSS/CssSelectors/Intro";
import CssBasicSelectors from "./WebDev/Frontend/CSS/CssSelectors/BasicSelectors";
import CssAttributeSelectors from "./WebDev/Frontend/CSS/CssSelectors/AttributeSelectors";
import CssCombinatorsPage from "./WebDev/Frontend/CSS/CssSelectors/Combinators";
import CssPseudoClass from "./WebDev/Frontend/CSS/CssSelectors/PseudoClass";
import CssPseudoElement from "./WebDev/Frontend/CSS/CssSelectors/PseudoElement";
import CssSpecificityPage from "./WebDev/Frontend/CSS/CssSelectors/Specificity";
import CssAdvancedSelectors from "./WebDev/Frontend/CSS/CssSelectors/AdvancedSelectors";

// CSS Colors & Units module
import CssColors from "./WebDev/Frontend/CSS/CssColorsUnits/Colors";
import CssUnits from "./WebDev/Frontend/CSS/CssColorsUnits/Units";
import CssExercises from "./WebDev/Frontend/CSS/CssColorsUnits/Exercises";

// CSS Box Model module
import IntroBoxModel from "./WebDev/Frontend/CSS/CssBoxModel/IntroBoxModel";
import BoxModelLayers from "./WebDev/Frontend/CSS/CssBoxModel/BoxModelLayers";
import MarginPaddingShorthand from "./WebDev/Frontend/CSS/CssBoxModel/MarginPaddingShorthand";
import MarginCollapse from "./WebDev/Frontend/CSS/CssBoxModel/MarginCollapse";
import BoxSizing from "./WebDev/Frontend/CSS/CssBoxModel/BoxSizing";
import WidthHeight from "./WebDev/Frontend/CSS/CssBoxModel/WidthHeight";
import MistakesExercises from "./WebDev/Frontend/CSS/CssBoxModel/MistakesExercises";

// CSS Typography module
import IntroTypography from "./WebDev/Frontend/CSS/CssTypography/IntroTypography";
import TextFormatting from "./WebDev/Frontend/CSS/CssTypography/TextFormatting";
import ResponsiveTypography from "./WebDev/Frontend/CSS/CssTypography/ResponsiveTypography";

// CSS Backgrounds module
import IntroBackgrounds from "./WebDev/Frontend/CSS/CssBackgrounds/IntroBackgrounds";
import BackgroundColor from "./WebDev/Frontend/CSS/CssBackgrounds/BackgroundColor";
import BackgroundImage from "./WebDev/Frontend/CSS/CssBackgrounds/BackgroundImage";
import BackgroundGradients from "./WebDev/Frontend/CSS/CssBackgrounds/BackgroundGradients";
import BackgroundLayering from "./WebDev/Frontend/CSS/CssBackgrounds/BackgroundLayering";
import BackgroundSummary from "./WebDev/Frontend/CSS/CssBackgrounds/SummaryExercises";

// CSS Borders & Shadows module
import AnatomyBoxModel from "./WebDev/Frontend/CSS/CssBordersShadows/AnatomyBoxModel";
import AccessibilityFocus from "./WebDev/Frontend/CSS/CssBordersShadows/AccessibilityFocus";
import DimensionalityShadows from "./WebDev/Frontend/CSS/CssBordersShadows/DimensionalityShadows";
import AlphaMaskRealWorld from "./WebDev/Frontend/CSS/CssBordersShadows/AlphaMaskRealWorld";

// CSS Display & Visibility module
import IntroDisplay from "./WebDev/Frontend/CSS/CssDisplayVisibility/IntroDisplay";
import VisibilityOpacity from "./WebDev/Frontend/CSS/CssDisplayVisibility/VisibilityOpacity";
import OverflowSpillage from "./WebDev/Frontend/CSS/CssDisplayVisibility/OverflowSpillage";
import ExercisesSummary from "./WebDev/Frontend/CSS/CssDisplayVisibility/ExercisesSummary";

// JavaScript Course
import Javascript from "./WebDev/Frontend/Javascript/Javascript";
import IntroToJS from "./WebDev/Frontend/Javascript/IntroToJS";
import Variables from "./WebDev/Frontend/Javascript/Module2/Variables";
import Primitives from "./WebDev/Frontend/Javascript/Module2/Primitives";
import ReferenceTypes from "./WebDev/Frontend/Javascript/Module2/ReferenceTypes";
import DynamicTyping from "./WebDev/Frontend/Javascript/Module2/DynamicTyping";
import TypeConversion from "./WebDev/Frontend/Javascript/Module2/TypeConversion";
import Operators from "./WebDev/Frontend/Javascript/Module2/Operators";
import Expressions from "./WebDev/Frontend/Javascript/Module2/Expressions";

// JavaScript Module 3: Control Flow & Logic Building
import ConditionalStatements from "./WebDev/Frontend/Javascript/Module3/ConditionalStatements";
import TruthyFalsy from "./WebDev/Frontend/Javascript/Module3/TruthyFalsy";
import Loops from "./WebDev/Frontend/Javascript/Module3/Loops";
import BreakContinue from "./WebDev/Frontend/Javascript/Module3/BreakContinue";
import CleanConditions from "./WebDev/Frontend/Javascript/Module3/CleanConditions";

// JavaScript Module 4: Functions & Execution
import FunctionDeclarations from "./WebDev/Frontend/Javascript/Module4/FunctionDeclarations";
import ParametersArguments from "./WebDev/Frontend/Javascript/Module4/ParametersArguments";
import ReturnValues from "./WebDev/Frontend/Javascript/Module4/ReturnValues";
import ArrowFunctions from "./WebDev/Frontend/Javascript/Module4/ArrowFunctions";
import ExecutionContext from "./WebDev/Frontend/Javascript/Module4/ExecutionContext";
import CallStack from "./WebDev/Frontend/Javascript/Module4/CallStack";

// JavaScript Module 5: Arrays & Objects
import ArraysFoundations from "./WebDev/Frontend/Javascript/Module5/ArraysFoundations";
import ArrayMethods from "./WebDev/Frontend/Javascript/Module5/ArrayMethods";
import ObjectsFoundations from "./WebDev/Frontend/Javascript/Module5/ObjectsFoundations";
import Destructuring from "./WebDev/Frontend/Javascript/Module5/Destructuring";
import SpreadRest from "./WebDev/Frontend/Javascript/Module5/SpreadRest";

// JavaScript Module 6: Scope, Closures & Hoisting
import LexicalScope from "./WebDev/Frontend/Javascript/Module6/LexicalScope";
import BlockScope from "./WebDev/Frontend/Javascript/Module6/BlockScope";
import Hoisting from "./WebDev/Frontend/Javascript/Module6/Hoisting";
import Tdz from "./WebDev/Frontend/Javascript/Module6/Tdz";
import Closures from "./WebDev/Frontend/Javascript/Module6/Closures";
import ScopeChain from "./WebDev/Frontend/Javascript/Module6/ScopeChain";

// JavaScript Module 7: The 'this' Keyword
import TheGoldenRule from "./WebDev/Frontend/Javascript/Module7/TheGoldenRule";
import NewBinding from "./WebDev/Frontend/Javascript/Module7/NewBinding";
import ExplicitBinding from "./WebDev/Frontend/Javascript/Module7/ExplicitBinding";
import ImplicitDefaultBinding from "./WebDev/Frontend/Javascript/Module7/ImplicitDefaultBinding";
import ArrowFunctionsThis from "./WebDev/Frontend/Javascript/Module7/ArrowFunctionsThis";

// JavaScript Module 8: Prototypes & OOP
import PrototypeChain from "./WebDev/Frontend/Javascript/Module8/PrototypeChain";
import ConstructorFunctions from "./WebDev/Frontend/Javascript/Module8/ConstructorFunctions";
import ES6Classes from "./WebDev/Frontend/Javascript/Module8/ES6Classes";
import InheritanceVsComposition from "./WebDev/Frontend/Javascript/Module8/InheritanceVsComposition";

// JavaScript Module 9: Asynchronous JS
import AsyncExists from "./WebDev/Frontend/Javascript/Module9/AsyncExists";
import EventLoop from "./WebDev/Frontend/Javascript/Module9/EventLoop";
import Callbacks from "./WebDev/Frontend/Javascript/Module9/Callbacks";
import Promises from "./WebDev/Frontend/Javascript/Module9/Promises";
import AsyncAwait from "./WebDev/Frontend/Javascript/Module9/AsyncAwait";
import ErrorHandling from "./WebDev/Frontend/Javascript/Module9/ErrorHandling";
import SequentialVsParallel from "./WebDev/Frontend/Javascript/Module9/SequentialVsParallel";
import CommonMistakes from "./WebDev/Frontend/Javascript/Module9/CommonMistakes";
import Cheatsheet from "./WebDev/Frontend/Javascript/Module9/Cheatsheet";

// subcategory page
import Java from "./Programming/Java/Java";               // main java container
import WhatisJava from "./Programming/Java/WhatisJava";   // java topic pages
import HistoryofJava from "./Programming/Java/HistoryofJava";
import FeaturesJava from "./Programming/Java/FeaturesJava";
import WhatisJDKJVMJRE from "./Programming/Java/WhatisJDKJVMJRE";
import JavaInstallation from "./Programming/Java/JavaInstallation";
import JavavsCPP from "./Programming/Java/JavavsCPP";
// AI course
import WhatisAI from "./AIML/AI/WhatisAI"

function App() {
  return (
    <Routes>
      {/* Core Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/dashboard" element={<UserDashboard />} />

      {/* Tutorials Section */}
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/aiml" element={<AIML />} />

      {/* Web Development Section */}
      <Route path="/tutorials/webdevelopment" element={<WebDevelopment />} />

      {/* NEW: Intermediate Frontend Page */}
      <Route path="/tutorials/webdevelopment/frontend" element={<Frontend />} />

      {/* HTML Course */}
      <Route path="/webdevelopment/html" element={<HTML />}>
        <Route index element={<FundamentalsWeb />} />
        <Route path="intro" element={<IntroToHTML />} />
        <Route path="structure" element={<HTMLStructure />} />

        {/* New Text & Content Module Routes */}
        <Route path="elements" element={<HTMLElements />} />
        <Route path="attributes" element={<HTMLAttributes />} />
        <Route path="headings" element={<HTMLHeadings />} />
        <Route path="paragraphs" element={<HTMLParagraphs />} />
        <Route path="formatting" element={<HTMLFormatting />} />
        <Route path="block-inline" element={<HTMLBlockInline />} />
        <Route path="charsets" element={<HTMLCharsets />} />

        {/* NEW: Links & Navigation Module Routes */}
        <Route path="links-intro" element={<WhatAreLinks />} />
        <Route path="anchor-syntax" element={<AnchorSyntax />} />
        <Route path="urls" element={<UrlsAbsoluteRelative />} />
        <Route path="paths" element={<FolderStructurePaths />} />
        <Route path="in-page" element={<InPageLinking />} />
        <Route path="special-links" element={<EmailSpecialLinks />} />
        <Route path="new-tabs" element={<NewTabsWindows />} />
        <Route path="nav-menus" element={<NavigationMenus />} />
        <Route path="links-best-practices" element={<LinksBestPractices />} />

        {/* NEW: Images Module Routes */}
        <Route path="images-intro" element={<ImagesIntro />} />
        <Route path="image-markup" element={<ImageMarkup />} />
        <Route path="image-formats" element={<ImageFormats />} />

        {/* NEW: Video & Audio Module Routes */}
        <Route path="media-flash-video" element={<FlashVideo />} />
        <Route path="media-audio" element={<AudioWeb />} />
        <Route path="media-best-practices" element={<MediaBestPractices />} />

        {/* NEW: Lists Module Routes */}
        <Route path="lists/ordered-lists" element={<OrderedLists />} />
        <Route path="lists/unordered-lists" element={<UnorderedLists />} />
        <Route path="lists/definition-lists" element={<DefinitionLists />} />
        <Route path="lists/nested-lists" element={<NestedLists />} />

        {/* NEW: Tables Module Routes */}
        <Route path="tables/basic-tables" element={<BasicTables />} />
        <Route path="tables/table-headings" element={<TableHeadings />} />
        <Route path="tables/spanning" element={<Spanning />} />
        <Route path="tables/structuring" element={<StructuringTables />} />

        {/* NEW: Forms Module Routes */}
        <Route path="forms/introduction" element={<IntroForms />} />
        <Route path="forms/form-element" element={<FormElement />} />
        <Route path="forms/text-inputs" element={<TextInputControls />} />
        <Route path="forms/choice-controls" element={<ChoiceControls />} />
        <Route path="forms/buttons-special" element={<ButtonsSpecial />} />
        <Route path="forms/html5-inputs" element={<Html5Inputs />} />
        <Route path="forms/labels-fieldsets" element={<LabelsFieldsets />} />
        <Route path="forms/form-validation" element={<FormValidation />} />
        <Route path="forms/accessible-forms" element={<AccessibleForms />} />

        {/* Semantic HTML */}
        <Route path="/webdevelopment/html/semantic" element={<SemanticHTML />} />

        {/* Best Practices */}
        <Route path="/webdevelopment/html/best-practices" element={<HTMLBestPractices />} />

        {/* Integration of HTML with CSS & JS */}
        <Route path="/webdevelopment/html/integration" element={<HTMLCSSJSConnection />} />

      </Route>

      {/* CSS Course */}
      <Route path="/webdevelopment/css" element={<CSS />}>
        <Route index element={<IntroToCSS />} />
        <Route path="selectors/intro" element={<CssSelectorIntro />} />
        <Route path="selectors/basic" element={<CssBasicSelectors />} />
        <Route path="selectors/attribute" element={<CssAttributeSelectors />} />
        <Route path="selectors/combinators" element={<CssCombinatorsPage />} />
        <Route path="selectors/pseudo-class" element={<CssPseudoClass />} />
        <Route path="selectors/pseudo-element" element={<CssPseudoElement />} />
        <Route path="selectors/specificity" element={<CssSpecificityPage />} />
        <Route path="selectors/advanced" element={<CssAdvancedSelectors />} />
        <Route path="colors-units/colors" element={<CssColors />} />
        <Route path="colors-units/units" element={<CssUnits />} />
        <Route path="colors-units/exercises" element={<CssExercises />} />
        <Route path="box-model/intro" element={<IntroBoxModel />} />
        <Route path="box-model/layers" element={<BoxModelLayers />} />
        <Route path="box-model/shorthand" element={<MarginPaddingShorthand />} />
        <Route path="box-model/collapse" element={<MarginCollapse />} />
        <Route path="box-model/box-sizing" element={<BoxSizing />} />
        <Route path="box-model/width-height" element={<WidthHeight />} />
        <Route path="box-model/mistakes-exercises" element={<MistakesExercises />} />
        <Route path="typography/intro" element={<IntroTypography />} />
        <Route path="typography/formatting" element={<TextFormatting />} />
        <Route path="typography/responsive" element={<ResponsiveTypography />} />
        <Route path="backgrounds/intro" element={<IntroBackgrounds />} />
        <Route path="backgrounds/color" element={<BackgroundColor />} />
        <Route path="backgrounds/image" element={<BackgroundImage />} />
        <Route path="backgrounds/gradients" element={<BackgroundGradients />} />
        <Route path="backgrounds/layering" element={<BackgroundLayering />} />
        <Route path="backgrounds/summary" element={<BackgroundSummary />} />
        <Route path="borders-shadows/anatomy" element={<AnatomyBoxModel />} />
        <Route path="borders-shadows/accessibility" element={<AccessibilityFocus />} />
        <Route path="borders-shadows/dimensionality" element={<DimensionalityShadows />} />
        <Route path="borders-shadows/alpha-mask" element={<AlphaMaskRealWorld />} />
        <Route path="display-visibility/intro" element={<IntroDisplay />} />
        <Route path="display-visibility/visibility-opacity" element={<VisibilityOpacity />} />
        <Route path="display-visibility/overflow-spillage" element={<OverflowSpillage />} />
        <Route path="display-visibility/exercises" element={<ExercisesSummary />} />
      </Route>

      {/* JavaScript Course */}
      <Route path="/webdevelopment/javascript" element={<Javascript />}>
        <Route index element={<IntroToJS />} />
        <Route path="variables" element={<Variables />} />
        <Route path="primitives" element={<Primitives />} />
        <Route path="reference-types" element={<ReferenceTypes />} />
        <Route path="dynamic-typing" element={<DynamicTyping />} />
        <Route path="type-conversion" element={<TypeConversion />} />
        <Route path="operators" element={<Operators />} />
        <Route path="expressions" element={<Expressions />} />
        <Route path="conditional-statements" element={<ConditionalStatements />} />
        <Route path="truthy-falsy" element={<TruthyFalsy />} />
        <Route path="loops" element={<Loops />} />
        <Route path="break-continue" element={<BreakContinue />} />
        <Route path="clean-conditions" element={<CleanConditions />} />
        <Route path="functions" element={<FunctionDeclarations />} />
        <Route path="parameters" element={<ParametersArguments />} />
        <Route path="return-values" element={<ReturnValues />} />
        <Route path="arrow-functions" element={<ArrowFunctions />} />
        <Route path="execution-context" element={<ExecutionContext />} />
        <Route path="call-stack" element={<CallStack />} />
        <Route path="arrays-foundations" element={<ArraysFoundations />} />
        <Route path="array-methods" element={<ArrayMethods />} />
        <Route path="objects-foundations" element={<ObjectsFoundations />} />
        <Route path="destructuring" element={<Destructuring />} />
        <Route path="spread-rest" element={<SpreadRest />} />
        <Route path="lexical-scope" element={<LexicalScope />} />
        <Route path="block-scope" element={<BlockScope />} />
        <Route path="hoisting" element={<Hoisting />} />
        <Route path="tdz" element={<Tdz />} />
        <Route path="closures" element={<Closures />} />
        <Route path="scope-chain" element={<ScopeChain />} />
        <Route path="the-golden-rule" element={<TheGoldenRule />} />
        <Route path="new-binding" element={<NewBinding />} />
        <Route path="explicit-binding" element={<ExplicitBinding />} />
        <Route path="implicit-default-binding" element={<ImplicitDefaultBinding />} />
        <Route path="arrow-functions-this" element={<ArrowFunctionsThis />} />
        <Route path="prototype-chain" element={<PrototypeChain />} />
        <Route path="constructor-functions" element={<ConstructorFunctions />} />
        <Route path="es6-classes" element={<ES6Classes />} />
        <Route path="inheritance-vs-composition" element={<InheritanceVsComposition />} />
        <Route path="async-exists" element={<AsyncExists />} />
        <Route path="event-loop" element={<EventLoop />} />
        <Route path="callbacks" element={<Callbacks />} />
        <Route path="promises" element={<Promises />} />
        <Route path="async-await" element={<AsyncAwait />} />
        <Route path="error-handling" element={<ErrorHandling />} />
        <Route path="sequential-vs-parallel" element={<SequentialVsParallel />} />
        <Route path="common-mistakes" element={<CommonMistakes />} />
        <Route path="async-cheatsheet" element={<Cheatsheet />} />
      </Route>

      {/* Java Course */}
      <Route path="/programming/java" element={<Java />}>
        <Route index element={<WhatisJava />} />
        <Route path="history" element={<HistoryofJava />} />
        <Route path="features" element={<FeaturesJava />} />
        <Route path="jdk-jre-jvm" element={<WhatisJDKJVMJRE />} />
        <Route path="installation" element={<JavaInstallation />} />
        <Route path="java-vs-cpp" element={<JavavsCPP />} />
      </Route>

      {/* AI Course */}
      <Route path="/aiml/ai" element={<AI />}>
        {/* Index route shows "What is AI" by default */}
        <Route index element={<WhatisAI />} />
      </Route>
      {/* Default route for invalid URLs */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;