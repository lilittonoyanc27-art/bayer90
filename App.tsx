import { useState, useMemo, useEffect } from "react";
import { 
  BookOpen, 
  CheckCircle, 
  HelpCircle, 
  RefreshCw, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  GraduationCap, 
  ArrowRight, 
  ExternalLink,
  RotateCcw,
  Languages,
  Eye,
  EyeOff,
  Lightbulb,
  Check,
  X,
  PlusCircle,
  Clock,
  Compass,
  Smile,
  BookMarked
} from "lucide-react";
import { VOCABULARY, VocabItem } from "./vocabulary";
import { EXERCISES, ExerciseText, ExerciseBlank } from "./exercises";

export default function App() {
  // Tabs: 'dictionary' (Բառարան), 'exercises' (Վարժություններ), 'flashcards' (Քարտեր)
  const [activeTab, setActiveTab] = useState<'dictionary' | 'exercises' | 'flashcards'>('dictionary');

  // Dictionary States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedVocabId, setExpandedVocabId] = useState<string | null>(null);

  // Flashcards States
  const [shuffledCards, setShuffledCards] = useState<VocabItem[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [stats, setStats] = useState({ known: 0, unknown: 0 });
  const [cardHistory, setCardHistory] = useState<Record<string, 'known' | 'unknown'>>({});

  // Exercises States
  const [activeTextId, setActiveTextId] = useState<string>("text1");
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedBlankId, setSelectedBlankId] = useState<string | null>("t1_b1"); // tracks which blank is clicked for detail view
  const [scoreMessage, setScoreMessage] = useState<string | null>(null);

  // Initialize and shuffle flashcards on mount or tab change
  const initializeFlashcards = () => {
    const cards = [...VOCABULARY];
    // Simple Durstenfeld shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setShuffledCards(cards);
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
    setStats({ known: 0, unknown: 0 });
    setCardHistory({});
  };

  useEffect(() => {
    if (activeTab === 'flashcards') {
      initializeFlashcards();
    }
  }, [activeTab]);

  // Handle active exercise change
  const handleTextChange = (textId: string) => {
    setActiveTextId(textId);
    setUserAnswers({});
    setIsSubmitted(false);
    setScoreMessage(null);
    // Find first blank id of this text to show in hint panel initially
    const targetText = EXERCISES.find(t => t.id === textId);
    if (targetText) {
      const firstBlankId = Object.keys(targetText.blanks)[0];
      setSelectedBlankId(firstBlankId || null);
    }
  };

  // Pre-select first blank when active text starts
  useEffect(() => {
    const textData = EXERCISES.find(t => t.id === activeTextId);
    if (textData) {
      const keys = Object.keys(textData.blanks);
      if (keys.length > 0 && (!selectedBlankId || !selectedBlankId.startsWith(activeTextId.replace("text", "t")))) {
        setSelectedBlankId(keys[0]);
      }
    }
  }, [activeTextId]);

  // Filtered Vocabulary items
  const filteredVocab = useMemo(() => {
    return VOCABULARY.filter(item => {
      const matchesSearch = 
        item.sp.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.arm.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const activeTextData = useMemo(() => {
    return EXERCISES.find(t => t.id === activeTextId) || EXERCISES[0];
  }, [activeTextId]);

  // Handle flashcard vote
  const handleCardVote = (type: 'known' | 'unknown') => {
    const currentCard = shuffledCards[currentCardIndex];
    if (!currentCard) return;

    const previousVote = cardHistory[currentCard.id];
    let knownDiff = 0;
    let unknownDiff = 0;

    if (previousVote) {
      if (previousVote === type) {
        // clicked same again, do nothing or just proceed
      } else {
        // changed vote
        if (type === 'known') {
          knownDiff = 1;
          unknownDiff = -1;
        } else {
          knownDiff = -1;
          unknownDiff = 1;
        }
      }
    } else {
      // brand new vote
      if (type === 'known') knownDiff = 1;
      else unknownDiff = 1;
    }

    setStats(prev => ({
      known: prev.known + knownDiff,
      unknown: prev.unknown + unknownDiff
    }));

    setCardHistory(prev => ({
      ...prev,
      [currentCard.id]: type
    }));

    // Move to next card automatically after a brief delay
    setTimeout(() => {
      if (currentCardIndex < shuffledCards.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
        setIsCardFlipped(false);
      } else {
        // finished deck
      }
    }, 450);
  };

  // Handle checking answers for exercise text
  const checkExerciseAnswers = () => {
    const totalBlanks = Object.keys(activeTextData.blanks).length;
    let correctCount = 0;

    Object.entries(activeTextData.blanks).forEach(([blankId, blankObj]: [string, any]) => {
      if (userAnswers[blankId]?.trim().toLowerCase() === blankObj.expected.toLowerCase()) {
        correctCount++;
      }
    });

    setIsSubmitted(true);
    setScoreMessage(`Դուք ճիշտ եք լրացրել ${correctCount} / ${totalBlanks} նախդիրները: (${Math.round((correctCount / totalBlanks) * 100)}%)`);
  };

  // Help fill correct answers to learn
  const solveAllExerciseBlanks = () => {
    const solvedAnswers: Record<string, string> = {};
    Object.entries(activeTextData.blanks).forEach(([blankId, blankObj]: [string, any]) => {
      solvedAnswers[blankId] = blankObj.expected;
    });
    setUserAnswers(solvedAnswers);
    setIsSubmitted(true);
    setScoreMessage("Բոլոր ճիշտ պատասխանները լրացված են ուսումնական նպատակով։");
  };

  // Reset exercise
  const resetExercise = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScoreMessage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 antialiased pb-12">
      {/* Top Hero Banner */}
      <header className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 shadow-md py-6 px-4 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-inner flex items-center justify-center">
              <span className="text-3xl" role="img" aria-label="Spanish Flag">🇪🇸</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                Իսպաներենի Նախդիրներ <span className="text-lg md:text-xl font-normal opacity-90">(Preposiciones)</span>
              </h1>
              <p className="text-white/90 text-sm mt-1 flex items-center gap-1.5">
                <Languages className="w-4 h-4" /> Ինտերակտիվ ուսուցում հայերեն բացատրություններով և օրինակներով
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-xs border border-white/10 self-start md:self-auto font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Ամբողջական Բառարան + 5 Տեքստ</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-slate-200/60 p-1.5 rounded-2xl max-w-2xl">
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'dictionary'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/55'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Բառարան & Տեսություն</span>
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'exercises'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/55'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Ինտերակտիվ Վարժություններ</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'flashcards'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/55'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Ֆլեշ Քարտեր</span>
          </button>
        </div>

        {/* ==================== TAB 1: DICTIONARY ==================== */}
        {activeTab === 'dictionary' && (
          <div>
            {/* Intro & Search Filters */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="text-amber-500 w-5 h-5" />
                <span>Նախդիրների և Դարձվածքների Բառարան</span>
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                Այստեղ ներառված են Ձեր տրամադրած բոլոր կայուն արտահայտությունները, նախդիրներն ու բայական կառույցները։ Մակարդակն ակտիվացնելու համար սեղմեք քարտին՝ բացելու մանրամասն բացատրությունն ու օրինակները։
              </p>

              {/* Filtering bar */}
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Որոնել ըստ իսպաներեն կամ հայերեն բառերի..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      Մաքրել
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <SlidersHorizontal className="w-4 h-4 text-slate-400 mr-2 hidden sm:block" />
                  {[
                    { key: "all", label: "Բոլորը" },
                    { key: "basic", label: "Հիմնականներ" },
                    { key: "time_space", label: "Տարածություն / Ժամանակ" },
                    { key: "verbs", label: "Բայեր" },
                    { key: "estar_tener", label: "Estar / Tener" },
                    { key: "general", label: "Արտահայտություններ" }
                  ].map(cat => (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        selectedCategory === cat.key
                          ? 'bg-amber-500 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Vocabulary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVocab.map((item) => {
                const isExpanded = expandedVocabId === item.id;

                return (
                  <div
                    key={item.id}
                    id={`dict-vocab-${item.id}`}
                    onClick={() => setExpandedVocabId(isExpanded ? null : item.id)}
                    className={`bg-white rounded-2xl p-5 border cursor-pointer hover:shadow-md transition-all duration-200 relative overflow-hidden ${
                      isExpanded 
                        ? 'border-amber-400 ring-1 ring-amber-400 bg-amber-50/5' 
                        : 'border-slate-100 hover:border-slate-200 shadow-sm'
                    }`}
                  >
                    {/* Badge for category */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className={`text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md ${
                        item.category === 'basic' ? 'bg-red-50 text-red-600 border border-red-100/55' :
                        item.category === 'time_space' ? 'bg-blue-50 text-blue-600 border border-blue-100/55' :
                        item.category === 'verbs' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100/55' :
                        item.category === 'estar_tener' ? 'bg-purple-50 text-purple-600 border border-purple-100/55' :
                        'bg-slate-100 text-slate-600 border border-slate-200/55'
                      }`}>
                        {item.category === 'basic' ? 'Հիմնական' :
                         item.category === 'time_space' ? 'Տեղ/Ժամանակ' :
                         item.category === 'verbs' ? 'Բայ' :
                         item.category === 'estar_tener' ? 'Estar/Tener' :
                         'Կայուն դարձվածք'}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {/* Bilingual Core Display */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Հայերեն (Armenian)</span>
                          <p className="text-base font-extrabold text-slate-900 leading-tight">{item.arm}</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Իսպաներեն (Spanish)</span>
                          <p className="text-base font-black text-emerald-600 font-mono tracking-tight bg-emerald-50/50 px-2 py-0.5 rounded-md border border-emerald-100/50 inline-block">
                            {item.sp}
                          </p>
                        </div>
                      </div>

                      {/* Expandable detailed review */}
                      {isExpanded && (
                        <div className="mt-2 pt-3 border-t border-slate-150 text-slate-700 text-sm bg-slate-50/70 p-3 rounded-xl">
                          <div className="mb-2">
                            <span className="text-[10px] uppercase font-black text-slate-400 flex items-center gap-1">
                              <Lightbulb className="w-3 h-3 text-amber-500" /> Օգտագործման կանոնը (Բացատրություն)
                            </span>
                            <p className="text-xs font-medium text-slate-800 mt-1 leading-relaxed">{item.explanation}</p>
                          </div>

                          {item.exampleSp && (
                            <div className="pt-2 border-t border-slate-200/60">
                              <span className="text-[10px] uppercase font-black text-slate-400">Կենդանի օրինակ խոսքում</span>
                              <div className="mt-1 font-mono text-xs text-slate-900 bg-white p-2 rounded-lg border border-slate-100">
                                <p className="font-extrabold text-indigo-700">{item.exampleSp}</p>
                                <p className="text-slate-500 mt-1">{item.exampleArm}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tap indicator */}
                      <div className="flex items-center gap-1.5 self-end text-[10px] text-slate-400 font-bold mt-1">
                        <span>{isExpanded ? "Փակել կանոնը" : "Կարդալ կանոնը & օրինակը"}</span>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>

                    </div>
                  </div>
                );
              })}

              {filteredVocab.length === 0 && (
                <div className="col-span-1 md:col-span-2 bg-white rounded-2xl p-12 text-center text-slate-400 border border-slate-100">
                  <HelpCircle className="w-12 h-12 stroke-1 text-slate-300 mx-auto mb-3" />
                  <p className="text-base font-bold text-slate-500">Ոչինչ չի գտնվել</p>
                  <p className="text-xs text-slate-400 mt-1">Փորձեք փոխել որոնման բառը կամ ընտրել այլ կատեգորիա:</p>
                </div>
              )}
            </div>
          </div>
        )}


        {/* ==================== TAB 2: INTERACTIVE EXERCISES ==================== */}
        {activeTab === 'exercises' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Selector of Texts */}
            <div className="lg:col-span-3 flex flex-col gap-2">
              <span className="text-xs font-black uppercase text-slate-450 tracking-wider px-2">Ընտրեք տեքստը</span>
              
              {EXERCISES.map((textItem) => {
                const isActive = textItem.id === activeTextId;
                const countOfBlanks = Object.keys(textItem.blanks).length;

                return (
                  <button
                    key={textItem.id}
                    onClick={() => handleTextChange(textItem.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                        : 'bg-white hover:bg-slate-100/70 text-slate-800 border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <p className={`text-xs font-bold ${isActive ? 'text-amber-100' : 'text-slate-400'}`}>
                      {textItem.id === 'text1' ? 'Samuel - v1' :
                       textItem.id === 'text2' ? 'Tienda ropa - v2' :
                       textItem.id === 'text3' ? 'Casa de Ana - v3' :
                       textItem.id === 'text4' ? 'El Viaje - v4' :
                       'Tiempo libre - v5'}
                    </p>
                    <h3 className="font-bold text-sm mt-0.5 leading-tight">{textItem.titleSp}</h3>
                    <p className={`text-xs font-medium mt-1 mt-1 opacity-90 ${isActive ? 'text-amber-50' : 'text-slate-500'}`}>{textItem.titleArm}</p>
                    
                    <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-black/5">
                      <Clock className="w-3.5 h-3.5 opacity-75" />
                      <span className="text-[10px] font-mono tracking-wider uppercase font-extrabold">{countOfBlanks} նախդիր լրացնել</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Middle Column: Interactive Fill in the Blanks Area */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 relative">
                
                {/* Title */}
                <div className="mb-6 pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-black text-amber-600 tracking-widest">Ejercicios — Completar</span>
                    <h2 className="text-xl font-extrabold text-slate-900 mt-1">{activeTextData.titleSp}</h2>
                    <p className="text-xs font-bold text-slate-400 mt-1 italic">{activeTextData.titleArm}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={solveAllExerciseBlanks}
                      title="Լրացնել բոլոր ճիշտ պատասխանները՝ տեսությունը կարդալու համար"
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline bg-indigo-50 hover:bg-indigo-100 p-2 px-3 rounded-lg cursor-pointer transition-all border border-indigo-100"
                    >
                      Լրացնել ճիշտ
                    </button>
                    
                    <button
                      onClick={resetExercise}
                      title="Մաքրել բոլոր պատասխանները"
                      className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 cursor-pointer transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Score announcement if active */}
                {scoreMessage && (
                  <div className="bg-amber-50/80 border border-amber-200/60 p-4 rounded-xl mb-6 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{scoreMessage}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Կարող եք սեղմել յուրաքանչյուր նախդիրի կողքի կոճակը, որպեսզի աջ կողմում տեսնեք դրա կանոնն ու հայերեն թարգմանությունները։</p>
                    </div>
                  </div>
                )}

                {/* Paragraphs and Blanks Rendering */}
                <div className="space-y-6 text-base md:text-lg text-slate-800 font-serif leading-relaxed">
                  {activeTextData.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx} className="bg-slate-50/30 p-4 rounded-xl border border-slate-100">
                      {paragraph.map((segment, sIdx) => {
                        // Check if it's text Segment or Blank
                        if (typeof segment === 'string') {
                          return <span key={sIdx}>{segment}</span>;
                        } else {
                          const blankId = segment.blankId;
                          const blankData = activeTextData.blanks[blankId];
                          const selectedValue = userAnswers[blankId] || "";
                          const isSelectionCorrect = selectedValue.trim().toLowerCase() === blankData.expected.toLowerCase();
                          const isHighlighted = selectedBlankId === blankId;

                          return (
                            <span 
                              key={sIdx} 
                              onClick={() => setSelectedBlankId(blankId)}
                              className={`inline-flex flex-wrap items-center gap-1 px-1 py-0.5 rounded-lg border-2 transition-all cursor-pointer select-none mx-1 ${
                                isHighlighted 
                                  ? 'border-amber-400 bg-amber-50' 
                                  : 'border-slate-150 hover:border-slate-300 bg-white shadow-xs'
                              }`}
                            >
                              {/* Droplist selection */}
                              <select
                                id={`select-blank-${blankId}`}
                                value={selectedValue}
                                disabled={isSubmitted}
                                onClick={(e) => e.stopPropagation()} // prevent double trigger
                                onChange={(e) => {
                                  setUserAnswers(prev => ({
                                    ...prev,
                                    [blankId]: e.target.value
                                  }));
                                  setSelectedBlankId(blankId);
                                }}
                                className={`text-sm font-bold font-mono tracking-tight rounded-md px-1.5 py-0.5 bg-transparent border-none focus:outline-none focus:ring-0 min-w-16 cursor-pointer ${
                                  isSubmitted 
                                    ? isSelectionCorrect 
                                      ? 'text-emerald-700 bg-emerald-50 pr-1.5' 
                                      : 'text-red-700 bg-red-50 pr-1.5'
                                    : 'text-indigo-600'
                                }`}
                              >
                                <option value="">.......</option>
                                {blankData.options.map(opt => (
                                  <option key={opt} value={opt} className="font-mono text-xs">{opt}</option>
                                ))}
                              </select>

                              {/* Correctness icon check */}
                              {isSubmitted && (
                                <span className="inline-flex items-center justify-center shrink-0">
                                  {isSelectionCorrect ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-600 font-extrabold" />
                                  ) : (
                                    <X className="w-3.5 h-3.5 text-red-600 font-extrabold" />
                                  )}
                                </span>
                              )}

                              {/* Help icon click triggers explanation panel in sidebar */}
                              <button
                                type="button"
                                title="Բացատրություն"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedBlankId(blankId);
                                }}
                                className="p-0.5 text-slate-400 hover:text-amber-500 transition-all rounded-md cursor-pointer"
                              >
                                <HelpCircle className="w-3.5 h-3.5" />
                              </button>
                            </span>
                          );
                        }
                      })}
                    </p>
                  ))}
                </div>

                {/* Submission Control */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 font-semibold">
                    * Ավարտելուց հետո սեղմեք հաստատման կոճակը՝ սխալները ստուգելու համար։
                  </div>
                  
                  <div className="flex items-center gap-2 self-stretch sm:self-auto">
                    {isSubmitted && (
                      <button
                        onClick={resetExercise}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer transition-all"
                      >
                        Փորձել նորից
                      </button>
                    )}
                    <button
                      onClick={checkExerciseAnswers}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/10 transition-all cursor-pointer"
                    >
                      <span>Ստուգել Պատասխանները</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Interaction Rule & Armenian Translation Panel */}
            <div className="lg:col-span-3 sticky top-6">
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800">
                
                <div className="flex items-center gap-2 text-amber-400 border-b border-slate-800 pb-4 mb-4">
                  <Smile className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-widest">Վերլուծական Պանել</span>
                </div>

                {selectedBlankId && activeTextData.blanks[selectedBlankId] ? (
                  (() => {
                    const blank = activeTextData.blanks[selectedBlankId];
                    return (
                      <div className="flex flex-col gap-5">
                        
                        {/* Selected info header */}
                        <div>
                          <p className="text-[10px] text-slate-450 uppercase font-black tracking-widest">Ընտրված դիրք</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-xs text-amber-400 font-mono font-bold">
                              {selectedBlankId.replace("text", "Text ").toUpperCase()}
                            </span>
                            <span className="text-xs text-slate-300 font-bold font-mono">
                              Ճիշտը՝ <span className="text-emerald-400 font-black">"{blank.expected}"</span>
                            </span>
                          </div>
                        </div>

                        {/* Translation 1: Without Answer */}
                        <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-800">
                          <span className="text-[10px] text-slate-450 uppercase font-black bg-slate-800 px-2 py-0.5 rounded-md mb-2 inline-block">
                            Թարգմանություն (Առանց պատասխանի)
                          </span>
                          <p className="text-xs leading-relaxed text-slate-300 italic font-medium">
                            {blank.armWithoutAnswer}
                          </p>
                        </div>

                        {/* Translation 2: With Answer */}
                        <div className="bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-900/50">
                          <span className="text-[10px] text-emerald-400 uppercase font-black bg-emerald-950 px-2 py-0.5 rounded-md mb-2 inline-block">
                            Թարգմանություն (Պատասխանով)
                          </span>
                          <p className="text-xs leading-relaxed text-emerald-100 font-extrabold">
                            {blank.armWithAnswer}
                          </p>
                        </div>

                        {/* Grammar Explanation Rule */}
                        <div className="p-1">
                          <span className="text-[10px] text-amber-400 uppercase font-black flex items-center gap-1 mb-1.5">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            Ինչո՞ւ հենց այս նախդիրը
                          </span>
                          <p className="text-xs leading-relaxed text-slate-300 font-medium whitespace-pre-line bg-slate-800/30 p-2.5 rounded-xl border border-slate-800">
                            {blank.explanation}
                          </p>
                        </div>

                        {/* Text Full Translation Section collapsible */}
                        <div className="pt-4 border-t border-slate-800 mt-2">
                          <h4 className="text-xs font-bold text-slate-400 mb-2">Ամբողջ տեքստի թարգմանությունը</h4>
                          <p className="text-[11px] leading-relaxed text-slate-300 bg-slate-800/40 p-3 rounded-lg max-h-32 overflow-y-auto whitespace-pre-line">
                            {activeTextData.fullTranslationArm}
                          </p>
                        </div>

                      </div>
                    );
                  })()
                ) : (
                  <div className="text-center py-12 text-slate-500">
                    <HelpCircle className="w-10 h-10 mx-auto mb-2 opacity-50 text-slate-500" />
                    <p className="text-xs font-bold">Կոճակին սեղմելով տեսեք կանոնը</p>
                    <p className="text-[10px] text-slate-500 mt-1">Սեղմեք տեքստում առկա ցանկացած բաց թողնված դաշտի վրա՝ կարդալու դրա թարգմանությունը և քերականական մեկնաբանությունը։</p>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}


        {/* ==================== TAB 3: FLASHCARDS ==================== */}
        {activeTab === 'flashcards' && (
          <div className="max-w-2xl mx-auto">
            {/* Card description */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8 text-center">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
                <Compass className="text-indigo-500 w-5 h-5" />
                <span>Ինտերակտիվ Ֆլեշ Քարտեր</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-lg mx-auto">
                Մտապահեք իսպաներեն նախդիրներն ու դարձվածքները։ Տեսեք հայերեն տարբերակը, փորձեք տալ իսպաներեն թարգմանությունը, շրջեք քարտը և նշեք՝ գիտեի՞ք արդյոք այն։
              </p>

              {/* Stats overview */}
              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <p className="text-lg font-black text-emerald-600">{stats.known}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Գիտեի</p>
                </div>
                <div className="w-px h-6 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-lg font-black text-red-500">{stats.unknown}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Չգիտեի</p>
                </div>
                <div className="w-px h-6 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-lg font-black text-indigo-650">
                    {shuffledCards.length > 0 ? `${currentCardIndex + 1} / ${shuffledCards.length}` : '0/0'}
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Ընթացք</p>
                </div>
              </div>
            </div>

            {shuffledCards.length > 0 && currentCardIndex < shuffledCards.length ? (
              (() => {
                const card = shuffledCards[currentCardIndex];
                return (
                  <div className="flex flex-col gap-6">
                    
                    {/* The main flip card container */}
                    <div 
                      onClick={() => setIsCardFlipped(!isCardFlipped)}
                      className={`min-h-76 bg-white rounded-3xl border-2 shadow-xs cursor-pointer select-none transition-all duration-300 relative overflow-hidden flex flex-col justify-between p-8 text-center ${
                        isCardFlipped 
                          ? 'border-indigo-400 bg-indigo-50/5 ring-1 ring-indigo-300' 
                          : 'border-slate-200 hover:border-slate-350'
                      }`}
                    >
                      {/* Subtitle Hint */}
                      <span className="text-[9px] uppercase tracking-widest font-black text-slate-400 bg-slate-100 self-center px-3 py-1 rounded-full">
                        {isCardFlipped ? "Իսպաներեն Պատասխանը" : "Հակառակ կողմը՝ հայերեն"}
                      </span>

                      {/* Content text */}
                      <div className="my-6">
                        {!isCardFlipped ? (
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-slate-400 uppercase text-[10px] font-black">Հայերեն</span>
                            <p className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-normal">
                              {card.arm}
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-3">
                            <div>
                              <span className="text-emerald-600 uppercase text-[10px] font-black tracking-wider block mb-1">Իսպաներեն</span>
                              <p className="text-3xl font-black text-emerald-800 font-mono tracking-tight bg-emerald-50 px-4 py-1 rounded-xl inline-block border border-emerald-100">
                                {card.sp}
                              </p>
                            </div>
                            
                            {/* Explanations visible only on flipped back side */}
                            <p className="text-xs mt-3 text-slate-600 max-w-md mx-auto leading-relaxed border-t border-slate-100 pt-3 italic font-medium">
                              {card.explanation}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Direction tip */}
                      <p className="text-[11px] text-slate-400 font-bold self-center flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <span>{isCardFlipped ? "Սեղմեք՝ տեսնելու հարցը" : "Սեղմեք քարտին՝ շրջելու"}</span>
                        <RefreshCw className="w-3.5 h-3.5" />
                      </p>

                    </div>

                    {/* Interactive grading controls below card */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleCardVote('unknown')}
                        className="flex-1 flex items-center justify-center gap-2 p-3.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-bold text-sm rounded-2xl cursor-pointer transition-all"
                      >
                        <X className="w-4 h-4" />
                        <span>Չգիտեի</span>
                      </button>

                      <button
                        onClick={() => handleCardVote('known')}
                        className="flex-1 flex items-center justify-center gap-2 p-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-250 text-emerald-700 font-bold text-sm rounded-2xl cursor-pointer transition-all"
                      >
                        <Check className="w-4 h-4" />
                        <span>Գիտեի</span>
                      </button>
                    </div>

                    {/* Progress indicators dot lists */}
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <span className="text-xs font-bold text-slate-400 mr-2">Վայրկյաններ.</span>
                      <div className="flex items-center gap-1 max-w-full overflow-hidden whitespace-nowrap">
                        {shuffledCards.map((_, idx) => (
                          <div 
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full ${
                              idx === currentCardIndex ? 'bg-indigo-600 w-3' : 
                              idx < currentCardIndex ? 'bg-indigo-300' : 'bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })()
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center">
                <Smile className="w-16 h-16 text-amber-500 stroke-1 mb-4" />
                <h3 className="text-xl font-extrabold text-slate-900">Շնորհավորո՛ւմ ենք</h3>
                <p className="text-sm text-slate-600 mt-1 max-w-sm">
                  Դուք անցաք իսպաներեն նախդիրների ամբողջական փուլը։ Ցանկանո՞ւմ եք նորից սովորել կամ փորձել վարժությունները։
                </p>
                
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={initializeFlashcards}
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl cursor-pointer transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Սկսել նորից</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('exercises')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl cursor-pointer transition-all border border-slate-200"
                  >
                    <span>Անցնել Վարժություններին</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </main>

      {/* Footer footer */}
      <footer className="mt-16 text-center border-t border-slate-200/60 pt-6 max-w-7xl mx-auto px-4">
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
          🇪🇸 Իսպաներենի նախդիրներ (Armenian to Spanish Learning Assistant) 🇦🇲
        </p>
        <p className="text-[10px] text-slate-400 mt-1">
          Նախատեսված է արագ և արդյունավետ քերականության յուրացման համար։ Ամբողջությամբ offline-friendly/client-side ինտեգրացիա։
        </p>
      </footer>
    </div>
  );
}
