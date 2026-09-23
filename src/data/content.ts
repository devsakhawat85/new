import { ServiceItem, InsightArticle, InstagramCardItem, FaqItem, TestimonialItem } from '../types';

export const PRACTICE_INFO = {
  name: 'Dr. Amanda Gretsch',
  degrees: 'OTD, OTR/L',
  legalName: 'Amanda J. Gretsch, Inc.',
  address: '5402 Ruffin Rd, Suite 104, San Diego, CA 92123',
  phone: '(760) 525-3111',
  email: 'info@dramandagretsch.com',
  instagramHandle: '@dr_amanda_gretsch_ot',
  instagramUrl: 'https://www.instagram.com/dr_amanda_gretsch_ot/',
  hours: 'Monday – Friday: 8:30 AM – 5:30 PM (By Appointment)',
  specialties: [
    'Sensory Integration & Processing',
    'Neurofeedback & Brainwave Regulation',
    'Executive Function & Attention',
    'Emotional & Autonomic Regulation',
    'Pediatric & Young Adult Neurodevelopment'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'occupational-therapy',
    number: '01',
    title: 'Occupational Therapy',
    shortDescription: 'Holistic clinical evaluation and treatment supporting daily occupations, independence, fine motor, and sensory-motor harmony.',
    fullDescription: 'Comprehensive pediatric and lifespan occupational therapy focused on meaningful daily participation. We evaluate how the motor system, sensory processing channels, environmental stressors, and emotional states interact during school, home, play, and self-care routines.',
    whoItIsFor: [
      'Children and adolescents navigating coordination or sensory differences',
      'Individuals struggling with handwriting, fine motor stamina, or bilateral motor skills',
      'Families seeking practical, joyful adaptations for daily routines and transitions'
    ],
    focusAreas: [
      'Sensory-motor integration & praxis',
      'Fine & gross motor coordination',
      'Activities of daily living (self-care, dressing, hygiene)',
      'Environmental adaptation & school accommodation strategies'
    ],
    outcomes: [
      'Greater independence in daily self-care and school tasks',
      'Enhanced physical confidence and coordination',
      'Reduced household friction during everyday routines'
    ],
    image: '/src/assets/images/sensory_space_calm_1790146030858.jpg'
  },
  {
    id: 'neurofeedback',
    number: '02',
    title: 'Neurofeedback',
    shortDescription: 'Non-invasive brainwave self-regulation training designed to support focus, reduce autonomic hyperarousal, and promote cognitive ease.',
    fullDescription: 'EEG biofeedback is an evidence-informed modality that provides real-time audiovisual feedback on electrical brainwave patterns. By reinforcing stable, regulated states, the central nervous system learns flexible self-regulation over time.',
    whoItIsFor: [
      'Individuals experiencing attention variability, ADHD, or distractibility',
      'Children and adults carrying chronic nervous system overwhelm, anxiety, or sensory fatigue',
      'Individuals seeking non-pharmacological tools to support baseline nervous system stability'
    ],
    focusAreas: [
      'Sensorimotor rhythm (SMR) stabilization',
      'Theta/Beta ratio balancing for sustained focus',
      'Alpha rhythm coherence for restorative calm',
      'Autonomic nervous system recovery'
    ],
    outcomes: [
      'Improved attentional stamina without heightened tension',
      'Faster recovery following sensory or emotional triggers',
      'Enhanced sleep architecture and calm wakefulness'
    ],
    image: '/src/assets/images/neural_flow_calm_1790146046394.jpg'
  },
  {
    id: 'biofeedback',
    number: '03',
    title: 'Biofeedback',
    shortDescription: 'Physiological monitoring (HRV, respiration, skin conductance) helping individuals perceive and gently shift their body’s stress states.',
    fullDescription: 'Biofeedback uses sensitive peripheral sensors to measure heart rate variability (HRV), respiration cadence, peripheral skin temperature, and muscle tension. Patients learn tangible, repeatable somatic practices to transition out of fight-or-flight into parasympathetic restoration.',
    whoItIsFor: [
      'Individuals experiencing somatic stress symptoms (muscle tension, shallow breathing)',
      'Teens and adults needing concrete physiological proof of their stress responses',
      'Those seeking tangible somatic regulation tools they can practice anywhere'
    ],
    focusAreas: [
      'Heart Rate Variability (HRV) resonance frequency breathing',
      'Surface electromyography (sEMG) down-training',
      'Galvanic skin response (GSR) awareness',
      'Diaphragmatic breath mechanics'
    ],
    outcomes: [
      'Conscious awareness of internal stress physiology',
      'Measurable increases in vagal tone and heart coherence',
      'Practical grounding techniques for high-demand environments'
    ],
    image: '/src/assets/images/consultation_nook_1790146067426.jpg'
  },
  {
    id: 'sensory-processing-support',
    number: '04',
    title: 'Sensory Processing Support',
    shortDescription: 'Identifying sensory thresholds (hypo/hyper-reactivity, sensory seeking) to construct neuro-affirming sensory diets and supportive environments.',
    fullDescription: 'Every nervous system perceives sounds, textures, gravitational movement, and internal signals (interoception) through an individual sensory blueprint. We demystify sensory overload, prevent meltdowns, and design sensory nourishment tailored to each individual.',
    whoItIsFor: [
      'Children easily overwhelmed by bright lights, loud rooms, or clothing textures',
      'Sensory seekers who crave intense movement, crashing, or vestibular input',
      'Parents searching for why their child experiences intense after-school dysregulation'
    ],
    focusAreas: [
      'Sensory profile evaluation (Vestibular, Proprioceptive, Tactile, Interoceptive)',
      'Customized sensory diet development',
      'Home and classroom environmental modifications',
      'Sensory safe spaces and decompression tools'
    ],
    outcomes: [
      'Fewer sensory-induced meltdowns and shutdowns',
      'Clear family language for sensory boundaries and needs',
      'Spaces and routines optimized for nervous system comfort'
    ],
    image: '/src/assets/images/tactile_hands_play_1790146055032.jpg'
  },
  {
    id: 'attention-executive-function',
    number: '05',
    title: 'Attention & Executive Function',
    shortDescription: 'Scaffolding working memory, task initiation, cognitive flexibility, and organization without shame or rigid behavioral pressure.',
    fullDescription: 'Executive functioning difficulties are not a character flaw or laziness. We dissect how working memory, dopamine regulation, and cognitive shifting interact, designing visual structures, external timers, and habit loops that respect how unique minds operate.',
    whoItIsFor: [
      'Students struggling with initiation paralysis, homework overwhelm, or time blindness',
      'Individuals with ADHD feeling chronically disorganized or exhausted by masking',
      'Families desiring compassionate organizational systems that actually last'
    ],
    focusAreas: [
      'Task initiation strategies and overcoming inertia',
      'Time visualization and externalized calendar systems',
      'Emotional regulation during transitions and frustration',
      'Working memory offloading and habit anchoring'
    ],
    outcomes: [
      'Reduced friction and panic around deadlines and transitions',
      'Sustainable tools that foster intrinsic pride and autonomy',
      'Protection of self-esteem from the label of "careless"'
    ],
    image: '/src/assets/images/consultation_nook_1790146067426.jpg'
  },
  {
    id: 'emotional-regulation',
    number: '06',
    title: 'Emotional Regulation',
    shortDescription: 'Neuro-informed approaches to understanding big feelings, nervous system states, co-regulation, and compassionate de-escalation.',
    fullDescription: 'Before a brain can reason, reflect, or problem-solve, the nervous system must feel safe. We teach parents and individuals how autonomic states (ventral vagal, sympathetic fight/flight, dorsal vagal shutdown) govern behavior, building proactive co-regulation toolkits.',
    whoItIsFor: [
      'Children with explosive outbursts, tearful shutdowns, or rapid dysregulation',
      'Parents feeling depleted and unsure how to soothe an overwhelmed child',
      'Teens and adults navigating emotional flooding and sensory fatigue'
    ],
    focusAreas: [
      'Polyvagal-informed autonomic state mapping',
      'Parent-child co-regulation strategies',
      'Interoceptive awareness (sensing physical cues before emotional eruption)',
      'Neuro-affirming repair and communication practices'
    ],
    outcomes: [
      'Shift from reactive discipline to proactive physiological safety',
      'Shortened duration and intensity of emotional storms',
      'Deeper connection and mutual trust within family systems'
    ],
    image: '/src/assets/images/dr_amanda_portrait_1790146014710.jpg'
  },
  {
    id: 'neurodevelopmental-support',
    number: '07',
    title: 'Neurodevelopmental Support',
    shortDescription: 'Guiding developmental milestones, primitive reflex integration, postural control, and developmental foundations across the lifespan.',
    fullDescription: 'Higher-level learning, attention, and emotional ease stand on the foundation of early brainstem and subcortical reflexes. We screen for retained primitive reflexes and postural instability that may be quietly taxing an individual’s cognitive energy reserves.',
    whoItIsFor: [
      'Children experiencing unexplained motor clumsiness or posture fatigue',
      'Individuals with persistent toe-walking, motion sensitivity, or poor visual tracking',
      'Developing youth needing foundational neurological integration'
    ],
    focusAreas: [
      'Primitive reflex assessment & gentle movement integration',
      'Postural control, core stability & midline crossing',
      'Visual-vestibular-proprioceptive triad coordination',
      'Developmental movement sequences'
    ],
    outcomes: [
      'Decreased physical fatigue during sitting and focused learning',
      'Smoother motor control and midline integration',
      'Freed cognitive energy previously spent fighting baseline postural stress'
    ],
    image: '/src/assets/images/sensory_space_calm_1790146030858.jpg'
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'after-school-meltdown',
    title: 'Why Does My Child Melt Down After School?',
    category: 'Sensory Processing',
    readTime: '5 min read',
    publishDate: 'Clinical Essay · 2026',
    excerpt: 'Your child held it together all day. The moment they cross the doorway at home, tears or explosions occur. This is not defiance — it is autonomic decompression.',
    image: '/src/assets/images/sensory_space_calm_1790146030858.jpg',
    content: [
      'To an outside observer, the sudden shift makes no sense. The teacher reported an angelic, quiet day. Yet within twenty minutes of arriving home, shoes are thrown, tears fall over the wrong snack cup, or an intense fight erupts over homework.',
      'In occupational therapy and neuro-informed care, we recognize this phenomenon as "After-School Restraint Collapse" or autonomic decompression. During eight hours in the classroom, a child with sensory processing sensitivities or executive functioning differences spends enormous energy "masking" and compensating. They suppress fidgeting, endure fluorescent lighting buzzes, tolerate unpredictable cafeteria acoustics, and constantly inhibit impulses.',
      'Home is their designated safe harbor. When children arrive home, their prefrontal cortex runs out of inhibitory fuel, and the nervous system finally releases the physiological pressure valve.',
      'Rather than imposing demands, questioning about test grades, or demanding immediate chores, try establishing a "Zero-Demand Decompression Window." Dim the foyer lighting, offer heavy-work input (crawling under a weighted blanket or gentle trampoline bounces), provide a chewy or crunchy snack to activate the masseter muscle (a natural vagal calmer), and allow twenty minutes of silent somatic recovery.'
    ],
    keyTakeaways: [
      'After-school meltdowns indicate safety, not malice; home is where masks can fall off.',
      'Cognitive inhibition is an exhaustible physical resource that depletes by 3 PM.',
      'A 20-minute low-demand sensory decompression window dramatically decreases evening friction.'
    ]
  },
  {
    id: 'sensory-overload-signs',
    title: 'What Sensory Overload Actually Looks Like',
    category: 'Sensory Processing',
    readTime: '4 min read',
    publishDate: 'Educational Guide · 2026',
    excerpt: 'Sensory overload is rarely just hands clamped over ears. Often it masquerades as silliness, hyperactive giggling, running away, or sudden shut-down.',
    image: '/src/assets/images/tactile_hands_play_1790146055032.jpg',
    content: [
      'Popular media often depicts sensory overload as an immediate sensory aversion: a child shielding their eyes, placing hands firmly over ears, or crying in a crowded supermarket aisle. While those are very real expressions, they are only one corner of the spectrum.',
      'For many neurodivergent individuals, sensory overload presents in stealth forms:',
      '1. The "Class Clown" Surge: Intense dopamine-seeking silliness, high-pitched laughter, and sudden exaggerated bodily movements. This is often the nervous system attempting to override noxious background noise with self-generated sound and movement.',
      '2. Elopement (The Flight Response): Bolting down a hallway, hiding underneath furniture, or curling into small corners without an obvious argument.',
      '3. Visceral Irritability: Snapping at gentle questions, sudden tactile rejection ("this shirt feels like fire"), or defensive posture.',
      '4. The Dorsal Shutdown: Blank stares, delayed processing of verbal instructions, or appearing "spaced out." The brain is preserving resources by dialing down peripheral reception.',
      'Recognizing these early warning signs allows caregivers to intervene with nervous system support before reaching the point of total dysregulation.'
    ],
    keyTakeaways: [
      'Sensory overwhelm often manifests as hyperactivity, silliness, or sudden withdrawal.',
      'Defensive behavior is frequently the brain defending itself from sensory assault.',
      'Noticing body language shifts early prevents full autonomic crisis.'
    ]
  },
  {
    id: 'emotional-regulation-ladder',
    title: 'Understanding Emotional Regulation: Calm Must Precede Logic',
    category: 'Regulation',
    readTime: '6 min read',
    publishDate: 'Clinical Philosophy · 2026',
    excerpt: 'You cannot talk a brain out of a state it was not talked into. Why physiological co-regulation is the prerequisite to all reasoning and learning.',
    image: '/src/assets/images/consultation_nook_1790146067426.jpg',
    content: [
      'When a child or adult is in an activated fight-or-flight sympathetic arousal state, blood flow and glucose are physically prioritized in the amygdala and brainstem, diverting away from the prefrontal cortex — the seat of logic, consequence analysis, and verbal reasoning.',
      'Attempting to explain "why we shouldn’t do that" during the height of a tantrum or panic episode is neurologically ineffective. The ear muscles even shift tension during sympathetic activation, dampening high-frequency human voice tones and tuning in to low predator sounds.',
      'The three-stage regulatory sequence is always:',
      'Step 1: REGULATE — Calm the physiology. Lower vocal tone, soften eye gaze, sit at or below eye level, exhale slowly, provide grounding physical presence.',
      'Step 2: RELATE — Attune emotionally. "I am right here with you. You are safe. This feels really big right now."',
      'Step 3: REASON — Once respiration has slowed and the child’s eyes re-engage with soft connection, collaborative problem-solving can begin.',
      'Respecting this physiological order transforms how families resolve conflict and builds lifelong neural self-regulation pathways.'
    ],
    keyTakeaways: [
      'The prefrontal cortex goes offline during high sympathetic distress.',
      'Logic during a meltdown often increases threat perception.',
      'Regulate first, Relate second, Reason third.'
    ]
  },
  {
    id: 'adhd-executive-function-myths',
    title: 'What Parents Should Know About ADHD, Dopamine & Regulation',
    category: 'Executive Function',
    readTime: '5 min read',
    publishDate: 'Neurodevelopment · 2026',
    excerpt: 'ADHD is not a deficit of attention — it is a deficit of attention regulation. Understanding the relationship between dopamine, interest, and nervous system stimulation.',
    image: '/src/assets/images/neural_flow_calm_1790146046394.jpg',
    content: [
      '"If they can sit and play Lego or video games for three straight hours, how can they have an attention deficit?" This is perhaps the most frequent and painful question parents bring into our practice.',
      'The reality is that ADHD is misnamed. It is not an absence of attention; it is an intrinsic neurochemical challenge with attention regulation and executive control. The ADHD brain lives in an environment of chronic dopamine baseline deficiency.',
      'When an activity offers immediate feedback, vivid color, rapid novelty, or personal fascination (like creative building or responsive games), dopamine flows naturally, allowing the brain to achieve effortless hyperfocus.',
      'Conversely, when a task requires delayed gratification, repetitive steps, or abstract worksheets, the dopamine deficit makes task initiation physically painful — akin to trying to start an automobile with an empty battery.',
      'When we view procrastination as a dopamine-energy crisis rather than moral laziness, we can design appropriate sensory scaffolding, body-doubling support, tangible visual increments, and somatic rewards that honor how the ADHD nervous system operates.'
    ],
    keyTakeaways: [
      'ADHD is inconsistent regulation of focus, not an inability to focus.',
      'Hyperfocus on passionate tasks is a hallmark of dopamine-driven neurological wiring.',
      'External scaffolds and compassion replace guilt with functional momentum.'
    ]
  }
];

