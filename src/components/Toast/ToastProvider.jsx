import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
    return <ToastContainer position='top-center' autoClose={3000} />
};

export default ToastProvider;