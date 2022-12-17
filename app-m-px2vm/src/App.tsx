import './App.css';

import { Button } from 'antd-mobile';
import { useEffect } from 'react';

const worker = new Worker(new URL('./transcode.worker.js', import.meta.url));

function App() {
    useEffect(() => {
        worker.onmessage = (event) => {
            const { data } = event;
            if (data) {
                const video: any = document.getElementById('output-video');
                console.log(data);
                if (video && video?.src) {
                    video.src = URL.createObjectURL(
                        new Blob([data.buffer], { type: 'video/mp4' })
                    );
                }
            }
        };
        worker.onerror = (error) => console.log(error);
    }, []);

    const transcode = async (e: any) => {
        const { target: { files } } = e;
        const [file] = files;
        let name = file.name.split('.');
        const inType = name.pop();
        name = name.join();
        console.log(file.arrayBuffer);
        const buffer = await file.arrayBuffer();
        const outType = 'mp4';
        worker.postMessage({ name, inType, outType, buffer }, [buffer]);
        e.target.files = null;
    };
    return (
        <div className='App'>
            <header className='App-header'>
                <input type="file" onChange={transcode} />
                <Button color='primary' fill='outline'>
                    Antd Button
                </Button>
                <video id='output-video' controls></video>
                <br />
            </header>
        </div>
    );
}

export default App;
