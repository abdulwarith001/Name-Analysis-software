const meaningOfLetters = {
    A: "You are your own person: ambitious and freethinking. You do not change your mind under someone else’s pressure. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you’re also flexible and take other people’s ideas seriously.",

    B: "You are sensitive and a bit of an introvert, but still manage to be personable and compassionate. You are all about peace — you need it in order to be happy. Although you are very loyal, make sure to keep an open mind and think for yourself more often.",

    C: "You wear your heart on your sleeve — lucky, since you have a strong instinct about matters of the heart. You express yourself clearly and are also witty — a “life of the party” sort. You are also very outspoken and upbeat.",

    D: "You are grounded and pragmatic. You have great systems in place for getting things done, which is great, because your sense of determination is strong. Be careful not to be too stubborn, because at your best, you shine under pressure and can get things done fast.",

    E: "You are freedom-loving, sensual and enthusiastic. You believe strongly in falling in love … in fact, you may do it quite often! You are outgoing and the life of the party, but you are also very keen and a hard one to fool. You can see a situation from many different sides.",

    F: "You are nurturing: both responsible and a good host, self-sacrificing and very easy to get along with. Your warmth shows in how easily you’re able to take on other people’s pain. Be careful not to stick your nose in or interfere in situations where you’re not welcome, and try not to let other people’s problems drag you down",

    G: "You are an intellectually active person with loads of drive and the ability to make things happen. You are a visionary, and this could benefit you financially down the line. You think on your feet, even though you prefer to be very systematic. You may even feel psychic sometimes.",

    H: "You are a visionary, but you also tend to make a lot of money and lose it fast. In the long-run, however, you will probably be fine — your creativity will serve you well. You think from the gut and might prefer to be alone. Fight any doubts you might have about yourself and spend plenty of time outdoors!",

    I: "You are a compassionate person who feels things deeply. It makes sense, then, that you are also artsy and creative, with a great eye for everything from fashion to composition. Make sure you stick close to projects and have direction — otherwise you might suffer from anxiety. Balance is key.",

    J: "In this specific case, “J” is for justice. You are all about fairness and balancing the scales. You make an exemplary friend and try hard to make sure everyone is happy and comfortable. Make sure to motivate yourself enough to tap into natural talents.",

    K: "You are all about enlightenment. Both deeply-feeling and artistic, you are also motivated and rely heavily on your gut to make decisions. You are also a force to be reckoned with. Be careful of anxiety and hesitation, because you tend to be high-strung.",

    L: "You are very heady, and tend to over think rather than experience life. Do not allow this quality to make you indecisive. You are also very honest and tolerant, generous and kind-hearted. Fond of travel, you should look out for missteps or clumsiness during times of high anxiety. Seek balance.",

    M: "You are a workaholic! A high-energy workhorse, you don’t need much sleep and are very healthy. You also really like to be a homebody, however, and need a steady financial base in order to feel secure. Also make sure your drive doesn’t make you impatient with other people.",

    N: 'You are a “think outside the box” kind of person — creative and original. You are also strong-willed with the opinions to match. You are systematic about your life, documenting experiences in diary form, and might have your share of romantic “entanglements.”',

    O: "You know where the moral high ground is, and you always take it. That’s because your spiritual beliefs are as strong as your will. You like boundaries, laws and rules, but are also sensitive and feel things very deeply. Jealousy might be a problem for you. Be careful not to brood or be too suspicious.",

    P: `You are very intellectual and have a broad base of knowledge. People get great first impressions from you, but you can also seem distant. Although you have great “walking around sense,” you can be extremely impatient. Make sure to let go, and to be more generous with your time.`,

    Q: `You are a money magnet, but your instability can lead to financial downturns. You are a natural-born leader with a great power to persuade, although on a personal level, you’re a tough nut to crack. People find you mysterious and may gossip frequently about you. Luckily, you speak your mind and you speak it eloquently.`,

    R: `You feel things strongly and your rich, intense inner life emanates outward. You also have an excellent work ethic and can do your job with high amounts of energy. Make sure to keep a balance and to work well with others, even though you also have a kind nature.`,

    S: `You are a real charmer. With a sense of warmth and devotion, you also feel things deeply — this can lead to overly dramatic reactions and an intense inner life. Make sure you carefully consider every decision, and take care to whether your many emotional ups and downs.`,

    T: `You like life in the fast lane. Remind yourself to slow down, because you are often taking on new and exciting projects. You’re also assertive — even aggressive — in your personal relationships. Keep your feelings and outward appearance in check, and don’t get too sensitive.`,

    U: `You have a give-and-take kind of life. You might gain a lot, only to lose it, but will always break even. Teach yourself to think faster on your feet and then commit wholeheartedly to whatever project you’re involved with. Tap into your instinct and creativity, as well as your impeccable sense of timing and luck! Also, you are naturally predisposed to be glamorous — play it up!`,

    V: `You are a seer — you have great intuition. Sometimes you may even feel psychic. But be careful — with a strong imagination, it may be hard to separate fact from fiction. You have lofty goals and the will to bring them into reality. Use your efficiency, but be careful not to be too eccentric — that is a danger. Also beware your own unpredictability and possessiveness.`,

    W: `You think from the gut and you have a great sense of purpose. You are also an active person — mentally and literally: you like to be involved in as many activities as possible. Your charisma means you surround yourself with interesting people, because you stimulate excellent conversation. Try not to put things off, and take full advantage of your own creativity.`,

    X: `You are a creative, sensual person who engages with people easily and soaks up information like a sponge. Be careful that this enthusiasm and passion doesn’t make you too passionate in sexual matters. You can also be moody and have to be careful to avoid addictions.`,

    Y: `You are freedom-loving and like to break rules and push the envelope. Your ambition and courage make you naturally independent, even though you come across as reserved. You are stylish. Be careful not to be too slow in making decisions — trust your natural gift of intuition!`,

    Z: `You are naturally upbeat and charismatic. You always walk on the sunny side of the street, so to say, but also have high standards. You balance this out with common sense and understanding — compassion is a strong suit of yours. You are wise and quick to think on your feet, but be careful not to be impatient or impulsive.`
}
//To check the length of an object
// const obj = Object.keys(meaningOfLetters);
// console.log(obj.length);
const input = document.querySelector("#input")
const submitBtn = document.querySelector("#submitBtn");
const display = document.getElementById('nameAnalysisDisplay');
const loader = document.querySelector('.loader');
const result = document.querySelector('.result');

