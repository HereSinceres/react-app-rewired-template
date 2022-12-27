import {speechIns} from '_common/utils/speak';
import {Toast} from 'antd-mobile';
import {uniqueId} from 'lodash';
import {makeAutoObservable, runInAction} from 'mobx';
import {BiError} from 'react-icons/bi';
export class NavigationRecordDataStore {
    // eslint-disable-next-line @typescript-eslint/ban-types
    list: Array<NavigationRecordDataStoreDTS.Record> = [];
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }
    private beforeExecutorString = '';
    updateBySimWord() {
        const executorString = Math.random().toString();
        if (executorString !== this.beforeExecutorString) {
            this.beforeExecutorString = executorString;
            const newLatest = {
                id: uniqueId('record'),
                time: new Date().valueOf(),
                executorString: executorString
            };
            this.list = [newLatest, ...this.list];
            this.doSpeak(newLatest);
        }
    }
    initialize() {
        setInterval(() => {
            this.updateBySimWord();
        }, 1000);
    }
    async doSpeak(newLatest: NavigationRecordDataStoreDTS.Record) {
        try {
            const options = {
                speakStart: () => {
                    console.log('speakStart', newLatest);
                    runInAction(() => {
                        this.list = this.list.map(row => {
                            if (row.id === newLatest.id) {
                                return {
                                    ...row,
                                    isSpeaking: true
                                };
                            }
                            return row;
                        });
                    });
                },
                speakEnd: () => {
                    console.log('speakEnd', newLatest);
                    runInAction(() => {
                        this.list = this.list.map(row => {
                            if (row.id === newLatest.id) {
                                return {
                                    ...row,
                                    isSpeaking: false
                                };
                            }
                            return row;
                        });
                    });
                },
                onstart: () => {
                    console.log('onstart', newLatest);
                    runInAction(() => {
                        this.list = this.list.map(row => {
                            if (row.id === newLatest.id) {
                                return {
                                    ...row,
                                    isWaitingSpeakInput: true
                                };
                            }
                            return row;
                        });
                    });
                },
                onend: () => {
                    console.log('onend', newLatest);
                    runInAction(() => {
                        this.list = this.list.map(row => {
                            if (row.id === newLatest.id) {
                                return {
                                    ...row,
                                    isWaitingSpeakInput: false
                                };
                            }
                            return row;
                        });
                    });
                }
            };
            const result1 = await speechIns.speak(`${newLatest.executorString},是否成功`, options);
            runInAction(() => {
                this.list = this.list.map(row => {
                    if (row.id === newLatest.id) {
                        return {
                            ...row,
                            sucessResult: result1
                        };
                    }
                    return row;
                });
            });

            const result2 = await speechIns.speak('是否确认提交', options);
            runInAction(() => {
                this.list = this.list.map(row => {
                    if (row.id === newLatest.id) {
                        return {
                            ...row,
                            uploadResult: result2
                        };
                    }
                    return row;
                });
            });
        } catch (error) {
            Toast.show({
                icon: <BiError />,
                content: '语音/识别失败，请手动提交'
            });
            runInAction(() => {
                this.list = this.list.map(row => {
                    if (row.id === newLatest.id) {
                        return {
                            ...row,
                            isSpeaking: false,
                            isWaitingSpeakInput: false
                        };
                    }
                    return row;
                });
            });
        }
    }
}
