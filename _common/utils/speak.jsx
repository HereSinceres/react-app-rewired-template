const synth = window.speechSynthesis;
async function speak(text) {
    return new Promise((resolve, reject) => {
        if (synth.speaking) {
            console.error('speechSynthesis.speaking');
            reject();
            return;
        }
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.onend = function (event) {
            resolve();
        };

        utterThis.onerror = function (event) {
            reject(event);
        };
        synth.speak(utterThis);
    });
}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
const grammar =
    '#JSGF V1.0; grammar colors; public <color> = ' +
    ['不成功', '成功', '失败', '是', '否', '不提交', '提交'].join(' | ') +
    ';';
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

class Speech {
    _runing = false;
    _recognition = new SpeechRecognition();
    _initRecognition() {
        this._recognition.grammars = speechRecognitionList;
        this._recognition.lang = 'zh-CN';
        this._recognition.interimResults = false;
        this._recognition.maxAlternatives = 1;
    }
    _configRecognition(eventMap) {
        return new Promise((resolve, reject) => {
            this._recognition.onresult = function (event) {
                const speechResult = event.results[0][0].transcript.toLowerCase();
                console.log('Confidence: ', speechResult);
                eventMap?.onresult?.(speechResult);
                resolve(speechResult);
            };

            this._recognition.onspeechend = function () {
                this._recognition?.stop();
            };

            this._recognition.onerror = function (event) {
                eventMap?.onerror?.();
                reject(event);
            };

            this._recognition.onaudiostart = function (event) {
                //Fired when the user agent has started to capture audio.
                console.log('Speechthis._recognition.onaudiostart');
            };

            this._recognition.onaudioend = function (event) {
                //Fired when the user agent has finished capturing audio.
                console.log('Speechthis._recognition.onaudioend');
            };

            this._recognition.onend = function (event) {
                //Fired when the speech this._recognition service has disconnected.
                console.log('Speechthis._recognition.onend');
                eventMap?.onend?.();
                reject(event);
            };

            this._recognition.onnomatch = function (event) {
                //Fired when the speech this._recognition service returns a final result with no significant this._recognition. This may involve some degree of this._recognition, which doesn't meet or exceed the confidence threshold.
                console.log('Speechthis._recognition.onnomatch');
            };

            this._recognition.onsoundstart = function (event) {
                //Fired when any sound — recognisable speech or not — has been detected.
                console.log('Speechthis._recognition.onsoundstart');
                eventMap?.onsoundstart?.();
            };

            this._recognition.onsoundend = function (event) {
                //Fired when any sound — recognisable speech or not — has stopped being detected.
                console.log('Speechthis._recognition.onsoundend');
            };

            this._recognition.onspeechstart = function (event) {
                //Fired when sound that is recognised by the speech this._recognition service as speech has been detected.
                console.log('Speechthis._recognition.onspeechstart');
            };
            this._recognition.onstart = function (event) {
                //Fired when the speech this._recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current Speechthis._recognition.
                console.log('Speechthis._recognition.onstart');
                eventMap?.onstart?.();
            };
        });
    }
    speak(question, eventMap) {
        return new Promise(async (resolve, reject) => {
            if (this._runing) {
                console.error('正在播报语音');
                return;
            }
            let result = null;
            this._runing = true;
            try {
                // 语音
                eventMap?.speakStart?.();
                console.log('1');
                await speak(question, eventMap);
                console.log('2');
                eventMap?.speakEnd?.();
                console.log('3');
                this._recognition.start();
                console.log('4');
                // 打开话筒
                this._initRecognition();
                console.log('5');
                result = await this._configRecognition(eventMap);
                console.log('6');
            } catch (error) {
                console.error(error);
                reject();
            } finally {
                this._runing = false;
            }
            resolve(result);
        });
    }
    async cancle() {
        if (this._runing) {
            await this._recognition?.stop();
            await this._recognition?.abort();
            if (window.speechSynthesis?.speaking) {
                console.log('quxiao');
                await window.speechSynthesis?.cancel();
            }
            this._runing = false;
        }
    }
}

export const speechIns = new Speech();
