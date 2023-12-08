const onFind = () => {
  const input = document.getElementById("keyword-input");
  if (!input || !input.value) return;

  const list = EMOJIS.filter((e) => e.k.includes(input.value))
    .map((e) => e.e)
    .join("");

  const output = document.getElementById("emoji-output");
  output.value = list;
  if (!list) output.placeholder = "No Emoji found 😥";
};

const onRandom = () => {
  const len = EMOJIS.length;
  const index = Math.floor(Math.random() * len);
  const emoji = EMOJIS[index];

  const output = document.getElementById("emoji-output");
  output.value = emoji.e;

  // also show the keyword for the random emoji
  const input = document.getElementById("keyword-input");
  input.value = emoji.k;
};

const onKeyDown = (event) => {
  if (event.code === "Enter") onFind();
};

const onCopy = () => {
  const output = document.getElementById("emoji-output");
  output.select();
  output.setSelectionRange(0, 9999);

  navigator.clipboard.writeText(output.value);
};

document.getElementById("find-button").addEventListener("click", onFind);
document.getElementById("random-button").addEventListener("click", onRandom);
document.getElementById("keyword-input").addEventListener("keydown", onKeyDown);
document.getElementById("copy-button").addEventListener("click", onCopy);

const EMOJIS = [
  {
    e: "😀",
    k: "grinning face",
  },
  {
    e: "😃",
    k: "grinning face with big eyes",
  },
  {
    e: "😄",
    k: "grinning face with smiling eyes",
  },
  {
    e: "😁",
    k: "beaming face with smiling eyes",
  },
  {
    e: "😆",
    k: "grinning squinting face",
  },
  {
    e: "😅",
    k: "grinning face with sweat",
  },
  {
    e: "🤣",
    k: "rolling on the floor laughing",
  },
  {
    e: "😂",
    k: "face with tears of joy",
  },
  {
    e: "🙂",
    k: "slightly smiling face",
  },
  {
    e: "🙃",
    k: "upside-down face",
  },
  {
    e: "🫠",
    k: "melting face",
  },
  {
    e: "😉",
    k: "winking face",
  },
  {
    e: "😊",
    k: "smiling face with smiling eyes",
  },
  {
    e: "😇",
    k: "smiling face with halo",
  },
  {
    e: "🥰",
    k: "smiling face with hearts",
  },
  {
    e: "😍",
    k: "smiling face with heart-eyes",
  },
  {
    e: "🤩",
    k: "star-struck",
  },
  {
    e: "😘",
    k: "face blowing a kiss",
  },
  {
    e: "😗",
    k: "kissing face",
  },
  {
    e: "☺️",
    k: "smiling face",
  },
  {
    e: "😚",
    k: "kissing face with closed eyes",
  },
  {
    e: "😙",
    k: "kissing face with smiling eyes",
  },
  {
    e: "🥲",
    k: "smiling face with tear",
  },
  {
    e: "😋",
    k: "face savoring food",
  },
  {
    e: "😛",
    k: "face with tongue",
  },
  {
    e: "😜",
    k: "winking face with tongue",
  },
  {
    e: "🤪",
    k: "zany face",
  },
  {
    e: "😝",
    k: "squinting face with tongue",
  },
  {
    e: "🤑",
    k: "money-mouth face",
  },
  {
    e: "🤗",
    k: "smiling face with open hands",
  },
  {
    e: "🤭",
    k: "face with hand over mouth",
  },
  {
    e: "🫢",
    k: "face with open eyes and hand over mouth",
  },
  {
    e: "🫣",
    k: "face with peeking eye",
  },
  {
    e: "🤫",
    k: "shushing face",
  },
  {
    e: "🤔",
    k: "thinking face",
  },
  {
    e: "🫡",
    k: "saluting face",
  },
  {
    e: "🤐",
    k: "zipper-mouth face",
  },
  {
    e: "🤨",
    k: "face with raised eyebrow",
  },
  {
    e: "😐",
    k: "neutral face",
  },
  {
    e: "😑",
    k: "expressionless face",
  },
  {
    e: "😶",
    k: "face without mouth",
  },
  {
    e: "🫥",
    k: "dotted line face",
  },
  {
    e: "😶‍🌫️",
    k: "face in clouds",
  },
  {
    e: "😏",
    k: "smirking face",
  },
  {
    e: "😒",
    k: "unamused face",
  },
  {
    e: "🙄",
    k: "face with rolling eyes",
  },
  {
    e: "😬",
    k: "grimacing face",
  },
  {
    e: "😮‍💨",
    k: "face exhaling",
  },
  {
    e: "🤥",
    k: "lying face",
  },
  {
    e: "🫨",
    k: "shaking face",
  },
  {
    e: "😌",
    k: "relieved face",
  },
  {
    e: "😔",
    k: "pensive face",
  },
  {
    e: "😪",
    k: "sleepy face",
  },
  {
    e: "🤤",
    k: "drooling face",
  },
  {
    e: "😴",
    k: "sleeping face",
  },
  {
    e: "😷",
    k: "face with medical mask",
  },
  {
    e: "🤒",
    k: "face with thermometer",
  },
  {
    e: "🤕",
    k: "face with head-bandage",
  },
  {
    e: "🤢",
    k: "nauseated face",
  },
  {
    e: "🤮",
    k: "face vomiting",
  },
  {
    e: "🤧",
    k: "sneezing face",
  },
  {
    e: "🥵",
    k: "hot face",
  },
  {
    e: "🥶",
    k: "cold face",
  },
  {
    e: "🥴",
    k: "woozy face",
  },
  {
    e: "😵",
    k: "face with crossed-out eyes",
  },
  {
    e: "😵‍💫",
    k: "face with spiral eyes",
  },
  {
    e: "🤯",
    k: "exploding head",
  },
  {
    e: "🤠",
    k: "cowboy hat face",
  },
  {
    e: "🥳",
    k: "partying face",
  },
  {
    e: "🥸",
    k: "disguised face",
  },
  {
    e: "😎",
    k: "smiling face with sunglasses",
  },
  {
    e: "🤓",
    k: "nerd face",
  },
  {
    e: "🧐",
    k: "face with monocle",
  },
  {
    e: "😕",
    k: "confused face",
  },
  {
    e: "🫤",
    k: "face with diagonal mouth",
  },
  {
    e: "😟",
    k: "worried face",
  },
  {
    e: "🙁",
    k: "slightly frowning face",
  },
  {
    e: "☹️",
    k: "frowning face",
  },
  {
    e: "😮",
    k: "face with open mouth",
  },
  {
    e: "😯",
    k: "hushed face",
  },
  {
    e: "😲",
    k: "astonished face",
  },
  {
    e: "😳",
    k: "flushed face",
  },
  {
    e: "🥺",
    k: "pleading face",
  },
  {
    e: "🥹",
    k: "face holding back tears",
  },
  {
    e: "😦",
    k: "frowning face with open mouth",
  },
  {
    e: "😧",
    k: "anguished face",
  },
  {
    e: "😨",
    k: "fearful face",
  },
  {
    e: "😰",
    k: "anxious face with sweat",
  },
  {
    e: "😥",
    k: "sad but relieved face",
  },
  {
    e: "😢",
    k: "crying face",
  },
  {
    e: "😭",
    k: "loudly crying face",
  },
  {
    e: "😱",
    k: "face screaming in fear",
  },
  {
    e: "😖",
    k: "confounded face",
  },
  {
    e: "😣",
    k: "persevering face",
  },
  {
    e: "😞",
    k: "disappointed face",
  },
  {
    e: "😓",
    k: "downcast face with sweat",
  },
  {
    e: "😩",
    k: "weary face",
  },
  {
    e: "😫",
    k: "tired face",
  },
  {
    e: "🥱",
    k: "yawning face",
  },
  {
    e: "😤",
    k: "face with steam from nose",
  },
  {
    e: "😡",
    k: "enraged face",
  },
  {
    e: "😠",
    k: "angry face",
  },
  {
    e: "🤬",
    k: "face with symbols on mouth",
  },
  {
    e: "😈",
    k: "smiling face with horns",
  },
  {
    e: "👿",
    k: "angry face with horns",
  },
  {
    e: "💀",
    k: "skull",
  },
  {
    e: "☠️",
    k: "skull and crossbones",
  },
  {
    e: "💩",
    k: "pile of poo",
  },
  {
    e: "🤡",
    k: "clown face",
  },
  {
    e: "👹",
    k: "ogre",
  },
  {
    e: "👺",
    k: "goblin",
  },
  {
    e: "👻",
    k: "ghost",
  },
  {
    e: "👽",
    k: "alien",
  },
  {
    e: "👾",
    k: "alien monster",
  },
  {
    e: "🤖",
    k: "robot",
  },
  {
    e: "😺",
    k: "grinning cat",
  },
  {
    e: "😸",
    k: "grinning cat with smiling eyes",
  },
  {
    e: "😹",
    k: "cat with tears of joy",
  },
  {
    e: "😻",
    k: "smiling cat with heart-eyes",
  },
  {
    e: "😼",
    k: "cat with wry smile",
  },
  {
    e: "😽",
    k: "kissing cat",
  },
  {
    e: "🙀",
    k: "weary cat",
  },
  {
    e: "😿",
    k: "crying cat",
  },
  {
    e: "😾",
    k: "pouting cat",
  },
  {
    e: "🙈",
    k: "see-no-evil monkey",
  },
  {
    e: "🙉",
    k: "hear-no-evil monkey",
  },
  {
    e: "🙊",
    k: "speak-no-evil monkey",
  },
  {
    e: "💌",
    k: "love letter",
  },
  {
    e: "💘",
    k: "heart with arrow",
  },
  {
    e: "💝",
    k: "heart with ribbon",
  },
  {
    e: "💖",
    k: "sparkling heart",
  },
  {
    e: "💗",
    k: "growing heart",
  },
  {
    e: "💓",
    k: "beating heart",
  },
  {
    e: "💞",
    k: "revolving hearts",
  },
  {
    e: "💕",
    k: "two hearts",
  },
  {
    e: "💟",
    k: "heart decoration",
  },
  {
    e: "❣️",
    k: "heart exclamation",
  },
  {
    e: "💔",
    k: "broken heart",
  },
  {
    e: "❤️‍🔥",
    k: "heart on fire",
  },
  {
    e: "❤️‍🩹",
    k: "mending heart",
  },
  {
    e: "❤️",
    k: "red heart",
  },
  {
    e: "🩷",
    k: "pink heart",
  },
  {
    e: "🧡",
    k: "orange heart",
  },
  {
    e: "💛",
    k: "yellow heart",
  },
  {
    e: "💚",
    k: "green heart",
  },
  {
    e: "💙",
    k: "blue heart",
  },
  {
    e: "🩵",
    k: "light blue heart",
  },
  {
    e: "💜",
    k: "purple heart",
  },
  {
    e: "🤎",
    k: "brown heart",
  },
  {
    e: "🖤",
    k: "black heart",
  },
  {
    e: "🩶",
    k: "grey heart",
  },
  {
    e: "🤍",
    k: "white heart",
  },
  {
    e: "💋",
    k: "kiss mark",
  },
  {
    e: "💯",
    k: "hundred points",
  },
  {
    e: "💢",
    k: "anger symbol",
  },
  {
    e: "💥",
    k: "collision",
  },
  {
    e: "💫",
    k: "dizzy",
  },
  {
    e: "💦",
    k: "sweat droplets",
  },
  {
    e: "💨",
    k: "dashing away",
  },
  {
    e: "🕳️",
    k: "hole",
  },
  {
    e: "💬",
    k: "speech balloon",
  },
  {
    e: "👁️‍🗨️",
    k: "eye in speech bubble",
  },
  {
    e: "🗨️",
    k: "left speech bubble",
  },
  {
    e: "🗯️",
    k: "right anger bubble",
  },
  {
    e: "💭",
    k: "thought balloon",
  },
  {
    e: "💤",
    k: "ZZZ",
  },
  {
    e: "👋",
    k: "waving hand",
  },
  {
    e: "🤚",
    k: "raised back of hand",
  },
  {
    e: "🖐️",
    k: "hand with fingers splayed",
  },
  {
    e: "✋",
    k: "raised hand",
  },
  {
    e: "🖖",
    k: "vulcan salute",
  },
  {
    e: "🫱",
    k: "rightwards hand",
  },
  {
    e: "🫲",
    k: "leftwards hand",
  },
  {
    e: "🫳",
    k: "palm down hand",
  },
  {
    e: "🫴",
    k: "palm up hand",
  },
  {
    e: "🫷",
    k: "leftwards pushing hand",
  },
  {
    e: "🫸",
    k: "rightwards pushing hand",
  },
  {
    e: "👌",
    k: "OK hand",
  },
  {
    e: "🤌",
    k: "pinched fingers",
  },
  {
    e: "🤏",
    k: "pinching hand",
  },
  {
    e: "✌️",
    k: "victory hand",
  },
  {
    e: "🤞",
    k: "crossed fingers",
  },
  {
    e: "🫰",
    k: "hand with index finger and thumb crossed",
  },
  {
    e: "🤟",
    k: "love-you gesture",
  },
  {
    e: "🤘",
    k: "sign of the horns",
  },
  {
    e: "🤙",
    k: "call me hand",
  },
  {
    e: "👈",
    k: "backhand index pointing left",
  },
  {
    e: "👉",
    k: "backhand index pointing right",
  },
  {
    e: "👆",
    k: "backhand index pointing up",
  },
  {
    e: "🖕",
    k: "middle finger",
  },
  {
    e: "👇",
    k: "backhand index pointing down",
  },
  {
    e: "☝️",
    k: "index pointing up",
  },
  {
    e: "🫵",
    k: "index pointing at the viewer",
  },
  {
    e: "👍",
    k: "thumbs up",
  },
  {
    e: "👎",
    k: "thumbs down",
  },
  {
    e: "✊",
    k: "raised fist",
  },
  {
    e: "👊",
    k: "oncoming fist",
  },
  {
    e: "🤛",
    k: "left-facing fist",
  },
  {
    e: "🤜",
    k: "right-facing fist",
  },
  {
    e: "👏",
    k: "clapping hands",
  },
  {
    e: "🙌",
    k: "raising hands",
  },
  {
    e: "🫶",
    k: "heart hands",
  },
  {
    e: "👐",
    k: "open hands",
  },
  {
    e: "🤲",
    k: "palms up together",
  },
  {
    e: "🤝",
    k: "handshake",
  },
  {
    e: "🙏",
    k: "folded hands",
  },
  {
    e: "✍️",
    k: "writing hand",
  },
  {
    e: "💅",
    k: "nail polish",
  },
  {
    e: "🤳",
    k: "selfie",
  },
  {
    e: "💪",
    k: "flexed biceps",
  },
  {
    e: "🦾",
    k: "mechanical arm",
  },
  {
    e: "🦿",
    k: "mechanical leg",
  },
  {
    e: "🦵",
    k: "leg",
  },
  {
    e: "🦶",
    k: "foot",
  },
  {
    e: "👂",
    k: "ear",
  },
  {
    e: "🦻",
    k: "ear with hearing aid",
  },
  {
    e: "👃",
    k: "nose",
  },
  {
    e: "🧠",
    k: "brain",
  },
  {
    e: "🫀",
    k: "anatomical heart",
  },
  {
    e: "🫁",
    k: "lungs",
  },
  {
    e: "🦷",
    k: "tooth",
  },
  {
    e: "🦴",
    k: "bone",
  },
  {
    e: "👀",
    k: "eyes",
  },
  {
    e: "👁️",
    k: "eye",
  },
  {
    e: "👅",
    k: "tongue",
  },
  {
    e: "👄",
    k: "mouth",
  },
  {
    e: "🫦",
    k: "biting lip",
  },
  {
    e: "👶",
    k: "baby",
  },
  {
    e: "🧒",
    k: "child",
  },
  {
    e: "👦",
    k: "boy",
  },
  {
    e: "👧",
    k: "girl",
  },
  {
    e: "🧑",
    k: "person",
  },
  {
    e: "👱",
    k: "person blond hair",
  },
  {
    e: "👨",
    k: "man",
  },
  {
    e: "🧔",
    k: "person beard",
  },
  {
    e: "🧔‍♂️",
    k: "man beard",
  },
  {
    e: "🧔‍♀️",
    k: "woman beard",
  },
  {
    e: "👨‍🦰",
    k: "man red hair",
  },
  {
    e: "👨‍🦱",
    k: "man curly hair",
  },
  {
    e: "👨‍🦳",
    k: "man white hair",
  },
  {
    e: "👨‍🦲",
    k: "man bald",
  },
  {
    e: "👩",
    k: "woman",
  },
  {
    e: "👩‍🦰",
    k: "woman red hair",
  },
  {
    e: "🧑‍🦰",
    k: "person red hair",
  },
  {
    e: "👩‍🦱",
    k: "woman curly hair",
  },
  {
    e: "🧑‍🦱",
    k: "person curly hair",
  },
  {
    e: "👩‍🦳",
    k: "woman white hair",
  },
  {
    e: "🧑‍🦳",
    k: "person white hair",
  },
  {
    e: "👩‍🦲",
    k: "woman bald",
  },
  {
    e: "🧑‍🦲",
    k: "person bald",
  },
  {
    e: "👱‍♀️",
    k: "woman blond hair",
  },
  {
    e: "👱‍♂️",
    k: "man blond hair",
  },
  {
    e: "🧓",
    k: "older person",
  },
  {
    e: "👴",
    k: "old man",
  },
  {
    e: "👵",
    k: "old woman",
  },
  {
    e: "🙍",
    k: "person frowning",
  },
  {
    e: "🙍‍♂️",
    k: "man frowning",
  },
  {
    e: "🙍‍♀️",
    k: "woman frowning",
  },
  {
    e: "🙎",
    k: "person pouting",
  },
  {
    e: "🙎‍♂️",
    k: "man pouting",
  },
  {
    e: "🙎‍♀️",
    k: "woman pouting",
  },
  {
    e: "🙅",
    k: "person gesturing NO",
  },
  {
    e: "🙅‍♂️",
    k: "man gesturing NO",
  },
  {
    e: "🙅‍♀️",
    k: "woman gesturing NO",
  },
  {
    e: "🙆",
    k: "person gesturing OK",
  },
  {
    e: "🙆‍♂️",
    k: "man gesturing OK",
  },
  {
    e: "🙆‍♀️",
    k: "woman gesturing OK",
  },
  {
    e: "💁",
    k: "person tipping hand",
  },
  {
    e: "💁‍♂️",
    k: "man tipping hand",
  },
  {
    e: "💁‍♀️",
    k: "woman tipping hand",
  },
  {
    e: "🙋",
    k: "person raising hand",
  },
  {
    e: "🙋‍♂️",
    k: "man raising hand",
  },
  {
    e: "🙋‍♀️",
    k: "woman raising hand",
  },
  {
    e: "🧏",
    k: "deaf person",
  },
  {
    e: "🧏‍♂️",
    k: "deaf man",
  },
  {
    e: "🧏‍♀️",
    k: "deaf woman",
  },
  {
    e: "🙇",
    k: "person bowing",
  },
  {
    e: "🙇‍♂️",
    k: "man bowing",
  },
  {
    e: "🙇‍♀️",
    k: "woman bowing",
  },
  {
    e: "🤦",
    k: "person facepalming",
  },
  {
    e: "🤦‍♂️",
    k: "man facepalming",
  },
  {
    e: "🤦‍♀️",
    k: "woman facepalming",
  },
  {
    e: "🤷",
    k: "person shrugging",
  },
  {
    e: "🤷‍♂️",
    k: "man shrugging",
  },
  {
    e: "🤷‍♀️",
    k: "woman shrugging",
  },
  {
    e: "🧑‍⚕️",
    k: "health worker",
  },
  {
    e: "👨‍⚕️",
    k: "man health worker",
  },
  {
    e: "👩‍⚕️",
    k: "woman health worker",
  },
  {
    e: "🧑‍🎓",
    k: "student",
  },
  {
    e: "👨‍🎓",
    k: "man student",
  },
  {
    e: "👩‍🎓",
    k: "woman student",
  },
  {
    e: "🧑‍🏫",
    k: "teacher",
  },
  {
    e: "👨‍🏫",
    k: "man teacher",
  },
  {
    e: "👩‍🏫",
    k: "woman teacher",
  },
  {
    e: "🧑‍⚖️",
    k: "judge",
  },
  {
    e: "👨‍⚖️",
    k: "man judge",
  },
  {
    e: "👩‍⚖️",
    k: "woman judge",
  },
  {
    e: "🧑‍🌾",
    k: "farmer",
  },
  {
    e: "👨‍🌾",
    k: "man farmer",
  },
  {
    e: "👩‍🌾",
    k: "woman farmer",
  },
  {
    e: "🧑‍🍳",
    k: "cook",
  },
  {
    e: "👨‍🍳",
    k: "man cook",
  },
  {
    e: "👩‍🍳",
    k: "woman cook",
  },
  {
    e: "🧑‍🔧",
    k: "mechanic",
  },
  {
    e: "👨‍🔧",
    k: "man mechanic",
  },
  {
    e: "👩‍🔧",
    k: "woman mechanic",
  },
  {
    e: "🧑‍🏭",
    k: "factory worker",
  },
  {
    e: "👨‍🏭",
    k: "man factory worker",
  },
  {
    e: "👩‍🏭",
    k: "woman factory worker",
  },
  {
    e: "🧑‍💼",
    k: "office worker",
  },
  {
    e: "👨‍💼",
    k: "man office worker",
  },
  {
    e: "👩‍💼",
    k: "woman office worker",
  },
  {
    e: "🧑‍🔬",
    k: "scientist",
  },
  {
    e: "👨‍🔬",
    k: "man scientist",
  },
  {
    e: "👩‍🔬",
    k: "woman scientist",
  },
  {
    e: "🧑‍💻",
    k: "technologist",
  },
  {
    e: "👨‍💻",
    k: "man technologist",
  },
  {
    e: "👩‍💻",
    k: "woman technologist",
  },
  {
    e: "🧑‍🎤",
    k: "singer",
  },
  {
    e: "👨‍🎤",
    k: "man singer",
  },
  {
    e: "👩‍🎤",
    k: "woman singer",
  },
  {
    e: "🧑‍🎨",
    k: "artist",
  },
  {
    e: "👨‍🎨",
    k: "man artist",
  },
  {
    e: "👩‍🎨",
    k: "woman artist",
  },
  {
    e: "🧑‍✈️",
    k: "pilot",
  },
  {
    e: "👨‍✈️",
    k: "man pilot",
  },
  {
    e: "👩‍✈️",
    k: "woman pilot",
  },
  {
    e: "🧑‍🚀",
    k: "astronaut",
  },
  {
    e: "👨‍🚀",
    k: "man astronaut",
  },
  {
    e: "👩‍🚀",
    k: "woman astronaut",
  },
  {
    e: "🧑‍🚒",
    k: "firefighter",
  },
  {
    e: "👨‍🚒",
    k: "man firefighter",
  },
  {
    e: "👩‍🚒",
    k: "woman firefighter",
  },
  {
    e: "👮",
    k: "police officer",
  },
  {
    e: "👮‍♂️",
    k: "man police officer",
  },
  {
    e: "👮‍♀️",
    k: "woman police officer",
  },
  {
    e: "🕵️",
    k: "detective",
  },
  {
    e: "🕵️‍♂️",
    k: "man detective",
  },
  {
    e: "🕵️‍♀️",
    k: "woman detective",
  },
  {
    e: "💂",
    k: "guard",
  },
  {
    e: "💂‍♂️",
    k: "man guard",
  },
  {
    e: "💂‍♀️",
    k: "woman guard",
  },
  {
    e: "🥷",
    k: "ninja",
  },
  {
    e: "👷",
    k: "construction worker",
  },
  {
    e: "👷‍♂️",
    k: "man construction worker",
  },
  {
    e: "👷‍♀️",
    k: "woman construction worker",
  },
  {
    e: "🫅",
    k: "person with crown",
  },
  {
    e: "🤴",
    k: "prince",
  },
  {
    e: "👸",
    k: "princess",
  },
  {
    e: "👳",
    k: "person wearing turban",
  },
  {
    e: "👳‍♂️",
    k: "man wearing turban",
  },
  {
    e: "👳‍♀️",
    k: "woman wearing turban",
  },
  {
    e: "👲",
    k: "person with skullcap",
  },
  {
    e: "🧕",
    k: "woman with headscarf",
  },
  {
    e: "🤵",
    k: "person in tuxedo",
  },
  {
    e: "🤵‍♂️",
    k: "man in tuxedo",
  },
  {
    e: "🤵‍♀️",
    k: "woman in tuxedo",
  },
  {
    e: "👰",
    k: "person with veil",
  },
  {
    e: "👰‍♂️",
    k: "man with veil",
  },
  {
    e: "👰‍♀️",
    k: "woman with veil",
  },
  {
    e: "🤰",
    k: "pregnant woman",
  },
  {
    e: "🫃",
    k: "pregnant man",
  },
  {
    e: "🫄",
    k: "pregnant person",
  },
  {
    e: "🤱",
    k: "breast-feeding",
  },
  {
    e: "👩‍🍼",
    k: "woman feeding baby",
  },
  {
    e: "👨‍🍼",
    k: "man feeding baby",
  },
  {
    e: "🧑‍🍼",
    k: "person feeding baby",
  },
  {
    e: "👼",
    k: "baby angel",
  },
  {
    e: "🎅",
    k: "Santa Claus",
  },
  {
    e: "🤶",
    k: "Mrs. Claus",
  },
  {
    e: "🧑‍🎄",
    k: "mx claus",
  },
  {
    e: "🦸",
    k: "superhero",
  },
  {
    e: "🦸‍♂️",
    k: "man superhero",
  },
  {
    e: "🦸‍♀️",
    k: "woman superhero",
  },
  {
    e: "🦹",
    k: "supervillain",
  },
  {
    e: "🦹‍♂️",
    k: "man supervillain",
  },
  {
    e: "🦹‍♀️",
    k: "woman supervillain",
  },
  {
    e: "🧙",
    k: "mage",
  },
  {
    e: "🧙‍♂️",
    k: "man mage",
  },
  {
    e: "🧙‍♀️",
    k: "woman mage",
  },
  {
    e: "🧚",
    k: "fairy",
  },
  {
    e: "🧚‍♂️",
    k: "man fairy",
  },
  {
    e: "🧚‍♀️",
    k: "woman fairy",
  },
  {
    e: "🧛",
    k: "vampire",
  },
  {
    e: "🧛‍♂️",
    k: "man vampire",
  },
  {
    e: "🧛‍♀️",
    k: "woman vampire",
  },
  {
    e: "🧜",
    k: "merperson",
  },
  {
    e: "🧜‍♂️",
    k: "merman",
  },
  {
    e: "🧜‍♀️",
    k: "mermaid",
  },
  {
    e: "🧝",
    k: "elf",
  },
  {
    e: "🧝‍♂️",
    k: "man elf",
  },
  {
    e: "🧝‍♀️",
    k: "woman elf",
  },
  {
    e: "🧞",
    k: "genie",
  },
  {
    e: "🧞‍♂️",
    k: "man genie",
  },
  {
    e: "🧞‍♀️",
    k: "woman genie",
  },
  {
    e: "🧟",
    k: "zombie",
  },
  {
    e: "🧟‍♂️",
    k: "man zombie",
  },
  {
    e: "🧟‍♀️",
    k: "woman zombie",
  },
  {
    e: "🧌",
    k: "troll",
  },
  {
    e: "💆",
    k: "person getting massage",
  },
  {
    e: "💆‍♂️",
    k: "man getting massage",
  },
  {
    e: "💆‍♀️",
    k: "woman getting massage",
  },
  {
    e: "💇",
    k: "person getting haircut",
  },
  {
    e: "💇‍♂️",
    k: "man getting haircut",
  },
  {
    e: "💇‍♀️",
    k: "woman getting haircut",
  },
  {
    e: "🚶",
    k: "person walking",
  },
  {
    e: "🚶‍♂️",
    k: "man walking",
  },
  {
    e: "🚶‍♀️",
    k: "woman walking",
  },
  {
    e: "🧍",
    k: "person standing",
  },
  {
    e: "🧍‍♂️",
    k: "man standing",
  },
  {
    e: "🧍‍♀️",
    k: "woman standing",
  },
  {
    e: "🧎",
    k: "person kneeling",
  },
  {
    e: "🧎‍♂️",
    k: "man kneeling",
  },
  {
    e: "🧎‍♀️",
    k: "woman kneeling",
  },
  {
    e: "🧑‍🦯",
    k: "person with white cane",
  },
  {
    e: "👨‍🦯",
    k: "man with white cane",
  },
  {
    e: "👩‍🦯",
    k: "woman with white cane",
  },
  {
    e: "🧑‍🦼",
    k: "person in motorized wheelchair",
  },
  {
    e: "👨‍🦼",
    k: "man in motorized wheelchair",
  },
  {
    e: "👩‍🦼",
    k: "woman in motorized wheelchair",
  },
  {
    e: "🧑‍🦽",
    k: "person in manual wheelchair",
  },
  {
    e: "👨‍🦽",
    k: "man in manual wheelchair",
  },
  {
    e: "👩‍🦽",
    k: "woman in manual wheelchair",
  },
  {
    e: "🏃",
    k: "person running",
  },
  {
    e: "🏃‍♂️",
    k: "man running",
  },
  {
    e: "🏃‍♀️",
    k: "woman running",
  },
  {
    e: "💃",
    k: "woman dancing",
  },
  {
    e: "🕺",
    k: "man dancing",
  },
  {
    e: "🕴️",
    k: "person in suit levitating",
  },
  {
    e: "👯",
    k: "people with bunny ears",
  },
  {
    e: "👯‍♂️",
    k: "men with bunny ears",
  },
  {
    e: "👯‍♀️",
    k: "women with bunny ears",
  },
  {
    e: "🧖",
    k: "person in steamy room",
  },
  {
    e: "🧖‍♂️",
    k: "man in steamy room",
  },
  {
    e: "🧖‍♀️",
    k: "woman in steamy room",
  },
  {
    e: "🧗",
    k: "person climbing",
  },
  {
    e: "🧗‍♂️",
    k: "man climbing",
  },
  {
    e: "🧗‍♀️",
    k: "woman climbing",
  },
  {
    e: "🤺",
    k: "person fencing",
  },
  {
    e: "🏇",
    k: "horse racing",
  },
  {
    e: "⛷️",
    k: "skier",
  },
  {
    e: "🏂",
    k: "snowboarder",
  },
  {
    e: "🏌️",
    k: "person golfing",
  },
  {
    e: "🏌️‍♂️",
    k: "man golfing",
  },
  {
    e: "🏌️‍♀️",
    k: "woman golfing",
  },
  {
    e: "🏄",
    k: "person surfing",
  },
  {
    e: "🏄‍♂️",
    k: "man surfing",
  },
  {
    e: "🏄‍♀️",
    k: "woman surfing",
  },
  {
    e: "🚣",
    k: "person rowing boat",
  },
  {
    e: "🚣‍♂️",
    k: "man rowing boat",
  },
  {
    e: "🚣‍♀️",
    k: "woman rowing boat",
  },
  {
    e: "🏊",
    k: "person swimming",
  },
  {
    e: "🏊‍♂️",
    k: "man swimming",
  },
  {
    e: "🏊‍♀️",
    k: "woman swimming",
  },
  {
    e: "⛹️",
    k: "person bouncing ball",
  },
  {
    e: "⛹️‍♂️",
    k: "man bouncing ball",
  },
  {
    e: "⛹️‍♀️",
    k: "woman bouncing ball",
  },
  {
    e: "🏋️",
    k: "person lifting weights",
  },
  {
    e: "🏋️‍♂️",
    k: "man lifting weights",
  },
  {
    e: "🏋️‍♀️",
    k: "woman lifting weights",
  },
  {
    e: "🚴",
    k: "person biking",
  },
  {
    e: "🚴‍♂️",
    k: "man biking",
  },
  {
    e: "🚴‍♀️",
    k: "woman biking",
  },
  {
    e: "🚵",
    k: "person mountain biking",
  },
  {
    e: "🚵‍♂️",
    k: "man mountain biking",
  },
  {
    e: "🚵‍♀️",
    k: "woman mountain biking",
  },
  {
    e: "🤸",
    k: "person cartwheeling",
  },
  {
    e: "🤸‍♂️",
    k: "man cartwheeling",
  },
  {
    e: "🤸‍♀️",
    k: "woman cartwheeling",
  },
  {
    e: "🤼",
    k: "people wrestling",
  },
  {
    e: "🤼‍♂️",
    k: "men wrestling",
  },
  {
    e: "🤼‍♀️",
    k: "women wrestling",
  },
  {
    e: "🤽",
    k: "person playing water polo",
  },
  {
    e: "🤽‍♂️",
    k: "man playing water polo",
  },
  {
    e: "🤽‍♀️",
    k: "woman playing water polo",
  },
  {
    e: "🤾",
    k: "person playing handball",
  },
  {
    e: "🤾‍♂️",
    k: "man playing handball",
  },
  {
    e: "🤾‍♀️",
    k: "woman playing handball",
  },
  {
    e: "🤹",
    k: "person juggling",
  },
  {
    e: "🤹‍♂️",
    k: "man juggling",
  },
  {
    e: "🤹‍♀️",
    k: "woman juggling",
  },
  {
    e: "🧘",
    k: "person in lotus position",
  },
  {
    e: "🧘‍♂️",
    k: "man in lotus position",
  },
  {
    e: "🧘‍♀️",
    k: "woman in lotus position",
  },
  {
    e: "🛀",
    k: "person taking bath",
  },
  {
    e: "🛌",
    k: "person in bed",
  },
  {
    e: "🧑‍🤝‍🧑",
    k: "people holding hands",
  },
  {
    e: "👭",
    k: "women holding hands",
  },
  {
    e: "👫",
    k: "woman and man holding hands",
  },
  {
    e: "👬",
    k: "men holding hands",
  },
  {
    e: "💏",
    k: "kiss",
  },
  {
    e: "👩‍❤️‍💋‍👨",
    k: "kiss woman, man",
  },
  {
    e: "👨‍❤️‍💋‍👨",
    k: "kiss man, man",
  },
  {
    e: "👩‍❤️‍💋‍👩",
    k: "kiss woman, woman",
  },
  {
    e: "💑",
    k: "couple with heart",
  },
  {
    e: "👩‍❤️‍👨",
    k: "couple with heart woman, man",
  },
  {
    e: "👨‍❤️‍👨",
    k: "couple with heart man, man",
  },
  {
    e: "👩‍❤️‍👩",
    k: "couple with heart woman, woman",
  },
  {
    e: "👪",
    k: "family",
  },
  {
    e: "👨‍👩‍👦",
    k: "family man, woman, boy",
  },
  {
    e: "👨‍👩‍👧",
    k: "family man, woman, girl",
  },
  {
    e: "👨‍👩‍👧‍👦",
    k: "family man, woman, girl, boy",
  },
  {
    e: "👨‍👩‍👦‍👦",
    k: "family man, woman, boy, boy",
  },
  {
    e: "👨‍👩‍👧‍👧",
    k: "family man, woman, girl, girl",
  },
  {
    e: "👨‍👨‍👦",
    k: "family man, man, boy",
  },
  {
    e: "👨‍👨‍👧",
    k: "family man, man, girl",
  },
  {
    e: "👨‍👨‍👧‍👦",
    k: "family man, man, girl, boy",
  },
  {
    e: "👨‍👨‍👦‍👦",
    k: "family man, man, boy, boy",
  },
  {
    e: "👨‍👨‍👧‍👧",
    k: "family man, man, girl, girl",
  },
  {
    e: "👩‍👩‍👦",
    k: "family woman, woman, boy",
  },
  {
    e: "👩‍👩‍👧",
    k: "family woman, woman, girl",
  },
  {
    e: "👩‍👩‍👧‍👦",
    k: "family woman, woman, girl, boy",
  },
  {
    e: "👩‍👩‍👦‍👦",
    k: "family woman, woman, boy, boy",
  },
  {
    e: "👩‍👩‍👧‍👧",
    k: "family woman, woman, girl, girl",
  },
  {
    e: "👨‍👦",
    k: "family man, boy",
  },
  {
    e: "👨‍👦‍👦",
    k: "family man, boy, boy",
  },
  {
    e: "👨‍👧",
    k: "family man, girl",
  },
  {
    e: "👨‍👧‍👦",
    k: "family man, girl, boy",
  },
  {
    e: "👨‍👧‍👧",
    k: "family man, girl, girl",
  },
  {
    e: "👩‍👦",
    k: "family woman, boy",
  },
  {
    e: "👩‍👦‍👦",
    k: "family woman, boy, boy",
  },
  {
    e: "👩‍👧",
    k: "family woman, girl",
  },
  {
    e: "👩‍👧‍👦",
    k: "family woman, girl, boy",
  },
  {
    e: "👩‍👧‍👧",
    k: "family woman, girl, girl",
  },
  {
    e: "🗣️",
    k: "speaking head",
  },
  {
    e: "👤",
    k: "bust in silhouette",
  },
  {
    e: "👥",
    k: "busts in silhouette",
  },
  {
    e: "🫂",
    k: "people hugging",
  },
  {
    e: "👣",
    k: "footprints",
  },
  {
    e: "🐵",
    k: "monkey face",
  },
  {
    e: "🐒",
    k: "monkey",
  },
  {
    e: "🦍",
    k: "gorilla",
  },
  {
    e: "🦧",
    k: "orangutan",
  },
  {
    e: "🐶",
    k: "dog face",
  },
  {
    e: "🐕",
    k: "dog",
  },
  {
    e: "🦮",
    k: "guide dog",
  },
  {
    e: "🐕‍🦺",
    k: "service dog",
  },
  {
    e: "🐩",
    k: "poodle",
  },
  {
    e: "🐺",
    k: "wolf",
  },
  {
    e: "🦊",
    k: "fox",
  },
  {
    e: "🦝",
    k: "raccoon",
  },
  {
    e: "🐱",
    k: "cat face",
  },
  {
    e: "🐈",
    k: "cat",
  },
  {
    e: "🐈‍⬛",
    k: "black cat",
  },
  {
    e: "🦁",
    k: "lion",
  },
  {
    e: "🐯",
    k: "tiger face",
  },
  {
    e: "🐅",
    k: "tiger",
  },
  {
    e: "🐆",
    k: "leopard",
  },
  {
    e: "🐴",
    k: "horse face",
  },
  {
    e: "🫎",
    k: "moose",
  },
  {
    e: "🫏",
    k: "donkey",
  },
  {
    e: "🐎",
    k: "horse",
  },
  {
    e: "🦄",
    k: "unicorn",
  },
  {
    e: "🦓",
    k: "zebra",
  },
  {
    e: "🦌",
    k: "deer",
  },
  {
    e: "🦬",
    k: "bison",
  },
  {
    e: "🐮",
    k: "cow face",
  },
  {
    e: "🐂",
    k: "ox",
  },
  {
    e: "🐃",
    k: "water buffalo",
  },
  {
    e: "🐄",
    k: "cow",
  },
  {
    e: "🐷",
    k: "pig face",
  },
  {
    e: "🐖",
    k: "pig",
  },
  {
    e: "🐗",
    k: "boar",
  },
  {
    e: "🐽",
    k: "pig nose",
  },
  {
    e: "🐏",
    k: "ram",
  },
  {
    e: "🐑",
    k: "ewe",
  },
  {
    e: "🐐",
    k: "goat",
  },
  {
    e: "🐪",
    k: "camel",
  },
  {
    e: "🐫",
    k: "two-hump camel",
  },
  {
    e: "🦙",
    k: "llama",
  },
  {
    e: "🦒",
    k: "giraffe",
  },
  {
    e: "🐘",
    k: "elephant",
  },
  {
    e: "🦣",
    k: "mammoth",
  },
  {
    e: "🦏",
    k: "rhinoceros",
  },
  {
    e: "🦛",
    k: "hippopotamus",
  },
  {
    e: "🐭",
    k: "mouse face",
  },
  {
    e: "🐁",
    k: "mouse",
  },
  {
    e: "🐀",
    k: "rat",
  },
  {
    e: "🐹",
    k: "hamster",
  },
  {
    e: "🐰",
    k: "rabbit face",
  },
  {
    e: "🐇",
    k: "rabbit",
  },
  {
    e: "🐿️",
    k: "chipmunk",
  },
  {
    e: "🦫",
    k: "beaver",
  },
  {
    e: "🦔",
    k: "hedgehog",
  },
  {
    e: "🦇",
    k: "bat",
  },
  {
    e: "🐻",
    k: "bear",
  },
  {
    e: "🐻‍❄️",
    k: "polar bear",
  },
  {
    e: "🐨",
    k: "koala",
  },
  {
    e: "🐼",
    k: "panda",
  },
  {
    e: "🦥",
    k: "sloth",
  },
  {
    e: "🦦",
    k: "otter",
  },
  {
    e: "🦨",
    k: "skunk",
  },
  {
    e: "🦘",
    k: "kangaroo",
  },
  {
    e: "🦡",
    k: "badger",
  },
  {
    e: "🐾",
    k: "paw prints",
  },
  {
    e: "🦃",
    k: "turkey",
  },
  {
    e: "🐔",
    k: "chicken",
  },
  {
    e: "🐓",
    k: "rooster",
  },
  {
    e: "🐣",
    k: "hatching chick",
  },
  {
    e: "🐤",
    k: "baby chick",
  },
  {
    e: "🐥",
    k: "front-facing baby chick",
  },
  {
    e: "🐦",
    k: "bird",
  },
  {
    e: "🐧",
    k: "penguin",
  },
  {
    e: "🕊️",
    k: "dove",
  },
  {
    e: "🦅",
    k: "eagle",
  },
  {
    e: "🦆",
    k: "duck",
  },
  {
    e: "🦢",
    k: "swan",
  },
  {
    e: "🦉",
    k: "owl",
  },
  {
    e: "🦤",
    k: "dodo",
  },
  {
    e: "🪶",
    k: "feather",
  },
  {
    e: "🦩",
    k: "flamingo",
  },
  {
    e: "🦚",
    k: "peacock",
  },
  {
    e: "🦜",
    k: "parrot",
  },
  {
    e: "🪽",
    k: "wing",
  },
  {
    e: "🐦‍⬛",
    k: "black bird",
  },
  {
    e: "🪿",
    k: "goose",
  },
  {
    e: "🐸",
    k: "frog",
  },
  {
    e: "🐊",
    k: "crocodile",
  },
  {
    e: "🐢",
    k: "turtle",
  },
  {
    e: "🦎",
    k: "lizard",
  },
  {
    e: "🐍",
    k: "snake",
  },
  {
    e: "🐲",
    k: "dragon face",
  },
  {
    e: "🐉",
    k: "dragon",
  },
  {
    e: "🦕",
    k: "sauropod",
  },
  {
    e: "🦖",
    k: "T-Rex",
  },
  {
    e: "🐳",
    k: "spouting whale",
  },
  {
    e: "🐋",
    k: "whale",
  },
  {
    e: "🐬",
    k: "dolphin",
  },
  {
    e: "🦭",
    k: "seal",
  },
  {
    e: "🐟",
    k: "fish",
  },
  {
    e: "🐠",
    k: "tropical fish",
  },
  {
    e: "🐡",
    k: "blowfish",
  },
  {
    e: "🦈",
    k: "shark",
  },
  {
    e: "🐙",
    k: "octopus",
  },
  {
    e: "🐚",
    k: "spiral shell",
  },
  {
    e: "🪸",
    k: "coral",
  },
  {
    e: "🪼",
    k: "jellyfish",
  },
  {
    e: "🐌",
    k: "snail",
  },
  {
    e: "🦋",
    k: "butterfly",
  },
  {
    e: "🐛",
    k: "bug",
  },
  {
    e: "🐜",
    k: "ant",
  },
  {
    e: "🐝",
    k: "honeybee",
  },
  {
    e: "🪲",
    k: "beetle",
  },
  {
    e: "🐞",
    k: "lady beetle",
  },
  {
    e: "🦗",
    k: "cricket",
  },
  {
    e: "🪳",
    k: "cockroach",
  },
  {
    e: "🕷️",
    k: "spider",
  },
  {
    e: "🕸️",
    k: "spider web",
  },
  {
    e: "🦂",
    k: "scorpion",
  },
  {
    e: "🦟",
    k: "mosquito",
  },
  {
    e: "🪰",
    k: "fly",
  },
  {
    e: "🪱",
    k: "worm",
  },
  {
    e: "🦠",
    k: "microbe",
  },
  {
    e: "💐",
    k: "bouquet",
  },
  {
    e: "🌸",
    k: "cherry blossom",
  },
  {
    e: "💮",
    k: "white flower",
  },
  {
    e: "🪷",
    k: "lotus",
  },
  {
    e: "🏵️",
    k: "rosette",
  },
  {
    e: "🌹",
    k: "rose",
  },
  {
    e: "🥀",
    k: "wilted flower",
  },
  {
    e: "🌺",
    k: "hibiscus",
  },
  {
    e: "🌻",
    k: "sunflower",
  },
  {
    e: "🌼",
    k: "blossom",
  },
  {
    e: "🌷",
    k: "tulip",
  },
  {
    e: "🪻",
    k: "hyacinth",
  },
  {
    e: "🌱",
    k: "seedling",
  },
  {
    e: "🪴",
    k: "potted plant",
  },
  {
    e: "🌲",
    k: "evergreen tree",
  },
  {
    e: "🌳",
    k: "deciduous tree",
  },
  {
    e: "🌴",
    k: "palm tree",
  },
  {
    e: "🌵",
    k: "cactus",
  },
  {
    e: "🌾",
    k: "sheaf of rice",
  },
  {
    e: "🌿",
    k: "herb",
  },
  {
    e: "☘️",
    k: "shamrock",
  },
  {
    e: "🍀",
    k: "four leaf clover",
  },
  {
    e: "🍁",
    k: "maple leaf",
  },
  {
    e: "🍂",
    k: "fallen leaf",
  },
  {
    e: "🍃",
    k: "leaf fluttering in wind",
  },
  {
    e: "🪹",
    k: "empty nest",
  },
  {
    e: "🪺",
    k: "nest with eggs",
  },
  {
    e: "🍄",
    k: "mushroom",
  },
  {
    e: "🍇",
    k: "grapes",
  },
  {
    e: "🍈",
    k: "melon",
  },
  {
    e: "🍉",
    k: "watermelon",
  },
  {
    e: "🍊",
    k: "tangerine",
  },
  {
    e: "🍋",
    k: "lemon",
  },
  {
    e: "🍌",
    k: "banana",
  },
  {
    e: "🍍",
    k: "pineapple",
  },
  {
    e: "🥭",
    k: "mango",
  },
  {
    e: "🍎",
    k: "red apple",
  },
  {
    e: "🍏",
    k: "green apple",
  },
  {
    e: "🍐",
    k: "pear",
  },
  {
    e: "🍑",
    k: "peach",
  },
  {
    e: "🍒",
    k: "cherries",
  },
  {
    e: "🍓",
    k: "strawberry",
  },
  {
    e: "🫐",
    k: "blueberries",
  },
  {
    e: "🥝",
    k: "kiwi fruit",
  },
  {
    e: "🍅",
    k: "tomato",
  },
  {
    e: "🫒",
    k: "olive",
  },
  {
    e: "🥥",
    k: "coconut",
  },
  {
    e: "🥑",
    k: "avocado",
  },
  {
    e: "🍆",
    k: "eggplant",
  },
  {
    e: "🥔",
    k: "potato",
  },
  {
    e: "🥕",
    k: "carrot",
  },
  {
    e: "🌽",
    k: "ear of corn",
  },
  {
    e: "🌶️",
    k: "hot pepper",
  },
  {
    e: "🫑",
    k: "bell pepper",
  },
  {
    e: "🥒",
    k: "cucumber",
  },
  {
    e: "🥬",
    k: "leafy green",
  },
  {
    e: "🥦",
    k: "broccoli",
  },
  {
    e: "🧄",
    k: "garlic",
  },
  {
    e: "🧅",
    k: "onion",
  },
  {
    e: "🥜",
    k: "peanuts",
  },
  {
    e: "🫘",
    k: "beans",
  },
  {
    e: "🌰",
    k: "chestnut",
  },
  {
    e: "🫚",
    k: "ginger root",
  },
  {
    e: "🫛",
    k: "pea pod",
  },
  {
    e: "🍞",
    k: "bread",
  },
  {
    e: "🥐",
    k: "croissant",
  },
  {
    e: "🥖",
    k: "baguette bread",
  },
  {
    e: "🫓",
    k: "flatbread",
  },
  {
    e: "🥨",
    k: "pretzel",
  },
  {
    e: "🥯",
    k: "bagel",
  },
  {
    e: "🥞",
    k: "pancakes",
  },
  {
    e: "🧇",
    k: "waffle",
  },
  {
    e: "🧀",
    k: "cheese wedge",
  },
  {
    e: "🍖",
    k: "meat on bone",
  },
  {
    e: "🍗",
    k: "poultry leg",
  },
  {
    e: "🥩",
    k: "cut of meat",
  },
  {
    e: "🥓",
    k: "bacon",
  },
  {
    e: "🍔",
    k: "hamburger",
  },
  {
    e: "🍟",
    k: "french fries",
  },
  {
    e: "🍕",
    k: "pizza",
  },
  {
    e: "🌭",
    k: "hot dog",
  },
  {
    e: "🥪",
    k: "sandwich",
  },
  {
    e: "🌮",
    k: "taco",
  },
  {
    e: "🌯",
    k: "burrito",
  },
  {
    e: "🫔",
    k: "tamale",
  },
  {
    e: "🥙",
    k: "stuffed flatbread",
  },
  {
    e: "🧆",
    k: "falafel",
  },
  {
    e: "🥚",
    k: "egg",
  },
  {
    e: "🍳",
    k: "cooking",
  },
  {
    e: "🥘",
    k: "shallow pan of food",
  },
  {
    e: "🍲",
    k: "pot of food",
  },
  {
    e: "🫕",
    k: "fondue",
  },
  {
    e: "🥣",
    k: "bowl with spoon",
  },
  {
    e: "🥗",
    k: "green salad",
  },
  {
    e: "🍿",
    k: "popcorn",
  },
  {
    e: "🧈",
    k: "butter",
  },
  {
    e: "🧂",
    k: "salt",
  },
  {
    e: "🥫",
    k: "canned food",
  },
  {
    e: "🍱",
    k: "bento box",
  },
  {
    e: "🍘",
    k: "rice cracker",
  },
  {
    e: "🍙",
    k: "rice ball",
  },
  {
    e: "🍚",
    k: "cooked rice",
  },
  {
    e: "🍛",
    k: "curry rice",
  },
  {
    e: "🍜",
    k: "steaming bowl",
  },
  {
    e: "🍝",
    k: "spaghetti",
  },
  {
    e: "🍠",
    k: "roasted sweet potato",
  },
  {
    e: "🍢",
    k: "oden",
  },
  {
    e: "🍣",
    k: "sushi",
  },
  {
    e: "🍤",
    k: "fried shrimp",
  },
  {
    e: "🍥",
    k: "fish cake with swirl",
  },
  {
    e: "🥮",
    k: "moon cake",
  },
  {
    e: "🍡",
    k: "dango",
  },
  {
    e: "🥟",
    k: "dumpling",
  },
  {
    e: "🥠",
    k: "fortune cookie",
  },
  {
    e: "🥡",
    k: "takeout box",
  },
  {
    e: "🦀",
    k: "crab",
  },
  {
    e: "🦞",
    k: "lobster",
  },
  {
    e: "🦐",
    k: "shrimp",
  },
  {
    e: "🦑",
    k: "squid",
  },
  {
    e: "🦪",
    k: "oyster",
  },
  {
    e: "🍦",
    k: "soft ice cream",
  },
  {
    e: "🍧",
    k: "shaved ice",
  },
  {
    e: "🍨",
    k: "ice cream",
  },
  {
    e: "🍩",
    k: "doughnut",
  },
  {
    e: "🍪",
    k: "cookie",
  },
  {
    e: "🎂",
    k: "birthday cake",
  },
  {
    e: "🍰",
    k: "shortcake",
  },
  {
    e: "🧁",
    k: "cupcake",
  },
  {
    e: "🥧",
    k: "pie",
  },
  {
    e: "🍫",
    k: "chocolate bar",
  },
  {
    e: "🍬",
    k: "candy",
  },
  {
    e: "🍭",
    k: "lollipop",
  },
  {
    e: "🍮",
    k: "custard",
  },
  {
    e: "🍯",
    k: "honey pot",
  },
  {
    e: "🍼",
    k: "baby bottle",
  },
  {
    e: "🥛",
    k: "glass of milk",
  },
  {
    e: "☕",
    k: "hot beverage",
  },
  {
    e: "🫖",
    k: "teapot",
  },
  {
    e: "🍵",
    k: "teacup without handle",
  },
  {
    e: "🍶",
    k: "sake",
  },
  {
    e: "🍾",
    k: "bottle with popping cork",
  },
  {
    e: "🍷",
    k: "wine glass",
  },
  {
    e: "🍸",
    k: "cocktail glass",
  },
  {
    e: "🍹",
    k: "tropical drink",
  },
  {
    e: "🍺",
    k: "beer mug",
  },
  {
    e: "🍻",
    k: "clinking beer mugs",
  },
  {
    e: "🥂",
    k: "clinking glasses",
  },
  {
    e: "🥃",
    k: "tumbler glass",
  },
  {
    e: "🫗",
    k: "pouring liquid",
  },
  {
    e: "🥤",
    k: "cup with straw",
  },
  {
    e: "🧋",
    k: "bubble tea",
  },
  {
    e: "🧃",
    k: "beverage box",
  },
  {
    e: "🧉",
    k: "mate",
  },
  {
    e: "🧊",
    k: "ice",
  },
  {
    e: "🥢",
    k: "chopsticks",
  },
  {
    e: "🍽️",
    k: "fork and knife with plate",
  },
  {
    e: "🍴",
    k: "fork and knife",
  },
  {
    e: "🥄",
    k: "spoon",
  },
  {
    e: "🔪",
    k: "kitchen knife",
  },
  {
    e: "🫙",
    k: "jar",
  },
  {
    e: "🏺",
    k: "amphora",
  },
  {
    e: "🌍",
    k: "globe showing Europe-Africa",
  },
  {
    e: "🌎",
    k: "globe showing Americas",
  },
  {
    e: "🌏",
    k: "globe showing Asia-Australia",
  },
  {
    e: "🌐",
    k: "globe with meridians",
  },
  {
    e: "🗺️",
    k: "world map",
  },
  {
    e: "🗾",
    k: "map of Japan",
  },
  {
    e: "🧭",
    k: "compass",
  },
  {
    e: "🏔️",
    k: "snow-capped mountain",
  },
  {
    e: "⛰️",
    k: "mountain",
  },
  {
    e: "🌋",
    k: "volcano",
  },
  {
    e: "🗻",
    k: "mount fuji",
  },
  {
    e: "🏕️",
    k: "camping",
  },
  {
    e: "🏖️",
    k: "beach with umbrella",
  },
  {
    e: "🏜️",
    k: "desert",
  },
  {
    e: "🏝️",
    k: "desert island",
  },
  {
    e: "🏞️",
    k: "national park",
  },
  {
    e: "🏟️",
    k: "stadium",
  },
  {
    e: "🏛️",
    k: "classical building",
  },
  {
    e: "🏗️",
    k: "building construction",
  },
  {
    e: "🧱",
    k: "brick",
  },
  {
    e: "🪨",
    k: "rock",
  },
  {
    e: "🪵",
    k: "wood",
  },
  {
    e: "🛖",
    k: "hut",
  },
  {
    e: "🏘️",
    k: "houses",
  },
  {
    e: "🏚️",
    k: "derelict house",
  },
  {
    e: "🏠",
    k: "house",
  },
  {
    e: "🏡",
    k: "house with garden",
  },
  {
    e: "🏢",
    k: "office building",
  },
  {
    e: "🏣",
    k: "Japanese post office",
  },
  {
    e: "🏤",
    k: "post office",
  },
  {
    e: "🏥",
    k: "hospital",
  },
  {
    e: "🏦",
    k: "bank",
  },
  {
    e: "🏨",
    k: "hotel",
  },
  {
    e: "🏩",
    k: "love hotel",
  },
  {
    e: "🏪",
    k: "convenience store",
  },
  {
    e: "🏫",
    k: "school",
  },
  {
    e: "🏬",
    k: "department store",
  },
  {
    e: "🏭",
    k: "factory",
  },
  {
    e: "🏯",
    k: "Japanese castle",
  },
  {
    e: "🏰",
    k: "castle",
  },
  {
    e: "💒",
    k: "wedding",
  },
  {
    e: "🗼",
    k: "Tokyo tower",
  },
  {
    e: "🗽",
    k: "Statue of Liberty",
  },
  {
    e: "⛪",
    k: "church",
  },
  {
    e: "🕌",
    k: "mosque",
  },
  {
    e: "🛕",
    k: "hindu temple",
  },
  {
    e: "🕍",
    k: "synagogue",
  },
  {
    e: "⛩️",
    k: "shinto shrine",
  },
  {
    e: "🕋",
    k: "kaaba",
  },
  {
    e: "⛲",
    k: "fountain",
  },
  {
    e: "⛺",
    k: "tent",
  },
  {
    e: "🌁",
    k: "foggy",
  },
  {
    e: "🌃",
    k: "night with stars",
  },
  {
    e: "🏙️",
    k: "cityscape",
  },
  {
    e: "🌄",
    k: "sunrise over mountains",
  },
  {
    e: "🌅",
    k: "sunrise",
  },
  {
    e: "🌆",
    k: "cityscape at dusk",
  },
  {
    e: "🌇",
    k: "sunset",
  },
  {
    e: "🌉",
    k: "bridge at night",
  },
  {
    e: "♨️",
    k: "hot springs",
  },
  {
    e: "🎠",
    k: "carousel horse",
  },
  {
    e: "🛝",
    k: "playground slide",
  },
  {
    e: "🎡",
    k: "ferris wheel",
  },
  {
    e: "🎢",
    k: "roller coaster",
  },
  {
    e: "💈",
    k: "barber pole",
  },
  {
    e: "🎪",
    k: "circus tent",
  },
  {
    e: "🚂",
    k: "locomotive",
  },
  {
    e: "🚃",
    k: "railway car",
  },
  {
    e: "🚄",
    k: "high-speed train",
  },
  {
    e: "🚅",
    k: "bullet train",
  },
  {
    e: "🚆",
    k: "train",
  },
  {
    e: "🚇",
    k: "metro",
  },
  {
    e: "🚈",
    k: "light rail",
  },
  {
    e: "🚉",
    k: "station",
  },
  {
    e: "🚊",
    k: "tram",
  },
  {
    e: "🚝",
    k: "monorail",
  },
  {
    e: "🚞",
    k: "mountain railway",
  },
  {
    e: "🚋",
    k: "tram car",
  },
  {
    e: "🚌",
    k: "bus",
  },
  {
    e: "🚍",
    k: "oncoming bus",
  },
  {
    e: "🚎",
    k: "trolleybus",
  },
  {
    e: "🚐",
    k: "minibus",
  },
  {
    e: "🚑",
    k: "ambulance",
  },
  {
    e: "🚒",
    k: "fire engine",
  },
  {
    e: "🚓",
    k: "police car",
  },
  {
    e: "🚔",
    k: "oncoming police car",
  },
  {
    e: "🚕",
    k: "taxi",
  },
  {
    e: "🚖",
    k: "oncoming taxi",
  },
  {
    e: "🚗",
    k: "automobile",
  },
  {
    e: "🚘",
    k: "oncoming automobile",
  },
  {
    e: "🚙",
    k: "sport utility vehicle",
  },
  {
    e: "🛻",
    k: "pickup truck",
  },
  {
    e: "🚚",
    k: "delivery truck",
  },
  {
    e: "🚛",
    k: "articulated lorry",
  },
  {
    e: "🚜",
    k: "tractor",
  },
  {
    e: "🏎️",
    k: "racing car",
  },
  {
    e: "🏍️",
    k: "motorcycle",
  },
  {
    e: "🛵",
    k: "motor scooter",
  },
  {
    e: "🦽",
    k: "manual wheelchair",
  },
  {
    e: "🦼",
    k: "motorized wheelchair",
  },
  {
    e: "🛺",
    k: "auto rickshaw",
  },
  {
    e: "🚲",
    k: "bicycle",
  },
  {
    e: "🛴",
    k: "kick scooter",
  },
  {
    e: "🛹",
    k: "skateboard",
  },
  {
    e: "🛼",
    k: "roller skate",
  },
  {
    e: "🚏",
    k: "bus stop",
  },
  {
    e: "🛣️",
    k: "motorway",
  },
  {
    e: "🛤️",
    k: "railway track",
  },
  {
    e: "🛢️",
    k: "oil drum",
  },
  {
    e: "⛽",
    k: "fuel pump",
  },
  {
    e: "🛞",
    k: "wheel",
  },
  {
    e: "🚨",
    k: "police car light",
  },
  {
    e: "🚥",
    k: "horizontal traffic light",
  },
  {
    e: "🚦",
    k: "vertical traffic light",
  },
  {
    e: "🛑",
    k: "stop sign",
  },
  {
    e: "🚧",
    k: "construction",
  },
  {
    e: "⚓",
    k: "anchor",
  },
  {
    e: "🛟",
    k: "ring buoy",
  },
  {
    e: "⛵",
    k: "sailboat",
  },
  {
    e: "🛶",
    k: "canoe",
  },
  {
    e: "🚤",
    k: "speedboat",
  },
  {
    e: "🛳️",
    k: "passenger ship",
  },
  {
    e: "⛴️",
    k: "ferry",
  },
  {
    e: "🛥️",
    k: "motor boat",
  },
  {
    e: "🚢",
    k: "ship",
  },
  {
    e: "✈️",
    k: "airplane",
  },
  {
    e: "🛩️",
    k: "small airplane",
  },
  {
    e: "🛫",
    k: "airplane departure",
  },
  {
    e: "🛬",
    k: "airplane arrival",
  },
  {
    e: "🪂",
    k: "parachute",
  },
  {
    e: "💺",
    k: "seat",
  },
  {
    e: "🚁",
    k: "helicopter",
  },
  {
    e: "🚟",
    k: "suspension railway",
  },
  {
    e: "🚠",
    k: "mountain cableway",
  },
  {
    e: "🚡",
    k: "aerial tramway",
  },
  {
    e: "🛰️",
    k: "satellite",
  },
  {
    e: "🚀",
    k: "rocket",
  },
  {
    e: "🛸",
    k: "flying saucer",
  },
  {
    e: "🛎️",
    k: "bellhop bell",
  },
  {
    e: "🧳",
    k: "luggage",
  },
  {
    e: "⌛",
    k: "hourglass done",
  },
  {
    e: "⏳",
    k: "hourglass not done",
  },
  {
    e: "⌚",
    k: "watch",
  },
  {
    e: "⏰",
    k: "alarm clock",
  },
  {
    e: "⏱️",
    k: "stopwatch",
  },
  {
    e: "⏲️",
    k: "timer clock",
  },
  {
    e: "🕰️",
    k: "mantelpiece clock",
  },
  {
    e: "🕛",
    k: "twelve o’clock",
  },
  {
    e: "🕧",
    k: "twelve-thirty",
  },
  {
    e: "🕐",
    k: "one o’clock",
  },
  {
    e: "🕜",
    k: "one-thirty",
  },
  {
    e: "🕑",
    k: "two o’clock",
  },
  {
    e: "🕝",
    k: "two-thirty",
  },
  {
    e: "🕒",
    k: "three o’clock",
  },
  {
    e: "🕞",
    k: "three-thirty",
  },
  {
    e: "🕓",
    k: "four o’clock",
  },
  {
    e: "🕟",
    k: "four-thirty",
  },
  {
    e: "🕔",
    k: "five o’clock",
  },
  {
    e: "🕠",
    k: "five-thirty",
  },
  {
    e: "🕕",
    k: "six o’clock",
  },
  {
    e: "🕡",
    k: "six-thirty",
  },
  {
    e: "🕖",
    k: "seven o’clock",
  },
  {
    e: "🕢",
    k: "seven-thirty",
  },
  {
    e: "🕗",
    k: "eight o’clock",
  },
  {
    e: "🕣",
    k: "eight-thirty",
  },
  {
    e: "🕘",
    k: "nine o’clock",
  },
  {
    e: "🕤",
    k: "nine-thirty",
  },
  {
    e: "🕙",
    k: "ten o’clock",
  },
  {
    e: "🕥",
    k: "ten-thirty",
  },
  {
    e: "🕚",
    k: "eleven o’clock",
  },
  {
    e: "🕦",
    k: "eleven-thirty",
  },
  {
    e: "🌑",
    k: "new moon",
  },
  {
    e: "🌒",
    k: "waxing crescent moon",
  },
  {
    e: "🌓",
    k: "first quarter moon",
  },
  {
    e: "🌔",
    k: "waxing gibbous moon",
  },
  {
    e: "🌕",
    k: "full moon",
  },
  {
    e: "🌖",
    k: "waning gibbous moon",
  },
  {
    e: "🌗",
    k: "last quarter moon",
  },
  {
    e: "🌘",
    k: "waning crescent moon",
  },
  {
    e: "🌙",
    k: "crescent moon",
  },
  {
    e: "🌚",
    k: "new moon face",
  },
  {
    e: "🌛",
    k: "first quarter moon face",
  },
  {
    e: "🌜",
    k: "last quarter moon face",
  },
  {
    e: "🌡️",
    k: "thermometer",
  },
  {
    e: "☀️",
    k: "sun",
  },
  {
    e: "🌝",
    k: "full moon face",
  },
  {
    e: "🌞",
    k: "sun with face",
  },
  {
    e: "🪐",
    k: "ringed planet",
  },
  {
    e: "⭐",
    k: "star",
  },
  {
    e: "🌟",
    k: "glowing star",
  },
  {
    e: "🌠",
    k: "shooting star",
  },
  {
    e: "🌌",
    k: "milky way",
  },
  {
    e: "☁️",
    k: "cloud",
  },
  {
    e: "⛅",
    k: "sun behind cloud",
  },
  {
    e: "⛈️",
    k: "cloud with lightning and rain",
  },
  {
    e: "🌤️",
    k: "sun behind small cloud",
  },
  {
    e: "🌥️",
    k: "sun behind large cloud",
  },
  {
    e: "🌦️",
    k: "sun behind rain cloud",
  },
  {
    e: "🌧️",
    k: "cloud with rain",
  },
  {
    e: "🌨️",
    k: "cloud with snow",
  },
  {
    e: "🌩️",
    k: "cloud with lightning",
  },
  {
    e: "🌪️",
    k: "tornado",
  },
  {
    e: "🌫️",
    k: "fog",
  },
  {
    e: "🌬️",
    k: "wind face",
  },
  {
    e: "🌀",
    k: "cyclone",
  },
  {
    e: "🌈",
    k: "rainbow",
  },
  {
    e: "🌂",
    k: "closed umbrella",
  },
  {
    e: "☂️",
    k: "umbrella",
  },
  {
    e: "☔",
    k: "umbrella with rain drops",
  },
  {
    e: "⛱️",
    k: "umbrella on ground",
  },
  {
    e: "⚡",
    k: "high voltage",
  },
  {
    e: "❄️",
    k: "snowflake",
  },
  {
    e: "☃️",
    k: "snowman",
  },
  {
    e: "⛄",
    k: "snowman without snow",
  },
  {
    e: "☄️",
    k: "comet",
  },
  {
    e: "🔥",
    k: "fire",
  },
  {
    e: "💧",
    k: "droplet",
  },
  {
    e: "🌊",
    k: "water wave",
  },
  {
    e: "🎃",
    k: "jack-o-lantern",
  },
  {
    e: "🎄",
    k: "Christmas tree",
  },
  {
    e: "🎆",
    k: "fireworks",
  },
  {
    e: "🎇",
    k: "sparkler",
  },
  {
    e: "🧨",
    k: "firecracker",
  },
  {
    e: "✨",
    k: "sparkles",
  },
  {
    e: "🎈",
    k: "balloon",
  },
  {
    e: "🎉",
    k: "party popper",
  },
  {
    e: "🎊",
    k: "confetti ball",
  },
  {
    e: "🎋",
    k: "tanabata tree",
  },
  {
    e: "🎍",
    k: "pine decoration",
  },
  {
    e: "🎎",
    k: "Japanese dolls",
  },
  {
    e: "🎏",
    k: "carp streamer",
  },
  {
    e: "🎐",
    k: "wind chime",
  },
  {
    e: "🎑",
    k: "moon viewing ceremony",
  },
  {
    e: "🧧",
    k: "red envelope",
  },
  {
    e: "🎀",
    k: "ribbon",
  },
  {
    e: "🎁",
    k: "wrapped gift",
  },
  {
    e: "🎗️",
    k: "reminder ribbon",
  },
  {
    e: "🎟️",
    k: "admission tickets",
  },
  {
    e: "🎫",
    k: "ticket",
  },
  {
    e: "🎖️",
    k: "military medal",
  },
  {
    e: "🏆",
    k: "trophy",
  },
  {
    e: "🏅",
    k: "sports medal",
  },
  {
    e: "🥇",
    k: "1st place medal",
  },
  {
    e: "🥈",
    k: "2nd place medal",
  },
  {
    e: "🥉",
    k: "3rd place medal",
  },
  {
    e: "⚽",
    k: "soccer ball",
  },
  {
    e: "⚾",
    k: "baseball",
  },
  {
    e: "🥎",
    k: "softball",
  },
  {
    e: "🏀",
    k: "basketball",
  },
  {
    e: "🏐",
    k: "volleyball",
  },
  {
    e: "🏈",
    k: "american football",
  },
  {
    e: "🏉",
    k: "rugby football",
  },
  {
    e: "🎾",
    k: "tennis",
  },
  {
    e: "🥏",
    k: "flying disc",
  },
  {
    e: "🎳",
    k: "bowling",
  },
  {
    e: "🏏",
    k: "cricket game",
  },
  {
    e: "🏑",
    k: "field hockey",
  },
  {
    e: "🏒",
    k: "ice hockey",
  },
  {
    e: "🥍",
    k: "lacrosse",
  },
  {
    e: "🏓",
    k: "ping pong",
  },
  {
    e: "🏸",
    k: "badminton",
  },
  {
    e: "🥊",
    k: "boxing glove",
  },
  {
    e: "🥋",
    k: "martial arts uniform",
  },
  {
    e: "🥅",
    k: "goal net",
  },
  {
    e: "⛳",
    k: "flag in hole",
  },
  {
    e: "⛸️",
    k: "ice skate",
  },
  {
    e: "🎣",
    k: "fishing pole",
  },
  {
    e: "🤿",
    k: "diving mask",
  },
  {
    e: "🎽",
    k: "running shirt",
  },
  {
    e: "🎿",
    k: "skis",
  },
  {
    e: "🛷",
    k: "sled",
  },
  {
    e: "🥌",
    k: "curling stone",
  },
  {
    e: "🎯",
    k: "bullseye",
  },
  {
    e: "🪀",
    k: "yo-yo",
  },
  {
    e: "🪁",
    k: "kite",
  },
  {
    e: "🔫",
    k: "water pistol",
  },
  {
    e: "🎱",
    k: "pool 8 ball",
  },
  {
    e: "🔮",
    k: "crystal ball",
  },
  {
    e: "🪄",
    k: "magic wand",
  },
  {
    e: "🎮",
    k: "video game",
  },
  {
    e: "🕹️",
    k: "joystick",
  },
  {
    e: "🎰",
    k: "slot machine",
  },
  {
    e: "🎲",
    k: "game die",
  },
  {
    e: "🧩",
    k: "puzzle piece",
  },
  {
    e: "🧸",
    k: "teddy bear",
  },
  {
    e: "🪅",
    k: "piñata",
  },
  {
    e: "🪩",
    k: "mirror ball",
  },
  {
    e: "🪆",
    k: "nesting dolls",
  },
  {
    e: "♠️",
    k: "spade suit",
  },
  {
    e: "♥️",
    k: "heart suit",
  },
  {
    e: "♦️",
    k: "diamond suit",
  },
  {
    e: "♣️",
    k: "club suit",
  },
  {
    e: "♟️",
    k: "chess pawn",
  },
  {
    e: "🃏",
    k: "joker",
  },
  {
    e: "🀄",
    k: "mahjong red dragon",
  },
  {
    e: "🎴",
    k: "flower playing cards",
  },
  {
    e: "🎭",
    k: "performing arts",
  },
  {
    e: "🖼️",
    k: "framed picture",
  },
  {
    e: "🎨",
    k: "artist palette",
  },
  {
    e: "🧵",
    k: "thread",
  },
  {
    e: "🪡",
    k: "sewing needle",
  },
  {
    e: "🧶",
    k: "yarn",
  },
  {
    e: "🪢",
    k: "knot",
  },
  {
    e: "👓",
    k: "glasses",
  },
  {
    e: "🕶️",
    k: "sunglasses",
  },
  {
    e: "🥽",
    k: "goggles",
  },
  {
    e: "🥼",
    k: "lab coat",
  },
  {
    e: "🦺",
    k: "safety vest",
  },
  {
    e: "👔",
    k: "necktie",
  },
  {
    e: "👕",
    k: "t-shirt",
  },
  {
    e: "👖",
    k: "jeans",
  },
  {
    e: "🧣",
    k: "scarf",
  },
  {
    e: "🧤",
    k: "gloves",
  },
  {
    e: "🧥",
    k: "coat",
  },
  {
    e: "🧦",
    k: "socks",
  },
  {
    e: "👗",
    k: "dress",
  },
  {
    e: "👘",
    k: "kimono",
  },
  {
    e: "🥻",
    k: "sari",
  },
  {
    e: "🩱",
    k: "one-piece swimsuit",
  },
  {
    e: "🩲",
    k: "briefs",
  },
  {
    e: "🩳",
    k: "shorts",
  },
  {
    e: "👙",
    k: "bikini",
  },
  {
    e: "👚",
    k: "woman’s clothes",
  },
  {
    e: "🪭",
    k: "folding hand fan",
  },
  {
    e: "👛",
    k: "purse",
  },
  {
    e: "👜",
    k: "handbag",
  },
  {
    e: "👝",
    k: "clutch bag",
  },
  {
    e: "🛍️",
    k: "shopping bags",
  },
  {
    e: "🎒",
    k: "backpack",
  },
  {
    e: "🩴",
    k: "thong sandal",
  },
  {
    e: "👞",
    k: "man’s shoe",
  },
  {
    e: "👟",
    k: "running shoe",
  },
  {
    e: "🥾",
    k: "hiking boot",
  },
  {
    e: "🥿",
    k: "flat shoe",
  },
  {
    e: "👠",
    k: "high-heeled shoe",
  },
  {
    e: "👡",
    k: "woman’s sandal",
  },
  {
    e: "🩰",
    k: "ballet shoes",
  },
  {
    e: "👢",
    k: "woman’s boot",
  },
  {
    e: "🪮",
    k: "hair pick",
  },
  {
    e: "👑",
    k: "crown",
  },
  {
    e: "👒",
    k: "woman’s hat",
  },
  {
    e: "🎩",
    k: "top hat",
  },
  {
    e: "🎓",
    k: "graduation cap",
  },
  {
    e: "🧢",
    k: "billed cap",
  },
  {
    e: "🪖",
    k: "military helmet",
  },
  {
    e: "⛑️",
    k: "rescue worker’s helmet",
  },
  {
    e: "📿",
    k: "prayer beads",
  },
  {
    e: "💄",
    k: "lipstick",
  },
  {
    e: "💍",
    k: "ring",
  },
  {
    e: "💎",
    k: "gem stone",
  },
  {
    e: "🔇",
    k: "muted speaker",
  },
  {
    e: "🔈",
    k: "speaker low volume",
  },
  {
    e: "🔉",
    k: "speaker medium volume",
  },
  {
    e: "🔊",
    k: "speaker high volume",
  },
  {
    e: "📢",
    k: "loudspeaker",
  },
  {
    e: "📣",
    k: "megaphone",
  },
  {
    e: "📯",
    k: "postal horn",
  },
  {
    e: "🔔",
    k: "bell",
  },
  {
    e: "🔕",
    k: "bell with slash",
  },
  {
    e: "🎼",
    k: "musical score",
  },
  {
    e: "🎵",
    k: "musical note",
  },
  {
    e: "🎶",
    k: "musical notes",
  },
  {
    e: "🎙️",
    k: "studio microphone",
  },
  {
    e: "🎚️",
    k: "level slider",
  },
  {
    e: "🎛️",
    k: "control knobs",
  },
  {
    e: "🎤",
    k: "microphone",
  },
  {
    e: "🎧",
    k: "headphone",
  },
  {
    e: "📻",
    k: "radio",
  },
  {
    e: "🎷",
    k: "saxophone",
  },
  {
    e: "🪗",
    k: "accordion",
  },
  {
    e: "🎸",
    k: "guitar",
  },
  {
    e: "🎹",
    k: "musical keyboard",
  },
  {
    e: "🎺",
    k: "trumpet",
  },
  {
    e: "🎻",
    k: "violin",
  },
  {
    e: "🪕",
    k: "banjo",
  },
  {
    e: "🥁",
    k: "drum",
  },
  {
    e: "🪘",
    k: "long drum",
  },
  {
    e: "🪇",
    k: "maracas",
  },
  {
    e: "🪈",
    k: "flute",
  },
  {
    e: "📱",
    k: "mobile phone",
  },
  {
    e: "📲",
    k: "mobile phone with arrow",
  },
  {
    e: "☎️",
    k: "telephone",
  },
  {
    e: "📞",
    k: "telephone receiver",
  },
  {
    e: "📟",
    k: "pager",
  },
  {
    e: "📠",
    k: "fax machine",
  },
  {
    e: "🔋",
    k: "battery",
  },
  {
    e: "🪫",
    k: "low battery",
  },
  {
    e: "🔌",
    k: "electric plug",
  },
  {
    e: "💻",
    k: "laptop",
  },
  {
    e: "🖥️",
    k: "desktop computer",
  },
  {
    e: "🖨️",
    k: "printer",
  },
  {
    e: "⌨️",
    k: "keyboard",
  },
  {
    e: "🖱️",
    k: "computer mouse",
  },
  {
    e: "🖲️",
    k: "trackball",
  },
  {
    e: "💽",
    k: "computer disk",
  },
  {
    e: "💾",
    k: "floppy disk",
  },
  {
    e: "💿",
    k: "optical disk",
  },
  {
    e: "📀",
    k: "dvd",
  },
  {
    e: "🧮",
    k: "abacus",
  },
  {
    e: "🎥",
    k: "movie camera",
  },
  {
    e: "🎞️",
    k: "film frames",
  },
  {
    e: "📽️",
    k: "film projector",
  },
  {
    e: "🎬",
    k: "clapper board",
  },
  {
    e: "📺",
    k: "television",
  },
  {
    e: "📷",
    k: "camera",
  },
  {
    e: "📸",
    k: "camera with flash",
  },
  {
    e: "📹",
    k: "video camera",
  },
  {
    e: "📼",
    k: "videocassette",
  },
  {
    e: "🔍",
    k: "magnifying glass tilted left",
  },
  {
    e: "🔎",
    k: "magnifying glass tilted right",
  },
  {
    e: "🕯️",
    k: "candle",
  },
  {
    e: "💡",
    k: "light bulb",
  },
  {
    e: "🔦",
    k: "flashlight",
  },
  {
    e: "🏮",
    k: "red paper lantern",
  },
  {
    e: "🪔",
    k: "diya lamp",
  },
  {
    e: "📔",
    k: "notebook with decorative cover",
  },
  {
    e: "📕",
    k: "closed book",
  },
  {
    e: "📖",
    k: "open book",
  },
  {
    e: "📗",
    k: "green book",
  },
  {
    e: "📘",
    k: "blue book",
  },
  {
    e: "📙",
    k: "orange book",
  },
  {
    e: "📚",
    k: "books",
  },
  {
    e: "📓",
    k: "notebook",
  },
  {
    e: "📒",
    k: "ledger",
  },
  {
    e: "📃",
    k: "page with curl",
  },
  {
    e: "📜",
    k: "scroll",
  },
  {
    e: "📄",
    k: "page facing up",
  },
  {
    e: "📰",
    k: "newspaper",
  },
  {
    e: "🗞️",
    k: "rolled-up newspaper",
  },
  {
    e: "📑",
    k: "bookmark tabs",
  },
  {
    e: "🔖",
    k: "bookmark",
  },
  {
    e: "🏷️",
    k: "label",
  },
  {
    e: "💰",
    k: "money bag",
  },
  {
    e: "🪙",
    k: "coin",
  },
  {
    e: "💴",
    k: "yen banknote",
  },
  {
    e: "💵",
    k: "dollar banknote",
  },
  {
    e: "💶",
    k: "euro banknote",
  },
  {
    e: "💷",
    k: "pound banknote",
  },
  {
    e: "💸",
    k: "money with wings",
  },
  {
    e: "💳",
    k: "credit card",
  },
  {
    e: "🧾",
    k: "receipt",
  },
  {
    e: "💹",
    k: "chart increasing with yen",
  },
  {
    e: "✉️",
    k: "envelope",
  },
  {
    e: "📧",
    k: "e-mail",
  },
  {
    e: "📨",
    k: "incoming envelope",
  },
  {
    e: "📩",
    k: "envelope with arrow",
  },
  {
    e: "📤",
    k: "outbox tray",
  },
  {
    e: "📥",
    k: "inbox tray",
  },
  {
    e: "📦",
    k: "package",
  },
  {
    e: "📫",
    k: "closed mailbox with raised flag",
  },
  {
    e: "📪",
    k: "closed mailbox with lowered flag",
  },
  {
    e: "📬",
    k: "open mailbox with raised flag",
  },
  {
    e: "📭",
    k: "open mailbox with lowered flag",
  },
  {
    e: "📮",
    k: "postbox",
  },
  {
    e: "🗳️",
    k: "ballot box with ballot",
  },
  {
    e: "✏️",
    k: "pencil",
  },
  {
    e: "✒️",
    k: "black nib",
  },
  {
    e: "🖋️",
    k: "fountain pen",
  },
  {
    e: "🖊️",
    k: "pen",
  },
  {
    e: "🖌️",
    k: "paintbrush",
  },
  {
    e: "🖍️",
    k: "crayon",
  },
  {
    e: "📝",
    k: "memo",
  },
  {
    e: "💼",
    k: "briefcase",
  },
  {
    e: "📁",
    k: "file folder",
  },
  {
    e: "📂",
    k: "open file folder",
  },
  {
    e: "🗂️",
    k: "card index dividers",
  },
  {
    e: "📅",
    k: "calendar",
  },
  {
    e: "📆",
    k: "tear-off calendar",
  },
  {
    e: "🗒️",
    k: "spiral notepad",
  },
  {
    e: "🗓️",
    k: "spiral calendar",
  },
  {
    e: "📇",
    k: "card index",
  },
  {
    e: "📈",
    k: "chart increasing",
  },
  {
    e: "📉",
    k: "chart decreasing",
  },
  {
    e: "📊",
    k: "bar chart",
  },
  {
    e: "📋",
    k: "clipboard",
  },
  {
    e: "📌",
    k: "pushpin",
  },
  {
    e: "📍",
    k: "round pushpin",
  },
  {
    e: "📎",
    k: "paperclip",
  },
  {
    e: "🖇️",
    k: "linked paperclips",
  },
  {
    e: "📏",
    k: "straight ruler",
  },
  {
    e: "📐",
    k: "triangular ruler",
  },
  {
    e: "✂️",
    k: "scissors",
  },
  {
    e: "🗃️",
    k: "card file box",
  },
  {
    e: "🗄️",
    k: "file cabinet",
  },
  {
    e: "🗑️",
    k: "wastebasket",
  },
  {
    e: "🔒",
    k: "locked",
  },
  {
    e: "🔓",
    k: "unlocked",
  },
  {
    e: "🔏",
    k: "locked with pen",
  },
  {
    e: "🔐",
    k: "locked with key",
  },
  {
    e: "🔑",
    k: "key",
  },
  {
    e: "🗝️",
    k: "old key",
  },
  {
    e: "🔨",
    k: "hammer",
  },
  {
    e: "🪓",
    k: "axe",
  },
  {
    e: "⛏️",
    k: "pick",
  },
  {
    e: "⚒️",
    k: "hammer and pick",
  },
  {
    e: "🛠️",
    k: "hammer and wrench",
  },
  {
    e: "🗡️",
    k: "dagger",
  },
  {
    e: "⚔️",
    k: "crossed swords",
  },
  {
    e: "💣",
    k: "bomb",
  },
  {
    e: "🪃",
    k: "boomerang",
  },
  {
    e: "🏹",
    k: "bow and arrow",
  },
  {
    e: "🛡️",
    k: "shield",
  },
  {
    e: "🪚",
    k: "carpentry saw",
  },
  {
    e: "🔧",
    k: "wrench",
  },
  {
    e: "🪛",
    k: "screwdriver",
  },
  {
    e: "🔩",
    k: "nut and bolt",
  },
  {
    e: "⚙️",
    k: "gear",
  },
  {
    e: "🗜️",
    k: "clamp",
  },
  {
    e: "⚖️",
    k: "balance scale",
  },
  {
    e: "🦯",
    k: "white cane",
  },
  {
    e: "🔗",
    k: "link",
  },
  {
    e: "⛓️",
    k: "chains",
  },
  {
    e: "🪝",
    k: "hook",
  },
  {
    e: "🧰",
    k: "toolbox",
  },
  {
    e: "🧲",
    k: "magnet",
  },
  {
    e: "🪜",
    k: "ladder",
  },
  {
    e: "⚗️",
    k: "alembic",
  },
  {
    e: "🧪",
    k: "test tube",
  },
  {
    e: "🧫",
    k: "petri dish",
  },
  {
    e: "🧬",
    k: "dna",
  },
  {
    e: "🔬",
    k: "microscope",
  },
  {
    e: "🔭",
    k: "telescope",
  },
  {
    e: "📡",
    k: "satellite antenna",
  },
  {
    e: "💉",
    k: "syringe",
  },
  {
    e: "🩸",
    k: "drop of blood",
  },
  {
    e: "💊",
    k: "pill",
  },
  {
    e: "🩹",
    k: "adhesive bandage",
  },
  {
    e: "🩼",
    k: "crutch",
  },
  {
    e: "🩺",
    k: "stethoscope",
  },
  {
    e: "🩻",
    k: "x-ray",
  },
  {
    e: "🚪",
    k: "door",
  },
  {
    e: "🛗",
    k: "elevator",
  },
  {
    e: "🪞",
    k: "mirror",
  },
  {
    e: "🪟",
    k: "window",
  },
  {
    e: "🛏️",
    k: "bed",
  },
  {
    e: "🛋️",
    k: "couch and lamp",
  },
  {
    e: "🪑",
    k: "chair",
  },
  {
    e: "🚽",
    k: "toilet",
  },
  {
    e: "🪠",
    k: "plunger",
  },
  {
    e: "🚿",
    k: "shower",
  },
  {
    e: "🛁",
    k: "bathtub",
  },
  {
    e: "🪤",
    k: "mouse trap",
  },
  {
    e: "🪒",
    k: "razor",
  },
  {
    e: "🧴",
    k: "lotion bottle",
  },
  {
    e: "🧷",
    k: "safety pin",
  },
  {
    e: "🧹",
    k: "broom",
  },
  {
    e: "🧺",
    k: "basket",
  },
  {
    e: "🧻",
    k: "roll of paper",
  },
  {
    e: "🪣",
    k: "bucket",
  },
  {
    e: "🧼",
    k: "soap",
  },
  {
    e: "🫧",
    k: "bubbles",
  },
  {
    e: "🪥",
    k: "toothbrush",
  },
  {
    e: "🧽",
    k: "sponge",
  },
  {
    e: "🧯",
    k: "fire extinguisher",
  },
  {
    e: "🛒",
    k: "shopping cart",
  },
  {
    e: "🚬",
    k: "cigarette",
  },
  {
    e: "⚰️",
    k: "coffin",
  },
  {
    e: "🪦",
    k: "headstone",
  },
  {
    e: "⚱️",
    k: "funeral urn",
  },
  {
    e: "🧿",
    k: "nazar amulet",
  },
  {
    e: "🪬",
    k: "hamsa",
  },
  {
    e: "🗿",
    k: "moai",
  },
  {
    e: "🪧",
    k: "placard",
  },
  {
    e: "🪪",
    k: "identification card",
  },
  {
    e: "🏧",
    k: "ATM sign",
  },
  {
    e: "🚮",
    k: "litter in bin sign",
  },
  {
    e: "🚰",
    k: "potable water",
  },
  {
    e: "♿",
    k: "wheelchair symbol",
  },
  {
    e: "🚹",
    k: "men’s room",
  },
  {
    e: "🚺",
    k: "women’s room",
  },
  {
    e: "🚻",
    k: "restroom",
  },
  {
    e: "🚼",
    k: "baby symbol",
  },
  {
    e: "🚾",
    k: "water closet",
  },
  {
    e: "🛂",
    k: "passport control",
  },
  {
    e: "🛃",
    k: "customs",
  },
  {
    e: "🛄",
    k: "baggage claim",
  },
  {
    e: "🛅",
    k: "left luggage",
  },
  {
    e: "⚠️",
    k: "warning",
  },
  {
    e: "🚸",
    k: "children crossing",
  },
  {
    e: "⛔",
    k: "no entry",
  },
  {
    e: "🚫",
    k: "prohibited",
  },
  {
    e: "🚳",
    k: "no bicycles",
  },
  {
    e: "🚭",
    k: "no smoking",
  },
  {
    e: "🚯",
    k: "no littering",
  },
  {
    e: "🚱",
    k: "non-potable water",
  },
  {
    e: "🚷",
    k: "no pedestrians",
  },
  {
    e: "📵",
    k: "no mobile phones",
  },
  {
    e: "🔞",
    k: "no one under eighteen",
  },
  {
    e: "☢️",
    k: "radioactive",
  },
  {
    e: "☣️",
    k: "biohazard",
  },
  {
    e: "⬆️",
    k: "up arrow",
  },
  {
    e: "↗️",
    k: "up-right arrow",
  },
  {
    e: "➡️",
    k: "right arrow",
  },
  {
    e: "↘️",
    k: "down-right arrow",
  },
  {
    e: "⬇️",
    k: "down arrow",
  },
  {
    e: "↙️",
    k: "down-left arrow",
  },
  {
    e: "⬅️",
    k: "left arrow",
  },
  {
    e: "↖️",
    k: "up-left arrow",
  },
  {
    e: "↕️",
    k: "up-down arrow",
  },
  {
    e: "↔️",
    k: "left-right arrow",
  },
  {
    e: "↩️",
    k: "right arrow curving left",
  },
  {
    e: "↪️",
    k: "left arrow curving right",
  },
  {
    e: "⤴️",
    k: "right arrow curving up",
  },
  {
    e: "⤵️",
    k: "right arrow curving down",
  },
  {
    e: "🔃",
    k: "clockwise vertical arrows",
  },
  {
    e: "🔄",
    k: "counterclockwise arrows button",
  },
  {
    e: "🔙",
    k: "BACK arrow",
  },
  {
    e: "🔚",
    k: "END arrow",
  },
  {
    e: "🔛",
    k: "ON! arrow",
  },
  {
    e: "🔜",
    k: "SOON arrow",
  },
  {
    e: "🔝",
    k: "TOP arrow",
  },
  {
    e: "🛐",
    k: "place of worship",
  },
  {
    e: "⚛️",
    k: "atom symbol",
  },
  {
    e: "🕉️",
    k: "om",
  },
  {
    e: "✡️",
    k: "star of David",
  },
  {
    e: "☸️",
    k: "wheel of dharma",
  },
  {
    e: "☯️",
    k: "yin yang",
  },
  {
    e: "✝️",
    k: "latin cross",
  },
  {
    e: "☦️",
    k: "orthodox cross",
  },
  {
    e: "☪️",
    k: "star and crescent",
  },
  {
    e: "☮️",
    k: "peace symbol",
  },
  {
    e: "🕎",
    k: "menorah",
  },
  {
    e: "🔯",
    k: "dotted six-pointed star",
  },
  {
    e: "🪯",
    k: "khanda",
  },
  {
    e: "♈",
    k: "Aries",
  },
  {
    e: "♉",
    k: "Taurus",
  },
  {
    e: "♊",
    k: "Gemini",
  },
  {
    e: "♋",
    k: "Cancer",
  },
  {
    e: "♌",
    k: "Leo",
  },
  {
    e: "♍",
    k: "Virgo",
  },
  {
    e: "♎",
    k: "Libra",
  },
  {
    e: "♏",
    k: "Scorpio",
  },
  {
    e: "♐",
    k: "Sagittarius",
  },
  {
    e: "♑",
    k: "Capricorn",
  },
  {
    e: "♒",
    k: "Aquarius",
  },
  {
    e: "♓",
    k: "Pisces",
  },
  {
    e: "⛎",
    k: "Ophiuchus",
  },
  {
    e: "🔀",
    k: "shuffle tracks button",
  },
  {
    e: "🔁",
    k: "repeat button",
  },
  {
    e: "🔂",
    k: "repeat single button",
  },
  {
    e: "▶️",
    k: "play button",
  },
  {
    e: "⏩",
    k: "fast-forward button",
  },
  {
    e: "⏭️",
    k: "next track button",
  },
  {
    e: "⏯️",
    k: "play or pause button",
  },
  {
    e: "◀️",
    k: "reverse button",
  },
  {
    e: "⏪",
    k: "fast reverse button",
  },
  {
    e: "⏮️",
    k: "last track button",
  },
  {
    e: "🔼",
    k: "upwards button",
  },
  {
    e: "⏫",
    k: "fast up button",
  },
  {
    e: "🔽",
    k: "downwards button",
  },
  {
    e: "⏬",
    k: "fast down button",
  },
  {
    e: "⏸️",
    k: "pause button",
  },
  {
    e: "⏹️",
    k: "stop button",
  },
  {
    e: "⏺️",
    k: "record button",
  },
  {
    e: "⏏️",
    k: "eject button",
  },
  {
    e: "🎦",
    k: "cinema",
  },
  {
    e: "🔅",
    k: "dim button",
  },
  {
    e: "🔆",
    k: "bright button",
  },
  {
    e: "📶",
    k: "antenna bars",
  },
  {
    e: "🛜",
    k: "wireless",
  },
  {
    e: "📳",
    k: "vibration mode",
  },
  {
    e: "📴",
    k: "mobile phone off",
  },
  {
    e: "♀️",
    k: "female sign",
  },
  {
    e: "♂️",
    k: "male sign",
  },
  {
    e: "⚧️",
    k: "transgender symbol",
  },
  {
    e: "✖️",
    k: "multiply",
  },
  {
    e: "➕",
    k: "plus",
  },
  {
    e: "➖",
    k: "minus",
  },
  {
    e: "➗",
    k: "divide",
  },
  {
    e: "🟰",
    k: "heavy equals sign",
  },
  {
    e: "♾️",
    k: "infinity",
  },
  {
    e: "‼️",
    k: "double exclamation mark",
  },
  {
    e: "⁉️",
    k: "exclamation question mark",
  },
  {
    e: "❓",
    k: "red question mark",
  },
  {
    e: "❔",
    k: "white question mark",
  },
  {
    e: "❕",
    k: "white exclamation mark",
  },
  {
    e: "❗",
    k: "red exclamation mark",
  },
  {
    e: "〰️",
    k: "wavy dash",
  },
  {
    e: "💱",
    k: "currency exchange",
  },
  {
    e: "💲",
    k: "heavy dollar sign",
  },
  {
    e: "⚕️",
    k: "medical symbol",
  },
  {
    e: "♻️",
    k: "recycling symbol",
  },
  {
    e: "⚜️",
    k: "fleur-de-lis",
  },
  {
    e: "🔱",
    k: "trident emblem",
  },
  {
    e: "📛",
    k: "name badge",
  },
  {
    e: "🔰",
    k: "Japanese symbol for beginner",
  },
  {
    e: "⭕",
    k: "hollow red circle",
  },
  {
    e: "✅",
    k: "check mark button",
  },
  {
    e: "☑️",
    k: "check box with check",
  },
  {
    e: "✔️",
    k: "check mark",
  },
  {
    e: "❌",
    k: "cross mark",
  },
  {
    e: "❎",
    k: "cross mark button",
  },
  {
    e: "➰",
    k: "curly loop",
  },
  {
    e: "➿",
    k: "double curly loop",
  },
  {
    e: "〽️",
    k: "part alternation mark",
  },
  {
    e: "✳️",
    k: "eight-spoked asterisk",
  },
  {
    e: "✴️",
    k: "eight-pointed star",
  },
  {
    e: "❇️",
    k: "sparkle",
  },
  {
    e: "©️",
    k: "copyright",
  },
  {
    e: "®️",
    k: "registered",
  },
  {
    e: "™️",
    k: "trade mark",
  },
  {
    e: "#️⃣",
    k: "keycap #",
  },
  {
    e: "*️⃣",
    k: "keycap *",
  },
  {
    e: "0️⃣",
    k: "keycap 0",
  },
  {
    e: "1️⃣",
    k: "keycap 1",
  },
  {
    e: "2️⃣",
    k: "keycap 2",
  },
  {
    e: "3️⃣",
    k: "keycap 3",
  },
  {
    e: "4️⃣",
    k: "keycap 4",
  },
  {
    e: "5️⃣",
    k: "keycap 5",
  },
  {
    e: "6️⃣",
    k: "keycap 6",
  },
  {
    e: "7️⃣",
    k: "keycap 7",
  },
  {
    e: "8️⃣",
    k: "keycap 8",
  },
  {
    e: "9️⃣",
    k: "keycap 9",
  },
  {
    e: "🔟",
    k: "keycap 10",
  },
  {
    e: "🔠",
    k: "input latin uppercase",
  },
  {
    e: "🔡",
    k: "input latin lowercase",
  },
  {
    e: "🔢",
    k: "input numbers",
  },
  {
    e: "🔣",
    k: "input symbols",
  },
  {
    e: "🔤",
    k: "input latin letters",
  },
  {
    e: "🅰️",
    k: "A button (blood type)",
  },
  {
    e: "🆎",
    k: "AB button (blood type)",
  },
  {
    e: "🅱️",
    k: "B button (blood type)",
  },
  {
    e: "🆑",
    k: "CL button",
  },
  {
    e: "🆒",
    k: "COOL button",
  },
  {
    e: "🆓",
    k: "FREE button",
  },
  {
    e: "ℹ️",
    k: "information",
  },
  {
    e: "🆔",
    k: "ID button",
  },
  {
    e: "Ⓜ️",
    k: "circled M",
  },
  {
    e: "🆕",
    k: "NEW button",
  },
  {
    e: "🆖",
    k: "NG button",
  },
  {
    e: "🅾️",
    k: "O button (blood type)",
  },
  {
    e: "🆗",
    k: "OK button",
  },
  {
    e: "🅿️",
    k: "P button",
  },
  {
    e: "🆘",
    k: "SOS button",
  },
  {
    e: "🆙",
    k: "UP! button",
  },
  {
    e: "🆚",
    k: "VS button",
  },
  {
    e: "🈁",
    k: "Japanese “here” button",
  },
  {
    e: "🈂️",
    k: "Japanese “service charge” button",
  },
  {
    e: "🈷️",
    k: "Japanese “monthly amount” button",
  },
  {
    e: "🈶",
    k: "Japanese “not free of charge” button",
  },
  {
    e: "🈯",
    k: "Japanese “reserved” button",
  },
  {
    e: "🉐",
    k: "Japanese “bargain” button",
  },
  {
    e: "🈹",
    k: "Japanese “discount” button",
  },
  {
    e: "🈚",
    k: "Japanese “free of charge” button",
  },
  {
    e: "🈲",
    k: "Japanese “prohibited” button",
  },
  {
    e: "🉑",
    k: "Japanese “acceptable” button",
  },
  {
    e: "🈸",
    k: "Japanese “application” button",
  },
  {
    e: "🈴",
    k: "Japanese “passing grade” button",
  },
  {
    e: "🈳",
    k: "Japanese “vacancy” button",
  },
  {
    e: "㊗️",
    k: "Japanese “congratulations” button",
  },
  {
    e: "㊙️",
    k: "Japanese “secret” button",
  },
  {
    e: "🈺",
    k: "Japanese “open for business” button",
  },
  {
    e: "🈵",
    k: "Japanese “no vacancy” button",
  },
  {
    e: "🔴",
    k: "red circle",
  },
  {
    e: "🟠",
    k: "orange circle",
  },
  {
    e: "🟡",
    k: "yellow circle",
  },
  {
    e: "🟢",
    k: "green circle",
  },
  {
    e: "🔵",
    k: "blue circle",
  },
  {
    e: "🟣",
    k: "purple circle",
  },
  {
    e: "🟤",
    k: "brown circle",
  },
  {
    e: "⚫",
    k: "black circle",
  },
  {
    e: "⚪",
    k: "white circle",
  },
  {
    e: "🟥",
    k: "red square",
  },
  {
    e: "🟧",
    k: "orange square",
  },
  {
    e: "🟨",
    k: "yellow square",
  },
  {
    e: "🟩",
    k: "green square",
  },
  {
    e: "🟦",
    k: "blue square",
  },
  {
    e: "🟪",
    k: "purple square",
  },
  {
    e: "🟫",
    k: "brown square",
  },
  {
    e: "⬛",
    k: "black large square",
  },
  {
    e: "⬜",
    k: "white large square",
  },
  {
    e: "◼️",
    k: "black medium square",
  },
  {
    e: "◻️",
    k: "white medium square",
  },
  {
    e: "◾",
    k: "black medium-small square",
  },
  {
    e: "◽",
    k: "white medium-small square",
  },
  {
    e: "▪️",
    k: "black small square",
  },
  {
    e: "▫️",
    k: "white small square",
  },
  {
    e: "🔶",
    k: "large orange diamond",
  },
  {
    e: "🔷",
    k: "large blue diamond",
  },
  {
    e: "🔸",
    k: "small orange diamond",
  },
  {
    e: "🔹",
    k: "small blue diamond",
  },
  {
    e: "🔺",
    k: "red triangle pointed up",
  },
  {
    e: "🔻",
    k: "red triangle pointed down",
  },
  {
    e: "💠",
    k: "diamond with a dot",
  },
  {
    e: "🔘",
    k: "radio button",
  },
  {
    e: "🔳",
    k: "white square button",
  },
  {
    e: "🔲",
    k: "black square button",
  },
  {
    e: "🏁",
    k: "chequered flag",
  },
  {
    e: "🚩",
    k: "triangular flag",
  },
  {
    e: "🎌",
    k: "crossed flags",
  },
  {
    e: "🏴",
    k: "black flag",
  },
  {
    e: "🏳️",
    k: "white flag",
  },
  {
    e: "🏳️‍🌈",
    k: "rainbow flag",
  },
  {
    e: "🏳️‍⚧️",
    k: "transgender flag",
  },
  {
    e: "🏴‍☠️",
    k: "pirate flag",
  },
  {
    e: "🇦🇨",
    k: "flag Ascension Island",
  },
  {
    e: "🇦🇩",
    k: "flag Andorra",
  },
  {
    e: "🇦🇪",
    k: "flag United Arab Emirates",
  },
  {
    e: "🇦🇫",
    k: "flag Afghanistan",
  },
  {
    e: "🇦🇬",
    k: "flag Antigua & Barbuda",
  },
  {
    e: "🇦🇮",
    k: "flag Anguilla",
  },
  {
    e: "🇦🇱",
    k: "flag Albania",
  },
  {
    e: "🇦🇲",
    k: "flag Armenia",
  },
  {
    e: "🇦🇴",
    k: "flag Angola",
  },
  {
    e: "🇦🇶",
    k: "flag Antarctica",
  },
  {
    e: "🇦🇷",
    k: "flag Argentina",
  },
  {
    e: "🇦🇸",
    k: "flag American Samoa",
  },
  {
    e: "🇦🇹",
    k: "flag Austria",
  },
  {
    e: "🇦🇺",
    k: "flag Australia",
  },
  {
    e: "🇦🇼",
    k: "flag Aruba",
  },
  {
    e: "🇦🇽",
    k: "flag Åland Islands",
  },
  {
    e: "🇦🇿",
    k: "flag Azerbaijan",
  },
  {
    e: "🇧🇦",
    k: "flag Bosnia & Herzegovina",
  },
  {
    e: "🇧🇧",
    k: "flag Barbados",
  },
  {
    e: "🇧🇩",
    k: "flag Bangladesh",
  },
  {
    e: "🇧🇪",
    k: "flag Belgium",
  },
  {
    e: "🇧🇫",
    k: "flag Burkina Faso",
  },
  {
    e: "🇧🇬",
    k: "flag Bulgaria",
  },
  {
    e: "🇧🇭",
    k: "flag Bahrain",
  },
  {
    e: "🇧🇮",
    k: "flag Burundi",
  },
  {
    e: "🇧🇯",
    k: "flag Benin",
  },
  {
    e: "🇧🇱",
    k: "flag St. Barthélemy",
  },
  {
    e: "🇧🇲",
    k: "flag Bermuda",
  },
  {
    e: "🇧🇳",
    k: "flag Brunei",
  },
  {
    e: "🇧🇴",
    k: "flag Bolivia",
  },
  {
    e: "🇧🇶",
    k: "flag Caribbean Netherlands",
  },
  {
    e: "🇧🇷",
    k: "flag Brazil",
  },
  {
    e: "🇧🇸",
    k: "flag Bahamas",
  },
  {
    e: "🇧🇹",
    k: "flag Bhutan",
  },
  {
    e: "🇧🇻",
    k: "flag Bouvet Island",
  },
  {
    e: "🇧🇼",
    k: "flag Botswana",
  },
  {
    e: "🇧🇾",
    k: "flag Belarus",
  },
  {
    e: "🇧🇿",
    k: "flag Belize",
  },
  {
    e: "🇨🇦",
    k: "flag Canada",
  },
  {
    e: "🇨🇨",
    k: "flag Cocos (Keeling) Islands",
  },
  {
    e: "🇨🇩",
    k: "flag Congo - Kinshasa",
  },
  {
    e: "🇨🇫",
    k: "flag Central African Republic",
  },
  {
    e: "🇨🇬",
    k: "flag Congo - Brazzaville",
  },
  {
    e: "🇨🇭",
    k: "flag Switzerland",
  },
  {
    e: "🇨🇮",
    k: "flag Côte d’Ivoire",
  },
  {
    e: "🇨🇰",
    k: "flag Cook Islands",
  },
  {
    e: "🇨🇱",
    k: "flag Chile",
  },
  {
    e: "🇨🇲",
    k: "flag Cameroon",
  },
  {
    e: "🇨🇳",
    k: "flag China",
  },
  {
    e: "🇨🇴",
    k: "flag Colombia",
  },
  {
    e: "🇨🇵",
    k: "flag Clipperton Island",
  },
  {
    e: "🇨🇷",
    k: "flag Costa Rica",
  },
  {
    e: "🇨🇺",
    k: "flag Cuba",
  },
  {
    e: "🇨🇻",
    k: "flag Cape Verde",
  },
  {
    e: "🇨🇼",
    k: "flag Curaçao",
  },
  {
    e: "🇨🇽",
    k: "flag Christmas Island",
  },
  {
    e: "🇨🇾",
    k: "flag Cyprus",
  },
  {
    e: "🇨🇿",
    k: "flag Czechia",
  },
  {
    e: "🇩🇪",
    k: "flag Germany",
  },
  {
    e: "🇩🇬",
    k: "flag Diego Garcia",
  },
  {
    e: "🇩🇯",
    k: "flag Djibouti",
  },
  {
    e: "🇩🇰",
    k: "flag Denmark",
  },
  {
    e: "🇩🇲",
    k: "flag Dominica",
  },
  {
    e: "🇩🇴",
    k: "flag Dominican Republic",
  },
  {
    e: "🇩🇿",
    k: "flag Algeria",
  },
  {
    e: "🇪🇦",
    k: "flag Ceuta & Melilla",
  },
  {
    e: "🇪🇨",
    k: "flag Ecuador",
  },
  {
    e: "🇪🇪",
    k: "flag Estonia",
  },
  {
    e: "🇪🇬",
    k: "flag Egypt",
  },
  {
    e: "🇪🇭",
    k: "flag Western Sahara",
  },
  {
    e: "🇪🇷",
    k: "flag Eritrea",
  },
  {
    e: "🇪🇸",
    k: "flag Spain",
  },
  {
    e: "🇪🇹",
    k: "flag Ethiopia",
  },
  {
    e: "🇪🇺",
    k: "flag European Union",
  },
  {
    e: "🇫🇮",
    k: "flag Finland",
  },
  {
    e: "🇫🇯",
    k: "flag Fiji",
  },
  {
    e: "🇫🇰",
    k: "flag Falkland Islands",
  },
  {
    e: "🇫🇲",
    k: "flag Micronesia",
  },
  {
    e: "🇫🇴",
    k: "flag Faroe Islands",
  },
  {
    e: "🇫🇷",
    k: "flag France",
  },
  {
    e: "🇬🇦",
    k: "flag Gabon",
  },
  {
    e: "🇬🇧",
    k: "flag United Kingdom",
  },
  {
    e: "🇬🇩",
    k: "flag Grenada",
  },
  {
    e: "🇬🇪",
    k: "flag Georgia",
  },
  {
    e: "🇬🇫",
    k: "flag French Guiana",
  },
  {
    e: "🇬🇬",
    k: "flag Guernsey",
  },
  {
    e: "🇬🇭",
    k: "flag Ghana",
  },
  {
    e: "🇬🇮",
    k: "flag Gibraltar",
  },
  {
    e: "🇬🇱",
    k: "flag Greenland",
  },
  {
    e: "🇬🇲",
    k: "flag Gambia",
  },
  {
    e: "🇬🇳",
    k: "flag Guinea",
  },
  {
    e: "🇬🇵",
    k: "flag Guadeloupe",
  },
  {
    e: "🇬🇶",
    k: "flag Equatorial Guinea",
  },
  {
    e: "🇬🇷",
    k: "flag Greece",
  },
  {
    e: "🇬🇸",
    k: "flag South Georgia & South Sandwich Islands",
  },
  {
    e: "🇬🇹",
    k: "flag Guatemala",
  },
  {
    e: "🇬🇺",
    k: "flag Guam",
  },
  {
    e: "🇬🇼",
    k: "flag Guinea-Bissau",
  },
  {
    e: "🇬🇾",
    k: "flag Guyana",
  },
  {
    e: "🇭🇰",
    k: "flag Hong Kong SAR China",
  },
  {
    e: "🇭🇲",
    k: "flag Heard & McDonald Islands",
  },
  {
    e: "🇭🇳",
    k: "flag Honduras",
  },
  {
    e: "🇭🇷",
    k: "flag Croatia",
  },
  {
    e: "🇭🇹",
    k: "flag Haiti",
  },
  {
    e: "🇭🇺",
    k: "flag Hungary",
  },
  {
    e: "🇮🇨",
    k: "flag Canary Islands",
  },
  {
    e: "🇮🇩",
    k: "flag Indonesia",
  },
  {
    e: "🇮🇪",
    k: "flag Ireland",
  },
  {
    e: "🇮🇱",
    k: "flag Israel",
  },
  {
    e: "🇮🇲",
    k: "flag Isle of Man",
  },
  {
    e: "🇮🇳",
    k: "flag India",
  },
  {
    e: "🇮🇴",
    k: "flag British Indian Ocean Territory",
  },
  {
    e: "🇮🇶",
    k: "flag Iraq",
  },
  {
    e: "🇮🇷",
    k: "flag Iran",
  },
  {
    e: "🇮🇸",
    k: "flag Iceland",
  },
  {
    e: "🇮🇹",
    k: "flag Italy",
  },
  {
    e: "🇯🇪",
    k: "flag Jersey",
  },
  {
    e: "🇯🇲",
    k: "flag Jamaica",
  },
  {
    e: "🇯🇴",
    k: "flag Jordan",
  },
  {
    e: "🇯🇵",
    k: "flag Japan",
  },
  {
    e: "🇰🇪",
    k: "flag Kenya",
  },
  {
    e: "🇰🇬",
    k: "flag Kyrgyzstan",
  },
  {
    e: "🇰🇭",
    k: "flag Cambodia",
  },
  {
    e: "🇰🇮",
    k: "flag Kiribati",
  },
  {
    e: "🇰🇲",
    k: "flag Comoros",
  },
  {
    e: "🇰🇳",
    k: "flag St. Kitts & Nevis",
  },
  {
    e: "🇰🇵",
    k: "flag North Korea",
  },
  {
    e: "🇰🇷",
    k: "flag South Korea",
  },
  {
    e: "🇰🇼",
    k: "flag Kuwait",
  },
  {
    e: "🇰🇾",
    k: "flag Cayman Islands",
  },
  {
    e: "🇰🇿",
    k: "flag Kazakhstan",
  },
  {
    e: "🇱🇦",
    k: "flag Laos",
  },
  {
    e: "🇱🇧",
    k: "flag Lebanon",
  },
  {
    e: "🇱🇨",
    k: "flag St. Lucia",
  },
  {
    e: "🇱🇮",
    k: "flag Liechtenstein",
  },
  {
    e: "🇱🇰",
    k: "flag Sri Lanka",
  },
  {
    e: "🇱🇷",
    k: "flag Liberia",
  },
  {
    e: "🇱🇸",
    k: "flag Lesotho",
  },
  {
    e: "🇱🇹",
    k: "flag Lithuania",
  },
  {
    e: "🇱🇺",
    k: "flag Luxembourg",
  },
  {
    e: "🇱🇻",
    k: "flag Latvia",
  },
  {
    e: "🇱🇾",
    k: "flag Libya",
  },
  {
    e: "🇲🇦",
    k: "flag Morocco",
  },
  {
    e: "🇲🇨",
    k: "flag Monaco",
  },
  {
    e: "🇲🇩",
    k: "flag Moldova",
  },
  {
    e: "🇲🇪",
    k: "flag Montenegro",
  },
  {
    e: "🇲🇫",
    k: "flag St. Martin",
  },
  {
    e: "🇲🇬",
    k: "flag Madagascar",
  },
  {
    e: "🇲🇭",
    k: "flag Marshall Islands",
  },
  {
    e: "🇲🇰",
    k: "flag North Macedonia",
  },
  {
    e: "🇲🇱",
    k: "flag Mali",
  },
  {
    e: "🇲🇲",
    k: "flag Myanmar (Burma)",
  },
  {
    e: "🇲🇳",
    k: "flag Mongolia",
  },
  {
    e: "🇲🇴",
    k: "flag Macao SAR China",
  },
  {
    e: "🇲🇵",
    k: "flag Northern Mariana Islands",
  },
  {
    e: "🇲🇶",
    k: "flag Martinique",
  },
  {
    e: "🇲🇷",
    k: "flag Mauritania",
  },
  {
    e: "🇲🇸",
    k: "flag Montserrat",
  },
  {
    e: "🇲🇹",
    k: "flag Malta",
  },
  {
    e: "🇲🇺",
    k: "flag Mauritius",
  },
  {
    e: "🇲🇻",
    k: "flag Maldives",
  },
  {
    e: "🇲🇼",
    k: "flag Malawi",
  },
  {
    e: "🇲🇽",
    k: "flag Mexico",
  },
  {
    e: "🇲🇾",
    k: "flag Malaysia",
  },
  {
    e: "🇲🇿",
    k: "flag Mozambique",
  },
  {
    e: "🇳🇦",
    k: "flag Namibia",
  },
  {
    e: "🇳🇨",
    k: "flag New Caledonia",
  },
  {
    e: "🇳🇪",
    k: "flag Niger",
  },
  {
    e: "🇳🇫",
    k: "flag Norfolk Island",
  },
  {
    e: "🇳🇬",
    k: "flag Nigeria",
  },
  {
    e: "🇳🇮",
    k: "flag Nicaragua",
  },
  {
    e: "🇳🇱",
    k: "flag Netherlands",
  },
  {
    e: "🇳🇴",
    k: "flag Norway",
  },
  {
    e: "🇳🇵",
    k: "flag Nepal",
  },
  {
    e: "🇳🇷",
    k: "flag Nauru",
  },
  {
    e: "🇳🇺",
    k: "flag Niue",
  },
  {
    e: "🇳🇿",
    k: "flag New Zealand",
  },
  {
    e: "🇴🇲",
    k: "flag Oman",
  },
  {
    e: "🇵🇦",
    k: "flag Panama",
  },
  {
    e: "🇵🇪",
    k: "flag Peru",
  },
  {
    e: "🇵🇫",
    k: "flag French Polynesia",
  },
  {
    e: "🇵🇬",
    k: "flag Papua New Guinea",
  },
  {
    e: "🇵🇭",
    k: "flag Philippines",
  },
  {
    e: "🇵🇰",
    k: "flag Pakistan",
  },
  {
    e: "🇵🇱",
    k: "flag Poland",
  },
  {
    e: "🇵🇲",
    k: "flag St. Pierre & Miquelon",
  },
  {
    e: "🇵🇳",
    k: "flag Pitcairn Islands",
  },
  {
    e: "🇵🇷",
    k: "flag Puerto Rico",
  },
  {
    e: "🇵🇸",
    k: "flag Palestinian Territories",
  },
  {
    e: "🇵🇹",
    k: "flag Portugal",
  },
  {
    e: "🇵🇼",
    k: "flag Palau",
  },
  {
    e: "🇵🇾",
    k: "flag Paraguay",
  },
  {
    e: "🇶🇦",
    k: "flag Qatar",
  },
  {
    e: "🇷🇪",
    k: "flag Réunion",
  },
  {
    e: "🇷🇴",
    k: "flag Romania",
  },
  {
    e: "🇷🇸",
    k: "flag Serbia",
  },
  {
    e: "🇷🇺",
    k: "flag Russia",
  },
  {
    e: "🇷🇼",
    k: "flag Rwanda",
  },
  {
    e: "🇸🇦",
    k: "flag Saudi Arabia",
  },
  {
    e: "🇸🇧",
    k: "flag Solomon Islands",
  },
  {
    e: "🇸🇨",
    k: "flag Seychelles",
  },
  {
    e: "🇸🇩",
    k: "flag Sudan",
  },
  {
    e: "🇸🇪",
    k: "flag Sweden",
  },
  {
    e: "🇸🇬",
    k: "flag Singapore",
  },
  {
    e: "🇸🇭",
    k: "flag St. Helena",
  },
  {
    e: "🇸🇮",
    k: "flag Slovenia",
  },
  {
    e: "🇸🇯",
    k: "flag Svalbard & Jan Mayen",
  },
  {
    e: "🇸🇰",
    k: "flag Slovakia",
  },
  {
    e: "🇸🇱",
    k: "flag Sierra Leone",
  },
  {
    e: "🇸🇲",
    k: "flag San Marino",
  },
  {
    e: "🇸🇳",
    k: "flag Senegal",
  },
  {
    e: "🇸🇴",
    k: "flag Somalia",
  },
  {
    e: "🇸🇷",
    k: "flag Suriname",
  },
  {
    e: "🇸🇸",
    k: "flag South Sudan",
  },
  {
    e: "🇸🇹",
    k: "flag São Tomé & Príncipe",
  },
  {
    e: "🇸🇻",
    k: "flag El Salvador",
  },
  {
    e: "🇸🇽",
    k: "flag Sint Maarten",
  },
  {
    e: "🇸🇾",
    k: "flag Syria",
  },
  {
    e: "🇸🇿",
    k: "flag Eswatini",
  },
  {
    e: "🇹🇦",
    k: "flag Tristan da Cunha",
  },
  {
    e: "🇹🇨",
    k: "flag Turks & Caicos Islands",
  },
  {
    e: "🇹🇩",
    k: "flag Chad",
  },
  {
    e: "🇹🇫",
    k: "flag French Southern Territories",
  },
  {
    e: "🇹🇬",
    k: "flag Togo",
  },
  {
    e: "🇹🇭",
    k: "flag Thailand",
  },
  {
    e: "🇹🇯",
    k: "flag Tajikistan",
  },
  {
    e: "🇹🇰",
    k: "flag Tokelau",
  },
  {
    e: "🇹🇱",
    k: "flag Timor-Leste",
  },
  {
    e: "🇹🇲",
    k: "flag Turkmenistan",
  },
  {
    e: "🇹🇳",
    k: "flag Tunisia",
  },
  {
    e: "🇹🇴",
    k: "flag Tonga",
  },
  {
    e: "🇹🇷",
    k: "flag Turkey",
  },
  {
    e: "🇹🇹",
    k: "flag Trinidad & Tobago",
  },
  {
    e: "🇹🇻",
    k: "flag Tuvalu",
  },
  {
    e: "🇹🇼",
    k: "flag Taiwan",
  },
  {
    e: "🇹🇿",
    k: "flag Tanzania",
  },
  {
    e: "🇺🇦",
    k: "flag Ukraine",
  },
  {
    e: "🇺🇬",
    k: "flag Uganda",
  },
  {
    e: "🇺🇲",
    k: "flag U.S. Outlying Islands",
  },
  {
    e: "🇺🇳",
    k: "flag United Nations",
  },
  {
    e: "🇺🇸",
    k: "flag United States",
  },
  {
    e: "🇺🇾",
    k: "flag Uruguay",
  },
  {
    e: "🇺🇿",
    k: "flag Uzbekistan",
  },
  {
    e: "🇻🇦",
    k: "flag Vatican City",
  },
  {
    e: "🇻🇨",
    k: "flag St. Vincent & Grenadines",
  },
  {
    e: "🇻🇪",
    k: "flag Venezuela",
  },
  {
    e: "🇻🇬",
    k: "flag British Virgin Islands",
  },
  {
    e: "🇻🇮",
    k: "flag U.S. Virgin Islands",
  },
  {
    e: "🇻🇳",
    k: "flag Vietnam",
  },
  {
    e: "🇻🇺",
    k: "flag Vanuatu",
  },
  {
    e: "🇼🇫",
    k: "flag Wallis & Futuna",
  },
  {
    e: "🇼🇸",
    k: "flag Samoa",
  },
  {
    e: "🇽🇰",
    k: "flag Kosovo",
  },
  {
    e: "🇾🇪",
    k: "flag Yemen",
  },
  {
    e: "🇾🇹",
    k: "flag Mayotte",
  },
  {
    e: "🇿🇦",
    k: "flag South Africa",
  },
  {
    e: "🇿🇲",
    k: "flag Zambia",
  },
  {
    e: "🇿🇼",
    k: "flag Zimbabwe",
  },
  {
    e: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    k: "flag England",
  },
  {
    e: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    k: "flag Scotland",
  },
  {
    e: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    k: "flag Wales",
  },
];
