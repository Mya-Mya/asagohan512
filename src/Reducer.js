import ActionType from './ActionType'

const initialState = {
    questions: {
        byId: {
            0: {
                id: 0,
                value: "今朝は昨日の朝より",
                choices: ["暑い", "寒い"]
            },
            1: {
                id: 1,
                value: "よく",
                choices: ["眠れた", "眠れなかった"]
            },
            2: {
                id: 2,
                value: "リビングに最初に入ったのは",
                choices: ["左足", "右足"]
            },
            3: {
                id: 3,
                value: "外は晴れているか",
                choices: ["はい", "いいえ"]
            },
            4: {
                id: 4,
                value: "今日は外出予定が",
                choices: ["ある", "ない"]
            },
            5: {
                id: 5,
                value: "昨日やり残したタスクが",
                choices: ["ある", "ない"]
            },
            6: {
                id: 6,
                value: "今日散歩に行くなら",
                choices: ["西へ", "東へ"]
            },
            7: {
                id: 7,
                value: "今日はどちらを聴く？",
                choices: ["Radiko", "Spotify"]
            },
            8: {
                id: 8,
                value: "まだ眠い？",
                choices: ["はい", "いいえ"]
            },
        },
        allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    dishNames: {
        byId: {
            0: { 'id': 0, 'name': '弁当', 'img': '🍱' },
            1: { 'id': 1, 'name': 'おにぎり', 'img': '🍙' },
            2: { 'id': 2, 'name': 'ごはん', 'img': '🍚' },
            3: { 'id': 3, 'name': 'カレーライス', 'img': '🍛' },
            4: { 'id': 4, 'name': 'スパゲッティ', 'img': '🍝' },
            5: { 'id': 5, 'name': '寿司', 'img': '🍣' },
            6: { 'id': 6, 'name': '食パン', 'img': '🍞' },
            7: { 'id': 7, 'name': 'パンケーキ', 'img': '🥞' },
            8: { 'id': 8, 'name': 'ワッフル', 'img': '🧇' },
            9: { 'id': 9, 'name': 'フライドポテト', 'img': '🍟' },
            10: { 'id': 10, 'name': 'たまご', 'img': '🥚' },
            11: { 'id': 11, 'name': 'サラダ', 'img': '🥗' },
            12: { 'id': 12, 'name': 'せんべい', 'img': '🍘' },
            13: { 'id': 13, 'name': 'おでん', 'img': '🍢' },
            14: { 'id': 14, 'name': 'だんご', 'img': '🍡' },
            15: { 'id': 15, 'name': 'ショートケーキ', 'img': '🍰' },
            16: { 'id': 16, 'name': 'お茶', 'img': '🍵' },
            17: { 'id': 17, 'name': '牛乳', 'img': '🥛' },
            18: { 'id': 18, 'name': 'コーヒー', 'img': '☕' },
            19: { 'id': 19, 'name': '紅茶', 'img': '☕' },
            20: { 'id': 20, 'name': 'ぶとうジュース', 'img': '🧃' },
            21: { 'id': 21, 'name': 'リンゴジュース', 'img': '🥂' },
            22: { 'id': 22, 'name': 'カルピス', 'img': '🥛' },
            23: { 'id': 23, 'name': 'コーラ', 'img': '🥤' }
        },
        allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    },
    dishTypes: {
        byId: {
            main: { id: 'main', name: 'メイン', questionIds: [0, 1, 2], dishNameIds: [0, 1, 2, 3, 4, 5, 6, 7] },
            sub: { id: 'sub', name: 'サブ', questionIds: [3, 4, 5], dishNameIds: [8, 9, 10, 11, 12, 13, 14, 15] },
            drink: { id: 'drink', name: 'ドリンク', questionIds: [6, 7, 8], dishNameIds: [16, 17, 18, 19, 20, 21, 22, 23] },
        },
        allIds: ['main', 'sub', 'drink']
    },
    answers: {
        byId: {},
        allIds: []
    },
    results: {
        byId: {},
        allIds: []
    },
    ui: {
        aboutMe: {
            open: false
        }
    }
}

export const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionType.OPEN_ABOUTME:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    aboutMe: {
                        ...state.ui.aboutMe,
                        open: true
                    }
                }
            }
            break;
        case ActionType.CLOSE_ABOUTME:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    aboutMe: {
                        ...state.ui.aboutMe,
                        open: false
                    }
                }
            }
            break;
        case ActionType.ANSWERED_QUESTION:
            let newState = { ...state }
            const { questionId, answerValue } = payload

            /* この質問IDには既に答えたことがあるか? */
            let hasAnswered = false;
            newState.answers.allIds.forEach(answerId => {
                if (questionId == newState.answers.byId[answerId].questionId) {
                    /* 既に答えたことがある */
                    hasAnswered = true;
                    /* 回答の内容が同じだったらstateに変更なし */
                    if (answerValue == newState.answers.byId[answerId].answerValue) {
                        return newState;
                    }
                    /* 回答の上書き */
                    newState = {
                        ...newState,
                        answers: {
                            ...newState.answers,
                            byId: {
                                ...newState.answers.byId,
                                [answerId]: {
                                    ...newState.answers.byId[answerId],
                                    answerValue: answerValue
                                }
                            }

                        }
                    }
                }
            })

            /* 答えたことがない */
            if (!hasAnswered) {
                const answerId = newState.answers.allIds.length == 0 ? 0 : Math.max(...newState.answers.allIds) + 1
                /*回答の新規作成 */
                newState = {
                    ...newState,
                    answers: {
                        ...newState.answers,
                        byId: {
                            ...newState.answers.byId,
                            [answerId]: { id: answerId, questionId: questionId, answerValue: answerValue }
                        },
                        allIds: newState.answers.allIds.concat(answerId)
                    }
                }
            }

            /* 答えた質問IDがどの皿の種類に属するか? */
            let targetDishTypeId = 0;
            newState.dishTypes.allIds.forEach(dishId => {
                if (newState.dishTypes.byId[dishId].questionIds.includes(questionId)) {
                    targetDishTypeId = dishId
                }
            })

            /* その皿の種類の質問には全て答えているか? */
            let answeredAll = true
            /* その皿の種類のそれぞれの質問に対し */
            newState.dishTypes.byId[targetDishTypeId].questionIds.forEach(questionId => {
                let hasAnsweredTheQuestion = false
                /* それぞれの答えを見て行く */
                newState.answers.allIds.forEach(answerId => {
                    if (questionId == newState.answers.byId[answerId].questionId) {
                        hasAnsweredTheQuestion = true
                    }
                })
                if (!hasAnsweredTheQuestion) {
                    answeredAll = false;
                }
            })

            if (answeredAll) {
                /* その皿の種類の内容を決める */
                let hash = 0;
                let times = 1;
                newState.dishTypes.byId[targetDishTypeId].questionIds.forEach(questionId => {
                    let answerValue = 0
                    newState.answers.allIds.forEach(answerId => {
                        if (questionId == newState.answers.byId[answerId].questionId) {
                            answerValue = newState.answers.byId[answerId].answerValue
                        }
                    })
                    hash += times * answerValue;
                    times *= 2;
                })
                /* その皿の種類の内容の候補のhash番目を内容とする */
                let candidateDishNameIds = newState.dishTypes.byId[targetDishTypeId].dishNameIds
                const dishNameId = candidateDishNameIds[hash]

                /* 既にその皿の種類の内容を決めたことがあるか? */
                let hasDecided = false;
                newState.results.allIds.forEach(resultId => {
                    if (targetDishTypeId == newState.results.byId[resultId].dishTypeId) {
                        /* 決めたことがあるなら、上書きする */
                        newState = {
                            ...newState,
                            results: {
                                ...newState.results,
                                byId: {
                                    ...newState.results.byId,
                                    [resultId]: {
                                        ...newState.results.byId[resultId],
                                        dishNameId: dishNameId
                                    }
                                }
                            }
                        }
                        hasDecided = true
                    }
                })
                if (!hasDecided) {
                    const resultId = newState.results.allIds.length == 0 ? 0 : Math.max(...newState.results.allIds) + 1
                    /*決めたことがないなら、内容の新規作成 */
                    newState = {
                        ...newState,
                        results: {
                            ...newState.results,
                            byId: {
                                ...newState.results.byId,
                                [resultId]: { id: resultId, dishTypeId: targetDishTypeId, dishNameId: dishNameId }
                            },
                            allIds: newState.results.allIds.concat(resultId)
                        }
                    }
                }

            }

            console.log(newState);
            return newState
        default:
            return state
    }
}