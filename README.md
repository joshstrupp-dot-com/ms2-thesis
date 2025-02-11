# Thesis Abstract
This thesis explores the evolution of self-help literature through the lens of data visualization, integrating insights from literary analysis and modern computational techniques. 

By examining the origins and historical shifts of the self-help genre, the study investigates how external societal events and internal narratives of self-improvement converge to shape the advice dispensed by authors. Utilizing the BART-large-lmni zero-shot model, Wikipedia entries, and a comprehensive Goodreads dataset of 60 million books, the research maps natural language trends and identifies key thematic shifts. Additionally, the work examines the credibility of authors, including the influence of celebrity voices, and questions the extent to which self-help addresses challenges imposed by external forces versus self-generated dilemmas.

Looking forward, the thesis also examines the potential transformation of self-help literature in an era dominated by AI and generative technologies. It considers how personalized, AI-generated content might revolutionize the creation of self-help materials—from bespoke titles and synopses to dynamic book covers—offering a fresh perspective on enduring literary practices. 

Ultimately, the study aims to provide a data-driven synthesis of the self-help genre, revealing insights into its enduring appeal and evolving landscape in response to both personal and societal demands.

# Outline
I. Personal Journey and Thesis Context
- Shift from externalizing problems to viewing them as internally driven—yet persistent struggle.
- Thesis overview: self-help mirrors human ailments and adapts to cultural, technological, and historical shifts.

II. Historical Foundations of Self-Help
- Samuel Smiles and Self Help as the genre’s starting point.
- Evolution from one seminal work to thousands of titles and formats (books, videos, columns).

III. The Dualistic Model: Problematic Self vs. Capable Self
- “Immortal soul and moral sinner” framing in self-help and 12-step programs.
- Ongoing trend of the “belabored self” in modern culture (constant self-improvement pressure).
- Cycles of attempt-failure-renewal in personal development quests.

IV. Internal vs. External Forces
- Tension between personal responsibility and broader systemic/social factors.
- Industrial Revolution to modern era: shift from blaming society to blaming self.
- Continual debate over personal transformation vs. structural change (economics, race, policy).

V. Contemporary Self-Help Landscape
- Enormous variety in approaches (spiritual, psychological, religious, entrepreneurial).
- More specialized sub-genres targeting niche audiences and needs.
- Intersection with mental health awareness and dinner-table conversations about therapy, mindset, etc.

VI. Data-Driven Exploration
- Overview of available datasets (Goodreads, Wikipedia, Hugging Face, etc.).
- Variables of interest (author stats, star ratings, review breakdowns, genres, publication date, etc.).
- Investigating how self-help books respond to shifts in culture and technology.

VII. Research Questions and Methodological Approach
- Identifying correlations between publication trends, user ratings, and thematic focus (internal vs. external).
- NLP-based classification to see how books frame “forces” influencing self-improvement.
- Combining quantitative patterns (sales, “want to read” stats, rating distributions) with qualitative analysis (book descriptions, author backgrounds).

VIII. Implications and Future Directions
- Potential of AI-driven personalization to change self-help—shifting from generic advice to hyper-specific guidance.
- The evolution of self-help narratives as societies adapt to new challenges.
- Concluding reflection on self-forgiveness, awareness, and the ongoing dance between internal willpower and external conditions.

# Introduction
## Origin Story

In 2020, I did it: I found enlightenment. I was cosplaying as a regular guy, but secretly, I was an unordained monk—a seer of truths, a manifester of oneness.

All because I read a book.

It was called _Untethered Soul_. Its cover featured a stallion running free on a beach. Never mind this rogue, presumably lost steed; I saw that horse and thought, “Yes. That. I want that.”

I still remember the first time I opened _Untethered Soul_. “Chapter 1: The Voice Inside Your Head.” I—and my very loud, very critical inner roommate—were sold. I hung on to every word. Even after I finished, I kept the book close by, revisiting passages in biblical fashion.

At its core, this book offers a Western take on some Eastern ideas, particularly “objective consciousness.” It goes something like this:
	•	You feel pain when you step on a Lego.
	•	You feel sorrow when your pet dies.
	•	You hear a voice in your head that says, “Nope, not good enough.”
If you can feel, hear, or perceive something, then you did not cause it—you are the subject, and something else is the object.

It clicked: I wasn’t failing at life; life was just happening. What was once all-consuming anxiety became a character on a metaphorical TV screen, experiencing anxiety instead of me.

_Untethered Soul_ is, of course, a self-help book. It markets itself as a spiritual guide or a take on Buddhist philosophy, but at its root—like all self-help—it aims to enable you to solve your problems. You have problems, and you have the power to solve them, whether through belief in God, the Universe, or sheer willpower.

Wake up depressed? Objective consciousness says, “You didn’t choose this—let it go.” Trouble in your relationship? Tell your partner five things you love about them every day. Maybe journal about it. Is your CFO at odds with your CTO? A book about radical transparency will get the C-suite back on track (and profits up!).

