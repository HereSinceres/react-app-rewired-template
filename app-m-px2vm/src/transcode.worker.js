const ffmpe = require('@ffmpeg/ffmpeg');
const ffmpeg = ffmpe.createFFmpeg({ log: true });

// eslint-disable-next-line no-restricted-globals
self.onmessage = async (event) => {
    try {
        const { buffer, name, inType, outType } = event.data;
        if (!ffmpeg.isLoaded()) {
            await ffmpeg.load();
        }

        ffmpeg.FS('writeFile', `${name}.${inType}`, new Uint8Array(buffer));
        await ffmpeg.run('-i', `${name}.${inType}`, `${name}.${outType}`);
        const data = ffmpeg.FS('readFile', `${name}.${outType}`);

// eslint-disable-next-line no-restricted-globals
        self.postMessage({ buffer: data.buffer, type: 'result' }, [data.buffer]);

        // delete files from memory
        ffmpeg.FS('unlink', `${name}.${inType}`);
        ffmpeg.FS('unlink', `${name}.${outType}`);
    } catch (e) {
// eslint-disable-next-line no-restricted-globals
        self.postMessage({ type: 'error', error: e });
    }
};
