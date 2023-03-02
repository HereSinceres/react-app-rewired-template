import './App.css';

import { useBoolean } from 'ahooks';
import { Modal } from 'antd';
import { Button, Popup, Space } from 'antd-mobile';
import { useRef, useState } from 'react';

import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

import reactLogo from './assets/react.svg';

function App() {
    const [count, setCount] = useState(0);
    const [visible5, { toggle, set, setTrue, setFalse }] = useBoolean(false);

    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
    const bind = useDrag(({ down, movement: [mx, my] }) => {
        api.start({ x: 0, y: down ? my : 0, immediate: down });
    });
    // gesture.deltaY
    return (
        <div className='App'>
            <Button onClick={toggle}>Click Open Modal</Button>

            <Modal
                title='Basic Modal'
                open={visible5}
                footer={null}
                modalRender={(modal) => {
                    return (
                        <animated.div {...bind()} style={{ x, y }}>
                            {modal}
                        </animated.div>
                    );
                }}
            >
                <p>dsf</p>
                <p>dsf</p> <p>dsf</p> <p>dsf</p> <p>dsf</p> <p>dsf</p>{' '}
                <p>dsf</p> <p>dsf</p>
            </Modal>
        </div>
    );
}

export default App;