const convertString_Arr = (string) => {
    let convertedString = string.trim().split('');
    let uniqueString = [...new Set(convertedString)];
    return uniqueString;
}

const setMeaningOfLetters = () => {
    if (input.value === '') { return }
    resetDisplay();
    const first_msg = `The name '${input.value.toUpperCase()}' is extremely important. Your name is your life! It is how you identify yourself. It is how others identify you.`;
    display.innerHTML = first_msg

    const getConvertedString = convertString_Arr(input.value.toUpperCase());

    getConvertedString.map((letter) => displayAnalysis(meaningOfLetters[letter]));
    initLoader()
    input.value = ''
}

function resetDisplay() {
    display.innerHTML = ''
    result.style.opacity = 0;
    result.style.display = 'none'
}

function displayAnalysis(analysis) {
    let Individual_AnalysisWrapper = document.createElement('li')
    Individual_AnalysisWrapper.innerHTML = analysis;
    display.append(Individual_AnalysisWrapper)
}

function initLoader() {
    setTimeout(() => {
        loader.style.opacity = 1;
        loader.style.display = 'flex'

        result.style.opacity = 0;
        result.style.display = 'none'
        setTimeout(() => {
            loader.style.opacity = 0;
            loader.style.display = 'none'

            result.style.opacity = 1;
            result.style.display = 'block'
        }, 4000)
    }, 0000)
}

submitBtn.addEventListener('click', setMeaningOfLetters)
