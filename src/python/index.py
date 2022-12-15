import json
words = [["abandon", "keen", "jealous", "tact", "oath", "vacant", "hardship", "gallant", "data", "unaccustomed",
         "bachelor", "qualify"],
         ["corpse", "conceal", "dismal", "frigid", "inhabit", "numb", "peril", "recline", "shriek", "sinister",
          "tempt", "wager"
          ],
         [
    "typical", "minimum", "scarce", "annual", "persuade", "essential", "blend", "visible", "expensive", "talent",
    "devise", "wholesale"
],
    [
    "vapor", "eliminate", "villain", "dense", "utilize", "humid", "theory", "descend", "circulate", "enormous",
    "predict", "vanish"
],
    [
    "tradition", "rural", "burden", "campus", "majority", "assemble", "explore", "topic", "debate", "evade",
    "probe", "reform"
],
    [
    "approach", "detect", "defect", "employee", "neglect", "deceive", "undoubtedly", "popular", "thorough", "client",
    "comprehensive", "defraud"
],
    [
    "postpone", "consent", "massive", "capsule", "preserve", "denounce", "unique", "torrent", "resent", "molest",
    "gloomy", "unforeseen"
], [
    "exaggerate", "amateur", "mediocre", "variety", "valid", "survive", "weird", "prominent", "security", "bulky",
    "reluctant", "obvious"
], [
    "vicinity", "century", "rage", "document", "conclude", "undeniable", "resist", "lack", "ignore", "challenge",
    "miniature", "source"
], [
    "excel", "feminine", "mount", "compete", "dread", "masculine", "menace", "tendency", "underestimate", "victorious",
    "numerous", "flexible"
], [
    "evidence", "solitary", "vision", "frequent", "glimpse", "recent", "decade", "hesitate", "absurd", "conflict",
    "minority", "fiction"
], [
    "ignite", "abolish", "urban", "population", "frank", "pollute", "reveal", "prohibit", "urgent", "adequate",
    "decrease", "audible"
], [
    "journalist", "famine", "revive", "commence", "observant", "identify", "migrate", "vessel", "persist", "hazy",
    "gleam", "editor"
], [
    "unruly", "rival", "violent", "brutal", "opponent", "brawl", "duplicate", "vicious", "whirling", "underdog",
    "thrust", "bewildered"
], [
    "expand", "alter", "mature", "sacred", "revise", "pledge", "casual", "pursue", "unanimous", "fortunate",
    "pioneer", "innovative"
], [
    "slender", "surpass", "vast", "doubt", "capacity", "penetrate", "pierce", "accurate", "microscope", "grateful",
    "cautious", "confident"
], [
    "appeal", "addict", "wary", "aware", "misfortune", "avoid", "wretched", "keg", "nourish", "harsh",
    "quantity", "opt"
], [
    "tragedy", "pedestrian", "glance", "budget", "nimble", "manipulate", "reckless", "horrid", "rave", "economical",
    "lubricate", "ingenious"
], [
    "harvest", "abundant", "uneasy", "calculate", "absorb", "estimate", "morsel", "quota", "threat", "ban",
    "panic", "appropriate"
], [
    "emerge", "jagged", "linger", "ambush", "crafty", "defiant", "vigor", "perish", "fragile", "captive",
    "prosper", "devour"
], [
    "plea", "weary", "collide", "confirm", "verify", "anticipate", "dilemma", "detour", "merit", "transmit",
            "relieve", "baffle"
], [
    "warden", "acknowledge", "justice", "delinquent", "reject", "deprive", "spouse", "vocation", "unstable", "homicide",
    "penalize", "beneficiary"
], [
    "reptile", "rarely", "forbid", "logical", "exhibit", "proceed", "precaution", "extract", "prior", "embrace",
    "valiant", "partial"
], [
    "fierce", "detest", "sneer", "scowl", "encourage", "consider", "vermin", "wail", "symbol", "authority",
    "neutral", "trifle"
], [
    "architect", "matrimony", "baggage", "squander", "abroad", "fugitive", "calamity", "pauper", "envy", "collapse",
    "prosecute", "bigamy"
], [
    "possible", "compel", "awkward", "venture", "awesome", "guide", "quench", "betray", "utter", "pacify",
    "respond", "beckon"
], [
    "despite", "disrupt", "rash", "rapid", "exhaust", "severity", "feeble", "unite", "cease", "thrifty",
    "miserly", "monarch"
], [
    "outlaw", "promote", "undernourished", "illustrate", "disclose", "excessive", "disaster", "censor", "culprit", "juvenile",
    "bait", "insist"
], [
    "toil", "blunder", "daze", "mourn", "subside", "maim", "comprehend", "commend", "final", "exempt",
            "vain", "repetition"
], [
    "depict", "mortal", "novel", "occupant", "appoint", "quarter", "site", "quote", "verse", "morality",
    "roam", "attract"
], [
    "commuter", "confine", "idle", "idol", "jest", "patriotic", "dispute", "valor", "lunatic", "vein",
    "uneventful", "fertile"
], [
    "refer", "distress", "diminish", "maximum", "flee", "vulnerable", "signify", "mythology", "provide", "colleague",
    "torment", "loyalty"
], [
    "volunteer", "prejudice", "shrill", "jolly", "witty", "hinder", "lecture", "abuse", "mumble", "mute",
    "wad", "retain"
], [
    "candidate", "precede", "adolescent", "coeducational", "radical", "spontaneous", "skim", "vaccinate", "untidy", "utensil",
    "sensitive", "temperate"
], [
    "vague", "elevate", "lottery", "finance", "obtain", "cinema", "event", "discard", "soar", "subsequent",
    "relate", "stationary"
], [
    "prompt", "hasty", "scorch", "tempest", "soothe", "sympathetic", "redeem", "resume", "harmony", "refrain",
    "illegal", "narcotic"
], [
    "heir", "majestic", "dwindle", "surplus", "traitor", "deliberate", "vandal", "drought", "abide", "unify",
            "summit", "heed"
], [
    "biography", "drench", "swarm", "wobble", "tumult", "kneel", "dejected", "obedient", "recede", "tyrant",
    "charity", "verdict"
], [
    "unearth", "depart", "coincide", "cancel", "debtor", "legible", "placard", "contagious", "clergy", "customary",
    "transparent", "scald"
], [
    "epidemic", "obesity", "magnify", "chiropractor", "obstacle", "ventilate", "jeopardize", "negative", "pension", "vital",
    "municipal", "oral"
], [
    "complacent", "wasp", "rehabilitate", "parole", "vertical", "multitude", "nominate", "potential", "morgue", "preoccupied",
    "upholstery", "indifference"
], [
    "maintain", "snub", "endure", "wrath", "expose", "legend", "ponder", "resign", "drastic", "wharf",
    "amend", "ballot"
]
]

