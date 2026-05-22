// ピザタイプ: B=ベーコン C=コーン G=女児(マシュマロ) M=マルゲリータ
//             A=明太もち S=シェフ P=ポルチーニ H=アロハ E=エビちゃん T=テリヤキ
// 各タイプは10問中4問で選べるよう均等に配置

const questions = [
  {
    // Q1: B M H T
    text: "突然の3連休！どう過ごす？",
    choices: [
      { text: "何もしない。それが正解。",               type: "B" },
      { text: "安くて楽しめることを徹底的に探す",       type: "M" },
      { text: "行ったことないところに行ってみる",       type: "H" },
      { text: "好きなことを全力でやり切る",             type: "T" },
    ],
  },
  {
    // Q2: C G A S
    text: "自分を一言で表すとしたら？",
    choices: [
      { text: "懐かしい",           type: "C" },
      { text: "かわいい",           type: "G" },
      { text: "情熱的",             type: "A" },
      { text: "意外とすごい",       type: "S" },
    ],
  },
  {
    // Q3: P E B C
    text: "よく見るコンテンツは？",
    choices: [
      { text: "海外ドラマや映画",           type: "P" },
      { text: "ネットミームやバズり動画",   type: "E" },
      { text: "特にない、なんでも",         type: "B" },
      { text: "懐かしのアニメやゲーム",     type: "C" },
    ],
  },
  {
    // Q4: G M H T
    text: "ピザパーティーでの自分の役割は？",
    choices: [
      { text: "デザートや締めを担当する人", type: "G" },
      { text: "予算と人数を計算する幹事",   type: "M" },
      { text: "変わり種ピザを提案する人",   type: "H" },
      { text: "一番たくさん食べる人",       type: "T" },
    ],
  },
  {
    // Q5: A S P E
    text: "自分の趣味について話すとき？",
    choices: [
      { text: "熱く語り出して止まらない",         type: "A" },
      { text: "「たまにね〜」とさらっと言う",     type: "S" },
      { text: "こだわりを丁寧に話す",             type: "P" },
      { text: "ミームや流行り言葉を交えて話す",   type: "E" },
    ],
  },
  {
    // Q6: B C G M
    text: "ピザを食べるとき、何が一番大事？",
    choices: [
      { text: "シンプルに美味ければ何でもいい", type: "B" },
      { text: "子供の頃から好きな安定の味",     type: "C" },
      { text: "チーズと甘さのハーモニー",       type: "G" },
      { text: "量とコスパのバランス",           type: "M" },
    ],
  },
  {
    // Q7: A S P H
    text: "料理をするとき、どんなスタイル？",
    choices: [
      { text: "レシピを研究して完璧を目指す",           type: "A" },
      { text: "なんか気づいたら美味くなってる",         type: "S" },
      { text: "こだわりの食材を揃えてから始める",       type: "P" },
      { text: "レシピを無視して自由にアレンジする",     type: "H" },
    ],
  },
  {
    // Q8: E T B C
    text: "グループLINEで自分がよくやることは？",
    choices: [
      { text: "面白い画像やネタを貼る",             type: "E" },
      { text: "「やろう！行こう！」と率先して誘う", type: "T" },
      { text: "既読をつけたまましばらく放置",       type: "B" },
      { text: "話をまとめてリアクションする",       type: "C" },
    ],
  },
  {
    // Q9: G M A S
    text: "何か新しいことを始めるとしたら？",
    choices: [
      { text: "お菓子作りやスイーツ系",               type: "G" },
      { text: "コスパの良い趣味を探す",               type: "M" },
      { text: "どうせやるなら深く極めたい",           type: "A" },
      { text: "「まぁやってみるか」でなんとかする",   type: "S" },
    ],
  },
  {
    // Q10: P H E T
    text: "最後に！残ったピザ、どうする？",
    choices: [
      { text: "翌日じっくり味わう",                   type: "P" },
      { text: "アレンジして別の料理にする",           type: "H" },
      { text: "「もう買わないのに〜」とか言いながら食べる", type: "E" },
      { text: "迷わず全部食べる",                     type: "T" },
    ],
  },
];

