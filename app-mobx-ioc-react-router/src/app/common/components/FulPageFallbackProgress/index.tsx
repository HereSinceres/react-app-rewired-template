import { SpinLoading } from 'antd-mobile';
import React from 'react';

export const FullPageFallbackProgress = () => (
    <div
        style={{
            minWidth: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <SpinLoading />
    </div>
);
