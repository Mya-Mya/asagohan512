const Data = {
    dishIds: ["main", "sub", "drink"],
    dishNames: {
        main: "メイン",
        sub: "サブ",
        drink: "ドリンク",
    },
    questions: {
        main: [
            {
                id: 0,
                value: "今朝は昨日の朝より",
                choices: ["暑い", "寒い"]
            },
            {
                id: 1,
                value: "よく",
                choices: ["眠れた", "眠れなかった"]
            },
            {
                id: 2,
                value: "リビングに最初に入ったのは",
                choices: ["左足", "右足"]
            },
        ],
        sub: [
            {
                id: 3,
                value: "外は晴れているか",
                choices: ["はい", "いいえ"]
            },
            {
                id: 4,
                value: "今日は外出予定が",
                choices: ["ある", "ない"]
            },
            {
                id: 5,
                value: "昨日やり残したタスクが",
                choices: ["ある", "ない"]
            },
        ],
        drink: [
            {
                id: 6,
                value: "今日散歩に行くなら",
                choices: ["西へ", "東へ"]
            },
            {
                id: 7,
                value: "今日はどちらを聴く？",
                choices: ["Radiko", "Spotify"]
            },
            {
                id: 8,
                value: "まだ眠い？",
                choices: ["はい", "いいえ"]
            },
        ]
    },
    menus: {
        main: {
            img: ["🍱", "🍙", "🍚", "🍛", "🍝", "🍣", "🍞", "🥞"],
            name: ["弁当", "おにぎり", "ごはん", "カレーライス", "スパゲッティ", "寿司", "食パン", "パンケーキ"]
        },
        sub: {
            img: ["🧇", "🍟", "🥚", "🥗", "🍘", "🍢", "🍡", "🍰"],
            name: ["ワッフル", "フライドポテト", "たまご", "サラダ", "せんべい", "おでん", "だんご", "ショートケーキ"]
        },
        drink: {
            img: ["🍵", "🥛", "☕", "☕", "🧃", "🥂", "🥛", "🥤"],
            name: ["お茶", "牛乳", "コーヒー", "紅茶", "ぶとうジュースc", "リンゴジュース", "カルピス", "コーラ"]
        },
    }
}
export default Data;