export const INSTAGRAM_POSTS: InstagramCardItem[] = [
  {
    id: 'ig-1',
    type: 'quote',
    kicker: 'A GENTLE REFRAME',
    quote: 'What if your child isn’t giving you a hard time — what if they are having a hard time?',
    caption: 'When behavior is understood as communication rather than rebellion, our entire parenting posture softens into curiosity.',
    likesCount: '1.4k',
    bgColor: 'bg-[#173C36] text-[#F4EFE5]'
  },
  {
    id: 'ig-2',
    type: 'insight',
    kicker: 'SENSORY INSIGHT',
    quote: 'Regulation must come before performance.',
    caption: 'You cannot build executive function, academic stamina, or social ease upon a dysregulated nervous system.',
    likesCount: '980',
    bgColor: 'bg-[#F4EFE5] text-[#173C36]'
  },
  {
    id: 'ig-3',
    type: 'reflection',
    kicker: 'THE PARADOX',
    quote: 'Maybe the problem isn’t motivation. Maybe there is something else happening underneath.',
    caption: 'Behind "lazy" is often executive paralysis. Behind "stubborn" is often sensory panic. Look closer.',
    likesCount: '2.1k',
    bgColor: 'bg-[#DED5C5] text-[#173C36]'
  },
  {
    id: 'ig-4',
    type: 'quote',
    kicker: 'NERVOUS SYSTEM TRUTH',
    quote: 'Focus is not simply about trying harder.',
    caption: 'Focus is an emergent property of a central nervous system that feels sufficiently safe, nourished, and organized.',
    likesCount: '1.8k',
    bgColor: 'bg-[#102E2A] text-[#F4EFE5]'
  },
  {
    id: 'ig-5',
    type: 'insight',
    kicker: 'CLINICAL REMINDER',
    quote: 'Small changes can create meaningful nervous system safety.',
    caption: 'Dimming overhead lighting, anchoring daily rhythms, and prioritizing 10 minutes of somatic connection alter family health.',
    likesCount: '1.2k',
    bgColor: 'bg-[#FAF8F3] text-[#173C36]'
  },
  {
    id: 'ig-6',
    type: 'reflection',
    kicker: 'COMMUNICATION',
    quote: 'Behavior is communication. The body is communicating too.',
    caption: 'When we listen to posture, breath, sensory avoidance, and subtle somatic shifts, words become secondary.',
    likesCount: '2.6k',
    bgColor: 'bg-[#173C36] text-[#F4EFE5]'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: 'For three years we were told our son was simply defiant and unmotivated. Dr. Amanda helped us understand his intense sensory defensiveness and executive exhaustion. That shift in perspective changed our family’s entire life.',
    attribution: 'Parent of 9-Year-Old Client',
    context: 'San Diego Practice · Occupational Therapy & Sensory Care'
  },
  {
    quote: 'Neurofeedback with Dr. Amanda provided a level of calm and attentional focus my daughter had never experienced. She felt understood, safe, and genuinely excited to come to every session.',
    attribution: 'Parent of Middle School Student',
    context: 'San Diego Practice · Neurofeedback Protocol'
  },
  {
    quote: 'As an adult navigating late-diagnosed ADHD, finding a clinician who integrates science with genuine warmth and dignity was profound. She doesn’t just teach strategies; she honors how your nervous system works.',
    attribution: 'Adult Client & Educator',
    context: 'San Diego Practice · Executive Function & Biofeedback'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'What is occupational therapy, and how does it differ from physical or speech therapy?',
    answer: 'Occupational therapy (OT) enables individuals of all ages to engage meaningfully in the "occupations" of life — everything from playing, learning, making friends, and managing self-care, to handwriting, organizing tasks, and regulating emotions. While physical therapy focuses primarily on gross motor mobility and speech therapy centers on communication and feeding mechanics, occupational therapy examines the holistic interplay between sensory processing, motor control, emotional regulation, and environmental adaptation.',
    category: 'Occupational Therapy'
  },
  {
    question: 'Who can benefit from occupational therapy and neuro-informed care?',
    answer: 'Individuals who feel that everyday demands (school transitions, sensory-rich environments, multi-step homework, sustained focus, social coordination) create disproportionate distress, exhaustion, or behavioral friction. We frequently support neurodivergent children and adults (ADHD, sensory processing differences, autism, anxiety) as well as those navigating executive functioning hurdles or motor coordination challenges.',
    category: 'Occupational Therapy'
  },
  {
    question: 'What happens during an initial occupational therapy evaluation?',
    answer: 'An initial evaluation is an in-depth, collaborative exploration. It typically includes a thorough developmental and sensory history interview with caregivers/individuals, clinical observations of motor planning, sensory reactivity, postural reflexes, bilateral coordination, and standardized assessments where clinically indicated. We prioritize creating a warm, non-intimidating environment so the individual feels welcomed, safe, and curious.',
    category: 'Appointments'
  },
  {
    question: 'What is neurofeedback, and how does it work?',
    answer: 'Neurofeedback (EEG biofeedback) is a gentle, non-invasive method for training self-regulation in the central nervous system. Sensors placed on the scalp observe brainwave electrical rhythms in real time. When the brain enters desirable, regulated frequencies, the patient receives positive audiovisual feedback (a video continues playing smoothly or an audio chime sounds). Over repeated sessions, the brain utilizes its natural neuroplasticity to adopt healthier baseline regulation and cognitive flexibility.',
    category: 'Neurofeedback'
  },
  {
    question: 'Is neurofeedback painful or intrusive?',
    answer: 'Not at all. Neurofeedback is strictly passive measurement — no electrical currents or shocks are ever transmitted into the brain. Sensors solely read the natural electromagnetic microvolt fluctuations already produced by your cerebral cortex, similar to how an EKG reads heart signals.',
    category: 'Neurofeedback'
  },
  {
    question: 'Do you work with children, adults, or both?',
    answer: 'Dr. Amanda’s clinical practice serves children, adolescents, young adults, and families. Pediatric and neurodevelopmental care forms a foundational pillar, while neurofeedback and executive function support are also frequently provided to teenagers and adults seeking nervous system ease.',
    category: 'General'
  },
  {
    question: 'How do I get started with Dr. Amanda?',
    answer: 'You can submit an inquiry through our secure contact form on this website or call our office at (760) 525-3111. We begin with a brief complimentary phone consultation to discuss your specific concerns, ensure our practice is the right clinical fit, and outline recommended next steps.',
    category: 'Appointments'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Dr. Amanda Gretsch operates as an out-of-network private practice provider. This clinical model allows us to prioritize individualized care plans, comprehensive parent coaching, and innovative neuro-technologies without arbitrary restrictions dictated by third-party insurance payers. We provide detailed itemized Superbills (containing diagnostic and CPT codes) that clients may submit to their insurance providers for potential out-of-network reimbursement.',
    category: 'Appointments'
  }
];