Brace yourself for a bombshell: I am not enlightened. I have been unable to simply accept what happens to me. With nearly every problem, I feel it’s my responsibility to solve it. Since reading _Untethered Soul_, I’ve tried two fitness trackers, counted calories, attempted daily meditation, tried out veganism, failed at veganism, doubled therapy sessions, read books like _The Power of Habit_ and _The Subtle Art of Not Giving a F***_, met with nutritionists, psychiatrists, and one man who claimed to be both, and even went on a spirit quest to the Smoky Mountains. 

By now, you might sense the kind of person I am: spiritual, not religious; emotional, not stoic; granola, not boot-strappy; determined to make me better even if it takes 1,000 false starts. 

My brand of self-help—the habits I adopt and, more importantly, the books I read—is different from others. But all of self-help publishing began with one man.

## A Brief History of Self-Help

The father of self-help is Samuel Smiles. His book—fittingly titled _Self Help_—was published in 1859 and led with a maxim borrowed from Benjamin Franklin: “Heaven helps those that help themselves.” In Smiles’ day, many had moved from farms to factories, where they found themselves diseased and exploited. The rich grew richer while social mobility for the working class was nearly impossible. It makes sense, then, that the Protestant values of hard work, thrift, and personal responsibility seemed virtuous when investment in society was failing.

Roughly 166 years later, we’ve gone from one such book to more than 60,000. Advice columns have multiplied into millions of YouTube videos and clickable articles promising that you can vitamin-supplement, ab-crunch, and astral-project your way from dependence on anything to self-actualization. Tony Robbins is a household name and mental health is dinner conversation. _How to Win Friends and Influence People_ line mantles and Brené Brown is mother. 

At its heart, self-help hinges on the premise that you can transform and improve through self-guided effort. New York Magazine’s article _The Self in Self-Help_ claims an ancient “dualistic model” is at the center of all self-help: within you, there is both a problematic self and a capable self, the latter tasked with fixing the former. Put another way, self-help often casts difficulties by “invoking an immortal soul and a moral sinner.” The same philosophy is used in 12-step programs.

## Internal vs. External Forces

As described in _Makeover Culture in American Life_, the “belabored self” reflects a modern condition where individuals feel pressure to constantly work on and improve themselves. Doing anything “constantly” breeds fatigue, which explains my cycle of self-improvement attempts, failures, and new beginnings.

Amid the millions of articles and tens of thousands of books, a small slice targets people like me. The self-help I pursue differs from anyone else’s. By the numbers, few Americans seek self-help exactly as I do, while the rest explore energy healing, entrepreneurial greatness, Jesus Christ, and much more.

But my pursuit of self-improvement isn’t dictated solely by my interests and beliefs. Despite the belabored self’s insistence that “everything is your fault,” there are external forces at play.

Recall Samuel Smiles’ and the beginning of the self-help genre. A tension arises. During the Industrial Revolution and, in the U.S., on the eve of the Civil War, the “sinful” or problematic force was society, not the self. At some point, we began blaming ourselves for forces outside our control. Books rooted in economics, race, and policy argue that systems are to blame. Yet, 40 million self-help books were sold in 2023 in the U.S. alone.

## Thesis & Looking Forward

My thesis is simple: self-help reflects what ails humanity, and the ways we handle our ailments are unique. The long-form instruction manuals on how to “better” ourselves are growing more specialized even as the self-help publishing industry produces more titles than ever.

Using datasets and models from Goodreads, Wikipedia, and Hugging Face—supplemented by scholarly research—I explore how self-help narratives evolve in response to historical, cultural, and technological changes, and how these shifts intersect with personal journeys. I aim to illustrate how evolving narratives connect to individual experiences and where readers fit in this universe of self-help, self-awareness, and self-forgiveness in the face of external forces. Finally, I consider the future. As more content becomes personalized, especially through artificial intelligence, I will examine how self-help might continue to evolve.


# Literature Review

González, Francisco. Towards a new enlightenment?: A transcendent decade. Bilbao, Spain: BBVA OpenMind, 2018. 

Nirmalya, Thakur, and B. D. Parameshachari. Human-Computer Interaction and beyond: Advances towards smart and interconnected environments. part II. Sharjah, U.A.E: Bentham Books, 2022. 

SCHARF, CALEB. Ascent of information. S.l.: BANTAM PRESS, 2022. 

Tegmark, Max. Life 3.0: Being human in the age of Artificial Intelligence. 
New York: Vintage Books, A Division of Penguin Random House LLC, 2018. 

Blum, Beth. The self-help compulsion: Searching for advice in modern literature. New York: Columbia University Press, 2020. 

Elias, Christopher M. Gossip men: J. Edgar Hoover, Joe McCarthy, Roy Cohn, and the politics of insinuation. Chicago, IL: University of Chicago Press, 2022. 