sentences = [
    [
        "desert; leave without planning to come back; quit", "sharp; eager; intense; sensitive", "afraid that the one you love might prefer someone else; wanting what someone else has", "ability to say the right thing", "a promise that something is true; a curse", "empty; not filled", "something that is hard to bear; difficulty", "brave; showing respect for women", "facts; information", "not used to something",
        "a man who has not married", "become fit; show that you are able"
    ], [
        "a dead body, usually of a person", "hide", "dark and depressing", "very cold", "live in", "without the power of feeling; deadened", "danger", "lie down; stretch out; lean back", "scream", "evil; wicked; dishonest; frightening",
        "try to get someone to do something; test; invite", "bet"
    ], [
        "usual; of a kind", "the least possible amount; the lowest amount", "hard to get; rare", "once a year; something that appears yearly or lasts for a year", "win over to do or believe; make willing", "necessary; very important", "mix together thoroughly; a mixture", "able to be seen", "costly; high-priced", "natural ability",
        "think out; plan; invent", "in large quantity; less than retail in price"
    ], [
        "moisture in the air that can be seen; fog; mist", "get rid of; remove; omit", "a very wicked person", "closely packed together; thick", "make use of", "moist; damp", "explanation based on thought, observation, or reasoning", "go or come down from a higher place to a lower level", "go around; go from place to place or person to person", "extremely large; huge",
        "tell beforehand", "disappear; disappear suddenly"
    ], [
        "beliefs, opinions, and customs handed down from one generation to another", "in the country", "what is carried; a load", "grounds of a college, university, or school", "the larger number; greater part; more than half", "gather together; bring together", "go over carefully; look into closely; examine", "subject that people think, write, or talk about", "a discussion in which reasons for and against something are brought out", "get away from by trickery or cleverness",
        "search into; examine thoroughly; investigate", "make better; improve by removing faults"
    ], [
        "come near or nearer to", "find out; discover", "fault; that which is wrong", "a person who works for pay", "give too little care or attention to", "make someone believe as true something that is false; mislead", "certainly; beyond doubt", "liked by most people", "being all that is needed; complete", "person for whom a lawyer acts; customer",
        "including much; covering completely", "take money, rights, etc., away by cheating"
    ], [
        "put off to a later time; delay", "agree; give permission or approval", "big and heavy; large and solid; bulky", "a small case or covering", "keep from harm or change; keep safe; protect", "condemn in public; express strong disapproval of", "having no like or equal; being the only one of its kind", "any violent, rushing stream; flood", "feel injured and angered at (something)", "interfere with and trouble; disturb",
        "dark; dim; in low spirits", "not known beforehand; unexpected"
    ], [
        "make something greater than it is; overstate", "person who does something for pleasure, not for money or as a profession", "neither good nor bad; average; ordinary", "lack of sameness; a number of different things", "supported by facts or authority; sound; true", "live longer than; remain alive after", "mystrious; unearthly", "well-known; important", "freedom from danger, care, or fear; feeling or condition of being safe", "taking up much space; large",
        "unwilling", "easily seen or understood; clear to the eye or mind; not to be doubted; plain"
    ], [
        "region near a place; neighborhood", "100 years", "violent anger; something that arouses intense but brief enthusiasm", "something handwritten or printed that gives information or proof of some fact", "end; finish; decide", "not to be denied; cannot be questioned", "act against; strive against; oppose", "be entirely without something; have not enough", "pay no attention to; disregard", "call to a fight",
        "represented on a small scale", "place from which something comes or is obtained"
    ], [
        "be better than; do better than", "of women or girls", "get up on", "try hard to get something wanted by others; be a rival", "look forward to with fear; fear greatly; causing great fear", "of man; male", "threat", "leaning; movement in a certain direction", "set too low a value, amount, or rate", "having won a victory; conquering",
        "very many; several", "easily bent; willing to yield"
    ], [
        "that which makes clear the truth or falsehood of something", "alone; single; only", "power of seeing; sense of sight", "happening often; occurring repeatedly", "a short, quick view", "done, made, or occurring not long ago", "ten years", "fail to act quickly; be undecided", "plainly not true or sensible; foolish", "direct opposition; disagreement",
        "smaller number or part; less than half", "that which is imagined or made up"
    ], [
        "set on fire", "do away with completely; put an end to", "of or having to do with cities or towns", "people of a city or country", "free in expressing one's real thoughts, opinions, or feelings; not hiding what is in one's mind", "make dirty", "make known", "forbid by law or authority", "demanding immediate action or attention; important", "as much as is needed; fully sufficient",
        "make or become less", "able to be heard"
    ], [
        "one who writes for, edits, manages, or produces a newspaper or magazine", "starvation; great shortage", "bring back or come back to life or consciousness", "begin; start", "quick to notice; watchful", "recognize as being, or show to be, a certain person or thing; prove to be the same", "move from one place to another", "a ship; a hollow container; tube containing body fluid", "continue firmly; refuse to stop or be changed", "misty; smoky; unclear",
        "a flash or beam of lightperson who prepares a publication; one who corrects a manuscript and helps to improve it", ""
    ], [
        "hard to rule or control; lawless", "person who wants and tries to get the same thing as another; one who tries to equal or do better than another", "acting or done with strong, rough force", "coarse and savage; like a brute; cruel", "person who is on the other side of a fight, game, or discussion; person fighting, struggling or speaking against another", "a noisy quarrel or fight", "an exact copy; make an exact copy of; repeat exactly", "evil; wicked; savage", "turning or swinging round and round; spinning", "person having the worst of any struggle; one who is expected to lose",
        "push with force", "confused completely; puzzled"
    ], [
        "increase in size; enlarge; swell", "make different; change; vary", "ripe; fully grown or developed", "worthy of respect; holy", "change; alter; bring up to date", "promise", "happening by chance; not planned or expected; not calling attention to itself", "follow; proceed along", "in complete agreement", "having good luck; lucky",
        "one who goes first or prepares a way for others", "fresh; clever; having new ideas"
    ], [
        "long and thin; limited; slight", "do better than; be greater than; excel", "very great; enormous", "not believe; not be sure of; feel uncertain about; lack of certainty", "amount of room or space inside; largest amount that can be held by a container", "get into or through", "go into; go through; penetrate", "exactly right as the result of care or pains", "instrument with a lens for making objects larger so that one can see things more clearly", "feeling gratitude; thankful",
        "very careful; never taking chances", "firmly believing; certain; sure"
    ], [
        "attraction; interest; to urge", "one who cannot break away from a habit or practice; addicted unable to break a habit", "on one's guard against danger or trickery; cautious", "knowing; realizing", "bad luck", "keep away from; keep out of the way of", "very unsatisfactory; miserable", "small barrel, usually holding less than ten gallons", "make or keep alive and well, with food; feed; develop an attitude", "rough to the touch, taste, eye, or ear; sharp",
        "amount", "choose or favor; select"
    ], [
        "a very sad or trrible happening; a sad play", "person who goes on foot; walker", "to look at quickly; a quick look", "estimate of the amount of money that can be spent for different purposes in a given time", "active and sure-footed; quick moving; light and quick", "handle or treat skillfully", "careless; heedless; wild", "terrible; frightful", "talk wildly", "not wasting money or time",
        "make (machinary) smooth and easy to work by putting on oil, grease, or a similar substance", "having great mental ability; clever"
    ], [
        "gathering in of grain or other food crops", "more than enough; very plentiful", "restless; disturbed; anxious", "find out by adding, subtracting, multiplying, or dividing; figure", "take in or suck up (liquids); interest greatly", "form a judgment or opinion about; guess", "a small bite; mouthful; tiny amount", "share of a total due from or to a particular state, district, person, etc.", "sign or cause of possible evil or harm", "prohibit; forbid",
        "unreasoning fear; fear spreading through a group of people so that they lose control of themselves", "fit; set apart for some special use"
    ], [
        "come out; come up; come into view", "with sharp points sticking out; unevenly cut or torn", "stay on; go slowly as if unwilling to leave", "a trap in which soldiers or othe enemies hide to make a surprise attack", "skillful in deceiving others; sly; tricky", "openly resisting; challenging", "active strength or force", "be destroyed; die", "easily broken, damaged, or destroyed; delicate", "prisoner",
        "be successful; have good fortune", "eat hungrily; absorb completely; take in greedily"
    ], [
        "request; appeal; that which is asked of another", "tired", "come together with force", "prove to be true or correct; make certain", "prove to be true; confirm", "look forward to; expect", "situation requiring a choice between two evils; a difficult choice", "a roundabout way", "goodness; worth; value", "send over; pass on; pass along; let through",
        "make less; make easier; reduce the pain of; replace; release; free", "be too hard to understand or solve"
    ], [
        "keeper; guard; person in charge of a prison", "admit to be true", "just conduct; fair dealing", "an offender; criminal; behind time", "refuse to take, use, believe, consider, grant, etc.", "take away from by force", "husband or wife", "occupation; business; profession; trade", "not firmly fixed; easily moved or overthrown", "a killing of one human being by another; murder",
        "declare punishable by law or rule; set a penalty for", "person who receives benefit"
    ], [
        "a cold blooded animal that creeps or crawls; snakes, lizards, turtles, alligators, and crocodiles", "seldom; not often", "order someone not to do something; make a rule against", "reasonable; reasonably expected", "display; show", "go on after having stopped; move forward", "measures taken beforehand; foresight", "pull out or draw out, usually with some effort", "coming before; earlier", "hug one another; a hug",
        "brave; courageous", "not complete; not total"
    ], [
        "savage; wild", "dislike very much; hate", "show scorn or contempt by looks or words; a scornful look or remark", "look angry by lowering the eyebrows; frown", "give courage to; increase the confidence of", "think about in order to decide", "small animals that are troublesome or destructive; fleas, bedbugs, lice, rats, and mice are vermin", "cry loud and long because of grief or pain", "something that stands for or represents something else", "the right to command or enforce obedience; power delegated to another; an author or volume that may be appealed to in support of an action or belief",
        "on neither side of a quarrel or war", "a small amount; little bit; something of little value"
    ], [
        "a person who makes plans for buildings and other structures; a maker; a creator", "married life; ceremony of marriage", "the trunks and suitcases a person takes when he or she travels; an army's equipment", "spend foolishly; waste", "outside one's country; going around; far and wide", "a runaway", "a great misfortune; serious trouble", "a very poor person", "jealousy; the object of jealousy; to feel jealous", "a breakdown; to fall in; break down; fail suddenly; fold together",
        "bring before a court; follow up; carry on", "having two wives or two husbands at the same time"
    ], [
        "able to be, be done, or happen; able to be true; able to be done or chosen properly", "force; get by force", "clumsy; not well-suited to use; not easily managed; embarrassing", "a daring undertaking; an attempt to make money by making business risks; to dare; to expose to risk", "causing or showing great fear, wonder, or respect", "a person who shows the way; to direct; to manage", "put an end to; drawn or put out", "give away to the enemy; be unfaithful; mislead; show", "speak; make known; express", "make calm; quiet down; bring peace to",
        "answer; react", "signal by a motion of the hand or head; attract"
    ], [
        "in spite of", "upset; cause to break down", "a breaking out with many small red spots on the skin; outbreak of many instances within a short time too hasty or careless", "very quick; swift", "empty completely; use up; tire out", "strictness; harshness; plainness; violence", "weak", "join together; become one", "stop", "saving; careful in spending; thriving",
        "stingy; like a miser", "king or queen; ruler"
    ], [
        "an exile; an outcast; a criminal; to declare unlawful", "raise in rank or importance; help to grow and develop; help to organize", "not sufficiently fed", "make clear or explain by stories, examples, comparisons, or other means; serve as an example", "uncover; make known", "too much; too great; extreme", "an event that causes much suffering or loss; a great misfortune", "person who tells others how they ought to behave; one who changes books, plays and other works so as to make them acceptable to the government; to make changes in", "offender; person guilty of a fault or crime", "young; youthful; of or for boys and girls; a young person",
        "anything, specially food, used to attract fish or other animals so that they may be caught; anything used to tempt or attract a person to begin something he or she does not wish to do; to put bait on (a hook) or in (a trap); torment by unkind or annoying remarks", "keep firmly to some demand, statement, or position"
    ], [
        "hard work; to work hard; move with difficulty", "stupid mistake; to make a stupid mistake; stumble; say clumsily", "confuse", "grieve; feel or show sorrow for", "sink to a lower level; grow less", "cripple; disable; cause to lose an arm, leg, or other part of the body", "understand", "praise; hand over for safekeeping", "coming last; deciding", "make free from; freed from",
        "having too much pride in one's ability, looks, etc.; of no use", "act of doing or saying again"
    ], [
        "represent by drawing or painting; describe", "sure to die sometime; pertaining to man; deadly; pertaining to or causing death", "new; strange; a long story with characters and plot", "person in possession of a house, office, or position", "decide on; set a time or place; choose for a position; equip or furnish", "region; section; (quarters) a place to live; to provide a place to live", "position or place (of anything)", "repeat exactly the words of another or a passage from a book; that is, something that is repeated exactly; give the price of; a quotation", "a short division of a chapter in the Bible; a single line or a group of lines of poetry", "the right or wrong of an action; virtue; a set of rules or principles of conduct",
        "wander; go about with no special plan or aim", "draw to oneself; win the attention and liking of"
    ], [
        "one who travels regularly, especially over a considerable distance between home and work", "keep in; hold in", "not doing anything; not busy; lazy; without any good reason or cause; to waste (time)", "a thing, usually an image, that is worshiped; a person or thing that is loved very much", "joke; fun; mockery; thing to be laughed at; to jock; poke fun", "loving one's country; showing love and loyal support for one's country", "disagree; oppose; try to win; a debate or disagreement", "bravery; courage", "crazy person; insane; extremely foolish", "mood; a blood vessel that carries blood to the heart; a crack or seam in a rock filled with a different mineral",
        "without important or striking happenings", "bearing seeds or fruit; producing much of anything"
    ], [
        "hand over; send, direct, or turn for information, help, or action; (refer to) direct attention to or speak about; assign to or think of as caused by", "great pain or sorrow; misfortune; dangerous or difficult situation; to cause pain or make unhappy", "make or become smaller in size, amount or importance", "greatest amount; greatest possible", "run away; go quickly", "capable of being injured; open to attack; sensitive to criticism, influences, etc.", "mean; be a sign of; make known by signs, words, or actions; have importance", "legends or stories that ususally attempt to explain something in nature", "associate; fellow worker", "cause very great pain to; worry or annoy very much; cause of very great pain; very great pain",
        "to supply; to state as a condition; to prepare for or against some situation", "faithfulness to a person, government, idea, custome, or the like"
    ], [
        "person who enters any service of his or her own free will; to offer one's services", "an opinion formed without taking time and care to judge fairly; to harm or injure", "having a high pitch; high and sharp in sound; piercing", "merry; full of fun", "cleverly amusing", "hold back; make hard to do", "speech or planned talk; a scolding; to scold", "make bad use of; use wrongly; treat badly; scold very severely; bad or wrong use; bad treatment", "speak indistinctly", "silent; unable to speak",
        "small, soft mass; to roll or crush into a small mass", "keep; remember; employ by payment of a fee"
    ], [
        "person who is proposed for some office or honor", "go before; come before; be higher in rank or importance", "growing up to manhood or womanhood; youthful; a person from about 13 to 22 years of age", "having to do with educating both sexes in the same school", "going to the root; fundamental; extreme; person with extreme opinions", "of one's own free will; natural; on the spur of the moment; without rehearsal", "remove from the top; move lightly (over); glide along; read hastily or carelessly", "inoculate with vaccine as a protection against smallpox and other diseases", "not neat; not in order", "container or tool used for practical purposes",
        "receiving impressions readily; easily affected or influenced; easily hurt or offended", "not very hot and not very cold; moderate"
    ], [
        "not definite; not clear; not distinct", "raise; lift up", "a scheme for distributing prizes by lot or chance", "money matters; to provide money for", "get; be in use", "moving picture", "happening; important happening; result or outcome; one item in a program of sports", "throw aside", "fly upward or at a great height; aspire", "later; following; coming after",
        "tell; give an account of; connect in thought or meaning", "having a fixed station or lpace; standing still; not moving; not changing in size, number or activity"
    ], [
        "quick; on time; done at once; to cause (someone) to do something; remind (someone) of the words or actions needed", "quick; hurried; not well thought out", "burn slightly; dry up; criticize sharply", "violent storm with much wind; a violent disturbance", "quiet; calm; comfort", "having or showing kind feelings toward others; approving; enjoying the same things and getting along well together", "buy back; pay off; carry out; set free; make up for", "begin again; go on; take again", "situation of getting on well together or going well together; sweet or musical sound", "hold back",
        "not lawful; against the law", "drug that produces drowsiness, sleep, dullness, or an insensible condition, and lessens pain by dulling the nerves"
    ], [
        "person who has a right to someone's property after that one dies; person who inherits anything", "grand; noble; dignified; kingly", "become smaller and smaller; shrink", "amount over and above what is needed; excess, extra", "person who betrays his or her country, a friend, duty, etc.", "to consider carefully; intended; done on purpose; slow and careful, as though allowing time to decide what to do", "person who wilfully or ignorantly destroys or damages beautiful things", "long period of dry weather; lack of rain; lack of water; dryness", "accept and follow out; remain faithful to; dwell; endure", "unite; make or form into one",
        "highest point; top", "give careful attention to; take notice of; careful attention"
    ], [
        "the written story of a person's life; the part of literature that consists of biographies", "wet thoroughly; soak", "group of insects flying or moving about together; crowd or great number; to fly or move about in great numbers", "move unsteadily from side to side", "noise; uproar; violent disturbance or disorder", "go down on one's knees; remain on the knees", "in low spirits; sad", "doing what one is told; willing to obey", "go back; move back; slope backward; withdraw", "cruel or unjust ruler; cruel master; absolute ruler",
        "generous giving to the poor; institutions for helping the sick, the poor, or the helpless; kindness in judging people's faults", "decision of a jury; judgment"
    ], [
        "dig up; discover; find out", "go away; leave; turn away (from); change; die", "occupy the same place in space; occupy the same time; correspond exactly; agree", "cross out; mark so that it cannot be used; wipe out; call off", "person who owes something to another", "able to be read; easy to read; plain and clear", "a notice to be posted in a public place; poster", "spreading by contact, easily spreading from one to another", "persons prepared for religious work; clergymen as a group", "usual",
        "easily seen through; clear", "pour boiling liquid over; burn with hot liquid or steam; heat almost to the boiling point"
    ], [
        "an outbreak of a disease that spreads rapidly, so that many people have it at the same time; widespread", "extreme fatness", "cause to look larger than it really is; make too much of; go beyond the truth in telling", "a person who treats ailments by massage and manipulation of the vertebrae and other forms of therapy on the theory that disease results from interference with the normal functioning of the nervous system", "anything that gets in the way or hinders; impediment; obstruction", "change the air in; purify by fresh air; discuss openly", "risk; endanger", "saying no; minus; showing the lights and shadows reversed", "regular payment that is not wages; to make such a payment", "having to do with life; necessary to life; causing death; failure or ruin; lively",
        "of a city or state; having something to do in the affairs of a city or town", "spoken; using speech; of the mouth"
    ], [
        "pleased with oneself; self-satisfied", "an insect with a slender body and powerful sting", "restore to good condition; make over in a new form; restore to former standing, rank, reputation, etc.", "word of honor; conditional freedom; to free (a prisoner) under certain conditions", "straight up and down with reference to the horizon, for example, a vertical line", "a great number; a crowd", "name as a candidate for office; appoint to an office", "possibility as opposed to actuality; capability of coming into being or action; possible as opposed to actual; capable of coming into being or action", "place where bodies of unknown persons found dead are kept; the reference library of a newspaper office", "took up all the attention",
        "coverings and cushions for furniture", "lack of interest, care, or attention"
    ], [
        "keep; keep on; carry on; uphold; support; declare to be true", "treat coldly, scornfully, or with contempt; cold treatment", "last; keep on; undergo; bear; stand", "very great anger; rage", "lay open; uncover; leave unprotected; show openly", "story coming from the past, which many people have believed; what is written on a coin or below a picture", "consider carefully", "give up; yield; submit", "acting with force or violence", "platform built on the shore or out from the shore beside which ships can load or unload",
        "change for the better; correct; change", "piece of paper used in voting; the whole number of votes cast; the method of secret voting; to vote or decide by using ballots"
    ]
]

num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]


lis = []

dic = {}

for word, sentence in zip(words, sentences):
    for w, s in zip(word, sentence):
        lis.append({"word": w, "meaning": s})

print(lis)

# json_object = json.dumps(dic, indent = 4)
# print(json_object)
