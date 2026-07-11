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

export const EXERCISES: Exercise[] = [
  // CHEST
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6tXX7XIIxbL5_Y_pktrT-iWf2EqPa5yC2m1q86lqv1PcFUKDogJPevrCGLrLqnydnXu3u5Sazo6vAm1anECUkddY5OHpg_Ep8sUvhe-fC3O5upPYb913WK9YD3FsxVundOAEzZzEB4ewdngjY6zC5KJo2KRPQpU-lM5n8mSU7qsFPqmjYxWrIEJzC-RYgZGrZp6KAsFpuzPsFihJHet2lK2JwZOP6mKrehbAr1yEa9SuaCMei5YcWVnDpL4zbeIMKb8LIvRG9ZLsx',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6tXX7XIIxbL5_Y_pktrT-iWf2EqPa5yC2m1q86lqv1PcFUKDogJPevrCGLrLqnydnXu3u5Sazo6vAm1anECUkddY5OHpg_Ep8sUvhe-fC3O5upPYb913WK9YD3FsxVundOAEzZzEB4ewdngjY6zC5KJo2KRPQpU-lM5n8mSU7qsFPqmjYxWrIEJzC-RYgZGrZp6KAsFpuzPsFihJHet2lK2JwZOP6mKrehbAr1yEa9SuaCMei5YcWVnDpL4zbeIMKb8LIvRG9ZLsx',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6tXX7XIIxbL5_Y_pktrT-iWf2EqPa5yC2m1q86lqv1PcFUKDogJPevrCGLrLqnydnXu3u5Sazo6vAm1anECUkddY5OHpg_Ep8sUvhe-fC3O5upPYb913WK9YD3FsxVundOAEzZzEB4ewdngjY6zC5KJo2KRPQpU-lM5n8mSU7qsFPqmjYxWrIEJzC-RYgZGrZp6KAsFpuzPsFihJHet2lK2JwZOP6mKrehbAr1yEa9SuaCMei5YcWVnDpL4zbeIMKb8LIvRG9ZLsx',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Triceps Brachii', 'Core'],
    tips: [
      { title: 'Core Engagement', description: 'Keep your body in a straight line from head to heels. Don\'t let your hips sag.' },
      { title: 'Elbow Flare', description: 'Keep your elbows tucked at roughly a 45-degree angle from your body, rather than flared straight out.' }
    ]
  },
  
  // BACK
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdpNlsnw6Yxdh0MuNmqMtZmMEbdLYA8kEqAVU6T9kjGqHX1Y_jiDISv-7fktL4UTkaMcpgcxWYdGs0efsJyjqlEPciXUIdcyfWgunrXuTHoG6OW3c1qREyQKYjnUVDsYsGwL7yGwpTwfJ0sDyBrgn6a3DvEyGYs24cj8_aVXgV-qR1wNfBR2Z_PaEw7Wym1ewepa4HZd38nG6whStm8vz4ziRz_bHmIfq6bXV0afqb_bFakENNy5Mxm1F5bYoHbQNf4a3sRhbkj7X4',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdpNlsnw6Yxdh0MuNmqMtZmMEbdLYA8kEqAVU6T9kjGqHX1Y_jiDISv-7fktL4UTkaMcpgcxWYdGs0efsJyjqlEPciXUIdcyfWgunrXuTHoG6OW3c1qREyQKYjnUVDsYsGwL7yGwpTwfJ0sDyBrgn6a3DvEyGYs24cj8_aVXgV-qR1wNfBR2Z_PaEw7Wym1ewepa4HZd38nG6whStm8vz4ziRz_bHmIfq6bXV0afqb_bFakENNy5Mxm1F5bYoHbQNf4a3sRhbkj7X4',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdpNlsnw6Yxdh0MuNmqMtZmMEbdLYA8kEqAVU6T9kjGqHX1Y_jiDISv-7fktL4UTkaMcpgcxWYdGs0efsJyjqlEPciXUIdcyfWgunrXuTHoG6OW3c1qREyQKYjnUVDsYsGwL7yGwpTwfJ0sDyBrgn6a3DvEyGYs24cj8_aVXgV-qR1wNfBR2Z_PaEw7Wym1ewepa4HZd38nG6whStm8vz4ziRz_bHmIfq6bXV0afqb_bFakENNy5Mxm1F5bYoHbQNf4a3sRhbkj7X4',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps', 'Rear Deltoids'],
    tips: [
      { title: 'Control the Negative', description: 'Don\'t let the weight pull your arms up quickly. Control the stretch on the way up.' }
    ]
  },

  // LEGS
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADv6_yQjMQtFNtTUtDSmzEOds1hiU_B1C-iCafrXbPT-WqFW_piNcRYxESNfHUOnNomspplsq08gOvoumQvKp52fp7Qln8y23L6uLTEDZbenQqZ56pfjMTpRKhkHOS2CQjTTWKCITYO08M5Ho_YI665hFB7p7EGjzV3ucqnrjCAIzsUXffu8E_N4sHswkaiaLQ9naZjqyyGmC_SwuPI98OxZdxl9WEtcsHVCUI1qe7mbWBHrydgeuxvYkVS3h4LLS39a3zRS8OzvH3',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADv6_yQjMQtFNtTUtDSmzEOds1hiU_B1C-iCafrXbPT-WqFW_piNcRYxESNfHUOnNomspplsq08gOvoumQvKp52fp7Qln8y23L6uLTEDZbenQqZ56pfjMTpRKhkHOS2CQjTTWKCITYO08M5Ho_YI665hFB7p7EGjzV3ucqnrjCAIzsUXffu8E_N4sHswkaiaLQ9naZjqyyGmC_SwuPI98OxZdxl9WEtcsHVCUI1qe7mbWBHrydgeuxvYkVS3h4LLS39a3zRS8OzvH3',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADv6_yQjMQtFNtTUtDSmzEOds1hiU_B1C-iCafrXbPT-WqFW_piNcRYxESNfHUOnNomspplsq08gOvoumQvKp52fp7Qln8y23L6uLTEDZbenQqZ56pfjMTpRKhkHOS2CQjTTWKCITYO08M5Ho_YI665hFB7p7EGjzV3ucqnrjCAIzsUXffu8E_N4sHswkaiaLQ9naZjqyyGmC_SwuPI98OxZdxl9WEtcsHVCUI1qe7mbWBHrydgeuxvYkVS3h4LLS39a3zRS8OzvH3',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Glutes', 'Calves'],
    tips: [
      { title: 'Don\'t Lock Out', description: 'Avoid fully locking out your knees at the top of the movement to prevent joint injury.' }
    ]
  },

  // SHOULDERS
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUbL0-p7rKm6ACF3jbBnVf-5w16rJftU5pVX7E3jYbomt7vvohuSt4WmtnPFECn67ebROWfDFLEDFfaOKkwHP0mSudOK8JXmAUraeR-xsOX3eXQ3znMYU15m3eVIUPVp6tMN3SSbnmyL76ZNGb-A53Hf6jwlcJqAey8ijSW2lK1lVyq2UyCkTv-Lt5A4JyI_LLbqfQuJdk4fQB1juA8EHTmWkhWOrjQQuwLPFyTC5xEhebzQQEHvBvri6ALK5g4s8DPb-K9BTVc6',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUbL0-p7rKm6ACF3jbBnVf-5w16rJftU5pVX7E3jYbomt7vvohuSt4WmtnPFECn67ebROWfDFLEDFfaOKkwHP0mSudOK8JXmAUraeR-xsOX3eXQ3znMYU15m3eVIUPVp6tMN3SSbnmyL76ZNGb-A53Hf6jwlcJqAey8ijSW2lK1lVyq2UyCkTv-Lt5A4JyI_LLbqfQuJdk4fQB1juA8EHTmWkhWOrjQQuwLPFyTC5xEhebzQQEHvBvri6ALK5g4s8DPb-K9BTVc6',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
    primaryMuscle: 'Lateral Deltoid',
    secondaryMuscles: ['Anterior Deltoid'],
    tips: [
      { title: 'Slight Bend', description: 'Keep a slight bend in your elbows and lift the weight with your shoulders, not your hands.' }
    ]
  },

  // ARMS
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUbL0-p7rKm6ACF3jbBnVf-5w16rJftU5pVX7E3jYbomt7vvohuSt4WmtnPFECn67ebROWfDFLEDFfaOKkwHP0mSudOK8JXmAUraeR-xsOX3eXQ3znMYU15m3eVIUPVp6tMN3SSbnmyL76ZNGb-A53Hf6jwlcJqAey8ijSW2lK1lVyq2UyCkTv-Lt5A4JyI_LLbqfQuJdk4fQB1juA8EHTmWkhWOrjQQuwLPFyTC5xEhebzQQEHvBvri6ALK5g4s8DPb-K9BTVc6',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUbL0-p7rKm6ACF3jbBnVf-5w16rJftU5pVX7E3jYbomt7vvohuSt4WmtnPFECn67ebROWfDFLEDFfaOKkwHP0mSudOK8JXmAUraeR-xsOX3eXQ3znMYU15m3eVIUPVp6tMN3SSbnmyL76ZNGb-A53Hf6jwlcJqAey8ijSW2lK1lVyq2UyCkTv-Lt5A4JyI_LLbqfQuJdk4fQB1juA8EHTmWkhWOrjQQuwLPFyTC5xEhebzQQEHvBvri6ALK5g4s8DPb-K9BTVc6',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
    primaryMuscle: 'Triceps Brachii',
    secondaryMuscles: [],
    tips: [
      { title: 'Lock Elbows', description: 'Keep your elbows stationary at your sides. Only your forearms should move.' },
      { title: 'Spread the Rope', description: 'At the bottom of the movement, pull the ends of the rope apart for peak contraction.' }
    ]
  },

  // CORE
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUbL0-p7rKm6ACF3jbBnVf-5w16rJftU5pVX7E3jYbomt7vvohuSt4WmtnPFECn67ebROWfDFLEDFfaOKkwHP0mSudOK8JXmAUraeR-xsOX3eXQ3znMYU15m3eVIUPVp6tMN3SSbnmyL76ZNGb-A53Hf6jwlcJqAey8ijSW2lK1lVyq2UyCkTv-Lt5A4JyI_LLbqfQuJdk4fQB1juA8EHTmWkhWOrjQQuwLPFyTC5xEhebzQQEHvBvri6ALK5g4s8DPb-K9BTVc6',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
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
    imageUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUbL0-p7rKm6ACF3jbBnVf-5w16rJftU5pVX7E3jYbomt7vvohuSt4WmtnPFECn67ebROWfDFLEDFfaOKkwHP0mSudOK8JXmAUraeR-xsOX3eXQ3znMYU15m3eVIUPVp6tMN3SSbnmyL76ZNGb-A53Hf6jwlcJqAey8ijSW2lK1lVyq2UyCkTv-Lt5A4JyI_LLbqfQuJdk4fQB1juA8EHTmWkhWOrjQQuwLPFyTC5xEhebzQQEHvBvri6ALK5g4s8DPb-K9BTVc6',
    videoUri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp5uT96Tl3SplOIqpq6lJMZ437_8OTrFIGm_5m0FAukbumBLAShG_gOPEd5hv4YZaqj__TRKUtxHZ74jQLiJvGn2GLYlscZ5SzUJ2pXF08jtuxAbKIIJ1sH1y92LdFpg0tyyZpXrJU3uixmuLvuHGyCZq7aaEMb_1sphmfIegjnnyG3xAppCogqT117KpkoRfvYj-JQAdsfO9qKW3ztogiKWF_uHS4VuDBCowhVI3eEHd8aCeq7D_jDN7JtukNg8PYaP09DRudQb55',
    primaryMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Hip Flexors', 'Obliques'],
    tips: [
      { title: 'Don\'t Swing', description: 'Control the descent of your legs to prevent swinging. Use your core, not momentum.' }
    ]
  }
];
