import React from 'react';
import './loading.css'; // Importa o CSS de animação

const Loading = ({ isLoading }) => {
    return (
        <div className={`loading-container ${isLoading ? 'enter' : 'exit'}`}>
            <div className="loading-spinner"></div>
        </div>
    );
};

export default Loading;