const results = {
  B: {
    num: "No.1",
    emoji: "🥓",
    pizza: "ベーコンだけの攻めたピザ",
    catch: "シンプルイズベスト。それだけ。",
    desc: "「ギリギリありかも」という独自の感覚で生きているタイプ。余計なものを求めず、自分のスタイルを貫く。周りが何を言おうと「まぁ私は買わないが」と言える謎の潔さが魅力。アレンジは他人に任せる派。",
    tags: ["#シンプル", "#我が道", "#潔い", "#こだわりなし"],
  },
  C: {
    num: "No.2",
    emoji: "🌽",
    pizza: "つぶつぶコーンピザ",
    catch: "実は、一番ウケてた人。",
    desc: "「一部に刺さる」と思ってたら実は全体に刺さっていた、隠れた人気者。子供の頃から好きなものへの愛着が強く、懐かしさで人の心を掴む才能がある。何気に売上上位に食い込んでいるタイプ。",
    tags: ["#懐かしい", "#隠れ人気者", "#子供心", "#安定感"],
  },
  G: {
    num: "No.3",
    emoji: "🍡",
    pizza: "女児ピザ（焼きマシュマロ）",
    catch: "パーティーの締めは、あなたにしか頼めない。",
    desc: "BBQの焼きマシュマロのように、最後に場を沸かせる切り札的存在。甘くてピュアな雰囲気の裏に、絶妙なタイミング感覚を持っている。「ピザパーティーの最後の一切れ」として語り継がれる人。",
    tags: ["#甘い", "#ピュア", "#締めの人", "#サプライズ担当"],
  },
  M: {
    num: "No.4",
    emoji: "🍕",
    pizza: "コスパ最強ピザ",
    catch: "安くてうまいが、正義。",
    desc: "「高いのは正義じゃない」という信念を持つ、学生の味方。トマト・バジル・チーズという王道を愛し、みんなが好きなものの本質を理解している。コスパ計算が得意で、いつも頼りにされるタイプ。",
    tags: ["#コスパ重視", "#王道好き", "#計画的", "#頼られキャラ"],
  },
  A: {
    num: "No.5",
    emoji: "🎌",
    pizza: "有罪級の明太もちピザ",
    catch: "こだわりに、魂を売った人。",
    desc: "「この世でトップのものを作る」という気持ちで研究を重ね、気づいたら生活費を圧迫していたタイプ。情熱と執念で物事を極めようとする。明太子×お餅×チーズのように、最高の組み合わせを引き出す才能がある。",
    tags: ["#情熱的", "#研究者肌", "#こだわり強め", "#有罪級に熱い"],
  },
  S: {
    num: "No.6",
    emoji: "👨‍🍳",
    pizza: "シェフ自慢ピザ",
    catch: "「ノリでやったら上手かった」が口癖。",
    desc: "気まぐれでやり始めたことが、なぜか毎回クオリティが高い。謙遜しながらも実力はしっかりある、「意外とすごい」タイプ。かっこつけているようで、実はちゃんとした裏付けがある。",
    tags: ["#謙遜しがち", "#実は実力者", "#ノリで成功", "#意外とすごい"],
  },
  P: {
    num: "No.7",
    emoji: "🍄",
    pizza: "ポルチーニ・優雅ピザ",
    catch: "芳醇さで、人を虜にする。",
    desc: "イタリアの友人からポルチーニが届いてしまうような、洗練された人間関係を持つタイプ。上品さと国際感覚を兼ね備え、知る人ぞ知る存在。ちなみに等価交換は欠かさない（カニを毎月送るくらいには義理堅い）。",
    tags: ["#上品", "#国際的", "#洗練", "#義理堅い"],
  },
  H: {
    num: "No.8",
    emoji: "🌺",
    pizza: "アロハピザ",
    catch: "固定観念？食べたことあります。",
    desc: "「熱された果物が苦手」なんて言わせない、チャレンジャー気質の持ち主。常識の壁をヨダレものの美味さで突破する。パイナップルとチーズのように、意外な組み合わせを「ありやん」に変えてしまう力がある。",
    tags: ["#チャレンジャー", "#固定観念を壊す", "#南国気分", "#クセになる"],
  },
  E: {
    num: "No.9",
    emoji: "🦐",
    pizza: "エビちゃんよーんピザ",
    catch: "既視感を感じたあなたは、わかってる。",
    desc: "インターネットをちゃんと追っていて、構文もミームも把握しているタイプ。「もう味しない」と言われても信じない、自分の感覚を信じる芯の強さがある。知り合いにツッコまれながらも我が道を行く♡",
    tags: ["#インターネット民", "#構文好き", "#ネタ担当", "#わかってる"],
  },
  T: {
    num: "No.10",
    emoji: "🍗",
    pizza: "テリヤキチキンピザ",
    catch: "お前が大優勝。",
    desc: "やっぱりこれが一番うまい、という圧倒的な正解感を持つタイプ。ジューシーさと旨さを兼ね備え、友情より食欲を取れるくらいの揺るぎない価値観がある。一度動き出したら止まれない、最強の人。",
    tags: ["#大優勝", "#肉が好き", "#止まれない", "#友情より食欲"],
  },
};

