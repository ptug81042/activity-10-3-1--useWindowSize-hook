import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import styles from './styles.module.css';

const WindowSizeDisplay: React.FC = () => {
    const { width, height } = useWindowSize();

    return (
        <div className={styles.container}>
            <h2>Window Size</h2>
            <p>width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
};

export default WindowSizeDisplay;