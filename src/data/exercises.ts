export type Exercise = {
  id: string;
  name: string;
  bodyPart: string;
  category: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  mechanic: string;
  force: string;
  utility: string;
  description: string;
  imageUri: string;
  videoUri: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  tips: { title: string; description: string; }[];
};

const getUniqueVideo = (id: string) => `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4?vid=${id}`;
const getUniqueImage = (id: string, fallback: string) => `${fallback}?img=${id}`;

// Standard Image for Aetheric Athleticism Theme
const DEFAULT_CHEST_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6tXX7XIIxbL5_Y_pktrT-iWf2EqPa5yC2m1q86lqv1PcFUKDogJPevrCGLrLqnydnXu3u5Sazo6vAm1anECUkddY5OHpg_Ep8sUvhe-fC3O5upPYb913WK9YD3FsxVundOAEzZzEB4ewdngjY6zC5KJo2KRPQpU-lM5n8mSU7qsFPqmjYxWrIEJzC-RYgZGrZp6KAsFpuzPsFihJHet2lK2JwZOP6mKrehbAr1yEa9SuaCMei5YcWVnDpL4zbeIMKb8LIvRG9ZLsx';
const DEFAULT_BACK_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdpNlsnw6Yxdh0MuNmqMtZmMEbdLYA8kEqAVU6T9kjGqHX1Y_jiDISv-7fktL4UTkaMcpgcxWYdGs0efsJyjqlEPciXUIdcyfWgunrXuTHoG6OW3c1qREyQKYjnUVDsYsGwL7yGwpTwfJ0sDyBrgn6a3DvEyGYs24cj8_aVXgV-qR1wNfBR2Z_PaEw7Wym1ewepa4HZd38nG6whStm8vz4ziRz_bHmIfq6bXV0afqb_bFakENNy5Mxm1F5bYoHbQNf4a3sRhbkj7X4';
const DEFAULT_LEGS_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuADv6_yQjMQtFNtTUtDSmzEOds1hiU_B1C-iCafrXbPT-WqFW_piNcRYxESNfHUOnNomspplsq08gOvoumQvKp52fp7Qln8y23L6uLTEDZbenQqZ56pfjMTpRKhkHOS2CQjTTWKCITYO08M5Ho_YI665hFB7p7EGjzV3ucqnrjCAIzsUXffu8E_N4sHswkaiaLQ9naZjqyyGmC_SwuPI98OxZdxl9WEtcsHVCUI1qe7mbWBHrydgeuxvYkVS3h4LLS39a3zRS8OzvH3';
const DEFAULT_SHOULDERS_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUbL0-p7rKm6ACF3jbBnVf-5w16rJftU5pVX7E3jYbomt7vvohuSt4WmtnPFECn67ebROWfDFLEDFfaOKkwHP0mSudOK8JXmAUraeR-xsOX3eXQ3znMYU15m3eVIUPVp6tMN3SSbnmyL76ZNGb-A53Hf6jwlcJqAey8ijSW2lK1lVyq2UyCkTv-Lt5A4JyI_LLbqfQuJdk4fQB1juA8EHTmWkhWOrjQQuwLPFyTC5xEhebzQQEHvBvri6ALK5g4s8DPb-K9BTVc6';
const DEFAULT_ARMS_IMG = DEFAULT_SHOULDERS_IMG;
const DEFAULT_CORE_IMG = DEFAULT_SHOULDERS_IMG;