let scores = { B:0, C:0, G:0, M:0, A:0, S:0, P:0, H:0, E:0, T:0 };
let currentQ = 0;

const startScreen  = document.getElementById("start-screen");
const quizScreen   = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

function showScreen(el) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  el.classList.add("active");
}

function renderQuestion() {
  const q = questions[currentQ];
  document.getElementById("current-q").textContent = currentQ + 1;
  document.getElementById("progress-fill").style.width = ((currentQ + 1) / questions.length * 100) + "%";
  document.getElementById("question-text").textContent = q.text;

  const choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";
  q.choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = c.text;
    btn.addEventListener("click", () => onChoiceClick(btn, c.type));
    choicesEl.appendChild(btn);
  });
}

function onChoiceClick(btn, type) {
  document.querySelectorAll(".choice-btn").forEach(b => b.disabled = true);
  btn.classList.add("selected");
  scores[type]++;

  setTimeout(() => {
    currentQ++;
    if (currentQ < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 500);
}

function showResult() {
  const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const r = results[topType];

  document.getElementById("result-num").textContent   = r.num;
  document.getElementById("result-emoji").textContent = r.emoji;
  document.getElementById("result-pizza").textContent = r.pizza;
  document.getElementById("result-catch").textContent = r.catch;
  document.getElementById("result-desc").textContent  = r.desc;

  const tagsEl = document.getElementById("result-tags");
  tagsEl.innerHTML = r.tags.map(t => `<span class="tag">${t}</span>`).join("");

  // シェア用テキスト
  const shareText = `🍕 ピザ診断やってみた！\n\n私は「${r.pizza}」でした${r.emoji}\n\n${r.catch}\n\n${r.tags.join(" ")}\n#コリコリゲームズ #ピザ診断 #ゲームマーケット #ボードゲーム`;
  const pageUrl = "https://korikori-games.com/shindan.html";

  // X (Twitter) シェアリンク
  const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareText) + "&url=" + encodeURIComponent(pageUrl);
  document.getElementById("share-x").href = tweetUrl;

  // Facebook シェアリンク
  const fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl) + "&quote=" + encodeURIComponent(shareText);
  document.getElementById("share-fb").href = fbUrl;

  // Instagram用（Web Share API or クリップボードコピー）
  document.getElementById("share-insta").onclick = () => {
    const instaText = shareText + "\n" + pageUrl;
    if (navigator.share) {
      navigator.share({ title: "ピザ診断結果", text: instaText });
    } else {
      navigator.clipboard.writeText(instaText).then(() => {
        const btn = document.getElementById("share-insta");
        const orig = btn.innerHTML;
        btn.textContent = "✅ コピーしました！";
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
      }).catch(() => {
        prompt("テキストをコピーしてInstagramに貼り付けてね🍕", instaText);
      });
    }
  };

  showScreen(resultScreen);
}

document.getElementById("start-btn").addEventListener("click", () => {
  scores = { B:0, C:0, G:0, M:0, A:0, S:0, P:0, H:0, E:0, T:0 };
  currentQ = 0;
  renderQuestion();
  showScreen(quizScreen);
});

document.getElementById("retry-btn").addEventListener("click", () => {
  scores = { B:0, C:0, G:0, M:0, A:0, S:0, P:0, H:0, E:0, T:0 };
  currentQ = 0;
  renderQuestion();
  showScreen(quizScreen);
});
