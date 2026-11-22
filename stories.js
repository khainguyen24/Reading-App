// Reading passages from Ella's 5th grade reading homework.
// Each story has the passage, the boxes on the front of the worksheet ("think" questions),
// and the Literal / Inferential / Applied questions from the back page.
// kind: "text" (default) = a written answer, "list3" = three short answers, "draw" = a drawing box.
window.STORIES = [
  {
    id: "learning-to-fly",
    title: "Learning to Fly",
    text: "Katie was such a sweet little caterpillar. She spent her days crawling across the bright green leaves in the garden, munching and crunching as she went. One day Katie decided it was time for a change. So she wove a cocoon around herself, and she went to sleep. When she woke up, she had become a beautiful butterfly. But there was one big problem. Katie didn't know how to fly! She had never had wings before, and she didn't know how to use them! But Katie had to learn. So she took a step, and she started to flap her wings. At first, she started falling, her new wings not yet ready to fly. Poor Katie didn't know what to do! Down, down, down she went, unable to stop herself. Finally, her butterfly instincts kicked in, and Katie's wings started to flutter. She could feel herself slowing as her wings continued to flap. Suddenly she was no longer falling. She was flying! Higher and higher she flew, up into the beautiful blue sky. Katie was absolutely over the moon with her newfound flying skills. She flew all over the countryside, exploring new cities and towns and living her life to the fullest!",
    think: [
      { tag: "Inferring", q: "How do you think Katie felt when she was falling? Explain your answer using evidence." },
      { tag: "Figurative language", q: "What does it mean to be \"over the moon\"? How is this used in the text?" },
      { tag: "Connecting", q: "Write down three times when you were scared to try something new.", kind: "list3" }
    ],
    literal: [
      "What did Katie spend her days doing?",
      "What happened when Katie woke up?",
      "What happened when Katie first tried to fly?",
      "Where did Katie go once she had learned how to fly?"
    ],
    inferential: [
      "How do you think Katie felt when she first started to fly? How do you know?",
      "What was the problem in the story?",
      "Why does the author use the word \"instincts\" to describe Katie learning to fly?"
    ],
    applied: [
      "Did you enjoy reading this story? Why/Why not?",
      "Do you think it is important to do things that scare you? Explain your answer.",
      "How did Katie change from the beginning to the end of the story?"
    ]
  },
  {
    id: "cake-disaster",
    title: "The Cake Disaster",
    text: "It was George's 8th birthday, and he was so excited about his big party. They had spent a whole week preparing the decorations and creating invitations. His mother had spent all morning baking an enormous chocolate cake, and it looked absolutely delicious. All his friends started to arrive, and everyone was playing happily outside in the backyard. The clown was standing in front of the cake, making balloon animals for all the children when disaster struck. Suddenly one of the balloons burst with a loud BANG! The noise startled George's dog, Lenny, who jumped into the air and bolted straight for the cake. It was like a hippopotamus jumping into a muddy river! Brown chocolate cake flew all over the place, completely covering all the guests. Everyone went silent. No one knew what to say or do. Suddenly, a giggle sounded from the group, then another and another. Before long, the entire party was completely in stitches, laughing and laughing! They spent the rest of the afternoon licking the chocolate mixture off their clothing and laughing about the time the dog jumped on the cake!",
    think: [
      { tag: "Predicting", q: "Do you think George will have a clown at his next birthday party? Explain your answer using evidence." },
      { tag: "Figurative language", q: "What does it mean to be \"in stitches\"? How is this used in the text?" },
      { tag: "Questioning", q: "Write down three open-ended questions that you could ask George.", kind: "list3" }
    ],
    literal: [
      "How old is George turning?",
      "What was the clown doing at the party?",
      "What startled the dog?",
      "What did the group spend their afternoon doing?"
    ],
    inferential: [
      "How did the author create a visual in your mind of the dog jumping on the cake?",
      "Why do you think the group was silent when the dog jumped on the cake?",
      "Do you think the birthday party was a disaster? Explain your answer."
    ],
    applied: [
      "How would you react if you were a guest covered in chocolate?",
      "What would be another good title for this text?",
      "Is it important to be able to laugh when things don't go to plan? Explain your answer."
    ]
  },
  {
    id: "dancing-dilemma",
    title: "Dancing Dilemma",
    text: "In the depths of the forest, there lived a monkey. His name was Max, and he loved spending time with his friends, but there was one big problem. Max's friends all loved to dance. Unfortunately, Max didn't know how to dance, so he always felt left out! Henry the hippopotamus danced the tango. Ryan the rhinoceros danced the rumba. Freda the falcon danced the foxtrot. Chelsie the cheetah danced the cha-cha. Max had always wanted to dance, but he was scared. He didn't want to embarrass himself, and he was worried that the other animals would laugh at him. One night Max decided it was time he learned to dance. He got up on the dance floor, and he started to move. First, he felt his legs start to shake. Then his arms started to swing. Finally, his head began to nod. The other animals didn't laugh at him, and they didn't make fun of him. In fact, the other animals all joined in to dance with Max. Max was so happy he couldn't believe he hadn't tried to dance earlier! The animals all danced on through the night.",
    think: [
      { tag: "Main idea", q: "What do you think the message of this story is? Explain your answer using evidence." },
      { tag: "Connecting", q: "Describe a time when you felt scared to try something new. How did you overcome this fear?" },
      { tag: "Visualizing", q: "Draw a picture of the animals dancing using the description in the text.", kind: "draw" }
    ],
    literal: [
      "Where did Max live?",
      "What other animals were in the story?",
      "What dances did the animals in the story do?",
      "What did the other animals do when Max started to dance?"
    ],
    inferential: [
      "Why was Max so embarrassed to dance in front of the other animals?",
      "Why do you think that Max finally decided to try to dance?",
      "How do you think the other animals felt when Max started to dance?"
    ],
    applied: [
      "What is the message of the story?",
      "Why is it important to support others when they try new things?",
      "Were the other animals good friends to Max? Explain your answer."
    ]
  },
  {
    id: "the-escapee",
    title: "The Escapee",
    text: "Clara had been waiting for show-and-tell at school all week. She brought in her terrarium with her pet tarantula Terry. The class watched in awe as she held Terry up for everyone, letting him crawl all over her arms and face, and explaining to them all the cool things that Terry could do. Some of the children looked a little frightened to have such a large spider in the classroom. The teacher said Clara could keep Terry in his terrarium for the day. When the students came back from lunch, they discovered Terry was missing! He wasn't in the terrarium anymore! Panic took over as some of the students started screaming. A few kids jumped up on the table, and their teacher, Miss Perry, ran out of the room. It was absolute chaos, with kids running around shrieking and crying. \"There's a spider loose in the classroom!\" yelled one student. \"We're all going to die!\" screeched another. In the middle of all the commotion, Clara looked up and saw Terry on the ceiling. She quietly jumped onto her chair and scooped him up in her hands. Clara placed him gently in the terrarium without anyone noticing. \"He was in there all along,\" she shouted. The students looked at each other sheepishly. They couldn't believe they'd overreacted so much!",
    think: [
      { tag: "Predicting", q: "Do you think Clara will be allowed to bring any other pets to school in the future? Explain your answer using evidence." },
      { tag: "Inferring", q: "Do you think the students like the spider? Use evidence to explain your answer." },
      { tag: "Connecting", q: "Write down three other stories or books that have spiders in them.", kind: "list3" }
    ],
    literal: [
      "What was Clara's pet tarantula called?",
      "When did the students discover that the tarantula was missing?",
      "What did Miss Perry do when she discovered the tarantula was missing?",
      "Where did Clara find the spider?"
    ],
    inferential: [
      "How does the author tell you that the class was excited to see the spider?",
      "Why were the students so scared when they discovered the spider was missing?",
      "Why did Clara sneak the tarantula back into the terrarium?"
    ],
    applied: [
      "Describe a time that a student brought a pet to school.",
      "What would be another good title for this text?",
      "Do you think bringing pets to school is a good idea? Explain your answer."
    ]
  },
  {
    id: "lesson-from-china",
    title: "A Lesson from China",
    text: "Kathy was born in China. She moved to Australia when she was just six years old. At first, she found it difficult to make friends because of the language barrier. During her first year of school, she spent a lot of time by herself, without anyone else to talk to. She had to work harder than any of the other students in the classroom when learning to read and write. Her parents packed her lunch every day, and she had interesting foods like fried rice and noodles. The other students thought her food was strange, but Kathy didn't care. They made fun of her and stared at her with confused expressions as they watched Kathy eat. One day, another student had forgotten to bring lunch, so Kathy shared her food with her. They sat together for the rest of their lunch break. Kathy explained to the girl all about China and her cultures and traditions. The two girls became best friends and ended up sharing lunch together for the rest of the year.",
    think: [
      { tag: "Main idea", q: "What do you think the message of this story is? Explain your answer using evidence." },
      { tag: "Predicting", q: "How do you think the other students will act now that another student is friends with Kathy? Explain your answer using evidence." },
      { tag: "Summarizing", q: "Summarize the text using three dot points.", kind: "list3" }
    ],
    literal: [
      "How old was Kathy when she moved to Australia?",
      "Why was it difficult for Kathy to make friends?",
      "What sort of food did Kathy have for lunch?",
      "How did Kathy make her first friend?"
    ],
    inferential: [
      "How do you think Kathy felt when she first moved to Australia?",
      "Do you think the other students were nice to Kathy? Explain your answer.",
      "Do you think it was a good thing that the other student forgot her lunch? Explain your answer."
    ],
    applied: [
      "What is the message in the story?",
      "Do you think it is important to be accepting of different cultures? Explain your answer.",
      "How can you make other people feel welcome?"
    ]
  },
  {
    id: "never-trust-a-tiger",
    title: "Never Trust a Tiger",
    text: "Timmy the tiger was a terrible liar. He hated telling the truth, and he liked to trick all of his friends. One time, Timmy pretended to be stuck in the mud. \"Help me, help me!\" he shouted. Everyone came running, only to see Timmy rolling around in the mud laughing. Another time he pretended to be drowning in the lake. \"Help me, help me!\" he shouted. Everyone came running, only to see Timmy swimming happily in the water. His friends were tired of his lies and tricks, and they were sick of always coming to his rescue, only to find out that Timmy was just fine. The next day, Timmy got his leg stuck in a trap. He yelled out in pain, \"Help me, help me!\" he shouted, expecting his friends to come running to his aide. He waited and waited, his leg getting more and more painful as time went by. No one came. He waited all night with his leg stuck in that trap. Finally, a kind elephant found him lying on the ground, his leg still caught. The elephant used his trunk to release the tiger from the trap, and then he carried Timmy back to his friends. Timmy promised never to lie to his friends again from that day forward!",
    think: [
      { tag: "Main idea", q: "What do you think the message of this story is? Explain your answer using evidence." },
      { tag: "Inferring", q: "How do you think the animals felt every time they caught Timmy lying? Use evidence to explain your answer." },
      { tag: "Questioning", q: "Write down three open-ended questions that you could ask Timmy.", kind: "list3" }
    ],
    literal: [
      "What did Timmy lie about first?",
      "What did Timmy lie about the second time?",
      "How long was Timmy stuck in the trap?",
      "Who rescued Timmy?"
    ],
    inferential: [
      "Why do you think the animals stopped trusting Timmy?",
      "Do you think Timmy had lied to his friends in the past? Explain your answer.",
      "Do you think Timmy will lie to his friends again? Explain your answer."
    ],
    applied: [
      "What is the message in the story?",
      "Do you think that it is ever acceptable to lie? Explain your answer.",
      "Would you have stopped trusting Timmy if he was your friend? Explain your answer."
    ]
  },
  {
    id: "plane-crash",
    title: "The Plane Crash",
    text: "The jumbo plane was flying through the sky with ease. Suddenly, large dark storm clouds started to form. Heavy drops of rain began to pound the plane, and fierce winds pushed the plane in every direction. Bright flashes of lightning lit up the sky. The plane couldn't handle the storm's pressure, and the propellers started to weaken. Within minutes of the storm starting, the engines failed. The only sound that could be heard was the menacing rumble of thunder booming throughout the sky. The passengers screamed as the plane started to nosedive, free falling towards the earth. Faster and faster, they fell, as the pilot desperately attempted to get the engines working again. The storm continued to rumble around them as the plane plummeted downwards. The passengers held each other tightly and assumed the brace position. They all thought this was the end. Suddenly the engines kicked back into life, roaring like a lion, as they gave the plane a new life. The pilot was able to return the plane to safety, landing at a nearby airstrip. The passengers rejoiced. They were safe!",
    think: [
      { tag: "Figurative language", q: "How does the author compare the engine with a lion's roar? What effect does this have?" },
      { tag: "Inferring", q: "How do you think the passengers felt when the engines gave out? Explain your answer using evidence." },
      { tag: "Summarizing", q: "Summarize the text using three dot points.", kind: "list3" }
    ],
    literal: [
      "What happened to the plane to cause it to break down?",
      "How long did it take for the engines to fail?",
      "What did the passengers do when the plane started to nosedive?",
      "Where did the plane land?"
    ],
    inferential: [
      "Why does the author use the word menacing to describe the storm?",
      "How do you think the passengers felt during the storm? Use examples from the text.",
      "Why do you think the author ended the text with \"the passengers rejoiced, they were safe!\"?"
    ],
    applied: [
      "Is the title suitable for this text? Explain your answer.",
      "Describe a time when you have been on a plane.",
      "Planes should never fly during bad weather. Do you agree? Explain your answer."
    ]
  },
  {
    id: "dont-pat-the-spider",
    title: "Don't Pat the Spider!",
    text: "Jimmy was a naughty little boy. He never listened to anyone. He didn't listen to his parents. He didn't listen to his teachers. And he certainly didn't listen to his friends. No one could tell Jimmy what to do. His parents told him, \"Don't ride your bike without a helmet!\" So Jimmy went for a ride without his helmet. He fell off his bike, and a huge lump formed on his head. His teachers told him, \"Don't run on the concrete!\" So Jimmy ran on the concrete. He fell over and scraped his hands and knees. One day Jimmy's naughty habit got him into a lot of trouble. He was in class when he noticed a large black spider crawling across his desk. His friends told him, \"Don't touch that spider!\" But of course, Jimmy didn't listen. He reached out and grabbed the spider. Well, the spider wasn't too happy about his little walk being interrupted. He used his fangs and bit into Jimmy's hand, injecting him with poison. Jimmy was quickly rushed to the hospital, where he was lucky enough to be injected with the anti-venom just in time! After that, Jimmy decided that maybe next time, he would actually do what he was told!",
    think: [
      { tag: "Predicting", q: "Do you think Jimmy will listen to other people in the future? Explain your answer using evidence." },
      { tag: "Main idea", q: "What do you think the message of this story is? Explain your answer using evidence." },
      { tag: "Questioning", q: "Write down three open-ended questions that you could ask Jimmy.", kind: "list3" }
    ],
    literal: [
      "Why was Jimmy a naughty boy?",
      "Why did Jimmy get hurt when he fell off his bike?",
      "What did Jimmy's teachers tell him not to do?",
      "Why did Jimmy end up in the hospital?"
    ],
    inferential: [
      "Why did the author use the word \"lucky\" to describe Jimmy?",
      "How do you think Jimmy felt when the spider bit him?",
      "Why do you think Jimmy decided to do what he was told?"
    ],
    applied: [
      "How does Jimmy change from the beginning to the end of the story?",
      "Do you think it is important to listen to the advice of others? Explain your answer.",
      "What lesson did Jimmy learn in the story?"
    ]
  }
];
