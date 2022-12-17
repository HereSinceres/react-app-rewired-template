declare namespace NavigationRecordDataStoreDTS {
    type Record = {
        id: string;
        time: number;
        executorString: string;
        isSpeaking?:boolean;
        isWaitingSpeakInput?:boolean;
        sucessResult?:string;
        uploadResult?:string;
    };
}
