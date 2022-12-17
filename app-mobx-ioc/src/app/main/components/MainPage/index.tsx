import {speechIns} from '_common/utils/speak';
import {useBoolean} from 'ahooks';
import {Button, DotLoading, Radio, Space} from 'antd-mobile';
import dayjs from 'dayjs';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {CiBullhorn} from 'react-icons/ci';
import {HiMicrophone, HiOutlineArrowUturnDown} from 'react-icons/hi2';
import {TbCornerUpLeft, TbCornerUpRight} from 'react-icons/tb';
import {useInstance} from 'react-ioc';

import {
    AudioOutlined,
    CustomerServiceOutlined,
    DeleteColumnOutlined,
    DeleteOutlined
} from '@ant-design/icons';

import {NavigationRecordDataStore} from '../../stores/navigation-record.data-store';
import c from './index.module.scss';

type Props = {
    record: NavigationRecordDataStoreDTS.Record;
};

const Record = React.memo((props: Props) => {
    const {record} = props;
    const {time, isSpeaking, isWaitingSpeakInput, sucessResult, uploadResult} = record;

    const [success, setSuccess] = useState(-1);

    return (
        <div className={c.navigationRecord}>
            <div className={c.time}>{dayjs(time).format('MM-DD HH:mm:ss')}</div>
            <div className={c.voiceAction}>
                <span style={{fontSize: '18px'}}>
                    {!isSpeaking && !isWaitingSpeakInput ? (
                        <>
                            <CiBullhorn />
                        </>
                    ) : (
                        ''
                    )}
                    {isSpeaking && !isWaitingSpeakInput ? (
                        <span style={{color: 'red'}}>
                            <DotLoading color="currentColor" /> <CiBullhorn />
                        </span>
                    ) : (
                        ''
                    )}
                    {isWaitingSpeakInput ? (
                        <span style={{color: 'red'}}>
                            <DotLoading color="currentColor" /> <HiMicrophone />
                        </span>
                    ) : (
                        ''
                    )}
                </span>
            </div>
            <div className={c.row}>
                <div className={c.icon}>
                    <TbCornerUpLeft />
                    {/* <TbCornerUpRight />
            <HiOutlineArrowUturnDown /> */}
                </div>
            </div>

            <div className={c.actionRow}>
                <span
                    onClick={() => {
                        setSuccess(1);
                    }}
                >
                    <Radio checked={success === 1}>成功</Radio>
                </span>
                <span
                    onClick={() => {
                        setSuccess(0);
                    }}
                >
                    <Radio checked={success === 0}>失败</Radio>
                </span>
                <Button shape="rounded" color="primary" size="small">
                    提交
                </Button>
            </div>
        </div>
    );
});
export const MainPage = observer(() => {
    const navigationRecordDataStore = useInstance(NavigationRecordDataStore);
    const {list} = navigationRecordDataStore;
    return (
        <div className={c.page}>
            {list.map(record => {
                return <Record key={record.id} record={record} />;
            })}
        </div>
    );
});