export const EXERCISES: Exercise[] = [
  // ================= CHEST =================
  {
    id: 'bench-press',
    name: 'Barbell Bench Press',
    bodyPart: 'Chest',
    category: 'Chest • Primary',
    level: 'INTERMEDIATE',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'The barbell bench press is a foundational compound movement primarily targeting the pectoralis major. It involves horizontal adduction of the shoulder joint and extension of the elbow joint.',
    imageUri: getUniqueImage('bench-press', DEFAULT_CHEST_IMG),
    videoUri: getUniqueVideo('bench-press'),
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps Brachii'],
    tips: [
      { title: 'Retract Scapula', description: 'Pinch your shoulder blades together and down into the bench to create a stable pressing platform.' },
      { title: 'Bar Path', description: 'The bar should travel in a slight arc, descending to the lower chest/sternum and pressing up over the shoulders.' },
      { title: 'Leg Drive', description: 'Plant feet firmly. Push through your heels to drive tension up your body during the concentric phase.' }
    ]
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    bodyPart: 'Chest',
    category: 'Chest • Upper',
    level: 'INTERMEDIATE',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'An upper-chest focused compound movement using dumbbells for greater range of motion and independent arm stabilization.',
    imageUri: getUniqueImage('incline-dumbbell-press', DEFAULT_CHEST_IMG),
    videoUri: getUniqueVideo('incline-dumbbell-press'),
    primaryMuscle: 'Clavicular Pectoralis',
    secondaryMuscles: ['Anterior Deltoid', 'Triceps Brachii'],
    tips: [
      { title: 'Bench Angle', description: 'Set the bench to roughly 30-45 degrees to target the upper chest without shifting too much focus to the shoulders.' },
      { title: 'Full Extension', description: 'Press the weights up until arms are fully extended but don\'t clank the dumbbells together.' }
    ]
  },
  {
    id: 'push-up',
    name: 'Push-Up',
    bodyPart: 'Chest',
    category: 'Chest • Bodyweight',
    level: 'BEGINNER',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Basic Strength',
    description: 'The classic bodyweight pushing movement. Excellent for chest development, core stability, and overall pushing strength.',
    imageUri: getUniqueImage('push-up', DEFAULT_CHEST_IMG),
    videoUri: getUniqueVideo('push-up'),
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Triceps Brachii', 'Core'],
    tips: [
      { title: 'Core Engagement', description: 'Keep your body in a straight line from head to heels. Don\'t let your hips sag.' },
      { title: 'Elbow Flare', description: 'Keep your elbows tucked at roughly a 45-degree angle from your body, rather than flared straight out.' }
    ]
  },
  {
    id: 'cable-crossover',
    name: 'Cable Crossover',
    bodyPart: 'Chest',
    category: 'Chest • Isolation',
    level: 'INTERMEDIATE',
    mechanic: 'Isolation',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'A continuous tension isolation movement that targets the inner and lower pectorals depending on the pulley height.',
    imageUri: getUniqueImage('cable-crossover', DEFAULT_CHEST_IMG),
    videoUri: getUniqueVideo('cable-crossover'),
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoid'],
    tips: [
      { title: 'Slight Bend', description: 'Maintain a slight bend in your elbows throughout the movement.' },
      { title: 'Squeeze', description: 'Focus on bringing your hands together and squeezing the chest muscles forcefully at the peak contraction.' }
    ]
  },
  {
    id: 'dips',
    name: 'Chest Dips',
    bodyPart: 'Chest',
    category: 'Chest • Bodyweight',
    level: 'ADVANCED',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'A challenging bodyweight exercise that deeply targets the lower chest and triceps. Requires significant shoulder mobility.',
    imageUri: getUniqueImage('dips', DEFAULT_CHEST_IMG),
    videoUri: getUniqueVideo('dips'),
    primaryMuscle: 'Lower Pectoralis',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoid'],
    tips: [
      { title: 'Lean Forward', description: 'Lean your torso forward slightly to emphasize the chest rather than the triceps.' },
      { title: 'Elbow Flare', description: 'Allow elbows to flare out slightly for better chest activation, but keep them comfortable for your joints.' }
    ]
  },
  
  // ================= BACK =================
  {
    id: 'pull-up',
    name: 'Wide-Grip Pull-Up',
    bodyPart: 'Back',
    category: 'Back • Lats',
    level: 'ADVANCED',
    mechanic: 'Compound',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'A classic bodyweight movement excellent for building back width. Focuses heavily on the latissimus dorsi.',
    imageUri: getUniqueImage('pull-up', DEFAULT_BACK_IMG),
    videoUri: getUniqueVideo('pull-up'),
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps', 'Rhomboids'],
    tips: [
      { title: 'Full Range', description: 'Start from a dead hang and pull until your chin clears the bar.' },
      { title: 'Chest to Bar', description: 'Focus on pulling your chest up to the bar rather than just pulling with your arms.' }
    ]
  },
  {
    id: 'barbell-row',
    name: 'Bent-Over Barbell Row',
    bodyPart: 'Back',
    category: 'Back • Thickness',
    level: 'INTERMEDIATE',
    mechanic: 'Compound',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'A heavy compound movement that adds thickness to the entire back, targeting the lats, rhomboids, and traps.',
    imageUri: getUniqueImage('barbell-row', DEFAULT_BACK_IMG),
    videoUri: getUniqueVideo('barbell-row'),
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Rhomboids', 'Lower Back'],
    tips: [
      { title: 'Spine Neutral', description: 'Keep your back flat and nearly parallel to the floor. Do not round your lower back.' },
      { title: 'Elbow Drive', description: 'Pull the bar to your lower ribcage, driving your elbows straight up toward the ceiling.' }
    ]
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    bodyPart: 'Back',
    category: 'Back • Width',
    level: 'BEGINNER',
    mechanic: 'Compound',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'A machine-based vertical pull that is great for isolating the lats and building pulling strength.',
    imageUri: getUniqueImage('lat-pulldown', DEFAULT_BACK_IMG),
    videoUri: getUniqueVideo('lat-pulldown'),
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps', 'Rear Deltoids'],
    tips: [
      { title: 'Control the Negative', description: 'Don\'t let the weight pull your arms up quickly. Control the stretch on the way up.' }
    ]
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    bodyPart: 'Back',
    category: 'Back • Thickness',
    level: 'BEGINNER',
    mechanic: 'Compound',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'A horizontal pulling movement excellent for mid-back thickness and posture improvement.',
    imageUri: getUniqueImage('seated-cable-row', DEFAULT_BACK_IMG),
    videoUri: getUniqueVideo('seated-cable-row'),
    primaryMuscle: 'Rhomboids',
    secondaryMuscles: ['Latissimus Dorsi', 'Biceps'],
    tips: [
      { title: 'Chest Up', description: 'Keep your chest proud and avoid excessively rounding your shoulders forward.' },
      { title: 'Squeeze', description: 'Pinch your shoulder blades together at the end of the pull.' }
    ]
  },
  {
    id: 'face-pulls',
    name: 'Cable Face Pulls',
    bodyPart: 'Back',
    category: 'Back • Rear Delts',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Pull',
    utility: 'Posture',
    description: 'Crucial for shoulder health and posture. Targets the rear deltoids and upper back musculature.',
    imageUri: getUniqueImage('face-pulls', DEFAULT_BACK_IMG),
    videoUri: getUniqueVideo('face-pulls'),
    primaryMuscle: 'Rear Deltoid',
    secondaryMuscles: ['Rhomboids', 'Trapezius'],
    tips: [
      { title: 'External Rotation', description: 'Pull the rope towards your face while simultaneously rotating your knuckles backwards.' },
      { title: 'High Pull', description: 'Aim for the bridge of your nose or your forehead.' }
    ]
  },

  // ================= LEGS =================
  {
    id: 'squat',
    name: 'Barbell Back Squat',
    bodyPart: 'Legs',
    category: 'Legs • Quads/Glutes',
    level: 'INTERMEDIATE',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Basic Strength',
    description: 'The king of all leg exercises. Develops lower body strength, core stability, and overall power.',
    imageUri: getUniqueImage('squat', DEFAULT_LEGS_IMG),
    videoUri: getUniqueVideo('squat'),
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Core'],
    tips: [
      { title: 'Depth', description: 'Aim to squat down until your thighs are at least parallel to the floor.' },
      { title: 'Knee Tracking', description: 'Ensure your knees track over your toes and don\'t cave inward.' }
    ]
  },
  {
    id: 'deadlift',
    name: 'Conventional Deadlift',
    bodyPart: 'Legs',
    category: 'Legs • Posterior Chain',
    level: 'ADVANCED',
    mechanic: 'Compound',
    force: 'Pull',
    utility: 'Basic Strength',
    description: 'A full-body movement that primarily builds the posterior chain, including hamstrings, glutes, and lower back.',
    imageUri: getUniqueImage('deadlift', DEFAULT_LEGS_IMG),
    videoUri: getUniqueVideo('deadlift'),
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Glutes', 'Lower Back'],
    tips: [
      { title: 'Neutral Spine', description: 'Keep your back flat and brace your core tightly before lifting.' },
      { title: 'Bar Close', description: 'Drag the bar up your shins and thighs. Keep it as close to your center of gravity as possible.' }
    ]
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    bodyPart: 'Legs',
    category: 'Legs • Machine',
    level: 'BEGINNER',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'A machine-based leg exercise that removes balance and spinal loading, making it great for isolating the quads safely.',
    imageUri: getUniqueImage('leg-press', DEFAULT_LEGS_IMG),
    videoUri: getUniqueVideo('leg-press'),
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Calves'],
    tips: [
      { title: 'Don\'t Lock Out', description: 'Avoid fully locking out your knees at the top of the movement to prevent joint injury.' }
    ]
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift (RDL)',
    bodyPart: 'Legs',
    category: 'Legs • Hamstrings',
    level: 'INTERMEDIATE',
    mechanic: 'Compound',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'A variation of the deadlift that focuses entirely on the hamstrings and glutes through a deep stretch.',
    imageUri: getUniqueImage('romanian-deadlift', DEFAULT_LEGS_IMG),
    videoUri: getUniqueVideo('romanian-deadlift'),
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Gluteus Maximus', 'Erector Spinae'],
    tips: [
      { title: 'Hinge at Hips', description: 'Push your hips back as far as possible rather than bending your knees.' },
      { title: 'Stretch', description: 'Lower the bar until you feel a deep stretch in your hamstrings, then squeeze glutes to stand up.' }
    ]
  },
  {
    id: 'calf-raises',
    name: 'Standing Calf Raises',
    bodyPart: 'Legs',
    category: 'Legs • Calves',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'An isolation exercise for the gastrocnemius muscle of the calves.',
    imageUri: getUniqueImage('calf-raises', DEFAULT_LEGS_IMG),
    videoUri: getUniqueVideo('calf-raises'),
    primaryMuscle: 'Gastrocnemius',
    secondaryMuscles: ['Soleus'],
    tips: [
      { title: 'Full Stretch', description: 'Drop your heels below the platform level for a deep stretch at the bottom.' },
      { title: 'Pause at Top', description: 'Hold the top contracted position for a second before lowering.' }
    ]
  },

  // ================= SHOULDERS =================
  {
    id: 'overhead-press',
    name: 'Overhead Press',
    bodyPart: 'Shoulders',
    category: 'Shoulders • Anterior',
    level: 'INTERMEDIATE',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Basic Strength',
    description: 'A standing barbell press that builds massive shoulder strength and core stability.',
    imageUri: getUniqueImage('overhead-press', DEFAULT_SHOULDERS_IMG),
    videoUri: getUniqueVideo('overhead-press'),
    primaryMuscle: 'Anterior Deltoid',
    secondaryMuscles: ['Triceps', 'Core'],
    tips: [
      { title: 'Brace Core', description: 'Squeeze your glutes and brace your abs to prevent leaning too far backward.' },
      { title: 'Bar Path', description: 'Press the bar straight up and slightly back so it finishes directly over your ears.' }
    ]
  },
  {
    id: 'lateral-raise',
    name: 'Dumbbell Lateral Raise',
    bodyPart: 'Shoulders',
    category: 'Shoulders • Lateral',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'The best exercise for targeting the lateral head of the deltoids to create shoulder width.',
    imageUri: getUniqueImage('lateral-raise', DEFAULT_SHOULDERS_IMG),
    videoUri: getUniqueVideo('lateral-raise'),
    primaryMuscle: 'Lateral Deltoid',
    secondaryMuscles: ['Anterior Deltoid'],
    tips: [
      { title: 'Slight Bend', description: 'Keep a slight bend in your elbows and lift the weight with your shoulders, not your hands.' }
    ]
  },
  {
    id: 'front-raise',
    name: 'Dumbbell Front Raise',
    bodyPart: 'Shoulders',
    category: 'Shoulders • Anterior',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'Isolates the front portion of the shoulder. Excellent for rounding out shoulder development.',
    imageUri: getUniqueImage('front-raise', DEFAULT_SHOULDERS_IMG),
    videoUri: getUniqueVideo('front-raise'),
    primaryMuscle: 'Anterior Deltoid',
    secondaryMuscles: ['Upper Pectoralis'],
    tips: [
      { title: 'Control', description: 'Do not swing your torso. Lift the weight smoothly to shoulder height.' }
    ]
  },
  {
    id: 'arnold-press',
    name: 'Arnold Press',
    bodyPart: 'Shoulders',
    category: 'Shoulders • Anterior/Lateral',
    level: 'INTERMEDIATE',
    mechanic: 'Compound',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'A variation of the dumbbell press created by Arnold Schwarzenegger that increases the range of motion.',
    imageUri: getUniqueImage('arnold-press', DEFAULT_SHOULDERS_IMG),
    videoUri: getUniqueVideo('arnold-press'),
    primaryMuscle: 'Anterior Deltoid',
    secondaryMuscles: ['Lateral Deltoid', 'Triceps'],
    tips: [
      { title: 'Rotation', description: 'Start with palms facing you, and rotate them outward as you press up.' }
    ]
  },

  // ================= ARMS =================
  {
    id: 'curl',
    name: 'Dumbbell Curl',
    bodyPart: 'Arms',
    category: 'Arms • Biceps',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'An isolation exercise that builds size and strength in the biceps.',
    imageUri: getUniqueImage('curl', DEFAULT_ARMS_IMG),
    videoUri: getUniqueVideo('curl'),
    primaryMuscle: 'Biceps Brachii',
    secondaryMuscles: ['Brachialis', 'Forearms'],
    tips: [
      { title: 'No Swinging', description: 'Keep your elbows pinned to your sides and do not use momentum from your back to lift the weight.' }
    ]
  },
  {
    id: 'triceps-pushdown',
    name: 'Triceps Rope Pushdown',
    bodyPart: 'Arms',
    category: 'Arms • Triceps',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Push',
    utility: 'Hypertrophy',
    description: 'A cable machine isolation movement focusing on the lateral head of the triceps.',
    imageUri: getUniqueImage('triceps-pushdown', DEFAULT_ARMS_IMG),
    videoUri: getUniqueVideo('triceps-pushdown'),
    primaryMuscle: 'Triceps Brachii',
    secondaryMuscles: [],
    tips: [
      { title: 'Lock Elbows', description: 'Keep your elbows stationary at your sides. Only your forearms should move.' },
      { title: 'Spread the Rope', description: 'At the bottom of the movement, pull the ends of the rope apart for peak contraction.' }
    ]
  },
  {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    bodyPart: 'Arms',
    category: 'Arms • Brachialis',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'A variation of the dumbbell curl with a neutral grip that targets the brachialis and brachioradialis to build arm thickness.',
    imageUri: getUniqueImage('hammer-curl', DEFAULT_ARMS_IMG),
    videoUri: getUniqueVideo('hammer-curl'),
    primaryMuscle: 'Brachialis',
    secondaryMuscles: ['Biceps Brachii', 'Brachioradialis'],
    tips: [
      { title: 'Neutral Grip', description: 'Hold the dumbbells like you are holding a hammer.' }
    ]
  },

  // ================= CORE =================
  {
    id: 'plank',
    name: 'Plank',
    bodyPart: 'Core',
    category: 'Core • Isometric',
    level: 'BEGINNER',
    mechanic: 'Isolation',
    force: 'Static',
    utility: 'Endurance',
    description: 'A static hold exercise that builds deep core strength and endurance.',
    imageUri: getUniqueImage('plank', DEFAULT_CORE_IMG),
    videoUri: getUniqueVideo('plank'),
    primaryMuscle: 'Transverse Abdominis',
    secondaryMuscles: ['Rectus Abdominis', 'Obliques', 'Shoulders'],
    tips: [
      { title: 'Straight Line', description: 'Keep your hips in line with your shoulders and heels. Don\'t let them sag or pike up.' }
    ]
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    bodyPart: 'Core',
    category: 'Core • Lower Abs',
    level: 'ADVANCED',
    mechanic: 'Compound',
    force: 'Pull',
    utility: 'Hypertrophy',
    description: 'A challenging core movement hanging from a pull-up bar, heavily targeting the lower rectus abdominis and hip flexors.',
    imageUri: getUniqueImage('hanging-leg-raise', DEFAULT_CORE_IMG),
    videoUri: getUniqueVideo('hanging-leg-raise'),
    primaryMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Hip Flexors', 'Obliques'],
    tips: [
      { title: 'Don\'t Swing', description: 'Control the descent of your legs to prevent swinging. Use your core, not momentum.' }
    ]
  },
  {
    id: 'russian-twists',
    name: 'Russian Twists',
    bodyPart: 'Core',
    category: 'Core • Obliques',
    level: 'INTERMEDIATE',
    mechanic: 'Isolation',
    force: 'Pull',
    utility: 'Endurance',
    description: 'A rotational exercise that builds strength in the obliques and improves core stability.',
    imageUri: getUniqueImage('russian-twists', DEFAULT_CORE_IMG),
    videoUri: getUniqueVideo('russian-twists'),
    primaryMuscle: 'Obliques',
    secondaryMuscles: ['Rectus Abdominis'],
    tips: [
      { title: 'Full Rotation', description: 'Look where your hands go, ensuring your entire torso rotates, not just your arms.' }
    ]
  }
];
