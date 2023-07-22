let quote = ['“You are the shuckiest shuck faced shuck in the world!”',
    'Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!',
    'A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must b',
    'Insane means fewer cameras!',
    'What have I become? My sweetest friend; everyone I know goes away in the end. And you could have it all: my empire of dirt. I will let you down. I will make you hurt.',
    'I\'m about as intimidating as a butterfly.',
    'The lampshade on my head is for my bright ideas. I won\'t be able to convey them until Monday, when my curtain gets out of the dry cleaners.',
    'Some quotations," said Zellaby, "are greatly improved by lack of context.',
    'Never ask an elf for help; they might decide your better off dead, eh?',
    'All of my best friends are dead people. Someday I\'ve got to figure out how that happened.',
    'Act first, explain later.',
    'Hand me my pants',
    'My melon soul Crushed by your Gallagher of apathy',
    'Life would be a great deal easier if dead things had the decency to remain dead.',
    'Luck is not as random as you think. Before that lottery ticket won the jackpot, someone had to buy it.',
    'Did you ever wish you had a book that would explain the full meaning of life\'s random happenings to you?',
    'Seeing is believing',
    'No snowflake in an avalanche ever feels responsible',
    'Expired condoms are like nuclear waste: there\'s nothing sensible you can do with it.',
    'Her memories were beads jumbled loose in a box, unstrung.',
    'We cannot solve problems with the kind of thinking we employed when we came up with them.',
    '“Learn as if you will live forever, live like you will die tomorrow.”',
    '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”',
'“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt',
'“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale',
'“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest." —Walter Anderson',
'“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren',
'"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
'"It is better to fail in originality than to succeed in imitation."',
'"The road to success and the road to failure are almost exactly the same."',
'“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau',
'“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie',
'"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan \'Press On\' has solved and always will solve the problems of the human race." —Calvin Coolidge',
'“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers',
'“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden',
'“I never dreamed about success. I worked for it.” —Estée Lauder',
'“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella',
'“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." — Winston Churchill',
'“Don’t let yesterday take up too much of today.” — Will Rogers',
'“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” — Unknown',
'“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs',
'“Experience is a hard teacher because she gives the test first, the lesson afterwards.” ―Vernon Sanders Law',
'“To know how much there is to know is the beginning of learning to live.” —Dorothy West',
'“Concentrate all your thoughts upon the work in hand. The sun\'s rays do not burn until brought to a focus. “ — Alexander Graham Bell',
'“Either you run the day or the day runs you.” — Jim Rohn',
'“I’m a greater believer in luck, and I find the harder I work the more I have of it.” — Thomas Jefferson',
'“When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho',
'“Opportunity is missed by most people because it is dressed in overalls and looks like work.” — Thomas Edison',
'“Setting goals is the first step in turning the invisible into the visible.” — Tony Robbins',
'Women challenge the status quo because we are never it.” — Cindy Gallop',
'We don’t just sit around and wait for other people. We just make, and we do.” — Arlan Hamilton'
]


const newQuote = () => {
    let random = Math.floor(Math.random() * quote.length);
    document.getElementById('quote_text').innerHTML = quote[random]; 

    
    
}


